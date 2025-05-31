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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZ3LEV3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjKzrTOp4M7k17KuHV8OAJAW9Hz%2FQF9CBlqUy5wtI1gIhAPt2uE8VwlD870nuedV6ZOpqUi%2B%2BvStzsO5o3oNv%2FzvjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTXWgtfS0vWL%2BpE4Aq3APM7PFTnd5Uzi0Ayk%2FerMqz%2Fb5fRdfz4xVmNt6ozGRLM9g2mZiuWrSeJGnHdoYwzHqU4pOF%2F0QB%2FRgMkDSNpBNwvuH%2BlKTyEn3m6KOHH2uygNzSrZzkCQyoCRZARc4UgR3vrqJu55Wf1pGP3uZUb3Wp4AKouLC90ShtJ5km3CCKW46cZ7yAlsSzyuXi3DucdoTzaTyHg4uHzF1XAXTEPoTLXP2Fznqo8FFU0GW5B2jBtt6AQNdaR1PAC2y6ZzsFSeyy5VBfDxL5Mgl1TMmsBwApECrSUA1%2BF9amI08Oi%2F3CmHgL8PGE7xV7at9mlRLbXCebpmVyK1p1VDrD92K479v43zVyxqDo2kRjczlZoWVBXVO1T5wCxO4iysMZJ3VMCzyebKhF3%2FkYPxermPZ709fDinQOk2h2OMvQFuyPksU9VC5WUJXwTYHEAfYCkeY4jstSA2JtUyYRqVtypMAxgwbe4bnBqULm2sojEfwLe3vXnggPap5H45oOQa7K1dvacusKRYO7MvmUotg%2FSBGReLuaCKHzLUyjNH9eL72EuYggZQUm8Nhqd4Fgpj3%2FMnvuF43QEFOhtWyaLlNGKhGUoIRuEUxXiNIP%2F%2FYbkExQylfRp%2FMoAyKbdi3RBJMEwzC3pOzBBjqkARSof4oqtCdU%2FC5W4MmwAAK4xqvzNf14IHHgqraPhGBSY%2B97B%2B%2FGDLP5pkOiW8ZG1RBy5HEfkZW9i0wXsxHud6Atr7xqs%2BgeyFGJkqWhSK6A2vjaz2vGY1Cw4%2FGZ9BcuUIqHDggpSwp3FR4%2FMxIPRVrlbitKnGfOGPAXKDwSSpxeKsPjsWKSOiQ0%2B9mCyM0c4St%2B75gFR2AdpVpqxGLmr2eg0WuR&X-Amz-Signature=2ce6db163c630eaa9fed119215d11d933ebb33de5af01e3810ea7471af6ab8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZ3LEV3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjKzrTOp4M7k17KuHV8OAJAW9Hz%2FQF9CBlqUy5wtI1gIhAPt2uE8VwlD870nuedV6ZOpqUi%2B%2BvStzsO5o3oNv%2FzvjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTXWgtfS0vWL%2BpE4Aq3APM7PFTnd5Uzi0Ayk%2FerMqz%2Fb5fRdfz4xVmNt6ozGRLM9g2mZiuWrSeJGnHdoYwzHqU4pOF%2F0QB%2FRgMkDSNpBNwvuH%2BlKTyEn3m6KOHH2uygNzSrZzkCQyoCRZARc4UgR3vrqJu55Wf1pGP3uZUb3Wp4AKouLC90ShtJ5km3CCKW46cZ7yAlsSzyuXi3DucdoTzaTyHg4uHzF1XAXTEPoTLXP2Fznqo8FFU0GW5B2jBtt6AQNdaR1PAC2y6ZzsFSeyy5VBfDxL5Mgl1TMmsBwApECrSUA1%2BF9amI08Oi%2F3CmHgL8PGE7xV7at9mlRLbXCebpmVyK1p1VDrD92K479v43zVyxqDo2kRjczlZoWVBXVO1T5wCxO4iysMZJ3VMCzyebKhF3%2FkYPxermPZ709fDinQOk2h2OMvQFuyPksU9VC5WUJXwTYHEAfYCkeY4jstSA2JtUyYRqVtypMAxgwbe4bnBqULm2sojEfwLe3vXnggPap5H45oOQa7K1dvacusKRYO7MvmUotg%2FSBGReLuaCKHzLUyjNH9eL72EuYggZQUm8Nhqd4Fgpj3%2FMnvuF43QEFOhtWyaLlNGKhGUoIRuEUxXiNIP%2F%2FYbkExQylfRp%2FMoAyKbdi3RBJMEwzC3pOzBBjqkARSof4oqtCdU%2FC5W4MmwAAK4xqvzNf14IHHgqraPhGBSY%2B97B%2B%2FGDLP5pkOiW8ZG1RBy5HEfkZW9i0wXsxHud6Atr7xqs%2BgeyFGJkqWhSK6A2vjaz2vGY1Cw4%2FGZ9BcuUIqHDggpSwp3FR4%2FMxIPRVrlbitKnGfOGPAXKDwSSpxeKsPjsWKSOiQ0%2B9mCyM0c4St%2B75gFR2AdpVpqxGLmr2eg0WuR&X-Amz-Signature=37fd27cfde94a2f6bd5fbebf46489f74c56b411e35e360ae67405d6a16e2fbe2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZ3LEV3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjKzrTOp4M7k17KuHV8OAJAW9Hz%2FQF9CBlqUy5wtI1gIhAPt2uE8VwlD870nuedV6ZOpqUi%2B%2BvStzsO5o3oNv%2FzvjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTXWgtfS0vWL%2BpE4Aq3APM7PFTnd5Uzi0Ayk%2FerMqz%2Fb5fRdfz4xVmNt6ozGRLM9g2mZiuWrSeJGnHdoYwzHqU4pOF%2F0QB%2FRgMkDSNpBNwvuH%2BlKTyEn3m6KOHH2uygNzSrZzkCQyoCRZARc4UgR3vrqJu55Wf1pGP3uZUb3Wp4AKouLC90ShtJ5km3CCKW46cZ7yAlsSzyuXi3DucdoTzaTyHg4uHzF1XAXTEPoTLXP2Fznqo8FFU0GW5B2jBtt6AQNdaR1PAC2y6ZzsFSeyy5VBfDxL5Mgl1TMmsBwApECrSUA1%2BF9amI08Oi%2F3CmHgL8PGE7xV7at9mlRLbXCebpmVyK1p1VDrD92K479v43zVyxqDo2kRjczlZoWVBXVO1T5wCxO4iysMZJ3VMCzyebKhF3%2FkYPxermPZ709fDinQOk2h2OMvQFuyPksU9VC5WUJXwTYHEAfYCkeY4jstSA2JtUyYRqVtypMAxgwbe4bnBqULm2sojEfwLe3vXnggPap5H45oOQa7K1dvacusKRYO7MvmUotg%2FSBGReLuaCKHzLUyjNH9eL72EuYggZQUm8Nhqd4Fgpj3%2FMnvuF43QEFOhtWyaLlNGKhGUoIRuEUxXiNIP%2F%2FYbkExQylfRp%2FMoAyKbdi3RBJMEwzC3pOzBBjqkARSof4oqtCdU%2FC5W4MmwAAK4xqvzNf14IHHgqraPhGBSY%2B97B%2B%2FGDLP5pkOiW8ZG1RBy5HEfkZW9i0wXsxHud6Atr7xqs%2BgeyFGJkqWhSK6A2vjaz2vGY1Cw4%2FGZ9BcuUIqHDggpSwp3FR4%2FMxIPRVrlbitKnGfOGPAXKDwSSpxeKsPjsWKSOiQ0%2B9mCyM0c4St%2B75gFR2AdpVpqxGLmr2eg0WuR&X-Amz-Signature=0ab7c1da6cfe9eefb54bb7f3b91253b0dfeb8df7630f34d0734ae0752c03f24a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX54Q5XQ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdLJxRgqkJ9qc91lIKz06c5qpIqQQVbXO3oWq8k9A5OAIgYPSRFiUugNIX%2FhASQ%2Bf67JdW8qngHdGsNLGSCPUQci8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzmFnzyyRwtlV0HJCrcA5LPUR1Re0prU%2FDKLAMPXLYhT6yNnqxzhMxLX4dULl974y49YvDmCsfFlwaXMImON4T77MI6Vqt1BsoHKNH5QAy3KMoHzHSvkO4lmJtGRVbwSV%2BDQfqBis5i%2FX6MzdODriL%2FzlVqtsAR9saWr6n721JN4aU5Xb5EQhmCjrFI%2FuvL1sTRpdrgIB9a60gl4XNfNVg4F0QRicDYif%2FPLcYDdLC5RbC8LFMwpUd5xB3rXadOpJOwp3LwRKLQz7Ck%2B3NvKrd7WNZhp7MjnnDWrmnYXkCWAtn6p3sugDJOEpFQsO%2Bvqm%2BYnYdoVgh1Tl1wKGmNzIy9SeqV0YhS0%2F%2Fu2mC9bRPB3hVPQ07F7SvlIsokKsG%2BiIxXGAfzzNsb8Q%2F7RIShxXIXWnP7GxCbS9Rw3NO2GSv0FC6XjzuropOfbLiaLn%2Bwx01JDsxKyPTL6FukvI0iq%2FIGVWi9WPmn%2BGZtGnXK1ovRzAIhj0Ul7UGZJkMxGH6gcd%2BKC6WnSGBV53r34D3%2FyNf%2BkaYc%2FA4Pq4YJOXXm44%2F8zuKxgCzHaM4au5ItWmSgWwQxOP2qTaBSqvqxby%2Bx1WPLk9hwKrqgRsh8h3tGBsCoUIFkS28ZH0AfTeGY71YcaKVmXhE2OlBHuqjmMIfZ68EGOqUB%2FxvdS0TPuZXTVOs4fXUfZ8DzMaK2GDi9o0g8%2F%2FnULZ3tiRLet77sCPB60aWsjNBEqN%2Br%2FaDInGPOTFvDM2MmW7ri9qeQsaJiCxdPS0BMImml0amBImyZZ9TyNiPlsaCLncdjgtwS0d%2BhSvZqV1Tj3AdeXbxC35cfMJyUy%2BY1UhkI4rHrDQxnAuH113o3tFF%2BRcY9tnj8Yo1cmavumiEfKQ46KnAD&X-Amz-Signature=3b70608024bba8730f55fed52f2c6d7505bb1cd0cb3050d56f31d35e1fcb62e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FID7FS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9iMforajSe44pP4h4Kz2rlZS4B1mfYTzktQE694fRKAiEAz4UmrNe4mrq%2BmnGD%2FwAJT91jcX2uLeF3UKzfcpTWr3IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDBbWLYdvZ4XXpPGqyrcA3HSe0FbaAhEjJszYeQYQZ%2FbB8Tg02Ioaz8ZfQBTv23Ptg7pErzYGRzKIRHelf6X7q9QNfFk0YG%2F%2FDLT%2B8rPJ68rV0rI89witKQT84linO3w9cB1AAOLq7cAS%2FCssz7wejlOgEZmeJCS5NFV5YyAAnrw32nASO7vVDUWgKBVY%2BLBRa0wug1i1u3iWwIg1sZttK5ZQuVjygcWZ1DcFZo1y0X%2F6nYXRvUbsdzb6fiFwddPaiBirlW02DKjWt0y158ZpCb10pWdpS0qz4olpi9K7Wv6RXOY0QKRz6%2Fnm5JxSQeMPm2FVlYG%2B5OJVJjrwH775qL%2B6fecdpZZ8dhCERYE67mjEJpRnTTTGVzVKX9aoqEQIptL0aw7r17WDLap%2Ff%2FDpcXwl5QrI7jNlUDETBgh6%2BsgpsQo%2FxbfGNC5rBSY7rN3B3hERmA8H1wG6ycyW7HBWqtL322jnazeKMbaWB7uCAem7YvrTlTmLHRlPaqOFM4dStf05%2BGw1962HRkS3Hvx6mnWWmDsyr%2BGKoyl5Y5RNhD%2F5wK0%2FXNbAYzgmHA3c71PDINzryTkjz8bIDHfAIcWRnLG5BtGHxN8miGYwD2k7eFcinv%2FWpNOyE86tjnMndOF%2FnM7M4AEo0tcgVoIMISl7MEGOqUBLsMXHywwJTSvcU9MEKyB6goOKa03UFb7l34K5MxPqn6O4sFlEnOJS0yu2cZTslPQj2g3aiVuTSmavqfTCctpkO70N0tXcGu4AjvbE7IbRIKflmX2Rgtp0p0gcJA6wRfsKv7IkxJKxkSeHJHavBzDlpvdJBqb4lRhK19SkRVpU768iP2DDAgWO0Z1Eo7%2Fftw9WVS6JJxwRDsXeuoXiMu2OlB0xAx0&X-Amz-Signature=53b4ee0b30a9ab3b5e27e9b7e816dba961b4c2f6c0b2db9bc0cd6e42f6273d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPZ3LEV3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjKzrTOp4M7k17KuHV8OAJAW9Hz%2FQF9CBlqUy5wtI1gIhAPt2uE8VwlD870nuedV6ZOpqUi%2B%2BvStzsO5o3oNv%2FzvjKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTXWgtfS0vWL%2BpE4Aq3APM7PFTnd5Uzi0Ayk%2FerMqz%2Fb5fRdfz4xVmNt6ozGRLM9g2mZiuWrSeJGnHdoYwzHqU4pOF%2F0QB%2FRgMkDSNpBNwvuH%2BlKTyEn3m6KOHH2uygNzSrZzkCQyoCRZARc4UgR3vrqJu55Wf1pGP3uZUb3Wp4AKouLC90ShtJ5km3CCKW46cZ7yAlsSzyuXi3DucdoTzaTyHg4uHzF1XAXTEPoTLXP2Fznqo8FFU0GW5B2jBtt6AQNdaR1PAC2y6ZzsFSeyy5VBfDxL5Mgl1TMmsBwApECrSUA1%2BF9amI08Oi%2F3CmHgL8PGE7xV7at9mlRLbXCebpmVyK1p1VDrD92K479v43zVyxqDo2kRjczlZoWVBXVO1T5wCxO4iysMZJ3VMCzyebKhF3%2FkYPxermPZ709fDinQOk2h2OMvQFuyPksU9VC5WUJXwTYHEAfYCkeY4jstSA2JtUyYRqVtypMAxgwbe4bnBqULm2sojEfwLe3vXnggPap5H45oOQa7K1dvacusKRYO7MvmUotg%2FSBGReLuaCKHzLUyjNH9eL72EuYggZQUm8Nhqd4Fgpj3%2FMnvuF43QEFOhtWyaLlNGKhGUoIRuEUxXiNIP%2F%2FYbkExQylfRp%2FMoAyKbdi3RBJMEwzC3pOzBBjqkARSof4oqtCdU%2FC5W4MmwAAK4xqvzNf14IHHgqraPhGBSY%2B97B%2B%2FGDLP5pkOiW8ZG1RBy5HEfkZW9i0wXsxHud6Atr7xqs%2BgeyFGJkqWhSK6A2vjaz2vGY1Cw4%2FGZ9BcuUIqHDggpSwp3FR4%2FMxIPRVrlbitKnGfOGPAXKDwSSpxeKsPjsWKSOiQ0%2B9mCyM0c4St%2B75gFR2AdpVpqxGLmr2eg0WuR&X-Amz-Signature=2389df2b1e24f9d3d49e48b567ffbeaafc46ad25190e1670fbeab81dfe8fd0af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
