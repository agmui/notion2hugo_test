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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DG7YPFE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDBAiFDW4Hme008iMMIopNFEfpU3DVHJP%2BubonPUqPbDAiEAslWRGHw4K594NsA1t%2BJKXUclgCm9nSoRl%2BVDc3p9GP4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEAZmtnm50DhD58%2FASrcA07OX3FO8nXw9p7MSNBT6yVhRxxs%2BHPM0kEsM50l47Vo3kLTYPRjpLOLY01Hm3G1ltslwcz6nYXZUQHgr6wFkdCHRw02FmEsvA2eN3IHS6LpmSueMg5aCz17e54KLHBfcAPT7pvyuhRr5Kpug14HhZXjo9MbUT5b75uak6nhijdw4FKpY7b7SVGydS8vhfESGF9NXrlGaiQ2mPistV0pDgd02XbS7LZgctj1kuBn9cOhPrwU87ql7vpAuHmkbVaw%2B7EZUqWtKbNsEyU%2FCE2v9ApCRnGRiR%2BpA1FAS1IvxzpPpbXLrtZbGApXr%2F8p4bKDVhwlmGSAcG9HTn0jAtanWt7y7zlDSLw4NetKQmp%2FP5UguPQlOxe938tqsktEcEQKmqj7s01UUndZG%2Bq%2Fl6h7KhfLGAYrxWE1uH4hWvKvPG6E2cdT0%2BVhMtafbMFORJuyjnDotkRLI0RhDrvV01%2FVLUPlKfGULHK%2FO%2FnypH3G0Fa6k%2FJ0tsifEldiDACh6KVK%2FYeQ%2B5sAJGFOLcqOn5FN%2FO%2BqDKpnxuU0r2vlXlFZ95YvE6dfFSz%2BJxdIL%2BNbTz%2BcOAeEEy%2Fg8zpQs6b0%2F5EMsvq77UNWETOYooity9c6doMH9KASQ6eXc8ZhXEGUMMrbhL0GOqUB3QZLW4MeaSpilSHUwgrXBzI1AFdf3HFSWLy4HFwMiSwEFRUKp6%2BOdhw37HSeHJGySb6BDkekp%2BHjzgbaROJTzW7iwPaL5XZACon4wUPNJD2rjwNGEV6OnQMk2bQV%2FnLnQ8FRf6xPg%2FJAiv3Ee3fo%2By1YwvaUhfXWtl9e8hWGvWtE9nMzNq6iHxCosWzp0eWp860LKVWaQ0WaXKixVZxkKqUmP8rb&X-Amz-Signature=68f6f38d757c147a01fa6b49e083390bb814f7fee454e096179211f613d891d0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DG7YPFE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDBAiFDW4Hme008iMMIopNFEfpU3DVHJP%2BubonPUqPbDAiEAslWRGHw4K594NsA1t%2BJKXUclgCm9nSoRl%2BVDc3p9GP4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEAZmtnm50DhD58%2FASrcA07OX3FO8nXw9p7MSNBT6yVhRxxs%2BHPM0kEsM50l47Vo3kLTYPRjpLOLY01Hm3G1ltslwcz6nYXZUQHgr6wFkdCHRw02FmEsvA2eN3IHS6LpmSueMg5aCz17e54KLHBfcAPT7pvyuhRr5Kpug14HhZXjo9MbUT5b75uak6nhijdw4FKpY7b7SVGydS8vhfESGF9NXrlGaiQ2mPistV0pDgd02XbS7LZgctj1kuBn9cOhPrwU87ql7vpAuHmkbVaw%2B7EZUqWtKbNsEyU%2FCE2v9ApCRnGRiR%2BpA1FAS1IvxzpPpbXLrtZbGApXr%2F8p4bKDVhwlmGSAcG9HTn0jAtanWt7y7zlDSLw4NetKQmp%2FP5UguPQlOxe938tqsktEcEQKmqj7s01UUndZG%2Bq%2Fl6h7KhfLGAYrxWE1uH4hWvKvPG6E2cdT0%2BVhMtafbMFORJuyjnDotkRLI0RhDrvV01%2FVLUPlKfGULHK%2FO%2FnypH3G0Fa6k%2FJ0tsifEldiDACh6KVK%2FYeQ%2B5sAJGFOLcqOn5FN%2FO%2BqDKpnxuU0r2vlXlFZ95YvE6dfFSz%2BJxdIL%2BNbTz%2BcOAeEEy%2Fg8zpQs6b0%2F5EMsvq77UNWETOYooity9c6doMH9KASQ6eXc8ZhXEGUMMrbhL0GOqUB3QZLW4MeaSpilSHUwgrXBzI1AFdf3HFSWLy4HFwMiSwEFRUKp6%2BOdhw37HSeHJGySb6BDkekp%2BHjzgbaROJTzW7iwPaL5XZACon4wUPNJD2rjwNGEV6OnQMk2bQV%2FnLnQ8FRf6xPg%2FJAiv3Ee3fo%2By1YwvaUhfXWtl9e8hWGvWtE9nMzNq6iHxCosWzp0eWp860LKVWaQ0WaXKixVZxkKqUmP8rb&X-Amz-Signature=568bf8839ca2adcb8a5e916120cb25e0655af1b632387a94f73601ce47a437c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSXQL4BJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQD8AzACYOUexNRKI4pH5%2F8olqsBygEtng3xOuC9WfS3%2FgIgdKhhmMPQz%2FJqivzR3LRqLGnmiJF5F7SUCYOjqRLqOFUq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDDwmdHvcjxRqtLcHSrcA32sxPugNGXLdwcOmP5qcNzFt93gUerCjy2FcohEgkvCMvkR4DIsuZHiHtIYiAOWlmFPng2coGwsXpfA8ae%2BHVaivNexbRjZ62im5uKFV%2F7%2B9wNQK%2F%2BL8giP9bJIP%2B6fv2Jk1e4iIDrCdEU0cdOloEdjfr683peEKG4v3cfVprZ4z2HIjVkVvxPpuKqQ7k7PQzMDPNtzs7pHuJEBlhYcsQXWnbGng51EQaG2Dvkt%2FuXFCQSg1P6s%2Bn4TpmyQQr2P1MFgNV88KPrJcoxVhRNbOs4URD0CAfVu2O8pJ9U2HsWcZyXt4M7VmBEyPXzrgV3RKCuorg22lYdaUkMBtr0a5%2BGmwXCEazkk0sP5QGSbAJS6BFA926CtQV9pHfhwwyfYhR3GMkO0AFyQBU%2BTHRtq3F7krUioB%2FrnthEyLD6Iqj5UB1l4jhaokeMcJgL2PiLrE4MiSd9gc%2FGzprRQtptOlEM9zaHASYhAA7BUXeHBqBa3TFVlZ5HboL%2FalY8SijO4gDe2DSQgTqtKakeYe10slYCgDmAktqIUm0TIP%2BpqW%2B7az1FxWNg%2BUhtMyk7wKKB5sdq2e%2BKCwFWC6sbSL3T3BhRx8cbFkYjtD%2BvR6nlgWL%2BVA2NLZIgMxvw6J%2FcUMMTbhL0GOqUBWoy45f6gbvj%2FMGrcijpjlZjXpdHV5H74JpTnS1p%2FhtoCJVFABpREGIDnrB1L0o%2F6dS22Rd1IVJda9d321kF8Bcn3jo5SLztu5%2FgBWqoarQHvoL44IHwwatQViQGSHOx1Ku8Iec8hnQvppwVhj51UV8oN%2B5DATJz%2B0djtlrETfn7ojJFJTf8kUO06Xewl1rhXWO7vZFMzBb24hKpRbyV8s7YSJIbR&X-Amz-Signature=0db322b2a382b8b223e7ce5a132610d2a95915dac172376a961d134fef32a4d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCWB7FK%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFsvwtU1RJKz4VXAjczu9vSsszzaK60qEOQA8ApT9RAeAiEA5K%2BibzeOa4MlV%2F3oTfhvBLct4drRKPohkoDXr8wNI2Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHOSzr58VekZ1fuexSrcAwVk3jUfPRkdglPqO0sFJZ%2FJAkWwDyVzaEv7OZB6KInhreWUh3dyWut9tKAVxARo5zOTNFPJQ249o64m6RDM8IklQgnHNdhBGaiJqRqbh%2BvdamBaDbtBQmrJyNIMeBBopZO%2FBP5IBRxlV6iuobqs9nWgCFtnnz2kejCj6URHhHrRzwMnt%2FvPoVwkSNCpcUQJtcL5oTcs7vgLTRZr2SxsmvyB7mP%2B8MlHYnhko26ZLqj8LGIkK7%2BsKqs1PJEz0nnXcwJKpymBilzcwioT%2BpQ%2BDTdxoRygaFJZk9liW8Cg1YF3PCV7MAWSDaD42n04ZUjmkqrMXzzeD9Mh9Y0EnV8KTRsBGO3e4x7i04CMpo74a7j9GpibZvihYC2%2BINHKnToLET199QM%2BRHbvvNI6XDfCdoTifR3KP%2BP1zyeOgZjAdUjesmzG27FUHINsJQGrQcC%2Fm4ilSlrx2SpS3jpzQEASrw9JrKf%2FQoE0ghyTk5d5qgEIewjl026D3PpVLJIrbAqW%2FK6ydBVm8gNnMdjqsS%2B6fHHbc%2FCvKmdnt2bDhUdJ6DjEkCUIZpEifj3Zp8i6zn5C7s3a%2FL%2Fbv8DLdrfjJ82thDR6HZxQFBOsJQ8bY%2BmOuNIG1Y0YxnrD5mGhgbCDMPTahL0GOqUB%2FGrtZmk%2BkiTvc1963gPFLZiWCQdrP%2FY1vIL1jeYn5FLUpZsKd5feYiFnkLKvFAUHxnCwlaWD87%2FB4X4oa%2B1TwT%2BivQIZeyV%2BhFhOBB3jkpgdNrCMYWk4B%2BTcfuGQoJPVgDSK5nmIXAMzefklQEVsO%2FqkwqOlZR%2Bz%2BXq0KAXZGGxkHhomnKiegtVUE9HXo2dCvGbDVgzFjqspafbwwidooh7PKeh7&X-Amz-Signature=bc912426689a1a37191d99aca7b95231599caedd96eb048afa0e384fbbccb218&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DG7YPFE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDBAiFDW4Hme008iMMIopNFEfpU3DVHJP%2BubonPUqPbDAiEAslWRGHw4K594NsA1t%2BJKXUclgCm9nSoRl%2BVDc3p9GP4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDEAZmtnm50DhD58%2FASrcA07OX3FO8nXw9p7MSNBT6yVhRxxs%2BHPM0kEsM50l47Vo3kLTYPRjpLOLY01Hm3G1ltslwcz6nYXZUQHgr6wFkdCHRw02FmEsvA2eN3IHS6LpmSueMg5aCz17e54KLHBfcAPT7pvyuhRr5Kpug14HhZXjo9MbUT5b75uak6nhijdw4FKpY7b7SVGydS8vhfESGF9NXrlGaiQ2mPistV0pDgd02XbS7LZgctj1kuBn9cOhPrwU87ql7vpAuHmkbVaw%2B7EZUqWtKbNsEyU%2FCE2v9ApCRnGRiR%2BpA1FAS1IvxzpPpbXLrtZbGApXr%2F8p4bKDVhwlmGSAcG9HTn0jAtanWt7y7zlDSLw4NetKQmp%2FP5UguPQlOxe938tqsktEcEQKmqj7s01UUndZG%2Bq%2Fl6h7KhfLGAYrxWE1uH4hWvKvPG6E2cdT0%2BVhMtafbMFORJuyjnDotkRLI0RhDrvV01%2FVLUPlKfGULHK%2FO%2FnypH3G0Fa6k%2FJ0tsifEldiDACh6KVK%2FYeQ%2B5sAJGFOLcqOn5FN%2FO%2BqDKpnxuU0r2vlXlFZ95YvE6dfFSz%2BJxdIL%2BNbTz%2BcOAeEEy%2Fg8zpQs6b0%2F5EMsvq77UNWETOYooity9c6doMH9KASQ6eXc8ZhXEGUMMrbhL0GOqUB3QZLW4MeaSpilSHUwgrXBzI1AFdf3HFSWLy4HFwMiSwEFRUKp6%2BOdhw37HSeHJGySb6BDkekp%2BHjzgbaROJTzW7iwPaL5XZACon4wUPNJD2rjwNGEV6OnQMk2bQV%2FnLnQ8FRf6xPg%2FJAiv3Ee3fo%2By1YwvaUhfXWtl9e8hWGvWtE9nMzNq6iHxCosWzp0eWp860LKVWaQ0WaXKixVZxkKqUmP8rb&X-Amz-Signature=7ba6b59cf6b54f8d71edcb7bf2c898f9468be1aea30ec35ec19e6b9f90171ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
