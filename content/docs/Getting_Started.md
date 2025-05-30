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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWASWK2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf8efj6z3Klrawyz5SOmdcw0dEA90XNya%2BFLTWIgQ6iAiEA3KDf2fq%2Fe25iyIWMVom%2F9lK7s2sGHxc9FiU%2Bk9sZKkMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNicegz%2Fo4WtLQANZircA74EzJH76zBtLMjXbxrNp3Lwe0CBDoA%2FLN7DeFJzwQgx%2BH0ThSyXNlcjvUeCXhnK%2F98lZqkA59bC98Evdg0APeuiuV9yTe20UjlmZ2CBSjUVoanMgMGc588PSwT%2FBd3mBHLGqEgWPtfTtB2P6VUDup5VTz2ogIKIWir2uFV7avDG1bSc75kksFhXZdSyE9pKdCjRkp%2FogF90pgcFr04vNx5krps%2FIc6cFTRoTBjUu1Tj38B8%2FoBrmmleVGR8eEFZHTBwkdq%2FYsLJrLGjWrAc%2Bh3tU3bGd%2F2G74wGFnjOZCo9AKUt0YzlsuwCIf3ygMPNjiDdHMA9vdVxyqHfcIO8Uh8lYy8WMAU2JqeIZwYxjT6yE%2BbICMZ2PZe5dQr%2F5Gkjn4zXp5ngjcH9V6p8pcrRKPf6zJQl7JKDI5F97rQclb8InRdaOVT07BZAXM71IUdLa4Aobxm%2BEFZFVBaLLra5SqZw5yls%2FwIyUS1U3vtjVpNiZD%2ByTYQfl3SWRF4cMfPp8TAAcRFmLr3ZW9Du4Clii7SK3sz3BFUFLjwnZERYTc25zYdscFOtSrY9T5TYj%2FWIdr1JUQ601SfUxJCLLNN%2Bi6xN%2BxNFE67XSWtfCgUdXTJPpdjPklzO5qzgRDSAMPau5MEGOqUBo80WATig4DG4Alt7O9LvKaY6MpHz3TzC0uD82%2BH0B9lnMoTs0dDaUT%2BfnwV2VpYOAk8eW3FQvX%2BarNOFLmEJ6Wk7SEPkUpOC0ll8Wej6EG7Qvw0AsHG19QNOUGJLdNyzmTl6QWZQ0NWRQzofMju06qRO6NzSPbCauA1uG4uWuFhxOVmUmUPhDBEzwARj5DlIQ%2BVM9rKTGkEYn3bv%2BY46kvwh40mb&X-Amz-Signature=e52478fc9d913b031c4f35b1e651a38ff0ee2e76970719fd6a13b304e8c3ff69&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWASWK2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf8efj6z3Klrawyz5SOmdcw0dEA90XNya%2BFLTWIgQ6iAiEA3KDf2fq%2Fe25iyIWMVom%2F9lK7s2sGHxc9FiU%2Bk9sZKkMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNicegz%2Fo4WtLQANZircA74EzJH76zBtLMjXbxrNp3Lwe0CBDoA%2FLN7DeFJzwQgx%2BH0ThSyXNlcjvUeCXhnK%2F98lZqkA59bC98Evdg0APeuiuV9yTe20UjlmZ2CBSjUVoanMgMGc588PSwT%2FBd3mBHLGqEgWPtfTtB2P6VUDup5VTz2ogIKIWir2uFV7avDG1bSc75kksFhXZdSyE9pKdCjRkp%2FogF90pgcFr04vNx5krps%2FIc6cFTRoTBjUu1Tj38B8%2FoBrmmleVGR8eEFZHTBwkdq%2FYsLJrLGjWrAc%2Bh3tU3bGd%2F2G74wGFnjOZCo9AKUt0YzlsuwCIf3ygMPNjiDdHMA9vdVxyqHfcIO8Uh8lYy8WMAU2JqeIZwYxjT6yE%2BbICMZ2PZe5dQr%2F5Gkjn4zXp5ngjcH9V6p8pcrRKPf6zJQl7JKDI5F97rQclb8InRdaOVT07BZAXM71IUdLa4Aobxm%2BEFZFVBaLLra5SqZw5yls%2FwIyUS1U3vtjVpNiZD%2ByTYQfl3SWRF4cMfPp8TAAcRFmLr3ZW9Du4Clii7SK3sz3BFUFLjwnZERYTc25zYdscFOtSrY9T5TYj%2FWIdr1JUQ601SfUxJCLLNN%2Bi6xN%2BxNFE67XSWtfCgUdXTJPpdjPklzO5qzgRDSAMPau5MEGOqUBo80WATig4DG4Alt7O9LvKaY6MpHz3TzC0uD82%2BH0B9lnMoTs0dDaUT%2BfnwV2VpYOAk8eW3FQvX%2BarNOFLmEJ6Wk7SEPkUpOC0ll8Wej6EG7Qvw0AsHG19QNOUGJLdNyzmTl6QWZQ0NWRQzofMju06qRO6NzSPbCauA1uG4uWuFhxOVmUmUPhDBEzwARj5DlIQ%2BVM9rKTGkEYn3bv%2BY46kvwh40mb&X-Amz-Signature=62a1812c535252000277c48f4aaafdd652e4547f41b72373dd7d7219a67160a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWASWK2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf8efj6z3Klrawyz5SOmdcw0dEA90XNya%2BFLTWIgQ6iAiEA3KDf2fq%2Fe25iyIWMVom%2F9lK7s2sGHxc9FiU%2Bk9sZKkMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNicegz%2Fo4WtLQANZircA74EzJH76zBtLMjXbxrNp3Lwe0CBDoA%2FLN7DeFJzwQgx%2BH0ThSyXNlcjvUeCXhnK%2F98lZqkA59bC98Evdg0APeuiuV9yTe20UjlmZ2CBSjUVoanMgMGc588PSwT%2FBd3mBHLGqEgWPtfTtB2P6VUDup5VTz2ogIKIWir2uFV7avDG1bSc75kksFhXZdSyE9pKdCjRkp%2FogF90pgcFr04vNx5krps%2FIc6cFTRoTBjUu1Tj38B8%2FoBrmmleVGR8eEFZHTBwkdq%2FYsLJrLGjWrAc%2Bh3tU3bGd%2F2G74wGFnjOZCo9AKUt0YzlsuwCIf3ygMPNjiDdHMA9vdVxyqHfcIO8Uh8lYy8WMAU2JqeIZwYxjT6yE%2BbICMZ2PZe5dQr%2F5Gkjn4zXp5ngjcH9V6p8pcrRKPf6zJQl7JKDI5F97rQclb8InRdaOVT07BZAXM71IUdLa4Aobxm%2BEFZFVBaLLra5SqZw5yls%2FwIyUS1U3vtjVpNiZD%2ByTYQfl3SWRF4cMfPp8TAAcRFmLr3ZW9Du4Clii7SK3sz3BFUFLjwnZERYTc25zYdscFOtSrY9T5TYj%2FWIdr1JUQ601SfUxJCLLNN%2Bi6xN%2BxNFE67XSWtfCgUdXTJPpdjPklzO5qzgRDSAMPau5MEGOqUBo80WATig4DG4Alt7O9LvKaY6MpHz3TzC0uD82%2BH0B9lnMoTs0dDaUT%2BfnwV2VpYOAk8eW3FQvX%2BarNOFLmEJ6Wk7SEPkUpOC0ll8Wej6EG7Qvw0AsHG19QNOUGJLdNyzmTl6QWZQ0NWRQzofMju06qRO6NzSPbCauA1uG4uWuFhxOVmUmUPhDBEzwARj5DlIQ%2BVM9rKTGkEYn3bv%2BY46kvwh40mb&X-Amz-Signature=59a24a63b1a04b00e5b274267827008003756de89a0129561137689bc7a7e11b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2SPS2C%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYX038WNojB92kEV33HTyqjPNBWYVwHpxDbbYZGk8WMAiA9wG1gGX5ZkIoT2LJKUF2e%2B22H0VQRCqR4SIis04o3CyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM42X7wNO9GLiwSuGxKtwDU%2FSfQhQDVd%2BZtlZpmGa6QO2WRfjVxVdmGIroxNwPpp9qLhGT2PSPq2RgQhmrp7RKCpb%2BLsX4%2FPclWyh4btQOye62RJ3PZp8kb8Td2uISlUCZGyPENuFPFIFkRG6mUAZD7gRQadc9wAu9UY0DLceACSYHCL3XsRC9QzRyNX5iuWfVmJUp41a%2BbtgRF2zDo8%2FjYylQ4YqVMZhAJ%2BsS17S8EimbbIuMxsoVWs8rEBUlC7AaS8lXNhbRw8bUCkksN4qhP%2FDkbrSCxV3Jv64g7wa1gvvNWDyWPVNt5pTKERssWOTPO6Yx5B5S1fmcWyv3vJYK9fqxwyXdQU06q0sI18yfqxWY6BYx5JbBtTeg0JOp%2BL%2BO98WjZZ6En4zpoWuK2mRic1vSBzXiMtluMvrLfPaJCTcbW006QrtA84OmvSY0hYQQWlBUXEU7CQB%2B32u1ptpvnHzUTZ0xpcJxdaRn%2Fc1eyNd9bX8iQSXOCYKGpcyaLLpMv%2Bk8xgEfXYXluYudETcKk%2Fy6hJ0oIHEToQmcEJ%2Bs8ovn5QliyBSCO%2FWGguHSY8oMmWdgWOiwuy7irc7Rzyx1wsgGbebECsE5R0lHK88f59qckz6ibM5KJBVUSBmQPxKgcJ0Km3gBk8wHLdwwtbDkwQY6pgFtujf4jgZy5gJk5OJBsubca1liKUOBmMEsue%2F%2Bs0drQ9gkJLpeERe8L5UZ6WI3Z5GQ1L8pNU9Z9cvHhPBpsDhAgwgPpnNWGCHRDmbljw5oaFP%2B1uQqxIaFmSWoEBd%2FuPZipoc8PUqc6K8sPigjUREKkxCf1KSDoTuecpZb0VD32tuswL8iiur7kYHtLQcN9ECNh%2BxIlnl%2BsoOHENTP5haHfu9XyDjj&X-Amz-Signature=f89703b30c06d18f972ad3f7102ffadb0fd0d61155b36bcac63af05291b4806d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPNCHWA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3eXjdLY%2B9skV82swWiGef2LpZMcG23z4cQ5GHqvHA6AiEA7SPRzqfXDjGxNb8Per8vZFyr3y33gpzIzCLO%2B9M5e3IqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKC%2BMCgDUVshbLKSmyrcA5KtJq6HMlpzKBXnvFsAKJQpvVmMT3fyCJ7BaPiqk%2F6rDAeL3ND5Jc8imZ2lQmwJ4D7iBjibL0NYj14NKLJ8PVHHks2VVuXculHx23tBLcM3fTkJlrTzSmKWhdzZuxkzXXkcXy2AKLidhERyPaN0jw4WSSyIuL3Tl6d3qfyZfWap4fXeXmHFEmSUw5hAabjgtbbs3heWLdzicmAyZAu9NAbT9hjt5VtuLvVnMj2Az%2FFrzHl5Q6cMUxoWNqovq%2FBZ0TA%2BpE000JyULHys3O%2FoHJNqkV4n18aLSUzNZ3CWjd%2F2u%2B8eoB52kjmYS3fwn%2FXAHKX44UCyrcJAIKIvb05vb82KfpJGSYNzKc6adhRgcqNZk8eeSu%2BXETQWitXO8qOjqehG9bEn4%2BUgu61b%2F5KzuGRw%2FDmg%2BHLiUELZhv1v9vuqRAjOlfsPX3aaLszxtlILp2Un1XQC8ZWuT8DTVn%2F4nBZ0B59qH65kc89EwUpObQIl0LE%2BtXJUbpn1mugycl09okvomObbSkVR%2FGuYRK9gg1w17k69TpL440qtlm3EImPKT63z%2FrpuJpNXYqyl7Xt37hsPXMOF8PWf4cfWKDxddmBxGBcaLKLeqJ15haoon6S5x8QjxTULjg1Fvp8OMK6w5MEGOqUBw5l2GdJDLzy4l30aM9nZuAdfH%2BMJPW5Tmhu9ZvSwJcfHDBGv%2FUENm5LOEgr8C3wKVBwR2dDHjAoEbWOCLCspXNCfZ8KMiALGYpUytmFeICUHnUhZK1Eof5eXGjltOi4U5z3rMBNKmTnuQgKzjBn%2F84QxVCJOqCrp42bJWXXkH4FviK6DgcrFc7RVlqhb2dRlD19WnBbOzeyW7S%2BpaBT4DlKhSN5k&X-Amz-Signature=45ac7994510259349b2ea519761f8ffb44c55c704ea2010073ade948f47578f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWASWK2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf8efj6z3Klrawyz5SOmdcw0dEA90XNya%2BFLTWIgQ6iAiEA3KDf2fq%2Fe25iyIWMVom%2F9lK7s2sGHxc9FiU%2Bk9sZKkMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNicegz%2Fo4WtLQANZircA74EzJH76zBtLMjXbxrNp3Lwe0CBDoA%2FLN7DeFJzwQgx%2BH0ThSyXNlcjvUeCXhnK%2F98lZqkA59bC98Evdg0APeuiuV9yTe20UjlmZ2CBSjUVoanMgMGc588PSwT%2FBd3mBHLGqEgWPtfTtB2P6VUDup5VTz2ogIKIWir2uFV7avDG1bSc75kksFhXZdSyE9pKdCjRkp%2FogF90pgcFr04vNx5krps%2FIc6cFTRoTBjUu1Tj38B8%2FoBrmmleVGR8eEFZHTBwkdq%2FYsLJrLGjWrAc%2Bh3tU3bGd%2F2G74wGFnjOZCo9AKUt0YzlsuwCIf3ygMPNjiDdHMA9vdVxyqHfcIO8Uh8lYy8WMAU2JqeIZwYxjT6yE%2BbICMZ2PZe5dQr%2F5Gkjn4zXp5ngjcH9V6p8pcrRKPf6zJQl7JKDI5F97rQclb8InRdaOVT07BZAXM71IUdLa4Aobxm%2BEFZFVBaLLra5SqZw5yls%2FwIyUS1U3vtjVpNiZD%2ByTYQfl3SWRF4cMfPp8TAAcRFmLr3ZW9Du4Clii7SK3sz3BFUFLjwnZERYTc25zYdscFOtSrY9T5TYj%2FWIdr1JUQ601SfUxJCLLNN%2Bi6xN%2BxNFE67XSWtfCgUdXTJPpdjPklzO5qzgRDSAMPau5MEGOqUBo80WATig4DG4Alt7O9LvKaY6MpHz3TzC0uD82%2BH0B9lnMoTs0dDaUT%2BfnwV2VpYOAk8eW3FQvX%2BarNOFLmEJ6Wk7SEPkUpOC0ll8Wej6EG7Qvw0AsHG19QNOUGJLdNyzmTl6QWZQ0NWRQzofMju06qRO6NzSPbCauA1uG4uWuFhxOVmUmUPhDBEzwARj5DlIQ%2BVM9rKTGkEYn3bv%2BY46kvwh40mb&X-Amz-Signature=42e13c816bf47c1f651bedc3f223d6562f03577658518388a091ab08cb8c4bb8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
