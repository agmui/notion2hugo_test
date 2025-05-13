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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5EEQRC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIALM6eoGCHg6YJ40xDf8nRO2No8w9%2BFZWIr7UV%2BxUES2AiEAlBNOjwsH5keb%2BOVTeQKKwDl6n%2BkVt3rneA%2FaESD3%2B9AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7Mx4sP9tpDAXRhUircA3On53kxO%2F4%2BEN0J%2FTzEVTIiXEE7VE0EIjxvYCP7PoC0GcfZmWRp5yJq6yIuvW5ceXooDDRQXaLJJxchhUG8CyciAubUQESFZYYyrvO8sWg%2BAXHJQUKMPPW%2FXGcuLDkr8h9Q41lgsP7b4BLdcdbzbBZ%2F5nM4e0ElzYQFcOlcQw1DUwTmwR6s%2FkaOJ%2FZHg%2B4vw5L0MOgKMLpt01glI9FzjVOts1GUtzzUBYj8sRyvNjVrUIGbDqYwJt2tovW4Nx1j9YY9Do0XbqhhRsYSr1wtzF1cpPjFmySBdA65TCOB45E9INCD08IW8OlgPWbGzxPdKbBe3ZImJa%2Fa7e%2BqlhqzEhszp%2BcRQkk0vHhD9tA%2FSvRGUt1Jds6jbNxOo4B5x318V%2FffbN6iW4%2FkUR79NBWr65TCUDw6ebUi%2FYxWWtMVQyoFuu4NVlGcXiBvdj4R2HBCzEjHIH9yeli8x5dyOqnsnKYLjpgMNaerfVhSqH2C35iTa9wSZ8%2F6atqXdWwuXXDdRa7PLSQWIqFwnpoK6JePIQBVbGCO3rgE8EhloV2kvfsfs5%2FCiRLCvJWDum9nMTcdqipjx0yrJwPCusFYOuXnKhBxrH4KKU2RYPaTw5TkmF7SJSHRknCRuIjRDq7SMIKOj8EGOqUBSSJEIiDo%2BzO0tjS8Du9wl%2Fu3jmRotcEoF0TqqlIUEhObElQh4U0joudoBt%2FUQmvQEl%2FUbouzhlOFSLVH4Tx5rTs2vBFlgmxaghgFKSc3OWQYAwgNH6%2F069MTJ60wJ5hd1ioJDiQ3drD9xAB3bYvJaVpD3Z5IWnFCJ0FQXSpqMwav%2FEDuvhd52c619AkmABgAgp4WlqYE1NipsZmUtd%2Bn1FsoQc%2B6&X-Amz-Signature=b60297eb402ca3929d13131729b5ecbf0757cb7661f1356500f4ef5dc0773484&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5EEQRC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIALM6eoGCHg6YJ40xDf8nRO2No8w9%2BFZWIr7UV%2BxUES2AiEAlBNOjwsH5keb%2BOVTeQKKwDl6n%2BkVt3rneA%2FaESD3%2B9AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7Mx4sP9tpDAXRhUircA3On53kxO%2F4%2BEN0J%2FTzEVTIiXEE7VE0EIjxvYCP7PoC0GcfZmWRp5yJq6yIuvW5ceXooDDRQXaLJJxchhUG8CyciAubUQESFZYYyrvO8sWg%2BAXHJQUKMPPW%2FXGcuLDkr8h9Q41lgsP7b4BLdcdbzbBZ%2F5nM4e0ElzYQFcOlcQw1DUwTmwR6s%2FkaOJ%2FZHg%2B4vw5L0MOgKMLpt01glI9FzjVOts1GUtzzUBYj8sRyvNjVrUIGbDqYwJt2tovW4Nx1j9YY9Do0XbqhhRsYSr1wtzF1cpPjFmySBdA65TCOB45E9INCD08IW8OlgPWbGzxPdKbBe3ZImJa%2Fa7e%2BqlhqzEhszp%2BcRQkk0vHhD9tA%2FSvRGUt1Jds6jbNxOo4B5x318V%2FffbN6iW4%2FkUR79NBWr65TCUDw6ebUi%2FYxWWtMVQyoFuu4NVlGcXiBvdj4R2HBCzEjHIH9yeli8x5dyOqnsnKYLjpgMNaerfVhSqH2C35iTa9wSZ8%2F6atqXdWwuXXDdRa7PLSQWIqFwnpoK6JePIQBVbGCO3rgE8EhloV2kvfsfs5%2FCiRLCvJWDum9nMTcdqipjx0yrJwPCusFYOuXnKhBxrH4KKU2RYPaTw5TkmF7SJSHRknCRuIjRDq7SMIKOj8EGOqUBSSJEIiDo%2BzO0tjS8Du9wl%2Fu3jmRotcEoF0TqqlIUEhObElQh4U0joudoBt%2FUQmvQEl%2FUbouzhlOFSLVH4Tx5rTs2vBFlgmxaghgFKSc3OWQYAwgNH6%2F069MTJ60wJ5hd1ioJDiQ3drD9xAB3bYvJaVpD3Z5IWnFCJ0FQXSpqMwav%2FEDuvhd52c619AkmABgAgp4WlqYE1NipsZmUtd%2Bn1FsoQc%2B6&X-Amz-Signature=40a587103f681c3c63032856d74ab99ad4e6e1133612dff2b66f8ae53055eedb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5EEQRC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIALM6eoGCHg6YJ40xDf8nRO2No8w9%2BFZWIr7UV%2BxUES2AiEAlBNOjwsH5keb%2BOVTeQKKwDl6n%2BkVt3rneA%2FaESD3%2B9AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7Mx4sP9tpDAXRhUircA3On53kxO%2F4%2BEN0J%2FTzEVTIiXEE7VE0EIjxvYCP7PoC0GcfZmWRp5yJq6yIuvW5ceXooDDRQXaLJJxchhUG8CyciAubUQESFZYYyrvO8sWg%2BAXHJQUKMPPW%2FXGcuLDkr8h9Q41lgsP7b4BLdcdbzbBZ%2F5nM4e0ElzYQFcOlcQw1DUwTmwR6s%2FkaOJ%2FZHg%2B4vw5L0MOgKMLpt01glI9FzjVOts1GUtzzUBYj8sRyvNjVrUIGbDqYwJt2tovW4Nx1j9YY9Do0XbqhhRsYSr1wtzF1cpPjFmySBdA65TCOB45E9INCD08IW8OlgPWbGzxPdKbBe3ZImJa%2Fa7e%2BqlhqzEhszp%2BcRQkk0vHhD9tA%2FSvRGUt1Jds6jbNxOo4B5x318V%2FffbN6iW4%2FkUR79NBWr65TCUDw6ebUi%2FYxWWtMVQyoFuu4NVlGcXiBvdj4R2HBCzEjHIH9yeli8x5dyOqnsnKYLjpgMNaerfVhSqH2C35iTa9wSZ8%2F6atqXdWwuXXDdRa7PLSQWIqFwnpoK6JePIQBVbGCO3rgE8EhloV2kvfsfs5%2FCiRLCvJWDum9nMTcdqipjx0yrJwPCusFYOuXnKhBxrH4KKU2RYPaTw5TkmF7SJSHRknCRuIjRDq7SMIKOj8EGOqUBSSJEIiDo%2BzO0tjS8Du9wl%2Fu3jmRotcEoF0TqqlIUEhObElQh4U0joudoBt%2FUQmvQEl%2FUbouzhlOFSLVH4Tx5rTs2vBFlgmxaghgFKSc3OWQYAwgNH6%2F069MTJ60wJ5hd1ioJDiQ3drD9xAB3bYvJaVpD3Z5IWnFCJ0FQXSpqMwav%2FEDuvhd52c619AkmABgAgp4WlqYE1NipsZmUtd%2Bn1FsoQc%2B6&X-Amz-Signature=f18453595e9f40693498e693cbd62d07db2c30ea81aad3aac3fa553d088771c4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTP5VZGT%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIFdfb2ykYpY9wLsb7XttmGOnYu5PJtmCoFB4GbZKIh0OAiAOkIf%2FPz50MlD280IOy1oqoJkHstXnqiopxAt5xOKVGiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkkqGrB4aVDq6GLj1KtwDZNQL29GW8dspYqT27j3ZccP9nQE5hJfpMjJiAXHhIqRZzGewzJjfsawupjIvxCBpniLchE%2FdvVot99wbYnIKsuzH%2FCUKlM2nYH1i5Sysc47%2BztHqQF9tCn5muiMCydI3DJ%2FqeaGker7KjDby0GX5%2Bp7JBCG41JnnBLYB8OEhYAKfEN31WEajKCx7X1aOPqsvCxF%2FSMzbGnPi6gSb0Qu48TpjZYk3dZXSzKbjysg73rpxzNTm5CREGuzZLa1v%2Bicg0Ta6ZHlk18TGRihyXcg6swz7ZzNUSH0bQ%2FtsqCIyjdt84BXPC2zA0FsZUcvrdS1E3tufZbZsCLvcejQF82DnDtOqqmncUv7MT8me22pDGdnSehebnvSufTHloSQpffvqg6doQEcEpaPY4HPzaBg3cwjR5APQk6zLIEjVGzY%2F8oIIsJpMoetUCiBkMkD1CQlfyG1vilAYS3zutJqV4iPYEYQBhwue3QPIzpSqQTxo51dUko1%2FIzNfT%2ByClJIvakvsNt0hwN%2F8cajmlsm1jbrWP6UPJFULJ%2FyfeQfE579kxSXVlEpqGV%2Bxk%2Ff9W3WpZSbaXJ0eAJxQHRjCg4MOO2b0z0wD6NqNbXZucuDkupX%2F8cL8tMqjfhEwsy00aUYw7Y2PwQY6pgGRhUQ8ZqdVy4HpKo8aEtIUhMVlwyjB6wKLWBneeGEPnI%2FfHmnjXUgdnDU%2B1s6jgcQ9Av4%2BKBl58pF%2Fk1mBsixP83%2BmWglhmv%2Fuz8zjzUVf371qc0bdCj%2FF%2FXSdjn2kYR2krVUwrVR0RWHX1p4bkx9%2B1GDpcsIutNNo%2F1ECr2Qve0hdlcvR7XBsmVuHmT5sTrSq8dcTcn%2B89xLGUlCrL3juzdWH18QK&X-Amz-Signature=da9e23b6ea7128a361952039423949d33137214b8a46fa0d3e1523978d887e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6R7S7XL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICMFQldOPnLq6STW4sda%2BjmWFDhB1WFzcds%2BdMhUqrq0AiEA0ddn5LeoBMiwTg2GaTDmDZKKPFDUpy7TugeYLCsjBMQqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvCr3bMA7qeg4eLPCrcA2cMWEn4bYzVbQucMqeGY6SlJR50my4Hg1j4wKt1oYnIjKyuJ2i4%2FMGz5RclCRdXONVq4ivuFRelqU5zpNmKMFg5gSu9J3XB1muv%2FSYlLi2aiqABS60cICT43uI9QvU5fbAhsf66FQA4vmrP3I8iDkvRD1IRs30DHy6iORXJng7s8g4ZNS6VSAyUxE8HCFZvhKi1Tksi2H6azm4CKKDS1uWn7vPtCr%2FvKGmPkPMqrIxgzckPBR58hE1abxLaNNUEcLCMOGjRxkPY5BnbjIxL4KN7lNBwsv23QXAPJNpjpcFdDONUHs3xxDwO%2FH%2FUA4Aa6bTYbimJfvC51eVoup4MdulJdfuBBCaKxdXbMWCjfEzso0ql1YzylhCpu3hc8SFKhE2u%2BTux7OfYKPA612gecq7I%2BW6oMBk%2BYgeWQwFoTh%2Fq7CpdUvVmihkZ9e93gjWYDAZDYJDYPJZNr61V8%2FpCBhj0EsblFI6%2FxZZVTPK%2FfdEBdkP8HYdQsSvqaDzuRxeVekF0BBpsGfdNFYWLKwlm0YNk0nAB5FngITf%2FBBjQ484ktGlogv84VorVOR5BuA1iEZ6nX8mitb2RjEY4NCxd2UpAgpyN7PkMAwZwDGcndadbQ7tYEdY8qucG3wX7MOKaj8EGOqUBUvj8s20jpV%2F%2BHD2clM1jFoJez2H3vjg6r9OHYgvWuwY5OBl1WzywlhVCXiNxg1ILQz3%2FWyiPymKNupm46%2FJaQCcSa%2BdzV2aNs0EemqKJQX74ugRZ9Jp3leUz4oI3ihdQz%2F5N%2BiRwBvDbL2%2FwgZb1503VNCC4gUQRdAPHaf1HiqCcHPF1bEb43WJL0bPix2p7X59f3LKbiXskuEmm%2BoIp1GlzWaz5&X-Amz-Signature=40791e734551df31aef33e61d82207c4edea79fd29cebfc5360d82b0a9261233&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G5EEQRC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIALM6eoGCHg6YJ40xDf8nRO2No8w9%2BFZWIr7UV%2BxUES2AiEAlBNOjwsH5keb%2BOVTeQKKwDl6n%2BkVt3rneA%2FaESD3%2B9AqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7Mx4sP9tpDAXRhUircA3On53kxO%2F4%2BEN0J%2FTzEVTIiXEE7VE0EIjxvYCP7PoC0GcfZmWRp5yJq6yIuvW5ceXooDDRQXaLJJxchhUG8CyciAubUQESFZYYyrvO8sWg%2BAXHJQUKMPPW%2FXGcuLDkr8h9Q41lgsP7b4BLdcdbzbBZ%2F5nM4e0ElzYQFcOlcQw1DUwTmwR6s%2FkaOJ%2FZHg%2B4vw5L0MOgKMLpt01glI9FzjVOts1GUtzzUBYj8sRyvNjVrUIGbDqYwJt2tovW4Nx1j9YY9Do0XbqhhRsYSr1wtzF1cpPjFmySBdA65TCOB45E9INCD08IW8OlgPWbGzxPdKbBe3ZImJa%2Fa7e%2BqlhqzEhszp%2BcRQkk0vHhD9tA%2FSvRGUt1Jds6jbNxOo4B5x318V%2FffbN6iW4%2FkUR79NBWr65TCUDw6ebUi%2FYxWWtMVQyoFuu4NVlGcXiBvdj4R2HBCzEjHIH9yeli8x5dyOqnsnKYLjpgMNaerfVhSqH2C35iTa9wSZ8%2F6atqXdWwuXXDdRa7PLSQWIqFwnpoK6JePIQBVbGCO3rgE8EhloV2kvfsfs5%2FCiRLCvJWDum9nMTcdqipjx0yrJwPCusFYOuXnKhBxrH4KKU2RYPaTw5TkmF7SJSHRknCRuIjRDq7SMIKOj8EGOqUBSSJEIiDo%2BzO0tjS8Du9wl%2Fu3jmRotcEoF0TqqlIUEhObElQh4U0joudoBt%2FUQmvQEl%2FUbouzhlOFSLVH4Tx5rTs2vBFlgmxaghgFKSc3OWQYAwgNH6%2F069MTJ60wJ5hd1ioJDiQ3drD9xAB3bYvJaVpD3Z5IWnFCJ0FQXSpqMwav%2FEDuvhd52c619AkmABgAgp4WlqYE1NipsZmUtd%2Bn1FsoQc%2B6&X-Amz-Signature=ebc6340ee1efbd297447877effdb2c3aa160a2abe436ae32a03c8069555a6317&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
