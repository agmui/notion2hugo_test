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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YDZUUF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmiL9caYxXZunMuPuc463MhqPTluuKYmEm5d%2F3RrBN0AiBeSptfPCQrNBS%2BBdtAXrc7qCjqsXDMN7yNPNdpsIwC3iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0WnW7nObworbY9oKtwDS0Qi2iCCIcl%2FdWuOgGYyF%2BIMZRp9HcOH8GSNAYZjvpzCIS6vpdGNqQk9JgTXqfb9fLB0M0j2MY8zje2CUi%2FUviGIu5rillsY%2Frjjna4oRcdF27KSo9R7rtsL8VSYLxrIs7kqjeR5EsTRIfhZ14%2BoETL%2B1fTBXEiU709gFjRvpkOTTycCeKjv1rgBx6p8TyUrm5SyytQoXdwbbXv2Ua%2FZpqFuYIUW49BIcPmsYPN%2BZK25K0Cgva5zzgGJlowSH0EkiaucBrtMz3Ny5fdu6bF6dh2Rv3xylrJi0bVfksTxg5TfyofLn1gC7NghjjOICoDSxaPMjsnTCobjx5E4RQqJzYDomvCEXMBPQWr2Jpe17FjeQX%2Fc0vASCkCoMMN6DoBBQjcJl1DfUFNb1u71jkOd6UQPZM3%2FVSbibx%2BaHib%2FfCrxqiuvCU0eGNUVpTmKzvvH9wX9A9%2BENE1jhoTqAqNmsxZJxbmyL0I1v4e9TUxkzZTncccN79a87YP9FO8ban4hXyB2DCSm2b86uddj2kTI1ZkDkaYzH9sHWyUY%2BoVgIwXke4jQPcljNCORipy4gmgPn7zPk7HZCZy5YY%2F8TWafRcnHUAVF%2BjLBbEPJgRDpNUl9wVV5%2BJUzJ2qm93sw%2FavmxAY6pgGKS8ACQuGbxsR88MU2bB8Un9yV8dVz75%2Bfntjs8%2BRpyFkBxXxWMscPkePImwp9xGey1kTVJl%2FT1rD%2FhGSfvq7Vx7YGZLJ3pudnCon4imxZv9GuypRzLuljHVGggYkm%2BcKBe9C4%2Fl6yDxHSu4uiexB1rxcRelDjbmYvER2K9deWnX90fq7vZ42B3J0yDP8V67Fui6I%2FVbi20OBuR1%2BB3nWK5jen7khx&X-Amz-Signature=22efbf8021ae8a39f0f1d464b320b41825210b02eefd319772ff04a606bee9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YDZUUF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmiL9caYxXZunMuPuc463MhqPTluuKYmEm5d%2F3RrBN0AiBeSptfPCQrNBS%2BBdtAXrc7qCjqsXDMN7yNPNdpsIwC3iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0WnW7nObworbY9oKtwDS0Qi2iCCIcl%2FdWuOgGYyF%2BIMZRp9HcOH8GSNAYZjvpzCIS6vpdGNqQk9JgTXqfb9fLB0M0j2MY8zje2CUi%2FUviGIu5rillsY%2Frjjna4oRcdF27KSo9R7rtsL8VSYLxrIs7kqjeR5EsTRIfhZ14%2BoETL%2B1fTBXEiU709gFjRvpkOTTycCeKjv1rgBx6p8TyUrm5SyytQoXdwbbXv2Ua%2FZpqFuYIUW49BIcPmsYPN%2BZK25K0Cgva5zzgGJlowSH0EkiaucBrtMz3Ny5fdu6bF6dh2Rv3xylrJi0bVfksTxg5TfyofLn1gC7NghjjOICoDSxaPMjsnTCobjx5E4RQqJzYDomvCEXMBPQWr2Jpe17FjeQX%2Fc0vASCkCoMMN6DoBBQjcJl1DfUFNb1u71jkOd6UQPZM3%2FVSbibx%2BaHib%2FfCrxqiuvCU0eGNUVpTmKzvvH9wX9A9%2BENE1jhoTqAqNmsxZJxbmyL0I1v4e9TUxkzZTncccN79a87YP9FO8ban4hXyB2DCSm2b86uddj2kTI1ZkDkaYzH9sHWyUY%2BoVgIwXke4jQPcljNCORipy4gmgPn7zPk7HZCZy5YY%2F8TWafRcnHUAVF%2BjLBbEPJgRDpNUl9wVV5%2BJUzJ2qm93sw%2FavmxAY6pgGKS8ACQuGbxsR88MU2bB8Un9yV8dVz75%2Bfntjs8%2BRpyFkBxXxWMscPkePImwp9xGey1kTVJl%2FT1rD%2FhGSfvq7Vx7YGZLJ3pudnCon4imxZv9GuypRzLuljHVGggYkm%2BcKBe9C4%2Fl6yDxHSu4uiexB1rxcRelDjbmYvER2K9deWnX90fq7vZ42B3J0yDP8V67Fui6I%2FVbi20OBuR1%2BB3nWK5jen7khx&X-Amz-Signature=92c570d4e91d3af9e2496d872be0f198123a12e71506579201762b3618e4f7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YDZUUF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmiL9caYxXZunMuPuc463MhqPTluuKYmEm5d%2F3RrBN0AiBeSptfPCQrNBS%2BBdtAXrc7qCjqsXDMN7yNPNdpsIwC3iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0WnW7nObworbY9oKtwDS0Qi2iCCIcl%2FdWuOgGYyF%2BIMZRp9HcOH8GSNAYZjvpzCIS6vpdGNqQk9JgTXqfb9fLB0M0j2MY8zje2CUi%2FUviGIu5rillsY%2Frjjna4oRcdF27KSo9R7rtsL8VSYLxrIs7kqjeR5EsTRIfhZ14%2BoETL%2B1fTBXEiU709gFjRvpkOTTycCeKjv1rgBx6p8TyUrm5SyytQoXdwbbXv2Ua%2FZpqFuYIUW49BIcPmsYPN%2BZK25K0Cgva5zzgGJlowSH0EkiaucBrtMz3Ny5fdu6bF6dh2Rv3xylrJi0bVfksTxg5TfyofLn1gC7NghjjOICoDSxaPMjsnTCobjx5E4RQqJzYDomvCEXMBPQWr2Jpe17FjeQX%2Fc0vASCkCoMMN6DoBBQjcJl1DfUFNb1u71jkOd6UQPZM3%2FVSbibx%2BaHib%2FfCrxqiuvCU0eGNUVpTmKzvvH9wX9A9%2BENE1jhoTqAqNmsxZJxbmyL0I1v4e9TUxkzZTncccN79a87YP9FO8ban4hXyB2DCSm2b86uddj2kTI1ZkDkaYzH9sHWyUY%2BoVgIwXke4jQPcljNCORipy4gmgPn7zPk7HZCZy5YY%2F8TWafRcnHUAVF%2BjLBbEPJgRDpNUl9wVV5%2BJUzJ2qm93sw%2FavmxAY6pgGKS8ACQuGbxsR88MU2bB8Un9yV8dVz75%2Bfntjs8%2BRpyFkBxXxWMscPkePImwp9xGey1kTVJl%2FT1rD%2FhGSfvq7Vx7YGZLJ3pudnCon4imxZv9GuypRzLuljHVGggYkm%2BcKBe9C4%2Fl6yDxHSu4uiexB1rxcRelDjbmYvER2K9deWnX90fq7vZ42B3J0yDP8V67Fui6I%2FVbi20OBuR1%2BB3nWK5jen7khx&X-Amz-Signature=c843d8c1c6d1d399e37044c3b35000773a12aab1d274a6e77a4f0a1ca4b0839d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2PUPPO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICypMKvDMwnwD6L4uauIDFtWD5q1KELogjFB4w0mMt%2FPAiBURC2XiAJ2RaP985Qd51VRZtZ%2B13NiDn7fEnKcFq8IEiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD19pkkiqJvCzzNd5KtwDnX8PWerVvdgVAWaMlVJ51s10MOhKq9qu4MjNLHejS7g9KaoXTmn718XW4GbHp3dCw%2FrDPMcuC51Q6OC3w%2Bo3kSUuoi5J4fUQqrearHxN%2FoUaZrS%2FzxHpiSpog28eSExZ76LBVWFQ%2FsQdoj5p%2FlmjnMnADn4UtucHco6Wgjt0ljfMX9S16Fbi9RKKTOuV%2B%2BPep6kmW9L4%2F4dBLhRQkYPAAGLrE%2FBpxc88%2FWCx%2BJv5DrG89tZvH%2FDrArAGsce6PVeIJfAk7jX8OrM%2BOmadq4Egz09%2BWpFXod2qG%2F8A5DD%2Baf3ygIBTc2O5RV4wa1ZdR4UGFgYQorUFCLr1XE%2BJWS14bkrv9aloWui6aityjfgSYmJy9x56C00SryavY4zlXFVPlyqfYy8LXDw9SvSHTpXO%2Fw71XSH10iAZxVdBt0dPuz1MFhUHj9TilP6SOGu6mAXjxRkhUNsKsIWTzSYQf1kLAXUnPgom%2B7p%2FZ02fOXCFP4sMwpcXsmRZrEEEutz0A2o2JSdM7qcpW2M5Az5S1bhK7k45OMFhJ9UG58Elj4Rzxms8uxQ011UhNlfCpD6LHbYZYL2Fv96CPe5sBxofOxWjiGYswr5mQs%2Ff%2FPm9IeAGfrStzli9o6vUsELUQ%2B8wrazmxAY6pgHqH3dnQMuihFFr1CMy9b9vybimt2EL5nDxc53XuuhqpIAjvObv66bHxD7VNLIZH6%2BkiyU%2FLAhDZEdzpDbjIowpk0%2FQY1fJsgv3e31tMhbgkSA3%2Bu3w7YHD0r6RwZWTumWmXSgGGVHBWMHlSPw0dqdc4%2BbtuDLFnd%2BkovgRFT%2FFIRt3%2BeRG0lPY7gSgeo8N8LS34CFMI6hWMM5%2F76PkYPIrjWKId0ik&X-Amz-Signature=976c12cd107f40b06496765ff7b04ba4abdac7d21cae8278a3434f9c0d57c3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OXIUGA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1Conc8G9mnyj1EPRBj2P%2BMkxGyinw%2BeqyMLn%2BAYn2PAiEAtTppy6TBUyAhuIUcpubL7iP%2B1rcwITPKkBZOnePHWHcqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHI3Z2sKUeDitsXnySrcA7m1tQ2jUYhPtNLPWttFKjBacZU%2BFPvGObd8D6sK65Vy8YL2JnOkm%2FiePWLuV5tbRhkmnqT6nXxUAmA1E2wkGSexWFah0Pc%2FLfb46ExfmvLqmV10IlLxdsEB0NeLMS6Az%2BUfaEHhHalOwDlpy%2B2AD5V%2BJN0952PpVgNDBJOjvxT2jqhhnqKACjrX6cd9USzP5OmsoPio0fcLjeAGEKLFGEEJsDpKtFlj%2FXWr541yRFHl306hJ%2FNv67V1aJQKX9gWuQ1Onw7TEhHRVWXwdXmbh5YeyvlmnIxXEJYlFF0RcaCmdDYj3ehlh1veoOnMhkgf8nPziCQ3CHkp3dUG1Rv9sQFoGQJRswSw9E6mCFKNmgkEUAdmxK9qZnAW6GDq6L%2BpKMluZPq5UlFFMDT9TvT3746Xp6laMTLTOGEvPhqWYAmamblaTNjFr06jMMIcXqvqkN5nEN0Z%2B0N8tHcWSXzyDn0DdkVOTvbVpK4avFKTGkJ7hGhSCxYS84qU2Ip2vNrfpA5TY87tgIfdgvOi7XR5h2vNPwzBo2ukZOa8KNccL2F6uDTM0qe9Ppl9QCyIffNTu2JYNRXB8qohcxc1dUVCi2waOK3NyZxgEowH%2F5Kn1krkt%2Bx7ysNhVYT5mgA1MP6r5sQGOqUB0v3XxotAB61SIS%2BXhBEbbYoacccwFqZ6QjJRQuVmdAk1H5F%2FefoyKDvwG6pZhLNBaxoXXcq7fuYIpbavMjSoY%2B0MSXFdZLyarZxXttkvVw%2BLWQ2uS7UYHS06lWNQMSo%2B%2BDkP3coZAyh3zNS89T1p8jP%2Bu7F%2B%2B4q%2FCqgDDVllrBF0Umcqa%2FFdMlsqEVgdWQXNQNC8MisOk6r%2BuaX7%2F48ra8yoLb3i&X-Amz-Signature=3b0a1517bcb9129212bb6ba09cd8e9557e402417f6eb44f50934733f274d6e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7YDZUUF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmiL9caYxXZunMuPuc463MhqPTluuKYmEm5d%2F3RrBN0AiBeSptfPCQrNBS%2BBdtAXrc7qCjqsXDMN7yNPNdpsIwC3iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F0WnW7nObworbY9oKtwDS0Qi2iCCIcl%2FdWuOgGYyF%2BIMZRp9HcOH8GSNAYZjvpzCIS6vpdGNqQk9JgTXqfb9fLB0M0j2MY8zje2CUi%2FUviGIu5rillsY%2Frjjna4oRcdF27KSo9R7rtsL8VSYLxrIs7kqjeR5EsTRIfhZ14%2BoETL%2B1fTBXEiU709gFjRvpkOTTycCeKjv1rgBx6p8TyUrm5SyytQoXdwbbXv2Ua%2FZpqFuYIUW49BIcPmsYPN%2BZK25K0Cgva5zzgGJlowSH0EkiaucBrtMz3Ny5fdu6bF6dh2Rv3xylrJi0bVfksTxg5TfyofLn1gC7NghjjOICoDSxaPMjsnTCobjx5E4RQqJzYDomvCEXMBPQWr2Jpe17FjeQX%2Fc0vASCkCoMMN6DoBBQjcJl1DfUFNb1u71jkOd6UQPZM3%2FVSbibx%2BaHib%2FfCrxqiuvCU0eGNUVpTmKzvvH9wX9A9%2BENE1jhoTqAqNmsxZJxbmyL0I1v4e9TUxkzZTncccN79a87YP9FO8ban4hXyB2DCSm2b86uddj2kTI1ZkDkaYzH9sHWyUY%2BoVgIwXke4jQPcljNCORipy4gmgPn7zPk7HZCZy5YY%2F8TWafRcnHUAVF%2BjLBbEPJgRDpNUl9wVV5%2BJUzJ2qm93sw%2FavmxAY6pgGKS8ACQuGbxsR88MU2bB8Un9yV8dVz75%2Bfntjs8%2BRpyFkBxXxWMscPkePImwp9xGey1kTVJl%2FT1rD%2FhGSfvq7Vx7YGZLJ3pudnCon4imxZv9GuypRzLuljHVGggYkm%2BcKBe9C4%2Fl6yDxHSu4uiexB1rxcRelDjbmYvER2K9deWnX90fq7vZ42B3J0yDP8V67Fui6I%2FVbi20OBuR1%2BB3nWK5jen7khx&X-Amz-Signature=05e359415ed30a40e03cccd7f098d4c3c67ed126988437b3d4b0e511565d4724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
