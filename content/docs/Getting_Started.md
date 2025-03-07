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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTDBRSW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGt2IyYHqCz2SCXkh4iFVCtJS7MqLzVehKTPaBNsbrlAiBBt23oR7cvBMCPA84v6PSNT4MOkbrp4allm%2FVh4NnbQir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMp268IyoSBwzSGMWJKtwD5FRjwmtvNt%2BoQJasiUMhYdUjl%2BL1LWFC8UYGC0zdHpVI%2B5XH8wMvx6K%2BdwuxPPYU6eHHpANkSe5mx8V%2FuzAq%2BadK%2FuTG8VQ601%2FzCjCbYqq6yO8RKo%2Fp1BrU4%2FktQdI0IW5vRMwyEoinhy%2Bgb4EqQVxZV1wWSRx%2FtYXrylfw0uflYDl4bTYGwYu5jRqxehjnVH3ROjp8Bf%2BBRfDrtWI2iqnlxaV9YeybBqNNbJUaoHWOTc3pibunhX9tv9zkcN5PyWmk25WckmqcBluXZST6pRTWvdBQSW%2FgDXycOpzDjaTm%2B9raqLBrFGsbysMTjz%2F112E0hACdBJJZBXoAm07ARzf00xHuocMV96JfD%2FHwN%2FpcRicPE6B6CLvl9%2Bw%2F6kx1IfCh2xu%2BZpEOiwKWylC21TbYcSLiRcqdy3i0%2FyLp89JwBQNZeJ6GPev2FOOVIFWABRqhsCGnmHvT49NCALV%2BS5rr5twwx3fhXIdFkB2B2WngU2kIol2HlGydLbVLwjuoqU7%2BAaPGMD%2Bqv61jDr49q%2FInfMcRQOOypmmlzjYJcay7H1x8C9qFvq%2FXWgx64p1fjYCWpFvZEQVCw%2B2ovaTVK5Y3QgyTGgQkUq3uo19iclRm2oG39I1OEAjWM7Uwy9%2BrvgY6pgEtpf32RlwXe2SlAXzvJ1P1zRtaoxAptguVwilmT1kIFRYRNkuOeFmDJZwEhQIvbzjAuFhUN2GEuWI%2F1uvvtSlmTED4VkeyzEWVbaR%2B%2FujA48lpPX7Q9b6j%2F7mEfqHFsYrje90pIfTf6muHsVrZRgs64ShYOS0NT8Lq5%2BAm3sM2iuBCDRxTNdRXvYBF5z5HGx2IGFYI%2BCLQxEOuyO6F1uUtIf%2FGnFgR&X-Amz-Signature=c72cfd4f8d1658f0c7b54ee8bea4e632df4d570bcdc810c28132be1d4fa22efc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTDBRSW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGt2IyYHqCz2SCXkh4iFVCtJS7MqLzVehKTPaBNsbrlAiBBt23oR7cvBMCPA84v6PSNT4MOkbrp4allm%2FVh4NnbQir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMp268IyoSBwzSGMWJKtwD5FRjwmtvNt%2BoQJasiUMhYdUjl%2BL1LWFC8UYGC0zdHpVI%2B5XH8wMvx6K%2BdwuxPPYU6eHHpANkSe5mx8V%2FuzAq%2BadK%2FuTG8VQ601%2FzCjCbYqq6yO8RKo%2Fp1BrU4%2FktQdI0IW5vRMwyEoinhy%2Bgb4EqQVxZV1wWSRx%2FtYXrylfw0uflYDl4bTYGwYu5jRqxehjnVH3ROjp8Bf%2BBRfDrtWI2iqnlxaV9YeybBqNNbJUaoHWOTc3pibunhX9tv9zkcN5PyWmk25WckmqcBluXZST6pRTWvdBQSW%2FgDXycOpzDjaTm%2B9raqLBrFGsbysMTjz%2F112E0hACdBJJZBXoAm07ARzf00xHuocMV96JfD%2FHwN%2FpcRicPE6B6CLvl9%2Bw%2F6kx1IfCh2xu%2BZpEOiwKWylC21TbYcSLiRcqdy3i0%2FyLp89JwBQNZeJ6GPev2FOOVIFWABRqhsCGnmHvT49NCALV%2BS5rr5twwx3fhXIdFkB2B2WngU2kIol2HlGydLbVLwjuoqU7%2BAaPGMD%2Bqv61jDr49q%2FInfMcRQOOypmmlzjYJcay7H1x8C9qFvq%2FXWgx64p1fjYCWpFvZEQVCw%2B2ovaTVK5Y3QgyTGgQkUq3uo19iclRm2oG39I1OEAjWM7Uwy9%2BrvgY6pgEtpf32RlwXe2SlAXzvJ1P1zRtaoxAptguVwilmT1kIFRYRNkuOeFmDJZwEhQIvbzjAuFhUN2GEuWI%2F1uvvtSlmTED4VkeyzEWVbaR%2B%2FujA48lpPX7Q9b6j%2F7mEfqHFsYrje90pIfTf6muHsVrZRgs64ShYOS0NT8Lq5%2BAm3sM2iuBCDRxTNdRXvYBF5z5HGx2IGFYI%2BCLQxEOuyO6F1uUtIf%2FGnFgR&X-Amz-Signature=e564369c83807a75aa3ec33ecf1985d099a2f6098413a7aeabcf9d8018315728&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KJTBQRE%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdT5wF3aNwI6ExTVbwBBglPlTlWh%2BcX6bDkOIi96WlZAiEA7SNN9eO2v4JRPKwi5H8qv%2Fetlh6TVNSUrF5CilPbM94q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKYq9nyJAHkNO3NjKircAztQNhMeM2PqydxG1tNqsJ8UhN6jaDREpjG6ifbAaIx2E%2BnPUddghFZ0phrXF0P6XFqxINkgpz4iokbD89ZPfk1h7trjJu28oR9In4a43rIZhuPLsMEn8ih%2BUh6XqXOJBYn%2FMZ3EYS5r7Y4befyxq3BqJPSI2ugTq1fFx2IKWyj5MQ7KfZ0KuqDiFkUfvdsWG2Hf%2Bz7nONtzbx%2FxgTBYjIkQtbgG%2FWKNApJb8Bmyd3Uxj8Ee9pm6FFW2TYIym25Nlu3SQb5AGvNEvHxYHO66riwG3O2ZiF3ZuQcpUV12%2BGldaEHPtbALwPLgah6qyBffO1J86wvEzPflXaPuLRuJbGNoATra9BmLvMEhN7kg90BDzBh79aEzA%2FxkI8zaQXXwk%2FH1bI6OV2NHN0Xj1xOFU1fkFGsKeTHGfDGO%2FkedqyJSpZ1t3bsI4a%2FP6XOQ%2FX5jeTuhqDqwDiyAA3bx7%2FUWHddh7Pg8cLgLnL7EPUo7QNIte%2BRgZrU1bCgFFRX3xgJo8%2FNvzehGKAyLNYNgOBIwRUDcVYtFt0LhKC2XXdLLeFafjcincMJ1EkSM%2FrKSLyRQcr%2BVTX2u8PKSrXK0Y%2F38xG7rTXEyV3ssm1KzUnZA0HXN%2BkxPMsGAu4lln%2BYyMITgq74GOqUBeduafOQyAnByclQyaA9IJTSkrLhYWOjOYLWgbQh%2FzEowY738xICBB9LksoBC%2FhO4mZrJD%2FlVc0W%2Fqis3UY7qps12n2HUzP6CTPa8akzqX5uIfbeOz%2Btdbx9fQ9lZ19DGK%2Bx9Un9cXUPCbPdXw049KsS9Ua9241RJ5wBol4sVrWrQsCcm4rm5NTJKubC%2FMTXBmQS5Exbj2pyaaJ9JUcwzwB9Q8KUb&X-Amz-Signature=10951c5cf5da94e9317008ecef4d6b6a74b271da611838c1f6cf19a72fd5ba4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WEZ37N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FtUhB3zuMzN8Und6n2F4Zk5X5acYgKdgZGLEJEwD9AIgdTqpxuj1CEQdTQOFyinaw8yyVUfMVBwd3udlf0q%2BWzQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLTaTwSyV1XYX3uoXSrcA%2B5eaXDqwd%2BnaawHJ6T9o356HoiWaoxN%2BHYERcavS00EZ8dzyESwTZOKXU%2FgQoY4ER72WpjmMy0uVR8w0KcVRDaNl53keWhsyqcW%2BAaNW3z6%2BqPtb1M8V37vc%2BJeAKbPtsyCpLG95wtBpG9gwwICV0tl5pPKj%2FawEvIyiprmkXggsdYUX%2BkvuY2KRrS9UQMp6sIBPqA3avKqjIqCbETpstP78okezoXUfPAK2hYhDu%2FJDMcU%2Fhfpl1dLNxrh46JhsPYCqR%2F8ok97frtmfA2dojiiKjn7pRy3gXA7eW4rgAQDootMgSQjwYzvblsKP8lik3kMg7PnfC6PJbZ2O7Y4VPB6owpxwTGd6CKOsCDvBPv41uzXPyaZc0Fd2xroJqQTS%2BjM3S4eIDV9ehAJPKPmEU3KSbJmoCqb%2F%2B%2BIlDXcKieqU1bUjsSIcFGoQ7gpeIzKqEcoR04vK6XorkxCwcjkfGNtNrVfK4eMWPwRnzH%2FBSXsG2L9Ji0DqceoCdoPKPcGx6F0GQowg2%2FdvkG%2F7jpJPlGbnXTpcM7ylqLoWBNTrLzAPdDWQj5NexHtXY9YCSz2uzUd4fvEM9EZqDuBHTrecZuc%2B0h8hqnPbsQ51e9EVFpP8m8E8f9aGpx1PPGKMN%2Ffq74GOqUBIrwSU4kYiGjvHykS6QA9SaJCn4HXdHpBTC0mvcWBwD7nx7eChgeJfo8AZC5EVmfVCAX%2BuZeUhcrEMUSeHJKUYXxRYW8vJ1AsJhi6sUgd%2FZuvpgrip%2BSt4E%2FdOBb4Cj0sgW2MftzYMW1yIQdHyVW9bTa4qGcmVXvvtpOqrnVomEeAdA9HrxU%2BlP0DCwIGy%2BKX0xGQ4MwPDmtugVIelAN99h9VNEly&X-Amz-Signature=9e65428d086d1123a5e4363823ea058621a5cecc7c9283c122199da6c92b1f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXTDBRSW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGt2IyYHqCz2SCXkh4iFVCtJS7MqLzVehKTPaBNsbrlAiBBt23oR7cvBMCPA84v6PSNT4MOkbrp4allm%2FVh4NnbQir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMp268IyoSBwzSGMWJKtwD5FRjwmtvNt%2BoQJasiUMhYdUjl%2BL1LWFC8UYGC0zdHpVI%2B5XH8wMvx6K%2BdwuxPPYU6eHHpANkSe5mx8V%2FuzAq%2BadK%2FuTG8VQ601%2FzCjCbYqq6yO8RKo%2Fp1BrU4%2FktQdI0IW5vRMwyEoinhy%2Bgb4EqQVxZV1wWSRx%2FtYXrylfw0uflYDl4bTYGwYu5jRqxehjnVH3ROjp8Bf%2BBRfDrtWI2iqnlxaV9YeybBqNNbJUaoHWOTc3pibunhX9tv9zkcN5PyWmk25WckmqcBluXZST6pRTWvdBQSW%2FgDXycOpzDjaTm%2B9raqLBrFGsbysMTjz%2F112E0hACdBJJZBXoAm07ARzf00xHuocMV96JfD%2FHwN%2FpcRicPE6B6CLvl9%2Bw%2F6kx1IfCh2xu%2BZpEOiwKWylC21TbYcSLiRcqdy3i0%2FyLp89JwBQNZeJ6GPev2FOOVIFWABRqhsCGnmHvT49NCALV%2BS5rr5twwx3fhXIdFkB2B2WngU2kIol2HlGydLbVLwjuoqU7%2BAaPGMD%2Bqv61jDr49q%2FInfMcRQOOypmmlzjYJcay7H1x8C9qFvq%2FXWgx64p1fjYCWpFvZEQVCw%2B2ovaTVK5Y3QgyTGgQkUq3uo19iclRm2oG39I1OEAjWM7Uwy9%2BrvgY6pgEtpf32RlwXe2SlAXzvJ1P1zRtaoxAptguVwilmT1kIFRYRNkuOeFmDJZwEhQIvbzjAuFhUN2GEuWI%2F1uvvtSlmTED4VkeyzEWVbaR%2B%2FujA48lpPX7Q9b6j%2F7mEfqHFsYrje90pIfTf6muHsVrZRgs64ShYOS0NT8Lq5%2BAm3sM2iuBCDRxTNdRXvYBF5z5HGx2IGFYI%2BCLQxEOuyO6F1uUtIf%2FGnFgR&X-Amz-Signature=cfd731098b27fead1bef6c210e029547441f4c70e0b44874cc79bd401a4b0bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
