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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYPINUT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR2XXULhOq650ivw9kgTZA9XllRU7l1Kg4odZwN4qdTAiBfghOnPJRnioizjClabXwiGYGLnWFzaxVWWMWnLYYHEyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMmaDFxIQw5OZDG2DZKtwD9qFUVxxBcfqE4ck0pzPGKPrm5MTHFy83g4YD5IpwVxwehwQGgZcEKAEqiJTGj8sqeOvFH5o8D1Il9Oi%2By0p7H1HiyAspScocodTKhYxfOQxQZavoZMUFL%2FLLblcQQl6gL99EPeTgGYBhEF1xecriim5SuBpXc0ZxANCjxwsM0Y2PfqP93Sff8IxDlUvPy1LDXEbCbulzQ2r1KbHQCc%2FIb7TT8yXgVHK20unq8saIXxSF0bW81mLbsc%2BAOWaarLw07WspqHMFH5V688aESlPul3RL4TKB4kmmeDm8JfG5htFN2iLZ%2B0kahArq39UU8nxQ2uL4Z1mUFXV4nLOnPm%2F7juJd6%2BGLqbR%2Bg6ltUtLeYbAWWAIg5UHV14rGY3mvqDi6oyORsssqnsmdpw7aKpHraT3mTtGq%2BUMO8HDsrBp1yQxPxFNPrcB8ZNOoNcVXKefMwXTSbOuzOGNACOfYgy17F6FzCYk5IUkKJgq9%2F%2FzSfN8Ym2M7Wm%2FjkY9%2B74Fz2Q7ZFxc83wJng%2FliBv9FPZCfWJ7%2B7oWs2ea4936c3XKEe811hwJfXdAMYYXcHI7TOvNY4RNsMZlNBazI4YuNYBZf30SUYt1%2Fj2HDR%2BqJVz77vS%2FWmVHuCCw%2BgCYeg04w0cmovgY6pgFh4Y%2BnYKNhlHO3%2BV47bVoPtfWOHxzWbdbYmqc0RvHcWCVuZFtA4Lg%2FjF8bvy949Rcl4C4DbVvBSos4u3saS7iajNeP1%2B0BuB4UtS8ryNu8DOdj8A0Ambkq%2Bw%2Bb2XUitzA8IGzk%2F2a7Poc5ekm0SkKjyecajWv%2F17mDtd9%2Bjh5qdUzSkz0cjxS6XRp7KcBVOHWD4%2FI%2BG7lzDpMDFQ5%2B44ZWYnv9s1Kq&X-Amz-Signature=dfbad74cf14d13b647c8b93b4e52a40ec0f0f150b00ad47049d96bfcbb8be4db&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYPINUT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR2XXULhOq650ivw9kgTZA9XllRU7l1Kg4odZwN4qdTAiBfghOnPJRnioizjClabXwiGYGLnWFzaxVWWMWnLYYHEyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMmaDFxIQw5OZDG2DZKtwD9qFUVxxBcfqE4ck0pzPGKPrm5MTHFy83g4YD5IpwVxwehwQGgZcEKAEqiJTGj8sqeOvFH5o8D1Il9Oi%2By0p7H1HiyAspScocodTKhYxfOQxQZavoZMUFL%2FLLblcQQl6gL99EPeTgGYBhEF1xecriim5SuBpXc0ZxANCjxwsM0Y2PfqP93Sff8IxDlUvPy1LDXEbCbulzQ2r1KbHQCc%2FIb7TT8yXgVHK20unq8saIXxSF0bW81mLbsc%2BAOWaarLw07WspqHMFH5V688aESlPul3RL4TKB4kmmeDm8JfG5htFN2iLZ%2B0kahArq39UU8nxQ2uL4Z1mUFXV4nLOnPm%2F7juJd6%2BGLqbR%2Bg6ltUtLeYbAWWAIg5UHV14rGY3mvqDi6oyORsssqnsmdpw7aKpHraT3mTtGq%2BUMO8HDsrBp1yQxPxFNPrcB8ZNOoNcVXKefMwXTSbOuzOGNACOfYgy17F6FzCYk5IUkKJgq9%2F%2FzSfN8Ym2M7Wm%2FjkY9%2B74Fz2Q7ZFxc83wJng%2FliBv9FPZCfWJ7%2B7oWs2ea4936c3XKEe811hwJfXdAMYYXcHI7TOvNY4RNsMZlNBazI4YuNYBZf30SUYt1%2Fj2HDR%2BqJVz77vS%2FWmVHuCCw%2BgCYeg04w0cmovgY6pgFh4Y%2BnYKNhlHO3%2BV47bVoPtfWOHxzWbdbYmqc0RvHcWCVuZFtA4Lg%2FjF8bvy949Rcl4C4DbVvBSos4u3saS7iajNeP1%2B0BuB4UtS8ryNu8DOdj8A0Ambkq%2Bw%2Bb2XUitzA8IGzk%2F2a7Poc5ekm0SkKjyecajWv%2F17mDtd9%2Bjh5qdUzSkz0cjxS6XRp7KcBVOHWD4%2FI%2BG7lzDpMDFQ5%2B44ZWYnv9s1Kq&X-Amz-Signature=f5e5fb7baa84fbf16bc246766657dae5cbcc33c44c6c7563dbbb3df9d9fb8dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OM3Z6IB%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFb7Dw8T5onGw8QaL6ywpKKgxDSDAksIweZQAxovT2RPAiEAxYwoDK9E4L8%2FErF0a49lBClXMlfkbVRMEFmTkwc4GYsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJrD5xs5u%2Bqvjb0cNCrcA2yIRTMHF%2BJZPF4KdlJjrkLZqko6gLyXSph1dDWh1BiTRFQyC6tni%2FoKS0Xv42%2BZM%2BzTu7HvXvPPHaqGoUmzMuC9fPltWXhClCiNhD%2BsORL0E%2BdUjcvnxjtfHN%2F8q5uVirfbo71E9LiZOlPHPFm4%2Bt9csFdNuxaHgkxQpliYlGry9FfYqk57DEndKsziggY7vrOw%2BnWXikACaW8s6vc99RLHxpN5Cwsd%2F%2FbOkq4%2BcNtS5RBWtbZe7GpWsOtyDtBUCB%2Fm69n7UdMbx21EKneFrjWrAlNYpx0nCQvqLc%2FiyS30OCQ1TepjkO1c2auIBKRrKaI2Hr7W2qbBA2LyJO4EE7BO7HCb%2BVMMvXs9uhnpl3trQxymjyAbqahEkUM2vZYiJmK2CK0KvbDTFSIORSgly1hwynwSOqbxoFcSbZiBzehIwIcO%2F0LvFdUTBFcRgkRAN5vPyldW%2Bm2XbKo%2FymVPQHnz%2B%2B3M%2Bygk6x4vxTgveSbG0O4M%2Fr3vr6pPKIBw4Ri%2BLs5EshyBO2pvcnbQyB7kF2jVfyHra4AmDsUlUFgAEH7NBufZXecgDcyJ8AzNFSMzAsKay89FTb6Ta2fZmmq8uwj7TXzKI%2Bs1G%2FEtypZLjSUbwIlZzZoyewoQuuSvMO%2FIqL4GOqUBqk9bDh4C5aMtIUX8%2FAgA0dkzA0Zl6doUbvxxvsE0fRph4lHDhQ93xiWNDeYPxj2uT63infcRoL3t98hZsmH2spkS1mT2W4KlfGnQ%2BUofGLtR%2FOOCMUCtNQrixoeWHRHBLTlbU%2FDsSPLdCqhmjbWOaVrcQ8%2FiZrmjgECuPyVOrvqEDBsg6Lwbf7dSkESL83vXGWQfm3QDncrcxllDHGlMMM604Fv%2F&X-Amz-Signature=0bb754e6f3a5ac5a7ee4d47093761b1eb54c53764b4ad5a258104e842405ef3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVK2ZZP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa9lbrGGjd8Mj3UpETQYZCZCwEs79dm7QkL%2B1t6jgDbwIgcSM0zNv5jR%2BAXB4RGKID8cll2l164CMN4i3JdEY1n7wq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDGHEdmyCUyGvWhTnVyrcAyXTevm0H%2BfAEaAeIiN5Zbisw5iy25rHy8mp%2BBqsJLyd8Cz1kqsr4THv0q0s0H7Jg9dVbJRjlsWJV0RP7c0aCuijgISDX7A9vjQCGhsHJFPujwya1aEypAM1ONSNYqQ16Z7QxDtrtQarQ%2BL9Eby5PUnu9TvdYrT31iss9uYL0xvWE5LkCP89FQJiCLewRSeV%2FLOpHcLrC8upaEXf5ELIJPS9lag0e0ISxqQLN%2BGwOMsPfCygXpLLCdJLXpi1HF%2FBzMXPzKDoqyySGCKK4snt68dYC%2FxXR%2F4WIbDfTH7JrT4rUJlDeWnT5QE%2FfKeIc%2B%2B4BdLNNGn2G8ORoXSALIXHJG0t0PaoZlN7lCzxJUL5x9NMX6DjOavkv0fMgbo6Z1I218aWv6%2F791Uqo7mbadRF2aswVlBaBcXejtRs5bVLJ%2FuaV3sixAZQgkkdpuEJ7PKnS5HNCgCke2rkPnr2mUbG5xlxq0MRomY1V2uM7Kp1prag6rfvL5tGbzqZgQOd%2FZQSiXYt7yD46AweTO3JQkL581pL8Bq8urd1Np9cpaY5kg4%2F7bqwGR1%2FxuJ1inELtai8GeN7KMVVbw8I7jb5xvtLEcj44bjdbrlEAzkS5KckiEriQ8bNHO7gXiu9fF%2FsMLfJqL4GOqUB3HztmID%2FiCQwml506bWx3A82NlHCMxX%2F8qctDFs9hTpCqSogNv%2FNEDwuB6qtYWmV1LAz2beXFdUFRndR%2BefoXuZWDo7QdAHIewQHOlyW%2FwYgcAicv9GffvHhwQreOH1ZQPvoBUad9ZYhNf8RuJmt6a4yjwknk7q3CY8lZ3zO%2FHrfl%2F%2FAeTbRGNmeNzmC0XxZfrniMsu70NHy25wp%2Bp1rIobVojXj&X-Amz-Signature=4eba01438bc06ee1390a0c0cb184b13dea70f685e52efb56b65a09b016d17eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYPINUT%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBR2XXULhOq650ivw9kgTZA9XllRU7l1Kg4odZwN4qdTAiBfghOnPJRnioizjClabXwiGYGLnWFzaxVWWMWnLYYHEyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMmaDFxIQw5OZDG2DZKtwD9qFUVxxBcfqE4ck0pzPGKPrm5MTHFy83g4YD5IpwVxwehwQGgZcEKAEqiJTGj8sqeOvFH5o8D1Il9Oi%2By0p7H1HiyAspScocodTKhYxfOQxQZavoZMUFL%2FLLblcQQl6gL99EPeTgGYBhEF1xecriim5SuBpXc0ZxANCjxwsM0Y2PfqP93Sff8IxDlUvPy1LDXEbCbulzQ2r1KbHQCc%2FIb7TT8yXgVHK20unq8saIXxSF0bW81mLbsc%2BAOWaarLw07WspqHMFH5V688aESlPul3RL4TKB4kmmeDm8JfG5htFN2iLZ%2B0kahArq39UU8nxQ2uL4Z1mUFXV4nLOnPm%2F7juJd6%2BGLqbR%2Bg6ltUtLeYbAWWAIg5UHV14rGY3mvqDi6oyORsssqnsmdpw7aKpHraT3mTtGq%2BUMO8HDsrBp1yQxPxFNPrcB8ZNOoNcVXKefMwXTSbOuzOGNACOfYgy17F6FzCYk5IUkKJgq9%2F%2FzSfN8Ym2M7Wm%2FjkY9%2B74Fz2Q7ZFxc83wJng%2FliBv9FPZCfWJ7%2B7oWs2ea4936c3XKEe811hwJfXdAMYYXcHI7TOvNY4RNsMZlNBazI4YuNYBZf30SUYt1%2Fj2HDR%2BqJVz77vS%2FWmVHuCCw%2BgCYeg04w0cmovgY6pgFh4Y%2BnYKNhlHO3%2BV47bVoPtfWOHxzWbdbYmqc0RvHcWCVuZFtA4Lg%2FjF8bvy949Rcl4C4DbVvBSos4u3saS7iajNeP1%2B0BuB4UtS8ryNu8DOdj8A0Ambkq%2Bw%2Bb2XUitzA8IGzk%2F2a7Poc5ekm0SkKjyecajWv%2F17mDtd9%2Bjh5qdUzSkz0cjxS6XRp7KcBVOHWD4%2FI%2BG7lzDpMDFQ5%2B44ZWYnv9s1Kq&X-Amz-Signature=3cdb62532c0fedd2f151cf28d8c33e3ca67245abf630a818987a6ae564cc6b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
