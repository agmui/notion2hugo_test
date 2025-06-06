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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3R6K2K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxRvgeL2jALcDNhtEFgr1lDSd616E%2Bp%2FJXS2GqGYrKCQIhAPf1dKL8zXhDVbqLuA90rquwlbAdFTGDhCFKni3g9zceKv8DCGUQABoMNjM3NDIzMTgzODA1Igxh3ilw693u4wZERB0q3AMBmsaUFN2iqbv5%2F9CuYPbQUQFjOdG9wDt5ryXZNY%2FbC9d7umbzGKIC6RcAqSqQcQRm6zRTHFq5Du9xrrSsBCjR7sC1zBzFTFEAK1SZ3by%2FIp3ro%2FauajKdSAQhJtZfgIjZUuet5u0GHxgLEurqGRITzix1A4w1Wd3K%2BZL%2FYwahZr15quKrv1wAZD9QqoyTUVbWDMIG9l1DYxEEyftJGAJfoPEInrugB6HrWU%2BqrWUuo3%2FzONZFMv%2FE9uA08wwUglFciu5FYTP6Rff2RjSgWz9%2F6%2BeFvQ9tBLK%2B7FBwotnqxRaHQSrnx8%2FJvkjme1N4C8IEKd5BzTEh6dfL72CHERUteXhKAiyXnrIWgplL6ysryGhxuBrgrAdx9NYhDH5s71mW6iSsA09HihyYn3om9SdYaptL5fHt%2BhmUE4UQpxXPY3m9Ehg9kVvacxYMVUKNOb6p590YHKyzIMT7QRl88%2BF0CU826ksVbcQ4D6mdmiNIb0X2WhtOcgJb8BqxsmMXtLsutn6QLcC3fnCvAN1y2ZWR0YR4KTDp6wC0kWmJHKkHN1Pbz1oigJvNZ6pN3wfWPrZGFhuLiVFdB5AgBnLrZ6AIQ%2FNlEbZgFPpSHp8BdaRN4PJ7H8nBV%2FmKdiLZ8zCjlY3CBjqkAbStUQmxVjMzZLpKkc5z2RxhpCxRXoxLQO0uuDvY9qU7QzkSHxQpraipGWCFLR1wineY9%2FLZXWqqNQ5wSCZidd4b3RsF0rQOGbZjyk57W6P23LkyfjZ9BrnGPjGXKPSRiRPxX6yxMTxRadcT9jrMGw080SKbMSBuhm2fDeXO7FMv4eZ1KyTZCRAIyCIFE5Og%2F4agQY5vXwUfqLz5i6GoxsuwOLe%2F&X-Amz-Signature=92f600a6820a100fff80aa2d086a8282a47b4e48460cff5038bc42f843052361&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3R6K2K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxRvgeL2jALcDNhtEFgr1lDSd616E%2Bp%2FJXS2GqGYrKCQIhAPf1dKL8zXhDVbqLuA90rquwlbAdFTGDhCFKni3g9zceKv8DCGUQABoMNjM3NDIzMTgzODA1Igxh3ilw693u4wZERB0q3AMBmsaUFN2iqbv5%2F9CuYPbQUQFjOdG9wDt5ryXZNY%2FbC9d7umbzGKIC6RcAqSqQcQRm6zRTHFq5Du9xrrSsBCjR7sC1zBzFTFEAK1SZ3by%2FIp3ro%2FauajKdSAQhJtZfgIjZUuet5u0GHxgLEurqGRITzix1A4w1Wd3K%2BZL%2FYwahZr15quKrv1wAZD9QqoyTUVbWDMIG9l1DYxEEyftJGAJfoPEInrugB6HrWU%2BqrWUuo3%2FzONZFMv%2FE9uA08wwUglFciu5FYTP6Rff2RjSgWz9%2F6%2BeFvQ9tBLK%2B7FBwotnqxRaHQSrnx8%2FJvkjme1N4C8IEKd5BzTEh6dfL72CHERUteXhKAiyXnrIWgplL6ysryGhxuBrgrAdx9NYhDH5s71mW6iSsA09HihyYn3om9SdYaptL5fHt%2BhmUE4UQpxXPY3m9Ehg9kVvacxYMVUKNOb6p590YHKyzIMT7QRl88%2BF0CU826ksVbcQ4D6mdmiNIb0X2WhtOcgJb8BqxsmMXtLsutn6QLcC3fnCvAN1y2ZWR0YR4KTDp6wC0kWmJHKkHN1Pbz1oigJvNZ6pN3wfWPrZGFhuLiVFdB5AgBnLrZ6AIQ%2FNlEbZgFPpSHp8BdaRN4PJ7H8nBV%2FmKdiLZ8zCjlY3CBjqkAbStUQmxVjMzZLpKkc5z2RxhpCxRXoxLQO0uuDvY9qU7QzkSHxQpraipGWCFLR1wineY9%2FLZXWqqNQ5wSCZidd4b3RsF0rQOGbZjyk57W6P23LkyfjZ9BrnGPjGXKPSRiRPxX6yxMTxRadcT9jrMGw080SKbMSBuhm2fDeXO7FMv4eZ1KyTZCRAIyCIFE5Og%2F4agQY5vXwUfqLz5i6GoxsuwOLe%2F&X-Amz-Signature=a65a72f2531a05b0c3a59675bcf75ca02793d9433ef024d93d1679a3b3b7b909&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3R6K2K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxRvgeL2jALcDNhtEFgr1lDSd616E%2Bp%2FJXS2GqGYrKCQIhAPf1dKL8zXhDVbqLuA90rquwlbAdFTGDhCFKni3g9zceKv8DCGUQABoMNjM3NDIzMTgzODA1Igxh3ilw693u4wZERB0q3AMBmsaUFN2iqbv5%2F9CuYPbQUQFjOdG9wDt5ryXZNY%2FbC9d7umbzGKIC6RcAqSqQcQRm6zRTHFq5Du9xrrSsBCjR7sC1zBzFTFEAK1SZ3by%2FIp3ro%2FauajKdSAQhJtZfgIjZUuet5u0GHxgLEurqGRITzix1A4w1Wd3K%2BZL%2FYwahZr15quKrv1wAZD9QqoyTUVbWDMIG9l1DYxEEyftJGAJfoPEInrugB6HrWU%2BqrWUuo3%2FzONZFMv%2FE9uA08wwUglFciu5FYTP6Rff2RjSgWz9%2F6%2BeFvQ9tBLK%2B7FBwotnqxRaHQSrnx8%2FJvkjme1N4C8IEKd5BzTEh6dfL72CHERUteXhKAiyXnrIWgplL6ysryGhxuBrgrAdx9NYhDH5s71mW6iSsA09HihyYn3om9SdYaptL5fHt%2BhmUE4UQpxXPY3m9Ehg9kVvacxYMVUKNOb6p590YHKyzIMT7QRl88%2BF0CU826ksVbcQ4D6mdmiNIb0X2WhtOcgJb8BqxsmMXtLsutn6QLcC3fnCvAN1y2ZWR0YR4KTDp6wC0kWmJHKkHN1Pbz1oigJvNZ6pN3wfWPrZGFhuLiVFdB5AgBnLrZ6AIQ%2FNlEbZgFPpSHp8BdaRN4PJ7H8nBV%2FmKdiLZ8zCjlY3CBjqkAbStUQmxVjMzZLpKkc5z2RxhpCxRXoxLQO0uuDvY9qU7QzkSHxQpraipGWCFLR1wineY9%2FLZXWqqNQ5wSCZidd4b3RsF0rQOGbZjyk57W6P23LkyfjZ9BrnGPjGXKPSRiRPxX6yxMTxRadcT9jrMGw080SKbMSBuhm2fDeXO7FMv4eZ1KyTZCRAIyCIFE5Og%2F4agQY5vXwUfqLz5i6GoxsuwOLe%2F&X-Amz-Signature=ddec041324e248062c278a4d849cb7dc421e249176d18da8792f107e69407673&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOPY3XNP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvI%2FLC4%2FNt4cCKGzDmpBt6PagM1jJXXuojlaZW9vDcgwIhAJEmTpA6H0hKje1O14LucQY6npd5wI04H6FtELWXCiMkKv8DCGUQABoMNjM3NDIzMTgzODA1IgwPWxZmvAHtxCehbhsq3APTT94%2F9rPAf8I4qnTurZ7uKLt4PPmO4JiqU4f%2F8e8idt2IgGofFeWqWJLv3bDVKCB5oSm6JgTAA7e7oeGplPfbzj530YG6WboBn1ycQ4ONZ%2BPeZIWgtABBqWrl2Okc4dTi%2F1pSX2tT5qlVBBkpwZTG55NN5rChgSwYoyggOVmfepuuVrJsRuRNzvuZ2Qcwve0AnIUI0dtZtH8lR248tCZYHdwIiNowJaGgZLyS7MQXGHy6GSgbeHM9jdcBgjSXGq82sJT59qM9f87qByoV9p0zZOuwBNza%2FqZdrYUrTst9Vkhdqr02DrKK0LW1sldj9o8Z4Xdhc1j5rSFPcPfDMulwGNRo%2Fc3zNbziE%2FjM1XxW%2BjcLB49we%2Fhc6BngrorB5jG02eYO%2B2RrCgir5CpB3rVADAKXc79Ft%2FvShguiMrWXfUC1pvlnuTWlUTj9VLhzQXMZ83AU5ErZvgIGvsBku%2BbNvNCP6dlF5YzoCFJq9hqmmAQPvfGC2mkqXzmTkJg%2FxYezqP17jx30iHP%2BdTlFpPY%2BnPjl0fXXrgeeOlKqSjOzwVqvkD1PTwvz15ZwGmNGbpq9QOTtOw6EchUoy%2BaOqjNWUM5MPSMnlDS1lxF6TazRPMFJ8nOpIvfJAfOHCjDRkY3CBjqkASuyFY7YeJ%2B6iUn1%2FzJT5a8C2TxeVAOhaRjmiTXH7kSpu36jvmftRSGwKldIRORCUYwr0cbDLyjCOospOZjzgqUIj%2FLyTD6z4NW%2BSaMEE%2BWYldN5sCF1E4Wme6iO2CtYVeX23lIL21ZemG7HT30qsPFu%2BU2m4ZweGA1icASKMNZtfDuk%2F4ndl%2FpSJDtqvOZY4W5rhJ%2BgwbLR%2BJ7dzF9tn6E6u46R&X-Amz-Signature=ebdecbbb47e7f77987b23a4967de457d023689caaf5ce239914bb661c05a61b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3M2HYCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FevLMz4PEjEyET8yXClxgp8wpU6x1WrUQXOBvMm0smAIhAPNRA6Zs6ZzFpW8u47OIdm3phFxoYVuVb7x227Fna6P3Kv8DCGUQABoMNjM3NDIzMTgzODA1Igzv1MtFRcMqxLEuPVgq3AMxae%2F9y2sZBX1Hpc5ZFfrSDQ826eykKYbUZURcW1gHANveMRZc%2BjPRlrJkc5Q5ACzTMbQyvqt82QAJ5bVuGN%2BjwbBkpDhpfBYj1zz4PHg2P6HdB1rY%2FnGNwwhe6LuPdSuMzITEa6vaxORcDX49c%2BlX2zK6IHDReZafs%2BxtKaw1328ijqxEf73Kn5zrS5NHvzZ9m4MjbN4ctQFUMprUt4kvdDFUgdbVMn1OFTFphZc3NvQKlR6g4ex1b98%2BjDu0mbqZpdrikpDC5YV8jviIu%2F3pl%2BzsBj56YmogDfQhX%2BBXfWYc4Kf6xKbYQo%2BZcnz2aepxSWZRHnTtE1S%2FomCrBZ6FVFgk78oSbJLL9Rhz7gnlHjdDqbokGPKZzFvo6DehGWxk4Dlc6YSX%2FqSy7GtFoGKsf29vM6hetI%2BhPD1Eg2g4t2pc4l7ACCKBxxM5RBMvQrMdrKSDIOSb9u6Ra3DDhwHwJb%2BtlED5Fkg5DeGFVMdOu4rYFWxrDn1At3fPE1x4krV45gBOvNtRw8Juofyt0ujXO5lZeHVunigpTzGOqmoOrDV3K5ul%2BvK6vzjZ6tAaw2wmv9KzVgdiO%2B%2FPuW6SLjmMLWITOQLa48b7wXGaYNnyJ3ztmJ1sgIYO0pBolTDpkY3CBjqkAd9djA8w83MuOHW8PvjnGfvjk4ePcR5qSBy58BxD55dO2jruDSJyAjDoOb1UrFHiaJMJwAyt6hWCne%2BwCFjpBoIUHBzl%2BP5fPt9YoD0W5RDWKQhgq4dR5IL%2FDBEqsp8sRhsyQn6rpyCfRIwIDJsG8z95axIqYphFZVmfMzMu1FyIqBEayat%2F0veKsqaeC4dELYWcyFrb6RIpodDH9zsCGPDR2nrK&X-Amz-Signature=83aa937c831ad00b7e857863adfc8b4e04635135cddd40acbdd785445dd01ead&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3R6K2K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxRvgeL2jALcDNhtEFgr1lDSd616E%2Bp%2FJXS2GqGYrKCQIhAPf1dKL8zXhDVbqLuA90rquwlbAdFTGDhCFKni3g9zceKv8DCGUQABoMNjM3NDIzMTgzODA1Igxh3ilw693u4wZERB0q3AMBmsaUFN2iqbv5%2F9CuYPbQUQFjOdG9wDt5ryXZNY%2FbC9d7umbzGKIC6RcAqSqQcQRm6zRTHFq5Du9xrrSsBCjR7sC1zBzFTFEAK1SZ3by%2FIp3ro%2FauajKdSAQhJtZfgIjZUuet5u0GHxgLEurqGRITzix1A4w1Wd3K%2BZL%2FYwahZr15quKrv1wAZD9QqoyTUVbWDMIG9l1DYxEEyftJGAJfoPEInrugB6HrWU%2BqrWUuo3%2FzONZFMv%2FE9uA08wwUglFciu5FYTP6Rff2RjSgWz9%2F6%2BeFvQ9tBLK%2B7FBwotnqxRaHQSrnx8%2FJvkjme1N4C8IEKd5BzTEh6dfL72CHERUteXhKAiyXnrIWgplL6ysryGhxuBrgrAdx9NYhDH5s71mW6iSsA09HihyYn3om9SdYaptL5fHt%2BhmUE4UQpxXPY3m9Ehg9kVvacxYMVUKNOb6p590YHKyzIMT7QRl88%2BF0CU826ksVbcQ4D6mdmiNIb0X2WhtOcgJb8BqxsmMXtLsutn6QLcC3fnCvAN1y2ZWR0YR4KTDp6wC0kWmJHKkHN1Pbz1oigJvNZ6pN3wfWPrZGFhuLiVFdB5AgBnLrZ6AIQ%2FNlEbZgFPpSHp8BdaRN4PJ7H8nBV%2FmKdiLZ8zCjlY3CBjqkAbStUQmxVjMzZLpKkc5z2RxhpCxRXoxLQO0uuDvY9qU7QzkSHxQpraipGWCFLR1wineY9%2FLZXWqqNQ5wSCZidd4b3RsF0rQOGbZjyk57W6P23LkyfjZ9BrnGPjGXKPSRiRPxX6yxMTxRadcT9jrMGw080SKbMSBuhm2fDeXO7FMv4eZ1KyTZCRAIyCIFE5Og%2F4agQY5vXwUfqLz5i6GoxsuwOLe%2F&X-Amz-Signature=4af849c2120cd0668a7f4a07f50bab8e42f61061f6dfa4e30a8e24f9514a375e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
