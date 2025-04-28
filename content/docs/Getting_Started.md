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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXHVRAW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhmBTm2cjcvErPYxYrIYuoDKttQ5D9BBpHcvKzOl7alAiEAt7nOxEr%2BUFiZsSPf939m2Y%2F42CaTJ2cxhNMo4cNBHhsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEPYlWspynpkuEfoKSrcAznNF97AYKabXrpecp9F9QAU1Z251u2Mvu1Ob7ka3ZsI%2FT1yr2jKRoCbTaz%2B%2BySOwZLYbBMGMxn5%2F%2FIo3HPMJEemksduaYZhSpa6m5GYNlumWzPMR0EIWgwGg0%2FUCVvCTIWHdOOZl6ugJHFYLOZ7vzPxHdj26a%2B6GDH7jJcs4%2F90Ke2qfhOnN4%2FSFhuRBI%2Bm3l5dvcBVSN%2FIO4k%2BddJcOvihhgFbCpjwlP%2BCNm9PuCsUHGLkEwGCifWQjSOFeDccu0iZLpd2VMy8qsquK4%2BzA%2B8c07PG752E5YbbpUH53yaLOHPxvVRMqKIn9XU%2BfGneIPweDARItnegKvboMzw8urzkWBu0G%2FQtX8SOqWoLTW6OJjK2L56kI3BZODgvCs5cvDWZV7oDFaiOnQP%2BJ6ddfKexgNmOwUJPcMQszEoKTreBQxnoIopxH%2FKMqlzSuLPq9E7RONhL7oM4HUwh4%2Ff0emGbJXzRfHLxu%2FNidu%2BOOUxBiZaQLlHCQHC%2BEon1ZCDjgSzFlv%2BtyDUxNouivBgxnZKuyH4Ezwj7MmRVjqo2XKN5%2Ff5ITP6QlF4tsw8ePwxaCFrVdDXhdmrgsq5Wk41aSM3tbQJ5vP0IXMw3ygNL0g99cZnfAvwVdtmvBFc7MIOrvcAGOqUBBfUd5pk2VtneaLSKVwlsO%2FiyMvYHCme6rHQS1dwlLCrK7LoWRn0j%2BRVUWcsQdCPTC84%2BCF0ICDLCDhTEURRi8TYNOKx0wuVTh3y7CNWi1iDckoMDassXUrP5R9H2zQuAeFT8Ygapj8P6WGwaLSRpbXLT09xXIgu%2BHYHrfK5bStuC1opZnvV3tdMShmW%2FazZZFqAeUVFpZLbW0XTpF3NVxxuXTdnB&X-Amz-Signature=796b2698e0a86fc2f84494b293fb56d181ff3f5b1ad5b84c5023400a3d96e2dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXHVRAW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhmBTm2cjcvErPYxYrIYuoDKttQ5D9BBpHcvKzOl7alAiEAt7nOxEr%2BUFiZsSPf939m2Y%2F42CaTJ2cxhNMo4cNBHhsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEPYlWspynpkuEfoKSrcAznNF97AYKabXrpecp9F9QAU1Z251u2Mvu1Ob7ka3ZsI%2FT1yr2jKRoCbTaz%2B%2BySOwZLYbBMGMxn5%2F%2FIo3HPMJEemksduaYZhSpa6m5GYNlumWzPMR0EIWgwGg0%2FUCVvCTIWHdOOZl6ugJHFYLOZ7vzPxHdj26a%2B6GDH7jJcs4%2F90Ke2qfhOnN4%2FSFhuRBI%2Bm3l5dvcBVSN%2FIO4k%2BddJcOvihhgFbCpjwlP%2BCNm9PuCsUHGLkEwGCifWQjSOFeDccu0iZLpd2VMy8qsquK4%2BzA%2B8c07PG752E5YbbpUH53yaLOHPxvVRMqKIn9XU%2BfGneIPweDARItnegKvboMzw8urzkWBu0G%2FQtX8SOqWoLTW6OJjK2L56kI3BZODgvCs5cvDWZV7oDFaiOnQP%2BJ6ddfKexgNmOwUJPcMQszEoKTreBQxnoIopxH%2FKMqlzSuLPq9E7RONhL7oM4HUwh4%2Ff0emGbJXzRfHLxu%2FNidu%2BOOUxBiZaQLlHCQHC%2BEon1ZCDjgSzFlv%2BtyDUxNouivBgxnZKuyH4Ezwj7MmRVjqo2XKN5%2Ff5ITP6QlF4tsw8ePwxaCFrVdDXhdmrgsq5Wk41aSM3tbQJ5vP0IXMw3ygNL0g99cZnfAvwVdtmvBFc7MIOrvcAGOqUBBfUd5pk2VtneaLSKVwlsO%2FiyMvYHCme6rHQS1dwlLCrK7LoWRn0j%2BRVUWcsQdCPTC84%2BCF0ICDLCDhTEURRi8TYNOKx0wuVTh3y7CNWi1iDckoMDassXUrP5R9H2zQuAeFT8Ygapj8P6WGwaLSRpbXLT09xXIgu%2BHYHrfK5bStuC1opZnvV3tdMShmW%2FazZZFqAeUVFpZLbW0XTpF3NVxxuXTdnB&X-Amz-Signature=c472ba08189c08457fcfdb7bab9ad65442056a230bb1a72484909a4f76093f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQXEAM6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqroCGG1SLQPN1EgCj7Zqnmsks75%2BAXMnPxtxQ0wB%2B2AiEA4tD5lZgFXYEBB%2FLkY%2BHI43iC2kCmYgUDuDlMIRwS%2B8oq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLdLs88BKOlBlhJWJSrcA%2Bg0RbpDZEInCleY6YcovBh3QmHyLY7kO7cYoJve8sxwT44PFbH4Im8BiOwy0NhFgI598VpjpTWjd9NrZtJ1Q5OHIO2jvIOf6WQTRnDsGAL7S%2B1e0TBXuJrarRI1Mu%2FG6TCpwIKpGUmXobHztdhmN3dWPqtCRB2Hd9nS%2BvvgZ%2B%2F8rOuQn9tp1eUHOx34k3DnEttY1sJjwdvXUubRNO4q5F4KiG620%2BjY31%2FjzszffbPUmpk6fvLvF8TV7HePt1IRphlAKC4pEEv6H0cMk1tftlw6eH2YKouH%2FrSLa4mNm1YBmL49fzOO%2FBUnP%2B5mgThw%2BQGpQDgFjJUNSBNIahMPQ5W3g8wkr9VyVsZVIGyqG%2FhlzNDI%2BOfd9BE2KJGXtrDwahYpz3ZexsB%2BOoOz7lTWt5AY%2FRLu4sgtIf3YHt4jZ7Txr79%2B63j7Sx8jSH5fwHgq%2FgbqbgNmkLfS7M0tuXZ8%2BCCcEGXgZrusYg%2BfWZ%2BDcSPAOOBHZR4hr07TjZ%2FVw4Z97vD2YtlpGAmMcyYAXplt4fwmJw5y6VO%2BDGoqzIxyFx8YvON0l%2FUEMyhhPdQu55FluGmd3cOQRU5M4sWNr7pc3lwM6lFNzKTh9qh3pddwvX85dSH7ldB5Vlc38jUJMLGqvcAGOqUB6IpbEtoQ3VDzZ10lMFBrct7mMuDCw5d2UcY5F%2FIA1BIbxgLmMQrVEcXQ4R5b%2B%2FO39zGv5ItyRPycE7MbnmGHs5R5j258feNHjTmU4BaMWK%2FhWyK%2FhYD4tcx9T2Xryn8mpBjorDGwWEkJBnf1eVhH8IVGKSSkInbPL1uuTuW7Mv7tA4PlC8F98%2B87tv0NNSbELmA2wEl5U6N5C22h8xb2u1m8grrE&X-Amz-Signature=bfe1ea05ac90be7f8f81b3237338d33077d9932343ff3d06422162a3e6710985&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCA37GG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSyX7U6oiLeUaEPkcgUNYJeFgTAWf3PBZ9SiEoSY3t%2FAiA5mCDC8anmpVh%2FM9ii9adlCWI9otCd28xsyiimjKMYayr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMJPSBI6dNbcziwsh8KtwDFMTYNyMRdSPk1Z%2FrqaE9QK71B74sh5PiCnGXYqO5%2BQGlo9AXfy5F1VW1CPh5Gvln5oI12qn%2Fl9Vk5BWQ%2B%2BHX%2FFNZF%2FNByNjnu2Wkpb3kcRxFO870nqzn%2B%2BiXulCTwGElNktqzt%2F14rA6BI35mb%2F3%2FQZjBLnNHAPuidJVjAGaeI3hFO76Uq4nSLv6cpyf5RkBSir7tJcEZAn0EsPsYP%2BJAh9KnPrC1LJ2uV%2F5V4NXU4nsMzangWqOL3eeoonVq8oz7p7Eg0Cu%2BFqEPcx5V6JyHBnBapyw0s6Yq22nOXmtYs9K1Vx1TQpOIezgSAmwj7otIVEF1tp9vdMhumItUCTZNFqqnkvWvRpWMo3fe%2FPCBCho8yNEKDkwkDK2sBbHgmexgn4sYj2T%2FT9g71TNt4eejVjhyR6CfulKhzfpzrtRckJGftpmKQaE7sgI7hMkSdAmhRgPe5Uv47UvQaV9FyrG63IO4NI7kqTFteO76d65rr%2FWL0g%2FYunMe%2B1Fpw5vkeTum%2FP2wb9Q10OIy4RtwjExhXqGJ97pRn2YDTRaLTyMb6tEEPfaFn%2FTPc7beEReErvfxyJI%2FUdFAbTXKT6NR1U2PZ5sqUX9FY%2FUZwBobGKIIiJJ8WgpkjspDKHlWMAwxaq9wAY6pgGiF%2BErE0aQmB%2B0LxIvFDnT4PFoRsP1UDFePdGBUTfqu25nbPl07FpDgzqH8CmH27ifApXYu25c%2FBrGz2Ae6RogDOzMknioir7nqy3EuXGkfJtOClJRWwt1%2B866jOFPZq04k0wosZMs3jSphikQt%2FUBGywqo%2BeiLmVWwrn8xdEpC0MQerm4NyKy08b1CboMS9WbuLVb0Lhe42UF0GVyRrwstOmIqdx%2F&X-Amz-Signature=db6fe9a64b5a455abc9e181a8c4c156e29a12e0c4258f38d45b65ac93f4cff32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXHVRAW%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhmBTm2cjcvErPYxYrIYuoDKttQ5D9BBpHcvKzOl7alAiEAt7nOxEr%2BUFiZsSPf939m2Y%2F42CaTJ2cxhNMo4cNBHhsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEPYlWspynpkuEfoKSrcAznNF97AYKabXrpecp9F9QAU1Z251u2Mvu1Ob7ka3ZsI%2FT1yr2jKRoCbTaz%2B%2BySOwZLYbBMGMxn5%2F%2FIo3HPMJEemksduaYZhSpa6m5GYNlumWzPMR0EIWgwGg0%2FUCVvCTIWHdOOZl6ugJHFYLOZ7vzPxHdj26a%2B6GDH7jJcs4%2F90Ke2qfhOnN4%2FSFhuRBI%2Bm3l5dvcBVSN%2FIO4k%2BddJcOvihhgFbCpjwlP%2BCNm9PuCsUHGLkEwGCifWQjSOFeDccu0iZLpd2VMy8qsquK4%2BzA%2B8c07PG752E5YbbpUH53yaLOHPxvVRMqKIn9XU%2BfGneIPweDARItnegKvboMzw8urzkWBu0G%2FQtX8SOqWoLTW6OJjK2L56kI3BZODgvCs5cvDWZV7oDFaiOnQP%2BJ6ddfKexgNmOwUJPcMQszEoKTreBQxnoIopxH%2FKMqlzSuLPq9E7RONhL7oM4HUwh4%2Ff0emGbJXzRfHLxu%2FNidu%2BOOUxBiZaQLlHCQHC%2BEon1ZCDjgSzFlv%2BtyDUxNouivBgxnZKuyH4Ezwj7MmRVjqo2XKN5%2Ff5ITP6QlF4tsw8ePwxaCFrVdDXhdmrgsq5Wk41aSM3tbQJ5vP0IXMw3ygNL0g99cZnfAvwVdtmvBFc7MIOrvcAGOqUBBfUd5pk2VtneaLSKVwlsO%2FiyMvYHCme6rHQS1dwlLCrK7LoWRn0j%2BRVUWcsQdCPTC84%2BCF0ICDLCDhTEURRi8TYNOKx0wuVTh3y7CNWi1iDckoMDassXUrP5R9H2zQuAeFT8Ygapj8P6WGwaLSRpbXLT09xXIgu%2BHYHrfK5bStuC1opZnvV3tdMShmW%2FazZZFqAeUVFpZLbW0XTpF3NVxxuXTdnB&X-Amz-Signature=3beb737fde3724bf14cbb57410672ca68196859e99591dec4f2d8dcaf2b4626b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
