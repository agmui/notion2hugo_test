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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267PZ4OZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFA5sqBzFFtNOk%2FNDC4f5vhpneHDz9De4CnrPBF3VwU%2BAiA7hR4pBI8gHee6RtU7O7pHQ%2B1iQKcz90Ny%2Bjuceu0%2FEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMONGNJokOKKWkBN8oKtwDYS69adkg91KK3UgNDGvmmSvJMMkdNUjD3VXC1F3zWTQ1%2BwyFVNF0h%2BIyCXRMXyGGlwbMVcW31PRq7wo%2B%2FDBjT5ymguPH5s202Dt%2BVklz3qolJFXE0HCFVoEUauZRAUR%2FKRd4HdHrVysMXCXmY%2FYp5NP6T%2FtWWwG4G1c0XyN00beVFcB1KTPFyIFrB0i%2FuUmkxVX7tTqvqeOU9gtMO8VaRJ3efib96g%2BNE%2B%2FOyAHehjMlwUO4EoDLGs1suD%2FZuoFG9zCsLlA8QSminVIU16E%2BPbtITrbJowceMmlSO0BlkiHyWVjwZe9IXjGpYq1d9yIv5EbBZkGEOdupv4n6yrZ7bL8%2FzvbAv0avv1IbPlCFy8m6G2OYl4lgKMzIi%2FF8TzHO4zE0PSbkScwu1vT1swOdgYlKOoQMI0wpcR0loL9vPbs%2BNINSC%2BeQm122lTpkLPOWeYV%2B0HUHeOxsH9JJPnkYV2yta7lKoa4ZffD3BfPv5HJvWgxINGcyFBO7eQgpKT9DZigjYXDqkYxVQ07E6Y0C0Kfc5SzR8oTtVdXWtPL8NXUiQvDgOV%2BbMIceKIxKS1y2XNzy2tBSOF6DbWkISpE2j6SH0NvLJT10CjpjWuLSFWpUaNQUFTMyEUUIw%2BEwxZyMxAY6pgEWUtaxxnucf%2BVUuN2peb8gdTtsqHfN8pKpBjLdgb5cEcrNq90N7pNW9ZnN%2BESFCTGmM92TnZ6hDIIOinMU%2BLDolhx6%2B57SBs7guVnpMR0AkYweCYtYh5vfWJBqhsL%2Ft6jJ2F69A8gMxxfHZMffVk2ypHgrQCtXttREdXqlf5sAZn35qgfSN4bg1f7%2FbKwwkVndxpHA6ommusMzFbvVSQMzZBaSYSSc&X-Amz-Signature=d94cb68b19b58a3af810a03a7bd10cf1f3157d31e444498937e71f129b3b5c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267PZ4OZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFA5sqBzFFtNOk%2FNDC4f5vhpneHDz9De4CnrPBF3VwU%2BAiA7hR4pBI8gHee6RtU7O7pHQ%2B1iQKcz90Ny%2Bjuceu0%2FEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMONGNJokOKKWkBN8oKtwDYS69adkg91KK3UgNDGvmmSvJMMkdNUjD3VXC1F3zWTQ1%2BwyFVNF0h%2BIyCXRMXyGGlwbMVcW31PRq7wo%2B%2FDBjT5ymguPH5s202Dt%2BVklz3qolJFXE0HCFVoEUauZRAUR%2FKRd4HdHrVysMXCXmY%2FYp5NP6T%2FtWWwG4G1c0XyN00beVFcB1KTPFyIFrB0i%2FuUmkxVX7tTqvqeOU9gtMO8VaRJ3efib96g%2BNE%2B%2FOyAHehjMlwUO4EoDLGs1suD%2FZuoFG9zCsLlA8QSminVIU16E%2BPbtITrbJowceMmlSO0BlkiHyWVjwZe9IXjGpYq1d9yIv5EbBZkGEOdupv4n6yrZ7bL8%2FzvbAv0avv1IbPlCFy8m6G2OYl4lgKMzIi%2FF8TzHO4zE0PSbkScwu1vT1swOdgYlKOoQMI0wpcR0loL9vPbs%2BNINSC%2BeQm122lTpkLPOWeYV%2B0HUHeOxsH9JJPnkYV2yta7lKoa4ZffD3BfPv5HJvWgxINGcyFBO7eQgpKT9DZigjYXDqkYxVQ07E6Y0C0Kfc5SzR8oTtVdXWtPL8NXUiQvDgOV%2BbMIceKIxKS1y2XNzy2tBSOF6DbWkISpE2j6SH0NvLJT10CjpjWuLSFWpUaNQUFTMyEUUIw%2BEwxZyMxAY6pgEWUtaxxnucf%2BVUuN2peb8gdTtsqHfN8pKpBjLdgb5cEcrNq90N7pNW9ZnN%2BESFCTGmM92TnZ6hDIIOinMU%2BLDolhx6%2B57SBs7guVnpMR0AkYweCYtYh5vfWJBqhsL%2Ft6jJ2F69A8gMxxfHZMffVk2ypHgrQCtXttREdXqlf5sAZn35qgfSN4bg1f7%2FbKwwkVndxpHA6ommusMzFbvVSQMzZBaSYSSc&X-Amz-Signature=ef1c3ee675312496acef6a879064e6eca76be8760ecbe59b64daf9cbf24d7bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267PZ4OZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFA5sqBzFFtNOk%2FNDC4f5vhpneHDz9De4CnrPBF3VwU%2BAiA7hR4pBI8gHee6RtU7O7pHQ%2B1iQKcz90Ny%2Bjuceu0%2FEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMONGNJokOKKWkBN8oKtwDYS69adkg91KK3UgNDGvmmSvJMMkdNUjD3VXC1F3zWTQ1%2BwyFVNF0h%2BIyCXRMXyGGlwbMVcW31PRq7wo%2B%2FDBjT5ymguPH5s202Dt%2BVklz3qolJFXE0HCFVoEUauZRAUR%2FKRd4HdHrVysMXCXmY%2FYp5NP6T%2FtWWwG4G1c0XyN00beVFcB1KTPFyIFrB0i%2FuUmkxVX7tTqvqeOU9gtMO8VaRJ3efib96g%2BNE%2B%2FOyAHehjMlwUO4EoDLGs1suD%2FZuoFG9zCsLlA8QSminVIU16E%2BPbtITrbJowceMmlSO0BlkiHyWVjwZe9IXjGpYq1d9yIv5EbBZkGEOdupv4n6yrZ7bL8%2FzvbAv0avv1IbPlCFy8m6G2OYl4lgKMzIi%2FF8TzHO4zE0PSbkScwu1vT1swOdgYlKOoQMI0wpcR0loL9vPbs%2BNINSC%2BeQm122lTpkLPOWeYV%2B0HUHeOxsH9JJPnkYV2yta7lKoa4ZffD3BfPv5HJvWgxINGcyFBO7eQgpKT9DZigjYXDqkYxVQ07E6Y0C0Kfc5SzR8oTtVdXWtPL8NXUiQvDgOV%2BbMIceKIxKS1y2XNzy2tBSOF6DbWkISpE2j6SH0NvLJT10CjpjWuLSFWpUaNQUFTMyEUUIw%2BEwxZyMxAY6pgEWUtaxxnucf%2BVUuN2peb8gdTtsqHfN8pKpBjLdgb5cEcrNq90N7pNW9ZnN%2BESFCTGmM92TnZ6hDIIOinMU%2BLDolhx6%2B57SBs7guVnpMR0AkYweCYtYh5vfWJBqhsL%2Ft6jJ2F69A8gMxxfHZMffVk2ypHgrQCtXttREdXqlf5sAZn35qgfSN4bg1f7%2FbKwwkVndxpHA6ommusMzFbvVSQMzZBaSYSSc&X-Amz-Signature=f41d873c3ea9bddf6ab2522ed5442814e478bfe3484d8cf0d94f22fa94c9e987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWMIDIDX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCCrxw0npi2Jo5dKgzcZpmtIDwln7F%2FDPnHcEgI9wVl2QIhANeRgMSJAtvM%2F3%2FoUYvyEOcVCb0d5ilEHmvyJ7Yy6HKcKv8DCD8QABoMNjM3NDIzMTgzODA1IgyFuvho2D99tWjLkvAq3AOw3tke%2Fb4LxVrzAl%2FoZ2iCsjKJo2o%2BYVOrpcBUUI%2FFHz%2BaH%2BTvNN4KuNefr1EcZRzjjuFIgEYzgig%2FbPLHSNSGeWZ7Em52xoS1kBkoef%2B1vp36JGTbnNcP5EoG50FvnQJRFI5ejYC0ZKrsvadvSxg3KrKFYhmu7Ei9RA83%2BqCaMvQlMtoPr2qAC62ZRxRH1VwpjhvJztYaE%2FoDl2HgPV1l0zINgBEHwoyMWAVgdB4gH63h%2B068W4tHZMGp0tUTZKikPhdAJgQ1kiyAel166G12j3J%2F41YV%2B4rckoM2W0Ff8T7a40DE2RWOd6VU65pWL4YTiVsHfuwl5jIU1F3lMv6vPg43CxtE%2BxYf0HURC6N9lOFsI3HCjgHTls56KQDu4w2p2RY9GLqizWhJ2RMKZP%2FcBrCLvB1VuruYUWHDcptxb%2Btf3sZmar9pvx5gB2%2B2%2B7M9c6tcqv%2BZVpVR6wJN9uSsTdUcTfVXK%2FpTp0FWoCcPw%2BteuPwZs2Y5NdWrn%2FVUVmSdKhiXina2bjpdVIwF4fwMmLcvo9FyH2VYav%2BSwkhRRatEiwrOL%2BtWds10dMwbbg2iVlOLNgrQIgN6ivpCkpQgb1VQjVDVWcsOcfuonyHKgtY1qZaK%2FwOmMD8%2FODDZwIzEBjqkAcQunoqYYy48jtI8eQBgg%2BhBH6tM2o48yvaZrWJ6t0e6Nw2bCWRJ0jDkNkzdEZFBaN8%2FUkj%2Ffy7jm6iPdqdZtlQbJfJgeJ0kyrBGq%2BeViaueFKi1%2BXXfC5CtMCQMESpBZUfynj9lGoZjrJnDLsOzY4XPCVacQbINsOEi5ZyiXWUNBYSIRkw5rL1DJ0LJkmOO3ZNWRQ%2FuIG%2BueLmFHoFPFbL7Y1pQ&X-Amz-Signature=a4ce39d2a479879e6c875d8cdbf6e27f4a2ab222bc2e9b4268618caeacccdd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AYMAPAK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDaTVu%2F%2BxZU6QAUjNL06eR5j3Ztt5A0L3TKu%2BfISgmhSwIgEXmk%2BSyg8hZsxwiCYgjQYmO2%2B2USywtr1GxQ%2B8rCf9Uq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHNPSQfWsc6bcO59IyrcA96nIuvtZ9ztDzGCZzImTkaJyuKjXBOcMTSWNJ1VGWyzz2grcTjUCWCG%2FTitC0j9cWLVwa49xjX%2BFYzPF2Mg3pZskwh9Y7%2BFb0BrPKfNXO5MXv4C5f7GiCdfut7xAIzfG6lapQjHSuFc%2FFyNY5E5yo%2BCsAGssiXS3d2BdXgmTrIisQuDeM16vXE5GDr%2FvPEjjbL2Fm1Q1%2FExw5yR3q6Plb8ODYhr2I8lQT7ku9Hkaxj51e4UqHmBDFmNLdU0BQlpK8%2BUjvEmPoqfHXtz3xX%2BXwrPTxnm8nTSs49hu98UJMXv4wQfWt0ekll0ajmelGc3MJccM8B27ncpzOsaLMcYhYD3V%2BU2vAYENbLKB7uG3ftGdDnoU3%2FBHjwXFz194RpQ0R1ONSLGadSOFZ0G25T6RIBGuwrurVQ%2BG7rIVMIYc990Dh%2FiHn%2FyLJ14t%2Bo8NaB1g3k03%2Bqh2xwmqyi2TuFqP%2F0dsKF2DRz7tSws8t7wZZ5qkV0IE1qAxr0VF6tgSIC9GP73u26YBkHHQbctTNjlqX8FbFxLXvayA1Wk8ftrCbQxMCwR8DHo%2BD68Q%2BD2ssFH7AXHmybMRR%2FgzuDe2EViM8pD9IrUs2RFwgDAxZtjPNjrP%2Fn0n2a%2BFaNOui86MKScjMQGOqUBlk3g7XqT5kIbPw%2B4g9cqW9arugPZlLzosZ3IzBcleuoj0t9n8G89PGWKbxMaUY%2BlbrfMQZtT9sjkTfXyv3sSKqn3%2BaFjI0UtRmBeip7q9CssrTxZOCpHrTqyvfLeJ9GbVgKQkOma0fQzmZ01Dw%2FNbXpO5SiLNrnd6TlwiqbwwTrViKjkFKKV2tYoEbUMNebqHTJLCJ55KkQV6pxUoJ9By%2FfUtVO4&X-Amz-Signature=fecb8a61a6b7bda12a91300bb1c18b10c7d4ca35d73e4a225946b30af8fed50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466267PZ4OZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIFA5sqBzFFtNOk%2FNDC4f5vhpneHDz9De4CnrPBF3VwU%2BAiA7hR4pBI8gHee6RtU7O7pHQ%2B1iQKcz90Ny%2Bjuceu0%2FEir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMONGNJokOKKWkBN8oKtwDYS69adkg91KK3UgNDGvmmSvJMMkdNUjD3VXC1F3zWTQ1%2BwyFVNF0h%2BIyCXRMXyGGlwbMVcW31PRq7wo%2B%2FDBjT5ymguPH5s202Dt%2BVklz3qolJFXE0HCFVoEUauZRAUR%2FKRd4HdHrVysMXCXmY%2FYp5NP6T%2FtWWwG4G1c0XyN00beVFcB1KTPFyIFrB0i%2FuUmkxVX7tTqvqeOU9gtMO8VaRJ3efib96g%2BNE%2B%2FOyAHehjMlwUO4EoDLGs1suD%2FZuoFG9zCsLlA8QSminVIU16E%2BPbtITrbJowceMmlSO0BlkiHyWVjwZe9IXjGpYq1d9yIv5EbBZkGEOdupv4n6yrZ7bL8%2FzvbAv0avv1IbPlCFy8m6G2OYl4lgKMzIi%2FF8TzHO4zE0PSbkScwu1vT1swOdgYlKOoQMI0wpcR0loL9vPbs%2BNINSC%2BeQm122lTpkLPOWeYV%2B0HUHeOxsH9JJPnkYV2yta7lKoa4ZffD3BfPv5HJvWgxINGcyFBO7eQgpKT9DZigjYXDqkYxVQ07E6Y0C0Kfc5SzR8oTtVdXWtPL8NXUiQvDgOV%2BbMIceKIxKS1y2XNzy2tBSOF6DbWkISpE2j6SH0NvLJT10CjpjWuLSFWpUaNQUFTMyEUUIw%2BEwxZyMxAY6pgEWUtaxxnucf%2BVUuN2peb8gdTtsqHfN8pKpBjLdgb5cEcrNq90N7pNW9ZnN%2BESFCTGmM92TnZ6hDIIOinMU%2BLDolhx6%2B57SBs7guVnpMR0AkYweCYtYh5vfWJBqhsL%2Ft6jJ2F69A8gMxxfHZMffVk2ypHgrQCtXttREdXqlf5sAZn35qgfSN4bg1f7%2FbKwwkVndxpHA6ommusMzFbvVSQMzZBaSYSSc&X-Amz-Signature=fc8277581b75e6ed2c6e5241ad555dfeb1c193b947c83f55335d51fe287f499c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
