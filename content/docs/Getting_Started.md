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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q2R7AP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2ByXqh5L5bmje1TYxcxti5FpopN2DSbaW33zu07K31wwIhAKEWje9lz920mDWwc62Nc4VQxXsf6r651bLlYcbZoZbeKv8DCDgQABoMNjM3NDIzMTgzODA1IgyZokvOEHGFQUvawxkq3APiNtJbeSFnrtHNlw4buyEZNYk0G8nTGdpFYI2b%2FAI2C6wSBWEvBQ9rvlQVVjDekj6ocijwUBfVuhLZeJfGZlvqvDKFZ1nikXb0zrcktMbWiR6omSDeseDoVSFhy8v0wOm9nX0ipoyecSSnYfXcIgpf9%2FhbTcsVX5I4j2a7xX9ZhnJ0J9LcCTUlnOXOyqjh4R9aWbQAIUw2nlF6p%2BZXd%2Bxu0VN2b33OayF0BLxqAPnOR%2FVLg7Qc5vTHHCRD6744roMNy%2FQqfFhtRSLYLzSPEtsItUbQWpgpBIrjb1ycv%2FIZzQehWgDsF4imPTHgD1FzU%2F5OvbVgeaOEtrGOCEUfEsMO8XQC46nHZI48hlVH9T3tiAYa4LI4sBLThN%2FUlQ%2Bk3R0vuJwKuyXljMKtiI%2FPpVBEgb5u%2B15HswDI1E83DNwremZI1rFKxNTryXjrIatHjz76QCGMEFNgtWi%2F%2FWRC12xVAyvbnX7cmP2Yw%2F1YK%2B3uI8RTGB4ID8Q%2B2DZikrM78s62a8WaDtyf%2FhYru%2B%2FPwqNkn85eGAZv%2FZIj3t2UaMMS8AbGev05GJKNP2Ko5PCaLhUIGDuLIAaohYQ3mnak6UTCOuxJwMQGOq46BjsLwRxONt%2FrApmbBXN7sNCSEjDsyKi%2BBjqkAdxe%2F3EamCC6WJkTmofzNB2ydXQUVqig8B0l%2BP2iGE3mdBTCvm0yfb6lCGOG1zFRsO5LXhMEmtcC5HPZaVCrbuH7FY6UsTD%2B4v8H2ecMULEuuSK01dxceoVKDimhw9Q0LR32zbo7lnQdlTmIopWIHzS86iRGolTXBmqHLzqol6NusMropXCL%2F8fV1w3gs3kLocva5B5%2Bwy2ikhLg%2FAOXb3KBDCmN&X-Amz-Signature=d615e0c7beb17ae3c72928e4c21036bf7187bb2c3551bdda5743b8304a8b39a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q2R7AP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2ByXqh5L5bmje1TYxcxti5FpopN2DSbaW33zu07K31wwIhAKEWje9lz920mDWwc62Nc4VQxXsf6r651bLlYcbZoZbeKv8DCDgQABoMNjM3NDIzMTgzODA1IgyZokvOEHGFQUvawxkq3APiNtJbeSFnrtHNlw4buyEZNYk0G8nTGdpFYI2b%2FAI2C6wSBWEvBQ9rvlQVVjDekj6ocijwUBfVuhLZeJfGZlvqvDKFZ1nikXb0zrcktMbWiR6omSDeseDoVSFhy8v0wOm9nX0ipoyecSSnYfXcIgpf9%2FhbTcsVX5I4j2a7xX9ZhnJ0J9LcCTUlnOXOyqjh4R9aWbQAIUw2nlF6p%2BZXd%2Bxu0VN2b33OayF0BLxqAPnOR%2FVLg7Qc5vTHHCRD6744roMNy%2FQqfFhtRSLYLzSPEtsItUbQWpgpBIrjb1ycv%2FIZzQehWgDsF4imPTHgD1FzU%2F5OvbVgeaOEtrGOCEUfEsMO8XQC46nHZI48hlVH9T3tiAYa4LI4sBLThN%2FUlQ%2Bk3R0vuJwKuyXljMKtiI%2FPpVBEgb5u%2B15HswDI1E83DNwremZI1rFKxNTryXjrIatHjz76QCGMEFNgtWi%2F%2FWRC12xVAyvbnX7cmP2Yw%2F1YK%2B3uI8RTGB4ID8Q%2B2DZikrM78s62a8WaDtyf%2FhYru%2B%2FPwqNkn85eGAZv%2FZIj3t2UaMMS8AbGev05GJKNP2Ko5PCaLhUIGDuLIAaohYQ3mnak6UTCOuxJwMQGOq46BjsLwRxONt%2FrApmbBXN7sNCSEjDsyKi%2BBjqkAdxe%2F3EamCC6WJkTmofzNB2ydXQUVqig8B0l%2BP2iGE3mdBTCvm0yfb6lCGOG1zFRsO5LXhMEmtcC5HPZaVCrbuH7FY6UsTD%2B4v8H2ecMULEuuSK01dxceoVKDimhw9Q0LR32zbo7lnQdlTmIopWIHzS86iRGolTXBmqHLzqol6NusMropXCL%2F8fV1w3gs3kLocva5B5%2Bwy2ikhLg%2FAOXb3KBDCmN&X-Amz-Signature=151c2bfa7b622eafc15d3ce5d6edfacb3a63366e090e3d5e696da27c50d580b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI7NKN3Z%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF53kghdffMk%2B8v5VO4ZF1vd1UAVHmyp0mG%2F8FQ%2FfritAiEA%2FlWOdCfXg%2BDbxYKeC17NpbNpB8Ws4MEIe7fe%2BWAnB5wq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDBWOS9PKBKbgNWV81CrcA%2FORC%2BvHbg2QXHFOQU6NjtjeG%2Ff399aXfKpqBT80ER42z6ygO72zXrjlxMCMFjFNIESInXPnNFqv53SfF6uK9wwBCP4QVyblvXR1RCCvzkpU3r%2Bha3JJdYroeG8Z9%2Bl%2FuOWuxSIW09Vc3lxQINOCXxr%2FbhoKCkU14TgW2bYpcvx2cZUrTguQTuGY245iYJh%2FmWJPGpb2QkublZHom%2BsnK5Qn%2BlHXwPnWF7VmLqjKUqkLeda2gZqrY4tJQTWf6oaS0e9d8AyIFLMfrJOC3%2F%2F2ug55oAKq2hNsZxmVz3nobq5IX1jaDSiIkhi0X9bB7nNJFLOGDHL%2BwEyKF4c16PTCxmKiEpXcA3Oh%2FomotXV%2FOjueGrVJIZy%2FpuuDjCQDUJq0xVE56yELxeNR%2BWt%2FQJx2YhXLl7eFeBuhtQD5je0794S0kffeu2Uew1RZAuo5mZSx2Tj%2FR4zLJWoST%2Bd77RClsy6BNM1CeGoiBjo1WCxB%2B7cEtPKjNDhiT3JlqBRY129yoQInvMQIE3By9U6Hf2%2B7lCkvNxlrEfTeP%2BvL1ImSiHTt3BQC2ZHEjfeTFJQiN1Q1DeavxlJGOwdTuky%2FENgtcEqnk%2Fsn19HoNUgLp7hZiAmhEY8nyhIzEUrtz7rzMNrIqL4GOqUBBHuOIbok63NDe5WKDrFq%2BzQW%2Bdbh3Cr8pWsnElqdynnQiMX7x%2B6866lIYkTwM1Rhy%2FL9FMG5GTD4UjDscwJG8ti5dNmNTgogjUkkP7fGpbBI9gFTGPZenBEnCRWq1u2r2ehffFiLibSXKC8AT25qJZoDp4N9VH%2BgBgkomELYHUS1lYLfuPCKlJ3sfcR9OwbqwXSVFDC3SpLjd6uN0X%2BA3UErIO0f&X-Amz-Signature=9df64e50faf9b6d30b0d2552906b91c27fcc6171e09194e5d1551ff769f14a36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PQOIYLJ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrefsVMX%2FylQ8XdS2TGB%2BeOq5hUxUOnUAxt%2Frvk%2BRdoAiEA3DCGCFalwUs7vTjeuhWQSNXWbrPnNl7xY8KO%2Fq23%2Flsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPNzQlpYjF6xoahERSrcAxWUjgJ5x0qRv%2Fhxftm6uMUUMaTc6FnDlxkwaVStPo3t6VJ8pAayRYesVe65VoffXbvVymAE0a2CwikFBloyCk62x%2BC6sIt8wtzxPsUJqpvjgylVR%2BryZc3%2FB9Qc6mOnmvC48dS0R9mDCI8qB40wU4QrBPVh25ggDzQd8ViGRFcwxFUpv4eMxjZQATlxRRzNML5e4ecmPOaocrmo5EnUeDVDUQmXm8RkORWVBbfUoyPcrmb5r%2B%2FtHsk49Zwcqt%2F1slicGzv2tvjjz%2BRwRuQ%2FM5dOkqti0PE%2BZriLWwzVeMHlsuNRlQOwBI9GC190WcvdsQV%2BFBzvy%2BvLDE0uGUWPpxf5Xu0PXAnvVZhpTck0LP9%2Fkgl63mlLMzhpa7pdiFRxYwfd3eSnwnrccYCcub97Ns%2FHtzxblRpfGfTh8LUjbI%2FG05qNNzf38oCBuDAhwXWVb3fd0oVqohI3T3fZQlEREZX2p5Q46PgV70itbT2ytnUad0kKzidVTqzKY6ijL8vsu%2Fe4n7gC9%2B8B8K1pijRgPzCYh0S3L0mRq8slqERHJEEf8cMlyGvQkxriEonc2zh0FzMHPV0y0R9ewQ1SbmcJnnTt4bovBVN86fDW3I4iZhCDSP%2B%2Bq1akZlLZ4LP%2BMOPIqL4GOqUBJodazq8IhuQXNxcq0ttS4M5zI0jcB4qUEvIjTPVFWeFbewkDAo%2B6L1ZEpbUFVoczniE4wxxbtyoZKPIXLl9sroXeJnl9a7LQ1KCA5y9f3hmEpjcUpm3NtBida6GYz6SquBA9EHj%2FTpj58R8mguk9NIATqDeEh2bNlKiTo6YXjpuJjKdXpDr1pM5MPkqy6%2F482HjlnQMqOqySBCYKqjM5THWI7qMP&X-Amz-Signature=35c15dfe6b70f13b2bb46507bb660db8a470dceb2d4b104e2f7b404a96b3d802&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647Q2R7AP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2ByXqh5L5bmje1TYxcxti5FpopN2DSbaW33zu07K31wwIhAKEWje9lz920mDWwc62Nc4VQxXsf6r651bLlYcbZoZbeKv8DCDgQABoMNjM3NDIzMTgzODA1IgyZokvOEHGFQUvawxkq3APiNtJbeSFnrtHNlw4buyEZNYk0G8nTGdpFYI2b%2FAI2C6wSBWEvBQ9rvlQVVjDekj6ocijwUBfVuhLZeJfGZlvqvDKFZ1nikXb0zrcktMbWiR6omSDeseDoVSFhy8v0wOm9nX0ipoyecSSnYfXcIgpf9%2FhbTcsVX5I4j2a7xX9ZhnJ0J9LcCTUlnOXOyqjh4R9aWbQAIUw2nlF6p%2BZXd%2Bxu0VN2b33OayF0BLxqAPnOR%2FVLg7Qc5vTHHCRD6744roMNy%2FQqfFhtRSLYLzSPEtsItUbQWpgpBIrjb1ycv%2FIZzQehWgDsF4imPTHgD1FzU%2F5OvbVgeaOEtrGOCEUfEsMO8XQC46nHZI48hlVH9T3tiAYa4LI4sBLThN%2FUlQ%2Bk3R0vuJwKuyXljMKtiI%2FPpVBEgb5u%2B15HswDI1E83DNwremZI1rFKxNTryXjrIatHjz76QCGMEFNgtWi%2F%2FWRC12xVAyvbnX7cmP2Yw%2F1YK%2B3uI8RTGB4ID8Q%2B2DZikrM78s62a8WaDtyf%2FhYru%2B%2FPwqNkn85eGAZv%2FZIj3t2UaMMS8AbGev05GJKNP2Ko5PCaLhUIGDuLIAaohYQ3mnak6UTCOuxJwMQGOq46BjsLwRxONt%2FrApmbBXN7sNCSEjDsyKi%2BBjqkAdxe%2F3EamCC6WJkTmofzNB2ydXQUVqig8B0l%2BP2iGE3mdBTCvm0yfb6lCGOG1zFRsO5LXhMEmtcC5HPZaVCrbuH7FY6UsTD%2B4v8H2ecMULEuuSK01dxceoVKDimhw9Q0LR32zbo7lnQdlTmIopWIHzS86iRGolTXBmqHLzqol6NusMropXCL%2F8fV1w3gs3kLocva5B5%2Bwy2ikhLg%2FAOXb3KBDCmN&X-Amz-Signature=d210592474847808631264c3aab1e2232b9aa6592bf251fe1b57187dd8352ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
