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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YJP43O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGDoCOsa7veTjfCogHLo5HuTkzLMmXKoN%2F6jjIV78VNAIgNcC%2BAZgEQcfexCvUPaf8e6%2FVFyH%2F4Iy1RbmbKFcjDNsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHefVM%2FmKiwbBAH0yrcA1uy4Gzax69SZ4Pfbcz6oxR1Qpk0cY3XmzKeaJVWpArM%2FzD02YIuKFmoqukN9zHJNRDosDp75cWN829ZMSpKoGMt8O5VJhBKRrRn6XVzMDxlCF86FEOKFZwq0KvMgjfl%2BVR%2Bbq4JFKQQayfpx0Ste9OSDI%2FzonHtW1rX8oIX89bDSFVafeKb5VMyImJjklv6R4%2FoV%2BpVf8dAv3Qq8obD6rPJIJH4Mz8FcQ8AvyZF84DX4aTiRlyPf4NmVqeGcjuaGgewW12ErHYj0pHzz8kmHMdn%2F9622DoiznbQyc46%2BpvC%2Botz5FBCWoEYoxhReSqkujKpEU%2FQgJI9NIiAD8Jyo%2FVils6h%2BJq4OEdiStacYEfYsnDTvPGbAi9lr2UBHnE43jyK7cbgJ%2BaAT8gm%2FbuvFkxKvdRD3mBFydbbI86nVl%2FwRCz%2ByTly9uT22z6J7BiY%2F38efgRjsnm1tEJF5X1lpmw%2BOD5bnrZPbw3sqe%2FMIdPo7jNJ78FN%2BQGnwQ5BeOyDXgUKqUEYQcldgcmJNAzuV%2FQkj%2FJugVL8Dfh4jZ1KsvlbsNIdCHR37R%2BuWbyTa%2FP04J%2BBHPl3zseU08a%2B7a6MdTj4zBGDpuE9XS10GZ7c9kzY5z8x9zDgtH76HQP%2FMOqw678GOqUBFgsD6a9%2FJEwJ2c51alrJHZo63G3u%2ByGqGlbDqz8b15QgTCBgyMGKtG0WURLRQWvAP7XxRkPMSWtUY0HfZvQqfHoOKCEpJu7WvrBUHCdxIe%2BCZn4KbyGAnQn6hNDLwy6qxCBQScjwnpUXWIPpMHoa02mGa08g5gBC9HaMxyXaPrigEDp3WWXPCL55l75r%2BIW1sqePAv%2Fd%2Bv%2BFuxVdH3RIgWv%2FDxPJ&X-Amz-Signature=1b1825bfdfbb06ee55243cb449148ad6e532300d47aee11b7c4eb67a05ff4a32&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YJP43O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGDoCOsa7veTjfCogHLo5HuTkzLMmXKoN%2F6jjIV78VNAIgNcC%2BAZgEQcfexCvUPaf8e6%2FVFyH%2F4Iy1RbmbKFcjDNsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHefVM%2FmKiwbBAH0yrcA1uy4Gzax69SZ4Pfbcz6oxR1Qpk0cY3XmzKeaJVWpArM%2FzD02YIuKFmoqukN9zHJNRDosDp75cWN829ZMSpKoGMt8O5VJhBKRrRn6XVzMDxlCF86FEOKFZwq0KvMgjfl%2BVR%2Bbq4JFKQQayfpx0Ste9OSDI%2FzonHtW1rX8oIX89bDSFVafeKb5VMyImJjklv6R4%2FoV%2BpVf8dAv3Qq8obD6rPJIJH4Mz8FcQ8AvyZF84DX4aTiRlyPf4NmVqeGcjuaGgewW12ErHYj0pHzz8kmHMdn%2F9622DoiznbQyc46%2BpvC%2Botz5FBCWoEYoxhReSqkujKpEU%2FQgJI9NIiAD8Jyo%2FVils6h%2BJq4OEdiStacYEfYsnDTvPGbAi9lr2UBHnE43jyK7cbgJ%2BaAT8gm%2FbuvFkxKvdRD3mBFydbbI86nVl%2FwRCz%2ByTly9uT22z6J7BiY%2F38efgRjsnm1tEJF5X1lpmw%2BOD5bnrZPbw3sqe%2FMIdPo7jNJ78FN%2BQGnwQ5BeOyDXgUKqUEYQcldgcmJNAzuV%2FQkj%2FJugVL8Dfh4jZ1KsvlbsNIdCHR37R%2BuWbyTa%2FP04J%2BBHPl3zseU08a%2B7a6MdTj4zBGDpuE9XS10GZ7c9kzY5z8x9zDgtH76HQP%2FMOqw678GOqUBFgsD6a9%2FJEwJ2c51alrJHZo63G3u%2ByGqGlbDqz8b15QgTCBgyMGKtG0WURLRQWvAP7XxRkPMSWtUY0HfZvQqfHoOKCEpJu7WvrBUHCdxIe%2BCZn4KbyGAnQn6hNDLwy6qxCBQScjwnpUXWIPpMHoa02mGa08g5gBC9HaMxyXaPrigEDp3WWXPCL55l75r%2BIW1sqePAv%2Fd%2Bv%2BFuxVdH3RIgWv%2FDxPJ&X-Amz-Signature=a6fe1c7f21cecedd7c016776693fc8afb9f5d6fec3d11ec32d5c6ed115dd92a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUTLFAJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCsChhOd2wsrUoCaewNJch7nn9jTv1xovXTASD8%2BCzFXQIhAKBBG%2BnWecfGelYVMC20sihZqVTrB1Tu05rKkMHzmMDGKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yS0UBg1gZvO84d0q3ANLphh0Ekzn6S4p2pcgNU93CJDr2M%2FUO81jH7X8TNhDfdGYlckr6sMzqDrhxpvIntTVw66ACWchffG7TTQv%2FV6pRrkJWkRHwncQz59fRANRmG1hAo404oMSQhj41hoXHaSy8afi0hHD1bmAzxmgWXf0EILpJdgHRlYSrJzJoThqROspN1L0Ll120JuPtq%2FTOjI7Was4tneOS7xKshkngeQ8e0Rcxg95oETZV79PyXD9zs%2BX%2FpOzL2keMKmQo5sE7HP3IKAoAG4d2I6bAh5rSEIyYlspHRKN14x6Wjgzm8w7%2FDmib5vj7mf3rjYyedwBeQXIuziDoQD3HF9IKB2DSVJPP7rG8OC4OwYrfaq8TfmrhDH9H1a23gTU5lP8RDQwa2w0NBDpQyogc7vrECQRMHYD32vTCteZV3WdIjejBWcdtZ2SHQKHpLF35DyAvnIqLQDVgSFFPL4VIWd7COWEtYXk%2BtTDUYzdI2U5GL%2BaizjvXZEGpLk738PDg112oNVJJ8ERohVTI4II9%2FE%2FcJOPzyIYT2KyvC6xeGvhmNFkcHakte2rUByXu%2FUdw0o9EqKDl4ApHCFkna7tjekySemnu10CQUVOIQDje9G5KWTVgjP%2BE%2F4JcN7aa7EEa48VLzCSseu%2FBjqkAWbZFKfiGQJc0EVyP2cySGtnVJytUmLgD59%2Ff1uHKnvz7USd61henhrcN%2BePbZMrne8CgbKlJkjkkt8zzHhaaHrYaQw2IMYOko41BFQvR%2BiJ%2Bpg7oPvjQcUfrkOsRhX%2FQsM0fxqtv%2BQwjK3tGr20gB5gf%2BnfyEIijFL%2BL9khf6jEsVDmjlhSMIYaN%2F7%2B9GQH8yI41yNgrRlP1INhBN5TMCWBdar%2F&X-Amz-Signature=c864834ee5bb0a2d649a61af1893277b23514423fdfb9c1b6d8cabcd5082d6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HQP4T5D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFtDHK%2BzmL510ttqqv3ZUHYroEvo2MzYPQhM4Wg3tAa5AiACxZlaTZwuqfYkL5JSmGDgwOniXTnh%2BgAsDc6jIbNcFyqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9G5%2FuhjUXOxFkApUKtwDFP6YXsCC0kXzn3snYzkBCLeK2cLkjMcysoNvC5G0iBIDMqGk4FNEKFVaTr814K7oQqtX1ohZzzM54Heu6fgg0ttFvhE81Kn98TzL12r7HnvEfRvOXsM7DRckRMx9%2Fk6pwddS1%2B0F0EaHlzuE0AyixeJah%2Fj38bKIE9TE9vJckqizwZsMzIaEC%2BvJl8mBVm5LcpmdUh2kSGvahQXKQaRV8bWduuQ5ZiCPvnaKXkNArCwjB41Ov5eK62or%2Fz%2BHKsM092Jjchx10R12ERyVkjW08ueB0%2FYdgFTt4TogBLcQ%2FXN3TSxtC3TkPyEdu4lFrD2uRsEtS58orfCZ1U9g5jjyssgp3ze2fSYxZsUxHDeDOyZ5dH2jFioO%2FDjl9lOsAhTgsGv0vUwpO%2F5bHhXZrq40UxPfO%2FrH8FJjhNqNPT8WfzBPgS%2BKHWC0T9Qi5jZ8MKOcuaujIo7lECR4b5S%2BvT8UY3Swn7ToPLNO1t64ZZIpLYYsvs1v0N%2FOrk1FkPkGoGsOY%2FhCM1kk4Jf4rCw7VKUZrpBh44aKQkFgZrcL5po7GqLRYxR8QZC8gZDkPyNkieSFBRrJOl%2BzJh6ujCE%2F1Dxi5nMP%2FkdSMrWyOOKOCeroCjLZ73tDnT7ly2SKZlQwibHrvwY6pgGRTp%2FbDHJLpxBk5ioqq1vaMCUwK4IMPrHVfkEiJj%2FH2nIRs1pNZN0SMsModpqRt7WHzRw0bSGNsrH8oG9K9bvOq7A8Rfnc2sJ7mCmIW1mmRBKQElxW5tHYjcNf0YuFTdG6Mcc%2F07Pj6IwezzNgLjWqKTXvAr4Pa3tvfAb8PWsI8IbLu%2Bq%2BMqlcXkCeB7E%2Bz2ZdzsUp1T%2BWhmsnH8LMCpIFbNIkJxyf&X-Amz-Signature=15ce4df2b625238049165451bdbb36d3ce80b768a87938aa575161bb5d216cec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YJP43O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCGDoCOsa7veTjfCogHLo5HuTkzLMmXKoN%2F6jjIV78VNAIgNcC%2BAZgEQcfexCvUPaf8e6%2FVFyH%2F4Iy1RbmbKFcjDNsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJHefVM%2FmKiwbBAH0yrcA1uy4Gzax69SZ4Pfbcz6oxR1Qpk0cY3XmzKeaJVWpArM%2FzD02YIuKFmoqukN9zHJNRDosDp75cWN829ZMSpKoGMt8O5VJhBKRrRn6XVzMDxlCF86FEOKFZwq0KvMgjfl%2BVR%2Bbq4JFKQQayfpx0Ste9OSDI%2FzonHtW1rX8oIX89bDSFVafeKb5VMyImJjklv6R4%2FoV%2BpVf8dAv3Qq8obD6rPJIJH4Mz8FcQ8AvyZF84DX4aTiRlyPf4NmVqeGcjuaGgewW12ErHYj0pHzz8kmHMdn%2F9622DoiznbQyc46%2BpvC%2Botz5FBCWoEYoxhReSqkujKpEU%2FQgJI9NIiAD8Jyo%2FVils6h%2BJq4OEdiStacYEfYsnDTvPGbAi9lr2UBHnE43jyK7cbgJ%2BaAT8gm%2FbuvFkxKvdRD3mBFydbbI86nVl%2FwRCz%2ByTly9uT22z6J7BiY%2F38efgRjsnm1tEJF5X1lpmw%2BOD5bnrZPbw3sqe%2FMIdPo7jNJ78FN%2BQGnwQ5BeOyDXgUKqUEYQcldgcmJNAzuV%2FQkj%2FJugVL8Dfh4jZ1KsvlbsNIdCHR37R%2BuWbyTa%2FP04J%2BBHPl3zseU08a%2B7a6MdTj4zBGDpuE9XS10GZ7c9kzY5z8x9zDgtH76HQP%2FMOqw678GOqUBFgsD6a9%2FJEwJ2c51alrJHZo63G3u%2ByGqGlbDqz8b15QgTCBgyMGKtG0WURLRQWvAP7XxRkPMSWtUY0HfZvQqfHoOKCEpJu7WvrBUHCdxIe%2BCZn4KbyGAnQn6hNDLwy6qxCBQScjwnpUXWIPpMHoa02mGa08g5gBC9HaMxyXaPrigEDp3WWXPCL55l75r%2BIW1sqePAv%2Fd%2Bv%2BFuxVdH3RIgWv%2FDxPJ&X-Amz-Signature=944e7517c5b0ef4a7b0b8eb8caadb635adddc3f47fe51b9e03151639605079ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
