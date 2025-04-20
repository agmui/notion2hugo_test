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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYPPTDE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGPCOO3IHLKDnr81VFKhrDjfD6RD0FsLU0fgjLCPAzMaAiEA9TNHNAgf0hci5xPJJ21xEQ9wII6jDjc55gMJkQWwo48qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuWPsa0s%2BgKgRuLvCrcA9jqsGBb7om0gwMiHg2dZ8K0K23ihgrChkhdByG9dXizmv1oY96btjPGM9cR89kLvMMBTcwoYx4RxwA7AIPSMi6Ky3G4q8TbNdH1GomSxzRHJfTcEtZ34kOeFBOArB0KcA6FPyD8fIbi2acNMjz8BszR54VwEBbgUE4MipE5e4qmECIEFw5WhYHEHzXLbDKhmDscIBRewGS0D5uBiA3AWF9NCMwSspvMtQBK6HViczkv9RnEf7%2BycN5mrwZvPq8pnBGN7I4YOEz4yXnN7yP3V1bKpE%2Fyy%2BKSZNT6WNwVloZwUzqDLs9khPR0yURRO5r8AtH2M%2Brz4RMwh%2BcFfily5l9GVIBXGdsrOvfZywBqp%2FABdtQKcWHaI0wmHcR95qtYwUVSMFYbzLzInjDeYZEqE1g87Og5uIf15v8xp0zjdX6nP4sU5Tdwoa9F8QNICNOfw2NhVnj44BvQbgs8vVk%2F5yqOTHh3nVVjyNGattLFp2AIFR1cJwtrYuM%2FeIMsgwACV017YFizH9jFjF9ROvA730muCDkk2uU0zL1pD3lx4zLJAcKueYRV5wQoBRJ4oT51zwzqImhR2f0Fr7LpdEzHZyK3lvvceXtKfX76LoXvJ0msqOoDD4EJsKZMI%2BrDMKzDk8AGOqUBOrRVPgIQsf4zizYOBQKOq0fu0muNkl0D%2BpCdDLuYhYHdTGFR9ne3rvDWo%2BTL7FufW%2B7Kc1nJ0sIUfbDMfDvqQAZdHLLfomgYeLtDzST%2BGgi4uQWEzZBr2DdIoFfush3eOzlYkr6kegULYf%2FLA2AMhG6M2DVA84nEp5A63IbcuKDzMkb%2B8736BBJgZwjFId4D3ptBtn315YQ8mr9%2B0sdGwJqTL%2Fq8&X-Amz-Signature=3b653581f34f2224aa230a635f6a80388850d332f69f728966a924803691a696&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYPPTDE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGPCOO3IHLKDnr81VFKhrDjfD6RD0FsLU0fgjLCPAzMaAiEA9TNHNAgf0hci5xPJJ21xEQ9wII6jDjc55gMJkQWwo48qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuWPsa0s%2BgKgRuLvCrcA9jqsGBb7om0gwMiHg2dZ8K0K23ihgrChkhdByG9dXizmv1oY96btjPGM9cR89kLvMMBTcwoYx4RxwA7AIPSMi6Ky3G4q8TbNdH1GomSxzRHJfTcEtZ34kOeFBOArB0KcA6FPyD8fIbi2acNMjz8BszR54VwEBbgUE4MipE5e4qmECIEFw5WhYHEHzXLbDKhmDscIBRewGS0D5uBiA3AWF9NCMwSspvMtQBK6HViczkv9RnEf7%2BycN5mrwZvPq8pnBGN7I4YOEz4yXnN7yP3V1bKpE%2Fyy%2BKSZNT6WNwVloZwUzqDLs9khPR0yURRO5r8AtH2M%2Brz4RMwh%2BcFfily5l9GVIBXGdsrOvfZywBqp%2FABdtQKcWHaI0wmHcR95qtYwUVSMFYbzLzInjDeYZEqE1g87Og5uIf15v8xp0zjdX6nP4sU5Tdwoa9F8QNICNOfw2NhVnj44BvQbgs8vVk%2F5yqOTHh3nVVjyNGattLFp2AIFR1cJwtrYuM%2FeIMsgwACV017YFizH9jFjF9ROvA730muCDkk2uU0zL1pD3lx4zLJAcKueYRV5wQoBRJ4oT51zwzqImhR2f0Fr7LpdEzHZyK3lvvceXtKfX76LoXvJ0msqOoDD4EJsKZMI%2BrDMKzDk8AGOqUBOrRVPgIQsf4zizYOBQKOq0fu0muNkl0D%2BpCdDLuYhYHdTGFR9ne3rvDWo%2BTL7FufW%2B7Kc1nJ0sIUfbDMfDvqQAZdHLLfomgYeLtDzST%2BGgi4uQWEzZBr2DdIoFfush3eOzlYkr6kegULYf%2FLA2AMhG6M2DVA84nEp5A63IbcuKDzMkb%2B8736BBJgZwjFId4D3ptBtn315YQ8mr9%2B0sdGwJqTL%2Fq8&X-Amz-Signature=214e4af08e1c22b935e8d305468a0b81cf720731b3057bc0601f2943dc7bc255&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AXHNTE6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHNZ14hQ5g87YJIFdF42OCEYFsU6iRMNR5f%2F0%2FCkXr%2FdAiAW7CQfpRSjQ0YtMZm5Ta2zMvDrmoT%2Bf4MmwuD8kXRV7CqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiyahsBswcVxmaVDtKtwDhY%2Fi%2BgOt882QwM2Gyhc0dQSq%2FRWbbrfLzCnZBFm3%2BbzsSS4e5ct2dp8fLv4jiBvWJzuNmzdQZtk3zBiLBfOhwIp4F4QSRMEr91%2FGSUPnAHYTUIlX017HcBLD8vO23bPaxhkVcFDt%2B06DqV2Q6MwxxM8yv3YZjgXOaZxxBN%2BjJOt%2Byge9cX4YMhTX9ORgSR6YTdwwYszrPG67sDKTpAlhX%2BAVjkhXbiUq7EbDDwvR6nQlMayD2twXZuCn0m4bhy%2BwwnnG2MEalz61SD4DGtJo3MZoa8BAv8%2FXVCvsHGAY%2Bx%2BCzEHaxoOOBKXJXD9JcBqDGix%2F4mZimQ2nuNDT2IrsmoeIQDu6URWh81LGmfRevcJrwhmluo%2FW2fmlRp3wwLTrtyPoH%2BEx2icwpXgPZM6GcAv36RvXoVKZlHyhk4zpIwyNeGavwmx%2FTgEv9yYnrATfQNUx1PoijxeWSTFuDKzPcbe0PNouycHgs%2BUdQmsG1vaBV57a%2FiOdtgOGzkVNBacwKDwpi2MLG0BK3copoc6R7VcQjPFK1bA9K%2F77qY4COaEw6vH945KOg0waWSt2usKx%2B49%2BnuDJT5xreV1UrKp3FoMDoM3KEv5iAPzDZwtgsk%2Bi3cjI6pch9%2F4xzp4wlsGTwAY6pgEcs%2BYTB1QrgaUDJyaFC8Fp4vBUq03MSZD90M4akkANUf1jrPoHyCgW5UKJnF9oDbs3hRjMJ8ZJTOBGDWBa2Gdc9GCLUPzpSBuQdqFakUgpdosTXywIbOglUh4q2OA7E%2BhMkmhsqvc5f5vYxuYPZeAg%2BZOG3W8OIismL5bsALy2zf4KnuArJV79aSKDYcP8JiYtkonSDzD3T1LY%2B7hVnmRzxZyBZ6HX&X-Amz-Signature=83ef01ef16596134d250a7f2e8b5f0e90ede4b0521e1f3856f51351f84a2e1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7XBYSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBwl7hGEBeZXAL1BqJweNvU0tLaAG5vOw4%2FH4V6yPdRVAiEA6FpnJdJ18dqajGW3MddS8NXONephP3qIaZNGR1PXotEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOA1%2BramehGtVBR8ESrcA3F%2FDbemHi%2FSaPZaroQagbk8iKHsXrC9KJh79MOmc7r0phYJJLaAcCDdRyZASUD5Hab1JopL9xOXiA7vUSAwtrcPG8%2Bp3%2FfW3qk73PgeWsX6SLhJw%2Bg%2Fa4oOC1J7NGLEmPtz5ma3z%2FwUheOfy17K3a%2F2MAZJwIiMbEzUP%2FA69TR7uE21Pf7wa3Z9r6qH%2Fv59M1ZwTJVGwd4WTQyOktIaMRTCAYPLCKsO8zhKe9NQs4uf59P4NeA%2BiBoqcjt5iml55UNhL6GRFfENzt4qS0IyHPvh4qe%2BAWCAGdDMMNGcTlYG2HtanETzGGz2yY%2Fnc9C%2FSKSrgygiImTMEZgjkTnZEqmSgVRgDgvonVa%2Fl%2Fo0bmfDnpJmURVhUznWpfb%2F6WUf%2BQzv%2FPpaq5f%2Fr%2BoIszNwD7mgWXif3Dzkue0e8KCdAbXlxEN%2FO%2FCe6tYv5HZs8JP2DVgkMyvDGyh3dOlWh%2BE3%2Br2R6gUF%2BJlHWuUGvw9VhlAIMZVO%2FOrox%2F2iLPlyMkF2KRr0r1j9mC%2FMqD33DkImZeLA78%2Bl5U%2BzKihBaJ7HL83oVFHB58nvrvtlVWTRnqd3Bv1O1%2B4UKdKS4k2dkQAqoZFzXjox5jmdEa6ngCaBbyadFW5m0VBeSsTlRQCoMPXDk8AGOqUBRAs6MwaM2JGOvyAp1lJq1YqnT0zI8O1OTM24QfatZs7rPtDCmmOrC7BXlR3cc%2Fz7IPW6dYXnARt87YYO%2B68yGUEjOkj1LGx1f0IlNJ2TriNkxip9PJE368T4flbP0GDx%2FIQ%2Ft6ak9NGNpYktvDs1yVnlr%2FkuD2GJVyw5Bi6JqAteMWyEQKqEzNiiMSUnvnnovabMlhG3TB3Y2VTJFDabSWHT23R2&X-Amz-Signature=f1c12aec520c273c74aafe550d18fe1363740caf211bf08b6e80bbb86a79a1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYPPTDE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T150650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGPCOO3IHLKDnr81VFKhrDjfD6RD0FsLU0fgjLCPAzMaAiEA9TNHNAgf0hci5xPJJ21xEQ9wII6jDjc55gMJkQWwo48qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFuWPsa0s%2BgKgRuLvCrcA9jqsGBb7om0gwMiHg2dZ8K0K23ihgrChkhdByG9dXizmv1oY96btjPGM9cR89kLvMMBTcwoYx4RxwA7AIPSMi6Ky3G4q8TbNdH1GomSxzRHJfTcEtZ34kOeFBOArB0KcA6FPyD8fIbi2acNMjz8BszR54VwEBbgUE4MipE5e4qmECIEFw5WhYHEHzXLbDKhmDscIBRewGS0D5uBiA3AWF9NCMwSspvMtQBK6HViczkv9RnEf7%2BycN5mrwZvPq8pnBGN7I4YOEz4yXnN7yP3V1bKpE%2Fyy%2BKSZNT6WNwVloZwUzqDLs9khPR0yURRO5r8AtH2M%2Brz4RMwh%2BcFfily5l9GVIBXGdsrOvfZywBqp%2FABdtQKcWHaI0wmHcR95qtYwUVSMFYbzLzInjDeYZEqE1g87Og5uIf15v8xp0zjdX6nP4sU5Tdwoa9F8QNICNOfw2NhVnj44BvQbgs8vVk%2F5yqOTHh3nVVjyNGattLFp2AIFR1cJwtrYuM%2FeIMsgwACV017YFizH9jFjF9ROvA730muCDkk2uU0zL1pD3lx4zLJAcKueYRV5wQoBRJ4oT51zwzqImhR2f0Fr7LpdEzHZyK3lvvceXtKfX76LoXvJ0msqOoDD4EJsKZMI%2BrDMKzDk8AGOqUBOrRVPgIQsf4zizYOBQKOq0fu0muNkl0D%2BpCdDLuYhYHdTGFR9ne3rvDWo%2BTL7FufW%2B7Kc1nJ0sIUfbDMfDvqQAZdHLLfomgYeLtDzST%2BGgi4uQWEzZBr2DdIoFfush3eOzlYkr6kegULYf%2FLA2AMhG6M2DVA84nEp5A63IbcuKDzMkb%2B8736BBJgZwjFId4D3ptBtn315YQ8mr9%2B0sdGwJqTL%2Fq8&X-Amz-Signature=69ba98f863990edf780093a5509ca3146b2f1096aeb966b63162d548630566f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
