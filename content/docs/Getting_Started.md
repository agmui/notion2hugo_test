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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7TVIH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCYb4KQaeqbtxq5fOl%2FaZ%2Bn%2FeuBi%2FHDCzzGbp4F03jCvgIgcNhydvvd0kc2rTeBAdiYVIYi4IgDSOtiBHxspnOzcbMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGSuoWRnHjnkyR3E8SrcA0N6Nw9yMzvppqWMr03vXuglKIOpT2s3afp8hmZlBZjJylyF5KJ%2FyuZpX9eou0QydA7DkansCKVFOHeatGbYHX6FzLdauXiQbO%2FiAUWk9A%2FJCDZMGkZkCKycGQoKIJ%2B69S1qHnHNUU8luLftzE5ZnwBTnlKRKIHw5cXKGAJubUU2%2FzqNWw9ESGROLvfSvu5%2FlcorUMtDlYlaYcU0mz4MyrOOzYBYS%2B3J8MrVKZ%2F%2FIXD13AiPAKWutKVsDPK9lkc%2Fx8a%2FzbxPS%2FBFLbuE0lhWEO4EqqyTppibSBA%2BFm81ViHvmJrOOMCPaqa%2FC9CPLbixxBiVTMysV%2FJOcMDqUjTssq353JAjECmvrYYqf7WOBIqpRWzb5t6FXgnighIjbZOg6xBGtAWvyh9aNp2BQLPQaAxO2byf2RzoSv1Bt%2FlqFMqZFnMgZGKpQTcSaR2ycMdZd8tJs4%2Fh9cHFP99kA%2B%2Bj%2FQBw5eR0xHDoumm%2BjavhF18OgidXno9SW9XfREWJBGpWUTOrvb3mvajit2ZKoGeMA%2B4qGX97IfvFE8kUA1oK%2BHr1yfnj57Du2nP3fKaRhzMmMmnBYLD2aW4am0xZROkOM2ZbgXU2o%2FLy418QBZgQehDmxlKWArD%2FscRAtKIIMMaBxr0GOqUB%2Bc%2BTccgm1fSlBCdDykb3Cm1XLA%2FBdDfiqRYdsE95Wap%2FI%2Fg5p8w%2BpsJvwm5LLD7BJnZyRuVdwXkKD52q%2BzQzqPfUoiHlfzQiIF8eMim3QzvESLWTzVYkOIT%2BYYxoo91EIlW0knOyzNGav25QWeMEMzH7IfU3RpurBWcb7%2Bl%2B0P%2Foydj6xIzB7vqpUAEJfT%2FbFv34IkqgcwUY0CGinQah9GHf%2FzAY&X-Amz-Signature=efd3d5389220a06c801ea4b4d75367654d5b30486877b114ad0485247a135bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7TVIH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCYb4KQaeqbtxq5fOl%2FaZ%2Bn%2FeuBi%2FHDCzzGbp4F03jCvgIgcNhydvvd0kc2rTeBAdiYVIYi4IgDSOtiBHxspnOzcbMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGSuoWRnHjnkyR3E8SrcA0N6Nw9yMzvppqWMr03vXuglKIOpT2s3afp8hmZlBZjJylyF5KJ%2FyuZpX9eou0QydA7DkansCKVFOHeatGbYHX6FzLdauXiQbO%2FiAUWk9A%2FJCDZMGkZkCKycGQoKIJ%2B69S1qHnHNUU8luLftzE5ZnwBTnlKRKIHw5cXKGAJubUU2%2FzqNWw9ESGROLvfSvu5%2FlcorUMtDlYlaYcU0mz4MyrOOzYBYS%2B3J8MrVKZ%2F%2FIXD13AiPAKWutKVsDPK9lkc%2Fx8a%2FzbxPS%2FBFLbuE0lhWEO4EqqyTppibSBA%2BFm81ViHvmJrOOMCPaqa%2FC9CPLbixxBiVTMysV%2FJOcMDqUjTssq353JAjECmvrYYqf7WOBIqpRWzb5t6FXgnighIjbZOg6xBGtAWvyh9aNp2BQLPQaAxO2byf2RzoSv1Bt%2FlqFMqZFnMgZGKpQTcSaR2ycMdZd8tJs4%2Fh9cHFP99kA%2B%2Bj%2FQBw5eR0xHDoumm%2BjavhF18OgidXno9SW9XfREWJBGpWUTOrvb3mvajit2ZKoGeMA%2B4qGX97IfvFE8kUA1oK%2BHr1yfnj57Du2nP3fKaRhzMmMmnBYLD2aW4am0xZROkOM2ZbgXU2o%2FLy418QBZgQehDmxlKWArD%2FscRAtKIIMMaBxr0GOqUB%2Bc%2BTccgm1fSlBCdDykb3Cm1XLA%2FBdDfiqRYdsE95Wap%2FI%2Fg5p8w%2BpsJvwm5LLD7BJnZyRuVdwXkKD52q%2BzQzqPfUoiHlfzQiIF8eMim3QzvESLWTzVYkOIT%2BYYxoo91EIlW0knOyzNGav25QWeMEMzH7IfU3RpurBWcb7%2Bl%2B0P%2Foydj6xIzB7vqpUAEJfT%2FbFv34IkqgcwUY0CGinQah9GHf%2FzAY&X-Amz-Signature=81e61e8ad74d8948e3aa631310a03c8e350272ab2057fdf88ec9946733f15424&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JAEE4O%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICe1oWw%2Fu3ro2nhSltgYKVVd0Dm%2BLvVFOxneLDsWcY5aAiEAnaErat55yECW9BvPVpLSN6yaYRWS4nhmc1bbgUUVHtAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDezbLQYLnIjjADQUCrcA0eKLuoBvoDjXfkxyP8vHAMj%2FrV7uer6jsvS6b38M%2Fy4s%2Bbfi9RkFM12KmTW2FgUb5pBtNt0bimy9lQQiVyod%2BF8lxoH2xSPATy0ksxSpAeqfCBqdVmjnMmql0V6bRScGYSpSwE79jwPp7S%2F%2BjjSJ5qh2bL5Oy%2Bjhk2nLZZd54e34XF5VffkdEmTmCV25NNNqJdX1l%2F05uob0C6fIkuGtFgCanOx03FMRziB%2FP2qGbcTblPx1mv%2F6yw2%2Fe7j4R5jADVdSrpQ%2BrDi%2Bojb3dC4Fu5WAg8luPOzWUtvO3LrqugqoFejAjSnskl2Is230zphvIEVfk8jedoucU4CN3YvSaYbty0ex4a%2BJ%2BP7T5HkXQmgfGAN4vT%2FrzbKdowotgEgzdFVbZ1P7HtQEL%2BC%2FSvwzXobgg6bbyg1CMUNP6IItEDoYauiXd7X3L5qIfgf0hQqQdohQq3T9OsFUs3a8C%2FCsUikUNj2PzQj6rep%2F1bRmY6aocTT9XsewpRAJPkamQq14FbZqwRBtmirX9CgqIQ09w%2BQmyg1dGN2KaCpuIJ2GVzr19ChM6AWRSypYvn7CaFW7NWGrliNEOyxPXJ6CxMZvYQIqyFeCgzcVElEkuqIyHdmaYlJprWXc%2BpPPUATMMX%2Bxb0GOqUB7%2B4ESOqlbbBkjkF8WsM%2FfqZ4sW%2BhR582BPgHQVEd%2Fw%2BPLfvSfzX3n6bzQ2SPYqZ%2BG2HnAjAEFboSXBMCCsQfoX%2BzfvNLKVX7I52p1lXxLbBoDZWcAAYLuv4dlPc%2BM6PIKyl8IFoo5k8I2RR4n%2BYutZH6%2F6bAT0k9MrumncIUIWc2IgLJ2cFXtEKVh%2FBHq6J3hQvnVcgXbhwjQyPHRPxADWJ1foiU&X-Amz-Signature=0863edb67d413b9666c93ed562ec6eb8d0035e6f644534362895b1a4d933ff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6EFURRL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsZlxiZmgcGHeBoggGArlV7cTR9cAxThQTyM9cBt4wVgIgfEASciZA3BxQ7v8NKfgy2J2WY5%2FWV5puYCpLWizKLJEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBxALoaPxIS28%2F4L6CrcAwDkZFwnPTSdhhod1jyCFXEKzYSvXKGDQhVC7IQJ8Hqwpxb741EoLPYDP8hUH5inHPzKRmO3sCpJ7tTiYennS4a3Cz5Q1wlYMkRFRwWTz%2FUhC7bCXiOJCEc1%2FSYtCrzFn3etn5Z9u5ltoSFonKv%2FUyjHcMgaDsRNBl5gBfYLox%2Buxr%2Bdsa7n23tYk4vfIv2e4Bjo0IY1YitU7cPBIzbY6WM4rFT0T5OUbWdUcJNGOYK7cA0VA46O2lQxtNfwG8evs9ddtzcjT4t1%2BKliYBr6DKD7ZYvDGE0l1Wsmnx%2FoPQ4kEO4b8yU6e8tRCqCu%2BWin4hMowlASXKLjHfR%2FI%2B%2BhFbefbvI0S7Jw4ZHYbTKVqD989FyjcaT2L%2FRLtJo7Oz5BPGnjfuWH68HL6%2F6myTQo6oo9iZgYjKTXeYaNoksBxLhOs4UG2dUARnoM1KQQfZ1e081rPUfBWhKFo%2B4ODqrzEEgNikOGprB3oUwPzHBlQEJnay3OBWyEsDsmFwaQBUPd0Fvk2F7eQR1H56nj51zkm%2FL5lE%2Fz9ieOjK5cNmJCjIq7TQt0wS73s0ROf02TgPRR6sr7pFY3k40lqcNHGoNeKc9vO6%2FFYinjJ7WNVA%2Bn8cWCUxA9dJ5vJqQfpk3OMMH9xb0GOqUBKEoJZckvLzk04TcsCQeFh%2FoYQ9EiJIzDKW4AjonKllU7Suy1s0EPYxGPczCF2vidNbC3Pft7K48uejQ7KsdMQBlT3sNV5WGz1V2vjZ57OYzgvHHIYkTm7Pr%2B6S32RPVr4Z6ApjZbNCV85uAynmjauRzuG6MVT%2Bli7xUOErMS7oBG%2BvaMl8T8BhR36lG4N8J2E%2BOy4AFkZ8SZezeHA2BHsdA%2Bf%2BDB&X-Amz-Signature=0c063118e394740b3488e5500cce3da1d99a3482ac16afa5923eba319cbc9fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIG7TVIH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCYb4KQaeqbtxq5fOl%2FaZ%2Bn%2FeuBi%2FHDCzzGbp4F03jCvgIgcNhydvvd0kc2rTeBAdiYVIYi4IgDSOtiBHxspnOzcbMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGSuoWRnHjnkyR3E8SrcA0N6Nw9yMzvppqWMr03vXuglKIOpT2s3afp8hmZlBZjJylyF5KJ%2FyuZpX9eou0QydA7DkansCKVFOHeatGbYHX6FzLdauXiQbO%2FiAUWk9A%2FJCDZMGkZkCKycGQoKIJ%2B69S1qHnHNUU8luLftzE5ZnwBTnlKRKIHw5cXKGAJubUU2%2FzqNWw9ESGROLvfSvu5%2FlcorUMtDlYlaYcU0mz4MyrOOzYBYS%2B3J8MrVKZ%2F%2FIXD13AiPAKWutKVsDPK9lkc%2Fx8a%2FzbxPS%2FBFLbuE0lhWEO4EqqyTppibSBA%2BFm81ViHvmJrOOMCPaqa%2FC9CPLbixxBiVTMysV%2FJOcMDqUjTssq353JAjECmvrYYqf7WOBIqpRWzb5t6FXgnighIjbZOg6xBGtAWvyh9aNp2BQLPQaAxO2byf2RzoSv1Bt%2FlqFMqZFnMgZGKpQTcSaR2ycMdZd8tJs4%2Fh9cHFP99kA%2B%2Bj%2FQBw5eR0xHDoumm%2BjavhF18OgidXno9SW9XfREWJBGpWUTOrvb3mvajit2ZKoGeMA%2B4qGX97IfvFE8kUA1oK%2BHr1yfnj57Du2nP3fKaRhzMmMmnBYLD2aW4am0xZROkOM2ZbgXU2o%2FLy418QBZgQehDmxlKWArD%2FscRAtKIIMMaBxr0GOqUB%2Bc%2BTccgm1fSlBCdDykb3Cm1XLA%2FBdDfiqRYdsE95Wap%2FI%2Fg5p8w%2BpsJvwm5LLD7BJnZyRuVdwXkKD52q%2BzQzqPfUoiHlfzQiIF8eMim3QzvESLWTzVYkOIT%2BYYxoo91EIlW0knOyzNGav25QWeMEMzH7IfU3RpurBWcb7%2Bl%2B0P%2Foydj6xIzB7vqpUAEJfT%2FbFv34IkqgcwUY0CGinQah9GHf%2FzAY&X-Amz-Signature=3bfac737a108cc458d4f024e93eb48e0fba948c212e5f239c64aab2eb38f51d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
