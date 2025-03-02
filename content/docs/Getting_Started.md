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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYJEG5K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFySncJBJJWzV9ep2lZNUhYVHrD%2FGP9WgPNcFt9KqxfAAiAyQOHUWyef%2BvLtVgO%2FzTWCxfspYeqXb0lo%2FyoM2f2WDCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjEx8sDym8pOz5dF1KtwDqXR7QK6VcI3Qyf%2BhWj0qm%2FM2xQAlnWukqPr0t9z9KtIqh%2BYFxtUkHEx65EEjIDcAFrljOXIRSMbsQKEzJTM8nzcDhZzNRet7vSb%2FYQP1yhyuKSQ2F2OxKacQtvhu50Wppl%2FJDfdzqQfgvqNMn%2FmwXHxkrip2EVxR9BR%2FMXn4aipDlIM67gn2CdDd2vQVBujoi0QFqPvPRF32JPJdF8OzMLijIgr%2F%2FGilxlrK%2Fb6o8LN4k%2Fw5NOParuzOJmUN%2BL%2FfxVZ3z6FPScn1Me6ZPN0viT4YVvzV4A3DrjVTdrTwCeBzg6hux9K%2B882kq4ScUBPev1Ba4MlUzcuHFCp3KoZCLLeYuih7NSqrY%2BSUWWaPoWcpyQWqhPTz6pwsNMqb9WxtyGLDaPkw0lGnR5DTA7viyFF7d9i4GZly8B4osHibgwoCdgNJyHV4idwbRcAZqAahxPw%2FhrrnVTplsyxo06tk9llyFOjZeK7XrKy7sbtRl6ACYt6rrTPUWdEM%2BwNZS0Oq0G4p4R%2FHtnx6E4bGYh1EYBbqTkFS6tga2QD4tsUaMa8F7u4o2VuYhUtcYh7QW9NXfmP%2BmQ1%2Bj0LriQoE0WcFNmm%2F1n1pSubxoTYhCQPM2lEIVYdACDohFQb6Ufgw39ePvgY6pgGmLlGyEbLJQBGhKYJbCAv5sN%2FadIJ%2FgV9OTSIWFR4k%2F9GYD%2BWp07F3JZkKuV7MhxoQFBvRi%2FnzFzf4n8Z41QrPTOkSsvSPBW27yGfF7QhYSCn7c1LBYouvoNIwrEPdJMhesug6KEo7NuycKMzG3wLoNe%2FfqqtLAqeXenGnjS9VXtk72n9%2BSdgtL6pGc7Ta240Z7pnSYQaztA55a9W%2Bgcg9F%2FX2GLbh&X-Amz-Signature=b782dd788d4e32112d7ee92b3b192f1233784ceaad27eb91cbd8955a870ae453&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYJEG5K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFySncJBJJWzV9ep2lZNUhYVHrD%2FGP9WgPNcFt9KqxfAAiAyQOHUWyef%2BvLtVgO%2FzTWCxfspYeqXb0lo%2FyoM2f2WDCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjEx8sDym8pOz5dF1KtwDqXR7QK6VcI3Qyf%2BhWj0qm%2FM2xQAlnWukqPr0t9z9KtIqh%2BYFxtUkHEx65EEjIDcAFrljOXIRSMbsQKEzJTM8nzcDhZzNRet7vSb%2FYQP1yhyuKSQ2F2OxKacQtvhu50Wppl%2FJDfdzqQfgvqNMn%2FmwXHxkrip2EVxR9BR%2FMXn4aipDlIM67gn2CdDd2vQVBujoi0QFqPvPRF32JPJdF8OzMLijIgr%2F%2FGilxlrK%2Fb6o8LN4k%2Fw5NOParuzOJmUN%2BL%2FfxVZ3z6FPScn1Me6ZPN0viT4YVvzV4A3DrjVTdrTwCeBzg6hux9K%2B882kq4ScUBPev1Ba4MlUzcuHFCp3KoZCLLeYuih7NSqrY%2BSUWWaPoWcpyQWqhPTz6pwsNMqb9WxtyGLDaPkw0lGnR5DTA7viyFF7d9i4GZly8B4osHibgwoCdgNJyHV4idwbRcAZqAahxPw%2FhrrnVTplsyxo06tk9llyFOjZeK7XrKy7sbtRl6ACYt6rrTPUWdEM%2BwNZS0Oq0G4p4R%2FHtnx6E4bGYh1EYBbqTkFS6tga2QD4tsUaMa8F7u4o2VuYhUtcYh7QW9NXfmP%2BmQ1%2Bj0LriQoE0WcFNmm%2F1n1pSubxoTYhCQPM2lEIVYdACDohFQb6Ufgw39ePvgY6pgGmLlGyEbLJQBGhKYJbCAv5sN%2FadIJ%2FgV9OTSIWFR4k%2F9GYD%2BWp07F3JZkKuV7MhxoQFBvRi%2FnzFzf4n8Z41QrPTOkSsvSPBW27yGfF7QhYSCn7c1LBYouvoNIwrEPdJMhesug6KEo7NuycKMzG3wLoNe%2FfqqtLAqeXenGnjS9VXtk72n9%2BSdgtL6pGc7Ta240Z7pnSYQaztA55a9W%2Bgcg9F%2FX2GLbh&X-Amz-Signature=e0b2940379dbd8270dfe1739a5b145a5c708f5ea7377e0585c2cde70b050b60f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HSLLJS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4egWjrVZJh3iXk7V9dShAHJ6DvjrMTgfmhW2BY0JcigIhAN4A3v76E3msJKnUsGTuXxIY8l%2FsZvSSOVusjlOynYQEKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBP8v9KCysdxQh7Bwq3AMQiD27S0PBgGwTWTxPhBYlRQqRCd0Jnl01CdjEbUbUyyQKKkuRcLZZQb1SkJCYwCYN2o2L9fIBkcQr0d%2BQo6pOruoSr0W7Kd6zElqaBRnr5lFKOWBh1Sx%2BPUu7AYDBaJz2W3udZIPZ4nYG7udlM%2Bssj8ZA%2FzmBgK9UZhyg1Lx%2BQQ0%2FoDvFzKCvzb5X8zZ%2Fh9p6ranNMHym8sVM7pIDAEXc5fK6%2FRw6nVjzzw5ZIKlFbrigDLTr%2FOZ2OvNsjFPy%2BLdQgYUCRUHVwmma4%2BjratwKhypYq9GcVcJ8Ghpg7SzItqQ0Bjky5egvYyQWzBxNIayYheOtJL1nXhg%2B%2BiD8JF1roazziGCdlz%2BSI7rp6J1HPZ%2B95Anhnf5sIRzItx6f6cTrE6VpW5trdIq51s1kXMYrGjJeYkf58NgOnhmhIf4jn5Bdv0yx19CYyF6ieINysLsHP5ckjaWWJylEeKZv%2ByngoUpbVJUB22L017qAkdahklu8dHyJ7FnXm6GdDVGyG4C1JlKbqRozL84FJ1KClQlsHyIB%2B645KEBYqBLmPPUTbDVBWMisQAf6ETXBlZgm2JFUSSL8Yv9lthuyVUXegsmeQ1Pnsh6UXs1JCqb5TNdYBgQnhZYPmXFuDD4I0TCO2I%2B%2BBjqkAY%2FRq9t43lUlDqDrG3vVz4BSgk8ssqYmpkpFAP6rXI86xgwcif8JBOKRQQlbiuR%2FinmCOHmR9XVf1U8KlMcZn1oGfXl5MmCi1fYcDrPoB%2Fxd%2FefL0hGnXRk96kJiN2K3aTc%2Fka93jvKRi9wDCKaadgzj3lpRFhFAmQdeVYXFexerIHBj2EJnkZF8Enz526%2F6hy5XUJzlD60dLRJLnnlf6xTg%2BNsd&X-Amz-Signature=463bd3ecafd4133248db7d4c9346f4f10e1ce2dc9569e5f2d35678de95df2938&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z2JPNW%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCID0p3v%2FV3%2BBEJP1yK4HlsuDRdyrvZjBMou3%2FRGbfF2SmAiBd26HkLHOnGX%2BCgeutV2vCAFisk5oVvkP3D8fUdpIt8SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLYdEepMFkA%2Bm3MrNKtwDXaiaciF9UXenRNT3sHyTVejBrRIKVNmg1FQOL8mYT4mVbzBiAVoYDg7fhlBGoNqPxQJrxfqtGVfK9YAy%2FQb%2F3zcKFdGyCvvHgv0SoVdFtk6T%2B%2BLYwgP%2BsZwl6zJMJskZKP9yPkt%2BOC5a3cNUJjiuVK2dhwIZfT2Hvf3WR34pVAL%2FBy%2BzdpU6QrQk7SYpzvPxrYmUpjAFRqjD%2BQhdQHgCuZFJOJytzyoiwun08sRCX%2FNRQ57PKgPLe7pgVKWrxkx7D8PB11E%2Fg%2BGQmvPYpc1cTHLXjoaq%2FsUFhy2YTt2Yqfd4MMRQHkc6VEQtevt2vfE6LfElers7kq2jfHR%2BjX7b1dARlOHcT5pU7gazwXEkk78OpsmOjpnGoaR56SZ5AyG0TAO6%2F6MNIC42ar%2FWu%2BgdIFidJzfkiRTIUrr5pE7GhC6jQTWy0u0XXLT10S5bMxCUNKQ25cHkv72b0StweyMUpfpFVfP%2BwsVaRLmNGuN6kIHhKLV1lX1DHpreZgNl453mQzDI4e4Xq5iWDfRBuuL4mIqjx8ZKGURwgLg8IZbGJB4otuHW3WU3T09pPTs74MCjhen7QU6HWwx%2FpwWUKEpqRCQeP5MTlEsEKiujNe9ah8IiFmBVoyELBcRBxY0wjtiPvgY6pgHxMMOyk0K75szLUKVQnnF4Owgs1L5KznjE7MrlYvn%2BhGgLa3wfHMRHglqVoUUq39%2BZuxiJ1MlR8tJijvpnRZuISjvgzYzzQ6fTCmzlmPclt3Iv6CxQ0Xa4wQSL2%2FUvuP%2FeIKc1pkN8bu2%2Fj9VyEVSWW0ctdNEtUs6KYWIlLkm0ctsW3NAx7Bp3zIyDMS%2F6hfOw%2Faxpf1QMJ%2FFS73ckafiTvh9Pgh2n&X-Amz-Signature=3d2349467115acfc0092dd9152e16952a971f6b3f42de9c589ebd71e627f5110&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYJEG5K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFySncJBJJWzV9ep2lZNUhYVHrD%2FGP9WgPNcFt9KqxfAAiAyQOHUWyef%2BvLtVgO%2FzTWCxfspYeqXb0lo%2FyoM2f2WDCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjEx8sDym8pOz5dF1KtwDqXR7QK6VcI3Qyf%2BhWj0qm%2FM2xQAlnWukqPr0t9z9KtIqh%2BYFxtUkHEx65EEjIDcAFrljOXIRSMbsQKEzJTM8nzcDhZzNRet7vSb%2FYQP1yhyuKSQ2F2OxKacQtvhu50Wppl%2FJDfdzqQfgvqNMn%2FmwXHxkrip2EVxR9BR%2FMXn4aipDlIM67gn2CdDd2vQVBujoi0QFqPvPRF32JPJdF8OzMLijIgr%2F%2FGilxlrK%2Fb6o8LN4k%2Fw5NOParuzOJmUN%2BL%2FfxVZ3z6FPScn1Me6ZPN0viT4YVvzV4A3DrjVTdrTwCeBzg6hux9K%2B882kq4ScUBPev1Ba4MlUzcuHFCp3KoZCLLeYuih7NSqrY%2BSUWWaPoWcpyQWqhPTz6pwsNMqb9WxtyGLDaPkw0lGnR5DTA7viyFF7d9i4GZly8B4osHibgwoCdgNJyHV4idwbRcAZqAahxPw%2FhrrnVTplsyxo06tk9llyFOjZeK7XrKy7sbtRl6ACYt6rrTPUWdEM%2BwNZS0Oq0G4p4R%2FHtnx6E4bGYh1EYBbqTkFS6tga2QD4tsUaMa8F7u4o2VuYhUtcYh7QW9NXfmP%2BmQ1%2Bj0LriQoE0WcFNmm%2F1n1pSubxoTYhCQPM2lEIVYdACDohFQb6Ufgw39ePvgY6pgGmLlGyEbLJQBGhKYJbCAv5sN%2FadIJ%2FgV9OTSIWFR4k%2F9GYD%2BWp07F3JZkKuV7MhxoQFBvRi%2FnzFzf4n8Z41QrPTOkSsvSPBW27yGfF7QhYSCn7c1LBYouvoNIwrEPdJMhesug6KEo7NuycKMzG3wLoNe%2FfqqtLAqeXenGnjS9VXtk72n9%2BSdgtL6pGc7Ta240Z7pnSYQaztA55a9W%2Bgcg9F%2FX2GLbh&X-Amz-Signature=ae468691a20cf170279dcfaf29884562b5315a836211f9ab9bbf4051ecf98285&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
