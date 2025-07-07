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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QL3A5IT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDV08v84Qio6vgIsWWKqLJ5%2FvGktZSFywq19C8eVvs7AQIhAIAEQTbr5Ts3LKwQ5B7cvbevAAavwJMIT0rzZU2aq7QAKv8DCHgQABoMNjM3NDIzMTgzODA1Igywz4lerprVsjdeJ6Uq3AOmLnmUhlmDzbzLLNbgE4jXOHZbIJRAOAlSVD5L0I5Vbp3nSdYxc6wjfuALayp1xwP2IdBTL%2Bba84Jp%2BXBO7uFtmNC9h%2F8aJ9%2FhSptXxh1U0nZHxlL1zuyAm5nQdyG2ya3x6oWqeplOijp0mMDKP95UwKhNBaZawEaDe5AmhhE2Rmia7N%2Fs4oA8Enfonwp0y%2FPqcnO1SwaPN1HmYOJxC6wLr6w6AI%2F6GtsjiuMkACPv5kD6VUBNpOgVTQ%2B1%2B8K0uBRVEoKEG3hax%2Bx6ApeMZGpGVrkd6AzVoG4YuaUDgB68BC3B5Fnr6yZCLIj%2BCAauKXP9fdAVKKSPKrMFgo9ZgDyYc8sTnMZZ%2Ba0BtGjeXpZ%2BCrH%2Fs5DDXaEbZTDXNGXYt4zwbQ20VsbDTMLbLsZYD7R6jorfq%2FsBa%2Fjmyhyl01Z1iItzLnxU8EArXg3g9Sj3xUDJ5vlOtelSpUkjzsgPbElf6K1PY0JTFt9mTvj9A6jScOnipePq2KaY4mNQFqysdlCi%2F9yea1PVzWb9q6nMeZYBSK6IZLVK%2B6xvMLrMwC72YRppvHuooq3WqQzGAcQNlixtpGqyi5ZVbZxyoyaNXrf%2FJzbzkazeb1Fo3S%2Fb3P82VPaWxSA2bppCRFz77DC3ua%2FDBjqkAWHIrz0pvJRL8aCquZ%2BF3T%2FVzw2hY50%2BC4o7YZK9ZFnN6kLA6XixAsEzBUNyllUZPy7NN7WUVVxFqZ4kT%2FyhHNQgKEihKfiVgnXtxE7SC%2BBp8ykKbiBRHN5y%2BdTMSa0rYvV%2F96e72xJjGgxgocCDMHaOsGAMWCU%2BlC9%2BGgKm%2BIy76pBDg8DQjRKMfVXZVhO0NMD42IbsMYSqTlI9dzZO4mUQ%2BCwP&X-Amz-Signature=0ab4406dc5fa01255b3029a797873829cf9f90decb5a48f2c1ce0db6a57311bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QL3A5IT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDV08v84Qio6vgIsWWKqLJ5%2FvGktZSFywq19C8eVvs7AQIhAIAEQTbr5Ts3LKwQ5B7cvbevAAavwJMIT0rzZU2aq7QAKv8DCHgQABoMNjM3NDIzMTgzODA1Igywz4lerprVsjdeJ6Uq3AOmLnmUhlmDzbzLLNbgE4jXOHZbIJRAOAlSVD5L0I5Vbp3nSdYxc6wjfuALayp1xwP2IdBTL%2Bba84Jp%2BXBO7uFtmNC9h%2F8aJ9%2FhSptXxh1U0nZHxlL1zuyAm5nQdyG2ya3x6oWqeplOijp0mMDKP95UwKhNBaZawEaDe5AmhhE2Rmia7N%2Fs4oA8Enfonwp0y%2FPqcnO1SwaPN1HmYOJxC6wLr6w6AI%2F6GtsjiuMkACPv5kD6VUBNpOgVTQ%2B1%2B8K0uBRVEoKEG3hax%2Bx6ApeMZGpGVrkd6AzVoG4YuaUDgB68BC3B5Fnr6yZCLIj%2BCAauKXP9fdAVKKSPKrMFgo9ZgDyYc8sTnMZZ%2Ba0BtGjeXpZ%2BCrH%2Fs5DDXaEbZTDXNGXYt4zwbQ20VsbDTMLbLsZYD7R6jorfq%2FsBa%2Fjmyhyl01Z1iItzLnxU8EArXg3g9Sj3xUDJ5vlOtelSpUkjzsgPbElf6K1PY0JTFt9mTvj9A6jScOnipePq2KaY4mNQFqysdlCi%2F9yea1PVzWb9q6nMeZYBSK6IZLVK%2B6xvMLrMwC72YRppvHuooq3WqQzGAcQNlixtpGqyi5ZVbZxyoyaNXrf%2FJzbzkazeb1Fo3S%2Fb3P82VPaWxSA2bppCRFz77DC3ua%2FDBjqkAWHIrz0pvJRL8aCquZ%2BF3T%2FVzw2hY50%2BC4o7YZK9ZFnN6kLA6XixAsEzBUNyllUZPy7NN7WUVVxFqZ4kT%2FyhHNQgKEihKfiVgnXtxE7SC%2BBp8ykKbiBRHN5y%2BdTMSa0rYvV%2F96e72xJjGgxgocCDMHaOsGAMWCU%2BlC9%2BGgKm%2BIy76pBDg8DQjRKMfVXZVhO0NMD42IbsMYSqTlI9dzZO4mUQ%2BCwP&X-Amz-Signature=9de9269ecd69161ad56035e4006568bedb4e3c25e1e4d6b8bb27a30bc6802a7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QL3A5IT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDV08v84Qio6vgIsWWKqLJ5%2FvGktZSFywq19C8eVvs7AQIhAIAEQTbr5Ts3LKwQ5B7cvbevAAavwJMIT0rzZU2aq7QAKv8DCHgQABoMNjM3NDIzMTgzODA1Igywz4lerprVsjdeJ6Uq3AOmLnmUhlmDzbzLLNbgE4jXOHZbIJRAOAlSVD5L0I5Vbp3nSdYxc6wjfuALayp1xwP2IdBTL%2Bba84Jp%2BXBO7uFtmNC9h%2F8aJ9%2FhSptXxh1U0nZHxlL1zuyAm5nQdyG2ya3x6oWqeplOijp0mMDKP95UwKhNBaZawEaDe5AmhhE2Rmia7N%2Fs4oA8Enfonwp0y%2FPqcnO1SwaPN1HmYOJxC6wLr6w6AI%2F6GtsjiuMkACPv5kD6VUBNpOgVTQ%2B1%2B8K0uBRVEoKEG3hax%2Bx6ApeMZGpGVrkd6AzVoG4YuaUDgB68BC3B5Fnr6yZCLIj%2BCAauKXP9fdAVKKSPKrMFgo9ZgDyYc8sTnMZZ%2Ba0BtGjeXpZ%2BCrH%2Fs5DDXaEbZTDXNGXYt4zwbQ20VsbDTMLbLsZYD7R6jorfq%2FsBa%2Fjmyhyl01Z1iItzLnxU8EArXg3g9Sj3xUDJ5vlOtelSpUkjzsgPbElf6K1PY0JTFt9mTvj9A6jScOnipePq2KaY4mNQFqysdlCi%2F9yea1PVzWb9q6nMeZYBSK6IZLVK%2B6xvMLrMwC72YRppvHuooq3WqQzGAcQNlixtpGqyi5ZVbZxyoyaNXrf%2FJzbzkazeb1Fo3S%2Fb3P82VPaWxSA2bppCRFz77DC3ua%2FDBjqkAWHIrz0pvJRL8aCquZ%2BF3T%2FVzw2hY50%2BC4o7YZK9ZFnN6kLA6XixAsEzBUNyllUZPy7NN7WUVVxFqZ4kT%2FyhHNQgKEihKfiVgnXtxE7SC%2BBp8ykKbiBRHN5y%2BdTMSa0rYvV%2F96e72xJjGgxgocCDMHaOsGAMWCU%2BlC9%2BGgKm%2BIy76pBDg8DQjRKMfVXZVhO0NMD42IbsMYSqTlI9dzZO4mUQ%2BCwP&X-Amz-Signature=71d1f7d2d143e4b667592d0feb2c43878a0da341d74bb8ccd9c48c2eb8dc79e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLQJAJZV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIDCZfr6QlB%2FmLv7hQzaYrPOpgbO%2FiQRaMVKJEWDrMhXaAiBd2VLYQO1H71F8SxRuUR7CzmkHNvNa6syzf%2B3ljoVpEyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMXQwYdh5BslleaVZxKtwDpMO%2BJ6pLHwkeCaekdyh0nIox0leF4%2BifyvRn71tst1KcfAgpBDsnlJzWudA5KWXSn2bui1wjPONJPPbE7fBAZ97XRaMyFiW3653lz129HmNjQYHvZl8FRyE5cExD87mTp9eCEFJVbky%2F87y4Ir%2BCKtxyVRp4yzQwc5E%2B8wyLhot56%2Fjbd8KzLtBkEDkwyBa2vN94MXWMhEPc6%2FjEhywj2Luf%2B6QbH%2Ft3XXOuT9KnYEkVZG%2F9OXL3nWtv6yGQGMflHpO%2BSYX7uvcDc%2Bc%2BDM%2FxDkbOMdSeqrZrn2BSAdwzxx58U5kOJQdrxe8MpYFYhTOM4irH4%2BZNIzDMfNlnQz6XtZ7Ce3TIxYKOO%2FVQM%2BvMDPOMVEGHmMS81RkT0gKxj7xsJCPk4xFp4EhTtpBEr8UMFxQ8%2FC0HcjNrcq03g%2FCp9VSwjSOj1poXb9YUMdphKVKMRwRKEvrL7GPszBCSHv5OcVC7H1%2FpNT%2BYHLwIJhvdIoIKgR%2F3ORvJeyYfh0bJ%2FRg54SB2KQNIWdPEhMW2pnyP5fH0%2FgRTanbbzpU9%2BE%2BZxgBt6uGkpk1SKf9jQ%2FGVEd6jOhFfdh9gD3iAqACtHcZZprb1WPJpzf4gyij6E3HGuMLJHuvf%2FGbQhJRaXPowwrivwwY6pgG4aNclVtO%2Bd5kk5%2BXlYrGaAuyCPAcqxzf37lLiE1VXcDM3MFxit2yzrA4N%2FUpKMu%2FnT%2BdwCRL0l3%2BKZ0%2B3vK1fGs%2B8lo9U%2BQ9ABdVuqvTuEEyn6H%2F%2FA9c6cl3T90j1XRJ%2B02jQTwfM7sAaxBLkLqn78kprXGnEiZ9etg7PHdZpVr5JAaVRrDvQBUgQZbqblqMuqtcsIpYCaRSm5GFRG8vyu3sw97u1&X-Amz-Signature=bd564fd97979a104cd3bf60da0cab9014fe2d78fafc43dec2aef3b4bfe75657d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSLZHRVM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCID6NcYrC4qpTgkJCjymUtlPKrAshJ9wD2BhH2la9eKglAiEA%2FXUDYlYpYtCzJb27kyx1Sfu8siskBNeg90HS1Qsrnmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCSjs5BtkuyuGsXfhircAyKq8kSzKGqN59sRuKfcdQ28P9Y1IGl7mMip2UIGPiwKS00Pxnc4%2Bs6GRTBZfDOIRwXq%2BHCf4iENngg9rgzeApLKOZN1SgeIa5pgsaI5wFcTzHQ67Bg%2FOUkBAYNy17yTiq4DwIoVlARwnuH5UlqB7GFDc120wsXsGeXq68ogSOCP003N%2Bd5ECGkl4NqG%2FI%2FyhbcoVoDFuTF5gPL9SzcMZj0bqvzSwgETx1cbH8UwZ0iv%2B9Hl650q3UIqajp7qg9eSDyLA72kpWGWAhV7rTzI4YvGxfzV1mX2p%2BIP6udoPDIo5bl79qDSoM%2BELhwuBLq%2BCeeTbC%2Feerq6zqoAQrx3qgUq9FXXg53xa6nxYLgKZ2ENFcW6L1XP3xrnjWNBL%2BKyaRqPpGieS53EPKu0wtAab20%2BpY6%2BrTUxW3%2FH99JemIaOHuR1FOKKEy2y3NNyB6TUl4ld1wXDq9nvFchtKwes4LqObLd2NhCXAlWBCizjdB%2FASvh3VAmY1yx3EwgB6QUgla0WTRmE3e1TRqb%2BU3U0JoCPaOu%2FUkedbhMLEFjSvCU3kAA6xXs6%2BQQ0OEMl1BvOljcEmO5fp8dlAFyBf%2F6pna1meomc%2FD2rT95%2FV9R6zOYzcOrcDCe4qww11rL2MN%2B4r8MGOqUBD44xb6BfaENS2jDbqEz5VHEIX68%2BZ7i7cks38UWZnvnjEeDhHBO4PvHXL1i4YUL04bOwrdC5BuWAk2%2BYFFVLgOU9SDi0DBTtYjF8FGuKAa5YkBXpK8i4qbccBdGqyk0oLg62V6rxW5M4xGS8XYsl5EAjHTCcd4InrnhH7%2F6MEY1BmQSdvDKkT5sBqV6yuk7SAG4rYq3%2FhaV0%2F62gq3n98mWBZ%2FK8&X-Amz-Signature=5fab6a91ad7c29ce8073687a37c75b17d9aeb5f230d5732dbf548e65ec0cca3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QL3A5IT%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDV08v84Qio6vgIsWWKqLJ5%2FvGktZSFywq19C8eVvs7AQIhAIAEQTbr5Ts3LKwQ5B7cvbevAAavwJMIT0rzZU2aq7QAKv8DCHgQABoMNjM3NDIzMTgzODA1Igywz4lerprVsjdeJ6Uq3AOmLnmUhlmDzbzLLNbgE4jXOHZbIJRAOAlSVD5L0I5Vbp3nSdYxc6wjfuALayp1xwP2IdBTL%2Bba84Jp%2BXBO7uFtmNC9h%2F8aJ9%2FhSptXxh1U0nZHxlL1zuyAm5nQdyG2ya3x6oWqeplOijp0mMDKP95UwKhNBaZawEaDe5AmhhE2Rmia7N%2Fs4oA8Enfonwp0y%2FPqcnO1SwaPN1HmYOJxC6wLr6w6AI%2F6GtsjiuMkACPv5kD6VUBNpOgVTQ%2B1%2B8K0uBRVEoKEG3hax%2Bx6ApeMZGpGVrkd6AzVoG4YuaUDgB68BC3B5Fnr6yZCLIj%2BCAauKXP9fdAVKKSPKrMFgo9ZgDyYc8sTnMZZ%2Ba0BtGjeXpZ%2BCrH%2Fs5DDXaEbZTDXNGXYt4zwbQ20VsbDTMLbLsZYD7R6jorfq%2FsBa%2Fjmyhyl01Z1iItzLnxU8EArXg3g9Sj3xUDJ5vlOtelSpUkjzsgPbElf6K1PY0JTFt9mTvj9A6jScOnipePq2KaY4mNQFqysdlCi%2F9yea1PVzWb9q6nMeZYBSK6IZLVK%2B6xvMLrMwC72YRppvHuooq3WqQzGAcQNlixtpGqyi5ZVbZxyoyaNXrf%2FJzbzkazeb1Fo3S%2Fb3P82VPaWxSA2bppCRFz77DC3ua%2FDBjqkAWHIrz0pvJRL8aCquZ%2BF3T%2FVzw2hY50%2BC4o7YZK9ZFnN6kLA6XixAsEzBUNyllUZPy7NN7WUVVxFqZ4kT%2FyhHNQgKEihKfiVgnXtxE7SC%2BBp8ykKbiBRHN5y%2BdTMSa0rYvV%2F96e72xJjGgxgocCDMHaOsGAMWCU%2BlC9%2BGgKm%2BIy76pBDg8DQjRKMfVXZVhO0NMD42IbsMYSqTlI9dzZO4mUQ%2BCwP&X-Amz-Signature=9ed7ec6a8dc1915049ed62fa1ab20670c41c3a820f2a4c6dbd28be0bb0e15df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
