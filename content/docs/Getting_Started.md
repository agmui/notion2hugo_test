---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-18T08:13:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-18T08:13:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPRQ7MJ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDExB%2BO4plBA3zbUOBf%2BQDHMYYKX51BCEffvOqmUH9v4gIgCYXuETxH3kVKTNKPODCxLhP2PfjaHH5Z%2BPsYg6OIEYwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfTQCVVBICL%2BRTzKircA6iJ81fkYKTX8w8uVjktIsuupr38KRRMjCLlLsZHDX%2FJo%2Bs6z1D%2BHqOe%2BIhu4M7HyoAgGg%2BCMY0hzvHVXWqRSaZ1uWx9ptDIHtymM4GoxGMXkJBEbsmTVmSaH%2BpDPmdbXA%2BzfxYBeoBsXjqJ7px6tLA0VFMcLYB%2F6gv7yGluM8D5pFf749VSeA1vLAZjI2giLxWkJeIp2U7PmbdBsqe0TqwQpOjHnQ5OM7fG5NMQsIaleE%2B2j3W6RsFlU8Fgpie3AU4AevT1OE32om46%2Bs1doM1rIQGunckHLxsQcIWySUSwP%2FHpkwmmJRce80H3zI8joa1igUVz1PUcjqpaJyHk3grtFFTNRq3mdNZKgfFKZHFBNwtOiNRDJCLmZGdYYnOpto9EgxEUTEH%2Bd3HcbWPNJMb4aGKn8um30E9Af%2BIcLNF%2B5SHa6YW1LZnI9%2BJhinfAe149d6lJh%2FEpvqnuFKrORjtLgerBYC2W1EeSUUMbemwwSMordRH5rvl4nSTCwZn0%2FL7LxT5kv%2BJTspl0VA%2B3f2mj4DL9Zq1GXrTadOogSuD0Dk4IB%2FDxtYMNRv0Wc7agJHAlyHHTVEuIFd7uF5o5XwqGVKQO7UfjiWEZA7rNJ0tuNO7u4bCJYiNssJoDMNb4lcUGOqUBjx0Cbhmum9gksyXngd0GemoEbOu5tmhOH89VvzyMBpJJ9oDMPvmZHxke027W1PIrsnqXIYtYI9OX1Iv7MI39OxTBLAGKx69eHvx1uurFKSMdyhRnu5c5hR573kjV3SDml0o7qIBa43NXMjLZKlvohajxiMcqhmXCp8QYNLemPNPsb0EYtnTREob9h%2Bdb26cd1QPxeKyO1DSKn4D4bSsvcpyP9R7w&X-Amz-Signature=a923b7a22e5bda0688c903420ccea7fc8c6a2b9adda4cbd183956cfbf5f101a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPRQ7MJ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDExB%2BO4plBA3zbUOBf%2BQDHMYYKX51BCEffvOqmUH9v4gIgCYXuETxH3kVKTNKPODCxLhP2PfjaHH5Z%2BPsYg6OIEYwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfTQCVVBICL%2BRTzKircA6iJ81fkYKTX8w8uVjktIsuupr38KRRMjCLlLsZHDX%2FJo%2Bs6z1D%2BHqOe%2BIhu4M7HyoAgGg%2BCMY0hzvHVXWqRSaZ1uWx9ptDIHtymM4GoxGMXkJBEbsmTVmSaH%2BpDPmdbXA%2BzfxYBeoBsXjqJ7px6tLA0VFMcLYB%2F6gv7yGluM8D5pFf749VSeA1vLAZjI2giLxWkJeIp2U7PmbdBsqe0TqwQpOjHnQ5OM7fG5NMQsIaleE%2B2j3W6RsFlU8Fgpie3AU4AevT1OE32om46%2Bs1doM1rIQGunckHLxsQcIWySUSwP%2FHpkwmmJRce80H3zI8joa1igUVz1PUcjqpaJyHk3grtFFTNRq3mdNZKgfFKZHFBNwtOiNRDJCLmZGdYYnOpto9EgxEUTEH%2Bd3HcbWPNJMb4aGKn8um30E9Af%2BIcLNF%2B5SHa6YW1LZnI9%2BJhinfAe149d6lJh%2FEpvqnuFKrORjtLgerBYC2W1EeSUUMbemwwSMordRH5rvl4nSTCwZn0%2FL7LxT5kv%2BJTspl0VA%2B3f2mj4DL9Zq1GXrTadOogSuD0Dk4IB%2FDxtYMNRv0Wc7agJHAlyHHTVEuIFd7uF5o5XwqGVKQO7UfjiWEZA7rNJ0tuNO7u4bCJYiNssJoDMNb4lcUGOqUBjx0Cbhmum9gksyXngd0GemoEbOu5tmhOH89VvzyMBpJJ9oDMPvmZHxke027W1PIrsnqXIYtYI9OX1Iv7MI39OxTBLAGKx69eHvx1uurFKSMdyhRnu5c5hR573kjV3SDml0o7qIBa43NXMjLZKlvohajxiMcqhmXCp8QYNLemPNPsb0EYtnTREob9h%2Bdb26cd1QPxeKyO1DSKn4D4bSsvcpyP9R7w&X-Amz-Signature=7f7ed79635ca5cafc67c6595d947ba949355f6e4075ccff6abcac2a0ae98e502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPRQ7MJ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDExB%2BO4plBA3zbUOBf%2BQDHMYYKX51BCEffvOqmUH9v4gIgCYXuETxH3kVKTNKPODCxLhP2PfjaHH5Z%2BPsYg6OIEYwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfTQCVVBICL%2BRTzKircA6iJ81fkYKTX8w8uVjktIsuupr38KRRMjCLlLsZHDX%2FJo%2Bs6z1D%2BHqOe%2BIhu4M7HyoAgGg%2BCMY0hzvHVXWqRSaZ1uWx9ptDIHtymM4GoxGMXkJBEbsmTVmSaH%2BpDPmdbXA%2BzfxYBeoBsXjqJ7px6tLA0VFMcLYB%2F6gv7yGluM8D5pFf749VSeA1vLAZjI2giLxWkJeIp2U7PmbdBsqe0TqwQpOjHnQ5OM7fG5NMQsIaleE%2B2j3W6RsFlU8Fgpie3AU4AevT1OE32om46%2Bs1doM1rIQGunckHLxsQcIWySUSwP%2FHpkwmmJRce80H3zI8joa1igUVz1PUcjqpaJyHk3grtFFTNRq3mdNZKgfFKZHFBNwtOiNRDJCLmZGdYYnOpto9EgxEUTEH%2Bd3HcbWPNJMb4aGKn8um30E9Af%2BIcLNF%2B5SHa6YW1LZnI9%2BJhinfAe149d6lJh%2FEpvqnuFKrORjtLgerBYC2W1EeSUUMbemwwSMordRH5rvl4nSTCwZn0%2FL7LxT5kv%2BJTspl0VA%2B3f2mj4DL9Zq1GXrTadOogSuD0Dk4IB%2FDxtYMNRv0Wc7agJHAlyHHTVEuIFd7uF5o5XwqGVKQO7UfjiWEZA7rNJ0tuNO7u4bCJYiNssJoDMNb4lcUGOqUBjx0Cbhmum9gksyXngd0GemoEbOu5tmhOH89VvzyMBpJJ9oDMPvmZHxke027W1PIrsnqXIYtYI9OX1Iv7MI39OxTBLAGKx69eHvx1uurFKSMdyhRnu5c5hR573kjV3SDml0o7qIBa43NXMjLZKlvohajxiMcqhmXCp8QYNLemPNPsb0EYtnTREob9h%2Bdb26cd1QPxeKyO1DSKn4D4bSsvcpyP9R7w&X-Amz-Signature=3b3ceafe2d26d41dda06babe8b639f621fdc4436510a52d10d7f42262ae03fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVW2HUF%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzB2O6166PPS5VpuphDi5oiDC6Fq5sEOnYFa00hiRaVAIhAJ2Szf6v%2B9Klb8wtNPdsQjCelUkKrt4NaBa1y9dPUYgsKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0bNdKBskJNdHr%2Fg4q3AN8CjPJ4OMMcZ62ly69P5FrRRhJAaj5hkYuEhs3uAXLehib6ftMXUWMkjcP%2Fx4VOw4h9mHQozfceEPTblogIkYICrCl%2FxQ%2BqifPT2PyrqRxgrY6SWf7FevBavkbY%2BsF%2FEKs5eoj8F9GkgHuPgAJptDU2%2BAJb%2B7lJib0X7D4CZj0JZk%2BfpeYIbs6T2VkjmZhwTdC42LolAznKb6ud7M6iTuAyQ%2Fmotsh3C50iiUCq8qCWXiOT278YNr9d7fa6xtbljAFv1jEdy%2FsDLGEn18KkwG4hLZOkTWK1UUEKv9u11lbEaAB6oUJV%2BBFvS3MH7nDFSO07b2buKth%2FTgZpMSoyq1XPQ%2FJzfu2PEH3RxFgClkR3SD0428CAq70el2hulwzMrzuows44kwvNK6hgofFG8QcF43ow3wpijd%2FRJZ54rp0GqkLhdsW%2BW1M0beywwqVchdoI1wFLTBGm3i%2BmHXoVneemsU%2BWGJyt98fDmbLrxI8sSLZqrakqkuWr%2BZqEpd5cPxB%2Fc7iND8raOHJevuiGu5Ki6uAl1%2BVPSd%2FJPaNkkLkgaKsGAziEv%2FmTC%2BSNrNgLO3SV1WTrXRXXyIDN1sXYHb1DogDpug4z7uP2lXEQlFV%2BOmW9cn2vG4Yx7WcATCy%2BZXFBjqkAcMghS2JklqZJH9zsYWTyY%2FLdz87vWyBW6wPAVXAVCQVCLm1fXhUt%2FpfYQ3EmXuQ9EPtOpKfgLlZuLrXjdBOmNVlqWRShShKo0vNUnRHNXfSOgTREVyiJsFBxkBfbVGcvqAsAUcZ%2BxhmUBTx25n0WFvkPM2X49JWVEjDLRpd%2FulvI6qtgBvsjLgseHl4wY1RsvXlOIVXpgJCvOv%2FRuzR%2BFA9oKY2&X-Amz-Signature=0749ff310e08895614e2a867625ce32bd86f72b90b920bcf17745423d36b14b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CDVLY7X%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQZaBreffo1l4ZfRRjwrduJ4LREJe%2FTkF8zCoxfXxAPAiAA1%2FEWOJJLm1QYdo3psRjP5oFwfciUMKs57mmpBxDLvSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML4FoQmxlCAxis7VeKtwDyus%2Bj8KaWQuupkoeJIBjF0WjA%2B78BvrJ1IZb2Oh77sSCX9sCZQ5P76eeumQpf8j5YELZag4s2SUyKKN%2BU983c9w8r2Nxwhmyg1V77D0PAuFAV40WoSvqGclRXWIMNQVHaRsPJHrx28cADWbQnGRScvNFPiefoCloaGqPBnEBqkAa45%2BQ4MIepnoeurl1aH0fcdgWX21PdmUoCrEvyw3A4LuVF3tLA72GPLVI0C%2BnRIlN%2FsckuQ5N%2FzuqvUYDk1SWipBVcDlkCZOFCmVWkSUQRQjklORp3Yod5u0bekOylfW2TxtzyehgUYfHezJVuASC9N41fahvSXBUG2dJpEMRyEyhHLQ9Z9G%2FLyZdS2CxNLMB%2BeOPFfV1A2kXV3vtujpKH9esmkxwiwXyoklYfS%2FURZ3PvmPqDBZeTj5fT2y%2FCtArNRSCLhg%2FNy6Q9bmtswy%2BlX7AeJ2%2FYpjX3y0Gka9hUKCoOrVhSTD%2F8%2BF%2BCD3QLbxDvZyaYFt9ndDUmeEPxHHJJaLHe7MOPlPgF4rHxY3%2Bcvx%2BtNs6IYQNP149nZrPMWbOnKYzscpXOrtEI38q56Fzbu6LawZbM9NY%2FRjdyZ2KHzONGYdPm9ewt93L7vXHrUkzN6r8hP3Jfhu%2Bnesw%2BfiVxQY6pgHbeYdvj4vmzdGIo7VyRSzWSNNAOC4LVycbsbIruuGpxXxyu%2FeE17VM1Sw3sbEov2faul4kXvboVSNaL6cqijX456HCU3ibrb%2FCURIEBF0%2Bzi0TOVknUzwe8EoBfEcjbPjHm%2F%2B0LvAlCgoWXBCOiDbI0h9lJBzKPXxmkiDBL5y2s6n2MKQuoxOB79I4Z0IbDkwMSxddg0JfDkgUoGfOqMQE8Xc2NlZP&X-Amz-Signature=72d852af3e5b79b1d62fa0292ac7aac9811bc66c427d9b5edad52931e3cdda30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPRQ7MJ%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDExB%2BO4plBA3zbUOBf%2BQDHMYYKX51BCEffvOqmUH9v4gIgCYXuETxH3kVKTNKPODCxLhP2PfjaHH5Z%2BPsYg6OIEYwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfTQCVVBICL%2BRTzKircA6iJ81fkYKTX8w8uVjktIsuupr38KRRMjCLlLsZHDX%2FJo%2Bs6z1D%2BHqOe%2BIhu4M7HyoAgGg%2BCMY0hzvHVXWqRSaZ1uWx9ptDIHtymM4GoxGMXkJBEbsmTVmSaH%2BpDPmdbXA%2BzfxYBeoBsXjqJ7px6tLA0VFMcLYB%2F6gv7yGluM8D5pFf749VSeA1vLAZjI2giLxWkJeIp2U7PmbdBsqe0TqwQpOjHnQ5OM7fG5NMQsIaleE%2B2j3W6RsFlU8Fgpie3AU4AevT1OE32om46%2Bs1doM1rIQGunckHLxsQcIWySUSwP%2FHpkwmmJRce80H3zI8joa1igUVz1PUcjqpaJyHk3grtFFTNRq3mdNZKgfFKZHFBNwtOiNRDJCLmZGdYYnOpto9EgxEUTEH%2Bd3HcbWPNJMb4aGKn8um30E9Af%2BIcLNF%2B5SHa6YW1LZnI9%2BJhinfAe149d6lJh%2FEpvqnuFKrORjtLgerBYC2W1EeSUUMbemwwSMordRH5rvl4nSTCwZn0%2FL7LxT5kv%2BJTspl0VA%2B3f2mj4DL9Zq1GXrTadOogSuD0Dk4IB%2FDxtYMNRv0Wc7agJHAlyHHTVEuIFd7uF5o5XwqGVKQO7UfjiWEZA7rNJ0tuNO7u4bCJYiNssJoDMNb4lcUGOqUBjx0Cbhmum9gksyXngd0GemoEbOu5tmhOH89VvzyMBpJJ9oDMPvmZHxke027W1PIrsnqXIYtYI9OX1Iv7MI39OxTBLAGKx69eHvx1uurFKSMdyhRnu5c5hR573kjV3SDml0o7qIBa43NXMjLZKlvohajxiMcqhmXCp8QYNLemPNPsb0EYtnTREob9h%2Bdb26cd1QPxeKyO1DSKn4D4bSsvcpyP9R7w&X-Amz-Signature=5741da7c095751b37aa9019c78dfe86a18293997c05670271552a4a0855b693d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
