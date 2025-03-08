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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIYQOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDRcvZhP7VxeV8p6lOhKuCsXiKDN%2FrClI79Buo7ygjTTAIgOQJW%2FHbeEXqdwSVNIM0dIw5m9oVct3TU833633cSLB0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBfBEj24Y5d5AKZuwyrcA0X%2F9Jomvb%2FZ%2FFvW2BG%2F2yM%2BpDpYsdUDfvVJTSDHE8NfDrKbNP0L%2BNpdSigxVnJvfdC%2Bq5hT0vHxUVcL1QzqfQ4ZA5FbuZF88g67Lp1jXv0%2FHYdMI5e3viI4SPqnqg9jJUh4pbN7tSHqTyP2G%2B8bC1aLgug1eMIjPPMqM4KvOk%2BP%2BWwX9d3Fs5EHKiuFbPfQAc6jHBHXNisweiuQW4I9Cdg%2BotI%2FsmhbPYDUW6gbQim8ug2rEvp8IVpjD4p51GvHjVSXv3trMgEt3OvhbLxcFvrb3LcGfQK6kWhqlIHZfOfNQDdMoCj%2BM9sdwAy3gZwMhOZlzpBHYFHqyuzQpUZtjf5MhONtuIAb0ximGEQo5W4ijlJf31lEVBERo0NJwrhhCWb3xGROHrfpDMqaR9Qit5Kzv52Da1xATSilchaVCh%2FLNf2QdwFKVWIEljk38kLsLcuhlaxlgEoCcTx6l9koOTeT%2BnhFAvT4tEHeFh85NO6d8sP1kD3nY006Juuu2Zq49yDXr%2F6EWULFogvlxh8YfCtVtvTqGLlN3%2Fe8BiHMGLha8TsZWIo3Q0SvFT6vLzXWPfUJlzna833FonjvGqBdkEkaZQZMG85T3H5ibg3Cs4VrmN7hAYqE1paVM5y7MJq9r74GOqUBLRDeCy%2F8s%2FnglhawXYcoCPNrE%2F1codA%2BvZL1Kk5mVF44oIu8ELRoX9sP%2Bc%2FNt6ZUSFeGKdo%2Bk4Az4nhtqk7qH%2FvoZZtLAUAHRF%2Fhp18DF%2B2qOqsqjnpupqpdnM21MAJN1wOPADcq%2FASyi9dQIAFJ4UyEFJI4g7jCEK6eur%2BtmWHXMSPHUWgvYxedg5Q%2F8a0k3qyFjl96V7PkrOroV02lZtIZGvFx&X-Amz-Signature=2babf974b60101e820ed60396c74d0046080662f07a93082baee742d92720cab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIYQOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDRcvZhP7VxeV8p6lOhKuCsXiKDN%2FrClI79Buo7ygjTTAIgOQJW%2FHbeEXqdwSVNIM0dIw5m9oVct3TU833633cSLB0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBfBEj24Y5d5AKZuwyrcA0X%2F9Jomvb%2FZ%2FFvW2BG%2F2yM%2BpDpYsdUDfvVJTSDHE8NfDrKbNP0L%2BNpdSigxVnJvfdC%2Bq5hT0vHxUVcL1QzqfQ4ZA5FbuZF88g67Lp1jXv0%2FHYdMI5e3viI4SPqnqg9jJUh4pbN7tSHqTyP2G%2B8bC1aLgug1eMIjPPMqM4KvOk%2BP%2BWwX9d3Fs5EHKiuFbPfQAc6jHBHXNisweiuQW4I9Cdg%2BotI%2FsmhbPYDUW6gbQim8ug2rEvp8IVpjD4p51GvHjVSXv3trMgEt3OvhbLxcFvrb3LcGfQK6kWhqlIHZfOfNQDdMoCj%2BM9sdwAy3gZwMhOZlzpBHYFHqyuzQpUZtjf5MhONtuIAb0ximGEQo5W4ijlJf31lEVBERo0NJwrhhCWb3xGROHrfpDMqaR9Qit5Kzv52Da1xATSilchaVCh%2FLNf2QdwFKVWIEljk38kLsLcuhlaxlgEoCcTx6l9koOTeT%2BnhFAvT4tEHeFh85NO6d8sP1kD3nY006Juuu2Zq49yDXr%2F6EWULFogvlxh8YfCtVtvTqGLlN3%2Fe8BiHMGLha8TsZWIo3Q0SvFT6vLzXWPfUJlzna833FonjvGqBdkEkaZQZMG85T3H5ibg3Cs4VrmN7hAYqE1paVM5y7MJq9r74GOqUBLRDeCy%2F8s%2FnglhawXYcoCPNrE%2F1codA%2BvZL1Kk5mVF44oIu8ELRoX9sP%2Bc%2FNt6ZUSFeGKdo%2Bk4Az4nhtqk7qH%2FvoZZtLAUAHRF%2Fhp18DF%2B2qOqsqjnpupqpdnM21MAJN1wOPADcq%2FASyi9dQIAFJ4UyEFJI4g7jCEK6eur%2BtmWHXMSPHUWgvYxedg5Q%2F8a0k3qyFjl96V7PkrOroV02lZtIZGvFx&X-Amz-Signature=be39129ebb95fa7d0fbe27a5ed92c5c7a111aff439b740c54a10bc9a3137466a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RIIJVXQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIF%2BqMNj7zueJHyLcA%2FU2J73WEgaL4y5JdU2F0NuA7eTjAiEAu41V%2FUGM4iiidXZhvYDlfr%2FJwsLwBp9WfcvtnTkO%2BEMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOtopM2CakzEDATGnircA7TDEvIFKVunEVSQiGewenv4ihFzh9kvnFXDxv2d6sim%2ByiN1V5ztqLL0TF9HDH%2FB88TBrj0purjkeWK6tYSYUZcRBYv%2FaS4oN01iLleskdMw0isRtgW%2FQbMmivKisbugcmWpOyb4V9JZnoLYKzQ9IdCqKvWO%2Bk3zMewZalmadJCFRKJvkBZNuVpKqH7QqIqLyEMIDyrr273%2FusIgIuRryeHaF4y0LXxNE2sjnzAZlypPqPLv%2BaD9jfOY%2F8mJiD%2FE%2FcxHGmP%2BdDUnCDygtxFabGGS8aEY%2BTuxGrpNNjFxmVjvddCZDJvGt2SkCUZg91n6NkoNVEkjf%2Bx3zlMr1usA%2Bems1odyu73LDKREBbLX7DUbXjkfzGr1KYEjYL8HsjYrTnBSn4hmBbBuL0eox3fz2EdpPd0aTvbpiICTD4G7uSJCGGkQMceRt1Oyb2i98tywux3pI3tOSAGI7bafQC6CtdvL60cgSWKyaa%2BkuCMqiKK0iV7Ra9nu%2F9kDGEOqtuCwkAsk3oT3H3kdmnOoSg1egoBQqkjbRds3Fg2PcG7naAVC0XvgxNhmxY2nDBv1eDzhexgwAu5WAszauFBYAZ%2BZsxAZWUiizg9Yns38rv2GzqZWpcUfb5NUCMBxTiyMKW9r74GOqUBftY6xeC35nNlS2rQ6zw0aXI0ndnR%2B6XhVznHEb9Hn2IJRxYAncmwYUclrJ5MshlOUmiqkcysjczx2xRmOsu7sZ6ODtl2jEy9P9%2FEneY4VGcQ7ZkH4QRkHt9TJ%2BV7XRKwA9x76jJOtFQ0rkDZFMGvqvC%2BtW9Edy7QiiAtYY6%2Fab8DgwUE7SGVEB5GrU1xoQUEPSeEaqhaId2YGaOc9d60DxxL%2Brt5&X-Amz-Signature=2aaee781c9f2485f28e2a0c70bad16f18cb3ae95445502b83d41fac7d224444a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYRTZ4DQ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDQKyjpO9DdyIqCBJwvwgfYaDOB0Ycqds8cUMSkVK3xZAIgOheyrUJBEQvg6kItmU0I7JGju3ukZCHUQbgs%2B%2FLfHq0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPE%2FRettNR2TabFOFircAwZEezRLvx7QxBMGkaiWYa%2BqKWugKCt5W38AUrotvd54j5UhY%2BURXPYzzPeAqlwEJu58ecO1Qg6VJQCN4IG%2BnRYg0d8fLj%2B3K1mLcKbZvakLqLJiyw%2Bk52XaO42I2uQwj0R3cWIUWQ7AA5yAHGFbyqSdbdhEzC6jbFafwiz65f4I%2BsE5CsNClLsKMrKYQ9dL4IkD4YvZj2Xsb3g2jXFI%2FX1OYl2qj57LhsXIutYsiuUpnVL2RIF2Utu%2FNfZaLin%2BRiepQE47LCDyEXsBerY%2BmI764r%2F%2BvPyp1AR%2FgcKzOwPqK7oAOZEmYmxSBButHuIynJjBpKLkLBFFHs%2BgDp%2Bn8emNJWj%2FnAb6efhnxsAWFeLVB9y5AcJWZL%2BEBFMBp%2B8cd5Vty8b1LeF8A68Gnq18R1rhic74QburDPAD1Px0NEwA5CvmsRu3arlrJgP6RJhMLRewjjtrX9Yxonn396yybZ1mc3alX1pwRf7bi0rrMsIWhWn22K8W3asDlj%2Frt2py5Gu2Zqfa6lLTphX2iA9e01zLg20Y4GOTqBXgXqK%2FS4eAbKj1tC9wuhHKu63OXR%2FjUQuhy2JTyRoBgzrzQlT9hwGkiBC3UksSF4LfkL40nfnmNRWkfEtrX18hNaGRMJW9r74GOqUBKl5%2F7MLeGfrRgiMnKrdfeI%2FnXJprApITg8tYEM%2BBaoEg7k76BeI5UoEf0iIwldVhbxzmbAaCxzruYn4ADjirLGFw9tKJlnC3Fxp3o3wc1nftDHbM5YVK4b5V%2FbG9ez17OirfM6t3hbBWQBO%2FgAcq51qYRYQSuOAVTh44P8pN0NJEeiBIb%2FawlzJhJEfydXlEvW2bYhDvN%2BvC0JEwTu7K6%2FTiazJA&X-Amz-Signature=7a328c71a7cb21539cfe9bd32186162c689bb9becf6da106441cf2072838e722&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KTIYQOH%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T070137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDRcvZhP7VxeV8p6lOhKuCsXiKDN%2FrClI79Buo7ygjTTAIgOQJW%2FHbeEXqdwSVNIM0dIw5m9oVct3TU833633cSLB0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBfBEj24Y5d5AKZuwyrcA0X%2F9Jomvb%2FZ%2FFvW2BG%2F2yM%2BpDpYsdUDfvVJTSDHE8NfDrKbNP0L%2BNpdSigxVnJvfdC%2Bq5hT0vHxUVcL1QzqfQ4ZA5FbuZF88g67Lp1jXv0%2FHYdMI5e3viI4SPqnqg9jJUh4pbN7tSHqTyP2G%2B8bC1aLgug1eMIjPPMqM4KvOk%2BP%2BWwX9d3Fs5EHKiuFbPfQAc6jHBHXNisweiuQW4I9Cdg%2BotI%2FsmhbPYDUW6gbQim8ug2rEvp8IVpjD4p51GvHjVSXv3trMgEt3OvhbLxcFvrb3LcGfQK6kWhqlIHZfOfNQDdMoCj%2BM9sdwAy3gZwMhOZlzpBHYFHqyuzQpUZtjf5MhONtuIAb0ximGEQo5W4ijlJf31lEVBERo0NJwrhhCWb3xGROHrfpDMqaR9Qit5Kzv52Da1xATSilchaVCh%2FLNf2QdwFKVWIEljk38kLsLcuhlaxlgEoCcTx6l9koOTeT%2BnhFAvT4tEHeFh85NO6d8sP1kD3nY006Juuu2Zq49yDXr%2F6EWULFogvlxh8YfCtVtvTqGLlN3%2Fe8BiHMGLha8TsZWIo3Q0SvFT6vLzXWPfUJlzna833FonjvGqBdkEkaZQZMG85T3H5ibg3Cs4VrmN7hAYqE1paVM5y7MJq9r74GOqUBLRDeCy%2F8s%2FnglhawXYcoCPNrE%2F1codA%2BvZL1Kk5mVF44oIu8ELRoX9sP%2Bc%2FNt6ZUSFeGKdo%2Bk4Az4nhtqk7qH%2FvoZZtLAUAHRF%2Fhp18DF%2B2qOqsqjnpupqpdnM21MAJN1wOPADcq%2FASyi9dQIAFJ4UyEFJI4g7jCEK6eur%2BtmWHXMSPHUWgvYxedg5Q%2F8a0k3qyFjl96V7PkrOroV02lZtIZGvFx&X-Amz-Signature=69e17dd7219c9629262d71b2a980d390e5214b074317b881d994b0d0005b2833&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
