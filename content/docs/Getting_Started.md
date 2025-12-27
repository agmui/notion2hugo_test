---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35ILWNF%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioUqFBOy42CwurhhLfSFuWE%2Bmdd2bgaYC%2FzMztJObDQIhAJqybNxdPMskM6p4jXU7HhulsB1bMYPTznU5C2OdXaRTKv8DCGIQABoMNjM3NDIzMTgzODA1IgwPEODzHPOiAJe2ulQq3ANOtO1R20EhEwzHmcHH3eDy5tM7XKeXYkUgPxaKg1S9NUuLhCITBB%2FTigCTlYsA%2FJMR9jeFS5FU2fmQZzT%2FyYT5Umi9vUIlao2rRsTLr%2FMJlxj4e4sJT0YNC5WkHxRS4uui9cngAs55ru56kOETu%2FjlPHQpGBWRoQ7BZWMctUsZZytXMfXLFBjC5Fe3%2FAqeQQ51GrSRRsdkk6r%2FCreRNET8DSD49Oi9TD%2FNwcwe3pWUO4ZcF5oFJhpEsD%2F0rwSgEjttET22%2B%2F4xI9lu0HAzpeY11d1H%2FJY%2BsUJWYrSsxOG2z1qsdplobjglLEYAos5kBcc4okHC947MbRONHvv1a%2Fc9359PMqicD8SQsFF8iNl%2FpIVNKZNRIEYA8k6KUyyos0eYWeXhZb6%2F8WwBug2cjYJyQXLIynr89Q034KP%2Bs6XpKBbzrNjVhtR%2FQ4Tbfu2gGv4DfYss5hB1MTtj2MJ38nIPuRShQh6eTwpKtZdSYIraxJUMHN6qGkzBGGBHroVblVZmnJD%2B52XtAXU9oQzamP75xeC5dJF1O52qxetHOoEikQhUVS84dC19gGY2Z3M4JZTp0qFQ8LZ%2FBkdrsuF9K7c%2BA4f1NIYczSCmqRc%2FvdP5LUlKf3j7FShkdVXjETD%2B6LzKBjqkATcP2Hg%2BMuS0rbow33%2BzXwm4bFS5u4aezyk7syo5Qz3eYrRdgiNdMvhHh8sEdzCup1%2BulvE0kfs%2BNs8Geme6QM97ElBpZjnNxUIeA3EFynta7pWLwHCxzCs%2Fwr9XISjmdl764MfT6hJATyTbhzTGm0v7z2vjLe%2FRWK1uywwlaZQmx%2Bnx%2BAbfm%2BisAymltHHNz4agyFca6Q8PLQjMJZLFQ64eOufj&X-Amz-Signature=517b149d4828ef97dfee69a2098200b7ca3d5f978b4c8cb6102d6c6e07781350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35ILWNF%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioUqFBOy42CwurhhLfSFuWE%2Bmdd2bgaYC%2FzMztJObDQIhAJqybNxdPMskM6p4jXU7HhulsB1bMYPTznU5C2OdXaRTKv8DCGIQABoMNjM3NDIzMTgzODA1IgwPEODzHPOiAJe2ulQq3ANOtO1R20EhEwzHmcHH3eDy5tM7XKeXYkUgPxaKg1S9NUuLhCITBB%2FTigCTlYsA%2FJMR9jeFS5FU2fmQZzT%2FyYT5Umi9vUIlao2rRsTLr%2FMJlxj4e4sJT0YNC5WkHxRS4uui9cngAs55ru56kOETu%2FjlPHQpGBWRoQ7BZWMctUsZZytXMfXLFBjC5Fe3%2FAqeQQ51GrSRRsdkk6r%2FCreRNET8DSD49Oi9TD%2FNwcwe3pWUO4ZcF5oFJhpEsD%2F0rwSgEjttET22%2B%2F4xI9lu0HAzpeY11d1H%2FJY%2BsUJWYrSsxOG2z1qsdplobjglLEYAos5kBcc4okHC947MbRONHvv1a%2Fc9359PMqicD8SQsFF8iNl%2FpIVNKZNRIEYA8k6KUyyos0eYWeXhZb6%2F8WwBug2cjYJyQXLIynr89Q034KP%2Bs6XpKBbzrNjVhtR%2FQ4Tbfu2gGv4DfYss5hB1MTtj2MJ38nIPuRShQh6eTwpKtZdSYIraxJUMHN6qGkzBGGBHroVblVZmnJD%2B52XtAXU9oQzamP75xeC5dJF1O52qxetHOoEikQhUVS84dC19gGY2Z3M4JZTp0qFQ8LZ%2FBkdrsuF9K7c%2BA4f1NIYczSCmqRc%2FvdP5LUlKf3j7FShkdVXjETD%2B6LzKBjqkATcP2Hg%2BMuS0rbow33%2BzXwm4bFS5u4aezyk7syo5Qz3eYrRdgiNdMvhHh8sEdzCup1%2BulvE0kfs%2BNs8Geme6QM97ElBpZjnNxUIeA3EFynta7pWLwHCxzCs%2Fwr9XISjmdl764MfT6hJATyTbhzTGm0v7z2vjLe%2FRWK1uywwlaZQmx%2Bnx%2BAbfm%2BisAymltHHNz4agyFca6Q8PLQjMJZLFQ64eOufj&X-Amz-Signature=bfdd65c1f8e82d584363343a5d94d283fea91c4dea23551bb411eedf3bcb00f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35ILWNF%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioUqFBOy42CwurhhLfSFuWE%2Bmdd2bgaYC%2FzMztJObDQIhAJqybNxdPMskM6p4jXU7HhulsB1bMYPTznU5C2OdXaRTKv8DCGIQABoMNjM3NDIzMTgzODA1IgwPEODzHPOiAJe2ulQq3ANOtO1R20EhEwzHmcHH3eDy5tM7XKeXYkUgPxaKg1S9NUuLhCITBB%2FTigCTlYsA%2FJMR9jeFS5FU2fmQZzT%2FyYT5Umi9vUIlao2rRsTLr%2FMJlxj4e4sJT0YNC5WkHxRS4uui9cngAs55ru56kOETu%2FjlPHQpGBWRoQ7BZWMctUsZZytXMfXLFBjC5Fe3%2FAqeQQ51GrSRRsdkk6r%2FCreRNET8DSD49Oi9TD%2FNwcwe3pWUO4ZcF5oFJhpEsD%2F0rwSgEjttET22%2B%2F4xI9lu0HAzpeY11d1H%2FJY%2BsUJWYrSsxOG2z1qsdplobjglLEYAos5kBcc4okHC947MbRONHvv1a%2Fc9359PMqicD8SQsFF8iNl%2FpIVNKZNRIEYA8k6KUyyos0eYWeXhZb6%2F8WwBug2cjYJyQXLIynr89Q034KP%2Bs6XpKBbzrNjVhtR%2FQ4Tbfu2gGv4DfYss5hB1MTtj2MJ38nIPuRShQh6eTwpKtZdSYIraxJUMHN6qGkzBGGBHroVblVZmnJD%2B52XtAXU9oQzamP75xeC5dJF1O52qxetHOoEikQhUVS84dC19gGY2Z3M4JZTp0qFQ8LZ%2FBkdrsuF9K7c%2BA4f1NIYczSCmqRc%2FvdP5LUlKf3j7FShkdVXjETD%2B6LzKBjqkATcP2Hg%2BMuS0rbow33%2BzXwm4bFS5u4aezyk7syo5Qz3eYrRdgiNdMvhHh8sEdzCup1%2BulvE0kfs%2BNs8Geme6QM97ElBpZjnNxUIeA3EFynta7pWLwHCxzCs%2Fwr9XISjmdl764MfT6hJATyTbhzTGm0v7z2vjLe%2FRWK1uywwlaZQmx%2Bnx%2BAbfm%2BisAymltHHNz4agyFca6Q8PLQjMJZLFQ64eOufj&X-Amz-Signature=d75b708b5c7612de7a1765e2ba28cc694f465063d933de76ea77fb6ce2299b71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EJLM2GH%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHJXlbnEI1fUvLpQk1GZLzC%2BYXp0PTLIfOTQlqkXs%2BQIgPE9Si3%2BRBpsL1J%2BGoiBvbmXC8iTtrCqIJY2nPxqLTXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOOrbCfjFCLRJMS%2FXCrcA7NHV0lqeWOoPb1Iz%2BsprwouLNPwYDe8Pd8x3tV8tqpcSGxKnBL3F2HPIrEb9GpYo%2Bg5X6y3m4FFYPV2z3rVsSqsCTljj0Pu7c43h8a2BgfSTx0Tcam84E21ZU4sDK%2FsYjiEKb6vuiL7THbJWLoCjpBPRz3yknYbu5NGKm%2BDXv8jle1gsqet6KbuRTnfJPkjLBPfx7IFkSVYyFQhud3JPXAWi1l96xHyWDX6s1Max%2BSpSGx2tCq01c8rEEZuoopgSaM%2FHiWbi%2B%2B6hC61acnDsrhl3FAdDRuJCbMfewSj7%2FViBRxGzFp%2FqTtr9Ft%2FoOsio9rsCFHyKS4TkP%2BpuB2%2BrcpGRtJ14xkloCZ9%2BHWK%2Fytw6LlOGSoiKk281ZnB1DKr6NREnRKmsdklLQtvun47xrIXiljOKPdmBYkWGDuXwW7e%2BoCK6kpFlhxYAX6nWjlae3KQYsqmoQ2s24V6LWYI1NuvBe3Al5wRZQVvirrx9XRPHwj%2FCXpvoGkMflfoOpWMOZLjGWuQ5A%2BbwqCev55yEbZSYl2uUasMB253%2BeiPXQJqf6IQL6Q0xCEvViO1luhLWHak15%2FLlcXqBZhlvFpnhdjIh67A2vn6ifJUblHz%2BaCD6V1lKFVECVZhhOzNMPftvMoGOqUB6uMugsaiZMxYlewhr5EyQsx9RUPCdMAgN9MGbYqnGPnCQVj5%2FCa7w4vlgYZVcZdMcFPGgh%2FLlaK2VE8QOsBYwYDsjMgq54VulD%2F8LGAYlpotEEQiEoMBIysCyhOJS%2FUNAfASLJOT5e5xXHJeZ1UKDiSZD5GYgiWtxFJY5nZaglFv8bejrNPfj9DRkTG0q9PVuu3uqcdj2IMdez05KaE9IekPFlPQ&X-Amz-Signature=323f37f9eb3257868c694217bd794c596ae2f56e7f75e93eb8086e86aba327c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGFZMLPQ%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGCXrJWDN7LylOrmwjynnGcIAsfykh129ehK8uo464c%2BAiBCz0RbbJXRT3We2rhkKtVPQSy8uw1%2B9V1NP8EW8fMJMSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMJ9cTcP4zHgWLh8PPKtwDxrWQVKMNwrkz470O1wZYp5w0MdyE%2FWGxi4VYHGUodpnDSejxbP%2BSWYgkTYDF5HDhyFBupSrQLN8FzxouPPA8HGHSr%2BMzfj8r4m3SXGK85FqU40Y1sOJSYYM2U2YuseD6uzo1BC1wpcLNuSU0%2B06C0xJePDadtV1GRVsyB9HUE9K620p8LkEx4EFdwOWhh3nfBkBtZ6gGPlaXJ67HVbnXheFIDYfRRU9JdTtS3IJ8gGnZ2c9DgjmsQvd36D9MoQnkyTlIMnQKMBngI7bcNekLHN2JVGknfF3VA7ht%2BdDIue2WpsKTUxNR1dkYKR4m2m8s%2B67Wrnq5NTQBM48RLwjS5cCBu3k%2FID5wIGx%2B%2FdAtLjapl5OPCdvBaPs%2FO4SjBu%2BszVrbP%2B2o%2Bv8f1QUos1VqONCu9NxjqNrM8O31mzH6WXlQLotKV5OBeJTqG2rqwhCKe6eWFSrvoJNw5fFjPwxorh2EU9Bn7l0mxEYrherPkHl%2FT5f3w6iLbvQeTvIv%2FGishBHaiYDDtK1LsQRxOHWwOcxIu24AvIf2cHzCKzjm1jlliM1SBdb%2BxtSzDxGgd7lY1n3G0E%2BrfKXpIKkApdhg%2Fd8uNFGBa%2F10%2BZ0Sc6WEfRGUFRIetbRUcWNsdgMwoeW8ygY6pgEqOATwMeFDa4fDRP1TBGJYsPsYXocfPPi%2BWTmOmGADtMNbwhi70SdNzpAmRfGxnTqQwuxx3nZCV37U%2BmuePfa%2BqRgYju%2FwcWgd9UUBx1Cjlo4PV4EznGAtUs6Vkf7L1zKAhlP6H5Uc8tp%2BhowowhDJX09wqNy3JkDia8YxNPVgQhAnTzPlLKrzCX6UojfQnw78PLORNKH3yqqO0q3xGGfx00DzTPmx&X-Amz-Signature=317874acf37973693c90d7b88d533dfb650e82e08ce6533e081145186d902682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W35ILWNF%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCioUqFBOy42CwurhhLfSFuWE%2Bmdd2bgaYC%2FzMztJObDQIhAJqybNxdPMskM6p4jXU7HhulsB1bMYPTznU5C2OdXaRTKv8DCGIQABoMNjM3NDIzMTgzODA1IgwPEODzHPOiAJe2ulQq3ANOtO1R20EhEwzHmcHH3eDy5tM7XKeXYkUgPxaKg1S9NUuLhCITBB%2FTigCTlYsA%2FJMR9jeFS5FU2fmQZzT%2FyYT5Umi9vUIlao2rRsTLr%2FMJlxj4e4sJT0YNC5WkHxRS4uui9cngAs55ru56kOETu%2FjlPHQpGBWRoQ7BZWMctUsZZytXMfXLFBjC5Fe3%2FAqeQQ51GrSRRsdkk6r%2FCreRNET8DSD49Oi9TD%2FNwcwe3pWUO4ZcF5oFJhpEsD%2F0rwSgEjttET22%2B%2F4xI9lu0HAzpeY11d1H%2FJY%2BsUJWYrSsxOG2z1qsdplobjglLEYAos5kBcc4okHC947MbRONHvv1a%2Fc9359PMqicD8SQsFF8iNl%2FpIVNKZNRIEYA8k6KUyyos0eYWeXhZb6%2F8WwBug2cjYJyQXLIynr89Q034KP%2Bs6XpKBbzrNjVhtR%2FQ4Tbfu2gGv4DfYss5hB1MTtj2MJ38nIPuRShQh6eTwpKtZdSYIraxJUMHN6qGkzBGGBHroVblVZmnJD%2B52XtAXU9oQzamP75xeC5dJF1O52qxetHOoEikQhUVS84dC19gGY2Z3M4JZTp0qFQ8LZ%2FBkdrsuF9K7c%2BA4f1NIYczSCmqRc%2FvdP5LUlKf3j7FShkdVXjETD%2B6LzKBjqkATcP2Hg%2BMuS0rbow33%2BzXwm4bFS5u4aezyk7syo5Qz3eYrRdgiNdMvhHh8sEdzCup1%2BulvE0kfs%2BNs8Geme6QM97ElBpZjnNxUIeA3EFynta7pWLwHCxzCs%2Fwr9XISjmdl764MfT6hJATyTbhzTGm0v7z2vjLe%2FRWK1uywwlaZQmx%2Bnx%2BAbfm%2BisAymltHHNz4agyFca6Q8PLQjMJZLFQ64eOufj&X-Amz-Signature=e5622de129b4f87f2bd13a36e79709564d0254dd8d18076e18b6f2f44724a1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
