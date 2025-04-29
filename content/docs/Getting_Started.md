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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZKVR6U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1C%2FKBJVMQzPr9JYBupNGO9ygdg1xJjT6fM7YiemYFhAiEArybN%2B2BiYpaxHrimmuPNnMNwibAA%2FHis2s2VNvzfu0EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQAL8vO54QoN7suvSrcA%2B303yau3EtjAMw1Keg2%2BgNQA1buVw49G5%2FNhBhZZ0wOvEZwnQvRepDyXSqRRYClaLvds7z6ipUZiwcHIGClhTbXeij9dm0gR0%2BquCWtHxHAD0KaEgSZ7MgMS3v%2FR8o8c%2BCnUu5FS9ORd1AnSBfTCHGFVsU8K4winKFEA%2FtQtjewQACoVHRG9%2FqGw%2BoYh8Y%2FiYmh55ojjXPmoQLAPDlUosGm9hCj%2BjYhP94iQ%2BhgvF6UAiQLrmPHxgK5zvRxZKR2qU4TtzgGMqoGwf6QaRu7F94Sx80NJRKYuLvMOQ5JqlJ8M127qY7Qb5UJ%2B%2F6zOPQwtuX5LMPiSxHmRXvVC1z2sZXvueu69EUzD0DtIck8atp6XgHAMkmbSztFs%2BBCH3IZvqahdyhixz6nNPNwFDM%2FLxCwerKGJ2xbinGHza3nxiw6L2%2FqgSjLmwx6guoHLk1eg3DDArNgJGyXQKN0er%2BsQGUwvLcmQxKo0RB2BYFK03D56duuMlMtm0WaCtTrhsytBQ4X9ZPRjAORuGEThNc5XAPhtto9pJDFnJ7yZZdmo6%2FySWGmy2oq1vCv0v9UEhFKc3ySTS9qJjKePpbQ%2B9ZnjVqv9wBTYxYIb%2BDvuvwusufsnx8IwoQbZ%2FxVIed%2BML6ixcAGOqUBWJjqzrYlJHkyVggMNfEfUdjq5ozSmKYkhYV1G%2FV0Hv1zeF5fVhaKQG7lC03gugLEj5rrQzMhM9UZNiaAi653h%2FGsFgaChpa6pKZrSXcT6WRwEGm4lDC7Imfp3dSzPlg%2BbkMDebFuzNWLOdAO0EIHv10KlRaJQw0oaVYQWP9WRpFg0XIDUedKXidjHIjVyqCOYzEub%2FMBp7HzQBXReHF2iOO1gX4j&X-Amz-Signature=c42817fd57289fe94fc3532a6dcc7a97e7349470546ec509be594608397dd5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZKVR6U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1C%2FKBJVMQzPr9JYBupNGO9ygdg1xJjT6fM7YiemYFhAiEArybN%2B2BiYpaxHrimmuPNnMNwibAA%2FHis2s2VNvzfu0EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQAL8vO54QoN7suvSrcA%2B303yau3EtjAMw1Keg2%2BgNQA1buVw49G5%2FNhBhZZ0wOvEZwnQvRepDyXSqRRYClaLvds7z6ipUZiwcHIGClhTbXeij9dm0gR0%2BquCWtHxHAD0KaEgSZ7MgMS3v%2FR8o8c%2BCnUu5FS9ORd1AnSBfTCHGFVsU8K4winKFEA%2FtQtjewQACoVHRG9%2FqGw%2BoYh8Y%2FiYmh55ojjXPmoQLAPDlUosGm9hCj%2BjYhP94iQ%2BhgvF6UAiQLrmPHxgK5zvRxZKR2qU4TtzgGMqoGwf6QaRu7F94Sx80NJRKYuLvMOQ5JqlJ8M127qY7Qb5UJ%2B%2F6zOPQwtuX5LMPiSxHmRXvVC1z2sZXvueu69EUzD0DtIck8atp6XgHAMkmbSztFs%2BBCH3IZvqahdyhixz6nNPNwFDM%2FLxCwerKGJ2xbinGHza3nxiw6L2%2FqgSjLmwx6guoHLk1eg3DDArNgJGyXQKN0er%2BsQGUwvLcmQxKo0RB2BYFK03D56duuMlMtm0WaCtTrhsytBQ4X9ZPRjAORuGEThNc5XAPhtto9pJDFnJ7yZZdmo6%2FySWGmy2oq1vCv0v9UEhFKc3ySTS9qJjKePpbQ%2B9ZnjVqv9wBTYxYIb%2BDvuvwusufsnx8IwoQbZ%2FxVIed%2BML6ixcAGOqUBWJjqzrYlJHkyVggMNfEfUdjq5ozSmKYkhYV1G%2FV0Hv1zeF5fVhaKQG7lC03gugLEj5rrQzMhM9UZNiaAi653h%2FGsFgaChpa6pKZrSXcT6WRwEGm4lDC7Imfp3dSzPlg%2BbkMDebFuzNWLOdAO0EIHv10KlRaJQw0oaVYQWP9WRpFg0XIDUedKXidjHIjVyqCOYzEub%2FMBp7HzQBXReHF2iOO1gX4j&X-Amz-Signature=a032effb7497906f7bd5df195267ffbfb73cdaa648312558f00b004b907b9636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4FCOAW2%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxccakQhnfpZTOrqKK7ZVZqNw1axGSVmce%2B8M1%2BdBD5QIgPm4%2BI5Oy64vjQucxlSZdKM7dc%2BnZtvOHX%2B0Fve9K5rwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl2xxrXDA%2BwpzA9mCrcA2emoeIDMA7VGwVq9hcAitxfwOsEqflyZ0HYzn7MO4njdMW%2F%2BcCifAhfkmWn48Vah49ILkeLtoX0Z%2FkGUVP%2FvfxlVxTVd6v4RGdiJIbRzO4Q%2B%2BI8E39ijfbcMM%2Bxn05WBFBDvAXTYw9vEQL7HShFMtD8I8r0Wb%2FBqDCWmEVyDV6F1Txq18LpInnU2b0SfZHM%2Fl7QqMZQ3ENgV98d8p2kVmpaYC2yORmKnNKklBLvVYODg9JT0DiB0WrQZkaSlDStyzZycXsdUXQ%2FmQQgLKBr1eyGAMqf94IDflU64WZ%2B1hhRmOtKYzV8dWQjL0WPPTJP05FPbuyZwZRXfJzOXEpUhQxA9FJYcPyrlLvDxa3qfTiJz%2BkK4bjuIQh6OWuGnpjnbclfYmj4wnTYoPxHLPJRvNxOLSXaks%2BZsAelxBkiwobUj0AI8BR5fK9teJ0GqKX%2FobT8n03dc9YQ7Y%2Bf0cEVHbLK5YnTakpraqojMr8NrqTMrfnkAcx%2Brx5XOb1Bvd1zyDAbV56kRylJyxird5BqSNa3avM8BFv%2B79Nf5%2BoOBLOVJHg7r8zqCIPMo3x%2Fp9f8rjGtGn3YQbtENAdxPKi3J5vLBS1kf2cOX2s7%2BJsyaANojL26C0Oh7IRpZ6ZyMM%2BixcAGOqUBFTG7gfLj%2BEMizishrpXBlas%2B2OrJqdvZeQRnqf%2FoiTyomJQC%2F%2BWjrQTWGfEBlA7Se8v440OI0zqYO%2BSNfNIlNwnhuTx2rEofvJkD%2Fxf20iQgvPpflUcJnoXs%2BR3PXY%2BV8RHT7lIkiXRVDXpXIS5U5CuIlb47gM9LolzS1yE2AGDY9IZGYvFbsbumFsLtlN3ogb%2Fm6VpIOcIzIgM76jSuJs9HYRI%2F&X-Amz-Signature=f6745636940f41de5b1ea49201d358ce80162c6145a2e9c77514176ed88bea36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UJQJ7LD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUvO4h63fdWQAcD83grsN0fIzOnROA0tZ3LtC1%2BxUEuwIhAPO0tSY2kwR5A5JlKvUGs3QGqXIOlqNl5VtAvsvvjP40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygsEWy%2FWKomo1oRIkq3AM0MdOydNiZJRdYRyxmhSma4GECJsCrbqpFJR11teePORhVP%2B0%2FyU9VY1CHDJjYoqXB%2FvrlfaZ%2B2s12RtpZSY38ftLW%2FD197FwM6dnpU1bEuSZuhfJTI0g9JbtuPo0di01bkH3GH%2BKJLlL7E2s4hrwi1uTMZdPmHigdyM1h0GfsL%2B5GiGGqCD5ESQh62p%2FEufTi3YNyWqNj50cKgWO4jNYuDVmf%2Fb9u6hXSchUKLGQTjHl1ZxYWnMMKyHtmSh9S8JwA4xQsAFyxbVikI97rNFEqDu1w75UufhnidjfJJ9eZFi48uFUlsdLXiynMhbUkGrSkcWSoAlqA9VZMH0TESSot8nLeTzWkoUQkuDbi5P4dKEzeFQaqx%2BCoN7kXhyNSt0K5y%2FkqMslIi%2B0mudc%2BHhqnzYcEY7YnIa7DBKq2x3QXeiT623PKb8Sb4zM0D5vHnvAwZDistZmEeD%2FdjR6xSNtDHUgpFzxlZruy0o%2Be%2BwC%2BQy05PLXWUuz9N7U%2FiZL6FZNpaHUzgj%2BDQoZM3%2FOyZ%2FRr9zpoe6INxudo%2Bx1jXytghSNgztbM%2B6pikL8%2Bz65UgqEtsemgNiX5LOnUSGHkh5%2FSKqwewJMpvJ%2Fi58DOaiMsfZRGIkDGfOjEWgPCODDMosXABjqkAVwxogMAP88J6RSUkBs%2BLfQlKvJoya2eCwj1bvkwZqqFVWaQrxQnmzkk%2BfpcI3QdC13kSIa05FhU%2B%2BAQ1HtZzFDIjPDmm1D%2B7z2CzzTAQq85qRSQtxHFQSkDb7KrDDYmUhsHsk9pDAOKHf5WEsDch4kR%2FC%2Fk8kN7T6R%2BQFsB8b577DbfB3YJ2f73Q2ArTVNVlpPCrBaj1DgGEVnP0GfFL%2B%2FWvUDh&X-Amz-Signature=a8123e77a1b91c4cda5bb42b1a9343bf2b89c6f8e4974cc9326276eada3d6487&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZKVR6U%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1C%2FKBJVMQzPr9JYBupNGO9ygdg1xJjT6fM7YiemYFhAiEArybN%2B2BiYpaxHrimmuPNnMNwibAA%2FHis2s2VNvzfu0EqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQAL8vO54QoN7suvSrcA%2B303yau3EtjAMw1Keg2%2BgNQA1buVw49G5%2FNhBhZZ0wOvEZwnQvRepDyXSqRRYClaLvds7z6ipUZiwcHIGClhTbXeij9dm0gR0%2BquCWtHxHAD0KaEgSZ7MgMS3v%2FR8o8c%2BCnUu5FS9ORd1AnSBfTCHGFVsU8K4winKFEA%2FtQtjewQACoVHRG9%2FqGw%2BoYh8Y%2FiYmh55ojjXPmoQLAPDlUosGm9hCj%2BjYhP94iQ%2BhgvF6UAiQLrmPHxgK5zvRxZKR2qU4TtzgGMqoGwf6QaRu7F94Sx80NJRKYuLvMOQ5JqlJ8M127qY7Qb5UJ%2B%2F6zOPQwtuX5LMPiSxHmRXvVC1z2sZXvueu69EUzD0DtIck8atp6XgHAMkmbSztFs%2BBCH3IZvqahdyhixz6nNPNwFDM%2FLxCwerKGJ2xbinGHza3nxiw6L2%2FqgSjLmwx6guoHLk1eg3DDArNgJGyXQKN0er%2BsQGUwvLcmQxKo0RB2BYFK03D56duuMlMtm0WaCtTrhsytBQ4X9ZPRjAORuGEThNc5XAPhtto9pJDFnJ7yZZdmo6%2FySWGmy2oq1vCv0v9UEhFKc3ySTS9qJjKePpbQ%2B9ZnjVqv9wBTYxYIb%2BDvuvwusufsnx8IwoQbZ%2FxVIed%2BML6ixcAGOqUBWJjqzrYlJHkyVggMNfEfUdjq5ozSmKYkhYV1G%2FV0Hv1zeF5fVhaKQG7lC03gugLEj5rrQzMhM9UZNiaAi653h%2FGsFgaChpa6pKZrSXcT6WRwEGm4lDC7Imfp3dSzPlg%2BbkMDebFuzNWLOdAO0EIHv10KlRaJQw0oaVYQWP9WRpFg0XIDUedKXidjHIjVyqCOYzEub%2FMBp7HzQBXReHF2iOO1gX4j&X-Amz-Signature=a86f2f03ea27c56fdbfd11e39aa4dbf9e423f0d0f8f279fa20064cec42a96130&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
