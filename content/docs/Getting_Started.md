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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZKDZ5F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvRv0iEEc9eyKJzYHfg84TSOgohxsw4H7H3l0EWSKBnAiEA6Cv6ZPLefstaq4sh62%2FNaFNAFif4g5EuPqPK6rgIv6Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDx%2BKNXAUYqkIRenDSrcA3FS%2BGiTwMGB%2FozsKofD7mjbLBGX1MU4%2BgrEiZ%2FSKTbRiH8mADsIxwhL2zdN%2Bbnv5gaG2qQxscS6NeCFUfO1dBWaG8CMr%2BtBKw%2FLB7pVUs2iUnX1GUkY%2FpDltHN71oXd9qZ%2BhgtljFrqsGDq1kfU6eg1R4f6pn6JEVUV7AbxhIB3Ii%2FzwgJjMWikFoBIsXQ9scpDDT5qbB89L4atsp%2BimWZj%2FihC4nJbzuKlsx%2Fscemgv5yslvTCI9knObXsLq1OMql3g1YosVw0DtuorZ%2Fgvb8rxxjwgLqWZ40p1M9nBvhFWnnm9v%2BpTak2HcxenFy4LiLelxxIfgv8FyeDAlq1QxkpDlnbIA6f9cBLJQEGKQBpg8cME6AmJFim%2F4pxqNAySEUtha3CKXJ6bCCsIWxr19hjoOnzuu6YFgi73nmLZ0uOI%2FqvcwDtP0jrNfh48S5QTTRTgRhMNeVLzSHHygFYOXWOcP0V9izyESuOiPXJNbqoKmkYACuj5lK7auLhjSIxaTIMx5%2FtOub6TbPw4IWvI%2BMFhgBazfFIA8EgnckOQD6XfcTPMXHWhpPxVobZ%2B4zHrIWsRdbRF1f7pDGpdRvG%2Fe%2BSOrctHXsx2XS5lXyqKouZ4LXvh7RZ%2F51VOwWiMLCey78GOqUB0NS%2FqVHvVyjuQ2C%2FdAA2HZHI7F1EPUiH0MsVWlysrGo%2FPsIZTNc0jBY8%2BixDmX%2FR4R67GxUfwe5Gkssjo%2Bo5DyV8wj2Eiw11Hk%2BXFoVBIDB1PHVzMmzwgqSHjC3XImF0Y8GgY7tD8wMBeqJ%2FnP0JTeqttvmMRhYpR9eKi1WQAfuiyu804B3Zv1yNatbYEKvhF735nRwov4sbR2X0zfhaKpYaYcs3&X-Amz-Signature=d0098d8e55a573529339d879c4890f816e767cd571b65cbb75e6352989c5c719&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZKDZ5F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvRv0iEEc9eyKJzYHfg84TSOgohxsw4H7H3l0EWSKBnAiEA6Cv6ZPLefstaq4sh62%2FNaFNAFif4g5EuPqPK6rgIv6Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDx%2BKNXAUYqkIRenDSrcA3FS%2BGiTwMGB%2FozsKofD7mjbLBGX1MU4%2BgrEiZ%2FSKTbRiH8mADsIxwhL2zdN%2Bbnv5gaG2qQxscS6NeCFUfO1dBWaG8CMr%2BtBKw%2FLB7pVUs2iUnX1GUkY%2FpDltHN71oXd9qZ%2BhgtljFrqsGDq1kfU6eg1R4f6pn6JEVUV7AbxhIB3Ii%2FzwgJjMWikFoBIsXQ9scpDDT5qbB89L4atsp%2BimWZj%2FihC4nJbzuKlsx%2Fscemgv5yslvTCI9knObXsLq1OMql3g1YosVw0DtuorZ%2Fgvb8rxxjwgLqWZ40p1M9nBvhFWnnm9v%2BpTak2HcxenFy4LiLelxxIfgv8FyeDAlq1QxkpDlnbIA6f9cBLJQEGKQBpg8cME6AmJFim%2F4pxqNAySEUtha3CKXJ6bCCsIWxr19hjoOnzuu6YFgi73nmLZ0uOI%2FqvcwDtP0jrNfh48S5QTTRTgRhMNeVLzSHHygFYOXWOcP0V9izyESuOiPXJNbqoKmkYACuj5lK7auLhjSIxaTIMx5%2FtOub6TbPw4IWvI%2BMFhgBazfFIA8EgnckOQD6XfcTPMXHWhpPxVobZ%2B4zHrIWsRdbRF1f7pDGpdRvG%2Fe%2BSOrctHXsx2XS5lXyqKouZ4LXvh7RZ%2F51VOwWiMLCey78GOqUB0NS%2FqVHvVyjuQ2C%2FdAA2HZHI7F1EPUiH0MsVWlysrGo%2FPsIZTNc0jBY8%2BixDmX%2FR4R67GxUfwe5Gkssjo%2Bo5DyV8wj2Eiw11Hk%2BXFoVBIDB1PHVzMmzwgqSHjC3XImF0Y8GgY7tD8wMBeqJ%2FnP0JTeqttvmMRhYpR9eKi1WQAfuiyu804B3Zv1yNatbYEKvhF735nRwov4sbR2X0zfhaKpYaYcs3&X-Amz-Signature=1bd24a8a807fecf61237cda569aa7594b25d836dbc2238abcc08f90d7333124d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHM3WCFJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8%2BR04T9v5o6G0mZHGmFpRqGLHxJF%2B1CXZ0h%2BvZRWyJAiBbT3jwwz7wX0vKE6D0YXgWgEdiLkX5qgRkU814O4Dagir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMkfxIHAHIApL94thuKtwDeNLCHUkXaNfNrE6vxENpBkk5wdfyFtFST3yvUaI%2Fm8g7Qr7BsPFGpHOZy82nBbYD5vmNUQdCBsIaRwQnPkDSF%2Bwy7PRCwqp6ea1649ueUaWLFx6m3o3ixZyRC4uhEYFOkiT1LvgYxbwRLlG1EjsnCrDVZMSSJ2HJkNFN1VtEitWF9j0h3sI%2F%2BL62rjQeS4QitIvj0p98vUKckpXRzXPd7Z%2B8UWtLKX4rtP6WaCkulgVths7p07iYzQDevZPsAAjUbkL5abWTRJAu6R7xg52bbP4T5z0Sw243LjAVjUR9bFbRLJ%2BMeNp%2B2VSJN%2BJ6vFA2FKc8QK%2BkhEnYshmqWISNFmnKq61hHXKo%2BpiofzoVBLxlvFj6EF6uXypKCkANHYHICaL8hDuj7G2xn6iPxIQPjF39rbU7LYqcCNi4Pb70Cl0ck60pBIC1nvDkdsRISF1MVKoZO1s4L28OrnLgZjt%2BQdR3v6aSIq5P24u2%2FCDCxroCajBGm9H3x0HwJIy6oBzvIPmGCmCDWsrIFbaGOiCzPp782e4P1o%2B6GeLa7kz8iZvF7dZemVluYMpp1T8zVjvU62PodS3Go6V4mE61hhby%2B1f1gDxdFBDAT%2B7iYZw%2B7S6tJICDrgM%2BpVgClTQwmp7LvwY6pgFQi7NjPSN9JffABcQF31PlAJebDZ08jJaRjBixBeKBbcnChNA%2ByazQmDJ6CSlR4uWyY4Lhkd6QQqF69w3sNk%2BEQo3emSfGYTtU7B0elJVpeOcxmTggzlgJbIGJCycfU0cajVfBx5m%2F3WNE7iF4vs5lC%2BAfXcnm%2BwkOC54ABNtcAZcX5aMZGnQ2ljeBhbGZphL6Qh64%2FcrTS6K9JbbvtBkFGNgA0d0Z&X-Amz-Signature=b8f963d65f992245610731c29ded50455349259b604a412f9d8125bb6537a38f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YTUPO2H%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjcVB85Y7CUqZbX57iF0kDYoyl%2FJBX85QVQaqHpQI%2FxAiAnzdKcgz0U1I0E%2ByNJpxLlC14IE8q2pCg4BsgBEep%2B0Cr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM2HpSrl2mgwGIK51BKtwDcbywsk0lcgIKrbWGoIBWSQGd2PzkNgZGyliT6Dajn67TSmL%2Fs2zDqqMc4%2F7mOG5a0gojc02uqWdDiHe2yZ53osRMVfKVZ9Q%2BJ7S51pYnBlwqb4%2F69Qohm1dN7m%2FssFlx1oAtACC5tLUWWqVZnViVjnR7DcPLmnUYkdK74iWBUNsfAjwOvegpBNhmgu%2Bv4FPBbDxPw9J9ZIPRRNcAwSbINaFdXgsZe3wJr5nRurztRSiBRFwIAQ06Km%2F%2FedqU8tVuoEMzKCIsT%2FkQvSsNva0iJgVlvvKZGGF4rs7QtuUoYtAGHXY%2FQtMIeWttzbK1kBx427KsrevHX%2FfyLWUmwRereYuACHwHfSac3dlic7xKvsvHB3o%2FG0xyLL54LNP9%2FBmPnuUBH380f9ip5BHz4XhQRU9l337sR5J%2F%2FuF%2FmPSYdy8w4mRKUx4%2BqX953RR0cMuufgDKdIQ4h75XTG4RYFMIo%2BnGBEKDKFGSRfBIa%2BrF7bY20R%2F1yI6wcE3MdsSsl4IUD%2BM%2Fgxqgl0afVOsBLPqtFaAnFly6fiaT7wO72X0rEswDZ6B4M3%2FYxdomQemceX3UM7cdYHbJv7DPOPw4Pum18VEZ3IUCXaQVLf6CY70XxS9S5wcBOsqPmlNbFL8w9Z3LvwY6pgHaZ%2B6Br6wKLPXTdyI5HnmDzeeGvCqmqs94zFmb5NcLTYzrR%2B902E1VvdnjtmzOVM3yGXjTvWM38Z3PFUVI97JYO8lsoM%2FOQTzEzSnwakUhxxFCx2Sh38x3EajC7CRDsUK%2Fk73g%2Fn%2B1lxLmYPUd1RHIJ1U5HYNoS7dVJBRlJDuSMYIgxhhvdUbft%2BDp%2B%2Fcl7AmICwGlN0fUARGsHyt%2FsShIJ4Ac9KiR&X-Amz-Signature=9895203cdcd0d10706912028d89e8264feb3becfcb5210fc77dbd34ea7f589bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZKDZ5F%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T210313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvRv0iEEc9eyKJzYHfg84TSOgohxsw4H7H3l0EWSKBnAiEA6Cv6ZPLefstaq4sh62%2FNaFNAFif4g5EuPqPK6rgIv6Aq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDx%2BKNXAUYqkIRenDSrcA3FS%2BGiTwMGB%2FozsKofD7mjbLBGX1MU4%2BgrEiZ%2FSKTbRiH8mADsIxwhL2zdN%2Bbnv5gaG2qQxscS6NeCFUfO1dBWaG8CMr%2BtBKw%2FLB7pVUs2iUnX1GUkY%2FpDltHN71oXd9qZ%2BhgtljFrqsGDq1kfU6eg1R4f6pn6JEVUV7AbxhIB3Ii%2FzwgJjMWikFoBIsXQ9scpDDT5qbB89L4atsp%2BimWZj%2FihC4nJbzuKlsx%2Fscemgv5yslvTCI9knObXsLq1OMql3g1YosVw0DtuorZ%2Fgvb8rxxjwgLqWZ40p1M9nBvhFWnnm9v%2BpTak2HcxenFy4LiLelxxIfgv8FyeDAlq1QxkpDlnbIA6f9cBLJQEGKQBpg8cME6AmJFim%2F4pxqNAySEUtha3CKXJ6bCCsIWxr19hjoOnzuu6YFgi73nmLZ0uOI%2FqvcwDtP0jrNfh48S5QTTRTgRhMNeVLzSHHygFYOXWOcP0V9izyESuOiPXJNbqoKmkYACuj5lK7auLhjSIxaTIMx5%2FtOub6TbPw4IWvI%2BMFhgBazfFIA8EgnckOQD6XfcTPMXHWhpPxVobZ%2B4zHrIWsRdbRF1f7pDGpdRvG%2Fe%2BSOrctHXsx2XS5lXyqKouZ4LXvh7RZ%2F51VOwWiMLCey78GOqUB0NS%2FqVHvVyjuQ2C%2FdAA2HZHI7F1EPUiH0MsVWlysrGo%2FPsIZTNc0jBY8%2BixDmX%2FR4R67GxUfwe5Gkssjo%2Bo5DyV8wj2Eiw11Hk%2BXFoVBIDB1PHVzMmzwgqSHjC3XImF0Y8GgY7tD8wMBeqJ%2FnP0JTeqttvmMRhYpR9eKi1WQAfuiyu804B3Zv1yNatbYEKvhF735nRwov4sbR2X0zfhaKpYaYcs3&X-Amz-Signature=fcf74b76fb9f04c49823a70ed9d626ac85ead5d7cd63aa95b9c8b3872ea8f81e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
