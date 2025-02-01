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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAGUCIN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqToUwZWcDcrMZyPJXFjO0qLW%2B%2FdD%2FoVUhNMut9%2BuCZwIhAPJOBwYcsXT4p7x9b1uddUfb0%2FFiPIa7BoQtz7PkpxePKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxskN0uvEm%2B9W66KjEq3AMmrVXJB4v%2Bw%2Bin7LkYaSH%2FMp4gfJ%2B%2FKRoKDWrXFOvlCVRxvPtBW5HaBzbPfMqdPWZsP8bklnNWRxrCD3jQ6MoNPzQHfva1zCvJUS93ioLEGvq%2FpSxGJaMCh7WO30q8WTDZPj93G4y%2BZk1sB%2B3ozu7Ka0JfWh67xaLXeXh3Rrm0jIYgSjmKWs%2Bmt4DviDvZRuD6Np6rv51IWzPedwicsJRMz1LAsq17CSjzhsa%2FWVH%2BKUj0izxY7WG5MCdJsxlv%2F%2ByIBIH7vrCAnM96s%2BfW8iAOvAU6PSpiQD%2Fx3DQtdpSraqTB67VGMXBKHBnAFdaQ34L0KrDf9G4CdCJkYen4M7ssBbAv%2Bbq1h%2F%2FCgP7JyjLXMfkjLNP8LGfJ7bqV3iZyGv3eHnrl6TIf7wmN%2BZ7dYFnte%2BLSz9ohJbkPTT1%2FMeZBXZ%2BiQnXo4R4IZnDw41goal36KAvDa8jRhfpy8TEGG8kZuEZPtWfvSOpkMDXKiWvNPODLQvxcwCXw9v2HkATn7CORqqLghb7zn8L78f3LDd6flTuIeGbKrqCbmdZSsY%2BXOwBL6WqRtXoGgY5tZTFuRuUhn0tX2ocBqKwv0egtikanYHFBTWUM7v6Lk9amGShCfihm2RvNaOAFeUbX2DD2w%2Fi8BjqkAQvayz5bnFFoquoyLHZdUgzaZ9YNRPKWCY%2FtEBrfoEdAdqPhOMd30I1o3NSMMWTqUF9ITlksz7vljqI5yKXhh%2BkCqQyqwOQZ9O4DUZ3UTd2O%2Fynk0wnh0ShKwkUeN8uXvW7hEMSgiV1aDb87itbXba2Ydq3aTMkjrUiUBC%2FsXdJfen89wcyP2rle%2Fw3LdRpoQ30FeVKXYinoApuYfTNZtfZSoh2B&X-Amz-Signature=c45cfc4bedd50f86448f9c547f9dfa46bc21c5a8f04b900f529aa092772fc39d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAGUCIN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqToUwZWcDcrMZyPJXFjO0qLW%2B%2FdD%2FoVUhNMut9%2BuCZwIhAPJOBwYcsXT4p7x9b1uddUfb0%2FFiPIa7BoQtz7PkpxePKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxskN0uvEm%2B9W66KjEq3AMmrVXJB4v%2Bw%2Bin7LkYaSH%2FMp4gfJ%2B%2FKRoKDWrXFOvlCVRxvPtBW5HaBzbPfMqdPWZsP8bklnNWRxrCD3jQ6MoNPzQHfva1zCvJUS93ioLEGvq%2FpSxGJaMCh7WO30q8WTDZPj93G4y%2BZk1sB%2B3ozu7Ka0JfWh67xaLXeXh3Rrm0jIYgSjmKWs%2Bmt4DviDvZRuD6Np6rv51IWzPedwicsJRMz1LAsq17CSjzhsa%2FWVH%2BKUj0izxY7WG5MCdJsxlv%2F%2ByIBIH7vrCAnM96s%2BfW8iAOvAU6PSpiQD%2Fx3DQtdpSraqTB67VGMXBKHBnAFdaQ34L0KrDf9G4CdCJkYen4M7ssBbAv%2Bbq1h%2F%2FCgP7JyjLXMfkjLNP8LGfJ7bqV3iZyGv3eHnrl6TIf7wmN%2BZ7dYFnte%2BLSz9ohJbkPTT1%2FMeZBXZ%2BiQnXo4R4IZnDw41goal36KAvDa8jRhfpy8TEGG8kZuEZPtWfvSOpkMDXKiWvNPODLQvxcwCXw9v2HkATn7CORqqLghb7zn8L78f3LDd6flTuIeGbKrqCbmdZSsY%2BXOwBL6WqRtXoGgY5tZTFuRuUhn0tX2ocBqKwv0egtikanYHFBTWUM7v6Lk9amGShCfihm2RvNaOAFeUbX2DD2w%2Fi8BjqkAQvayz5bnFFoquoyLHZdUgzaZ9YNRPKWCY%2FtEBrfoEdAdqPhOMd30I1o3NSMMWTqUF9ITlksz7vljqI5yKXhh%2BkCqQyqwOQZ9O4DUZ3UTd2O%2Fynk0wnh0ShKwkUeN8uXvW7hEMSgiV1aDb87itbXba2Ydq3aTMkjrUiUBC%2FsXdJfen89wcyP2rle%2Fw3LdRpoQ30FeVKXYinoApuYfTNZtfZSoh2B&X-Amz-Signature=9fd9a84c060658d97f2eb97050b7e4f7506b82bd2b25b80a3b0d49e12748544a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQXKWRA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMeF9kzswLJl8AysZ%2BXxk1aYK8kPFRCc3LpF4%2BETmtPAiEAy%2BjhoxYgGPEr1BP9PUQgTW362Z5pyG%2FpZfEI%2FJr9CFUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F9RASvGAs9ldV64ircA8bGOgM%2BUe%2FbguXiGwLZ2jH5sa3L46jKc3yFBvXTs4Ki%2BhK7Zwfvvc%2FEM0nzPHivAD5GAKZFJWxDSUVf3oStQw165j4HkHAOfkAy2HmFW7EU%2FD55MRb5U6QJBcMThhZnPKmJeem43UBITy03x0kJjuwzg6eSf9ssajYf0Rn95%2FvDr%2BKQxlMnCjMeloAt%2FJgCE5ZU7lH2f%2FSlGnred4o2EyFvdWyL2A%2FFdWJchqZoPPdTqLJFtfy2ExL1SVBjYMwbXUmaj5%2FUhk3amEEo5CUVvzmx%2BcQjcKipDXbH4NdnW4CVn3k0CgVvdepw%2BJAqsBc2cKVqqNi%2BqOSfe4q%2BtvWzjOF4rkFbgxNb%2FY2mj0LRYl3834ip4dzZPINM%2F7oN6XLfaCKic%2B%2FpEonQ0MzBFGcjVs4jxz%2F91HmAwVvB0nJUwkGy44IcaG6AWm50b2R2oJ7%2BPOjuzMKcBCu5%2BPbNZkekcd9oXonacOaSBL0uFR64RKAKY6xmFjgUitIsmnBUZE4PctijYywTjKbMwOLoPET3UF8Y0es9v%2BFkwol2VxOpILDWwE5HUPFPwOv2Hnz5Be2J7Sj%2BMnpf31YnBCZ2lNKj95CY0WiwhkuPlLLQv1XFsB7o%2BQUuzm%2BFJ46VS%2Fk4MO%2FF%2BLwGOqUB8e%2BlDuvKUodGvKvt0VscaSPTZ14A%2FI6hBACxu%2BZZxyTfTrWLRbXKwSZGZ20SnxJTqg7vd02DgQOdZHzMb7iN9lPmgHbd7CFeVLMOTZ6AWkZBtITS8spF1Qz%2BmLuebyI7%2FRuIMuALM%2FqPJ2%2BOvd4CPwk9axcOBl2R4fWtVUB5Xv3m8w4Bk2gn5pvi8VGZitr766PUrQ%2BctKobeoptqbuVBeFtHolO&X-Amz-Signature=449aeeecf6cfba83e9928a964afae5273474195f2af913b88e838c2b95777a95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUTQ3VYE%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBkiepfL4VNwxoGiZdThV5p%2BnINcQOfGIqlZbFInAsE5AiEA2B8fCGhr%2FEzP2Uc6yfQhUvqmXwjcB1huhkUXTAzTqC4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhLRLp2WIdKlypfSircA%2Bfp6s5Q72CRbFKePX6CwPp9XOTOBHu8IFc3L5evwA%2F2ivvc7ZL2S6j9OJKir1lk0nZvuUulnGzz2O93wOx6BfOC6aGZgd4BoMnQX3W3Sd4s8u%2BodOurfFWk%2FJTb4fQoR0R9rf4w3df5na1cluQ84ub%2FwnIxpl1zxu4Dk29coDE80wieCTQuWVGI%2BhP9frNnUSKOWkNNNIdHoApnhQS0DglaGTjzr8vUbjv7t6JvjiEK4qTqII6nMlwj4NOPgVBJKNJBQgLuTsLObT2RpA2CVkaxngJs6vgYD%2FkFcVLCW90ZtJTX2kQtr%2BDxyi63BN8D15jd%2BJgsP%2FcDQdpp4cwP%2Bc%2B38zwsZkg6CprE3GWpvs8YqHP1w4qDj1%2F%2FD1EZeT7f%2Bpt9TwYcok%2FvXyhfFFN7JqJ03gS%2Ftnem%2FsxJpjXXi0KpCunYYwAKmTH70blxg%2B3Wt9MNFYWv3x5ukvsIYOzsgY5rH8EULxCUq3nUUImK5lgv9QdufgIUJUeTq8L5qjG4tQFiKUqbiRDuevvMsNaT6FkFeI6zZ0Ob3ZPqZ2ePOcC1W4qBSA74wPj31K27M75uQgQVAFmKyU4ozYceclz6lyJYIGZsHcUoVqe1c6LsgyKLmJwI3R2CvXG6kYcIMNjE%2BLwGOqUB33YklTV5Gczrq5tmhHttpey4Qx02oq2CnHz4ZxpHw%2BnhVpr4yZ%2BnT0LvGui13WV0%2FPqGFPTnBA0WNvWOlMTVuBFqrUGCuEUmH%2F8ntJTTeMyNbU7FoICjP3ARfpB%2FE3ZZTkQmjjmg175Tl%2FK%2B7JqCfMp9grNc7hiZ%2FuqjIBob38c5Bp0uPGHLuKJyd%2F9oQ7fRjW8u3146bX6XHHKjQ6cVoBjoSBt8&X-Amz-Signature=a5872ca06357a05511b5ba76a72bf5de1855da2ccd28027e6480c4874fa0e490&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAGUCIN%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqToUwZWcDcrMZyPJXFjO0qLW%2B%2FdD%2FoVUhNMut9%2BuCZwIhAPJOBwYcsXT4p7x9b1uddUfb0%2FFiPIa7BoQtz7PkpxePKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxskN0uvEm%2B9W66KjEq3AMmrVXJB4v%2Bw%2Bin7LkYaSH%2FMp4gfJ%2B%2FKRoKDWrXFOvlCVRxvPtBW5HaBzbPfMqdPWZsP8bklnNWRxrCD3jQ6MoNPzQHfva1zCvJUS93ioLEGvq%2FpSxGJaMCh7WO30q8WTDZPj93G4y%2BZk1sB%2B3ozu7Ka0JfWh67xaLXeXh3Rrm0jIYgSjmKWs%2Bmt4DviDvZRuD6Np6rv51IWzPedwicsJRMz1LAsq17CSjzhsa%2FWVH%2BKUj0izxY7WG5MCdJsxlv%2F%2ByIBIH7vrCAnM96s%2BfW8iAOvAU6PSpiQD%2Fx3DQtdpSraqTB67VGMXBKHBnAFdaQ34L0KrDf9G4CdCJkYen4M7ssBbAv%2Bbq1h%2F%2FCgP7JyjLXMfkjLNP8LGfJ7bqV3iZyGv3eHnrl6TIf7wmN%2BZ7dYFnte%2BLSz9ohJbkPTT1%2FMeZBXZ%2BiQnXo4R4IZnDw41goal36KAvDa8jRhfpy8TEGG8kZuEZPtWfvSOpkMDXKiWvNPODLQvxcwCXw9v2HkATn7CORqqLghb7zn8L78f3LDd6flTuIeGbKrqCbmdZSsY%2BXOwBL6WqRtXoGgY5tZTFuRuUhn0tX2ocBqKwv0egtikanYHFBTWUM7v6Lk9amGShCfihm2RvNaOAFeUbX2DD2w%2Fi8BjqkAQvayz5bnFFoquoyLHZdUgzaZ9YNRPKWCY%2FtEBrfoEdAdqPhOMd30I1o3NSMMWTqUF9ITlksz7vljqI5yKXhh%2BkCqQyqwOQZ9O4DUZ3UTd2O%2Fynk0wnh0ShKwkUeN8uXvW7hEMSgiV1aDb87itbXba2Ydq3aTMkjrUiUBC%2FsXdJfen89wcyP2rle%2Fw3LdRpoQ30FeVKXYinoApuYfTNZtfZSoh2B&X-Amz-Signature=b69ab1c474d8cc14d5eae1d84a2249135ffaa25075d1de13b24be9a28a699a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
