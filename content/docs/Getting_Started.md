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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6HMMNV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTj7ZD15yNjppG%2FfCNaTRZz9P4EmJELuN%2BRX1vVQgzYwIhANZLY%2F8d9aDvzJdzwULa8EBNIcED51nYmi20UB0nx23qKv8DCBUQABoMNjM3NDIzMTgzODA1Igyi%2BIKEg5yf7C0aYuQq3AO%2FZHbjxi2It4UbuxP0xqMHNwqDCs0R2kSPI0s%2BhtILZHb6Llw5tO5eZGPSeMQy3YXk9mdzJtEpYvSourg7pEEklIEW9VAq2fVnveyfIiTHP6NFj3tRExB85njwMzyydvBKdWSiEFtLeKb8KD5b2%2BjWbf6HJBe584pHQVl3sobhyhFGAvmnOjSh6qDt2lXHflebymCj9ivR9b7e3y0Ev0j2HaGGSHDJO084TItOYnLJTNAveG5SE8LYQcwWu%2BHTNyo%2BNmgpB4rUYrRIiInW69Ys6OaZvVhMfiHQVJkCcIw%2B3txuwYZv4qQoaeWQ9K5KiA66pZTxXPysiEVRf0jlbKFAxcG3on8VyE%2FTDwY9psMx6g9GZ16tvaYatIyNmPbyaR5Hl7077Nb8UlMc3SZnIs76IgMnbUAADfGlMIjwIwZAGaZ0kpba%2F0GIPVaeleKTSxrGPtIiUzFif2SYZF9uLwdwLlPCny1RdVi6PeUaPe8CoVrzgUtrmYDiNrqqLBptEmcostWIjS8OATELcoXwoejl4BgBGlx%2Bz3bE3f33rA7rP1jZkd2GklwwBD%2FP0mvfSpc5gekAJ%2F4VZWshlvg2olVWsyYQzOxMaiTu8hfOexweddqtZViHB7v30N5IkTCo1IK9BjqkAVLcYszeSXj6uw9tTllU6BfMNL8a0CKzaDsFCEHATO3rZZPLthXT0Be%2FDJUTDMOVGa%2FyWQs2K7TaMvLUhE1udPoAjnVAlnQKqbCo%2FqLjkjbqQ4fTEYX97YDpaSkT%2BIKhl5NKNCKYxsUueeRaxLZktleTvl2YLSw7UluKUYCVZs5lLo3fpHC4QjxO5B791LTZj2dL5sSN0efpa1bOGq3fkFt%2Fnann&X-Amz-Signature=61f8a07db668e34a72b24acf3dbce2ee29ba8e348b4e0699e38155fe29e0e375&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6HMMNV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTj7ZD15yNjppG%2FfCNaTRZz9P4EmJELuN%2BRX1vVQgzYwIhANZLY%2F8d9aDvzJdzwULa8EBNIcED51nYmi20UB0nx23qKv8DCBUQABoMNjM3NDIzMTgzODA1Igyi%2BIKEg5yf7C0aYuQq3AO%2FZHbjxi2It4UbuxP0xqMHNwqDCs0R2kSPI0s%2BhtILZHb6Llw5tO5eZGPSeMQy3YXk9mdzJtEpYvSourg7pEEklIEW9VAq2fVnveyfIiTHP6NFj3tRExB85njwMzyydvBKdWSiEFtLeKb8KD5b2%2BjWbf6HJBe584pHQVl3sobhyhFGAvmnOjSh6qDt2lXHflebymCj9ivR9b7e3y0Ev0j2HaGGSHDJO084TItOYnLJTNAveG5SE8LYQcwWu%2BHTNyo%2BNmgpB4rUYrRIiInW69Ys6OaZvVhMfiHQVJkCcIw%2B3txuwYZv4qQoaeWQ9K5KiA66pZTxXPysiEVRf0jlbKFAxcG3on8VyE%2FTDwY9psMx6g9GZ16tvaYatIyNmPbyaR5Hl7077Nb8UlMc3SZnIs76IgMnbUAADfGlMIjwIwZAGaZ0kpba%2F0GIPVaeleKTSxrGPtIiUzFif2SYZF9uLwdwLlPCny1RdVi6PeUaPe8CoVrzgUtrmYDiNrqqLBptEmcostWIjS8OATELcoXwoejl4BgBGlx%2Bz3bE3f33rA7rP1jZkd2GklwwBD%2FP0mvfSpc5gekAJ%2F4VZWshlvg2olVWsyYQzOxMaiTu8hfOexweddqtZViHB7v30N5IkTCo1IK9BjqkAVLcYszeSXj6uw9tTllU6BfMNL8a0CKzaDsFCEHATO3rZZPLthXT0Be%2FDJUTDMOVGa%2FyWQs2K7TaMvLUhE1udPoAjnVAlnQKqbCo%2FqLjkjbqQ4fTEYX97YDpaSkT%2BIKhl5NKNCKYxsUueeRaxLZktleTvl2YLSw7UluKUYCVZs5lLo3fpHC4QjxO5B791LTZj2dL5sSN0efpa1bOGq3fkFt%2Fnann&X-Amz-Signature=9cb61dcf400881330bf0b8a09268a8c0a3c3235250f7bdb33632cb6fd83bf6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ZLZKVB%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6RhBayIm3WLpobGIP%2BPXdsJ2xQfQCr9Xzaa%2FAbTVfIAiBHWCLxuuOg75jIvsh3TjR5vcHmiRM9yM5srnB1HyYZUyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIM5mmhGgidA5tL0fUMKtwD2aTPGGyuHCoo4H1fF2ReR05n0OlsSqxfVbAJB4UHkBXm5d8fPv0noMBPituCXzSt1R%2FNXk2ZIRQhqqZa6M2CrXinFEI90XNND6I3JuD53MbTWwmlLgpBJYibqHq9Iy6lTXM20rasakVqyAEfQ%2BDAQAUDzrBNVl7rk5Ugfkpe7Ybxr9hyzcsGEpJfePjiGiiaGZqIwOX5TCM2LXLlHIAMykjUDlPeAozi7svUT3xKqMbcIYQR7tqBg8PFBZT5gEgnvvyHMmjX6aH6Z5UDUfpO%2FO%2FFyfCWthUEHE9GfPIwN7%2B4aNrl6dMFtR%2FeEbfFpJWziIgp1Js%2FwRVWDOE%2BIX55GDAs9MtSG2HGvbO5Z6IgiudnZ4yJ1eUwMNkAaHwbc45SXGBudgIQD9h2SQzuVymP9OiLTf3MmhyqLWJfSp%2F44pt0sLERVngALKEDQ5MVTo6DjPFmQeWhrebd8ZCmz591ONGQBha6QktKjh0NcT6rXGoHxeqoEHeEI9JA%2FiowWj7Z9TfDUuwkCNDTH0evu%2B9MmaVzLmYljviN6EJ8FrWE%2FARpLim8bTGf4iLzw55b%2B4LN3jqEBKBFNPDBdQgYgVY6WHV5FxQ0HFqXJJSmppL1ELU4OSBBqCBtr1R69QMwhNWCvQY6pgHxnv6uCKrz%2BdeBNyGG3mLeweaEPLFgoCvCM7mIpH4VPcT1lsdaYBWEJYZHG5Cr4f9D8ImjUu1MzK9e0DrCDYoa3K7mc%2Bg1dxyY0FldpcM9QAB7aU6tIXi3459mPIgVJk6I5yqEjsVyEvJNTCE6jvqkt8oszoALKehbgyKArB5oh45N1oHuxDeeX7vKNS4BKH4NFikixjIbJI9FGAU3pskNLYc8khA9&X-Amz-Signature=82791675ef69747cfd0021f2ba586bae3f295ea34f38b031a95796ee5069e76e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A2VF25P%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfqeArnv3wiaFcKsHhkfMQkiXd3qORYabAn9QrOvA5eAIhAJWu4f7ztUc2S3fwsKeyC%2F6hi%2BUvTBIhuna6Li55EtzkKv8DCBUQABoMNjM3NDIzMTgzODA1IgwwD5trTuRcCZ9uQ4kq3AO8LOm3K0UtkA3rQqL%2BFWhoe5dJ7PiFGFmJuGZEbEQsREFSR4d55haWmCtIo04AX9obrfuNCcdOTVDm%2Ba3ihUpmM8NyTtTnyESWtK2Jg6dBSRxBbIG4BaOAMTIoITDZAvyTRgbkDqpPG5SVGM3yxrjkm2F9ypfQFTcQjh92U%2BINmwtfG8ciIqzSF6Lq88bhow%2Bbl3XQZU4jWijaJI5MgMDxZZAyySLONYJpvMT8krf9OEY4CzNHRKSGcq9dV9wjJzG8LP26sCzr0tSz59YGaaMoQrluXXRUiuevrOAFyHxskC%2B695VsSzzk011YzFMPCvFqliKDdBiCHpqrrBc0hbrILi3saCKeOrdRCzz6%2FiW9Gnu%2FgMbQiYm39oIDulEyaeU9rloHgCTUNsDeHFLLR1DZFh2b4JjNToAvcLqbwGLQ6hx2L9aB9ufWNfYG7TQRxoDFnWz2G3ZzrvT3XUjiQWiu2vpUPPbclqWj8fHPWTkAuy1%2FcFSxRVyHJG2%2Bwkopoq%2FNwg9dvzLucaocXpTl6tc7iJimd9nr8kfkOWEr1EKt94uN%2FuSa9PnBzdh13v0IEQgREVZ1CcHmpLuD7wa3%2FoTCQqNnXSUMzhOVOsF%2BehV5cG1BY6%2FUBuIjfcjbODCq1IK9BjqkAbu2L%2Bi%2FQBC4NkQAgGN9ega2vykDXKXKcLti78fEVwgHax%2FWBJXrxtTjiD1KnourJtj88fg0uzgff724TjFHAw%2F7cLLkoSYTNyrdZQZ66OOVwecf%2Br0uW3pDATYQoKjmEfTrYNC%2FvyfCks2c0sRWpCnnIiNeKkzTd5%2B6dwn580%2Fh14Vtg80gFURoRK7ajVeuNgMWHRpmgYASdo3v%2F7UJjM0iwXSZ&X-Amz-Signature=160f3f442ca474ade67dc678112ac823fe3f1c456d5586dc527ae75cf75b04e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6HMMNV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTj7ZD15yNjppG%2FfCNaTRZz9P4EmJELuN%2BRX1vVQgzYwIhANZLY%2F8d9aDvzJdzwULa8EBNIcED51nYmi20UB0nx23qKv8DCBUQABoMNjM3NDIzMTgzODA1Igyi%2BIKEg5yf7C0aYuQq3AO%2FZHbjxi2It4UbuxP0xqMHNwqDCs0R2kSPI0s%2BhtILZHb6Llw5tO5eZGPSeMQy3YXk9mdzJtEpYvSourg7pEEklIEW9VAq2fVnveyfIiTHP6NFj3tRExB85njwMzyydvBKdWSiEFtLeKb8KD5b2%2BjWbf6HJBe584pHQVl3sobhyhFGAvmnOjSh6qDt2lXHflebymCj9ivR9b7e3y0Ev0j2HaGGSHDJO084TItOYnLJTNAveG5SE8LYQcwWu%2BHTNyo%2BNmgpB4rUYrRIiInW69Ys6OaZvVhMfiHQVJkCcIw%2B3txuwYZv4qQoaeWQ9K5KiA66pZTxXPysiEVRf0jlbKFAxcG3on8VyE%2FTDwY9psMx6g9GZ16tvaYatIyNmPbyaR5Hl7077Nb8UlMc3SZnIs76IgMnbUAADfGlMIjwIwZAGaZ0kpba%2F0GIPVaeleKTSxrGPtIiUzFif2SYZF9uLwdwLlPCny1RdVi6PeUaPe8CoVrzgUtrmYDiNrqqLBptEmcostWIjS8OATELcoXwoejl4BgBGlx%2Bz3bE3f33rA7rP1jZkd2GklwwBD%2FP0mvfSpc5gekAJ%2F4VZWshlvg2olVWsyYQzOxMaiTu8hfOexweddqtZViHB7v30N5IkTCo1IK9BjqkAVLcYszeSXj6uw9tTllU6BfMNL8a0CKzaDsFCEHATO3rZZPLthXT0Be%2FDJUTDMOVGa%2FyWQs2K7TaMvLUhE1udPoAjnVAlnQKqbCo%2FqLjkjbqQ4fTEYX97YDpaSkT%2BIKhl5NKNCKYxsUueeRaxLZktleTvl2YLSw7UluKUYCVZs5lLo3fpHC4QjxO5B791LTZj2dL5sSN0efpa1bOGq3fkFt%2Fnann&X-Amz-Signature=a8477d0b07bddb7257c673e38c4c8585e3fa9537fb470c60e6034d7db31f4667&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
