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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SPKHSV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIH6AtXBgL2KXFYVzeKSncSKh%2F62gfvFksx2U1OZXSE75AiAWAmsTa%2F%2BXPu76k5Zjrr%2BKyceSoOR4j%2B0k0ijsY4WEaiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIzUkLOyO7rOLjJMKtwDZq2nC05lsw3Y0TyEC%2BufTcwFEOJCkiC4cHCyUlE3UXmhoVZEP1YFDdPu2W3E8rIY3nn%2F5%2BWc%2BHexJ0XGudoajoS7K9aGi5nx62WVyJ5MoTq9%2FroLhKdLNmkmmszzSWd7t6FxaWu5U7mntOT3I6x6jMl1YMLRv3NETIaakBCKoKp5JFf8q9%2FnQUsA8Kf9MQFYGCrqVlZyFlGQCFfxeUtGhA%2BRReOjoe6akx1JBF7EwOlbBfw3JdURfXtr%2FO9YOX6HulVJdkBB4YnDf3ikSFbiFip05ofc36BCLFI5NcAu5Z65ELj8%2FIWfl5drrsjsd3xgU0N%2BidIlIvaFilTfwwFSNKswkuP73jtiCzY%2FjPcHx5Imu%2BsIbsm2xvCyopteS3M9JVQEDf0D6c%2B8g3lD6rBSnk99RkHzVc%2FJj8sYpWhE2Adn4h3eoSgGKhsVU6BL35vCU09TKRCW8UrhVFVj5XFfzGi5HP%2B9y1Tf27VScPdzPrxCAu50TOCXVqAMvK5SylD4I2icZKTN%2Bv0TqaaAhddJp%2F7h1qMHMCoZk%2FTx0RtHDjLA%2B058EBJLBMQE9dyBRt3kaSxRZSfZRpeOVZBPyRtlis9aLyEZkp2HLrIp71DdO3xlpcW2EWp7EyGwFo0wg6TXvwY6pgGy%2BHd%2FMkI8wCmhv6oytxBffitOHZLyDDHbeOCiyF7l4kQEhnRgCGnNcTj9KhG22CC6usotip0As0069x0i1SiGSwJfRSpDBhAi90mucWH3LL7HJFw01P3lZYIs6AD3TLtHn1ieaSrnhdr0aMf7%2Fn5WuuPIlGcO%2Bf%2BmrMg6vhgAA8OVlMtN%2Bx63gDvhgm0W3jEiC4djimEAbWNQNFBx00HlJoZRB9Pl&X-Amz-Signature=e341b4d2fed361f638a7a69c0d03d8e308f1ae5b67d94e4303a2524c8894217f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SPKHSV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIH6AtXBgL2KXFYVzeKSncSKh%2F62gfvFksx2U1OZXSE75AiAWAmsTa%2F%2BXPu76k5Zjrr%2BKyceSoOR4j%2B0k0ijsY4WEaiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIzUkLOyO7rOLjJMKtwDZq2nC05lsw3Y0TyEC%2BufTcwFEOJCkiC4cHCyUlE3UXmhoVZEP1YFDdPu2W3E8rIY3nn%2F5%2BWc%2BHexJ0XGudoajoS7K9aGi5nx62WVyJ5MoTq9%2FroLhKdLNmkmmszzSWd7t6FxaWu5U7mntOT3I6x6jMl1YMLRv3NETIaakBCKoKp5JFf8q9%2FnQUsA8Kf9MQFYGCrqVlZyFlGQCFfxeUtGhA%2BRReOjoe6akx1JBF7EwOlbBfw3JdURfXtr%2FO9YOX6HulVJdkBB4YnDf3ikSFbiFip05ofc36BCLFI5NcAu5Z65ELj8%2FIWfl5drrsjsd3xgU0N%2BidIlIvaFilTfwwFSNKswkuP73jtiCzY%2FjPcHx5Imu%2BsIbsm2xvCyopteS3M9JVQEDf0D6c%2B8g3lD6rBSnk99RkHzVc%2FJj8sYpWhE2Adn4h3eoSgGKhsVU6BL35vCU09TKRCW8UrhVFVj5XFfzGi5HP%2B9y1Tf27VScPdzPrxCAu50TOCXVqAMvK5SylD4I2icZKTN%2Bv0TqaaAhddJp%2F7h1qMHMCoZk%2FTx0RtHDjLA%2B058EBJLBMQE9dyBRt3kaSxRZSfZRpeOVZBPyRtlis9aLyEZkp2HLrIp71DdO3xlpcW2EWp7EyGwFo0wg6TXvwY6pgGy%2BHd%2FMkI8wCmhv6oytxBffitOHZLyDDHbeOCiyF7l4kQEhnRgCGnNcTj9KhG22CC6usotip0As0069x0i1SiGSwJfRSpDBhAi90mucWH3LL7HJFw01P3lZYIs6AD3TLtHn1ieaSrnhdr0aMf7%2Fn5WuuPIlGcO%2Bf%2BmrMg6vhgAA8OVlMtN%2Bx63gDvhgm0W3jEiC4djimEAbWNQNFBx00HlJoZRB9Pl&X-Amz-Signature=3a2c877650a5bc1af74f3dc9af0db7bab41782bc7b421fb881c053935b2b8be2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTVYFGSO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD99du%2FqmD%2BdcCK2p74o3Jlj0JoEsFki0t7OyVjxIwwPAIhAPbkDezisoYqKvyQbCarCSfLkahHrxC3Y29x3vgW6NBCKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRLyfq06pDrds97x0q3APUlHd09zK1N2lYH1yGr4pqnVg%2BVMgAP6a7fAGZwUfajnEKGJ9Xt7mdU5SxJCBblpi08GuKPZcN%2BZ65txfEjzeIit3fUOi8ToqeNzrwGF1D4XV%2FS9OUK%2BhGtRZGUeZg3iqjRDmD0x8c1xRQIc0qIT6lwFbaNb%2F8VTi4V29qu38SG2dL9M3su9IeC4BPRGQR8MwvyB3%2Fx2nMfb8IMRAxGCkAdfQlGEVPlpysay4ydGk3sOzWVlEZx5Jx7FJ1qdxWsCce8hNqMjXt%2FNgqKBzG4JRftrpIj9ApkilUDvGv373kxByqpT3KypNRNfHx78U1EiIPcNq0YAqOKbSOnnyZ12bXkZykLF3WCMtuyL0VZUzWXsdu93V6fXO955%2FtsMtmmyac2d%2BdoL7jGsV8zhSSlQoprpfm%2FBNi3sCGRQVQ4fHENaEU2cefPiizrFbA9hsAxoc%2BfhdvV9usTua%2FEessYud1tpZmpeCOrafQc9D3TsqP6rezRkEsmnGJF6MK02u7znlTzBZGM1Mb%2BDZUR%2BRKZvzdjcKRN8D4Z8lGIUuh7BxCbnGPBgBW%2FNo3ggqNGmOOmXeBEXO0Q08kbcwwDcksOOBKUx7ADKQezqLTaElsqlXpS6ZUNKyvFf0FB7l5VTCLo9e%2FBjqkATrqT2XIhMpgKSrNe03VMf2kRd%2BXBJIFRS4seGpbXnHvbimODSge1iU8oxJJh2IhGMvOfj%2FN9tF3dMIywOstLinTW3Yq8wjisp8I%2BJL%2F0zo0m1e8fC5XVVmket5spGGhhGebGs2xES%2F6ncs4X8KqYhKu4fRYQv4nUnM7MN30jU%2B40xBWiuDv%2BJKBt5JbZYXPXmAnJ04WR5OZNpRN3pnpoPAj27%2BQ&X-Amz-Signature=e38072dedc21a1ef941035a9457b31f5e408781d6a4f4f2b66f48a6d3c0628bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FFI6O6I%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCquJUSYFx1%2Bh7osfHBvapesnK23GgnTtlUZtK%2FJz3iMgIgFdZC7xq3XBFBruqqxAbMdfK%2FMl0eBmWNdCIcxlOKZtMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL8REM6hRgd%2FqLsdircAytsm%2BeJ51kGU9EkLmVNQ3u9YoolHUry314%2FIU%2BO%2B7vxbTJs0EJLHhurTT4Z5UVfazqMDcrfJAF%2F8FxhoPpSs67oCieNwV%2Bb1%2BKwKvnCxKjqXSgblVxBZpAdnnvui6zKT28UFsLpLCr%2BASMy5xmcESIAeP%2FP%2FqtXavxK4hA%2FQ1SJ6y0PAgFpjkZ2rFyRG9gM35jzvZ9JslToKyQACFBjf6g5rOh2pQrEcjfUdVZGW9btnlxE1eh4RK%2FH7KNTtRXgSw0MgjIyod64wvs6QboSBkcITVUnrpof%2BJNbZi6maEDKqwfQ60TetVfJX%2BJ4DcTJv1%2Bc1xHKqfQMcRtc5bS%2FbZQfoF2iCOGg6i7Hi18aIXFdY5WaTuidbIb3HvrHVkSKHOQt650UzIJa5M66xtNzYLRGeLQrpdB8kjC%2BFo9dYlblfUusyJ8UxUd%2BkQlcq3SgsVVIrC7nEbz5OL2HpHNWgKRPWW%2BR1fMtHKN2Wyf8F5XQDW6bqjcKAoGrr1B%2BQSltwGgSkW4y69N0UleflrocnVjFkJq3CAmGRxKMgZpagTAHzcyEl2TRCb37kYhGS3%2B7toCALWHepqmzPspzp%2BWuQJS9faqr2uumqRD8twLlKcsD0lKxtTkEzNnylv3wMNKj178GOqUBEYUnN8ohnzcUaD%2Bcg7%2FeSkh5ZtGRDDKBbBM2i9NuyDKI%2Bm%2BNUa1jKfIyA4r1jJESgxk%2BSrVLRZVE3%2Fy3ud83bRoUYxREbvpT82WbwLtu9UQYkDkJYe%2B25CJXNfP8XePju%2BOH8sCVVqe%2FkbiPuaNKQOO01Z42HVDIIDNCvHI%2FwFWFLz8JlE0cF1m%2Fn7GvxMQ4UXU%2FdGlrESnC4WnaJH4vJ9eImN%2BO&X-Amz-Signature=a7b6982b67e7f98bd11ebf98c67d8836cae563916b9dfe67ec929c8079fcd608&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SPKHSV%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIH6AtXBgL2KXFYVzeKSncSKh%2F62gfvFksx2U1OZXSE75AiAWAmsTa%2F%2BXPu76k5Zjrr%2BKyceSoOR4j%2B0k0ijsY4WEaiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKIzUkLOyO7rOLjJMKtwDZq2nC05lsw3Y0TyEC%2BufTcwFEOJCkiC4cHCyUlE3UXmhoVZEP1YFDdPu2W3E8rIY3nn%2F5%2BWc%2BHexJ0XGudoajoS7K9aGi5nx62WVyJ5MoTq9%2FroLhKdLNmkmmszzSWd7t6FxaWu5U7mntOT3I6x6jMl1YMLRv3NETIaakBCKoKp5JFf8q9%2FnQUsA8Kf9MQFYGCrqVlZyFlGQCFfxeUtGhA%2BRReOjoe6akx1JBF7EwOlbBfw3JdURfXtr%2FO9YOX6HulVJdkBB4YnDf3ikSFbiFip05ofc36BCLFI5NcAu5Z65ELj8%2FIWfl5drrsjsd3xgU0N%2BidIlIvaFilTfwwFSNKswkuP73jtiCzY%2FjPcHx5Imu%2BsIbsm2xvCyopteS3M9JVQEDf0D6c%2B8g3lD6rBSnk99RkHzVc%2FJj8sYpWhE2Adn4h3eoSgGKhsVU6BL35vCU09TKRCW8UrhVFVj5XFfzGi5HP%2B9y1Tf27VScPdzPrxCAu50TOCXVqAMvK5SylD4I2icZKTN%2Bv0TqaaAhddJp%2F7h1qMHMCoZk%2FTx0RtHDjLA%2B058EBJLBMQE9dyBRt3kaSxRZSfZRpeOVZBPyRtlis9aLyEZkp2HLrIp71DdO3xlpcW2EWp7EyGwFo0wg6TXvwY6pgGy%2BHd%2FMkI8wCmhv6oytxBffitOHZLyDDHbeOCiyF7l4kQEhnRgCGnNcTj9KhG22CC6usotip0As0069x0i1SiGSwJfRSpDBhAi90mucWH3LL7HJFw01P3lZYIs6AD3TLtHn1ieaSrnhdr0aMf7%2Fn5WuuPIlGcO%2Bf%2BmrMg6vhgAA8OVlMtN%2Bx63gDvhgm0W3jEiC4djimEAbWNQNFBx00HlJoZRB9Pl&X-Amz-Signature=a654917f19548f57c371b718b605c06164507a03bb94ba62bf50914e0337a5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
