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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKDO5FF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDMdAd%2FD1z7aXjmropfNFXB2PpSuR9oHdTu2PHz8lHNZwIhAK2T9BNDqu0J8KCH9LoE7BWjarFCeIwmMps%2FDFC23SvyKv8DCGYQABoMNjM3NDIzMTgzODA1IgweiD2sZArNbNghE8oq3APlGxjnrsfhdt73SS5vXqpHvsOrh3yk4OD%2FkqcVs0INeJmGmxbovKz2fVYJP%2FGMw8ByzdyXBnM5nqzjFl5OfjplgTcRfV5AMtdEhvcBE1XR0v1VhJqL%2BcDQRCeUoZ05D6Wrog%2B3eKNtUdUwzrw%2FWmp6Rn%2FbzMtogSw6RGyeQxlja2VKCwmZy3d%2FuqI6QddV5SFXBf9QkzTe7LMgXazLYimk24mzj%2BL1%2BEglr7EIcgs%2B2PBsurOiMsIt03PJjLPVFBplZQIhC1B1lxympLF%2FBL7U6%2FJxgr2VsqZ7EwNdW0lZQnRF6tOW%2Fv8v6TxU%2B23r4ULl%2BBtXcANgcUxqtUmXKgf5Y5gLr7g%2BvyC8gfcL345nZjx06FmRIomurAF8I2OClLN6IxLllmDVoE9opv7JAwuSrACYg2pyZNBgMLUaBgTiWmRUL%2FP5pA5tnBfJDCcigt0S30B1huctTiaWsv5JFGjdKmpPUv8rZmQRvLnVOSPYN5UB3HiRQlRtH2fOVoe%2BTFTB7UgHB6kDggbZxSl2KBvgt9TERIB1Wpk9jPM3X3C4HWwtW4CoVNwI1IL%2FV6U9wzez%2B649NSsaAFnmOtavwusxCQheXMStAclKzeMSZl3dJ5Z2fk13qHEWUIZAxDDzpMm9BjqkARhbBfUAEad8eRCLJosm5ZgtNjCkVA%2B0VmsDiGOiltjKFNCOohrpfKggdBzNIl8HF%2By0QnvIY7C7%2Bor1d9zAJ%2Fm5KquBSoH0jid8JsrZ1NhqnW7c2J9tTpCHsq5Fuoa1lPHK6eHgS1eyayu5I4i16lW6AUhTEuwCEGxgEAOA6vF7yyUgWJ%2BbmBiHcIywoya6Fr2mV2HaB1yHuJAf5cl8l2WN7Nsf&X-Amz-Signature=b6378287b6844f1a6fd0fc9dbf9019a540184b276649988bf5f892693d9f4693&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKDO5FF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDMdAd%2FD1z7aXjmropfNFXB2PpSuR9oHdTu2PHz8lHNZwIhAK2T9BNDqu0J8KCH9LoE7BWjarFCeIwmMps%2FDFC23SvyKv8DCGYQABoMNjM3NDIzMTgzODA1IgweiD2sZArNbNghE8oq3APlGxjnrsfhdt73SS5vXqpHvsOrh3yk4OD%2FkqcVs0INeJmGmxbovKz2fVYJP%2FGMw8ByzdyXBnM5nqzjFl5OfjplgTcRfV5AMtdEhvcBE1XR0v1VhJqL%2BcDQRCeUoZ05D6Wrog%2B3eKNtUdUwzrw%2FWmp6Rn%2FbzMtogSw6RGyeQxlja2VKCwmZy3d%2FuqI6QddV5SFXBf9QkzTe7LMgXazLYimk24mzj%2BL1%2BEglr7EIcgs%2B2PBsurOiMsIt03PJjLPVFBplZQIhC1B1lxympLF%2FBL7U6%2FJxgr2VsqZ7EwNdW0lZQnRF6tOW%2Fv8v6TxU%2B23r4ULl%2BBtXcANgcUxqtUmXKgf5Y5gLr7g%2BvyC8gfcL345nZjx06FmRIomurAF8I2OClLN6IxLllmDVoE9opv7JAwuSrACYg2pyZNBgMLUaBgTiWmRUL%2FP5pA5tnBfJDCcigt0S30B1huctTiaWsv5JFGjdKmpPUv8rZmQRvLnVOSPYN5UB3HiRQlRtH2fOVoe%2BTFTB7UgHB6kDggbZxSl2KBvgt9TERIB1Wpk9jPM3X3C4HWwtW4CoVNwI1IL%2FV6U9wzez%2B649NSsaAFnmOtavwusxCQheXMStAclKzeMSZl3dJ5Z2fk13qHEWUIZAxDDzpMm9BjqkARhbBfUAEad8eRCLJosm5ZgtNjCkVA%2B0VmsDiGOiltjKFNCOohrpfKggdBzNIl8HF%2By0QnvIY7C7%2Bor1d9zAJ%2Fm5KquBSoH0jid8JsrZ1NhqnW7c2J9tTpCHsq5Fuoa1lPHK6eHgS1eyayu5I4i16lW6AUhTEuwCEGxgEAOA6vF7yyUgWJ%2BbmBiHcIywoya6Fr2mV2HaB1yHuJAf5cl8l2WN7Nsf&X-Amz-Signature=0c66b457236c835be239f96b7eb47acac47f61cfe0d83e61e5d39849149e03dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5CRZG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD5zacPZUjMskoecAiT9ZO8ihegSP3AwO3fn2JexvLa%2BwIhAM8U0KECjkM78FZyhWOtGPqbKZXc84hrNcLJlw%2BScrIpKv8DCGYQABoMNjM3NDIzMTgzODA1IgzCVVXhikQJQNm3iI8q3AP9eOmFd63Brpa2qyvNwGuE6fsQWStd5bUgfwrNKNsNy7xLj9OOQ4AtpvFcPtzc8jSsH2byXvgiFC%2FZjKZNmb%2B%2FrPiuOu2foVWIqK8VCNTwNuDoZO4t2WIQgCYTL%2BzxQLFgX8fHmDnM6POVgsTIkiremdS5OuiiAqYfOvhvSVqnxOV3lh2FqY%2BVOvcr39hLki0VQPwbhp6FwoaPipyCYtALf5096LORcn7RzE4iyxSjHX5fFrQ06ootXHgsuk%2Bha4Lf%2F5Of%2FxTgng2pOtYOOGS6CQps7K8c8hi2dDLAbANqWvFo%2Bcv5UIYKRF0q%2FCfpcjQxPrBrJQ25gY%2FgVfk7DDFtsP5KUN%2F7b7wzSVBLmFaPp50ABspXGEoiKoHCfXuCu%2FFOoHQoGGZuOml5KCfyiukLA7VzsqRRsLDDnhAzdv49CfYJ3JmWKJG493TMZo3J4DRzMkq%2B4EB1JMm2q7TZX40FrLiNvpI9d85L1NIDIGqaMAsOqYJhW25LxI8F9HVzU7zyhcsTi5jAcTGvpsgHraoxQFsIzdz1p8vGjTzVhOE12sFxWk5Pn1tyLkwu2YsQMhA%2BG6WaB0q1OcwrSdkbkSVD02PkFH8aMHvFViW2G1BIlORxwVEA4jiWQv%2F9mTDIpcm9BjqkAfsbHse9DFDsOP46rniz47TmKhXuezDbBYRy%2FElFNE9K0bLkG08Hs1G9H4JUEgZv0e7KpVwm6jR5Lc%2BJY9m%2BjURS9BBnBj4Dve4p9ogOu8q9p1pb5mz%2BB2UXInLt6euXXe3YSl9x2ZUGHjBQFaT173lGWfTj02ZOKS3OaMLlWPiQ%2BZNkP1163y%2FrlJRgPZv8YT05Sj3EvwdlijnMXfpIGqJ1bFKq&X-Amz-Signature=f96c72b047e33f6b4d1835f5ed9aea163c05a44db74984b3e1be7b5c326bccbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJTY7KC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCFOkTQRRiXq0j54XeQlOySqR5AC4HqyvtB4RF6E%2B4sxwIhAMcEKVIl2ZxjI%2BFWA%2BqR05YEHX8x9utEOe2i%2BE1omkcQKv8DCGYQABoMNjM3NDIzMTgzODA1IgwuGHNBvemMwcNXY%2FMq3ANzsWxQg%2FmE%2FleVhJqnDihGvwxxRANARUoKG1QOpkNvriA5dl8d8psStTQFOzNsOEJ4FkFXlk7UKiGXtL6C8zBC2xyctpdHY1OISLqLPYhwcAUdd3SdeyYeyNYHnFtyt0t7OTIETv%2F%2FVZF%2B5B%2FmAvdP82exQxYIWhUbJVcNlWIqxO1N3r%2BIw6Wo5QwZKcKL3MnjO%2FSqWAiJEyEc8wYyM7P2Ft4FkFZDBLyLi%2Fv%2BpgUwCXfOn4YdY1%2BIuVgTj1Y8vYth8Nr0hmrOGj0YekdZObw9AefsL4dvhwjG2U4zMLoFY0I4CWZaFVJYTrjI7o2S6q6Sjj%2FCMKYm9SNgeq1ns77z4wj6rXx%2F2lf3ng1zzAy%2B6pzZqFxUN0UuVcZX81EaHc5oNKVpglLDtfdh9eEXKhuCYyPyibMWJ9s3F1elBvi%2BS%2BtIcM0KbvTgJ6DXLtD1nHcoEIbbxixHtTUL6X0vV%2Flx5ON3wSR4I2y%2FnZTJJTuSCmc9wYcVjoZslRVCNuzKa2HqDuFMeB2%2BeeZtI5GSrykC%2B5uW6c3MDA3IvIQhbjIRm1upWKG2bM1z22UErDSCntrkiv7XizAUpnkArcaAG%2BRsPMhbXt01yduazaRFVY56Q0T9H84UIhOqFiToRDCrpMm9BjqkARNQHsizf6dVpJs7XDgsWbvGSP%2FbCpeAuHsNPHVF2jDsDWvNQodgtrbGQT01ZwXRc1sdrY%2BNX6hTh3Utow0qu3xTzNeAGDY9dILrtr4q546eZAsOQyloZx2dCvjt%2FlpvrcRPp01upnCr%2Bzu%2F2OFGcUibT1H3uo70jxOmXRQ7ec%2FLuL%2FXalc3tOKHLsGxNu7bqN60j3r7VQMPCN4YE46wPAF26kwM&X-Amz-Signature=5053f752273c5b0e776c9e7a602c41babeb88542c236f2a081bbc0a7c701a1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LKDO5FF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDMdAd%2FD1z7aXjmropfNFXB2PpSuR9oHdTu2PHz8lHNZwIhAK2T9BNDqu0J8KCH9LoE7BWjarFCeIwmMps%2FDFC23SvyKv8DCGYQABoMNjM3NDIzMTgzODA1IgweiD2sZArNbNghE8oq3APlGxjnrsfhdt73SS5vXqpHvsOrh3yk4OD%2FkqcVs0INeJmGmxbovKz2fVYJP%2FGMw8ByzdyXBnM5nqzjFl5OfjplgTcRfV5AMtdEhvcBE1XR0v1VhJqL%2BcDQRCeUoZ05D6Wrog%2B3eKNtUdUwzrw%2FWmp6Rn%2FbzMtogSw6RGyeQxlja2VKCwmZy3d%2FuqI6QddV5SFXBf9QkzTe7LMgXazLYimk24mzj%2BL1%2BEglr7EIcgs%2B2PBsurOiMsIt03PJjLPVFBplZQIhC1B1lxympLF%2FBL7U6%2FJxgr2VsqZ7EwNdW0lZQnRF6tOW%2Fv8v6TxU%2B23r4ULl%2BBtXcANgcUxqtUmXKgf5Y5gLr7g%2BvyC8gfcL345nZjx06FmRIomurAF8I2OClLN6IxLllmDVoE9opv7JAwuSrACYg2pyZNBgMLUaBgTiWmRUL%2FP5pA5tnBfJDCcigt0S30B1huctTiaWsv5JFGjdKmpPUv8rZmQRvLnVOSPYN5UB3HiRQlRtH2fOVoe%2BTFTB7UgHB6kDggbZxSl2KBvgt9TERIB1Wpk9jPM3X3C4HWwtW4CoVNwI1IL%2FV6U9wzez%2B649NSsaAFnmOtavwusxCQheXMStAclKzeMSZl3dJ5Z2fk13qHEWUIZAxDDzpMm9BjqkARhbBfUAEad8eRCLJosm5ZgtNjCkVA%2B0VmsDiGOiltjKFNCOohrpfKggdBzNIl8HF%2By0QnvIY7C7%2Bor1d9zAJ%2Fm5KquBSoH0jid8JsrZ1NhqnW7c2J9tTpCHsq5Fuoa1lPHK6eHgS1eyayu5I4i16lW6AUhTEuwCEGxgEAOA6vF7yyUgWJ%2BbmBiHcIywoya6Fr2mV2HaB1yHuJAf5cl8l2WN7Nsf&X-Amz-Signature=7f8d3c47b180a488a55f0dc8ae5c850aff8a7e3ed1d87c25e1d726f68c8352ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
