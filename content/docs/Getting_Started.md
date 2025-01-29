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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JWRWCXY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtDkIDfrCIfJeX2lvgEpDpPLO2AgVnZz8Y5osaMCjx4AiEA2bsY2OoYGqm2A6gScneWKzczi7epYTYt75hXFoMXbRoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOBdjQpQkWynJcvqircAziLjGnTVfi7Mqyc4hDpK8tbdZs%2F%2BgkLspStwa%2Figo114HPoxFkez%2Bc8rNoT5GobT56WTP4JiI6UdiVi9IEZfTTJeVGJWwk%2Fp%2FidMEdLdCJBxO%2BVMyF3K2ZOehhC7YTl4nyYhVLdWOespxai0pHWsjaTgB11tBDarQz8xFdR9LIiUko7qPyZUqw9viD8AEkP%2FvWO6S%2FaBei%2BtNKD53W0g9DilyZhJqGPYUdmv8ToqnzPkW4ghlMewOj066Ld9EPZzty9frqZvyWvXCdOm%2BPoGNQL8ldWRd40iiEbFcRMGOMVUPyy3Nu37XlvAoXAbj%2BTVa3HHuiHe6EOfFAyOH4vRmsWO8ZqqSHU8OfCcmZf7l475vPugp5L9JHe%2F8MK2trNnapnK%2Fq335F756MnM7oLlAKhBqL0E%2B2LCGwe7ZKcmUPwIJgLa0MUzIUGYa6olbR0XJlHzM58KF4b1dIebpuxZhqmtRIa9ZpJdMilb9K%2B9x6v7sALUEC7crWmWuiBkh4J3hTC5GtQ1GSMtThhlsezTwEygQruYFgJ9eb7j9XOeIgEZVh1up35oB96kWqXG3HIMLyVtEDyHIHFRNTRPONXMpku16zKnA%2BN7HUpfInWWEfwKsfxJDhsliz2v1iHMP%2Fn6LwGOqUBJDrcQuVHTMU0yw8nALzm%2B2LYW%2BCu0s4x%2FYHsc9FJdnH7jGDpf3OUEAfEkGin1B3dB9dSWDFpl6OYWHZqtUq11nFYdXofBv1A%2BI7sFf1TP6Uu5umznrBFNDZx%2F2LK%2B17pZjhRPLz6I3BEs%2Bm3Tifv4n%2Fqc5p07%2FuJ1cO64jGLuEnI2mdcufdvdMAtsdhLouurpSX9gHwrbcAVyJM1dN0jMIELL7PA&X-Amz-Signature=4c151820e804555b646578df6968a1642eb5aef0a156c3944900e90930f289a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JWRWCXY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtDkIDfrCIfJeX2lvgEpDpPLO2AgVnZz8Y5osaMCjx4AiEA2bsY2OoYGqm2A6gScneWKzczi7epYTYt75hXFoMXbRoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOBdjQpQkWynJcvqircAziLjGnTVfi7Mqyc4hDpK8tbdZs%2F%2BgkLspStwa%2Figo114HPoxFkez%2Bc8rNoT5GobT56WTP4JiI6UdiVi9IEZfTTJeVGJWwk%2Fp%2FidMEdLdCJBxO%2BVMyF3K2ZOehhC7YTl4nyYhVLdWOespxai0pHWsjaTgB11tBDarQz8xFdR9LIiUko7qPyZUqw9viD8AEkP%2FvWO6S%2FaBei%2BtNKD53W0g9DilyZhJqGPYUdmv8ToqnzPkW4ghlMewOj066Ld9EPZzty9frqZvyWvXCdOm%2BPoGNQL8ldWRd40iiEbFcRMGOMVUPyy3Nu37XlvAoXAbj%2BTVa3HHuiHe6EOfFAyOH4vRmsWO8ZqqSHU8OfCcmZf7l475vPugp5L9JHe%2F8MK2trNnapnK%2Fq335F756MnM7oLlAKhBqL0E%2B2LCGwe7ZKcmUPwIJgLa0MUzIUGYa6olbR0XJlHzM58KF4b1dIebpuxZhqmtRIa9ZpJdMilb9K%2B9x6v7sALUEC7crWmWuiBkh4J3hTC5GtQ1GSMtThhlsezTwEygQruYFgJ9eb7j9XOeIgEZVh1up35oB96kWqXG3HIMLyVtEDyHIHFRNTRPONXMpku16zKnA%2BN7HUpfInWWEfwKsfxJDhsliz2v1iHMP%2Fn6LwGOqUBJDrcQuVHTMU0yw8nALzm%2B2LYW%2BCu0s4x%2FYHsc9FJdnH7jGDpf3OUEAfEkGin1B3dB9dSWDFpl6OYWHZqtUq11nFYdXofBv1A%2BI7sFf1TP6Uu5umznrBFNDZx%2F2LK%2B17pZjhRPLz6I3BEs%2Bm3Tifv4n%2Fqc5p07%2FuJ1cO64jGLuEnI2mdcufdvdMAtsdhLouurpSX9gHwrbcAVyJM1dN0jMIELL7PA&X-Amz-Signature=8cad2122e690628313dd999f82e8ae429db20c7167d48e60d329634080707f53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4G245QT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcrex3LNP6FqbMgPYc5Tg%2FkwwvjJAsZFu0yUlDyjAFYgIgFEaNjb2zIhc6HLF%2FpNuUYothzed7F%2BwkbLVy0P4fObgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJndnyMTcH3rrxoSsCrcA0k6P7OtNBfjh0Ab35NvODIeq1KfPcMEcWzPuAahX7meWvD9YBJ6sH4YDn1w%2BowggUd5%2BWY%2BJ7mqKthMfxtETWJNu7se%2BgsqT9JSVl2AGMKgOyz7qPtUQClsE6xNTVnhF8GySr0egDUQeuiqZCAt1jHG430QpgCj77ErtPMyegkJv0x4CQS2H%2F%2Bj93QTblHOmyTUjyCxrcMQPAiOPHHT8vIUZspH3qJfwZvZleBkWmQ2ccrSLi35QNS8EfQrE3zJjGELB66ZFXvsVccYjzMdxJJQyNZbC%2BBJhvDydyfr37WvM%2FESHzBgxE6S99uhV5ZA9eF3DdvqnQjldFQoQO9waasS3zegHJ3D9Q7OU2%2FiYBFzZUucMaSWPCaH8e5uFbXzO8Wzr4Lkx8EEJpCYUYZKopN8QvOlBp2R9TBwEnyDOLxir3TDUbaYYmxnTSq5v0hR%2FGuTdsBgWenacdvWUzTXN3bGRUaFhLoqV9gwwbomUrUbodsip9mfSKS0GRFOzA99%2BMUJTtdmTrCvnvIGviG%2BSGvCVeaw0che8T83ohxVCGixglHlslv5x1G8IioIKgtZVd5iSObvGfewC3lVIri33w7DfdkLNuat8T7aYCLXZyNvSTZ%2BdLi%2Fz%2FAJ%2BurbMNPo6LwGOqUBdiRh1ZbVBS4nTPuoPJQOEnWjCRxGeQrPV6IEw%2BIgpbYTY3OIurmcsBcvoRLE9VfyfGJkNV4iCWgkbSMm5wMNxw1vlzbcANJooMHUXlafnqi7oeUpymUKVndmzKzRyCYAj65NpmxkJYhfjM0GjJfEoWp6yY6WxYV7SeYmEVDtpFuBAN2zk22xGT96lI5EBrB%2FPGukr%2BDec232mkFp0NImIs12GGUs&X-Amz-Signature=da12815d9a05ae68c4cd7f89b602db457ba4db57143a8fe42b16552549ca5ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J463A6P%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG86pAZhDtuDG13gtxIygqRPskXoAPp7az%2FdfGHUCz1oAiEA%2FF5Lo0%2BDfDqUQW7w2To5C6w17qgwBDPcKR5D7PRzU7oqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJUsLDOisXtZmD8KyrcA2lzjOvuifTBZN3ZjGTmH8x4HKzfZar7fW93vISneyRlNuycgfwUrP4eNL3Qv8zBsGVqZL5XWIJvY%2BGSx%2Bd7OkgffO80txZQdwsRNdw1ObqC7CfxpQ8GsZ5BRml%2Bhg7HklBD98rMPuLlrmzGh%2BjFMiRQepuSihWRG%2BC%2B4YW63rYszUo2hY%2BnHn3qIO8N6RMYTZvmraN6grRxE6twrNjidjVFCAABJ4SUa3FKlfAe8c6iC0z6611mhiFiywQazYTNxAJl8VR04UJOFNuhjIj3q0KE0Kmt4IV3eVI1YuM97%2BOaPh3LCgZYW3nd%2FD7VIkbr5K1x8K28Hu3byf52fxB4DhBzDGxMiZg1N2Vn7to1n4O4dpZPI8anzyG9vELarkk1Ax4GVQr%2BX56325rZ%2BF6nShJJHgq%2B2%2B3SJ7J1wHoeSeoKkSCO6YH8kfPqHAlua7MxVXqsDcWJa%2Fq3jKwBE3KBuF8bT3j2VsrkJTBlliZ%2FPOA9ImV%2FNe1%2Fj2L3nNYwgb3q3gPCqHv0u6Xlie2MaGHL%2BdH6il7LlH7BpGeqk7UlcZrbnQJmzrvXqmDEsMGmCeLaGJnMv7dtRV1hbU7M828Qz6KznkT6ojP8al789YxxrIsBm2kmpAPp1CtK5JZrMOno6LwGOqUBaAgXFI8zMxMC1Rg1UJEpAvLxtcq%2FvUHLcBY1MRR7lYCnqlybwvlDjHdPFLZFwYufeGofTkYcX5%2FqkCnxTheSp5X1XZI8%2Boxb6JzvtE8%2BpTGF8%2B0rerbS5Gk%2B4WlxWOv9uZW7wxVZUzUuqZJhIdPvYIlfi6sv3hLET%2Fo2VkPEqp6%2Ba4sJWDGv2w1NSVld1YytdoAeBbICg3wSyzf94LyRlIlfrwKV&X-Amz-Signature=b94c3f9264eec987fd6f7ac2276db706ea36334bba7a6a5921c7ca6358c27f11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JWRWCXY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtDkIDfrCIfJeX2lvgEpDpPLO2AgVnZz8Y5osaMCjx4AiEA2bsY2OoYGqm2A6gScneWKzczi7epYTYt75hXFoMXbRoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOBdjQpQkWynJcvqircAziLjGnTVfi7Mqyc4hDpK8tbdZs%2F%2BgkLspStwa%2Figo114HPoxFkez%2Bc8rNoT5GobT56WTP4JiI6UdiVi9IEZfTTJeVGJWwk%2Fp%2FidMEdLdCJBxO%2BVMyF3K2ZOehhC7YTl4nyYhVLdWOespxai0pHWsjaTgB11tBDarQz8xFdR9LIiUko7qPyZUqw9viD8AEkP%2FvWO6S%2FaBei%2BtNKD53W0g9DilyZhJqGPYUdmv8ToqnzPkW4ghlMewOj066Ld9EPZzty9frqZvyWvXCdOm%2BPoGNQL8ldWRd40iiEbFcRMGOMVUPyy3Nu37XlvAoXAbj%2BTVa3HHuiHe6EOfFAyOH4vRmsWO8ZqqSHU8OfCcmZf7l475vPugp5L9JHe%2F8MK2trNnapnK%2Fq335F756MnM7oLlAKhBqL0E%2B2LCGwe7ZKcmUPwIJgLa0MUzIUGYa6olbR0XJlHzM58KF4b1dIebpuxZhqmtRIa9ZpJdMilb9K%2B9x6v7sALUEC7crWmWuiBkh4J3hTC5GtQ1GSMtThhlsezTwEygQruYFgJ9eb7j9XOeIgEZVh1up35oB96kWqXG3HIMLyVtEDyHIHFRNTRPONXMpku16zKnA%2BN7HUpfInWWEfwKsfxJDhsliz2v1iHMP%2Fn6LwGOqUBJDrcQuVHTMU0yw8nALzm%2B2LYW%2BCu0s4x%2FYHsc9FJdnH7jGDpf3OUEAfEkGin1B3dB9dSWDFpl6OYWHZqtUq11nFYdXofBv1A%2BI7sFf1TP6Uu5umznrBFNDZx%2F2LK%2B17pZjhRPLz6I3BEs%2Bm3Tifv4n%2Fqc5p07%2FuJ1cO64jGLuEnI2mdcufdvdMAtsdhLouurpSX9gHwrbcAVyJM1dN0jMIELL7PA&X-Amz-Signature=e3eae2cdfa91335f15f682588601db0b2fde55e4a4ebd4e6c63d796ed773f574&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
