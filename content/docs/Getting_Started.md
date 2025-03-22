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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLAPF6M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID0%2Bm4eee1cDFk%2FLbxQQrwokxC6B9YDLmoluD%2FjL3%2BgxAiA78B6iQccgVtq6NEWoVku6aDbMMT%2BUgLRxwhx4084u6SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk10lI5qJ%2Ft7K5kTFKtwDLZr6HOJcN%2BDvmOIGhsdOIJSXpWtGcUPD%2FLQ5A3FUAHjfTdcqxq07r9mUTiqQg113VodvC%2BnjwJeP3KGtzoVH4txYUOWru8hKp87Y9eagwQIrXc0eI0ztg72Fx4llsVtNvITu5aXZxp5NjyAOXsG%2FRTnBsFvZC91jgHWfBT1D%2Fmm35bWdMR6Z4AS5AcoGuCN3ph53GwJ7qI%2BKmE2FPsdVeMAXo8%2BicnHuNBQgiZboFBqlfHbx5QsJeJIai5mCF749vscyxwC%2B9Z1%2Bu9vc%2FY87VsTOqMwMwZhyKxZLxbgmSScpPA8FlXtvo7aWr8jFSKeUHSCyVkaV5prSFFAYnU%2FJ%2BCTW8S%2FOww2LuOIb9RGecqINmoroHlNQmZg1ec50%2BZtwVaNmYTN5nWol0ihD1lG2YxoGbwf3jYFKI2MulWh5TPhNVsprbAmWBmKAQY4C8tpi6Dgdw8KdGOHfOb5vFRy6laTs11WjjGfm8%2FS7%2FfCK56iRAvLI%2Fmjy14pC%2FtwGmJAatBKUkUsg44fayR1JXvw%2Bbhll2ZZw6wNuYCkqtvOWsWOwmHqTOYLxAKxu31W2ymNhTFoejkvp3db%2FLnDa0jpeOLzpv6b6F%2F5h7eIEuJ1VzOEtPIOKJDZAcxjpx%2BAww636vgY6pgGMlLlRA9S%2B%2BXQ1LB6m2MT9y%2FMiMHQvqpCzDa1EnPNaHIZ7TuQT6UAF6FtBTNr3g8JHc9jrrj24Ja7UVQOEZOUPEQZmmkE3XAxvFDHOgd0w8hsEDUIZMEzYLZIIeVib8l8pJCQZXJOaWiTQ626xGR%2FirDaGcJdYZNuOFqxOwt9%2FSFCCKksHcV8X5TO4uQ40IGeY8dyVbOrPyEK5RBJvHMVu9b%2Fmiiyj&X-Amz-Signature=c5273208aba332c10deaf392aedbef330501d5e0340becb6314de87620fd270a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLAPF6M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID0%2Bm4eee1cDFk%2FLbxQQrwokxC6B9YDLmoluD%2FjL3%2BgxAiA78B6iQccgVtq6NEWoVku6aDbMMT%2BUgLRxwhx4084u6SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk10lI5qJ%2Ft7K5kTFKtwDLZr6HOJcN%2BDvmOIGhsdOIJSXpWtGcUPD%2FLQ5A3FUAHjfTdcqxq07r9mUTiqQg113VodvC%2BnjwJeP3KGtzoVH4txYUOWru8hKp87Y9eagwQIrXc0eI0ztg72Fx4llsVtNvITu5aXZxp5NjyAOXsG%2FRTnBsFvZC91jgHWfBT1D%2Fmm35bWdMR6Z4AS5AcoGuCN3ph53GwJ7qI%2BKmE2FPsdVeMAXo8%2BicnHuNBQgiZboFBqlfHbx5QsJeJIai5mCF749vscyxwC%2B9Z1%2Bu9vc%2FY87VsTOqMwMwZhyKxZLxbgmSScpPA8FlXtvo7aWr8jFSKeUHSCyVkaV5prSFFAYnU%2FJ%2BCTW8S%2FOww2LuOIb9RGecqINmoroHlNQmZg1ec50%2BZtwVaNmYTN5nWol0ihD1lG2YxoGbwf3jYFKI2MulWh5TPhNVsprbAmWBmKAQY4C8tpi6Dgdw8KdGOHfOb5vFRy6laTs11WjjGfm8%2FS7%2FfCK56iRAvLI%2Fmjy14pC%2FtwGmJAatBKUkUsg44fayR1JXvw%2Bbhll2ZZw6wNuYCkqtvOWsWOwmHqTOYLxAKxu31W2ymNhTFoejkvp3db%2FLnDa0jpeOLzpv6b6F%2F5h7eIEuJ1VzOEtPIOKJDZAcxjpx%2BAww636vgY6pgGMlLlRA9S%2B%2BXQ1LB6m2MT9y%2FMiMHQvqpCzDa1EnPNaHIZ7TuQT6UAF6FtBTNr3g8JHc9jrrj24Ja7UVQOEZOUPEQZmmkE3XAxvFDHOgd0w8hsEDUIZMEzYLZIIeVib8l8pJCQZXJOaWiTQ626xGR%2FirDaGcJdYZNuOFqxOwt9%2FSFCCKksHcV8X5TO4uQ40IGeY8dyVbOrPyEK5RBJvHMVu9b%2Fmiiyj&X-Amz-Signature=856b81bd591717da5b0ba11377f549e2af6b82e10fb8c4b2fe96a5382fa76284&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBR3OZCK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGFvdRtIHNUTTimZmtmi6taWWSQC1Nj0aWWJ8v4SzqBiAiBnLKQy89MLTCe2o4ba%2FjITRMl25yCaKhnnP8uqL9hbOyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBT5ooF3e17cPvbuvKtwDTdb4YbfT6pkGpwxOJURI2q92FaApwvjYlzSj2vwwjIcyncrjpNF90X21J6NaLsipnOUIcj32pzZMqpmG1aB66bpLiYfLtT%2BgIrYxKMb%2FA%2B1%2BlyUrg3XK4wRRk9Ib9J4YBxR0%2BxSO%2Bq5AOf%2F66cLoqq56C1jbKUcYImTmX4gCyQKcSl%2FXayqyx1HXnAPOZUEezi1XTbBBu1Y9luyqmjcnkzcrDLagwtgZK%2B2rSAD699FHma1aBY67dRa%2BP0%2BUC8cz%2Bv9adFccpUC1f9v6JsSZ9yAIieQGz%2BY0PHfYr55nIcHTWGKlQLPEGLIZN17pnqifTnVI4zQafOv%2F6fZ1VI5%2F1dY7esWpgJRAzzKEYHZlMLIzRghTwFsUN1gqWdgVu5mKWBQ81IYLrVHM8bF0U8OxwcSPdlv3qV0ae6nU%2BwolpyUe5yJPW%2FaJkKI0Hl%2BdLjfoIxsv15N0RUEOEfSavvAbvbWlYy8I%2BLVyXeW25%2FtLXEtpiicQYuen%2F0bfmGhr%2FevETuPkCkV4jzPplEiQ2XOl97y6bw1DpRKGYzPAqO7%2FHTcJibBIEw%2BDAdF0wcYcVQt8rInrAQnbUrmL1x0qPAG7bUNf9V%2FPZPc%2BuQFy2yc%2BGsaDtHyGcAHMQoxGIDMw%2FK76vgY6pgFu%2B9akvazxWrEBWRNwrqvK6iqORL6gAEqVZESdn9%2BUUu520oYFkBurBjUgEqxPZFwo5YP8%2BAubpgOKmm5dh3tigPDbPg5oxIkA%2BmMdKDNXqoJNQfYdhUZV0i5n9uLIhucAEvNACkF3reVEuEdmyFC3Kw8P6eF%2B%2F8mMrx6L4DRN9DHpiKAQr4YB7noZITDgRqaVu6SoYl4qcTZBkojPVTp2tR0VvDwq&X-Amz-Signature=0b73b505c55ac5ff73a7cae76b74e63275dbd1b3e10dc663666aee0e8f42b499&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBALJDAQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIEQUIS58kwDqjCaTPzJTAZlE0Q6RxPPVY3io36cvE0iuAiEA9J9d%2FqfCHwgUIXROMyMvgudyG5kxIJV1oGUrkf8OCoQqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsdTCH9s1psxsvDIircA9tRAWun0DilnPKu%2BTEl1YJbLFfF%2BfoBo%2Bl3aXW0D1sD%2Boyzt80dlPii5p4clpwumGzLfau4HPQDpSoirWAzSjth3LB4PBE3qVdDT9P1yktLlgvTlDEgIUCXA5JHYhOB7sxIOZO4DObe7HpOfAIjlUlUhqH2XL1hxJ99sTXsz69wv4V1lQv6%2Bl9ueW95%2FYrEYA%2BHt8D%2BgUvKq0k4ElALvCBalfg%2B5Jf9DHzx%2Bm82l9VhXqhGz7KSeco5KZIa6mnnLC%2BVtQ8sw%2Bp0TjMx1T%2FGPFRxnB8hEbBmajN4ktoDHRmMKDVPROqj5sAq04xPecd7KSewAkU7ZE%2FsiBXVVTWQCQr%2FSbKfu8YLC2ggwEilkpg3pw4DZ1gns9uHrbVRotg6CYch0ddilOaTRc%2FFV8i1OgfybKvRHMcYmlNcpqg8IMd6g%2FzLQyluN4Z0fBd3fy56eocCAVudPIfFkNPs6E77jgLSGuzhUgb%2FtTgu%2BTDqNdVGa%2F3iX8dlCJleNLpq87EKoRGwpiG%2FfkcgQQAs3zK03lj%2FsYnsshCTKFb7PbwuOMLni%2F3KHMH3Us6ThKhVVDkrCJ59zHwgzXzGXr1Rnqetwdwgpz9fzfMamT6hjlwlpaDQSvcYHnlQ%2F1wcsINRMMqt%2Br4GOqUBNfa7fRBkJVVRq6ssrBW9fwNJE%2Bc3bpTzjvwiSSGJRUpTAImcWz2w1AWR6oQaHUjRj45Od%2FixtwtCfsIZt%2FjudZGjLlvniVuTS1nyrdBGvK5FnYowyrRXtS8wAGo1Nd1OpztxRV98d%2BWdD%2BG3svUvzbyhSlfOVibXlNiYkc7kjnvLVGF7PTI20Tec6E9Y8%2BPPprcpKotxAUjC3gyKc7JOgihmR06l&X-Amz-Signature=27439cdce4097f2e98b21f1a3b6cb7284f42b242b79be36ea7a6045c1981cded&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLAPF6M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID0%2Bm4eee1cDFk%2FLbxQQrwokxC6B9YDLmoluD%2FjL3%2BgxAiA78B6iQccgVtq6NEWoVku6aDbMMT%2BUgLRxwhx4084u6SqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk10lI5qJ%2Ft7K5kTFKtwDLZr6HOJcN%2BDvmOIGhsdOIJSXpWtGcUPD%2FLQ5A3FUAHjfTdcqxq07r9mUTiqQg113VodvC%2BnjwJeP3KGtzoVH4txYUOWru8hKp87Y9eagwQIrXc0eI0ztg72Fx4llsVtNvITu5aXZxp5NjyAOXsG%2FRTnBsFvZC91jgHWfBT1D%2Fmm35bWdMR6Z4AS5AcoGuCN3ph53GwJ7qI%2BKmE2FPsdVeMAXo8%2BicnHuNBQgiZboFBqlfHbx5QsJeJIai5mCF749vscyxwC%2B9Z1%2Bu9vc%2FY87VsTOqMwMwZhyKxZLxbgmSScpPA8FlXtvo7aWr8jFSKeUHSCyVkaV5prSFFAYnU%2FJ%2BCTW8S%2FOww2LuOIb9RGecqINmoroHlNQmZg1ec50%2BZtwVaNmYTN5nWol0ihD1lG2YxoGbwf3jYFKI2MulWh5TPhNVsprbAmWBmKAQY4C8tpi6Dgdw8KdGOHfOb5vFRy6laTs11WjjGfm8%2FS7%2FfCK56iRAvLI%2Fmjy14pC%2FtwGmJAatBKUkUsg44fayR1JXvw%2Bbhll2ZZw6wNuYCkqtvOWsWOwmHqTOYLxAKxu31W2ymNhTFoejkvp3db%2FLnDa0jpeOLzpv6b6F%2F5h7eIEuJ1VzOEtPIOKJDZAcxjpx%2BAww636vgY6pgGMlLlRA9S%2B%2BXQ1LB6m2MT9y%2FMiMHQvqpCzDa1EnPNaHIZ7TuQT6UAF6FtBTNr3g8JHc9jrrj24Ja7UVQOEZOUPEQZmmkE3XAxvFDHOgd0w8hsEDUIZMEzYLZIIeVib8l8pJCQZXJOaWiTQ626xGR%2FirDaGcJdYZNuOFqxOwt9%2FSFCCKksHcV8X5TO4uQ40IGeY8dyVbOrPyEK5RBJvHMVu9b%2Fmiiyj&X-Amz-Signature=d34af32eec2938b5957421623a001700c9c702a42c26c23de78f72b0ada57105&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
