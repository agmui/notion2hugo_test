---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJ5XKP3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCaTNNmCQY%2FGZtIuWGSbTK64O8OAPKduAzDEII8RejQIgYjQERexYAvZO4hLCIfyxEEoQXNbfwWcZNEBZCaLJPxAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIR2aQozlya7OjdaSrcA4DkWzUDT6IW8qotCcqBF%2FgFgh5SrrJk9kOwr45PrcCJsPFRPp%2FZgeD7kDx0fhR%2FkFvWUZvLCZMaUvdWc6X26NlUrONSQjP6GierYfpIi%2BMdDn%2BIZVEngYVbzjZX%2FBxbD%2FLLFGHLBD9Lm%2F0uEXzhRN91hlak5hyHYoJtktSP8r%2FPcKHRFSRgA1dTV%2B%2BG%2BV0xQa5x%2BFWWEuNLPuHkfJ2FiaLD%2FnpfnY4EA78TPuuafBGR7jsNaRBejhQvctdPsT3yjSM07yOdZvfTc9Hk%2BnaRbVniQn4YBkAknMWfJkhXJxXjnpiHFsEunkXLWczOi5nrOlhXHhgYmbP1hZZJhNxC7g%2FhqRKQcLDBxTwYHz4mv1qt25ApVPOTiyZYR7ATsNYgBjMoD1Mmg5TAA%2BuAFYa2%2BBYcjQlVJ2N3R8p8aZfBHq9FMSEVw6B1gl3DjcPCStcqpLHuCd9AikJXYmGfXodEUazQwv6oWqD90pVujl%2FGyxOqc6VPAMsrVrXJwcayVL8tMuxr1Y8Kr27PSeZ89F%2FEQxSWF6JevRwfj5bMSBIdRUnX3%2Fv%2BVsx0Cb5%2BFYufeMMGM2W6j5dJ%2BvQ2djgR58dOc4Sz0rBPj1dnsvLNzffGSqPATb6DeIBXd5MWOfBGMMWnwsAGOqUBpKbbPKtVQMKJPDB5pbSD%2B1ridCguBDOzKjA2%2FAS5OwdYuitdCgTqqk2%2FewDP5IlaH79eBsbD2DCm9OSZ08AMrFNgGv9GZAeyms3TFcg9tN3cC7LLR0QtmBKULbeY8q3zV6RxNRL1vF8x3tL2FWOzkYSVHcMTdvVAiHVPXEg8N4Fr1fpvAjQm36j%2FGXStgbqujYBPj%2BF0QAJr1dZu2xRg0sEkJ5kr&X-Amz-Signature=976843743264d1b868abc9e3a63cf3995737b4cdd5540d6203cb953a6ac756e4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJ5XKP3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCaTNNmCQY%2FGZtIuWGSbTK64O8OAPKduAzDEII8RejQIgYjQERexYAvZO4hLCIfyxEEoQXNbfwWcZNEBZCaLJPxAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIR2aQozlya7OjdaSrcA4DkWzUDT6IW8qotCcqBF%2FgFgh5SrrJk9kOwr45PrcCJsPFRPp%2FZgeD7kDx0fhR%2FkFvWUZvLCZMaUvdWc6X26NlUrONSQjP6GierYfpIi%2BMdDn%2BIZVEngYVbzjZX%2FBxbD%2FLLFGHLBD9Lm%2F0uEXzhRN91hlak5hyHYoJtktSP8r%2FPcKHRFSRgA1dTV%2B%2BG%2BV0xQa5x%2BFWWEuNLPuHkfJ2FiaLD%2FnpfnY4EA78TPuuafBGR7jsNaRBejhQvctdPsT3yjSM07yOdZvfTc9Hk%2BnaRbVniQn4YBkAknMWfJkhXJxXjnpiHFsEunkXLWczOi5nrOlhXHhgYmbP1hZZJhNxC7g%2FhqRKQcLDBxTwYHz4mv1qt25ApVPOTiyZYR7ATsNYgBjMoD1Mmg5TAA%2BuAFYa2%2BBYcjQlVJ2N3R8p8aZfBHq9FMSEVw6B1gl3DjcPCStcqpLHuCd9AikJXYmGfXodEUazQwv6oWqD90pVujl%2FGyxOqc6VPAMsrVrXJwcayVL8tMuxr1Y8Kr27PSeZ89F%2FEQxSWF6JevRwfj5bMSBIdRUnX3%2Fv%2BVsx0Cb5%2BFYufeMMGM2W6j5dJ%2BvQ2djgR58dOc4Sz0rBPj1dnsvLNzffGSqPATb6DeIBXd5MWOfBGMMWnwsAGOqUBpKbbPKtVQMKJPDB5pbSD%2B1ridCguBDOzKjA2%2FAS5OwdYuitdCgTqqk2%2FewDP5IlaH79eBsbD2DCm9OSZ08AMrFNgGv9GZAeyms3TFcg9tN3cC7LLR0QtmBKULbeY8q3zV6RxNRL1vF8x3tL2FWOzkYSVHcMTdvVAiHVPXEg8N4Fr1fpvAjQm36j%2FGXStgbqujYBPj%2BF0QAJr1dZu2xRg0sEkJ5kr&X-Amz-Signature=e20d4e6046c6d9eb46832ba95c325654ddad411e221709fc1862af65f997ef67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SEHVWF2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSiipcO7hM50rxH3lbLLODLzLkhA4Wjx2pFzPkp1n8FAiEA3SltGQ%2FQpHyvN59e4OClr3jEZAPjU%2FYC8vJz1tHZ488qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU1fKH7MT1qBUinvCrcA5p26ndQwN4i41kRKjDJ9mRUUNFOfNSmZo3T6b3qiX5XcJryd%2Fm25KovlQrUXqGsqxO5PbR1s%2FmnaJBoEgOiYhp7Yi5qCRqPBPPgQD0cUpjwv20ZTUUEFY6I0RRwTx%2FQSxrSW0MTluAsVzblkSa9ANUZCa7u%2FsZjG1femV1AewPY78uUClCYAgnQQwvGpiiEj05t7xsDQryP42U44BRqku8vlLiQe3F0RmSHXsIvgLDXqrOgqpH1Tv%2FZNPjN4hdptBtcVJ6AoKW8fhaKc4guKUlTjhcpxpQQSnfmq%2FY%2BDvyuhEbQUQlWx9AMTLj%2FN5OixFPxar5sHRX%2B5UfckEAifJl02BTNWZCbJWoXExPNIvifAHvIlBsax2QccuVUUiykMRtt5ZO3iMsNBfmK4s7chOAubPL8XB5ykKF%2B8gZ%2BVybtcn7PVB6yWAJmOo42ArhF48%2BQA0jNndh4Db%2BPG2pxeEBQkw6Hrb8ypiSyc9VDkno%2FpNlqftxEnrM2WzIf7JSa0Gmrz3k8JeMxXjyg%2Fs3zhI12HjG8rgDFjTXZgR8XvRpq%2FP3ID%2FAIEsThp%2BbbEoCqF3LGRAHd89%2BoCJMg9ZTvN%2F7mS%2FoHe1gG5LBHQCguDe9nhKAtHKsE0Z9N1GFeMJqowsAGOqUBaqA8TgiDlvahjiwJli9gUXP7m29ORszM%2FoecqFztk%2B2lMIze8BBW4vebTI4o%2BuVJfSfvMaI%2BK3UiEyi4lD2Jk%2FoGRxAFckg5e7N3ByF77Ad6EYNYsEARE2Vvoi5ZWddn4KPKKFOoJ6w0E2U8FMl1LlaDc%2BOfnLlD85vIKYxWsrhdei4kq6I%2FSEgGC%2BVnFW2WuouFma0oqkUKQrxqlePoyZe9aIfP&X-Amz-Signature=a02c12adc26a204a147f8aa05ea0215946c9b1258dcbeafbd00d688d8a3a9fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W32RAEQZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMKj9wncrcGaohsrzZPas7e4LBDzMR165174Q0NXy8bAiEA4peFSFJFAwbS9Vpd%2B4b5nNct72bMkCC0%2BmNmRmydZxoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEy8EueYilLxgUM3ircA6zRLfdHr7exkQNYei8P1B5M2lpqRI5iGZv3yHZDWScn4J9QJnAZC7Fwv9w%2FuxUh%2BbuEIk%2BDtvbyTiCfkI2gwBep%2Fu%2F8qP%2F%2F9zte1CK18sTFpZ6rL5HRyYa%2F5VehpE44aGruEgWcpas4Cq026x4X2wMj%2Fw%2B92rCjEwNhKthaI9EqBStJTFqVqzeCEjCA6ObUvLRSCpPNd7%2B9lJ1jJ7yQHQl4Yl76%2FONyOPqNEOZGslgxf2gl59hFCwPsJPBWySaXXmp7tpjtN8384e7eKb23UEQ6dvhRs98Pdgs3J0PxT67OdeAgMWmEI8wydWLcSmCf0vFavsC8FTgD4VSho0vey2CyrgNlDimwu0SEBvqamL8QwugHPc5FNcXLNjfeWTRIY6hsImujJ4Pu1e4lCUKV5HplW0hVnjQV2ZZV0E4%2BfJYnqaZgvSVENCGct3BzeU240rNu7wBKo48j53l%2B6pFzjKuRKCLyROZGd6ddhrwGFRUpskBc9MMqvCKvjZQtbqE2NaWWsGrRdWCY0SNhAEZJ5YXhScWM8B6ejMjqqUkjTpKUlLZ40bGCIyCaU8e6h3kF%2FJ8pIW%2B6kyDtl9o2xXU2evSyhfT05EDv0Yul9aBZFmNUHvefoBoBHzipOzH3MMSnwsAGOqUB5VnJ4wM62hgnZ3v8727cCow7%2FqkTIFYW7dd1Lo0smHjA5q7xs%2BqoB7lt7jN3PxFOLi77g57WI12bikm5g%2BN0E8Oq1BR4UWooZo6LlEjFQwbo%2FJIxyZgmAccnnre4JQrXSlTnVefSYTTRwJZJESdpvnOiljBmHl4EF0wz%2FmzsVPrqyLca7su4OVysugpbBl6Z7bGRX9DJMpRSPjQCeiY8DrxIPca8&X-Amz-Signature=953b0d33bb1e53eae9b4ce5aa8869d444802273eaf9231b7dfcb9bfddb5ef883&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMJ5XKP3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpCaTNNmCQY%2FGZtIuWGSbTK64O8OAPKduAzDEII8RejQIgYjQERexYAvZO4hLCIfyxEEoQXNbfwWcZNEBZCaLJPxAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIR2aQozlya7OjdaSrcA4DkWzUDT6IW8qotCcqBF%2FgFgh5SrrJk9kOwr45PrcCJsPFRPp%2FZgeD7kDx0fhR%2FkFvWUZvLCZMaUvdWc6X26NlUrONSQjP6GierYfpIi%2BMdDn%2BIZVEngYVbzjZX%2FBxbD%2FLLFGHLBD9Lm%2F0uEXzhRN91hlak5hyHYoJtktSP8r%2FPcKHRFSRgA1dTV%2B%2BG%2BV0xQa5x%2BFWWEuNLPuHkfJ2FiaLD%2FnpfnY4EA78TPuuafBGR7jsNaRBejhQvctdPsT3yjSM07yOdZvfTc9Hk%2BnaRbVniQn4YBkAknMWfJkhXJxXjnpiHFsEunkXLWczOi5nrOlhXHhgYmbP1hZZJhNxC7g%2FhqRKQcLDBxTwYHz4mv1qt25ApVPOTiyZYR7ATsNYgBjMoD1Mmg5TAA%2BuAFYa2%2BBYcjQlVJ2N3R8p8aZfBHq9FMSEVw6B1gl3DjcPCStcqpLHuCd9AikJXYmGfXodEUazQwv6oWqD90pVujl%2FGyxOqc6VPAMsrVrXJwcayVL8tMuxr1Y8Kr27PSeZ89F%2FEQxSWF6JevRwfj5bMSBIdRUnX3%2Fv%2BVsx0Cb5%2BFYufeMMGM2W6j5dJ%2BvQ2djgR58dOc4Sz0rBPj1dnsvLNzffGSqPATb6DeIBXd5MWOfBGMMWnwsAGOqUBpKbbPKtVQMKJPDB5pbSD%2B1ridCguBDOzKjA2%2FAS5OwdYuitdCgTqqk2%2FewDP5IlaH79eBsbD2DCm9OSZ08AMrFNgGv9GZAeyms3TFcg9tN3cC7LLR0QtmBKULbeY8q3zV6RxNRL1vF8x3tL2FWOzkYSVHcMTdvVAiHVPXEg8N4Fr1fpvAjQm36j%2FGXStgbqujYBPj%2BF0QAJr1dZu2xRg0sEkJ5kr&X-Amz-Signature=6c1b5d94731d42c23292551045acbc0472e833c27a01a260f53faf7d7950ae82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
