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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZINMUMX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDHuOXH10jg4eVHlx8K%2FSmZaSGdWWOZeEIHxDzWpWEMUwIhAO0WYNvgU3DFkgihJDr9s8xjxWvblRjdxljv56POuTFhKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR7KCrvvZ1vwCzuW4q3AMTw5WNw%2B7Rs%2BLqfafsq%2F%2Fw8LHKAlBuFzjDrbCaROxPIyEMiQLyBO2hvePRDuiLRyRgvt4PuVBTpG%2FPzDiNOLDgNikFNXGjENcae6EkJ11F6Uy5CIeuQhbf75Et9SM5eGk4Vt1uu34T43YATULdUZXIk26Ky6de8rddvbou%2FzFgilU8fgyEAvVrYuJN0Cfj2xh7UgWSgtayJhnh7%2FwzkOpybRR%2BEklZH5awykPjHS46nsSWjTab%2Fw%2Fiu%2Beok6Tcu9%2B1UyBZj9dWvh%2FZ5rYFDes4g%2Biw24Stk2XzvOMhqo4%2BgoKW%2BTltOS4tk3sRqsgZh0%2BGfyiplcp8%2BBOZnWvj0Y7YHc0%2FkbKJqM1j2rFaU0PQqZZegJW%2BsCWi9JfgJfL6S7wcEMschwbikGffgoEfFvo59pIgRh9M9lZB5btjru3jriaGvQa0OL0c%2Bvhjgc6CFDqVvaZhOEjOwz6DJ3eu8Tugr1MqdF2wYfi%2FAjmmTPebaOtQBMUIm5A0dK2OV64mDS6TdFSX%2BQoUS49s7WnxLdOETCUdL8zVhRV%2BICgKnGYpB4bRc%2FmSb%2BG6YgL1lL9Ll9SQK1BCrml6XGkQg11W2qPoaYp7ZRuhUdjLnP9sI1cneYEE5F4KsjjKK0balDD76MC9BjqkAU6OYRUyOqb3j6afLqFVvH0v3aC%2FIFwYGSqcF97%2BZP5DIWkHA%2BYaGB%2FERlibBLQQwqBpFftyL2%2BQ54%2FSg7x5wDTpHSIlz%2BFqmnb4vxrJirG%2Fzk4R3I%2BeEcUWk4cvIaJs4Lo84D8lWHt5NjFzziGOubQL%2FGVqfbkeRli%2FC%2B%2FM3qe%2FnjwbDI%2Bp2DH2iMy4ZC5KuzC5tBpx%2BOCDgPqMGsgAGP49h0Iy&X-Amz-Signature=65d5aece567cfc4b30a1f255c11267ccae072dad5db929ecbe49ae7a8c307f97&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZINMUMX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDHuOXH10jg4eVHlx8K%2FSmZaSGdWWOZeEIHxDzWpWEMUwIhAO0WYNvgU3DFkgihJDr9s8xjxWvblRjdxljv56POuTFhKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR7KCrvvZ1vwCzuW4q3AMTw5WNw%2B7Rs%2BLqfafsq%2F%2Fw8LHKAlBuFzjDrbCaROxPIyEMiQLyBO2hvePRDuiLRyRgvt4PuVBTpG%2FPzDiNOLDgNikFNXGjENcae6EkJ11F6Uy5CIeuQhbf75Et9SM5eGk4Vt1uu34T43YATULdUZXIk26Ky6de8rddvbou%2FzFgilU8fgyEAvVrYuJN0Cfj2xh7UgWSgtayJhnh7%2FwzkOpybRR%2BEklZH5awykPjHS46nsSWjTab%2Fw%2Fiu%2Beok6Tcu9%2B1UyBZj9dWvh%2FZ5rYFDes4g%2Biw24Stk2XzvOMhqo4%2BgoKW%2BTltOS4tk3sRqsgZh0%2BGfyiplcp8%2BBOZnWvj0Y7YHc0%2FkbKJqM1j2rFaU0PQqZZegJW%2BsCWi9JfgJfL6S7wcEMschwbikGffgoEfFvo59pIgRh9M9lZB5btjru3jriaGvQa0OL0c%2Bvhjgc6CFDqVvaZhOEjOwz6DJ3eu8Tugr1MqdF2wYfi%2FAjmmTPebaOtQBMUIm5A0dK2OV64mDS6TdFSX%2BQoUS49s7WnxLdOETCUdL8zVhRV%2BICgKnGYpB4bRc%2FmSb%2BG6YgL1lL9Ll9SQK1BCrml6XGkQg11W2qPoaYp7ZRuhUdjLnP9sI1cneYEE5F4KsjjKK0balDD76MC9BjqkAU6OYRUyOqb3j6afLqFVvH0v3aC%2FIFwYGSqcF97%2BZP5DIWkHA%2BYaGB%2FERlibBLQQwqBpFftyL2%2BQ54%2FSg7x5wDTpHSIlz%2BFqmnb4vxrJirG%2Fzk4R3I%2BeEcUWk4cvIaJs4Lo84D8lWHt5NjFzziGOubQL%2FGVqfbkeRli%2FC%2B%2FM3qe%2FnjwbDI%2Bp2DH2iMy4ZC5KuzC5tBpx%2BOCDgPqMGsgAGP49h0Iy&X-Amz-Signature=c281058b201fceb28867ee807d4fee496dbe52a1e3eb45a2b60f091107ebab55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM6PPQ6X%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2Itc9jH0luisPjgo11ilshGRaYWsSzsPACqFRKSiCEgIhAI7z8ZkmEH9Ids7b%2FGpEorRkE%2B7W%2BcQY5wqSkfkfvgRnKv8DCEAQABoMNjM3NDIzMTgzODA1Igzom%2BFzwJXXBhkinKUq3AOEWZE7502ryYzVEHiaxi8bHLnv5TNWkexThni6oe%2BDoiGugSANxcUT7rC9shr2UlOEGJoP5Rb3wslb5wNn7THYh0GDMpgISRKUNfXnBYdJIuH2VwUwwtYCSm0Jql3dfW%2BPZbJa4MkjJqfZ%2BNGw9TdZyLbzXGYpvGFFvIbXJEShTl7JTMqcYx7547RmI%2BJar%2Fg0yf03kebtUu3%2FWTG8j%2BK103qyMTjAriDsDcihY6ftfIag865f%2B8BLf59b03qKusiSPoWqNtvsMnoyNUfaP1%2BHqBG%2Bv7ki8WLnD%2BpQD075Y073au%2BtuO0%2Feo%2FHFnAV2Dv%2FKsk5DeK1Ix%2BttHaYSMjU4SncuOykEWxX6mh%2FpkXbPt7dGOPz9laEFPyNR0OdN1CPq3KrazqVsF3BrzcQz42jiuxXGOaux2Mp%2F2ebrBL1odKN90IZfPkzMvSdiEX4wGerqqibvMKhoWeB1TUYd%2FasodxGfWReqEZcCSIhnOecqINxeI9orzX%2F7Dzkvd7C3cHihhY2rMTS1ELTnym%2BXFu2%2Fysnn9I6N8UYqG9tK5s7x8CuZNzXxAGVim4HgCRvzpTtcttU%2Bod2AGN9oEADcCuePhBQCptB0Di%2FFUwAUAyXt0bdi0g%2B17k9k%2B0qpTCt6cC9BjqkAUmS60VRqGD0rf6tU2ncQjRS8KLRO%2BXpfkRe8pjxu6RQLHqNsk04Uw11rYsHdZaXvYhvESsRjEkOAOY%2BXBwMcW71rkoaGhVoCztClT7TXO9LlI6tfrOtwCIqkhU%2Bm5yXx2IpLUG%2FIuggX1tM7p68obHz3oAx2n%2Fl%2Fq6BigEfYrBb%2Bv6QNYM27gRpkY4W9i1Ovf0kXl6blorhpfZmvKFyepUw9eRZ&X-Amz-Signature=6f51d5693fca6b8a045f0201e4feeeeabfed58933ab9887bf56810c1b33fc09d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRWO5S7%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIH2ysZkBelunUxncU2xmbUOP8BgyYRF8HvqCmsfKngMhAiEAlK0N2BFEhYvTBj9YM2KqQuYJG97SRlwSw9%2FOpwDA%2FpYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDE4XbnLYMPlVA%2BNGBircA0ugEK9%2FSDzx71J3SDNhSQDXdVLRXXUQRIZG09Nca1MPUYvdakS9IdUR4qHHNlSarQFnxNGR1EyptVaQv4pCbFV%2B3amFT1kLibbQwLGedjIhCRq%2FUszL4sD5dnLfHDu5%2BsVeXjrCbB6CnYWGimfnldc1o5RdX6tznJjYPD4qgBngYkvng78M1E3CO7iYNHgLvgyITgHYRmCSO%2FYiNUX69qrJdG3y2kj03IebihNV7e7VzoU%2FO86jknIJj8jFHREwEFFeu%2FBo37j7EwEpuMpkQTRf%2FK4ZYknYZckVTRstwsevnVcNF1fFlRM0hFRZD56FnaII9tBc%2FTTIC%2FDzOv2jnY%2BFonudELlaL4ZJuNVeNLV0BqB5gQwANZdnp1GCx3q1%2F7CbOgoiDryINVlNguw7XoZgQYbeHq2brqzChXC4LnPnaHut8TNgjRKAMDNrz6GjXfjzSLz6vtLs70UsRPXE7zd973m2vuymkO40bzxKzbGeGMiyjFX0sIZSb6xbrf2N3n5EpUSsSK6io73l%2FC%2FjQekebyWUFqtrb09Wil3HuCPFY2DOIszJt9GZdVZUnS%2Ft1PErF1ozF36XIrN697aYni99S%2F37ebjJ9UBHJ%2F6SMQtu153RCW7MgRvXzqZzMKLpwL0GOqUB36NF4hxG7R5uHI1n9h%2BGnY%2Fi%2BbpsivlK4EA4idTym%2FbWO0goVsLJaqn1xAkhrJGmcwq2oo%2BnPoaKSw78H5mno4yYfd0Fr0WLoqpGqv9CMmAB91v2gD68ku2lGEykGo01Q8gyg%2FH55Tainiw0hq5c1jsbXmAHbT7AzIGj1IWzPmJGL8EqL9nrMHIUCUXJHAT%2B9kPKuV%2BlqI26SVrEWcXKAFzsGSxT&X-Amz-Signature=a22f97424a74f7b8978806d220f834514ea48720e26ba404f4b39fdeac6c2891&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZINMUMX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDHuOXH10jg4eVHlx8K%2FSmZaSGdWWOZeEIHxDzWpWEMUwIhAO0WYNvgU3DFkgihJDr9s8xjxWvblRjdxljv56POuTFhKv8DCEAQABoMNjM3NDIzMTgzODA1IgxR7KCrvvZ1vwCzuW4q3AMTw5WNw%2B7Rs%2BLqfafsq%2F%2Fw8LHKAlBuFzjDrbCaROxPIyEMiQLyBO2hvePRDuiLRyRgvt4PuVBTpG%2FPzDiNOLDgNikFNXGjENcae6EkJ11F6Uy5CIeuQhbf75Et9SM5eGk4Vt1uu34T43YATULdUZXIk26Ky6de8rddvbou%2FzFgilU8fgyEAvVrYuJN0Cfj2xh7UgWSgtayJhnh7%2FwzkOpybRR%2BEklZH5awykPjHS46nsSWjTab%2Fw%2Fiu%2Beok6Tcu9%2B1UyBZj9dWvh%2FZ5rYFDes4g%2Biw24Stk2XzvOMhqo4%2BgoKW%2BTltOS4tk3sRqsgZh0%2BGfyiplcp8%2BBOZnWvj0Y7YHc0%2FkbKJqM1j2rFaU0PQqZZegJW%2BsCWi9JfgJfL6S7wcEMschwbikGffgoEfFvo59pIgRh9M9lZB5btjru3jriaGvQa0OL0c%2Bvhjgc6CFDqVvaZhOEjOwz6DJ3eu8Tugr1MqdF2wYfi%2FAjmmTPebaOtQBMUIm5A0dK2OV64mDS6TdFSX%2BQoUS49s7WnxLdOETCUdL8zVhRV%2BICgKnGYpB4bRc%2FmSb%2BG6YgL1lL9Ll9SQK1BCrml6XGkQg11W2qPoaYp7ZRuhUdjLnP9sI1cneYEE5F4KsjjKK0balDD76MC9BjqkAU6OYRUyOqb3j6afLqFVvH0v3aC%2FIFwYGSqcF97%2BZP5DIWkHA%2BYaGB%2FERlibBLQQwqBpFftyL2%2BQ54%2FSg7x5wDTpHSIlz%2BFqmnb4vxrJirG%2Fzk4R3I%2BeEcUWk4cvIaJs4Lo84D8lWHt5NjFzziGOubQL%2FGVqfbkeRli%2FC%2B%2FM3qe%2FnjwbDI%2Bp2DH2iMy4ZC5KuzC5tBpx%2BOCDgPqMGsgAGP49h0Iy&X-Amz-Signature=98e6797807357aefa924764d148cfc11230cf5be94acd5b54287ac3ed24cb993&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
