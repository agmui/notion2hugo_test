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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXNK552%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBi%2FPxOBmnoEmqkL7fFmtHkll4AnUXCzkwAZsqOLd%2BCwAiEA6eYjwI8IjVsSdA1oIHkREoF2BfVtDpxr5w3JEyFWscMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG4KSfTKXU8vFSL8SrcA8PKwikQ4AgMgdZkQ0z1Otw9PQi4rzmnwylY8y67JBwCdztxll0mQPT7iZRnzsAVgPMMXXDlxEFXKCkhjyC0AYA6OSIrDu5hH0sFEgtBppnz2aaHsTrVNZYx%2FuupjVRrQVv%2FrIQRUMOhpx1knSNqCBpKYYN711uhoefu2C8itdtDaMV%2FHNZ5GSREWHlc7YCcEHY22Qlo1CsYr2ZoYgACa5%2BGCupEMwrZ6ez6OTuqJGv%2BC1R5eN7MtndI%2FumGyQCkSwuEmJsY9sJKqTCdTrKMD%2B0Rtc7OoMZajfHYRotC0HtAk9D0IUJYvoF5yPcTWsYGZQLWWvbzgLxZAHcO0mHVeTLEmv5dFPvNGl0eC%2FgJ6KFZmpxuU9J%2B35NtAwUBJMyHzUzeSEZf3bbNM%2Bku13gdZmvybpypg2ZHMuBKNNALS6N8tQq0oi5B3col%2F1H4RjOm1wqwE4RJ8ndQflVf42hau%2FBEhB%2BE6XUsK6JiJNXmIP%2B6tbs3pu9UWzgFb4hoIpyItiDIT7GrvQ3bKLYRwbOKlYwh3P8twFJK5biDBa%2Fa3yS9EwTt9ix0KLZrqbyyTixXz5jO9HdHXWyjbkZ9ulCwwjtYL6X4K1bbrML5kFJxWPncT2R0XnYG0j3IcRjpMLus08AGOqUB5XH56J8DqEK0YPGNsJRa98uGDQ1OrXzvKzgFtmFiKxz%2BKNq4V1g0gWo2GKgln0bfsxKcwBMCYVWfqxsL8RQ%2FZmYKeaSCEbw4YqX4Yui%2FT0AN5Eu0cio4oQ%2BRNvAVxFEw2uz4Jc%2FnkOpCNmqs%2Bnf02XJZY%2BG%2BhSIImJLP4fvFMjTDYs7Vm%2FDsj%2B38O7P9yRUJriHQMFRfIKXU7Yw6d3CoNfIfY9Us&X-Amz-Signature=39dc03b2225fe721941d0a7993d5890754e295bec8e9365806d497de4d72d3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXNK552%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBi%2FPxOBmnoEmqkL7fFmtHkll4AnUXCzkwAZsqOLd%2BCwAiEA6eYjwI8IjVsSdA1oIHkREoF2BfVtDpxr5w3JEyFWscMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG4KSfTKXU8vFSL8SrcA8PKwikQ4AgMgdZkQ0z1Otw9PQi4rzmnwylY8y67JBwCdztxll0mQPT7iZRnzsAVgPMMXXDlxEFXKCkhjyC0AYA6OSIrDu5hH0sFEgtBppnz2aaHsTrVNZYx%2FuupjVRrQVv%2FrIQRUMOhpx1knSNqCBpKYYN711uhoefu2C8itdtDaMV%2FHNZ5GSREWHlc7YCcEHY22Qlo1CsYr2ZoYgACa5%2BGCupEMwrZ6ez6OTuqJGv%2BC1R5eN7MtndI%2FumGyQCkSwuEmJsY9sJKqTCdTrKMD%2B0Rtc7OoMZajfHYRotC0HtAk9D0IUJYvoF5yPcTWsYGZQLWWvbzgLxZAHcO0mHVeTLEmv5dFPvNGl0eC%2FgJ6KFZmpxuU9J%2B35NtAwUBJMyHzUzeSEZf3bbNM%2Bku13gdZmvybpypg2ZHMuBKNNALS6N8tQq0oi5B3col%2F1H4RjOm1wqwE4RJ8ndQflVf42hau%2FBEhB%2BE6XUsK6JiJNXmIP%2B6tbs3pu9UWzgFb4hoIpyItiDIT7GrvQ3bKLYRwbOKlYwh3P8twFJK5biDBa%2Fa3yS9EwTt9ix0KLZrqbyyTixXz5jO9HdHXWyjbkZ9ulCwwjtYL6X4K1bbrML5kFJxWPncT2R0XnYG0j3IcRjpMLus08AGOqUB5XH56J8DqEK0YPGNsJRa98uGDQ1OrXzvKzgFtmFiKxz%2BKNq4V1g0gWo2GKgln0bfsxKcwBMCYVWfqxsL8RQ%2FZmYKeaSCEbw4YqX4Yui%2FT0AN5Eu0cio4oQ%2BRNvAVxFEw2uz4Jc%2FnkOpCNmqs%2Bnf02XJZY%2BG%2BhSIImJLP4fvFMjTDYs7Vm%2FDsj%2B38O7P9yRUJriHQMFRfIKXU7Yw6d3CoNfIfY9Us&X-Amz-Signature=39f116efd7707e17a0b8570ae2456cf44e1fac3efcafdf3e6890da2e49645594&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXNK552%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBi%2FPxOBmnoEmqkL7fFmtHkll4AnUXCzkwAZsqOLd%2BCwAiEA6eYjwI8IjVsSdA1oIHkREoF2BfVtDpxr5w3JEyFWscMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG4KSfTKXU8vFSL8SrcA8PKwikQ4AgMgdZkQ0z1Otw9PQi4rzmnwylY8y67JBwCdztxll0mQPT7iZRnzsAVgPMMXXDlxEFXKCkhjyC0AYA6OSIrDu5hH0sFEgtBppnz2aaHsTrVNZYx%2FuupjVRrQVv%2FrIQRUMOhpx1knSNqCBpKYYN711uhoefu2C8itdtDaMV%2FHNZ5GSREWHlc7YCcEHY22Qlo1CsYr2ZoYgACa5%2BGCupEMwrZ6ez6OTuqJGv%2BC1R5eN7MtndI%2FumGyQCkSwuEmJsY9sJKqTCdTrKMD%2B0Rtc7OoMZajfHYRotC0HtAk9D0IUJYvoF5yPcTWsYGZQLWWvbzgLxZAHcO0mHVeTLEmv5dFPvNGl0eC%2FgJ6KFZmpxuU9J%2B35NtAwUBJMyHzUzeSEZf3bbNM%2Bku13gdZmvybpypg2ZHMuBKNNALS6N8tQq0oi5B3col%2F1H4RjOm1wqwE4RJ8ndQflVf42hau%2FBEhB%2BE6XUsK6JiJNXmIP%2B6tbs3pu9UWzgFb4hoIpyItiDIT7GrvQ3bKLYRwbOKlYwh3P8twFJK5biDBa%2Fa3yS9EwTt9ix0KLZrqbyyTixXz5jO9HdHXWyjbkZ9ulCwwjtYL6X4K1bbrML5kFJxWPncT2R0XnYG0j3IcRjpMLus08AGOqUB5XH56J8DqEK0YPGNsJRa98uGDQ1OrXzvKzgFtmFiKxz%2BKNq4V1g0gWo2GKgln0bfsxKcwBMCYVWfqxsL8RQ%2FZmYKeaSCEbw4YqX4Yui%2FT0AN5Eu0cio4oQ%2BRNvAVxFEw2uz4Jc%2FnkOpCNmqs%2Bnf02XJZY%2BG%2BhSIImJLP4fvFMjTDYs7Vm%2FDsj%2B38O7P9yRUJriHQMFRfIKXU7Yw6d3CoNfIfY9Us&X-Amz-Signature=f8fcbf6505a60d42e0b56ab31cadcc00cec92229437d93cfbcf7c5f38b59769a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDENYWO7%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCaMt1rFrFHBMYWZJfzSFR0chnok82eeXs%2FUwbBglU45QIgVOvx0j936mJfevpqNXEGfPFf4aWfFjY1ClM2pR%2FfzDkqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPsmBLfelpquhLqqircA%2BTuDZufFJEJAb2dpSqfFr1nAxWRF8QjBfUXwEs1YVVz2Ht59NwLdM%2BrBWD1Jrhpum2XWf7puXzNJ5Dnq0Xja7Ky6g6ufUe4Y4YR%2BK5kv%2BUNXkE0LGP5RpoaCAAbAXm2BZe%2BOHN0bNeVsZYJhQ5SvCjhJayHYBFXZgo9XmWQiekh1UDzKAYJ2qXj5PUtejMgXgayXbZ%2FanlGeNgU2a6DGDPIbQMfwx4wehrvih9X%2BXWoUXgknpBqgAXJNjfMwqHZFwTJldb%2FWhUy0bw%2BhzKxPj099gTXWKZ%2BckOjGzQMMbofLLKW0DuB%2FVANm976YYk7xngNY81MUjfw5%2BEvb9zXRCazMch955cBijsJ6Syw5iAvNH1uGoz5dGNqZvHtj2NOXH8T91wLEaGw5ad74z%2BwTxjzflCrgX9p%2FQ7j4KoZDGSkqlf2FkkPtuG6fVGtBOA9xnN%2FgWr1NGCPrdT88%2BGT7UsBkyttj5bx8meW8%2FlaCWLCMAzF1VJGrpiAc6kUb4hxnegi7l1ykmYJWdDhV%2F4fJ2flcbEde4%2FuXqSSrrKEH3U%2BhhxuhB4ERr0gMppDKDbdwZ9nzEgABXwKYJVMteqOBcVqlBl0spSz8ou0AYMgaGLMhccTviRZdBsqyk%2FaMLus08AGOqUBSaSfmn%2B94EPxNYhj6ZJcLssyCnrAGv6qRyxce30Zfd%2Bavb1uPlf923Z5DInUrr%2B84SMn6I55QhZ3Kh0Aim4X2q4mk3VoS0W76IDaP5428692rn9Ht1AKwd0CLwFykfhFnzl4Cf5YJIXQLvkjjwIasbD17q2uhNYrrnJpr1300o279SPjVzFV5vO3Y2IXmVWvV4uWG6OHmnXGHuTRn%2FvuVvzbn96o&X-Amz-Signature=fde427cb69a9baa4a0cba955899ae6192eee45d4398f7fd81ec4fe2dd8e69261&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTQNUGT2%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIFftZvvq4qEKiBbcJF2cUh7l94VXhAytxR7a6HV7EnQNAiBJUzrVxI%2F73N%2Bp0xq4mdLN6X64EaOHa58BO8wFWuJ4RiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM066hmF9bMQT%2FIS3MKtwDz1sicSPwJefKQYGacAKrD8yFRvfvVDQ0qBeBiJsYb4%2F1Fw3tvdLHm55leh2C%2FjKY9yZ81PeBbO7sJV26lmR8BXcnHx%2F9R6NAfokYVxMbDcq81tptKdhILdL1YCiZ44p6SuvwjQTkJShAKuyfhc%2FRc5chf3U7Dyxj5Y6r2tQ2bX9WeFiOs2ehFzcz42zE7Ub2fCEmVaolxNVGt0dD7OVikXoezQZpZhd1DhowER4Cep8tbWYF%2BYTjm68GH0JaOnTq%2Ft7alD%2FcGljKzRxJx%2FKlqUNwdruoEEn27vcQ5niHz5VhcayUBd5Xl1mE9defszo9Yd9mwD6yKKfBL65sQ%2FOGfyBDC3Pbn3vUo0FQF71m9fPmYzAZF65d58jSd13zAc0WIEAKUsV%2Bh0G%2BQcWZ%2FryPO0VGMBz%2Bc2ysTiPklKNPbbAffdmv0%2B8fklml1A1aS%2FkyqKsnI2HY%2Fxz2OAGxSH7BswyqjQw1m0nmrbAx5GI3xqjT%2FmFiyx97kajsjDkic54icGh6%2BwtlFKMLe%2FxI9xwQekroLRi62jVwp0EWNAUODsRzWRppFnImTXjK068xY7g%2BsYjq%2F6cbEgM2vg%2Fa27DtHBHItT6XEXpwxOrOirXQSxf4R%2F4QpoqKQb35OJAwhKzTwAY6pgE%2FeQaO%2BzHXYJzv2Gsdv7eVCa7O4veBl3WjGFXXdytBBCJF%2BwthDhHEhx%2FI4P%2BfEH%2BYUsnqlvIq9JCy6J%2BzeYcnEIX97WVCupEuQK5xzF9Lm9%2ByAsg3IYKWvDl5%2FeDfT57mb%2Ffe4%2BpfcdHh5AcIEAlMm1OLGi0X4VT7umoVoJIkx3QLbDwns5e5fbL84UfH5kaPEPgnYYA82tLkI3QO%2F3tHX7HJqv1m&X-Amz-Signature=a1521b7751de07f78918b22c64322fc12d57c52842aa621de379a218a3bcd542&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKXNK552%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBi%2FPxOBmnoEmqkL7fFmtHkll4AnUXCzkwAZsqOLd%2BCwAiEA6eYjwI8IjVsSdA1oIHkREoF2BfVtDpxr5w3JEyFWscMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNG4KSfTKXU8vFSL8SrcA8PKwikQ4AgMgdZkQ0z1Otw9PQi4rzmnwylY8y67JBwCdztxll0mQPT7iZRnzsAVgPMMXXDlxEFXKCkhjyC0AYA6OSIrDu5hH0sFEgtBppnz2aaHsTrVNZYx%2FuupjVRrQVv%2FrIQRUMOhpx1knSNqCBpKYYN711uhoefu2C8itdtDaMV%2FHNZ5GSREWHlc7YCcEHY22Qlo1CsYr2ZoYgACa5%2BGCupEMwrZ6ez6OTuqJGv%2BC1R5eN7MtndI%2FumGyQCkSwuEmJsY9sJKqTCdTrKMD%2B0Rtc7OoMZajfHYRotC0HtAk9D0IUJYvoF5yPcTWsYGZQLWWvbzgLxZAHcO0mHVeTLEmv5dFPvNGl0eC%2FgJ6KFZmpxuU9J%2B35NtAwUBJMyHzUzeSEZf3bbNM%2Bku13gdZmvybpypg2ZHMuBKNNALS6N8tQq0oi5B3col%2F1H4RjOm1wqwE4RJ8ndQflVf42hau%2FBEhB%2BE6XUsK6JiJNXmIP%2B6tbs3pu9UWzgFb4hoIpyItiDIT7GrvQ3bKLYRwbOKlYwh3P8twFJK5biDBa%2Fa3yS9EwTt9ix0KLZrqbyyTixXz5jO9HdHXWyjbkZ9ulCwwjtYL6X4K1bbrML5kFJxWPncT2R0XnYG0j3IcRjpMLus08AGOqUB5XH56J8DqEK0YPGNsJRa98uGDQ1OrXzvKzgFtmFiKxz%2BKNq4V1g0gWo2GKgln0bfsxKcwBMCYVWfqxsL8RQ%2FZmYKeaSCEbw4YqX4Yui%2FT0AN5Eu0cio4oQ%2BRNvAVxFEw2uz4Jc%2FnkOpCNmqs%2Bnf02XJZY%2BG%2BhSIImJLP4fvFMjTDYs7Vm%2FDsj%2B38O7P9yRUJriHQMFRfIKXU7Yw6d3CoNfIfY9Us&X-Amz-Signature=4c15637e54ca559b6078beff2353fa5103a11b37d2fc14c8935512fbcd6ab0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
