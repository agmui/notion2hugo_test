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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E73AF4R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHxM97DHkhkLFGAuxo4aJe1w7gVUgdZigzsIut29l5QIgN3skxn2evZnXPDp0b01Ft5bGHsrHq7Cn%2BWsXYDQp0%2FAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMW6Aby77l7axNFkUCrcA9IFdDXVc8sGpbzlLflZBS8q4bm6VQT8WP1K%2FsGzbbCKFPT%2FaLEb6kLQtuiARYVVYBqUWkc6fkEUDMQdaUP9soP5f%2FL8jb0868oHOE%2F4yyupsdsK6pxza4WACMXMlYBxGIcfbB8LWkhBq%2BxFXsNK%2FMEO%2BAIxQjMuwaz40ZHKwEr14A00t%2FPeyyy3ao%2Byf7TsgNU9sZEk77ktwiSraYON23lxZ2DpMyAg3%2BEp01ZDyv6JyXkwF85rv52oxLSBVkr4naaC230A8XTlxJX4cXZFWsgV1BOSD2RMRr4MaUGzaXLYZYgXUQwnHQOyM7Leqw85W5hE1jWZqErFukC%2F5ncG77uptyW2paIE1ataa3mzqs84FMePriRIiC%2FzjHW3HvRYiCwoWw9q7g8gZ04wWP%2Fme%2BciwNGG7z7VRkVnV7h2%2Bt5paHCVhyAUWzHbarb%2BChdpJM3vU1JLdFeJRVHcvImiZFzVShooNItcHjEgqe4bMtB8uK3a4cIFbYhhpf7afDY59ZrmvvVyf6Ud6EAjn5P%2Fx%2BPHv9cdkAQiTO7KRrWRamsttnWgFwAygBn%2BPw84kpqHK0iahGx1V%2B0YDCSlXq9t5k6sREIJ4MmkU73tc8C1CfR0ngf73XOLRhFkdiLgMNnZ%2Fb8GOqUBPBbYlmm9NRO69vKOchutLKK2HCs4CVF%2BdT7QyO5WX%2B0GGKl3Z%2Fg9SmRSEkI8qYwcr8ll5O0nvKk81dXkzpQuJZTFEBxYiuqp8DUJtzB9kNn9%2FWDJFaRI%2Fa4is9hIF2udlNSJZOCrvk9ixPine5ExuIMSuF38WnAQ1SdsHOFP9YY6%2FXgtRkHubIOMzgcOVg4D796oWemkwvFPgjAXZTAWOYdqnALm&X-Amz-Signature=9112189efab78499858bee27485e34f2dfefb9d957a9d6e210d5d903098a0ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E73AF4R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHxM97DHkhkLFGAuxo4aJe1w7gVUgdZigzsIut29l5QIgN3skxn2evZnXPDp0b01Ft5bGHsrHq7Cn%2BWsXYDQp0%2FAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMW6Aby77l7axNFkUCrcA9IFdDXVc8sGpbzlLflZBS8q4bm6VQT8WP1K%2FsGzbbCKFPT%2FaLEb6kLQtuiARYVVYBqUWkc6fkEUDMQdaUP9soP5f%2FL8jb0868oHOE%2F4yyupsdsK6pxza4WACMXMlYBxGIcfbB8LWkhBq%2BxFXsNK%2FMEO%2BAIxQjMuwaz40ZHKwEr14A00t%2FPeyyy3ao%2Byf7TsgNU9sZEk77ktwiSraYON23lxZ2DpMyAg3%2BEp01ZDyv6JyXkwF85rv52oxLSBVkr4naaC230A8XTlxJX4cXZFWsgV1BOSD2RMRr4MaUGzaXLYZYgXUQwnHQOyM7Leqw85W5hE1jWZqErFukC%2F5ncG77uptyW2paIE1ataa3mzqs84FMePriRIiC%2FzjHW3HvRYiCwoWw9q7g8gZ04wWP%2Fme%2BciwNGG7z7VRkVnV7h2%2Bt5paHCVhyAUWzHbarb%2BChdpJM3vU1JLdFeJRVHcvImiZFzVShooNItcHjEgqe4bMtB8uK3a4cIFbYhhpf7afDY59ZrmvvVyf6Ud6EAjn5P%2Fx%2BPHv9cdkAQiTO7KRrWRamsttnWgFwAygBn%2BPw84kpqHK0iahGx1V%2B0YDCSlXq9t5k6sREIJ4MmkU73tc8C1CfR0ngf73XOLRhFkdiLgMNnZ%2Fb8GOqUBPBbYlmm9NRO69vKOchutLKK2HCs4CVF%2BdT7QyO5WX%2B0GGKl3Z%2Fg9SmRSEkI8qYwcr8ll5O0nvKk81dXkzpQuJZTFEBxYiuqp8DUJtzB9kNn9%2FWDJFaRI%2Fa4is9hIF2udlNSJZOCrvk9ixPine5ExuIMSuF38WnAQ1SdsHOFP9YY6%2FXgtRkHubIOMzgcOVg4D796oWemkwvFPgjAXZTAWOYdqnALm&X-Amz-Signature=02d5d0d8cc73530383ca6e02a0dbe969980080c61a33b1561c1dcc4d2a92bf0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QQLSVTY%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJrRWfiwxtLmBqswrLyix%2FysVj%2BxAIgYIjZvk%2BKqn2TQIgLL8oXk8Zr8axYcvBhNvOJc%2F%2BgN780x8zriUrDnpY8Ggq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDKH7dl4yCcIhtZD6vCrcA5Lb036WKLMPmUejI3bMhR78%2FctVO9KdN4oe4c63mA%2F3JfuPNJJ2M%2FfK8zArDRq9KI%2FbqnZ1JLZnmg3HsO4OZ8aKLz0jGboagIaXbiGOdqdy0rL4DgXdzuYniy0WS0U5cp6BceztesXFFw4Q816B5%2F2WCEXmA%2B3gYzj2JDUH4QKvaE9AqmDRoWrGIA6qx8IXGoecSywgeV6EMa7dFmjxL90HXTGJmOlUCxG6T7%2BOqgIpqTWukZas%2FVcAvDO%2FamWQGl7KK7Tmjld2dJOvyfm5n8TrHa8MFhzQdw2FcSLaJpsCLbdzhVHN8esbR5mZRLoUVRYppIAZPfEpEknnlt2Gt65kWC0XJ88X6JqLNlkUmYueGpvVs6UjVtrUbaBaf8m8bX6pwu7pHPJ5SVkgGtOGAY%2BS7Wi4ivL4RseUDlgzg58TR6BcL58UayhEv7597Hn9yorcxZCLw8hi2Yz7UUzp8pMgSXN24hMuHo1ziXVnzNgSo4hmy2FmciGhZA57Vx3jbY9HrRwiLWnLL5hibQHnWXlP6z0wXvKY8TcFZmLAaf2t9oWNycQWnplaBQJpgGFpbg%2FgCtpuPAKQyKELsZj%2FOqhgClTKG7N6P%2FGlLEh70%2FJnfU6geKnmLGCxnKehMNTZ%2Fb8GOqUBZdZ3fV29f%2BopyU9CTz75Kx73jZ%2Buv2dDu4uliw8rdBDS1xAQaA4PoOZe51O1y31Dg64HeK%2B%2BpKY8Jblbfxip8cOQ0hvzSh1hq3cbouu1Buq6n%2BP2MAo3je6YD6%2FI4VEgXW1oPx046nkRauoET6Cyk96R0OyYNPx4WHew9pr4zNkvYYmdKF5yipFFkR9FtGI2yZuPEIq%2FMefRBLKwU8yNxalHCnab&X-Amz-Signature=597f90430324a1b82ff2c44b72c3d437202480d584859e749a304caf7dd25f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCK2OON%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyVRg3TXF9%2Fplp6aYvu9Wvcl898P5HyTEKIVFp7uNWrwIgYEiPLAUlEXdqHB5bTvhOphTsrcXPk0DTFfAQ2SkerMQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDhvZB8nNVtSVnZI1SrcA517qEV7SFRezKap%2BkyVOpp0ytcGNx3dtN4kn2CHRlzoDglo5P6f43404eHDbJp8fBdUpz%2FBV%2F09LS0YtaMfgmq%2Fk%2BC4%2Fr2YX1xpJGhLz4FPdxqKVWthZJp4DdH85u4i1U0JT3Zv3JHV2FnNxwzi%2BolF56BVtbRp%2Br%2FwhB4n4a8hUNDfLE7Sc9dcy1AjRgHPm1%2FD%2BgObU8g8V0KXaA95TE8VS%2FVqrd%2Be8N%2FXc8FnSNjik2fuim0wpT8anpvkStOCm3oXfG4eLjOnaBAvBx%2B0EZhFBYzixBB1%2FUqMOS0d2ICyo649WcfbRUeOWhhiCWthRWR5ye4x%2FoMVt5HgQUn5r1v4nmZeFqLxPeKkDLTlAIUkHdHxlbjJfKNYMZE2%2F1g92QdsGxant2ia6gWzQAdiAmsu1Cn1mzWeUPt5TUF6Hq%2FBlJ%2FkuxET1YbJs6OSO3PnZpFR3DWbl3FlcBqWMYpw8jyz1Xd%2BhXot75HfmufU08Ae05012YL1iXifmKWVcAORiBNQ969jeuJzLz%2BZWrATjIzbGyAO2YfGUhMczDGT6mkyRa6Hp7gIrvYGKTz9qtOEfHySSab7unVSY2VDkg2BQUNc28o%2ByppaVjzHRW5J5Es1vdjR6PeDAb1eR9LDMK%2Fa%2Fb8GOqUBGwlZOQEzKNYBa1assAUsfSE6I%2FSFB9t%2BZ2c%2BnFAcZyzwhS6IV10sA%2FBt6SuQOlVjvMo3JjdlcjiV6qEB3zZTXj5nj%2FHWMvgaOwblxJQDIUeK9fkEzmEBQRgn9RumLE6nnbmLA5juhEUbze3nU5fnBDL69ws4GH%2B%2FpCV6ucJ6a2jhjaU%2BQz0%2F9U0FfaZFdzeIPF%2F4BE%2BPwR6jnrPdov7xwkgx0fll&X-Amz-Signature=e95ea055d724a9a07c620d2c23123935f61dc909c42b63f8d5bfa3cbea3d5fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E73AF4R%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHxM97DHkhkLFGAuxo4aJe1w7gVUgdZigzsIut29l5QIgN3skxn2evZnXPDp0b01Ft5bGHsrHq7Cn%2BWsXYDQp0%2FAq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMW6Aby77l7axNFkUCrcA9IFdDXVc8sGpbzlLflZBS8q4bm6VQT8WP1K%2FsGzbbCKFPT%2FaLEb6kLQtuiARYVVYBqUWkc6fkEUDMQdaUP9soP5f%2FL8jb0868oHOE%2F4yyupsdsK6pxza4WACMXMlYBxGIcfbB8LWkhBq%2BxFXsNK%2FMEO%2BAIxQjMuwaz40ZHKwEr14A00t%2FPeyyy3ao%2Byf7TsgNU9sZEk77ktwiSraYON23lxZ2DpMyAg3%2BEp01ZDyv6JyXkwF85rv52oxLSBVkr4naaC230A8XTlxJX4cXZFWsgV1BOSD2RMRr4MaUGzaXLYZYgXUQwnHQOyM7Leqw85W5hE1jWZqErFukC%2F5ncG77uptyW2paIE1ataa3mzqs84FMePriRIiC%2FzjHW3HvRYiCwoWw9q7g8gZ04wWP%2Fme%2BciwNGG7z7VRkVnV7h2%2Bt5paHCVhyAUWzHbarb%2BChdpJM3vU1JLdFeJRVHcvImiZFzVShooNItcHjEgqe4bMtB8uK3a4cIFbYhhpf7afDY59ZrmvvVyf6Ud6EAjn5P%2Fx%2BPHv9cdkAQiTO7KRrWRamsttnWgFwAygBn%2BPw84kpqHK0iahGx1V%2B0YDCSlXq9t5k6sREIJ4MmkU73tc8C1CfR0ngf73XOLRhFkdiLgMNnZ%2Fb8GOqUBPBbYlmm9NRO69vKOchutLKK2HCs4CVF%2BdT7QyO5WX%2B0GGKl3Z%2Fg9SmRSEkI8qYwcr8ll5O0nvKk81dXkzpQuJZTFEBxYiuqp8DUJtzB9kNn9%2FWDJFaRI%2Fa4is9hIF2udlNSJZOCrvk9ixPine5ExuIMSuF38WnAQ1SdsHOFP9YY6%2FXgtRkHubIOMzgcOVg4D796oWemkwvFPgjAXZTAWOYdqnALm&X-Amz-Signature=dc3e0aa4a174df223396a17a7d0245f5978be5ff8fb5f2f95ad9c3d0b2c7a1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
