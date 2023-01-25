import React from "react";

const ContextProviderComposer = ( { contextProviders, children } ) => {
  return contextProviders.reduceRight(
    ( children, parent ) => React.cloneElement( parent, { children } ),
    children
  );
};

export default ContextProviderComposer;
