import ContextProviderComposer from "./ContextProviderComposer";
import { HomepageStateProvider } from "./homepage/homepage.provider";

const CombinedContextProviders = ( { children } ) => {
  return (
    <ContextProviderComposer
      contextProviders={ [
        <HomepageStateProvider key={ "homepage_state_provider" } />,
      ] }
    >
      { children }
    </ContextProviderComposer>
  );
};

export default CombinedContextProviders;