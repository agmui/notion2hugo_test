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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIKBPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FaWf4x4dGSKEpYZ2aoHLYQ4DkfuzLNjlgS6bzlyE0AiAz7BTuka6rpU1jebOeyxbtWTmvfksNBlgjWwch%2BLYKWir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FDYFMS6wFzaf8fXvKtwDo7rfmmepUgopGIHDPH8qaItQlBqS8tVZLjrvcUvsbBtSNzLAbm4ybeSaGWgUeV6LOe6lHO%2FGth1m2RgWLmnZBXa6AhxZzMxfwdfxdn1wByJ701K%2BT%2FNdgNM9rrJgnNNE4YbPaOd0N4vakfCDrkGt8UYLx58hIkxMT32EbKs8z5KOb0dvk%2B7w5ZLDFq4XOCIXXD4Hcy7Hjy4GSc%2B%2BnQHh2zfkFjUDuNOpZJR4VN0JiFYqnB3Jgy9EcCTjhIEq7SofQGRlzr8PlrFGGahLUdsCNzOytKwA1XIYAkK2bn2qa%2FQO0OoycM3p6vWqUwNBMKsqyxRl4nsq5Ml3HrmfIOpKHNz%2BVOrcRQuexiQByb1ebmy7fm%2F4miduiXYRlfvHaXM%2BefnEEwAtSRtryiD9ByXvh0i%2BAfCwWX3I6Q%2FB%2B030kq%2B0DGgMTsGC2uFO6NxiUgAar%2BkZIbL6IAV2x0pBa9BzyqMA1RuE3z4ijufIvkzgGKMzRCuccplQvBS3zcyCK8sDrYTwOwqPFl8o1DpNlZajpQk3MsO4PdWypP4Viv89xll2s%2F06k5heyH%2F2Q6skGWb4ih1gKLB37y8mw%2FnrUOGqDqeY2EqaL26PoXvnnniF%2F2jfGbySna4yX8UYu3ow2YC6xAY6pgHJIAoc%2Bpu8DyN4R358J9mVpoZ2HvnQqFdDfKTEbCdfNBU3pCnhS2UfexdKT7WUAnBWzhhOSi5L%2B%2FM5OevAbDdistF32F6tAtRCj7kSbkt%2BS1EjfzUq9pFgKb5o66QzhbvkuEDedl55xHdD4G%2BSJlyuRBQb%2F2sNauE0Draz8tudQm4oJliCDse0BLYH5KhJf4T5EzYTIKpXfzXlpdxqeHyY6uwz0iYY&X-Amz-Signature=115250c9ddccacf5ca26d688667231caf0966b3e1a760b2a844728addcda980c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIKBPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FaWf4x4dGSKEpYZ2aoHLYQ4DkfuzLNjlgS6bzlyE0AiAz7BTuka6rpU1jebOeyxbtWTmvfksNBlgjWwch%2BLYKWir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FDYFMS6wFzaf8fXvKtwDo7rfmmepUgopGIHDPH8qaItQlBqS8tVZLjrvcUvsbBtSNzLAbm4ybeSaGWgUeV6LOe6lHO%2FGth1m2RgWLmnZBXa6AhxZzMxfwdfxdn1wByJ701K%2BT%2FNdgNM9rrJgnNNE4YbPaOd0N4vakfCDrkGt8UYLx58hIkxMT32EbKs8z5KOb0dvk%2B7w5ZLDFq4XOCIXXD4Hcy7Hjy4GSc%2B%2BnQHh2zfkFjUDuNOpZJR4VN0JiFYqnB3Jgy9EcCTjhIEq7SofQGRlzr8PlrFGGahLUdsCNzOytKwA1XIYAkK2bn2qa%2FQO0OoycM3p6vWqUwNBMKsqyxRl4nsq5Ml3HrmfIOpKHNz%2BVOrcRQuexiQByb1ebmy7fm%2F4miduiXYRlfvHaXM%2BefnEEwAtSRtryiD9ByXvh0i%2BAfCwWX3I6Q%2FB%2B030kq%2B0DGgMTsGC2uFO6NxiUgAar%2BkZIbL6IAV2x0pBa9BzyqMA1RuE3z4ijufIvkzgGKMzRCuccplQvBS3zcyCK8sDrYTwOwqPFl8o1DpNlZajpQk3MsO4PdWypP4Viv89xll2s%2F06k5heyH%2F2Q6skGWb4ih1gKLB37y8mw%2FnrUOGqDqeY2EqaL26PoXvnnniF%2F2jfGbySna4yX8UYu3ow2YC6xAY6pgHJIAoc%2Bpu8DyN4R358J9mVpoZ2HvnQqFdDfKTEbCdfNBU3pCnhS2UfexdKT7WUAnBWzhhOSi5L%2B%2FM5OevAbDdistF32F6tAtRCj7kSbkt%2BS1EjfzUq9pFgKb5o66QzhbvkuEDedl55xHdD4G%2BSJlyuRBQb%2F2sNauE0Draz8tudQm4oJliCDse0BLYH5KhJf4T5EzYTIKpXfzXlpdxqeHyY6uwz0iYY&X-Amz-Signature=95085b17a7abc3d92a5d3582555e07d36502ef0a5761c4ac18d60139ab19734e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIKBPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FaWf4x4dGSKEpYZ2aoHLYQ4DkfuzLNjlgS6bzlyE0AiAz7BTuka6rpU1jebOeyxbtWTmvfksNBlgjWwch%2BLYKWir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FDYFMS6wFzaf8fXvKtwDo7rfmmepUgopGIHDPH8qaItQlBqS8tVZLjrvcUvsbBtSNzLAbm4ybeSaGWgUeV6LOe6lHO%2FGth1m2RgWLmnZBXa6AhxZzMxfwdfxdn1wByJ701K%2BT%2FNdgNM9rrJgnNNE4YbPaOd0N4vakfCDrkGt8UYLx58hIkxMT32EbKs8z5KOb0dvk%2B7w5ZLDFq4XOCIXXD4Hcy7Hjy4GSc%2B%2BnQHh2zfkFjUDuNOpZJR4VN0JiFYqnB3Jgy9EcCTjhIEq7SofQGRlzr8PlrFGGahLUdsCNzOytKwA1XIYAkK2bn2qa%2FQO0OoycM3p6vWqUwNBMKsqyxRl4nsq5Ml3HrmfIOpKHNz%2BVOrcRQuexiQByb1ebmy7fm%2F4miduiXYRlfvHaXM%2BefnEEwAtSRtryiD9ByXvh0i%2BAfCwWX3I6Q%2FB%2B030kq%2B0DGgMTsGC2uFO6NxiUgAar%2BkZIbL6IAV2x0pBa9BzyqMA1RuE3z4ijufIvkzgGKMzRCuccplQvBS3zcyCK8sDrYTwOwqPFl8o1DpNlZajpQk3MsO4PdWypP4Viv89xll2s%2F06k5heyH%2F2Q6skGWb4ih1gKLB37y8mw%2FnrUOGqDqeY2EqaL26PoXvnnniF%2F2jfGbySna4yX8UYu3ow2YC6xAY6pgHJIAoc%2Bpu8DyN4R358J9mVpoZ2HvnQqFdDfKTEbCdfNBU3pCnhS2UfexdKT7WUAnBWzhhOSi5L%2B%2FM5OevAbDdistF32F6tAtRCj7kSbkt%2BS1EjfzUq9pFgKb5o66QzhbvkuEDedl55xHdD4G%2BSJlyuRBQb%2F2sNauE0Draz8tudQm4oJliCDse0BLYH5KhJf4T5EzYTIKpXfzXlpdxqeHyY6uwz0iYY&X-Amz-Signature=1e69c141d410e54968dbb2b208acf75bba6468d937266335c31469685bbac603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NGATZB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA86u5CYHuViTN7QeGrmxPX8Qdp2lAPOKYTuv2gDb5U0AiEAwJX%2FcrtKtM%2FlLOD15exSr%2F48AUEwQyMOTSEF0UgZmTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDMIfGw7VClJwXoEX1ircA4T8EPolycDcE69XaB8PEGFtezhmXlqMbXvLOZbTqlkofogYw4QKQkZVS1a8WBwIZVkd66Z58YiD1bc8j265y99Anfcor4sqAUK3tgaSrMaza2b1Om6FxCp2cpGtM%2B3STH58jn5FtGL2CYf3JbHhW0vEO2Sacga6WrHOStXUg23coMuLShLZGCKQbelAyRRDYHa0K6QEw3chD1zLARyq6wsY5fiOKx9Ty75y3dZjwJ8WFepd3tygzXBAXGaZWXv2eX574XO67Ry%2BUlK5nWRaRKTGFlHSNetbasBlFqQMfmob%2BY9Mhp6J%2FEA9r0vA8WRzFT2S9PQESoJltmPEyBYY2WwTRi7Yw7JmJeAKW%2B1pq8GSGCrIpllh8BXJaeFwAlCTs8kXy8MOd%2Bx4zhrNK9Cw2yxYDpp0ztEp6pbmW9JAy86T2WJhwgkyn0vcs3B57JRp8xXlpjirPoEsT31htrX9IJQLD%2B94vOZfbYbKxs02orAh65ThnWmRs31BTuYF9JTQwyXr3j9qaUNY6QQC7nozulShteMC9wc7oZsQwJ524IYqS0r%2FVBmXXCYwLwkH9%2BNKxWXWy8%2FaYAP0%2B3L7svv%2FeXswHThXFmO7uqnWQWV9bH0%2BLW3Q6sbCtyTnDPB5MMCAusQGOqUBk4gVwXbkKr3JffVgfcfLuGxoUlCYwh4KosuZDuRzwZL5BFZjbFg9LT8QOm82Sm0uzE0nDTRrUvJGoRWGMFa1MHhCdGosJhKUNT%2FjoD2sas9eNJnth7yBCeleAUknAuTZl5OS2IG3TMjGF%2FxcDKO%2FkoTsITCi7iE3IxBJfVjNb2DTO3BmzkEEs3LG20G%2B%2FMIauqlr4f%2FduM3ipdbzzS2XVsKWFCNx&X-Amz-Signature=d3753286412fb075e4ebaf1a48c2f169b91bf6e13e4c888d122eb9f1dc8c6b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZQEREW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdRSeJRgH03nCNZ2M553yhVN7Tfu4csr1pZW3hFOfsNgIgTmrKHejBNvZa9yx%2F9W%2FoiS5d%2FAfh15HaX6RloRlHJFEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFSQtVP0YsIDimMZuircA%2FbXUjtzji35fKvqYSOepqiR73G6rZHv%2B%2BzDlWlzhqXUyhoYXZYbVkkJIPdp3j%2FmsqMyt3A4jdHpPcHWSHrOjujouy2gVbRHy6yg8fm%2F5KD1rHwr5CoAt7nVR3LjdaIFWdDKtLrw%2BGYku%2Blh9ymCgV2G%2FBis8%2BXyv5vQw2y8cDhAlbYc732v%2BfdNrY4pMFejLlGYfmfeCtfzzUYfQjGL%2F3MlhbrL0A6am35Rpx%2Br6Hsgv%2B7802S2MjfdCm9xWljvaltUEVJxWB%2BO1rD8n7pIDgoowVNzVw2KrjpQBPGLVEFLOSyMohoPkiBTfDNjMgFzgMfyaTh80RqZ%2Fv0RyT4DoER2vu343Ij9DWrBTfx2IWvHjndjFQxKu%2F%2BUi6hEOE%2FViTvYUwG%2F%2BWaBdUCEhMr9infndDNcFfQkp4gm6HWJV93IsSXo3u6JygX0kRMMEuEer1yyTluASAXGYXxvlvJv7tCGPAv0Zx22X4DWjJhq%2FOi%2BqopXF8PWlpw%2BKfa79zpNIE3Vsm1m5chDtYHRAXdEYkAANuqf3ro1Dbw8ATCV5gJmM0jDQHmu%2B5mjmtTvApxnzYssMuHFYULURNvLfs7z%2F58bNZ6kakOI8VcwD1oO0JALupNyA67rXavAE%2FIBMJmBusQGOqUBvKKAtKxcKLawCUifdbWNeIIghP1H9cNw0%2FZjVqatmK9lUI20qz%2B7apt9axj%2FkehTmiVnjeh89YVcIWp8XeLv7R4bzPLgJY%2FlD7UOWpVdq6dxV81twkao9Z%2FzJwC3M4nyu2pYndJMZVHSz%2BhSQuZ%2FKHOKhGet6ZyYtwSGS7cwzjuDktKQAj8ie6RLiJ62iBirkihdebbHma4SrY2Xook3QktevLuA&X-Amz-Signature=2544745e0d4767ed3c6775a3f92a2cb46eee13501d7971027372d9449940314b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIKBPJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS%2FaWf4x4dGSKEpYZ2aoHLYQ4DkfuzLNjlgS6bzlyE0AiAz7BTuka6rpU1jebOeyxbtWTmvfksNBlgjWwch%2BLYKWir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIM%2FDYFMS6wFzaf8fXvKtwDo7rfmmepUgopGIHDPH8qaItQlBqS8tVZLjrvcUvsbBtSNzLAbm4ybeSaGWgUeV6LOe6lHO%2FGth1m2RgWLmnZBXa6AhxZzMxfwdfxdn1wByJ701K%2BT%2FNdgNM9rrJgnNNE4YbPaOd0N4vakfCDrkGt8UYLx58hIkxMT32EbKs8z5KOb0dvk%2B7w5ZLDFq4XOCIXXD4Hcy7Hjy4GSc%2B%2BnQHh2zfkFjUDuNOpZJR4VN0JiFYqnB3Jgy9EcCTjhIEq7SofQGRlzr8PlrFGGahLUdsCNzOytKwA1XIYAkK2bn2qa%2FQO0OoycM3p6vWqUwNBMKsqyxRl4nsq5Ml3HrmfIOpKHNz%2BVOrcRQuexiQByb1ebmy7fm%2F4miduiXYRlfvHaXM%2BefnEEwAtSRtryiD9ByXvh0i%2BAfCwWX3I6Q%2FB%2B030kq%2B0DGgMTsGC2uFO6NxiUgAar%2BkZIbL6IAV2x0pBa9BzyqMA1RuE3z4ijufIvkzgGKMzRCuccplQvBS3zcyCK8sDrYTwOwqPFl8o1DpNlZajpQk3MsO4PdWypP4Viv89xll2s%2F06k5heyH%2F2Q6skGWb4ih1gKLB37y8mw%2FnrUOGqDqeY2EqaL26PoXvnnniF%2F2jfGbySna4yX8UYu3ow2YC6xAY6pgHJIAoc%2Bpu8DyN4R358J9mVpoZ2HvnQqFdDfKTEbCdfNBU3pCnhS2UfexdKT7WUAnBWzhhOSi5L%2B%2FM5OevAbDdistF32F6tAtRCj7kSbkt%2BS1EjfzUq9pFgKb5o66QzhbvkuEDedl55xHdD4G%2BSJlyuRBQb%2F2sNauE0Draz8tudQm4oJliCDse0BLYH5KhJf4T5EzYTIKpXfzXlpdxqeHyY6uwz0iYY&X-Amz-Signature=2f61684ae58b1547d9a83c8ec6aeda9fe2232db03c84a245c1450f033f455e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
