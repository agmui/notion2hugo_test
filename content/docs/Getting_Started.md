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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SYHJTF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8DOghIgHXOxlfWnaU37L83i%2Bi3ssBDlaF4HGmW2rBgIhAJWSxyfkpqTQXplaW8zijRIZtXXMLxafVOXwT6FJQKiEKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy9JLXz37kA3rwLV0q3AOfSxNfZ7FpKwtdoP4keqnjClRLt8bHlsMRdC5AJnYHkILCcK4sWNNRAj7wMpXIkWwTEFSkzkCTY2IZsxdOM7NYSqKQmABGY1qYT4kZzxcEYzrKuJtkkzdGw0agjjSsPHS5bpWGVULkyMWRUh8i7BRTl%2BMWWW0gz5jOjYVF%2FjqkYubgdq240r%2FJz6ZEVbhqIbeAr1zAfcsn%2B39Skwe7AvJAnHcQUsoC9BakmD98APjF8nvQPQ%2Be%2BJT2dvp0fpy26QRUrBR%2FrLwTfg9r3iJlK3Ccf%2F6YXsEakFeTVbk1y54gNBEtL4vYKVUy%2FSQ%2FTazYJZYvI4qhtsR3ZrxmY7zQj3i9GAOmhlnFCEL1w4ww7Z9Ct7eEniEFUatI1OIYsC%2BAZM2S3%2F%2FCoKimhUKjvqnmPY3lC1qdPadYHSSaTEY0ZEVCUTiM6m0kwdbV5t%2Bkx1DAADQnguCR9WGOjA6ybe8rMcMsb8oSy56IM7EMMEicYLO1x9LLaqy1qSe%2FUkFicykZuGQGmP4CNmkHYlo34Bg54CczdbJ400oknn0MiBdi%2Byfv9kXnHN9nxdD2ePTLz4sA%2BQviP%2BD%2FRHEHNDEDvhyKRp%2BfnGw43hiCtvYbkqGu%2F0dS8k6Z0owO4zJGVrIW9TCnv97CBjqkAWb4RlkbGnoVWjaIVySEWeBggHPhAzvZomyNZF34Un87mWTMVOcNkYxaJyJrD1a6GbA1kG5qV1bR5%2BuWkkNY7Zm1z4nvVY9qMXGkSuZsdYd4Nk5XJvu635fQV9RD66w7VGZtPSMqno7lRlZXGV6QQ7lwhRo686gZirO1dQbyubV4c9Ud3wtjzoBnoarQ4780zt9GBAE3UAVpYoEkk6Z10TVxBIga&X-Amz-Signature=5643d80a94b695f28c96d3f69f9ff97e99f33740fc47283b9ea8aac807572147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SYHJTF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8DOghIgHXOxlfWnaU37L83i%2Bi3ssBDlaF4HGmW2rBgIhAJWSxyfkpqTQXplaW8zijRIZtXXMLxafVOXwT6FJQKiEKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy9JLXz37kA3rwLV0q3AOfSxNfZ7FpKwtdoP4keqnjClRLt8bHlsMRdC5AJnYHkILCcK4sWNNRAj7wMpXIkWwTEFSkzkCTY2IZsxdOM7NYSqKQmABGY1qYT4kZzxcEYzrKuJtkkzdGw0agjjSsPHS5bpWGVULkyMWRUh8i7BRTl%2BMWWW0gz5jOjYVF%2FjqkYubgdq240r%2FJz6ZEVbhqIbeAr1zAfcsn%2B39Skwe7AvJAnHcQUsoC9BakmD98APjF8nvQPQ%2Be%2BJT2dvp0fpy26QRUrBR%2FrLwTfg9r3iJlK3Ccf%2F6YXsEakFeTVbk1y54gNBEtL4vYKVUy%2FSQ%2FTazYJZYvI4qhtsR3ZrxmY7zQj3i9GAOmhlnFCEL1w4ww7Z9Ct7eEniEFUatI1OIYsC%2BAZM2S3%2F%2FCoKimhUKjvqnmPY3lC1qdPadYHSSaTEY0ZEVCUTiM6m0kwdbV5t%2Bkx1DAADQnguCR9WGOjA6ybe8rMcMsb8oSy56IM7EMMEicYLO1x9LLaqy1qSe%2FUkFicykZuGQGmP4CNmkHYlo34Bg54CczdbJ400oknn0MiBdi%2Byfv9kXnHN9nxdD2ePTLz4sA%2BQviP%2BD%2FRHEHNDEDvhyKRp%2BfnGw43hiCtvYbkqGu%2F0dS8k6Z0owO4zJGVrIW9TCnv97CBjqkAWb4RlkbGnoVWjaIVySEWeBggHPhAzvZomyNZF34Un87mWTMVOcNkYxaJyJrD1a6GbA1kG5qV1bR5%2BuWkkNY7Zm1z4nvVY9qMXGkSuZsdYd4Nk5XJvu635fQV9RD66w7VGZtPSMqno7lRlZXGV6QQ7lwhRo686gZirO1dQbyubV4c9Ud3wtjzoBnoarQ4780zt9GBAE3UAVpYoEkk6Z10TVxBIga&X-Amz-Signature=81d2eb98fc40484d8e32df0375645ed1792f2abab14754de10914425146ae9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SYHJTF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8DOghIgHXOxlfWnaU37L83i%2Bi3ssBDlaF4HGmW2rBgIhAJWSxyfkpqTQXplaW8zijRIZtXXMLxafVOXwT6FJQKiEKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy9JLXz37kA3rwLV0q3AOfSxNfZ7FpKwtdoP4keqnjClRLt8bHlsMRdC5AJnYHkILCcK4sWNNRAj7wMpXIkWwTEFSkzkCTY2IZsxdOM7NYSqKQmABGY1qYT4kZzxcEYzrKuJtkkzdGw0agjjSsPHS5bpWGVULkyMWRUh8i7BRTl%2BMWWW0gz5jOjYVF%2FjqkYubgdq240r%2FJz6ZEVbhqIbeAr1zAfcsn%2B39Skwe7AvJAnHcQUsoC9BakmD98APjF8nvQPQ%2Be%2BJT2dvp0fpy26QRUrBR%2FrLwTfg9r3iJlK3Ccf%2F6YXsEakFeTVbk1y54gNBEtL4vYKVUy%2FSQ%2FTazYJZYvI4qhtsR3ZrxmY7zQj3i9GAOmhlnFCEL1w4ww7Z9Ct7eEniEFUatI1OIYsC%2BAZM2S3%2F%2FCoKimhUKjvqnmPY3lC1qdPadYHSSaTEY0ZEVCUTiM6m0kwdbV5t%2Bkx1DAADQnguCR9WGOjA6ybe8rMcMsb8oSy56IM7EMMEicYLO1x9LLaqy1qSe%2FUkFicykZuGQGmP4CNmkHYlo34Bg54CczdbJ400oknn0MiBdi%2Byfv9kXnHN9nxdD2ePTLz4sA%2BQviP%2BD%2FRHEHNDEDvhyKRp%2BfnGw43hiCtvYbkqGu%2F0dS8k6Z0owO4zJGVrIW9TCnv97CBjqkAWb4RlkbGnoVWjaIVySEWeBggHPhAzvZomyNZF34Un87mWTMVOcNkYxaJyJrD1a6GbA1kG5qV1bR5%2BuWkkNY7Zm1z4nvVY9qMXGkSuZsdYd4Nk5XJvu635fQV9RD66w7VGZtPSMqno7lRlZXGV6QQ7lwhRo686gZirO1dQbyubV4c9Ud3wtjzoBnoarQ4780zt9GBAE3UAVpYoEkk6Z10TVxBIga&X-Amz-Signature=5186f548da52206d598e9892ab18f3ff55b9d7ddc791f18518946d8310ec9d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OQZJQV7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFfpqzDMZ4FyFGw5%2FL9S5KYCbUPQ8K2Fzi%2BP3j%2FHeLwAiEA7A3ZaKpEELuIhpNiPotnrOKUW6iYX5jLHa3jpawha2YqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoEldbVH5hnO%2BfL6yrcA3haujPFEs7T2nFHt%2FdTTFmkA0SZE%2FWGvOJv60b%2BXDzKROzt%2FWcqOuOBDiqIeWWu1kNi0YB9e2q0fO0X2%2B8LZDKOo9I7I4LLKHds1mlGM%2BShF08uC40OR%2BmLtL44HOEgX73WZFQOYtN1WuC32K6lJFUsMjJrg2nqfuHzXdknnwsS6HnRTz2bueS3oMqD8gqK67igoACgWGXqlys%2FjuxGyAKuYPRtNfKETOyPD0%2BoDdF%2BgI%2FFd3f5ccrlJbuE%2Fkm6GxIrU8eUpebxOM9cxCXpcC98hQxVgbU4IvTFWOD2Ca%2BA09AkVzMHTcROy67wQb6t0sU6wszOTX9ufDVxH9BqqdiV6oVFxyFRlebfGapMZb2oYpVWV0R0A7x58gxLsIUfOEVilrTKtN6CSU2U8CfnbTxloVgTX9A5cBB2ApkTkDj8AY%2FlCMHjLXld%2FGcIwdqICwpAoOOuJVu%2FXyDg0IOFaHv4wysD1Tk0slT5xiw0jUw6uml%2Fw3wLF1hGwMtj5bJn2nh%2Fohj5x6q4yUhl5WyIgeOUyQrJkpmsqvbCJVzu1klMSy1LHwLMZtt8VRgHKij1Cg9VdweIPQykBHJhYs%2BccqjYGroJxI%2B5JVULJ2%2B98ud53Ro7ouVlF6fBM41iMLPJ3sIGOqUBLAUh30kZEO574WnAcol6qv4lKvv2Ob7xiSjJoJhnnrBlWaoRIcPY2hdftq6MMIqIP8LkmhQU2TY494V%2BQquZHD%2BRyNAxzc9Tn5OH8K%2Ba25373LSpyNrMRJLL5owJgkHHSfn5Izc4IPo8xydF1VIRQ6g7jnxsgym0nQ9M2tM0lGe8%2Fr53RkAOGKOUYRxR8C4iva23BrIWHX5THJcIhZNY73Lanbt6&X-Amz-Signature=d54886f57dbcc2c5b8894095825a2ee4f0cb49b1b6e6ca2078becc95ad0fda94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5AU3DI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIFPAwDzGbHBuoaMc1B0MB%2FJhthdT19dN8PMXWLWqXDKVAiEAqHJ8f%2B8qLPwhINIU2k23P3nr%2F1QDLxf%2BMz8CKA1V3voqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLKy7X0b%2F8WQWqt2hCrcAw5Mz8Nimbp2n2ifO%2FvU4j3GxXXdSVz4KdXJJ9wngKpiCHSo8Hl6Yxi0mtDCvY4m%2FGDF0aklBedVHLXg9k8ZVum3LxXWa07aHzX1Dm%2BoUiDI40pzk%2Bf9ndhlEsbD0GWraOSmcdCWmqInhFkcVnCAqCAI3lJ4RqFp4lYmLx0OTmeWkHNw25cwkn0JcvfyqxtmzFKp6IKUMOCIW1pkIiv%2BpcFuKwFWSjuLAHkQ2sy1FP2Zrk1%2B02ZzICqEW0jY%2Bcak0NQ2oAU6%2FXNRBZ2%2FxwO%2Fl4tGlKJ6NX6cKRZwtwaczIRhyJufbvLZw2X63OK5hHZ6xaUnH15egXJneOQzuJO1PFbo%2FZiMuDdIRyNTCeKOjsLEOnU%2FoWGmmTAqCO285hYooe3ZZYYlWLbGULNY3ZP6FFOgYyVMR%2BYqRIGoVxIr5shXPq%2Bky8tAy24756HMihzqAcNoe65LdEkrsL0Ofd1k8JtZpfr3N82epbqw0PohuGBzU2qm43%2Fa4QfM0Rn0HNS%2BviwbJOStruu%2FDyJZpCLdDWvCSY2trpwhf5rSx6ptd%2FgCv8N5EZBALCCSF55kf9IwO%2F1EbXa3EfhrfErnEGrYxa4XZdqiw4xzro0EQgv8cUlWWygKu7Du9anRxfm0MJTo3sIGOqUBhDgGSWYnWtVyq49HDXTamV5qh5LFYve57KG2nsQuIpGH%2BoSfpanWqGQXf3T%2Bo6uJPEsRu6CNFQV9%2BvCyAUzfiiqqg3z528qt4zzRuj%2B77H3mAOMZAmhRwb3fYn4ktZKC0GLlRAB%2BIWIiOlknhQtbjzW%2Blmb5R6j8fmOJZ7%2FxGrNe%2Fwb1Mba%2FrI%2Bgtr8Z8zcdhiY5aBDjwc2ecb%2FneUiM%2FAjTqrPq&X-Amz-Signature=8169715d0252189d843e9f64d5daa1ed47bc38f2d2690b078b873612f15935e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3SYHJTF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8DOghIgHXOxlfWnaU37L83i%2Bi3ssBDlaF4HGmW2rBgIhAJWSxyfkpqTQXplaW8zijRIZtXXMLxafVOXwT6FJQKiEKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy9JLXz37kA3rwLV0q3AOfSxNfZ7FpKwtdoP4keqnjClRLt8bHlsMRdC5AJnYHkILCcK4sWNNRAj7wMpXIkWwTEFSkzkCTY2IZsxdOM7NYSqKQmABGY1qYT4kZzxcEYzrKuJtkkzdGw0agjjSsPHS5bpWGVULkyMWRUh8i7BRTl%2BMWWW0gz5jOjYVF%2FjqkYubgdq240r%2FJz6ZEVbhqIbeAr1zAfcsn%2B39Skwe7AvJAnHcQUsoC9BakmD98APjF8nvQPQ%2Be%2BJT2dvp0fpy26QRUrBR%2FrLwTfg9r3iJlK3Ccf%2F6YXsEakFeTVbk1y54gNBEtL4vYKVUy%2FSQ%2FTazYJZYvI4qhtsR3ZrxmY7zQj3i9GAOmhlnFCEL1w4ww7Z9Ct7eEniEFUatI1OIYsC%2BAZM2S3%2F%2FCoKimhUKjvqnmPY3lC1qdPadYHSSaTEY0ZEVCUTiM6m0kwdbV5t%2Bkx1DAADQnguCR9WGOjA6ybe8rMcMsb8oSy56IM7EMMEicYLO1x9LLaqy1qSe%2FUkFicykZuGQGmP4CNmkHYlo34Bg54CczdbJ400oknn0MiBdi%2Byfv9kXnHN9nxdD2ePTLz4sA%2BQviP%2BD%2FRHEHNDEDvhyKRp%2BfnGw43hiCtvYbkqGu%2F0dS8k6Z0owO4zJGVrIW9TCnv97CBjqkAWb4RlkbGnoVWjaIVySEWeBggHPhAzvZomyNZF34Un87mWTMVOcNkYxaJyJrD1a6GbA1kG5qV1bR5%2BuWkkNY7Zm1z4nvVY9qMXGkSuZsdYd4Nk5XJvu635fQV9RD66w7VGZtPSMqno7lRlZXGV6QQ7lwhRo686gZirO1dQbyubV4c9Ud3wtjzoBnoarQ4780zt9GBAE3UAVpYoEkk6Z10TVxBIga&X-Amz-Signature=656fe2c0f72fecc1eee6b96af5a8b8cf4693cbaa46a3289d1793194a69590151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
