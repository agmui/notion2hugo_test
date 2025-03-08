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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3X4S7Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH35j6NUFEOW8Oeqh7ksEsAIoelmYuhW0MsjTqM42OgsAiEAzJobtzol%2BP1LGOqPSxbNAeJmVoazRx0owF1GSk8AjKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAtjeheXyu%2B1c969lyrcAxEqaNJ0DpgaS9xPSynPK6CdrlC0nPS5aCSy2QDlN83P95TXrizuCXqeVBmuUPXx6Fh2Ewdo7b1SfSh95lbZfmBjXjMr8yFBBy4z%2FeCJiaClCzKKzAwlzcwLXvuR5qkEAhGiZeUtth0d7p%2FvzC6o9hoAmZWD4EZ%2FMLWpR6hklEwZxeffdvMvgmaSjQgWgMj7cs8AV2DmlVvFla6v09c6SZk7p0nxsAR5GQxwfoLKr6d1uVXOpByZeh%2Fti4m4T4tiegJJqOAp7FSgDhGAwqiQV5ZFB%2FOGHS1YVk4WoEGwEUT1YKzh4S5ga8%2FFGV3cGcT3bjLjZ43lwrPHmL%2Ba5HnaL%2FUY4mfmRYGhkyZEXAA0ISfhgBgHo63vxo1va7A6MME6fIg%2ByUHISXarEtp0ezG%2FxuB%2BjULNFdDH4Q2BesxKABywBYWALdF117A0XyB23LJ9N0AF7N8L7UygjtFrpK59Ke1mM3%2B1tz5XEUiXVFGqDLrXSc75UMi2KQi%2BrisM3jyaEDpsKY%2BojHtO6tl26lQxoRMGuI6Gz1KpsX7CaIvXtkKX6Jrx8lCFxeot5LogVQ8SdRSYX9XUYTneR0o%2FA8NB7W1z4lVoB2wO%2BOSS0D66bVBT0G9SADbP3FQUI4fxMLSCsr4GOqUB26LJqzbigj9zTdiXrfdq5dMqiGnhPrw3%2Bta6qZr5WdJlySx5%2B75%2FYXEbHlok0W3KOdo0CplCxTrlY1l7wMxwv%2BbuzUvPZnIMkqS5je4A%2Bu5E%2B8eB1KSijam5yf6DdhZhYAHbbtHgvHBHe9huox6gHAexU2OHn2slISr3k%2FDeX%2F66DdgDKkkwcb856EsMk0IWyDZCVfVOWQHG4%2B7yyqtbvOjvuEdW&X-Amz-Signature=a26c740308f2ada0d156922b52ff91a2d0a5fd27edc5b375b1d29dba21bb7a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3X4S7Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH35j6NUFEOW8Oeqh7ksEsAIoelmYuhW0MsjTqM42OgsAiEAzJobtzol%2BP1LGOqPSxbNAeJmVoazRx0owF1GSk8AjKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAtjeheXyu%2B1c969lyrcAxEqaNJ0DpgaS9xPSynPK6CdrlC0nPS5aCSy2QDlN83P95TXrizuCXqeVBmuUPXx6Fh2Ewdo7b1SfSh95lbZfmBjXjMr8yFBBy4z%2FeCJiaClCzKKzAwlzcwLXvuR5qkEAhGiZeUtth0d7p%2FvzC6o9hoAmZWD4EZ%2FMLWpR6hklEwZxeffdvMvgmaSjQgWgMj7cs8AV2DmlVvFla6v09c6SZk7p0nxsAR5GQxwfoLKr6d1uVXOpByZeh%2Fti4m4T4tiegJJqOAp7FSgDhGAwqiQV5ZFB%2FOGHS1YVk4WoEGwEUT1YKzh4S5ga8%2FFGV3cGcT3bjLjZ43lwrPHmL%2Ba5HnaL%2FUY4mfmRYGhkyZEXAA0ISfhgBgHo63vxo1va7A6MME6fIg%2ByUHISXarEtp0ezG%2FxuB%2BjULNFdDH4Q2BesxKABywBYWALdF117A0XyB23LJ9N0AF7N8L7UygjtFrpK59Ke1mM3%2B1tz5XEUiXVFGqDLrXSc75UMi2KQi%2BrisM3jyaEDpsKY%2BojHtO6tl26lQxoRMGuI6Gz1KpsX7CaIvXtkKX6Jrx8lCFxeot5LogVQ8SdRSYX9XUYTneR0o%2FA8NB7W1z4lVoB2wO%2BOSS0D66bVBT0G9SADbP3FQUI4fxMLSCsr4GOqUB26LJqzbigj9zTdiXrfdq5dMqiGnhPrw3%2Bta6qZr5WdJlySx5%2B75%2FYXEbHlok0W3KOdo0CplCxTrlY1l7wMxwv%2BbuzUvPZnIMkqS5je4A%2Bu5E%2B8eB1KSijam5yf6DdhZhYAHbbtHgvHBHe9huox6gHAexU2OHn2slISr3k%2FDeX%2F66DdgDKkkwcb856EsMk0IWyDZCVfVOWQHG4%2B7yyqtbvOjvuEdW&X-Amz-Signature=9228e5bd5fdd7288b140a582cb59d27580a6aeb3d2ac0cbe04c69558fd9956e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNRPJUU%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH2hHrN7FJnvntjPD3%2BLB5eT24%2BIpCM2lEoXBFhOSWwKAiEAoFmgQ51P%2BruOv%2BxNyFQZW%2BfB%2BnewB2eRZzOVFJVIDdYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDDMc0UYwpoPvPYAzfSrcAz5uBoebKVztKm2ujmxkarXwDmMgRqDPB9rtQsQnU4gpXfH3r2zZ2VE3FE0mDfzV6I8%2B6xfDIe8iiuiezbN5rBjN0R633xQ2oUQxDrBLqVziq8%2BOkH5FGVmlyX3jR1bHK2RC3LrHeQ006YmLOYei8b66ybMCBx6S05ki8TdoQihSdB9kjHFw4CZMBu%2BGtfhEI%2FKKcTslI6FU7SiMVB5hKDcmmhyCDtyWePUulQCMyR9zu7IcDAffMsHxYjz1SI4wJB%2Fz2rXvPx36%2FOx9vewJFAxAz8znOoy6j6HfVeZfLLo1f%2Fj0WEL8hwMsTsOXq0dpPwvor%2FLp3YZmDQMWesB%2B4yNCYeOtD%2Fgxyc%2FzyUwEAqqmDTHz4xmnFbn2wYzxiUjD5UlLCBLGNjeW8PrXOxmOUqWHmsXodn54x7iB%2BHB8e0iQwLhQa33dXf6tVZ9kv%2BIKXwP%2BUh1yQXw8cjfgiQp%2BiMon9XbP7zc2reCUcw36GwGl0R0fJ9meo2qBs3cbr6YVqJrmkNIjSCOdUqylmMhApoJd%2BOa5%2FWRl5f1OUGsR4OTzPiKxDhdG3QOJyM1lFNsJlpw7ASoMPCGRyIbqh%2FMPDK5Ep4HVtZlJReuC2aaZcgaUvXQ7LN4%2BDaX3FiudMOaCsr4GOqUB9CNjGvTrm%2FfWS%2F7pAlx5pFbBnyUtkN9kxmIPyrnGI9HQT3DYF7V97cyeBR0OPvHUP3xWvqbZTzowEs7L48BA7G33uac68E0dXLLZHTQh%2BnU45ewsCvtdaXlvhinJP9p99UdwFt2147eKdWzuTsjcKbs2KKZ6tw3Fsvxh84tDOFa60BvslLLwBBEGi86oZPfTvjrMygEMLIlEu1ROMapHSqnSF3g2&X-Amz-Signature=13f16baa2dafa9758e8f9ddecc6002ebd435d0f799f1cb1443fe001edc430d73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A75H6EG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDWm0yuAYbTX6NPbxb8iGBjYcfJ47S1zzZFP02BN866kQIhALZZ%2BhUjt6bkZVY6DV7VFpb%2F49mV%2F%2By9xoxXMtPsnP%2BTKv8DCGMQABoMNjM3NDIzMTgzODA1IgwriseKsjwqycAfAfkq3AOxQKQJ5K9QplymmOtzoG6Ow2PPAelq%2FvG8lBarY%2B8IiuzL7kCMg5EehLj2jsNnBXQaf3NXzlSX9TMT638lOqZli78VahLxiIEpnSCjTmijA%2FnV4Kj2mSE61bazpQKkJDzRLevkgUEZHshM1SigcIlyBkXdxz8A6wbJwOpiCIEU2MMfwia5Uj2ZmshC7jHhCXnkMbtc7QM%2Bvbdq4khN%2Fa%2B%2FeCBeD4OF4bQu21iNvE6Om79rk96LLsbm518Wbkj915xg8vTmf6YqKCrKaH6tGT51WCXT%2Fmf1q1JEbgn1uFYVdYSxTIQHXyyE%2BEJuAps2Rq2bqrZdG5WYmfZHW5NEo6C1ikLpLKFGpw9%2FuFVBNOjiCq2xDDv2SDX8CAaQMhYjboc6sS7r8S9T9o%2B9pxoDJuqJhemz7NW5V7Z3yVdUwJH6Jagmujf71ZHJFya3gvqC53Gkd6AGHvGtpy%2BVrZnCRzTfvA4IUsQFSV6IIlcsw8FiQpZHhuhpw6Ppvq1VC5BBNV0r%2B4d6ygRWMb8fJWPCpRxqPDnr8%2BVlZye5I63%2FPmXZm6ZE8je5l6BLBgZUyrOz%2FIXmdMvKAS30uj692D9cHONkRyKo7JD1erHjkaPT53Onxn591giSf%2BE%2B%2FcnXbjDogrK%2BBjqkAbIMFM3KNFgt1StrU9BmLlUX9gOvxNUlrRC0dsAYJCe1ogP0D%2F%2FCo%2B1Vue44x4yjlI8xgSrhQR%2BvY9sWYuLgUVqElaEQaxc6EDXs%2FrAhPJzXTVg0oZQMBam1TAWYcs7%2BvYo2iYn556EjpEdZ1Vk%2FcHrgumlTRS87ZLB6NCyeETkPCcwM8Pre%2FqSuNTLlJJbWlhkKtWglIK%2FqSeDXHq4xGvzSR%2Fum&X-Amz-Signature=f83ae837f61c8c0825f74b970f45a3b31ee0e10e2674feb9f6776eb226d0f405&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W3X4S7Q%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH35j6NUFEOW8Oeqh7ksEsAIoelmYuhW0MsjTqM42OgsAiEAzJobtzol%2BP1LGOqPSxbNAeJmVoazRx0owF1GSk8AjKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDAtjeheXyu%2B1c969lyrcAxEqaNJ0DpgaS9xPSynPK6CdrlC0nPS5aCSy2QDlN83P95TXrizuCXqeVBmuUPXx6Fh2Ewdo7b1SfSh95lbZfmBjXjMr8yFBBy4z%2FeCJiaClCzKKzAwlzcwLXvuR5qkEAhGiZeUtth0d7p%2FvzC6o9hoAmZWD4EZ%2FMLWpR6hklEwZxeffdvMvgmaSjQgWgMj7cs8AV2DmlVvFla6v09c6SZk7p0nxsAR5GQxwfoLKr6d1uVXOpByZeh%2Fti4m4T4tiegJJqOAp7FSgDhGAwqiQV5ZFB%2FOGHS1YVk4WoEGwEUT1YKzh4S5ga8%2FFGV3cGcT3bjLjZ43lwrPHmL%2Ba5HnaL%2FUY4mfmRYGhkyZEXAA0ISfhgBgHo63vxo1va7A6MME6fIg%2ByUHISXarEtp0ezG%2FxuB%2BjULNFdDH4Q2BesxKABywBYWALdF117A0XyB23LJ9N0AF7N8L7UygjtFrpK59Ke1mM3%2B1tz5XEUiXVFGqDLrXSc75UMi2KQi%2BrisM3jyaEDpsKY%2BojHtO6tl26lQxoRMGuI6Gz1KpsX7CaIvXtkKX6Jrx8lCFxeot5LogVQ8SdRSYX9XUYTneR0o%2FA8NB7W1z4lVoB2wO%2BOSS0D66bVBT0G9SADbP3FQUI4fxMLSCsr4GOqUB26LJqzbigj9zTdiXrfdq5dMqiGnhPrw3%2Bta6qZr5WdJlySx5%2B75%2FYXEbHlok0W3KOdo0CplCxTrlY1l7wMxwv%2BbuzUvPZnIMkqS5je4A%2Bu5E%2B8eB1KSijam5yf6DdhZhYAHbbtHgvHBHe9huox6gHAexU2OHn2slISr3k%2FDeX%2F66DdgDKkkwcb856EsMk0IWyDZCVfVOWQHG4%2B7yyqtbvOjvuEdW&X-Amz-Signature=aac808ed0b2ac6f795100b02a67dd196e7394a6de505843d9ecede55f75d1c03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
