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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP4DRFZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDC7zV8VZ8I8TQyLH7TVVNlhmoltTqNXu%2FLnuFDkUAUZQIgAIaIJYBeEu30h6cecvldfAgtHcjIoLD8%2B9Y7XLgC4e8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK0%2FM9rVTk4Bl8%2FibyrcA56N5Mt9dcbl97EFzCchlabSiC42A7bqtkD84rXGwGDcGWpgsQmsVjb70QxQKBQn%2BP3NVvDNPj7%2FIfWKZDFUoTjqIQK5kOp6fsmCzEkx8fhLGsvt%2F5VE3j%2BMFHl92hjbCERWnJReidwNZMJfc7sGa4PZNEp%2BBso9bCPPCi4Wt6IQGLgM%2B89ctCwX5bONExNVfR3tcsvjUHP6FOpYDMr5u2DhCR1vafxOso1Zhloz65dDJNNRwn0u4lQM48zKAk64Ui4nQwzfBNXTHksvMt9Z7OFb3MFPAe3A2PM09gZh%2FqQOpvpu%2BweIXhd972wfjvZZfsKDGrTOvX%2FganXHxgN%2BAki5cdK4%2F23sFMqpXVo20mIa02voBmkMQ1rWpIWIA5ggCiyy10Vv2SQ66UsK68%2B4gcG9ZlP2wImLTSEcPhGJ0GL65Nsenwskzcq96opJe96J2mJXgCVQflm%2F4GJX%2Bp%2F52%2BXZE1x1LKTihtKoLl98SG1ZzRSuC7Eu%2F52n6eEkc1l%2FZLz4O%2Fn0AGqRRuAw3oJ5qogah3YoagoOvJDpACNWgFPQd5ehHHsDD3%2F0wR7%2B9ZpBdBl%2FBmSWYiatPGrn34NT6257o7vzD0ajFUNYfF5SQOZK%2BFiwYrms80eWlok5MIOfoL8GOqUBAsa5eJ6aXpNgHbQbfPSZDRhWDIRalBmZjum%2Bi7gXSUrr27rojQVOrGWdwNE8N50ReAXwjb4SCKID9xK7r1q6dhX66KqOVMcGilWax%2Bme4y95ks45dOpPkkgqRAC3qEQa8EdjhifzNQm1V0TVW57h%2Ft%2BtlXHK9d3oJHRk%2BqUV3MBzaJQxBYb8qHa6CQrGF%2B2vL3fQLoa6QLNMt%2BfLAl7N6WXjPg%2BD&X-Amz-Signature=b38c5b26caa08b4d9520a6255e6dbb26e2ccdd3f9497a8de83bbd786e1ee3cda&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP4DRFZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDC7zV8VZ8I8TQyLH7TVVNlhmoltTqNXu%2FLnuFDkUAUZQIgAIaIJYBeEu30h6cecvldfAgtHcjIoLD8%2B9Y7XLgC4e8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK0%2FM9rVTk4Bl8%2FibyrcA56N5Mt9dcbl97EFzCchlabSiC42A7bqtkD84rXGwGDcGWpgsQmsVjb70QxQKBQn%2BP3NVvDNPj7%2FIfWKZDFUoTjqIQK5kOp6fsmCzEkx8fhLGsvt%2F5VE3j%2BMFHl92hjbCERWnJReidwNZMJfc7sGa4PZNEp%2BBso9bCPPCi4Wt6IQGLgM%2B89ctCwX5bONExNVfR3tcsvjUHP6FOpYDMr5u2DhCR1vafxOso1Zhloz65dDJNNRwn0u4lQM48zKAk64Ui4nQwzfBNXTHksvMt9Z7OFb3MFPAe3A2PM09gZh%2FqQOpvpu%2BweIXhd972wfjvZZfsKDGrTOvX%2FganXHxgN%2BAki5cdK4%2F23sFMqpXVo20mIa02voBmkMQ1rWpIWIA5ggCiyy10Vv2SQ66UsK68%2B4gcG9ZlP2wImLTSEcPhGJ0GL65Nsenwskzcq96opJe96J2mJXgCVQflm%2F4GJX%2Bp%2F52%2BXZE1x1LKTihtKoLl98SG1ZzRSuC7Eu%2F52n6eEkc1l%2FZLz4O%2Fn0AGqRRuAw3oJ5qogah3YoagoOvJDpACNWgFPQd5ehHHsDD3%2F0wR7%2B9ZpBdBl%2FBmSWYiatPGrn34NT6257o7vzD0ajFUNYfF5SQOZK%2BFiwYrms80eWlok5MIOfoL8GOqUBAsa5eJ6aXpNgHbQbfPSZDRhWDIRalBmZjum%2Bi7gXSUrr27rojQVOrGWdwNE8N50ReAXwjb4SCKID9xK7r1q6dhX66KqOVMcGilWax%2Bme4y95ks45dOpPkkgqRAC3qEQa8EdjhifzNQm1V0TVW57h%2Ft%2BtlXHK9d3oJHRk%2BqUV3MBzaJQxBYb8qHa6CQrGF%2B2vL3fQLoa6QLNMt%2BfLAl7N6WXjPg%2BD&X-Amz-Signature=2575eb6a2315c1cbbf645a3214fdf2173eb86ffc694dd2ed02a16051f788221a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPXYG63Q%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGSp0e3ekK2D29xg3ia%2Fk05qcPfT9ySMoxo3AZ0%2BG4xvAiEAvRvt%2FazhSMSEuIGEKZsnQDf03kjysbJtdh9oRvl1a8kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFmEUK7bmoP1rgscXircAwm47gO%2FTZ%2BewfJH%2FemYrAYl1tXmFLeUdq8d%2BVvTvwIpyZX53wUBRvg5sg8WMREU2IVXbPRyenIqwBxemPD%2FEA%2B3eISGTAz8NNUerqPNs74kb5CNWLgnA5VuvGcuYXEtJtGQxn7vBWmGF7u%2FGcbthvoplgCBObuL2EDne8dccB%2BX2vLUa3WwnNBKzllOj3Ng3H7ZgFXS8JkKFaG6VfUblt8jMhZmKTbQGaWtFSukEwEVVt86mXloq%2FyF2F6LTdBvPJhtQO63Alet%2FiBU84m2RD%2BRatk3hKbQn7AFW3yYAjPudogYbTYxZN7LJhQicN7IEmckL%2BCV42PTfhKfm02IrJ%2F0pdYvuF2j5ZKuaqIrC1s83RQVAyse4gGCXsSpUjHwEQpFcwrOWX3EMQhrIKMcoDA7pwhnDgRGdY%2F4SFSMVlq5I%2BOCbc7Bdzxr%2BYVygNBv1qKE8oHc8mGCzO1i7bEBnV1j1qNERPILnm82xYcifi5q7PLG%2Fo75%2FES95oGH6iq9F6L6xkOuuSsFF75GVSwVVgToGEk8CwrpwPPwXZRGDZ0utye6HtzQt1kqQe3R0UGgEwqYdMrex%2FOFbIgD%2BydnzHwpdrO%2B90RPuWdtFVhPn9oltQK%2B9ge6MRR5afpVMPafoL8GOqUB7BQ2zu2hpNja08%2F0dMKF1ScE0joYvTth11i1VuWTVTuINZ37whmC4sDb%2F9Uee12RCmNtnORv0IfWgTUB4dw6UwOhg4s978VRweqjKLj30zhU91QypPxXG87AbFlS7AKw7biyAIOZ7p4%2FdnmT0nR%2BkxssZOKU7%2Bp6KHUg84VYS2droCD41eodZIWS5e8fGu8c1t3PWFGuNFKzlFaRyqRtEIsge1OP&X-Amz-Signature=be4f9da9c7383353631bb1a46f9c2c60ffa78da962283ba0da52047e2ce27d53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZOZLXYW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDP8A%2B80TMOBCkzQmivg9c3urYun835YGm1xsO91kZUYwIhAJY5ORkbHy%2Fqar7qVDdby2J%2FNMjeQ67qiQD%2FA39aoZWGKv8DCHgQABoMNjM3NDIzMTgzODA1IgwmBSYJ6mRxxRIucUAq3APIXbuSE2KlOkw8Vhhv0RxfEg8%2Fc24XfZSl3BJlKFUDcuCo9bP11UQkg35DsMiYIUWKErWHz2FcVyD97Ff14pM83mGzfyCUCqUxMES0zVHBxwNZpm7XBtt4oak1kFoekMlTdFcD0gKc4wbWUJH7Nwug0KUm2kWYwQ1tnoHk3ReKxUuS%2Bln2njSd3TkeBtYR3H2%2F%2FSaI7yfUN%2F0EQ3Uaot0iqqir%2BWJbrdUCoPtxaBpQUhDKSTiVTkVnDLQcnY3%2FCgK%2BoiNg2%2FqcHMAbXKIfNvmiILqawnrsJOwpcEYB%2BDnLV5fcMjJTnvAG90ch776wy0Wl8q9Kn9uF20DPxRhJmm%2BN0RlB4IWse1APk9wpgjzjltN1Lvu6lXHo6XGTSVL6vfK%2F%2BmB7pE5VhjWyprwGe0e4C1JnCDMIcfoEmqb5kK1pxUHAjrWte%2BkOK2AXSa2UX%2BkQfyvxJRNPBqWfNQEN8Kazc39HTDphsmwxs2FVGZOaMIkOCzhcsGlOotmTGgWeDGdtNsmVt%2FmpN0LX%2BfDNknxoAUdQ%2BPyF5pHm2HsKe%2BR1T2P%2BQy1t4t4dVNjEro5uDYhoODaNO%2F76wI3qipY0bKZKWIKxfG4NRutIdk%2BIzL44%2BcGyLm279vzBGuoVCjCBoKC%2FBjqkAeFVpvMLrWpp3UNQGyr1Rh1NlpfeIxb%2Bl10tCiZwpdDtPtgpoTHRbsl7XYFmv14lknJSYHtoM12WEyzwBLhLHL1b46s64vBiABf9kkeBpiUVB6c0PR0lNrv5h4rU263iBeRxs%2BudLt%2FQdm3t3ECdyby5RVCyvLxwk4AgsfxrJ1RRtE8SuvPfJFoNU6LqZEyGD1BvCa59OZ6U9AaDxlkutX5E9fVv&X-Amz-Signature=e14e216ce2b978398d3c1885080f6bd1e474cff47e973123d744f7199a6b14dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHP4DRFZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDC7zV8VZ8I8TQyLH7TVVNlhmoltTqNXu%2FLnuFDkUAUZQIgAIaIJYBeEu30h6cecvldfAgtHcjIoLD8%2B9Y7XLgC4e8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDK0%2FM9rVTk4Bl8%2FibyrcA56N5Mt9dcbl97EFzCchlabSiC42A7bqtkD84rXGwGDcGWpgsQmsVjb70QxQKBQn%2BP3NVvDNPj7%2FIfWKZDFUoTjqIQK5kOp6fsmCzEkx8fhLGsvt%2F5VE3j%2BMFHl92hjbCERWnJReidwNZMJfc7sGa4PZNEp%2BBso9bCPPCi4Wt6IQGLgM%2B89ctCwX5bONExNVfR3tcsvjUHP6FOpYDMr5u2DhCR1vafxOso1Zhloz65dDJNNRwn0u4lQM48zKAk64Ui4nQwzfBNXTHksvMt9Z7OFb3MFPAe3A2PM09gZh%2FqQOpvpu%2BweIXhd972wfjvZZfsKDGrTOvX%2FganXHxgN%2BAki5cdK4%2F23sFMqpXVo20mIa02voBmkMQ1rWpIWIA5ggCiyy10Vv2SQ66UsK68%2B4gcG9ZlP2wImLTSEcPhGJ0GL65Nsenwskzcq96opJe96J2mJXgCVQflm%2F4GJX%2Bp%2F52%2BXZE1x1LKTihtKoLl98SG1ZzRSuC7Eu%2F52n6eEkc1l%2FZLz4O%2Fn0AGqRRuAw3oJ5qogah3YoagoOvJDpACNWgFPQd5ehHHsDD3%2F0wR7%2B9ZpBdBl%2FBmSWYiatPGrn34NT6257o7vzD0ajFUNYfF5SQOZK%2BFiwYrms80eWlok5MIOfoL8GOqUBAsa5eJ6aXpNgHbQbfPSZDRhWDIRalBmZjum%2Bi7gXSUrr27rojQVOrGWdwNE8N50ReAXwjb4SCKID9xK7r1q6dhX66KqOVMcGilWax%2Bme4y95ks45dOpPkkgqRAC3qEQa8EdjhifzNQm1V0TVW57h%2Ft%2BtlXHK9d3oJHRk%2BqUV3MBzaJQxBYb8qHa6CQrGF%2B2vL3fQLoa6QLNMt%2BfLAl7N6WXjPg%2BD&X-Amz-Signature=c60836c8a50a4239343611bf542f6bb39806a26ae7e25ff5137a49d96b8b20bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
