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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYC3HC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAI%2BSD58d1xtpExAIDi2QfPJl7krNY6t3SFx8sD0m0CAiB86%2FTtbXEfbla31U87NO5PuA5xBoh9dNzpXod7gLR33CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhPrh8EoRdJ9ins7KtwDdmYpmoxo8vbSd54C5amt97QSqclv5FeHDSPK23dBnntMU0hgE%2FeAOt9W6Hz4T7P%2BLjxhPxZEebBrnNuEm49iGVHPbD3dZH91qZYfAOeY7b98g1WPVERsOTai0qPG9u1bwixhldw97eR5nhWLne8hmmV9f6fMGo80GvfsPXPpCn%2B%2FmoHKBpY2jZZ8g269dm4IdsKW7fCphaQ3Kd2GvUficEZ19NmPx85lE56JKAKKUEZtm6smWR3gIip6cwcbi3622l8hMqtQ3gqVbqTpXSJcN632tnuRM2dcSb2wJm%2FgYzLHe5je1szLCGU3YsmQIrK9QQFS5TPaxqdUcibDkvot%2F%2FfE5qsms20o8CO8kbEpiudHNtNhMrZKyFDDMQ0xHRGQOs%2FIWoqlQwOnm7ndI0lP%2BLv74HFp5Vw2yt250FsMnLT5qiqQPAWDmTnLsKJBoHIua9hySzalOdmAfSpnt7%2F8IP61JVbCebizJ%2BmfDAx2eL2Fze8THkU4%2FsbD1ZJLamaBKhvnGQQXlMyv6ddIKgvDl8o7eP9PCYLZd1BErwaIy5gO6FhQwImroziMgtgk1tMdfsqco6Dd%2BDk4pQo3OtWJCMG3qwxlSmuBU1XUzuAWnknZWnbFFLbfP9TQL0kw%2Ft7QwgY6pgGlkRr6cvp9sx5omkDGAoBpBgN74p4F0BBHYOEaN8jjHyshIUjDm0y2UaNmaZmpsJKeNUY4UwvYf%2BmUni9x63vBil5msaYntBsFJ5lI%2BugPra3XZNOxn93Mk1fst%2Bgt0Fuj2eNqvB0Yxg7MY9XdtEfCtcNkcSMyxN3b96O%2F0lbwH0vCT0B%2Bv29cTh72ExT1bfciyRKJW5h%2BoxBzTv0nudrTLwLbpYzh&X-Amz-Signature=456209d5a7fe98882338bf5551b57e4abab50a40ea09aa1ab9978593d584d286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYC3HC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAI%2BSD58d1xtpExAIDi2QfPJl7krNY6t3SFx8sD0m0CAiB86%2FTtbXEfbla31U87NO5PuA5xBoh9dNzpXod7gLR33CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhPrh8EoRdJ9ins7KtwDdmYpmoxo8vbSd54C5amt97QSqclv5FeHDSPK23dBnntMU0hgE%2FeAOt9W6Hz4T7P%2BLjxhPxZEebBrnNuEm49iGVHPbD3dZH91qZYfAOeY7b98g1WPVERsOTai0qPG9u1bwixhldw97eR5nhWLne8hmmV9f6fMGo80GvfsPXPpCn%2B%2FmoHKBpY2jZZ8g269dm4IdsKW7fCphaQ3Kd2GvUficEZ19NmPx85lE56JKAKKUEZtm6smWR3gIip6cwcbi3622l8hMqtQ3gqVbqTpXSJcN632tnuRM2dcSb2wJm%2FgYzLHe5je1szLCGU3YsmQIrK9QQFS5TPaxqdUcibDkvot%2F%2FfE5qsms20o8CO8kbEpiudHNtNhMrZKyFDDMQ0xHRGQOs%2FIWoqlQwOnm7ndI0lP%2BLv74HFp5Vw2yt250FsMnLT5qiqQPAWDmTnLsKJBoHIua9hySzalOdmAfSpnt7%2F8IP61JVbCebizJ%2BmfDAx2eL2Fze8THkU4%2FsbD1ZJLamaBKhvnGQQXlMyv6ddIKgvDl8o7eP9PCYLZd1BErwaIy5gO6FhQwImroziMgtgk1tMdfsqco6Dd%2BDk4pQo3OtWJCMG3qwxlSmuBU1XUzuAWnknZWnbFFLbfP9TQL0kw%2Ft7QwgY6pgGlkRr6cvp9sx5omkDGAoBpBgN74p4F0BBHYOEaN8jjHyshIUjDm0y2UaNmaZmpsJKeNUY4UwvYf%2BmUni9x63vBil5msaYntBsFJ5lI%2BugPra3XZNOxn93Mk1fst%2Bgt0Fuj2eNqvB0Yxg7MY9XdtEfCtcNkcSMyxN3b96O%2F0lbwH0vCT0B%2Bv29cTh72ExT1bfciyRKJW5h%2BoxBzTv0nudrTLwLbpYzh&X-Amz-Signature=a05c0cf105b92d4ffe028791ccf35ade5fd1649222ea7eac6dee58326b07938f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYC3HC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAI%2BSD58d1xtpExAIDi2QfPJl7krNY6t3SFx8sD0m0CAiB86%2FTtbXEfbla31U87NO5PuA5xBoh9dNzpXod7gLR33CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhPrh8EoRdJ9ins7KtwDdmYpmoxo8vbSd54C5amt97QSqclv5FeHDSPK23dBnntMU0hgE%2FeAOt9W6Hz4T7P%2BLjxhPxZEebBrnNuEm49iGVHPbD3dZH91qZYfAOeY7b98g1WPVERsOTai0qPG9u1bwixhldw97eR5nhWLne8hmmV9f6fMGo80GvfsPXPpCn%2B%2FmoHKBpY2jZZ8g269dm4IdsKW7fCphaQ3Kd2GvUficEZ19NmPx85lE56JKAKKUEZtm6smWR3gIip6cwcbi3622l8hMqtQ3gqVbqTpXSJcN632tnuRM2dcSb2wJm%2FgYzLHe5je1szLCGU3YsmQIrK9QQFS5TPaxqdUcibDkvot%2F%2FfE5qsms20o8CO8kbEpiudHNtNhMrZKyFDDMQ0xHRGQOs%2FIWoqlQwOnm7ndI0lP%2BLv74HFp5Vw2yt250FsMnLT5qiqQPAWDmTnLsKJBoHIua9hySzalOdmAfSpnt7%2F8IP61JVbCebizJ%2BmfDAx2eL2Fze8THkU4%2FsbD1ZJLamaBKhvnGQQXlMyv6ddIKgvDl8o7eP9PCYLZd1BErwaIy5gO6FhQwImroziMgtgk1tMdfsqco6Dd%2BDk4pQo3OtWJCMG3qwxlSmuBU1XUzuAWnknZWnbFFLbfP9TQL0kw%2Ft7QwgY6pgGlkRr6cvp9sx5omkDGAoBpBgN74p4F0BBHYOEaN8jjHyshIUjDm0y2UaNmaZmpsJKeNUY4UwvYf%2BmUni9x63vBil5msaYntBsFJ5lI%2BugPra3XZNOxn93Mk1fst%2Bgt0Fuj2eNqvB0Yxg7MY9XdtEfCtcNkcSMyxN3b96O%2F0lbwH0vCT0B%2Bv29cTh72ExT1bfciyRKJW5h%2BoxBzTv0nudrTLwLbpYzh&X-Amz-Signature=5c28206f12326ce354bea2c06acbfb6bb37752f6c825b45858be94a3af4ed3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKII6ZO%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJKuSn9%2FNDCAa9sAjTB%2BMWm9czHVaKACfcA5QbHiMLqAiA7BjOyJij9awzorCCu%2FtwcSej01kJIlV%2BfvfJVlVcL4CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAQpdfBrckCArcxhMKtwDWwIx0dSs6D%2BPcYJbPgByIlYedpForcs17gpvT4M2qIgi4uDHSoTekO%2B5oFsNz5xYedOwAHBhnPwCf5B8FD%2FFttAdOO5rbwUSRluY4v9QxT8HyCzjxSYYuYo0HkIVmC0bWVaNXDVIwDm3UlPkFGU9oGFs5u0BUVtXnnk5TQ15nSt1rolMs%2Fz2Z%2F4YfORCUoBS4aYYtOrBJ3d4yPmVMUs8BUfbgbGwvvyWMGTX%2Fm%2FawMmBQeEqVX9X49PCab7TTi9rFLIL7Oal1My0rsx%2FMEieF2dV4ox2rmTy0jHx6VLTa6Nc7tIiEc04vKld6%2F02FR%2FJcyrjqTydUrXeeHf4EZqxdt5gzE0lJ%2Fnymv7vhRc6tWTA2hhLeXzkedqgHU%2BqDB0ZL808%2B7e5jvJc7vfT03geGFRXGqDInzYbaeaMToSI%2BnG788SYOoJkp9U5bU59aQl71dBVbaO%2BOmG2jp%2Fw26oPkZ0k3ZSyzHikZeW3x2uQQ35gMt7L%2Ffx81NHt6nejthrj79Tmgoex9iPbWXJ32KxotyiZN0cHmwXTTdcpv4LLge%2BdPFdQQkgSc8t17zMCVKqlwcq%2FncviUEbN%2Fqvwa%2F0RCSjd82hvQJ9854GpNWBFOCCzC3oQcOOKrq8Uoi4w2N7QwgY6pgGXDW%2B3JpMDmoDSv1arWLpWbnsBEokGOJM6uofFPOZxUw%2FH0uDK7%2Fa71Se6fUqK3BiVzoQ3k%2Bmmg2r4yPsK7%2BWzkiJKxx6CNb5agSlwAR8VmU4Ip%2F9xnvehJ9hloMbAlwYX9sA%2FUD7jcfninbMakFcHqT%2FPkylY124B07lOT0hUf6T3OQ6b9HSy%2BgLSyBWnismZbH71PeGwKDqVup%2BuYIeRtPL3x9fA&X-Amz-Signature=b4db8247a510e6c280ab55ca5416bee5c84ca8b117bc7873ac76a1eb9981be7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RS5ZWSQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd%2B73mK5iaBehGe0RsKRN9NX7LArj4ATUupSA5VVGZwIgTrHqhE4QyuqsByzMYcOXHaTEbyUvgDUK%2BohM%2F90npvAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxbk1fjx9o%2BRthJYyrcA3vFCas25ItKg5Rc4POEnJO9OW19T%2BKavGKTnkFxBnh5du2xTjGB3NrnTEcvTzs5Sdvzgqf%2F05CjlTMBodsh2CmtfQkZLpYAuRvEG4niC6BD5eKE3AsksrRM%2BMEdEy7ZLv0VXAWIeSKcea%2B9D4dLQlDJcL7%2B7qD5pINLZ6zHwja6NPSRhxy55BCQy7WY1WsvjqkTvZ8pkyCd%2BEgQdW4oY1sr97IxNamHqnA1JsnR%2BMyK9xVt2x9gE8nVPlIFq00cC7qnSi7BDZegFqs29AP%2FY3wvfFDd33se5lzonvTMMH0zo2jrDmzHJFluBf0DSwK3S3nfLJbbxzaihQnNd2dyEpHzdQDbmRaNP4n4uGIRs2VnNNdlBJoFNj25ACwJysenvrxOA%2BMqmQtVx24L%2BES17vMfp0ddrliB183HOQTlTZVqdNk%2BaGg4XHvDyg85aWONXt60OVH%2BH%2BhCqEohcGZHSMmqIfv23YC1RfwuBwbfOjw83ZT7wL2ofmkmKKRKQDxl1mdZ2dgUfOONVY7mJhGvT74b%2FpDUjpwX%2B0ylTsy72%2F%2BxvW0Bb2my2xQ7zYyPjt9Q%2B7U5ZXDTAt6kUCsQN%2BO1%2B9WhYlXhUUwqiaL65%2FR4k2glZlhGDXp%2Fm8S393KpMM7e0MIGOqUBWHCB86XvL6YlpsDdNLM6qC5W%2FdECxcxAn4RaM75CdgaqZLnPnwApvwiekzWScQyc7OyR0L9WV7e8OlsXnc%2FWnkheDvgFpXhAxy8G7wjIZN5LUPw%2FV3GAaDSOPU23fjNel2UEVH%2B1wTDIjJ7ii4jkUQd73q1YjJ9WlRv7p7ANXEecwfTOZRrSdQ16V1w7Rz2RfjwgIoF6r0jThIdji%2BT9peOpuuJh&X-Amz-Signature=f39d47eed1b8fc316791cac889b2c37ad523acc789eca4f71694b6b4214f05f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCYC3HC%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAI%2BSD58d1xtpExAIDi2QfPJl7krNY6t3SFx8sD0m0CAiB86%2FTtbXEfbla31U87NO5PuA5xBoh9dNzpXod7gLR33CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYhPrh8EoRdJ9ins7KtwDdmYpmoxo8vbSd54C5amt97QSqclv5FeHDSPK23dBnntMU0hgE%2FeAOt9W6Hz4T7P%2BLjxhPxZEebBrnNuEm49iGVHPbD3dZH91qZYfAOeY7b98g1WPVERsOTai0qPG9u1bwixhldw97eR5nhWLne8hmmV9f6fMGo80GvfsPXPpCn%2B%2FmoHKBpY2jZZ8g269dm4IdsKW7fCphaQ3Kd2GvUficEZ19NmPx85lE56JKAKKUEZtm6smWR3gIip6cwcbi3622l8hMqtQ3gqVbqTpXSJcN632tnuRM2dcSb2wJm%2FgYzLHe5je1szLCGU3YsmQIrK9QQFS5TPaxqdUcibDkvot%2F%2FfE5qsms20o8CO8kbEpiudHNtNhMrZKyFDDMQ0xHRGQOs%2FIWoqlQwOnm7ndI0lP%2BLv74HFp5Vw2yt250FsMnLT5qiqQPAWDmTnLsKJBoHIua9hySzalOdmAfSpnt7%2F8IP61JVbCebizJ%2BmfDAx2eL2Fze8THkU4%2FsbD1ZJLamaBKhvnGQQXlMyv6ddIKgvDl8o7eP9PCYLZd1BErwaIy5gO6FhQwImroziMgtgk1tMdfsqco6Dd%2BDk4pQo3OtWJCMG3qwxlSmuBU1XUzuAWnknZWnbFFLbfP9TQL0kw%2Ft7QwgY6pgGlkRr6cvp9sx5omkDGAoBpBgN74p4F0BBHYOEaN8jjHyshIUjDm0y2UaNmaZmpsJKeNUY4UwvYf%2BmUni9x63vBil5msaYntBsFJ5lI%2BugPra3XZNOxn93Mk1fst%2Bgt0Fuj2eNqvB0Yxg7MY9XdtEfCtcNkcSMyxN3b96O%2F0lbwH0vCT0B%2Bv29cTh72ExT1bfciyRKJW5h%2BoxBzTv0nudrTLwLbpYzh&X-Amz-Signature=5ca75f1383c16d63522a87d3a6e329000932e4fc1f4c3334787bb3768cb8fad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
