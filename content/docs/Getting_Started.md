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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UPTU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFzJ9m9jETRpxLksc2hSzpcs0UTSjaBk0%2FjcvQcYN%2F9wIgF7dxMNrnf10ureA%2Bz%2FSFPw23JhyoMpplEdCq6X%2Fen3Mq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNS%2Fh0KFvd7gOrPlTSrcA4d4Z1eRIhEiRYmmGBtKrdrKtKnE%2BAenG3urkZCxyY9PQNXy22lYQzH0nFAagewiLEPkNa%2F3TnQqdwxvVvHpg6BD9IMF%2FW9Z85BASlNU20bFvtDDXqUX%2BVBXcnBkR6Uazjs2kVPtUAOz%2Brmrdyq5ZAo66U%2Br5QlMaq5Oe1rztV3v49VZgzMEixgO8sPfC8C3H0GyQk1xhyEmTY52KruUsNLNR7cVVxA0%2BFWk84upRKLBPMTGtZdvZQ8sdx6NK9lnaHCHXTLjIsk%2BI678bppfr88BzKc9woTBrghgYVzDXcWgLbxEJwt2OSumzPbVvprJkPUej6mpyMD8hRBu5ZCl88C99Ydl4Z6Cdc6MkFQXl7lE4mQ4cjv1dAiHV%2FoLFNfXoleN2esZwOIZCnT06nXrgnLDteW2RzTn7FUYAGCHwcB%2BPxx23NUZiJZrnWlOu6gL7RL48IHZkdn6CPNXZ6b2gletCPVduVHHzbTQ4%2Fd3rs6hOSa4%2Bly2pIJ0VBSODW0NZbhrfYu7lq4I5P9DbkB7EUk0ICy8NbcPLJZRrtcJU0JCrkdUjyElaSXtv0Ij6hKkDbDeOm5mPTOFZ%2F5SyWenQ9GHFfVSXvztADaQp3gObCshqCdqwRPzs%2FT3cELWMIz0xMQGOqUBmO1Rj4z%2FAiFariYlc4DfWt5P%2BsThKc7EAoSH3%2FTXqpXBXSJ97o1KSzN5VGCoGM7o1IflmcE%2BxETLzz5uJZu75JnIj%2BH3whwgsaUw8%2F6uorqNPe8v%2BP5sBAdAexGxTXz8N0GStVjS0MuHYuwjVC8BaibibnoDd848V2P9ppycdO%2FXP7RdXdU%2BnxC6LuMmnQxcews5xXxN6%2BD4w4XlR2c4GvPGUbVh&X-Amz-Signature=300280a0ad4215b1e39eced68fea6a73b7f612437a8f1e144bb440164281e0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UPTU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFzJ9m9jETRpxLksc2hSzpcs0UTSjaBk0%2FjcvQcYN%2F9wIgF7dxMNrnf10ureA%2Bz%2FSFPw23JhyoMpplEdCq6X%2Fen3Mq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNS%2Fh0KFvd7gOrPlTSrcA4d4Z1eRIhEiRYmmGBtKrdrKtKnE%2BAenG3urkZCxyY9PQNXy22lYQzH0nFAagewiLEPkNa%2F3TnQqdwxvVvHpg6BD9IMF%2FW9Z85BASlNU20bFvtDDXqUX%2BVBXcnBkR6Uazjs2kVPtUAOz%2Brmrdyq5ZAo66U%2Br5QlMaq5Oe1rztV3v49VZgzMEixgO8sPfC8C3H0GyQk1xhyEmTY52KruUsNLNR7cVVxA0%2BFWk84upRKLBPMTGtZdvZQ8sdx6NK9lnaHCHXTLjIsk%2BI678bppfr88BzKc9woTBrghgYVzDXcWgLbxEJwt2OSumzPbVvprJkPUej6mpyMD8hRBu5ZCl88C99Ydl4Z6Cdc6MkFQXl7lE4mQ4cjv1dAiHV%2FoLFNfXoleN2esZwOIZCnT06nXrgnLDteW2RzTn7FUYAGCHwcB%2BPxx23NUZiJZrnWlOu6gL7RL48IHZkdn6CPNXZ6b2gletCPVduVHHzbTQ4%2Fd3rs6hOSa4%2Bly2pIJ0VBSODW0NZbhrfYu7lq4I5P9DbkB7EUk0ICy8NbcPLJZRrtcJU0JCrkdUjyElaSXtv0Ij6hKkDbDeOm5mPTOFZ%2F5SyWenQ9GHFfVSXvztADaQp3gObCshqCdqwRPzs%2FT3cELWMIz0xMQGOqUBmO1Rj4z%2FAiFariYlc4DfWt5P%2BsThKc7EAoSH3%2FTXqpXBXSJ97o1KSzN5VGCoGM7o1IflmcE%2BxETLzz5uJZu75JnIj%2BH3whwgsaUw8%2F6uorqNPe8v%2BP5sBAdAexGxTXz8N0GStVjS0MuHYuwjVC8BaibibnoDd848V2P9ppycdO%2FXP7RdXdU%2BnxC6LuMmnQxcews5xXxN6%2BD4w4XlR2c4GvPGUbVh&X-Amz-Signature=e17a1521225fc8958e9831338339571d36faf3cccf33d578faaecb0d8b4703eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UPTU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFzJ9m9jETRpxLksc2hSzpcs0UTSjaBk0%2FjcvQcYN%2F9wIgF7dxMNrnf10ureA%2Bz%2FSFPw23JhyoMpplEdCq6X%2Fen3Mq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNS%2Fh0KFvd7gOrPlTSrcA4d4Z1eRIhEiRYmmGBtKrdrKtKnE%2BAenG3urkZCxyY9PQNXy22lYQzH0nFAagewiLEPkNa%2F3TnQqdwxvVvHpg6BD9IMF%2FW9Z85BASlNU20bFvtDDXqUX%2BVBXcnBkR6Uazjs2kVPtUAOz%2Brmrdyq5ZAo66U%2Br5QlMaq5Oe1rztV3v49VZgzMEixgO8sPfC8C3H0GyQk1xhyEmTY52KruUsNLNR7cVVxA0%2BFWk84upRKLBPMTGtZdvZQ8sdx6NK9lnaHCHXTLjIsk%2BI678bppfr88BzKc9woTBrghgYVzDXcWgLbxEJwt2OSumzPbVvprJkPUej6mpyMD8hRBu5ZCl88C99Ydl4Z6Cdc6MkFQXl7lE4mQ4cjv1dAiHV%2FoLFNfXoleN2esZwOIZCnT06nXrgnLDteW2RzTn7FUYAGCHwcB%2BPxx23NUZiJZrnWlOu6gL7RL48IHZkdn6CPNXZ6b2gletCPVduVHHzbTQ4%2Fd3rs6hOSa4%2Bly2pIJ0VBSODW0NZbhrfYu7lq4I5P9DbkB7EUk0ICy8NbcPLJZRrtcJU0JCrkdUjyElaSXtv0Ij6hKkDbDeOm5mPTOFZ%2F5SyWenQ9GHFfVSXvztADaQp3gObCshqCdqwRPzs%2FT3cELWMIz0xMQGOqUBmO1Rj4z%2FAiFariYlc4DfWt5P%2BsThKc7EAoSH3%2FTXqpXBXSJ97o1KSzN5VGCoGM7o1IflmcE%2BxETLzz5uJZu75JnIj%2BH3whwgsaUw8%2F6uorqNPe8v%2BP5sBAdAexGxTXz8N0GStVjS0MuHYuwjVC8BaibibnoDd848V2P9ppycdO%2FXP7RdXdU%2BnxC6LuMmnQxcews5xXxN6%2BD4w4XlR2c4GvPGUbVh&X-Amz-Signature=4c5521adea5ad1abe0ff8301b644ded07c5d8a7c3887618f10a475e81bd25e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCCTRK75%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCGORPQKGmiqZRnEMI1LHitFQVv3OhLTu7ER1IStFk3JAIgKSpiDIlvizdypFDd8k1CDgbrc5%2B1N9nPGmJMR8bz%2BEQq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDA5XKFdxY%2FrLKqhH7ircA9xXeG%2BTd3m7J%2FHizIQb0C4HE7te19BpM2wHuA%2FrU%2BVPAgly5f6MvdAfaGq21nZ9dX7N5YLSa60zpwm%2FXDH4Je7PJ39B1tY5VQeO3vPks5bwPXP71SMSnr5XU%2Fwr558CMQO1YjUI49ifKTo4w1IycgRgPN%2F3kufnVZkZcE2OC5vTpVwSociJa5TbHKQno8QZm5Eci8VmrKcnLj5rutagemuOiM%2BovrFhjHugdshGynVNaS6JiXf%2BYBmjHbhojhKDi0ZillQUipwLbhmWoSP%2FXBjSQ3N%2FdSB5%2BeSKfLcVGc%2F11RMTwxkMLtCv%2FFtvPm2eGq0jt%2FrbyuDXMgeCz2qdVUkoduqvpXscD3XAEbFe1M2VRd7zZ1pQLW0rXCMGz9cw1UWIKpsCQNUFQffeBQK1y91LIZTZkEqCFOqC201A9xcdzoTKZD%2BopMQKNU6N31%2BJvQHUKwSW3n9Ba%2Fqd7knpa9Q4ciEuuyhx3hHTMqsxge4Y1%2FHevGAspSP94m7psdKsBvTGMbw0pCm8fhBQG5r9U9X2nIRfo2lWOPywVqCwpUszYmr5IVg8sMCoXRNcz4iH0QUZGiy%2F4Vur9CTVCggDX%2Fm6ECORXHPQ24Rd%2B5phHuzFKO3oFuZCJw%2FNXIjKMPT0xMQGOqUB%2FsXQAHJ13%2FPWya%2FBLglEHrgbkt7S6p3sJdiRyVi8Flbc44Uc2Od0bRaAe8W%2Fdvpfo1PNWvFqCEiOtLDoLAnVz3N8dgl6bexAo7H%2Bt%2FwA0RDEaEUBDz9sQwR7aODMGyXPoT9GWZZb1XquAAfy5wkEoVraTouSaao6y5Fn5Qhmiw6OC80D%2FF9nHRn6xVezGP6cPhrmnIESYr47z9qYYMPc5x0Jct9Q&X-Amz-Signature=2003a46c7902e6cd04b169c482f7f8f157f37ff12aed0272972aedee7c3a04b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW4OMYZS%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIHfgzK05fdmHK%2Bo4B79pUKHRKEItcff9UdOZBLXfGpsNAiAbnEObocAZlHF0C3uWWrZLbLZNSVMC%2FYeC1EfcAMn8zSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMMm%2FKTYY6aghAdv0sKtwDVWEov06kn8N2s4dQJdGj99oz9nEtGASLTYLJDqsdblJc7%2B%2BD2s%2FNfE80yGHYIUMqxbh%2FL1ivs%2FFAGM4Fux8atCGqTFCSmizjEnGJ8eOpeZ3awGArEGw%2BugCJdpjabCwrb0dsrdpt2JUkwfb1V2MtJhgaiiiqg8u%2F%2FkjH7UfrEAAYu1NuMR6uiw2a%2FmuHAPWQvLk2IUDgODLuSjjYqNtWbW8Rv1lxqHLo0ckNAPdEwB5Qm2EMhsqYv7G97g54%2FJbCWlld5XaOmAGNk%2BJgKHfHexDAFiS%2FpLvqe6YsOVEzYDE86SfIq05fwPSOqoq5Gj10t7MYI4qQR2fb7WOq3UGUkzv%2FUbDfwIQ9Os%2BwougqebVuACCrV008nKu3ODVq%2BTLWSSkmxg12J0ZF2isS45RKyg6i5c5emJvpEzK%2BYVL1%2BGaZAhrhnjpFtv72VwR8eztZPqtoZCRpFqb3F7dZAJ1Dgm0ONZBLygypiO1sXl8SfPH4uyPg6Wul%2Bc4DjSFnojwUT8O8Wl%2FSHbt7T7r6l5Vvrey24cTYzpCe0y4xmzQoDpKQTLQronYWx7jPPzLkv9ZPnQg4Z4D5LtsT2VuKd5M%2Bg3RXxy2jLNv5Bt3q3%2FWVvrRWm9exdOgamdGARYIwqvTExAY6pgFkpl73oUEmmvElsM1FrIqKEJ01tibn2D14Ildq%2FctN13ZaNrPGDsNfq8ZN%2BAx5vhF55689jYHPMS4ntbi1NBCTpnmKtYwFO3njT7ZRA93Xc8bYjmHh55bfqqpeX%2BSz8GC7%2BH6L7cH1dhq1%2FplM5IZWAlV0p72IBl7gaNU1GO%2FIFUm1byqfhvQwdM6S2GmPfKOQg8zDrChAY%2BZCd2bLUm2GS%2BCVZwwS&X-Amz-Signature=4546b60700cd1ae0a7d81e5dfdf6a6cc32c97ef73d440bc86fa5ee60310968c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQ7UPTU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFzJ9m9jETRpxLksc2hSzpcs0UTSjaBk0%2FjcvQcYN%2F9wIgF7dxMNrnf10ureA%2Bz%2FSFPw23JhyoMpplEdCq6X%2Fen3Mq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDNS%2Fh0KFvd7gOrPlTSrcA4d4Z1eRIhEiRYmmGBtKrdrKtKnE%2BAenG3urkZCxyY9PQNXy22lYQzH0nFAagewiLEPkNa%2F3TnQqdwxvVvHpg6BD9IMF%2FW9Z85BASlNU20bFvtDDXqUX%2BVBXcnBkR6Uazjs2kVPtUAOz%2Brmrdyq5ZAo66U%2Br5QlMaq5Oe1rztV3v49VZgzMEixgO8sPfC8C3H0GyQk1xhyEmTY52KruUsNLNR7cVVxA0%2BFWk84upRKLBPMTGtZdvZQ8sdx6NK9lnaHCHXTLjIsk%2BI678bppfr88BzKc9woTBrghgYVzDXcWgLbxEJwt2OSumzPbVvprJkPUej6mpyMD8hRBu5ZCl88C99Ydl4Z6Cdc6MkFQXl7lE4mQ4cjv1dAiHV%2FoLFNfXoleN2esZwOIZCnT06nXrgnLDteW2RzTn7FUYAGCHwcB%2BPxx23NUZiJZrnWlOu6gL7RL48IHZkdn6CPNXZ6b2gletCPVduVHHzbTQ4%2Fd3rs6hOSa4%2Bly2pIJ0VBSODW0NZbhrfYu7lq4I5P9DbkB7EUk0ICy8NbcPLJZRrtcJU0JCrkdUjyElaSXtv0Ij6hKkDbDeOm5mPTOFZ%2F5SyWenQ9GHFfVSXvztADaQp3gObCshqCdqwRPzs%2FT3cELWMIz0xMQGOqUBmO1Rj4z%2FAiFariYlc4DfWt5P%2BsThKc7EAoSH3%2FTXqpXBXSJ97o1KSzN5VGCoGM7o1IflmcE%2BxETLzz5uJZu75JnIj%2BH3whwgsaUw8%2F6uorqNPe8v%2BP5sBAdAexGxTXz8N0GStVjS0MuHYuwjVC8BaibibnoDd848V2P9ppycdO%2FXP7RdXdU%2BnxC6LuMmnQxcews5xXxN6%2BD4w4XlR2c4GvPGUbVh&X-Amz-Signature=48e9726949df0705fa5191e243bc0d16021e1a4b0f1799a063661b6aa6d64ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
