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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQUFTGB%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD92lu2hhbgX%2Bc31dnTBLHpyT1i2PN1Pa0AAz%2BULEjz1AIgeQt8hRiZpBA2udTgm8M0fqyc7AOA7%2BWO5rd1qLfGCbgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPxnJHBKJg4U606D2SrcA95K8pO7BfqVb6XSmG9lwjMlMGSxZTErLK6ad1M4hFLroTiGc3ZoLr0xX5Kusfv5KLVAbk5P3U6woBm1BedZBwc5o305pBT2F%2FlaHCVcNRGwgRlGPJCcJ0gqPMtkGz9zkKFndYJzYLoW4vYbRcJOHfUNetvjCAuIbaA2r9dEHv6gCuGnXX%2BKVsG5byk9XBzyehRXy1XgxokR%2BilFVrEixtVdLt%2BvI6uu7ovxpaJYczT7ealy9%2B93kvtXbNQF6B4%2FgcZM2aol%2F2GT8pRBKZOt%2BtFOqXcKYbIE9svmTGBo8KsRBiTmChnR8btSlCn%2BfEVe2EpolZio2ssWURQbLoHAddGVqXmm%2FKe5OvXpew0yTmCqWJihsJmq2QLR8w%2FMkQzbvUIhpsBrUQcKRm6V5pam3jqRbfkKLcX2aDhJQiLZLY7E76WkLH1uBomMDhi%2FH5KjWC%2B2UwhR7ivY9u%2FI51zxaCOOPOzYLg%2BaWFtcm6KNSIeQyaugPALUWel%2F6XZhsuiCknO265AVEWf9qodSNeOrNcVcIyZYxgYqWUcI2yf9AqFxQ7G5NRYKxUD6Td%2FCasykJsHSc%2FlBNOXQzTYGGkNSJwBTRvASXUY7FIfC43SGOGUfX4zybwImKSbCcdNLMLiV5bwGOqUBviCP4cOkDru4ly0Ng0TfoNACN4FWxQ0NjMPpt0uOXebYEIGBDoClxv845xY82roP15FEhEaQJgLEqNms9snp1P3xg1EJuKNt9CSpLS0TFiMlPauf4hcifvjqahYsTs48WI%2FcYBdkgcMj%2Fodk%2FLjlZJ%2BHIfJ4l2CCOja8S31uonAvZMs6lhXnqWZUc97YSrjwFitxJ1wLfYXEC8bOHtHaf9lIU%2FWO&X-Amz-Signature=5055790b4c906e4afa3783633a4ddc0f7607fa005569b046fbe48afe3d815f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQUFTGB%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD92lu2hhbgX%2Bc31dnTBLHpyT1i2PN1Pa0AAz%2BULEjz1AIgeQt8hRiZpBA2udTgm8M0fqyc7AOA7%2BWO5rd1qLfGCbgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPxnJHBKJg4U606D2SrcA95K8pO7BfqVb6XSmG9lwjMlMGSxZTErLK6ad1M4hFLroTiGc3ZoLr0xX5Kusfv5KLVAbk5P3U6woBm1BedZBwc5o305pBT2F%2FlaHCVcNRGwgRlGPJCcJ0gqPMtkGz9zkKFndYJzYLoW4vYbRcJOHfUNetvjCAuIbaA2r9dEHv6gCuGnXX%2BKVsG5byk9XBzyehRXy1XgxokR%2BilFVrEixtVdLt%2BvI6uu7ovxpaJYczT7ealy9%2B93kvtXbNQF6B4%2FgcZM2aol%2F2GT8pRBKZOt%2BtFOqXcKYbIE9svmTGBo8KsRBiTmChnR8btSlCn%2BfEVe2EpolZio2ssWURQbLoHAddGVqXmm%2FKe5OvXpew0yTmCqWJihsJmq2QLR8w%2FMkQzbvUIhpsBrUQcKRm6V5pam3jqRbfkKLcX2aDhJQiLZLY7E76WkLH1uBomMDhi%2FH5KjWC%2B2UwhR7ivY9u%2FI51zxaCOOPOzYLg%2BaWFtcm6KNSIeQyaugPALUWel%2F6XZhsuiCknO265AVEWf9qodSNeOrNcVcIyZYxgYqWUcI2yf9AqFxQ7G5NRYKxUD6Td%2FCasykJsHSc%2FlBNOXQzTYGGkNSJwBTRvASXUY7FIfC43SGOGUfX4zybwImKSbCcdNLMLiV5bwGOqUBviCP4cOkDru4ly0Ng0TfoNACN4FWxQ0NjMPpt0uOXebYEIGBDoClxv845xY82roP15FEhEaQJgLEqNms9snp1P3xg1EJuKNt9CSpLS0TFiMlPauf4hcifvjqahYsTs48WI%2FcYBdkgcMj%2Fodk%2FLjlZJ%2BHIfJ4l2CCOja8S31uonAvZMs6lhXnqWZUc97YSrjwFitxJ1wLfYXEC8bOHtHaf9lIU%2FWO&X-Amz-Signature=16e6f53dbe1f84f85d996c311caadfc272da5615c61d68442317ecea3f1d9aba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EELBFHX%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCGQUEJONCXTRuOxQA97rHHAYp5Gl1k7pocDAZbU49z5QIhAKOj1%2FUx9Ry%2Fy5As59FLgE2iVFUqvE7YAurNp32CAt%2B4Kv8DCH8QABoMNjM3NDIzMTgzODA1Igy0349vx7%2FwB6UJDwAq3AMUY%2B99jgSLq8Tb3UcaE0ud1j1Xm%2Fz4wZAUdzxigIR7MoaLqfdpJEMUwh2CjIkUprvfzaqMgiq98eQi9wBRyGmgtu%2F%2BAv7ELpTFYlXCslQz81hHSuAHGdT6tcoXtQ%2BkT9ElCvR098m9boOOTLj0uOJNrfGJdep3XjXx6f6eLkndJbOf4edeDt4dAxBXpMkx%2Bw1VM1nLPCUdrnTIiZ9YaDXdNbA13I0%2FymAi2CeTEQjGWPhZ8XE%2FCqEyZk%2BeoNfzsks33Jy4pRScssGJ5sxGssxcmul5PD9eafhp8etTVakfNFaT7tDkL33wrQ74Uvtb7oxUv28RHUPC4xI5T8cXFzi4sDLYN7HpKDPtXVxd2hMrsHExme2wsi3I9J8yDIHV9t0mzyWjE548BXW2vmTLztX%2BoWSuj05yWr39dgKGlnsCdBcJWByE8BIHiKuZq7YY4sMa0VAgCqS1mfacF8B4Ks0Fi%2Fr1yODpLtEc%2F2pVVb4yve2OVGa4hXLnLduQgGCvgP8PxTTA2I3CH3EIEm2zRJjm%2BVoP0UlHxS7ENc7Du%2FdN7GrvMtD89bU7FL5u33v3g01qGaTtydkH1wn%2FkZnoeb%2FxgeVI%2Br15LvbmWmHDHEw8et6agi2VKHmWGt1wGzDeleW8BjqkAQ5ff4CIw3jo%2BA%2FdwJ63HrWaKb7DFR9iSSrKdq7yM6ROuf8FeND8FzzxVJSn5om1SSW1PGzEbfATCkLqH02cM%2B0boMwTGNTQoYTdM23wcdeFKUZGr6YlQh%2FokQjjlefuvTqz2MpSgmqEh0dCl1UPZwqJo5HDHzLiC3c%2F0m2ZUHjCJxUVai8IWt%2FcjkRjx18IU4lyyR2jRj3TXjrRUrsD814%2F%2FYU9&X-Amz-Signature=47a9127a970b1c6d3b27101a5c7cbabdd5fce2b0f0f006d937cffc9b585d64e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNSZYYP%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCsmVKlq7T9V5SQXGw6X%2FYYbONrXZNYW0S0jPBFLykU1gIhAPc2P8Y8W8Pm%2BrVp3wNDdMlz1deaNUCbomjFrhO5KI8PKv8DCH8QABoMNjM3NDIzMTgzODA1Igx3BY0puE1D6QJtEN8q3AM3%2FCX7coNmxzcGX7zLLgXG8yz3VA8hFdLoYElmje84QTEvo6KoXVn8Ndacc290sLO2y2HgggVPAX2mqwFFlXFOabSnz4HgBZP64FqJBMVguWWewuMWvJDZ%2F0qtaDFLmeJoWRN696KYa3L98B9D5TOk9lAE0T37xvMrxfLf8amj9oQ2cRCC75%2BHbtzquJ1MV8ZDFJ4UDaWYT75hSJQ6nExcp%2BvJYG6iW1CD%2Fj1EoaJtZvwyJvTzcLPdwlb0dEuRN7sse7looWyZCud3Yf3KrZRBddzyZHCfNlFbWSUaxEhkDcwPtaCgJ9MQRjV3h21sU%2Fvi%2BPteHM3wwRCJfnp5JcO7DZrlMOewoOa86nk0H4GbRJnLpRD6qC88aBdmLiYMlGNW1rP50mE%2BEevpsqC7GVxW2R08Wo1TrnxkBqYrXZtn65ZEmESDMMLM9p0iG1r6as0kQKv%2FHO0b6Flw9pfuEOosRt%2Ft7j7tSi8rZwNNLB17iqcmpqpFwWJ50sgyI%2F5Cg9zGgTr52f8tCwtfquM8EGCLaUtNX%2FYvvEudkizY2qHJNBSqHGyUg60qqEjBgfXojGEQrGdI%2BoP9IR8jztBKXF3Q2ifAVWjNxelHHex6wgAwbruuNuEpu7nwJg2IaDDAleW8BjqkAcQ4%2BvNwD9hh7YVx84N9mUyiCIBIFyWIwz0yY8RUv%2FLtNQv%2BnT3NqtzH2CWyke22egKsc8sQT06ypu2A%2FVY%2F7aE5feTJJqP%2F8u81rtGSvH1YvQQcEtUdPq98MrnYPTcrL3QEh46BrX6gfgYG3nAifQR7pUVBGxnjmZrJCB5Ca7ZCSdQRHtS6ysVykGw0DClDm%2Bvk7qzYxvqmrM1M1%2BizKgaGJj%2Br&X-Amz-Signature=5f7717113e942cf49be87b146c1b22554080353b9a47d27da2a6137fcf6b600e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQUFTGB%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T220642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD92lu2hhbgX%2Bc31dnTBLHpyT1i2PN1Pa0AAz%2BULEjz1AIgeQt8hRiZpBA2udTgm8M0fqyc7AOA7%2BWO5rd1qLfGCbgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPxnJHBKJg4U606D2SrcA95K8pO7BfqVb6XSmG9lwjMlMGSxZTErLK6ad1M4hFLroTiGc3ZoLr0xX5Kusfv5KLVAbk5P3U6woBm1BedZBwc5o305pBT2F%2FlaHCVcNRGwgRlGPJCcJ0gqPMtkGz9zkKFndYJzYLoW4vYbRcJOHfUNetvjCAuIbaA2r9dEHv6gCuGnXX%2BKVsG5byk9XBzyehRXy1XgxokR%2BilFVrEixtVdLt%2BvI6uu7ovxpaJYczT7ealy9%2B93kvtXbNQF6B4%2FgcZM2aol%2F2GT8pRBKZOt%2BtFOqXcKYbIE9svmTGBo8KsRBiTmChnR8btSlCn%2BfEVe2EpolZio2ssWURQbLoHAddGVqXmm%2FKe5OvXpew0yTmCqWJihsJmq2QLR8w%2FMkQzbvUIhpsBrUQcKRm6V5pam3jqRbfkKLcX2aDhJQiLZLY7E76WkLH1uBomMDhi%2FH5KjWC%2B2UwhR7ivY9u%2FI51zxaCOOPOzYLg%2BaWFtcm6KNSIeQyaugPALUWel%2F6XZhsuiCknO265AVEWf9qodSNeOrNcVcIyZYxgYqWUcI2yf9AqFxQ7G5NRYKxUD6Td%2FCasykJsHSc%2FlBNOXQzTYGGkNSJwBTRvASXUY7FIfC43SGOGUfX4zybwImKSbCcdNLMLiV5bwGOqUBviCP4cOkDru4ly0Ng0TfoNACN4FWxQ0NjMPpt0uOXebYEIGBDoClxv845xY82roP15FEhEaQJgLEqNms9snp1P3xg1EJuKNt9CSpLS0TFiMlPauf4hcifvjqahYsTs48WI%2FcYBdkgcMj%2Fodk%2FLjlZJ%2BHIfJ4l2CCOja8S31uonAvZMs6lhXnqWZUc97YSrjwFitxJ1wLfYXEC8bOHtHaf9lIU%2FWO&X-Amz-Signature=35a18ea7dba964d15dac06a3c49e99867daaa2ddc3150e7ec65931bbd09ef0e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
