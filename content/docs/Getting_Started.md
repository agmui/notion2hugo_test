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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMYD3SC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCCvn0%2F90ldawGuCT4VkEk0lYPPUR4lcHJikVbP3YbHEgIgLwwQ3dPmHd6SpQFZQuSAD4SChGP8Mb4oCnVuoIRZrhAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAh8W0e02Rbzh6ESrcA%2BlDIa0NZKljJ%2BZljjSfavM5lOoxvUAGpnWvARZfr3GCUqjAmL8vs6C%2FQ1XzmqDCEHh5V7BEdatwtKYmV%2F02N5%2BjNTHR5XAMyNR1ZomwsagdQ%2BUHnuY83trzixHOA%2FbargGYKK1hr89sq7b5KMF3iq7VMoYrOjrB5q7Y%2F%2BCfqYqjJCV%2F4aERHgagqjjQzM7lF70E9ohu32jq330fTfQq1Rto9qzHvuPw3ZU4Vn0PITeb0XQORxLl5Lyt0XhwrO2NAUtxhYQDXBlbB48lp0RLf7aSTfyzIvEVhEv2at6ByYEs3qiPv9dOqM8bfLey2y%2BUz4S8Q5VfrbDnkBZJglSHq8gS1T%2FNXmluKpwUBVgi94Zo0WJpF%2BrtFkLURclai8khcC28SAlmYzjwCKd93aHCDCI4luDnZX8jnkBpitZfqF%2FyU966IemnM7Ty3CoWjzchQnx7WddfNCmMhNU%2FPR5Lxjtb9fQKkqWGDw3M90kvWs7X65HrA5GJw59mnVIl%2FIVKVM83AuAhUzWUsz0UjW%2Fibsd3%2BTYA%2B%2BOdpZytG1eGzjFeEkec80ngxFi6Ef9BgUBUqoa3%2FDsl3Z%2BN5awvYL6V3H4zqr1aSCE%2Fcw5cxJkEXiJGAx6lOogs44nw5wB4MNS0hL4GOqUBqS4B5ZnL1S43ONcbeyuI2c71nmX6iKQrfZ%2BdMYA7fKMOeAu24VSVU61kQRJKJHt8rZHPbLV6AtEShXtLJWptxsoQwRUu23%2FiIqZXUT89H8P37SRcvheuVVfE50gu6oANloJ5sSdseQd3Yzo8hbF2lFOtDixyPIC5ii3HbckPGweLHatwCKmsPTRFmkT90Stkce%2BFImvDSQh0HxV%2B7rVKh7yk17JG&X-Amz-Signature=6ee79dd55ed262b9cee5df31f6737e52c8d28438a0850ba7174b47c4182462fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMYD3SC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCCvn0%2F90ldawGuCT4VkEk0lYPPUR4lcHJikVbP3YbHEgIgLwwQ3dPmHd6SpQFZQuSAD4SChGP8Mb4oCnVuoIRZrhAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAh8W0e02Rbzh6ESrcA%2BlDIa0NZKljJ%2BZljjSfavM5lOoxvUAGpnWvARZfr3GCUqjAmL8vs6C%2FQ1XzmqDCEHh5V7BEdatwtKYmV%2F02N5%2BjNTHR5XAMyNR1ZomwsagdQ%2BUHnuY83trzixHOA%2FbargGYKK1hr89sq7b5KMF3iq7VMoYrOjrB5q7Y%2F%2BCfqYqjJCV%2F4aERHgagqjjQzM7lF70E9ohu32jq330fTfQq1Rto9qzHvuPw3ZU4Vn0PITeb0XQORxLl5Lyt0XhwrO2NAUtxhYQDXBlbB48lp0RLf7aSTfyzIvEVhEv2at6ByYEs3qiPv9dOqM8bfLey2y%2BUz4S8Q5VfrbDnkBZJglSHq8gS1T%2FNXmluKpwUBVgi94Zo0WJpF%2BrtFkLURclai8khcC28SAlmYzjwCKd93aHCDCI4luDnZX8jnkBpitZfqF%2FyU966IemnM7Ty3CoWjzchQnx7WddfNCmMhNU%2FPR5Lxjtb9fQKkqWGDw3M90kvWs7X65HrA5GJw59mnVIl%2FIVKVM83AuAhUzWUsz0UjW%2Fibsd3%2BTYA%2B%2BOdpZytG1eGzjFeEkec80ngxFi6Ef9BgUBUqoa3%2FDsl3Z%2BN5awvYL6V3H4zqr1aSCE%2Fcw5cxJkEXiJGAx6lOogs44nw5wB4MNS0hL4GOqUBqS4B5ZnL1S43ONcbeyuI2c71nmX6iKQrfZ%2BdMYA7fKMOeAu24VSVU61kQRJKJHt8rZHPbLV6AtEShXtLJWptxsoQwRUu23%2FiIqZXUT89H8P37SRcvheuVVfE50gu6oANloJ5sSdseQd3Yzo8hbF2lFOtDixyPIC5ii3HbckPGweLHatwCKmsPTRFmkT90Stkce%2BFImvDSQh0HxV%2B7rVKh7yk17JG&X-Amz-Signature=4542f0ba6dec246e6a9c8824f21e03c41de2c0f5ffd5e554aeb149c6040bf6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZI7BQVK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIH%2FvazTENWB6O5F67j9zYkNDS7%2FZlUjhbXXQFwOo9qrNAiEAhG6B1UUl4QxLwW%2FrtvBc1Uk9DSQq3dw1frDybUV3GXYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODD54RlQ6y%2BFfhqBCrcAzP%2BqOZzw%2BhPcyxIfnGcrhKwk99SZwgSwgueAwDfQ9GsUKveM5ZZ5UN2pS2HjkAIhhXfVwFv1EtMHf4u3sWDzKIUM%2BcNpMJ%2FgvF29zI1UWFFTdTWVAx9mE2j3rBJ6giZVTGZ87mVAMlaJ6lmRimB5lGgLgFP7hRJClOKHXsC8FKfJj5%2BqDbljqrtnCBv3sxq6rnEdiuQwn4xxw6mZ5KwnFN1kbC1Xg5pHWpjIMsolEKypbJxBuSYLXlS0GcitsPtXwx7BX5JiFlr7AVZhahb4V3VAWq4nJZsKJo0O2F3916x9Imd%2B2X3cuHPz0uVz5xIqoXHcq7bwHu11wyS6PJA2B8azxKzGMakVD7WBWkc4y5wC5a353zWUXovzYDzwULX8sOoCe0bp0YZQhAgNJlDxMHKBkblD4Cl3qPJJy5YB2f5yiVo9mnEswM9R211B0W%2F6UjXRQv6fs9WiKpI0hUJ7hr6XcwwzOvhj4qV%2FDlDeyx7BJJQf8Fo3vuXD%2BRS9f3lycb9qvM%2Bn%2BhTKO12GdICxsq2UKZkrXSsxR9XVKEHWRhy10VnK%2FzA6bVFZE%2BOvj%2BA%2B3XowGhBg7JV0Q9RtcoN2wFzA7MKSwcemnfhcJBsznfDVYcXTd41WgeBweI2MJO0hL4GOqUBwbvxyYFpP6W1mUUQhhbI7eCrT%2FWPppakkKqfKw4JEqb7VPFiIuolMNBRpn%2BQ4MX3nHp8mE8pNRW1D6Y7R%2BQ4od8slBQpdVeqtbj3SAM5bpuoUiSTwlk8Mgx%2BUwB5zwo7wgWYfzOl99ZRsD83iCOQZQA4p5hIYxwbv1ygcHm1zqHsOO51NuLSC%2FyUZIatydIcEt9whuSpiVmGDgyrzfF%2FmwSiQhKE&X-Amz-Signature=8a7402ec8a003c769af675b171d98067686deb7cefc76e10abe7ef5bef42448d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGL4Q3UT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIF5Y1GeokiRRlZhnd1H2wbTlUllshM2tcfca6eunoX7dAiEA0X52Ob7DF2fXCuGVV0EhJZ0jtV9dm4TX4NtEhRPXyeAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs2NiPIkVzZGfg%2B1CrcA6QhLzdg6PaxnDwiuASpJKVr1KcQGSm0%2BfIkbyn02CyYpOQrrG8MOsWvdXx2jNDGPK1tNHQVdegMIx10OFvkMb9FxLBCA43U5VTBzNeh%2BvRetnET0%2Bma%2Fqra4aFAmCdXI%2BDgvj0%2F2acwHzLqjosUQ8kaqHR2vEH5RIPQShzSI26bZqEvQymFzgJsHordXRjw7yXHalOQ4EDjyjCpNRbl2anzfB%2FXGk%2BUE4ERY6YfakaLY%2FGMmdg8MqfZTELnRsu32khX6i8cFBpJ%2FD26BiYxDo6jVa06J4kZyLvfn%2B93RmS%2BIUQvDQfRWfqaU0srjdyUd97mcCPDvOxdW5N%2FVfKC2Y%2B4QGPPpXZX0axETzncdZqqMb5mb7D8GjUohTynww%2Be03v34xlPapWH2U7HedahFHXbCDOdQhJy9cryMp%2BMfkJL34i6bRx1rJK1B7Smu6aw%2BaPZUUk6R%2B%2FqfNlHW2j%2F0pIor4YJx8S2JQ6rjP%2FiRD2mDBEOEQWMSxkWHj%2B4Ik%2FVlIzMSlDjhifBe2E7HDmHJheH%2Fq0z%2BmlhMPaIPQpb5k1dwK55GD6vw3j3mzgZSyry0J%2FEhV42sDxkkE%2FiNP3v2cXdq9FfsG8OZiQvv9LAAGdywkKZXESvkNG0UkNwMN60hL4GOqUBl87U5PyBrwm3L9ODUgJujMBksRfSM2UfV3gsl57ID1FXT6jW92GCYTftOrxLuS8PD9pPtll0CN%2FtGFu5MrhY2tC2oK0ShfBGzcI64eWp%2BlJTYSqMkVoPBUa6svxkX3pkNEEjD%2FUDFWsVpZ6ww1cS1b9sVY7gdiX4T9qXGSp%2FMLeDaCUjdV2CdxBDUufj%2FY2mOMlIdWfB0EPWTgwYXO3Ic0oAN9%2Fd&X-Amz-Signature=d711e7a2d23633182de66074d2ee20aca753ff1f96f4d3222972f82a4073cf1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMYD3SC%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCCvn0%2F90ldawGuCT4VkEk0lYPPUR4lcHJikVbP3YbHEgIgLwwQ3dPmHd6SpQFZQuSAD4SChGP8Mb4oCnVuoIRZrhAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITAh8W0e02Rbzh6ESrcA%2BlDIa0NZKljJ%2BZljjSfavM5lOoxvUAGpnWvARZfr3GCUqjAmL8vs6C%2FQ1XzmqDCEHh5V7BEdatwtKYmV%2F02N5%2BjNTHR5XAMyNR1ZomwsagdQ%2BUHnuY83trzixHOA%2FbargGYKK1hr89sq7b5KMF3iq7VMoYrOjrB5q7Y%2F%2BCfqYqjJCV%2F4aERHgagqjjQzM7lF70E9ohu32jq330fTfQq1Rto9qzHvuPw3ZU4Vn0PITeb0XQORxLl5Lyt0XhwrO2NAUtxhYQDXBlbB48lp0RLf7aSTfyzIvEVhEv2at6ByYEs3qiPv9dOqM8bfLey2y%2BUz4S8Q5VfrbDnkBZJglSHq8gS1T%2FNXmluKpwUBVgi94Zo0WJpF%2BrtFkLURclai8khcC28SAlmYzjwCKd93aHCDCI4luDnZX8jnkBpitZfqF%2FyU966IemnM7Ty3CoWjzchQnx7WddfNCmMhNU%2FPR5Lxjtb9fQKkqWGDw3M90kvWs7X65HrA5GJw59mnVIl%2FIVKVM83AuAhUzWUsz0UjW%2Fibsd3%2BTYA%2B%2BOdpZytG1eGzjFeEkec80ngxFi6Ef9BgUBUqoa3%2FDsl3Z%2BN5awvYL6V3H4zqr1aSCE%2Fcw5cxJkEXiJGAx6lOogs44nw5wB4MNS0hL4GOqUBqS4B5ZnL1S43ONcbeyuI2c71nmX6iKQrfZ%2BdMYA7fKMOeAu24VSVU61kQRJKJHt8rZHPbLV6AtEShXtLJWptxsoQwRUu23%2FiIqZXUT89H8P37SRcvheuVVfE50gu6oANloJ5sSdseQd3Yzo8hbF2lFOtDixyPIC5ii3HbckPGweLHatwCKmsPTRFmkT90Stkce%2BFImvDSQh0HxV%2B7rVKh7yk17JG&X-Amz-Signature=fef9ff666f2e431ef4b12335877a82260d9304680460bf5afb31f4aa3bf4e16a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
