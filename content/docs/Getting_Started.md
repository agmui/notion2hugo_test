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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EYK3I4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXPGMQ6fiOpvGeghnxJT6hl1zgWvV%2F2CE4kXuvc7DhAiEAmCHxGlHBaEUeUMUDP2xfkBXl67Qp2uIDhcCU0uOMvioqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDR4gI44H%2BK69vioyrcA8clt9j%2Fx5jzbby4MnrCB21ykcL7qiHcCCx%2B82UmOC0XsmTTn3n%2B6S3Lmp8Du9vmxnoKQNcxE%2F7Fb2%2BsnTsxaDuJbhNsBDcuGfl1oIHINWvFBcB9Pv%2BDOSgac8R5u6RwcmQFg5jVoaMJV1im4OCQwr33tl8f8Uoxawa4fT6QL%2BblJjtyUOuKR7%2BAXn8LeNfWn6W9yg%2BC0auQKBjJPGgOp1brMYrXz2m4edvtl5ivzWlVopumGqD%2F9FytnNxfw8GvlzpaO26Z0lufOci%2FAkIsxaFLRdlAZg3H3ya4SlU9MyYejyv8lqmcETd7cO1J0V9Rhz0Fs%2Fk%2BRJrWeLNq1k7AvVYU9scpzCFrUkiGX1J9TEGbG9eRuYiXMM4%2F0felMMkCaY7n4dZDspkWZ35eDR%2B4u0zcx8pef25aC5JgiNwmcRMXX7C2vdsAZuKJc%2BLVzzgMHxfHkczbp6izUlcIxHVjLc49eTkd9sopbDmAiC4fT%2Bl%2FT%2BkQ%2BZbwxwvSIRBBrZRAz8tFFceMiPmIRDGJkW8toP%2F%2Fph3EDBl6idtSHPV7amvbtCAWDEIseXQi54gXJa4AcJxbih5giJ4fwFuzOE9MUjQDAB%2B4YkQOdK%2FeyhZXWrbDcPrDYVftCvxg%2F2sVMLeIo70GOqUBoCqiqSMDkkslbg5LLQ4n7LHcvXIXXORbeseLOlGugRp%2F3X%2BMh2%2B57jyd%2BYeedZE2upI8dnr5XpQ9So9I9shgKVNDGEuGSF8%2BpXZ5h4KZO0Q1ky5furfM0xoCpAKIEMGTRjetOMncvz4YStbvxLVz5%2FdxPPaiem5c%2BPJ63bg5AlwpKONcOnRmqFTQjWv8U7r9WtUezTFqvWJJQwTKR9p9qZ6VvCWZ&X-Amz-Signature=37428acc7ddd55a68059e3b539f32b28531aa977d6296e192a21543ccc01ef12&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EYK3I4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXPGMQ6fiOpvGeghnxJT6hl1zgWvV%2F2CE4kXuvc7DhAiEAmCHxGlHBaEUeUMUDP2xfkBXl67Qp2uIDhcCU0uOMvioqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDR4gI44H%2BK69vioyrcA8clt9j%2Fx5jzbby4MnrCB21ykcL7qiHcCCx%2B82UmOC0XsmTTn3n%2B6S3Lmp8Du9vmxnoKQNcxE%2F7Fb2%2BsnTsxaDuJbhNsBDcuGfl1oIHINWvFBcB9Pv%2BDOSgac8R5u6RwcmQFg5jVoaMJV1im4OCQwr33tl8f8Uoxawa4fT6QL%2BblJjtyUOuKR7%2BAXn8LeNfWn6W9yg%2BC0auQKBjJPGgOp1brMYrXz2m4edvtl5ivzWlVopumGqD%2F9FytnNxfw8GvlzpaO26Z0lufOci%2FAkIsxaFLRdlAZg3H3ya4SlU9MyYejyv8lqmcETd7cO1J0V9Rhz0Fs%2Fk%2BRJrWeLNq1k7AvVYU9scpzCFrUkiGX1J9TEGbG9eRuYiXMM4%2F0felMMkCaY7n4dZDspkWZ35eDR%2B4u0zcx8pef25aC5JgiNwmcRMXX7C2vdsAZuKJc%2BLVzzgMHxfHkczbp6izUlcIxHVjLc49eTkd9sopbDmAiC4fT%2Bl%2FT%2BkQ%2BZbwxwvSIRBBrZRAz8tFFceMiPmIRDGJkW8toP%2F%2Fph3EDBl6idtSHPV7amvbtCAWDEIseXQi54gXJa4AcJxbih5giJ4fwFuzOE9MUjQDAB%2B4YkQOdK%2FeyhZXWrbDcPrDYVftCvxg%2F2sVMLeIo70GOqUBoCqiqSMDkkslbg5LLQ4n7LHcvXIXXORbeseLOlGugRp%2F3X%2BMh2%2B57jyd%2BYeedZE2upI8dnr5XpQ9So9I9shgKVNDGEuGSF8%2BpXZ5h4KZO0Q1ky5furfM0xoCpAKIEMGTRjetOMncvz4YStbvxLVz5%2FdxPPaiem5c%2BPJ63bg5AlwpKONcOnRmqFTQjWv8U7r9WtUezTFqvWJJQwTKR9p9qZ6VvCWZ&X-Amz-Signature=591b9479fbe76ca75239abc97050ba2a53f8f01039baf6b49a7c7db5f13e456e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ERYMDB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpm7aKhkk3ffzU9PijbKnF3A%2FBULHzpnDKH%2FDbMYYP5AiA84fmPe8n6PYKAzEL8GN1Yxjb5ykuCSCqFMXnkh2TKoSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS8YDppxqfmrByyC%2FKtwD%2FytNMOpfOVyB0xcRnZGrs80z7uWdVmxLyKt9QI2lc7kKCm20XekbTrICqjyXzTBhDoM%2BzWKUTO5V3XusyAKbhzYjNrsGgNbdTnH1sQvhUM73KcozVM%2F8IQDvgZJhWi42QngK%2FzmcZUT5nU92VdLxDyrtl%2BWQYKepTfLdLuMZiMancK7AYqw8OQVnI%2Fi6VkHo6nWnjYScYDrhnBMv8YRPznbfsfENjjBGv1zOqnoWgcly4235XHWy06ZyDednIZ4vWfxoLeZXpT2bjagNgEc2I0RSUQPPc8AyaK7Uusz6yuFpwpJZDepDONJhqFjnqUnVwevRAffNU5CmkODDqEjmTTux%2BITQVduhggeffnGpXRXd%2BWnpaZE9UVOf836QQI%2F%2BnqB2uK6PG3Q1qJ9PTJrReDGIZqidDhk96jCQF2Imz6VtPgHxMyV%2FLRtyfwlY9wTer29ooFK78dydEecOTBjVLvQY3QUrbOx38cFalJma8wmStKM0LwE84HNIUUNybOXh5kNxYQ5iUoiypR%2BxmQ9zW3H7S351He%2FZ5wL4itK68FgF4%2B5eCqvKZC88SvNgkdvF1v80fKL2CJlDNvtdfxF4cJjVJeeX93mgWRnqJtU1kl9dP6PjYDtIt%2BBgsRUwhoqjvQY6pgGERqNdyPYsEOokc7%2Fa62tSqri66tg3aatViuCC8qjTjhiAunvG1uKv5TQcdsu3Yo8YLtYeIi5d%2FkRAxxMLsLaTHC0po6TwtQ%2B6PFjAOlIe7HNB4gwy%2BMTdYJlLCmleDeMnNCn1i6obHa%2BhWiGlR7A6DI6g%2BDf9ausUPNSsfExxLLovEvHzZdeSfzuX5PQt%2Ft5UiE6pqz7aPefgyprdvLWoYiHc0Xv0&X-Amz-Signature=23690ac576e429c601606387738634a57d914fc1b16cd019a2ce03625c51a861&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGX5COEL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw3mrnb5wYMdor2oYJxFq08lk9I9apMFn5xZOXjS2VAAiBFGVooROAcidMhv8avHIn7HZztqKKv%2Blh6lykCHyN%2FsSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7Ivjw6cCfn2ptr7rKtwDhxaK0DFnCvgECIw%2F3gRERl2hLdYAZs0FKKSyBZ%2Fyb8UP%2BrBt%2BzQgMY04eC8EvZECN6d28JupEVstxWsdoRLD4qYNajAKTMZ5VPXRnxLHJSPD9UP3fCq%2F23f8H6oOvXpCvmZY3Z5lNP8tKgNV4Spoq7EA2Rl1Rz8a%2Fk%2BkY9GgVgPhu%2B7pCFABof6arDduYaEcPCwbdJD1WlU23EtZjkVlyMQQS7qdYdf9vGdx5gGNYX6Hpcq%2B93V85Wv8pTko9bQ4aXXMa4TCgEIb16RyoL6ZDEdAy6NFDywuVi7MLgwJMwXD1GsznRsqxkyTplZy1wKbU%2FRy6LAa9RFb0DZPAL2eDuhISqBmlwPO14tByOU6b3NQlKrzopYczRI4JyqoJdOZEeaAgUIWV4IJzT9NtHKp3ysi7drBD1So5RX45IV2jwmBahIT%2Bmi98IvRID3cptjomf3x6tl6BNOg9ldQr57vNjcmpKL1L%2B7PhFRBSgqpN1aKO4Zcm%2FTohhjLQU5KpvGQD4YqwfJutFFNMQGaUsyW8aJHdG4cX8kcliQVzIUNOK6XB2n0fOEO7qg2jWQfvvL801o8YwLW9MkzUFOX9t907d17d02jIZ%2BRzHiKavxuCQCFM9ZPj60NnWCaXGEw2oijvQY6pgH6Xp2tfXbyUYFT2lh1Z0A5sqBzc%2F267NzjZTPMB6J9WIFhGiyU4MTZH6%2F3GNalONnED5zl9Xzb5iwDbAOZHXsggXCusZgUBVUScAOoZbJUi%2FQ3H2xPrRI%2FPi1nOrbeBT%2FCdzVywwXK6RO6%2FecslZ2yh3UvY5IZxo4USubP9HprmRrBHygnLeKOmS0xdkrxE%2Fo55Gf2%2FAFDdQgxOFNbuori1m5v%2F466&X-Amz-Signature=a9fb2a9e08b8a28e25c5169e8c40b79ee0e0b7fce1c0fbf703a6f92ebe58455c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2EYK3I4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjXPGMQ6fiOpvGeghnxJT6hl1zgWvV%2F2CE4kXuvc7DhAiEAmCHxGlHBaEUeUMUDP2xfkBXl67Qp2uIDhcCU0uOMvioqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDR4gI44H%2BK69vioyrcA8clt9j%2Fx5jzbby4MnrCB21ykcL7qiHcCCx%2B82UmOC0XsmTTn3n%2B6S3Lmp8Du9vmxnoKQNcxE%2F7Fb2%2BsnTsxaDuJbhNsBDcuGfl1oIHINWvFBcB9Pv%2BDOSgac8R5u6RwcmQFg5jVoaMJV1im4OCQwr33tl8f8Uoxawa4fT6QL%2BblJjtyUOuKR7%2BAXn8LeNfWn6W9yg%2BC0auQKBjJPGgOp1brMYrXz2m4edvtl5ivzWlVopumGqD%2F9FytnNxfw8GvlzpaO26Z0lufOci%2FAkIsxaFLRdlAZg3H3ya4SlU9MyYejyv8lqmcETd7cO1J0V9Rhz0Fs%2Fk%2BRJrWeLNq1k7AvVYU9scpzCFrUkiGX1J9TEGbG9eRuYiXMM4%2F0felMMkCaY7n4dZDspkWZ35eDR%2B4u0zcx8pef25aC5JgiNwmcRMXX7C2vdsAZuKJc%2BLVzzgMHxfHkczbp6izUlcIxHVjLc49eTkd9sopbDmAiC4fT%2Bl%2FT%2BkQ%2BZbwxwvSIRBBrZRAz8tFFceMiPmIRDGJkW8toP%2F%2Fph3EDBl6idtSHPV7amvbtCAWDEIseXQi54gXJa4AcJxbih5giJ4fwFuzOE9MUjQDAB%2B4YkQOdK%2FeyhZXWrbDcPrDYVftCvxg%2F2sVMLeIo70GOqUBoCqiqSMDkkslbg5LLQ4n7LHcvXIXXORbeseLOlGugRp%2F3X%2BMh2%2B57jyd%2BYeedZE2upI8dnr5XpQ9So9I9shgKVNDGEuGSF8%2BpXZ5h4KZO0Q1ky5furfM0xoCpAKIEMGTRjetOMncvz4YStbvxLVz5%2FdxPPaiem5c%2BPJ63bg5AlwpKONcOnRmqFTQjWv8U7r9WtUezTFqvWJJQwTKR9p9qZ6VvCWZ&X-Amz-Signature=51eb22c19696d5d0f8077c169871b3f258b52633f46fbe8ae2485824517a8d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
