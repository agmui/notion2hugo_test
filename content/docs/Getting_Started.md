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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARZGV53%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCeRZ6O6HdCqNKgaR5pALoJXaqjGtEjBQ%2BmXvDXZL2bDwIgGHs2BvOv9qYHduM2iEsB8PWCxrEpDLs6OpgvZHMlnOEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2Bq0y8enFD73fFWyrcAzRoDuQRcjzP9suvjUNZY5P49vB3UjfHetYDkTegZvWt1u1W9VoOn48r%2FePs8OakN54T8orpUnLEJFiXVa7tptVRmTWL8Xwe9TnKKgWbCwOOpjkbe%2Bsfat3JowjkveNX8%2FbJXWGwSoS%2B1KD3PwtuuHMaLeF%2F9Q3dHkVDoUyZ99mFLIKFkLUYN7rylmm1ygOdmdL7W5%2FyFs9rR3JwYTshlEwgi3QHGrg5t18Xu4Gw6pSrR%2Bx4mfusIaG9ZyR8uYOgHCEgYqR6uRHXIbj3C%2FIR%2FeZPDFHpi3D%2Fxe4FWZrAqOElgk3L3yF17iASGUOCGjygIO64w%2Bapa96w7QnIaEqrxg0ywkFBwfr3nQqkVtbCjYh%2B1t%2FKnQnTcXjuek%2BAKB0a8izaOfX8Nxx23K2hcKZH68ibTNYgRD579u6%2BGrkLj9wPF42szhEA3gIoxokbHTSCPpVSVqIjin0p4P2AEPKHjcsnRfKAVHk7FRjcrWjotHIfylcZSX9gXns7ccajGOrFc03ecV%2Fg5WuZvfhMyPdkmX5NWBfPVzt7LT%2FOXi5zqHrnsKcJwiLx4ekfuLMVd9ROYyWDOLtZO0h8r478zjGRqfKrzp1jjh0DBjQUxrVGxHtzd2vpytqpGWG7EQEyMLDy0sAGOqUBrv2Q7XxRaCbhEJ%2BYi7MLQ5pCaM60kqu2MyGq1VzNsRJn9BrmYNKxXaRPTh%2Biwl60PPYOx8a5CHQoBpAD2Tggud87dHQBg0OCfQedhuXA%2B6AtG5FuF3giNMd7h4iKsKJvRYIfRKCRNRhx37reKnU8FYtOFDDye5CPosJlp2BKVT0Ri2C9MLeNzW1k1FQ%2FzPDRc6xkrw9IRXa6tS%2FDJvosXMb0%2FXqI&X-Amz-Signature=55916fe869f1a71eac02d41f0d5ee0f634eb8a29e4da189471c766ad9334e911&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARZGV53%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCeRZ6O6HdCqNKgaR5pALoJXaqjGtEjBQ%2BmXvDXZL2bDwIgGHs2BvOv9qYHduM2iEsB8PWCxrEpDLs6OpgvZHMlnOEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2Bq0y8enFD73fFWyrcAzRoDuQRcjzP9suvjUNZY5P49vB3UjfHetYDkTegZvWt1u1W9VoOn48r%2FePs8OakN54T8orpUnLEJFiXVa7tptVRmTWL8Xwe9TnKKgWbCwOOpjkbe%2Bsfat3JowjkveNX8%2FbJXWGwSoS%2B1KD3PwtuuHMaLeF%2F9Q3dHkVDoUyZ99mFLIKFkLUYN7rylmm1ygOdmdL7W5%2FyFs9rR3JwYTshlEwgi3QHGrg5t18Xu4Gw6pSrR%2Bx4mfusIaG9ZyR8uYOgHCEgYqR6uRHXIbj3C%2FIR%2FeZPDFHpi3D%2Fxe4FWZrAqOElgk3L3yF17iASGUOCGjygIO64w%2Bapa96w7QnIaEqrxg0ywkFBwfr3nQqkVtbCjYh%2B1t%2FKnQnTcXjuek%2BAKB0a8izaOfX8Nxx23K2hcKZH68ibTNYgRD579u6%2BGrkLj9wPF42szhEA3gIoxokbHTSCPpVSVqIjin0p4P2AEPKHjcsnRfKAVHk7FRjcrWjotHIfylcZSX9gXns7ccajGOrFc03ecV%2Fg5WuZvfhMyPdkmX5NWBfPVzt7LT%2FOXi5zqHrnsKcJwiLx4ekfuLMVd9ROYyWDOLtZO0h8r478zjGRqfKrzp1jjh0DBjQUxrVGxHtzd2vpytqpGWG7EQEyMLDy0sAGOqUBrv2Q7XxRaCbhEJ%2BYi7MLQ5pCaM60kqu2MyGq1VzNsRJn9BrmYNKxXaRPTh%2Biwl60PPYOx8a5CHQoBpAD2Tggud87dHQBg0OCfQedhuXA%2B6AtG5FuF3giNMd7h4iKsKJvRYIfRKCRNRhx37reKnU8FYtOFDDye5CPosJlp2BKVT0Ri2C9MLeNzW1k1FQ%2FzPDRc6xkrw9IRXa6tS%2FDJvosXMb0%2FXqI&X-Amz-Signature=415f96d8475e51df9d0653e9cbb167deae29aabb97abb8138e93f13ccdf6f790&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARZGV53%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCeRZ6O6HdCqNKgaR5pALoJXaqjGtEjBQ%2BmXvDXZL2bDwIgGHs2BvOv9qYHduM2iEsB8PWCxrEpDLs6OpgvZHMlnOEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2Bq0y8enFD73fFWyrcAzRoDuQRcjzP9suvjUNZY5P49vB3UjfHetYDkTegZvWt1u1W9VoOn48r%2FePs8OakN54T8orpUnLEJFiXVa7tptVRmTWL8Xwe9TnKKgWbCwOOpjkbe%2Bsfat3JowjkveNX8%2FbJXWGwSoS%2B1KD3PwtuuHMaLeF%2F9Q3dHkVDoUyZ99mFLIKFkLUYN7rylmm1ygOdmdL7W5%2FyFs9rR3JwYTshlEwgi3QHGrg5t18Xu4Gw6pSrR%2Bx4mfusIaG9ZyR8uYOgHCEgYqR6uRHXIbj3C%2FIR%2FeZPDFHpi3D%2Fxe4FWZrAqOElgk3L3yF17iASGUOCGjygIO64w%2Bapa96w7QnIaEqrxg0ywkFBwfr3nQqkVtbCjYh%2B1t%2FKnQnTcXjuek%2BAKB0a8izaOfX8Nxx23K2hcKZH68ibTNYgRD579u6%2BGrkLj9wPF42szhEA3gIoxokbHTSCPpVSVqIjin0p4P2AEPKHjcsnRfKAVHk7FRjcrWjotHIfylcZSX9gXns7ccajGOrFc03ecV%2Fg5WuZvfhMyPdkmX5NWBfPVzt7LT%2FOXi5zqHrnsKcJwiLx4ekfuLMVd9ROYyWDOLtZO0h8r478zjGRqfKrzp1jjh0DBjQUxrVGxHtzd2vpytqpGWG7EQEyMLDy0sAGOqUBrv2Q7XxRaCbhEJ%2BYi7MLQ5pCaM60kqu2MyGq1VzNsRJn9BrmYNKxXaRPTh%2Biwl60PPYOx8a5CHQoBpAD2Tggud87dHQBg0OCfQedhuXA%2B6AtG5FuF3giNMd7h4iKsKJvRYIfRKCRNRhx37reKnU8FYtOFDDye5CPosJlp2BKVT0Ri2C9MLeNzW1k1FQ%2FzPDRc6xkrw9IRXa6tS%2FDJvosXMb0%2FXqI&X-Amz-Signature=7a29b4f88649c342bba876ca51bf1017a8bbd43c40d5af8811b7868e464971e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4DBOPL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDQy0TUfpKaSdgmFQHbA6b%2BlJte1f6S5qt8SyK1NyIhqQIgbDAdLPSd2GuF7uZWA14W7voZpd5mFLydA6VjZCcl7zAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK49w4ez7GXXxhsxpircAwF99rBeMaJuWCRpvVMMaLvFtWXFgBZE58Pd3mcnDb3k3WqIAJVl%2BVluvUzRrx3uTOpRgOPwThqzE0GzBaj6Akhmta6iJBOq3LMCk9ctnCN9YasORh%2B6PeG8Nkhi3kE9AY5w%2FDe%2BewvVg1JR20VjC6NS3FrhxddRkKkxrKfRvWHOQZ2WOmv%2BvK68Xsk8s4O2aReqMKGTvxZ4A%2FPZFVPq%2FzvVhWUYhVsQV6c94TjRklcVK0WdDnrTA01zwSjl9%2BSRrivaPyMV%2Fk4x1HWUGmccLL9pWOB7GAdtP0x918BVh9e2E6BLgwRjD2hjbCTpVqujH4IVi%2B%2FMjfw4Lvh2yD7jMnGhGtilzV3ZOvg%2Bufy5hcsrMXX6ZsErY6m4T8MIETB4Qe8ImYWsR5UG1VLRnymUfHab2bnts%2B4LgXVf3uN87j8AseFyqtB%2BDSnVHhAdsxSPH3ENJ7cxVCzDLc812lhQqAQ81Z%2B%2FgxgTfml%2B9cQJ8yF7Yb4GYCnlWNUAY2MH7AfHf2OfBvXAkS4a9acwB%2BAI2lvnxEg24CJqagbnwnGgSUFxOBsMkJuOUcPjFXtWyiI19Pb3jjs%2FUeS7v9CRJWDZn5BRTrt9H0dj1W11qHSs3MtKoP0cNarkqCLaXVW6MITy0sAGOqUBsiSeCGpULSf1YrJgzsn2JfRFGK94%2F9FsnSg8g%2FAhwKCLvD%2FHjqIsUClHVOBB7wiF9tG2amF88cN96Y52X9b91UwzuYoxO92W7bQeOcnDTbsIX12WOqVb0hb320IoK4Y4buejAbMK7u76H8IHk7cHzdrwIFjFFUaETm6%2BwKQlLhcG88ex1WIu140vEC88VWXQ%2BB0AdGRhZB8l5M8zl7l4me%2FwTlVH&X-Amz-Signature=652fa2ee5ba875353ffad97960302a06418f5c4f7cf2c4fbbe3a3de7a82c1c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2FPTMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBhNI14fiqjczeOVOMbNmM82VjtutXsERhqvIVUh9WRZAiBmkSiMXxkejmY%2BPfPPxi9DhJipHjIa5%2Fm%2BRw8L2r0cRyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYwBvbFFcmVS5PCrpKtwDZ3MSyE%2FhyAZNKgW5bloe9Pb2m9EZNC8zVl5EoXImpXTkx8x%2Fb1x1Ve6FSnIzNoXTrhVEr4Qdk6ZTbyXrq1NeFr8f5iyR%2BCDZT7I8xsC0a9g7z%2FOenox3i38rfPxOyknP2%2BcHuhVaWIVHleSS5tvdPhh3Svpk%2FJIKV35i%2FQmMD3RRRn136XZAGJs4s5tNZsquaSn8JQvNjE0A9WjX9qdsy3uxfyRgyQPsY9FOxdN3CoYeGe%2F35Rr2dB4OZPi%2BVt6nXuL6fKfHhHIWb2fXeJ7INIpuO%2B%2B84dcwBxen%2Fu65wpyZuK7dvTfTD1xSO308oqRqXvwZ4cizvBwFUco9CQPNvBRpHQRvOHwtH9tkxPBTjqcBAsp1IbY0n%2F2QYGfEmCUgnOJ3X01jrH6Jr%2FvGDq7px8m2rADj0Wz4vGo6mRzcoQWt43OB6tqqhPDTmENihZ5h5gI1YqUNzvIDDdni5c8FXh9D4uRK8QwBhtiMPq1Y0k5xKIWQbxEe2QG1p08g2Ax0QPCxipVg1XHEo%2Fq9SN%2FW%2F6CwNpVOqsLByQ9m4EaH5a%2BBfDCm46vyxCsHnRww8AuJ2S05%2BEptQ7PXSm9%2B4fCH%2BFbhu26djcOG8Rso1uhBjxxnRPo7n%2BQ%2FGw%2F99uMwmfLSwAY6pgEi5R1ueD86sLi6IRePhoVICZCZajWsrRehdi1fkcZ7He5wvFsVIk2%2Flhvb57ExK0E5Wu794eTVFYEEEcrBcDDCecyUuoBTA8RjCB4CMMJIVislftMt8s%2B1d%2FFJVE%2Fvn7BeCpL6tVoekbikGZpG2UPoB3cdHrG1cE5Co47E1pmZoBt9FOzCcfVhSBDvPl%2Bg8120sHWQZNeT3rv3QMrE1QORCBfuBtbQ&X-Amz-Signature=e6a9be8138c0954992d578c0069613ab93c700d362782d7656db4ae663acd9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WARZGV53%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T131946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCeRZ6O6HdCqNKgaR5pALoJXaqjGtEjBQ%2BmXvDXZL2bDwIgGHs2BvOv9qYHduM2iEsB8PWCxrEpDLs6OpgvZHMlnOEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQ%2Bq0y8enFD73fFWyrcAzRoDuQRcjzP9suvjUNZY5P49vB3UjfHetYDkTegZvWt1u1W9VoOn48r%2FePs8OakN54T8orpUnLEJFiXVa7tptVRmTWL8Xwe9TnKKgWbCwOOpjkbe%2Bsfat3JowjkveNX8%2FbJXWGwSoS%2B1KD3PwtuuHMaLeF%2F9Q3dHkVDoUyZ99mFLIKFkLUYN7rylmm1ygOdmdL7W5%2FyFs9rR3JwYTshlEwgi3QHGrg5t18Xu4Gw6pSrR%2Bx4mfusIaG9ZyR8uYOgHCEgYqR6uRHXIbj3C%2FIR%2FeZPDFHpi3D%2Fxe4FWZrAqOElgk3L3yF17iASGUOCGjygIO64w%2Bapa96w7QnIaEqrxg0ywkFBwfr3nQqkVtbCjYh%2B1t%2FKnQnTcXjuek%2BAKB0a8izaOfX8Nxx23K2hcKZH68ibTNYgRD579u6%2BGrkLj9wPF42szhEA3gIoxokbHTSCPpVSVqIjin0p4P2AEPKHjcsnRfKAVHk7FRjcrWjotHIfylcZSX9gXns7ccajGOrFc03ecV%2Fg5WuZvfhMyPdkmX5NWBfPVzt7LT%2FOXi5zqHrnsKcJwiLx4ekfuLMVd9ROYyWDOLtZO0h8r478zjGRqfKrzp1jjh0DBjQUxrVGxHtzd2vpytqpGWG7EQEyMLDy0sAGOqUBrv2Q7XxRaCbhEJ%2BYi7MLQ5pCaM60kqu2MyGq1VzNsRJn9BrmYNKxXaRPTh%2Biwl60PPYOx8a5CHQoBpAD2Tggud87dHQBg0OCfQedhuXA%2B6AtG5FuF3giNMd7h4iKsKJvRYIfRKCRNRhx37reKnU8FYtOFDDye5CPosJlp2BKVT0Ri2C9MLeNzW1k1FQ%2FzPDRc6xkrw9IRXa6tS%2FDJvosXMb0%2FXqI&X-Amz-Signature=6f90e68945c8e47fad4d14c5236477c42d91cbb4cffc5dce1bcf41b7aae5fd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
