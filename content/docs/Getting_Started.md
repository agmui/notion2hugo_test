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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XMHDJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDj11kUl%2F7Clz3Si22BwVG%2F9SgO%2FGj%2BTEPu3TAHUjcZnAiAcVTir9aQcLHaRpGPnm3wu18vcLquQGsn2j%2BySzCQt9SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiVNWgT0iC23IUw8KtwDEk4SdmiulrACYpm2gEgs2YU9A7klwJ04SFSEPjJOM%2Bbfi5HMS4pksra0GbxYFx%2BDltgLI1BUQ0c7j%2BlqPaqlw%2FWQSvsyozaoCafKKpf715dxC1YSjbCK4GnG6csg%2FrqbLy2bFOiBRvMliFbiJVumTELzhtqVs5Nl8icLrntQgVfQsVU2X7rYVWmG6fklz4Y8pdVPDiEjrDtgWF7Mo4LK3UeLnENFNCE1CkbEiRDZjjVeQQtJloY2U2jaMuDYuG%2Bh0TOm3mvIsqRTsjEw6zOgaW7E1lZlCpm7woQXhx6u%2F7EK4hRf7gwFGQUHaQq32rbw6RYmUy2q51HBR%2FcXGvUcD0SUDS%2Bo4vYokZiFhe8QgxATDLaTSXUFGtfr5oohFoh0nVKWveSOAjCONtEsDygBDJCGyrvdlGb7n%2FBhXzk1Eulms3WOcVxt0b%2BgCAqTQ8AbedbqmEbMFG%2BdxYJhLJAayGbAKNGsEkP4Iefw9OnUBgaJGbspTHkWpwawhJJLO2T4HiByZz%2BS%2Fr1YkXeQY%2FNhUvxjHnC9Mv7erUxHrLj8WhixmP5%2F%2FIQpJ7luWRGWfnwpAP4EA4T4o%2Fcj%2FhLl91nB5D7%2FKNuOaBLRS1eq4kwgIo3AZm%2FhlkJ89bOj70gw1pmOwAY6pgFEy0tg1PVX7gfFRiwNz9jLc1Gxir53EVIvn3QSs3jsx0pitHaGQHWaNubFZSepW3W6lZ0b3rUCokI1VsRjMjF6fdNq4i%2FUc9UHsS%2FX%2BIhbic2cP7G16f9D%2F3%2BLVpTl18qNClrB6DKf7m0PAWlghneBt57aRkf8OX6fsBBqliEnTYw17pWNPvpz6olY45bMYDi2GwGBUL7aKMKIf1Yl4Ejrbq5XLGsv&X-Amz-Signature=657c27c4f186e7f8d6b73744a6de869b208501e6530cf8b3d8c6cfb3e0e028c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XMHDJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDj11kUl%2F7Clz3Si22BwVG%2F9SgO%2FGj%2BTEPu3TAHUjcZnAiAcVTir9aQcLHaRpGPnm3wu18vcLquQGsn2j%2BySzCQt9SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiVNWgT0iC23IUw8KtwDEk4SdmiulrACYpm2gEgs2YU9A7klwJ04SFSEPjJOM%2Bbfi5HMS4pksra0GbxYFx%2BDltgLI1BUQ0c7j%2BlqPaqlw%2FWQSvsyozaoCafKKpf715dxC1YSjbCK4GnG6csg%2FrqbLy2bFOiBRvMliFbiJVumTELzhtqVs5Nl8icLrntQgVfQsVU2X7rYVWmG6fklz4Y8pdVPDiEjrDtgWF7Mo4LK3UeLnENFNCE1CkbEiRDZjjVeQQtJloY2U2jaMuDYuG%2Bh0TOm3mvIsqRTsjEw6zOgaW7E1lZlCpm7woQXhx6u%2F7EK4hRf7gwFGQUHaQq32rbw6RYmUy2q51HBR%2FcXGvUcD0SUDS%2Bo4vYokZiFhe8QgxATDLaTSXUFGtfr5oohFoh0nVKWveSOAjCONtEsDygBDJCGyrvdlGb7n%2FBhXzk1Eulms3WOcVxt0b%2BgCAqTQ8AbedbqmEbMFG%2BdxYJhLJAayGbAKNGsEkP4Iefw9OnUBgaJGbspTHkWpwawhJJLO2T4HiByZz%2BS%2Fr1YkXeQY%2FNhUvxjHnC9Mv7erUxHrLj8WhixmP5%2F%2FIQpJ7luWRGWfnwpAP4EA4T4o%2Fcj%2FhLl91nB5D7%2FKNuOaBLRS1eq4kwgIo3AZm%2FhlkJ89bOj70gw1pmOwAY6pgFEy0tg1PVX7gfFRiwNz9jLc1Gxir53EVIvn3QSs3jsx0pitHaGQHWaNubFZSepW3W6lZ0b3rUCokI1VsRjMjF6fdNq4i%2FUc9UHsS%2FX%2BIhbic2cP7G16f9D%2F3%2BLVpTl18qNClrB6DKf7m0PAWlghneBt57aRkf8OX6fsBBqliEnTYw17pWNPvpz6olY45bMYDi2GwGBUL7aKMKIf1Yl4Ejrbq5XLGsv&X-Amz-Signature=bee4cfdccf68a8762490165452d64ea59384a9d1ec3dbfa5a267e7857f431dec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I3GGFMO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIAgdTCGNDgbafCSnKAxRjDpjnNFXmxKx%2F1btRkUD4S%2FHAiAzMdB4cqCTzzTwOsUupzLXmFLHWFrcUcDz%2FDhJkrpTASqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5Iib16py27Nj08NKtwDgkwbnIuWBQJiV56TnHEYxEl0yOSZYlZ1YF0mxruN0V5DOYvyffQpW9eU3RrhVILLI9LjcOgIZIreIvk2nk5tyDwzaPGcvsXW8CPivjBTNsThIqGWVSGKvW5Vl8EDgf9Fcm36WY60qOdKsbT06YvXgtcw9qJeEhuABrRfj%2BMrjwmfeFKbdQ%2BwDOXPeHD0HVLMjvKF2xs5Ihv6it5eURbd36JOgMBRroB%2B6F52WLGEVEpFBvZ2YemFkgPp5DVkC964AAklu6888Z61kLbQLl9JVsPtXhZBQkoRY6ZRKaUVm991t166DafIYhbnFSUP%2FyQs01w%2BsgRIHA%2BJF0PtMll3wwpMW5otgGHeobbQG6p%2FY9AOkgQRpj7GqAmY4H7ReYfKAYmUw73n7KOLHEgQCSdCyckF6L4Y26Jyvkp9KG9zFXnxp0o%2Bt6%2BeNn80Q42hBozD9YpuA%2FFJqm8T2LQ7AwZagEHCy7xP96usHlDOm3LRWa1Fa7BlOkK42ACke1lzeBqVjAPw5UYD4p6g0gAgmv8BPI3uwETgozcwCCt6ldKTf5dOcspVp9SPAMy9T8W4dvJ3zlHDgVX3Y6BHZaz0SMZkpUO%2FyOuKQmHdL6ufdaMOBf%2FlpblgGTKDhsZhu5IwgNWNwAY6pgFgS7lkPl9wIYS77ZFCldVmFAx7V7DjNeXwtfWgf4SymfApmlDmEmMge%2Fwv22g7LrUW4cjeJBz6X9FTxcILtFouYkOSlMZQv%2BHS2y5rVrT4jAJg6tddKrQ%2BKDI46Ep6GvR%2FBGo6aJh61WlhZLo6yb7YxkW5kdFAGxpKsjNHZIbgn9Gk8uXpKlwzBn1DrQzQIaIRhBAtKxxYUIARnmihKiqZ03pzI0D5&X-Amz-Signature=45096598b8ea44066186393ce3532b7cea87d2ddcda615950aec0f53964283bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQO2CQAO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDznySrT71cVFuy26rxukw8X2aySZk81hBOJgHFjLOp0QIhAJJYefVlUBULyK9XrjgpQ1%2BtaqyHI0dRmW8fgN9jvFagKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaUi5yCtiYh%2F9oNtgq3APh6ktAwGBeiC09TYMUD%2FOwASDA3zuAMMScV%2B160J9qmYZWutG%2F1QXp6IK84lrkggtoI4oW5gM7iuPeO3P7EevAH1pe2M846P1GDfNeH6AVaFwOwh6Dr1QMVQCXbwjG3kpuWUfHtY8rFRswrEolV2qKYDombGrapzlbnXkX52ne5zDT1Gp3OAvbi7418LVcAbEdSANph6g06m8UcaPYfSxK1O3ZovWLg5uqbQ%2BMAblKC7r7pyZiDOyYv346Cj6nr7JiF4PNFpj3y18jHGeb7o4F9ZGMThuFzEAFWCPF8y%2FqmjQ%2F76yb5BER1Hhrk0Cr7d%2Ft9PBpQ5NmWo8wo6wbVWA%2BQS1F0kBuSYKxuqXPaO%2BDsD4MlaHAC6f2oCUU9jKfzE7jdmO9qxygs177BSm%2BLVs9qoXwl2kyMk37wIz9ip0OHGYPAaGprqlUPNetgk3lH3faO5%2Bt2H4PQF8iySLNK8%2Ba1t1hb%2BbSCYqOFt8FZQJoXoXXuHeTnmbrcWIDpF2LbOWKj3C%2BV%2Fo2h%2F3q%2BqkhYwDPAkkYDYeoGdPZ82H8lUBWbB3xZjfB5jB%2FxelcKnkPU15lbawdcXiW5fyVWE1Ai8ePM68%2FOkA69Zu8bYmMGFuysHkFt2oil2R%2B2kjogjCQoo7ABjqkAVOuOwnmvQrs7IXGXgSonOUq%2FVWYiWgMHjMVBLtuocNbQyw9Z49Bu228XrW7Ckf4SyMOkmY6MUyqcWeVDQCwfuf96O6ETpS5eYXb%2BZ%2BOn19ElRLFh1Rr%2FbwfmXWhkBvzaHgYVKehFJBmouwVoFtOEzlEfmul4y9vc3ICtVy9tyM2IFVrPBL4sWJV1GbRMtohIDl688Ib5z7u716R65H62YK8fzRu&X-Amz-Signature=6f8d347ab6b760e47db0ebe40927c12db3456572f3a8f3918fe0884a833c7007&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XMHDJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDj11kUl%2F7Clz3Si22BwVG%2F9SgO%2FGj%2BTEPu3TAHUjcZnAiAcVTir9aQcLHaRpGPnm3wu18vcLquQGsn2j%2BySzCQt9SqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHiVNWgT0iC23IUw8KtwDEk4SdmiulrACYpm2gEgs2YU9A7klwJ04SFSEPjJOM%2Bbfi5HMS4pksra0GbxYFx%2BDltgLI1BUQ0c7j%2BlqPaqlw%2FWQSvsyozaoCafKKpf715dxC1YSjbCK4GnG6csg%2FrqbLy2bFOiBRvMliFbiJVumTELzhtqVs5Nl8icLrntQgVfQsVU2X7rYVWmG6fklz4Y8pdVPDiEjrDtgWF7Mo4LK3UeLnENFNCE1CkbEiRDZjjVeQQtJloY2U2jaMuDYuG%2Bh0TOm3mvIsqRTsjEw6zOgaW7E1lZlCpm7woQXhx6u%2F7EK4hRf7gwFGQUHaQq32rbw6RYmUy2q51HBR%2FcXGvUcD0SUDS%2Bo4vYokZiFhe8QgxATDLaTSXUFGtfr5oohFoh0nVKWveSOAjCONtEsDygBDJCGyrvdlGb7n%2FBhXzk1Eulms3WOcVxt0b%2BgCAqTQ8AbedbqmEbMFG%2BdxYJhLJAayGbAKNGsEkP4Iefw9OnUBgaJGbspTHkWpwawhJJLO2T4HiByZz%2BS%2Fr1YkXeQY%2FNhUvxjHnC9Mv7erUxHrLj8WhixmP5%2F%2FIQpJ7luWRGWfnwpAP4EA4T4o%2Fcj%2FhLl91nB5D7%2FKNuOaBLRS1eq4kwgIo3AZm%2FhlkJ89bOj70gw1pmOwAY6pgFEy0tg1PVX7gfFRiwNz9jLc1Gxir53EVIvn3QSs3jsx0pitHaGQHWaNubFZSepW3W6lZ0b3rUCokI1VsRjMjF6fdNq4i%2FUc9UHsS%2FX%2BIhbic2cP7G16f9D%2F3%2BLVpTl18qNClrB6DKf7m0PAWlghneBt57aRkf8OX6fsBBqliEnTYw17pWNPvpz6olY45bMYDi2GwGBUL7aKMKIf1Yl4Ejrbq5XLGsv&X-Amz-Signature=5e4ae3450a2a744c8d4bb6635da491310a68ff6620d126dcb436fd705f95eff7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
