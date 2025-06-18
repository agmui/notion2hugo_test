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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQHP226%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbglPEzjDpkeIuJKheG92cumJixF7jDt6xaxbrISxC4AiEAio5hmSvOFpn6idSZ1QlODVwRnMw53QoveC5GVJpC8yQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrHyk9TVF53y736CrcA%2FjvcViQJm2T7aLrANJoYs4QIxc1awc%2FoduewOqgBLjP2%2Fw%2FUQxqiHwvVCwAMt9rW2E9vsdjHp2U2noS7MU7m%2F%2BhEbZkDDN84SLRDPh3oFku0qm8FBBQzf3Zc%2BVXOYQbqqZFnzmluZjmBzSgZngmcxa%2BCI7Nlpeuq4qEiNrCjhtL7fw2Gx49FYvZQU88U0edOiFYivCo%2BZyikz6yadV9TRWaDtdXFbzROjKWhU5u0p5m6640zo5JhQrcviA%2BitoICCr6D2ZsomfNjdwVkcliEgik6ASuCY2m3KFjJhkdTqo3EhW6ctsJwPngJDIErhRw2HP9FuysggIrUVovEU0hxY5qTb4FYSx1yaW8r33dNdUXAfmJw7rAlObvqZUXSc3G6mM6f400NHNuetY4%2BkzenJ2oratiGmXoFrw1SZh6py0fY4d5B7CyKOphydE1%2BHsMmUXc080k6qkSmsB9b%2FJtWFbhg58M20qKFQuh%2BnQTYy3wTJy%2FCpetOOFOzwgCZOzUhRasfaRPV4Qr4qqYP7PjXxCAacNgAZJcWP%2FsVxig5OkOjMxHfCEpBHFeFpPO0PR8jRvr3JS8n059mGdiMP1HG1tKbqRakNgWfL6mU322ff6sgZbs7BRZGJIFh5pRMIa7y8IGOqUBEDHRxQIAN0wU5K5q2BqggDgKw6OCoI5aVqylfFMvslsVV3tXrgFMONWyXj%2FD77%2B6RRLzId99Z%2BODPwVM6N%2FHevsY%2FevuAod%2FtfftUVPmuu4W8YI7yFz7P4pnhUdOuvyBn%2FcKBr5OgvKluKfNjTwF5LsGAP8picoOGKsE4chG6r2HSv%2BZyfH9x04xSQfl%2BTy3kmWQ0x7iwfTA0k%2BJ1i6g3JBZgwMk&X-Amz-Signature=eac7e31be358f1dd46f15cf3bcbdf436de5b67e2d4bf36deaea0085a639e7efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQHP226%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbglPEzjDpkeIuJKheG92cumJixF7jDt6xaxbrISxC4AiEAio5hmSvOFpn6idSZ1QlODVwRnMw53QoveC5GVJpC8yQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrHyk9TVF53y736CrcA%2FjvcViQJm2T7aLrANJoYs4QIxc1awc%2FoduewOqgBLjP2%2Fw%2FUQxqiHwvVCwAMt9rW2E9vsdjHp2U2noS7MU7m%2F%2BhEbZkDDN84SLRDPh3oFku0qm8FBBQzf3Zc%2BVXOYQbqqZFnzmluZjmBzSgZngmcxa%2BCI7Nlpeuq4qEiNrCjhtL7fw2Gx49FYvZQU88U0edOiFYivCo%2BZyikz6yadV9TRWaDtdXFbzROjKWhU5u0p5m6640zo5JhQrcviA%2BitoICCr6D2ZsomfNjdwVkcliEgik6ASuCY2m3KFjJhkdTqo3EhW6ctsJwPngJDIErhRw2HP9FuysggIrUVovEU0hxY5qTb4FYSx1yaW8r33dNdUXAfmJw7rAlObvqZUXSc3G6mM6f400NHNuetY4%2BkzenJ2oratiGmXoFrw1SZh6py0fY4d5B7CyKOphydE1%2BHsMmUXc080k6qkSmsB9b%2FJtWFbhg58M20qKFQuh%2BnQTYy3wTJy%2FCpetOOFOzwgCZOzUhRasfaRPV4Qr4qqYP7PjXxCAacNgAZJcWP%2FsVxig5OkOjMxHfCEpBHFeFpPO0PR8jRvr3JS8n059mGdiMP1HG1tKbqRakNgWfL6mU322ff6sgZbs7BRZGJIFh5pRMIa7y8IGOqUBEDHRxQIAN0wU5K5q2BqggDgKw6OCoI5aVqylfFMvslsVV3tXrgFMONWyXj%2FD77%2B6RRLzId99Z%2BODPwVM6N%2FHevsY%2FevuAod%2FtfftUVPmuu4W8YI7yFz7P4pnhUdOuvyBn%2FcKBr5OgvKluKfNjTwF5LsGAP8picoOGKsE4chG6r2HSv%2BZyfH9x04xSQfl%2BTy3kmWQ0x7iwfTA0k%2BJ1i6g3JBZgwMk&X-Amz-Signature=3cec24e1b294895b9cba1a6af3d6f369ee2e2e758822b55f0bcfb151a091dd48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQHP226%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbglPEzjDpkeIuJKheG92cumJixF7jDt6xaxbrISxC4AiEAio5hmSvOFpn6idSZ1QlODVwRnMw53QoveC5GVJpC8yQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrHyk9TVF53y736CrcA%2FjvcViQJm2T7aLrANJoYs4QIxc1awc%2FoduewOqgBLjP2%2Fw%2FUQxqiHwvVCwAMt9rW2E9vsdjHp2U2noS7MU7m%2F%2BhEbZkDDN84SLRDPh3oFku0qm8FBBQzf3Zc%2BVXOYQbqqZFnzmluZjmBzSgZngmcxa%2BCI7Nlpeuq4qEiNrCjhtL7fw2Gx49FYvZQU88U0edOiFYivCo%2BZyikz6yadV9TRWaDtdXFbzROjKWhU5u0p5m6640zo5JhQrcviA%2BitoICCr6D2ZsomfNjdwVkcliEgik6ASuCY2m3KFjJhkdTqo3EhW6ctsJwPngJDIErhRw2HP9FuysggIrUVovEU0hxY5qTb4FYSx1yaW8r33dNdUXAfmJw7rAlObvqZUXSc3G6mM6f400NHNuetY4%2BkzenJ2oratiGmXoFrw1SZh6py0fY4d5B7CyKOphydE1%2BHsMmUXc080k6qkSmsB9b%2FJtWFbhg58M20qKFQuh%2BnQTYy3wTJy%2FCpetOOFOzwgCZOzUhRasfaRPV4Qr4qqYP7PjXxCAacNgAZJcWP%2FsVxig5OkOjMxHfCEpBHFeFpPO0PR8jRvr3JS8n059mGdiMP1HG1tKbqRakNgWfL6mU322ff6sgZbs7BRZGJIFh5pRMIa7y8IGOqUBEDHRxQIAN0wU5K5q2BqggDgKw6OCoI5aVqylfFMvslsVV3tXrgFMONWyXj%2FD77%2B6RRLzId99Z%2BODPwVM6N%2FHevsY%2FevuAod%2FtfftUVPmuu4W8YI7yFz7P4pnhUdOuvyBn%2FcKBr5OgvKluKfNjTwF5LsGAP8picoOGKsE4chG6r2HSv%2BZyfH9x04xSQfl%2BTy3kmWQ0x7iwfTA0k%2BJ1i6g3JBZgwMk&X-Amz-Signature=bbe02766c3f6e267e863334cde7566c08060f4aed8f1313957ac11fa16ab7875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGPEQK2%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn3vhuol1Acih71WdR%2BQqgioPK0DtFY0SsjbNTRJ99ZwIgIWUgIbc%2FABajpIxkpuLTVquOSi%2BeXpPx%2BbwX6ncnqOMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLDaMZY%2Fm3jlnDKtZyrcAy4zot9EEz2rPeGU1CUOIH3q54GKFJAFjAWSo2%2Fe8pupkivkexh3UNoYPjJfA3GFGeZhmeDFy0Ksv1yI6EobKcXtdwS5Pfu9MX1WGLEyFcxXILMaZ9OaNqfb8lhzwm5YGfg5Js4ZK2UMXdWnZ6X4bJ%2Bs6l3fSjffTXXVSaakokQI8y76w8SiJEdulTFTZ%2B4qiBdw3edS%2BaxEA36ChyFuHXvYMTooqMORCS7cfHaMejQQURrwwU%2Blf17j1MbWLnvD0gvkTmQuxe3Wp7yjvTdihibMRz857%2BGBH2Omg2soRMWG5D0SHy%2FX8JXHBr6WZi3RBerueiO7NWeTgTW51itMH9aaMZSruxo5vQHeYN%2Bh3y97%2F1Z7X%2By5mJ7N%2F4GVzeo2VLhUqXgzmm9XtL0KqRvP06p3nnAxTTyA0s0XY4VKhsy9xsO1kdg%2BK2BfaCzcREHG%2Bt%2BpTMdAw1XSbuznoVDpJG4ey0Wh%2B74z50ymEttoMqCvi9Gq2%2BxU2TPe3uRj5ctwdvX5KY3gmtyDFijdhODlg3MEHwkbsdHv4FXuSJNGbg9Nsdr5na4iONMub0AjEKbhlxXZg7SteEInSg0oof7a0pw4PqDt2t%2BKguW6Ogaqivk%2FDjuleH8sYI5gKU5sMNr0ysIGOqUBum0Vc8O0FlgRPwgRHaBkYWmnP9pTh%2BuEMZ7vZP2hdS1wfu1%2FnRLOqJBDvsXQEEiGwFD92NlRDGKGoFi73mjACBWpsRG89XJdrkEPuUUsEhPDKGylmhnjrCcs%2FltN6urEpk1obY30Gi%2B%2BIHqRwnwX%2BElxQ1p%2FlOuzVbzdbo52sS2xJi7qwtGvM7qaXpS%2FotZYxBTXcp%2B1CDKaDZM643sMXhra5IpL&X-Amz-Signature=a07cf217b3d79632e6e3ab6a00075d63276b74f9defeb047a4e516a351143b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBYOUDBH%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC8QsdMwftCVH52o%2FgweGNwAvQl%2FY49AAs5B1QwJzV0gIgVXKXXyuJ3uATPDr36cMsuyXEBZd0A1YiKAC9sBtTm%2B0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhCwJ9j6XZ%2BdmhowSrcA0CDvVRPVwxXAuxEsMWgQ%2FgwFCSzGgOWN7pPAM5gTmDaUhjnDej9jBNa9e%2F6jvZ7V%2F36uiMHUpboGsdABQkJNitquo7btXPMEtZFyyaBX2ML4fcAVN0%2BGrCNBnI4e%2BAAeyiPjh4xHiQW47G1rMaoan8E211ZQxetA01hxquIpm4bsEinoOHJy1UYQAulgLQJO6a4GUmmSotF%2BqI0I3G70%2B2M3EDgnYNOUMmbcUBdRsMh7ie3zk6ojw9Kp2iXR6B72zjhO0mDsuTmfKnIDH%2Bcn%2BrhZ%2Fj901%2B3FLEPvx%2BDwdWkfYjP%2FAnRq6apwhaCxUhdCkEMd4GTXjtfb%2BOrbxpxMJqeWdbSO1%2BjvxzoCN89GdxTmp9WwX7Q7wkNf%2FaoqDdd1E1ghvPvO50fmjuuJpWcTz%2By7XKM3c2wRUl3mjqSc29ykHLa%2B34%2BUrWXmjpyV6Hp2RpQC9sahvDhDhFna%2BqtmXeWXYch5e%2BaJFqkqsHPUHVI8fNuRFmgZkbwypc%2B6dE6UFG2U90vNEM5xX3j6nCFMxwlGmtV3RFMb8ms7kYNCKK73j%2BP8K5fUrPwmyeUc4pl6RpldcrB%2F8fM1EJrLgAJvTCT%2FoeKZ5QbPYpxlK9u5ErpR2AC1NgL7BHfBO3iMJ70ysIGOqUB76TsG2dZ6Muldu2gHHHpKzrdyJy%2BCvtZAmAfF9kqC%2BlVkXpthsU66JKFCh2%2Fuig2Ix0UmZIkqUyKKk2uBRYc%2BS9z0B1AZmnFRXNB0vMQkIM5JjE2woQNOepQcslpSKm46APlyCv%2FURevdOTwwqq%2FvvoHiyLcagj578nCqsPl%2FB69dmOzJgkcTBcNlZKbyQhfpiuERQYSekrDmAgqdu6JYhgo0j98&X-Amz-Signature=c29da89944a7411a99cf4f24fb02b87040e64e765ef1b8bcd6b35a55dcf889e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYQHP226%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbglPEzjDpkeIuJKheG92cumJixF7jDt6xaxbrISxC4AiEAio5hmSvOFpn6idSZ1QlODVwRnMw53QoveC5GVJpC8yQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMrHyk9TVF53y736CrcA%2FjvcViQJm2T7aLrANJoYs4QIxc1awc%2FoduewOqgBLjP2%2Fw%2FUQxqiHwvVCwAMt9rW2E9vsdjHp2U2noS7MU7m%2F%2BhEbZkDDN84SLRDPh3oFku0qm8FBBQzf3Zc%2BVXOYQbqqZFnzmluZjmBzSgZngmcxa%2BCI7Nlpeuq4qEiNrCjhtL7fw2Gx49FYvZQU88U0edOiFYivCo%2BZyikz6yadV9TRWaDtdXFbzROjKWhU5u0p5m6640zo5JhQrcviA%2BitoICCr6D2ZsomfNjdwVkcliEgik6ASuCY2m3KFjJhkdTqo3EhW6ctsJwPngJDIErhRw2HP9FuysggIrUVovEU0hxY5qTb4FYSx1yaW8r33dNdUXAfmJw7rAlObvqZUXSc3G6mM6f400NHNuetY4%2BkzenJ2oratiGmXoFrw1SZh6py0fY4d5B7CyKOphydE1%2BHsMmUXc080k6qkSmsB9b%2FJtWFbhg58M20qKFQuh%2BnQTYy3wTJy%2FCpetOOFOzwgCZOzUhRasfaRPV4Qr4qqYP7PjXxCAacNgAZJcWP%2FsVxig5OkOjMxHfCEpBHFeFpPO0PR8jRvr3JS8n059mGdiMP1HG1tKbqRakNgWfL6mU322ff6sgZbs7BRZGJIFh5pRMIa7y8IGOqUBEDHRxQIAN0wU5K5q2BqggDgKw6OCoI5aVqylfFMvslsVV3tXrgFMONWyXj%2FD77%2B6RRLzId99Z%2BODPwVM6N%2FHevsY%2FevuAod%2FtfftUVPmuu4W8YI7yFz7P4pnhUdOuvyBn%2FcKBr5OgvKluKfNjTwF5LsGAP8picoOGKsE4chG6r2HSv%2BZyfH9x04xSQfl%2BTy3kmWQ0x7iwfTA0k%2BJ1i6g3JBZgwMk&X-Amz-Signature=825ca7969fca35d86d3e924d1400b899ce02d41f981805b9a9141e93c3684009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
