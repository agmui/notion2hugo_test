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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTKU7X3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGdv3%2B2mVMVyI5JBx4ARu2Cpxkmf3ErI6jJZMmX5LpxuAiA2zX3hYR5wEHZGBauiVnxy1qEE0r5uyHNFNl1ug9ID3Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMAbzEANyrUZAGxXrXKtwDuZOgZBUlNFUqs9Gxi47y%2F9075glZtRjhYRczOskp65XFkBSMbWrDBzoqRnYWFN1MWMx5mq%2FW1pRiiwlt4fOmKpbYwlc2NC59gMCHVTCd8sLMAg2BG73DF%2FmMNSjUR3SrvZyBn%2Ff2BYg9hLwUD%2FcaUR67FQ4rgaq9XKKl1QZlOjzKPSlpVosEHczAvBfuS5A9JFUTXcPJddbV0Ll%2Bhovj4GRP4ddpOXGZHkFFdRwGret7LAa%2F1EEqYBX3lPMts5CLXYtL6CJ7gXzJvcbvFpYdacTeu4e04UVPsB0aIzXBynRtDkKrYzXSCYXKQp5allK%2FCiCKWUMnlrYACXXq11G4NsE9b03cszqY70LM24YJIWBVjKmXrHfEV%2Flqih7ggflGMfv40xxp5lI%2BlAo5Ib%2BLf%2FYc%2BRDDNbttg%2FyALB%2Ffrbc9W%2BZswr0Hpth5akdrWIls88hCH%2BqAOl8kbmLiqkeleUpnVJdJPFdzLk1Urtg9oQMOJ%2F0a7%2BiqZ1idZGiB%2FB2FPW%2BZK50F%2F7WHxYrG%2FVhAsTyWvIxQopCRlC8pc5PhxmCZJWAV9K1Fw6rvVvgDryTVN5qYbPjwWHNYW5pRywibBpZoHQeDRa8F6C%2Frh17uyR8fA2wIIB9Ln2wUzAYwsPPmvgY6pgFiHkJvFAycfQVxAjFlNHY0LXbHf3aEEqxmRHg9D78rXwU%2FGkF9v694LkabokBZlpHbHSdtOrLAa52SouV64rqVGS6v0xIFNCvZb83BswvzsKdTrUabSuTUZ6cRx%2F8V9bAcWkA0MdVFmCoylJdfIaGAWSzpwG7Oc4pQCjvpBMjZFqX9HUjkkrkdf5SQTvtj9KA3zteB81vfAcFiC5l5FR2UBBSpQPbU&X-Amz-Signature=d2a71076114db52166d119858ec3f73dd75cc40348ce63287fef419d13895ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTKU7X3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGdv3%2B2mVMVyI5JBx4ARu2Cpxkmf3ErI6jJZMmX5LpxuAiA2zX3hYR5wEHZGBauiVnxy1qEE0r5uyHNFNl1ug9ID3Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMAbzEANyrUZAGxXrXKtwDuZOgZBUlNFUqs9Gxi47y%2F9075glZtRjhYRczOskp65XFkBSMbWrDBzoqRnYWFN1MWMx5mq%2FW1pRiiwlt4fOmKpbYwlc2NC59gMCHVTCd8sLMAg2BG73DF%2FmMNSjUR3SrvZyBn%2Ff2BYg9hLwUD%2FcaUR67FQ4rgaq9XKKl1QZlOjzKPSlpVosEHczAvBfuS5A9JFUTXcPJddbV0Ll%2Bhovj4GRP4ddpOXGZHkFFdRwGret7LAa%2F1EEqYBX3lPMts5CLXYtL6CJ7gXzJvcbvFpYdacTeu4e04UVPsB0aIzXBynRtDkKrYzXSCYXKQp5allK%2FCiCKWUMnlrYACXXq11G4NsE9b03cszqY70LM24YJIWBVjKmXrHfEV%2Flqih7ggflGMfv40xxp5lI%2BlAo5Ib%2BLf%2FYc%2BRDDNbttg%2FyALB%2Ffrbc9W%2BZswr0Hpth5akdrWIls88hCH%2BqAOl8kbmLiqkeleUpnVJdJPFdzLk1Urtg9oQMOJ%2F0a7%2BiqZ1idZGiB%2FB2FPW%2BZK50F%2F7WHxYrG%2FVhAsTyWvIxQopCRlC8pc5PhxmCZJWAV9K1Fw6rvVvgDryTVN5qYbPjwWHNYW5pRywibBpZoHQeDRa8F6C%2Frh17uyR8fA2wIIB9Ln2wUzAYwsPPmvgY6pgFiHkJvFAycfQVxAjFlNHY0LXbHf3aEEqxmRHg9D78rXwU%2FGkF9v694LkabokBZlpHbHSdtOrLAa52SouV64rqVGS6v0xIFNCvZb83BswvzsKdTrUabSuTUZ6cRx%2F8V9bAcWkA0MdVFmCoylJdfIaGAWSzpwG7Oc4pQCjvpBMjZFqX9HUjkkrkdf5SQTvtj9KA3zteB81vfAcFiC5l5FR2UBBSpQPbU&X-Amz-Signature=9c07994d2e03be8611c90e5484422d8fe945eb62d2a83ff2331e8c6b7303db0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKEN74A%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEN15QYUesVhIxhKuxTb1XzpCLxJzfL50mrtp9y9Ex26AiEA5GyiRjrnXIhp1kQOFs78SQUw%2FpFlbq0UzHJ8YAkZDhgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIUsF07yFqAZfnfFcyrcAwlpPhErEX4EIy%2BrcNDA9OBUsIh6nMTLdOBHsgu%2FTP4jjVbLPtZjf1I3A9AOwe7uDxOmkmmNFb0Izrtn2c3DUqQXkqKMrHqjbRgkiZ7za9ZQMc5eNg6ZaJLD6SMMBVU5R4SiCXgAaj7hEGVMptr2n8UbpS2M73NO92pXQsHBY8rEL8cazzlIhTuxXcwdVRj3KFRFz22YdYBMDsQDf%2BNPVWRa%2B7%2FnB0T8vNYaC4k%2FR7jHTRQbArlbWbzewjRKZOQl6Bara61qOaTLzkazPqkWWqTt%2Fmos5zP1eymy7%2BF9EGC%2BvTbJn20GdsBBWDpeDhwdahPilj8WMD%2FHcSWYYj2lRz8J8kURcNpT%2BiJswD2YtRJK3ZnRNiBzMRRI0x2p8Y%2FMhnfgNVRdkpDzhQApIEIyVijVU4FrCT3ZGQkv%2FAWlQRWcyBMADSe9Lo0uApfHNiqxz6QATOA3tqH6MTPdRQMJEpBUG3wVAmgD0uMS0ImM%2FR%2BEb1Dr0iNsU46%2Bj%2FNMQbWq3iDqlL8PxWIDE5NpBPjl1BSJqSety0lGkR2gH0I7mI%2BVp51h8q5FCMNmq0D4uzkslJkBRp0jXCroIAZ%2FbcgfHEmIYNjYfPf%2BHc2cX4yTULYIz3MERsytlDOI209IML3z5r4GOqUBci57m2JkrcEO%2BZHSPRl7I%2BL0nSZ%2FxijOn88HBw2U0rTZFQd%2BVhAOSis0gbrD3vfRdaBKK4qXiqBECk1eH%2F51p4US71M%2FMHSa9FMhDYyqHx%2FJ0NeEt22MkxQlDrve7sTB6IL748Pl0ubZAWkuRYeAg0LS9rwNiTF1jPtk4pee2ujBu7m9%2BS7xHkpmrHXjSJlusLxf3uVEE0Ma%2F4uZ2ulPTlNaUtKB&X-Amz-Signature=f835c9f28211b3225367bfbc12e4fcc2ee6d4248896debe2d890d4538530ed5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UHP3ZK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE9uJ4jfV4b%2BpqAP%2FeWnmVijEp5%2BuYZrrgHMayuG7%2BqHAiBjMntt1mFt6PpiZsQCP3L427b9hvttZpP4IHQGRntpOSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMqbk%2Bg2dcsg14IrPeKtwDu0y1032oJc5yJYC6ISLq7sGGCTP079hcYzlj5m2x6kbcCh7rFap%2FDsNX6P5C9Hd9MC%2F1RxLy4qHKFMf%2FNWeKQohmYTgyTqm%2BqhV%2FkWp9yWYizQZcbPD6WUlJVx00ZfqvpCRpfmEYtV3FxGFSN1XZMX8U%2FPMkYVz2lsraMbNEcQt8xQNJQGf8TVymjq6kdmOTghG6p3oAVFHK2w8kfeoDzvejyLvzvKMujoMNUtjubh%2Fv5V%2B%2FgTcsLs8DZeQQJD3wVuXzgl0EMryCJrd1%2BRP1nwSaLhdI5KfEZ3Cb6vHQMqhozY0vuEzOnjmcqwP1M7fwcoKo0k57IARn8uYTrVoZL5q7JfJs5pwEEG7Mcr%2BlUiWZFrSxb56HSIf1YXg3eULr4U78YaonWFXzIBEP7u9dtuUdiqlZNe7W9tk%2FOjrIOvF6U8UcvmIDGVXUIWbTIv8VaqBipIBud%2BSega5B42NRhX%2B8HtUF5siHuelGcCIPmXuj%2F7JQUKY1VBZALpoIlEZSVXBrgSN9MUUm26nP%2Fdt%2BmEyHp%2Fp%2B2h7846HzoIlzIL%2BmKV2OQbpZZVdLhIkbMwDwnxi3T8ZlOXS9TepI3ssWrz3k5fGM6sCkNwakcCBtrIUf8qWkgzRnp2NMWDgw8vPmvgY6pgHXg7hejNlHx6fVcUp3MlJN4USNz3UMIN0W%2Bgbw49Jb0fa9QST11mrhZ0Pc1tAKsUvenQ2BEWr5hEYIrh5z3e1c2kGMLb6F35nd3E8KIZbdNqZ%2BeNsgVti87at4ztuh7jo%2Bt5VYa9VGyJILLgGHPc5SG6ek5XzDk8bnQRXrkzLCr2DC2Hhc%2Ff3IurgyGiTCrXCmBsROngtMzx%2Flq42bbkKqXGMJDfwm&X-Amz-Signature=aff74e8dbe0d197caa26def897502036d0053ac8c7433835dd28182f4c2da319&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXTKU7X3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGdv3%2B2mVMVyI5JBx4ARu2Cpxkmf3ErI6jJZMmX5LpxuAiA2zX3hYR5wEHZGBauiVnxy1qEE0r5uyHNFNl1ug9ID3Sr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMAbzEANyrUZAGxXrXKtwDuZOgZBUlNFUqs9Gxi47y%2F9075glZtRjhYRczOskp65XFkBSMbWrDBzoqRnYWFN1MWMx5mq%2FW1pRiiwlt4fOmKpbYwlc2NC59gMCHVTCd8sLMAg2BG73DF%2FmMNSjUR3SrvZyBn%2Ff2BYg9hLwUD%2FcaUR67FQ4rgaq9XKKl1QZlOjzKPSlpVosEHczAvBfuS5A9JFUTXcPJddbV0Ll%2Bhovj4GRP4ddpOXGZHkFFdRwGret7LAa%2F1EEqYBX3lPMts5CLXYtL6CJ7gXzJvcbvFpYdacTeu4e04UVPsB0aIzXBynRtDkKrYzXSCYXKQp5allK%2FCiCKWUMnlrYACXXq11G4NsE9b03cszqY70LM24YJIWBVjKmXrHfEV%2Flqih7ggflGMfv40xxp5lI%2BlAo5Ib%2BLf%2FYc%2BRDDNbttg%2FyALB%2Ffrbc9W%2BZswr0Hpth5akdrWIls88hCH%2BqAOl8kbmLiqkeleUpnVJdJPFdzLk1Urtg9oQMOJ%2F0a7%2BiqZ1idZGiB%2FB2FPW%2BZK50F%2F7WHxYrG%2FVhAsTyWvIxQopCRlC8pc5PhxmCZJWAV9K1Fw6rvVvgDryTVN5qYbPjwWHNYW5pRywibBpZoHQeDRa8F6C%2Frh17uyR8fA2wIIB9Ln2wUzAYwsPPmvgY6pgFiHkJvFAycfQVxAjFlNHY0LXbHf3aEEqxmRHg9D78rXwU%2FGkF9v694LkabokBZlpHbHSdtOrLAa52SouV64rqVGS6v0xIFNCvZb83BswvzsKdTrUabSuTUZ6cRx%2F8V9bAcWkA0MdVFmCoylJdfIaGAWSzpwG7Oc4pQCjvpBMjZFqX9HUjkkrkdf5SQTvtj9KA3zteB81vfAcFiC5l5FR2UBBSpQPbU&X-Amz-Signature=b2f90e7d81d5bddd40b0629ed7c5182132a5c378b0de6182f354a5dcc08105a7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
