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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPRPHAX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHE3QNzTS%2BILI%2FJGfD3X7jkA5L%2FyiKdtf9r0tFwpqvfQAiEArS2U1jOSSfMHsfm57y4HRc%2B%2FsYlmsoo%2Ffm6iztbpamIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZA3eXB9m%2F9Ln5EZircA2XHFdu8kSGZ7OjYIazQbVrHq5CAAUgn%2FiHR3thpLpcZ2uKB3um0uNJETdMUUWTVDTsEz8eu7lI21zVdZLd%2BKd7MWyAfSM8dwC05Gat5rnYI7Ornr4j6qvycbbh%2FfTzd1rnyoWNaBb6DZyXuwNb%2F5TmNpWvxD%2BujeSe7XgiJE4iyp1wN9ks043TfMIxnxBLadNNqxPRv8c7adZlWZX%2F7T8xPf%2B2HyXGRN4VGTc43Q2b8h2p6%2FuaFmUl5%2FGtwCBqOKXgqjlMKVWPOCg6B7SJa%2FOFKcxg3GMAmwSBzEbVW3pWU9yOl08EfABlCeIFNqEMRZG2oAomsuyhA6FZEcTTBBQa1Yijp%2B817uwvUVJivb%2FVNh4zAJbQ5aG2FCjiNz2JsACpcDpnbbly9qmHLTH4XKreBa%2BDk2cQDPRY78b1doZNyWBFYAtX%2FEX9sJSj%2FlhvBRo8iCdwpSgE3VagJ1khXaV9T%2BTYQUbDhujNGuXx1Zyn6roOryV4n3hAIjj6%2FZmoKER0rL%2FkdxQrVZYzbN%2Bj5ejiMtZ2qpIM4zw3Tg036RkB%2FhQQC2Eoj8Ld9iXn3cHzyRW%2FuB7D%2BnQzFuonosEAHn5DBlxtdnWLhHLtvB03nQuhONFIx%2FPCY3%2Fh%2BXkOCMP7LoMQGOqUBO5FME%2BcRxy6QUdENphQGqGjU1J7eG2Pu2hEmSQ6FT%2FWAepCVKqwO8EqA6%2FS9BXfdm219%2FIY8NcHHaLdFzVLYFPC25IxZ4x9SZj7VI8DuuMBsnesQ4YmuxOSj9Oo2EuhapEvrNiBY0IzLY%2BCRoKOMFy09eIWeGYW%2FrTMTfGJ5YK%2Bvm3HBJu%2BHccQKGGvVAzykxpJCP%2Brt1XjrHmqna40UeB6S6nmZ&X-Amz-Signature=9c082433a2535c45a1efa8a417fbc217d86933a072c7e218098f0318067bbccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPRPHAX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHE3QNzTS%2BILI%2FJGfD3X7jkA5L%2FyiKdtf9r0tFwpqvfQAiEArS2U1jOSSfMHsfm57y4HRc%2B%2FsYlmsoo%2Ffm6iztbpamIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZA3eXB9m%2F9Ln5EZircA2XHFdu8kSGZ7OjYIazQbVrHq5CAAUgn%2FiHR3thpLpcZ2uKB3um0uNJETdMUUWTVDTsEz8eu7lI21zVdZLd%2BKd7MWyAfSM8dwC05Gat5rnYI7Ornr4j6qvycbbh%2FfTzd1rnyoWNaBb6DZyXuwNb%2F5TmNpWvxD%2BujeSe7XgiJE4iyp1wN9ks043TfMIxnxBLadNNqxPRv8c7adZlWZX%2F7T8xPf%2B2HyXGRN4VGTc43Q2b8h2p6%2FuaFmUl5%2FGtwCBqOKXgqjlMKVWPOCg6B7SJa%2FOFKcxg3GMAmwSBzEbVW3pWU9yOl08EfABlCeIFNqEMRZG2oAomsuyhA6FZEcTTBBQa1Yijp%2B817uwvUVJivb%2FVNh4zAJbQ5aG2FCjiNz2JsACpcDpnbbly9qmHLTH4XKreBa%2BDk2cQDPRY78b1doZNyWBFYAtX%2FEX9sJSj%2FlhvBRo8iCdwpSgE3VagJ1khXaV9T%2BTYQUbDhujNGuXx1Zyn6roOryV4n3hAIjj6%2FZmoKER0rL%2FkdxQrVZYzbN%2Bj5ejiMtZ2qpIM4zw3Tg036RkB%2FhQQC2Eoj8Ld9iXn3cHzyRW%2FuB7D%2BnQzFuonosEAHn5DBlxtdnWLhHLtvB03nQuhONFIx%2FPCY3%2Fh%2BXkOCMP7LoMQGOqUBO5FME%2BcRxy6QUdENphQGqGjU1J7eG2Pu2hEmSQ6FT%2FWAepCVKqwO8EqA6%2FS9BXfdm219%2FIY8NcHHaLdFzVLYFPC25IxZ4x9SZj7VI8DuuMBsnesQ4YmuxOSj9Oo2EuhapEvrNiBY0IzLY%2BCRoKOMFy09eIWeGYW%2FrTMTfGJ5YK%2Bvm3HBJu%2BHccQKGGvVAzykxpJCP%2Brt1XjrHmqna40UeB6S6nmZ&X-Amz-Signature=ff9e65f93d10b41f6b7f8afac80c306bd0408edd67dc0f20f64cd6aac384bfd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPRPHAX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHE3QNzTS%2BILI%2FJGfD3X7jkA5L%2FyiKdtf9r0tFwpqvfQAiEArS2U1jOSSfMHsfm57y4HRc%2B%2FsYlmsoo%2Ffm6iztbpamIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZA3eXB9m%2F9Ln5EZircA2XHFdu8kSGZ7OjYIazQbVrHq5CAAUgn%2FiHR3thpLpcZ2uKB3um0uNJETdMUUWTVDTsEz8eu7lI21zVdZLd%2BKd7MWyAfSM8dwC05Gat5rnYI7Ornr4j6qvycbbh%2FfTzd1rnyoWNaBb6DZyXuwNb%2F5TmNpWvxD%2BujeSe7XgiJE4iyp1wN9ks043TfMIxnxBLadNNqxPRv8c7adZlWZX%2F7T8xPf%2B2HyXGRN4VGTc43Q2b8h2p6%2FuaFmUl5%2FGtwCBqOKXgqjlMKVWPOCg6B7SJa%2FOFKcxg3GMAmwSBzEbVW3pWU9yOl08EfABlCeIFNqEMRZG2oAomsuyhA6FZEcTTBBQa1Yijp%2B817uwvUVJivb%2FVNh4zAJbQ5aG2FCjiNz2JsACpcDpnbbly9qmHLTH4XKreBa%2BDk2cQDPRY78b1doZNyWBFYAtX%2FEX9sJSj%2FlhvBRo8iCdwpSgE3VagJ1khXaV9T%2BTYQUbDhujNGuXx1Zyn6roOryV4n3hAIjj6%2FZmoKER0rL%2FkdxQrVZYzbN%2Bj5ejiMtZ2qpIM4zw3Tg036RkB%2FhQQC2Eoj8Ld9iXn3cHzyRW%2FuB7D%2BnQzFuonosEAHn5DBlxtdnWLhHLtvB03nQuhONFIx%2FPCY3%2Fh%2BXkOCMP7LoMQGOqUBO5FME%2BcRxy6QUdENphQGqGjU1J7eG2Pu2hEmSQ6FT%2FWAepCVKqwO8EqA6%2FS9BXfdm219%2FIY8NcHHaLdFzVLYFPC25IxZ4x9SZj7VI8DuuMBsnesQ4YmuxOSj9Oo2EuhapEvrNiBY0IzLY%2BCRoKOMFy09eIWeGYW%2FrTMTfGJ5YK%2Bvm3HBJu%2BHccQKGGvVAzykxpJCP%2Brt1XjrHmqna40UeB6S6nmZ&X-Amz-Signature=10c46a876e0c0db8c27a42469ee1f91222cc73059f38fcef4c6c23209c7ea156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BTBIAQ6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHTpZxZw5bqZ9n%2BS3NGOj%2Bnglv%2FO5BAtmfULJ%2FYdvD%2BKAiEA7hpxHKMhg5csORSixRDGexSQYjNJMEGPiuKUAFF9HYoqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAGn%2FWw%2BiuPV3%2BJgPSrcA2WwkV6naFnS9Sc%2FDalwlUl9NZKOUnFkqdn8sK6ejTrX6n4k3tnrZZFwKATITOLN2jY1Kt5u7tu3Xby3zY3e0pgB02d7U14n%2F740%2ByMIvZYpfPMFDyNheg7AwysKtc8BmdHSofm09iI2lfG22np7GOtLgKcJyKl80Fx0p0qdE9ZPCc%2FhmgfXUMOQJuy83ctCyALeVUFTf7bqNoXOl706%2BIDJ7VdKGta4x4XrOKp5eYy0pXKKmye2cAdmPZ7GJvnISv%2BqDtHd5jItbOnLyLQs6JuaFpQ2LoH2OQmMThB4A9BTEMCBhkHx0t8mx2jlwHTSS3YWFG%2FfekTSJNMRQoJ4bDsbt4oSBtaGcdbK29nHz2v%2BXL4j8s7MYf7IYIR7%2BJqpYxV7malFzu6MURXQ4jT7heSs3aHymt8mRnWE70LpHN00xZXKjUtT1E2HuH4ylJgAbydVVax2qMnxTubQKkQQoXcW1RgjE%2BIEMbN3v2ajBSW6TXVIEUHeT1JBcVTY3wP8GHAkygPcZHsSQcy4fRhkKMtRkFBkbOPRlSQHPucWQScJx9%2BaeKMkaT7hYEwgYLZvdzwqjyJS8pgtQd0rx5G8y3DwWqZr5UlsxAZ3NUp3WeNP0OZ8pKvm6ccc1aM2MMDNoMQGOqUBz6Vbhz2wkF8wMes0MVK7RfBz2ncI210ERx3Ey%2BYaKciVDhv4Lz6xYW%2FHxvmsRGJ326X3CyGDb4BWUuS9oaebyIhVO5Pryu3uUJCKmuaM1hYjWUZGWNJOkVHbw7WCfvRbJZSY9tRqqn7cIJ9A3VpE7%2FQ2W1Q7o9hqvjupMNAqUES0kbxViDfzyRAbRj2x5JwpihNYnTTmrKh78WPtGyBlHfCwNWqj&X-Amz-Signature=445e1c148a89a33b206181bfe07d3ddf469dba4d3c923149eae3c41525ef35f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHASBGV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEyi98mJQ360ILVbaR4Wg7h1UQE4K4wdxy75TIGytN%2BGAiAIJrZ%2FqZAe99uLkYeDnJzkKndLuR8x%2F6LdLDMd1NMiLCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj0%2BOkikvADlsocKNKtwDcVHFQX9%2B858cRLipIuTuM%2FzpRj0llOPat9exHHs16p9yVDptbozZurTU0w9ut2yRLRKtGjDFX3ICP9qnsc6kEwDcXRGEbwCmTciV%2B7hF6B7LM7bd%2BBPpUQiLCj%2FGXeEjwVb7YZ6UzYbCt97wmfjw53%2Fi94ZrjDZBuAPuve2qULj9nI2IK6I4evnujcSgJKhwwj%2FS6iq3BwILZK3wFiMKAfZZ%2BSn04E1ASt2b1OUGc9BLdJyuyntj7mrFESh3T%2BZoW9yhf8W17Lzob9GDZBRXOXBvIpCXp2WLdkrREHaTN5sZ7B0jHVsptgYJGDYXn6biKFzM7f0YbIsVKQJsUYRopNIH6Cnjzq16WeYNX5O8%2FC30rwtJsOggk64gUBT3LPpjjbO3ij%2F%2Bh%2BPU5DaV3Qfrr0NPt7Wv%2FJCgIX8hd6YBzNF8%2BXTK0s40i0fqAkb%2Ff8cSGV8sbBxyyY7h8shExEoFcDSXLSKHmC7GPi7hx27R7eCgcKYebePyewCOGHgpMDzGnydwx0sJD7kG4%2Ft59E%2FkeGsU8%2BbGUcQFnvC%2BwSOO9T7Tudp%2FcBXKiJYSrJDaAfke1BH%2FbmxUhWXN7m%2BcDLWlCVyjPPtPFyot5JpqzCuJCnRuWPN3uGfLIcJW3Qgw6MygxAY6pgHqGjD0LGZNZaiMbKSt8mLHXBIrfwbxCfINedR5%2F3PQjYarMGo0k1SGlL7Fr5OrG14sOu%2FRSOE0TWBf8FXPB6Y2MSCM%2FF15RLlxvnmPHJ1ikAulTz1KfgVOTkQvCQR7qF22TRkpjZDCT9tmyw1uydq3OKCRR1rvh7jDLLzXbCL0XLIuf8WfAKGyukUe8YV3zsV8zNmWME0azCeQ6mBul3mT9Z%2BpeMJc&X-Amz-Signature=15fd90c24fbc3d1bdfb794b638c65686f7299ca121d1ac893104f8a30616c138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPRPHAX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHE3QNzTS%2BILI%2FJGfD3X7jkA5L%2FyiKdtf9r0tFwpqvfQAiEArS2U1jOSSfMHsfm57y4HRc%2B%2FsYlmsoo%2Ffm6iztbpamIqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZA3eXB9m%2F9Ln5EZircA2XHFdu8kSGZ7OjYIazQbVrHq5CAAUgn%2FiHR3thpLpcZ2uKB3um0uNJETdMUUWTVDTsEz8eu7lI21zVdZLd%2BKd7MWyAfSM8dwC05Gat5rnYI7Ornr4j6qvycbbh%2FfTzd1rnyoWNaBb6DZyXuwNb%2F5TmNpWvxD%2BujeSe7XgiJE4iyp1wN9ks043TfMIxnxBLadNNqxPRv8c7adZlWZX%2F7T8xPf%2B2HyXGRN4VGTc43Q2b8h2p6%2FuaFmUl5%2FGtwCBqOKXgqjlMKVWPOCg6B7SJa%2FOFKcxg3GMAmwSBzEbVW3pWU9yOl08EfABlCeIFNqEMRZG2oAomsuyhA6FZEcTTBBQa1Yijp%2B817uwvUVJivb%2FVNh4zAJbQ5aG2FCjiNz2JsACpcDpnbbly9qmHLTH4XKreBa%2BDk2cQDPRY78b1doZNyWBFYAtX%2FEX9sJSj%2FlhvBRo8iCdwpSgE3VagJ1khXaV9T%2BTYQUbDhujNGuXx1Zyn6roOryV4n3hAIjj6%2FZmoKER0rL%2FkdxQrVZYzbN%2Bj5ejiMtZ2qpIM4zw3Tg036RkB%2FhQQC2Eoj8Ld9iXn3cHzyRW%2FuB7D%2BnQzFuonosEAHn5DBlxtdnWLhHLtvB03nQuhONFIx%2FPCY3%2Fh%2BXkOCMP7LoMQGOqUBO5FME%2BcRxy6QUdENphQGqGjU1J7eG2Pu2hEmSQ6FT%2FWAepCVKqwO8EqA6%2FS9BXfdm219%2FIY8NcHHaLdFzVLYFPC25IxZ4x9SZj7VI8DuuMBsnesQ4YmuxOSj9Oo2EuhapEvrNiBY0IzLY%2BCRoKOMFy09eIWeGYW%2FrTMTfGJ5YK%2Bvm3HBJu%2BHccQKGGvVAzykxpJCP%2Brt1XjrHmqna40UeB6S6nmZ&X-Amz-Signature=d0e469fc56804088a9fb5696bc12277434e13125f1cfd7032e7c96a062a7f637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
