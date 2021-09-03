import {
  createClient,
  createPreviewSubscriptionHook,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'nect-sanity';

const config = {
  projectId: "djs0h573",
  dataset: "production",
  apiVersion: "2021-06-07",
  useCdn: false,
}

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(sconfig).image(source);

export const PortableText = createPortableTextComponent({
  ...config,
  serializer: {},
})