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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2M5ALI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25SvL9vUpejIxi4ZqaCPu1P506Ve7R7BpiEcLyF9uvQIhALD2BwUgut9OUbosZgUJfHS7K73EwqwwxAiQKaAeCyy5Kv8DCFYQABoMNjM3NDIzMTgzODA1Igxw2ETekZoodz7lPNQq3AN4uyNH9JvuWHxlFCXm7SVNgA01YSUV1Nsaxuhh7WBYIZYrNxX43Vux7k4FfCatpVro4I5bIhtDxxizS%2FCMLNAO0ALEJn3vCF77Y590kjwLcMpNX%2FVZMTGpP8%2F8Q34jpKp375anu3CrsU5Q0uzA2enX%2Fz3es906pC31sm95h1yvKpqoePJcl15LkUaYr4GNVoRKWNaLlkw%2FQQ9FswwMFfBNmH26oxeYiExS5K37jAkhSpSLsFFZXeze8FlMpAkKF4gNsfB83bA5sn5%2FhxvwdxzCr8TQcizIcqwfm5VDVvAr0yreaR%2FmkeifH%2FhF4o%2Bdcu9tgdp9r9CG1fiDkrMMjDS37Ay8vgIecfncX5uFPbAW9D6ALTzunKe7KIW%2FaJ%2FG2MZBM2262HBQrzzpqK%2BvhoN%2ByVWUqs5YeLhTRyiYXp79748jHT3OZy17MYWmg4AqqD24bMlJ8itDK4BUgEG1Q8oL8I4ZQrneehGBEBQSwt7%2FG4b1w8YRF17UA7TLLsCmmy%2B2fCU0oLtlRB%2BWEPKJ7mh9TQomNuZTIcV3Cf2MIHHPZW2BBBx%2F10fezflOIChQhMx91sXT%2B5XLH%2Fp8qfmqPhckMfEBznxTAELycShS3F5zo2tWdJXICJ9D6VWxSzDfq6DBBjqkAVlAdvjxVk%2Fc%2FZ5T9CDnQBjyb8smdNShR7a%2FKgTXosxKkSDfg3yXbapXmV7bjnhP826e0ikHRFuCaulYYrO2toxWIiVh5YifJXT39amy58qAWtb4DqFumG%2BIKlF9QxSSGt%2BQQuQ7lGKVtl%2Foqm8FIoY61r8c27YbLs8vamnWn84mqkJ4TAyHDLroz3se3Pem%2FEvGBBmWDhI%2BpRrWVLib671Sf6uF&X-Amz-Signature=451bdc648a8a817ffd228158e82a467998ca46a8c7ba8195c830eadf3e841ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2M5ALI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25SvL9vUpejIxi4ZqaCPu1P506Ve7R7BpiEcLyF9uvQIhALD2BwUgut9OUbosZgUJfHS7K73EwqwwxAiQKaAeCyy5Kv8DCFYQABoMNjM3NDIzMTgzODA1Igxw2ETekZoodz7lPNQq3AN4uyNH9JvuWHxlFCXm7SVNgA01YSUV1Nsaxuhh7WBYIZYrNxX43Vux7k4FfCatpVro4I5bIhtDxxizS%2FCMLNAO0ALEJn3vCF77Y590kjwLcMpNX%2FVZMTGpP8%2F8Q34jpKp375anu3CrsU5Q0uzA2enX%2Fz3es906pC31sm95h1yvKpqoePJcl15LkUaYr4GNVoRKWNaLlkw%2FQQ9FswwMFfBNmH26oxeYiExS5K37jAkhSpSLsFFZXeze8FlMpAkKF4gNsfB83bA5sn5%2FhxvwdxzCr8TQcizIcqwfm5VDVvAr0yreaR%2FmkeifH%2FhF4o%2Bdcu9tgdp9r9CG1fiDkrMMjDS37Ay8vgIecfncX5uFPbAW9D6ALTzunKe7KIW%2FaJ%2FG2MZBM2262HBQrzzpqK%2BvhoN%2ByVWUqs5YeLhTRyiYXp79748jHT3OZy17MYWmg4AqqD24bMlJ8itDK4BUgEG1Q8oL8I4ZQrneehGBEBQSwt7%2FG4b1w8YRF17UA7TLLsCmmy%2B2fCU0oLtlRB%2BWEPKJ7mh9TQomNuZTIcV3Cf2MIHHPZW2BBBx%2F10fezflOIChQhMx91sXT%2B5XLH%2Fp8qfmqPhckMfEBznxTAELycShS3F5zo2tWdJXICJ9D6VWxSzDfq6DBBjqkAVlAdvjxVk%2Fc%2FZ5T9CDnQBjyb8smdNShR7a%2FKgTXosxKkSDfg3yXbapXmV7bjnhP826e0ikHRFuCaulYYrO2toxWIiVh5YifJXT39amy58qAWtb4DqFumG%2BIKlF9QxSSGt%2BQQuQ7lGKVtl%2Foqm8FIoY61r8c27YbLs8vamnWn84mqkJ4TAyHDLroz3se3Pem%2FEvGBBmWDhI%2BpRrWVLib671Sf6uF&X-Amz-Signature=b2e664ee1c5eabcde2a3048b7e8b1826166761c34c718c4bbc3f0c6ed0ed7725&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2M5ALI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25SvL9vUpejIxi4ZqaCPu1P506Ve7R7BpiEcLyF9uvQIhALD2BwUgut9OUbosZgUJfHS7K73EwqwwxAiQKaAeCyy5Kv8DCFYQABoMNjM3NDIzMTgzODA1Igxw2ETekZoodz7lPNQq3AN4uyNH9JvuWHxlFCXm7SVNgA01YSUV1Nsaxuhh7WBYIZYrNxX43Vux7k4FfCatpVro4I5bIhtDxxizS%2FCMLNAO0ALEJn3vCF77Y590kjwLcMpNX%2FVZMTGpP8%2F8Q34jpKp375anu3CrsU5Q0uzA2enX%2Fz3es906pC31sm95h1yvKpqoePJcl15LkUaYr4GNVoRKWNaLlkw%2FQQ9FswwMFfBNmH26oxeYiExS5K37jAkhSpSLsFFZXeze8FlMpAkKF4gNsfB83bA5sn5%2FhxvwdxzCr8TQcizIcqwfm5VDVvAr0yreaR%2FmkeifH%2FhF4o%2Bdcu9tgdp9r9CG1fiDkrMMjDS37Ay8vgIecfncX5uFPbAW9D6ALTzunKe7KIW%2FaJ%2FG2MZBM2262HBQrzzpqK%2BvhoN%2ByVWUqs5YeLhTRyiYXp79748jHT3OZy17MYWmg4AqqD24bMlJ8itDK4BUgEG1Q8oL8I4ZQrneehGBEBQSwt7%2FG4b1w8YRF17UA7TLLsCmmy%2B2fCU0oLtlRB%2BWEPKJ7mh9TQomNuZTIcV3Cf2MIHHPZW2BBBx%2F10fezflOIChQhMx91sXT%2B5XLH%2Fp8qfmqPhckMfEBznxTAELycShS3F5zo2tWdJXICJ9D6VWxSzDfq6DBBjqkAVlAdvjxVk%2Fc%2FZ5T9CDnQBjyb8smdNShR7a%2FKgTXosxKkSDfg3yXbapXmV7bjnhP826e0ikHRFuCaulYYrO2toxWIiVh5YifJXT39amy58qAWtb4DqFumG%2BIKlF9QxSSGt%2BQQuQ7lGKVtl%2Foqm8FIoY61r8c27YbLs8vamnWn84mqkJ4TAyHDLroz3se3Pem%2FEvGBBmWDhI%2BpRrWVLib671Sf6uF&X-Amz-Signature=a1d6c5c3a6350fee82acf094334c2e095ad9685c07ed73613aadf8c9cab17334&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2MM6T2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChyQICncmQAxcEB%2BZf%2BnueM8VuYyKdNHsYj061nWH7DwIgHAZU63Qf4fNp80kJZUowTodISyaMY1zJLhoaKJwYTm8q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDApWSkWNQYYCyrzzAyrcA%2FTRtbzOyH0VgvCYckGdwiA26QApE3dU%2BHh719lRrqTBmnpL1maQOKfG6GWOeQSSdThrjCWYXXT%2BesX7saAF%2FDBh1ykQXr%2FIw5gpGFAG%2BJe8krSUxABg0ChIY%2FJ%2BhXOSSXhb464bw%2F3r6YLjQselfYuorsqkN8G2oxFaNX8aKFTJu4bJWsslptYKybG8coryQqLUxLVVnTMbWwoF4%2Bciz6CHP2sCHmJp2j9Ygqb1cGUSrIB5bXcEhXxHNVum7q2ejDnSf%2B%2F3Mv%2FXOncn430sLp1j4mRCUaxhCVmHPMh%2B8QQy%2FZBR6hTetRw%2BFkQ%2Blu%2Fz%2FdYFQwYgKEupeRIbrgrpLFHFFxWlLhWto0hurpqfkG0Tge69%2F79xJpomIoZ5L7Mk9UqZ%2FyRGKmZpBYlwceAhbK4cK1D7zCo7SOi1CD5xZ5IQthy04aSc0oPTkD%2FlFXGGHX4xEw6%2B4kAmid3SZ13yrybtzDpV05HfKZhs06Lt2AEhFPS3AbLJwP2rLMpx5hzhrqmPK8VSC9I%2BTGSPy0BdRPE%2Bs%2B0zIUdXTnDizL%2B2udqEMeBNp15DHg0Ve2kuqbfZ7%2BwFB2YbJYoXs2etQzEtBX29KEoSgG3T3xuRATTQACSnRcaib7j3H0Q1M59oMKeroMEGOqUB%2FQMRbJ0f8h0Tq6pKfU6t2kBlD0QuQ63v2KtZL%2FwzFkiYupgRuGoLy2lcK7hqEj5Hs%2BSIWT8qAfwiYA0sYn%2FkYGqSEki8TJ%2Fusmt4%2BWWJAz4dnmSEaoKMwA7ebumxYXZEZhzEgs%2FN6eCsISym4bse6WyZHvSNUJxbkwCMwUFmhVmzSLK%2FsmE2m3ycDnphBi5VaycN0Cd%2BnCWR0ZSpJ6sJUAjsNXbI&X-Amz-Signature=2e4d39009602b38ebe7ad720f1fbc4a2c9ec5fbb0c05d0d3acc0f7167e986c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7DX3M4F%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCYIHQyg9TbNdejmG%2Fe0d708HuMJGYuMyFUJkJLUXqLAIgL%2FYpH8UenG8P2AIwbM4khSkX%2Fkdf0HPnwx1XxWnTetAq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNDpR2MWeHddiewLYSrcAzewjMMGQP7ED4Od7T9vf%2BpNy%2BoLxxMHOTLwh7yjlKeDGmj7eIdyxMjx10btC4UzkCRDR49W18VmHG%2BQfYXKd%2FaGzQPIhPWGWCL15Gqh2SvMPX0P0Mgmg7wDUm5CTGp2CB4my3EP%2FBTJaS4ccrhUKsO%2BvBVDwC3DK%2Fi6xf5VWZk5g6U1Pf%2FjaYPJAqqfp2%2Fuq4APwYDN4C8TIt1z%2FyCo%2B6HZGlgM1%2F0UFch%2F0r6L2qbKEYzGPESS%2B0hMk815E413xxviTjhgPnV7zFZmdAYP4PTCZEvwMwry3LxGs6p9rUW4YMF9n33c5K2Zg%2BTpTxSFeyBkAHj1vsSyjXjSWJiuXxrDm%2FN6MJ1Ia9Jnkxz9lB3Vqd6UqfRu4GQYfMHQfS22hmiPz3EKX%2BrlUbnamOyeKQxoQ8Xp2NeEHFVJvseE3KLPCZXgMiG8wlMU9gebqhQS6YDab7KM5LsEp%2FtZudbJ2SId%2BhbyypPY8%2F38ac%2F21tx65jRI4GDlTdLOL6X7HXq6hfifnh39gtbWxwn%2Fu5drtyTayRN%2FtYgamn8qho1Q0IJev1B2fQlKxiL2AdwFDjTmdU5Cy%2FdJSYgAZYfCeKBXNxJ0ahjs4hWzcctoPjFJO9gZXAgzXd4cVYhWRhakMIuroMEGOqUBy82HyrrmNo0dlv%2BpJ0y07g77t5GqpvRZ4IQLKiD%2Bleun3A7Fo0tEpL4j1FMMcaBIt3lHRIlGBVMzqVzZvWeeVHIxwdag8SCSbFRSHwnFLiaczK8g%2BY6wOkx5R8lpaOSvo%2F4nrOysxyyDywE4AGhOzDu4eIr3JY9n7x4yb7yJ8c5ee9XrnTQe2kawoyPOO7UlT8K%2Fqzsh9QNtkE3ZgO0utf4be%2BwC&X-Amz-Signature=06a1b37174b8fe23c419ffe1ac5c52ddb68e84a01c43488a308fe0a8893e2765&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2M5ALI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC25SvL9vUpejIxi4ZqaCPu1P506Ve7R7BpiEcLyF9uvQIhALD2BwUgut9OUbosZgUJfHS7K73EwqwwxAiQKaAeCyy5Kv8DCFYQABoMNjM3NDIzMTgzODA1Igxw2ETekZoodz7lPNQq3AN4uyNH9JvuWHxlFCXm7SVNgA01YSUV1Nsaxuhh7WBYIZYrNxX43Vux7k4FfCatpVro4I5bIhtDxxizS%2FCMLNAO0ALEJn3vCF77Y590kjwLcMpNX%2FVZMTGpP8%2F8Q34jpKp375anu3CrsU5Q0uzA2enX%2Fz3es906pC31sm95h1yvKpqoePJcl15LkUaYr4GNVoRKWNaLlkw%2FQQ9FswwMFfBNmH26oxeYiExS5K37jAkhSpSLsFFZXeze8FlMpAkKF4gNsfB83bA5sn5%2FhxvwdxzCr8TQcizIcqwfm5VDVvAr0yreaR%2FmkeifH%2FhF4o%2Bdcu9tgdp9r9CG1fiDkrMMjDS37Ay8vgIecfncX5uFPbAW9D6ALTzunKe7KIW%2FaJ%2FG2MZBM2262HBQrzzpqK%2BvhoN%2ByVWUqs5YeLhTRyiYXp79748jHT3OZy17MYWmg4AqqD24bMlJ8itDK4BUgEG1Q8oL8I4ZQrneehGBEBQSwt7%2FG4b1w8YRF17UA7TLLsCmmy%2B2fCU0oLtlRB%2BWEPKJ7mh9TQomNuZTIcV3Cf2MIHHPZW2BBBx%2F10fezflOIChQhMx91sXT%2B5XLH%2Fp8qfmqPhckMfEBznxTAELycShS3F5zo2tWdJXICJ9D6VWxSzDfq6DBBjqkAVlAdvjxVk%2Fc%2FZ5T9CDnQBjyb8smdNShR7a%2FKgTXosxKkSDfg3yXbapXmV7bjnhP826e0ikHRFuCaulYYrO2toxWIiVh5YifJXT39amy58qAWtb4DqFumG%2BIKlF9QxSSGt%2BQQuQ7lGKVtl%2Foqm8FIoY61r8c27YbLs8vamnWn84mqkJ4TAyHDLroz3se3Pem%2FEvGBBmWDhI%2BpRrWVLib671Sf6uF&X-Amz-Signature=b7fc55d8d261e91e3fc96d6db69b9df70f369ab1b643f347c94405283e1ed2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
