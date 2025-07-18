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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7KHUSQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA2knqO6iPEqBgvfq7YGGTG2zhAAVQ%2FmrE2ZCs18w%2FSZAiEAtE26dxWkNR37yQ7Tk7a9V5kPrPlXJ1HDRzMQlQ7jJVUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAgkSHT%2BL9nahggCyrcAyBfZvNwrGCuwA0w%2B9%2BBDaE1xn%2FiYa32xn5QY1hjVjCsEMsC2ukBhSUBBbcR3RlAalAXip%2BROgN0LnszQTsT6UCAoJsNNWE7jaopWaHtSNcStoWbDRrYxNM%2B1QWffAjlPG5zORb4vJqZCkvBpGoKOhETt4xWooHITcQ%2FYgeptCSlyjp24MWhhH1Klb8rCRHneTafN%2Bn8BvRmeD5Y3QsoDY7JLq4Cz7pd4trVEPMxyTBQhM7XUk7Ov%2FGE4%2FfTgxw7MYNk1v362rGZ%2BIdPtEWONhEOumY9gLRJ0VGBPXtm364vZX2%2BAOsQtV0ltMWvCDFSuUwC2m8SvjJa6ebb2qVgUolj1bAoN1%2BIBwgwbpJ%2B8qLISmfLnlvNalIXwRqcJVJN8EwHHEQJ6Uj3FQ%2Fnqe%2FDn86tNCDfJocpputBNFUltS63A6kKRU9qPKjiPnaut5MhKb94ij78HSKFR7Zb5kXYjw9TcAHrLOUj49X8yNgklemGwPMfdBfWVBp8TrAWz698vUPt9KcniDF6zyLSfyVeEMdGqSjO3tCiG4aqemDkj053TQUpmhtL77Dhwtk04DlHLM5E2EY1YOXRNX8jXD%2B6mQ4cWbDO43016JoX3xhSre%2FH6zdxUgiHGQXOBnOwMMfl6sMGOqUBSXOuijblJ8iucaVvdnxb2c%2BkEpv1GJqT4Pzr%2B5cImeADJAsMxYM6xsQE9siGJId2rl5KeCUzKxWYhjROZZ905bGYMGKjaz%2BLyLvzwiCz0ZLb%2BxnWNANDdRD9P%2BDX%2F9vXnxwi8F2W4qWhPghKi9QpvLRCoYF4VyAuHqKb4Y7ypGvG5ggp4BaGN17Eq7IaIgw6wwJEoBdh8Pz0h%2FAgrpbryEhL7VWI&X-Amz-Signature=8708a858403ae6b245264c59dcbb82bed31dd4b9037f198b57a2b448ba33f19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7KHUSQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA2knqO6iPEqBgvfq7YGGTG2zhAAVQ%2FmrE2ZCs18w%2FSZAiEAtE26dxWkNR37yQ7Tk7a9V5kPrPlXJ1HDRzMQlQ7jJVUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAgkSHT%2BL9nahggCyrcAyBfZvNwrGCuwA0w%2B9%2BBDaE1xn%2FiYa32xn5QY1hjVjCsEMsC2ukBhSUBBbcR3RlAalAXip%2BROgN0LnszQTsT6UCAoJsNNWE7jaopWaHtSNcStoWbDRrYxNM%2B1QWffAjlPG5zORb4vJqZCkvBpGoKOhETt4xWooHITcQ%2FYgeptCSlyjp24MWhhH1Klb8rCRHneTafN%2Bn8BvRmeD5Y3QsoDY7JLq4Cz7pd4trVEPMxyTBQhM7XUk7Ov%2FGE4%2FfTgxw7MYNk1v362rGZ%2BIdPtEWONhEOumY9gLRJ0VGBPXtm364vZX2%2BAOsQtV0ltMWvCDFSuUwC2m8SvjJa6ebb2qVgUolj1bAoN1%2BIBwgwbpJ%2B8qLISmfLnlvNalIXwRqcJVJN8EwHHEQJ6Uj3FQ%2Fnqe%2FDn86tNCDfJocpputBNFUltS63A6kKRU9qPKjiPnaut5MhKb94ij78HSKFR7Zb5kXYjw9TcAHrLOUj49X8yNgklemGwPMfdBfWVBp8TrAWz698vUPt9KcniDF6zyLSfyVeEMdGqSjO3tCiG4aqemDkj053TQUpmhtL77Dhwtk04DlHLM5E2EY1YOXRNX8jXD%2B6mQ4cWbDO43016JoX3xhSre%2FH6zdxUgiHGQXOBnOwMMfl6sMGOqUBSXOuijblJ8iucaVvdnxb2c%2BkEpv1GJqT4Pzr%2B5cImeADJAsMxYM6xsQE9siGJId2rl5KeCUzKxWYhjROZZ905bGYMGKjaz%2BLyLvzwiCz0ZLb%2BxnWNANDdRD9P%2BDX%2F9vXnxwi8F2W4qWhPghKi9QpvLRCoYF4VyAuHqKb4Y7ypGvG5ggp4BaGN17Eq7IaIgw6wwJEoBdh8Pz0h%2FAgrpbryEhL7VWI&X-Amz-Signature=9e6d75192110116503f72f8e6c19e17a8d2e8d4b656dc2fb9b78ee6899ab2d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7KHUSQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA2knqO6iPEqBgvfq7YGGTG2zhAAVQ%2FmrE2ZCs18w%2FSZAiEAtE26dxWkNR37yQ7Tk7a9V5kPrPlXJ1HDRzMQlQ7jJVUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAgkSHT%2BL9nahggCyrcAyBfZvNwrGCuwA0w%2B9%2BBDaE1xn%2FiYa32xn5QY1hjVjCsEMsC2ukBhSUBBbcR3RlAalAXip%2BROgN0LnszQTsT6UCAoJsNNWE7jaopWaHtSNcStoWbDRrYxNM%2B1QWffAjlPG5zORb4vJqZCkvBpGoKOhETt4xWooHITcQ%2FYgeptCSlyjp24MWhhH1Klb8rCRHneTafN%2Bn8BvRmeD5Y3QsoDY7JLq4Cz7pd4trVEPMxyTBQhM7XUk7Ov%2FGE4%2FfTgxw7MYNk1v362rGZ%2BIdPtEWONhEOumY9gLRJ0VGBPXtm364vZX2%2BAOsQtV0ltMWvCDFSuUwC2m8SvjJa6ebb2qVgUolj1bAoN1%2BIBwgwbpJ%2B8qLISmfLnlvNalIXwRqcJVJN8EwHHEQJ6Uj3FQ%2Fnqe%2FDn86tNCDfJocpputBNFUltS63A6kKRU9qPKjiPnaut5MhKb94ij78HSKFR7Zb5kXYjw9TcAHrLOUj49X8yNgklemGwPMfdBfWVBp8TrAWz698vUPt9KcniDF6zyLSfyVeEMdGqSjO3tCiG4aqemDkj053TQUpmhtL77Dhwtk04DlHLM5E2EY1YOXRNX8jXD%2B6mQ4cWbDO43016JoX3xhSre%2FH6zdxUgiHGQXOBnOwMMfl6sMGOqUBSXOuijblJ8iucaVvdnxb2c%2BkEpv1GJqT4Pzr%2B5cImeADJAsMxYM6xsQE9siGJId2rl5KeCUzKxWYhjROZZ905bGYMGKjaz%2BLyLvzwiCz0ZLb%2BxnWNANDdRD9P%2BDX%2F9vXnxwi8F2W4qWhPghKi9QpvLRCoYF4VyAuHqKb4Y7ypGvG5ggp4BaGN17Eq7IaIgw6wwJEoBdh8Pz0h%2FAgrpbryEhL7VWI&X-Amz-Signature=92b0ed22d84059d08ac13f38b4b21597418e02be89c26d2dff8bfae46c22c20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SURO732J%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGBcwcBGreZ6KN8ARvumgDGLuYoLeRXqcf9ItQdeTYVTAiAZ4UTl1fTHAOWz8cXCCVmXhZoCg40tP0pPh5dEQhSpayqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgYVaoGN05BMedG1fKtwD%2BtuI9v3vc1Z29tpi5OHWeIJGL6aIiSMhwizGl7gyGQ6J4bjzElUfPeZ5B1hhFSF%2BGKxMvA5BP83l19vt%2BlDL9XkRRa8u1s4yDmSBUohsUyfGKQ1luYK5QGrsEdXeSOHRzwtAfESbvCjpk2Sk%2FsRowqBD47gSgZ%2BbgAXzSitMNqWZra%2BSUXt3hmeSxNxkPUt05Z4iTSzGM6rV%2FRG4dZFC6OxPsSC09yR95z%2B4F79gwopdCUI7vS7XGrDtJRpbR2ihZEnBQixt8ntFPLvPsy3AeDIdqRdtWlVbdYzT88%2BN%2F5e6dnAo6iN9ScHD5t4gfcaM%2FviUyIGIieAaBFLD%2BEEjfmMwQYnMx%2FFLSyI%2BQl0ARcMWV5RVOEhFRy%2BskDjEXmkOghQE3kd3kw4Q85JcFFNtvEU0783QO77Ughym2EVHHyM2ThAOWO8F1swUS8kpnMkE%2BXTvzj%2FXmKavFW%2Bx7%2BJUr3juD5L%2FAedKWXRTggwdEae4MHWTHD7Q1L7iDP2hmtCdIHGFu1G3RSk0fbFa0r7%2FUwgDpL4JcCO9hXfDpjN9rUuMofKCvaeqxpaTHbNZxANLkWJfTmYFOYvUNaQuhUlQLj1%2FeYnel8%2BqrDJPdLe%2Br0zOmGgE6%2BzFGfy9vb0w1eTqwwY6pgENxuoEeUpJ%2FvSdGn5g728k8kfIFnXvSUOSftIe%2FbnrCWFJptDvq6Byh9ObY3N4CTozLPfajP1k1a5RsdkKZU14QUIgTZmZVkG6TQv43EFgQ8M9XMkSnMnIiXMA64qCibj%2Fx9%2F3T9yyNpXgO2ae0Fh8NaAhX1zY%2FJT8nZwsG76ymy1FLXxp3NYY6IsnDTe0tkGkqQn322k5qV7QNYPzJnmG7ghwv1KX&X-Amz-Signature=abb294fec635442836827d51fbe7dd66b2c6f83f7b3185c1ee9016b2b41ff0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMXM6EZN%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCtj9AOMPL7Vk2BeTC0z6KTIQvpL0YDe5cX5mduwqqRNwIhAMdF2N78kPvjnNMhdl5u%2B3mk0uyeZqFCLOM9fDN%2Bs9mbKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRktpTX0tk9JAarjcq3ANtGEmz9xZXleH3mJAdyI%2BCq%2B5xTknCzkm4wqwIKYD%2BmWAf21ZGv%2Br5S4Nwnt6F9BmZpH4dtVV1w721N8fZpmwVo3k0O1vvPpG6YgPrMxw9ZUunXH41FOVw0E8%2FpPZygtM5fveVkq136bdTTJ6cArNoaUd%2Bjq7OQbJ4FXQuk15zrsa7FpASSvkseEbFtFnkpSnOt0Uez24b5pz3Tf415InmksfBLehY%2Fpv7ZjD7nUP4c42sqBhQsCQ2%2B3%2BQV0X2vw9O3mRl%2Fw7xH0O4Bn4ek%2BJkBWfNHAYa%2B5Q1OxQIg3ryKuJZv9R28i0clPTsytS2safOBe%2B72kwWYUQPfCyoF4j%2BJK8XJa7DAvq97tkgHL6RYxyBIRlQ1dOOC%2BraM93g3721XGIoRgfetRibCP6YaEYml5ZAoS4Gpk3n6rh3%2BF2tmbhTp%2BSIeoG7s%2FYnHNMreEyct62D62IvA7q1Qdd6587ZmI1say7DzbJStC1kR1cy7dImhpBBz%2Fp%2FHAE3a5dYv9roDM%2BeM4BsAJ4rIR8HpYuTn9bV0xuwwE6Ieg%2BNMoAvlo0aa3jQJqKF1jcd95XpKeP43DqWL4iYQiQdW7%2FbJM9has84idyx7rayjuQyPz6YEkPB4yMFi6amjA4bWDDq5OrDBjqkAQyPZEpVPWAH1ypRd5uK3iSnyCTvNlnSPY9oSpeBjZl409HHnrTt7DZa7tItYL5Kln4b9nQ%2BI%2Fjfx8mk0r%2BLgwUUj6M%2BHtseXVmxa%2FEaDlDUTCEsxMXYuuHa3dhm9ZZEJXAFMcEBvj6fBOJo5YbiQ5b%2B0Kw6ji2JZF678p5%2BHcGAmcpPsrm7hMnLCgBmUV2kAt31SWtPey%2FoQV9ZvCK8O32dBGdy&X-Amz-Signature=36637545d0dc5b2618a1877781b36aa2e0ffd7b632850dc3deba38d1661e7897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7KHUSQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA2knqO6iPEqBgvfq7YGGTG2zhAAVQ%2FmrE2ZCs18w%2FSZAiEAtE26dxWkNR37yQ7Tk7a9V5kPrPlXJ1HDRzMQlQ7jJVUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAgkSHT%2BL9nahggCyrcAyBfZvNwrGCuwA0w%2B9%2BBDaE1xn%2FiYa32xn5QY1hjVjCsEMsC2ukBhSUBBbcR3RlAalAXip%2BROgN0LnszQTsT6UCAoJsNNWE7jaopWaHtSNcStoWbDRrYxNM%2B1QWffAjlPG5zORb4vJqZCkvBpGoKOhETt4xWooHITcQ%2FYgeptCSlyjp24MWhhH1Klb8rCRHneTafN%2Bn8BvRmeD5Y3QsoDY7JLq4Cz7pd4trVEPMxyTBQhM7XUk7Ov%2FGE4%2FfTgxw7MYNk1v362rGZ%2BIdPtEWONhEOumY9gLRJ0VGBPXtm364vZX2%2BAOsQtV0ltMWvCDFSuUwC2m8SvjJa6ebb2qVgUolj1bAoN1%2BIBwgwbpJ%2B8qLISmfLnlvNalIXwRqcJVJN8EwHHEQJ6Uj3FQ%2Fnqe%2FDn86tNCDfJocpputBNFUltS63A6kKRU9qPKjiPnaut5MhKb94ij78HSKFR7Zb5kXYjw9TcAHrLOUj49X8yNgklemGwPMfdBfWVBp8TrAWz698vUPt9KcniDF6zyLSfyVeEMdGqSjO3tCiG4aqemDkj053TQUpmhtL77Dhwtk04DlHLM5E2EY1YOXRNX8jXD%2B6mQ4cWbDO43016JoX3xhSre%2FH6zdxUgiHGQXOBnOwMMfl6sMGOqUBSXOuijblJ8iucaVvdnxb2c%2BkEpv1GJqT4Pzr%2B5cImeADJAsMxYM6xsQE9siGJId2rl5KeCUzKxWYhjROZZ905bGYMGKjaz%2BLyLvzwiCz0ZLb%2BxnWNANDdRD9P%2BDX%2F9vXnxwi8F2W4qWhPghKi9QpvLRCoYF4VyAuHqKb4Y7ypGvG5ggp4BaGN17Eq7IaIgw6wwJEoBdh8Pz0h%2FAgrpbryEhL7VWI&X-Amz-Signature=9b9baf2b90f5fb39bfb23fffa301767d0e2922705a1d3a5dfe2b93bfa3435cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
