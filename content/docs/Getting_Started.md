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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7O6JM7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDDUbmqCz1%2BVLj5%2FkiJ4zfMPF4nxoocSxdN0rGm3R%2BUTgIgUCfuRQTaWEbfEfRZGFejSJUCIg8Vy8BaMKaIXCDu%2BdMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKApCYobjJhtnzwLLyrcA%2FPnPMw3CblawJYl3h29Fu90u2aXleOTLpXmp9FO0PPvi%2B%2FufvOejShwV5LrOqjB9fglM1UMCnqOyWym7fmHkZ5u%2BosClh60I5%2BBmpyx87VYl7xLjW2uNkh6xJDv84B6GKIfhGqpDcH5mG0zDwhN6Xr4jx16V0I%2FaS4%2F8AAvkUz3QsfSF4bDm2RUAVF%2Bi%2BgK9M7Npndr5a2PdxiHlyQ7c2eNXmRBxCLUIzwhhtvdbNfIOeH39QBo0NUmasCvjyfE3SwKJJf%2BJbtlLYEVqHXySPDSc3bkD7p00LD56EmUk10Mh1bE0ct3saq%2F6fDb42whwnaRGY0o7Vnh4qC2MS0dSRZX0kQopmOlUMzc%2BzrSEq%2FsizDwXE09dvmp8L2nCftU7cY9gegz3udycjj3sia561MoA5RNN3sqdkuLK7ZVN2HADI%2Fep45SeSg2X7g2xejefsMh6UJubLx5sbESkoxysFCRaw79%2FcKJLXdThrFjPxZ7j6jxDsZlW7qwInHcA6%2Fa%2FRlRGKfrbABU%2BWwM3FxJd%2BySx23Tq%2F7eqPoyzxAfxYTCKTTnektvHHPY1sRnzfKga5xc81i4AXB1i4AmOpEpdwqz%2FIMxYKrpwVVSQB7l0gCnW4FLiUj7s0X0v8XXMJ6Ku74GOqUBcl1KkduVjpaKpPmTFk9Yzs6xqu4REKH656EESK6Te%2BMdNO8l6E0z%2FJ%2FxwFnIA3RvKJxG7KneXI8tb8WdmdPLjvJEyr8%2FVN6nR1S1ca2ATy7njU7yZ9pPMng97mFOMyKzbxWbwcF9h9PMCUUQlKXIZjLdb7gHcW1FATDeCr5YqKrIq9IvNkRGUhEWm2LlypnE9v8tt48IIb%2FJYbmDTrgOYWZCHLDb&X-Amz-Signature=da0cdf72421e4e4bc8a1e7282d4ffe5d971f32182b922fd9afb580cd01eb0b07&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7O6JM7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDDUbmqCz1%2BVLj5%2FkiJ4zfMPF4nxoocSxdN0rGm3R%2BUTgIgUCfuRQTaWEbfEfRZGFejSJUCIg8Vy8BaMKaIXCDu%2BdMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKApCYobjJhtnzwLLyrcA%2FPnPMw3CblawJYl3h29Fu90u2aXleOTLpXmp9FO0PPvi%2B%2FufvOejShwV5LrOqjB9fglM1UMCnqOyWym7fmHkZ5u%2BosClh60I5%2BBmpyx87VYl7xLjW2uNkh6xJDv84B6GKIfhGqpDcH5mG0zDwhN6Xr4jx16V0I%2FaS4%2F8AAvkUz3QsfSF4bDm2RUAVF%2Bi%2BgK9M7Npndr5a2PdxiHlyQ7c2eNXmRBxCLUIzwhhtvdbNfIOeH39QBo0NUmasCvjyfE3SwKJJf%2BJbtlLYEVqHXySPDSc3bkD7p00LD56EmUk10Mh1bE0ct3saq%2F6fDb42whwnaRGY0o7Vnh4qC2MS0dSRZX0kQopmOlUMzc%2BzrSEq%2FsizDwXE09dvmp8L2nCftU7cY9gegz3udycjj3sia561MoA5RNN3sqdkuLK7ZVN2HADI%2Fep45SeSg2X7g2xejefsMh6UJubLx5sbESkoxysFCRaw79%2FcKJLXdThrFjPxZ7j6jxDsZlW7qwInHcA6%2Fa%2FRlRGKfrbABU%2BWwM3FxJd%2BySx23Tq%2F7eqPoyzxAfxYTCKTTnektvHHPY1sRnzfKga5xc81i4AXB1i4AmOpEpdwqz%2FIMxYKrpwVVSQB7l0gCnW4FLiUj7s0X0v8XXMJ6Ku74GOqUBcl1KkduVjpaKpPmTFk9Yzs6xqu4REKH656EESK6Te%2BMdNO8l6E0z%2FJ%2FxwFnIA3RvKJxG7KneXI8tb8WdmdPLjvJEyr8%2FVN6nR1S1ca2ATy7njU7yZ9pPMng97mFOMyKzbxWbwcF9h9PMCUUQlKXIZjLdb7gHcW1FATDeCr5YqKrIq9IvNkRGUhEWm2LlypnE9v8tt48IIb%2FJYbmDTrgOYWZCHLDb&X-Amz-Signature=7e142adc52b00c195226f6cb148ace84495e4491747a7340546adcb795b76806&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2KDOUPY%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAlaF6%2BKyti%2B%2Bqy4EhOsRBqCMX9F3HFffGHcrpwcj37oAiEA7ig6KEtckLEnWpq2qyDcwu7RRYgDZnRxH%2Frkt%2Ft7pTsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4sKD0Nzeyrk8C8yircA0RjQ6eua74AnrqVjVchqZUpb0YS%2B3QXZOwlNu%2FylFGiE0L33e%2FkgIuddVgeiH%2FHrPjsM9kiwtA2IB3qqFZQk1jyiJlxIKUUYc9PhAs%2FmLVbhE1FogkjaaHMlAW%2F6RXOKlG77t3%2BGBxeCB1vMpjjuIUivGrG2V8J%2FdFQErXdZ4KzCkAgd9518u0N8S0mMKPd5GUmLgfwwbpPpz%2BW1eZlt1GBuw%2BZL6oTah%2BX74PMed8NhqPlB%2BvfgTTkde7oOgr85w%2FEacTrXYy%2BMEuSggDWdl5Kqo%2BKYZZ%2B7NEy5F1MCe2876Ztq7xnckHlABvmH7KqAjG1Cno20j%2FZwpp0uaW8Nz2pqrt%2B3UalixTBNZS5rRqhhZ6%2BxZ%2BsBfDpunNRunTbpQu8I4WGZxsw%2FU9hry3YfpqG%2Fz2tpgsEBX4JIqAtBWEILG9SDQRzagVrpfo7gK7Mv4Tql7QgACr%2B3b4bruQTMBS4PArB7RpY7nK3b08WA%2B1DYVSfKeh1Q0qs00WsUo3dc8%2FD4BOe413KEvJV8BG0vZE4Ebx%2FMYLzTGKhXm4bHkRnG1SBGFj9AC8pExJcy%2BVDXmMwSZzkpzG6DvS5of8Au2swai056odaFlNejOYi7iwMbSZdOrsF7ooLp%2BNlMLeLu74GOqUBzbXQVsMuDvPf5GgCjAMmTh5VC0Wmj3BsHOR3vOZWljRrOJGZlWw2XWnAMUzsVQV43oFb%2BciWidBnqbZvrs7pCmU%2BYaBG65qHqU6f%2FSlbSTgFO%2BzC0ruVlJfTZboHFbiC4tEiQr5ExAJIA4ZJ91fPk9hdCDd36XXHfwj4hPD5mxGk%2BK%2F6gDioV75kG0UVZxcZoTE9Cmgom8pEid6oFSKvcEzBinPe&X-Amz-Signature=5ceb583766f5008b97b46114fb4261ed9bcdda244e02f582562fc421012ae820&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQOA4TI%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCAwvPv3ZpSCjC3Qu%2Fr0yCHRVYOmr9UFjwRJoSqa81DsQIhAKuoXdo9NpcRkdlSuIHcroYxZu7wJrTgeoq1d3sZlodUKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymLybyxmtCh7Cwhiwq3ANVsqJyyB7v27keGm4WebLAqns8tqJ39D00wLEPplsyQLsZP8spRJd4i6gXsdaZUCGm%2F1GJz%2BfcRm6Ln5dS%2BbZmTeYIl7IqUBG%2BsrPdEArGqM%2BrNNFr44gfVuX6qY58ZotqHR%2Fp6oH3p7T%2BwL8M3tvgMF0TdmyzNDA%2Br8QWyB6QarVJoFv9uoAjsBK8F5XKCjkeyrzLkIZDZcV4vH7xxS1z4tjn1iO6tH3LPWgYv7WfTWHa0avJWg0Cb9pobTjrb86Nvdjt0Vq1hZftEltE8R90o19iKgOVUVcE1C9Rrx%2BgPNqfYwmgC4SfwsFq60K378SHZJ8hOLrGG9LaBFrZF14SoZge1GZ2WNXyKNoq2hZbZgdOCibVaLItS8yES6AwZWwIqlGI2D6zNH5Q1FQ56WH2ZU01xvu0mRLTsOJjODq01CTO8cpbZnDn74FJt9wXD68wm%2FksDmDs2KjJX61dfy1ACi6cjkcqEWham4iDkGYro91ShecZBVXhFDS45Br6ksWjAovOiYehHS8DArGKtOQ9bxQLCBoeXppKB1NRY3qFrb3Dk%2Bcw5hpvq%2BEKoamOGttRssiwyZvLcLe%2BPDQ%2B7%2FA0TEoS6mcS9oBHkEhYA1sO5PQ4mRcDo0gQFANLATCviru%2BBjqkASztwFLrKVp1fhDDcleRRRq1%2B9B4jC61TMP9JXOoSaqzKGmgIwlbvBs0%2B2jcaX65E9H86HL%2FZwtzyKNrBkfKl8RSsK3uDwFqQsH7Fm68jLJmoxq3Qfzsgf%2BlUQU3npw2E%2FefT90MF533IkKl9ROPUDHnQXTnJZbaNukmk3nJiQ898ACQm3xF4OwvZ4TzocypT0HsDg3tQMrnCFCSLCkYONCrErgc&X-Amz-Signature=20a459f698549960f458bd03bde4e5725cdd3e0e663b1e908758246c6d6d0662&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB7O6JM7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDDUbmqCz1%2BVLj5%2FkiJ4zfMPF4nxoocSxdN0rGm3R%2BUTgIgUCfuRQTaWEbfEfRZGFejSJUCIg8Vy8BaMKaIXCDu%2BdMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKApCYobjJhtnzwLLyrcA%2FPnPMw3CblawJYl3h29Fu90u2aXleOTLpXmp9FO0PPvi%2B%2FufvOejShwV5LrOqjB9fglM1UMCnqOyWym7fmHkZ5u%2BosClh60I5%2BBmpyx87VYl7xLjW2uNkh6xJDv84B6GKIfhGqpDcH5mG0zDwhN6Xr4jx16V0I%2FaS4%2F8AAvkUz3QsfSF4bDm2RUAVF%2Bi%2BgK9M7Npndr5a2PdxiHlyQ7c2eNXmRBxCLUIzwhhtvdbNfIOeH39QBo0NUmasCvjyfE3SwKJJf%2BJbtlLYEVqHXySPDSc3bkD7p00LD56EmUk10Mh1bE0ct3saq%2F6fDb42whwnaRGY0o7Vnh4qC2MS0dSRZX0kQopmOlUMzc%2BzrSEq%2FsizDwXE09dvmp8L2nCftU7cY9gegz3udycjj3sia561MoA5RNN3sqdkuLK7ZVN2HADI%2Fep45SeSg2X7g2xejefsMh6UJubLx5sbESkoxysFCRaw79%2FcKJLXdThrFjPxZ7j6jxDsZlW7qwInHcA6%2Fa%2FRlRGKfrbABU%2BWwM3FxJd%2BySx23Tq%2F7eqPoyzxAfxYTCKTTnektvHHPY1sRnzfKga5xc81i4AXB1i4AmOpEpdwqz%2FIMxYKrpwVVSQB7l0gCnW4FLiUj7s0X0v8XXMJ6Ku74GOqUBcl1KkduVjpaKpPmTFk9Yzs6xqu4REKH656EESK6Te%2BMdNO8l6E0z%2FJ%2FxwFnIA3RvKJxG7KneXI8tb8WdmdPLjvJEyr8%2FVN6nR1S1ca2ATy7njU7yZ9pPMng97mFOMyKzbxWbwcF9h9PMCUUQlKXIZjLdb7gHcW1FATDeCr5YqKrIq9IvNkRGUhEWm2LlypnE9v8tt48IIb%2FJYbmDTrgOYWZCHLDb&X-Amz-Signature=db249f08dd1ec3aafd64ff2abfe71d779593618e77fcd760ef0f21cbc95c5754&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
