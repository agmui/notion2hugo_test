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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSKEKRL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGi5hJ2c76t%2FMBsC1gzCw25DwlzjR%2BJQYGwuYTHezvx9AiBEh38p0Lb3%2FKxT4QZaTMTqAovF47g53%2B2L0K31e%2BLWuiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK2VHA850KghcVA1KtwDEx6Iu5HVL9RCsJCUPfIC23teOfall%2FVcu6kOZPjYP3Ym3slAaikDCDF3R8B7Vu5PqpvMOd61vH8zxGULdx3as5N%2FC%2BVKh5HJHCdk15iPMwP1tjlHhptxC2N1zt3rEWZZ8Qoh81aTurLwt%2FsD6NLn7FYknlYfjX34okhtZNqgh0a%2F3RizfKH115r7FGLHx5P%2F6yeKlLy7vSLRWdpi7DJbQbW9il%2BgvZa2smuQ51v19dMA%2F2HYmDglHiB6Nfac1afdli%2FG81GuwvcRSnHmNPTzM1zYEVEjfPiQKtSE55rxQo2Dtd1pdG6KWRCR001ItsiaoioiWo7e2tVzo2GhwTYFtRr%2BIyPRx%2BfWJZB1X%2BK64C%2BvyG8VUwnlNEbd6MdBxPCmngKFNolEvLZturbqy9EE3nNWXgtPOgmPlsdc0S%2F8UnXykx6jtQLe8tBfaKtwgjXyWrJPrzU3kkRpJHhLgWfDPriIWuY20G31tI4S4Bzo52AfEN43vN0KBPvDPx1i6jgLG6mypvw6xSSipoEQNB48iyx88uWhDNCxpbqMa2kBOLTkfn0eLZb0eRLYImVdFai8Fwf3nCuqV3QbJULNRt9wZbytjX6GOhgcuNp%2B8RZCLEnzITdBZcU8U0g%2Bq1kw1YOIwQY6pgEBuwbPajnWjEDbsUvT4Fozt6%2BdOEwYR1S%2Blb6u5OZhpy6YctpJzA1px8xm5mvw4cIUpOtptQIYzKf%2BKFXYr7GCd7OwfGBBClTFznQRRwYzw4T4y5lPXbgU4oTP%2BQjREMlkYERA%2FebWsNn5hg0%2B%2FIuxmkhtocwqJd4JB0PUO1CX7zl4isQhipHMy3RxmB8s%2FyWpV8w46ZsFALcOB3D7sjg0jcfAczg%2B&X-Amz-Signature=4e939f5745f1273ed0039c893a6b2ee5b4c5547b076d92b7a5e6dee6e9337b56&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSKEKRL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGi5hJ2c76t%2FMBsC1gzCw25DwlzjR%2BJQYGwuYTHezvx9AiBEh38p0Lb3%2FKxT4QZaTMTqAovF47g53%2B2L0K31e%2BLWuiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK2VHA850KghcVA1KtwDEx6Iu5HVL9RCsJCUPfIC23teOfall%2FVcu6kOZPjYP3Ym3slAaikDCDF3R8B7Vu5PqpvMOd61vH8zxGULdx3as5N%2FC%2BVKh5HJHCdk15iPMwP1tjlHhptxC2N1zt3rEWZZ8Qoh81aTurLwt%2FsD6NLn7FYknlYfjX34okhtZNqgh0a%2F3RizfKH115r7FGLHx5P%2F6yeKlLy7vSLRWdpi7DJbQbW9il%2BgvZa2smuQ51v19dMA%2F2HYmDglHiB6Nfac1afdli%2FG81GuwvcRSnHmNPTzM1zYEVEjfPiQKtSE55rxQo2Dtd1pdG6KWRCR001ItsiaoioiWo7e2tVzo2GhwTYFtRr%2BIyPRx%2BfWJZB1X%2BK64C%2BvyG8VUwnlNEbd6MdBxPCmngKFNolEvLZturbqy9EE3nNWXgtPOgmPlsdc0S%2F8UnXykx6jtQLe8tBfaKtwgjXyWrJPrzU3kkRpJHhLgWfDPriIWuY20G31tI4S4Bzo52AfEN43vN0KBPvDPx1i6jgLG6mypvw6xSSipoEQNB48iyx88uWhDNCxpbqMa2kBOLTkfn0eLZb0eRLYImVdFai8Fwf3nCuqV3QbJULNRt9wZbytjX6GOhgcuNp%2B8RZCLEnzITdBZcU8U0g%2Bq1kw1YOIwQY6pgEBuwbPajnWjEDbsUvT4Fozt6%2BdOEwYR1S%2Blb6u5OZhpy6YctpJzA1px8xm5mvw4cIUpOtptQIYzKf%2BKFXYr7GCd7OwfGBBClTFznQRRwYzw4T4y5lPXbgU4oTP%2BQjREMlkYERA%2FebWsNn5hg0%2B%2FIuxmkhtocwqJd4JB0PUO1CX7zl4isQhipHMy3RxmB8s%2FyWpV8w46ZsFALcOB3D7sjg0jcfAczg%2B&X-Amz-Signature=29ac5ebf29a6ded1e4c4f11925d256e8183fd510ce4db3ae357bd02795adbd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSKEKRL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGi5hJ2c76t%2FMBsC1gzCw25DwlzjR%2BJQYGwuYTHezvx9AiBEh38p0Lb3%2FKxT4QZaTMTqAovF47g53%2B2L0K31e%2BLWuiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK2VHA850KghcVA1KtwDEx6Iu5HVL9RCsJCUPfIC23teOfall%2FVcu6kOZPjYP3Ym3slAaikDCDF3R8B7Vu5PqpvMOd61vH8zxGULdx3as5N%2FC%2BVKh5HJHCdk15iPMwP1tjlHhptxC2N1zt3rEWZZ8Qoh81aTurLwt%2FsD6NLn7FYknlYfjX34okhtZNqgh0a%2F3RizfKH115r7FGLHx5P%2F6yeKlLy7vSLRWdpi7DJbQbW9il%2BgvZa2smuQ51v19dMA%2F2HYmDglHiB6Nfac1afdli%2FG81GuwvcRSnHmNPTzM1zYEVEjfPiQKtSE55rxQo2Dtd1pdG6KWRCR001ItsiaoioiWo7e2tVzo2GhwTYFtRr%2BIyPRx%2BfWJZB1X%2BK64C%2BvyG8VUwnlNEbd6MdBxPCmngKFNolEvLZturbqy9EE3nNWXgtPOgmPlsdc0S%2F8UnXykx6jtQLe8tBfaKtwgjXyWrJPrzU3kkRpJHhLgWfDPriIWuY20G31tI4S4Bzo52AfEN43vN0KBPvDPx1i6jgLG6mypvw6xSSipoEQNB48iyx88uWhDNCxpbqMa2kBOLTkfn0eLZb0eRLYImVdFai8Fwf3nCuqV3QbJULNRt9wZbytjX6GOhgcuNp%2B8RZCLEnzITdBZcU8U0g%2Bq1kw1YOIwQY6pgEBuwbPajnWjEDbsUvT4Fozt6%2BdOEwYR1S%2Blb6u5OZhpy6YctpJzA1px8xm5mvw4cIUpOtptQIYzKf%2BKFXYr7GCd7OwfGBBClTFznQRRwYzw4T4y5lPXbgU4oTP%2BQjREMlkYERA%2FebWsNn5hg0%2B%2FIuxmkhtocwqJd4JB0PUO1CX7zl4isQhipHMy3RxmB8s%2FyWpV8w46ZsFALcOB3D7sjg0jcfAczg%2B&X-Amz-Signature=8916754a2b6fdfc55f068a4f5a61cef385ab3934adb087e2f04906fbb8a3212a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2R6UEH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEsmQVv1YJ59EwFy1%2BKaVQuEAeRFeOXE2RAoCuUwQdkRAiEA4%2BnoxocET1P5gmeubbaXcalxupmsJrSmMesd0y8AVwwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZWfWl%2F4V5aZ4%2BxSCrcA3iitlJDDXj%2FhwpT2frCs7hy%2B%2FO8dxfTZw%2BzflUcGvhLvpNWliJPDCTs7QS8sLqCuqCl%2F467NHwHg%2FK8P9e8yKylHAq%2FBzDJImTvK7Y9V2yyaKTm6Vy8hl%2F2dFFTKaAYvEe3%2FVjEmoeVKM4zhUM%2FVuCJCjuQ1rST1o6j5brHmiu4d1sTsjE2kb%2Fd%2FxI4skLwSuoJT3j5lUjZqYFDDeoONE%2BbRvgKRrB6PJR99LX3es9UE3JXUIFyAKsEDYf5jZ%2BYUN8AyjibeztgCcGNIt0eVSjqpo22Nrrnm2e7rJUNcIKe0MWtz0ijSXagRMa%2Fmal5WncGhQCe9RNrQepAvVi0felo0E9a2WA7LIjnWnxe6Se8j7BWGMAVrh%2FLkmiW%2BW8j62hXxwbn2yRYZW8QiYNHT3Cs%2FK0jN1DiWVA4WqObJV0SqTQJhOzXvUyRzz70TJofXU6A0bsYeNfk75QAcOQAV5jDjHnglkpWJ94mqf0AbuNXvM8J0fXCizMBwibw7I3gDPys%2BlbYq3HUqU8Ij7yGhb9aOD1bZKhS1KqMKySuDKynko0KQTDHN7ZWuycAhpY3mcWGGth0JInJXlMdiVwdgjqkE3mF0X1QFgtRm0Yh06maDJ96plSTavr23Tq1MKydiMEGOqUBjiZvVbRgbIj7uyg4nVsuNj3j97D1qND2WjDNyKmj%2FQqQpSeLyFn4b645njBS3BJ2s9KgECDUBUX9cEQ2LWSf%2FcHQnkne%2BWzn8a6mpCV%2Fj%2Bmq0lXrQx%2BlUFaokhzg%2FY3DNkUClx4bXlLoLkEgVdCkcypWKkkNSxx8DBAnlGNXbMnYlLJzPsoK7CQKqdvK40bosS76qTkr%2FPolq%2F8Jt780NT%2FmgEk0&X-Amz-Signature=03958b0703d6d23b1d683755a9be3750d794d87c8ae071ecbd324f306099f243&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQVSDMNS%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHZOzhKTjBZUL%2BcldPr1Tdp5TxEQ1rKTQqShu1A6i0KvAiBwdPDGNBZVgSv%2FrNEvdtn72j7UaBhg8%2B18cyJLWHdHliqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGSQUskYVclCedhucKtwD0RhNF4U1rVzEU42LB3x%2BUQtOSb%2BhDN102%2B%2FauuqZ3qYoY%2Bwbcu5NrVwXteE%2FLlthc5w%2FIRrhMybZi9U8bCWLAje2dqpUxQgTbnr1w%2B9kG0IXg%2Bkk5utru9JKyOfExZ4Ve8KqQe5ACq3i3IYj%2F7BwX79vASN9IonsBOO1hbecjn60gR7cK7FfL7vftEzmvVO6wipTOBLbsCN%2FAImrEXcv%2FQDf6YaKKrn7QCHCgT%2FyfDYoxMy%2BzSbtDGP2pxG2NeqjrNM9T1Z3RfJwi%2BxfTQRXYZ6MnGd4DCyQUKtlatfP5aLk2oEUNL4%2FJ69Gs1%2BQSG2kb6iW9IOe3Sl1CSzHAmflbGgqV6QMl%2F7O%2BTigJN8L%2BgGfAhl4QN%2FZt1fyVXjNicWnqxSFgg%2FB%2BgF5RBgubgpda8qGdzH8Ci9BnPylTLUG4xlnSfsOyFTYh1kcIlD6zwkMF2CSehBkgeDYbIIHux2rOyaYHmXG0GBnWgo3BAtW6Goux8KQETg6AGwM3111WSFnweycmLQUAe8vbS%2BqG2UIcbeUwCkuWwVVy80ypaJ3qBGNEyfzdXHMNU4wszygo%2Fo%2FczseAd2DseEbp1II7j7%2BGk4oBHpyfIdR%2BIamEhFKQ%2F4w7goV9vOdLNI94CowioSIwQY6pgGBZx1zlmg8mBM1ijLkxQFIVHGsV8L9aT4EvrPnN4FqfdZOqV4cmvQBXrBrc%2BwupjYoVbuomPXPmZVTUeF72rulVxlHh8woc161s%2FeBx2QjszVryDndjjhvoR6IUou%2FJHID8P4f3xiNTTZXrCZpJweoJgIF8ILDJGre47Jlqm9Dmzu4bnxp3peuq1WE2kevLjV1uvu3IvM5aVff2Dzs7Ooe97PoqsC2&X-Amz-Signature=6d540a8ffe5c3af26b23a16f2f27dafcf6afed3157e1ce886241d27d601e2589&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSKEKRL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGi5hJ2c76t%2FMBsC1gzCw25DwlzjR%2BJQYGwuYTHezvx9AiBEh38p0Lb3%2FKxT4QZaTMTqAovF47g53%2B2L0K31e%2BLWuiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKK2VHA850KghcVA1KtwDEx6Iu5HVL9RCsJCUPfIC23teOfall%2FVcu6kOZPjYP3Ym3slAaikDCDF3R8B7Vu5PqpvMOd61vH8zxGULdx3as5N%2FC%2BVKh5HJHCdk15iPMwP1tjlHhptxC2N1zt3rEWZZ8Qoh81aTurLwt%2FsD6NLn7FYknlYfjX34okhtZNqgh0a%2F3RizfKH115r7FGLHx5P%2F6yeKlLy7vSLRWdpi7DJbQbW9il%2BgvZa2smuQ51v19dMA%2F2HYmDglHiB6Nfac1afdli%2FG81GuwvcRSnHmNPTzM1zYEVEjfPiQKtSE55rxQo2Dtd1pdG6KWRCR001ItsiaoioiWo7e2tVzo2GhwTYFtRr%2BIyPRx%2BfWJZB1X%2BK64C%2BvyG8VUwnlNEbd6MdBxPCmngKFNolEvLZturbqy9EE3nNWXgtPOgmPlsdc0S%2F8UnXykx6jtQLe8tBfaKtwgjXyWrJPrzU3kkRpJHhLgWfDPriIWuY20G31tI4S4Bzo52AfEN43vN0KBPvDPx1i6jgLG6mypvw6xSSipoEQNB48iyx88uWhDNCxpbqMa2kBOLTkfn0eLZb0eRLYImVdFai8Fwf3nCuqV3QbJULNRt9wZbytjX6GOhgcuNp%2B8RZCLEnzITdBZcU8U0g%2Bq1kw1YOIwQY6pgEBuwbPajnWjEDbsUvT4Fozt6%2BdOEwYR1S%2Blb6u5OZhpy6YctpJzA1px8xm5mvw4cIUpOtptQIYzKf%2BKFXYr7GCd7OwfGBBClTFznQRRwYzw4T4y5lPXbgU4oTP%2BQjREMlkYERA%2FebWsNn5hg0%2B%2FIuxmkhtocwqJd4JB0PUO1CX7zl4isQhipHMy3RxmB8s%2FyWpV8w46ZsFALcOB3D7sjg0jcfAczg%2B&X-Amz-Signature=a6d8916ea0e447555e72ee718c8e4c7508dbf5b6339e95e7340370c92d6c239c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
