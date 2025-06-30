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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4WU7CX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9mYLznJ99nSocPxlSFL7hKIPDyWa4IsnQg%2FVFKeKZgIhAKkEtrzaKLUOMNNzl4Hi9egitr3LV8Fdl0eL51zOlmeZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPu7or0XFmic1CZ%2Bkq3APN9NiKRLWUHLWk31W98bNjDiB2CtpbBoHt%2FBr8DeLj2lm0xh3ht5iiUnHi%2BWsh6On36tKe%2BJdH8n6w%2BBlQ3OHUpTWDAjUVKhmnV1TmfDSD66fdl%2BBNRxK%2BEUmIbJjSbBPgYpxukR%2FXBOovbqTCvpnLJhTtTlexeNAeUfIw%2F2zwk14XGkuVQlGeIZtJjE%2BKbF2DYkx1s5cpIHpq1J5dO0q6UXcRpH7O6q6yuR1lp%2BhTRl0BoDpU17kyJtWD2wqX%2BCosH6J%2Bl%2BAh8xaTqTG6LDSlUo4vEbc%2F3ZLDg5TY%2F5xOVi9Ds4k8qnpypLSNhDh%2FPlvtqIqUls6ccJtd57TmbmZbnzMSlBQTr7aeUR1H66mVOHHPgOPjJMbrJrnkjFILn%2FaY6HzLzTv8SY5lICxX7CkRGs6QJSl9ZQGDjRlDCWCZT%2B5UaYT0vjGQaQ4UATmMB5PCFIAkHAM%2FVdsjdjlJYz7eN62KCOIqxRwujs4tfutsL14Y93ods%2F2hcPRIzrNKh58XHifIDgeDdFCHVc%2FY5mq7%2BF5PbD0ZzvkQk2I5NiIQTidDW0S1CbcSmhl1%2Bggi88imfzVyNFKuSF5k3d3G5x7vRVZs0%2F5j71Aik%2FVHltZEz0jfcZEMUnRCv9eYsTDr6orDBjqkAYL%2FjWA0XQ2M85COhbeAUh7%2FLg5KTSP%2Fe22AmDYohkl7VF%2BIIjfWZ6vtZczE9m9XFZcTGZcrx3W6HHNF0BdOIydXTsRU1Ao3InJKmPTQ%2F6sGbfCR9KelYxL5K2ap%2Bxh3DWV5nFIoCXW%2FUrtm0VmgaSB%2FTp8gDA9bl9GtIHFB%2FhgzJg80znbGdH0XTzMGKScZ2viroXDzsA526oh3RBpaX0EZHfU2&X-Amz-Signature=d22508a52d2c9d0d22300a45916854dc1b547fed77628e0e5f3aa7a7b483a658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4WU7CX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9mYLznJ99nSocPxlSFL7hKIPDyWa4IsnQg%2FVFKeKZgIhAKkEtrzaKLUOMNNzl4Hi9egitr3LV8Fdl0eL51zOlmeZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPu7or0XFmic1CZ%2Bkq3APN9NiKRLWUHLWk31W98bNjDiB2CtpbBoHt%2FBr8DeLj2lm0xh3ht5iiUnHi%2BWsh6On36tKe%2BJdH8n6w%2BBlQ3OHUpTWDAjUVKhmnV1TmfDSD66fdl%2BBNRxK%2BEUmIbJjSbBPgYpxukR%2FXBOovbqTCvpnLJhTtTlexeNAeUfIw%2F2zwk14XGkuVQlGeIZtJjE%2BKbF2DYkx1s5cpIHpq1J5dO0q6UXcRpH7O6q6yuR1lp%2BhTRl0BoDpU17kyJtWD2wqX%2BCosH6J%2Bl%2BAh8xaTqTG6LDSlUo4vEbc%2F3ZLDg5TY%2F5xOVi9Ds4k8qnpypLSNhDh%2FPlvtqIqUls6ccJtd57TmbmZbnzMSlBQTr7aeUR1H66mVOHHPgOPjJMbrJrnkjFILn%2FaY6HzLzTv8SY5lICxX7CkRGs6QJSl9ZQGDjRlDCWCZT%2B5UaYT0vjGQaQ4UATmMB5PCFIAkHAM%2FVdsjdjlJYz7eN62KCOIqxRwujs4tfutsL14Y93ods%2F2hcPRIzrNKh58XHifIDgeDdFCHVc%2FY5mq7%2BF5PbD0ZzvkQk2I5NiIQTidDW0S1CbcSmhl1%2Bggi88imfzVyNFKuSF5k3d3G5x7vRVZs0%2F5j71Aik%2FVHltZEz0jfcZEMUnRCv9eYsTDr6orDBjqkAYL%2FjWA0XQ2M85COhbeAUh7%2FLg5KTSP%2Fe22AmDYohkl7VF%2BIIjfWZ6vtZczE9m9XFZcTGZcrx3W6HHNF0BdOIydXTsRU1Ao3InJKmPTQ%2F6sGbfCR9KelYxL5K2ap%2Bxh3DWV5nFIoCXW%2FUrtm0VmgaSB%2FTp8gDA9bl9GtIHFB%2FhgzJg80znbGdH0XTzMGKScZ2viroXDzsA526oh3RBpaX0EZHfU2&X-Amz-Signature=03b72b732dc4a35be53446338f9eef982c72de5bee19845473782d1d3766a816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4WU7CX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9mYLznJ99nSocPxlSFL7hKIPDyWa4IsnQg%2FVFKeKZgIhAKkEtrzaKLUOMNNzl4Hi9egitr3LV8Fdl0eL51zOlmeZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPu7or0XFmic1CZ%2Bkq3APN9NiKRLWUHLWk31W98bNjDiB2CtpbBoHt%2FBr8DeLj2lm0xh3ht5iiUnHi%2BWsh6On36tKe%2BJdH8n6w%2BBlQ3OHUpTWDAjUVKhmnV1TmfDSD66fdl%2BBNRxK%2BEUmIbJjSbBPgYpxukR%2FXBOovbqTCvpnLJhTtTlexeNAeUfIw%2F2zwk14XGkuVQlGeIZtJjE%2BKbF2DYkx1s5cpIHpq1J5dO0q6UXcRpH7O6q6yuR1lp%2BhTRl0BoDpU17kyJtWD2wqX%2BCosH6J%2Bl%2BAh8xaTqTG6LDSlUo4vEbc%2F3ZLDg5TY%2F5xOVi9Ds4k8qnpypLSNhDh%2FPlvtqIqUls6ccJtd57TmbmZbnzMSlBQTr7aeUR1H66mVOHHPgOPjJMbrJrnkjFILn%2FaY6HzLzTv8SY5lICxX7CkRGs6QJSl9ZQGDjRlDCWCZT%2B5UaYT0vjGQaQ4UATmMB5PCFIAkHAM%2FVdsjdjlJYz7eN62KCOIqxRwujs4tfutsL14Y93ods%2F2hcPRIzrNKh58XHifIDgeDdFCHVc%2FY5mq7%2BF5PbD0ZzvkQk2I5NiIQTidDW0S1CbcSmhl1%2Bggi88imfzVyNFKuSF5k3d3G5x7vRVZs0%2F5j71Aik%2FVHltZEz0jfcZEMUnRCv9eYsTDr6orDBjqkAYL%2FjWA0XQ2M85COhbeAUh7%2FLg5KTSP%2Fe22AmDYohkl7VF%2BIIjfWZ6vtZczE9m9XFZcTGZcrx3W6HHNF0BdOIydXTsRU1Ao3InJKmPTQ%2F6sGbfCR9KelYxL5K2ap%2Bxh3DWV5nFIoCXW%2FUrtm0VmgaSB%2FTp8gDA9bl9GtIHFB%2FhgzJg80znbGdH0XTzMGKScZ2viroXDzsA526oh3RBpaX0EZHfU2&X-Amz-Signature=51464699dd138aff5fd3e6c37b96f3a61503177e294cacf02cf4b7068adbd9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUGM7S5A%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRm9GV6UEUArASI7Y5eStHSpU%2FjS6MfLcQVeIWmAQstgIhAK4avyXtYjlfx4ht7tlg6z0cyU3pXgKdDZYCAJ3niQKGKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo102RSHLAjVCTG%2Foq3AOPrUM62TkkmH4qhOzVxGMnCvT%2BEGp1VcS5mgAW%2FAKiRsSeyDkuTyYteBhRKO3p8rqyZn54vxWWmTRQMAPusSx%2FweEYwVKVb8yiZLvsJvkjzE0SBHKnhYMqaolzK1m1keR6cp2%2B%2F4ENoClMV%2FpLTzV%2BkkJQYfFQyzVFiE2lqnIv1%2BcA%2FCUt9MkC%2F0wOqzTVEDI0KsccAMP9ZZBQhlhcAh4WbMZR3YX9yx0bCfpLCLRKFfE8gAZqC9h4SoEUEIdFh0AmcjbwBz6x3Io2%2Bh9AcECHUr%2BEoFVWWmc8ef69aBweXlsQ7n0PM8FJfGQZbHwnkjHhhQ9qgm6NBH5K4QI3ef%2BOKiW%2Bx193NEVQeT4ZtResEmOboM7DVali33kfOVqShK2jsrjhhG075hWC5FNyta%2F9dleCvK7%2BtZRyQoHuoBN3odx1A9UcFXMUzNxkniFO81WxFIUU%2FB2qycYkNFjqA%2FqNiT18H397EYj%2Fu8JBp3ArDA4NOpHqY1TB38emgv6ci8nhvzVOJLWg3tFu5SNmV%2FSO1yTZp31LcxmOURqpSaKRaWiorHeA2OhIapfYXElsITNrn7pkaN9zeZD3j5ECR%2FAfaRu1T0I4gddser3xTPGy%2FjCJpI7vPJeIQdZdnDCC64rDBjqkAZXZlEMqwbmE3Z0hNrMCrNtqHwCK5A0eSpw3K5LwAAEXzdQXOzUSGGyfzDKYrsWq2P%2B6ZZAriYN9pPujNWkVFf8bvDFmUNLpmJI2NzVWL8aB5IbU5Ttd2nsNfiByj%2B%2FPI24l2YAmXcr4heTuD1qZEJhfLQTjKFuvGvjB98rwFDI%2BWzfvFE8w9zgfrxwr2ZpwUh5G6XINSrtHsOjmhNNo0TZSOQvy&X-Amz-Signature=e37d47f038b29414db8df4dd3ee730477a753111f4384df5dc9c09b59bf2ca76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ICORH4R%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVusnpcv6cF0wqrUPPt1Du5U098cF%2B4wDsxfyqpRl8HQIgAyHFM63EV0BVKERoBmfcVfNVkgZsDa42iQBWKnPs0ZMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHz1A1baIUn%2FWj87ByrcA4YDy8BebisQgrhq0%2BtDo9No8NG%2F2uxqxjQGB%2B50fpjddyA7wWWHDO%2FAWfbCpYW66g2DdCLQUsgirseqQTISWe57HHqYSamuFcaEuXrgPK6Us5%2Bv6stS%2BUw5C3LDCZnpgML45MHB2U7wm%2BPW%2FG16D5%2BBFzghwvkl7gqkwSrCwsDEn7sAfEBNf31%2By9tsVAWjSOBGLz64mtC03SX%2FJbTXSwjjHTSfq99Otx2w1%2B%2FM%2BA9hZmGBvckqxgGByLrjORujbZGqLSR%2BiCktUy07zb4OPUWRulplIzxrbQxuPfPCi8uSZeJhDmcZAWog6tIbH9kPpuL%2BG5LSGY%2BCVHoZuSuMNkp03tHUccX%2FstFCX5Pi1bupLDe%2FdTHmzY2d3JosCcWkYaG88epq61IJmIUqxhPKbhPe4pPYCcw6GXgxz88YBfPCSNxhPg08Gmkfrn2Z%2FXm55I847shde7sJNqielKiBzwq5f4nZ8Mzc5HP9F3mTPffdBlQEG45Kq8rpcIrHdx%2FNofHzPmmJBeHy9%2FzQDkF8%2FK3ibdw%2B2pOMuKeICJ0KrEXiwCaXOl%2B%2FDv0jOrhARyNDUxdgi3klXEiv6OHm1IAIXaPb0w8b4CuqE9NJtvSnKuVwONtQSRKjMZfRpb6VMMrqisMGOqUBMcY1DilbCdpq0%2BB4GEuQiGgNKkDhURaxuKjQW5v4exWlk3o1AcNE%2B%2BszEJwdcpdjFmyv1tTa6mPRkVtg%2FCZb5rsuO%2FhPLYtdxLO4fKO3QWZHMMdffQ8YkCSP6l4IHqG9VKFkSCwGRsQHVfDQ1CxykxVL6ntf7rHCWWmuADgw1NkhS7RVVa4rxk0R75fDw0V0jaCURTrbor0A9NOpKqZ6dBEczCP%2F&X-Amz-Signature=75c621309d7edb5c472ba73be1ba425be3806b5e05fec408972fc9d31d99aed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4WU7CX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU9mYLznJ99nSocPxlSFL7hKIPDyWa4IsnQg%2FVFKeKZgIhAKkEtrzaKLUOMNNzl4Hi9egitr3LV8Fdl0eL51zOlmeZKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPu7or0XFmic1CZ%2Bkq3APN9NiKRLWUHLWk31W98bNjDiB2CtpbBoHt%2FBr8DeLj2lm0xh3ht5iiUnHi%2BWsh6On36tKe%2BJdH8n6w%2BBlQ3OHUpTWDAjUVKhmnV1TmfDSD66fdl%2BBNRxK%2BEUmIbJjSbBPgYpxukR%2FXBOovbqTCvpnLJhTtTlexeNAeUfIw%2F2zwk14XGkuVQlGeIZtJjE%2BKbF2DYkx1s5cpIHpq1J5dO0q6UXcRpH7O6q6yuR1lp%2BhTRl0BoDpU17kyJtWD2wqX%2BCosH6J%2Bl%2BAh8xaTqTG6LDSlUo4vEbc%2F3ZLDg5TY%2F5xOVi9Ds4k8qnpypLSNhDh%2FPlvtqIqUls6ccJtd57TmbmZbnzMSlBQTr7aeUR1H66mVOHHPgOPjJMbrJrnkjFILn%2FaY6HzLzTv8SY5lICxX7CkRGs6QJSl9ZQGDjRlDCWCZT%2B5UaYT0vjGQaQ4UATmMB5PCFIAkHAM%2FVdsjdjlJYz7eN62KCOIqxRwujs4tfutsL14Y93ods%2F2hcPRIzrNKh58XHifIDgeDdFCHVc%2FY5mq7%2BF5PbD0ZzvkQk2I5NiIQTidDW0S1CbcSmhl1%2Bggi88imfzVyNFKuSF5k3d3G5x7vRVZs0%2F5j71Aik%2FVHltZEz0jfcZEMUnRCv9eYsTDr6orDBjqkAYL%2FjWA0XQ2M85COhbeAUh7%2FLg5KTSP%2Fe22AmDYohkl7VF%2BIIjfWZ6vtZczE9m9XFZcTGZcrx3W6HHNF0BdOIydXTsRU1Ao3InJKmPTQ%2F6sGbfCR9KelYxL5K2ap%2Bxh3DWV5nFIoCXW%2FUrtm0VmgaSB%2FTp8gDA9bl9GtIHFB%2FhgzJg80znbGdH0XTzMGKScZ2viroXDzsA526oh3RBpaX0EZHfU2&X-Amz-Signature=8138752c99b5179ebc6d082a99480d41de6bf65ce25ab7c2f8c53c43a4d4d1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
