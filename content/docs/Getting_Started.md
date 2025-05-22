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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBSZ5KB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCSvsSpH3wkDLWL2UobZsvpI4fatS73%2BBXwCadL5VJGDwIhAKnXlFlZvE%2B9oTwaiibqDUEpnoUWRxp9MipkgMUZlmh7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJq4fCD2gsH%2BV4msAq3AP3Jc1Ltqm0xhHpz6Fb%2BCCSHfPVPEW1TvLngnjMvKDku3Kg16t4KvpDM8nXyc%2BdMu9lzU2%2BpgM%2F%2FqxdJ0ii6cG%2Bi3tvs%2BnTiC%2BRrdR1hIxi6VMvmiTJ93EC16ICpKbcV83419hIJAf2rwKT5Y9x%2FHbPiwoJ2Id3gRQN37784jfVJwtbXA2QA6scqX1%2FsPdbkFH21F7LkXTvuyvxEUMZ%2BNstkCb7HvVXQInerK218YdMwJM2FF%2Fx%2B0epuSEfoYD3HOwOziV9oyHhbueCSGhsHhEPcSi1wpr13%2B38f08CFbPn9RViCjyCf9PzrRHBOmVJiYgy83WFfnHuKpKYPzCN7XxA2iLK77cuuQoj0IiAcDiDRnMZs7h%2FCISz5OzuQfVFEGwNFzP9xEPcUTkQjXGF0JmSgae6%2BzFRiasHg3GvhPeDcvhzf4%2BzGVif9rasvb4NG7htbbCDBfrHvYbWdpxlsMMKvhMQz77%2BGHg93BArg9K9BjS8vVkWKdTXeizRnWGlc%2FSPqjfxoq3BH6oCE5THHOOum3u34Z5l%2FLQXXXuO73Ud64DLNM%2FvdFhxwBfADkNG5RxI6pDUoU3WbOCfj3ICzi6QZFW54K3cpwtpo1Bgym4X%2FXhfL4jWd1K9mS9tAzDfk7rBBjqkAUNvqyJ44lfmujQxVrp5lH7JZ0EaqOAQuptq7QCGwUskMCw9EMfccyq7OJrRGCuaKNf9ivouOh63Tq7ej00fdOq1lGNhz8V2k%2BxiwI%2BMnld8BdCYm9HyAsouV8enTBLh61X44tAqGi3eg28mSD1qtpP3zrXFrIVfyCIJZZ7GfszbiT42swTnuuMFb36zwszwDPtmL%2BwwurTYooQS7cGjGxhoUVCm&X-Amz-Signature=82c48c93c5a49ade3eaa35072899d5d0905f256191f3c02ad314e2df5a2a89c3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBSZ5KB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCSvsSpH3wkDLWL2UobZsvpI4fatS73%2BBXwCadL5VJGDwIhAKnXlFlZvE%2B9oTwaiibqDUEpnoUWRxp9MipkgMUZlmh7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJq4fCD2gsH%2BV4msAq3AP3Jc1Ltqm0xhHpz6Fb%2BCCSHfPVPEW1TvLngnjMvKDku3Kg16t4KvpDM8nXyc%2BdMu9lzU2%2BpgM%2F%2FqxdJ0ii6cG%2Bi3tvs%2BnTiC%2BRrdR1hIxi6VMvmiTJ93EC16ICpKbcV83419hIJAf2rwKT5Y9x%2FHbPiwoJ2Id3gRQN37784jfVJwtbXA2QA6scqX1%2FsPdbkFH21F7LkXTvuyvxEUMZ%2BNstkCb7HvVXQInerK218YdMwJM2FF%2Fx%2B0epuSEfoYD3HOwOziV9oyHhbueCSGhsHhEPcSi1wpr13%2B38f08CFbPn9RViCjyCf9PzrRHBOmVJiYgy83WFfnHuKpKYPzCN7XxA2iLK77cuuQoj0IiAcDiDRnMZs7h%2FCISz5OzuQfVFEGwNFzP9xEPcUTkQjXGF0JmSgae6%2BzFRiasHg3GvhPeDcvhzf4%2BzGVif9rasvb4NG7htbbCDBfrHvYbWdpxlsMMKvhMQz77%2BGHg93BArg9K9BjS8vVkWKdTXeizRnWGlc%2FSPqjfxoq3BH6oCE5THHOOum3u34Z5l%2FLQXXXuO73Ud64DLNM%2FvdFhxwBfADkNG5RxI6pDUoU3WbOCfj3ICzi6QZFW54K3cpwtpo1Bgym4X%2FXhfL4jWd1K9mS9tAzDfk7rBBjqkAUNvqyJ44lfmujQxVrp5lH7JZ0EaqOAQuptq7QCGwUskMCw9EMfccyq7OJrRGCuaKNf9ivouOh63Tq7ej00fdOq1lGNhz8V2k%2BxiwI%2BMnld8BdCYm9HyAsouV8enTBLh61X44tAqGi3eg28mSD1qtpP3zrXFrIVfyCIJZZ7GfszbiT42swTnuuMFb36zwszwDPtmL%2BwwurTYooQS7cGjGxhoUVCm&X-Amz-Signature=bd9b1846b28619a0a4ea716c50809d3db60de13a934ccc85214b300ed0c7a1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBSZ5KB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCSvsSpH3wkDLWL2UobZsvpI4fatS73%2BBXwCadL5VJGDwIhAKnXlFlZvE%2B9oTwaiibqDUEpnoUWRxp9MipkgMUZlmh7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJq4fCD2gsH%2BV4msAq3AP3Jc1Ltqm0xhHpz6Fb%2BCCSHfPVPEW1TvLngnjMvKDku3Kg16t4KvpDM8nXyc%2BdMu9lzU2%2BpgM%2F%2FqxdJ0ii6cG%2Bi3tvs%2BnTiC%2BRrdR1hIxi6VMvmiTJ93EC16ICpKbcV83419hIJAf2rwKT5Y9x%2FHbPiwoJ2Id3gRQN37784jfVJwtbXA2QA6scqX1%2FsPdbkFH21F7LkXTvuyvxEUMZ%2BNstkCb7HvVXQInerK218YdMwJM2FF%2Fx%2B0epuSEfoYD3HOwOziV9oyHhbueCSGhsHhEPcSi1wpr13%2B38f08CFbPn9RViCjyCf9PzrRHBOmVJiYgy83WFfnHuKpKYPzCN7XxA2iLK77cuuQoj0IiAcDiDRnMZs7h%2FCISz5OzuQfVFEGwNFzP9xEPcUTkQjXGF0JmSgae6%2BzFRiasHg3GvhPeDcvhzf4%2BzGVif9rasvb4NG7htbbCDBfrHvYbWdpxlsMMKvhMQz77%2BGHg93BArg9K9BjS8vVkWKdTXeizRnWGlc%2FSPqjfxoq3BH6oCE5THHOOum3u34Z5l%2FLQXXXuO73Ud64DLNM%2FvdFhxwBfADkNG5RxI6pDUoU3WbOCfj3ICzi6QZFW54K3cpwtpo1Bgym4X%2FXhfL4jWd1K9mS9tAzDfk7rBBjqkAUNvqyJ44lfmujQxVrp5lH7JZ0EaqOAQuptq7QCGwUskMCw9EMfccyq7OJrRGCuaKNf9ivouOh63Tq7ej00fdOq1lGNhz8V2k%2BxiwI%2BMnld8BdCYm9HyAsouV8enTBLh61X44tAqGi3eg28mSD1qtpP3zrXFrIVfyCIJZZ7GfszbiT42swTnuuMFb36zwszwDPtmL%2BwwurTYooQS7cGjGxhoUVCm&X-Amz-Signature=03aa0e173547098ee25f0e0b0c06f6b3ac6490f454a49b4dea1f0ebf04614ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGWYE2L%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIErPJ8WvT1S0pWQ6ySmld8L4HRKWmjdp3apfZKEa2ZYZAiB0V6%2F6Fc9Xc3QZigzehbEvTU%2FEnYtlEc1AllkzbYaxdyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ%2FBhSNkUVPdN5WmbKtwDm8Qr0KsFcEy1lULH9CYIA%2BM0d4rTr0xG0qksjRbknqKjskCW5xcWGlPQdFEHrfApIb8%2BtHWFVzLVg30G8kWRat7upLiWOpcSaEBN3efH8VaSLCdwq2gI8IPcBSg1wV%2F9yUTZHN2flItdHoLECmrB9e4DParBDEg1LFvR5FoyFxDnb4TM%2F6gCzJiyV%2FiN9%2B40l3o2GM8ipAb4Ys5rVZRv%2FZ1flvD3FQ85pHvQh8ZBbdEQ8xLWZFHWqsBvtDiRmsMj%2Bn3eBeUBShyIKTtFCKqTpT4wNdi9ZhjcvcKurQL8e9CKPpl5YDbRaXEPEA9W8JkjHxF4v%2Fx1IP%2ByvN7PQ7uB54oAkNaRbk6bJomMaPXTFoMseR%2Bo9JWIZYzZSibHMDnFBGldOTOV8ClsO5rGouGU7QNnmpuo6fISZemihb0sIOX%2FNDbP0vBn2L5jGSk%2BAkBLPeWmvIeyBAk4XVthvDO0AX%2FmVMBhvNWP%2F7NjHEtABTV508OAZQGa3UAwVkwVc9NalBd3kbIa9sZ8xCcxhfXt3Ttw1rB1VBSRPtYkk276R0beiuc9U34ZBms3w%2Fdd1Vn3dE%2Bupy8VHG3rcMw5YCDzSI%2BmQ5kNfiBVT8%2Fmb74xk5%2FJK%2Bcvu6bm%2FJnIA6owkJS6wQY6pgHYfVYfqH%2BnGCeyMkN2vnVIOvMTER9MWHMvFGpOJLn%2FJTFchZI8a1v8A8bm3kaukuUDD9TVPvbtUtmRajcq4qHGKgdWbo242IFzcib7MYBKleCf8ftqSe5FFwBXpXDGCFEUh0vEVXhhw4ICT%2FJfy9UcvFwfVIfW15LxaiRdbdnSiyeWizNshRwkQEoPMMr8jTXSLes1NUPsTzP8N4RryMxVaK8oMNYS&X-Amz-Signature=10cd7442a0edee03804c6f7cc1c7724ac4f1f2b502631418beb92b0f73767e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBHPFS%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD5iSTd1K%2BtktqwtXJfNGA999RbHsBLeEJtqZEUJNhVnAIhAKagGwDO6Z5pJuSHyvsclAGU%2FfW68gHmB2AkgyekYSbKKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhNRbrQPxJy071ysYq3AN9b4QaMW5YAmw58k45BdlxQMUDLRKnpU5cgozeQwV6LPPvqegirR5pDYg5w99JM0g%2FEqgTloPyzQuj5BMzPeWIRs8bW7alYj6RIgrWCNTUseTPih74HDEPPtNsBKCltLUIcYzrVF8RCa%2BMMHtFoasmo2r1yWHd44kMRZpDlcekFwjdfh9jQowrtysLqjtSnhmV9%2FqoGmUHRtXGdHcRL%2FlgI52mZ3HdLBWcFr3M9qbat0nmT%2B%2FNt%2BZh7Af1h6jWHTozpsD7m9YpQsTWFcNnwt6eNPuU89hiC1qGYXUK9AaMrVZ7Jm2X%2Fi4lEIYRWgSXR0Vvd2BkrFmTdvlHQb%2BuJox1zQ5lzCW7iS6SO6htbGOS%2FXZ1qzlf8WyVJCRf9MCsWiWXtza8TJw8Gi7DUJUw8XGS7WDgLpkAbQY5B1hzSGu1cDB1PTAIM10WWnB3xKN%2FR38O8V7gh6asXlxqnb%2FR0PBcgstm6UeoWqXWcyvuLlPxm%2B4Mqe6QdIxp3XHx7kj6eDX4pqRPZ9LNe7eIyobtVvykJGKCs1W6FmKBMszMyOr15LnpR4OnKr4SM%2FTYWOCzx9YXhZuGpidvWcCVExF%2Fn3LprQ0cHTHezLgrqwct9UgMM2y%2FBtpOEg8Nxpp4AjDkk7rBBjqkAR%2FL7sdk4t1UqvipkKgsK%2FaCn2AuAdpRBNs5HZwp%2BD4F%2FyswaV0pXJWnpEe5u4XOc3xX%2BTmnoE21GyQNRvYHTlvFd6MUW5mTt0aG0a2ff99nZ6lz1luhrgZU8bCbghFE4l35fnxMaDK3iw6aupdcHd9%2Fc%2B13lrPD6I7%2FuaaCxADZSG%2BYxomO700VsaSetAvHV%2FSHP7ebrpBBqxgLlj1FCBwLKqed&X-Amz-Signature=d83211991badcb1ff7c924e014f78131760e0d84a8935c37ea6fa713bb10942f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXBSZ5KB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCSvsSpH3wkDLWL2UobZsvpI4fatS73%2BBXwCadL5VJGDwIhAKnXlFlZvE%2B9oTwaiibqDUEpnoUWRxp9MipkgMUZlmh7KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJq4fCD2gsH%2BV4msAq3AP3Jc1Ltqm0xhHpz6Fb%2BCCSHfPVPEW1TvLngnjMvKDku3Kg16t4KvpDM8nXyc%2BdMu9lzU2%2BpgM%2F%2FqxdJ0ii6cG%2Bi3tvs%2BnTiC%2BRrdR1hIxi6VMvmiTJ93EC16ICpKbcV83419hIJAf2rwKT5Y9x%2FHbPiwoJ2Id3gRQN37784jfVJwtbXA2QA6scqX1%2FsPdbkFH21F7LkXTvuyvxEUMZ%2BNstkCb7HvVXQInerK218YdMwJM2FF%2Fx%2B0epuSEfoYD3HOwOziV9oyHhbueCSGhsHhEPcSi1wpr13%2B38f08CFbPn9RViCjyCf9PzrRHBOmVJiYgy83WFfnHuKpKYPzCN7XxA2iLK77cuuQoj0IiAcDiDRnMZs7h%2FCISz5OzuQfVFEGwNFzP9xEPcUTkQjXGF0JmSgae6%2BzFRiasHg3GvhPeDcvhzf4%2BzGVif9rasvb4NG7htbbCDBfrHvYbWdpxlsMMKvhMQz77%2BGHg93BArg9K9BjS8vVkWKdTXeizRnWGlc%2FSPqjfxoq3BH6oCE5THHOOum3u34Z5l%2FLQXXXuO73Ud64DLNM%2FvdFhxwBfADkNG5RxI6pDUoU3WbOCfj3ICzi6QZFW54K3cpwtpo1Bgym4X%2FXhfL4jWd1K9mS9tAzDfk7rBBjqkAUNvqyJ44lfmujQxVrp5lH7JZ0EaqOAQuptq7QCGwUskMCw9EMfccyq7OJrRGCuaKNf9ivouOh63Tq7ej00fdOq1lGNhz8V2k%2BxiwI%2BMnld8BdCYm9HyAsouV8enTBLh61X44tAqGi3eg28mSD1qtpP3zrXFrIVfyCIJZZ7GfszbiT42swTnuuMFb36zwszwDPtmL%2BwwurTYooQS7cGjGxhoUVCm&X-Amz-Signature=36ca5e3b92d22392af43ca47994e6139ba6d47c5a91c98e8ea6fc07cb5bcd6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
