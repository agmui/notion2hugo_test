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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O3EK63%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDyPT7L3TXNYGSdOY3Eiz3qI30BJLXLFQvynGkSJh3sAgIhAM3XY8Aq64WFJunpDYKdJL0lu79GHoJGpRCLCUoBBS%2F6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz30CxwR7g7AugcCbEq3AOr%2BIm%2Be2TVaXiGefFuIvv44npIByuocmjwtm1v830o42L1QMNQB%2B9kMuQWvi7JAp1BwEMduh%2BzuZBQxM6BCiINwDsX1xa9DxdT22k0B5o8fQJX1BjLIl%2FK0yA67ITFJYogP6yi4uFJf5S7jXGtp4DzlzXAjA8YKSUBjRYN5sQNTaHou0632hOP11Z5MDkEDLHNUK51JF0tiJWjPtSNzEW8KCt%2BtEkvN7efucc3uG4xJjFNuyjy3ATUcpGXbJEj47F3kBm3H0DabZnK0O7RKfa17DV7tsI53WMVGCJ75HhriHT5f%2BxWNzMhcXK6VixGGs5LE6qd5kxya6nkrADW%2F5Vd3l1Byua8kO6A6sysVlgh04Xqlt9w%2F4gwPh0B%2FZVMSm4nL7AEDpGZy16IJxZl6z8FdPLzvMCg0ruU3vhoYn1WNeB1N2nUyl%2B3WKyGXaxSelJJBrlzExbAYhtOu8iUBU6n7uJ6bCVlIaOQK9hMbOpjV6vtYIFI3hQENl%2FlxCqNjJFmOuUH%2BkLnS%2BTu39yzB1BGSSUpX3ObY0vlvXC36SVpBt49kebSzetXmSyQgNwuBh27R%2FKOeyWIJsV1SgDA%2Bl0dwedKkKgCiNwl0njsTuj%2F1Llf1qmvT1yuVIaOmDCd9orIBjqkAbY6ugwbR7NheqIvtEADQZCfK8a1f%2BeFKPieDPhtZhFumVdFJGej6GpUELY0fLcHfEJwAZIEAI00yYYZJGT99I%2F1G1mKOvZoTvDMjsJKIW8GMVEpO%2B%2B5AjDSROZ6Acfa%2B169PJ5R8sgW1Ro3CSCv1Gp6eRFpMsnkSTQbHZqtydDGk%2FaZDvPvKlESU%2B8L6ptGYvMC%2FFHCpYxBua5se0u7gRtSD%2BtL&X-Amz-Signature=7e0c378f00dd213fbe6c8f61bd7032fd644be90fa52c7e37d9f4681a96f54109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O3EK63%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDyPT7L3TXNYGSdOY3Eiz3qI30BJLXLFQvynGkSJh3sAgIhAM3XY8Aq64WFJunpDYKdJL0lu79GHoJGpRCLCUoBBS%2F6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz30CxwR7g7AugcCbEq3AOr%2BIm%2Be2TVaXiGefFuIvv44npIByuocmjwtm1v830o42L1QMNQB%2B9kMuQWvi7JAp1BwEMduh%2BzuZBQxM6BCiINwDsX1xa9DxdT22k0B5o8fQJX1BjLIl%2FK0yA67ITFJYogP6yi4uFJf5S7jXGtp4DzlzXAjA8YKSUBjRYN5sQNTaHou0632hOP11Z5MDkEDLHNUK51JF0tiJWjPtSNzEW8KCt%2BtEkvN7efucc3uG4xJjFNuyjy3ATUcpGXbJEj47F3kBm3H0DabZnK0O7RKfa17DV7tsI53WMVGCJ75HhriHT5f%2BxWNzMhcXK6VixGGs5LE6qd5kxya6nkrADW%2F5Vd3l1Byua8kO6A6sysVlgh04Xqlt9w%2F4gwPh0B%2FZVMSm4nL7AEDpGZy16IJxZl6z8FdPLzvMCg0ruU3vhoYn1WNeB1N2nUyl%2B3WKyGXaxSelJJBrlzExbAYhtOu8iUBU6n7uJ6bCVlIaOQK9hMbOpjV6vtYIFI3hQENl%2FlxCqNjJFmOuUH%2BkLnS%2BTu39yzB1BGSSUpX3ObY0vlvXC36SVpBt49kebSzetXmSyQgNwuBh27R%2FKOeyWIJsV1SgDA%2Bl0dwedKkKgCiNwl0njsTuj%2F1Llf1qmvT1yuVIaOmDCd9orIBjqkAbY6ugwbR7NheqIvtEADQZCfK8a1f%2BeFKPieDPhtZhFumVdFJGej6GpUELY0fLcHfEJwAZIEAI00yYYZJGT99I%2F1G1mKOvZoTvDMjsJKIW8GMVEpO%2B%2B5AjDSROZ6Acfa%2B169PJ5R8sgW1Ro3CSCv1Gp6eRFpMsnkSTQbHZqtydDGk%2FaZDvPvKlESU%2B8L6ptGYvMC%2FFHCpYxBua5se0u7gRtSD%2BtL&X-Amz-Signature=cc826eb489f8072eb4262be5eab3bc3122ef3684c01c2c826d15209d0876d52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O3EK63%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDyPT7L3TXNYGSdOY3Eiz3qI30BJLXLFQvynGkSJh3sAgIhAM3XY8Aq64WFJunpDYKdJL0lu79GHoJGpRCLCUoBBS%2F6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz30CxwR7g7AugcCbEq3AOr%2BIm%2Be2TVaXiGefFuIvv44npIByuocmjwtm1v830o42L1QMNQB%2B9kMuQWvi7JAp1BwEMduh%2BzuZBQxM6BCiINwDsX1xa9DxdT22k0B5o8fQJX1BjLIl%2FK0yA67ITFJYogP6yi4uFJf5S7jXGtp4DzlzXAjA8YKSUBjRYN5sQNTaHou0632hOP11Z5MDkEDLHNUK51JF0tiJWjPtSNzEW8KCt%2BtEkvN7efucc3uG4xJjFNuyjy3ATUcpGXbJEj47F3kBm3H0DabZnK0O7RKfa17DV7tsI53WMVGCJ75HhriHT5f%2BxWNzMhcXK6VixGGs5LE6qd5kxya6nkrADW%2F5Vd3l1Byua8kO6A6sysVlgh04Xqlt9w%2F4gwPh0B%2FZVMSm4nL7AEDpGZy16IJxZl6z8FdPLzvMCg0ruU3vhoYn1WNeB1N2nUyl%2B3WKyGXaxSelJJBrlzExbAYhtOu8iUBU6n7uJ6bCVlIaOQK9hMbOpjV6vtYIFI3hQENl%2FlxCqNjJFmOuUH%2BkLnS%2BTu39yzB1BGSSUpX3ObY0vlvXC36SVpBt49kebSzetXmSyQgNwuBh27R%2FKOeyWIJsV1SgDA%2Bl0dwedKkKgCiNwl0njsTuj%2F1Llf1qmvT1yuVIaOmDCd9orIBjqkAbY6ugwbR7NheqIvtEADQZCfK8a1f%2BeFKPieDPhtZhFumVdFJGej6GpUELY0fLcHfEJwAZIEAI00yYYZJGT99I%2F1G1mKOvZoTvDMjsJKIW8GMVEpO%2B%2B5AjDSROZ6Acfa%2B169PJ5R8sgW1Ro3CSCv1Gp6eRFpMsnkSTQbHZqtydDGk%2FaZDvPvKlESU%2B8L6ptGYvMC%2FFHCpYxBua5se0u7gRtSD%2BtL&X-Amz-Signature=a6fbbd425ec0db42e79607f3437c1e6235cdee570437934df0476456448ac0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYWQ655%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGmADaSWM7zJq975vD%2ByGd8yIJ08bLavBzXnsmg%2BrkoOAiBs4uSJsYgnKOG8CeJsNgvDg2H3ajBq67zPBj4cyBtB2yqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWqzneaTqq6r6jCLRKtwDow1GGwHcuK4rBQa4vaxu9WLCFQKa9G6TiVb6%2FRPMx%2BZvMVt%2BVEt3udEQCT1wYtMb1DbU%2F8HotfkBhMBTfTkf0xzVvVe2CM0nnZrpUaGRlYGRU%2FtYm5TyL1QlVlnCxXgv5i7F%2BE%2B%2FuWj2oYzRWGH1g%2BiS59%2FB%2BAU%2BvOOdsxnH31iI3fyiA7BErocQ%2FjmEz0ciUJfT9XHrhHKHf3M57rNkdRDagat6uvFkhQnw%2BVB0HtX%2FuaaZCbr8K2t27%2FGC1%2Fu2%2BXd6YZe2G7bs6thT84AiK5CrEBJRi9l%2FLjSXS1yEoPCXep0DUmE7Nnzhvg0GklQYVYltV84PwDnS2pFIMunw9VEaFtYaMUKApA0gOrB5Ld%2Br1uEdIfrVkmUSE6RAMT%2B25JnFY8HpmNpOVN5u1OsW8Ogcpeka2O7%2B1A04J4AIcKhdTdqFb2IRjBY3PRBUVhsQm8CV%2BZJmy%2F2VrE9E5Nej5tEb8aW4%2BsPR5P3cDFRy33%2BFRjhfI7Y%2F%2FTcH8CihJdo%2BU%2BEhWcOtn8NTOei2kyhi01fzT3erRHY%2FCrg7C50l0jrrsryxfdnwhThZ8m%2FMLy1c39IH5xvZXRPvd7ov7e6YiqDw%2Fv45LF%2BVSxq9TQHrAYoy512D6BXZloxIB7Iw8PWKyAY6pgEGDZ1CGYICwK9q%2FDo1oBoo27%2Ft%2BqVLY6EwkcKFwlx5GKTUR6jfMIkkMPVCyeaeztsdSWbVuTkTrk%2FWKmQIb7wCyL9rqZWNQzD85EZ62as7o59wcSwtal18sYFectqWXOebnpjureuRXBstSwqJOt0%2FutsMbGMioHNmFYFzhG98%2FU%2FOIFwHaFRGH%2BSV0qzmrJotsbB3HjSs%2BG2q1Rvn9bieTLkRGbte&X-Amz-Signature=da574e0010500492cc46e270896aa6e741609895965e699eea8dc0f63f584163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HAXDDCH%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFnuEcWPGqBFA7EIm6zgx6N6qXhkqTIdZKITW0W%2FY5wQAiEAr2dgqaa7c5GCQKBsXzIjviga5%2BxfpFF5avAhI09g2NkqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLbw%2BRsoC%2Bts6wdKircAynNZNJFgInf4mPYzH9dwd5c%2FoKP0RHt8KnghUtR5%2BwRkhR979JnqtlbVY5eZ9w0Zpo8Ju05Qmz71BFB1hyCJlpIO2y2E%2F9MXyDdGstYXvzWm4TQoIpkhsGHO6C5aTZz9uAtQsd0ZpcPg7yXaDc3f4tIi%2BSWhl%2FeZc6iwf7B31sHwM7x7Tu4GKgNuoNe1OJnib%2B7wugdJfYBsWrwvqEVz46Bwq3uainRXHBm52x8fCWoL%2BbRFXLyZ0aB%2F9p9194SjM9tXRzeMuglkGBsG1GemBL0%2BFMbMYbmGbEw%2FJLL5nbiepQDk%2F21miUELI2YL2iw%2Ft%2Fvi%2Bu78wsWYgjD%2B3YPnJoep4y%2B9f1ZFBQCAZG4PtHlrwNnhDUa0qcoz7r2eOxOFKfOkpcT%2FTDYlywxoZs%2Fq3P5r4tgrLwCm4vSKK2IUgJ%2BDH2qABKf4LfgRzscZg4C2PH1sSJwkd2eFPF57Kd8XQ%2BQfXvBPD%2FMsnh3YYtjyMfIu9LHYCvdfyb%2BCDmHZ6BHH8omBF%2F3s8fgktOdSRwXdi1kp8sKP8AKbagz%2BTwatyafseeXiZtOgeTF6a%2F3CWIbbXcfT2LmT3tBasY5nKZyxGx7%2B6XM%2FjRC6EtwiZeNSmb3cb8wcR%2FPUl4%2F64ANMJr2isgGOqUBqZ92cXffBsaUzUV4uMs%2Buq0K7SgJm6t2T7SU2YAp8P%2FZ0ulKNxFF5Kcx2vC0qtyQ0Au6UHlF0OcfV8vumlfJrJS%2BAbICKWgaEh3ZmCsp7w7jwxBa0%2BuzmDE9pQs3rOTLgneVo4Eex6LoM0yxcGCotw0VtVb4uvGBiDVpCPNEzPRNH%2BO3CI45GnShKxvhoP%2BAHiGRBN7ZishgqYGg%2BRuQn2sxljBC&X-Amz-Signature=169337223d10749d6027e8087f0ad52f6f1b87e903f49cda79790278a929db56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7O3EK63%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDyPT7L3TXNYGSdOY3Eiz3qI30BJLXLFQvynGkSJh3sAgIhAM3XY8Aq64WFJunpDYKdJL0lu79GHoJGpRCLCUoBBS%2F6KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz30CxwR7g7AugcCbEq3AOr%2BIm%2Be2TVaXiGefFuIvv44npIByuocmjwtm1v830o42L1QMNQB%2B9kMuQWvi7JAp1BwEMduh%2BzuZBQxM6BCiINwDsX1xa9DxdT22k0B5o8fQJX1BjLIl%2FK0yA67ITFJYogP6yi4uFJf5S7jXGtp4DzlzXAjA8YKSUBjRYN5sQNTaHou0632hOP11Z5MDkEDLHNUK51JF0tiJWjPtSNzEW8KCt%2BtEkvN7efucc3uG4xJjFNuyjy3ATUcpGXbJEj47F3kBm3H0DabZnK0O7RKfa17DV7tsI53WMVGCJ75HhriHT5f%2BxWNzMhcXK6VixGGs5LE6qd5kxya6nkrADW%2F5Vd3l1Byua8kO6A6sysVlgh04Xqlt9w%2F4gwPh0B%2FZVMSm4nL7AEDpGZy16IJxZl6z8FdPLzvMCg0ruU3vhoYn1WNeB1N2nUyl%2B3WKyGXaxSelJJBrlzExbAYhtOu8iUBU6n7uJ6bCVlIaOQK9hMbOpjV6vtYIFI3hQENl%2FlxCqNjJFmOuUH%2BkLnS%2BTu39yzB1BGSSUpX3ObY0vlvXC36SVpBt49kebSzetXmSyQgNwuBh27R%2FKOeyWIJsV1SgDA%2Bl0dwedKkKgCiNwl0njsTuj%2F1Llf1qmvT1yuVIaOmDCd9orIBjqkAbY6ugwbR7NheqIvtEADQZCfK8a1f%2BeFKPieDPhtZhFumVdFJGej6GpUELY0fLcHfEJwAZIEAI00yYYZJGT99I%2F1G1mKOvZoTvDMjsJKIW8GMVEpO%2B%2B5AjDSROZ6Acfa%2B169PJ5R8sgW1Ro3CSCv1Gp6eRFpMsnkSTQbHZqtydDGk%2FaZDvPvKlESU%2B8L6ptGYvMC%2FFHCpYxBua5se0u7gRtSD%2BtL&X-Amz-Signature=7f3f7557a0046df2ec1926649eac857e18247a5d3620ac27b69c3846cfb69d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
