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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6L3YIAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC2OEYJ3Rrs4XMrSlt362QyF%2BsTKTpolXhvP3jNNU8VYQIgdob9AvfC6Cy%2FHfpGDo9gAm%2FO80K3T5MnFw2DOBbOY84qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhpsmwPT66dwfZ5ZircAzVOzxM89ghIrMm83jqWR2vllmlL9op%2BLLvhq5RVW5q1%2FTVHEVpQcAGy1FQahlOAxgmZm797tLXy9woWJuW2HyQSfil5dgJvytxp8U1MlqTizbbLJZG8i8oXEONj4U5zFhkEKxPkgEDP9MlLE8J6wSqfjdO2UUrrj%2Bzw6Rc80C0%2B0ahPG9MQHVm6GtwHbnfWfSwEy8BjHwCYCRv7SrTUxOxTvojqSlg%2Fd6ikE9wMD3usOV67sHE93V1mRHtswHtZssjjELfq6Ad%2Fv%2F8Z5fQXbKNENcrSQ5%2FCIDX6M5ay5vWCFM2wh1sfA0WIUS0VwXW1GQzc9iW63HfIr79mceaXYw7%2FfWmMsu3bBTV0c%2B%2F8bQrm0jaZNuy3NwTGyCydd9%2BgavwatF1ojeRdKoXYGt8IaV3qVTsUh5NQXYLgcJBkEO9ehhCgX3QB5dPWf0U6DmcTPTau0Q3g5Gs%2F68gdws%2FLUXLOMg2%2BbXEyqxKrDu7v9GyZiDmf4%2FOfpXbRgipBea4wh4UHTcgnMjXfcY3QPeOONwCmGEgGzuQV9g76gQ3nGlo%2BPZmj4vW%2Bu9Z0sr%2Bn5p%2ByBsiwzpiCPX6nE5wqmxZ5wHuyswjSc0KB%2FMfWV30LbK7bYjxUM%2B9wW4RVN2niMMTP6MMGOqUBPMZHHOwHBlSW3c3LhoNsetPBWWd7UmXFvP2nZLnsM5LhdtVsSG0KbXxXnVSreGWbTlKWMYjFW%2BxJeyyC6DkCNFZEb7qaNjzoe6uJhjujqBUbQMfqaU5AjPsz0K2MqBgRnhRi7xdT4EUFjnoSNmCST5SyLTk6zgNF%2BU6wIPPRAmh9r6HlN7IHPQN0SAcXg9AL8L2mplaJ6%2F0HdcBlSPCSgb%2FzEdN%2F&X-Amz-Signature=f92e531b5ad92d2fad8b77597d055a4f8978d2a6b1b3dfa37144cbaddc784bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6L3YIAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC2OEYJ3Rrs4XMrSlt362QyF%2BsTKTpolXhvP3jNNU8VYQIgdob9AvfC6Cy%2FHfpGDo9gAm%2FO80K3T5MnFw2DOBbOY84qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhpsmwPT66dwfZ5ZircAzVOzxM89ghIrMm83jqWR2vllmlL9op%2BLLvhq5RVW5q1%2FTVHEVpQcAGy1FQahlOAxgmZm797tLXy9woWJuW2HyQSfil5dgJvytxp8U1MlqTizbbLJZG8i8oXEONj4U5zFhkEKxPkgEDP9MlLE8J6wSqfjdO2UUrrj%2Bzw6Rc80C0%2B0ahPG9MQHVm6GtwHbnfWfSwEy8BjHwCYCRv7SrTUxOxTvojqSlg%2Fd6ikE9wMD3usOV67sHE93V1mRHtswHtZssjjELfq6Ad%2Fv%2F8Z5fQXbKNENcrSQ5%2FCIDX6M5ay5vWCFM2wh1sfA0WIUS0VwXW1GQzc9iW63HfIr79mceaXYw7%2FfWmMsu3bBTV0c%2B%2F8bQrm0jaZNuy3NwTGyCydd9%2BgavwatF1ojeRdKoXYGt8IaV3qVTsUh5NQXYLgcJBkEO9ehhCgX3QB5dPWf0U6DmcTPTau0Q3g5Gs%2F68gdws%2FLUXLOMg2%2BbXEyqxKrDu7v9GyZiDmf4%2FOfpXbRgipBea4wh4UHTcgnMjXfcY3QPeOONwCmGEgGzuQV9g76gQ3nGlo%2BPZmj4vW%2Bu9Z0sr%2Bn5p%2ByBsiwzpiCPX6nE5wqmxZ5wHuyswjSc0KB%2FMfWV30LbK7bYjxUM%2B9wW4RVN2niMMTP6MMGOqUBPMZHHOwHBlSW3c3LhoNsetPBWWd7UmXFvP2nZLnsM5LhdtVsSG0KbXxXnVSreGWbTlKWMYjFW%2BxJeyyC6DkCNFZEb7qaNjzoe6uJhjujqBUbQMfqaU5AjPsz0K2MqBgRnhRi7xdT4EUFjnoSNmCST5SyLTk6zgNF%2BU6wIPPRAmh9r6HlN7IHPQN0SAcXg9AL8L2mplaJ6%2F0HdcBlSPCSgb%2FzEdN%2F&X-Amz-Signature=7c68e2233c5a10376d0dd4a384fde95109eec6d39ac4abe888a186251e52be72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6L3YIAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC2OEYJ3Rrs4XMrSlt362QyF%2BsTKTpolXhvP3jNNU8VYQIgdob9AvfC6Cy%2FHfpGDo9gAm%2FO80K3T5MnFw2DOBbOY84qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhpsmwPT66dwfZ5ZircAzVOzxM89ghIrMm83jqWR2vllmlL9op%2BLLvhq5RVW5q1%2FTVHEVpQcAGy1FQahlOAxgmZm797tLXy9woWJuW2HyQSfil5dgJvytxp8U1MlqTizbbLJZG8i8oXEONj4U5zFhkEKxPkgEDP9MlLE8J6wSqfjdO2UUrrj%2Bzw6Rc80C0%2B0ahPG9MQHVm6GtwHbnfWfSwEy8BjHwCYCRv7SrTUxOxTvojqSlg%2Fd6ikE9wMD3usOV67sHE93V1mRHtswHtZssjjELfq6Ad%2Fv%2F8Z5fQXbKNENcrSQ5%2FCIDX6M5ay5vWCFM2wh1sfA0WIUS0VwXW1GQzc9iW63HfIr79mceaXYw7%2FfWmMsu3bBTV0c%2B%2F8bQrm0jaZNuy3NwTGyCydd9%2BgavwatF1ojeRdKoXYGt8IaV3qVTsUh5NQXYLgcJBkEO9ehhCgX3QB5dPWf0U6DmcTPTau0Q3g5Gs%2F68gdws%2FLUXLOMg2%2BbXEyqxKrDu7v9GyZiDmf4%2FOfpXbRgipBea4wh4UHTcgnMjXfcY3QPeOONwCmGEgGzuQV9g76gQ3nGlo%2BPZmj4vW%2Bu9Z0sr%2Bn5p%2ByBsiwzpiCPX6nE5wqmxZ5wHuyswjSc0KB%2FMfWV30LbK7bYjxUM%2B9wW4RVN2niMMTP6MMGOqUBPMZHHOwHBlSW3c3LhoNsetPBWWd7UmXFvP2nZLnsM5LhdtVsSG0KbXxXnVSreGWbTlKWMYjFW%2BxJeyyC6DkCNFZEb7qaNjzoe6uJhjujqBUbQMfqaU5AjPsz0K2MqBgRnhRi7xdT4EUFjnoSNmCST5SyLTk6zgNF%2BU6wIPPRAmh9r6HlN7IHPQN0SAcXg9AL8L2mplaJ6%2F0HdcBlSPCSgb%2FzEdN%2F&X-Amz-Signature=3d2a9a086d39ff64b42ad5c903d21865900fc051ea3aeb6ee07d59ba4686d26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXAVH62I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCuXxgPqTk54BSkYz3pOUPnXhKw6dYRgsbzhRL4HVyGbwIhAIwMZ%2FXV%2BtCE6rASUogQzAUhLii0mx62eUkruQp2ZepBKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKYuYYBHH%2B8srKH9sq3APofb7EvtosdMKpiPvvdTwF6MGKETLXIGCj%2BIvM1Gp5Ay1bv1yiA%2Bb%2FnK%2FlHm1ooU%2F6srwDBX6LoZJ8k103wfNMq%2FIpMMACId2R6jHvgi1IsIkN9tpmCHX0fP%2BTLV1DHhZJNkCiJXgteZx1br12zJfajuyMmpIuIl6F2%2BAIAfjpMNbTpo%2BLEm%2FaEhXzx79ZoT9DRRRnz2JdUmvd6%2BsrlNoURyIom5xRhoK%2FV%2FDgR7uZ%2Bp2IUTadJryNhaBwlZpxQvcbuhw7KRiV7SHbCBxTllDsn2B6PZjDEoPXGAkciU4uC%2B%2BV4JRdQzg5Hnef4iDBsFslTPIdrvczVuFVW4Dzw2Y6yFttNlfqA12cJd8Gi6sJRFa7eoFo0IL8JPjgRa0deOe%2BZHJ%2FfdvamxjsZBDP3pBLDxpqvR2MT28mddMl7vxnIoPmCOatWN9YRQ9X3Et6eCFb9eU1eL5AFmHHFtgn%2BBKocwza%2FFw1BcACXe33FQcLCKAyn3qOyPiBH4ThL3%2FK6XJFGLTKCW01kffKC89yqfqaTnrtt9cwVFcsgjkfF51sW6V2V7%2BM1hoKZysmtFyeM%2FVsKsc6506%2FLPOjMX8rzFHV3%2BbQGbb7CeP2Zf0Sv8mYg5bbeqd%2Bbd%2FLpLydsjDOz%2BjDBjqkAV08Mdqk1KlHyvR4wwmX%2BZ25HM%2BqFhZ9lYViSGFWICV9xYhHEs%2B%2BXgvWPlMgTKOUVpkJ%2BBpwyZSfADsvIt%2FtIg0Lp92JHnEdM9oshk%2BYo1VLAMJWIlp4SEguKb9t93Na%2FnB1OtOzZZr5bA35aW8rB1rXazytXspMaTRUtWlD3z%2BstGMVmbSBSt3oCqVRf7Mdh3jMkgt%2BFUY1KsbHryacW8XBrFkQ&X-Amz-Signature=bc07d55ed6355b31b3fc9d1d61643c5b9957b587cff87af759ed280a729e352b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZK6YMUB%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCNJ9gXO%2BTtPNoQhWFSIaVZdK%2B7OVWaJ5ENH9Oq%2F%2FiXqAIgF%2BrSqqzPUsHWaCtINeWBFBE%2FStxQTMwxYFjAMliLoFEqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2ibdLlY2UdvJBK0ircAyUDmZdVQgAlV1cbPNNb1vzD%2BNsBvYw4lCeXMFyTlC0FipomlZT%2BqUl5fNHEqGUK2biFgRT6yrykfdyNOgRm59f8JhOtiNy2WEt7c8Dx%2BipKl7tcCu2jjIRdShkMgNKsUaIF%2BajvByHlFj1nYOVuNWJZZgWTDabSGy%2BH9yT0Vp92j2SG26ra5HPrqnBotQD%2FWUaujP7%2BJcdJcAbFiTnvuWI8lu%2BY%2FlobhfwnXy10Kqsu8GmtJrcjo6tDMaVWYW3rwx5qyjKX6l5at%2FweDqrpVM2L5rQyjiJe3te4PXHn3vJCxb3ZuH4hbFHUxBpQYpA6Fp3rEgg1R34mZWh4aeBsrThg2G9NJ64XozeejiGlASDkaoLT6HqeXYcxYtXp8FaRboJqM6TVsjajzEo9XUXHbqllYS7XbEM0Lxki8RfQqXPz%2FdaFiqLIbDXsbWzYYh%2FYIU1OeBCAhNQe8QoccaxyKd6hkDe0b6oTXhMpu8uyla%2FgrYA9dG1OymAFcHMWkFAzzSJRwbrplC8AMKZiPQLh7VoePecUpZDJ71I3ra1CdO%2FPQBYTxhpmqsaodZAHD5MOMR5xkyiOWzCQ3s%2Bwl6BIjJYHXD8IZKnqucpo3GvjUVsiusYofsOeFet%2FPHM4MPnP6MMGOqUBoj3%2FW4ltCT3HeZXW4ijG7juXb6ktJiILIAyEltrwvFtIZNkTl01PbU%2BJcn1w8W8Pritpp78Zrps1dXwwlv6Rvc3fASY5p%2FLXMKOx9EWL9GtBi%2BRRKxm52UJQEtsdYWm2X2mWfX7XwFsVgaoWaYIhUsMwGNgl5mOLCeCe6MFWgm875%2BzWUWm%2BY6K6S3163O5CFMyqKsR1SlYNHorMOB7NE0zRevVN&X-Amz-Signature=9de5801d905c08829cb5a6f8375ddb23967aab2eeed2a5b7c2829fbd88d5996d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6L3YIAR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC2OEYJ3Rrs4XMrSlt362QyF%2BsTKTpolXhvP3jNNU8VYQIgdob9AvfC6Cy%2FHfpGDo9gAm%2FO80K3T5MnFw2DOBbOY84qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhpsmwPT66dwfZ5ZircAzVOzxM89ghIrMm83jqWR2vllmlL9op%2BLLvhq5RVW5q1%2FTVHEVpQcAGy1FQahlOAxgmZm797tLXy9woWJuW2HyQSfil5dgJvytxp8U1MlqTizbbLJZG8i8oXEONj4U5zFhkEKxPkgEDP9MlLE8J6wSqfjdO2UUrrj%2Bzw6Rc80C0%2B0ahPG9MQHVm6GtwHbnfWfSwEy8BjHwCYCRv7SrTUxOxTvojqSlg%2Fd6ikE9wMD3usOV67sHE93V1mRHtswHtZssjjELfq6Ad%2Fv%2F8Z5fQXbKNENcrSQ5%2FCIDX6M5ay5vWCFM2wh1sfA0WIUS0VwXW1GQzc9iW63HfIr79mceaXYw7%2FfWmMsu3bBTV0c%2B%2F8bQrm0jaZNuy3NwTGyCydd9%2BgavwatF1ojeRdKoXYGt8IaV3qVTsUh5NQXYLgcJBkEO9ehhCgX3QB5dPWf0U6DmcTPTau0Q3g5Gs%2F68gdws%2FLUXLOMg2%2BbXEyqxKrDu7v9GyZiDmf4%2FOfpXbRgipBea4wh4UHTcgnMjXfcY3QPeOONwCmGEgGzuQV9g76gQ3nGlo%2BPZmj4vW%2Bu9Z0sr%2Bn5p%2ByBsiwzpiCPX6nE5wqmxZ5wHuyswjSc0KB%2FMfWV30LbK7bYjxUM%2B9wW4RVN2niMMTP6MMGOqUBPMZHHOwHBlSW3c3LhoNsetPBWWd7UmXFvP2nZLnsM5LhdtVsSG0KbXxXnVSreGWbTlKWMYjFW%2BxJeyyC6DkCNFZEb7qaNjzoe6uJhjujqBUbQMfqaU5AjPsz0K2MqBgRnhRi7xdT4EUFjnoSNmCST5SyLTk6zgNF%2BU6wIPPRAmh9r6HlN7IHPQN0SAcXg9AL8L2mplaJ6%2F0HdcBlSPCSgb%2FzEdN%2F&X-Amz-Signature=8ba1263e7fa9b40cd142f888bdf106a48efe867c125c28d5d16c53825c16242c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
