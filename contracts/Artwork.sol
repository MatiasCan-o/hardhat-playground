//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Artwork is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    // Keep track of the total number of NFTs minted.
    // Each NFT will have an unique Id.
    Counters.Counter private _tokenIds;

    constructor() ERC721("Artwork", "NFT") {}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner {
        // Increment the number of NFTs minted.
        _tokenIds.increment();

        // Set the latest Id for the NFT minted here.
        uint256 newItemId = _tokenIds.current();
        
        // Associate the address of the NFT owner with the id of the NFT
        _mint(recipient, newItemId);
        
        // Associate the NFT URI with the Id
        _setTokenURI(newItemId, tokenURI);
    }

}