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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OPJVDI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDnEBn8iiATsPm2K0rf5NCCCk5S8iISezWjfn45VEvC8QIgVoyYP4NuSMn3AvQHpSHbkMoIvIic6ZN%2FiKv7%2FQ6jRD4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDbKaqKv7v92MgUxircAyx22j9rzNdMJenAwwweozkbjoqsO%2FswRC4aVZ2RcZTP4qzV9ZuvaU0EacIoxJAL5bd7UEw3ILHYPyIut7bBCZvc1HkZVQxBq%2Blh%2FbCW7hC2VcztAYMy0SmQhbK5tBDY2kVW0tAhbuqX2jPV3yOoPbe%2Fh3FrP4MUVDQ8BG0l%2FJXJLdLizN8m4in66yAq%2BRXdX4ZAFB3sSPUAvKl1tqppvM8G%2FqHL%2B%2FJZNMGPKbE7q%2FAEs%2FHxMy0gS2AOY6NSvLBPH2eEmYrQvI%2BW4%2FqCy4hIuLypyl42FIiLfRDRLAY5c0AWYSdYVWZ3KYJA7LJBRrpu0SItwBhSytw%2F15UdIFy1neEf%2BnEgkuDu0NRtW9d8YpLRG1r8LqllApav8%2BwGF0%2B8mN30DlXwM8jV7X81R37Oq2PgLiyFBf97l4kIHKSJpUsXsZd9goRrfVNQJLe%2FZTA7QwY9InJq84hOhMx0yFokRPonWF9gH9f0%2BTW5TN1Svu9vj0LdKQlEAQVDvKcK5yBrFTGPIXrvksyXYIuFOzCxuw%2BM2s9rnXZEk2qb53C4izi4i1NSiPc4KEzQrD%2Bq730KGITPRZE%2FQTHtiebVH2Mi3RAl1PXmWU8P5DEBUaweEboJdxikO5qvnfUH4KfZMLmT4cIGOqUBP6y3s9dXUFmzpOwqKg5VNzdMQY0RCr7zt9PWuqCGU8hgpJkJq0hYrgHBHeOJb1MbBqfgJwj%2FhzRerPOZ68O4JMoP2Ac1wru5nrYmdoIwykwCS0Sa1YRrAf8SdvgeBdi%2FPRmauHDFYqc%2F7W3Rmj4YE5I9lPtNPznbQrxr16JI%2B0J6pJrgj40Bvlr8kISWQRdHZ872%2FGUoX1XEmwoM3QqRyYbrOSMM&X-Amz-Signature=2ee70f5b6c36125108ed2408d10396dadd93c2cd2168df4c891ccaba4987bcb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OPJVDI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDnEBn8iiATsPm2K0rf5NCCCk5S8iISezWjfn45VEvC8QIgVoyYP4NuSMn3AvQHpSHbkMoIvIic6ZN%2FiKv7%2FQ6jRD4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDbKaqKv7v92MgUxircAyx22j9rzNdMJenAwwweozkbjoqsO%2FswRC4aVZ2RcZTP4qzV9ZuvaU0EacIoxJAL5bd7UEw3ILHYPyIut7bBCZvc1HkZVQxBq%2Blh%2FbCW7hC2VcztAYMy0SmQhbK5tBDY2kVW0tAhbuqX2jPV3yOoPbe%2Fh3FrP4MUVDQ8BG0l%2FJXJLdLizN8m4in66yAq%2BRXdX4ZAFB3sSPUAvKl1tqppvM8G%2FqHL%2B%2FJZNMGPKbE7q%2FAEs%2FHxMy0gS2AOY6NSvLBPH2eEmYrQvI%2BW4%2FqCy4hIuLypyl42FIiLfRDRLAY5c0AWYSdYVWZ3KYJA7LJBRrpu0SItwBhSytw%2F15UdIFy1neEf%2BnEgkuDu0NRtW9d8YpLRG1r8LqllApav8%2BwGF0%2B8mN30DlXwM8jV7X81R37Oq2PgLiyFBf97l4kIHKSJpUsXsZd9goRrfVNQJLe%2FZTA7QwY9InJq84hOhMx0yFokRPonWF9gH9f0%2BTW5TN1Svu9vj0LdKQlEAQVDvKcK5yBrFTGPIXrvksyXYIuFOzCxuw%2BM2s9rnXZEk2qb53C4izi4i1NSiPc4KEzQrD%2Bq730KGITPRZE%2FQTHtiebVH2Mi3RAl1PXmWU8P5DEBUaweEboJdxikO5qvnfUH4KfZMLmT4cIGOqUBP6y3s9dXUFmzpOwqKg5VNzdMQY0RCr7zt9PWuqCGU8hgpJkJq0hYrgHBHeOJb1MbBqfgJwj%2FhzRerPOZ68O4JMoP2Ac1wru5nrYmdoIwykwCS0Sa1YRrAf8SdvgeBdi%2FPRmauHDFYqc%2F7W3Rmj4YE5I9lPtNPznbQrxr16JI%2B0J6pJrgj40Bvlr8kISWQRdHZ872%2FGUoX1XEmwoM3QqRyYbrOSMM&X-Amz-Signature=32fa9f8825113789e20aff44844b5ffed54f312c6eafdf822919bfb34c8341e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OPJVDI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDnEBn8iiATsPm2K0rf5NCCCk5S8iISezWjfn45VEvC8QIgVoyYP4NuSMn3AvQHpSHbkMoIvIic6ZN%2FiKv7%2FQ6jRD4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDbKaqKv7v92MgUxircAyx22j9rzNdMJenAwwweozkbjoqsO%2FswRC4aVZ2RcZTP4qzV9ZuvaU0EacIoxJAL5bd7UEw3ILHYPyIut7bBCZvc1HkZVQxBq%2Blh%2FbCW7hC2VcztAYMy0SmQhbK5tBDY2kVW0tAhbuqX2jPV3yOoPbe%2Fh3FrP4MUVDQ8BG0l%2FJXJLdLizN8m4in66yAq%2BRXdX4ZAFB3sSPUAvKl1tqppvM8G%2FqHL%2B%2FJZNMGPKbE7q%2FAEs%2FHxMy0gS2AOY6NSvLBPH2eEmYrQvI%2BW4%2FqCy4hIuLypyl42FIiLfRDRLAY5c0AWYSdYVWZ3KYJA7LJBRrpu0SItwBhSytw%2F15UdIFy1neEf%2BnEgkuDu0NRtW9d8YpLRG1r8LqllApav8%2BwGF0%2B8mN30DlXwM8jV7X81R37Oq2PgLiyFBf97l4kIHKSJpUsXsZd9goRrfVNQJLe%2FZTA7QwY9InJq84hOhMx0yFokRPonWF9gH9f0%2BTW5TN1Svu9vj0LdKQlEAQVDvKcK5yBrFTGPIXrvksyXYIuFOzCxuw%2BM2s9rnXZEk2qb53C4izi4i1NSiPc4KEzQrD%2Bq730KGITPRZE%2FQTHtiebVH2Mi3RAl1PXmWU8P5DEBUaweEboJdxikO5qvnfUH4KfZMLmT4cIGOqUBP6y3s9dXUFmzpOwqKg5VNzdMQY0RCr7zt9PWuqCGU8hgpJkJq0hYrgHBHeOJb1MbBqfgJwj%2FhzRerPOZ68O4JMoP2Ac1wru5nrYmdoIwykwCS0Sa1YRrAf8SdvgeBdi%2FPRmauHDFYqc%2F7W3Rmj4YE5I9lPtNPznbQrxr16JI%2B0J6pJrgj40Bvlr8kISWQRdHZ872%2FGUoX1XEmwoM3QqRyYbrOSMM&X-Amz-Signature=3f600b624af7b2177be066e4a9504aed4e684b0438042e427af087eb4049bcd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ3CYYTF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDpGc6v2kPhLedvcKaXsFW%2BMhD04akUNbm61bFJiKAmKwIhAJKF0KD0zlxEJ%2B3w5RyQcV5c6ObsGLYXHoGf3b8S%2B2lXKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr4QKwjzI7WFUVbugq3ANgMF3XkCesojHT%2BjwXD4tvyoJVrwtHu9DAyxUFVXFHKiCqdI5LvWMtc98Mz1zKs58Q8ZK8AboWyVMFCoCUALyGlhyY8SkA%2Fh2BiKqPGHjVez3s5kNEL5o%2FI10xqDKHITKpY49Zi7peLkyZlkJGR3Ib7%2FG2j6WPgMkqUdEQdn4NiZ5S7kOylEmaZ7Ke%2BrK%2FgqzfeuKFhfGBZqJnMmkxfDS4EEzlhcEGdKIrE3VNWLZqJsCJSsqekc00Daoy%2F9n1li3HpJ65foTikeiK1jJb36R8Tk75yzTkrY%2BYoaREmbKWpWQTJySClsHd7%2FXI7syU8rRBDZs7dyzANTGhsfz2coskpC9Z99CjM0QMJXBRXb7Xpz2Q7si47pFVa6KshP1kRiuScqoK2TrNms6AGxdRL4GvMOFppfrXjnhPxRy4eSrJICfG84Qrzlkm3bQAuCyWqHk5RTOoUrid8SuTc4HqYF525aki%2F74fFkXsOsF6ti8D9Spqp6RQuJUei0%2FTDQ8vLOAu9dvZ3KTaZPShf2mrzJOs7o3v7ZndTY%2B5x7bZNOLHLGMdnarj7QORsF2k8Hq0osxFpLtZFFdPVonlvil%2FGBxpZynyd2c7diiISYdKuiNtODve3bgWKR4VIGbgqjDMrOHCBjqkAdeeSnESQq8asFOy17gnNO1zZicQcUuoGwccBP4YUtnYbrCod0rMt4vs%2B3RROFbfFv5Fyc50Cjp7ngJByO%2FrhXSmWpob8hr%2FeSJtYV8tUjpspMXUgIlAXdDp0pEcQxdWa8hKh%2BDMqGB1tI%2BVpdwlZ6Rj0ddH7YTaGeiSH8pTp5YQU7pQ98p26kG%2BzbtNGnNA1zZg7dP0b94OUu1vf6U9zIk1Av70&X-Amz-Signature=487188d508e423fd15d4194593b39b4242f7003af4a0ff831e120db6529e32cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPTTOI4%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCYJiuivNPFclACkxH8%2FD42sZ32CqJz2QIpBi%2FrTebRcQIhAJUagi3p2cpF8V%2FcUn4FFbOgJ673fFNDEtk%2BDocRcekSKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6tlXqR9FR4QJYXyIq3ANM9ZGWbI0KKY272jsl07f8o8g%2BGFxRjzs%2FfWzW8BaPMAmxh9YnLtu8FHesr4gWHIcxp%2Fg68Pm3q3SRXt0De0O0j5cylZ5FFVNoDlzdumwYDPHiqCrLKsAVoULAJ8PMk3mJfiw1DvIQQBCipOm6mWWxTEkuqLkZOEJmcI4qZbMo4dYx4Wgb%2BATLmjDm2NVSUK%2BL4n3%2F3h6QZy2o85ZllcoYH5c1qIOifmO7RZl4eMFghD5VskCG19JMLnL7P4O%2F9x15QHMvOIY1h48gdK60ENHIaZalTaTEIUCKa%2BYoOHN%2BFVI%2FqzG7oNvnNlYi5uZ%2FlN%2FbWyxxkN5uE5RrWD66358nz2DH5jOu7UJu1mGeo3wOyrAsJksIJYCFfoW6LzPOMv1XT3yWD%2BJPNFz%2B6Jeyh8GsDE1H9EsxzL8y1yx8CbB%2BMmFfuPcZpmyVFEBOxhKaTq%2F80Zo8SG7y3YbJDnp6082jcAPt656df2MM7xWY37EKmZqqu9tGmZhHfP1T6YcQlJC7l%2BgdjplMjMr8Cvzj2WTFHJuxB%2F5HLHienlVt%2FhTtQyTavVF1N13NRg5oVXEvcUMYvk6qpBI4h%2Fo%2FvvQPazWKn3f%2FzO6Iqhra8OaBORTvLsx9cAQpEQ0f5Q6NQjDKkuHCBjqkAVeHJB7GD1OpA4jv%2BYBxGXUroor8L%2FsJA8iidFvTz02cn6%2B0mvFlY%2FbnvYC%2F9%2BV76t2NRrwZm2VdvSYxUr3MBH02GpaBm9gHhiFHbrwWqUYVunHBK2O63wp%2BiiUvYc%2BguT9jyskEOWQdaGCg7k%2FA5iYDSN52qrKi%2F1w8oLVSkNYBco0Y%2BX7xJaEGv6IQuxRbAYaiWvB%2FwqeruPEegQK5WPwUJ8sQ&X-Amz-Signature=3d79a1f50129ccb6e4ac222210dc8aa7c2d34435d21c826a17cc013652e2efb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676OPJVDI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDnEBn8iiATsPm2K0rf5NCCCk5S8iISezWjfn45VEvC8QIgVoyYP4NuSMn3AvQHpSHbkMoIvIic6ZN%2FiKv7%2FQ6jRD4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDDbKaqKv7v92MgUxircAyx22j9rzNdMJenAwwweozkbjoqsO%2FswRC4aVZ2RcZTP4qzV9ZuvaU0EacIoxJAL5bd7UEw3ILHYPyIut7bBCZvc1HkZVQxBq%2Blh%2FbCW7hC2VcztAYMy0SmQhbK5tBDY2kVW0tAhbuqX2jPV3yOoPbe%2Fh3FrP4MUVDQ8BG0l%2FJXJLdLizN8m4in66yAq%2BRXdX4ZAFB3sSPUAvKl1tqppvM8G%2FqHL%2B%2FJZNMGPKbE7q%2FAEs%2FHxMy0gS2AOY6NSvLBPH2eEmYrQvI%2BW4%2FqCy4hIuLypyl42FIiLfRDRLAY5c0AWYSdYVWZ3KYJA7LJBRrpu0SItwBhSytw%2F15UdIFy1neEf%2BnEgkuDu0NRtW9d8YpLRG1r8LqllApav8%2BwGF0%2B8mN30DlXwM8jV7X81R37Oq2PgLiyFBf97l4kIHKSJpUsXsZd9goRrfVNQJLe%2FZTA7QwY9InJq84hOhMx0yFokRPonWF9gH9f0%2BTW5TN1Svu9vj0LdKQlEAQVDvKcK5yBrFTGPIXrvksyXYIuFOzCxuw%2BM2s9rnXZEk2qb53C4izi4i1NSiPc4KEzQrD%2Bq730KGITPRZE%2FQTHtiebVH2Mi3RAl1PXmWU8P5DEBUaweEboJdxikO5qvnfUH4KfZMLmT4cIGOqUBP6y3s9dXUFmzpOwqKg5VNzdMQY0RCr7zt9PWuqCGU8hgpJkJq0hYrgHBHeOJb1MbBqfgJwj%2FhzRerPOZ68O4JMoP2Ac1wru5nrYmdoIwykwCS0Sa1YRrAf8SdvgeBdi%2FPRmauHDFYqc%2F7W3Rmj4YE5I9lPtNPznbQrxr16JI%2B0J6pJrgj40Bvlr8kISWQRdHZ872%2FGUoX1XEmwoM3QqRyYbrOSMM&X-Amz-Signature=e3c83c4db55c4cd70bc4fc3299d746effc2a667fba6b813ff38f558b4b9f785c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
