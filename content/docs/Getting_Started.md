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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIY7C7NM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID7nk9%2BVVMAba88jryDQXQ8Vz3Tw8RLzFbIQrQkI1pGgAiAq4E29TIiGBq0E0%2B5FIReLcbTRcVLx4xTmAf%2FjUwiqVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8gaiRbYDxEo%2FYkZMKtwDxK439JK1lsAX8M9GKDsfMFLiaRgfWUdwQZq4a7EIme1dt2QqRhkDswHyDr3gpJIJkuXRHXBA%2BVxWQ36N%2BNsFudQ071DK1oqd2pdQJlRxYBLCBH61JnlmPbIG98z1142do6KHycjugRJ91VBM5C6bsRvQyLQTS68xCRTqzAZGWIGFvq7OcbyRVQnkRb6Nouqv%2FcXJ70Q7PdGc3WZ3wOyHauvS11Slq5OdwOKzKTKR5nat8Gv6KFAJlgYEo%2BvXTni2fHAjNR0EqBOj9IDRYEsI%2FJ8LTwBQ%2BLQLlJuu7Y3y383q9%2BWNqUptkOGVA%2FMHaNMzAot5j25ai%2FeuC5Co%2Fy9FfnPecdvkVGi3Ue9ZKBt0LXmOXTyt2Y1HCmLvE9asf9fYHWRKbizkfys%2FYPI214E%2Bq66PfQ%2F30LZV5i%2BuL9XrYWPxBKLKW9bxb209ThM2YiHintSZScsQJoYaNtUqP10SV0qdALkg33fhKdtEexG9WNODJjPuafTPGb%2BUvWWJWqHtJZGvFQSWfDd5irvEaHTN3iQ6og4erYo%2BMN31jO1JJHhzUaP6VR2qm%2FxxIsA%2B4EM5IF3kpyIXlHF8ieWh39tFwFeFciosM6dpfSliuS29pNw7YO%2BnbgN7oFRThmsw2YPZwwY6pgHnpueCWmvkivCXl1tVRfvvjRvvx4P5tceRUkVk%2BwdBsqoVuMwacp9yV3YK7%2BazLGE9LviYDwFgMkRj8GEWPyVGbxsZB%2FqbuJqdFlAP4DQBA8p4LLbKu%2F%2B53pPukYSKCnuab5pr8SulZ3UEVfkFghGoQ329JFdblOCQTOKhSbbVU%2F1SWhUs40n8Q5y52SoSuMBqF5pXofBjRFX18xjgXVyA6anYu9l%2B&X-Amz-Signature=0d2c2c188071a9603e07f9bfa860775e876c2b8339f6abe2dc33e101641e773e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIY7C7NM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID7nk9%2BVVMAba88jryDQXQ8Vz3Tw8RLzFbIQrQkI1pGgAiAq4E29TIiGBq0E0%2B5FIReLcbTRcVLx4xTmAf%2FjUwiqVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8gaiRbYDxEo%2FYkZMKtwDxK439JK1lsAX8M9GKDsfMFLiaRgfWUdwQZq4a7EIme1dt2QqRhkDswHyDr3gpJIJkuXRHXBA%2BVxWQ36N%2BNsFudQ071DK1oqd2pdQJlRxYBLCBH61JnlmPbIG98z1142do6KHycjugRJ91VBM5C6bsRvQyLQTS68xCRTqzAZGWIGFvq7OcbyRVQnkRb6Nouqv%2FcXJ70Q7PdGc3WZ3wOyHauvS11Slq5OdwOKzKTKR5nat8Gv6KFAJlgYEo%2BvXTni2fHAjNR0EqBOj9IDRYEsI%2FJ8LTwBQ%2BLQLlJuu7Y3y383q9%2BWNqUptkOGVA%2FMHaNMzAot5j25ai%2FeuC5Co%2Fy9FfnPecdvkVGi3Ue9ZKBt0LXmOXTyt2Y1HCmLvE9asf9fYHWRKbizkfys%2FYPI214E%2Bq66PfQ%2F30LZV5i%2BuL9XrYWPxBKLKW9bxb209ThM2YiHintSZScsQJoYaNtUqP10SV0qdALkg33fhKdtEexG9WNODJjPuafTPGb%2BUvWWJWqHtJZGvFQSWfDd5irvEaHTN3iQ6og4erYo%2BMN31jO1JJHhzUaP6VR2qm%2FxxIsA%2B4EM5IF3kpyIXlHF8ieWh39tFwFeFciosM6dpfSliuS29pNw7YO%2BnbgN7oFRThmsw2YPZwwY6pgHnpueCWmvkivCXl1tVRfvvjRvvx4P5tceRUkVk%2BwdBsqoVuMwacp9yV3YK7%2BazLGE9LviYDwFgMkRj8GEWPyVGbxsZB%2FqbuJqdFlAP4DQBA8p4LLbKu%2F%2B53pPukYSKCnuab5pr8SulZ3UEVfkFghGoQ329JFdblOCQTOKhSbbVU%2F1SWhUs40n8Q5y52SoSuMBqF5pXofBjRFX18xjgXVyA6anYu9l%2B&X-Amz-Signature=613a9854fc0700717b28fca78aab51794ff760db1dae0e9968bb62a6d2daf734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIY7C7NM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID7nk9%2BVVMAba88jryDQXQ8Vz3Tw8RLzFbIQrQkI1pGgAiAq4E29TIiGBq0E0%2B5FIReLcbTRcVLx4xTmAf%2FjUwiqVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8gaiRbYDxEo%2FYkZMKtwDxK439JK1lsAX8M9GKDsfMFLiaRgfWUdwQZq4a7EIme1dt2QqRhkDswHyDr3gpJIJkuXRHXBA%2BVxWQ36N%2BNsFudQ071DK1oqd2pdQJlRxYBLCBH61JnlmPbIG98z1142do6KHycjugRJ91VBM5C6bsRvQyLQTS68xCRTqzAZGWIGFvq7OcbyRVQnkRb6Nouqv%2FcXJ70Q7PdGc3WZ3wOyHauvS11Slq5OdwOKzKTKR5nat8Gv6KFAJlgYEo%2BvXTni2fHAjNR0EqBOj9IDRYEsI%2FJ8LTwBQ%2BLQLlJuu7Y3y383q9%2BWNqUptkOGVA%2FMHaNMzAot5j25ai%2FeuC5Co%2Fy9FfnPecdvkVGi3Ue9ZKBt0LXmOXTyt2Y1HCmLvE9asf9fYHWRKbizkfys%2FYPI214E%2Bq66PfQ%2F30LZV5i%2BuL9XrYWPxBKLKW9bxb209ThM2YiHintSZScsQJoYaNtUqP10SV0qdALkg33fhKdtEexG9WNODJjPuafTPGb%2BUvWWJWqHtJZGvFQSWfDd5irvEaHTN3iQ6og4erYo%2BMN31jO1JJHhzUaP6VR2qm%2FxxIsA%2B4EM5IF3kpyIXlHF8ieWh39tFwFeFciosM6dpfSliuS29pNw7YO%2BnbgN7oFRThmsw2YPZwwY6pgHnpueCWmvkivCXl1tVRfvvjRvvx4P5tceRUkVk%2BwdBsqoVuMwacp9yV3YK7%2BazLGE9LviYDwFgMkRj8GEWPyVGbxsZB%2FqbuJqdFlAP4DQBA8p4LLbKu%2F%2B53pPukYSKCnuab5pr8SulZ3UEVfkFghGoQ329JFdblOCQTOKhSbbVU%2F1SWhUs40n8Q5y52SoSuMBqF5pXofBjRFX18xjgXVyA6anYu9l%2B&X-Amz-Signature=df35280060ff1e9e9f492e038d56057103d062e39706fa5551acc418895642f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IFPZG6S%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHu%2FsWMCS%2FhUFSI1eERn7AQOcFeyReVjSRMbnM6VPuiEAiEAq%2BqNXs9AkDO%2BPUsqPTrcbfBsCJ0w9l7%2Ft1Z3fsxyw9Mq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNLUrfP9OIb7NBXVGyrcA27uIdB4FWSO57AFvjIELxXbO0MO8DsEXmTMrXagyI7636tYO57lyfkNoQggu%2Bl55ULxd7hzivCmknjfpZ8Cw%2F6Zel2h%2FEIRdwIHQjIidIIXL7PKTQlwoZEm3qvnF0zOcy%2BWTHNHvKu2uii30UrDAgZcr98W6KvKSLSgKyjHt%2BHicGB0tIhbtFvdsSt4wGEIaiI70ss2V63kP0ZLRKtMOZ8Fq4skZoBriyrD2r7PJHkqCc49dOfZMW2MAdyz7oSoLBhab4zn2SUTamzt%2F0ubsyAJgZM8xNiPUdeHskRw%2Brwjaru2y%2BK756arEWjy%2Bzux4GAc8X79Pnyvux80fZ75%2B%2Bxw3WBwkYOZhGl%2F1pNsodoh7C6wWKW3%2Fc%2B3%2Bbmq4Sqty%2FgZYto%2BP16XGMd3e84niDo84cff85pCUpSjoVJIu70pihy6GWobO6h4CE%2BF36x%2BDZfWOOzw0w3DMkwOdzKQtQcA4vYPcAUTqtAc2LZrvoPozry8W1xvh3L46w%2BJbcokzTnCyG%2B9CXgMEbB4Wv7mBCGurESvzdin5%2BqOrr5DpKKNf%2BdPtvlKw%2Fm8bS8iy9QWAOQ9XH68t0SNFv1QbKUsYTK6hrZ4kvTRp6pjiIup%2BV8JZnzysXFfkJvq%2B%2BwhMIeE2cMGOqUBu2UsjB0%2BivySP7x5QrQ2wSBeA6SJRHDwjjuD2Uza6a0XcUaAFOrr56JyasElB8T9HItOSMNMgCxgfaBZF0m2TmGDHT8WWJSNE4KrflIOiA6DRdGl%2BTa0pigfuMcATZ68SgE6rJRhcezY7C2%2BBKyiBlABB7kizQJAmpIsaZJkZiUj4KSbrJT%2Fa%2B%2B%2FdRoQhi99bzdAh1eW22QuQY9NKixuYs68LMPq&X-Amz-Signature=a856a22a006b9837689f18a6cce22dc6ba6df983238d4634a4042e8a6567b5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF7EIIF7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIE2F7OLcJHqnF9msvkXgYHy15EusRyr7hF1OG7lng%2BDtAiEAnpSrJsJPjlBc%2Bp7SI73a3HelpLK%2BgcAVC1Tsbo9HbCMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHzUsQBdPK2SqUdemircAyK%2FjMB246v6zzL4%2FapeZ0fVpFQnYZt9gsFWScEJtTj4ZZm09qIdoYdjAXnFrej3vyBQ2AGvclhJXgwLR8Sf0tkq%2BqQYNSFmJ%2BbUrGrXawbtW%2FUD0jYC8iV9g7XzEvv9FAsT01BEcqiMEV3Neke7jbZuBa5SbmKLAZTEHk%2BZG6bnw%2BtrNdDNqlZ285kARqDCJZPwvOyy3aoHVMpj1kv4do1VmRyFrjXAmv7u%2FgwL1E8HBLPnYE5Jak306UYIbObGh4PrKugYWWBxJ1V3yKJ0RcOPKZXxXxrCSnaIBXUscxd6HGFRmF04NNcEkOgsCCCu2%2BD%2FLDGVtVeOB8QWmYZmHgtD77g447ajU9DOQr8G9wOaoPIaNAN31UnwnRVKkuAsanxzj2hLi7CpY%2BZzt88GkmUmNATq%2FDYgTxA9GUbiHRUbINSHjN9GzvlUqbaQjfqrdIhRUfY1AuwT1tBnWz536VKpBe4QyhCsHbHGKqg8KaAgjj%2FXFavwvH%2FIiDId4Dyso8NeDdtbVroArj6k86YkIvuqF9pNB1pdVKtB7aAk%2FNr%2BBGLyBWLPsX5YivBR5fn%2Bg7SR%2FTkEkkVmGY%2FSDOV5IofCkApNMiN7VE0QWvhs7SjeBEePldT2BYvFsNkMMJ2E2cMGOqUBulLnvpSqFBBbBC88k0OavzFm8d%2FE12T%2FjrGLY%2FDASxg3XR7GTDm25wr6gOv%2BblZYkf%2FZkEw1o5Q1OCobnp9g%2BhLbeJ4OHK04Z4N7CuGNZI7b%2B6xUunm4ctU%2FsHbXan%2FAWCox%2BDve2X9BW3Tu%2BTpnT28JOShchum08wwmIORzrarQ0r14dflcTDmNFZBZ7kCzWSFoXbo5dAn%2FdckhRJ9kLuOId3hs&X-Amz-Signature=f9f80ee629217674687c8ba2388dbd2526e8377d8c78d6e9c968281c2588a408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIY7C7NM%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID7nk9%2BVVMAba88jryDQXQ8Vz3Tw8RLzFbIQrQkI1pGgAiAq4E29TIiGBq0E0%2B5FIReLcbTRcVLx4xTmAf%2FjUwiqVir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIM8gaiRbYDxEo%2FYkZMKtwDxK439JK1lsAX8M9GKDsfMFLiaRgfWUdwQZq4a7EIme1dt2QqRhkDswHyDr3gpJIJkuXRHXBA%2BVxWQ36N%2BNsFudQ071DK1oqd2pdQJlRxYBLCBH61JnlmPbIG98z1142do6KHycjugRJ91VBM5C6bsRvQyLQTS68xCRTqzAZGWIGFvq7OcbyRVQnkRb6Nouqv%2FcXJ70Q7PdGc3WZ3wOyHauvS11Slq5OdwOKzKTKR5nat8Gv6KFAJlgYEo%2BvXTni2fHAjNR0EqBOj9IDRYEsI%2FJ8LTwBQ%2BLQLlJuu7Y3y383q9%2BWNqUptkOGVA%2FMHaNMzAot5j25ai%2FeuC5Co%2Fy9FfnPecdvkVGi3Ue9ZKBt0LXmOXTyt2Y1HCmLvE9asf9fYHWRKbizkfys%2FYPI214E%2Bq66PfQ%2F30LZV5i%2BuL9XrYWPxBKLKW9bxb209ThM2YiHintSZScsQJoYaNtUqP10SV0qdALkg33fhKdtEexG9WNODJjPuafTPGb%2BUvWWJWqHtJZGvFQSWfDd5irvEaHTN3iQ6og4erYo%2BMN31jO1JJHhzUaP6VR2qm%2FxxIsA%2B4EM5IF3kpyIXlHF8ieWh39tFwFeFciosM6dpfSliuS29pNw7YO%2BnbgN7oFRThmsw2YPZwwY6pgHnpueCWmvkivCXl1tVRfvvjRvvx4P5tceRUkVk%2BwdBsqoVuMwacp9yV3YK7%2BazLGE9LviYDwFgMkRj8GEWPyVGbxsZB%2FqbuJqdFlAP4DQBA8p4LLbKu%2F%2B53pPukYSKCnuab5pr8SulZ3UEVfkFghGoQ329JFdblOCQTOKhSbbVU%2F1SWhUs40n8Q5y52SoSuMBqF5pXofBjRFX18xjgXVyA6anYu9l%2B&X-Amz-Signature=89d93d5123a738f302e0e96aed2d1076a49e17ebfc3ef4eace471bf74227ede5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
