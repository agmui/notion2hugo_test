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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQP3QYF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5fHe49c9x7bSzTPtT%2Fd2fozLk0lKzJyXkHPsB2o9mQIhANNjsuHMnA%2BrX35SM4uUtCj2%2Bj0ztOJpZ9pOQ42wVdwkKv8DCHMQABoMNjM3NDIzMTgzODA1IgzdsaFFR9yk78xqlc8q3APHt6E%2FRaOFn62D2z7B95aAZp5osjvzXSReGSB%2BuhenmJteGAc7h8aUh7J4uJ8E8dcHSdAjSYyE%2BYhYkfuR08s88PpRFH8HBq%2BfWekJXYKTi52zMiO%2BklNAxErFlN0kkSBfR03uHUjNMeobp%2FBhpdAD1yqka1Qyr6C%2FcPaKF1bCkmHR7VDf76nRxpkqwYuHkTvbUbI2lCBP2o73cD8m%2B5EsBA5NNm%2F6bETsKgAZzWzqBgL4yNzGtS%2Bv%2B1sQAYRGXdYp65IR4hMPxc4j7LxNBw%2B7dxx5vy2Lq96KcPb9tW%2BwzFThNzAWQoxRoCcWuaq5jy5TGsOeO9i3UGcSZlcT6uNkOOx2CqPAdlSspc03k26Pi4uVqXPI9TLZeSz8k63RcCnPD5Rw%2BngL%2BdYajmFut2JEj%2BdtPt1hoxbAXW0jPK9PXGOHget%2FKklrqvwhnA%2Bvnwrc6s3lBI%2B968uGl%2FRxbjAc3hyiOT0t7QcbOvOVNPSjqTP3%2FNcpDt4I5HmYDgtlU7M9FbAAJ%2BYFOCB%2BCgl4KxRHC4cT1Klkww1GzDOCggcu3nqwv6zaacrdOQwhH1XZ8F1seb8cCDiL0tGEM7B1ZW6IIiWYIA%2BRHzNi4%2BBWskJjLdyd%2FegkYaldIbAFHjC8wdvBBjqkAT2sPN4FGP1KEZSH3Fs5zbYa7RvdpQpGElyFuIPD%2Bn%2FQxr%2Bu2oUAKXqX6IB7xAFacDlXvs5iEy17kedUUxpe9U6rH6Gb2mVk0SUIftH7TSxPPfeC91%2Bf8ZuaSjYPChRLF%2BikaXqDMl0ULh73t%2Btn0HCnAENOafQyh6Ij6BWCNRESmbL3ExXKajFZlwSiHFEUcilkCrRmCCHexI1Fbo8szbYE%2FEJe&X-Amz-Signature=6c5e489f9277f41a424c71792b9f3dde54585dd6566bbc70e345890c758b162e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQP3QYF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5fHe49c9x7bSzTPtT%2Fd2fozLk0lKzJyXkHPsB2o9mQIhANNjsuHMnA%2BrX35SM4uUtCj2%2Bj0ztOJpZ9pOQ42wVdwkKv8DCHMQABoMNjM3NDIzMTgzODA1IgzdsaFFR9yk78xqlc8q3APHt6E%2FRaOFn62D2z7B95aAZp5osjvzXSReGSB%2BuhenmJteGAc7h8aUh7J4uJ8E8dcHSdAjSYyE%2BYhYkfuR08s88PpRFH8HBq%2BfWekJXYKTi52zMiO%2BklNAxErFlN0kkSBfR03uHUjNMeobp%2FBhpdAD1yqka1Qyr6C%2FcPaKF1bCkmHR7VDf76nRxpkqwYuHkTvbUbI2lCBP2o73cD8m%2B5EsBA5NNm%2F6bETsKgAZzWzqBgL4yNzGtS%2Bv%2B1sQAYRGXdYp65IR4hMPxc4j7LxNBw%2B7dxx5vy2Lq96KcPb9tW%2BwzFThNzAWQoxRoCcWuaq5jy5TGsOeO9i3UGcSZlcT6uNkOOx2CqPAdlSspc03k26Pi4uVqXPI9TLZeSz8k63RcCnPD5Rw%2BngL%2BdYajmFut2JEj%2BdtPt1hoxbAXW0jPK9PXGOHget%2FKklrqvwhnA%2Bvnwrc6s3lBI%2B968uGl%2FRxbjAc3hyiOT0t7QcbOvOVNPSjqTP3%2FNcpDt4I5HmYDgtlU7M9FbAAJ%2BYFOCB%2BCgl4KxRHC4cT1Klkww1GzDOCggcu3nqwv6zaacrdOQwhH1XZ8F1seb8cCDiL0tGEM7B1ZW6IIiWYIA%2BRHzNi4%2BBWskJjLdyd%2FegkYaldIbAFHjC8wdvBBjqkAT2sPN4FGP1KEZSH3Fs5zbYa7RvdpQpGElyFuIPD%2Bn%2FQxr%2Bu2oUAKXqX6IB7xAFacDlXvs5iEy17kedUUxpe9U6rH6Gb2mVk0SUIftH7TSxPPfeC91%2Bf8ZuaSjYPChRLF%2BikaXqDMl0ULh73t%2Btn0HCnAENOafQyh6Ij6BWCNRESmbL3ExXKajFZlwSiHFEUcilkCrRmCCHexI1Fbo8szbYE%2FEJe&X-Amz-Signature=21426da9ec8fe72b42070d7566277badc2180768a982168e0cb46b261f25ba60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQP3QYF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5fHe49c9x7bSzTPtT%2Fd2fozLk0lKzJyXkHPsB2o9mQIhANNjsuHMnA%2BrX35SM4uUtCj2%2Bj0ztOJpZ9pOQ42wVdwkKv8DCHMQABoMNjM3NDIzMTgzODA1IgzdsaFFR9yk78xqlc8q3APHt6E%2FRaOFn62D2z7B95aAZp5osjvzXSReGSB%2BuhenmJteGAc7h8aUh7J4uJ8E8dcHSdAjSYyE%2BYhYkfuR08s88PpRFH8HBq%2BfWekJXYKTi52zMiO%2BklNAxErFlN0kkSBfR03uHUjNMeobp%2FBhpdAD1yqka1Qyr6C%2FcPaKF1bCkmHR7VDf76nRxpkqwYuHkTvbUbI2lCBP2o73cD8m%2B5EsBA5NNm%2F6bETsKgAZzWzqBgL4yNzGtS%2Bv%2B1sQAYRGXdYp65IR4hMPxc4j7LxNBw%2B7dxx5vy2Lq96KcPb9tW%2BwzFThNzAWQoxRoCcWuaq5jy5TGsOeO9i3UGcSZlcT6uNkOOx2CqPAdlSspc03k26Pi4uVqXPI9TLZeSz8k63RcCnPD5Rw%2BngL%2BdYajmFut2JEj%2BdtPt1hoxbAXW0jPK9PXGOHget%2FKklrqvwhnA%2Bvnwrc6s3lBI%2B968uGl%2FRxbjAc3hyiOT0t7QcbOvOVNPSjqTP3%2FNcpDt4I5HmYDgtlU7M9FbAAJ%2BYFOCB%2BCgl4KxRHC4cT1Klkww1GzDOCggcu3nqwv6zaacrdOQwhH1XZ8F1seb8cCDiL0tGEM7B1ZW6IIiWYIA%2BRHzNi4%2BBWskJjLdyd%2FegkYaldIbAFHjC8wdvBBjqkAT2sPN4FGP1KEZSH3Fs5zbYa7RvdpQpGElyFuIPD%2Bn%2FQxr%2Bu2oUAKXqX6IB7xAFacDlXvs5iEy17kedUUxpe9U6rH6Gb2mVk0SUIftH7TSxPPfeC91%2Bf8ZuaSjYPChRLF%2BikaXqDMl0ULh73t%2Btn0HCnAENOafQyh6Ij6BWCNRESmbL3ExXKajFZlwSiHFEUcilkCrRmCCHexI1Fbo8szbYE%2FEJe&X-Amz-Signature=47d07599e63b5316627544128d91ae2051a9359604882a022b444e66e80de605&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BTMTV4V%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbzoLGWRXVitAYMsRXVtoPGeeRoJVBu5DfzWGk8dm%2BAQIgfLBwCWiYSp6o7j9AEM%2FT66pe4CZ5zYz7P1HviwOVhkYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOmb4HyRWcgDmSkeeircA1tfV3MyA7E%2FiLso6NihRM0EbIH60qI%2Bfazv0WEj%2BsjZYeP%2FK9NyS78YCO4ej5bIL5mKLWnvzs2sG%2BJb%2Bdsvvfdti4lgciV%2B0IoZkyR17ZUNORsUgCITYm8QFCOUNkybeo4wUEoVRlw%2Bj3yGyFVaU14i07RYLUhlYDtjCS4kGa44ZfIgxmUwsY87pg6QZctGF%2Bf3Ww%2Fqcjy6n2LSrrh2Ct%2BFtWpIepqQQbzaOyEcdyeTYQOkg7%2Fj0MCN9Yrw57bb1w4mWajW6pI32ULZLSbGwLuP9YXc2DmMHyreWwjzCCFpCz16LK8pjDGgbSe1AF8q5%2BiO%2F3pFG7eyuoRk0bBkiQefczCsO8BWpDJHrHpVyNjY6lXN%2FixXAk5rwRG4Po6UQDy4yQFAAtz7u6ihrFH7QmUhji7Ex77b%2FV3o%2BAbzv4FnZaZoNpvjWWxbK55sPVws8lp%2BBjESSJ9kWjRXunThm%2BQtrHQIu7edYgj%2Bd4fXYZk2bPcN7ow3pB9Jm4c17aIx1XLxPXgqD75fUHLaxWNAuebC4A5fOC%2Fy5ghhwGInXJfz%2BY6wt%2BkgKHqplrmK4IU4xp%2FrFwFsmUxlWdDRI15qMElP4S571DYNgRGc83%2ByHq8kMF6xWyXJQXYL2SPmMO%2FB28EGOqUBs%2B9YEZTTdBkJbXaIiBfcIZxsCwwRlHW4zEDTy2BAcKwEL%2Bd03YqD7KtiQAt28MclIAdIC9sgihXxUWICnIFuTNsz3aZ9XmhKfhdI276v6CgfLyLeBtHB0a79mGxioEJnFYuEKYH%2F4BI7U%2FLYKfCcsS8J%2FmGJ9vM1qUvjeokoLJG6acEoMel1fri4h%2FDfsxyVScF1xrW%2BcvEXEIlHIzVXtft5TEHk&X-Amz-Signature=f79c119f8175c29741491705b005b90e466000c3dbdaf03633b55e974e0fc813&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ64S3OT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdsAbPte9lHrREGOAvjSbblIRm%2FsayM76CLCxd7JIs6gIhALa8vYM5QFzamuyYyz87Qdk9slY6ycJVZRyRoADtApg3Kv8DCHMQABoMNjM3NDIzMTgzODA1Igzq%2BH404fTy5%2Frq4sgq3APoQJyfB%2Ba%2BSiPEiMYAwaAnsRoub5XOyjF8yjCKxkZmw62aGhaQPEQCUbD%2FDiQPNOSsoKkaJ3OgHgtvfo9qxWAWGVR6F%2BZOY%2BehV4tHPjuAO7AH3EHPHAjMeseA%2B%2BhVrcBEaA2jgVoEGra9z%2Fjd3XOWZ%2BDnyzC6N7jzXbJGcfGwDOe0C1FiBuQGACW4ic62Mjhw4sVzZ31qWNC2jw9Jjo4YhvyMkVX%2BupJ959u6YpdvJBZ8LiEHoSWCvwWe5byohClozwaXhl5WQF0hfG%2F%2BEa0HEhYup9kQX15tGhZaivWaJonhlkM%2F5hd8bHl0z4A6tWMADff%2FiK%2F%2FkrMSl3PtEaozpk2TIKOyRq54RsCugB2nxo1rQaGCt95Dx5ckrVyPA0mhMvJMR8Jx1svJLugHpcnM3bYQypwt8SqJpi0DGIvBi9VRS0bHgf%2F6n8d8riTv1RXpFt67f1X1yDH0o69shd3weOIncOEfXDzD7Rqb0Dhs9iDPDWyvpBCWWBY7i9R3ROoYjUodCWEATY9dcV6OIN0Qjk9%2F365niOGdVK60DcOJN9aQ%2BlrshKzx0SpOSyjZk53sgrK27ECJXmwUZHHkeQQp%2F%2Fx2FLmKFGIz2faxRhd0dGbP8XuPY3D4TudGNTD5wdvBBjqkAS6zBA%2BkgHRX1bJWCaeAMaTWDxmcpSyi7fsDNXZ2YjePC%2BQL2kRN8FxdwUYTNS3i6xkxNofO3hX82Tbh5r31zVHhh1v2WLYTgWq6%2FpEbYsiNk3SMscD5PZ9JLH6iQkxxB7jhVeb2RTzLmkNrpyAgXMcozwk4q21ASjEwshYIOpvNyZbQ2zF32WVPG45HtUEYjiKoqtPAhvBHaTPmRp9wOiOv7lfH&X-Amz-Signature=1a7bc09e7500171e89cf1ed124db5ba70f55b5d751a7b051ecc353c71006a76e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFQP3QYF%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi5fHe49c9x7bSzTPtT%2Fd2fozLk0lKzJyXkHPsB2o9mQIhANNjsuHMnA%2BrX35SM4uUtCj2%2Bj0ztOJpZ9pOQ42wVdwkKv8DCHMQABoMNjM3NDIzMTgzODA1IgzdsaFFR9yk78xqlc8q3APHt6E%2FRaOFn62D2z7B95aAZp5osjvzXSReGSB%2BuhenmJteGAc7h8aUh7J4uJ8E8dcHSdAjSYyE%2BYhYkfuR08s88PpRFH8HBq%2BfWekJXYKTi52zMiO%2BklNAxErFlN0kkSBfR03uHUjNMeobp%2FBhpdAD1yqka1Qyr6C%2FcPaKF1bCkmHR7VDf76nRxpkqwYuHkTvbUbI2lCBP2o73cD8m%2B5EsBA5NNm%2F6bETsKgAZzWzqBgL4yNzGtS%2Bv%2B1sQAYRGXdYp65IR4hMPxc4j7LxNBw%2B7dxx5vy2Lq96KcPb9tW%2BwzFThNzAWQoxRoCcWuaq5jy5TGsOeO9i3UGcSZlcT6uNkOOx2CqPAdlSspc03k26Pi4uVqXPI9TLZeSz8k63RcCnPD5Rw%2BngL%2BdYajmFut2JEj%2BdtPt1hoxbAXW0jPK9PXGOHget%2FKklrqvwhnA%2Bvnwrc6s3lBI%2B968uGl%2FRxbjAc3hyiOT0t7QcbOvOVNPSjqTP3%2FNcpDt4I5HmYDgtlU7M9FbAAJ%2BYFOCB%2BCgl4KxRHC4cT1Klkww1GzDOCggcu3nqwv6zaacrdOQwhH1XZ8F1seb8cCDiL0tGEM7B1ZW6IIiWYIA%2BRHzNi4%2BBWskJjLdyd%2FegkYaldIbAFHjC8wdvBBjqkAT2sPN4FGP1KEZSH3Fs5zbYa7RvdpQpGElyFuIPD%2Bn%2FQxr%2Bu2oUAKXqX6IB7xAFacDlXvs5iEy17kedUUxpe9U6rH6Gb2mVk0SUIftH7TSxPPfeC91%2Bf8ZuaSjYPChRLF%2BikaXqDMl0ULh73t%2Btn0HCnAENOafQyh6Ij6BWCNRESmbL3ExXKajFZlwSiHFEUcilkCrRmCCHexI1Fbo8szbYE%2FEJe&X-Amz-Signature=b7ef43fd6330124fd2316ec70353e6ad2297caf0f191024f128f1bce061c8bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
