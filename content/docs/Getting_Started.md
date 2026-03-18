---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEZJKM2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCIzmD8xiNnTAc5%2BZTgheS1LjfVTtT1krGTTtamgacETAIgIeOOCvQH7%2F8LR9e4KhWVHa90fVswJxy4UzAcR95yCnMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOet1JqVxGSmvsGGdircAxkA2otu85vQDHWwcoDYYybQlFl5v6psJ3zw4VFa7uvYgt5RuW%2BFF%2BL4o6miRlaBner%2FE6fzD7Yq3%2FGMDHkhb4rXrIxcwMG2j6F%2BYtq4EqFGUu09GTXJf1cpWZgeybzQTEMofjEz%2FZ1SCpF0DSqsF9t8xoPBW0gPF9FvRCWNDaNyPZT3F75kmFaf7Co9Nd98AEwS9iiy8c%2Fi2jyDsIVOKygDoMZnf0tK1dsuMPEa6YbFktckcnBmCy05Tu%2BlrlAWZbrABvt%2BLUTDktxpGvyLYNW2w4YTDXtr%2BPzndbdYfxZW0SXF4conpqO7twmplB3rneIXeKAnWn%2FwLyuIr%2BNUsgp71DJ5IMVtv1hsqW5tjEMmU7EGXENKfiwyJQr3R6x8JPRZ6cDCeNJ%2Fz6VrUc1m%2Fpn3TO7nctA%2FM0pjjYmFTHgRH0nK79CnnE9JEg%2FpN5pC4uFW1HA6IKwRyq1x6bmXce6snfQQ01Is1YAjx%2B4Fe1RDzHJM7bQuWP%2BWzOP62B9MPOJ%2BhEk3YaoLgnfn1mpm%2BAGkPS7tPLwr6ZWbUoPgEULO4cjDhhEHLN2Dqu5xa96G6YrdeRJY%2BHgE5ukZMwGJB%2BecbeIkicFHQHlmc5JJtgZPpFESUpqMdahJAy2yMLfp580GOqUBAM14Kilzyg5D92GtMPzHUbOvk%2BISYNNVXiWsk4PvgswXNS7g62JXgVxZHOEDYaMf6O%2FV%2BoR8Cj2mt3njUYSw%2BtdSNpCeA6EWCbzbTMueixtLBsW2SmyifBgAhjIsx0gkKp7gRJbYbIq0DZtAOj4tx4G9sQBuP78hCw9ltmw1aPEnB%2FCc6IRPNcY1ue%2FSrGgXAWLKukw5jPBFii6Urqac81f5Gsj5&X-Amz-Signature=659efb6b4846742d1bab2d22c8bdbb3d489d47468ca92e162bdc89c0f7720364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEZJKM2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCIzmD8xiNnTAc5%2BZTgheS1LjfVTtT1krGTTtamgacETAIgIeOOCvQH7%2F8LR9e4KhWVHa90fVswJxy4UzAcR95yCnMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOet1JqVxGSmvsGGdircAxkA2otu85vQDHWwcoDYYybQlFl5v6psJ3zw4VFa7uvYgt5RuW%2BFF%2BL4o6miRlaBner%2FE6fzD7Yq3%2FGMDHkhb4rXrIxcwMG2j6F%2BYtq4EqFGUu09GTXJf1cpWZgeybzQTEMofjEz%2FZ1SCpF0DSqsF9t8xoPBW0gPF9FvRCWNDaNyPZT3F75kmFaf7Co9Nd98AEwS9iiy8c%2Fi2jyDsIVOKygDoMZnf0tK1dsuMPEa6YbFktckcnBmCy05Tu%2BlrlAWZbrABvt%2BLUTDktxpGvyLYNW2w4YTDXtr%2BPzndbdYfxZW0SXF4conpqO7twmplB3rneIXeKAnWn%2FwLyuIr%2BNUsgp71DJ5IMVtv1hsqW5tjEMmU7EGXENKfiwyJQr3R6x8JPRZ6cDCeNJ%2Fz6VrUc1m%2Fpn3TO7nctA%2FM0pjjYmFTHgRH0nK79CnnE9JEg%2FpN5pC4uFW1HA6IKwRyq1x6bmXce6snfQQ01Is1YAjx%2B4Fe1RDzHJM7bQuWP%2BWzOP62B9MPOJ%2BhEk3YaoLgnfn1mpm%2BAGkPS7tPLwr6ZWbUoPgEULO4cjDhhEHLN2Dqu5xa96G6YrdeRJY%2BHgE5ukZMwGJB%2BecbeIkicFHQHlmc5JJtgZPpFESUpqMdahJAy2yMLfp580GOqUBAM14Kilzyg5D92GtMPzHUbOvk%2BISYNNVXiWsk4PvgswXNS7g62JXgVxZHOEDYaMf6O%2FV%2BoR8Cj2mt3njUYSw%2BtdSNpCeA6EWCbzbTMueixtLBsW2SmyifBgAhjIsx0gkKp7gRJbYbIq0DZtAOj4tx4G9sQBuP78hCw9ltmw1aPEnB%2FCc6IRPNcY1ue%2FSrGgXAWLKukw5jPBFii6Urqac81f5Gsj5&X-Amz-Signature=7f7e73d499a4e1ddbd380dbbc42e3bda526426edb93d1b603536f710e5abd353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEZJKM2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCIzmD8xiNnTAc5%2BZTgheS1LjfVTtT1krGTTtamgacETAIgIeOOCvQH7%2F8LR9e4KhWVHa90fVswJxy4UzAcR95yCnMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOet1JqVxGSmvsGGdircAxkA2otu85vQDHWwcoDYYybQlFl5v6psJ3zw4VFa7uvYgt5RuW%2BFF%2BL4o6miRlaBner%2FE6fzD7Yq3%2FGMDHkhb4rXrIxcwMG2j6F%2BYtq4EqFGUu09GTXJf1cpWZgeybzQTEMofjEz%2FZ1SCpF0DSqsF9t8xoPBW0gPF9FvRCWNDaNyPZT3F75kmFaf7Co9Nd98AEwS9iiy8c%2Fi2jyDsIVOKygDoMZnf0tK1dsuMPEa6YbFktckcnBmCy05Tu%2BlrlAWZbrABvt%2BLUTDktxpGvyLYNW2w4YTDXtr%2BPzndbdYfxZW0SXF4conpqO7twmplB3rneIXeKAnWn%2FwLyuIr%2BNUsgp71DJ5IMVtv1hsqW5tjEMmU7EGXENKfiwyJQr3R6x8JPRZ6cDCeNJ%2Fz6VrUc1m%2Fpn3TO7nctA%2FM0pjjYmFTHgRH0nK79CnnE9JEg%2FpN5pC4uFW1HA6IKwRyq1x6bmXce6snfQQ01Is1YAjx%2B4Fe1RDzHJM7bQuWP%2BWzOP62B9MPOJ%2BhEk3YaoLgnfn1mpm%2BAGkPS7tPLwr6ZWbUoPgEULO4cjDhhEHLN2Dqu5xa96G6YrdeRJY%2BHgE5ukZMwGJB%2BecbeIkicFHQHlmc5JJtgZPpFESUpqMdahJAy2yMLfp580GOqUBAM14Kilzyg5D92GtMPzHUbOvk%2BISYNNVXiWsk4PvgswXNS7g62JXgVxZHOEDYaMf6O%2FV%2BoR8Cj2mt3njUYSw%2BtdSNpCeA6EWCbzbTMueixtLBsW2SmyifBgAhjIsx0gkKp7gRJbYbIq0DZtAOj4tx4G9sQBuP78hCw9ltmw1aPEnB%2FCc6IRPNcY1ue%2FSrGgXAWLKukw5jPBFii6Urqac81f5Gsj5&X-Amz-Signature=86967ff5fd9e94b8c999b23eeffab7253bb7cd441fdb47b9a9b3cbb36cebc0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FGUAJ2Y%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHO%2FAJQ8eepXnmugifnPIatg48hNDHQH%2Ftdh%2B01n3tSzAiARAXnZXfSxPLwNnJ7AZB6kVucOvOuZSBMU%2BMo2J32z7iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTSs48xqdGv4juHw7KtwDlHFgbyX9D93wAWcOk0IvN62ghWn3wytNm5LqrWfQFSxi6EOlnFTnzsxXrZ0foRbKFUTeG0vC61OWQciLY4d5UvwgWXthu0sXHFT3vgmK4ElnNpbvbosfJZ8DP4VRWqt3xpNgzIAqondvq%2FPm2bQa2SQNAoC59uYDCiQb4107j4NpmOLz1K5UZEwFMcN9tUwFWpoaEk%2BldVL7YfRsJia8FJyWDiAmAscqwzj%2BXHNNbT91%2F75DkJbv4GslL8vjUuOx%2BycYhA97W2Yg0o1e16AEnPyOLmlIh9McC%2BQzYcwijQ7D6leoWOugYyzKyBLGC64oql%2FoGFQn%2BlZIq1J1OdUIzwAP0v7%2BWQvgWp2%2BIo27bj%2Fc%2Bc3CL6a71hf2KTW2hZ5nG5B4Luc9JxfpTWzpJ9uEyoPpVTnYPme3ODwQaVoTFJri9z5juDQ0WUIfrgI6iLa%2B9anRVsKl5%2Bax27nvGSUC%2BSuifDDCXUBPdrWuL7Ixlq2aX3hPimDEuSIsbxGKiBfxVd7s5guIq1itsgxHcV0RK%2BKa8HqoJ3ZWuNGV%2Fc5UVW3BUrKtu0q%2Bj4D73iNKn7ENVHvsBVPZHahB5SP9OS4G8mOmmJqmlvg2X9vejO24fCnSgyzRgRKr8w%2BvzlwwjurnzQY6pgE1DbY9gmAwZVvvQg7qUECn6XA8%2FrmBokioXondi9gVvFbY10PoZDCMIwJUSj%2FiJY%2BPmA4f7YupOYBwFy8M2ltmt5VBkjzZ81J%2B1uOPj2edHwrWGwEm%2FolHVdgqlEud8hPiUDAoRN2R5py6UYrYJ%2FpUq1kY1BLlcCTgs16eKlcVUg3A6qHQX1XBJuNTc8tA684YwidK%2Br8DLIwKC1s%2BffMv4sr7RAmi&X-Amz-Signature=6acf667fe90f44f6bab20ea5eb668aa69a09a0ac2f22d8a4de0344cddeb7951e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UUTBGG%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDwTv0tG7Pppj74sbSjo07210SvRQtDs8sQYoQBwRmYOAIgH3adeXQLE%2F6GxoedbIrD9RX4s%2F8ocKlCWCVd5to0h1IqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6Irn3GNBFWFIwDZyrcA417a8r%2FTbGeKXi4jdysdxoC2Uw4o9voe2QxHMT0E%2Bq6QWuYMf%2Fv2IIhrq8wprzlYWojQqgua65XRyHHFq%2ByS%2BDsMIjZdQhOabY3dWJ1oC6o%2BuwZ5xHt92LAr7nMoPRuIZc30FQ737lu3d99YtusaMTZ3rpzKskXjNfTi2twAYhoBq1nu4kgPfpS3kdgIgaCtq%2FMI33sCUhBHuZtIvlxPCVCNmO4yivdZN1OVU8cp0Q6koHgVlPWejek8TUNfk6RGqKDCYRQ7pqz%2BaJtw87Pohu3Xksb5hzoOvIc%2B8gglK%2FM7ftXhWrrurfdED99aELT95tO%2Bg6VTUJ7Ejh7sbHTtymv8U07TiPd0WO5MOcFRNhm6GncmiRh75aZwUJz5YL4scW83Q5UHInpPJ%2BNaMuC4bM9F0T%2B4%2BkGdMARhJZRHPQCbHjF75x7CH%2B3H%2Fe2IpTCSvDcQIaI7H%2BvG245xdjGEZLKiiXZpBLWNKmTf99HZfW5gh33LSQtPqxSpg4YvaodF%2BURwC%2F6Ii6Kz1Fc2%2BsQ9y5AIQgnqdMFnXyYnXDmW87qoxHRa1fR28BUYlTiIGmeq%2FoBNV9zDfo2UPd3Wo4T4rBxaKIgTQQ0f95SNXeZQ5Sd9FHeNJoINVOXwwwyMLbq580GOqUB5naC5H0YIfRa2w%2Fy7lTw1eu3H4acj8SrXxFj8ZbsxmcIOyIhnqt61cEzyJEKFF8sMPMpYT4LumKcIKRzHEE8C1zx0WpEGLInpzyvndMb63%2Fc4Fbh3NfqyUYEsCMrWbtXaiGr3%2BkaH98Q4MUswPKm3Ce12%2BvdoCiFwj2SQoh6eneaDVAcE%2FZL%2BMxwpnESnoq1nbVjZ832qZp1Ju%2FzjdcmofrqeHkZ&X-Amz-Signature=c8178d5ea70d552bc4592c9713faed22dc470cb5200c46fdd478b6e239e1298c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MEZJKM2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCIzmD8xiNnTAc5%2BZTgheS1LjfVTtT1krGTTtamgacETAIgIeOOCvQH7%2F8LR9e4KhWVHa90fVswJxy4UzAcR95yCnMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOet1JqVxGSmvsGGdircAxkA2otu85vQDHWwcoDYYybQlFl5v6psJ3zw4VFa7uvYgt5RuW%2BFF%2BL4o6miRlaBner%2FE6fzD7Yq3%2FGMDHkhb4rXrIxcwMG2j6F%2BYtq4EqFGUu09GTXJf1cpWZgeybzQTEMofjEz%2FZ1SCpF0DSqsF9t8xoPBW0gPF9FvRCWNDaNyPZT3F75kmFaf7Co9Nd98AEwS9iiy8c%2Fi2jyDsIVOKygDoMZnf0tK1dsuMPEa6YbFktckcnBmCy05Tu%2BlrlAWZbrABvt%2BLUTDktxpGvyLYNW2w4YTDXtr%2BPzndbdYfxZW0SXF4conpqO7twmplB3rneIXeKAnWn%2FwLyuIr%2BNUsgp71DJ5IMVtv1hsqW5tjEMmU7EGXENKfiwyJQr3R6x8JPRZ6cDCeNJ%2Fz6VrUc1m%2Fpn3TO7nctA%2FM0pjjYmFTHgRH0nK79CnnE9JEg%2FpN5pC4uFW1HA6IKwRyq1x6bmXce6snfQQ01Is1YAjx%2B4Fe1RDzHJM7bQuWP%2BWzOP62B9MPOJ%2BhEk3YaoLgnfn1mpm%2BAGkPS7tPLwr6ZWbUoPgEULO4cjDhhEHLN2Dqu5xa96G6YrdeRJY%2BHgE5ukZMwGJB%2BecbeIkicFHQHlmc5JJtgZPpFESUpqMdahJAy2yMLfp580GOqUBAM14Kilzyg5D92GtMPzHUbOvk%2BISYNNVXiWsk4PvgswXNS7g62JXgVxZHOEDYaMf6O%2FV%2BoR8Cj2mt3njUYSw%2BtdSNpCeA6EWCbzbTMueixtLBsW2SmyifBgAhjIsx0gkKp7gRJbYbIq0DZtAOj4tx4G9sQBuP78hCw9ltmw1aPEnB%2FCc6IRPNcY1ue%2FSrGgXAWLKukw5jPBFii6Urqac81f5Gsj5&X-Amz-Signature=7c9ee49d404bfe43d69ed294ac3957fa2d862f0d9e855cddc8834c4755fc9ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
