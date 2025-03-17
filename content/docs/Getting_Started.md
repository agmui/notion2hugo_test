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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLOS5KV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9vYOlhmt0mvNoAQ%2FOAGU%2Fv6yXBY3XeFFvzDMgqyuomgIhAL%2F9OaN%2FB57kQuruSAb1QPGJKR2fI%2FZzOlGHIhlFR80vKv8DCEQQABoMNjM3NDIzMTgzODA1IgyRsgVLamYitfDZOTUq3APFTMorBhCksnaaLkmE%2FaqFswYGH2kCahueJba29TjF5xBy%2Boifcbq6tAO6trj169Wz8H7sTkrbCACxT6k4Ux4iTcg5y%2BJQHLGOr%2FUJREgRf9SpVO6WFdSY4Y%2BR0g15r1P3m7DxS6yu9liR%2FFQiduOc1QDL1D1YaTVUwjIn4GvCNjp1rkzGz9vhOCSJJ61wKT6LRuzMLxR%2FB9gU3GCd2Bc2MJr%2BRcgT7hc61Cn5qGymWxvSLndXNuc9V%2Bf7K7zJndRdXY9SkHNfPwUa82vFFPlp6uAKMuhFxGjlE%2FMnGzWrnCHseqK6fe1ftFF64%2FxiJW9xbV1ZiEJ46EU8gYKBdcQVs75jvoXOHPgdV99O1vIoUJNKQdgJhu%2FUEtIY0IGmSy6bW9bRoVEZIEySwM4w2L0%2BtUA6xARAcFX%2FmeKkFuWj%2FWR3G3rBdEJ%2B%2BGjdNjHtvHvYbqWX3K74rN95jXyFh6eNlrth77izxBPLeubc0bEi5r0eqjFkn9cFVJuUNwFU8JTCqQ8%2FQKVytB2mOK%2FQxV0m9ymrjODO71G06sL3BTj0l0I5Ni2h4ifrcQ8IRKRPM6LXa1XwP%2FEaXRxOE8iWZlXIQIAzV5eCMEzpTNSLk7bqgKP9urs37qCX2VhUYjDSi%2BC%2BBjqkAfO3eeF6GGI074bz%2Fwc4%2Frb8d6Khtym%2FcTphCkVuZO9mHIKDdbIjY3eq3m6qXz2WcP0UwZMS0y4kSRnhX5mGqBlwUJ1NeJj6D2n%2FnB4VaknUIhGNYE0BrDwab9HEMqQcwXEQj7iEEKR3IJWYm9q8P0slC1JLJkTuqiEeCstJwp4oprC4%2FM%2B%2BiAokiO3eBTXqL0Viqe%2F8M0D2OV9BcjTwl6jS0SWr&X-Amz-Signature=4a1c8fd911c1ea668c0721a057f3a0c5cfaeaf2468ed1910a6d60706656b5955&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLOS5KV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9vYOlhmt0mvNoAQ%2FOAGU%2Fv6yXBY3XeFFvzDMgqyuomgIhAL%2F9OaN%2FB57kQuruSAb1QPGJKR2fI%2FZzOlGHIhlFR80vKv8DCEQQABoMNjM3NDIzMTgzODA1IgyRsgVLamYitfDZOTUq3APFTMorBhCksnaaLkmE%2FaqFswYGH2kCahueJba29TjF5xBy%2Boifcbq6tAO6trj169Wz8H7sTkrbCACxT6k4Ux4iTcg5y%2BJQHLGOr%2FUJREgRf9SpVO6WFdSY4Y%2BR0g15r1P3m7DxS6yu9liR%2FFQiduOc1QDL1D1YaTVUwjIn4GvCNjp1rkzGz9vhOCSJJ61wKT6LRuzMLxR%2FB9gU3GCd2Bc2MJr%2BRcgT7hc61Cn5qGymWxvSLndXNuc9V%2Bf7K7zJndRdXY9SkHNfPwUa82vFFPlp6uAKMuhFxGjlE%2FMnGzWrnCHseqK6fe1ftFF64%2FxiJW9xbV1ZiEJ46EU8gYKBdcQVs75jvoXOHPgdV99O1vIoUJNKQdgJhu%2FUEtIY0IGmSy6bW9bRoVEZIEySwM4w2L0%2BtUA6xARAcFX%2FmeKkFuWj%2FWR3G3rBdEJ%2B%2BGjdNjHtvHvYbqWX3K74rN95jXyFh6eNlrth77izxBPLeubc0bEi5r0eqjFkn9cFVJuUNwFU8JTCqQ8%2FQKVytB2mOK%2FQxV0m9ymrjODO71G06sL3BTj0l0I5Ni2h4ifrcQ8IRKRPM6LXa1XwP%2FEaXRxOE8iWZlXIQIAzV5eCMEzpTNSLk7bqgKP9urs37qCX2VhUYjDSi%2BC%2BBjqkAfO3eeF6GGI074bz%2Fwc4%2Frb8d6Khtym%2FcTphCkVuZO9mHIKDdbIjY3eq3m6qXz2WcP0UwZMS0y4kSRnhX5mGqBlwUJ1NeJj6D2n%2FnB4VaknUIhGNYE0BrDwab9HEMqQcwXEQj7iEEKR3IJWYm9q8P0slC1JLJkTuqiEeCstJwp4oprC4%2FM%2B%2BiAokiO3eBTXqL0Viqe%2F8M0D2OV9BcjTwl6jS0SWr&X-Amz-Signature=b93a8b0a395ae112e412349f3e608aae1c9272f7520f562ed22c83ac9bfc1dec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYPFU4AC%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ2ZigKGPEe%2BmMU4Clv9fzI4zPazJ0jAIUzUSLjTHrzgIgQF4QyjxHyr6mr%2FEG2YnGddI9z3RJLO0%2BzsI2A5041Zsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDN9tsSQFqszkfEJMpircA2bsZZBsIdpdLouUliG9MNGoSNWS36NZfus%2BOHbYw9YeNBFisGK9qc%2FFE8OwPg8LdVabM0OUA78Pa1lOabIsQwqnIibw5hMlg%2BAyyyfh7vb%2FC%2B2SnQGczeQqRKJTG5Sfkcs6PY1UbUvJcpcXgCwCxRXBMfiVHD85GrggURjpFbgH%2B0oMGvBmPli7LQDAvz6JiK%2BviYAJs%2BCseL9KZST2bxeW3cmqDi3fr6yMgkuLSJ%2F%2F3WhZEUKBiSBb9Y1U7KQcKscWzQ3t7PE5pPGhnfD4dnSXiJGWMzBXomv0BeNWXjUho4RnqoBhA6dw5dg0fmtdGTfbYFRVDK%2BYSIMtWNhDG7YIHr1mtAOLAPTmY6iNaGz3E9pEGR2wE%2F5fzStu7NcZr%2Bkb0hpZkG16xtAfq2uc85GduURfjW2GcEGzU6BG0Hm0X0Ii6htNM91aKTJWgjwB644pkkgJromXxC89GsSUQtEE6rdQ%2F0O4pZi9jvkXqTynBV1IJoiMVVfLQJE1dwQhMlGWzVuWerUHR4z4V%2B3fDvFm00rR0cYLHvhETxJGnqel44o6ya2VYTQ9HQ11%2FuJk%2FOCH8HEYXfPo0OWwj20yjRfx5RlcNWLhnlSo6oWWWAz9YLXguH%2FjCCML2stdMMCL4L4GOqUBC0Ne%2BIzv3ymJakT%2BlsuGM0Yzmy2v%2BjYflViYYFwVFWdq7Qaa9EvR5U07Pe34zxqIfRcIc18uBCczByl0P9RUd8AQLynEvv%2BqdUqvaO9UkK%2By4V%2BjfN1F0MQ4eoI0qxRZY7SyCIxGEBaarlk9u%2BPSfyMjQlo2Pu9OIhethJ33CI2orXC%2BCTl%2FKkNrNmtUa19e%2B1lKR20N0oseO%2FGoGv6TUC1eljKv&X-Amz-Signature=e4898ae37942fdd154620118ced653383530751e32d6dae4d9ff16074dd2202d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWOK444%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd8KvPztHvxSaoMHnkk%2FqDctbmAOaWZE03UcQWsmD0cwIhAMjn14JDTSf6Vj%2BlPozycYCubP0dQXvFEB26tO6Cwj9NKv8DCEQQABoMNjM3NDIzMTgzODA1IgwlFS8xzfxQK22zaLwq3AO%2B7zGOCoOIgWQLp%2F0U2zGK%2FSsHLyrkO2Gm4A%2FAB1PPZ5vuv7NcwdwsqL5rvJ7rgZEmf%2BRfWCToIm2NOvMDdzm2AaZD7fN6vpGIgfl%2FsVAaePKF%2BZ3khSYFSkkA%2F6%2BOAf3qQc0iLu1UVc5DOiv0ybmS8LdhBqQJ%2F2FL%2FWjOnldw0qtK1Q914Mf31981OZpGb3lhX%2BZAE4tXXKHCx4KznHQPdzIq8apYzW91u6l9zWDLxmhm5xC5SisjpFTYCnCCCs%2FUVw4cYfBBZ66rWwk9Ks%2BbF5oolMxQrHNvmbNBhvmSo%2Fl%2BAZouquQ6PNf8VXd%2F5xaKjVykw9L3FonoeNJ0fAgkIjtVJfcEbSo6ajz2ke6yFF3VRoSgr6GcE2sXRL7%2B3DTUp7ClGyfGonQXvojlFwe8tjwhwECa5sfA3rwQBd17zbRevnHFhzLSzVbmAt5HtVoZTbTylh3IDwWg7lvP%2BFhM5PAJ5AQPZkgmitqfz95rMhI3A%2B%2By5oEe%2Bl0i5ra1fQ37F6Wq1h3eul57S1ZlRRYMDRH56i71k6DvlxvBK%2BnF4g906ZW4iY157FSj0XDnt9Qf3o5%2BNqUi8Xrkk4nRhJZ7Tx3jyF%2FnPedsxvjtDwVrf3eF3qkL4Xevw3KMWTDXi%2BC%2BBjqkAc%2FQkMS5z2GSap8mHjNXR8g2kcTyL8frgnb7Asunb%2Bsf%2BhE5SZgnmcA662tstdwtkM0Whj1yBsgmfL4AuZD%2BZ6dOJGSwRBm2gJt%2FU7fB%2BM%2BQiUH4gN14bKfAXJfNquoNE0pp3S9TIHWz4aaxkQ6GsWqUwywNeA%2F3iRS9XEno40zKgDaJKE0nG0K%2Bp4uBAKgU68zjv%2Bgz%2Fq7CXoDvq4qjpMVl%2BT3K&X-Amz-Signature=e72e247b0123f475f1a848b6bbd326d0e390977bd825a700df57e5270cb138c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZLOS5KV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9vYOlhmt0mvNoAQ%2FOAGU%2Fv6yXBY3XeFFvzDMgqyuomgIhAL%2F9OaN%2FB57kQuruSAb1QPGJKR2fI%2FZzOlGHIhlFR80vKv8DCEQQABoMNjM3NDIzMTgzODA1IgyRsgVLamYitfDZOTUq3APFTMorBhCksnaaLkmE%2FaqFswYGH2kCahueJba29TjF5xBy%2Boifcbq6tAO6trj169Wz8H7sTkrbCACxT6k4Ux4iTcg5y%2BJQHLGOr%2FUJREgRf9SpVO6WFdSY4Y%2BR0g15r1P3m7DxS6yu9liR%2FFQiduOc1QDL1D1YaTVUwjIn4GvCNjp1rkzGz9vhOCSJJ61wKT6LRuzMLxR%2FB9gU3GCd2Bc2MJr%2BRcgT7hc61Cn5qGymWxvSLndXNuc9V%2Bf7K7zJndRdXY9SkHNfPwUa82vFFPlp6uAKMuhFxGjlE%2FMnGzWrnCHseqK6fe1ftFF64%2FxiJW9xbV1ZiEJ46EU8gYKBdcQVs75jvoXOHPgdV99O1vIoUJNKQdgJhu%2FUEtIY0IGmSy6bW9bRoVEZIEySwM4w2L0%2BtUA6xARAcFX%2FmeKkFuWj%2FWR3G3rBdEJ%2B%2BGjdNjHtvHvYbqWX3K74rN95jXyFh6eNlrth77izxBPLeubc0bEi5r0eqjFkn9cFVJuUNwFU8JTCqQ8%2FQKVytB2mOK%2FQxV0m9ymrjODO71G06sL3BTj0l0I5Ni2h4ifrcQ8IRKRPM6LXa1XwP%2FEaXRxOE8iWZlXIQIAzV5eCMEzpTNSLk7bqgKP9urs37qCX2VhUYjDSi%2BC%2BBjqkAfO3eeF6GGI074bz%2Fwc4%2Frb8d6Khtym%2FcTphCkVuZO9mHIKDdbIjY3eq3m6qXz2WcP0UwZMS0y4kSRnhX5mGqBlwUJ1NeJj6D2n%2FnB4VaknUIhGNYE0BrDwab9HEMqQcwXEQj7iEEKR3IJWYm9q8P0slC1JLJkTuqiEeCstJwp4oprC4%2FM%2B%2BiAokiO3eBTXqL0Viqe%2F8M0D2OV9BcjTwl6jS0SWr&X-Amz-Signature=d7e2fbba8cd2a699f161d69f85f6c19e1b61f6624f0b7aac3cd67b5cfd458886&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
