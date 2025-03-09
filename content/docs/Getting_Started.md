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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDTTFFA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICLYCO29TOTiz4N1ra1CVPpIpSWWKnAyRdldLH4rOsASAiAvclBSY6vFJD0nHCVPDdeefjRfMJ5IVz1axWzZae6pNCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMyNVcloarUHJc8gLaKtwDRZzGMJaYkhbpfHmwZo9%2BlwxcF5HgDNjFdkDFtFASE0pQNgud%2F4aExfqwC4tApim4Kdr1I7f5qKPnK4%2FgEfB3ukCdSwljG7P0CBRGw69HiDdGsTJ3I3uVJSzV0wY%2FHYpvoYtMN3UGxDXt%2BQOssbZ6Qu6xwo4VMY2s%2BiTLH%2Ffm2h9ewg9SlaT893lCY%2F3RyvYaxVjKbt56jaJwIpGhAp7FMT92b62c5zS%2FpWx2eFDN3X1NnZdNMuyCMYfRB8DH6j1leWD8DywSbJ4u7JhGxlA4UjBia23mzkQwzNDAYJBhZQ79VgjWmWgZMjY8oRrGOEr2u8nQt12XZUFtnXxdHOVk4bMBDnvecL%2FV1gB3Lxn%2FPhuBRCL4s4XO0hj5Qayvye046xzu9DsaR6ITzpebGMub0nRb3EnVJG3fkDl%2B55pa%2FPk37KEE2goPFfX39YQ69a7iytwJi%2Bao1p%2B29pXjel6dNh3z32xdv1IN0hzgdpa%2F8QXkhUvxAmv665Sr%2BCQFcT6y4Gxynl1YVXUg9V71ueeaug%2BFqXbOLYZC9ovoAZUfz%2BOuHRRZFzcEk9tLZMpI%2FEyV0KENTIQWDFL240cysKeikwstgC4vMDP4%2BZs4AZWPn6r6EaM0GtmdJeR47FEwzKi0vgY6pgEB3N6HHvjBpIWFGBrPY6bia7whyM2dx0ilfpcltcagF9MSHWlnZJADWY5SLPTmbx%2BFbA%2FfNm%2FkFOm46Lp2hCIGJ5amwUrVzOU%2FLHrEZw9VHiJSMm34mUObGkpgfSQtxxARnBrwV6ZKCG5VgTWoCdiB5Skq7yfYfgVu9ifPRwjRAKwi73%2Brg%2B%2FoDrNTOPMOAr6giMp8jqzjTXf1nCecGeim385lOjKy&X-Amz-Signature=6ea84027860debe12a72e9f1d36195781b0a1a1723785b010fd90f7d4b89ccf0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDTTFFA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICLYCO29TOTiz4N1ra1CVPpIpSWWKnAyRdldLH4rOsASAiAvclBSY6vFJD0nHCVPDdeefjRfMJ5IVz1axWzZae6pNCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMyNVcloarUHJc8gLaKtwDRZzGMJaYkhbpfHmwZo9%2BlwxcF5HgDNjFdkDFtFASE0pQNgud%2F4aExfqwC4tApim4Kdr1I7f5qKPnK4%2FgEfB3ukCdSwljG7P0CBRGw69HiDdGsTJ3I3uVJSzV0wY%2FHYpvoYtMN3UGxDXt%2BQOssbZ6Qu6xwo4VMY2s%2BiTLH%2Ffm2h9ewg9SlaT893lCY%2F3RyvYaxVjKbt56jaJwIpGhAp7FMT92b62c5zS%2FpWx2eFDN3X1NnZdNMuyCMYfRB8DH6j1leWD8DywSbJ4u7JhGxlA4UjBia23mzkQwzNDAYJBhZQ79VgjWmWgZMjY8oRrGOEr2u8nQt12XZUFtnXxdHOVk4bMBDnvecL%2FV1gB3Lxn%2FPhuBRCL4s4XO0hj5Qayvye046xzu9DsaR6ITzpebGMub0nRb3EnVJG3fkDl%2B55pa%2FPk37KEE2goPFfX39YQ69a7iytwJi%2Bao1p%2B29pXjel6dNh3z32xdv1IN0hzgdpa%2F8QXkhUvxAmv665Sr%2BCQFcT6y4Gxynl1YVXUg9V71ueeaug%2BFqXbOLYZC9ovoAZUfz%2BOuHRRZFzcEk9tLZMpI%2FEyV0KENTIQWDFL240cysKeikwstgC4vMDP4%2BZs4AZWPn6r6EaM0GtmdJeR47FEwzKi0vgY6pgEB3N6HHvjBpIWFGBrPY6bia7whyM2dx0ilfpcltcagF9MSHWlnZJADWY5SLPTmbx%2BFbA%2FfNm%2FkFOm46Lp2hCIGJ5amwUrVzOU%2FLHrEZw9VHiJSMm34mUObGkpgfSQtxxARnBrwV6ZKCG5VgTWoCdiB5Skq7yfYfgVu9ifPRwjRAKwi73%2Brg%2B%2FoDrNTOPMOAr6giMp8jqzjTXf1nCecGeim385lOjKy&X-Amz-Signature=0ce52b42c0d0e9089b64f51dcba5cb593e2fee6771e94db1ba3b224521c9136c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKTXXOG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD7kPczVOVhsrxrckDBJaVM1TDDBk3%2BTQQI%2FatB5CSIugIgW%2FZNsD9QLQgCxEMBzdmfwBNshMBc15Y1trY9hdEe6aEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCCSxKMoD73ojRcdRCrcA9C6%2FfsLcW4V4hWlhuyTAahbb%2FWIqrVxixckTJt1P58thsHqx2oZp3n%2B30TuTtabL2qJZGzzJ%2FsNiWlXfw3nfHPKu1N3DMT1eWJBcElyjVoZlZXAPzyMt%2B4qKq%2FrSNQnnL%2BUA7SeNtMnsA5EjuZBgMB8G7KDG9V8PU4uZQjy8RGmDdUezsRdcejCkwnv9JVUhwPXlzFa5cpctmZanQYtC7iGafr7smnUrUjRXnpt87lMKGvtbk7O%2BI%2BrkUkrkdBJlztDFMhlP9EXmyz%2BogpLq%2B%2Fmc9Tnz9wr0vehF5pi%2FiBYFPhLk1HNymdg1pIyJm%2BZoYPMZOq%2F9A6XHVUJDKG2wKUex9i%2FQRzkBhWJqBkrw7f5m%2FQUwWOi6suKeNPa2FjcfhXuOGjsnHCNUyv4ZWcLXvjpJtjk%2FkHwQaAShg%2FxzDLFhtWteNVJmg4Q6Mw5PVJ9p2XcUvwDMGyS5ZyoHoIQZzf8lA2jztyl0wLo3GO6laqH8%2FkkagsyizMck20GBLxI9IzYCVso5Agl%2FqYCGjC%2FUC5%2B4oFMZCp3rFUDHzvCKYskw83oZfYATL4lvUlqGXH3noRzzohvilmSHgapB7fw9BU9nSTJV56m%2FiQ9PkhGph9mNTE%2FychNpwc2t2RRMK6otL4GOqUBnqupiut969B8apnrCOoSMBmb3azkdl6gXD8W9n%2BsA22aX5G%2FGzuhSHOb8%2FvjRcdckd1HXYVC%2FeRU73sDzLwDd7PvFHVFk2u2iLippm1zEAeogSdz2AUxseqjHJQYE6p%2BpfdEvgNovVvtAPQxLfr84chEW%2B3Qq%2Fv8EVDkY8nuUTT0IOFGDmkuv%2FDYvCVOITyyA6MADg7xokHbvBPdJ0PNpQTEcx0k&X-Amz-Signature=3c499a4e791217b7434ea2c57cff2a25c6cfa3f72797106a1de6fdaca70b8975&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RW2UX3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCgeY4GLlNEwBLlF6pYZaKL6AfHPSc0PkyVJimWxw2AlQIhAKkPyTNfnWxmQdXOMu%2B5NT8a1ET5E%2FEoFez38DQagDs8Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwxUNDyWcbDcH1iGwsq3ANIL5E0ahBjDy8%2F%2BYM5lE5I7LpJ%2FDlCf5toLthjqg0xWsB%2FExoNucfr5kE4ivsdYDOV7m%2BZYkRM%2BCdDB13f9a6%2BJOv6C%2F1O4ovKW2%2BbkEF2IE3O0UdQaXQT8mHcT9477Uy0R2xVKGkfWUmrpG3LIog0EXr2UArPbAUhC8oIBcS5bNtnC4ySa5g6O7Bi9%2B3cCYhCXnxrWjunR9x%2BBAgvbOoYbZddfuu%2BGXG5rr0n%2FOErX48ljbam4hxzRzqww9twm%2BWGxS7mFSE%2BCeV8EyNeIrbIc1XepLuPgimUjPUozL2MDz3bnbJGb1SNnN4DpJfx5yqBj7Eh3EeS5Ubly4I%2BJQON5PSm985TeAFtkXqFCpm%2BNl2p7TjPpvIQHW4v7tx9mR2swmhtHRlH5siJMzvOqwn0na1tr%2BMWVDDm4V5UMPqwup9bTloX7%2BH0inLoP99dvKiEQNw70QmmL3qiQZBIswAJj0mNc9nXtkBP19xPJ%2BorSUzqbffFBbOpGKiEnYfIPTpetK%2FYcaERZoTbtH%2FGuwM3uBVwDZlisMEK2kNuGpZ3LSuarocTIgvQt3nakb9iXHmtXPtDayvRwpfBQC2kG7g%2FVRE2vdf1rcfzsz1qSTKCjbPRPpp8niLoguoKeTDMqLS%2BBjqkAdhHbC3LyE%2BRp8ry4cYi3d8YtSos8fcOeyVzHba8JDUHngUNRR1R6k0zg6Hxxs0s0zi8ADfbC6QU%2B8ciD08R%2FgKMnsgaIDgCWJltpnhTcQ%2BmkyRe4WdAyvQXo5lcnoa7fvHizuHEngtiZxzLPMDqaSkPzzYkRLHhxuUY0Kgdt%2B50HDgZMzG3E5sIFRIfRidd6Cv4y8yay3cWmycVzwEMHfksPw5L&X-Amz-Signature=e2d36f020535732ef199c221e2e280339b12270157ac04605fbcfe740780261c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDTTFFA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICLYCO29TOTiz4N1ra1CVPpIpSWWKnAyRdldLH4rOsASAiAvclBSY6vFJD0nHCVPDdeefjRfMJ5IVz1axWzZae6pNCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMyNVcloarUHJc8gLaKtwDRZzGMJaYkhbpfHmwZo9%2BlwxcF5HgDNjFdkDFtFASE0pQNgud%2F4aExfqwC4tApim4Kdr1I7f5qKPnK4%2FgEfB3ukCdSwljG7P0CBRGw69HiDdGsTJ3I3uVJSzV0wY%2FHYpvoYtMN3UGxDXt%2BQOssbZ6Qu6xwo4VMY2s%2BiTLH%2Ffm2h9ewg9SlaT893lCY%2F3RyvYaxVjKbt56jaJwIpGhAp7FMT92b62c5zS%2FpWx2eFDN3X1NnZdNMuyCMYfRB8DH6j1leWD8DywSbJ4u7JhGxlA4UjBia23mzkQwzNDAYJBhZQ79VgjWmWgZMjY8oRrGOEr2u8nQt12XZUFtnXxdHOVk4bMBDnvecL%2FV1gB3Lxn%2FPhuBRCL4s4XO0hj5Qayvye046xzu9DsaR6ITzpebGMub0nRb3EnVJG3fkDl%2B55pa%2FPk37KEE2goPFfX39YQ69a7iytwJi%2Bao1p%2B29pXjel6dNh3z32xdv1IN0hzgdpa%2F8QXkhUvxAmv665Sr%2BCQFcT6y4Gxynl1YVXUg9V71ueeaug%2BFqXbOLYZC9ovoAZUfz%2BOuHRRZFzcEk9tLZMpI%2FEyV0KENTIQWDFL240cysKeikwstgC4vMDP4%2BZs4AZWPn6r6EaM0GtmdJeR47FEwzKi0vgY6pgEB3N6HHvjBpIWFGBrPY6bia7whyM2dx0ilfpcltcagF9MSHWlnZJADWY5SLPTmbx%2BFbA%2FfNm%2FkFOm46Lp2hCIGJ5amwUrVzOU%2FLHrEZw9VHiJSMm34mUObGkpgfSQtxxARnBrwV6ZKCG5VgTWoCdiB5Skq7yfYfgVu9ifPRwjRAKwi73%2Brg%2B%2FoDrNTOPMOAr6giMp8jqzjTXf1nCecGeim385lOjKy&X-Amz-Signature=441eaf445a1c1f908547b1824c08752134f6527667152dc1a8f615f536530db2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
