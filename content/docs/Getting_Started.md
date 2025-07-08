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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSHZ3WV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDziWx6KVelUFRRyeqsup7weaE0tX784kjS8s3Vkt1UQAiBs%2FjTv3N3D%2BD18ZgJRaaEH9rPTWv%2FKkq1WvE3dcCkq%2FiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr31ud%2BIGJlsELtqYKtwDqoEO3vzRW2Eif%2Bmt0lAwE6q9nptrf1nQlxhwcVmCe0Wq6PKJsHz%2BwgNGsqsrgotZ6pUs3ye7lPgVpRgIhJbERng2QNZ63NpoyhOKB%2FR5bG4a4sX2CHGaSuIQ0E2GLUaq1Y8jrUNiGWPCNKiEvvxBSJKEtI9Ytylj5ZkjPdozui4B9o6VoLh1JG2F42Y91nlEUEit%2FNtLViWtF28yepGhHvsItilQu96DjDG8UiIHcoyXiYmDvNRv989ABtjEwiOf86864UE8UBRV2%2BDwxm5WB9i5l%2B6rqgcgzOyqN4fE77YTxyFKvAk%2BpbW%2FCHIvr66e1Yp01HUCXuFd%2F33ChhLjySbrZT3Rqvk92KH%2F74KQhrQf6Cx%2FijiYUNXBn7yofnq6G2ArUY1u%2FtG8XiusyBDUvWpGOxkCLKmB4V0Lkg%2B5gydT%2F3vLfXeH5NRwSokN7wxFVsPGZUW4vwjnToqwCLyTV%2Bv4P1%2FxL%2FWQe9zUGi%2BMhNPLSTMKwo88Rpx0TniIafaDtkzFYLsKYgjqnWnA8jE%2BCWVzrRsU0F8wdEqO60ligydcNbJRAOlT%2BUfqizKehXk9Zn3TwIrPBX227FEWp6FDXsIbr220LrfZy6DVF5RbOo65gvG8XtBg6uXDlXYwoIOywwY6pgGXTpYYJR5p43%2BqGqDgGEQSOYJGbQg5MqdDpUAZXQBl2O%2BSgVeC422ENOKG%2Bl1sWrr3CL2%2FeVY49h9PDxHqcsHzEC3JRQT664ZHOMG1iI2znVct33o7yuKYTSTVqog2HAdg30Dm%2FPBlNLItIfr%2BcPXeQ%2FE9J9rRkdR0%2FNsEsygbhWkwKNbBtZ4FgMNxoC9Jqm%2FEBXu1rkdQh68T9h0yv2yH8sjRLGM5&X-Amz-Signature=fe97ad061da97b5f5d4cfb75b300b97051ffedd1d0bcaf1d08d897470801b670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSHZ3WV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDziWx6KVelUFRRyeqsup7weaE0tX784kjS8s3Vkt1UQAiBs%2FjTv3N3D%2BD18ZgJRaaEH9rPTWv%2FKkq1WvE3dcCkq%2FiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr31ud%2BIGJlsELtqYKtwDqoEO3vzRW2Eif%2Bmt0lAwE6q9nptrf1nQlxhwcVmCe0Wq6PKJsHz%2BwgNGsqsrgotZ6pUs3ye7lPgVpRgIhJbERng2QNZ63NpoyhOKB%2FR5bG4a4sX2CHGaSuIQ0E2GLUaq1Y8jrUNiGWPCNKiEvvxBSJKEtI9Ytylj5ZkjPdozui4B9o6VoLh1JG2F42Y91nlEUEit%2FNtLViWtF28yepGhHvsItilQu96DjDG8UiIHcoyXiYmDvNRv989ABtjEwiOf86864UE8UBRV2%2BDwxm5WB9i5l%2B6rqgcgzOyqN4fE77YTxyFKvAk%2BpbW%2FCHIvr66e1Yp01HUCXuFd%2F33ChhLjySbrZT3Rqvk92KH%2F74KQhrQf6Cx%2FijiYUNXBn7yofnq6G2ArUY1u%2FtG8XiusyBDUvWpGOxkCLKmB4V0Lkg%2B5gydT%2F3vLfXeH5NRwSokN7wxFVsPGZUW4vwjnToqwCLyTV%2Bv4P1%2FxL%2FWQe9zUGi%2BMhNPLSTMKwo88Rpx0TniIafaDtkzFYLsKYgjqnWnA8jE%2BCWVzrRsU0F8wdEqO60ligydcNbJRAOlT%2BUfqizKehXk9Zn3TwIrPBX227FEWp6FDXsIbr220LrfZy6DVF5RbOo65gvG8XtBg6uXDlXYwoIOywwY6pgGXTpYYJR5p43%2BqGqDgGEQSOYJGbQg5MqdDpUAZXQBl2O%2BSgVeC422ENOKG%2Bl1sWrr3CL2%2FeVY49h9PDxHqcsHzEC3JRQT664ZHOMG1iI2znVct33o7yuKYTSTVqog2HAdg30Dm%2FPBlNLItIfr%2BcPXeQ%2FE9J9rRkdR0%2FNsEsygbhWkwKNbBtZ4FgMNxoC9Jqm%2FEBXu1rkdQh68T9h0yv2yH8sjRLGM5&X-Amz-Signature=17afc67271b346ec6e758976646c0afd9efac5f5383d5c14b061ef1d23fae1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSHZ3WV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDziWx6KVelUFRRyeqsup7weaE0tX784kjS8s3Vkt1UQAiBs%2FjTv3N3D%2BD18ZgJRaaEH9rPTWv%2FKkq1WvE3dcCkq%2FiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr31ud%2BIGJlsELtqYKtwDqoEO3vzRW2Eif%2Bmt0lAwE6q9nptrf1nQlxhwcVmCe0Wq6PKJsHz%2BwgNGsqsrgotZ6pUs3ye7lPgVpRgIhJbERng2QNZ63NpoyhOKB%2FR5bG4a4sX2CHGaSuIQ0E2GLUaq1Y8jrUNiGWPCNKiEvvxBSJKEtI9Ytylj5ZkjPdozui4B9o6VoLh1JG2F42Y91nlEUEit%2FNtLViWtF28yepGhHvsItilQu96DjDG8UiIHcoyXiYmDvNRv989ABtjEwiOf86864UE8UBRV2%2BDwxm5WB9i5l%2B6rqgcgzOyqN4fE77YTxyFKvAk%2BpbW%2FCHIvr66e1Yp01HUCXuFd%2F33ChhLjySbrZT3Rqvk92KH%2F74KQhrQf6Cx%2FijiYUNXBn7yofnq6G2ArUY1u%2FtG8XiusyBDUvWpGOxkCLKmB4V0Lkg%2B5gydT%2F3vLfXeH5NRwSokN7wxFVsPGZUW4vwjnToqwCLyTV%2Bv4P1%2FxL%2FWQe9zUGi%2BMhNPLSTMKwo88Rpx0TniIafaDtkzFYLsKYgjqnWnA8jE%2BCWVzrRsU0F8wdEqO60ligydcNbJRAOlT%2BUfqizKehXk9Zn3TwIrPBX227FEWp6FDXsIbr220LrfZy6DVF5RbOo65gvG8XtBg6uXDlXYwoIOywwY6pgGXTpYYJR5p43%2BqGqDgGEQSOYJGbQg5MqdDpUAZXQBl2O%2BSgVeC422ENOKG%2Bl1sWrr3CL2%2FeVY49h9PDxHqcsHzEC3JRQT664ZHOMG1iI2znVct33o7yuKYTSTVqog2HAdg30Dm%2FPBlNLItIfr%2BcPXeQ%2FE9J9rRkdR0%2FNsEsygbhWkwKNbBtZ4FgMNxoC9Jqm%2FEBXu1rkdQh68T9h0yv2yH8sjRLGM5&X-Amz-Signature=5d35902df6858a5c8042577fa741627eded1c31dd29ff8e1248e140fc40dc181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BPB42DU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCLk2AErBmCzUPMrHT8ZogavsFF0V1YOWEf3%2FIm%2B36O5gIgU%2FKpL3cVT1tESMRq7WjCY%2FB%2BOP6iQoZ4b3wmP8gbly4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGInpnNp8ZNmfUoAayrcA3kK3mBKr2bhbYdnheKRrdPtXcDiy1BH%2B%2FiglSecNbfU%2BuDLTvwkhrMXk2xTFhT3zdJLLGDrWNzNGTOlCIxhHDBZ3hQFzpMY6pWxOrxPMpsPmeAP5QxE9U5gn6Ic62MvBsY09jSIxnINLt72VJtJvRPVaRYdSw%2F%2FSPK39WnQfBhgjsaiE9ckK8x6az3xw7qO3fI%2BDsFf78tDL4AOXZLleXjI7Z7Ha%2FYgGaDb8w6b5LF3F5xo6HUYOAMMO7wTDhu8qsf766fDAVyB8Xb4TMOTSClZHl27Ty6DR9gzGtgytCSpiVmKt5B8gF4YZzaShGmKLIUfyR3wXnYLrTlPbFrhTLllw59G4X50kJl7Jeeft2wfupyBus4O4Mgl8nxsg%2FsRJypW0ArvR5phgYm8PEQUe%2BSf2Vx7Qf7tfGQmO%2BaIJvmmUqIvq1YmD5zlPi4T15tUa0LzETALcdj0oB6ZGdOy20lR5ZLpIDqRKHhiNvXWRhcJj0ZjjM19NCu0qZ%2BWAZQakngoYmXHrIY8NgJpf3ChkwnDzQOmQB2ATgEAsGHIFktPm67CD40qmAPcOl56Cr7z6ZyJFJefY%2Fn2k%2F7nHuFh0GNrkqtt4t4wnpZhc4osoDhw%2Fw8lPOlwX3kpex32MMmEssMGOqUBD7sQ66CbQNzKBZJpu4UHy1yi9S5fotrBTw2Y2AQAPxGiu%2FfIKi1zBiR0rBXsE7hv7T5h3UuW%2FkbjSUEfdT6pXer2brCclG8wQEnd8pzGsws9E2A5oEJH7pzFBwk6H%2FaU4qkn6n7KxdqQX8z40XGxW6A33BLXR9KlXIuVqfOcqta70LZm6Tn7CMX5ciA3CMVXon3q2i1%2BesGh4Z88DGqgl8h6wqxg&X-Amz-Signature=855c5a741df7349f6a5d6466e386e0d18e185ac70b9e505bfaa75781f3183864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXXHQQKB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEcD1RvWxdzJrRN%2BM0cZmZjIAPzUjBd4we9dxWQrdxpvAiBcwdiIQyPlGJaRBlvW96VeEU3vd1yjmzyVEEiliAMn7CqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTjkMEVMvhZyqW6DWKtwDlHQDdAzHZwI2J18wsLgDfcEFDlZoEhTN6l2eRRaB5j4NbbWWt28nuqa86GNRNp6AUs%2Bhpa04t7dgXQMAqhBy2TkaEbvUHyV9Q4RE%2FTWp8I8ahH24GAGnTGFrYnqkk6JbXFrTF61AcoP8uq83rnWOgH6UN%2BeOtU4x1ekCIpI%2BIqtCHITQntyQvJa1TnjVlrf0KVVSgbTelz7%2BXkR2Ya%2BIT8WPu3DsKaXosEZScP0GG4B2A06u4EB8ySX0%2B6nHq%2F5cfmpjkSl1cVoY3p6B7yXYEslP%2Bk58%2FUchRARR7%2F%2B2k8oK0ViMzVafXhejdMGfx0sRGJc0RQnCyJUyOUuCzmUIp1SUX%2BpHxPKJlt99Gz%2BPM%2FGErEyX0Utua1m0mHPQsy2%2BLById0glSLXixy%2BbzZFC492t%2BHGyoP1b%2BS456XKUOVhe0kG6NV06YhP%2FLJ80%2BRa2rBJE3jytr972Bj1q8ny6YWgiGOQbRpdAEMkQ4qACMAc%2B%2BRWyyvI6UNzFAAsgy5j%2B9a4d%2FglbOMI9iLCaeSPjbhWYIyxdcgFArMuZ7HiGo4EUSt7PSUFmRjLSOmMnrjpiKcfpIDBV%2BW0LyXeWqRhs67ILtreYh4Gmh8vSdV9iMMWa13KuDV%2B%2FR%2BCER84wyoOywwY6pgHOs7PCIWDaSKDgwqP0uoqmUU76ZhYhB2ZPn7pAmSGBTQtipHydC0re6pZs%2FBVYaM8yWbXH00nU2n%2F2F51zqxr8zVqVTOhy9hGtmY8HgxritkHFkThW2xng3iOYDtoRxe2jGl%2FJnlB%2BlIk9PZOKSFuLAIZr6czot1tCM0a5KJryM%2FbLrDSPZVjewqT1Pc3MV1boctCV0dYbb16ysLzhMqDIQ2NKD%2BaT&X-Amz-Signature=d291af3426b7e9e22d310e2046e1de106bf3f67f444119503ecf1589f4ef95bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MSHZ3WV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDziWx6KVelUFRRyeqsup7weaE0tX784kjS8s3Vkt1UQAiBs%2FjTv3N3D%2BD18ZgJRaaEH9rPTWv%2FKkq1WvE3dcCkq%2FiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr31ud%2BIGJlsELtqYKtwDqoEO3vzRW2Eif%2Bmt0lAwE6q9nptrf1nQlxhwcVmCe0Wq6PKJsHz%2BwgNGsqsrgotZ6pUs3ye7lPgVpRgIhJbERng2QNZ63NpoyhOKB%2FR5bG4a4sX2CHGaSuIQ0E2GLUaq1Y8jrUNiGWPCNKiEvvxBSJKEtI9Ytylj5ZkjPdozui4B9o6VoLh1JG2F42Y91nlEUEit%2FNtLViWtF28yepGhHvsItilQu96DjDG8UiIHcoyXiYmDvNRv989ABtjEwiOf86864UE8UBRV2%2BDwxm5WB9i5l%2B6rqgcgzOyqN4fE77YTxyFKvAk%2BpbW%2FCHIvr66e1Yp01HUCXuFd%2F33ChhLjySbrZT3Rqvk92KH%2F74KQhrQf6Cx%2FijiYUNXBn7yofnq6G2ArUY1u%2FtG8XiusyBDUvWpGOxkCLKmB4V0Lkg%2B5gydT%2F3vLfXeH5NRwSokN7wxFVsPGZUW4vwjnToqwCLyTV%2Bv4P1%2FxL%2FWQe9zUGi%2BMhNPLSTMKwo88Rpx0TniIafaDtkzFYLsKYgjqnWnA8jE%2BCWVzrRsU0F8wdEqO60ligydcNbJRAOlT%2BUfqizKehXk9Zn3TwIrPBX227FEWp6FDXsIbr220LrfZy6DVF5RbOo65gvG8XtBg6uXDlXYwoIOywwY6pgGXTpYYJR5p43%2BqGqDgGEQSOYJGbQg5MqdDpUAZXQBl2O%2BSgVeC422ENOKG%2Bl1sWrr3CL2%2FeVY49h9PDxHqcsHzEC3JRQT664ZHOMG1iI2znVct33o7yuKYTSTVqog2HAdg30Dm%2FPBlNLItIfr%2BcPXeQ%2FE9J9rRkdR0%2FNsEsygbhWkwKNbBtZ4FgMNxoC9Jqm%2FEBXu1rkdQh68T9h0yv2yH8sjRLGM5&X-Amz-Signature=67df72aab7a326a184278dfbaf7e46f0113bbf046b4eafe958eb6ccd94f50c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
