---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI2OTR4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtL7NyKMhsVesXqujqI2nTck1d1qe%2FgDyh%2FutdoszIBAiAIO68KarT1zEsfO2qw186WeVMS8Z5jAZISROrFWug2VCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTiBP3%2BMdjJOzUHRLKtwDbed1x5j%2BSdtoNbLFxm2wHzbN353yWWP4K69gkm9OVk4aPJXliJabBz1qbqbPug9Vqrv9z2cAZgq%2FhRjjz3arGPA14x2%2F1fmvFt5EOAtEVn0b%2BzZ3yIL2zgOWHzOOWLB8T%2Bki%2FhGQTlxxPxOwBQ0T5IXcrs41D1pdJepkIAXwWsvVrP99xtb5AmBcTSecVQ3RTbZI1mpDw2P4sAxvz0yNsCAQr1uiyHRglcdFB5ZewASZtRDG%2F%2Ba%2FZksXlIrLVJyt6%2F%2B2BQ3XBwjSf5zNB4RaeVMmiAVhTCd8UsQQq8C7iSF26R5EbkmF8ggj2hHrqwa0moaXtAdIiizwWu97SaNVMU%2FLyexlYy0OMvuVzKMtmQgM0vHH4p21fyd0hRBhvmrEMd%2BP9rUPE0HsgXtpqgWz9GDaeRmqJu5POOpp1d44K2%2Fw6VbIBHvyWGebMeVw9v8x62i8bv27Y6mSuc13HYbhMihBDbQUFLnXd2AbdKCMMLkRpMuJTxuY9M2X2FHlUQsoSbhAEtv%2Br5jL%2BZ7KEmvKwF2GjsuG0mz%2BHo2xgKOhW2IlEVuCG1LMeR2LL1GLA%2FliCY1krFPQShyI9lAt9o0n5P2GEqGCh7TrD08nuGtdIQM5eq30e1tokVlGYxww%2BtKSwgY6pgGE8ku7em1VTgcLIwZrEBxMG%2FywFW%2FKZqzyanMfJqoEijFpRI9%2F5OdIjfsz4Ey%2BCXzZBH1COAQ8FbOtIRu01i436TyiVY%2BSHVAn%2FJZpLhjZHUYsikNPjthbeuSmDDCtHtNpjxx956lq7FNVr04xf2mrr31ILHGCLn9nESpgTFHDpfxEKCkXxQoHZI7i4NJSk8xhUHy3Jkwmk0iTGFKY0q7Xq7O1NBq4&X-Amz-Signature=5e870e09104687f454845c54dc6a547e2255ba7605584decb930d0681b3c11bd&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI2OTR4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtL7NyKMhsVesXqujqI2nTck1d1qe%2FgDyh%2FutdoszIBAiAIO68KarT1zEsfO2qw186WeVMS8Z5jAZISROrFWug2VCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTiBP3%2BMdjJOzUHRLKtwDbed1x5j%2BSdtoNbLFxm2wHzbN353yWWP4K69gkm9OVk4aPJXliJabBz1qbqbPug9Vqrv9z2cAZgq%2FhRjjz3arGPA14x2%2F1fmvFt5EOAtEVn0b%2BzZ3yIL2zgOWHzOOWLB8T%2Bki%2FhGQTlxxPxOwBQ0T5IXcrs41D1pdJepkIAXwWsvVrP99xtb5AmBcTSecVQ3RTbZI1mpDw2P4sAxvz0yNsCAQr1uiyHRglcdFB5ZewASZtRDG%2F%2Ba%2FZksXlIrLVJyt6%2F%2B2BQ3XBwjSf5zNB4RaeVMmiAVhTCd8UsQQq8C7iSF26R5EbkmF8ggj2hHrqwa0moaXtAdIiizwWu97SaNVMU%2FLyexlYy0OMvuVzKMtmQgM0vHH4p21fyd0hRBhvmrEMd%2BP9rUPE0HsgXtpqgWz9GDaeRmqJu5POOpp1d44K2%2Fw6VbIBHvyWGebMeVw9v8x62i8bv27Y6mSuc13HYbhMihBDbQUFLnXd2AbdKCMMLkRpMuJTxuY9M2X2FHlUQsoSbhAEtv%2Br5jL%2BZ7KEmvKwF2GjsuG0mz%2BHo2xgKOhW2IlEVuCG1LMeR2LL1GLA%2FliCY1krFPQShyI9lAt9o0n5P2GEqGCh7TrD08nuGtdIQM5eq30e1tokVlGYxww%2BtKSwgY6pgGE8ku7em1VTgcLIwZrEBxMG%2FywFW%2FKZqzyanMfJqoEijFpRI9%2F5OdIjfsz4Ey%2BCXzZBH1COAQ8FbOtIRu01i436TyiVY%2BSHVAn%2FJZpLhjZHUYsikNPjthbeuSmDDCtHtNpjxx956lq7FNVr04xf2mrr31ILHGCLn9nESpgTFHDpfxEKCkXxQoHZI7i4NJSk8xhUHy3Jkwmk0iTGFKY0q7Xq7O1NBq4&X-Amz-Signature=6a1493ba9f277bf03e787e2e5dd397a0f48e47f14f509a4e2f5b02b2ff4119d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI2OTR4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtL7NyKMhsVesXqujqI2nTck1d1qe%2FgDyh%2FutdoszIBAiAIO68KarT1zEsfO2qw186WeVMS8Z5jAZISROrFWug2VCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTiBP3%2BMdjJOzUHRLKtwDbed1x5j%2BSdtoNbLFxm2wHzbN353yWWP4K69gkm9OVk4aPJXliJabBz1qbqbPug9Vqrv9z2cAZgq%2FhRjjz3arGPA14x2%2F1fmvFt5EOAtEVn0b%2BzZ3yIL2zgOWHzOOWLB8T%2Bki%2FhGQTlxxPxOwBQ0T5IXcrs41D1pdJepkIAXwWsvVrP99xtb5AmBcTSecVQ3RTbZI1mpDw2P4sAxvz0yNsCAQr1uiyHRglcdFB5ZewASZtRDG%2F%2Ba%2FZksXlIrLVJyt6%2F%2B2BQ3XBwjSf5zNB4RaeVMmiAVhTCd8UsQQq8C7iSF26R5EbkmF8ggj2hHrqwa0moaXtAdIiizwWu97SaNVMU%2FLyexlYy0OMvuVzKMtmQgM0vHH4p21fyd0hRBhvmrEMd%2BP9rUPE0HsgXtpqgWz9GDaeRmqJu5POOpp1d44K2%2Fw6VbIBHvyWGebMeVw9v8x62i8bv27Y6mSuc13HYbhMihBDbQUFLnXd2AbdKCMMLkRpMuJTxuY9M2X2FHlUQsoSbhAEtv%2Br5jL%2BZ7KEmvKwF2GjsuG0mz%2BHo2xgKOhW2IlEVuCG1LMeR2LL1GLA%2FliCY1krFPQShyI9lAt9o0n5P2GEqGCh7TrD08nuGtdIQM5eq30e1tokVlGYxww%2BtKSwgY6pgGE8ku7em1VTgcLIwZrEBxMG%2FywFW%2FKZqzyanMfJqoEijFpRI9%2F5OdIjfsz4Ey%2BCXzZBH1COAQ8FbOtIRu01i436TyiVY%2BSHVAn%2FJZpLhjZHUYsikNPjthbeuSmDDCtHtNpjxx956lq7FNVr04xf2mrr31ILHGCLn9nESpgTFHDpfxEKCkXxQoHZI7i4NJSk8xhUHy3Jkwmk0iTGFKY0q7Xq7O1NBq4&X-Amz-Signature=4b21dc8b06686d828416158ad01a39f803b34e1843c238a97888afd1f29c8bff&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGRD54JE%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC40pPBJv5BCE8baFwfSZ8bZW5%2BioOAEwUqiblETWvgjwIgBbWT7wtsUudjaihxgm%2FxuzkLliWGq4VufLGdrg1MGYgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOqrrOSIeDqq1%2FAwHyrcAy5WOpDsUSkhysUMS7%2F5%2BymTp%2BvXErhqkCYpkS139p5LwArpUYo2LhPIHXZ7229HduJNyaJFPFtjtinq5D2HoInk7StiUJpNeZB6pFCQsdokhyBKPJgKEsEf2K6HfO7xPRc993nFgN0sXAj9NgMJXwo5YD1YrMzR298U%2FP5wtUsID%2BJOJiDMWD9ZqQkr16rMy1pSyHm8mGYZkOeqLtLVZHJRre0xdxy1yDT2%2FNksHu42M0m8RafGGtv74hkzeLUmq6Emv1JkEksmXJFNfSP713YhiUumWQxF%2FJnWEDdZwLgTKlPCJ5JCB1JmJAeutmMYdfN%2BCyPv8BXU5LVwApuWtjQnZPQQHJAek2u6ORVcy15TMlHJTCVITriLPegDJiLdZQUwtxUSbNx%2BbQfm3xYmPqatJU6T6w%2B5JRXC9m%2FKYTnKJWrxb01z46x5ssVjW6C9EBneiKrLYQs6e3V01khy3Fok850M%2BsUpi5OIbqFGwGoPFTrQ%2FmbgfnnlOwMKfYHcvGF%2B71pWyjNymVLavTiiJGEngXc0oUtBtodUughI%2FSpc58EC84jycFlSxCUi05si874WaBGtEn42jcXbmGZiF%2FSCqRX4tKgujM3QIRlkcpLaON7UbiqNQHCVmDPxMIrTksIGOqUBZOtdmircxHae9lgWgAarjxBeUD0lzCtayTS4JtJez2LiTlWyaol2nqja090xAnbrKo3bRjRQeDmOTnPCoUpClYPkPqxOB4rDV5m5%2Bkz6zU2eCM51pUrwTHGUONd0zEjHjCx%2FnRT%2FRv0iPXJA%2B7%2B7obZJSsHvs1bE2uW7TBHZpZo6KGMtVd8yEAQ3as3WaYWDchALqmYAGiC8Uf3Aab3v8adsQcHz&X-Amz-Signature=c60ea600b4f8b7c7c55d49f596bc3dc2db88f6a5bc3ec915a5df1087e30f2225&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5L5VCV7%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQPA0PTeGWbRp7Zy43moCYRR4uh0YgyMzLUuAEv8xrSAiAK2IsAPDB5E%2FuiYUwR%2F0gQpqb0U4Aiou2BjmNUuNfmwSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMnqDOSskbxoJPHsTzKtwDZ5l1WHB7w9OWj40iBRqYYjbmrmmFtx0mpF2W1tJ5jl9C5Gje6TQhwZwrR5Kqm8c7g5gxPhtgT0cSTxOP7l5Y%2B1H5HlM45MrQKrVNScP03DYkmE16fiLO8RA5BFvyHJr9u%2BB%2FHinuTyJd1rUuk%2F11tyGuhklqPEchx89DgmyOObHKvI35ZIp%2BI%2FdtgajstBeTmzmu%2BhEjYFmNZBpQTJDaDyy2wOZEhxCSDsiPOJdKOCsCKt9gT9Hv0yXaXWZky2fxv0AZzIHeSrSbQXB0jFDIR6rkJrAoTZ%2BnAla9ZDQts9uxSBjGFkKTUEq%2FACrLmr6cKgOR36zeKMf5nMwF5PcGmrDr%2FMAeKBm4u8yJKDkXfa%2Fubk2mBz9GIfQI%2FVVOIu77M%2BmG1CMH6Ua%2BvlieavbDKhroBXmKkbVcBmq%2FiBXG2I3oOZAaO31G%2FVJvIgA60ueG9NkkHHMjTo7bebij5UYRfSSxyS6tr68yPM9A2oeIPPRzXDZBIRzbPikps4elNffGUK10WsAneA8RBhghhIacmjGylUdNcDcEiNbcKYHeDd9ZdSr0iEj%2Bw3HBGDXS15zvORo0ib9uO2VbaGRu7XOn%2FXUC3WrW1NeI%2BOwG4xvNyxAfnowJUpmLs%2BxjLDUw6tKSwgY6pgGo211gbR0yCK2%2FAHF4cLJ1dKnAz5g%2BD2ymMov1h%2BKXMfwd8mpc%2BdWbjobDE30PlhRFOQJCrS4yf50MOfZpT8VIbFSXcGJer9v0OEWzpe%2FCJm4fQ%2BGgYPrlNQl%2Fbjg2eeapMUAqkwwiBLijRY7K3qZ8LOcgeEAJldHlHnUHD9lL8kyOFr%2F2msDJFpLv43Slqk67Lxhf0KntNuGevj6snc3mFZNo%2FZxk&X-Amz-Signature=5cddbd071e161eda7557a5e017b85200e72ff966332ef858756cb74c73a89102&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YI2OTR4%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtL7NyKMhsVesXqujqI2nTck1d1qe%2FgDyh%2FutdoszIBAiAIO68KarT1zEsfO2qw186WeVMS8Z5jAZISROrFWug2VCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMTiBP3%2BMdjJOzUHRLKtwDbed1x5j%2BSdtoNbLFxm2wHzbN353yWWP4K69gkm9OVk4aPJXliJabBz1qbqbPug9Vqrv9z2cAZgq%2FhRjjz3arGPA14x2%2F1fmvFt5EOAtEVn0b%2BzZ3yIL2zgOWHzOOWLB8T%2Bki%2FhGQTlxxPxOwBQ0T5IXcrs41D1pdJepkIAXwWsvVrP99xtb5AmBcTSecVQ3RTbZI1mpDw2P4sAxvz0yNsCAQr1uiyHRglcdFB5ZewASZtRDG%2F%2Ba%2FZksXlIrLVJyt6%2F%2B2BQ3XBwjSf5zNB4RaeVMmiAVhTCd8UsQQq8C7iSF26R5EbkmF8ggj2hHrqwa0moaXtAdIiizwWu97SaNVMU%2FLyexlYy0OMvuVzKMtmQgM0vHH4p21fyd0hRBhvmrEMd%2BP9rUPE0HsgXtpqgWz9GDaeRmqJu5POOpp1d44K2%2Fw6VbIBHvyWGebMeVw9v8x62i8bv27Y6mSuc13HYbhMihBDbQUFLnXd2AbdKCMMLkRpMuJTxuY9M2X2FHlUQsoSbhAEtv%2Br5jL%2BZ7KEmvKwF2GjsuG0mz%2BHo2xgKOhW2IlEVuCG1LMeR2LL1GLA%2FliCY1krFPQShyI9lAt9o0n5P2GEqGCh7TrD08nuGtdIQM5eq30e1tokVlGYxww%2BtKSwgY6pgGE8ku7em1VTgcLIwZrEBxMG%2FywFW%2FKZqzyanMfJqoEijFpRI9%2F5OdIjfsz4Ey%2BCXzZBH1COAQ8FbOtIRu01i436TyiVY%2BSHVAn%2FJZpLhjZHUYsikNPjthbeuSmDDCtHtNpjxx956lq7FNVr04xf2mrr31ILHGCLn9nESpgTFHDpfxEKCkXxQoHZI7i4NJSk8xhUHy3Jkwmk0iTGFKY0q7Xq7O1NBq4&X-Amz-Signature=d4c1dd09c4d891c732784e66a34dae953795a3cafb84f26b253a9657510bb8de&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
