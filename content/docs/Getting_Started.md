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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6S5NU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR6rYjh0IS5IMbmltY3txP1ZjbDf8bI4LjCfqo53jmHAiEAjAbZouA%2BSl9ajmYBt80YLMhpAn6Q36UTqSNwaz7LEZIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGTt5T0M2useFobDircAwLifb2U1IPP9c773kSTrpcPX%2FZDkihPFj0LNQQ%2FThcOQHgsXy%2BboRPXGHu62lR6X%2BGa2%2BytAv8zbkzAdQO2JkqCeOLdOfqX3Q0bhQoIxTkNdNkraNv5HzWcWpjhTC8421clksD1xk6CAiTn2jOAV2fHoB4T%2FuyswJR5nKzJrAaXq5xf3MiOn7GO0YYhyI4FL2ibtWtfOqX%2FQ1Ay2hbCzzBRcw1b2Zv9T%2FBNTAFOFvK47ngJrhQ8cz8Fhm7H0mWIzebPTsYbK%2BrijhMowTv95Nax20QJ1ipoZVjZ9OYV2Zu8a%2BlwXp%2F2FUM48MoJVlDxV9%2BDX8MOYXdBtbu%2B%2B2JVSsudUfmQLf%2Bfe8cRbZaactcth%2BYgrMdJv7eXeiYZ4L5nprsIXCTOQCnPPLSLsP%2Bc91Xy4cEEE0nNkjh8I60EURp2czQvc9Yd12159mGOvgEfINOZEY5FfRWlSdN%2BP35vOiXj1%2BHeW9Xluv6djISVK%2FJcLNXYaKTkRZpPvbMawiwa6ebJnT3wqGf%2BE9TbDxh3OP3ElGZVaeyUMuaFWRLOeCRNmDgjoIB1m5y8AupoA5BmfCCCHpxFFwmH6Z1vv2rGRnZ%2F2qNmzK4yVwTHtDBXJkBEqOR%2F8htygA4%2BumlpMNvZvsQGOqUBcsY8mUfiYWZCHdsQBlERvpHOqVwoIBTEWWElTYbMYgImqFToGp6EXZ2m3tyFNUwaKkn44m1jrkmCeFEdT29zh6OLWu6jCeWQXIPKNrSIv3sV76Ng7Of4JFH1p7I9iVIqQo14odZi%2F6CGR1h4iyCn335ft4pX1sVUXjqAT7%2BQEsA0IO9HEzMUSF2U7ADBWWwHn1o21jZE%2F79K3zJCjZIN1LEpiJLD&X-Amz-Signature=4dc0e0718dc22ba80d6951889b628926b1cc4f71bf80032f16c016d7dc20f605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6S5NU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR6rYjh0IS5IMbmltY3txP1ZjbDf8bI4LjCfqo53jmHAiEAjAbZouA%2BSl9ajmYBt80YLMhpAn6Q36UTqSNwaz7LEZIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGTt5T0M2useFobDircAwLifb2U1IPP9c773kSTrpcPX%2FZDkihPFj0LNQQ%2FThcOQHgsXy%2BboRPXGHu62lR6X%2BGa2%2BytAv8zbkzAdQO2JkqCeOLdOfqX3Q0bhQoIxTkNdNkraNv5HzWcWpjhTC8421clksD1xk6CAiTn2jOAV2fHoB4T%2FuyswJR5nKzJrAaXq5xf3MiOn7GO0YYhyI4FL2ibtWtfOqX%2FQ1Ay2hbCzzBRcw1b2Zv9T%2FBNTAFOFvK47ngJrhQ8cz8Fhm7H0mWIzebPTsYbK%2BrijhMowTv95Nax20QJ1ipoZVjZ9OYV2Zu8a%2BlwXp%2F2FUM48MoJVlDxV9%2BDX8MOYXdBtbu%2B%2B2JVSsudUfmQLf%2Bfe8cRbZaactcth%2BYgrMdJv7eXeiYZ4L5nprsIXCTOQCnPPLSLsP%2Bc91Xy4cEEE0nNkjh8I60EURp2czQvc9Yd12159mGOvgEfINOZEY5FfRWlSdN%2BP35vOiXj1%2BHeW9Xluv6djISVK%2FJcLNXYaKTkRZpPvbMawiwa6ebJnT3wqGf%2BE9TbDxh3OP3ElGZVaeyUMuaFWRLOeCRNmDgjoIB1m5y8AupoA5BmfCCCHpxFFwmH6Z1vv2rGRnZ%2F2qNmzK4yVwTHtDBXJkBEqOR%2F8htygA4%2BumlpMNvZvsQGOqUBcsY8mUfiYWZCHdsQBlERvpHOqVwoIBTEWWElTYbMYgImqFToGp6EXZ2m3tyFNUwaKkn44m1jrkmCeFEdT29zh6OLWu6jCeWQXIPKNrSIv3sV76Ng7Of4JFH1p7I9iVIqQo14odZi%2F6CGR1h4iyCn335ft4pX1sVUXjqAT7%2BQEsA0IO9HEzMUSF2U7ADBWWwHn1o21jZE%2F79K3zJCjZIN1LEpiJLD&X-Amz-Signature=9dd9b5f6c3b25355c4b04bbf9a25f34f049370d993657781b39a6c6a92b99925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6S5NU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR6rYjh0IS5IMbmltY3txP1ZjbDf8bI4LjCfqo53jmHAiEAjAbZouA%2BSl9ajmYBt80YLMhpAn6Q36UTqSNwaz7LEZIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGTt5T0M2useFobDircAwLifb2U1IPP9c773kSTrpcPX%2FZDkihPFj0LNQQ%2FThcOQHgsXy%2BboRPXGHu62lR6X%2BGa2%2BytAv8zbkzAdQO2JkqCeOLdOfqX3Q0bhQoIxTkNdNkraNv5HzWcWpjhTC8421clksD1xk6CAiTn2jOAV2fHoB4T%2FuyswJR5nKzJrAaXq5xf3MiOn7GO0YYhyI4FL2ibtWtfOqX%2FQ1Ay2hbCzzBRcw1b2Zv9T%2FBNTAFOFvK47ngJrhQ8cz8Fhm7H0mWIzebPTsYbK%2BrijhMowTv95Nax20QJ1ipoZVjZ9OYV2Zu8a%2BlwXp%2F2FUM48MoJVlDxV9%2BDX8MOYXdBtbu%2B%2B2JVSsudUfmQLf%2Bfe8cRbZaactcth%2BYgrMdJv7eXeiYZ4L5nprsIXCTOQCnPPLSLsP%2Bc91Xy4cEEE0nNkjh8I60EURp2czQvc9Yd12159mGOvgEfINOZEY5FfRWlSdN%2BP35vOiXj1%2BHeW9Xluv6djISVK%2FJcLNXYaKTkRZpPvbMawiwa6ebJnT3wqGf%2BE9TbDxh3OP3ElGZVaeyUMuaFWRLOeCRNmDgjoIB1m5y8AupoA5BmfCCCHpxFFwmH6Z1vv2rGRnZ%2F2qNmzK4yVwTHtDBXJkBEqOR%2F8htygA4%2BumlpMNvZvsQGOqUBcsY8mUfiYWZCHdsQBlERvpHOqVwoIBTEWWElTYbMYgImqFToGp6EXZ2m3tyFNUwaKkn44m1jrkmCeFEdT29zh6OLWu6jCeWQXIPKNrSIv3sV76Ng7Of4JFH1p7I9iVIqQo14odZi%2F6CGR1h4iyCn335ft4pX1sVUXjqAT7%2BQEsA0IO9HEzMUSF2U7ADBWWwHn1o21jZE%2F79K3zJCjZIN1LEpiJLD&X-Amz-Signature=8598aa1ceddf512156ccb3c5b9553e1ec0880e09866f67a6a946ce5f99579e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGBR25M%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdpg5e%2FYw4gjfii4Lq7nlErjiVHjOAoN1k4ktcaC3qhAiEAkx35UciaX16j9k8r4fiLppTpsG0VnyCtncnVtNas2NMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBIkVxMHqIywtdq9BircA%2Bk59GIa7FSR2R1BIllrA6ujCXNWzE3L0yNMAl4y8nVJnMIoZA1ecTqrtWpJvlhQbZyOJdiXTd6%2Bmkb5MegCGCJd3wEuJg0JQ2oQa7xoEdTmif2SnRpEjRQfZViW4FObfTGBdiN4CfQvWJEGTSOE7e7%2FGj%2B3Ub3pQ8sGP8QLctwqSWzI2tAhxH2H5C0a9QZF2UGxQk4SXku6dWXqnqD7ABvATs2zxH7Cgz8snRpcW7M6FjYMNy%2FxkMbA%2FpoES0sKS%2FlPp6GR1J8NG0jmM3natyNkUTkLWMOZIGcQQXaZnk48f595W46%2B8TR1SYFnshax4ihGu84ihejRylJW8imUSQWDqKLOapQmPq3nc5kfst4XVWs9U6En%2FXxoZUYZeQ3LoVWkq0Xyz%2BWZe6b3CUWEAY1OVFhj8ihufMQ7qLPH7NkDlhPJpO%2BMw89FSLXTlKJzhpef3HjPM%2FVp2JXXcKx7enVux7KkrOEpOGwXx%2Bg3uJMJZCfWq3jK3QPkmD5lhDEGO3PTNFIMeb%2BzEpPXXVC5K5N%2BtHTbf5L6eyGjnc%2FEIdRuJDMb3ek8uzY9yT%2Ftny83F5cnmIayzeSxCV2B%2B%2BJhJFV6Q9kr40xjtinllDKAtBjbGmwM0wWckBObABt4MPzZvsQGOqUBg28Lcf9rTlg5tJZBhi8gc%2FI2lRzL8RwW8YVkvmAG3b9ExL5SRWGRDjo8vgEZsU2SzGVmxxo8EcPIGB5FysYPO9eTCyIdCpTvxf%2BFuMiFifwqHus%2FUoMxVA9a7mF1YwFnYsg%2FO3U4E99RuWdPyU8BfaKVcr%2FHoUj%2FEV3wFjSpLTgNn6Jb2cLglIp49qhlx7CCJ23ajy2n8R26QHnnrXCD%2BuBmVPSE&X-Amz-Signature=8acf7a776379e50fe81bd93327e95df78699a018414a8c9e20ff4843cf157091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMMJ3Y3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnHajHWLnx3FC%2BAT16JGlgN7kgb6VST0UU5ojf8cWOjAiEA9KvamcA7qoZkWt9EZLcDjm9ZPSHTwuMUjVkFeiJjLyoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBcPPiM%2BD5OIdeaapCrcAzfM6q%2Fm4GrUR15vqBG%2BCtcACux%2BTcHCavRj71r8bCrLQJukvWdLKxxo22KAxYFX%2Bihr7%2BR8C5ojICo0qfQxxLCj2Gdajzl2QMlCSSDsjpYJw2B33wNRk2qkTQm9AELqYLX3TgY0SwLH5fK0pX3K7fN9IfNobRavhQKXz6fMufqQahqjo6ca4JJBBDr2Ki3x4DZw402aS%2BJX38PREmlpFRqS4sUZJtcXb9UdmejT73miRJKWGZ0ilZOJTy%2FryTA%2Bsgm0ZulHuBoQi9vNY1GJ1D4Tj38mTvaqyTTFZSJHsYCHZhnnZAIR81%2FXjFQo9uDiaRvTzbk2DiIe1iqaPzELL6CbXt5HZfrG9d0By0Alf3bmbtWqC2lZ89rM4%2BmEY4ojV%2FjJF3AoVaVIEqUkPS9jAKtdJS6tjSgLC1HKU%2FsAE%2FNenrcnKMa1r%2ByOE30vMOCGgD7uAGDALUhHGi1QEhgn8hTk90YHgYP8t8f0hhF6t8wdQljFdWjqBdD4NrM8fBwQXV9kivLau3%2FkML9UpinDa%2BkkpVRdJPB5Q2JN%2FXr6vS2%2Fixpxp2tcv31C%2FGfjmV3ux7BtRWOnmdk2C7hHbQSF%2F%2FV8GZmhTkAlKmG48%2BqK17cFRriyDLIXnuMV0tEbMP3ZvsQGOqUB2GruQoPhQO1oph8EOL4WD0cSRPvpqmZW8jW9lby3clxG%2BSRp%2Bp2SS0Eo3%2FN%2Fzf8196hfv1LyCdLIE1F3ssnpVlXBlEgkgWUNRW1hjtjZcnnV6B3DFjCpn8BzwlYFdCzyDvrKY0%2FIVFzYVYc7cDAw8tLxP7STYAQoSvsNfWTcR38BNbTeBreh%2FF9tc6J8LZsrUIhiONvpJNVgodAr2wEZFSMMJ6D%2F&X-Amz-Signature=f93e03cf48078bb4e57fa94bd37d16743738e24a547ca8cd8df7317182dcaf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQ6S5NU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR6rYjh0IS5IMbmltY3txP1ZjbDf8bI4LjCfqo53jmHAiEAjAbZouA%2BSl9ajmYBt80YLMhpAn6Q36UTqSNwaz7LEZIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIGTt5T0M2useFobDircAwLifb2U1IPP9c773kSTrpcPX%2FZDkihPFj0LNQQ%2FThcOQHgsXy%2BboRPXGHu62lR6X%2BGa2%2BytAv8zbkzAdQO2JkqCeOLdOfqX3Q0bhQoIxTkNdNkraNv5HzWcWpjhTC8421clksD1xk6CAiTn2jOAV2fHoB4T%2FuyswJR5nKzJrAaXq5xf3MiOn7GO0YYhyI4FL2ibtWtfOqX%2FQ1Ay2hbCzzBRcw1b2Zv9T%2FBNTAFOFvK47ngJrhQ8cz8Fhm7H0mWIzebPTsYbK%2BrijhMowTv95Nax20QJ1ipoZVjZ9OYV2Zu8a%2BlwXp%2F2FUM48MoJVlDxV9%2BDX8MOYXdBtbu%2B%2B2JVSsudUfmQLf%2Bfe8cRbZaactcth%2BYgrMdJv7eXeiYZ4L5nprsIXCTOQCnPPLSLsP%2Bc91Xy4cEEE0nNkjh8I60EURp2czQvc9Yd12159mGOvgEfINOZEY5FfRWlSdN%2BP35vOiXj1%2BHeW9Xluv6djISVK%2FJcLNXYaKTkRZpPvbMawiwa6ebJnT3wqGf%2BE9TbDxh3OP3ElGZVaeyUMuaFWRLOeCRNmDgjoIB1m5y8AupoA5BmfCCCHpxFFwmH6Z1vv2rGRnZ%2F2qNmzK4yVwTHtDBXJkBEqOR%2F8htygA4%2BumlpMNvZvsQGOqUBcsY8mUfiYWZCHdsQBlERvpHOqVwoIBTEWWElTYbMYgImqFToGp6EXZ2m3tyFNUwaKkn44m1jrkmCeFEdT29zh6OLWu6jCeWQXIPKNrSIv3sV76Ng7Of4JFH1p7I9iVIqQo14odZi%2F6CGR1h4iyCn335ft4pX1sVUXjqAT7%2BQEsA0IO9HEzMUSF2U7ADBWWwHn1o21jZE%2F79K3zJCjZIN1LEpiJLD&X-Amz-Signature=29e74374f1a91f4492deb3a36772618fbafdd693a7e3ada605f767581b4d249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
