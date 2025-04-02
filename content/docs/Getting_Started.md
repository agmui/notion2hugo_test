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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOUFMCP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHI50gRXNRJpNp%2B3u8mbdkOafGRofLsC%2B%2FI6OIKOS34BAiBF2PBokmSU0rMKIXqtEuT6FdqUMbvju%2FBxf59nL%2BE4MiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BwD0bAkzhMmSynxKtwD5cYJg0%2Bua5Waq3fcebWdboKgSSXu3rIjLi0fysg1o5Xq8PbRa%2BmhSi8ArVKSnPy6lRHPidavm65iJ9zDJnF%2FefbHiKEqg4uCI3V7dIn0JeCan78ARrBJjKFpt3NMberhJtWhzN6SceoQo%2B25g%2BWePNVsH8xWjgzTskk7enf28pY8ekDAKzx3Xh9VoDvC9oT3Y3Um1NyVh%2F9e2x%2BhSIcUa0oNy4%2BC1kQMNAqfGf6NwplpYsUCiUfyirt3x2LdhAhCy5y8yKk2OciOyj%2BDhok5c0A1Su9aLKdcU52uAxbnIZLxekdO6E402YRV6Luc3PdwxRBSgloh7I4dDxIh36BPMzEyfDV40LHk4B94Ey6QLoBVrDnsTendJGPkzQ4VuI6Uy0IF4TN9ZzfMp8NM8U9rB2SDcbw6YbL0v6SjgQYkSWW%2Bld%2BJ6tm7EFI3%2BwsQ96LOiNOvJvCaE7dz3TT%2BX7Deb4%2Fu1%2Fg2qLmRQLzt42s%2BAhGCvQfK8AWDZb57kg%2BpUe4J2rc1y2WjwXNj6QgVto5IkuHJSn9mg7gkHT0rUXOfUzrQsaibt3Gzs%2BWTztOUXxAhD5X%2B3V8h9hpdswawo0EznazFqz%2FskhHfjodEg9Nvm74XuOquhXy%2BabozZpkw7aW2vwY6pgFEGfVoXGZRtz3j%2FDfLAyY1G2ZwokFk%2FqZb0YXeya56auxy6ICT9daMRQoapPfTBClwIfQh2q7dJ9la6lgYZdn5irtn6lL01lyQTK5vuivSWQx4YbLLzRLFlbKhek6jMsmVAgYMB1oeMV9%2F0BToD1p8k9n4KYAAfc306V45VuruZeBgM7C%2Bz98QX3dbd0g3LXo9b3nUunQLlmzqnD8BX%2F1kqnm5uJt3&X-Amz-Signature=30ec9ab3cdd77f9dff68c4c6c23161bd7154e34657a2630e25bd3f22b84483c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOUFMCP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHI50gRXNRJpNp%2B3u8mbdkOafGRofLsC%2B%2FI6OIKOS34BAiBF2PBokmSU0rMKIXqtEuT6FdqUMbvju%2FBxf59nL%2BE4MiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BwD0bAkzhMmSynxKtwD5cYJg0%2Bua5Waq3fcebWdboKgSSXu3rIjLi0fysg1o5Xq8PbRa%2BmhSi8ArVKSnPy6lRHPidavm65iJ9zDJnF%2FefbHiKEqg4uCI3V7dIn0JeCan78ARrBJjKFpt3NMberhJtWhzN6SceoQo%2B25g%2BWePNVsH8xWjgzTskk7enf28pY8ekDAKzx3Xh9VoDvC9oT3Y3Um1NyVh%2F9e2x%2BhSIcUa0oNy4%2BC1kQMNAqfGf6NwplpYsUCiUfyirt3x2LdhAhCy5y8yKk2OciOyj%2BDhok5c0A1Su9aLKdcU52uAxbnIZLxekdO6E402YRV6Luc3PdwxRBSgloh7I4dDxIh36BPMzEyfDV40LHk4B94Ey6QLoBVrDnsTendJGPkzQ4VuI6Uy0IF4TN9ZzfMp8NM8U9rB2SDcbw6YbL0v6SjgQYkSWW%2Bld%2BJ6tm7EFI3%2BwsQ96LOiNOvJvCaE7dz3TT%2BX7Deb4%2Fu1%2Fg2qLmRQLzt42s%2BAhGCvQfK8AWDZb57kg%2BpUe4J2rc1y2WjwXNj6QgVto5IkuHJSn9mg7gkHT0rUXOfUzrQsaibt3Gzs%2BWTztOUXxAhD5X%2B3V8h9hpdswawo0EznazFqz%2FskhHfjodEg9Nvm74XuOquhXy%2BabozZpkw7aW2vwY6pgFEGfVoXGZRtz3j%2FDfLAyY1G2ZwokFk%2FqZb0YXeya56auxy6ICT9daMRQoapPfTBClwIfQh2q7dJ9la6lgYZdn5irtn6lL01lyQTK5vuivSWQx4YbLLzRLFlbKhek6jMsmVAgYMB1oeMV9%2F0BToD1p8k9n4KYAAfc306V45VuruZeBgM7C%2Bz98QX3dbd0g3LXo9b3nUunQLlmzqnD8BX%2F1kqnm5uJt3&X-Amz-Signature=e30801d464bb90fb472bf671f7433c791aac64db2f92e8652a2462d943f2bbea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYIJEPBS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICLjFjpe4YJ5%2B4KUMg8t7cixYWt%2BuzxIngfA31AxgtO7AiAC41cG9Gf6ii6pvNeW71KwHJ6CCwPSDbFa3FwnFcYrcyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcaHIU7UTFTUcEJ8BKtwDSHoVsXmsLRhUQqRAHdyK2xHnLKQ9FQjkdUlCX%2FWm%2Bnm42Sf93ErwvUGeHqa5N4OmM%2B8NmL6xmaGF91HFRG6wjn8Nr4VAnWvHReW2bXX6mEQc0KznHOi7oY0C94V5QwEdRa71AdqTFK3eLYQOT0%2F%2BS1wdBSsH160fXQpoMrnajHw7cMjSxqhhA7d9u8QcdwJQssCPCaSx5vk%2BtVqikbzrO8Zdycvhr9dX72ynUM0aXGogbYdmPRxj1YzigWTtkbq8Tj58J7NPf%2BfGNMfS%2FakNUDy1eac2pXo1JTSjSbZJWUK3Yg3FOOux3nqHy9l0CJlOlohwtNecouCaOwIW0dTFkX0dINSPmOxj00XKNOo2%2BQMeI0dQu8C7eAv8MCM5zP2PUz%2Bg3t9KrOvIfB0it8mWUCZ7Vpf0syhhvxyNNM3dhgQa%2BNcDkHtQaDJaEHw%2F8AZFaHL9pbM1oiFfmX6PEJfPy1rM%2BtldtBC0sSo5NTkCIrwGyY7fUH0CTXH8mX4me0qVQQ%2BEmi%2Fnz0STaMr80V3tWzUtlS3BPLxnwTZXC75viCzFl3WBOV1GwHT%2BF7PKOBvKtVMB30C9%2FA9GyP4NIcLvFbkG1gG7hjpCDy67JgPoz2%2FkNn8bVhC2ghOJplgw36W2vwY6pgFcOHeEx%2Bddyt3lomtUKRnHnIJ23QyAG%2Fjv5UOIE%2Bb27cZMBJetPZRlprG0K6MNgmQTiQNx0K5%2Bhc6KAKS5ILdh9p5Cu5WEJ1zf2PM6IA6WTLdLYJA5ddhyxlMEWEL2CitFIJX3RSCMQ2tDjDKEJo5Ks%2BlHFxz4OrwzDk8ONwaNuwNVvsP9OCRIq3gM7Xwz6SFQc%2BFfdAqwr%2BtfWE1TJSRdspIuawQw&X-Amz-Signature=7c1449259a1e0059a462b2460cb54440f3aa398f20e459e379d8a8021bb44b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I7JYTBD%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHiYtk%2BKnA97jgT2W2DPkjqu77kcOZmH4wQidUu1XSFTAiAhGIiY9m40OEAITdSJGLCGEvM5laXEr4YP6ES6ue4lFiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6l3rsNSxOkXIbuxKtwDS0P0S1n7fcje1hZglNDSjHvE7iLKZhCoixFafgIN%2B3Fs7lsQzEIpO4jEsyypr5Pij754sw%2FY81Nh%2BOa91JKr8Arjvn48uI1CBlt8LqW9vTj0JLsj0KYaP9WtGo%2FaWorZhPh7OGrnxXwjN1B%2FzSbLG2%2B9fRzPGqZDRrJZkRwAbcN2pku6kidg%2BmlmvJlwYfEoBxMuatmLCWvIwum%2FLHObwr4aASzXQmsvvcvoaFcN8j%2FDPKUuiTL319CKTaltWfuIzBZfRY74SSNFPNTXAFhvQGIHRfLBmRWx5%2Bu4IfLMZeW5Iw2jpm8HLh468xyxwoYf867FpDTDjbZbYiGhgXxcIFmHH1k0itC%2BJcThD6eJXtAt7j9Ls9%2BW3e2Q76lrSl9sDgaRv%2FkgsrleHA%2FeW9%2Fs39VxpsOoxYgq8Njt01x4bJ4WMfMt7sF3%2BhSg%2BS48JiK2JuQd9c9L4PIa6s%2Bu5xbmXY5IXWsnMwXlCuQ%2BbnWSyUI08mL2Bc2WuUViamaQ0bwNw46vCq9JzDnEZXOTapTfcJnmfEmkAo4lQ3tnQDtzA7yr50k5z36gyhmFx0%2Br9LzDSrif4u8rlP%2BCSAVmB7ZegnifOal3QnYPStgUTI3zlEUVnkqtPkto4lTN5UUwy6S2vwY6pgEVGAErQf8X7iXvnemEtJ2sAFbrkDdsL%2FgUr1%2FgGvG%2BvIp3LvRhcoxgzxDsM0F1GCfXOuQqgmzQKKSlpQAMgWwP7wRB6fgA5LzVXp0Kbh5%2Fl27QgonDyvC0CzZZjnn%2Fta5r5BvRf9ur9O2t15es4VaJxQ3VMmhgt1MZ%2Fz1u4exusiuau0OKkuX55YbnAdCUsHvIf%2Fp3ZvSwosNVLsyClEr9JfA9qYEN&X-Amz-Signature=17333b29a102ca24f58554da94bae5e27dbf2b1ca37cf1914fbcd7ac71a1d08b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTOUFMCP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHI50gRXNRJpNp%2B3u8mbdkOafGRofLsC%2B%2FI6OIKOS34BAiBF2PBokmSU0rMKIXqtEuT6FdqUMbvju%2FBxf59nL%2BE4MiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf%2BwD0bAkzhMmSynxKtwD5cYJg0%2Bua5Waq3fcebWdboKgSSXu3rIjLi0fysg1o5Xq8PbRa%2BmhSi8ArVKSnPy6lRHPidavm65iJ9zDJnF%2FefbHiKEqg4uCI3V7dIn0JeCan78ARrBJjKFpt3NMberhJtWhzN6SceoQo%2B25g%2BWePNVsH8xWjgzTskk7enf28pY8ekDAKzx3Xh9VoDvC9oT3Y3Um1NyVh%2F9e2x%2BhSIcUa0oNy4%2BC1kQMNAqfGf6NwplpYsUCiUfyirt3x2LdhAhCy5y8yKk2OciOyj%2BDhok5c0A1Su9aLKdcU52uAxbnIZLxekdO6E402YRV6Luc3PdwxRBSgloh7I4dDxIh36BPMzEyfDV40LHk4B94Ey6QLoBVrDnsTendJGPkzQ4VuI6Uy0IF4TN9ZzfMp8NM8U9rB2SDcbw6YbL0v6SjgQYkSWW%2Bld%2BJ6tm7EFI3%2BwsQ96LOiNOvJvCaE7dz3TT%2BX7Deb4%2Fu1%2Fg2qLmRQLzt42s%2BAhGCvQfK8AWDZb57kg%2BpUe4J2rc1y2WjwXNj6QgVto5IkuHJSn9mg7gkHT0rUXOfUzrQsaibt3Gzs%2BWTztOUXxAhD5X%2B3V8h9hpdswawo0EznazFqz%2FskhHfjodEg9Nvm74XuOquhXy%2BabozZpkw7aW2vwY6pgFEGfVoXGZRtz3j%2FDfLAyY1G2ZwokFk%2FqZb0YXeya56auxy6ICT9daMRQoapPfTBClwIfQh2q7dJ9la6lgYZdn5irtn6lL01lyQTK5vuivSWQx4YbLLzRLFlbKhek6jMsmVAgYMB1oeMV9%2F0BToD1p8k9n4KYAAfc306V45VuruZeBgM7C%2Bz98QX3dbd0g3LXo9b3nUunQLlmzqnD8BX%2F1kqnm5uJt3&X-Amz-Signature=0c731803ee40e866de6aace7f76f9403356426b7c9205cf13b47c4c6f12ca183&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
