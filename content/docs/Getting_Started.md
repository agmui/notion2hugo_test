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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ23K5J%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPt3Wm7%2BDXEs1cgSZh5wOrS96lzK3wYQI%2FWOqDQCTrgIhAP%2FEHUt4AzKHCG%2BkjLpuqvKzYNjzwNWQ8XbUbiHUHgQrKv8DCCAQABoMNjM3NDIzMTgzODA1Igxp%2FeEUCJX9jbQRyJMq3AMzgo5YEz3Ok1NJm9IoKfLswLRAXzf%2FNM5dP0XpaUUhkbbbKxPtPoA4syWQZQn9t7ILvIelp9pAwtd%2BFqXH4AgptQ6JtIGGYC8cW1yQPSR4kBw83n8m0dGKmwU1FZKHFA3iFZLQ%2FoKEvzLz%2FnSHEab1Ups2WlIaIGZ4xQ2A%2FC8WOArhcJiPNU0SPVIBxxrCq3EBqVs7VrPu06A7U04o4IWyYUfZ%2FvhfNHU2oXwgnWjfrLRADX5wPawHhJMnnnqrwbBLyBoC8gGpGHGddPL5EaPHPxmN2GDkvQ2AcIx3h5WrYsv%2B9nZ%2FUxuA3mv%2B3evrLRxAFtKkcJPK2yTP4OavJ5w1WYhyVNdm84V%2Bw8P7FhFugWyCLA%2BQzVYp518JuzwpysfgxYua4pHXzwYtdsuq3E8BJoz9LBmV9ZgiVusJgNE8A9RbTudBahiPgTCd5%2BUTB4vbrn%2B2xXZTY22xwuOgjPb9%2BzEhBmBMJ%2B9CkWP35hsXIAPfi%2BlJIo4OczGvAs%2BY%2FD8%2BG57wOrVS5LWd3My8figs590rZViOJWO5DYzovJqyAg20ngo%2FBYk0N%2FcXIGp54kQwFFV%2B74iGXa4GgL8tu7%2FEwy5vQ7lHqAjn87LCOgIA2YDtiyG660ZgthFkmDDugdi%2BBjqkAXCXLCIb5MGjuJIHqyhgmi2xmp84kIhpBqOR20t1pMbbsljrfAPHw0jCQDd73KgFdneHfAakaRbBrXxW93DMKThY3%2B4hQOfGqhqHkONYH4TD3ORwY1P%2FVsRQA%2Bp2UPWw%2FomaHkNw6NGZTilBV0oNQsX3xM2tq5tV1PIe9oTN55YXUrOT5vhw8pq5Pl4GAVfLHvfEv%2Bizr%2FM3KDNcRbu%2FPfAHtvps&X-Amz-Signature=585b7f978c4f3fdc1f4cc7b3458458f3af4c9b709883c2d469d0dc88d20b6196&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ23K5J%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPt3Wm7%2BDXEs1cgSZh5wOrS96lzK3wYQI%2FWOqDQCTrgIhAP%2FEHUt4AzKHCG%2BkjLpuqvKzYNjzwNWQ8XbUbiHUHgQrKv8DCCAQABoMNjM3NDIzMTgzODA1Igxp%2FeEUCJX9jbQRyJMq3AMzgo5YEz3Ok1NJm9IoKfLswLRAXzf%2FNM5dP0XpaUUhkbbbKxPtPoA4syWQZQn9t7ILvIelp9pAwtd%2BFqXH4AgptQ6JtIGGYC8cW1yQPSR4kBw83n8m0dGKmwU1FZKHFA3iFZLQ%2FoKEvzLz%2FnSHEab1Ups2WlIaIGZ4xQ2A%2FC8WOArhcJiPNU0SPVIBxxrCq3EBqVs7VrPu06A7U04o4IWyYUfZ%2FvhfNHU2oXwgnWjfrLRADX5wPawHhJMnnnqrwbBLyBoC8gGpGHGddPL5EaPHPxmN2GDkvQ2AcIx3h5WrYsv%2B9nZ%2FUxuA3mv%2B3evrLRxAFtKkcJPK2yTP4OavJ5w1WYhyVNdm84V%2Bw8P7FhFugWyCLA%2BQzVYp518JuzwpysfgxYua4pHXzwYtdsuq3E8BJoz9LBmV9ZgiVusJgNE8A9RbTudBahiPgTCd5%2BUTB4vbrn%2B2xXZTY22xwuOgjPb9%2BzEhBmBMJ%2B9CkWP35hsXIAPfi%2BlJIo4OczGvAs%2BY%2FD8%2BG57wOrVS5LWd3My8figs590rZViOJWO5DYzovJqyAg20ngo%2FBYk0N%2FcXIGp54kQwFFV%2B74iGXa4GgL8tu7%2FEwy5vQ7lHqAjn87LCOgIA2YDtiyG660ZgthFkmDDugdi%2BBjqkAXCXLCIb5MGjuJIHqyhgmi2xmp84kIhpBqOR20t1pMbbsljrfAPHw0jCQDd73KgFdneHfAakaRbBrXxW93DMKThY3%2B4hQOfGqhqHkONYH4TD3ORwY1P%2FVsRQA%2Bp2UPWw%2FomaHkNw6NGZTilBV0oNQsX3xM2tq5tV1PIe9oTN55YXUrOT5vhw8pq5Pl4GAVfLHvfEv%2Bizr%2FM3KDNcRbu%2FPfAHtvps&X-Amz-Signature=91d5f60619081cd37f7de051419346fe56f94086054ff129878902140667c080&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X6WZHSY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnG%2BqL3ssC67aXYPh6OISpD4P61vtolTC9tS1U%2BvFCzAIgJLuq1jjwKj8X1qO2wMVrid%2BNJxT6YnHgMJFYHV1RhB8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHRzjRTre8HW71e8dCrcA6Qqe56FruEN4PzsA1mEQLTzzj2slewr2h6DZkPJt0q1%2FSG%2BuvyEzN6mvDyFiS4l53HQzvXLdQgnj%2FcBbTaWh65JqlhaXDbyROwNStkSMqzVwD%2FKrZ5BiYmt%2FTMZTUQlK2h%2FvTIU28wqnpfIqPW0ak%2BeAyzUympZWN00ybKu7JUUQtal%2BmNuCyJ4pAcPoRC1qMJy%2Ba7a53Sw%2FMhJnnhUwYvQCtbSOpavd%2BTzHAGoKmHbZlttwRzQLEPyCSPupOc1jKBejUQMqKFtpvce7tJp1Sp2DcOtklkMHBjH03cXMPu2FNBl6AMxmgyib5OgQtzE5WLc287ggDOtDb4zrCDfCiRvk2Id%2B%2FH2dN8BCwqWcbyu5dsRsys6uvt4cnZcVAPx1HwHaLGf6LjtNGSkNUBx6trRtB3IfD0L4RGyOWeTcYKiT3gFSsLWvx1moYTKKh2tSJ%2FxJJqXIOPJQN7fMgVIPb1J%2ByeGhC8DCHqgSIy7V1lzzxCPz96ndRg1gpNlsxa4izIq7ypwVUD2wBaQY2ATyu3vQyW7ZLcvFBvbp5fHlO9ES4ELWk%2B0HzgJkmmxgQkCneKYQN0WioQAqxTKYviwGhWasze2YZagInygXEWcSZ4GeQVKDL%2FjmU6NySZ%2FMIeC2L4GOqUBjWmLu28Xcr65EwJXEx4iwVbe30Q2AUkUysEHEoCWDfp%2BaLdv11S%2B59mjGP%2BinLyp%2BVrDeZsK%2B2PgV0MpYte62Nsm5FHyK6HsHMCVAUa4L54xXZHU8kvcIMbi5vYfcUTrRfO334H8HsS6tHlyeeJNvJclMAmfWmb0fEfUa9Xk3ZMKRDXx9qCl80QjTL1E5%2Bb1HSh5wlmNRBEw3ZKvEyMqbnGh8f1S&X-Amz-Signature=62cad519eb10cf70b1bfa9081dd761d5fbcef82adc21abac05d12b939640ea46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QKBTEU%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEzUtTrx1yC7xe0HqqiTLi8nGm1W6K7xjb8rAG1Yu9OwIhALu019BsYTg%2FUv8aAuswAz3g9Bljfzq6phH6peDYekmXKv8DCCAQABoMNjM3NDIzMTgzODA1IgyDH2aFWXiwUTCXoxQq3ANRrwwFP5VHZD9axjxLE5rjaXN3zbNSpxui4Me7EKsWRG0rdXwq8tSUOnnOZmnic7jfl%2BKaXSqjQw5sYohenhTm9zCR1%2BpHYt%2F%2BooBVZQB6CBvcsQASW8%2FhwoHDiK0Tfvz1BktXXh%2F2zWKhM6Xs5%2FoUFfqUuSfTI7EHCMiVaiz8X73wXGjE%2Fd%2BSSowCRMasg2H8SGxmjYzNFoIxG5E9WNC8AbJ4v45dmq8%2FusS4FIed5uFklEc%2BbQmqL7tBwJ6doB2DHlnfAmruhJ9FNgMho8ndMuhiwoh2PnN3kLYxNJ40TChMXiQ4skymPgL12WthpCQxC4%2BoHoTRczDmJ16CwqZ8WVuLrdv01hgRl7fRbyowtzjMz8i1U7inFdYMOXu3bU4urt2f1siqtB2KPNaJ%2BI2EkFCfLyGWsVLmVVxlZosFlGEgXMHAcK3OB5o0RlH6bXIEmgL4vHiiOgS4OoeHxqFMXTF0IAlY97Ik%2FFSheBgV%2BsF70ApUrjS7sOqcVz4BAwf5YanE63%2B8PNlY%2BIJ1EBfhsExIgO1f53PNFXsU7LVs3c1qKyo6L6P8aSLPhsR1KCswZY5JUElRxZzNAfl1lkgA5TJS72y8lkkEtnvmoaE57eZlcWhJAgjjUCz6GTDdgdi%2BBjqkAbL3cLJN9Fhxx08NyGb3uhrs2kfCceOH7R0xJF4oHpNavjFpr8uhfwDP7JAZuvpSg1gdMA0p9EBG4U2moS7mGMDXEDE3VvfdkG9%2BYSnhDIle4NTHzmNV62iqu%2BhNuyrnbGqo1e4DJQuEfZ30n%2BKFdyTcwPTOW6quVN%2B0nbCeV1o3wnGwMEQimcygcKzSJ%2BPSxF05p1eXTolM4V%2Fh2fnHZLh935CM&X-Amz-Signature=1e632ed1d15ba288253e93060c5656c092e4f8a8e4e98453fd14fb84908f6a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAJ23K5J%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTPt3Wm7%2BDXEs1cgSZh5wOrS96lzK3wYQI%2FWOqDQCTrgIhAP%2FEHUt4AzKHCG%2BkjLpuqvKzYNjzwNWQ8XbUbiHUHgQrKv8DCCAQABoMNjM3NDIzMTgzODA1Igxp%2FeEUCJX9jbQRyJMq3AMzgo5YEz3Ok1NJm9IoKfLswLRAXzf%2FNM5dP0XpaUUhkbbbKxPtPoA4syWQZQn9t7ILvIelp9pAwtd%2BFqXH4AgptQ6JtIGGYC8cW1yQPSR4kBw83n8m0dGKmwU1FZKHFA3iFZLQ%2FoKEvzLz%2FnSHEab1Ups2WlIaIGZ4xQ2A%2FC8WOArhcJiPNU0SPVIBxxrCq3EBqVs7VrPu06A7U04o4IWyYUfZ%2FvhfNHU2oXwgnWjfrLRADX5wPawHhJMnnnqrwbBLyBoC8gGpGHGddPL5EaPHPxmN2GDkvQ2AcIx3h5WrYsv%2B9nZ%2FUxuA3mv%2B3evrLRxAFtKkcJPK2yTP4OavJ5w1WYhyVNdm84V%2Bw8P7FhFugWyCLA%2BQzVYp518JuzwpysfgxYua4pHXzwYtdsuq3E8BJoz9LBmV9ZgiVusJgNE8A9RbTudBahiPgTCd5%2BUTB4vbrn%2B2xXZTY22xwuOgjPb9%2BzEhBmBMJ%2B9CkWP35hsXIAPfi%2BlJIo4OczGvAs%2BY%2FD8%2BG57wOrVS5LWd3My8figs590rZViOJWO5DYzovJqyAg20ngo%2FBYk0N%2FcXIGp54kQwFFV%2B74iGXa4GgL8tu7%2FEwy5vQ7lHqAjn87LCOgIA2YDtiyG660ZgthFkmDDugdi%2BBjqkAXCXLCIb5MGjuJIHqyhgmi2xmp84kIhpBqOR20t1pMbbsljrfAPHw0jCQDd73KgFdneHfAakaRbBrXxW93DMKThY3%2B4hQOfGqhqHkONYH4TD3ORwY1P%2FVsRQA%2Bp2UPWw%2FomaHkNw6NGZTilBV0oNQsX3xM2tq5tV1PIe9oTN55YXUrOT5vhw8pq5Pl4GAVfLHvfEv%2Bizr%2FM3KDNcRbu%2FPfAHtvps&X-Amz-Signature=88bf0f7801f798d79ef799be96b146ba105f24e6293777a290041966d52649f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
