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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SCTQ4Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDdhC4FsU6Gpd2PNez6oKIYrTzKpgj2%2BEqL92CHPpTJYAiEAvIYB2gJoGGUOGP0xKPg9%2BJ6mMgkFTmRu0X2Ma3N95zgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0dZUe0pBLdSHlUayrcA8hyIQtAcN33eGBT%2B3%2BxOwi8rnrDeV%2Bm9BsMrkBcmmI4I%2BqHhsQEuaArk4uoXutE0E5mj1cBYkQGsWb%2FdzLRjX20oUluviCPeCeNe%2FjWuF7yrtTzpjs9VmGlr%2BfkEquqQBgoT5Aq7VQQqKuqwjkVhfuECBQMyM%2BWxlQnYim8w40pz7MX%2F6B3fjYmmPkaXRZgc4pjZRbxBRIIaTV69oinpRFuBDkJCWpBk06nQi0od27yYsHrKg8LjqmN0kwt8mTrobRfJiLwgvxZfLKGyFXs35zVnyfVXf7PeTKcetGtc8zFrDYNCLElJoTJHwTl4IIhvFvqSHKSFHjAE78xDpJwsQZwBGwTvNSFJ7p0diz%2BfZN6aFac6yvWjDrAdjDkJhP3axfU0Q3BqYPI7jYULlrcCDxZUXIcx5TVXl2YHQ6celyUsQyiPcRv9Tk%2FXwOjBB9gndCvJclX3f5S9%2BRvfSNX7Nsskhh13QcDoKlVvLL7nmAUzPh6gjs3mmxv3Nqbpvwm8njQriqcrzemXcBxlyrnEC%2FgnOaLPyBd%2FVfqZJKiPkT7j7ti2oJhY2cxgsnvXMVS4O2pQ6Gbjzx7la73HXnux573MprZq%2BGcTKyO6I%2B3zLFpSIPT%2FyOSHQfs5dAkMIan4sIGOqUBv1HawCavojjgNJ8keexoazP%2FbGSEBJcotfWqlQhufwgK%2BFmLhXMXJQ9GlbNKc1s0aCY4XgI8HZbNXWPZM7qC0XXDCqHG2P7iysXxf8qEke%2BFWvUAQh81NdoGXZU8tlKydVZrLc69zIcVzGFme7X%2BzIhqdEHFbTxs6PgPEvz5Ph8iRrh17Ou7rTybgtxqIiBMOfwmnNwcuKuvxjzepU8w9Tiq116d&X-Amz-Signature=2b51884878542b916b791eb07ca21a70f94f004d5df0ae15f7e45c6f5916daf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SCTQ4Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDdhC4FsU6Gpd2PNez6oKIYrTzKpgj2%2BEqL92CHPpTJYAiEAvIYB2gJoGGUOGP0xKPg9%2BJ6mMgkFTmRu0X2Ma3N95zgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0dZUe0pBLdSHlUayrcA8hyIQtAcN33eGBT%2B3%2BxOwi8rnrDeV%2Bm9BsMrkBcmmI4I%2BqHhsQEuaArk4uoXutE0E5mj1cBYkQGsWb%2FdzLRjX20oUluviCPeCeNe%2FjWuF7yrtTzpjs9VmGlr%2BfkEquqQBgoT5Aq7VQQqKuqwjkVhfuECBQMyM%2BWxlQnYim8w40pz7MX%2F6B3fjYmmPkaXRZgc4pjZRbxBRIIaTV69oinpRFuBDkJCWpBk06nQi0od27yYsHrKg8LjqmN0kwt8mTrobRfJiLwgvxZfLKGyFXs35zVnyfVXf7PeTKcetGtc8zFrDYNCLElJoTJHwTl4IIhvFvqSHKSFHjAE78xDpJwsQZwBGwTvNSFJ7p0diz%2BfZN6aFac6yvWjDrAdjDkJhP3axfU0Q3BqYPI7jYULlrcCDxZUXIcx5TVXl2YHQ6celyUsQyiPcRv9Tk%2FXwOjBB9gndCvJclX3f5S9%2BRvfSNX7Nsskhh13QcDoKlVvLL7nmAUzPh6gjs3mmxv3Nqbpvwm8njQriqcrzemXcBxlyrnEC%2FgnOaLPyBd%2FVfqZJKiPkT7j7ti2oJhY2cxgsnvXMVS4O2pQ6Gbjzx7la73HXnux573MprZq%2BGcTKyO6I%2B3zLFpSIPT%2FyOSHQfs5dAkMIan4sIGOqUBv1HawCavojjgNJ8keexoazP%2FbGSEBJcotfWqlQhufwgK%2BFmLhXMXJQ9GlbNKc1s0aCY4XgI8HZbNXWPZM7qC0XXDCqHG2P7iysXxf8qEke%2BFWvUAQh81NdoGXZU8tlKydVZrLc69zIcVzGFme7X%2BzIhqdEHFbTxs6PgPEvz5Ph8iRrh17Ou7rTybgtxqIiBMOfwmnNwcuKuvxjzepU8w9Tiq116d&X-Amz-Signature=6203b8db5933d22b0efaf6cadcf546594f73591e58eb334da966f778f422aa1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SCTQ4Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDdhC4FsU6Gpd2PNez6oKIYrTzKpgj2%2BEqL92CHPpTJYAiEAvIYB2gJoGGUOGP0xKPg9%2BJ6mMgkFTmRu0X2Ma3N95zgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0dZUe0pBLdSHlUayrcA8hyIQtAcN33eGBT%2B3%2BxOwi8rnrDeV%2Bm9BsMrkBcmmI4I%2BqHhsQEuaArk4uoXutE0E5mj1cBYkQGsWb%2FdzLRjX20oUluviCPeCeNe%2FjWuF7yrtTzpjs9VmGlr%2BfkEquqQBgoT5Aq7VQQqKuqwjkVhfuECBQMyM%2BWxlQnYim8w40pz7MX%2F6B3fjYmmPkaXRZgc4pjZRbxBRIIaTV69oinpRFuBDkJCWpBk06nQi0od27yYsHrKg8LjqmN0kwt8mTrobRfJiLwgvxZfLKGyFXs35zVnyfVXf7PeTKcetGtc8zFrDYNCLElJoTJHwTl4IIhvFvqSHKSFHjAE78xDpJwsQZwBGwTvNSFJ7p0diz%2BfZN6aFac6yvWjDrAdjDkJhP3axfU0Q3BqYPI7jYULlrcCDxZUXIcx5TVXl2YHQ6celyUsQyiPcRv9Tk%2FXwOjBB9gndCvJclX3f5S9%2BRvfSNX7Nsskhh13QcDoKlVvLL7nmAUzPh6gjs3mmxv3Nqbpvwm8njQriqcrzemXcBxlyrnEC%2FgnOaLPyBd%2FVfqZJKiPkT7j7ti2oJhY2cxgsnvXMVS4O2pQ6Gbjzx7la73HXnux573MprZq%2BGcTKyO6I%2B3zLFpSIPT%2FyOSHQfs5dAkMIan4sIGOqUBv1HawCavojjgNJ8keexoazP%2FbGSEBJcotfWqlQhufwgK%2BFmLhXMXJQ9GlbNKc1s0aCY4XgI8HZbNXWPZM7qC0XXDCqHG2P7iysXxf8qEke%2BFWvUAQh81NdoGXZU8tlKydVZrLc69zIcVzGFme7X%2BzIhqdEHFbTxs6PgPEvz5Ph8iRrh17Ou7rTybgtxqIiBMOfwmnNwcuKuvxjzepU8w9Tiq116d&X-Amz-Signature=86a65ed879529ef45197510487fe230f3e97f004575c7c6b430fec98fd8a2ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBGFDDR%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCIDpVJZxlqSvs7jL0oVHHaZSqBNqnEou4hiblNHl3xxQIhANEI%2BIORMHJh23nBI99FrMWRJNoO7xE6eOBH7FdPWeowKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAnqdw%2Fx2eMqOpVacq3AN1wohdSb8g0aCDQ56ItpUPiT1Auo%2BtOqEXjuzYRIz9hneL%2Bd0tjnRYsTwla0PziIgYX5Jl4y5Wsdx0ROCduqlFf9X9fyfpvwwA9BBmfPb18pZWQ%2BBr%2B7s01QLhXxIiWJgJ5lxqqm7hyqWwUG6htVz6UWR6D5nQ7X9LvJ7UqShtcbGgxPTaJFg6A52d4gGsVCKQSLbdt4dLjjVstceENR4yFl9Vin5p0l8g%2FdopAKvGA%2BQJcvi%2FpuXKSNLiaN9%2BdGpMtO3SxwjBuGFfVqIzIEgVZlVK7qlk4XE9mPvNiICLTL1e7BtqgXMWRPPfd6kezxdXu%2F1BJW1iWMkSyX%2FLo6SGXFu6BSC0L8kTjcdUQfY5r4D3bfG16%2BWYYLrCxnrbJMp00NFsquygywbT1RP3qo75hlw5seaifhhKZ8GUfyrQbwwUK5%2BxlEoy03vwPQi98S%2Bpv7ZXQ%2F4J5v2FHoIONyeKysqm0gdM8WIbWbySmyURzYFWYkK5RT2YV4eJg7IOvPir3%2BNqJJ5kHYFctvJmCo2duBN3FLJcBiXxeaeBnJ%2BiPIlW4VV8vGhaBseln9b4uClkShRAdz3gW21YIaNmUQdQJhTZQ5Dwn6mKY7B4Io5S2y5KKaf7qYrmSNQSUzCNhuPCBjqkAbNTKqGXxeY8M4w3pVPD0dxTbM3KblMeR8XjqBsIfgEmVM6xqJFimcuXR6wd4jzlbvC%2BWWv0ilKwAX0ay4dl3x8ksUE%2BbxQyeUuInpcEq9pYNoSiOo7X9qUIW9NaivYdYhyXAc1woudyRBaRgBXQ6Mxgr6Iln2RNzS1SYycUoPDedIk%2BwZ47ce0R7VuY8stTcKywxPQv8gTVa%2FJhDweMOkraQNjo&X-Amz-Signature=e478348aaed152c2389ff087dc688d1aa85c3dd3c3d8667bd69f24c09a372e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4XTLKRD%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDN6p4am%2F2JzJc1VnAxR0X%2FiCISL%2BAAGKV0XYZ11gG0EAiEAn7ygxORNG%2F8cCMKwcQazuKCjgv8avypVQPGNtezLiykqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD592tXmEbxE72aiNSrcA3TRSzHGK6q%2BtZ6XEHSHsFuDnFglbhpHuFmO0NJ%2B610CEdX3CO62JnkNJD8isTMwlKkwDQFxYi3%2F76F9OvLKGbaRI8swEpd4nxowEycF4ouSaXBg3Tm4plb2NzxlriTBSLJ0ECzz5Y2atbjGfQRPUFCGHJZRFL%2Fa80XYHHlkphvm9EPS6KSV2tdr2mS%2B19mNfzY7VRAYFI0BmeyEcjXq8PEF6tm1c%2BDECzsk3865UziUxW2Ly5gtz7jFwPVdCAN4wgl7lOYb0vmmaIdp0ZYqVTA1oiory84dyzHvQgE3VjB2ZEczbig8SQx0DEDNUSu1VHvmyZZULkuUWDtDphF5eFkcXK4vePdfpbMmsmLn%2FwUwR%2FKVuHlcJ9zKGHaFec7%2FLy7nfL0CZS%2BVD4EumxoYacCYyZ1MyxqRE4lVDKYaH%2BMz6wPMAoOEfvrvW%2BnP9Y6Bch7J8loqBZrqwwTPfI2tAkXJVfVoebNeO1CBvhDdc%2BcMszJJeJzThQvLyi0o3AOw3Zr1qQneghrVqTtiOeYE6AuQvY3JfHAfWMFvSH5ilWXCV6G1XlA0Hzj%2FetLl8cdNGqsS59EkGjb28FRehU9nmCcWiqJd%2FbtqIEkBRIj9tA7CERYh1QM%2BTaeW0hn9MNWM48IGOqUB2THjOZfFN%2B%2FJ5e23Metbsiotc2Usbx4CjZQa75Et0Edi4LFKf1d9mhboN9rMl%2BkRcW1EgUI6nIgFg3mUQHUZaDjECKPz4j3zP2QgkXIGZxHx5Ewb9%2FQ8KCRB0LwFUvySayD4RRFWruQ%2BAZJORFquzt0XGBIoW4K82SMtgM8l5a1NZHTm8HWTpL%2B96J411NbzQmTttOwEnR0V4wVXmKPOADcdco19&X-Amz-Signature=3c9153f9ccc62d2107cca8f62e1b9878851241c97efbd5b08d6dff23c15969cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SCTQ4Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDdhC4FsU6Gpd2PNez6oKIYrTzKpgj2%2BEqL92CHPpTJYAiEAvIYB2gJoGGUOGP0xKPg9%2BJ6mMgkFTmRu0X2Ma3N95zgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0dZUe0pBLdSHlUayrcA8hyIQtAcN33eGBT%2B3%2BxOwi8rnrDeV%2Bm9BsMrkBcmmI4I%2BqHhsQEuaArk4uoXutE0E5mj1cBYkQGsWb%2FdzLRjX20oUluviCPeCeNe%2FjWuF7yrtTzpjs9VmGlr%2BfkEquqQBgoT5Aq7VQQqKuqwjkVhfuECBQMyM%2BWxlQnYim8w40pz7MX%2F6B3fjYmmPkaXRZgc4pjZRbxBRIIaTV69oinpRFuBDkJCWpBk06nQi0od27yYsHrKg8LjqmN0kwt8mTrobRfJiLwgvxZfLKGyFXs35zVnyfVXf7PeTKcetGtc8zFrDYNCLElJoTJHwTl4IIhvFvqSHKSFHjAE78xDpJwsQZwBGwTvNSFJ7p0diz%2BfZN6aFac6yvWjDrAdjDkJhP3axfU0Q3BqYPI7jYULlrcCDxZUXIcx5TVXl2YHQ6celyUsQyiPcRv9Tk%2FXwOjBB9gndCvJclX3f5S9%2BRvfSNX7Nsskhh13QcDoKlVvLL7nmAUzPh6gjs3mmxv3Nqbpvwm8njQriqcrzemXcBxlyrnEC%2FgnOaLPyBd%2FVfqZJKiPkT7j7ti2oJhY2cxgsnvXMVS4O2pQ6Gbjzx7la73HXnux573MprZq%2BGcTKyO6I%2B3zLFpSIPT%2FyOSHQfs5dAkMIan4sIGOqUBv1HawCavojjgNJ8keexoazP%2FbGSEBJcotfWqlQhufwgK%2BFmLhXMXJQ9GlbNKc1s0aCY4XgI8HZbNXWPZM7qC0XXDCqHG2P7iysXxf8qEke%2BFWvUAQh81NdoGXZU8tlKydVZrLc69zIcVzGFme7X%2BzIhqdEHFbTxs6PgPEvz5Ph8iRrh17Ou7rTybgtxqIiBMOfwmnNwcuKuvxjzepU8w9Tiq116d&X-Amz-Signature=65743d102e43a5193e9ff26e2d871cfcd7d6fc72b93bfaba1bbe2b677b100237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
