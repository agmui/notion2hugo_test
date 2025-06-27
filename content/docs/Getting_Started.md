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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LM5G23%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGyDbTl8JQhV7p7jeDlstvb%2BD8StpHySa1GsUqYgTOEeAiBZ7gOafjrQdYZIaZZRAQa4fbKLByvzkcjpthkAObYywSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB4gBTOHtiTSm67lfKtwDVIKq80k5DikIqum2xXURZd2S3rtEhrV78WeGPXZ94kToHAfp93LRQf5UMuhDhLp5R7fO5Z2qddrAp%2B5w0xJdrrh1cAwVa3m88lB5dCNxh7LKCmmcLSsEOEJe%2BgtPVwmKfioBzTglMksyTedVg6YCy3KwiYA67zucmxoVLHXwFAosZAWK%2BOwmTf5s9TOPoc0mpXX57tuUCfaN0GT7KxYpbGYN4Ca95m1sp0XFLZrAl6iId3puGZcWF%2Bn5P%2B5p7rDLsRd1IR9jUqDGiPSMVX%2Farb%2FWJJyKDL1%2BXa723SL7gQ5AsJmUwgfC2tFssqtZeUE%2BnirDkkWVH9FaPTA8DuQ6N70JlzgUKu11l9cvkR4wcV%2FcFcEMmrV1fnGoot8%2B5UOyFUW%2BPkXKELQ1nNRjReGI5tbOixiM4fjQ9WVsDFrI2SfuE9Em%2Bj1Be8kOqbmDKpj7Zn8663GbKIoygTRVWEoxWCcFT2s2N0Shb1M9EtZrSB2JauIsxNjLTTRBTcKBSvKkgQ0UuGAXgeWOGivWf1yHvW823wlQ2RvJdSuS1lmGhh3LW3kHbeeBeJ8IKYbWBP51Wyk4N%2FP2lROskE95kXJ%2Bfds4ilx9sQ0mS2HYQ76TV6Z7C0KXxhmrJqC7BSowssv3wgY6pgE0kRSzQYbCQWTQjMVJXhKxsd1v%2F%2B%2FehsxMBGrwgo23inqR9VSCjO419ONhcQEaoAATtX7JWY7x44OCQIEvw%2BOygs227t0ljQXID1lpMIg84ITy54r3SLbWBuivt0Px1DEPsK7s%2BmjtpKMWqxlJmkJAdRyF6dQ%2BHiC9hnBYVf%2BVXnavo2CwKDFPO35xTghAYpsD8IXg4XUHT5aMdjwSWz0Fddha6GBR&X-Amz-Signature=86c9e17dd3800e607c0126c6936a06ccfab969fada22b378d48e10aaaa76453e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LM5G23%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGyDbTl8JQhV7p7jeDlstvb%2BD8StpHySa1GsUqYgTOEeAiBZ7gOafjrQdYZIaZZRAQa4fbKLByvzkcjpthkAObYywSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB4gBTOHtiTSm67lfKtwDVIKq80k5DikIqum2xXURZd2S3rtEhrV78WeGPXZ94kToHAfp93LRQf5UMuhDhLp5R7fO5Z2qddrAp%2B5w0xJdrrh1cAwVa3m88lB5dCNxh7LKCmmcLSsEOEJe%2BgtPVwmKfioBzTglMksyTedVg6YCy3KwiYA67zucmxoVLHXwFAosZAWK%2BOwmTf5s9TOPoc0mpXX57tuUCfaN0GT7KxYpbGYN4Ca95m1sp0XFLZrAl6iId3puGZcWF%2Bn5P%2B5p7rDLsRd1IR9jUqDGiPSMVX%2Farb%2FWJJyKDL1%2BXa723SL7gQ5AsJmUwgfC2tFssqtZeUE%2BnirDkkWVH9FaPTA8DuQ6N70JlzgUKu11l9cvkR4wcV%2FcFcEMmrV1fnGoot8%2B5UOyFUW%2BPkXKELQ1nNRjReGI5tbOixiM4fjQ9WVsDFrI2SfuE9Em%2Bj1Be8kOqbmDKpj7Zn8663GbKIoygTRVWEoxWCcFT2s2N0Shb1M9EtZrSB2JauIsxNjLTTRBTcKBSvKkgQ0UuGAXgeWOGivWf1yHvW823wlQ2RvJdSuS1lmGhh3LW3kHbeeBeJ8IKYbWBP51Wyk4N%2FP2lROskE95kXJ%2Bfds4ilx9sQ0mS2HYQ76TV6Z7C0KXxhmrJqC7BSowssv3wgY6pgE0kRSzQYbCQWTQjMVJXhKxsd1v%2F%2B%2FehsxMBGrwgo23inqR9VSCjO419ONhcQEaoAATtX7JWY7x44OCQIEvw%2BOygs227t0ljQXID1lpMIg84ITy54r3SLbWBuivt0Px1DEPsK7s%2BmjtpKMWqxlJmkJAdRyF6dQ%2BHiC9hnBYVf%2BVXnavo2CwKDFPO35xTghAYpsD8IXg4XUHT5aMdjwSWz0Fddha6GBR&X-Amz-Signature=3996def267d402e557034e9cc6388e531b92f8cd3b078af4cad9c3f94c07545b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LM5G23%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGyDbTl8JQhV7p7jeDlstvb%2BD8StpHySa1GsUqYgTOEeAiBZ7gOafjrQdYZIaZZRAQa4fbKLByvzkcjpthkAObYywSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB4gBTOHtiTSm67lfKtwDVIKq80k5DikIqum2xXURZd2S3rtEhrV78WeGPXZ94kToHAfp93LRQf5UMuhDhLp5R7fO5Z2qddrAp%2B5w0xJdrrh1cAwVa3m88lB5dCNxh7LKCmmcLSsEOEJe%2BgtPVwmKfioBzTglMksyTedVg6YCy3KwiYA67zucmxoVLHXwFAosZAWK%2BOwmTf5s9TOPoc0mpXX57tuUCfaN0GT7KxYpbGYN4Ca95m1sp0XFLZrAl6iId3puGZcWF%2Bn5P%2B5p7rDLsRd1IR9jUqDGiPSMVX%2Farb%2FWJJyKDL1%2BXa723SL7gQ5AsJmUwgfC2tFssqtZeUE%2BnirDkkWVH9FaPTA8DuQ6N70JlzgUKu11l9cvkR4wcV%2FcFcEMmrV1fnGoot8%2B5UOyFUW%2BPkXKELQ1nNRjReGI5tbOixiM4fjQ9WVsDFrI2SfuE9Em%2Bj1Be8kOqbmDKpj7Zn8663GbKIoygTRVWEoxWCcFT2s2N0Shb1M9EtZrSB2JauIsxNjLTTRBTcKBSvKkgQ0UuGAXgeWOGivWf1yHvW823wlQ2RvJdSuS1lmGhh3LW3kHbeeBeJ8IKYbWBP51Wyk4N%2FP2lROskE95kXJ%2Bfds4ilx9sQ0mS2HYQ76TV6Z7C0KXxhmrJqC7BSowssv3wgY6pgE0kRSzQYbCQWTQjMVJXhKxsd1v%2F%2B%2FehsxMBGrwgo23inqR9VSCjO419ONhcQEaoAATtX7JWY7x44OCQIEvw%2BOygs227t0ljQXID1lpMIg84ITy54r3SLbWBuivt0Px1DEPsK7s%2BmjtpKMWqxlJmkJAdRyF6dQ%2BHiC9hnBYVf%2BVXnavo2CwKDFPO35xTghAYpsD8IXg4XUHT5aMdjwSWz0Fddha6GBR&X-Amz-Signature=cca7c54fb7ae20f98f7d8bc431618daee1982c2e14b22a30b10a4d3873067925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNRURXWF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEXvpTDhODFw2DJrzm0jKWywfHYll4tIErmoMkSFZ0QkAiBfRuCS%2Bg4m92uw0O5l5h13aacGWlySngty%2F9l6I0rMeir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMtV1kX90xWKBvAmBwKtwDpukS2CUyp9Mr97n4NKONg%2BXiyNpdsYpPZDoo%2BNBnH%2BRSCZwnf3WejFXbg%2Bfy%2FcSkdUiC4Cvv%2BVNS0R6b9Cr7UT5LYDbOVc06msmzhZKlzuUQrJcBn5KZu0CmU0armXCu0ZOCEqD2xImIhdlXtLtl5unOTHH7W%2FCV7aXSQ4s7Wyu%2B0NkkwsC3zHGtPQ7IMgZ0XwJ6hW7BRJcngXW3e6N2%2BKNkDlhVmX17%2BwKyR2%2FQj8j%2FZeyKLM7ZQFelDPx9NYLQBStwmaOA%2BhOpTlJLiAGEoM84hn8uECxr7FD8wjyzHQbzrVmgDMGYhml5%2FthDGt0aM3PjBdopEMwoBQ2hy7%2BPwAbJ2FkhtGlV7J2IoWcZ5TN8BeBhc1OsY3Q7eOh5jbFZTGth7EhMaePqqsAvO9I5xZFgInCF%2F5pwwT7LCtornG9WjDSNp0NOG1%2FiWywLLIbzD0zQzBbd%2BmpEKAefs5uHsGcqjuLtZemdPtaR9x3fKyofffUyx2C4x33hSlEpKfTQA6uc5D0GqBQNlXOZu8CcmvPwdhKz9%2BTkAPlEVcUzwjLa9y1fZ1EACFbo%2FiR5cTQBmF12EffiTfFhkhKqAQF9rMvYKjZD1Ets7L9kMd5JLkUmblB7LhhcAQGUKccw2Mr3wgY6pgGHqwKh9rsnYF2orjq4N9OfT9i3Aarn9P1kuBWi68kSolb5E3T4ypfNNRq5FKZH78Hf7SG4wV9E1Ou5V3j8n6k0xDStp7HCVtfbjtb9kcIvK%2FDdsbElInPpqjHOBWbePEkecZJGp59q8TUxJnAtdQjb99GAZ2iiMMtIP1tqmFApnAemW201MFzFLrx%2FNkJcUUjgxmmht1x4p2b8i22Um5lDM7os5ViY&X-Amz-Signature=1c3a4a6f3cbb338462dca7ade152a2c67a8487c8adf7fd645e2d8b8e4ef09e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FU3SEYL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCTzdcTP0UkRHezkh6NbSRlh8l%2FPCi%2FJ26kUdzKFlOnXAIgaOBUDNoXHpyQgA2Guc9XpXaE4CP0XNoYUTf345y4Ucsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDL7Zm9rwbwmAIDGfaSrcA0yjL7WAaUN8MIgaPKhmZx022RSAvP8KtmdanM5lg7KT9iy%2Fc7toFP2yESMnPC36TT9h1F8j7HCWt8wKrh1CWlzl4nJL7E1g%2B4m%2BBk1nd%2FpgvW7QZZv%2FpExVtAj%2F3B%2FZGOL1ZKpYpKBk1c5OIHaA6PkYUhmpMckfkU%2FFQBA6dWXzrnLljiQ4cQ77bptqvoAkzFZojiekNP3OORdemE0UFt0BCLfKPSbrk1xBrSqiB9ils4PI1sQyHVvkKbfJjLTofP0%2F2NRIIAzwxZk9lYQIRlQFMP5PQSNtQgQWAUr5%2FWV9Fp3x%2BQrTeq9hV6spk2HlqO7LhRzADUdEnTZg43L8a4QVigSujAIMPFnTNB01zMybNKwrDQKTemxM8bBRdae8EZCT3IjRNCnBOZzs4zWlkhIf1Rw32gV9zd6nR1etSzTsJ5t1cETVG%2FNEnPIPSntHxl1lK2X0sLwKKcrayZHnBxjShUiWmwpu%2F3O3Ti%2FSk1VSiZ314qFvIZq7P5fd1IW8iicQIcVc%2BwymJv%2FthYfH%2B0IwYpvqou1F%2F%2F%2FLUABWEJsGcZuOx0FtRq5NUJDYEKn%2Fh%2FWE%2BBDwHqn1fZWhVNCVeTUtrwpxCxuR6oUbPwaUg0hyMOeeF5SyP75yArs5MKLL98IGOqUBanjLsMepEEyUWZopjqOyRExFg8gsXu5IPANlrctlP5rfkjVs5c8w8VDfrkoLw7M1f1wgHYnQVGldCuG5SWxNOvHITmDSnEuBJtjHYcaLn7HG6Iz1pQSLex1asnS%2BAmBF88AlLzC%2FLl0IQ%2F7hB6nX5mi%2F1lwgOJw91MaWusWbBZyX41tkOIBwPp0eZysEtsrIOPbEDLHzXab%2BtLQn%2BjIU0oJIgZrs&X-Amz-Signature=9643fd670e590c3ac49ddf4f1d48f3b9568cee727f315262b94a90feaede713e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LM5G23%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIGyDbTl8JQhV7p7jeDlstvb%2BD8StpHySa1GsUqYgTOEeAiBZ7gOafjrQdYZIaZZRAQa4fbKLByvzkcjpthkAObYywSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMB4gBTOHtiTSm67lfKtwDVIKq80k5DikIqum2xXURZd2S3rtEhrV78WeGPXZ94kToHAfp93LRQf5UMuhDhLp5R7fO5Z2qddrAp%2B5w0xJdrrh1cAwVa3m88lB5dCNxh7LKCmmcLSsEOEJe%2BgtPVwmKfioBzTglMksyTedVg6YCy3KwiYA67zucmxoVLHXwFAosZAWK%2BOwmTf5s9TOPoc0mpXX57tuUCfaN0GT7KxYpbGYN4Ca95m1sp0XFLZrAl6iId3puGZcWF%2Bn5P%2B5p7rDLsRd1IR9jUqDGiPSMVX%2Farb%2FWJJyKDL1%2BXa723SL7gQ5AsJmUwgfC2tFssqtZeUE%2BnirDkkWVH9FaPTA8DuQ6N70JlzgUKu11l9cvkR4wcV%2FcFcEMmrV1fnGoot8%2B5UOyFUW%2BPkXKELQ1nNRjReGI5tbOixiM4fjQ9WVsDFrI2SfuE9Em%2Bj1Be8kOqbmDKpj7Zn8663GbKIoygTRVWEoxWCcFT2s2N0Shb1M9EtZrSB2JauIsxNjLTTRBTcKBSvKkgQ0UuGAXgeWOGivWf1yHvW823wlQ2RvJdSuS1lmGhh3LW3kHbeeBeJ8IKYbWBP51Wyk4N%2FP2lROskE95kXJ%2Bfds4ilx9sQ0mS2HYQ76TV6Z7C0KXxhmrJqC7BSowssv3wgY6pgE0kRSzQYbCQWTQjMVJXhKxsd1v%2F%2B%2FehsxMBGrwgo23inqR9VSCjO419ONhcQEaoAATtX7JWY7x44OCQIEvw%2BOygs227t0ljQXID1lpMIg84ITy54r3SLbWBuivt0Px1DEPsK7s%2BmjtpKMWqxlJmkJAdRyF6dQ%2BHiC9hnBYVf%2BVXnavo2CwKDFPO35xTghAYpsD8IXg4XUHT5aMdjwSWz0Fddha6GBR&X-Amz-Signature=0570c5f249e83bfa66ec82b335b526bae51f65d20b656c440145ed859323d4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
