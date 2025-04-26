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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDXI64O%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3KR3VdTGcqri%2BqHV9KgLx3EQL63Ppiqama4LtwKJSACICRfW%2BheLqIkxQ%2FDQ1i1K9inCFs2dypTEnCAxCIHQX8QKv8DCEAQABoMNjM3NDIzMTgzODA1IgyDLpGwBiIx04UNtgcq3AMs6NgdzhpfT5er3T7hejByAXDj%2BpH9DBVnmMM4e65BojBmCo3X6CvDlCQHVYxUEUwwUIN01NeW37FYcouJ%2F4bgopauGdSIIEr5vmfqOquqV6a3RIwOOdsOTWebuRoCvQCk5GJdb1ik1SChaEi5HZ71HUoFEfGW6q%2BTne9mL6B%2FmhREtuAzrVxMgoLVbq2fYHDdA5NhhrwPB48ZJ5PqLndXk5oe4F7vbeLH42bvKPECBplhiYL6QGJP9lKSVYIozlK%2FBB63gLb2AbYztNcwpKb0FHqypug%2BmZwi%2FGA4PKp8cy1Zyxps4lSlOOgwWYS71S%2BvH%2BQ3kBmGEs0KkrAq96E0QJqEE3TJr87H7nbsqSrcmQREQpDi5H%2FsBvGOKgEclqxTUZWzLqgwuT96WjOzZrbddy69K4J5zq9B6pNhGDj8xg6hZdlJCDZpciQX41JXXZEy2mEs9W7WGs4NSTfEbVpLuvGT2%2BNFnzXM9FaFuhOaSTmNhUcsOn59ZuWg0c3NSk8n9REzLhou5PKNYpIQuyJ5Z1rwlhCDmJgChCTy6TLH2tknvJX%2BoYudRj7tYgaxSyh9s3CjfyZwfPLj0xr1EwWOF7HcApT6Mi%2BafS3tZ29uBywOv2Hpz05bnsKiTTCnhLLABjqnAS06qQkDk%2FDVJbc2cAq7y1LYdUeBXXZVwUPmJ7CxLbrpHk9g%2B6vqKVFspcTHywxUYDs2wAwYlmpi4jtyJz1f8KffCkgmewTkOashOe4VmvM2HTzEVSteA5pdS95p3PJBoK1cGBDUf%2B2KRjtGLxRjjzPwB%2B8Jtr3U6gznMkMxXdL684t8l34lavrzGAg6xtFuCZ4um%2B9ATZvZ6ZZAUFDYDYRBgl48VOM3&X-Amz-Signature=7d8ea0db68cbdd17d6c322f81d32318e9db9ff4e3f321de769033d61da4978b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDXI64O%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3KR3VdTGcqri%2BqHV9KgLx3EQL63Ppiqama4LtwKJSACICRfW%2BheLqIkxQ%2FDQ1i1K9inCFs2dypTEnCAxCIHQX8QKv8DCEAQABoMNjM3NDIzMTgzODA1IgyDLpGwBiIx04UNtgcq3AMs6NgdzhpfT5er3T7hejByAXDj%2BpH9DBVnmMM4e65BojBmCo3X6CvDlCQHVYxUEUwwUIN01NeW37FYcouJ%2F4bgopauGdSIIEr5vmfqOquqV6a3RIwOOdsOTWebuRoCvQCk5GJdb1ik1SChaEi5HZ71HUoFEfGW6q%2BTne9mL6B%2FmhREtuAzrVxMgoLVbq2fYHDdA5NhhrwPB48ZJ5PqLndXk5oe4F7vbeLH42bvKPECBplhiYL6QGJP9lKSVYIozlK%2FBB63gLb2AbYztNcwpKb0FHqypug%2BmZwi%2FGA4PKp8cy1Zyxps4lSlOOgwWYS71S%2BvH%2BQ3kBmGEs0KkrAq96E0QJqEE3TJr87H7nbsqSrcmQREQpDi5H%2FsBvGOKgEclqxTUZWzLqgwuT96WjOzZrbddy69K4J5zq9B6pNhGDj8xg6hZdlJCDZpciQX41JXXZEy2mEs9W7WGs4NSTfEbVpLuvGT2%2BNFnzXM9FaFuhOaSTmNhUcsOn59ZuWg0c3NSk8n9REzLhou5PKNYpIQuyJ5Z1rwlhCDmJgChCTy6TLH2tknvJX%2BoYudRj7tYgaxSyh9s3CjfyZwfPLj0xr1EwWOF7HcApT6Mi%2BafS3tZ29uBywOv2Hpz05bnsKiTTCnhLLABjqnAS06qQkDk%2FDVJbc2cAq7y1LYdUeBXXZVwUPmJ7CxLbrpHk9g%2B6vqKVFspcTHywxUYDs2wAwYlmpi4jtyJz1f8KffCkgmewTkOashOe4VmvM2HTzEVSteA5pdS95p3PJBoK1cGBDUf%2B2KRjtGLxRjjzPwB%2B8Jtr3U6gznMkMxXdL684t8l34lavrzGAg6xtFuCZ4um%2B9ATZvZ6ZZAUFDYDYRBgl48VOM3&X-Amz-Signature=907f93482ef2166657571a6eb1c920e618edca809036330effe44c1321cc1235&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RGB5WGE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoH0yUbJssM1YJOuce5q22eLLkQTg3injx%2FtrfGTMrtAiBSNAviYTonWHHB7und9tnGZodGv6guwAP7MJ6hKqaocir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMJqYSgynM4YAabMhxKtwDIAt3cG5RCr0Sba5EtuM6%2B3ZmzriC8kmbE4KAunPUE3dS47hrVECD9BPwP9MW882U6EXLzhRxZctlDctsg6N9PvZunTc4IiClf733%2FRNUwtM5hn4AJ4sAY2d8L5PSyZhZkSl0lI2gPcScastQwfaivypQHTPDk6ZmJIoWcdZW3VhHEc1WSM4utjmGMIKF8%2B3l8zn%2Bo%2B1cbAxDG2tDSIA0TBRSVmOcgZmWW2DHw1eLP0EdV5%2FBtzkgWGYgJiBIvuHviDf0q3NPrn%2B4TmfZ4ibX9Dcrkp%2B5S94%2BiQlz4ELoi%2BV5zfRdFNleLASG4IhcyfifoXcSg4zSYLtHTw7tCs5Z9%2BdywzKWci9N0q5q57IqUiegMcJMY6%2BF6yMCztlMoDY1IHqmOHO37nXVjHAMVnhRFUx%2FCLqYRozd7gy6Ipm%2Bqjk2YyIfc4nwciloJCfoFJXq5dPTlbx77zLW0x5Q1TI9HF%2BR1QkpG%2FBNmI5wHdcSbBb0X6HRX0GvqMEtaVCIHLfIpGY06jXwVB2PPasyfiP%2BkwMzYPNzVM%2F9FhDs%2B9pTtAmEoqHNc4uNTQVMJ0vdYa%2BBZ5lyqSwy%2Bt%2F0sDtu5OyelGhaW6qGksy7AesiMM2Txbfqc8HNidgwEJQyC%2FMwoISywAY6pgFxcc3EYNqdNvUf1t38ek8eimoZuSF6TEc1Ck4WNeQT8jVWRiHAMgxFv2pIIwSiwnsI9GlOM9pUhWfDmrAh167Ic%2FudSDjKxvMTowQpUPlHXVIMOm523KpQsCN8M1D3JBNv5BT5A1rgsdA%2FfLxoHYXsyHw8gXSkE%2BP2xq87%2FFGFyjIWYnlYPB003hJdjSDLspIa3YSltYAdfxE07TPisFDZ8HmjVer0&X-Amz-Signature=eec6c30ed1578e7b976bf524bae6139f5223a1fb0c387e0497cba33a88d1364f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIV3PBK%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHC8iTIAHSIBEeZ23im76uNv2igBFP%2FKCuu6eIuaHdKtAiAlOyeKCQ640Y91BFQ3lu3MWVFl8ZFxttYtJkA17VNNjyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMJcf0%2FVUH3xsRHDAYKtwDryWyd1KvSPHMVRJ0qXohK0trYVT%2FEgOixnoWOuZyh5AqwZuOC6UruELt9LdXpqpmli0lCp0qwKtypDrwzwc%2FHGwv%2FbITOtm7bRGWrw%2FeLUysrcO4cw%2FUGSTUlYz5bgrty8LdFajJ0tMf%2FUMJ15V2YBhJOsy9nQRdeFw1HE7MebpyenRLzvqQ%2FOQd6Fd69J8VLMyz6hssWpY34vrkFPUA31CH3VZAO%2BmKCDgiBIKTnO%2Fo90yBFw5a7xSR99IqKciu9RoakZ9RalPrCSJIiXyD4OodLshbU5dnrv7vtcf%2BDesP%2BpZLbIEuln2RvDbmya2E3UahUjwFPniRY%2BZ1T3K6C%2Fi9kG3xK5QVVbWB9%2Btjk8W1Ptizu80SCJTptmSXAZPcIBy9ypP0UcW9gGQMkkmv%2Fk6dc6rW1XgAfeXUJkiPyFC9%2B990CYFaBsQNyzzC9xpsMhLb%2BiDrEezZKeZcClmg6UBITWQ66OLRQkyfosdenCQqu1hH0dIEqmfDx0iQarsFBHA4cGlXzkGp%2FlsMDRSiLUeSQHlnHlXSUoBugVRG68mYdkHhaIEzIc1vQe5f2XBWEtgOsMMM7V%2B0DLx0lz%2FwhLIpgICGsEcfs09%2Fm7VAbnVAjzU2%2B1RHNdhH%2FNcwnYSywAY6pgER72Xqrub5DfX1NHxXHAUDovl%2BUXyn48PJEWFQwRhEh22RK2Al25XyJK%2BbdWy6uCeoN4YrKRSOEADimRcP0ATVfKf5dILWbTdWK5zlGsLyQBYnXJ12azIwbi7qlkVDRH9qdmmUl2CN7NlXz44z1GEMpVW3Ft5R%2FBAqbfZ%2FDEo6bCKwAdazUaROSGDXg2C6Oh%2BGVSCBJ5GwItd0P3A%2Fo8SVMskDm2JQ&X-Amz-Signature=27334347d33172b5dce0808684a80d948bb7c621503525e4683b87ff7fc7f08d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTDXI64O%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3KR3VdTGcqri%2BqHV9KgLx3EQL63Ppiqama4LtwKJSACICRfW%2BheLqIkxQ%2FDQ1i1K9inCFs2dypTEnCAxCIHQX8QKv8DCEAQABoMNjM3NDIzMTgzODA1IgyDLpGwBiIx04UNtgcq3AMs6NgdzhpfT5er3T7hejByAXDj%2BpH9DBVnmMM4e65BojBmCo3X6CvDlCQHVYxUEUwwUIN01NeW37FYcouJ%2F4bgopauGdSIIEr5vmfqOquqV6a3RIwOOdsOTWebuRoCvQCk5GJdb1ik1SChaEi5HZ71HUoFEfGW6q%2BTne9mL6B%2FmhREtuAzrVxMgoLVbq2fYHDdA5NhhrwPB48ZJ5PqLndXk5oe4F7vbeLH42bvKPECBplhiYL6QGJP9lKSVYIozlK%2FBB63gLb2AbYztNcwpKb0FHqypug%2BmZwi%2FGA4PKp8cy1Zyxps4lSlOOgwWYS71S%2BvH%2BQ3kBmGEs0KkrAq96E0QJqEE3TJr87H7nbsqSrcmQREQpDi5H%2FsBvGOKgEclqxTUZWzLqgwuT96WjOzZrbddy69K4J5zq9B6pNhGDj8xg6hZdlJCDZpciQX41JXXZEy2mEs9W7WGs4NSTfEbVpLuvGT2%2BNFnzXM9FaFuhOaSTmNhUcsOn59ZuWg0c3NSk8n9REzLhou5PKNYpIQuyJ5Z1rwlhCDmJgChCTy6TLH2tknvJX%2BoYudRj7tYgaxSyh9s3CjfyZwfPLj0xr1EwWOF7HcApT6Mi%2BafS3tZ29uBywOv2Hpz05bnsKiTTCnhLLABjqnAS06qQkDk%2FDVJbc2cAq7y1LYdUeBXXZVwUPmJ7CxLbrpHk9g%2B6vqKVFspcTHywxUYDs2wAwYlmpi4jtyJz1f8KffCkgmewTkOashOe4VmvM2HTzEVSteA5pdS95p3PJBoK1cGBDUf%2B2KRjtGLxRjjzPwB%2B8Jtr3U6gznMkMxXdL684t8l34lavrzGAg6xtFuCZ4um%2B9ATZvZ6ZZAUFDYDYRBgl48VOM3&X-Amz-Signature=cda994ae7669d92cd256ec0da0d084dec5ffd603bb6e05655640689bb2b8a565&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
