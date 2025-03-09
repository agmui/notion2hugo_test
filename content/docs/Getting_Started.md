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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHYRR4D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCID4sjw0WNlaufGsvprRyowo8U9e5DRXTMRxZPORMsEQ6AiEAjn7An2DCZEt2jBoHqLv4l%2B64EQ8%2FOg2bOrQYS6a2srcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAgOStwRiDTzHfRpuSrcA79hUFJiG98iTQGHcvCW4rHL2ACNpVB%2B1Ed4rGTO%2Bn%2FZTxRLIPCxlsig3IyuOvEuEmEXAt5UGTVEdaPrMsnhsTtWT4LzN87ZsEPbODQIH2LswQfQrLv0B9Xynm6I05b9IzFkQubd%2FhCGmnwJcoUhWKMbkewJmfkB%2FgAmhtJ%2FF7c9M6%2FTGtbfy9s4DXTwSWWY1dmMpvN31c27ipW9myESr%2By7JLFpCXOB9%2B%2BMjzk1yA7HtiUCtc%2F6XEFk751f0iFqriTppquid3d5lMgIHkDgc4IdZhZ5tUopaOe0Y9dC9jDncNzcDyycCYsyNSsrFF1seAAxMD3So6xBp0NAqKnW7uViFgwYJi9V6enlTmPsxYqAXPQMgkpJH7ao8eaV54qvKcPU8STQJfEdC%2FuG9mpgqqD6x4IWoT7ndQc7qXhWcZCS7e100jGi71428nruJXGN0Ov7gN3u%2BKSyu2l167zy9N4Rnf%2FxaZOEpZgDvtPNoWeWei909byn7oti6gww4Y1UC3%2B05I9iTH6Bdj9Zkz%2ByH%2BTSqG9nqNBHmP7i8nvctCmrpGmJnWWGf%2BpFmGClicKMFpnbtyXV0TrkzAbEg4K8d1rO01OJZfGf%2Bw7gu%2BR1VL%2F0%2FVZa0s%2FXNkNm8x%2BIMMCJtr4GOqUBQg2wQnOnyIJUde7edZTcDy55cvjX%2FK%2BXmgRUNFk0PXITxY%2BFHEcxYhIVIQxeb2G9s3ciq3oKxKJ74PWmlh7A3a%2FaR3yL3g9VpvtMijw48hT4lN2evWi%2FBV8fHLIcFNjQnGf4kOpXxYmy9XypVryLT1glzYVnfHUBFRCtQhSQx080W2OfMN4N3jNEsKBLJ9hFPF9Ckm2kjeZEDnPdKM%2FEHnlpbp2G&X-Amz-Signature=281341b214f2bdd75f836330fb4f125d703e51b087f7ad2df69656d7c6acad36&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHYRR4D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCID4sjw0WNlaufGsvprRyowo8U9e5DRXTMRxZPORMsEQ6AiEAjn7An2DCZEt2jBoHqLv4l%2B64EQ8%2FOg2bOrQYS6a2srcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAgOStwRiDTzHfRpuSrcA79hUFJiG98iTQGHcvCW4rHL2ACNpVB%2B1Ed4rGTO%2Bn%2FZTxRLIPCxlsig3IyuOvEuEmEXAt5UGTVEdaPrMsnhsTtWT4LzN87ZsEPbODQIH2LswQfQrLv0B9Xynm6I05b9IzFkQubd%2FhCGmnwJcoUhWKMbkewJmfkB%2FgAmhtJ%2FF7c9M6%2FTGtbfy9s4DXTwSWWY1dmMpvN31c27ipW9myESr%2By7JLFpCXOB9%2B%2BMjzk1yA7HtiUCtc%2F6XEFk751f0iFqriTppquid3d5lMgIHkDgc4IdZhZ5tUopaOe0Y9dC9jDncNzcDyycCYsyNSsrFF1seAAxMD3So6xBp0NAqKnW7uViFgwYJi9V6enlTmPsxYqAXPQMgkpJH7ao8eaV54qvKcPU8STQJfEdC%2FuG9mpgqqD6x4IWoT7ndQc7qXhWcZCS7e100jGi71428nruJXGN0Ov7gN3u%2BKSyu2l167zy9N4Rnf%2FxaZOEpZgDvtPNoWeWei909byn7oti6gww4Y1UC3%2B05I9iTH6Bdj9Zkz%2ByH%2BTSqG9nqNBHmP7i8nvctCmrpGmJnWWGf%2BpFmGClicKMFpnbtyXV0TrkzAbEg4K8d1rO01OJZfGf%2Bw7gu%2BR1VL%2F0%2FVZa0s%2FXNkNm8x%2BIMMCJtr4GOqUBQg2wQnOnyIJUde7edZTcDy55cvjX%2FK%2BXmgRUNFk0PXITxY%2BFHEcxYhIVIQxeb2G9s3ciq3oKxKJ74PWmlh7A3a%2FaR3yL3g9VpvtMijw48hT4lN2evWi%2FBV8fHLIcFNjQnGf4kOpXxYmy9XypVryLT1glzYVnfHUBFRCtQhSQx080W2OfMN4N3jNEsKBLJ9hFPF9Ckm2kjeZEDnPdKM%2FEHnlpbp2G&X-Amz-Signature=420e6a04399f7a283b7d9799f52a55021f33ab3a115a20bbc8a36436d9d9ea6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSEQH2TP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHsPPATLh1uicsXcV60zHcULidNEhqKsk7GyqMf7PV9EAiBMkEIScUUmyZaaJdh7sWzNdojjzArxYHXUs%2Bhxf0%2Fr6ir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMRfCpDTVUYYESljaGKtwD%2FJBHOJYYO03HVF8byVOU%2FEZ2wXZqgI%2F8z0k5Pb7PPXDyuFKJvrv4E3SLFOb7DM2rwanThh%2BDvKaZCUs0DSfbUzQJdgDrDwcnK0BYWNqfgpv7lBDUcDvc0P36aeaGT4jUnK2MDMW3NmJ43gUcphRi4lNd02ttfghp5JLOA3ZLIXjZvA%2FlU6D2yEBHMO3ZMn9SUCTdkYV4haPr2%2Fub0CDGErk9E1ehfJiRc0ccPvwkYcQV2jIjReVktyhsOBYiRPE5n2MWINZh9%2F1Uu03MUHSzy9vO4n3xe4%2B3eYixnzx%2FMh8UcyWJxpjINITQaQKe6MSBVv1wnix9uvq1GwKScXIUKvJTblwCw3JnOpsMHp%2B9Do%2FA1vVajT4ZpaLZyxltPZCLUYGYnqs6n1wQMQ0AIsTj%2Bt%2Fx8gm6UeC4FgoUr25QIcoo8iWShX4LN2gxpOsnlD2NW1zbg3ypTdtMFNFCl9GbOe7bCyfZAUTjNa9bZNvAOaWKqrHNDk5HlN%2BpyGAA1WWYEPy2CaKD79bNubRF%2Bwzqtw%2Bd2B%2Fm44VvYDAJMpyPI2i9sMzSG5JO4RoU2cCBhSOQYrTHrC5kXFhQwCI3FH%2FG%2BJlN9dIS2IAakipFlPTIxO5hN30wYrR9o53m9rgw8JG2vgY6pgESEo4r9e8Tf2mdWdmSmtr0YVV4wh%2FAlkUMSdNJgzpQ9IipgNkBXoYR%2FWTAkZG2Got8plFtpft4qU6vHI5wMTjeM2i5UG6ze8fHj%2BWd84T83h%2Fbtchz6HubedQq1ki4t8YTK9SGLkN3y9xto%2FRdC7NqTZn8JH%2BX2p%2FicAesNvAO8S9qVq%2BJUS9gaHIW2D%2Btl1OcGvnKIu05V4i2fNX5ZcWo%2F3ZOfgp0&X-Amz-Signature=70ec5a8918e48ad5d2b16b9409f0ee724a2d124515512c471f7c1de7147b236a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVCJ5SUE%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2FWdpqtM1GRrJbnmqrJ99PvoauGm2qX8xF1FHXzws59wIhAPGqeMf9n7ja6EgvjlPkX4ysJLrH31vURLObjl7nsxaCKv8DCHUQABoMNjM3NDIzMTgzODA1IgwRt6K5VAZ77m6hei4q3AM8f1Vsddo6DjrBq23MpbOdkdKKUqL0i1eIeeTRd0mupkD9wK1W12MeHzkgsPsD5G4E6MT%2F7sJ2jWO%2F0kVL7alTo57iATkfesBicCjyJ1skKyisO%2FfHzRIJYuG60chUot5hOzlJIaXFGQk%2BildyXz9%2FOfb2UCpVqzno0xpx33STOyWdr1nc21I4So47684ma5AizNrx2V%2BFnV%2BGYveFEEiifbwgprtZfbItxQZF5zSkwCRzNa0T7si%2F6wrCtlPlLS3w1Qz13bKq6sOPaKbaElVRfGc%2BX%2FVO0UN46dbrMuaVFJ4Rs9tas4QlAMFx9ZlrO5ZDw4oIPLh1z0Q0CUCSkMTzOx08gQUsuU6Xg%2BsBS9kBVw9cRCoiJqguBViCb8EUSxRozi9j3jZBdCvNU%2Be1dv%2Bd25jdmLg1FE7oFexvdzhm8ellGDj0w7H8lyw2Hdafqcv%2B%2Fem%2FFjd09zLQ1GhMq0RYINK2R4vc1DEfWgqDn5%2FzdKsW5RlOalqe3FV4os5pdyyEuXmUUZmuSRim7AdKjuF7jUpFiGYbCiDdna%2Brn8eaoGgEzHij4rKnjIGUUohlT4BwmCbjcrJSnZ4RSKky0ALW9zMRQ1zgd2PkRTRtw1mh5KUbr4QOMdpkiTfdAzCuiLa%2BBjqkAcFi7GOhRG1iba92V39WmIGX%2BW9FpJ9LPscmmsI5TNdpZrIEVRf7Gz7dcchX291oH3puBIIMNE%2FQj7ZmQLm1EqBrfbdP3JT4Y9s5zuFi3HpUR81bqHvqM9iJBW0YZGQ1uezIvL71rLNk7luXBwdWzq92dRw3vBZcnoZQoTw1npDBhGqVHqzNpzf6pEHNhyhKf6dLlBTFtiy47CeBIDaKYY9gBG9t&X-Amz-Signature=990ce42024ca6a3aece81d070b4a1a128184790ff3bfa87e23edb9cde131b3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLHYRR4D%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCID4sjw0WNlaufGsvprRyowo8U9e5DRXTMRxZPORMsEQ6AiEAjn7An2DCZEt2jBoHqLv4l%2B64EQ8%2FOg2bOrQYS6a2srcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAgOStwRiDTzHfRpuSrcA79hUFJiG98iTQGHcvCW4rHL2ACNpVB%2B1Ed4rGTO%2Bn%2FZTxRLIPCxlsig3IyuOvEuEmEXAt5UGTVEdaPrMsnhsTtWT4LzN87ZsEPbODQIH2LswQfQrLv0B9Xynm6I05b9IzFkQubd%2FhCGmnwJcoUhWKMbkewJmfkB%2FgAmhtJ%2FF7c9M6%2FTGtbfy9s4DXTwSWWY1dmMpvN31c27ipW9myESr%2By7JLFpCXOB9%2B%2BMjzk1yA7HtiUCtc%2F6XEFk751f0iFqriTppquid3d5lMgIHkDgc4IdZhZ5tUopaOe0Y9dC9jDncNzcDyycCYsyNSsrFF1seAAxMD3So6xBp0NAqKnW7uViFgwYJi9V6enlTmPsxYqAXPQMgkpJH7ao8eaV54qvKcPU8STQJfEdC%2FuG9mpgqqD6x4IWoT7ndQc7qXhWcZCS7e100jGi71428nruJXGN0Ov7gN3u%2BKSyu2l167zy9N4Rnf%2FxaZOEpZgDvtPNoWeWei909byn7oti6gww4Y1UC3%2B05I9iTH6Bdj9Zkz%2ByH%2BTSqG9nqNBHmP7i8nvctCmrpGmJnWWGf%2BpFmGClicKMFpnbtyXV0TrkzAbEg4K8d1rO01OJZfGf%2Bw7gu%2BR1VL%2F0%2FVZa0s%2FXNkNm8x%2BIMMCJtr4GOqUBQg2wQnOnyIJUde7edZTcDy55cvjX%2FK%2BXmgRUNFk0PXITxY%2BFHEcxYhIVIQxeb2G9s3ciq3oKxKJ74PWmlh7A3a%2FaR3yL3g9VpvtMijw48hT4lN2evWi%2FBV8fHLIcFNjQnGf4kOpXxYmy9XypVryLT1glzYVnfHUBFRCtQhSQx080W2OfMN4N3jNEsKBLJ9hFPF9Ckm2kjeZEDnPdKM%2FEHnlpbp2G&X-Amz-Signature=1e2c47e18353dcae0fbeeb8ff3e47504796ee363862cf544e523d9f3e0e2ad72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
