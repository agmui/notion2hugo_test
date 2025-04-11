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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCIYIGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDhvtkWZdBOVhJBddFzhPVQAkj%2FN2%2BOtz%2B7Lnwszp5mCgIhAMvr2WeZ9Lw2K8Ep8%2FqX66KG5IjpZU5qUHJBVRoQe2%2B5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP70vH5gjhw7GjmXwq3AM1v9PpKej058Uis61UtgzPiGyXmsKYvUzDq6vF3vLzPwHOJWYSUt%2BFl3ThgfnWsWCTBWRyMOt6LDIMIlzSf3uQ4ryxXoj6BVRiBlXzRh8IVA%2BveiiTccb64YrvvYjcpA5YAGP3u9EiPAqcdHLaWbjMaLkTseGRaSeAU29ihIffXOU1%2FI2MnfufNPIvv4rsEKtzzvsy4OtqJLhkey1XM8KjKpGPO53%2FCRsDUQI%2Bljc2xiQ3Zhax3xuYzLk5%2FlvlYmVnVdFwRuoKAhhTANpBkF9qxjgPhFWRS6HBRUIz2dIpBa2QpkNtfYsDYB3PvzPe380BPx0BJrF6jBWV6nvICDK%2BYdHGbVK7HTWH0ncgrsymyd%2FNU%2F8SSTI%2BAwwVsXfTXwxwz%2BfV5SbNsRE%2FSgu2QOljyoGWrlTpJAxLnZmRi4ibdxDDZ%2FfR6Dv4TRHxfR5FWQQKUDDCE2X9XBxDZKYrR1uZ1laCh6%2FkeKRAQ4McQZfun1LAcOsFcqWORgA4ZDuciAxTfAW3ja7VQVMLuwp%2Fm85fTLq9mGgZJiJQlCP%2F17meeM%2B%2BKBCj0ceeQSjMjBsZtet5a2K%2BhnYeBbY9furE8YVeHltqR3BrqHA0WktyqYES73HZKjbP0FUCYx8Q4jCr3eK%2FBjqkAdTl3zKe9Ki1Gxc%2Fst9y8%2FGcQdDJtfn%2BXX%2BGUa%2F5wXjZFo4nys6eQ3Dr9S%2BDMkwRGIHYRLDeFrwSUQXhniHfIpcyk%2FpkqUid1VxjJtOEZFn%2Fc4BfYiFUOZBFRiiosiDUmbyW8z9mZ7lIxiDmHPUbe49HrHYpEj0v8ckNRhmtsH%2BieScs4PehB%2Bs6q2W%2BnudD7oo29oMNuUqALjP92P0DDSWCE%2FX5&X-Amz-Signature=8d1ad6141db589aba94fcd9cb1f299a2a727c7a099f922e609618d90eb6962e1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCIYIGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDhvtkWZdBOVhJBddFzhPVQAkj%2FN2%2BOtz%2B7Lnwszp5mCgIhAMvr2WeZ9Lw2K8Ep8%2FqX66KG5IjpZU5qUHJBVRoQe2%2B5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP70vH5gjhw7GjmXwq3AM1v9PpKej058Uis61UtgzPiGyXmsKYvUzDq6vF3vLzPwHOJWYSUt%2BFl3ThgfnWsWCTBWRyMOt6LDIMIlzSf3uQ4ryxXoj6BVRiBlXzRh8IVA%2BveiiTccb64YrvvYjcpA5YAGP3u9EiPAqcdHLaWbjMaLkTseGRaSeAU29ihIffXOU1%2FI2MnfufNPIvv4rsEKtzzvsy4OtqJLhkey1XM8KjKpGPO53%2FCRsDUQI%2Bljc2xiQ3Zhax3xuYzLk5%2FlvlYmVnVdFwRuoKAhhTANpBkF9qxjgPhFWRS6HBRUIz2dIpBa2QpkNtfYsDYB3PvzPe380BPx0BJrF6jBWV6nvICDK%2BYdHGbVK7HTWH0ncgrsymyd%2FNU%2F8SSTI%2BAwwVsXfTXwxwz%2BfV5SbNsRE%2FSgu2QOljyoGWrlTpJAxLnZmRi4ibdxDDZ%2FfR6Dv4TRHxfR5FWQQKUDDCE2X9XBxDZKYrR1uZ1laCh6%2FkeKRAQ4McQZfun1LAcOsFcqWORgA4ZDuciAxTfAW3ja7VQVMLuwp%2Fm85fTLq9mGgZJiJQlCP%2F17meeM%2B%2BKBCj0ceeQSjMjBsZtet5a2K%2BhnYeBbY9furE8YVeHltqR3BrqHA0WktyqYES73HZKjbP0FUCYx8Q4jCr3eK%2FBjqkAdTl3zKe9Ki1Gxc%2Fst9y8%2FGcQdDJtfn%2BXX%2BGUa%2F5wXjZFo4nys6eQ3Dr9S%2BDMkwRGIHYRLDeFrwSUQXhniHfIpcyk%2FpkqUid1VxjJtOEZFn%2Fc4BfYiFUOZBFRiiosiDUmbyW8z9mZ7lIxiDmHPUbe49HrHYpEj0v8ckNRhmtsH%2BieScs4PehB%2Bs6q2W%2BnudD7oo29oMNuUqALjP92P0DDSWCE%2FX5&X-Amz-Signature=e034f134b1a88d9318a900106e09afd8a5d194fa92bc04bd8beb2d4022a71b15&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WHLVWF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIA3dnTguNXCtrM7RKucUBnbwuyVVTo9DZQyzciCJ3ZAbAiEAzveW6u3pXeE2GJ6jZgSztayR15Ds3be7e%2FmtQC%2BlQ7EqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEvpcmMaUey%2FrUcXyrcA%2BE9vS1DMkJSBqDPT8n8WD%2BQSqITruUIJ2ig%2Bk945EXNxW3s5QpATaAvtj%2Fqv%2BjSWfSehURvrA3KBUDwk9Aa%2FQ%2B0fFxKL3kBzpmE3qidQBgFxuDiyp%2Bch8UhSFLwXE3OjiAE%2Fm%2BZJSDkQIr%2FLK1dnkt1c5OVLeM0ZKqorgc4dhAeKwscJ8YfPZ7QNsphyV%2F6kw%2B19T0TQNpSvMzszf6EP22L4oTX8Qpdj8ntm7qXn8Q0HFGW98aYqMsKngMofamzaTQNzvBV0CFll%2BrB9YFOdu48AZFxt7e5xADpBuGrFbCZ0jp%2FGRtIhTOnfozNOkcsqmJoRqV9u3WV2vHyYhoQYJxdu3v81PTnZ%2FSqGo5jVhduKkcW5NLVF7cfQ%2BSotj2aprlZ8yqDos1SG6H2RuJYk6XqpisMvnp5jras%2B%2FAi3ci7NucrRFrM2Uu3wSTbdqPRfTuLNvl783lU%2BLDaIKo1bpcwqtDUsE0gh3UPl340uVFYASsIjPNRlCfIRRkIUh%2BsGzx2rr8jHLT5U4e5KaCseyvBy1JtWrxHyFbmtAWOgVOOMamNkCzg40bSgkk%2FRQHsVXnfr5kWjTbKk%2B2UDv1aYRHx6%2Fo0IE18Z41CcP63WJ3aDvn3AvszqhdO6o5bMPDd4r8GOqUBoN0dnqhA5gOCC6OTZjUbkEE7B5XdUmHhJy96JGKTKRKvsOvyaAsxc2HTiBSviB%2BT5U511tqGjo%2BbL465ivwnhe1T2iSUxvaoiC8u301VLJNsMh8ZqJXaSWDUwZDngdzwc7gmyQF0hHxqYNhXCIJM2R160CnQzJJsJ3YFQkFi2hR879H7ywj15HgkpeWdgWGU0RDmbyKI%2FGWPuh7NnTm3a8ZFcD%2B4&X-Amz-Signature=7d80d916b70389efc2a7f64a990078b19a73f8f2b3313c4311247f4d425ad3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GTX3VTE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIH9RiOFI58ISQUDESKvKyQPKfreRoFeOb%2FN%2BW7AgPSNlAiEA8LjxnGXQgXX6YFUBZ8hP0pw2JXhjKNymhbGjW7KjxpcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkx5ckxgyqW8HG9QyrcAwGPtdcnfktEHgiCNDXMsKQcj02W87Y2Fs5sJRzf0iOi8T8RcHmuR383VJ9Zp9Z0Bu%2B7sn6%2Fr81VlHTz%2F3XADIwWzVg3FBnweLGMLzeDNy%2FBqCpbIVtBoa8eeBNHvdviGnGBtR3wXX5eUO47ejUYvsD4jC2IsIxcnOW0zni4BwzRNUrBIvSaKK2t%2BrUhUUHgGPHuaeYWdPJsZSl%2FN8x8j6%2BXoyZD575aj10hvACX50F993d3XBnQfmZKd8zNm4ML9l6lT7%2F4qSeQB0NW9imy3RiXI%2B43aRkGjHs%2Brkjj1fDUl94zWojORjMpL2DMwfPdIaaUQl87DnTqSsQ0muqGDwb6qL%2Fn6ZpKDpNbBVbFUt8vwEhksNcbQzU1ldF9P6hdsK59MV9bDGEq%2FjntcSKZ5RqtoYGki6aff5YROYtCyH190ya3XmOV8OXGR%2Bb6N4A7GEXaGb7BT0NpMyAAxXXa%2BlOnKy76K%2BrrU7F3P6Va2HREhJuNGdHHOzgLI%2BIhAIu8tSN%2FcsLxzIMIKdZpTvPZkF2ocXwTB3Qhct9H1QQbgx53AN71xEsOWjREXgpi8TiVOo7Zllgtq3VjJ6W%2FmS9%2F7esY%2F4fQWxfFGSKyGhXtxZsVHSdz5ZtJgblUklwQML3d4r8GOqUB5hIvy79tn0zMc7nD1J8bgLl%2BUs2JmBWAN7Ncvgb3nsvoIqoaOkn%2B6Nw7w6QBgVQxQ5ZEpiJdvNo19LrK3x9LLQSbU7uO9RXWN4ZDCZs8l1n03psztOWth%2B%2BNhWuZDYgfZ3egbk1hrRCRRaMc0vOXARDHy%2BDOh6YOoUUkrbYgGIRZtL7kxnOcUC%2FCufUQGhKVEG9Pyu3WnSJ0rnAyNYceW1aIH0%2Ft&X-Amz-Signature=dc7513c97b1558e20cf4f255d0da46e04293387fc5e35692f9b1530720bc3048&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XCIYIGE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDhvtkWZdBOVhJBddFzhPVQAkj%2FN2%2BOtz%2B7Lnwszp5mCgIhAMvr2WeZ9Lw2K8Ep8%2FqX66KG5IjpZU5qUHJBVRoQe2%2B5KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP70vH5gjhw7GjmXwq3AM1v9PpKej058Uis61UtgzPiGyXmsKYvUzDq6vF3vLzPwHOJWYSUt%2BFl3ThgfnWsWCTBWRyMOt6LDIMIlzSf3uQ4ryxXoj6BVRiBlXzRh8IVA%2BveiiTccb64YrvvYjcpA5YAGP3u9EiPAqcdHLaWbjMaLkTseGRaSeAU29ihIffXOU1%2FI2MnfufNPIvv4rsEKtzzvsy4OtqJLhkey1XM8KjKpGPO53%2FCRsDUQI%2Bljc2xiQ3Zhax3xuYzLk5%2FlvlYmVnVdFwRuoKAhhTANpBkF9qxjgPhFWRS6HBRUIz2dIpBa2QpkNtfYsDYB3PvzPe380BPx0BJrF6jBWV6nvICDK%2BYdHGbVK7HTWH0ncgrsymyd%2FNU%2F8SSTI%2BAwwVsXfTXwxwz%2BfV5SbNsRE%2FSgu2QOljyoGWrlTpJAxLnZmRi4ibdxDDZ%2FfR6Dv4TRHxfR5FWQQKUDDCE2X9XBxDZKYrR1uZ1laCh6%2FkeKRAQ4McQZfun1LAcOsFcqWORgA4ZDuciAxTfAW3ja7VQVMLuwp%2Fm85fTLq9mGgZJiJQlCP%2F17meeM%2B%2BKBCj0ceeQSjMjBsZtet5a2K%2BhnYeBbY9furE8YVeHltqR3BrqHA0WktyqYES73HZKjbP0FUCYx8Q4jCr3eK%2FBjqkAdTl3zKe9Ki1Gxc%2Fst9y8%2FGcQdDJtfn%2BXX%2BGUa%2F5wXjZFo4nys6eQ3Dr9S%2BDMkwRGIHYRLDeFrwSUQXhniHfIpcyk%2FpkqUid1VxjJtOEZFn%2Fc4BfYiFUOZBFRiiosiDUmbyW8z9mZ7lIxiDmHPUbe49HrHYpEj0v8ckNRhmtsH%2BieScs4PehB%2Bs6q2W%2BnudD7oo29oMNuUqALjP92P0DDSWCE%2FX5&X-Amz-Signature=834085355e739c0a8f053d25f0c5b3bf6d5d7ef5e79a54a6ba4a94b873e7b53e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
