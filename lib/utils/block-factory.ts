// lib/utils/block-factory.ts

import { createElement, ComponentType } from 'react'

type ComponentMap = Record<string, ComponentType<any>>

export default function blocksMapperFactory<TMap extends ComponentMap>(
  contentTypeMap: TMap
) {
  
  console.log('Content Type Map:', contentTypeMap) // Debugging log to verify the content type map
  function factory<TypeName extends keyof TMap>({
    typeName,
    props,
  }: {
    typeName: TypeName
    props: React.ComponentProps<TMap[TypeName]>
  }) {
    const Component = contentTypeMap[typeName]

    if (!Component) {
      return null
    }
    console.log(`Rendering component for type: ${typeName.toString()}`) // Debugging log to confirm which component is being rendered
    return createElement(Component, props)
  }
  console.log('Factory function created successfully') // Debugging log to confirm factory creation
  return factory
}