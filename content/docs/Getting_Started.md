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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJX2X4U%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1%2BaJk9VMn%2B7A7ORfedA05co3yxzS%2F9OzOsQJtTjLFmAiEAqZLAl%2BcGj8nTBDOpjlHp2475UHn9yXLK5xpNswj%2BDE0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFev4sYOmyspJm354SrcA247Kaw6nqy3qmhUaf6ZRzzCYfA2%2BdRtw3s5FHM20LYec3nSMCLgc%2BY0ZYkAHB8jiqA4ge3L2eu60oBaPvaBO7r9pvdxSqygKErwgzK%2Bbtq0gQkAFJZf2JuGFTpws%2F0gC2X2frkXpgP%2FtGWvZj8SpPlMJmz8%2BeEL9mhtdNzWa99Xb2W0zl5t6dlelJBZVNYTuPmTF52X06GYC1dMgTb39prnfUp8o6hGSe%2FuqmZewDKScUz%2B%2FlEEy2r94a8DFc6oK65vlcLwVN8l73iQ50WX0FyUSXLzstRTR%2BVUnXw1Z84sLkxGo9U0%2BShoJzru1pbiVP5kdlgLYbxzb%2BodCs6iahSgdWbNAo3n1VtWXMVekLwMBLsmydCdiELTV8ernT5W4K9PhoJCLnrj26mNJnWowTHCSz7aXdq0bPMoMrYviWorkVIO%2BDAGLFO5xAF4czaXaI1nTptFINOxEyh7A%2F8HG9Ft4xTlAjcuyLIIjc4kvOU6Ml%2BHg6x39YFtJoySg8aFwcfjUxeXY%2F34gSwuOLyuUr4fUH2vgtM%2BHx51dJbXuzkLXDMxMc5fib9vmx719Q2nkM00gpKP%2BCfhB500a5X4jxwixO9VUE5nA2bo03%2FSPUWewaIqoosOGjbLRN%2BSMMCinMAGOqUBzfu9JIF70RjO%2Bx6YGV8pHyJKDmI7qvwCCc%2BqAYGW7JjJhCReu7liHGOQ%2FxV%2FR34PQh7vycKFdKaHEbtebUDxTsJO%2BHkU5%2B5EReuEQubdcdooOpPm%2BbajPKZDOdDV6b6roaNxhi3YYAVz8EDOOSk732%2F1C3cr9J%2FFicTbx9SN%2BhIihDMgXq1%2FmlLoTSs8Lo2dD6pICoP4Tk0so5QxPRW0bb%2Ff8GfH&X-Amz-Signature=8a96c4af2189f72815fadc0b676da881bdd12984b58908aa7efa721e67d0017d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJX2X4U%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1%2BaJk9VMn%2B7A7ORfedA05co3yxzS%2F9OzOsQJtTjLFmAiEAqZLAl%2BcGj8nTBDOpjlHp2475UHn9yXLK5xpNswj%2BDE0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFev4sYOmyspJm354SrcA247Kaw6nqy3qmhUaf6ZRzzCYfA2%2BdRtw3s5FHM20LYec3nSMCLgc%2BY0ZYkAHB8jiqA4ge3L2eu60oBaPvaBO7r9pvdxSqygKErwgzK%2Bbtq0gQkAFJZf2JuGFTpws%2F0gC2X2frkXpgP%2FtGWvZj8SpPlMJmz8%2BeEL9mhtdNzWa99Xb2W0zl5t6dlelJBZVNYTuPmTF52X06GYC1dMgTb39prnfUp8o6hGSe%2FuqmZewDKScUz%2B%2FlEEy2r94a8DFc6oK65vlcLwVN8l73iQ50WX0FyUSXLzstRTR%2BVUnXw1Z84sLkxGo9U0%2BShoJzru1pbiVP5kdlgLYbxzb%2BodCs6iahSgdWbNAo3n1VtWXMVekLwMBLsmydCdiELTV8ernT5W4K9PhoJCLnrj26mNJnWowTHCSz7aXdq0bPMoMrYviWorkVIO%2BDAGLFO5xAF4czaXaI1nTptFINOxEyh7A%2F8HG9Ft4xTlAjcuyLIIjc4kvOU6Ml%2BHg6x39YFtJoySg8aFwcfjUxeXY%2F34gSwuOLyuUr4fUH2vgtM%2BHx51dJbXuzkLXDMxMc5fib9vmx719Q2nkM00gpKP%2BCfhB500a5X4jxwixO9VUE5nA2bo03%2FSPUWewaIqoosOGjbLRN%2BSMMCinMAGOqUBzfu9JIF70RjO%2Bx6YGV8pHyJKDmI7qvwCCc%2BqAYGW7JjJhCReu7liHGOQ%2FxV%2FR34PQh7vycKFdKaHEbtebUDxTsJO%2BHkU5%2B5EReuEQubdcdooOpPm%2BbajPKZDOdDV6b6roaNxhi3YYAVz8EDOOSk732%2F1C3cr9J%2FFicTbx9SN%2BhIihDMgXq1%2FmlLoTSs8Lo2dD6pICoP4Tk0so5QxPRW0bb%2Ff8GfH&X-Amz-Signature=b34cedd0952fe86324df1f1e9a53b31062a1f1f79ffa3367db0779fbb84d27fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVVIBM3M%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCOBvzSb7UheEb999GBwfjHeImbtrvY64orJP%2Fk5dax%2FAIgX0N8XYUtv5obKdsjSZgaDrEAE%2F1Rb6xGwJ6ze4WTqRsqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0onMDXRS3dcaokMyrcA3AE3CKPXo1GR5rYBzjzK%2BhLldryYkAUo%2B6OlnZ4HQLiZgUuRVPjV2t86fMtuFZk8MowyBwCwvAUTeY6evkI6v6fRUnsd1lFyigQkY1xWmn%2B0dz2KFDIYSgbu2Fx7OsAkz2my5HUtZ7n4MRe76E886VmsMd3iPj0hed%2FhDuFwMlBmAnYHt%2Fryn%2FUwka1ezJ0yJ%2BKkZWXHlMd%2FXUqYJpJzLLeIZ05wJB7v54%2FMJFkLQN6KpTa90RG0tsLZGNz2gK2bCFu3irvjYwzfQYQqjU%2FwPw8rgm%2Fh0WRVa9zx6voLQEnZrM9eHAYti0ppHpgqCB5UoYFU%2FE4VM3DkKlw7qUDzPL0V2Uf9xd74SKKBwJA1qYkfoazuv7K5NwK6%2FyyWjxYySHLEeoBNbZhA5odoHRsnOmDQXjohnlLPnvxKTATy6MEH3t0xIvmhJa%2BPPms00cuBHk%2FTIzwGq7kE9nvAzazHi%2BVNmDBL%2FRv9v%2BXvE5xNBOVioYJhihAjvpSCsn%2BipHNQxfeBueCxtI4yhyhapbfnssQ9wkYT5eMPfnZfD3ThodUEBHU0Bl8%2F%2F8lJZb1wgujRH%2FbKbRI%2BBy8wchnVMUEyjoOoMlYHglw1jc4IzmO56Lsf3Wn%2ByfYDI29NLg8MMSinMAGOqUBLwow%2FMajacJjfYIUxpegjDr5IA1TGuhFwqkpPETcXMqxDV4ELZf27eOpMSeDHFHBBtGXo5QZYr%2FF9H3EKKXoP1qxJLd54vFjmNpmyjYxb%2BlrfvP1iAwOIgc8274jnAZx5d81ap4%2FXu5tKikZX4Q6k4ewWOIFdt%2F2g6Z0gJwnKQjS9cV3kEALlUR57l%2FiXLJwan41MyaHTshnoM%2BFR8bkLykPMrxs&X-Amz-Signature=2108b6051a49bff55e92b6a5a8a81e65d4a94cc34376d9f39c1a045e79ec11f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TTTHSKR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCenQHBcGFG6WetRXpIit9gvQA5TlS7jzc2eXrOHS1o9wIhANlDEncyLzsd6rltRccs8o7YLjpW7C0mlLuM8fskU8XJKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl7%2B2kS%2BGwf3ittn0q3AOdhvQheCaU18guI1YpwxswydUUyNTroquQo%2FKEtWIqZPUd%2FWEps3Vqc8DC8CKdY5rLVv3w%2BG7FoYRGB%2Fh2sssJVrw6RyBHVI2Y9CZINUlAngJ%2FW1iKVfQf8KsU4wynC0Cc8UBkgAoWyqhF%2FdJlJKhNlzyMAuMdZg3inzqyNqM8uCci%2BEfQVCFSJIzCwjLdqelv%2B3xavetoMqRx9ilCxlOrnHSkzhQ3DqvknZqMKW1lJK0qYhba8Ftqi7supVJUVWmueja3Uhp8xSUrrjfPeecxtC%2BD98wmfPyVhWyQpMBKmblgauC8wRjz2cR7NPYbrpyMfaEbig8NoXU3FbpAkMpXWHRwAkSPWyNvObptUpuQAhVimT1Gm9ExhjKA1vLT%2Fqp7S1MUP6SKeMhQD73hIuQu3FRRdwh2MebRE5Kx0wtJPiaVO16Qu0Q%2Fd2OAXnU4W%2FwLK2jpsK01GFOzViPT6uz17rvP0YL%2FbzCvYKaHe5VMoPPNW40l3zOREYw72DFlYkVs%2FUc%2BFbdPeNjYscTHCkR5UHEvdB18%2BMNa3OTJ0JRR7HuOjbmk8MT0uSpsC91FoOdQBASGJnx1Ac7%2FZwbFZiufOVZqXI0Z7WPUC7HP1NL%2FL1RomAalS1OeXXCDbTCaopzABjqkAZam%2Flpd3jZv5CdJ2X%2F2j9DLrkpPr9UwIFlXLA4XJs%2F4hh3HYVgfSQtzHaJ2CQW%2Bfhxbn6BgVOMQHCFP3GfJm0rhPVDXEKGs9CPjW4VLjxK1TnsGAFuzm9%2Fz4KgB6gNMS5sl8lCmv%2FAK82NOKZAHQVjf4ppbUQTSfm1ghcVjjPR3vtkvLorsci1ELHmfttdT15bSK%2FQWErGgMRzWeK5df9XQUEdS&X-Amz-Signature=6458faacbab352e32f1578684a251400a91cd0302a6b8a69257d8f6bc35ce7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJX2X4U%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIH1%2BaJk9VMn%2B7A7ORfedA05co3yxzS%2F9OzOsQJtTjLFmAiEAqZLAl%2BcGj8nTBDOpjlHp2475UHn9yXLK5xpNswj%2BDE0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFev4sYOmyspJm354SrcA247Kaw6nqy3qmhUaf6ZRzzCYfA2%2BdRtw3s5FHM20LYec3nSMCLgc%2BY0ZYkAHB8jiqA4ge3L2eu60oBaPvaBO7r9pvdxSqygKErwgzK%2Bbtq0gQkAFJZf2JuGFTpws%2F0gC2X2frkXpgP%2FtGWvZj8SpPlMJmz8%2BeEL9mhtdNzWa99Xb2W0zl5t6dlelJBZVNYTuPmTF52X06GYC1dMgTb39prnfUp8o6hGSe%2FuqmZewDKScUz%2B%2FlEEy2r94a8DFc6oK65vlcLwVN8l73iQ50WX0FyUSXLzstRTR%2BVUnXw1Z84sLkxGo9U0%2BShoJzru1pbiVP5kdlgLYbxzb%2BodCs6iahSgdWbNAo3n1VtWXMVekLwMBLsmydCdiELTV8ernT5W4K9PhoJCLnrj26mNJnWowTHCSz7aXdq0bPMoMrYviWorkVIO%2BDAGLFO5xAF4czaXaI1nTptFINOxEyh7A%2F8HG9Ft4xTlAjcuyLIIjc4kvOU6Ml%2BHg6x39YFtJoySg8aFwcfjUxeXY%2F34gSwuOLyuUr4fUH2vgtM%2BHx51dJbXuzkLXDMxMc5fib9vmx719Q2nkM00gpKP%2BCfhB500a5X4jxwixO9VUE5nA2bo03%2FSPUWewaIqoosOGjbLRN%2BSMMCinMAGOqUBzfu9JIF70RjO%2Bx6YGV8pHyJKDmI7qvwCCc%2BqAYGW7JjJhCReu7liHGOQ%2FxV%2FR34PQh7vycKFdKaHEbtebUDxTsJO%2BHkU5%2B5EReuEQubdcdooOpPm%2BbajPKZDOdDV6b6roaNxhi3YYAVz8EDOOSk732%2F1C3cr9J%2FFicTbx9SN%2BhIihDMgXq1%2FmlLoTSs8Lo2dD6pICoP4Tk0so5QxPRW0bb%2Ff8GfH&X-Amz-Signature=5b33060490208fbcf8a7dfaee3ec474f92ad5bb62ff40801322beab10c73bf19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
