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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZXIIY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCIAaoMR3wSbMRC77BCf6mspylqepuJfHrb7wIofdLdYwIhALSGfRgheHpktSARkzL1NoK2xtWhd7vWN8bJMseDTBwwKv8DCGMQABoMNjM3NDIzMTgzODA1IgwLW4yAvqlIJOFNfF8q3APtAMnBUCZ%2BNrOd7tV4fCfcshlo9%2FQLeq%2BwLpuaQmPeONTkOQbpLYwG%2F1O8aCgnhE7kSEKF2gt9SAuWlZoGM%2B3aLeATG%2FY1z2p%2BfKSskY0QCYy9eY7QQHHdvG8BgCN81Aj7RnoC0Yz0gvgvveMU1clnN5zra6%2BNNjdW%2Fi2PMabaazwxW7hwNXst60LYb9qc%2Fbv0j2NoG5Lfki1AcUkPXEBnV75F%2BdmqMZHh89VUJhEK6AxpmbuSl1kkve5fgNO7Xyfcv6caT%2F%2BC7Rx4r5B%2FvIywWEjBE5laOzogXGjtthe232uK6Pq09BbPuHOoC1k3KDhiwi9Pr7HOaka4JJPPW7LFXM77D1n4MIEf7PdoMAApxsJQjGXi%2B%2BQJcHdrXpILsRPaHMh%2FCCvhIuNM4E1wYDlzOfTMEpzLz37sTgOWLjEXDNIE7ARpC6tEbWOHL%2BOCGo7PeS1yxOjCkUDndv%2F9ovHqZLg%2Bv7TUyLyC6nn6nklvkPTqpliQkr25oC90fJtiSRMxDfiToO6vCv%2BO%2FDzyxYG5l1aihiuYDSbYn7Ahv8OylgD4MgusoP%2Bf8kgM%2Fk9dpnHfbxxonuKHFeLDoe7iJmlr7fGtAkkfGWsPE8N2KFTyJ1GIV094nu1K60DYJjDX2v3EBjqkATjCptYPNe4xH5Ro76WVIoSyR%2BGMjJ3jSQzDSCtywKjHEiXeAWkhpl9cA0hesw8eUcrkT%2FDWeY6fEtHJAlYQjy4N%2F%2F%2BQQhMQtK%2B2FlbhQzw235kGwetwyGfLYf3u6%2Ff7k5LnxQhj31EP%2BvLnZjJOZzLBlLzaqBh%2FEZBfAAY%2BxrzkT4gsT6ey%2BIjwRsDB0ClJ9itxJtOHUnc2XFe8U%2Fe96VPm1yKa&X-Amz-Signature=bb88cef41636c8640ca2002495b9b78fa92965dc761c5727677c6b366fef04d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZXIIY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCIAaoMR3wSbMRC77BCf6mspylqepuJfHrb7wIofdLdYwIhALSGfRgheHpktSARkzL1NoK2xtWhd7vWN8bJMseDTBwwKv8DCGMQABoMNjM3NDIzMTgzODA1IgwLW4yAvqlIJOFNfF8q3APtAMnBUCZ%2BNrOd7tV4fCfcshlo9%2FQLeq%2BwLpuaQmPeONTkOQbpLYwG%2F1O8aCgnhE7kSEKF2gt9SAuWlZoGM%2B3aLeATG%2FY1z2p%2BfKSskY0QCYy9eY7QQHHdvG8BgCN81Aj7RnoC0Yz0gvgvveMU1clnN5zra6%2BNNjdW%2Fi2PMabaazwxW7hwNXst60LYb9qc%2Fbv0j2NoG5Lfki1AcUkPXEBnV75F%2BdmqMZHh89VUJhEK6AxpmbuSl1kkve5fgNO7Xyfcv6caT%2F%2BC7Rx4r5B%2FvIywWEjBE5laOzogXGjtthe232uK6Pq09BbPuHOoC1k3KDhiwi9Pr7HOaka4JJPPW7LFXM77D1n4MIEf7PdoMAApxsJQjGXi%2B%2BQJcHdrXpILsRPaHMh%2FCCvhIuNM4E1wYDlzOfTMEpzLz37sTgOWLjEXDNIE7ARpC6tEbWOHL%2BOCGo7PeS1yxOjCkUDndv%2F9ovHqZLg%2Bv7TUyLyC6nn6nklvkPTqpliQkr25oC90fJtiSRMxDfiToO6vCv%2BO%2FDzyxYG5l1aihiuYDSbYn7Ahv8OylgD4MgusoP%2Bf8kgM%2Fk9dpnHfbxxonuKHFeLDoe7iJmlr7fGtAkkfGWsPE8N2KFTyJ1GIV094nu1K60DYJjDX2v3EBjqkATjCptYPNe4xH5Ro76WVIoSyR%2BGMjJ3jSQzDSCtywKjHEiXeAWkhpl9cA0hesw8eUcrkT%2FDWeY6fEtHJAlYQjy4N%2F%2F%2BQQhMQtK%2B2FlbhQzw235kGwetwyGfLYf3u6%2Ff7k5LnxQhj31EP%2BvLnZjJOZzLBlLzaqBh%2FEZBfAAY%2BxrzkT4gsT6ey%2BIjwRsDB0ClJ9itxJtOHUnc2XFe8U%2Fe96VPm1yKa&X-Amz-Signature=deb2bdb1fd943fbed3ee8212d96ead701befd88d9689e7cffde3cd8bdbe186bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZXIIY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCIAaoMR3wSbMRC77BCf6mspylqepuJfHrb7wIofdLdYwIhALSGfRgheHpktSARkzL1NoK2xtWhd7vWN8bJMseDTBwwKv8DCGMQABoMNjM3NDIzMTgzODA1IgwLW4yAvqlIJOFNfF8q3APtAMnBUCZ%2BNrOd7tV4fCfcshlo9%2FQLeq%2BwLpuaQmPeONTkOQbpLYwG%2F1O8aCgnhE7kSEKF2gt9SAuWlZoGM%2B3aLeATG%2FY1z2p%2BfKSskY0QCYy9eY7QQHHdvG8BgCN81Aj7RnoC0Yz0gvgvveMU1clnN5zra6%2BNNjdW%2Fi2PMabaazwxW7hwNXst60LYb9qc%2Fbv0j2NoG5Lfki1AcUkPXEBnV75F%2BdmqMZHh89VUJhEK6AxpmbuSl1kkve5fgNO7Xyfcv6caT%2F%2BC7Rx4r5B%2FvIywWEjBE5laOzogXGjtthe232uK6Pq09BbPuHOoC1k3KDhiwi9Pr7HOaka4JJPPW7LFXM77D1n4MIEf7PdoMAApxsJQjGXi%2B%2BQJcHdrXpILsRPaHMh%2FCCvhIuNM4E1wYDlzOfTMEpzLz37sTgOWLjEXDNIE7ARpC6tEbWOHL%2BOCGo7PeS1yxOjCkUDndv%2F9ovHqZLg%2Bv7TUyLyC6nn6nklvkPTqpliQkr25oC90fJtiSRMxDfiToO6vCv%2BO%2FDzyxYG5l1aihiuYDSbYn7Ahv8OylgD4MgusoP%2Bf8kgM%2Fk9dpnHfbxxonuKHFeLDoe7iJmlr7fGtAkkfGWsPE8N2KFTyJ1GIV094nu1K60DYJjDX2v3EBjqkATjCptYPNe4xH5Ro76WVIoSyR%2BGMjJ3jSQzDSCtywKjHEiXeAWkhpl9cA0hesw8eUcrkT%2FDWeY6fEtHJAlYQjy4N%2F%2F%2BQQhMQtK%2B2FlbhQzw235kGwetwyGfLYf3u6%2Ff7k5LnxQhj31EP%2BvLnZjJOZzLBlLzaqBh%2FEZBfAAY%2BxrzkT4gsT6ey%2BIjwRsDB0ClJ9itxJtOHUnc2XFe8U%2Fe96VPm1yKa&X-Amz-Signature=40bd357941161f31cb2f515c41ab5789b1548300e36f7e0a232e5740293728c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLHNLMQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDizV0%2FFMEmBdkQ3r%2B8dx4FGQ%2BrYJjaM1BR95iUrfGzFAIhAMFW2xO6J1M2vTV1tsaivrYvZ%2FA5BME50BjKj9YQBzcyKv8DCGMQABoMNjM3NDIzMTgzODA1IgyFzMnPvezMW%2Bl1Tpgq3AOGtzlMaRh%2FumgBjp6%2FM1t2tVMpFhNWhvK3b1lS0%2B3yRKdxaC6fLUkm%2Feixa%2BI%2F7kJtdZ6yGCJKvMbUxST7Dr5nK38N9vNDMb37cvIH9m7pKCcN5rbuKwuc7vRBmck155jc517Y%2FPSVpHQO8kqs1LXVZpA00R2xZrX5%2B8A%2BlmWD%2FKIH6Zh8Uq1xik4rLBrD2wop9EQ1TGFGtUpIP2qHt3dN3397o8duWYoF6XNOLI18XZzNC0PPwVfCcKPter31oc0SJLvYt1WJzXzaeXDCdYGekTKFadglAyCwD%2ByCU0L5AoFtyJ1c5P1YI07UP6FbwbrOX2d2osDHY9WG4%2FMKS%2FdmjI09iHdkqe0LcGvX2OaE5vxMtWeZlOslAFYRgrhI2wAHw%2BFxVReh2WWs2xzmt0PsSY8ImRSj496Mo9rzBZNPlTZEG5iLVnxlMXqNQUlPPYauTWDamu5tyDiskhFTo0ecJRjaWIDGmqf7u1QOe5n3vTmkYhVPadZEb8hsyBPnFI7fEHS6KKnx2%2Fw8FP3Rm5PX9XUQwQk0ADH9T1cD8JP2aw6XF1P6twF0xpJ%2FVdY%2F77Mp7432ybnY877jXBA73%2BOkHxmSXdhSNwwzuaQ%2B49rgSKJSGwIzDQBk%2FSOrlzDn2v3EBjqkAWztC%2FIjMEWVh%2FIYXhTAZlGCFvsqcYk2pHYL28FQhiDuxC2%2FZJJ70tPrcXarlL9XmxhMGDJs24wYkPAR%2BmfzWsg4OL6qHN%2B%2BNUQbeHHCpxvuHIG2EntW%2Fo9O%2BdlYVHMRGs6JgNoeXwn627L2WTM20TMs6NfyGQut4BXViVOWROrvPG2nZVEJR8If1MnclVExBPLj%2BW1KWhQii9kTZfrNX0p96jdY&X-Amz-Signature=b5014a1ab1f1de930888bd12423a414bbbb6474a27e6431ddc5f81fdd1cacf7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADPHRHU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHhGoa%2BhqoFUiZknWdSaYzsNfKQjxJhkzJRBAFwiPMcXAiEA17DEY9vKq50CWx%2FupJtxLq0TKwkbPbHP6d1SFPE2msoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJFQD4RL7%2FBwX6GboyrcA3GyST1XUJYZ99XEG7BEpKbu5ly5EFHNSibQBn8wt7PW7ruZLDi5wPU99DhmSHbMqP5%2F32rFxcQCsIg0toWB%2Bsrjn74AvoLqdCmRCa3MW7RliPv6YplHY5Wte6yuT5K0NsZuTFRoBDCS%2B5S4aOuO1OH7yV%2B305zwZWJKiNBbT%2FSvJNRfzztAavVUrZIV7Rz%2BAqkO9oUdE9VIg6S%2F9UHfPstv45koeKBkVKmovWnXSQDlueexYjKh1ULu1fEFfa4cUom8rRRszV6ufAe24GoVfnDJPPIeYgh%2F9%2BHyQYdlQu9vXcjOlIzpLIz91bjHmhKzZ2lEA9W%2Bo6zV1qtzf5kxBcG8IZuXblxwJiRwAAgkG2lvAL66oJKL8zSHYCFm4JL6cZs02%2BIVtywDCfH5X57q0Bn3XeSJvvOdLXqJfsu7A%2FB0BmOxLACqUBuWa1D17hi7%2BvR59U9cdZus5MWjqmoQszpd5AoYZqfPRhKiovpzX336PrBUxOEibD6240BiiPjrxWMaY9tqc3vm71OqPA8mluHvIaH4RSPuzSPlaprzJot%2B3tCioh9fIsu%2FhFmEicPpT%2FdBtAC%2F8nzQNaI7GW4bHGOfF%2Bj%2FZj0wogAHj6dYQwsDhpou2UADxbgkHlBQMKHb%2FcQGOqUB4D8sqbZwpjkaTpmRfEIV0e%2BSGbO1MmroRPv9YUB0iqi0hNVKOnN6mObLP%2BpCRKTXxa6IA10y8W4iuXdfpCtg5F5AnOXSTauXq8jOe%2BZ0asViUvandKlOXIaSe3jkXFgjnlHGZWrwbA8MBT1J46xlplN%2FGp0zoxhlLwLZujBq5LcGMU1GEhUmW%2FvuAf%2BrS1XzlgZqfe13JVwe4z8ainlcgmtVRZlv&X-Amz-Signature=675be7f33cb328db450380c6e618277371584df813dcdbdacc216c23adef2b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCZXIIY2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCIAaoMR3wSbMRC77BCf6mspylqepuJfHrb7wIofdLdYwIhALSGfRgheHpktSARkzL1NoK2xtWhd7vWN8bJMseDTBwwKv8DCGMQABoMNjM3NDIzMTgzODA1IgwLW4yAvqlIJOFNfF8q3APtAMnBUCZ%2BNrOd7tV4fCfcshlo9%2FQLeq%2BwLpuaQmPeONTkOQbpLYwG%2F1O8aCgnhE7kSEKF2gt9SAuWlZoGM%2B3aLeATG%2FY1z2p%2BfKSskY0QCYy9eY7QQHHdvG8BgCN81Aj7RnoC0Yz0gvgvveMU1clnN5zra6%2BNNjdW%2Fi2PMabaazwxW7hwNXst60LYb9qc%2Fbv0j2NoG5Lfki1AcUkPXEBnV75F%2BdmqMZHh89VUJhEK6AxpmbuSl1kkve5fgNO7Xyfcv6caT%2F%2BC7Rx4r5B%2FvIywWEjBE5laOzogXGjtthe232uK6Pq09BbPuHOoC1k3KDhiwi9Pr7HOaka4JJPPW7LFXM77D1n4MIEf7PdoMAApxsJQjGXi%2B%2BQJcHdrXpILsRPaHMh%2FCCvhIuNM4E1wYDlzOfTMEpzLz37sTgOWLjEXDNIE7ARpC6tEbWOHL%2BOCGo7PeS1yxOjCkUDndv%2F9ovHqZLg%2Bv7TUyLyC6nn6nklvkPTqpliQkr25oC90fJtiSRMxDfiToO6vCv%2BO%2FDzyxYG5l1aihiuYDSbYn7Ahv8OylgD4MgusoP%2Bf8kgM%2Fk9dpnHfbxxonuKHFeLDoe7iJmlr7fGtAkkfGWsPE8N2KFTyJ1GIV094nu1K60DYJjDX2v3EBjqkATjCptYPNe4xH5Ro76WVIoSyR%2BGMjJ3jSQzDSCtywKjHEiXeAWkhpl9cA0hesw8eUcrkT%2FDWeY6fEtHJAlYQjy4N%2F%2F%2BQQhMQtK%2B2FlbhQzw235kGwetwyGfLYf3u6%2Ff7k5LnxQhj31EP%2BvLnZjJOZzLBlLzaqBh%2FEZBfAAY%2BxrzkT4gsT6ey%2BIjwRsDB0ClJ9itxJtOHUnc2XFe8U%2Fe96VPm1yKa&X-Amz-Signature=355f092b9e5beeecd2638f76070dfd8c4ef1dc4eae3c6c4d429716ce4bd9df6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
