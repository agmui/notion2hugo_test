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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPDNLJX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FjswbsMuSFqS%2FslKRDj6IQuz1rI8U215uDMD6OBMeQIgJjPL53Lqx2fgDxwJAN5eRaCsp1oEG5Z%2BmOa2MCUnGPUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcPWWaB%2BaKvpDiXpircA5HQ1kuXa%2BWOwD7viQhLfaQ1kvkOLjmMQx9%2BJUgxynjVlZEFhAAVLXEf%2F4zTlC3oTdemG2Wvsv%2F%2FRn%2BhpUqSXM7jaf62cMD0wHJfXAGuTPJViSHfpdgYNY9hiwaoBIgmWt0RgF0O%2FFfy0nVpdlRuEPZyoaQpCDvpmb0Xd8SW1mWs9vyYoBrCXj09GFuy02DIjjdG%2FZ3XHm2dd2nCiy6YZvZbZf%2Bl1Nvzi%2B3E9aYDsrvmZpH5NDawyxLH63%2FsuVmvVEMI%2Fcn9YhHl%2Bk%2FuxwMCNxXwQu6X5bjbPsMB8m%2FqnSIyEuN8Z9gtIZ4NwqxftMCByksLZncFqHa5P2HzO9ydzBK81qz76Ihu5EP0%2FiweDHmXbfkmaQ1TQYNcGGo4cZDxZAOuKGz8ouhJxh%2BTw4%2BgAtxA11XIZ3oEfc43qyHWSoqi7osAAtRvhdwzQPFVesoPUHxrG6JHVtieuF4YWthk5NOWpVwak2268zEkDTslVHfVvnPdRXvLk7Vsf6iGtl%2BMJMBzW7tdCFPOq2tucoF%2B11WhuNMzCaaR501rpW89bGJ%2BmZ%2F7Bsrt%2Bm4NtKNSN3oikKt%2BUcWUxhbPK%2BAJWQTTUa5O5ByesQjRnQdrXCeAyOGw%2BdB0LSxcx%2FQRXfRfMLLCxr8GOqUBVKXQQyBI1%2BJhLQO9SWIh0BnF8fzEmNT%2BKsGq%2FX0B1Opc%2FrVvbtxA8oArlM7wt9DwKJzR0yevumpygmGn%2FmtHvoJROy7kETkymQfx5h4An2%2B9hYSFYhosi6Uxl0oeRRaDiDUXGC7Et8ENxKz%2FxlObfESQkbxEmhcFktsvGCNAKKgzgY9rsy88KawYO9XG9Bj9c19n7nYXuisSlKB8%2BG3c01OW9a5A&X-Amz-Signature=5f3349f32926d9ce0b4b9b4ea6d710da93cf4231387bd2f2f352ea8c3ab84eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPDNLJX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FjswbsMuSFqS%2FslKRDj6IQuz1rI8U215uDMD6OBMeQIgJjPL53Lqx2fgDxwJAN5eRaCsp1oEG5Z%2BmOa2MCUnGPUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcPWWaB%2BaKvpDiXpircA5HQ1kuXa%2BWOwD7viQhLfaQ1kvkOLjmMQx9%2BJUgxynjVlZEFhAAVLXEf%2F4zTlC3oTdemG2Wvsv%2F%2FRn%2BhpUqSXM7jaf62cMD0wHJfXAGuTPJViSHfpdgYNY9hiwaoBIgmWt0RgF0O%2FFfy0nVpdlRuEPZyoaQpCDvpmb0Xd8SW1mWs9vyYoBrCXj09GFuy02DIjjdG%2FZ3XHm2dd2nCiy6YZvZbZf%2Bl1Nvzi%2B3E9aYDsrvmZpH5NDawyxLH63%2FsuVmvVEMI%2Fcn9YhHl%2Bk%2FuxwMCNxXwQu6X5bjbPsMB8m%2FqnSIyEuN8Z9gtIZ4NwqxftMCByksLZncFqHa5P2HzO9ydzBK81qz76Ihu5EP0%2FiweDHmXbfkmaQ1TQYNcGGo4cZDxZAOuKGz8ouhJxh%2BTw4%2BgAtxA11XIZ3oEfc43qyHWSoqi7osAAtRvhdwzQPFVesoPUHxrG6JHVtieuF4YWthk5NOWpVwak2268zEkDTslVHfVvnPdRXvLk7Vsf6iGtl%2BMJMBzW7tdCFPOq2tucoF%2B11WhuNMzCaaR501rpW89bGJ%2BmZ%2F7Bsrt%2Bm4NtKNSN3oikKt%2BUcWUxhbPK%2BAJWQTTUa5O5ByesQjRnQdrXCeAyOGw%2BdB0LSxcx%2FQRXfRfMLLCxr8GOqUBVKXQQyBI1%2BJhLQO9SWIh0BnF8fzEmNT%2BKsGq%2FX0B1Opc%2FrVvbtxA8oArlM7wt9DwKJzR0yevumpygmGn%2FmtHvoJROy7kETkymQfx5h4An2%2B9hYSFYhosi6Uxl0oeRRaDiDUXGC7Et8ENxKz%2FxlObfESQkbxEmhcFktsvGCNAKKgzgY9rsy88KawYO9XG9Bj9c19n7nYXuisSlKB8%2BG3c01OW9a5A&X-Amz-Signature=a68eca4ff20f4341d73a1d31bd0951020087189c901b41317b08e8dbc7ee397d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HG37HHF%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwfQxpCUW69ftHavMUUVlI73CS00qXB2eLx3%2BCM4ClfAIhANTwOaVKpzhvgEiQXOTBiiahgnr3xUSY%2B3i8DBL28l5bKv8DCDcQABoMNjM3NDIzMTgzODA1IgzIeWYyk5pfQ4H7Bb8q3AORsjc2l2hNscQN0H41qCo%2BYqbrl7yxQD0aayo9a9TYFbiYFQqq9c3O3%2Fxf29UnDF%2FGHUu7Cu8UAjx44fSNKSM%2FzTDzRI6Ee5IHSCAtRtB%2FsowPPGBaxJKssQqK9DmUEQBeENBF0XEObBc7xLBEB19r8qomuZSqTqn6tvSeJTD1VxdVlwEl3ma0RAvYpTR01Bt%2BEbWTK8rKwoWMQ%2BPeaFfHOvsx3zpy%2BaGNaYznwksVZvAFQfAyuih2xVNpX9N03Pvb1CKakA5M8e1bESim1XLVNlZlU9ak1ZZsY4fyqVDVoGXkqhsfWNdTgaOqVdym6h6MOqcKAmTgHx6sNMz%2BnDxFgNLo3YoE5zXwLBkbt50iFtddJSMHx%2FpEJNWLCZJPY%2B2oFwYKk%2F6OjR%2FdtJB2VslQcKv4J%2Bm3wlNQn7%2F8Y%2FjuEDXyzVpf0NH3nqj0pFTBcUC7RpSVZC1lGD%2BtlW%2BWwcOjtMSXYEFLoPNW9CXkghqg5rcbjBTLUFN0E2vkRyD02PBLlgaAT%2F8dZ2z%2FsJID5rLTISCGNNqTVVRVpHnY46UU81tvB4OwGCpcl6C4Onxsrk76uu6anTzzkymgVn9BakkU3nqwiTShD6hMagDWtPspZQHZVZtJh5y2%2FR76hjCLw8a%2FBjqkAeoLfV0ds2gtQ4jWHI1XlEunlXBjqrmJ7z2Qux33rropK9tUxK6%2Fa9H4I8I22YLWiGtlT2XJnwm%2By1gtqhIOoauC%2BZtKjDhP7cmHvyMhukpt7TADhGIFy%2BsVuc9sRBO3F3LJK73DA78GzIfTAIBdLQAalJ3gtq0wvm2dkydKVsfKOjFOAQa0Af%2F2NHOtibRejDcyZsRnmJjD5cNbKFm7%2FdI7X5Do&X-Amz-Signature=a624529d4a3e6be7eea29b20d7b71411d3521614a75c94b6064534b2a991c2bc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RENFLUI2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy6W3KEqwG%2BKkg%2BKccYm7QMQMa4gUJ4JXu98Gb3Dy8VQIgJ1bz4zuqqo5bbq5Qx5ZloznzHpwkIRPQtuPzhuN0F4Eq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDESls9x7LQ16PwtX8CrcA79X2obGXS7ZTe52SEGYTkqXxpRGpr5jRNEVcOdFAG2efEJ3X0vXpLNpRSQvu%2ByD7nOV%2F800Nz5yHdorW0RrPWQcd5BMdbPfeM0OeXbPuv428uCoy934wXb2kfbBSMfjWdbgcFLT6fRM7MlyAOkg0vrW50vmS2YERHEUrmHoH3962nqz51TPx4MMDHQgBmuRuNuyWrI5PktF6dqoovQ19SeH7Z3p97LyiRzlUrQLfosnWpA7W8Ob5bVffh0dNtWif8nxWqugBaAQXTDNHZ30vJ%2BC61jMj4cYLwxaZjVvulZipdsQyZLY0YdFnl3vyTNzqmbDKOqzzaI1FoMqp932vdJv0q%2BPRwCltS90%2F7OwUlgV09XWdi%2F3imXOwn%2FbyjRiIBjy77N1wL13l1xtA4Z4PfB7TNdz3oeM5FgE5Fvun6A1RgYxvLyRyVUjJd6bCkKRDOA0dNm0lfVcGZYFJzbblD%2FQeh0MfWfAH1BEgkNuj63HXKEVTBCAo53jhlUSQ4VV3bjOidVKG7MAD1y4WTmg6SeWelAlQIXJxhw8BrPtyRUJglvtmrV%2FleDCT75skCW8Vqdyuga8q%2FvgxDVCo9g3nbYaViA7PvsxIs9mZaRgHlLzrirVZRAirNAGws8dMOLDxr8GOqUBIp4Q5l4kLR6GwFx%2BqOd7NPQyQWy3S0coJATsCwzKSdJ16Ael9oi229%2B4ggn%2Fo9QE3RQ2Vbk6mfzxi25inQIPE9d%2F1xnAjTi5r%2FJ5APpmBrbVWsTVfFzaG3EwgnNW7067OncZIpb3RtVVWJSUZWDtoEJd0cf1gV%2B%2BQJhJFhzLZmrKw8cJtgk2toU1EeerkOk%2FC2geMl9LD6ojtz9%2BX0iMxCzclCHf&X-Amz-Signature=236c1c2b739c297d8442a4b56a95db71eddea6bdba72d41b8fa26de5dda35fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZPDNLJX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2FjswbsMuSFqS%2FslKRDj6IQuz1rI8U215uDMD6OBMeQIgJjPL53Lqx2fgDxwJAN5eRaCsp1oEG5Z%2BmOa2MCUnGPUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGcPWWaB%2BaKvpDiXpircA5HQ1kuXa%2BWOwD7viQhLfaQ1kvkOLjmMQx9%2BJUgxynjVlZEFhAAVLXEf%2F4zTlC3oTdemG2Wvsv%2F%2FRn%2BhpUqSXM7jaf62cMD0wHJfXAGuTPJViSHfpdgYNY9hiwaoBIgmWt0RgF0O%2FFfy0nVpdlRuEPZyoaQpCDvpmb0Xd8SW1mWs9vyYoBrCXj09GFuy02DIjjdG%2FZ3XHm2dd2nCiy6YZvZbZf%2Bl1Nvzi%2B3E9aYDsrvmZpH5NDawyxLH63%2FsuVmvVEMI%2Fcn9YhHl%2Bk%2FuxwMCNxXwQu6X5bjbPsMB8m%2FqnSIyEuN8Z9gtIZ4NwqxftMCByksLZncFqHa5P2HzO9ydzBK81qz76Ihu5EP0%2FiweDHmXbfkmaQ1TQYNcGGo4cZDxZAOuKGz8ouhJxh%2BTw4%2BgAtxA11XIZ3oEfc43qyHWSoqi7osAAtRvhdwzQPFVesoPUHxrG6JHVtieuF4YWthk5NOWpVwak2268zEkDTslVHfVvnPdRXvLk7Vsf6iGtl%2BMJMBzW7tdCFPOq2tucoF%2B11WhuNMzCaaR501rpW89bGJ%2BmZ%2F7Bsrt%2Bm4NtKNSN3oikKt%2BUcWUxhbPK%2BAJWQTTUa5O5ByesQjRnQdrXCeAyOGw%2BdB0LSxcx%2FQRXfRfMLLCxr8GOqUBVKXQQyBI1%2BJhLQO9SWIh0BnF8fzEmNT%2BKsGq%2FX0B1Opc%2FrVvbtxA8oArlM7wt9DwKJzR0yevumpygmGn%2FmtHvoJROy7kETkymQfx5h4An2%2B9hYSFYhosi6Uxl0oeRRaDiDUXGC7Et8ENxKz%2FxlObfESQkbxEmhcFktsvGCNAKKgzgY9rsy88KawYO9XG9Bj9c19n7nYXuisSlKB8%2BG3c01OW9a5A&X-Amz-Signature=096977e004ac16eff9633e9a06167b902d82516b70cb576468846bc90b5442af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
