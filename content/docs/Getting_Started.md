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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667555DA43%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqKLkVwBAO4NQX2K54bkV3Brd5FOt4jXH7G%2BE3XCDgiwIgTZY5VkO4iI5dEfsefrGsErXBp%2FAnM6uTgPurzXrE1KMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIlcFi5%2FxD7WmuCF6CrcA8S0QWcsxXLfsxrUQY1zPrL%2FtKzWb%2Fpq2dEIXVTiaRdNevkH3MixbZpolOEwboxV%2BpT7yCptw0k2tg1SeTw3ToKhyF7t%2BK42USSkUi8S5zWSbyfCIICWLd4z%2BHszAxbnFYkK%2FPv0WXBMtD5eDBXo%2B0GbYRdyPsyWSTHIScx6ZDfTp12UDHYw0W0a%2Buz%2BA8dLM4v9fKrG%2B9XlVrBIkZ54lt9gv7eQWgNxc45%2Bs3k4EsdilcNI1hjniJ9p1K7j7ngJ3p3p7TXY8XVrso7Awl3o%2FgotEhmWUiekK7xvtOm%2FIKTD%2FURhoIjfqTCKnnRvQarywis0sGu1wGVr7zQUjXhBk6i%2F6Bvz0Z6jYpwpfTqvjwhVZQ9ataGI8%2FTEhDAa3ZR5VoK8l4NDHCAKO06JmXg3J%2BesmuS0qD6eTDn2aDnrML%2B%2FealzyDmHPU%2F0l61NxDC3gGoO6rXFVkX3MXsr0eQydqbSkbprRIGAfVC832iDKG3uakZ7BsaffBWT4mKgWiS9VFSdsdjYPL6DZYEpokQt%2ByJxDzqsjuVjgPGxR%2FZyDC%2BBKK8yQzI2PVHPXgWoJli0D1OSJkHtPJ%2BVxV75sTHcUafAfxxCahZQhlfGlILW8GIvYerxktl%2Fd%2BosxMj8MNaR68AGOqUBulah%2B%2B5FcEmgl%2B%2BDmPKXUpKStq7KZrGLme9n5sEY31tsOJSA5UDbWjUYIjjvrnseerVOb6joqj29r6yDcmP9cbzZ6Rijidrel10eD0WF6sjK%2F3BtspIoi6ukAxUnn%2Fl4LBAq5RGt31HsDWMrWnC8H8jOL9QDlrikTXaqZtKbS5JqJp%2BcNZZUgCT1ZZicZRad85BrbX%2Fc8xoJEXTpozI93bdXdtZh&X-Amz-Signature=b65b083c9ed6b7e78befeac2b3d236b5e43470cde22a62287de32153ef68ca16&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667555DA43%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqKLkVwBAO4NQX2K54bkV3Brd5FOt4jXH7G%2BE3XCDgiwIgTZY5VkO4iI5dEfsefrGsErXBp%2FAnM6uTgPurzXrE1KMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIlcFi5%2FxD7WmuCF6CrcA8S0QWcsxXLfsxrUQY1zPrL%2FtKzWb%2Fpq2dEIXVTiaRdNevkH3MixbZpolOEwboxV%2BpT7yCptw0k2tg1SeTw3ToKhyF7t%2BK42USSkUi8S5zWSbyfCIICWLd4z%2BHszAxbnFYkK%2FPv0WXBMtD5eDBXo%2B0GbYRdyPsyWSTHIScx6ZDfTp12UDHYw0W0a%2Buz%2BA8dLM4v9fKrG%2B9XlVrBIkZ54lt9gv7eQWgNxc45%2Bs3k4EsdilcNI1hjniJ9p1K7j7ngJ3p3p7TXY8XVrso7Awl3o%2FgotEhmWUiekK7xvtOm%2FIKTD%2FURhoIjfqTCKnnRvQarywis0sGu1wGVr7zQUjXhBk6i%2F6Bvz0Z6jYpwpfTqvjwhVZQ9ataGI8%2FTEhDAa3ZR5VoK8l4NDHCAKO06JmXg3J%2BesmuS0qD6eTDn2aDnrML%2B%2FealzyDmHPU%2F0l61NxDC3gGoO6rXFVkX3MXsr0eQydqbSkbprRIGAfVC832iDKG3uakZ7BsaffBWT4mKgWiS9VFSdsdjYPL6DZYEpokQt%2ByJxDzqsjuVjgPGxR%2FZyDC%2BBKK8yQzI2PVHPXgWoJli0D1OSJkHtPJ%2BVxV75sTHcUafAfxxCahZQhlfGlILW8GIvYerxktl%2Fd%2BosxMj8MNaR68AGOqUBulah%2B%2B5FcEmgl%2B%2BDmPKXUpKStq7KZrGLme9n5sEY31tsOJSA5UDbWjUYIjjvrnseerVOb6joqj29r6yDcmP9cbzZ6Rijidrel10eD0WF6sjK%2F3BtspIoi6ukAxUnn%2Fl4LBAq5RGt31HsDWMrWnC8H8jOL9QDlrikTXaqZtKbS5JqJp%2BcNZZUgCT1ZZicZRad85BrbX%2Fc8xoJEXTpozI93bdXdtZh&X-Amz-Signature=eb94de276e7ceb34b7f3cf085cb40c3df107d091335989760fd5a98913a7fc2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667555DA43%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqKLkVwBAO4NQX2K54bkV3Brd5FOt4jXH7G%2BE3XCDgiwIgTZY5VkO4iI5dEfsefrGsErXBp%2FAnM6uTgPurzXrE1KMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIlcFi5%2FxD7WmuCF6CrcA8S0QWcsxXLfsxrUQY1zPrL%2FtKzWb%2Fpq2dEIXVTiaRdNevkH3MixbZpolOEwboxV%2BpT7yCptw0k2tg1SeTw3ToKhyF7t%2BK42USSkUi8S5zWSbyfCIICWLd4z%2BHszAxbnFYkK%2FPv0WXBMtD5eDBXo%2B0GbYRdyPsyWSTHIScx6ZDfTp12UDHYw0W0a%2Buz%2BA8dLM4v9fKrG%2B9XlVrBIkZ54lt9gv7eQWgNxc45%2Bs3k4EsdilcNI1hjniJ9p1K7j7ngJ3p3p7TXY8XVrso7Awl3o%2FgotEhmWUiekK7xvtOm%2FIKTD%2FURhoIjfqTCKnnRvQarywis0sGu1wGVr7zQUjXhBk6i%2F6Bvz0Z6jYpwpfTqvjwhVZQ9ataGI8%2FTEhDAa3ZR5VoK8l4NDHCAKO06JmXg3J%2BesmuS0qD6eTDn2aDnrML%2B%2FealzyDmHPU%2F0l61NxDC3gGoO6rXFVkX3MXsr0eQydqbSkbprRIGAfVC832iDKG3uakZ7BsaffBWT4mKgWiS9VFSdsdjYPL6DZYEpokQt%2ByJxDzqsjuVjgPGxR%2FZyDC%2BBKK8yQzI2PVHPXgWoJli0D1OSJkHtPJ%2BVxV75sTHcUafAfxxCahZQhlfGlILW8GIvYerxktl%2Fd%2BosxMj8MNaR68AGOqUBulah%2B%2B5FcEmgl%2B%2BDmPKXUpKStq7KZrGLme9n5sEY31tsOJSA5UDbWjUYIjjvrnseerVOb6joqj29r6yDcmP9cbzZ6Rijidrel10eD0WF6sjK%2F3BtspIoi6ukAxUnn%2Fl4LBAq5RGt31HsDWMrWnC8H8jOL9QDlrikTXaqZtKbS5JqJp%2BcNZZUgCT1ZZicZRad85BrbX%2Fc8xoJEXTpozI93bdXdtZh&X-Amz-Signature=000bd53325c87acc2aeb409fddcad810917f205d9e5efcc2e2a78f73403b81e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3PWFBKC%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsbw1XgA5HKeU5fXB4rSqRtxrp2VD%2FqWvFjXiK8tz1SQIhAOkagvbNHwZ%2Bi8VsdSMYLFHr4PV83z8BmyATyaWUIYnVKv8DCFQQABoMNjM3NDIzMTgzODA1IgzC2Y3u%2B89JHR0wt80q3AOWUBU3ZQqIi3OVL6OK5%2Fi2XOlrADAh6Ib53MOkC%2BXZelqQT5kLKDsrDPi%2F18AmsZzG9AmhhNmMN1TNkL7IL5wWJag71BIT%2BB%2B8Jteh6jOF15dg9mzd3q9kFqk88rRx7bPsc3xGirnEFXVXQNfHR37M0b76LAg4j8pH%2FvOdpgjwdVdmTQYeTh2UYjjg5TE60tI6OSjYJ2GCRY2jY8TFZLBNMRAUfqszUFyrJZuxZiQ7iVqhmAh%2F3OCu2yfBp0P%2F%2FEp6%2BGxczKjuqos9NEnfR1u75VHlNVkMjOMIUXaTQCDRP2MU%2BxYss5%2FkTbZHc4bbPel0%2FI9JOfwaLyhiETPu5JUawFTSELpVs3ck%2B5yw8hn1jyzxzyoIII7kSuxhh5%2BuLb7xTt08qsJL%2B88duM4WAZkQ4GI0o7CEW0bYpZDuewwbdeuWTqOhExef7qkZfHJjWuWI6h94mp4aiq2cPxTqAqZ8Q9R3DXzYJTkwTSxMd2ahLDub5%2BglfeO3aN3RXq2EQpMiafJoCExZnjvDtd9F9mO9RoG7UKyuMHP2NtjLL3prClHkfddRW2f8dVyfd8dC57axThD%2FazxwJGSye%2BysWCQHfPmbbA6OPCHhPkXSkdTtWE9cfxLvj7%2Bki2U2fDDtkevABjqkAcFLA2VuYWO%2FYRqqMQ70AFqAsyol1rt9CRhskt7dCUJ8TbD5slBiD%2F0Pj7gq%2FEPDefk%2FsEkgnD%2FgYf3XRNqKRZZ69FCq6Fq3djQDcfpu1h1Gpm5nC3lVgHxb8XEW9BOx0bh%2FEOXuRSal2OCnF8ArCw6QIevDL%2BVH1EqXv1v6JMwW5nN0QGzlPsu25g5d3PsugaUAbQGBF4Y3dgNwz6bWnqNDl1yV&X-Amz-Signature=5159deea7dce6504b7a97b655b70ef435af5b5f99b808446cd8caa156770a192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LR2OSLF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWPyEalyloMsNjMYL14Jb2AMkasRZX%2B5HJta%2FclPbssAiEA2WU%2FmgJRIkAzHlVxFHjUyZ9wHNu1AnXdMklrdWNG470q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDEJY8n1M1bykPT7fjCrcA4OCtTReO5ssY4IvWKl4Eccl%2FDOmdTk5tvhF6HtfX0s9TDgoW%2F91omxJD8gvB63g2ipg1SkzsO1XHkKazGfpFoUWohveNcEBZVOGYWO%2FV3rNssC5Q6e9of%2FhM0qhDX1K%2FWX6Yk3tHA0NZPj72BOfUNsNOV8kzKFCxDWvTZlusGioT8FUZKyD9t4jDxbyoWVF1BMpDph1qUXdxdho0ElJXus0%2FYddH2lspuqupmmIR5Pc6CktpQJpNqiHrRRuqKK1dUP6Z6nFK%2B3WxQ777GEapOLP%2F9hM8I4V2K%2B3xXqtTQvRG7seXBjdYv6Mhi3vaFjYfN7mHvYcc0HIlpRTPYyyx34j1%2BEj65k%2BCqxG3e%2BKa8q%2BsRAKNR21BPPN32W1MT4nt3960VFVnDkCCKbORDFoXeKOlfAi%2BoVsdUNitg2ptHmnAJ1WiH07wVh0AOoIO7YHPhCw2W%2BQWvs%2FkRcS7kvvquUSihhJUzpJUVsA68OYqTzjy6fYKhzoPU35HA7wv7u7QpQtjvo3vdQkHPtYEX%2FpWePLEOQAz9Esxe7XZdHhDEv9U8tVg4y69WOG0ju9IMBS7MzzLZK9s1unzyDJ1Vl6SsLLMrvMM49%2FerEFGAKbT7VFlTnZxOwShKveQgJGMO6R68AGOqUB7InP%2FCS3IzPdpcMH6r1D8gpCVZYqcUAaKxG1BMrbFFD1kj0Mijlk1Z1ip5qYZxocWDLXIiTzRCvFlsbj%2FRgp%2FpjnxWmj1DkH2SAjf7JlNy7zwn9e%2FNtxbNEbCmMZ6RXPN9s%2Bf%2Bd%2BaYajbpMY2VLz5Y6MvvLp9tU%2BSIXQnkK3lVWUzywi2KMQTYTZnL2N7DT7SQ3tmNGBy4wBMweAuDB7XvLWZ83o&X-Amz-Signature=283f6513cf3dd31e836fbb76a4d26fecece4a52548f777db3456843408720e66&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667555DA43%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqKLkVwBAO4NQX2K54bkV3Brd5FOt4jXH7G%2BE3XCDgiwIgTZY5VkO4iI5dEfsefrGsErXBp%2FAnM6uTgPurzXrE1KMq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDIlcFi5%2FxD7WmuCF6CrcA8S0QWcsxXLfsxrUQY1zPrL%2FtKzWb%2Fpq2dEIXVTiaRdNevkH3MixbZpolOEwboxV%2BpT7yCptw0k2tg1SeTw3ToKhyF7t%2BK42USSkUi8S5zWSbyfCIICWLd4z%2BHszAxbnFYkK%2FPv0WXBMtD5eDBXo%2B0GbYRdyPsyWSTHIScx6ZDfTp12UDHYw0W0a%2Buz%2BA8dLM4v9fKrG%2B9XlVrBIkZ54lt9gv7eQWgNxc45%2Bs3k4EsdilcNI1hjniJ9p1K7j7ngJ3p3p7TXY8XVrso7Awl3o%2FgotEhmWUiekK7xvtOm%2FIKTD%2FURhoIjfqTCKnnRvQarywis0sGu1wGVr7zQUjXhBk6i%2F6Bvz0Z6jYpwpfTqvjwhVZQ9ataGI8%2FTEhDAa3ZR5VoK8l4NDHCAKO06JmXg3J%2BesmuS0qD6eTDn2aDnrML%2B%2FealzyDmHPU%2F0l61NxDC3gGoO6rXFVkX3MXsr0eQydqbSkbprRIGAfVC832iDKG3uakZ7BsaffBWT4mKgWiS9VFSdsdjYPL6DZYEpokQt%2ByJxDzqsjuVjgPGxR%2FZyDC%2BBKK8yQzI2PVHPXgWoJli0D1OSJkHtPJ%2BVxV75sTHcUafAfxxCahZQhlfGlILW8GIvYerxktl%2Fd%2BosxMj8MNaR68AGOqUBulah%2B%2B5FcEmgl%2B%2BDmPKXUpKStq7KZrGLme9n5sEY31tsOJSA5UDbWjUYIjjvrnseerVOb6joqj29r6yDcmP9cbzZ6Rijidrel10eD0WF6sjK%2F3BtspIoi6ukAxUnn%2Fl4LBAq5RGt31HsDWMrWnC8H8jOL9QDlrikTXaqZtKbS5JqJp%2BcNZZUgCT1ZZicZRad85BrbX%2Fc8xoJEXTpozI93bdXdtZh&X-Amz-Signature=04b5ebe8db94329c952c121bb82a11a08ede2423d6fb20519f5a586bfd5a1719&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
