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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2OQ2IB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB3992qixvBujD9KVo8oHpROxSVYcoNT48cgY8VYZ0%2BZAiBOHV5jDED%2FeU5bhqUfGNVcms5hF4vMdJXtYMmhqBDLQCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSM3FJqvAmKSNDV2oKtwD7vYbcCOlfZXfzFAP5SrSESd4kkCEM3M0XMDHOmTbjXvBVsthNByYvigEPDU8ZzMAi%2FHHw8qFBMWxFpNb%2FzNzObaWsbEQJ5B8ipIuPzt76glT2c%2BrEaTBbiVKS17ss11LAlYeuf2Zmo6USIOj5KcKBrePjFoEwcLCR60KuyQE%2F92QnTSZqOqUuz77XTaoNG8ngNMQTjbu3jODgS21gJeyhLfShirECpidSfuxGmSWThnId6Msst2BbCO05pXpg6CoecGco5eCzpfmHxTov6b7QWQ5%2B6VJR1UwIKTUnDwz%2FbrXLYWysvC18gH1y1orS3Sjspvj%2BHPBfmGv1b3wV87H4QW8Od9YR3yM7vmdP%2FBiXEhBco5N0A4tEp9aHTEroRDszKKgQvkQG3dOILqpxueLHmRI5JgnKi%2FJwcmOh%2F90%2FtTCdyCNfNIFUJhhxE0D3TcApOcd05MuREbCdbHYyBsWqqx33tLsb9wk4VqMHPpj0%2BDBNXcVYgodgv4Scupkag9oIJrUAFDgUQ2T%2F%2Btf4EQd3m25Zuvw%2Bpe2DO0zkGqK0194G9WI6YbD5qIrjGufpYqkZOU8g%2FhmZ%2FJNr%2Ft0%2BBtQ4S5vQ2Eq6VaSVFTXT3mKlE4vQQh9YjuJZwQnY5cwp8CGvQY6pgExG53Z7iv8YwYaao8VtsJInrw3G3P3oc%2FI0p0Vr%2Bl6I9KhTsNSAPTwSEh8VE%2Ff196YyFfCpGQS1re4IrR%2FEVHLRPhhdvxl3e%2F9e1C56vif2a6dE6z8KHtre5UJyjGy%2FpgOppLt%2BbCZzNfpa2Nc4%2F5kLwuQWRsdDcxPTnneBqIg%2F8gzZBuQUoxNNiALE2u7gpHD1Ixwb%2F7cKKJA3x4kaxs8jw9j1OBd&X-Amz-Signature=4b2aa2fabc3340ce61b32e747d54a15e3291189cf5353a23ca3dd40f01e73a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2OQ2IB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB3992qixvBujD9KVo8oHpROxSVYcoNT48cgY8VYZ0%2BZAiBOHV5jDED%2FeU5bhqUfGNVcms5hF4vMdJXtYMmhqBDLQCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSM3FJqvAmKSNDV2oKtwD7vYbcCOlfZXfzFAP5SrSESd4kkCEM3M0XMDHOmTbjXvBVsthNByYvigEPDU8ZzMAi%2FHHw8qFBMWxFpNb%2FzNzObaWsbEQJ5B8ipIuPzt76glT2c%2BrEaTBbiVKS17ss11LAlYeuf2Zmo6USIOj5KcKBrePjFoEwcLCR60KuyQE%2F92QnTSZqOqUuz77XTaoNG8ngNMQTjbu3jODgS21gJeyhLfShirECpidSfuxGmSWThnId6Msst2BbCO05pXpg6CoecGco5eCzpfmHxTov6b7QWQ5%2B6VJR1UwIKTUnDwz%2FbrXLYWysvC18gH1y1orS3Sjspvj%2BHPBfmGv1b3wV87H4QW8Od9YR3yM7vmdP%2FBiXEhBco5N0A4tEp9aHTEroRDszKKgQvkQG3dOILqpxueLHmRI5JgnKi%2FJwcmOh%2F90%2FtTCdyCNfNIFUJhhxE0D3TcApOcd05MuREbCdbHYyBsWqqx33tLsb9wk4VqMHPpj0%2BDBNXcVYgodgv4Scupkag9oIJrUAFDgUQ2T%2F%2Btf4EQd3m25Zuvw%2Bpe2DO0zkGqK0194G9WI6YbD5qIrjGufpYqkZOU8g%2FhmZ%2FJNr%2Ft0%2BBtQ4S5vQ2Eq6VaSVFTXT3mKlE4vQQh9YjuJZwQnY5cwp8CGvQY6pgExG53Z7iv8YwYaao8VtsJInrw3G3P3oc%2FI0p0Vr%2Bl6I9KhTsNSAPTwSEh8VE%2Ff196YyFfCpGQS1re4IrR%2FEVHLRPhhdvxl3e%2F9e1C56vif2a6dE6z8KHtre5UJyjGy%2FpgOppLt%2BbCZzNfpa2Nc4%2F5kLwuQWRsdDcxPTnneBqIg%2F8gzZBuQUoxNNiALE2u7gpHD1Ixwb%2F7cKKJA3x4kaxs8jw9j1OBd&X-Amz-Signature=e45514a9345bfda0198c76cfe30f427e81b634d5301f883519c8f95702aeedc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXYHFIV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCOlDTUDd8q5Bifqh2UtICBdCMHRESHiZYQi7zfVW7hRQIhALD8uuXQm0zDwmUtCKxaw0pkqeNDe3zCWsKfmz5nKiYuKv8DCCYQABoMNjM3NDIzMTgzODA1IgwL1J0bIYYTmdTnKRAq3APLKA%2F7ze%2BidIb4xXsX30FGuZjGqoGj%2FV%2FZqyO3GgrQ3uZ0Sq5QLa0uvMf82J537jVyerSRZyeVhur62TKwzRdAW%2FpdpsP8aqpJ4sjSmzbFrMPDN8CnxaSGrqqtj7c3vLbSOhsIgGMjVOjbuvMg2WQBgvVG04QUQS9Sy6k5BWfFJDqfwf2emQ6YS5VoQ93L0%2BAkTyPlXQc2hHW79w%2BQs0hmw7ennPSv3qpd4pVsnm6QI8%2BT3D46hHEbusWuDhwrqNfPDaelKlsq05fOhGdN5DLKDaqYxI6NL6uepKerE%2BJZMG1FAV4DwtMFzDc18N93V99Ycnc6Z4%2B2NyyPRyKmmpjJJ4FIAizPUUGNZkteTGpnNHapchCE1u6lHftfachSfXciuxnR6o91%2BA9ZF6cp1njLoxNT0kzhULLKdLy%2FDYIqVBvrnOGBhVnryAJmRjpnuhzZodIfG3kqK%2FnCtJQw81ZzJ4dZx5tLxSx6GatTlE9Aq1p8CxWfi4LKI3T7%2BSG6DLcFYmsqD3706Upd8NcEQXvgBIR07oyx6VMm0LPjbGRovQ%2BzdQonOuFJut9EAWy9ik7TToOL6HaLnKlumeRvMq%2F2EBHot82dolx%2FbsZ%2FneaE8fVcCXirrhWVIqI9XzCdwIa9BjqkAZO0aPJObNiePzCVko5OWR3E0S3cf8RmLk%2BoUPYxjbvAYYr%2B4TI07EAGzBf1J1aDgQ3e2VoItloADml6Sr%2FxFKwnWGI%2BtHysBZArVmIkZ47lqn%2FQQnZv4207lsb1K73r%2BZj2ODUAjDarnt0ZTlOIIzV0IxXS3XNAIRg0mI5bAVvTIs2M2KeHwigb3x0WTDXv9gwRot0lNM8n3mhgsJgX%2BpvEP4xm&X-Amz-Signature=8a0a2931291379b18ddcc251c17461ac63a334aa55f1c4721f81aa082e610a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDEE5NYI%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGhN0zl%2Fk68nze3otJsCDerQs137x8iiRtDfFKZUAVVcAiEAqVRpbjAJefp8LMm1%2FzI7JZtSUDuIXYwmQD2RRGid5BEq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDDC58AJrIGrWpvSdgSrcA8rrKbCv43Up0qMHu%2B2gukoNVxUZN3Mu8UvG6smSIp8WN2Apz09U8UwAXMQ4SZ7gIrA%2Bk2LsyRaJfTc1iVO4%2Bs1T5RGvZE2x%2BuooNycYBHdsxUcajQnJTFdGMOc%2F6iA2C%2FkCKOOiYtELY8w0sHyN1kU3cXlB1wrhh1ZaAo2%2FX%2BO8C6E5w1lyYeNMandcKYJEZaWVOkmEYVSurDdSVNGuSNZqwXYAyy0tX2PtiidmhyQf5ZtZXS0VX5llxCaFEYg%2FUUXWys4kBv6xpY9obdKQruCo0hGRwEp%2BsqOW14te%2FyNNoXYNXprRC73T4VS%2B2Ecmde8M4JZYTARlE9Vvr50V03OCfzVL8pnxwRUFVcXnaqaFaYCQIdUnPk82WwTtbn11ABR%2BaPDl2a8LQJMy4KToLknV%2B%2Bmq0krINv7o%2BHRuOg4U6mo9WTRSJtHrEOrw4%2BiE6TsU2pp92Ik7b14%2B7WjfBuMKVPE5PljeuSXTnWcLgGnqXa7ZMb4fdCRxD3u4%2BiZbwJb9Ns49eeJvHMxjjatMJY%2Fg%2B%2BKwFVltWIdFb9SULWMcSPF3ZWYtWDQVwrm3Hvtt8ZjiTBbUGLgYOWKJkMJMpIMXaF0NZmZxVPCoH9h2V5SVi1I98V0yd4WML8fxMKHAhr0GOqUBLQnERmxVDLvnP797uPxC8dG%2FTS4JhmArjLEkTIStNoV4i%2FUgftuUorpAPElKkv5CbH44Uqf7ABfY9wfIAN%2BsCyLEdTX01StXqY3XuDCOc2gQR7bSIZH0shegVzzjPbCwTin0VMqECQPXhDU9%2BVp76N1RtOF3vyJChcFibL%2F1hZH%2B%2FzWOfsMIkQPU5WiNqOt9HPWM%2F3gFLYD6umFQI%2BKC54wXrZda&X-Amz-Signature=b34f934f3d3782fd7864939bb2ee04c0ee0ae2ce38fbc9bdcf151bc7c5e7e5e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2OQ2IB%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIB3992qixvBujD9KVo8oHpROxSVYcoNT48cgY8VYZ0%2BZAiBOHV5jDED%2FeU5bhqUfGNVcms5hF4vMdJXtYMmhqBDLQCr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMSM3FJqvAmKSNDV2oKtwD7vYbcCOlfZXfzFAP5SrSESd4kkCEM3M0XMDHOmTbjXvBVsthNByYvigEPDU8ZzMAi%2FHHw8qFBMWxFpNb%2FzNzObaWsbEQJ5B8ipIuPzt76glT2c%2BrEaTBbiVKS17ss11LAlYeuf2Zmo6USIOj5KcKBrePjFoEwcLCR60KuyQE%2F92QnTSZqOqUuz77XTaoNG8ngNMQTjbu3jODgS21gJeyhLfShirECpidSfuxGmSWThnId6Msst2BbCO05pXpg6CoecGco5eCzpfmHxTov6b7QWQ5%2B6VJR1UwIKTUnDwz%2FbrXLYWysvC18gH1y1orS3Sjspvj%2BHPBfmGv1b3wV87H4QW8Od9YR3yM7vmdP%2FBiXEhBco5N0A4tEp9aHTEroRDszKKgQvkQG3dOILqpxueLHmRI5JgnKi%2FJwcmOh%2F90%2FtTCdyCNfNIFUJhhxE0D3TcApOcd05MuREbCdbHYyBsWqqx33tLsb9wk4VqMHPpj0%2BDBNXcVYgodgv4Scupkag9oIJrUAFDgUQ2T%2F%2Btf4EQd3m25Zuvw%2Bpe2DO0zkGqK0194G9WI6YbD5qIrjGufpYqkZOU8g%2FhmZ%2FJNr%2Ft0%2BBtQ4S5vQ2Eq6VaSVFTXT3mKlE4vQQh9YjuJZwQnY5cwp8CGvQY6pgExG53Z7iv8YwYaao8VtsJInrw3G3P3oc%2FI0p0Vr%2Bl6I9KhTsNSAPTwSEh8VE%2Ff196YyFfCpGQS1re4IrR%2FEVHLRPhhdvxl3e%2F9e1C56vif2a6dE6z8KHtre5UJyjGy%2FpgOppLt%2BbCZzNfpa2Nc4%2F5kLwuQWRsdDcxPTnneBqIg%2F8gzZBuQUoxNNiALE2u7gpHD1Ixwb%2F7cKKJA3x4kaxs8jw9j1OBd&X-Amz-Signature=a734745d4167e5fed7f873c4f17ec7dfe62bbd935d4a5cc2ad509c5f73e380a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
