import { NFTStorage, File, Blob } from "nft.storage";
import { Token } from "nft.storage/dist/src/token";

const useUploadToNFtStorage = async (
  base64Img: string,
  description: string
): Promise<
  Token<{
    name: string;
    description: string;
    image: globalThis.File;
  }>
> => {
  const NEXT_PUBLIC_NFT_STORAGE_TOKEN =
    process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN || "your token here";
  const client = new NFTStorage({ token: NEXT_PUBLIC_NFT_STORAGE_TOKEN });

  const imageFile = new File([base64Img], "nft.png", {
    type: "image/png",
  });
  const metadata = await client.store({
    name: description,
    description: description,
    image: imageFile,
  });

  return metadata;
};

export { useUploadToNFtStorage };
