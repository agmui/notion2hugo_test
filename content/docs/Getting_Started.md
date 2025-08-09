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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P7RSKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjRSA6a3fbmVyhUmbJyf0g1mD5yP1RNaAWR7znhSJPQIgJZu8qyljmBfsAhbMuIj%2BYMZwZB6jiwCQunpxOOP56foqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlXWjvMFs1ExNpnmCrcA9PHUT0yXYm3pX%2B%2B4VHQZno4grfUsJsKAQnadkuZOQw4euS%2FgNQ0j%2FyLIoqhJywrYhCnP6%2F0FGrRfXaouB5wTs5AbvQCjK07%2Bcjxcb7zYYjBDB%2BThdVs0EfIX6dyA1YbLnu6HZowWlxj9nr2U6ymqa8M4Z7X7AHLMhw02Ae1CBj%2B9IB%2B8bxSfSX6CwU5GkODKBtvRQK27QyiovIPejTji8XXw6mGX64xh4hYw0YFSilhqd3gdQzW4QyTBspq9O7oJahLS%2B%2FiZHnjNZUEMZqZh%2F6NL5ncmVWK6UTf2fS1ZxIHvyb9DTWhqT66NKfAai%2FEruXqMU0zZdqEYgf2x5drT4d%2FN4%2BynoqNfY%2BHGGVadWzMYdm%2Fvtg%2BENYkkOBE8730%2F2bT%2F1PxsaA8XpnyFU%2FWuzkRiNGHFzJ1Mkre8WhG7MxXgAUzKDSnCZ5MrAARANRuPn8wcKHV7Bna2KsOdhBslzWX8k81SfiLQ%2BioC17lgRE%2F1FNDzdZIy59JFpC7Vk4rvIabVcHEU9NvSsLPrIkFK1jrLGvbEMui%2BVihBGgQTYNBWmJjJnn0KJoTMKlrTIEvHx12y3G%2FaijDeuRI1P4MPBhzAJvR9qk34rTf1lJL1wkq3cbeJr3MPSH2MHSCMLDf3MQGOqUBDAuXtkZ3UfpEqmb30rXdpvPYYz1aIhtP%2F4BSgdaRfKnI0gwEMoJT0wx6jW%2F%2F9IeM9OshjRa%2BQq2g7aLsVXmsdFnyhD0BhdqjkhEA67WSuRDl7BxvDCE%2BKtHQQnBYHPrxBak%2BrE3Qsp42wXxof4xV10Zk9PTOif1K9sjX1H%2F%2FVYkCmk4Rka4NqFf8Mrp1DmrMuIFhl15XaLmQ4TdblVmuau8yGEXp&X-Amz-Signature=127d3f94a9c5a07a38bcfec92de6097a6146b52b7889e7444531d2ed6a70f51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P7RSKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjRSA6a3fbmVyhUmbJyf0g1mD5yP1RNaAWR7znhSJPQIgJZu8qyljmBfsAhbMuIj%2BYMZwZB6jiwCQunpxOOP56foqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlXWjvMFs1ExNpnmCrcA9PHUT0yXYm3pX%2B%2B4VHQZno4grfUsJsKAQnadkuZOQw4euS%2FgNQ0j%2FyLIoqhJywrYhCnP6%2F0FGrRfXaouB5wTs5AbvQCjK07%2Bcjxcb7zYYjBDB%2BThdVs0EfIX6dyA1YbLnu6HZowWlxj9nr2U6ymqa8M4Z7X7AHLMhw02Ae1CBj%2B9IB%2B8bxSfSX6CwU5GkODKBtvRQK27QyiovIPejTji8XXw6mGX64xh4hYw0YFSilhqd3gdQzW4QyTBspq9O7oJahLS%2B%2FiZHnjNZUEMZqZh%2F6NL5ncmVWK6UTf2fS1ZxIHvyb9DTWhqT66NKfAai%2FEruXqMU0zZdqEYgf2x5drT4d%2FN4%2BynoqNfY%2BHGGVadWzMYdm%2Fvtg%2BENYkkOBE8730%2F2bT%2F1PxsaA8XpnyFU%2FWuzkRiNGHFzJ1Mkre8WhG7MxXgAUzKDSnCZ5MrAARANRuPn8wcKHV7Bna2KsOdhBslzWX8k81SfiLQ%2BioC17lgRE%2F1FNDzdZIy59JFpC7Vk4rvIabVcHEU9NvSsLPrIkFK1jrLGvbEMui%2BVihBGgQTYNBWmJjJnn0KJoTMKlrTIEvHx12y3G%2FaijDeuRI1P4MPBhzAJvR9qk34rTf1lJL1wkq3cbeJr3MPSH2MHSCMLDf3MQGOqUBDAuXtkZ3UfpEqmb30rXdpvPYYz1aIhtP%2F4BSgdaRfKnI0gwEMoJT0wx6jW%2F%2F9IeM9OshjRa%2BQq2g7aLsVXmsdFnyhD0BhdqjkhEA67WSuRDl7BxvDCE%2BKtHQQnBYHPrxBak%2BrE3Qsp42wXxof4xV10Zk9PTOif1K9sjX1H%2F%2FVYkCmk4Rka4NqFf8Mrp1DmrMuIFhl15XaLmQ4TdblVmuau8yGEXp&X-Amz-Signature=2e6f996c3c5cdbc3ab434c250583d89bcd4c66ce5a0c051ff0b36bb1da42c0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P7RSKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjRSA6a3fbmVyhUmbJyf0g1mD5yP1RNaAWR7znhSJPQIgJZu8qyljmBfsAhbMuIj%2BYMZwZB6jiwCQunpxOOP56foqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlXWjvMFs1ExNpnmCrcA9PHUT0yXYm3pX%2B%2B4VHQZno4grfUsJsKAQnadkuZOQw4euS%2FgNQ0j%2FyLIoqhJywrYhCnP6%2F0FGrRfXaouB5wTs5AbvQCjK07%2Bcjxcb7zYYjBDB%2BThdVs0EfIX6dyA1YbLnu6HZowWlxj9nr2U6ymqa8M4Z7X7AHLMhw02Ae1CBj%2B9IB%2B8bxSfSX6CwU5GkODKBtvRQK27QyiovIPejTji8XXw6mGX64xh4hYw0YFSilhqd3gdQzW4QyTBspq9O7oJahLS%2B%2FiZHnjNZUEMZqZh%2F6NL5ncmVWK6UTf2fS1ZxIHvyb9DTWhqT66NKfAai%2FEruXqMU0zZdqEYgf2x5drT4d%2FN4%2BynoqNfY%2BHGGVadWzMYdm%2Fvtg%2BENYkkOBE8730%2F2bT%2F1PxsaA8XpnyFU%2FWuzkRiNGHFzJ1Mkre8WhG7MxXgAUzKDSnCZ5MrAARANRuPn8wcKHV7Bna2KsOdhBslzWX8k81SfiLQ%2BioC17lgRE%2F1FNDzdZIy59JFpC7Vk4rvIabVcHEU9NvSsLPrIkFK1jrLGvbEMui%2BVihBGgQTYNBWmJjJnn0KJoTMKlrTIEvHx12y3G%2FaijDeuRI1P4MPBhzAJvR9qk34rTf1lJL1wkq3cbeJr3MPSH2MHSCMLDf3MQGOqUBDAuXtkZ3UfpEqmb30rXdpvPYYz1aIhtP%2F4BSgdaRfKnI0gwEMoJT0wx6jW%2F%2F9IeM9OshjRa%2BQq2g7aLsVXmsdFnyhD0BhdqjkhEA67WSuRDl7BxvDCE%2BKtHQQnBYHPrxBak%2BrE3Qsp42wXxof4xV10Zk9PTOif1K9sjX1H%2F%2FVYkCmk4Rka4NqFf8Mrp1DmrMuIFhl15XaLmQ4TdblVmuau8yGEXp&X-Amz-Signature=895ae42a017dbd396b55e3a51fba461afe80f5776fa067a260a56dfadfaeb077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CV5PIEE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFJRkO8L5sFT%2Fpu0uFOMoQLfY64EPwbqTwY%2FtiU2GVQAIhAMT8Hb%2FZwL2fz8sD49vciU8fAsNpp5KbZ3iYm0gSfAZMKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJC4qswf4h2mIiuBgq3ANMpVtRJ2UaJMTs09PtjxDmpJV6DW31pS7kVyHnsMfeFLYrFliu9lLYnfnSSNQmGYAMUlS91c3M5%2FRZLe%2BetXAQ1sTKO7a3YUKUGCqTxtjaJTBKUsZXdN9oRnoOBYsFR0qUygWIIbLW1QktxS8VXLsBJjGJ52d5sKKGVNPgL%2FoM9tiW0pcQptUho6BtKZSFpe6lFXzTWELrL9XDtvUnoyiFyts8brxs8mEs5fFFaVwDITdlQDFbUFyT2wvJJ7ZaYmtNZd898LmI8s5FfoDXkhj2aiGAkNXqJFTUSYCr8S53FnH2whFFDvJxajDSMr6AD4WY%2BXo7sf1pTabkjQnt3NZrwHC9OO7TXJAERE%2FoXO2w6bVd%2FRQbFZQnolEpA0M5PEY1XWljLzZKQpkgMbMS6Gk6eixmU15EyqjjQMwXYiwxIWHpnwGx0fIw%2BNVOKhmR2Rvg8K6JA8jsdhz%2BrgwSJkedNfHXR6Tb3AGE8xr%2F8MWF6Ymo8lngNHUGJQTB6kIFokQO0X7LWcAY9HpZPZ5h4mA1tYdNdyQWWX%2FgFyfpwOU%2F318BAZYMU1GeK4gE7i6xS6HJP0pY2jWucDoaUN%2FrjQtnpviYj%2BrvXw7nCooZ5bpBT36yEzEtlez%2Bd8u2BjCF6NzEBjqkAS3wNorb8XQdXNeUBghow8PBRE043vYNcqRvIXV6vhS7xj%2F0cEoxzjpB5iO%2Fb39Qtp5UlrsyVQo59XdLiNxbmodP7YrstamIg4Xa6n0PrFACZmaMJFS2hf8vs3M57cUHmrom5xeKqBLw9U6FcvjaeS1139tEcrnw5y0jftNrDSCOnAiVnrAqeKf05jA%2Fs097oxQ0wmFKzAT06dFzU2R6VWB3jHT3&X-Amz-Signature=2d281e34255aebf50f1a06e775a27fd898d5aea9c1313864c3251fa5f17156dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6P452OM%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVtc8pgkp006tj9eMVZSXm%2BAjkHxIylZTCvY7QS6lTAwIgDRKZRiqklDkanMKvKNofyNfImjgIZvTUfBDZ7yRXyt8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3Z40BFfhbiAk9kgircA2eJQKfoIzvuBqGCzE%2FJAfH8dhWybe%2BBn67kbZa4c422DwnLSy9jJshwBpxarTr6SutAgtLHMIs89pOnvMPN6jsxPwppwsurzxyO1W1XWeRP%2F1MBtZfPc8cpbOlCmBSTBc5lNkFBOJSuZXG61o%2B5Xuq4fp7Z74tgh2dqWypIPi2ttoxLzpi1WSm7Kw5qCHHEkviYuCarS6eLTXloB6dZxPfoq0GGhRIhg6tzdAxSMEfw32iw43ZMPdj9hYIQtS70BcjGfORoidBPxYAMHJsWcdvLTA34in9u8Spz9p1VMSsTfp7S6dy8HwQGu7pXN4mgc3xjVtehHFI7KBpK48Xe9zU8LLY4jv6MK9ovFCYAKAlenqHMEkOkQaM13Q3nEV7JeULIJtRLWuJ0IJO1i3NM1%2BqP63b%2BN%2BcuE4mwz1fb%2B2md2vnvYI17K%2Fup44d19APMQOe52g0koSO%2BnQQxkBru1Mz6Jzu8dmFAjc1dzIoqmBVHLEHtrKTsbb1re889jZeG5NdvshIBLtESY025fKYmYsEvNvn4QXgZLj3Nxtopd5yitfsoVJe0HEvTRvIT7XuYDmAUnRulibMF3oMqayJ0E%2BeYS8C80sAn4LknsnLvlDTeNfeIL%2B3iaLM5xTyeMJbj3MQGOqUBvxV2GJ8d0O93YtcmaqglT1Empo4eecaHoYhSia8KbliZE2ipaN2%2FVyZ3OiLWoBPcHswiyW31dkV4pVoLu74eVuNcca6ykGe3H9wrkZUgUJ2V5kQo7HvgkazIg8SrSztBmC8oMSoaHEbuUEwYwZCEfMK5WrOiMk8zFDtuEp3jOgLZ3ks%2Fcs7fE4KnwN%2FDp3nosSVv8stgqa%2B9kF%2BYEw0yUSVqNg5Q&X-Amz-Signature=460edbba146dbace1a6f32cb514165431c349ef7de6694ffb9e037d2c887ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657P7RSKJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJjRSA6a3fbmVyhUmbJyf0g1mD5yP1RNaAWR7znhSJPQIgJZu8qyljmBfsAhbMuIj%2BYMZwZB6jiwCQunpxOOP56foqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlXWjvMFs1ExNpnmCrcA9PHUT0yXYm3pX%2B%2B4VHQZno4grfUsJsKAQnadkuZOQw4euS%2FgNQ0j%2FyLIoqhJywrYhCnP6%2F0FGrRfXaouB5wTs5AbvQCjK07%2Bcjxcb7zYYjBDB%2BThdVs0EfIX6dyA1YbLnu6HZowWlxj9nr2U6ymqa8M4Z7X7AHLMhw02Ae1CBj%2B9IB%2B8bxSfSX6CwU5GkODKBtvRQK27QyiovIPejTji8XXw6mGX64xh4hYw0YFSilhqd3gdQzW4QyTBspq9O7oJahLS%2B%2FiZHnjNZUEMZqZh%2F6NL5ncmVWK6UTf2fS1ZxIHvyb9DTWhqT66NKfAai%2FEruXqMU0zZdqEYgf2x5drT4d%2FN4%2BynoqNfY%2BHGGVadWzMYdm%2Fvtg%2BENYkkOBE8730%2F2bT%2F1PxsaA8XpnyFU%2FWuzkRiNGHFzJ1Mkre8WhG7MxXgAUzKDSnCZ5MrAARANRuPn8wcKHV7Bna2KsOdhBslzWX8k81SfiLQ%2BioC17lgRE%2F1FNDzdZIy59JFpC7Vk4rvIabVcHEU9NvSsLPrIkFK1jrLGvbEMui%2BVihBGgQTYNBWmJjJnn0KJoTMKlrTIEvHx12y3G%2FaijDeuRI1P4MPBhzAJvR9qk34rTf1lJL1wkq3cbeJr3MPSH2MHSCMLDf3MQGOqUBDAuXtkZ3UfpEqmb30rXdpvPYYz1aIhtP%2F4BSgdaRfKnI0gwEMoJT0wx6jW%2F%2F9IeM9OshjRa%2BQq2g7aLsVXmsdFnyhD0BhdqjkhEA67WSuRDl7BxvDCE%2BKtHQQnBYHPrxBak%2BrE3Qsp42wXxof4xV10Zk9PTOif1K9sjX1H%2F%2FVYkCmk4Rka4NqFf8Mrp1DmrMuIFhl15XaLmQ4TdblVmuau8yGEXp&X-Amz-Signature=f8a23e477a50935f1d9b045ba498f4ec0dee3e9358af295924f61987253eae16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
