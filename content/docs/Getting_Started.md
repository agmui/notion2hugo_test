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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHVT33%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu9yiUVdxhBu3xWKofjk3Ix9e19t7ALZwwlWoXOG%2F4VAiEAksUhWOWCA%2Bj2%2BrSgAbvaqqqF12B4fblXNgAbwjhptMsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPYYzN4FYcSD9Gh%2FRyrcAz7ShXQGTEtD1a0%2Fxa%2FLaWF2TO31W1jazW5tCDntyBCAuBSimqlujz9lIQow%2F6PgQ%2BVFVG%2BnHFhQi0HpVe5S%2BvpJNw5tzwAgyMM1d2E8lA0V%2B1nmb7toXmB302x00dsdnrYRqL%2BiDa3GmuAnyo9hZRrdrSjGjKDxulWPB%2ByvHdZiRgFiRMRCE1O3HgVsbPXvzzQ7%2FasT%2FLJJrdzte9PFFhbgJqgTqMyCmkCCXI0wDe1btTBPibIPFrrEPpZ1tgwu%2FopktT%2BQQZMzweIeOJWppidZU2j%2BXguwrmVQf3T7smnJL6B4Q6EJhECmDiMu%2FFs%2BaBiFUsWeu2nUJZBix%2BJqotAZsqfPDNoel8Kq%2Bn72%2BRu5H%2BdMZHR0NTCz%2B2dFPYw6Q03NFbatrECJsAft%2B%2FeJWMUnNgdmNZsFiDvg8Tab4ym3KhwP63rG5EhoSGkhC0Jv8ABncgGgglUZxJGe%2BT9qxZg9A%2FKe%2BeI85VM%2BZICTu9aHKhXpEunKaxruAjsnC%2FtlRdpaRD5WdyhxQHGb946oOutkxlng9sjW4wJXngHoLXqJ%2Fo4kNxric26tGuPISBK9HIhshomC43VlIs4y4e2UQ%2F8z4eanTeJrFIozOtpbvDQ1PcfS8laaMvY40xhkMMLuxMIGOqUBSLJHvOuPAveck2Aip6qIPW6XGx71LByeL1gvbssXssNF8So%2BemFqEaGgAlRelnsTguApN57tC%2FYC8z8%2FHZ5sabhUS4I4pPUf24xJLo1EcOjwGcljNRU5cmdK1gjZJXUiTqtiQXw%2BC7WcmJBrR8CN2dCCiMuoyiqHP26MZS28t4T7U%2F5yIbCAThVZKEuwglLUtXy4h4MRemkY6Eqf%2Fe9qPJ2uB99R&X-Amz-Signature=f5240f2a79724bc1184b8a7b28b1bfd24e7b4d5aaec33867e900d4a3fdd7eece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHVT33%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu9yiUVdxhBu3xWKofjk3Ix9e19t7ALZwwlWoXOG%2F4VAiEAksUhWOWCA%2Bj2%2BrSgAbvaqqqF12B4fblXNgAbwjhptMsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPYYzN4FYcSD9Gh%2FRyrcAz7ShXQGTEtD1a0%2Fxa%2FLaWF2TO31W1jazW5tCDntyBCAuBSimqlujz9lIQow%2F6PgQ%2BVFVG%2BnHFhQi0HpVe5S%2BvpJNw5tzwAgyMM1d2E8lA0V%2B1nmb7toXmB302x00dsdnrYRqL%2BiDa3GmuAnyo9hZRrdrSjGjKDxulWPB%2ByvHdZiRgFiRMRCE1O3HgVsbPXvzzQ7%2FasT%2FLJJrdzte9PFFhbgJqgTqMyCmkCCXI0wDe1btTBPibIPFrrEPpZ1tgwu%2FopktT%2BQQZMzweIeOJWppidZU2j%2BXguwrmVQf3T7smnJL6B4Q6EJhECmDiMu%2FFs%2BaBiFUsWeu2nUJZBix%2BJqotAZsqfPDNoel8Kq%2Bn72%2BRu5H%2BdMZHR0NTCz%2B2dFPYw6Q03NFbatrECJsAft%2B%2FeJWMUnNgdmNZsFiDvg8Tab4ym3KhwP63rG5EhoSGkhC0Jv8ABncgGgglUZxJGe%2BT9qxZg9A%2FKe%2BeI85VM%2BZICTu9aHKhXpEunKaxruAjsnC%2FtlRdpaRD5WdyhxQHGb946oOutkxlng9sjW4wJXngHoLXqJ%2Fo4kNxric26tGuPISBK9HIhshomC43VlIs4y4e2UQ%2F8z4eanTeJrFIozOtpbvDQ1PcfS8laaMvY40xhkMMLuxMIGOqUBSLJHvOuPAveck2Aip6qIPW6XGx71LByeL1gvbssXssNF8So%2BemFqEaGgAlRelnsTguApN57tC%2FYC8z8%2FHZ5sabhUS4I4pPUf24xJLo1EcOjwGcljNRU5cmdK1gjZJXUiTqtiQXw%2BC7WcmJBrR8CN2dCCiMuoyiqHP26MZS28t4T7U%2F5yIbCAThVZKEuwglLUtXy4h4MRemkY6Eqf%2Fe9qPJ2uB99R&X-Amz-Signature=f7e9353346117bc2f54a11aeb3f63d6c7bd10f5a5d330d7080b8b6b6fff3ea44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHVT33%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu9yiUVdxhBu3xWKofjk3Ix9e19t7ALZwwlWoXOG%2F4VAiEAksUhWOWCA%2Bj2%2BrSgAbvaqqqF12B4fblXNgAbwjhptMsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPYYzN4FYcSD9Gh%2FRyrcAz7ShXQGTEtD1a0%2Fxa%2FLaWF2TO31W1jazW5tCDntyBCAuBSimqlujz9lIQow%2F6PgQ%2BVFVG%2BnHFhQi0HpVe5S%2BvpJNw5tzwAgyMM1d2E8lA0V%2B1nmb7toXmB302x00dsdnrYRqL%2BiDa3GmuAnyo9hZRrdrSjGjKDxulWPB%2ByvHdZiRgFiRMRCE1O3HgVsbPXvzzQ7%2FasT%2FLJJrdzte9PFFhbgJqgTqMyCmkCCXI0wDe1btTBPibIPFrrEPpZ1tgwu%2FopktT%2BQQZMzweIeOJWppidZU2j%2BXguwrmVQf3T7smnJL6B4Q6EJhECmDiMu%2FFs%2BaBiFUsWeu2nUJZBix%2BJqotAZsqfPDNoel8Kq%2Bn72%2BRu5H%2BdMZHR0NTCz%2B2dFPYw6Q03NFbatrECJsAft%2B%2FeJWMUnNgdmNZsFiDvg8Tab4ym3KhwP63rG5EhoSGkhC0Jv8ABncgGgglUZxJGe%2BT9qxZg9A%2FKe%2BeI85VM%2BZICTu9aHKhXpEunKaxruAjsnC%2FtlRdpaRD5WdyhxQHGb946oOutkxlng9sjW4wJXngHoLXqJ%2Fo4kNxric26tGuPISBK9HIhshomC43VlIs4y4e2UQ%2F8z4eanTeJrFIozOtpbvDQ1PcfS8laaMvY40xhkMMLuxMIGOqUBSLJHvOuPAveck2Aip6qIPW6XGx71LByeL1gvbssXssNF8So%2BemFqEaGgAlRelnsTguApN57tC%2FYC8z8%2FHZ5sabhUS4I4pPUf24xJLo1EcOjwGcljNRU5cmdK1gjZJXUiTqtiQXw%2BC7WcmJBrR8CN2dCCiMuoyiqHP26MZS28t4T7U%2F5yIbCAThVZKEuwglLUtXy4h4MRemkY6Eqf%2Fe9qPJ2uB99R&X-Amz-Signature=80174f25a20798f76e727cf761f1c60c133f21f83a985daa225a6e116b66ef20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDPGHI%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbLv3FHAsJSNIV5nBNSihq2%2B%2BZ4Cs%2FisvSyKUmohiWhAiEAhL6d7EarGli44LsaOXb%2BxuuQ2GB86NACEYohmTG6PMgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNLpLSIwpjpBpK33sSrcA0aC7psR5P%2F014h8y2AXvKBW5ezc0eT%2FYcxa3Q9px%2BKCklVqnix3Sea8lhsHdNTkkZGBxXjIpnA0xTt7MIIQGOx%2FPJ7U8a1aPhrZD2eS3ax%2BJTVSn17ddx0wZDuBTMd8tmy6rzfaEEuQ24Vx0lD13eAtlCd%2BLJMZ0UP%2FjvQ322P%2FN0CcV87MC2e%2FVInHfkCiw6Sp4OFFgz4Qn6%2BS1SHetHYwpHd0YNtJExo3bI%2Fd8DaHX6rwzHR7XtZJeOrp54nbz5Q1HnGrf1WaJ9FUMhzz0ndhDUZeFwLsunWMYqPkydojQ6hndD5QWhfSGgThL%2BL%2BkYoLWt5%2F5kkMewVYtqTGZWAiEcPMs07SUaJcv8oZv2aBo6Xry55Hvc%2BKGQXznj8%2BXhw0Pxikbt9CKa9nv2BMK%2BBvxW0fft1RK0NiO%2FaQJLg5CFkT6s9ysh%2FRjw8Fo%2Bk9ovqSoT5SnlPPY0t2ALJNlNSw7MP3pX0jiF6%2FBKHFy%2B6Uk0noU6rGwbp2Lr0GeNi6X866zKjVe0agTd32MBRJvFkXorGPJSYKmq1j%2FR%2FvrafNlRlV38IiPUCS%2FpxPHpierUOcjj281gzmrVbcFZLwk%2B94Y%2BsY7pDU6%2F%2FphdlpFm%2FjsyCGZAGgEXUo%2BAmSMM6UxcIGOqUBGHWGLYebpZwK9C2NJvRuD9XlqIdefTwebyB78kuM9bGnxJdlDw1e%2FPKLg1tzOlVAVFt4fapLfaMaTg6gc5I7diaTsi5uNZLv5Yp9kHFhraU04DlGPYi1ETF3UCZE%2Ben%2B3tZxYjdvoPlRRwD%2F5OpO18BaM74us%2F15Axad5ilWOPwRpL%2FS68uzTUEseyaI3bnXlqiJgVu1xHuo%2BE6B6pMzlC4R5lOK&X-Amz-Signature=366f97874e72710391f6fcd884b35ff58ce58231ab834c64295da72017d18321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZVOOVC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3ZDjIykJ9k88ypONyMcM4zfv%2Fn9n1E4UaucbtdvbYQIgcrBqabev77p3mOXxnwMu%2FcRvTsWS3S5sB9fyhesF2dEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDI8YgynQRlHJJvqfhSrcAxg%2BHcgJOJqvF9EWk1EENGG7p4yrNJZOWknfWIUH%2FKxHM48JVo1peoU0kf8XwKAxRFU%2BjlKNimxaCJZ45CV%2FEbKCyj2qDk7eSv1UI1pn8LqUNXR16L10Uoo8pBw1E67mdUV7FnV9sng9Er%2Ft6aLI5r29eTgX4Yp9r0fMlE2gE3sqsheB7ZDUVvjaDCUoKt57%2F24E0EHbyXdHJA2A7NhRjGbMf%2B%2FCJ6K9O7bo7HrC7Oi839ZtM%2BKo9xkzKCe4tOH58UUhfJ0NTLLd262zFu7bVRMIEGng%2Bf0Jgja29PjHL%2FA2gbOh27oMOvu0eBs1zPjsvo%2FOJ4tL5YNlI07dwUcNxoqlWQjbWaCDH8pbOA1eRYjy2fvo47nqgpwt9sT2VsiwRAde%2Bfk5b%2FQR9HgHc88PVe89BU%2BrGBPfYTwXgugs4OX95I8MVRGGKjKF%2FW3MwmEa5or7yYuLKd71Omh5VdiRB%2Bi6XCu2Aq77%2BkHUbcu5MSOJdJTRr2xeTc8%2FTDU3zTv7GWtWlrwcvnDwIQnutzHdwIu6efuAnknFrGj9suU%2F%2B0HMxquDzGG%2FE4EDsxoKUHbNhJ2Y0MicQayW6QVBEudDLDBfq8JpsjWy6zydbZydBrCme0VqsPgtzL0wJavSMPH%2FxMIGOqUBqBRcy%2FfguNx%2BTnXuwEXqV4JzCJtisxoHWH0s9CEtnljD2GBnuex9yV5n3itVppswtE8lVpbQHKLP%2F%2BfiPjahK%2FJGD70N%2FVLa65JPIaf7LV80Rx5aCc2P704AgP%2FDFZeMgR%2B%2F84uVK%2BUE1LH7vUuXJHzZkvPk4K2gAzJ45hXT7qkZ8quwKLV5CgsGvOfHwh3QpIPv5ZvqhV%2FDKNKArBzLvYI6%2BinC&X-Amz-Signature=c12133d5358e8a67d410bab1f5f0506076a29b4665ccec1c8ab2a07e413447f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDHVT33%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu9yiUVdxhBu3xWKofjk3Ix9e19t7ALZwwlWoXOG%2F4VAiEAksUhWOWCA%2Bj2%2BrSgAbvaqqqF12B4fblXNgAbwjhptMsq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPYYzN4FYcSD9Gh%2FRyrcAz7ShXQGTEtD1a0%2Fxa%2FLaWF2TO31W1jazW5tCDntyBCAuBSimqlujz9lIQow%2F6PgQ%2BVFVG%2BnHFhQi0HpVe5S%2BvpJNw5tzwAgyMM1d2E8lA0V%2B1nmb7toXmB302x00dsdnrYRqL%2BiDa3GmuAnyo9hZRrdrSjGjKDxulWPB%2ByvHdZiRgFiRMRCE1O3HgVsbPXvzzQ7%2FasT%2FLJJrdzte9PFFhbgJqgTqMyCmkCCXI0wDe1btTBPibIPFrrEPpZ1tgwu%2FopktT%2BQQZMzweIeOJWppidZU2j%2BXguwrmVQf3T7smnJL6B4Q6EJhECmDiMu%2FFs%2BaBiFUsWeu2nUJZBix%2BJqotAZsqfPDNoel8Kq%2Bn72%2BRu5H%2BdMZHR0NTCz%2B2dFPYw6Q03NFbatrECJsAft%2B%2FeJWMUnNgdmNZsFiDvg8Tab4ym3KhwP63rG5EhoSGkhC0Jv8ABncgGgglUZxJGe%2BT9qxZg9A%2FKe%2BeI85VM%2BZICTu9aHKhXpEunKaxruAjsnC%2FtlRdpaRD5WdyhxQHGb946oOutkxlng9sjW4wJXngHoLXqJ%2Fo4kNxric26tGuPISBK9HIhshomC43VlIs4y4e2UQ%2F8z4eanTeJrFIozOtpbvDQ1PcfS8laaMvY40xhkMMLuxMIGOqUBSLJHvOuPAveck2Aip6qIPW6XGx71LByeL1gvbssXssNF8So%2BemFqEaGgAlRelnsTguApN57tC%2FYC8z8%2FHZ5sabhUS4I4pPUf24xJLo1EcOjwGcljNRU5cmdK1gjZJXUiTqtiQXw%2BC7WcmJBrR8CN2dCCiMuoyiqHP26MZS28t4T7U%2F5yIbCAThVZKEuwglLUtXy4h4MRemkY6Eqf%2Fe9qPJ2uB99R&X-Amz-Signature=0f7e934955a81d357d393fe05ef7c45feffd261e4e8264c8c74d1dffcb6ed4e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
