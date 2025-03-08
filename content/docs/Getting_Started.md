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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYLXTOY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCFlpaQlnRFZeT%2BTY6yYGlE3cVoFRzAPR3nbukmzRThQAIhAKYGFwHM1Dk%2FuBnYFkUWKeVvFy9URqUq2yz6NW%2B9wuioKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4uwyZ48b%2BgIpFd2Yq3ANKgHRJUUTY%2BYbIDs716SRqs%2BI8WlH8WPcPgsGxndXwWv%2FkqOMVeExXss4MZgcX12jif5KV%2BKRwmbnVMnng3ka6DuZOPOX%2BcovFw0t9w1XhAG%2BjO%2Bp2PwSF8wlAwY%2F1kMIhgSHnHz7WQIXGCFym1o6JVO%2FUDnZkqxw7i0zVx2QiwDfd%2F3vjEJAY%2FQxMBTvmWM1m4nn18XB9GqDriWGyeIo4tVZyQdUq2OZtmv19r%2BOU6XABpe%2BRQsbfLCVr59F1jzOWBiW0XTKzIvH2%2FpiVTJsQhZDr4NXIP92EqU8hiRkvZHSnjiRRCASiRCWdEOLSmwxFcaWWStz06jDcp4P1jr%2B31jn2Drsg060v1bja7wbR8QeJUJuK0ZSA2rHcLg%2FdoZKYoErI4PRiswRZnada675%2BXRvzxSQXqcQObzTmGHSKJiPLmcbmYTtasiNLbxAXtGT7rVGgAncZkF5JgRDQZ1adyV7hBkgkxu5pAJOUtnkTBPtVKysA4aJnYPBFAJydsCX%2FtaHbqSINV59VtXIwlDja%2B3djeAsPVPiBXhD9RxVWWUAI7ENo1yfDkQOzR1vK7fdKxr3sOAZn6h9SUtBbZYVCn8YecIzow2IcrwTxDsvVpWfEWrS4JJOXGpzjtTC21bK%2BBjqkASaS9VPiUgCH9CX9hT92tNsd6J28Hra%2FV4AAq4e8qTzhECaC2K4m7%2B0xRXbEQGCsEzpA48ib4o6Rub%2FZoAcpAuX6eFpBoZfVQV52ElR8w6o9wHETk7HiyxrmwFkHy0iqeItSQLGF0wrDXvv4qOAMs7GSM58J2u%2F8MzWoym%2BzA79Ur%2FHLemGOqUL59Zk53p%2FQu8VmZOVyWQaRx%2BFrx3rF8R95Eqb%2B&X-Amz-Signature=84c6001c4776eebc0540f6c0ed7c96fd68765d1e309e9c3e74c915119e284dee&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYLXTOY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCFlpaQlnRFZeT%2BTY6yYGlE3cVoFRzAPR3nbukmzRThQAIhAKYGFwHM1Dk%2FuBnYFkUWKeVvFy9URqUq2yz6NW%2B9wuioKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4uwyZ48b%2BgIpFd2Yq3ANKgHRJUUTY%2BYbIDs716SRqs%2BI8WlH8WPcPgsGxndXwWv%2FkqOMVeExXss4MZgcX12jif5KV%2BKRwmbnVMnng3ka6DuZOPOX%2BcovFw0t9w1XhAG%2BjO%2Bp2PwSF8wlAwY%2F1kMIhgSHnHz7WQIXGCFym1o6JVO%2FUDnZkqxw7i0zVx2QiwDfd%2F3vjEJAY%2FQxMBTvmWM1m4nn18XB9GqDriWGyeIo4tVZyQdUq2OZtmv19r%2BOU6XABpe%2BRQsbfLCVr59F1jzOWBiW0XTKzIvH2%2FpiVTJsQhZDr4NXIP92EqU8hiRkvZHSnjiRRCASiRCWdEOLSmwxFcaWWStz06jDcp4P1jr%2B31jn2Drsg060v1bja7wbR8QeJUJuK0ZSA2rHcLg%2FdoZKYoErI4PRiswRZnada675%2BXRvzxSQXqcQObzTmGHSKJiPLmcbmYTtasiNLbxAXtGT7rVGgAncZkF5JgRDQZ1adyV7hBkgkxu5pAJOUtnkTBPtVKysA4aJnYPBFAJydsCX%2FtaHbqSINV59VtXIwlDja%2B3djeAsPVPiBXhD9RxVWWUAI7ENo1yfDkQOzR1vK7fdKxr3sOAZn6h9SUtBbZYVCn8YecIzow2IcrwTxDsvVpWfEWrS4JJOXGpzjtTC21bK%2BBjqkASaS9VPiUgCH9CX9hT92tNsd6J28Hra%2FV4AAq4e8qTzhECaC2K4m7%2B0xRXbEQGCsEzpA48ib4o6Rub%2FZoAcpAuX6eFpBoZfVQV52ElR8w6o9wHETk7HiyxrmwFkHy0iqeItSQLGF0wrDXvv4qOAMs7GSM58J2u%2F8MzWoym%2BzA79Ur%2FHLemGOqUL59Zk53p%2FQu8VmZOVyWQaRx%2BFrx3rF8R95Eqb%2B&X-Amz-Signature=345b66cbe2d166c7a3b8b9a61b569965283cc305d3834abf063560a8ef3a0671&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5VLUSA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHk7%2B0W9Wq12VgsPklkZFpTwJ%2BQcQ4rVWn5WYI6zAPESAiADm%2FPzLT5pLTyhCjBeg%2BJk8tcEUaAqcwcAAHIfbfksQCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMqJWlz0WrJ1SjMadCKtwDYyWBC%2BdGSblx4xK%2BlM2SFF0vvqQFlsAoIfForbr6IlRHu%2FS%2B6DoVgDNRmTHjsvWMewRZbpa3kqTBAXyCq5qdNIpVMINEUm6sssAo%2BQg6sil2XZdl59eiltKzObclRT%2FbIqiwb2o%2FlSUfZJD%2BJpE4s%2BWNWMBk0zt6VleMlu3sg%2FqkKHatT9ZegEQXeacG20QEGBGfA6liThOWjCZvrXn%2BsIgx%2BqxD%2FhaYgP1GYDm49xoODi2T%2BE2O8znC%2BI4M5c01SlPkhRO0IosbhWyrBAVjD8H2bTLHWYhWwzz%2BoPSWWod3zdu1P2O%2BlQtyG0zkJ8HLSuj45ZCoGN6%2BFjCEfSzvBcM6RoZyawVyRy3xk5vPlfRz11A8t6q%2FPc%2BGo%2Bg%2BxoCWCgnmiMQh%2BuiFZDbs5EW6wUfkvDcXXD7lTmwxF%2BMLeyoAObMc%2BluRutmDNb5ZkzmFqzO2d16jL059ZbFm8wcQCeuNfR5EMq%2Fo9sYl%2BB%2BED76st%2Fe1ik5nYm%2F7Nu4rg6a7K1cq6NIDyuJgWOPWgT8JrhFDxFXBMi3VwqjqenH%2BILykNW%2BWMpBCDGDnZLW6W42dnTdqsMAXpqQEftbTuz7tIPXk1NQPFH55LvE%2BqiWyLrHO0v0bEBIeokDUnekwgNWyvgY6pgGMIg7L3aMA4Y8LhB00XQAw3p9zhOl4sN4czLv6dNHbqg0JM%2Bye%2FcA5xHUS9QIK%2BabpqG8pFGrkCrpmn8wrmw%2B6eVP1cuPu6i%2BILrREiZiVXuKVrEZeivbxExAd20VJLyrlQisrWY5pIjqVTencYdEDlb%2BKG6m115uAqeJQMtKm7bi1wLYzANnoAEIonnIqt%2FZQaGq6zXXPNVaucCPCo5uu%2B8JS8fBq&X-Amz-Signature=e028663994f50c97af62be4c30df588af4dbd1c5f7bf45210f53ccaf6b2f2717&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJDQAOX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDJ9sSTQ12bZLMOeVmy9Oz5j6wyi6NrB3HqLpQYbgtLGAiB5huubPQ8464%2BafxLLvzdNrC%2BEC86oiN184zX9PSvIPyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMI3Xx6M5XdhQztUR%2BKtwD%2Fp8om%2Br5yX3ThOSx0waSsdZnzHq6kibaokoywaclWUKRqoSBzzBeUURT2swaQ%2BbDfX1nctam%2Fj9Q2zwQVTeF2TiqRyNkjASq%2BZKQsdoNiUs7xIksQQkAuicgrvS7dhSmF2Czhu2lBxt%2BTp%2B6M7hizhFn2pGR5iPSGx3ueDGPaFmV%2FvuBdm3LPQCOdpTMrgsZh3%2FPCjIADMUWL0UpxQ1XbBFATg09lhK9LhkbVg2wu42bSq714jLJu6Nv%2FujD%2BXcRmjY%2F58DOSOU%2FC6XVvWMinyGTr8upaWJ%2F4H9PCleA5ZKNNU4HsZ%2F2lOwiz4ptwnAH4jjHz7QE%2FsIFfRamXpEY6CWC2KTqI3p%2BAWEFvGU7zOE5HKgiTjqoKMjDv4v3rRAlkBLEHWbyNdC7nj3CUnug5KpV02OIeJr%2BFz4vRxKyldtAkfvwvaIz1xFMXXMgQDgg2foIdqBHzgJlki1AI%2F8Xk90jA88g9620f8ctkOMdME7eN7Wd3TXuRFkMdr8ffejyasxLp0ia%2F%2BwcxkQFCXO9hy8CwqAKF%2FfuLOBzBkurmIY%2FXd9o3J5Q7t0g7fWuftmMPvUL49vNiZSTeciJU22FwVInk%2FgsjVVizdJxjALtpw5h8fFoJxS00iMjyVUwiNWyvgY6pgHow6t2U7ckHzZMuAb1I9x8bRPpXOGwLwYJYfDXggcnRusStmL3v2VGl6%2BjAUwLICVjgi%2BhylsrTTyRqWqWjht%2BG%2FVS8HHYzWgVlSELBZqLYGDPd%2FJNbEyBar2IOpUavREyJ3Y1%2Bwj%2F2pvQnou5vY3BdY4Ib50ShkTjUSLl%2Ff1wQxCeoFLv5%2B9ONzn5Vc6xWW9a%2ByXSgqWTTCatQvtfL8xhlCKGhA9a&X-Amz-Signature=5949c87ef71d700928ad0791548708aaad638b873ea2747d200c7120d65547d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYLXTOY%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCFlpaQlnRFZeT%2BTY6yYGlE3cVoFRzAPR3nbukmzRThQAIhAKYGFwHM1Dk%2FuBnYFkUWKeVvFy9URqUq2yz6NW%2B9wuioKv8DCGYQABoMNjM3NDIzMTgzODA1Igx4uwyZ48b%2BgIpFd2Yq3ANKgHRJUUTY%2BYbIDs716SRqs%2BI8WlH8WPcPgsGxndXwWv%2FkqOMVeExXss4MZgcX12jif5KV%2BKRwmbnVMnng3ka6DuZOPOX%2BcovFw0t9w1XhAG%2BjO%2Bp2PwSF8wlAwY%2F1kMIhgSHnHz7WQIXGCFym1o6JVO%2FUDnZkqxw7i0zVx2QiwDfd%2F3vjEJAY%2FQxMBTvmWM1m4nn18XB9GqDriWGyeIo4tVZyQdUq2OZtmv19r%2BOU6XABpe%2BRQsbfLCVr59F1jzOWBiW0XTKzIvH2%2FpiVTJsQhZDr4NXIP92EqU8hiRkvZHSnjiRRCASiRCWdEOLSmwxFcaWWStz06jDcp4P1jr%2B31jn2Drsg060v1bja7wbR8QeJUJuK0ZSA2rHcLg%2FdoZKYoErI4PRiswRZnada675%2BXRvzxSQXqcQObzTmGHSKJiPLmcbmYTtasiNLbxAXtGT7rVGgAncZkF5JgRDQZ1adyV7hBkgkxu5pAJOUtnkTBPtVKysA4aJnYPBFAJydsCX%2FtaHbqSINV59VtXIwlDja%2B3djeAsPVPiBXhD9RxVWWUAI7ENo1yfDkQOzR1vK7fdKxr3sOAZn6h9SUtBbZYVCn8YecIzow2IcrwTxDsvVpWfEWrS4JJOXGpzjtTC21bK%2BBjqkASaS9VPiUgCH9CX9hT92tNsd6J28Hra%2FV4AAq4e8qTzhECaC2K4m7%2B0xRXbEQGCsEzpA48ib4o6Rub%2FZoAcpAuX6eFpBoZfVQV52ElR8w6o9wHETk7HiyxrmwFkHy0iqeItSQLGF0wrDXvv4qOAMs7GSM58J2u%2F8MzWoym%2BzA79Ur%2FHLemGOqUL59Zk53p%2FQu8VmZOVyWQaRx%2BFrx3rF8R95Eqb%2B&X-Amz-Signature=046ee34514a04a906615ea769a9ebc44216ff917d98ac0589b8f3e2cf314a8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
