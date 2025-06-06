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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB6VZ6E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDZsn2ZI9ZkncqXjiCmDDVnJ4brvo%2BCzsVsPHKnDY1IpAIhAKyXKQ82ASQzGBaG%2B%2F32SJIMqToGknMKzwdj1wsRwLFOKv8DCFcQABoMNjM3NDIzMTgzODA1IgwkCLqvQkm50e9Ra48q3AMU8H7yn9InPE49PIPMJgBrD6n3I%2B1FFXDz9lryo%2Fp5wcVIOBq43yojZhiknJ9dYDowcAHcNcINwJnXIPiga4EjXUQ12eSAo0eqxbGndDayOsAteaIWU1UVf1ZtKMCR3l4YhZDzxPzqdejmd6gaSVIt8ec0d1WiL37wpHLFaPRcgWVrQeQrxsitIIW5QXLAtACAjsTwDjz1AgxpmFm7TxuEEbS0RhwbSzudYUqc1WbT9MbJ1LIwrIKQIeHfWuTWfe%2FBFi8WlF7q4khXJhBxhWbVEuhH7U3T13gjRk1OKu9L6hrUX%2FHMEdEIaTTW3tPw1AwLrMb9tm0Au2t9R7F4YzqCAvrYR2zGLWBoofJ0OAc08r5JDabbxpFrfG7cOj4%2B4DJY5%2FfZ%2FT9GcedYZcIdjUSYsBX5X%2BtMHKTMEc6jE9ABEXveg5R4U0%2F%2Bmwj71Ce00INyRUHbNN9hIXDYL5Vyc3GjSTwlZXCxvWbICQ8e24sO9JWiDaZj6FapOggHR80C0HxpNW8buZortUPRc9pY7Pah108ivL2nCajQHzYnIBzcZxa3sceEmJqsDpUxTEwzi0KKuDjnlCHZ0kcyBO608APh4OW2o1daNTd1tOSxs5ATyvrePE%2Bf3QAzt48psjCDk4rCBjqkAVQBgbLRvBbs4jnplqkE%2BqeiSbLhxOuxU6iSpDx7uE7paBhYsF%2BAPHelHMeKZZkch1Um8QfanoIVtVlj%2FdvA%2BdhfBRnmEt1JZDEGtuOGiW1zPrAOE8%2BGg0DsmOB9WpJ%2Bl4JOeG1qsbTzewCnMRI7ILsRFO6%2Byf8DSrEsfRqVig0B4HRfRYidCMlZS9swmHEXzPC3Fd4993dO5rTLJ83EiQO7msaz&X-Amz-Signature=710f282c8b543e01dfe9f2d7331b0bda711e095ce684d2abad8cec6a02ce2be5&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB6VZ6E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDZsn2ZI9ZkncqXjiCmDDVnJ4brvo%2BCzsVsPHKnDY1IpAIhAKyXKQ82ASQzGBaG%2B%2F32SJIMqToGknMKzwdj1wsRwLFOKv8DCFcQABoMNjM3NDIzMTgzODA1IgwkCLqvQkm50e9Ra48q3AMU8H7yn9InPE49PIPMJgBrD6n3I%2B1FFXDz9lryo%2Fp5wcVIOBq43yojZhiknJ9dYDowcAHcNcINwJnXIPiga4EjXUQ12eSAo0eqxbGndDayOsAteaIWU1UVf1ZtKMCR3l4YhZDzxPzqdejmd6gaSVIt8ec0d1WiL37wpHLFaPRcgWVrQeQrxsitIIW5QXLAtACAjsTwDjz1AgxpmFm7TxuEEbS0RhwbSzudYUqc1WbT9MbJ1LIwrIKQIeHfWuTWfe%2FBFi8WlF7q4khXJhBxhWbVEuhH7U3T13gjRk1OKu9L6hrUX%2FHMEdEIaTTW3tPw1AwLrMb9tm0Au2t9R7F4YzqCAvrYR2zGLWBoofJ0OAc08r5JDabbxpFrfG7cOj4%2B4DJY5%2FfZ%2FT9GcedYZcIdjUSYsBX5X%2BtMHKTMEc6jE9ABEXveg5R4U0%2F%2Bmwj71Ce00INyRUHbNN9hIXDYL5Vyc3GjSTwlZXCxvWbICQ8e24sO9JWiDaZj6FapOggHR80C0HxpNW8buZortUPRc9pY7Pah108ivL2nCajQHzYnIBzcZxa3sceEmJqsDpUxTEwzi0KKuDjnlCHZ0kcyBO608APh4OW2o1daNTd1tOSxs5ATyvrePE%2Bf3QAzt48psjCDk4rCBjqkAVQBgbLRvBbs4jnplqkE%2BqeiSbLhxOuxU6iSpDx7uE7paBhYsF%2BAPHelHMeKZZkch1Um8QfanoIVtVlj%2FdvA%2BdhfBRnmEt1JZDEGtuOGiW1zPrAOE8%2BGg0DsmOB9WpJ%2Bl4JOeG1qsbTzewCnMRI7ILsRFO6%2Byf8DSrEsfRqVig0B4HRfRYidCMlZS9swmHEXzPC3Fd4993dO5rTLJ83EiQO7msaz&X-Amz-Signature=25773e8d17a1673e89dd445eceda0d2f5a5e71b05d25332b799d195ffb95ba85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB6VZ6E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDZsn2ZI9ZkncqXjiCmDDVnJ4brvo%2BCzsVsPHKnDY1IpAIhAKyXKQ82ASQzGBaG%2B%2F32SJIMqToGknMKzwdj1wsRwLFOKv8DCFcQABoMNjM3NDIzMTgzODA1IgwkCLqvQkm50e9Ra48q3AMU8H7yn9InPE49PIPMJgBrD6n3I%2B1FFXDz9lryo%2Fp5wcVIOBq43yojZhiknJ9dYDowcAHcNcINwJnXIPiga4EjXUQ12eSAo0eqxbGndDayOsAteaIWU1UVf1ZtKMCR3l4YhZDzxPzqdejmd6gaSVIt8ec0d1WiL37wpHLFaPRcgWVrQeQrxsitIIW5QXLAtACAjsTwDjz1AgxpmFm7TxuEEbS0RhwbSzudYUqc1WbT9MbJ1LIwrIKQIeHfWuTWfe%2FBFi8WlF7q4khXJhBxhWbVEuhH7U3T13gjRk1OKu9L6hrUX%2FHMEdEIaTTW3tPw1AwLrMb9tm0Au2t9R7F4YzqCAvrYR2zGLWBoofJ0OAc08r5JDabbxpFrfG7cOj4%2B4DJY5%2FfZ%2FT9GcedYZcIdjUSYsBX5X%2BtMHKTMEc6jE9ABEXveg5R4U0%2F%2Bmwj71Ce00INyRUHbNN9hIXDYL5Vyc3GjSTwlZXCxvWbICQ8e24sO9JWiDaZj6FapOggHR80C0HxpNW8buZortUPRc9pY7Pah108ivL2nCajQHzYnIBzcZxa3sceEmJqsDpUxTEwzi0KKuDjnlCHZ0kcyBO608APh4OW2o1daNTd1tOSxs5ATyvrePE%2Bf3QAzt48psjCDk4rCBjqkAVQBgbLRvBbs4jnplqkE%2BqeiSbLhxOuxU6iSpDx7uE7paBhYsF%2BAPHelHMeKZZkch1Um8QfanoIVtVlj%2FdvA%2BdhfBRnmEt1JZDEGtuOGiW1zPrAOE8%2BGg0DsmOB9WpJ%2Bl4JOeG1qsbTzewCnMRI7ILsRFO6%2Byf8DSrEsfRqVig0B4HRfRYidCMlZS9swmHEXzPC3Fd4993dO5rTLJ83EiQO7msaz&X-Amz-Signature=b5379a31c4e9d5c89c30a769f3b9f55c3cded385b211fd3057a73f68c1576d59&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDN3YK4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDeWAS%2FgWf6Uaf1mlag%2BkictDbXSfasPmfiAtVnl%2BAFyAiByngFKlPk1EpcDGCl4qLbVMl64zNH8%2B%2FQdXAgllMmsACr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM6xqorbCaWIKB5pGGKtwDUvWjoH4Q37cJZjqD1kuAbqT%2Bjrl2TiVSaVKYcJo5KKlftne5p1oIyWRuplfVMNPxnlX%2BqpeR9%2FZo0HPuP%2FDbeJ%2FEMYwfltLyOSipg0ldxl2Vp%2B0EIGjnjdnr52BxhyTi%2BLudX0Wg%2B3NJX%2B9ADHTBubeBbHu0lbIPiXM2u2sg1KTaA6rY7jAS002o%2FQDyponBAB7ZZWXGAhm%2BsdmB4SO%2BKuPba1sZ7EzndNtqoTHz6TYM3HCzpuhoubgSovkVjsvxy7%2FLN4AZJN4ckyhjSdVROL776hwGgmD7yx8CD2sfryKZLd%2F3PLEj5%2FcYJNMWMiw41EqMriE5Qzooy039e2Ui3Dx3eV%2Fcp3nSkzI%2Bb3SAIRwt%2BhED97QiO%2BC1519mZ2EBPgLkonISlLvqYg0q0JFzM6Y9bZ4PsFg%2FQwSp8xE1anmrod56mDmAr2lo%2BphQoQzOSNHZ96ur%2F27rDeqMue%2Fn0bvDtmfbz8yCpJ8PTaI9G%2F4cciQwaifeL5RsSKOQjxpEnT0z%2FDRyz5Mcb%2B69eG2ZL28TcUVwDbad5Ifp90%2FRPRlWWp5xq%2BDAuSGkCkPDADH28ikrFoqqzDDis0%2FU3frex7gkHTZbPqwgN%2BKES9hdfDF%2BW0H5Hi3fGz8NcY8w4%2FaJwgY6pgHYXM2%2Fk%2FdMTt46FaDLpgR4xYAxjZLXWvvOPuV9KYgVmI4Y9%2BAoOoU46z36K1reVkFgZML54ENtkUJ86iDWR3JZQhe8usEOD5r7%2B5cznXjsuefnJDJJ2pf1A3hkTIejeUYs%2BTPhXGxI%2BBJzOuPJLEGxYgavyZHyMP7UO4ygJ2fHpcstEyIkzBhIGd8odzFuIR7wPp0gJRf8g4lRxcvZFOcxTMCds35%2F&X-Amz-Signature=06cc627e1a9ff5bff3a7d129fef3399ff9de2c54a15f847f7d1e8761e9b49f86&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEA7B6C%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAYb61fXOwMZQ6g8c3k2VViekpKogB3FpgARDaTDDN2mAiAprzL6bEZC6UW0e0A2jcS4LwbGsSx7AUNiFLgn6Fjnoyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMdnLTWJNciIGvo1WlKtwDPtoixRSJ0Vg07aO8FL%2B4Z%2FIn9PVZ5rmlyCqpvjxQ9dUt97Eikv0wq1eB8rKGD2eLPgVVXeTXN18ixfj6ivkkyccyaWzRdAeplQn2HkfIdwvliDfUBUZ9QSxliykIMtXRJUKeS8CRb4sViEAaa1SvTEnfedDZ0VKPX6FBq2MIdDtyeB5LMA6cmafL%2FUxFbyNaHurc0ic98SztLctasC9S7sMOfvve9IxPYR3NWMoJwXnhOO1mtc87VTrQLYinudAUx2SHyNDjIw62nOZoyNXS518J7e%2FOHW43n7Z%2BiuoMPkQeEN30ZCKu8YOJ8UhshxpoSOPOV0EpTKA7RF%2BCpcR5w3hEdMnPdpdMlGcdV85SmOzX6paCALxI5T4BQLYR28qV6qqDYQK3F3mYmxc0JSj2jjh7tD9bPcS471b0fQIOmOOq8pmSHXTspVU7Jsa0tW7OM4rGnSCAKACVpXxzfd5zdDPDfCkQqYZTRbp9iU1lh3cW6TwdJdTn3pSnQx2sow7rMNpjyOPOPai357q7xuSV1vd1%2ByCRoO%2FW68h0kkgu9pM5q65Gdc40TvxbEZiXj4fVGHpRjaJQ%2BvBV8KCE02LK1%2FT%2FaroTsPgUUAYmNIhUT%2BCVcRBkL2jEg6MXEJcwzreJwgY6pgFNMAZzZPJ5ECBuSiVtFZMJr6AxbmPn0%2F5%2BySKsKXmHTpvAqRD8JHPSHX4oXd68uqs7nA%2FY0%2BfbSe9poGvvQM8PvdjGHErAJQ9KMJDW6CHeHSAnNGCwJzfCLFf%2FhOTZywXR0SppK21Tgyskxy9eaObG9sU%2BDDZln3pl3GQiLTs023BJnD1I1%2BIGYRfGKrGbm3244%2FHZDuH7j2sv9jSGGsWhaBDNLUiF&X-Amz-Signature=b7b0296370917c039e1001f1d5bef2fe0f480d543df0d2454ac96f1da8bf3b94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZB6VZ6E%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDZsn2ZI9ZkncqXjiCmDDVnJ4brvo%2BCzsVsPHKnDY1IpAIhAKyXKQ82ASQzGBaG%2B%2F32SJIMqToGknMKzwdj1wsRwLFOKv8DCFcQABoMNjM3NDIzMTgzODA1IgwkCLqvQkm50e9Ra48q3AMU8H7yn9InPE49PIPMJgBrD6n3I%2B1FFXDz9lryo%2Fp5wcVIOBq43yojZhiknJ9dYDowcAHcNcINwJnXIPiga4EjXUQ12eSAo0eqxbGndDayOsAteaIWU1UVf1ZtKMCR3l4YhZDzxPzqdejmd6gaSVIt8ec0d1WiL37wpHLFaPRcgWVrQeQrxsitIIW5QXLAtACAjsTwDjz1AgxpmFm7TxuEEbS0RhwbSzudYUqc1WbT9MbJ1LIwrIKQIeHfWuTWfe%2FBFi8WlF7q4khXJhBxhWbVEuhH7U3T13gjRk1OKu9L6hrUX%2FHMEdEIaTTW3tPw1AwLrMb9tm0Au2t9R7F4YzqCAvrYR2zGLWBoofJ0OAc08r5JDabbxpFrfG7cOj4%2B4DJY5%2FfZ%2FT9GcedYZcIdjUSYsBX5X%2BtMHKTMEc6jE9ABEXveg5R4U0%2F%2Bmwj71Ce00INyRUHbNN9hIXDYL5Vyc3GjSTwlZXCxvWbICQ8e24sO9JWiDaZj6FapOggHR80C0HxpNW8buZortUPRc9pY7Pah108ivL2nCajQHzYnIBzcZxa3sceEmJqsDpUxTEwzi0KKuDjnlCHZ0kcyBO608APh4OW2o1daNTd1tOSxs5ATyvrePE%2Bf3QAzt48psjCDk4rCBjqkAVQBgbLRvBbs4jnplqkE%2BqeiSbLhxOuxU6iSpDx7uE7paBhYsF%2BAPHelHMeKZZkch1Um8QfanoIVtVlj%2FdvA%2BdhfBRnmEt1JZDEGtuOGiW1zPrAOE8%2BGg0DsmOB9WpJ%2Bl4JOeG1qsbTzewCnMRI7ILsRFO6%2Byf8DSrEsfRqVig0B4HRfRYidCMlZS9swmHEXzPC3Fd4993dO5rTLJ83EiQO7msaz&X-Amz-Signature=5d5ec12dcd93f487b5b41ba2f1dae47a66d632bedbd3d795d34ba7c1f55b1c52&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
