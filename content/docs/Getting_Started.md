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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WVZ33%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWsq5t%2Bh%2Bewcksb3TSg4wjIhJWR%2Bdj7Zuf65HW51U5KAiABQ773qR%2FXgxKp2DqVdqK484vaLCGiIfY%2BF1VPpjVfPyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiADaMqlhXO3QFgjMKtwDHLFRMauvxHN0sBXlC6GyBm27YB0PVGPoGhjeLMW2Jbq4J8AUAD27Uffjsp544r1SL4Uzbp9a%2FZpRJAmW5IXTelW%2FNadHmf2%2BXmx4SdRvbGMIUbYs36grprnAzSNQIXg8YBFcrFasFKDHixhcws41D6Pn7LdInahwLdwsFx9qUFJOGSx%2BeXrP4Bdm810msuh%2Bv17xTChAsQ1Bic606bzBDq7pbV%2BtTRC4ek6RW5C0ZTmiyqM8pFRvZkrnQ6kyjo8NqeHplM%2B%2By%2FA0Q08jD68FpGcH%2BuW2pMyvKS9ivG%2BYS%2BZYIwRn%2BTrTLxgjN6839wMoqPRRPWZ%2B6jhUDRyF8kuX6McSzeoWjndnI5SBIDPoDdUcQ29YC9H6JFOMmhArDe393%2Ff8uESxIq%2BDt2OJ5b%2BMSo9Ave8dIXSg7nhVNPhhdkxkbe%2B%2FMpe7R487K%2BB%2FvW8%2BGrGbecyYkoNsxn0IJOB46Tazrs83tEnDHDYBTh8KUI5THsBTQywWQBgRtRwdDEqoZPXwrINmWEuoghLZB7RlUrxKnpC29BlmT9CuNKyuoIsIxXVARzMSHNsJi5C%2Bg2sdCmcNLHk5gsZmJ%2FzietSnF9mQiNTQoSp5W5YkUVbvqllRLUZ5UX1eN8TYOEowl8a0vQY6pgEDi3tASZAHdLmNYjuOReBvIKtaMyzWX4rjUjOQHW9MWjC0WJd6Ovi5b1T8ItL%2B%2FuohIiWdJgqzzAyB%2Bk%2Bk3GJ4ybdivn5CeWexCp4eOXeJhBHnXfUmIX0wsZwUX7aljoN%2FeBFL9mOdv7ThkBtbLFUNco53w4mwzuQ8ai0XcUGoWGsgxTgvcaUYqhv3qO3pHdzdjyQULZr%2BhMGoSmTTR3MZVSIKtvgZ&X-Amz-Signature=5249acc102179394b0911a94a250128fef5bf9460b0f5db5bfb68949eaa77315&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WVZ33%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWsq5t%2Bh%2Bewcksb3TSg4wjIhJWR%2Bdj7Zuf65HW51U5KAiABQ773qR%2FXgxKp2DqVdqK484vaLCGiIfY%2BF1VPpjVfPyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiADaMqlhXO3QFgjMKtwDHLFRMauvxHN0sBXlC6GyBm27YB0PVGPoGhjeLMW2Jbq4J8AUAD27Uffjsp544r1SL4Uzbp9a%2FZpRJAmW5IXTelW%2FNadHmf2%2BXmx4SdRvbGMIUbYs36grprnAzSNQIXg8YBFcrFasFKDHixhcws41D6Pn7LdInahwLdwsFx9qUFJOGSx%2BeXrP4Bdm810msuh%2Bv17xTChAsQ1Bic606bzBDq7pbV%2BtTRC4ek6RW5C0ZTmiyqM8pFRvZkrnQ6kyjo8NqeHplM%2B%2By%2FA0Q08jD68FpGcH%2BuW2pMyvKS9ivG%2BYS%2BZYIwRn%2BTrTLxgjN6839wMoqPRRPWZ%2B6jhUDRyF8kuX6McSzeoWjndnI5SBIDPoDdUcQ29YC9H6JFOMmhArDe393%2Ff8uESxIq%2BDt2OJ5b%2BMSo9Ave8dIXSg7nhVNPhhdkxkbe%2B%2FMpe7R487K%2BB%2FvW8%2BGrGbecyYkoNsxn0IJOB46Tazrs83tEnDHDYBTh8KUI5THsBTQywWQBgRtRwdDEqoZPXwrINmWEuoghLZB7RlUrxKnpC29BlmT9CuNKyuoIsIxXVARzMSHNsJi5C%2Bg2sdCmcNLHk5gsZmJ%2FzietSnF9mQiNTQoSp5W5YkUVbvqllRLUZ5UX1eN8TYOEowl8a0vQY6pgEDi3tASZAHdLmNYjuOReBvIKtaMyzWX4rjUjOQHW9MWjC0WJd6Ovi5b1T8ItL%2B%2FuohIiWdJgqzzAyB%2Bk%2Bk3GJ4ybdivn5CeWexCp4eOXeJhBHnXfUmIX0wsZwUX7aljoN%2FeBFL9mOdv7ThkBtbLFUNco53w4mwzuQ8ai0XcUGoWGsgxTgvcaUYqhv3qO3pHdzdjyQULZr%2BhMGoSmTTR3MZVSIKtvgZ&X-Amz-Signature=cd2659fabd034c21e7950a7e7bb145cde51045e187c9552dafebab4b2f1020cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQUCZONB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjHTJcJS%2FObW7Mf2WIH7wxfVH1JvRKqRYCHW95TU00gIhAPLu80z8OdvGx26k5hOb7LOvSoBCMAnEUdd57wHiDZAKKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVPxQNmWndCi5Kyfoq3APcVJyiHfa0vu%2BkHXQ6auOXHbAuYXOY96xA9XRjGIv%2FrBfi3otDdFJgqb2Jqw0zhZd6NqmfkRmVfsaCW8weAky83hjU5E69Qoy6%2Fu0qDHDmEekCrnccbpWZMAAYhaS8bqCaixFAfleMe%2BeFOhuWHti6BWqd%2BzXxjDQd2W19eCs1kGx5Yi%2F7cjU8ROlbt9wqDTR1xSlk7wWplMS3BXZEIMevAMIKvTG1p0EJg5vBAGmDXGDvJpY9XFic1eQFwgvmvFs73Z5vE07tePo9V51%2B8IahRpnbxSfnfIm%2F2mp6xTnZbs2SdEjemgutJYKCu52oiXJg%2FgUos6u7CfDHPt9nFAZzchgZPRYREMgMEhnrPBzAmHuWsJY6Dpd0WjCQPNCq1AhOzoqeubDqYORAczM%2Bx16jBTiGN1V%2FcfUhQJjugWSExsG0CS95iRQIOC04TUe7fTUqIun2sxwT3OnWY0BglRvlfQWJo%2FHkQoMhDXbDdY6g8wupgACLY%2FCMBJENN0n7A85G%2F6ExFXx%2BYaIudmX339%2BpG52TAZNSxBeTMdgvAUSzZawjvrGj5p6XTf13KPHcG%2BiyV6Ratg7r2evbEgd5TJOBlEjnMqUhExoRo0XhVeSngPJimsagES84v%2BOAeDD6xbS9BjqkASq%2B0Fx%2BbirZZIm5QWDs6a1cNk3bLyL4khlfY4rovMkfnZ0aK4eer6pnCXfR4RS0cYyrcP8wt0m04qmZaMWRF6pkuuOvN72M3hKE4nwVPmHVBlFDDGJFcCGV9D1dPi8YhlDC%2BuILiOz%2Bi6NkvklXPQPJFJSyQK%2BsA8fMqjxgSjUqCl2n3ygnM%2FQUkbatnes5d5bOcqnsZZvbqUF5U4DXkcJsOrn8&X-Amz-Signature=abaa4af03ac451f646883aa8863d119c91fa51d5d926f400a6ce382b9a8681ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIOAZOEV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXIEmo2x62NwGtc%2Fi3kxKCkNrBF86Q4lrcpzgTCD6s%2BAIgO2ECC%2FvyGSyDmghYFlA3rQrd%2FdsSsQjtSJ5%2BzlXLQCUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuFifcC74nsTkPgQSrcA%2B8sDW9WpTi5qsZakP8bQLNmsAsLT8z7EzLq5otTD2G9YOASSJN47kzTYCaynaxT1mLgNgukQj77P%2FS3y5YrW0mzRgzuE2zCGj5Ya%2BzorTTs9mmp%2B%2Bi8G%2FWTWn%2FV%2B6RrcZHvVxtYejmkNd1QC8roagMtmPk1D5djnQk79StUw5%2F%2FlZHT92Q0a7XpXF4NDjBeolSat1nfVEKbpA2eGb8lbEWdOkMnqZ%2BEp5bQ5qS5BK0bgMk3%2FNrJwxuXScz81fnlFXYnZwhpmFONmrmmvzrayvNV9A2T5UikQmuw7JiD8upKyZP%2FbREMo0bsrmW%2BBLnbhiBSyFOzomf7iAhyK6j5BPT2VuKxKb94YhaUWXZfl4huIANTkZyIMgBeZ5ml62fo4%2F8iJjK8TbEhuYY1YOBYwXOURd%2Bc%2Bxhaq4z0hu%2BWdIifIEwneoqwUeXxAhT9qmwl6t0DA%2BWP%2Bwnu5XdLDe94YuxVU5nWounxOvs3QxeCbIrS%2FVQnw%2FATT11x7PCxtIgAy8RzE5M5fVNWYtuMOIFjWDvPgCYglJfgivvdkKxETwjv0t5C6dl1LYazuXhpMnIuXROeHLKJPWY%2BttItBMno%2FBzdwn0BrhZjJ5ss%2BlHiI8mcz2%2FYTS%2BxFKUKIfjEMPvFtL0GOqUBENeOZ%2BhgOOhv82BjhKulxfX9AlYMAphgWEUDYFWhN9yqYWMZPlzwVH80TrAfvYAK%2FTmbvYIzyd82Z1KbL0k5pdMw4FLd5B2%2FRsvp86H6AHVIMBdWoEiXJIPY86gUteD066N%2BkFCVuZr6LUwptvW4bOTj%2FzoHr986A5Pjx0VvRJEEm5aO%2Bsk74o4j3xIvFVenk1OR%2BH19N6uHFG6438kx0HhIfpYs&X-Amz-Signature=a69921e8d887a45fa8f438f76f75803132311ccdba5633b3ff66a1027cb46f22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI2WVZ33%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWsq5t%2Bh%2Bewcksb3TSg4wjIhJWR%2Bdj7Zuf65HW51U5KAiABQ773qR%2FXgxKp2DqVdqK484vaLCGiIfY%2BF1VPpjVfPyqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiADaMqlhXO3QFgjMKtwDHLFRMauvxHN0sBXlC6GyBm27YB0PVGPoGhjeLMW2Jbq4J8AUAD27Uffjsp544r1SL4Uzbp9a%2FZpRJAmW5IXTelW%2FNadHmf2%2BXmx4SdRvbGMIUbYs36grprnAzSNQIXg8YBFcrFasFKDHixhcws41D6Pn7LdInahwLdwsFx9qUFJOGSx%2BeXrP4Bdm810msuh%2Bv17xTChAsQ1Bic606bzBDq7pbV%2BtTRC4ek6RW5C0ZTmiyqM8pFRvZkrnQ6kyjo8NqeHplM%2B%2By%2FA0Q08jD68FpGcH%2BuW2pMyvKS9ivG%2BYS%2BZYIwRn%2BTrTLxgjN6839wMoqPRRPWZ%2B6jhUDRyF8kuX6McSzeoWjndnI5SBIDPoDdUcQ29YC9H6JFOMmhArDe393%2Ff8uESxIq%2BDt2OJ5b%2BMSo9Ave8dIXSg7nhVNPhhdkxkbe%2B%2FMpe7R487K%2BB%2FvW8%2BGrGbecyYkoNsxn0IJOB46Tazrs83tEnDHDYBTh8KUI5THsBTQywWQBgRtRwdDEqoZPXwrINmWEuoghLZB7RlUrxKnpC29BlmT9CuNKyuoIsIxXVARzMSHNsJi5C%2Bg2sdCmcNLHk5gsZmJ%2FzietSnF9mQiNTQoSp5W5YkUVbvqllRLUZ5UX1eN8TYOEowl8a0vQY6pgEDi3tASZAHdLmNYjuOReBvIKtaMyzWX4rjUjOQHW9MWjC0WJd6Ovi5b1T8ItL%2B%2FuohIiWdJgqzzAyB%2Bk%2Bk3GJ4ybdivn5CeWexCp4eOXeJhBHnXfUmIX0wsZwUX7aljoN%2FeBFL9mOdv7ThkBtbLFUNco53w4mwzuQ8ai0XcUGoWGsgxTgvcaUYqhv3qO3pHdzdjyQULZr%2BhMGoSmTTR3MZVSIKtvgZ&X-Amz-Signature=bdfadd4d2268c882654c58184b367e0f13e28d87927263ea9580b18211507684&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
