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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3K2HI4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCls4F5albdXuui7BZGENEYpwPYz6XdP5gQqaeny2at2QIhAONxoj%2BrbR0VHAdQYXHDXStzwXeMTZ%2BB0vULxMU6wjwwKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykL%2FDyySkIvIR%2BEV4q3APerr4yX7HkOVA5s8ilP%2Fg%2B769YtdyxPBV8okPtDBVz7VEslxehuY3OEfEEYnjTNKy9aIN%2BwMn4Y2VHqVSaw%2FIt5AuVdNHzQaJj7RtHVTmCRh8KpXlCPGqw6SDGZn16T8rMVxDXQRpp4OyYYrOsW4cGuRGjGGGEUU73itB3TyfqLwarmt5TepEuzRxrUl74bT96cdEcDwXXm9Qb7tzqS8uSP3855OIVDzWT3sZSPmAcEXSU49npsdnE3bWhbX2hu1THDEn0o3ScPNryYFbZyQ2ct9oGnY24q0rmH3B%2BsVNwMIwkfjpZFt18s3So%2Bvr1Hi11sZnxefrkH3Paan%2FHf8YsFsc1Px1l6JH2ZeTW%2BKyx%2BcgTpIuXPBE5w0z0ruf%2F6xLIuOilkfX27GZPfdcBH%2BmD1uj%2BEeD5SJwKfqy91DtUfoB6zlxBs1bK3hzv9a1nDDmsaXyiV6WgxszEhSehPQ0a9lGIWp0rahMvbn22C%2BOkAK63hjFF46CU0mEe5H2ER6BlPbn2GW1QqGbGtdC%2B8jHezL7XL9B58HHphF8nuo4UrAqHJQ4tWh9hrhm473NLsF92Ht6EhA66HYJln%2FathIIaaSeVGA9%2BYWRlPjk7um0YXYBktmZoEX0%2Fe7c92DDsn9%2B%2FBjqkAVSOb6arOMUPVNd3QGLQKgrMnVqwqRMUmEzBt%2FMtmdzbcL3FSVGL%2Bn2X04LXJTMizNPh6L8g%2FEZkxkRkCLPGZM5bMR0voYqKwsSYIKZAHDPTaL2eacFF3dvcFyJRqMh4DjO16xOzeoGeSiN5zyvk8K%2FVcPZqH5zEsiw%2BrsV81LlOup3UEeOhqYOy6g4ykkdtK483QpAgNiBGVoqb%2FM4i5A7c5RDk&X-Amz-Signature=c67c6d796d5c54923087b662604909f41215a33e7c1739e634f04552943c1b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3K2HI4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCls4F5albdXuui7BZGENEYpwPYz6XdP5gQqaeny2at2QIhAONxoj%2BrbR0VHAdQYXHDXStzwXeMTZ%2BB0vULxMU6wjwwKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykL%2FDyySkIvIR%2BEV4q3APerr4yX7HkOVA5s8ilP%2Fg%2B769YtdyxPBV8okPtDBVz7VEslxehuY3OEfEEYnjTNKy9aIN%2BwMn4Y2VHqVSaw%2FIt5AuVdNHzQaJj7RtHVTmCRh8KpXlCPGqw6SDGZn16T8rMVxDXQRpp4OyYYrOsW4cGuRGjGGGEUU73itB3TyfqLwarmt5TepEuzRxrUl74bT96cdEcDwXXm9Qb7tzqS8uSP3855OIVDzWT3sZSPmAcEXSU49npsdnE3bWhbX2hu1THDEn0o3ScPNryYFbZyQ2ct9oGnY24q0rmH3B%2BsVNwMIwkfjpZFt18s3So%2Bvr1Hi11sZnxefrkH3Paan%2FHf8YsFsc1Px1l6JH2ZeTW%2BKyx%2BcgTpIuXPBE5w0z0ruf%2F6xLIuOilkfX27GZPfdcBH%2BmD1uj%2BEeD5SJwKfqy91DtUfoB6zlxBs1bK3hzv9a1nDDmsaXyiV6WgxszEhSehPQ0a9lGIWp0rahMvbn22C%2BOkAK63hjFF46CU0mEe5H2ER6BlPbn2GW1QqGbGtdC%2B8jHezL7XL9B58HHphF8nuo4UrAqHJQ4tWh9hrhm473NLsF92Ht6EhA66HYJln%2FathIIaaSeVGA9%2BYWRlPjk7um0YXYBktmZoEX0%2Fe7c92DDsn9%2B%2FBjqkAVSOb6arOMUPVNd3QGLQKgrMnVqwqRMUmEzBt%2FMtmdzbcL3FSVGL%2Bn2X04LXJTMizNPh6L8g%2FEZkxkRkCLPGZM5bMR0voYqKwsSYIKZAHDPTaL2eacFF3dvcFyJRqMh4DjO16xOzeoGeSiN5zyvk8K%2FVcPZqH5zEsiw%2BrsV81LlOup3UEeOhqYOy6g4ykkdtK483QpAgNiBGVoqb%2FM4i5A7c5RDk&X-Amz-Signature=bff4f6e5f9ba66b62ad12eb7148196f75fb26e5395156c25f6bd74fbf2ce9c06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242SN2VA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFIwFLqD%2BeS%2FUHZkeETPeVgujSEVYn82U06VI6vh5VwHAiEAo8ZWmhcQfYFic4Jm5jRvQa630N7dhbFEZuRIE2BSSWwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4yhQDhpSZMU7I0uircA8nTh9P4kb1zLlGtNIg7RNQANVGjgoOD74Wz%2FsOOi1GgpczUk%2BJQMpt9TlC3F%2FWE6%2BeKF%2Fgd8TLDoEvW2NsNZbckX%2FA4R3P1s%2BDgQnGniFtwyFjoBWY5n0sRW6xDWKktPCstHNq5DFblDkpMdhVDX%2BAXqnMU9cTJM%2FRMOm8d6aGHMMPQyTPM8c18Z%2BZbWL416tSHSYToTpuvWiiiLe6BfDpOT3oNKrQQFXqEPVV%2B40Ov5Lm3DMdci1873TmfMJ2pGB6wPhL5nxpimXWPVOLMEovphORTlkLWj9%2FDWKeQxwsdt%2BSCDtYAJGDlSv%2BfrFeqYbEa9KQEUb1HVNV6GP2FJfJ7R7ep2yjkPqszWD9pasCHeBwuMbiBY0Q8DMHNZVqeW5gRJRt7BByoTlP5rFlgM5KuX9TMiH%2FaoCNy19AV%2FettNZ2cn%2F1X49niE5EyYJdyikispHrEs9u1VrDFWJJFrKHJ7Gs8%2BUe7p6YbA6FkYjixR52gPTJRb49HeHO9uxCnmwJ3p6CaS%2FCz739wAg1RoRr4Op%2Fv3hDm5dNaeRB1nl3L77vQqJvW1APRi%2BwhRrSee0jL6sPSjXGNy3wRV4diS9EplVmHYkzHFtOroCzRyD41NK3zOMsyp2tJQg1tMI2g378GOqUBsItwTwJ4F2DSQFxFbkmg5I2SpxI1O2z3llWzpUR7LygBZHXzBvZg2lu%2FUCr%2BF%2BZZAiogLXQ5%2BvEBiNu%2BtHAImgKc%2Bx8m0xXvP9iXIbSmsanJMP%2BHyD890f3ljvQJ%2F%2Fnmglf5coV%2B5H%2BvZXCP4gmjwIuiC2rAq7akeu3ZWCmVJaevlDIp7c9p6Ri8KIgIqUfF7ms%2FFmfFfc4CC8JsAQ%2FqseLBCeZZ&X-Amz-Signature=bcb9f8fbb5bc69a782de15a0f153db3fabb2d57723b00a04be9760f785ba5ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAUKWJ76%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDgzCmdygWdZ1186xGISZ4sbHvJfk8%2BhG59j6qiiX9noQIhAMGOGvIMtRQSzzn1lnBo2e01co8oZmHeYwwwNb%2F4T3nLKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweAM8EwlO%2B%2BTJOqGgq3AP8dG5FSo%2FVoO7GerJMuw60xs1EndDYz%2FKqfTjdh0s%2BcH8v0qf0Ofy4CWBrw4N6nBDKncPJETGR0K%2F5ElCRCY3Tt4DH7Q6TI4PgZ2X3p%2Bchsaw1b7s3d01MSOiChhbvh3VCGle%2F1D8z1AtHgS%2BqWgRe%2BCUtd%2Bts9CQHvNqs%2FhbItuD9AEdEFZCnv5vFUGpwzDYGe%2BYwJBIs8zaQ4F1LVsaSIUqy9PPHpuwncCpOqrKR0BXszivYyOSpGYsApHiQkXCnqRGXrT5MEoJiVU0JR66NLYZCSPY49t9AendO7pdixPDiSQLjTPVMTzaPQuKCfvJnyQrf9JeegCESM8IjJgQIkdPUSd1VjAhptPnGyzYlwvhpUoa75njZrQqdtdnG4nvFHijcAlcAmscXEFdPE4cGxbyzK3FEcmyHSKNUXb7rWPhrU8xTsuPi%2ByJKOgcHGZCFoKPBQh%2BSGy5mK%2FPlW5VJ%2BXMulG8361j04XHHVONa9K9nyh1xXVtMjElt7eTUCekgAqmjNhBJLNPcHrtYXl7kJp%2BVqUS%2BcXXEPbbu0K1bDwJQ%2FAic5mBoa2Hkuv6xCmd343G%2FZhzJaq5VN9lknzpTRwxWLsvz6cf94Pu1ecvOLx%2BrVjNk5%2Bj989wmLjDMn9%2B%2FBjqkAenVxiOtmY7Ze%2F3AF7UYLdIIHn6AK7v2qoWXuGxFXArgJkBSC%2By2OnziKRMK%2F1wl2kM9yt%2Fq1Z717YU7Cmb0AYPp1Tskw1LtrEWxdhr0fnZaX3Y2UtZ%2B3y2bpaiQN%2FVSXFncTn1bqKBhRAxgOE%2BxM2pEaEiGVwcObbbTD4hlLYjVdAl4UO5R950l%2Bq2%2BBBUzdDauPcgppMQaQCZ7MH1200SS7RUu&X-Amz-Signature=315543b23d1ff1af5c351e388f63c1ee78424456ebe064d37896083a6f5aa067&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z3K2HI4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCls4F5albdXuui7BZGENEYpwPYz6XdP5gQqaeny2at2QIhAONxoj%2BrbR0VHAdQYXHDXStzwXeMTZ%2BB0vULxMU6wjwwKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykL%2FDyySkIvIR%2BEV4q3APerr4yX7HkOVA5s8ilP%2Fg%2B769YtdyxPBV8okPtDBVz7VEslxehuY3OEfEEYnjTNKy9aIN%2BwMn4Y2VHqVSaw%2FIt5AuVdNHzQaJj7RtHVTmCRh8KpXlCPGqw6SDGZn16T8rMVxDXQRpp4OyYYrOsW4cGuRGjGGGEUU73itB3TyfqLwarmt5TepEuzRxrUl74bT96cdEcDwXXm9Qb7tzqS8uSP3855OIVDzWT3sZSPmAcEXSU49npsdnE3bWhbX2hu1THDEn0o3ScPNryYFbZyQ2ct9oGnY24q0rmH3B%2BsVNwMIwkfjpZFt18s3So%2Bvr1Hi11sZnxefrkH3Paan%2FHf8YsFsc1Px1l6JH2ZeTW%2BKyx%2BcgTpIuXPBE5w0z0ruf%2F6xLIuOilkfX27GZPfdcBH%2BmD1uj%2BEeD5SJwKfqy91DtUfoB6zlxBs1bK3hzv9a1nDDmsaXyiV6WgxszEhSehPQ0a9lGIWp0rahMvbn22C%2BOkAK63hjFF46CU0mEe5H2ER6BlPbn2GW1QqGbGtdC%2B8jHezL7XL9B58HHphF8nuo4UrAqHJQ4tWh9hrhm473NLsF92Ht6EhA66HYJln%2FathIIaaSeVGA9%2BYWRlPjk7um0YXYBktmZoEX0%2Fe7c92DDsn9%2B%2FBjqkAVSOb6arOMUPVNd3QGLQKgrMnVqwqRMUmEzBt%2FMtmdzbcL3FSVGL%2Bn2X04LXJTMizNPh6L8g%2FEZkxkRkCLPGZM5bMR0voYqKwsSYIKZAHDPTaL2eacFF3dvcFyJRqMh4DjO16xOzeoGeSiN5zyvk8K%2FVcPZqH5zEsiw%2BrsV81LlOup3UEeOhqYOy6g4ykkdtK483QpAgNiBGVoqb%2FM4i5A7c5RDk&X-Amz-Signature=b5f204864852f159598e8d6d9a6d9b65be3204719e9e64b8eac720a39eb27375&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
