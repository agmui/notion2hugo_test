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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=92d3a587d249a7202f22cee188de1bf79be3df77e70e62ba0b5d2a7b848c873a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=a99829038c4fc3796fbbefcfd5ce0c53584313edc0602c5f8a2de0621f7ec14a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4Y6NN6I%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICaJksJ66sxx1CqEV3y4Ki%2B6PpnlnaedvyHUuPu%2BagGgAiEAyzNzQxuCZtGQUpk0QwcTN3bSfmJfZIdpyo5cvl%2FITHYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg2FYb%2F5iDZ%2Br%2F2kSrcA5b%2F25GTmuFNYkiBR7aNHAm%2Ba4EId074GIvwAkvD1UTByOtu01MGxB7csNfzRNdsLl6j%2FsIxDNSHta7WlmQoZcua63fK5tOid2J2AIh%2B9m7GgqwPqmgEVmne2gsTdIH0sQzLXKl30ZI4oISV5SbhIPVs898885nDfH5xeaa1hXo%2BGxysXhGC9HVxzp%2BzydvYdT9NICu2L53KOFSw7dthmxIqXKLVgh0C8NEpMmGAGZvot0PA%2BlLJvgY0awmywvpPjDmC0EWbt8gxUpNdTHPRGlkW1SO3yK3xjlM8On6RTGIoel5psxsOLMGQTkIgDyQs90rcE8LNavFzaiAfQImIsSexiDxKq3NPhKPAbx%2Bkr78WtDova2oxw9lJJi3G6bwzFL4s%2Bcrtj9%2F7HufHAj3SZqtqkCC35iktIow3Ct4oRNZHLCqjVDc%2F%2FXOyJsAeYr7ClyAT6W82I2%2F8r4qoN0iDrRsOzOAlaRm%2BbnV6bmIVTdhwzmv%2BQNc8pZkDKxcsrCs2kR12TzdQUXSdvO%2Fv3e8LPTZyaIX5wrmxs2pCjHtxln5g9brdRNE9WDeOanOlQO0gwzQLwgOiI5HfCf6%2BPwz2CXFOfYcPHAugq%2BppiwkwmocHiA1IdqWTX2nCidW5MLqy%2BrwGOqUB35uWHyo4pHc%2BOta06nKE9IduiFtbpvT8DEtEGYcvvp92ZusmJg4fbaPkIcXqAH%2B5KtrR6wkYB0vi%2BTNY0V%2B3VE5IPdWI1WzDfMcbY%2B3su51mNwP5poZTUOlWgV92WyKiu91LxVS64VtkvjcEOM%2FDyh9CCFwWJBmkkHHw4PCJRRUZLLsgEh5z1KqiVuntn4mLryqxc5umczbXVoYm2IREHshzUpkG&X-Amz-Signature=575b75723614cb8e1f56059db47437e3fe7d80d82cb0a13c275ff5c641824bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OMREN4P%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfb8wAr7%2BclI19CeK8WtuHZwPBl7cvE%2FxAFz2OfegmlAiEA4RftLeXaDmkaai1OFrDgxA9ThxefYuUDhChJwU3BhXsqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4QzMTB7EswkfHaQyrcA2%2B0T80plA9xJiXJal0DSINCb1K7MwSofrwupPo39c8cu1sQJMyuM1n4pudd1gWZUCGhrSvLhfYY%2Fa8RoDya3dnvlHvJcRhq0Slq5jT4iGjlm2UwfEKq9YCOwB882xMJx4BGGCMVr05voG5xPZpkoQrzPEP4spjrnx9bSQ5TN7wR%2F0r7slYgMkbcGmwFL%2FuNXemflnMnCihb8yogKsWwcV5DvmerfuQ4pOetABu7z7TcXbA4qjEAYU5QzAgoDqZ0QX9gYxISZ9i%2BK1CskYwgeIxbjdjMon0YMgGo1GkQV%2F5%2BTMdBNHh1JDyFvLkrojqI1MNzpCiDARgblFKVe68MY2NrdjGTHypHiBISjtyN12kAUdtbqvpV9GkjAGoS4xltZTGxwtVkfzhpiFrsA2znghVAuFOjBFeKKapwtwAHODitLUz7QjvHuKyM1p3uOFqeHrpv4Cwy4i444KTjmf0W6K%2F8z94QFXz37xei5gsoTW8bNllev639dusGIWtizKCEoWyfFGZMVyWzb%2BffSV9SBRLrF4LhAi83egAiu7Wq%2BE3089vYwlKAde9Kb%2Bf6lNbptwtllHloj5m4XvgNgYnKiApNE6Yj3fqn3ouie5GinpgmX7zQkmxTU3iioexXMJOy%2BrwGOqUBb1jayjfzx031AbgrC99SpqGTZ%2FuViWyWsq8wHEiw4CdkJyolvG9VhhQs9omQwHfjDDag%2Bow6Gle9y4Lns27aiBlKRWiEw1L0GruUvm5OkHv4KVuvWcJweEMCXbvHcoWTcZyuZj2KFSmb7uggRbisneyMtfTsY%2BBiGq4QOnqbKcMw8u5vmiZOrhN5GysF7w4JBy7k8P%2FaA8QZsvHPSRkBJxAiQ%2Byw&X-Amz-Signature=bc711e0a9c30ee437c27788f4e03a948cbb8fa2e12ecba5a3c087196d3774d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T230231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=b51932e59f82209e9d7a9084c80c4d704c37668d9fce040030170c1c23463101&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
