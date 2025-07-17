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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJS2A3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCiPa0TebqAFYHduWkTp3Mc2nYJIUH3%2FFbh5U7tRgemHgIgKkpxwDnpmrw%2FDQNQ3xXcbJ1xakDSjvCVMztq2ise6tUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFEIXAcya6wWWjvtLircA%2BLK2DE6fz1sAQ1f5z8H8puOf1p2ULNAUxlFbd8Sb6H0NUH2WezZeoNmSpB6dp4q2aDHjVMnrN5KLP5Xt1PsbCNvSCNjyMv3krlsjOg7RKr5hrLuTrhriC4zJG70M193cr2HOZBwCdwt7IFGcD%2FGSMUDhmshiGP9XJ%2BDdJ203YSKHNJCY%2BcLcoxpik6c2O0AciSge3yBU7mnvCtCJXWZpzwt%2FD17DoXxhuCS5rihwOdMr2bI2LZmS60wO3NP7PSHFiA7CWL1KPIemgQiqWAp7XkIh4JRIU96B8av5UEOHjlvYeInQVGQFOLgg25scVw%2BlcXFMenzX5pDti6hfYHu5Va%2BnAmSRIwH4SLWZO1B49esc9DRpQJa5v00gXcjXVzTMJNZX5qb87B2ilYGVPQ6BU9KV%2BYK6j5F7mdiQhS2jrFZjB3grm4i8%2BdLQRUs1vLq4dH5dCNmBRyFrQAoz08F%2Fd7Yjp9btvFdr0vo%2FkxsSlucgyYi%2B0eZ%2BKxvrqsDvUy%2FsJacWQxEdBUOmyTMuegZuN%2BsY9SLqKJOnp%2FTIvsk46Je2euGOjQny45sVBoO5ACzI%2BAkyJT8jSaIvpIUrliVPyMLw8IoMoa%2FEWDD98%2FZxTdLxancCmVYRVLJtKWfMK3I4cMGOqUB7eTYO3cLTvM3%2FxmHY2TT5McVCMAPBAA%2B4Nsp7sHrKkJkYUFe7gzj9JWFIOcM7kVqzSH3eSXHTETfdGHzxjdByDm%2BPHWO6JVETdSKdrlR0XVvTNT2KajDoJiF9DIejgvlD5NLbCdGRq7LM2uT0ZZjvEhVu0hGaI7tSgSZSxGJ3iUf6gVjHBINaIb9IT1YoMS7tkh%2BmNAz2yzRvHBU2QgyuubsoySO&X-Amz-Signature=4580009f2265873971546bb3ad67e3d6a487df39e3bd6f14cf38a16f56c1d021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJS2A3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCiPa0TebqAFYHduWkTp3Mc2nYJIUH3%2FFbh5U7tRgemHgIgKkpxwDnpmrw%2FDQNQ3xXcbJ1xakDSjvCVMztq2ise6tUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFEIXAcya6wWWjvtLircA%2BLK2DE6fz1sAQ1f5z8H8puOf1p2ULNAUxlFbd8Sb6H0NUH2WezZeoNmSpB6dp4q2aDHjVMnrN5KLP5Xt1PsbCNvSCNjyMv3krlsjOg7RKr5hrLuTrhriC4zJG70M193cr2HOZBwCdwt7IFGcD%2FGSMUDhmshiGP9XJ%2BDdJ203YSKHNJCY%2BcLcoxpik6c2O0AciSge3yBU7mnvCtCJXWZpzwt%2FD17DoXxhuCS5rihwOdMr2bI2LZmS60wO3NP7PSHFiA7CWL1KPIemgQiqWAp7XkIh4JRIU96B8av5UEOHjlvYeInQVGQFOLgg25scVw%2BlcXFMenzX5pDti6hfYHu5Va%2BnAmSRIwH4SLWZO1B49esc9DRpQJa5v00gXcjXVzTMJNZX5qb87B2ilYGVPQ6BU9KV%2BYK6j5F7mdiQhS2jrFZjB3grm4i8%2BdLQRUs1vLq4dH5dCNmBRyFrQAoz08F%2Fd7Yjp9btvFdr0vo%2FkxsSlucgyYi%2B0eZ%2BKxvrqsDvUy%2FsJacWQxEdBUOmyTMuegZuN%2BsY9SLqKJOnp%2FTIvsk46Je2euGOjQny45sVBoO5ACzI%2BAkyJT8jSaIvpIUrliVPyMLw8IoMoa%2FEWDD98%2FZxTdLxancCmVYRVLJtKWfMK3I4cMGOqUB7eTYO3cLTvM3%2FxmHY2TT5McVCMAPBAA%2B4Nsp7sHrKkJkYUFe7gzj9JWFIOcM7kVqzSH3eSXHTETfdGHzxjdByDm%2BPHWO6JVETdSKdrlR0XVvTNT2KajDoJiF9DIejgvlD5NLbCdGRq7LM2uT0ZZjvEhVu0hGaI7tSgSZSxGJ3iUf6gVjHBINaIb9IT1YoMS7tkh%2BmNAz2yzRvHBU2QgyuubsoySO&X-Amz-Signature=8659c91679a15e96e14b04a1ef826329b5419ea035f1a6335afb2f9bb149fcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJS2A3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCiPa0TebqAFYHduWkTp3Mc2nYJIUH3%2FFbh5U7tRgemHgIgKkpxwDnpmrw%2FDQNQ3xXcbJ1xakDSjvCVMztq2ise6tUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFEIXAcya6wWWjvtLircA%2BLK2DE6fz1sAQ1f5z8H8puOf1p2ULNAUxlFbd8Sb6H0NUH2WezZeoNmSpB6dp4q2aDHjVMnrN5KLP5Xt1PsbCNvSCNjyMv3krlsjOg7RKr5hrLuTrhriC4zJG70M193cr2HOZBwCdwt7IFGcD%2FGSMUDhmshiGP9XJ%2BDdJ203YSKHNJCY%2BcLcoxpik6c2O0AciSge3yBU7mnvCtCJXWZpzwt%2FD17DoXxhuCS5rihwOdMr2bI2LZmS60wO3NP7PSHFiA7CWL1KPIemgQiqWAp7XkIh4JRIU96B8av5UEOHjlvYeInQVGQFOLgg25scVw%2BlcXFMenzX5pDti6hfYHu5Va%2BnAmSRIwH4SLWZO1B49esc9DRpQJa5v00gXcjXVzTMJNZX5qb87B2ilYGVPQ6BU9KV%2BYK6j5F7mdiQhS2jrFZjB3grm4i8%2BdLQRUs1vLq4dH5dCNmBRyFrQAoz08F%2Fd7Yjp9btvFdr0vo%2FkxsSlucgyYi%2B0eZ%2BKxvrqsDvUy%2FsJacWQxEdBUOmyTMuegZuN%2BsY9SLqKJOnp%2FTIvsk46Je2euGOjQny45sVBoO5ACzI%2BAkyJT8jSaIvpIUrliVPyMLw8IoMoa%2FEWDD98%2FZxTdLxancCmVYRVLJtKWfMK3I4cMGOqUB7eTYO3cLTvM3%2FxmHY2TT5McVCMAPBAA%2B4Nsp7sHrKkJkYUFe7gzj9JWFIOcM7kVqzSH3eSXHTETfdGHzxjdByDm%2BPHWO6JVETdSKdrlR0XVvTNT2KajDoJiF9DIejgvlD5NLbCdGRq7LM2uT0ZZjvEhVu0hGaI7tSgSZSxGJ3iUf6gVjHBINaIb9IT1YoMS7tkh%2BmNAz2yzRvHBU2QgyuubsoySO&X-Amz-Signature=b63362a870b6e4938fd771c81a3b9fae7f60f88d6f3651000c7f4dd9f9e99770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFT4RT6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDaYgIuJrNTj9Zah6MPpZEYOnxvJBkMQbHYQsdoticJowIhALyckvRcnuA8l4wCDL0p4UMQvlAzI8dlGASb9ZIVB7YaKv8DCGwQABoMNjM3NDIzMTgzODA1Igzd6K%2F6UPZEjN%2FeKhcq3APGrl1DrDeGjXHocF3wmj%2B7qKJNe2llCuvOI8YDVcP6W3ZxilZVz%2BFxG2ez94w%2FnkDXYEoCuBAL3SBqKDPULOW%2FPH2YS6IpaOg6ud7cqUrfH7TCxWJaQUDNtsOGChjj04Cl588MgPl6OkxRT0Yt2uPuY2sTz9PI14%2BABOHmNou5dIpMxYjZf5EAyY9rGl1Y7nCNa5BKIMispel1%2BFQMYhUGFkwwPfx63FBFBpGxqZ04fkdcjYQ9HtVNdw92a3gC71a6YQn6uJB6Nt%2FBR%2B7o%2BNv2WKZABgvN08LVtHt4PfZcPjSEOOHGM0hgHLQVZExNaTFOPXbcApIQHInbu1bLzrbtYW2etKdQvZQH821sjTPF%2FTNbmby0tg%2FeCm742Y34FTKqfQk698BB%2F4y8C8KWQ42Yk%2FbtyNhtSI53BJQT4dh7MWsYhbweaDI9CZmHi%2F6gKEb4c6DDpWkHXwyNJP%2BQ430SAi%2FqusfG2vaumCNFOTo4a%2Bb8imkCUzBlO%2Ftyr2ZmZeM%2BLInncMXxyejsusPcZuqh8WL65BXnbrZwk%2BpYX%2Fdb1Ef70PwkrrR7efHZBTel3yEPhaaaZGNKYd2onSMkQVzRQkELG9pdxK%2FWD2Hx58BOoQZDjT3iQM9ODOrt%2FTCEyOHDBjqkAZ5U3ZLvxaCIHpYPSt4ZdBNTeYtXd1wW5yyVqOACYuN%2FXSjCkjzHHtkpKwlwVyxFqM5Eut5irKBsJSp%2F%2Bwa4olCCbNIMP9hz%2F%2FxG59tPD56RokT5udBfiEoYbHv5ZCLhptU9IjB1IznHNNgdonRAzg1QfAt1YAfKDuUzjgNz57R1kO5dVG6qY1%2F81xEOyQJkVESMmuv9bp4FX0%2Bnm9iXYlQfvXRx&X-Amz-Signature=ef445fd72dcac4f21dc967bad7ffde78dc4a16365b99db3a2c63c09771be7b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHNQ5R3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDku5n0dPyQYx9vT7ivM8NIVtnu0%2FW0Hgh61WUL%2FLjPGgIhAMbTMRBZzCYlLBNye1CkWEVouGD9noDoi9CMx1M8V5aRKv8DCGwQABoMNjM3NDIzMTgzODA1IgztXXwBDPzlYh6pCZYq3AM4355wI9cGVN7RHr9OMbUPbSDZvTZDZ4EKxl5GbWtotRPs415x6TM1Q8Nn32%2F8kJfzFpDt9WvL%2Bhw43xtOmUqdSb%2Fmbsch1GacYEzMb%2FqHia8sMjzucfKeuGTo%2BSzMPOOh2%2B6eO3Zj8lmEoHg41gduCbGRh5GpzOhSrcRNLC1TP%2F%2FAPqfu0bFUIcMdI73YJW2W%2BbD%2FMaJePTFlFwufboWyWZH%2FTgRkswRQ%2FZBPsaCWEHociJ4B3hEuDpihMqDwloohy5M%2B91F9R%2BhkH4aYQ9rLqCKDRWOTAejLQ%2FmGDrx80brG6tnHhD2DLVmDGYMDB9%2Boz6esOb4nn9Q%2Ftem%2BO6eybmV4tAvbO1jZryON7VQ5NxDOqE5Udj9WRjf948Qs9ZnfPkkX8sqO7nhU4ZVEQ%2FQCN06XUThw5lBep0xDdICQh%2FA59Y7dw0Ob7Y13EgM7qc74WrzQdrUJHW6NhkEq524Td3hnsWdL%2B9AreUOWt23HDQiWQvx81NHBluxSb24DR0GP6%2FZnLEo5KRD6GAv43DwjhPJTYOPE%2BYvfb2qs0lRiep0EH4oRslBS%2Frx3FP9giNyQD2nwJoGtKAkkmivGaiAgso%2F7KTa4pG6I6gtvvjHmMkVKEVgEKicjtLnJrTDqx%2BHDBjqkARENEoOu8XyodWDdzwd34OJNvHQIt7j%2Fdpp3T1ET9ZyZq1MJgkH1ckDiylI%2FWI%2Bpv1TMMurNvsjFrY0uGp%2FhA%2Fy3hEoSQtr3SIi1EKYbHpHkps8Ot90QSLF0scfuO0PBrulCmNbO308b2VzEhUOzM21a%2F%2FQB6XSdDZcxv%2BiWcEcLdQ52H7W%2F2Rh4MZ0USdHxY3L5kFiCeZM2yBPyp3K23qa%2BI46l&X-Amz-Signature=33bbb5c47f7d450f00e5c0a0b9ad1efb84f57d7ec603305a2b6142d3408a914f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HJS2A3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCiPa0TebqAFYHduWkTp3Mc2nYJIUH3%2FFbh5U7tRgemHgIgKkpxwDnpmrw%2FDQNQ3xXcbJ1xakDSjvCVMztq2ise6tUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDFEIXAcya6wWWjvtLircA%2BLK2DE6fz1sAQ1f5z8H8puOf1p2ULNAUxlFbd8Sb6H0NUH2WezZeoNmSpB6dp4q2aDHjVMnrN5KLP5Xt1PsbCNvSCNjyMv3krlsjOg7RKr5hrLuTrhriC4zJG70M193cr2HOZBwCdwt7IFGcD%2FGSMUDhmshiGP9XJ%2BDdJ203YSKHNJCY%2BcLcoxpik6c2O0AciSge3yBU7mnvCtCJXWZpzwt%2FD17DoXxhuCS5rihwOdMr2bI2LZmS60wO3NP7PSHFiA7CWL1KPIemgQiqWAp7XkIh4JRIU96B8av5UEOHjlvYeInQVGQFOLgg25scVw%2BlcXFMenzX5pDti6hfYHu5Va%2BnAmSRIwH4SLWZO1B49esc9DRpQJa5v00gXcjXVzTMJNZX5qb87B2ilYGVPQ6BU9KV%2BYK6j5F7mdiQhS2jrFZjB3grm4i8%2BdLQRUs1vLq4dH5dCNmBRyFrQAoz08F%2Fd7Yjp9btvFdr0vo%2FkxsSlucgyYi%2B0eZ%2BKxvrqsDvUy%2FsJacWQxEdBUOmyTMuegZuN%2BsY9SLqKJOnp%2FTIvsk46Je2euGOjQny45sVBoO5ACzI%2BAkyJT8jSaIvpIUrliVPyMLw8IoMoa%2FEWDD98%2FZxTdLxancCmVYRVLJtKWfMK3I4cMGOqUB7eTYO3cLTvM3%2FxmHY2TT5McVCMAPBAA%2B4Nsp7sHrKkJkYUFe7gzj9JWFIOcM7kVqzSH3eSXHTETfdGHzxjdByDm%2BPHWO6JVETdSKdrlR0XVvTNT2KajDoJiF9DIejgvlD5NLbCdGRq7LM2uT0ZZjvEhVu0hGaI7tSgSZSxGJ3iUf6gVjHBINaIb9IT1YoMS7tkh%2BmNAz2yzRvHBU2QgyuubsoySO&X-Amz-Signature=4c41a9869c6ebf81ee41189f6d728069576cedced16b767b2ffffe3103a32532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
