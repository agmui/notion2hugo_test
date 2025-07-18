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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKKGR4S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBmYqoyPuOmESMG6cGlwDGBe94R%2Btba%2B5ElpjXFM5jCwAiBsCV7ZHL6S1M0QJqLLmzr79e8Cq4GFfXPDTyxHqN1cXiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMvegMQ6acKWRtA7KtwDj6CufPhxOcfSvR3YlVSaEUX0x66HVMb2A2CNNvIRUSOaul%2B5TXK%2BCL5I5Kt9S7Aq%2F%2BE8DhN%2FWaXnXHMnc8vNxuGMRoIysy9UFe6oofJCZUkyTJErhxJ6uNK01OolNXXnPRPrK095gUtJQuCGTGZtK8JhLSICS1VPOK2ocsDHI1dEzAs7ADnKm39ePKq7SAtuKu%2BINiAa3agne%2FwvTSeJpxsZNnR%2FtaYcnDNjwz8pNnIzarkuL62JluhgoYYdPf8V%2FtpeD1yLTAdW1vAMtvwCbKjXgRBUV900YViD8Gz7JHIQjFrzl89fksaF6J9t0nsPwVKWCR6q3DNDyvk9Cbzkj3NtwqeIfZ9G93N002BZ9jI%2FNlsc4E1zWX%2FgvNoYk99E3J3EQ3pAsA32nzcXQhHt4eumuxQlVwo6u49lS6yhAXqcV6mJxK94bExAtdiM9pGFYNZQmRpvFVBjcYVsEwZXlgmXu%2Fn7EKD49724t0C3s70%2FiX1UxyMhdU8IAcdLrzEqNeCNoJpCAvgDgtvgk6ZOPbc%2FTFBQrIKe1vrWlOUppx8DisUiZGR6tYXtoZaC4bFKBjirUepS2yB9tp5JrhNkRa%2BN3H2Y42fknqmm40%2BMKyq0xvcFxRzPkIMVn0QwzevpwwY6pgGx1LQCPxfg%2Bxwde4VQ5mTBe5i3oUxBxNeojA3dY4jfiyH5JBBA5FswBbhIJ7kPvTfdQmA5ch%2FK2LhlEM0AOBTLA6Hg1Jg7T40izY3YK0QkvWW6sRTem9OxXArkoIY707wFEl5dKRnILtuj63BnzA4KNRY5KdCpClyZpbY2CNkoNVDanywFiUl8y0HuDyPH69jVcb7C6GzLVWRMCG%2F3jdUCbMWNMzIR&X-Amz-Signature=2b81b9a1b6a5fb7fbf96b3ae8050d6b761f49095378f5db1a4f338510b9ae68c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKKGR4S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBmYqoyPuOmESMG6cGlwDGBe94R%2Btba%2B5ElpjXFM5jCwAiBsCV7ZHL6S1M0QJqLLmzr79e8Cq4GFfXPDTyxHqN1cXiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMvegMQ6acKWRtA7KtwDj6CufPhxOcfSvR3YlVSaEUX0x66HVMb2A2CNNvIRUSOaul%2B5TXK%2BCL5I5Kt9S7Aq%2F%2BE8DhN%2FWaXnXHMnc8vNxuGMRoIysy9UFe6oofJCZUkyTJErhxJ6uNK01OolNXXnPRPrK095gUtJQuCGTGZtK8JhLSICS1VPOK2ocsDHI1dEzAs7ADnKm39ePKq7SAtuKu%2BINiAa3agne%2FwvTSeJpxsZNnR%2FtaYcnDNjwz8pNnIzarkuL62JluhgoYYdPf8V%2FtpeD1yLTAdW1vAMtvwCbKjXgRBUV900YViD8Gz7JHIQjFrzl89fksaF6J9t0nsPwVKWCR6q3DNDyvk9Cbzkj3NtwqeIfZ9G93N002BZ9jI%2FNlsc4E1zWX%2FgvNoYk99E3J3EQ3pAsA32nzcXQhHt4eumuxQlVwo6u49lS6yhAXqcV6mJxK94bExAtdiM9pGFYNZQmRpvFVBjcYVsEwZXlgmXu%2Fn7EKD49724t0C3s70%2FiX1UxyMhdU8IAcdLrzEqNeCNoJpCAvgDgtvgk6ZOPbc%2FTFBQrIKe1vrWlOUppx8DisUiZGR6tYXtoZaC4bFKBjirUepS2yB9tp5JrhNkRa%2BN3H2Y42fknqmm40%2BMKyq0xvcFxRzPkIMVn0QwzevpwwY6pgGx1LQCPxfg%2Bxwde4VQ5mTBe5i3oUxBxNeojA3dY4jfiyH5JBBA5FswBbhIJ7kPvTfdQmA5ch%2FK2LhlEM0AOBTLA6Hg1Jg7T40izY3YK0QkvWW6sRTem9OxXArkoIY707wFEl5dKRnILtuj63BnzA4KNRY5KdCpClyZpbY2CNkoNVDanywFiUl8y0HuDyPH69jVcb7C6GzLVWRMCG%2F3jdUCbMWNMzIR&X-Amz-Signature=6a4408e3967317fe248891aa4e79ab28d9fc6a1309f8e08510f7bcc0657591fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKKGR4S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBmYqoyPuOmESMG6cGlwDGBe94R%2Btba%2B5ElpjXFM5jCwAiBsCV7ZHL6S1M0QJqLLmzr79e8Cq4GFfXPDTyxHqN1cXiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMvegMQ6acKWRtA7KtwDj6CufPhxOcfSvR3YlVSaEUX0x66HVMb2A2CNNvIRUSOaul%2B5TXK%2BCL5I5Kt9S7Aq%2F%2BE8DhN%2FWaXnXHMnc8vNxuGMRoIysy9UFe6oofJCZUkyTJErhxJ6uNK01OolNXXnPRPrK095gUtJQuCGTGZtK8JhLSICS1VPOK2ocsDHI1dEzAs7ADnKm39ePKq7SAtuKu%2BINiAa3agne%2FwvTSeJpxsZNnR%2FtaYcnDNjwz8pNnIzarkuL62JluhgoYYdPf8V%2FtpeD1yLTAdW1vAMtvwCbKjXgRBUV900YViD8Gz7JHIQjFrzl89fksaF6J9t0nsPwVKWCR6q3DNDyvk9Cbzkj3NtwqeIfZ9G93N002BZ9jI%2FNlsc4E1zWX%2FgvNoYk99E3J3EQ3pAsA32nzcXQhHt4eumuxQlVwo6u49lS6yhAXqcV6mJxK94bExAtdiM9pGFYNZQmRpvFVBjcYVsEwZXlgmXu%2Fn7EKD49724t0C3s70%2FiX1UxyMhdU8IAcdLrzEqNeCNoJpCAvgDgtvgk6ZOPbc%2FTFBQrIKe1vrWlOUppx8DisUiZGR6tYXtoZaC4bFKBjirUepS2yB9tp5JrhNkRa%2BN3H2Y42fknqmm40%2BMKyq0xvcFxRzPkIMVn0QwzevpwwY6pgGx1LQCPxfg%2Bxwde4VQ5mTBe5i3oUxBxNeojA3dY4jfiyH5JBBA5FswBbhIJ7kPvTfdQmA5ch%2FK2LhlEM0AOBTLA6Hg1Jg7T40izY3YK0QkvWW6sRTem9OxXArkoIY707wFEl5dKRnILtuj63BnzA4KNRY5KdCpClyZpbY2CNkoNVDanywFiUl8y0HuDyPH69jVcb7C6GzLVWRMCG%2F3jdUCbMWNMzIR&X-Amz-Signature=995d0f6100cec07bfc1d2bef83c2382671b885a7990ba13a3730831a0e4e396e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGHBZHE%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFTNd1gaWb05YxudwTObjjyekYooxnPw83bo7rkSGIEOAiEArjYeHzzB7L8xWWwt%2BGJ6MdeXZPhAdRT3ML7Mokf8X2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMcyHa%2FrmenUDdmgSrcA%2B5Bb5vCcVj%2F2D5IgWQ%2F6x%2F8ocDBF8dX8kgdeGb%2FZFWiXTfTbunwMwHWMyLLVkLvXKMPAMEUW3jwdRd%2FFCVLT0%2FAUA%2B9HazO22rmMf%2F7lyWS2rYF2Qja%2B9b3irxJnHvPyRQh2cXiWcn0wADNlAkrjpCPEBPBtaZTmjLF%2FqVY6aKZs7ks%2BzVuG4nAKkIhnQiiTemHejmRNgwEwGDNRaB3Lh0YjY1XHZbEJKDCVnsBVRmtmhXYSaSjNf%2FqY3%2FZJx4MwiH%2F6%2FTU6o7Es3HJ3Se2kbFGSC0T8bVPb5WU29lJ6xDQh41SV2hEBAeb56%2FxQo4MUPqfBKgaXHPMllAvw8UyCR1iZuBG6%2Fq2FhrixbWKXyiCaM07cgURlj%2BqJswh1zwjgkJFmQy991SWSDXspL0BQyZVJgrPEslrHkPeKRk9ztfPiJiQVYxfoeM8zWP6Xd22Qzka3Ys4O6EW4dq6n0oT1k84rJqL%2Fjxg96J8M96jcwAMsgiH%2Fkm86prMgLpMIbRa47Tc%2FHeWJ5oNEfj3ufZZ2xe5b1Xq1eqMVTCuGhHXl%2Bf5lmW4XEo8eKm5jgSQF%2F5IbSk8NcrzYA4eLEPzQH7VwpLa4C4LqryagXRzYbuF2Df33xzKJEvXcsFircWFML3q6cMGOqUBzCWiRFycTEdb5%2BCyXOar1gdkJwcFcRa%2FwO7RFCHJwhIF54usTcv2WqBfBDurSkzbxTGfq7sH6%2Fd4QEaBZ2kRTBvY6xKTfqE%2FCWHD2Sk6ABFq3NCr6gfyNO3%2FcuHJEhF%2FYrKh1p8IROfUcyiOBwCL2swUrn4EsKN%2BYgnmHQHo0ajnP1aVdWMCcqxI5NU%2F5M9ABxSedcxpadfPIR43e%2BYnJXQmYcKz&X-Amz-Signature=3a8936b59330790792180919e39f3fb1a820e1776f22c7a0a45ca356fe3a257c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5Z4ACF%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIB%2Fz9Zytfn%2FKJuJJJpFM4LcQrXZUh%2FiJJYB8diypKuB2AiEAu8xK3UpOKJxsiVOyzB9pIVUWLJX%2BuB7YJdKqtekrOMAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp%2F52IwoXy7p7%2BR1SrcA%2BgRtN2nMomLFI4EG0qDmJmQNOoVLaVelD7mUVAe3VaK1RDb8I1FHrJHA8XjL0KzisQZAxd2I8kZ43IbtjgpkxCvD7PQriLnp6PeAPmBzwbtUaVR%2B8PsauWZzw2PJiGD6EYgACjyYPmqlB4NZijPEMcAoBuJAWVeTiMbe7lXclFnI735eUjk1eBA8yH8wkPviI4gzpGVEFVP7JFAXsiQl9c6NmilZTUGkegcC0N0W%2B1e1u%2FelpW8Q%2F85HkzFwTFcwehbDljIPUdLgD1cDgsDGVvSqLQXKA%2BbxJmkbi5h5mJ1K6VjZroOGPj%2F1OqT1JzRuGL4qJCcFU9XqKoXixdXchJ59yY9%2FYHxDaVgfQ6Tjzk6zLoixUYZ0A5nZl%2Bz%2FmTX%2BEIlYBWxgeSU4m4hNU%2B7qojPmsGE8EFSai1%2Bu1ryfMT6FzMGD3Zn4ExGXyqbEQVmvQjVrBiJiXNdnoMzb1CKeAGm7RXL1abOELXzmY%2FHiKhVjsXOsADtzBlzKLEIQn0Q%2FuZX1NfH1OB87E1JEV72%2Bt4O63IiLcVkpygyYRiMq7zMQnt4xMOV%2Bza5B0lWd2z0Jq8zcOghzDZ2dpSS%2BE%2Bg0ARYgCCpC0Wn7I1NHlmQ2HJeta378HyNq97TB1fEMIDq6cMGOqUBc4%2BIquT0kmNc3%2Fhg12QPgexQbHULu2uSQQF%2FEfC0kqWl%2B2d4jquOAbvdzW4OJwXPzo70o%2F1x3j8UkJw58WlcYf%2FamIM6SjtvqPufQZ098g5cwSI7iMTuRgMysOflStBFJprWgX1IxHkdq0v9Gnaz8uZ1fUmAjtb1lfwRVQDYL9D6QmI5VOqoqAcgb3DFDpwoc%2B6iZXy%2By6BaA1bRrj2TLuY0tZWF&X-Amz-Signature=9aa125a2ce0a9d804356be93c35bc2a5eb922294bb37b12d490acf61819530df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFKKGR4S%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBmYqoyPuOmESMG6cGlwDGBe94R%2Btba%2B5ElpjXFM5jCwAiBsCV7ZHL6S1M0QJqLLmzr79e8Cq4GFfXPDTyxHqN1cXiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNMvegMQ6acKWRtA7KtwDj6CufPhxOcfSvR3YlVSaEUX0x66HVMb2A2CNNvIRUSOaul%2B5TXK%2BCL5I5Kt9S7Aq%2F%2BE8DhN%2FWaXnXHMnc8vNxuGMRoIysy9UFe6oofJCZUkyTJErhxJ6uNK01OolNXXnPRPrK095gUtJQuCGTGZtK8JhLSICS1VPOK2ocsDHI1dEzAs7ADnKm39ePKq7SAtuKu%2BINiAa3agne%2FwvTSeJpxsZNnR%2FtaYcnDNjwz8pNnIzarkuL62JluhgoYYdPf8V%2FtpeD1yLTAdW1vAMtvwCbKjXgRBUV900YViD8Gz7JHIQjFrzl89fksaF6J9t0nsPwVKWCR6q3DNDyvk9Cbzkj3NtwqeIfZ9G93N002BZ9jI%2FNlsc4E1zWX%2FgvNoYk99E3J3EQ3pAsA32nzcXQhHt4eumuxQlVwo6u49lS6yhAXqcV6mJxK94bExAtdiM9pGFYNZQmRpvFVBjcYVsEwZXlgmXu%2Fn7EKD49724t0C3s70%2FiX1UxyMhdU8IAcdLrzEqNeCNoJpCAvgDgtvgk6ZOPbc%2FTFBQrIKe1vrWlOUppx8DisUiZGR6tYXtoZaC4bFKBjirUepS2yB9tp5JrhNkRa%2BN3H2Y42fknqmm40%2BMKyq0xvcFxRzPkIMVn0QwzevpwwY6pgGx1LQCPxfg%2Bxwde4VQ5mTBe5i3oUxBxNeojA3dY4jfiyH5JBBA5FswBbhIJ7kPvTfdQmA5ch%2FK2LhlEM0AOBTLA6Hg1Jg7T40izY3YK0QkvWW6sRTem9OxXArkoIY707wFEl5dKRnILtuj63BnzA4KNRY5KdCpClyZpbY2CNkoNVDanywFiUl8y0HuDyPH69jVcb7C6GzLVWRMCG%2F3jdUCbMWNMzIR&X-Amz-Signature=dbdc36229ca5e6e292c00422c7d399e6542fad5bb3db9b7e395399604160737d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
