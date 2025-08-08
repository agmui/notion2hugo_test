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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEJ22PH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCnQp6tQB86SVBXKsYy8g5rM%2B4y%2BWdTBB8w%2F7%2By03Mf%2BQIgFbeHTWNOpReRGC0qSsi3udgmQMSdK1sxtTwgQkHe5ywqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4MuFfLXO18N7vx3yrcA7imW4RtNDR%2Be00oXP3fN%2BrAHJRUKCX3EoS5vRqaJH8kh9HO48iIooFVcrRpSOBXvF99Mdq4%2FUgyF1Dp9S7ME4alWAk9RBn53ToVKfzUffP4ckokYvT7eY2fy9f81sRGMjSgepcJjiUTYgb6MRccCXsrBVdxttUqstBY8FscU3ATH6DsD%2FJU%2FobZFYXQiEccjasFZL%2Bo9IQAomVFk5BbfVK1olu7hZGxwpuTEyR8mzafnOBhVGKjBF8HamM6seiqT1mZSNiwoh8g2z8dmfbA1m6EHdFbQkcwCSVOapRyDCZCgSRB0zWRgxbBU%2BWLHBNwmkatm2K1kbj%2FbLfbhCQ0FantDbdod094hfUSUsUJU8QYN%2B75v3qkFCoedunFy6ldIeGPmrFIV91QkBhgAmm8QfX1KtfVopXRTGuY1WOgCNv1E9soQvbuLOSBFjQT5R9E7uG4JlVsLzDQo7YQiCA9OVTycouxE8cLBgyLxXLpID8IRCPWX5mvm5bBp1UClazpROi2URsFgVsNUbUy2qHXQ7VTgDp6qM18g1%2FLQ3v0LZF1W8%2BywBaXe2mnCdt2h8jf0qLeeWcAUaf5wyWYdp00c8CvngTd1wfoOCyhk4iObpvXMXleU5cGPhaDPpAHMMaC2MQGOqUB7U072q89%2Bgd9VLv%2B134tJEdsdW4ZYf2vuy%2BoypngTjXdgycVQOAklfx8HCLUgk5blodUylopTkCKL2dq08dyatvXnYNgv1S1wZJKgZTniRJC6KC%2BuPUwvirT54XsqKP6pQ77f1JkLmZfc0RgEQI5W7lui%2FmJ2utwuP5UrreDOfn7Q1%2F%2Bh%2BvgNSF6FKdNOiS5Uw2poJ1XvTVKapDVcKqQoyWD3hwn&X-Amz-Signature=9531cb784561fe6d88938e0f0cfb806da11e22db5d11708fd523ff3aeb4a7271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEJ22PH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCnQp6tQB86SVBXKsYy8g5rM%2B4y%2BWdTBB8w%2F7%2By03Mf%2BQIgFbeHTWNOpReRGC0qSsi3udgmQMSdK1sxtTwgQkHe5ywqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4MuFfLXO18N7vx3yrcA7imW4RtNDR%2Be00oXP3fN%2BrAHJRUKCX3EoS5vRqaJH8kh9HO48iIooFVcrRpSOBXvF99Mdq4%2FUgyF1Dp9S7ME4alWAk9RBn53ToVKfzUffP4ckokYvT7eY2fy9f81sRGMjSgepcJjiUTYgb6MRccCXsrBVdxttUqstBY8FscU3ATH6DsD%2FJU%2FobZFYXQiEccjasFZL%2Bo9IQAomVFk5BbfVK1olu7hZGxwpuTEyR8mzafnOBhVGKjBF8HamM6seiqT1mZSNiwoh8g2z8dmfbA1m6EHdFbQkcwCSVOapRyDCZCgSRB0zWRgxbBU%2BWLHBNwmkatm2K1kbj%2FbLfbhCQ0FantDbdod094hfUSUsUJU8QYN%2B75v3qkFCoedunFy6ldIeGPmrFIV91QkBhgAmm8QfX1KtfVopXRTGuY1WOgCNv1E9soQvbuLOSBFjQT5R9E7uG4JlVsLzDQo7YQiCA9OVTycouxE8cLBgyLxXLpID8IRCPWX5mvm5bBp1UClazpROi2URsFgVsNUbUy2qHXQ7VTgDp6qM18g1%2FLQ3v0LZF1W8%2BywBaXe2mnCdt2h8jf0qLeeWcAUaf5wyWYdp00c8CvngTd1wfoOCyhk4iObpvXMXleU5cGPhaDPpAHMMaC2MQGOqUB7U072q89%2Bgd9VLv%2B134tJEdsdW4ZYf2vuy%2BoypngTjXdgycVQOAklfx8HCLUgk5blodUylopTkCKL2dq08dyatvXnYNgv1S1wZJKgZTniRJC6KC%2BuPUwvirT54XsqKP6pQ77f1JkLmZfc0RgEQI5W7lui%2FmJ2utwuP5UrreDOfn7Q1%2F%2Bh%2BvgNSF6FKdNOiS5Uw2poJ1XvTVKapDVcKqQoyWD3hwn&X-Amz-Signature=6c93256db8451f8d8f0b84eb1b632b9c706f8d773080492c6fd8b3e42e5be5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEJ22PH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCnQp6tQB86SVBXKsYy8g5rM%2B4y%2BWdTBB8w%2F7%2By03Mf%2BQIgFbeHTWNOpReRGC0qSsi3udgmQMSdK1sxtTwgQkHe5ywqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4MuFfLXO18N7vx3yrcA7imW4RtNDR%2Be00oXP3fN%2BrAHJRUKCX3EoS5vRqaJH8kh9HO48iIooFVcrRpSOBXvF99Mdq4%2FUgyF1Dp9S7ME4alWAk9RBn53ToVKfzUffP4ckokYvT7eY2fy9f81sRGMjSgepcJjiUTYgb6MRccCXsrBVdxttUqstBY8FscU3ATH6DsD%2FJU%2FobZFYXQiEccjasFZL%2Bo9IQAomVFk5BbfVK1olu7hZGxwpuTEyR8mzafnOBhVGKjBF8HamM6seiqT1mZSNiwoh8g2z8dmfbA1m6EHdFbQkcwCSVOapRyDCZCgSRB0zWRgxbBU%2BWLHBNwmkatm2K1kbj%2FbLfbhCQ0FantDbdod094hfUSUsUJU8QYN%2B75v3qkFCoedunFy6ldIeGPmrFIV91QkBhgAmm8QfX1KtfVopXRTGuY1WOgCNv1E9soQvbuLOSBFjQT5R9E7uG4JlVsLzDQo7YQiCA9OVTycouxE8cLBgyLxXLpID8IRCPWX5mvm5bBp1UClazpROi2URsFgVsNUbUy2qHXQ7VTgDp6qM18g1%2FLQ3v0LZF1W8%2BywBaXe2mnCdt2h8jf0qLeeWcAUaf5wyWYdp00c8CvngTd1wfoOCyhk4iObpvXMXleU5cGPhaDPpAHMMaC2MQGOqUB7U072q89%2Bgd9VLv%2B134tJEdsdW4ZYf2vuy%2BoypngTjXdgycVQOAklfx8HCLUgk5blodUylopTkCKL2dq08dyatvXnYNgv1S1wZJKgZTniRJC6KC%2BuPUwvirT54XsqKP6pQ77f1JkLmZfc0RgEQI5W7lui%2FmJ2utwuP5UrreDOfn7Q1%2F%2Bh%2BvgNSF6FKdNOiS5Uw2poJ1XvTVKapDVcKqQoyWD3hwn&X-Amz-Signature=305c3062e60eed6876a65e4fe2932b9ae53dcb1d6c8c53b7991be0d00a15acba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CMKD47V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCLiTzDgvSf%2BkE5z6vK1ItoQSiXTfTQvHIVcgeLdmqE9wIhAOUhd4oVtFujLct6rInIt9eXdANOnbS0If9rzI9OJDFWKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz38pzxaZcL4T2zgFMq3AMGE9SMnP8oEmlwbjrI%2FOwLP1A1rOd6nWi7gmnNUXqv2OZKlSHFQkMpRlRMAdLuM3Ku31IsWMWvjK1TqTxevNM6J%2B9Fu4Y0q6yr3Eblia%2Fj71ky9rdRvi9BIptQEJXxoseztaqYD1ffVRDdzItkYfdOpqgkgm35gkBzO5VxBiA8bJta1Pf%2FesBF2B4AI31dORYqHJV%2F67iC9dxiIhPg%2BXP%2FXbGwyKN3gzrrOuLqB0TQ1PAB0If4%2BYx3NLaqAgO8ciE72tZNkVFwgyTX9r3RvROwN6NuIVv0kFtAL6el0waMaHj3bkXNWkzjAiJ1hTHa7s1ZTkoIoLxUh3Zp%2BJ%2Ba%2F1xYbzh39SY5895WyIhoEnFUrmi%2B9bLHHRCWRwH8ZqUeH%2BSQyM%2Fezt1feCkBtpa0EOTawvsmHyohjWF0Pz4F0umMAGvUN56LptzdSHTc3R8NweAXJ97%2FjT8i4jAbwZVBMnP4%2Bp2Pr%2BvwsOqJTqVztbfTh5noPdlqfQjIY%2BzHmvZbLlw5z6AGExNk0N8zNw%2BxILljttM4b%2BRZ2hX0ax84RDlsmsfk%2Fb6xmwdEDpeXjPHK7OT7%2FkI4hIK4x4RNIlbw0xn2jxSMYeNo99OPW9iU%2FLFbvZ22dPpqQ69pF%2BDf3DCxgtjEBjqkAV2%2F48g3aKE4kbnwL7sLoKoAouXIcYv7BGNe6nez1FzbmUeNy03RMalb8Pob3YySv%2F%2ByRY1P2KopQtmFppy3ChaZRfqGhMaI2SQ5pAEHnHAS9UjSICGcWgtphmf4EMwFNECt%2Ftjr5oQghD7cGAg3aPt6APp1imi39ohrb923wP07Jp%2FhXM7M%2FMSiuTaNjhFcyl4i7qcYFm%2FZ4FePchUE63r38%2Fo%2B&X-Amz-Signature=7c6c09201cce0b8924f35a9fc845b8c4e32de95bd98e451eb5e5c237c2528acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDC3IZES%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIErqQnzx2EQQIzD1SBF3hodCl0kBwsMYLdBHCMkZ3moWAiEA8GvRCRUA%2Fy4L5TzNWBrNo0EA445OYDGYMV49J3Jx4KYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrdvsmBTMsF06AjFCrcA3%2B59WgfcVMHIofmkTEQXUHUSz%2B0drPc4ebeBhuUa%2BLL66EEO2EgNoVKTmSQAyO0w6hA13MAwWD%2FV8SDJG7X3gmsiCwLR4YmH7hOHI9N0qUq7bUECH0S1dwF%2B7XgP2kBXEYia4lD9%2FaCt%2F%2Bk4jvI0st1ou9nLCnHfWEfN1l06eRA2Cxa%2B85%2F30I0feZbe0AClM%2F18n6OzvcEIbXzftK0dS4AyqT97oE6c1HovylvIXGv3RdLQ4b%2Fk6L9MVTBmYnXYs5DjgkVXcsaxczIQVIeSnGe3E5o58Lp4RQ%2B%2BHWgxRlu36REQkfpnEswYxJExbbNF78XGRVx44ccI133K%2Fe5c%2B%2B7TlA5a6sovDX4odVSEu4xA2zr112XJc0prHor7xx6zMjOZ0Dq7r3b0k0vR0du845in6zq5IkaILPy8qJdJzftVjoTJEhFq979Ncfa9v7PpyyGzhcJCJgoQ4fDmXsbh5uK7ebIzqjFMfjyqHxgJT7qHXQz8cQjxR6uUfKLce9fjgBmuquLwIdrapPZpuiafqtkaItLe0DQOMQxxTfk2hM424hcQqKEgR3k7bQ27Aap9ArIWb3qmH7aulQR%2Bg78KVrI%2FkPyz3LeaZ8F8EdkxLJZI6P3odG4SqHPRozEMLCC2MQGOqUBKE2jvRnXQ9TRLMuWxTAUVBshQXM1%2B0EBrXWa5%2BQ%2BvOs2%2FyUBf2lLU9Yo3hjKMlNoolsiwQ4f0gUR6L9q0%2BRNusHbaHQBSJz8J8LmM5R41mmQdk5ED%2ByQCIPUSbJN8NGkgxw1jyDk%2BMp7QQmmU3fUX7AeLkO1xgsQKCoux2z5N7FKZkHIH27BxMpGe%2BMWLtdPC8H%2Flb%2B786c42%2B3zt36VY0Fs2h5z&X-Amz-Signature=5e0134ccc82c9114a4e711b7dd1a495ce9efdc879a8d6433e217e37558fb3136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEJ22PH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCnQp6tQB86SVBXKsYy8g5rM%2B4y%2BWdTBB8w%2F7%2By03Mf%2BQIgFbeHTWNOpReRGC0qSsi3udgmQMSdK1sxtTwgQkHe5ywqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4MuFfLXO18N7vx3yrcA7imW4RtNDR%2Be00oXP3fN%2BrAHJRUKCX3EoS5vRqaJH8kh9HO48iIooFVcrRpSOBXvF99Mdq4%2FUgyF1Dp9S7ME4alWAk9RBn53ToVKfzUffP4ckokYvT7eY2fy9f81sRGMjSgepcJjiUTYgb6MRccCXsrBVdxttUqstBY8FscU3ATH6DsD%2FJU%2FobZFYXQiEccjasFZL%2Bo9IQAomVFk5BbfVK1olu7hZGxwpuTEyR8mzafnOBhVGKjBF8HamM6seiqT1mZSNiwoh8g2z8dmfbA1m6EHdFbQkcwCSVOapRyDCZCgSRB0zWRgxbBU%2BWLHBNwmkatm2K1kbj%2FbLfbhCQ0FantDbdod094hfUSUsUJU8QYN%2B75v3qkFCoedunFy6ldIeGPmrFIV91QkBhgAmm8QfX1KtfVopXRTGuY1WOgCNv1E9soQvbuLOSBFjQT5R9E7uG4JlVsLzDQo7YQiCA9OVTycouxE8cLBgyLxXLpID8IRCPWX5mvm5bBp1UClazpROi2URsFgVsNUbUy2qHXQ7VTgDp6qM18g1%2FLQ3v0LZF1W8%2BywBaXe2mnCdt2h8jf0qLeeWcAUaf5wyWYdp00c8CvngTd1wfoOCyhk4iObpvXMXleU5cGPhaDPpAHMMaC2MQGOqUB7U072q89%2Bgd9VLv%2B134tJEdsdW4ZYf2vuy%2BoypngTjXdgycVQOAklfx8HCLUgk5blodUylopTkCKL2dq08dyatvXnYNgv1S1wZJKgZTniRJC6KC%2BuPUwvirT54XsqKP6pQ77f1JkLmZfc0RgEQI5W7lui%2FmJ2utwuP5UrreDOfn7Q1%2F%2Bh%2BvgNSF6FKdNOiS5Uw2poJ1XvTVKapDVcKqQoyWD3hwn&X-Amz-Signature=d9f85f6a8af73d272d5a73e8d682a1aea12436d16725f5bd1d8ab3c124d7cd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
