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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHV44XMO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm%2F5Qk4t7FswNt68%2BQlpiXZ%2B3pdf5Ul15mNIMGJd2%2FQIhAISqwFppoKe8%2Bdc%2FLrm2cypEv%2Bk253KU%2FcMll%2BIrq7d4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CZd9zVO2609fnA0q3AMoifAgY8bzpDr%2BnGPbJK1bZsrfFliCi3X1P9FXJ4IYOl%2BPuUD1z5r2nu2KlJSeqqhGo726Eyc1MAkjmclEdDuSAMBTRGnBF6Ysq2b96YuesvPBIoHNlbdWrMHiQiFpOjWPxljrYgjG29IfFrwICfVIjvU0H8ILRcpo2RVYmoJ%2Bz9XU8CccNr5525RBIuFs5HCs8sczjvDjNaQzLeAmyKOb2HvZvoz9TaStGIcjNfOalwxmm86S4Q%2FxC0fOlxa%2FxrOeWz%2FRMYGnBXm40kdpKSk5h0pHXFOvx4clTqZLMGHEm4YfYzRGWET11dGMHRtVq%2BCBmGwipELzi3cYmoWK1d3Vh7Q8XjxjxH2nPDQQxdaAF3IqYhG%2BQdgUWbtlKhTlWwlmVxSMuPuspFkDlrM9qdpfl4Y4FrsYUgyX10TRJcdw6e%2FtnHFUv4UeenLh5ynHdGa%2FtuqZlN67A3S579c8xdZVxp5X3HXOcXx8SiUmkRP1JSVfeOWE0ni4cxJcKlDLNNU09Z0CbUHNV99j0FK37rjbg3NoJK8iEBwT8C277cvL6%2BPtIkiieKOHSRU9Nkg2sHWZ4wx19O8ID%2B5T5nPGDzTmRAtcFFpn%2BPASaoGNGAjSL8XMPN0jyqU7CIT%2F8DC94pPDBjqkAQz9trui4%2F6U22ID6c%2BKTzzNDDVnF72K5N%2FElth1YyyQuP3uq9hM3MAumKHc32rfdpRfJZC5vTscZPJDkXitmx0xYeOO65mX38A%2BN%2F6wXNi7uNcd8LsYosTujUTap13Dtadq5TxJwhyIC6T8vQUxcXjzkr1RTxRPxpH%2B%2BwKqIzx88b8WnKGeHmWFINypbZ40IkRAuDHKP2wFCJrJd2ipBqE6Ozos&X-Amz-Signature=9f798bc5f58e58f4e25ec8d76b0c1f8f50b4b36aff6560c653ca133e2853eee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHV44XMO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm%2F5Qk4t7FswNt68%2BQlpiXZ%2B3pdf5Ul15mNIMGJd2%2FQIhAISqwFppoKe8%2Bdc%2FLrm2cypEv%2Bk253KU%2FcMll%2BIrq7d4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CZd9zVO2609fnA0q3AMoifAgY8bzpDr%2BnGPbJK1bZsrfFliCi3X1P9FXJ4IYOl%2BPuUD1z5r2nu2KlJSeqqhGo726Eyc1MAkjmclEdDuSAMBTRGnBF6Ysq2b96YuesvPBIoHNlbdWrMHiQiFpOjWPxljrYgjG29IfFrwICfVIjvU0H8ILRcpo2RVYmoJ%2Bz9XU8CccNr5525RBIuFs5HCs8sczjvDjNaQzLeAmyKOb2HvZvoz9TaStGIcjNfOalwxmm86S4Q%2FxC0fOlxa%2FxrOeWz%2FRMYGnBXm40kdpKSk5h0pHXFOvx4clTqZLMGHEm4YfYzRGWET11dGMHRtVq%2BCBmGwipELzi3cYmoWK1d3Vh7Q8XjxjxH2nPDQQxdaAF3IqYhG%2BQdgUWbtlKhTlWwlmVxSMuPuspFkDlrM9qdpfl4Y4FrsYUgyX10TRJcdw6e%2FtnHFUv4UeenLh5ynHdGa%2FtuqZlN67A3S579c8xdZVxp5X3HXOcXx8SiUmkRP1JSVfeOWE0ni4cxJcKlDLNNU09Z0CbUHNV99j0FK37rjbg3NoJK8iEBwT8C277cvL6%2BPtIkiieKOHSRU9Nkg2sHWZ4wx19O8ID%2B5T5nPGDzTmRAtcFFpn%2BPASaoGNGAjSL8XMPN0jyqU7CIT%2F8DC94pPDBjqkAQz9trui4%2F6U22ID6c%2BKTzzNDDVnF72K5N%2FElth1YyyQuP3uq9hM3MAumKHc32rfdpRfJZC5vTscZPJDkXitmx0xYeOO65mX38A%2BN%2F6wXNi7uNcd8LsYosTujUTap13Dtadq5TxJwhyIC6T8vQUxcXjzkr1RTxRPxpH%2B%2BwKqIzx88b8WnKGeHmWFINypbZ40IkRAuDHKP2wFCJrJd2ipBqE6Ozos&X-Amz-Signature=8f473dbe1beb71cbe8ee42bf6e9cf5c7177f39738ac45a54303e1ce7170c2c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHV44XMO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm%2F5Qk4t7FswNt68%2BQlpiXZ%2B3pdf5Ul15mNIMGJd2%2FQIhAISqwFppoKe8%2Bdc%2FLrm2cypEv%2Bk253KU%2FcMll%2BIrq7d4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CZd9zVO2609fnA0q3AMoifAgY8bzpDr%2BnGPbJK1bZsrfFliCi3X1P9FXJ4IYOl%2BPuUD1z5r2nu2KlJSeqqhGo726Eyc1MAkjmclEdDuSAMBTRGnBF6Ysq2b96YuesvPBIoHNlbdWrMHiQiFpOjWPxljrYgjG29IfFrwICfVIjvU0H8ILRcpo2RVYmoJ%2Bz9XU8CccNr5525RBIuFs5HCs8sczjvDjNaQzLeAmyKOb2HvZvoz9TaStGIcjNfOalwxmm86S4Q%2FxC0fOlxa%2FxrOeWz%2FRMYGnBXm40kdpKSk5h0pHXFOvx4clTqZLMGHEm4YfYzRGWET11dGMHRtVq%2BCBmGwipELzi3cYmoWK1d3Vh7Q8XjxjxH2nPDQQxdaAF3IqYhG%2BQdgUWbtlKhTlWwlmVxSMuPuspFkDlrM9qdpfl4Y4FrsYUgyX10TRJcdw6e%2FtnHFUv4UeenLh5ynHdGa%2FtuqZlN67A3S579c8xdZVxp5X3HXOcXx8SiUmkRP1JSVfeOWE0ni4cxJcKlDLNNU09Z0CbUHNV99j0FK37rjbg3NoJK8iEBwT8C277cvL6%2BPtIkiieKOHSRU9Nkg2sHWZ4wx19O8ID%2B5T5nPGDzTmRAtcFFpn%2BPASaoGNGAjSL8XMPN0jyqU7CIT%2F8DC94pPDBjqkAQz9trui4%2F6U22ID6c%2BKTzzNDDVnF72K5N%2FElth1YyyQuP3uq9hM3MAumKHc32rfdpRfJZC5vTscZPJDkXitmx0xYeOO65mX38A%2BN%2F6wXNi7uNcd8LsYosTujUTap13Dtadq5TxJwhyIC6T8vQUxcXjzkr1RTxRPxpH%2B%2BwKqIzx88b8WnKGeHmWFINypbZ40IkRAuDHKP2wFCJrJd2ipBqE6Ozos&X-Amz-Signature=06381947b3cd7760da502920399918b9817fd96a1f23d443089a2ebf1711f1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S4L5AVD%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzc8lFKmtweNKOl%2BScAM3Usyrubj28HuvGnQaVsnt%2F0AiEAh61iEAiTwg8TvKDBMwllrSDEb7YAQkgyKFnmWen0Cb0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKroq1bgpdCZ3m1fryrcAwOHH%2FQ3LqmkHXlVeLkW16NGTTsYzwxGlqN8%2FQL9gW2MyJKOPOeowx4XIRko2CWJZF9BCsbPOqXRmztojIb1P5JTcDHfEh2k4MI6oACqrQcmPVybn8SjFraf9yOFFxasctmgNzBSu9sJgwh6uNssWGDUpZlE%2BUIN7Dvkg67diek7TsPfF0awGxnCIB%2BR0ig11AhN95UPHNLcPN%2FkYrqbU1pjp7Zlt8PMnUI3udkYAa8U3%2FKg0dhVG2UzjZk%2BvtFGgk15cDVFffKIsf4oAaBQUUoZ05aTvAyi%2Fi%2FpBKtRtIF8YulURdzVkvcRzJ0B%2B9dLB9i9BSTjMAcSwwue7gFZo6cSrSqZqrCMBGeArVF6592TXK7yTy9T2Xj88viK5vQhVjyZE6ZVLyykLRIZVsI64e0q%2FOBssLGu0RwesZIqErioZGn0fvqsQpSBEuw6ChMaqPu9hVQ9aZxj9joMUOACkL2xQqycqPwTrToX3VTkE6ddlA5DTQQ1XDc%2FLZdBCvGg8zvpTeQr7%2FQvHVsuiRf7SFW2WKO8SLoXig7Zj%2Fzu6cpGfdZsaVzuBmot4ZWE4fYrLw8yR13nSB890SSVgeakB6UrDSIi%2FF5CSTUY2dJJrmWmRrHc0GJdVoGt2PDDMN3ik8MGOqUBCNjuxs3vof8o1ia6nU1KBlcJIi871R2veNXQU6Cw3opCwNCcmoe63UKcFwhPfvU7qSvnCoRoqlaFFK%2BLSDkHJfT3zYqjM18KPzXPCBJtrlsKjNgr5CuFLYH%2BmPzTSXFGhuuBlQAs%2BicE6HJniOCsfENzEGIO2YBPEpBPjcHJND3ZaMINP396xx9DBLYH0uDfyNG1J4w1xfqFczMHOaAv2T5Tci3u&X-Amz-Signature=3688efd8bb4b090fec84564108595fe8e4766d9a2507d04d4e59f878120b9d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57TVHKW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJyle7Qqovw3YjMlF9MmqfDoNCL6cZ6RWhErVbz8lWpAiEAurPstieAvc1GP5ljlKPK6GcrxK%2B4UT8aZsY35keIFZgqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8AgLDDZF4csB5boSrcA7ypKZG71Ex3%2FKysHM7lZ%2B48mDGD7JIsZcdSrQD%2F6CRgiZGGQ2lsm3e2d9ANGDdUkKXrh6ZLtV%2BY509kwczuQCg6RQkx%2BCVYHsS9M0qzz2wkGaIHQjQ%2FDyG8Gh0gbxMICYFm9%2BWkOCQ1PCkqWCDltZfWwznrMjSEpVQdxqnDMwigB2G7IboSzNUkfob7BJIYm2mvI5w%2FcJDg%2F8QHaqhOVtiP5NeinE93VWy7ef0ZBjaYWXLq4fRQ6FPNrb4u%2FhdbV%2FiyxEpEvQ8KI83uxNRBYk03ZVsLYcjbcioBocc5jk6i87fFs1gvWIrgQQzreMhnDRwtvRXDB6jZsiJTlTLmHff%2FfeE6vxQtjH0hN%2FufXysmuHqUyRwbWx1kJkzk28DA3gmId76uv8%2Bsv2lqXeUUY8Mjy2w9ObumoUAL4FTr0P5xf%2Fvff7UAaeliKu2%2FVNG6DaCUDIPEVgn1uCgi43SUffbtSKu4SntjRX75%2BAL0EbUz4ToOhapDA7ZYK14uBA2yNh0I92%2FuDm2CYjnvDquGcdxVUbsMRZKUtBKulu1FI7nqT2yPLgJovWkZp%2BCTNxOEtoEoKtBU4mLu84kzksrfUXubonf4Q4yH%2B%2FLAVI0GQ2Jty7ZF7cpDdIpl%2F0%2BbMNDik8MGOqUBmMeyeQ6P8ZLhaKretpzsi9i00AcWWxjDoDUIx4MXI3KhOcSwkaKGt12QJKZwhHr53lnkllRhWiFt%2F%2FlhS0syt2dpVXKzn%2BVJa8SQNFH8NRt8oEBQs3z%2B71GWWrNzLvBJk6FQcLG1XJEvZBGk8umTB%2FA2yDopVxzY%2FxKL9ghOjLVP5PZ%2BjF6xmDpaNaldRu%2Fs41225cUFr0OmvAEeTOLrL1npO58e&X-Amz-Signature=f2e69e7fb05a9af68e23df56cbc0a28bd5818de90beef856da446ecf5402f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHV44XMO%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpm%2F5Qk4t7FswNt68%2BQlpiXZ%2B3pdf5Ul15mNIMGJd2%2FQIhAISqwFppoKe8%2Bdc%2FLrm2cypEv%2Bk253KU%2FcMll%2BIrq7d4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CZd9zVO2609fnA0q3AMoifAgY8bzpDr%2BnGPbJK1bZsrfFliCi3X1P9FXJ4IYOl%2BPuUD1z5r2nu2KlJSeqqhGo726Eyc1MAkjmclEdDuSAMBTRGnBF6Ysq2b96YuesvPBIoHNlbdWrMHiQiFpOjWPxljrYgjG29IfFrwICfVIjvU0H8ILRcpo2RVYmoJ%2Bz9XU8CccNr5525RBIuFs5HCs8sczjvDjNaQzLeAmyKOb2HvZvoz9TaStGIcjNfOalwxmm86S4Q%2FxC0fOlxa%2FxrOeWz%2FRMYGnBXm40kdpKSk5h0pHXFOvx4clTqZLMGHEm4YfYzRGWET11dGMHRtVq%2BCBmGwipELzi3cYmoWK1d3Vh7Q8XjxjxH2nPDQQxdaAF3IqYhG%2BQdgUWbtlKhTlWwlmVxSMuPuspFkDlrM9qdpfl4Y4FrsYUgyX10TRJcdw6e%2FtnHFUv4UeenLh5ynHdGa%2FtuqZlN67A3S579c8xdZVxp5X3HXOcXx8SiUmkRP1JSVfeOWE0ni4cxJcKlDLNNU09Z0CbUHNV99j0FK37rjbg3NoJK8iEBwT8C277cvL6%2BPtIkiieKOHSRU9Nkg2sHWZ4wx19O8ID%2B5T5nPGDzTmRAtcFFpn%2BPASaoGNGAjSL8XMPN0jyqU7CIT%2F8DC94pPDBjqkAQz9trui4%2F6U22ID6c%2BKTzzNDDVnF72K5N%2FElth1YyyQuP3uq9hM3MAumKHc32rfdpRfJZC5vTscZPJDkXitmx0xYeOO65mX38A%2BN%2F6wXNi7uNcd8LsYosTujUTap13Dtadq5TxJwhyIC6T8vQUxcXjzkr1RTxRPxpH%2B%2BwKqIzx88b8WnKGeHmWFINypbZ40IkRAuDHKP2wFCJrJd2ipBqE6Ozos&X-Amz-Signature=39a0e9fd3d0937fcd4ff804ec28c11da3f98c1619f4ef8296c5588dbe9902374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
