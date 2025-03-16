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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YVKHRU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHBp4XohwzNDIjAe9cKKfMyMVVzWmCAQ63RtOUpWR5wIhAMNeRhmwKvY96OxvKTQiE3D72R7WtjHYABQ90B%2Bojw7NKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpNc%2FSUmy9l8xUASQq3AN327yrfPnWZUMP7oDkVc1%2BYhhnRqnoczv2kRExwoIbD8VV7PH3TOPALYoyfN6ufwS7FCsLMBWF0TrkNX0j%2F51D%2FhL2dmaeQt8%2BMSijLsRlIduGVVibw4MRXTrLb8zlz%2Bk27E4tncloqEEEPkR2Zg9tRvHd7E3HC9BrwYxYureUJqTAQHKLOmvZwvF76CX6fys%2FmK6herQ6p7t0iaHekNxt1eyuYQnfdbQ9N7jVKsrzunAg69l9CXYoxX0noChSseZ%2B2FYOYcfeZVaxqNhlwWBTDqO0McOtysLdbOBieJMZE1oYIF0kmawWUQ%2FTqajbi4RpSwjp%2BqYn0lOI9bfpqq%2BwgP1H03Yva7QRDr3bTEpht%2B%2BVIq8aFYm0matx8FDvRyW7DktZppPllFsil4dJXWsuYrPGKLOS266yl1tVADlEIo1AU7UKlH%2BtVSTPt0IYu5xMqtBC%2F22q5kchZIdMIpkFynRCZJzeA2OkfjgLO4lV0D4BU4usCLxbKGlKFsIHvIuFrwEg0jm8OVthOocg1COj3eCkDymAg0iOKhfZXzwaUEYdEtDogazMrpE0DQ2HeL4854KiKbjDj0W0lNFESCHb0tXJsNRbOaC%2B6btK8AY49ZAQcO1QjsEO1vZnZDDTgdi%2BBjqkAV2p62m1XFIwipCHWCaJi15NmYqYNwB1Ntv7A8AJ%2Bj%2Fzo5JEURbFKYyLAyfEHoD6%2BZq8xVW0pHSH6sCoubGfylnfIhKPe2kGuyk6P5cSPQ4aU0eLEFhmH60IG1dHh0ZI4NC5LtGId6skA1QGPVYNbw%2B9iaIrpL9KiVvofQW1UNPmUwQfeGMb1fz2I4mce0z3fz08APun68uElHgDIg38gkGUe5JR&X-Amz-Signature=4d1d11d585cc5b8b9617fa7dc83797efe155b8b4ba32f626562ee3c8e9711d11&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YVKHRU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHBp4XohwzNDIjAe9cKKfMyMVVzWmCAQ63RtOUpWR5wIhAMNeRhmwKvY96OxvKTQiE3D72R7WtjHYABQ90B%2Bojw7NKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpNc%2FSUmy9l8xUASQq3AN327yrfPnWZUMP7oDkVc1%2BYhhnRqnoczv2kRExwoIbD8VV7PH3TOPALYoyfN6ufwS7FCsLMBWF0TrkNX0j%2F51D%2FhL2dmaeQt8%2BMSijLsRlIduGVVibw4MRXTrLb8zlz%2Bk27E4tncloqEEEPkR2Zg9tRvHd7E3HC9BrwYxYureUJqTAQHKLOmvZwvF76CX6fys%2FmK6herQ6p7t0iaHekNxt1eyuYQnfdbQ9N7jVKsrzunAg69l9CXYoxX0noChSseZ%2B2FYOYcfeZVaxqNhlwWBTDqO0McOtysLdbOBieJMZE1oYIF0kmawWUQ%2FTqajbi4RpSwjp%2BqYn0lOI9bfpqq%2BwgP1H03Yva7QRDr3bTEpht%2B%2BVIq8aFYm0matx8FDvRyW7DktZppPllFsil4dJXWsuYrPGKLOS266yl1tVADlEIo1AU7UKlH%2BtVSTPt0IYu5xMqtBC%2F22q5kchZIdMIpkFynRCZJzeA2OkfjgLO4lV0D4BU4usCLxbKGlKFsIHvIuFrwEg0jm8OVthOocg1COj3eCkDymAg0iOKhfZXzwaUEYdEtDogazMrpE0DQ2HeL4854KiKbjDj0W0lNFESCHb0tXJsNRbOaC%2B6btK8AY49ZAQcO1QjsEO1vZnZDDTgdi%2BBjqkAV2p62m1XFIwipCHWCaJi15NmYqYNwB1Ntv7A8AJ%2Bj%2Fzo5JEURbFKYyLAyfEHoD6%2BZq8xVW0pHSH6sCoubGfylnfIhKPe2kGuyk6P5cSPQ4aU0eLEFhmH60IG1dHh0ZI4NC5LtGId6skA1QGPVYNbw%2B9iaIrpL9KiVvofQW1UNPmUwQfeGMb1fz2I4mce0z3fz08APun68uElHgDIg38gkGUe5JR&X-Amz-Signature=ebbf0f1fd8bb2bed5903b88afc42f5b21180b245641af77a77abc007dab93201&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYCUCEVK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BrDaNuL7ON0KefyhrP0QVzgEhhTKO4%2BB2W2FwElka7AiBNiCShEUdz4wS3NlcmMZejzMdWcE8Ab%2BKdEfc2b%2BmUWSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMavj5DczTqkMQtPi5KtwDA79QkLAGjG6jeMPqwPTbFYuYuK%2ByZrmQv6BsuEL2nSQAHBtBa8K9kwaKNgfS9sC2i29rfyLTctbCIf23l2PtdQXaA%2F6VASJvxAtNsXJ2m%2BMOB%2F9kGeGztHo6RpDr1UjRlXIYlJI3zuI2Yp%2F2ULRL2ml2IADv8FMOefDCT2DATWmAz%2FxbEkodhuo7M4LoWkKqlP%2BhA38%2BDVDbxBZWTk6uyJdNhLTjZcEUef%2FFA6zed%2B8GV9i0rpiMsQFutXbm%2FIoF2hgZ3586qE7%2B5j5xMBxeQNGLpHfOz99MM7%2B9gGCb3XJFK9IIYohRkKqjeoNh6c2FFUaz98oOtZFDrzknBAEsLqvXavd73dhdbhdPvalr8hcCR5z4FJDdv5%2FhHn43%2B%2Fe4Ki5AmoWFE%2F791QyGt%2FbnfWy80W42nmoFye8csLqx%2BeVJqjZsSyq9OqDFIrt7Im0x499sHs9zb0SPpZEH68CGhZbK9xj5Cd0ejltNRhYNZzXfJRyEVew6ibDcXdNEHipffPqKo68aNAGPE3b8HE9eo1IGOVj5%2Bj16xOl40iM1b9vwjBOnYhH%2BemjQREoVb%2FoQuNen5rO51KWC8ruGlbr9tKA4YbWbssdkmnqyyvDtfU%2BXaipa9%2B26pfjC9YYw74HYvgY6pgEIkmiAPsIVvbILUycFelrnKgXtPiKT%2F%2Fs0I3gRJ68XxDHbgPQMIztusIs4a7IGnTyUnNsNKlJbVFuAi9daULVPBrgo2HwDUHHGtt31%2BCPufdfo3BRA5Oi5DYRgSjHGkrJCDiUTdZ2sfr1afcO4UPWK%2BdbtYw7OiONPLye%2BOEdI9hP8rNWfhziHVGClEQHePAFhyAcemMYHhkOLsGUFFcsaWAPsnqhV&X-Amz-Signature=30aa9b8bf29409fc95a871e041db6d12bd343405485ec5a142bc10396d19f6e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCGPVLBX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXN5d6NdHYOc2EtmLaytQ56S8d8LrzDiQNJaz8pnDShAiBioHVR4JYBUFW9HrMBGqMwHQzrV10%2B62QOruXL8acC2Cr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMJa2FetIQV5kfaEp9KtwDa0uVJ4orUwZxoVpqLZWz0EShBRsyK3YbCajyqSle%2Fgak%2BRtf4iYAVRVS5VPnLzsJO6h6HUF5xVtXCs%2FY20i6SuSyxMO%2BhTyScj6FSACkLLynCXYaNXF4%2BmRIgCWID8mW0TDGIFgalQwSTl1E3aTkXJkNyRgIdBDNO1uCSin09ubcKHcDtt3FygmjziDZcmOQR3oNjwi9JKLK%2FNHWXqxbnc943lGHrmT7pdcBKknexgldmmuIqru1J2y40T%2BtHu8tgD9ya%2BLdc%2FyfRhsyRHhu8AENUJ3qteiqhvfkavJWu4UsBiPpgfY98O1ougwwkg8LkztESzoj3diTFuLUJhXSjNMriS9Ecnbt6hOqq1pWZCy%2BWj0%2FwyxY1LJdqdV%2Bx%2FSx%2BVKH%2F%2BnS7cYKeW8aGDG0a%2BFxBM0um9wD%2FQUpYrY5wLjrGRqL6akCbCGiW4vle%2FYyzN3RaYG0qQ9gsZAvt5geixNcsDVGIefS85BABGYriPOG3Z1f3yBO%2BV9pH96aKLPG%2Bp2yUj5tAi1sP0K3k7t6DMce7%2BM3yBCBt22FcjuftFrWzuzxmVA%2BH2N6BSZjZgVy6XAwUIZ4DyNfMqUFDKd2Hl5mIVArYRaRU1%2F8zG3yaeuEqqAKC%2B8Lp69bTJ0wh4LYvgY6pgGQM5COlKQYCRw6JQPujaiCDIoHinTMP%2B1xskxN2W4Y8V98ejddHoE10GOsHaVqggWAuTG3Lrc0%2BzHXgopA%2BxnarY2%2F%2F9UQmf1A4cfIVOfFCO5tI%2FVXbyMlQgA3x75e4woDgbLvn31Fa3tPrX3aJz%2FqeP8BA4QNsibAJX5asdIT1C2xdaVxWy0icEKOffcWl2oLWO8X%2Fhty12aNe3VSfM5iYTEC9xcg&X-Amz-Signature=8342b64ba12c970a440c9c4a4315bbf0b30d38aacdd1dced4592b4035d1982df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2YVKHRU%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQHBp4XohwzNDIjAe9cKKfMyMVVzWmCAQ63RtOUpWR5wIhAMNeRhmwKvY96OxvKTQiE3D72R7WtjHYABQ90B%2Bojw7NKv8DCCAQABoMNjM3NDIzMTgzODA1IgxpNc%2FSUmy9l8xUASQq3AN327yrfPnWZUMP7oDkVc1%2BYhhnRqnoczv2kRExwoIbD8VV7PH3TOPALYoyfN6ufwS7FCsLMBWF0TrkNX0j%2F51D%2FhL2dmaeQt8%2BMSijLsRlIduGVVibw4MRXTrLb8zlz%2Bk27E4tncloqEEEPkR2Zg9tRvHd7E3HC9BrwYxYureUJqTAQHKLOmvZwvF76CX6fys%2FmK6herQ6p7t0iaHekNxt1eyuYQnfdbQ9N7jVKsrzunAg69l9CXYoxX0noChSseZ%2B2FYOYcfeZVaxqNhlwWBTDqO0McOtysLdbOBieJMZE1oYIF0kmawWUQ%2FTqajbi4RpSwjp%2BqYn0lOI9bfpqq%2BwgP1H03Yva7QRDr3bTEpht%2B%2BVIq8aFYm0matx8FDvRyW7DktZppPllFsil4dJXWsuYrPGKLOS266yl1tVADlEIo1AU7UKlH%2BtVSTPt0IYu5xMqtBC%2F22q5kchZIdMIpkFynRCZJzeA2OkfjgLO4lV0D4BU4usCLxbKGlKFsIHvIuFrwEg0jm8OVthOocg1COj3eCkDymAg0iOKhfZXzwaUEYdEtDogazMrpE0DQ2HeL4854KiKbjDj0W0lNFESCHb0tXJsNRbOaC%2B6btK8AY49ZAQcO1QjsEO1vZnZDDTgdi%2BBjqkAV2p62m1XFIwipCHWCaJi15NmYqYNwB1Ntv7A8AJ%2Bj%2Fzo5JEURbFKYyLAyfEHoD6%2BZq8xVW0pHSH6sCoubGfylnfIhKPe2kGuyk6P5cSPQ4aU0eLEFhmH60IG1dHh0ZI4NC5LtGId6skA1QGPVYNbw%2B9iaIrpL9KiVvofQW1UNPmUwQfeGMb1fz2I4mce0z3fz08APun68uElHgDIg38gkGUe5JR&X-Amz-Signature=e3fe8c760dd280e752c485f12c695523aa6bdccf160c8eb0154ea8988feda0c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
