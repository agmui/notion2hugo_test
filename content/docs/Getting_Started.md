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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUP7YRTT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v906HXOeFoc%2F4UKL486T0%2BHk3ONJxTfCuCcwWIosbgIgGba0BlLQ1hYVxKcw4KzFGm82JNAP7dt8VS5qwrQRLqcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmn1vOeZnCecCJQ%2ByrcA6FH8Zl7pICQNxiET2PcQYsi4QVm1xG8nAoBtSPXgCCjkQQ1V6%2BTRCgRtpST76Jqp2btnLtOE9mAFdjRazXTAMmSXW%2FNZ%2BcTNrAZ335CN21XW8CrSsIVglzYUKyVyDJZF3j%2FsUD87AuJKYVyLAzb9rlcXlDBKaJKKYdKGuooqpCHA4yETWkwbNVCwdxZprHuFQd6RQRNxeJNHFBjBCn5JahgwepZgadMlQ%2Fbfdwo6iyPUNTDzRUl1wosp6HLRcxMyChA1WxqOaqQlNIRpBiru05jv9YQU3gJZnjt17ySuulffKNU5%2BRZVAMAQ0X7i0graDgRtNpwMBMlxcobIlpFRkqNrziEW6%2F9TP2w%2FIL2RfcOHAlqFBUrCwstVUclyqtF2jir7QQrZ8WmQamhiTGDrEq5zirOGemk4i3GfvUJKMTo%2FqpQXsRssZEsSmHc6J5hziJzaJnm0Reuo9MyjEMlsT2XrvKZ%2F6FSoGWi6lfoKq0cVTZwSkeerw8PxI3Z%2B2w5NxLwziiFqsTtSoKHzLRbVVYVg16BNAuSIvv4B0hTqg5U%2ByEDvQeXZ5KhfIwKWX71DrRayuIPY%2FgxzqVr8pZ100rJyDkTAzYp%2FhkiifvvLjkeKDF0ofTMpSzOYmrhMKmL58AGOqUBK4NVISaflL00Dq6%2BS11D6JNAoS%2FGuDil9yV6b7M8E89XP0h9gQQZIA8WcU7q6LsgbAXP4OcoAFY1h6eRV9XQQq0SuDRHf7TjLX30jPQO3TF%2F6BhjhJ3%2F9O1gIwC5pmYvMG1Qp0FeNZSH09dhkZ09HrZqbpJjCbAqtOgr%2BtUJu7Hj4kZeMeIOCh0IK9oayqgWem6mKmSp7qjC4Xfu8XPUxpb6QXw0&X-Amz-Signature=96a39a059be393c4767f1eadb1ebe2f1babd9b24cc54015cb1db62ed2e15a318&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUP7YRTT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v906HXOeFoc%2F4UKL486T0%2BHk3ONJxTfCuCcwWIosbgIgGba0BlLQ1hYVxKcw4KzFGm82JNAP7dt8VS5qwrQRLqcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmn1vOeZnCecCJQ%2ByrcA6FH8Zl7pICQNxiET2PcQYsi4QVm1xG8nAoBtSPXgCCjkQQ1V6%2BTRCgRtpST76Jqp2btnLtOE9mAFdjRazXTAMmSXW%2FNZ%2BcTNrAZ335CN21XW8CrSsIVglzYUKyVyDJZF3j%2FsUD87AuJKYVyLAzb9rlcXlDBKaJKKYdKGuooqpCHA4yETWkwbNVCwdxZprHuFQd6RQRNxeJNHFBjBCn5JahgwepZgadMlQ%2Fbfdwo6iyPUNTDzRUl1wosp6HLRcxMyChA1WxqOaqQlNIRpBiru05jv9YQU3gJZnjt17ySuulffKNU5%2BRZVAMAQ0X7i0graDgRtNpwMBMlxcobIlpFRkqNrziEW6%2F9TP2w%2FIL2RfcOHAlqFBUrCwstVUclyqtF2jir7QQrZ8WmQamhiTGDrEq5zirOGemk4i3GfvUJKMTo%2FqpQXsRssZEsSmHc6J5hziJzaJnm0Reuo9MyjEMlsT2XrvKZ%2F6FSoGWi6lfoKq0cVTZwSkeerw8PxI3Z%2B2w5NxLwziiFqsTtSoKHzLRbVVYVg16BNAuSIvv4B0hTqg5U%2ByEDvQeXZ5KhfIwKWX71DrRayuIPY%2FgxzqVr8pZ100rJyDkTAzYp%2FhkiifvvLjkeKDF0ofTMpSzOYmrhMKmL58AGOqUBK4NVISaflL00Dq6%2BS11D6JNAoS%2FGuDil9yV6b7M8E89XP0h9gQQZIA8WcU7q6LsgbAXP4OcoAFY1h6eRV9XQQq0SuDRHf7TjLX30jPQO3TF%2F6BhjhJ3%2F9O1gIwC5pmYvMG1Qp0FeNZSH09dhkZ09HrZqbpJjCbAqtOgr%2BtUJu7Hj4kZeMeIOCh0IK9oayqgWem6mKmSp7qjC4Xfu8XPUxpb6QXw0&X-Amz-Signature=472d0dad612f919f88684e18dcaf4250a449203a3fc55ebedeb7fd8d39de6d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUP7YRTT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v906HXOeFoc%2F4UKL486T0%2BHk3ONJxTfCuCcwWIosbgIgGba0BlLQ1hYVxKcw4KzFGm82JNAP7dt8VS5qwrQRLqcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmn1vOeZnCecCJQ%2ByrcA6FH8Zl7pICQNxiET2PcQYsi4QVm1xG8nAoBtSPXgCCjkQQ1V6%2BTRCgRtpST76Jqp2btnLtOE9mAFdjRazXTAMmSXW%2FNZ%2BcTNrAZ335CN21XW8CrSsIVglzYUKyVyDJZF3j%2FsUD87AuJKYVyLAzb9rlcXlDBKaJKKYdKGuooqpCHA4yETWkwbNVCwdxZprHuFQd6RQRNxeJNHFBjBCn5JahgwepZgadMlQ%2Fbfdwo6iyPUNTDzRUl1wosp6HLRcxMyChA1WxqOaqQlNIRpBiru05jv9YQU3gJZnjt17ySuulffKNU5%2BRZVAMAQ0X7i0graDgRtNpwMBMlxcobIlpFRkqNrziEW6%2F9TP2w%2FIL2RfcOHAlqFBUrCwstVUclyqtF2jir7QQrZ8WmQamhiTGDrEq5zirOGemk4i3GfvUJKMTo%2FqpQXsRssZEsSmHc6J5hziJzaJnm0Reuo9MyjEMlsT2XrvKZ%2F6FSoGWi6lfoKq0cVTZwSkeerw8PxI3Z%2B2w5NxLwziiFqsTtSoKHzLRbVVYVg16BNAuSIvv4B0hTqg5U%2ByEDvQeXZ5KhfIwKWX71DrRayuIPY%2FgxzqVr8pZ100rJyDkTAzYp%2FhkiifvvLjkeKDF0ofTMpSzOYmrhMKmL58AGOqUBK4NVISaflL00Dq6%2BS11D6JNAoS%2FGuDil9yV6b7M8E89XP0h9gQQZIA8WcU7q6LsgbAXP4OcoAFY1h6eRV9XQQq0SuDRHf7TjLX30jPQO3TF%2F6BhjhJ3%2F9O1gIwC5pmYvMG1Qp0FeNZSH09dhkZ09HrZqbpJjCbAqtOgr%2BtUJu7Hj4kZeMeIOCh0IK9oayqgWem6mKmSp7qjC4Xfu8XPUxpb6QXw0&X-Amz-Signature=3417337c696faa9068f47e095e79e7afd1db5408ab05f457266d41fc3ffcfd16&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y72X3YI%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeEnW2VbDRkglb4ZJTHB%2BO1jdZ3puWDfBgplRWZLXEXAiEAycdMSpUdT91X64OXS%2BaM88Oa89XttfoEERE1uMmyXuoq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDNOyLA%2FeDGB1aKQ3hSrcA2Q3rCNja%2F34raI4DBrL%2FunxxEF%2FWDiNCmsiZOKsKuxeUvSNpiN%2BmGljB8kPm9SzE5%2BIcx9TuYWIvBAOqzDU7uHJ3zkipUQi4Zrdn3LGEZUP6v4sgnvF9ProL7A36mXF%2F4lHWTXJYU9vmEpd1A4skXF%2FFVthuPK12YuY%2B%2F7%2FBPW8CDx%2Bik5Lc0%2FkePM77qNQhQOI8Nk%2BSg%2FhPHAZZCae14cGPpRP%2BQSlxxC5oPvISIO05fVaQNpudBqMLCfhx5KmPvyyLL0uVXYBl47UKHcXJv8aNx0nd8c%2BITVc8DYGeKsR4Up2eRlYW%2BbIqkBf7zdujZ4jjw3j5kQzx995CZurcEXHlkJIMtvZzLxfGkw6lDpJbHKBenmlGOnFInvj%2BbrlJQK7zrwvaBr8kwKSW3tOevjIuiuAtzF2xfCM0WrcGHZbhjYdt%2Fs86xTJYHE3fqz03QJ%2B%2FcduqckNZ9CDImLTwNQ%2FsVNRxXreDWwOW1O75jaHmYu%2FEuLl1DAM81%2FbFEDmqfYq62NtbHgU%2Bx%2FsEzN%2F9%2B%2Ft8vEZpEzgbSGbauh%2FKSuVXNaFUR1RUJWe3JG1sz010z%2B2B3DxdyEcW%2B%2FwspmfBkWDSB%2FGTL9OdGH9FSmyti1cFHIATS8LZf3f5ExnMNGs58AGOqUBkiD2g0hollXqLN0LCdc%2BLHcHvB8TMWhwV9%2FI62MUQhifPZ%2BRc3tdqAzbRUJXQtHTGDt3Wjgxg%2FsxGjOxjzafpeYN0eW%2BvaxHdHQV9pKuFCVAR%2FBsxvZKaP6m%2B4WEK0rossWe8KNwtd2orBy1YwtW9Oe4cQo9m915BJ2UQbqlPnLKCb2SOev5kir6XdXZ4zubYx2QFtfaIPEjH5EqD00YDcyGxpDk&X-Amz-Signature=cfea3e9022a09260db69c3d5e5517697f16a17244be824daa4faee238541d2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQSI76R%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM6CyEUxHFOOHy5Af7Tr0qZuKQBhIuwnZC0sbp1Y8yzAiAoLlU6ZPdEbIeX82EgILAYBso4TZlCO14mbH3BGLegfSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMOuwv3Qj8KYKGfAEoKtwDvJ9D4C2CRl2Hsfa%2FEJSD3Yg%2BJXBTNYM54zyUS2AnjhkBMDVnZECJEGQnWSlekIAq7F%2Ffh7Om1NwCsDbrhhbiddiNkw1yvfKjf4zMPYVYlh9HJ7pVjdLLbu9yGUaVI0Z%2FAzjFNAOHwb2X9FSAPTl2KvMTHn9g7JM%2FX6Eta2HtcyfF%2BC5Yl50MGXlJU%2FUcD9gtKlnmjPzW8bIHP1LaOFXp07KCn4ZCM8H6fTsaJ339FaIKhpj4lQGwtCFAAO%2BFn9bHHNkK8JXv5FOJQiWhgSxCdCWnXeui1Fhr8gfHX6F9PZLclU5JZ8oYDwxOiBqAg%2Bo2AaIvtw6PmqGIBq2RE78Gwb%2FNM8MW%2BNOAGClNlCa6137ly10JOaY27NC6I8BeJDm%2FSjpa4tXRR1UttgyvSwKxUCH3ZNibkXToOmBABJ0xD%2B3JdApgiV%2Fa4%2BS0NubEx8YZ%2F2BuIGmhb2Edq%2BMJf0TBW9GQpYaOLCoriVLzrabzMCVADbJp7tpx3P5hSF4K4h5Siu6l7pK6vcQGm0Q9sCe0wAoxp%2FBJp79zB9X9C9orNOWNpbdyI%2BZyyCPqegAeDJGTzoIFicVe9KMBKnY1gW2zTsrYnKu70dYfkTYELPbotXOicqR1qZB6r966FHYwyrjnwAY6pgErGnVVEjQFvinthJDembrffgo%2B4gyjfh95TDQ3WylIJ3VeaIgFMCKj7ivU8AgyL1thOY1ZYSI6POwgfdTqxnkVcUnPW0R054Y0tZdnB%2FPYfhI4in%2B4ie6XD6GVXAglq8D8PAEAg%2F69z1PH6bau9JFbilqCQBqvDqyTJ31XwYgqKFHzITifCg3saw4R8seL01tT8Ftfnmcfgx0HFOF9Bs3gK85Rr8qU&X-Amz-Signature=1b54ae18149c45d60bde7c63ff1017e39e870e276c29dd36dbf3db38daa0eb08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUP7YRTT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2v906HXOeFoc%2F4UKL486T0%2BHk3ONJxTfCuCcwWIosbgIgGba0BlLQ1hYVxKcw4KzFGm82JNAP7dt8VS5qwrQRLqcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBmn1vOeZnCecCJQ%2ByrcA6FH8Zl7pICQNxiET2PcQYsi4QVm1xG8nAoBtSPXgCCjkQQ1V6%2BTRCgRtpST76Jqp2btnLtOE9mAFdjRazXTAMmSXW%2FNZ%2BcTNrAZ335CN21XW8CrSsIVglzYUKyVyDJZF3j%2FsUD87AuJKYVyLAzb9rlcXlDBKaJKKYdKGuooqpCHA4yETWkwbNVCwdxZprHuFQd6RQRNxeJNHFBjBCn5JahgwepZgadMlQ%2Fbfdwo6iyPUNTDzRUl1wosp6HLRcxMyChA1WxqOaqQlNIRpBiru05jv9YQU3gJZnjt17ySuulffKNU5%2BRZVAMAQ0X7i0graDgRtNpwMBMlxcobIlpFRkqNrziEW6%2F9TP2w%2FIL2RfcOHAlqFBUrCwstVUclyqtF2jir7QQrZ8WmQamhiTGDrEq5zirOGemk4i3GfvUJKMTo%2FqpQXsRssZEsSmHc6J5hziJzaJnm0Reuo9MyjEMlsT2XrvKZ%2F6FSoGWi6lfoKq0cVTZwSkeerw8PxI3Z%2B2w5NxLwziiFqsTtSoKHzLRbVVYVg16BNAuSIvv4B0hTqg5U%2ByEDvQeXZ5KhfIwKWX71DrRayuIPY%2FgxzqVr8pZ100rJyDkTAzYp%2FhkiifvvLjkeKDF0ofTMpSzOYmrhMKmL58AGOqUBK4NVISaflL00Dq6%2BS11D6JNAoS%2FGuDil9yV6b7M8E89XP0h9gQQZIA8WcU7q6LsgbAXP4OcoAFY1h6eRV9XQQq0SuDRHf7TjLX30jPQO3TF%2F6BhjhJ3%2F9O1gIwC5pmYvMG1Qp0FeNZSH09dhkZ09HrZqbpJjCbAqtOgr%2BtUJu7Hj4kZeMeIOCh0IK9oayqgWem6mKmSp7qjC4Xfu8XPUxpb6QXw0&X-Amz-Signature=6090ebf0ad87b28c7564cb9ce94fa0d809f69e1cbb1963095cf7b4c25cf58f71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
