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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSJX62M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCr5BZxSb6lpKBxm68hQnsJHUz0mRBL7E1AaXuIj9VDmwIhAJ6VZ8iDUE%2ByO23zBdQUhvMllrSmIb0FPuLBDjIhoI%2BhKv8DCDUQABoMNjM3NDIzMTgzODA1IgwFgyAlQPfy0K6PKOoq3AMIsSPPmtv%2FSA9thVSgyq8ks1KlW%2BjI1u4L2fwZrDCUpvO52BgqJyCJ7auFd2f1wDrpg2Kyfe4DC7IgZdkzuGA9BYDaJz5WWXxHa00OcAdW75bYuz6g02xEHdcWo4m1t%2FrmrWOxS2gamt%2Bh4LNwesFAZVPlCblX4bNiCw0F8pMDz75pZEHjdBi1prB0WCv%2Bww6O9zmd3bb6kCHW%2B%2F5oTlysR3rOpVbXXXlya7PHEVZgcpM825IOSTaS3orPHJe0rsmUDiHoSCLF6FuAHj8PBcMJprKrYIN1iiATED2WA9umiHAcBRSsKnXXNdsLXQ8sWOKhC58qEY%2Br3ucKxg84Pv8pRJFMPqtwAcKLvQRrdlmj9tHk0g4B79ixTCq7aeyCpo5EweAQV7cY43gU8Qynu5QRmhNQ8B8ViEcl0wvqJCpcPu3OfGa002LHkJRYUVNn5DCr4itWzpv1uTug9GugTY4hhbDgE6ywwDE%2BI6M4mIXvfzD9xaFpO0ZZW74NAA5kCDgAdtaFFYY8KQ4%2FFegKfy%2FlDYsFwk5Sx99okG6A4WqvEWEMZQfjeHmRICtRXJO9VSNsOtdZUxIn2XH3ZsP9EXF%2BPfzNoRUs98ysIZB8dnEwPmugS5tIp5U9tqTpeDCZ6KDDBjqkAcdOOm6TZ%2BOQVtCNcv4PbMGwSR6iiAdgiDPxw4LjHnencQ5bznsdAG%2Fvkhr52DUe%2FyTwDNQbWVrVvEuzeVF9rKkQ0JkXmyw69TTFJMjg91OrKT3isz6OoMa07i7f0x%2BtRMkrIqTmLhijJGQEY1ZRPKd8NnM%2FQoKjazX%2Bv55%2F4DwZKXrosp7B0l7w75BrHKHW%2FygqH3bCLUkksDVSB5%2Bt%2FnNrS5qC&X-Amz-Signature=71133334ec743bd6c3c08bd34d8e1f8b98a420ffcb4085e77b110f48655fd1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSJX62M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCr5BZxSb6lpKBxm68hQnsJHUz0mRBL7E1AaXuIj9VDmwIhAJ6VZ8iDUE%2ByO23zBdQUhvMllrSmIb0FPuLBDjIhoI%2BhKv8DCDUQABoMNjM3NDIzMTgzODA1IgwFgyAlQPfy0K6PKOoq3AMIsSPPmtv%2FSA9thVSgyq8ks1KlW%2BjI1u4L2fwZrDCUpvO52BgqJyCJ7auFd2f1wDrpg2Kyfe4DC7IgZdkzuGA9BYDaJz5WWXxHa00OcAdW75bYuz6g02xEHdcWo4m1t%2FrmrWOxS2gamt%2Bh4LNwesFAZVPlCblX4bNiCw0F8pMDz75pZEHjdBi1prB0WCv%2Bww6O9zmd3bb6kCHW%2B%2F5oTlysR3rOpVbXXXlya7PHEVZgcpM825IOSTaS3orPHJe0rsmUDiHoSCLF6FuAHj8PBcMJprKrYIN1iiATED2WA9umiHAcBRSsKnXXNdsLXQ8sWOKhC58qEY%2Br3ucKxg84Pv8pRJFMPqtwAcKLvQRrdlmj9tHk0g4B79ixTCq7aeyCpo5EweAQV7cY43gU8Qynu5QRmhNQ8B8ViEcl0wvqJCpcPu3OfGa002LHkJRYUVNn5DCr4itWzpv1uTug9GugTY4hhbDgE6ywwDE%2BI6M4mIXvfzD9xaFpO0ZZW74NAA5kCDgAdtaFFYY8KQ4%2FFegKfy%2FlDYsFwk5Sx99okG6A4WqvEWEMZQfjeHmRICtRXJO9VSNsOtdZUxIn2XH3ZsP9EXF%2BPfzNoRUs98ysIZB8dnEwPmugS5tIp5U9tqTpeDCZ6KDDBjqkAcdOOm6TZ%2BOQVtCNcv4PbMGwSR6iiAdgiDPxw4LjHnencQ5bznsdAG%2Fvkhr52DUe%2FyTwDNQbWVrVvEuzeVF9rKkQ0JkXmyw69TTFJMjg91OrKT3isz6OoMa07i7f0x%2BtRMkrIqTmLhijJGQEY1ZRPKd8NnM%2FQoKjazX%2Bv55%2F4DwZKXrosp7B0l7w75BrHKHW%2FygqH3bCLUkksDVSB5%2Bt%2FnNrS5qC&X-Amz-Signature=6d8cc1609f0014518ccbcbe4139f21dec990699f114911e86c8445f3f4667cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSJX62M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCr5BZxSb6lpKBxm68hQnsJHUz0mRBL7E1AaXuIj9VDmwIhAJ6VZ8iDUE%2ByO23zBdQUhvMllrSmIb0FPuLBDjIhoI%2BhKv8DCDUQABoMNjM3NDIzMTgzODA1IgwFgyAlQPfy0K6PKOoq3AMIsSPPmtv%2FSA9thVSgyq8ks1KlW%2BjI1u4L2fwZrDCUpvO52BgqJyCJ7auFd2f1wDrpg2Kyfe4DC7IgZdkzuGA9BYDaJz5WWXxHa00OcAdW75bYuz6g02xEHdcWo4m1t%2FrmrWOxS2gamt%2Bh4LNwesFAZVPlCblX4bNiCw0F8pMDz75pZEHjdBi1prB0WCv%2Bww6O9zmd3bb6kCHW%2B%2F5oTlysR3rOpVbXXXlya7PHEVZgcpM825IOSTaS3orPHJe0rsmUDiHoSCLF6FuAHj8PBcMJprKrYIN1iiATED2WA9umiHAcBRSsKnXXNdsLXQ8sWOKhC58qEY%2Br3ucKxg84Pv8pRJFMPqtwAcKLvQRrdlmj9tHk0g4B79ixTCq7aeyCpo5EweAQV7cY43gU8Qynu5QRmhNQ8B8ViEcl0wvqJCpcPu3OfGa002LHkJRYUVNn5DCr4itWzpv1uTug9GugTY4hhbDgE6ywwDE%2BI6M4mIXvfzD9xaFpO0ZZW74NAA5kCDgAdtaFFYY8KQ4%2FFegKfy%2FlDYsFwk5Sx99okG6A4WqvEWEMZQfjeHmRICtRXJO9VSNsOtdZUxIn2XH3ZsP9EXF%2BPfzNoRUs98ysIZB8dnEwPmugS5tIp5U9tqTpeDCZ6KDDBjqkAcdOOm6TZ%2BOQVtCNcv4PbMGwSR6iiAdgiDPxw4LjHnencQ5bznsdAG%2Fvkhr52DUe%2FyTwDNQbWVrVvEuzeVF9rKkQ0JkXmyw69TTFJMjg91OrKT3isz6OoMa07i7f0x%2BtRMkrIqTmLhijJGQEY1ZRPKd8NnM%2FQoKjazX%2Bv55%2F4DwZKXrosp7B0l7w75BrHKHW%2FygqH3bCLUkksDVSB5%2Bt%2FnNrS5qC&X-Amz-Signature=f00fdfbf330ae9d12a756b76858e5f51448ba4e3bb55ed064ff3a8816bfed3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBAZSNSF%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDwJfVVyz%2F9T8P5x7UHMza6wQ77%2BPe4kYre%2B2z50H2cFQIhAMAfXFzSKOhKi02R8WVrfXbnGlM5RethlvjHwzmq345ZKv8DCDUQABoMNjM3NDIzMTgzODA1IgxywL49%2BcIJyKj%2Bc5wq3AOBckdaMjfDOtvUGKZHb7w2sCZKw3mN5FR%2FGYQii4Fqb5%2BhEL%2BaJ4M5PnycMdjFA4LEvCBdpODF7QWESFaT41Ry%2FfnKWtybXwUSzjSUmllc08rFoHUCqCSbW2LC6GBJ3zvmqOELLna9Ifo2vv7awJLox5ayN%2B355WMW8pYrOMj1Vp0s591uw07qX5lbbPTY5utLJt46OxpCIVqvrZn4%2F%2FRjYL6XoTS%2FBSS9gurGUjnn0emZQkmpRgySSLAguvf%2BWMOTlewPptZjrcoEUSyD18508t%2FOGNhO8BUgksv%2F%2FkN4C3eCBx3rm%2Bhzl4mj3Mpd4IPg7KgH93F1KoNioxkqaWhCWWC8hLxuvPezZXytbdAeB44lrI4pgk6JPYYDEqGIjmNBwav4W%2FNWy5vdIYMkrS560%2Fyqh30UhA4i%2B0C7QgbhvQw6msNRymVimoJkYCs1l9e8YXE0%2FMm5E6%2F6u%2BH23tPv5I0w8KxhSvmjvvFL0wuPpMx3GZZtRK06lYaNkgS2Eld75FGZ2tdTnUHC%2F576rCNfiqFdIvSBx%2FBhrcDxNPbiD6KJekHZV%2F91IDJyL%2BN3kvQH%2F9nt8hhFGQyM2DOBOQQojYQ9xJadqQwhdz88m3XSuI2BD9tzD9UdWjKsrDCY6KDDBjqkAZSmhYvekkRVatzLPQgzeQAzQUPnyDd7MPvv2qwP1Cde8p2dbFsqNiStkJjiATj9AiMpMYsAyTcsSJ2Iwn0k6TbvEh3sL%2FvxhIDFoFMrEg6zODlG1rVaOmMAjMxGzX644Agw0izPAbwgFgEiN%2FyBPMNIBlJJvc9nceUuLaB1qjvzLgn0t3EavEI3AlPAUQlq61HD6ogtY%2FQt2HYG%2FRrVj%2F%2BzxyGE&X-Amz-Signature=ca95d8791f59db07bb3046d6b969957f14116bef9e6628972b5c6f5d2bdbc05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQKWU3T%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCZln%2BfgFItBi6w9ToxsG2NBED5lQd3i0TzkSbf10%2BpNQIhANbYC72fp36lGD3bqJd24jgvwp2d4vvWtCxRV7dk9B3CKv8DCDUQABoMNjM3NDIzMTgzODA1Igwi5GxTqD273pqugG4q3APRAxyI58fwqSgez7tMOhuZWiOvEayHpPrfOPFVD6F%2FuiE83t6la9KdzRnYtrZNBBEY79BlSgdJH3BuQfI9T5EmFlHSqymRYS4nrE2a6Gi%2BHfZuFt4x38dHXW2XbH7QtK4SKyEpO0VNduEhQ3asn6zSmVkhOBgJ1WD0NVVwaixS3anwzba43GKbqhboPQNMliHr6ypbA%2BFuxstDdMC4QjtRawETwR4LYkRtNFNIlyShiufpRd1vl4vISBOrYVbWCC5%2FJNgp1UhgIHUp35N%2B%2Fo9WIbjm3orktl%2Bhww0dHG5sYYDNNsyLW9KYdTBjJR0%2B5%2Bst6fbJbzlKVE9dWSIG0D09X1m9kRkwxELBNjhXlHyMacFFbseTiGDb8rO1alu7TxiuL6boQPlHs7E5%2BBI%2BKoGWYcp0tBbwHsmRUjatu73DKDpTGFjQQyV5f5UaqkgGde5DA7uWOMQW6Xube%2BFTx4D08WjQVps6jQurOumKtiCQ4a2jCc2YPGvnS26NmNh5ycj0eWmjHlcdtcdOTgRIxcD3OsGFZ71yCzEETXFcwZGsH5LV%2BZdF4xl18s%2BHikTHrCFqSuwWPfF6PRlUVxMQfKk5qeMIfSf30%2BqRB%2FRvXia6rJnjay6e01bo0RVzkjDW56DDBjqkAe5rkasiWz%2FMiwlSk58J%2BoVv20hl36atLvIAz0cygUOJf4BK9UHK5LaX6bYSaQdexPd9TX7vGl6s6gT2xSFI7N%2BT6vn5cpHr7zpmM5jDjgxdInwMMlg5JWL26z8jXbVy4lJtfk3eNloDj%2Bh48JhxBzmP%2BG5P1Wt9K96DcHm9gFUUrG76U44A%2BzKihtQM%2FBOtTq%2FxW7VnqrRItsCsLjYXXgY0eIFU&X-Amz-Signature=7462ea531072337f56042ae98742583750fa2a991c8151f99b218e3536ce2ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSJX62M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T004040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCr5BZxSb6lpKBxm68hQnsJHUz0mRBL7E1AaXuIj9VDmwIhAJ6VZ8iDUE%2ByO23zBdQUhvMllrSmIb0FPuLBDjIhoI%2BhKv8DCDUQABoMNjM3NDIzMTgzODA1IgwFgyAlQPfy0K6PKOoq3AMIsSPPmtv%2FSA9thVSgyq8ks1KlW%2BjI1u4L2fwZrDCUpvO52BgqJyCJ7auFd2f1wDrpg2Kyfe4DC7IgZdkzuGA9BYDaJz5WWXxHa00OcAdW75bYuz6g02xEHdcWo4m1t%2FrmrWOxS2gamt%2Bh4LNwesFAZVPlCblX4bNiCw0F8pMDz75pZEHjdBi1prB0WCv%2Bww6O9zmd3bb6kCHW%2B%2F5oTlysR3rOpVbXXXlya7PHEVZgcpM825IOSTaS3orPHJe0rsmUDiHoSCLF6FuAHj8PBcMJprKrYIN1iiATED2WA9umiHAcBRSsKnXXNdsLXQ8sWOKhC58qEY%2Br3ucKxg84Pv8pRJFMPqtwAcKLvQRrdlmj9tHk0g4B79ixTCq7aeyCpo5EweAQV7cY43gU8Qynu5QRmhNQ8B8ViEcl0wvqJCpcPu3OfGa002LHkJRYUVNn5DCr4itWzpv1uTug9GugTY4hhbDgE6ywwDE%2BI6M4mIXvfzD9xaFpO0ZZW74NAA5kCDgAdtaFFYY8KQ4%2FFegKfy%2FlDYsFwk5Sx99okG6A4WqvEWEMZQfjeHmRICtRXJO9VSNsOtdZUxIn2XH3ZsP9EXF%2BPfzNoRUs98ysIZB8dnEwPmugS5tIp5U9tqTpeDCZ6KDDBjqkAcdOOm6TZ%2BOQVtCNcv4PbMGwSR6iiAdgiDPxw4LjHnencQ5bznsdAG%2Fvkhr52DUe%2FyTwDNQbWVrVvEuzeVF9rKkQ0JkXmyw69TTFJMjg91OrKT3isz6OoMa07i7f0x%2BtRMkrIqTmLhijJGQEY1ZRPKd8NnM%2FQoKjazX%2Bv55%2F4DwZKXrosp7B0l7w75BrHKHW%2FygqH3bCLUkksDVSB5%2Bt%2FnNrS5qC&X-Amz-Signature=2cecd86f41af25f515e5ebb1c9e0e25d444b416e3ff50bed9827fe7233d5a280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
