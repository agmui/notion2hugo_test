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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656MRGMZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1MQxZcHaAfoB3bzRVB9kfUJBGw1s8Wxj1JWIpIzfRcQIhAPkR7zlT9DP72GJdSMCOQXSu5iUBY8BN%2BHCCkmwHMeDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNYbx%2BXnmbFFv3CAAq3APZ2Uu5HFUJGxDU4QsGigoQUMv5skZawyUegztrlVjdkbjYz36x6FHDZN0akKlvbEaUgAyWA%2FNu0J9CEU1BerdG8E2I8S2ByD%2FDKmW%2BU2X71ZAaPwncpoia9uVAdpSC6571RZbNm1hXWch9IVQhD6vSJZCu6tzWLr51XD12npvYj%2Bl8lUi8JSDD8yzxPzIrZhPkGlQh6g1JFHOklw1wYJm04OqPTHXwjV0%2B9jQsfzN2W0z%2FwWYPfyn%2Fo%2BP%2BNdmxN4Rir5pj7%2B3lWwlbW7Apdwb0Qu%2BVGKaStO3DJCEbq6Gk9us4tL%2FhnpSMng7tkdaF4dqCH%2BU1Y5Ni663Vl3TqTl5dsLHC%2BxK6IBI6byzNu7rXvdfMSUGigyOJg5y1jVEB9CT8AI4ZOnjmZpNFdE45dvD9lSvPP7GwZ4w0MdH9TsI%2Bo448md3Ti59u%2FiDunx%2F6Aynwu9J2Hb%2F6hNpzdp%2BDNXUVVt0EASGgPmUh7diNA5AiI928qynTFRvREKyZbjaSI8%2Flevs8KyZOhOQAWDIoGIw42HEc5Id4LYw1ZxcMoKmjzu6F%2FDoPsoxhpfLrxiOJYyqz%2F8DCq6PQQQfWyoHBggeuR62dpKTnLT1qKZ1b%2FkyP8xqzLdlXa4EOiG3H1jCm6K%2B9BjqkARM527Mdix3QJ3gzfHUQ64XiqHJG0yjt86bR%2F507F%2BtR1G63mFZ1E7lrobXUqk%2BP5N0MoRWoEreT9exhGjQDqfNyk7J86gMRlSvicm4EPXl06QqsUFviX1g6YykQl5uDH901u4ppU%2BXlC%2FseJk%2Frrzzp0xpofMinnK%2BbtCjf9P4iZm4rxlWWuIqASZH358SkUOwCpqA23TiYgZhqb7FRC6XoNg71&X-Amz-Signature=30381714643ce8a9d0c54c92e2e497ec197cde34a58c83fa9c525ddb9138520c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656MRGMZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1MQxZcHaAfoB3bzRVB9kfUJBGw1s8Wxj1JWIpIzfRcQIhAPkR7zlT9DP72GJdSMCOQXSu5iUBY8BN%2BHCCkmwHMeDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNYbx%2BXnmbFFv3CAAq3APZ2Uu5HFUJGxDU4QsGigoQUMv5skZawyUegztrlVjdkbjYz36x6FHDZN0akKlvbEaUgAyWA%2FNu0J9CEU1BerdG8E2I8S2ByD%2FDKmW%2BU2X71ZAaPwncpoia9uVAdpSC6571RZbNm1hXWch9IVQhD6vSJZCu6tzWLr51XD12npvYj%2Bl8lUi8JSDD8yzxPzIrZhPkGlQh6g1JFHOklw1wYJm04OqPTHXwjV0%2B9jQsfzN2W0z%2FwWYPfyn%2Fo%2BP%2BNdmxN4Rir5pj7%2B3lWwlbW7Apdwb0Qu%2BVGKaStO3DJCEbq6Gk9us4tL%2FhnpSMng7tkdaF4dqCH%2BU1Y5Ni663Vl3TqTl5dsLHC%2BxK6IBI6byzNu7rXvdfMSUGigyOJg5y1jVEB9CT8AI4ZOnjmZpNFdE45dvD9lSvPP7GwZ4w0MdH9TsI%2Bo448md3Ti59u%2FiDunx%2F6Aynwu9J2Hb%2F6hNpzdp%2BDNXUVVt0EASGgPmUh7diNA5AiI928qynTFRvREKyZbjaSI8%2Flevs8KyZOhOQAWDIoGIw42HEc5Id4LYw1ZxcMoKmjzu6F%2FDoPsoxhpfLrxiOJYyqz%2F8DCq6PQQQfWyoHBggeuR62dpKTnLT1qKZ1b%2FkyP8xqzLdlXa4EOiG3H1jCm6K%2B9BjqkARM527Mdix3QJ3gzfHUQ64XiqHJG0yjt86bR%2F507F%2BtR1G63mFZ1E7lrobXUqk%2BP5N0MoRWoEreT9exhGjQDqfNyk7J86gMRlSvicm4EPXl06QqsUFviX1g6YykQl5uDH901u4ppU%2BXlC%2FseJk%2Frrzzp0xpofMinnK%2BbtCjf9P4iZm4rxlWWuIqASZH358SkUOwCpqA23TiYgZhqb7FRC6XoNg71&X-Amz-Signature=e2df1f662b87a9163367bd571378758cca7010c022588b678ef1cc04ddc330df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMDZU23%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw7o%2F50ZLPQDYKF2p0bFAi8YwbV85T7oVB1L87saua%2FAIgNFtNzMwV2P6%2BzxBxap2PhEwLYQpVJKGVUBEmTZfTwFIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAs2dJANm2oUfcD1JircAx%2BXMpiF62vGK5QEKWWMEF9eFnncXWghfgKNJplIgjfH5z34cAJNeualGhuLjXtZBxqlX%2FM%2Fz%2BSk7AiNEuSE%2FpGqsOQ1qxo9eoOui10%2Futd%2FjrDsCUNclGX90nUv9kzF%2FxMr3v%2BKgwmvBN6CTa5lPqDpgKGvUYWJM8xAhJ9dxqJpp570bQQtN8%2FJaKgeuVGdnsXlTNuJGtwvNCqNoXu1ufjoXrelKzJPFo5UBxVVHpxcBxMXlCkQTNV%2BiNMWDkPSiAkk8S92egjt6nVHxTag8eIOV9mr2DsU7F8%2B4v5u%2F%2BZusrEy%2BJucq%2FyIIYjRZRZXY9saZc6IWk8GTzD%2FW%2ByAn7YcYTgwcSC80tEdE8DdkPElkjHNOp3VuHAUOtjl2G%2F1%2F2l6eHZyTknfoND05XSTgmwz%2BiZLDIrrOr6C2oqjkE6dF45RuaHSbRhzeIk7vlw3gQl0LrVpHFp3987MMh4piJvUK2wCR7MTxC7df%2Bc7RfeE1MrKFDadltRybkDb546MYNIVs2718SwRPGVGHMQ7C3h49p1dccSJj1ZajzaWb45Dt1SNmWcv24TvOuX21hMmCrRrGS%2Bln3bO5UQgei77PP5iFyT1wp58wQpklESVubLXirZP76l%2Ft874qXubMOjqr70GOqUB8lqMRvXcnggekFWZ4Kcx0WKGekSXvuVNc6y07jufCZwXmAAkg6JSHeTePTQkEEPn8YjQGgukyfz2oQ8ZZyXv86pg5Q4piY0lS2khWRV4sUvQLIGEtd7vs839hV97QiYYs2A4ewvRjYMh1Y2ANQb8AoAsCpuf3CyWyrVpZLSfUlfocrH9P4%2BEISKFcCis%2F%2B8nt7Mbfizi%2BlnQNJ6d09bhp%2F1vytXH&X-Amz-Signature=21c4bbd2bd455a58558e04007789062cb637b73c9d58ec84fddac15658375b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBAE6PS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA44hSbdtr%2FtqpMJCgXicgP5V3isDNZSOrdWPElWmeFHAiEA6ZzcDgnkvbTQdyWdcE6YpbwEMq37suLcLID%2FG%2Fg%2BBEIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAi0H3F8ZU3ozcIYCrcA0WmZXtT%2FGSvKOySl9QRPfWGIp7x3D1C6cw0aIPDB2CsBuoVGdb9u%2Bde8hhlBw6VtkTon4Hj1EjFoNT9DBlnYXEPgmupjMIPGIkqp2iTAfLylDUJbKZm6DwDztuwtfoYKzW4X2BpFlRNvy%2Fce7%2Bvf%2FdZs3e0SzLY5bJtJLVMcBXGpkog1xAAAq5SK0RcqDlkrVdQ7I0e1LMCxIKQec%2BYDIFyAhnmHmEVl1xaW7P%2FefBfyBeHnwBuzwFtjicP9ocTucDeE7DNhka91ndCu%2FCUw3MSpETfpY9CsJZu0naXlg31HBAsfmxjH2iKXQE6HYl9kUZhV0cySUxItsNOmS%2Blgb2cW4QufduouEzkbi5qbL%2BJVa3ilPw2DusWkCaMzkIp7epvUDyrReypexfbjYPX1qC5nDsPPtSc3OaPs%2BFeDREGy%2FD75kUGkel8Jm50XJyxtkwjT5TBGb%2FlhymscArFeK4dqphUoY6bObhd4dkl1Z8sMTzvMGhHvZwitM41bLlf7XqBPCFRL7Vaa%2F7CZusHmBY8OA0s%2B8AMo4mHYX8lwlrPE1s%2FqldH0dcgDIlsyianvEuzqrfz3V0NhV%2BA%2FliR1cJtxmDt%2Bf%2BXOzoxD%2Bb%2F3omG4kfa%2BImOiVEzM0UDMOfpr70GOqUBoxknT8W%2BhfCwJiD5sRjBvRzSR2ebjfKlucLTeJBitrQVANoLceD%2FyzEQZV8TkAJ7cf8eK93eXEbVd1VRnGdJkYXBdiyqej0kRA2O%2BC4CzAFr1KjeL%2ByJB2D2uZutJeg9wB7miRk3oerY5AunN0nONO33qOUpEYS5YnVEQOiDqJ1E8uyCr%2BkFPyeQ%2BWxkGIs45XpK0eClaAHmhmqkVD1t87slln68&X-Amz-Signature=d004e4bb6f5b4ae8b78dc57a30fbb1100984a4100f7a8db47ba887ab1064ca92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656MRGMZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1MQxZcHaAfoB3bzRVB9kfUJBGw1s8Wxj1JWIpIzfRcQIhAPkR7zlT9DP72GJdSMCOQXSu5iUBY8BN%2BHCCkmwHMeDLKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNYbx%2BXnmbFFv3CAAq3APZ2Uu5HFUJGxDU4QsGigoQUMv5skZawyUegztrlVjdkbjYz36x6FHDZN0akKlvbEaUgAyWA%2FNu0J9CEU1BerdG8E2I8S2ByD%2FDKmW%2BU2X71ZAaPwncpoia9uVAdpSC6571RZbNm1hXWch9IVQhD6vSJZCu6tzWLr51XD12npvYj%2Bl8lUi8JSDD8yzxPzIrZhPkGlQh6g1JFHOklw1wYJm04OqPTHXwjV0%2B9jQsfzN2W0z%2FwWYPfyn%2Fo%2BP%2BNdmxN4Rir5pj7%2B3lWwlbW7Apdwb0Qu%2BVGKaStO3DJCEbq6Gk9us4tL%2FhnpSMng7tkdaF4dqCH%2BU1Y5Ni663Vl3TqTl5dsLHC%2BxK6IBI6byzNu7rXvdfMSUGigyOJg5y1jVEB9CT8AI4ZOnjmZpNFdE45dvD9lSvPP7GwZ4w0MdH9TsI%2Bo448md3Ti59u%2FiDunx%2F6Aynwu9J2Hb%2F6hNpzdp%2BDNXUVVt0EASGgPmUh7diNA5AiI928qynTFRvREKyZbjaSI8%2Flevs8KyZOhOQAWDIoGIw42HEc5Id4LYw1ZxcMoKmjzu6F%2FDoPsoxhpfLrxiOJYyqz%2F8DCq6PQQQfWyoHBggeuR62dpKTnLT1qKZ1b%2FkyP8xqzLdlXa4EOiG3H1jCm6K%2B9BjqkARM527Mdix3QJ3gzfHUQ64XiqHJG0yjt86bR%2F507F%2BtR1G63mFZ1E7lrobXUqk%2BP5N0MoRWoEreT9exhGjQDqfNyk7J86gMRlSvicm4EPXl06QqsUFviX1g6YykQl5uDH901u4ppU%2BXlC%2FseJk%2Frrzzp0xpofMinnK%2BbtCjf9P4iZm4rxlWWuIqASZH358SkUOwCpqA23TiYgZhqb7FRC6XoNg71&X-Amz-Signature=d789b81e3f15a4fecda5c48e6961a428953208167bd80b9e20220b0cfd388580&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
