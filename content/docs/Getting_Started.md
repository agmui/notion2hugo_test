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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVWEXCC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFDl4NKVZNJE2TRTRuc0K8zAhmJcZWDAq0eThvEKYKmoAiBUDrOp%2Fb3DAG8u4iSG5BTxr2Hozpn966%2BX9DqOC7TCGCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3SIdbnKd1iPdCSoKtwDsyCO1QL1UdwWxRP%2FwE0djkBGBUqUsEev7BlwWSVGG0M8K%2B6tXlqOK7rdiqh9Ry82lN5sIEoJIdghF2z4%2BbjMH0ZHSQiyogvz0CQEDQFsrRwEO4HotvJsv2n%2B5VZnujjx3C8sGxLcwf%2BvWd4fzF5Qcze%2F0NXhNznOmVJBRhZOwuTu3K5B4b4CpmczhOd5Qhgh%2B4uuxyjbdw%2Bez7bzRFbURGep3IlqYngYJWPOK1M79g3iEfpoj9MNbrEj3%2BOSjyabWOT%2FTjJv9b9XEFi0FWj92LP9sc%2FvF%2FGFo8obvlzgvDkOBzD8nVAccTdK1iam4jkXBj23EIX5GnuhwjpeALCFQ4GQqv4eRNw9pdQa21oRzObL9gDBimF2WBu186y5vUs8l9aLz5JN1hiAw1AJGXnMD9YVf6gFFHBGjZhr2PwVOJdv7gE2PVRhVN2hKMTFhWY5HikDh15bDIm0JmZV%2B6CffbzvxVl66WOO1IIPtmbAYYw9zUI7o9oN6QNgElaxGWZYtHFXgDvJvSgTPKKXjKiPh8K3pUlMB4mJ%2BkLEHPB%2BwycWtYxbKaRJwyU99NNQfUO358HsBd9Ur9Z9A8U0tdhxDizBq%2Bho7PRfFaLh4RmYgMwWm71s6vb1%2FTRKNh4w38XxvgY6pgF%2Fm888N2HBouyIMyI75jWTIYAspVvkNedYZIkFDZrdpZrR1%2F5JdMWzxvcIJ6WHR0PTb6SzbJPaMy4lK0KxCzjukJnwwKUbRSRYmDPvYNOLNkbJRvYC15PwhboHMUIj4SojnopLTJGQbFfQk1u2t5mNKiySzCtEDc2LJIEq8GmxPqbKYFvX%2Bxnzs7tq0Z%2BQA7M0OfVNkejq9Ka7c70Y36au170TVZld&X-Amz-Signature=97c7ac194ebb972b085c9689f40e89e3276c5fe9043568366f9b7397b78bed21&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVWEXCC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFDl4NKVZNJE2TRTRuc0K8zAhmJcZWDAq0eThvEKYKmoAiBUDrOp%2Fb3DAG8u4iSG5BTxr2Hozpn966%2BX9DqOC7TCGCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3SIdbnKd1iPdCSoKtwDsyCO1QL1UdwWxRP%2FwE0djkBGBUqUsEev7BlwWSVGG0M8K%2B6tXlqOK7rdiqh9Ry82lN5sIEoJIdghF2z4%2BbjMH0ZHSQiyogvz0CQEDQFsrRwEO4HotvJsv2n%2B5VZnujjx3C8sGxLcwf%2BvWd4fzF5Qcze%2F0NXhNznOmVJBRhZOwuTu3K5B4b4CpmczhOd5Qhgh%2B4uuxyjbdw%2Bez7bzRFbURGep3IlqYngYJWPOK1M79g3iEfpoj9MNbrEj3%2BOSjyabWOT%2FTjJv9b9XEFi0FWj92LP9sc%2FvF%2FGFo8obvlzgvDkOBzD8nVAccTdK1iam4jkXBj23EIX5GnuhwjpeALCFQ4GQqv4eRNw9pdQa21oRzObL9gDBimF2WBu186y5vUs8l9aLz5JN1hiAw1AJGXnMD9YVf6gFFHBGjZhr2PwVOJdv7gE2PVRhVN2hKMTFhWY5HikDh15bDIm0JmZV%2B6CffbzvxVl66WOO1IIPtmbAYYw9zUI7o9oN6QNgElaxGWZYtHFXgDvJvSgTPKKXjKiPh8K3pUlMB4mJ%2BkLEHPB%2BwycWtYxbKaRJwyU99NNQfUO358HsBd9Ur9Z9A8U0tdhxDizBq%2Bho7PRfFaLh4RmYgMwWm71s6vb1%2FTRKNh4w38XxvgY6pgF%2Fm888N2HBouyIMyI75jWTIYAspVvkNedYZIkFDZrdpZrR1%2F5JdMWzxvcIJ6WHR0PTb6SzbJPaMy4lK0KxCzjukJnwwKUbRSRYmDPvYNOLNkbJRvYC15PwhboHMUIj4SojnopLTJGQbFfQk1u2t5mNKiySzCtEDc2LJIEq8GmxPqbKYFvX%2Bxnzs7tq0Z%2BQA7M0OfVNkejq9Ka7c70Y36au170TVZld&X-Amz-Signature=6f62bcc5ee435cc5ae9b07405c59d2abedb68bf90706606af6217366906222ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGX7QBP4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCg%2FlVWlWu0sND2P9i22IlumXD2aAHqOKiIsuApQZocKwIgec9m8s4HMX200PfHi3%2Bp1Y%2F5kQrLcPNtDj3Ew9EbJOgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjmczkdrurjAa42dSrcA7vhCBCLc%2Fsr8h07f2%2BrhwE8ryeTKixn1ha9HxQnx3NsnAjRS2IswLDaWWtJOfz%2Biikxz152bfEC%2FfxbEGvaQD517pfUuNoTaXq6KVEs6at8mFuxzAtRHCBjoDtyV7%2FT%2BrRUl7ETamapbF3PAZRTlnOEclEMKMRKIFC%2FeD9Zl%2FcjcY1ZMCRR%2BFEi%2FU9NkP3lCGd24a3%2FXcI5gzld3IdjckMXeI%2BTmOXDOH26G%2BuwqQehGEoIQ5lVe8uUt1H923UXVp82rY8sAAxCtzH%2BhfR%2F8HuVq4LA57qNGnaBkC8kK9tcf8P%2B%2Fss%2Bpgsxp72PzYYrm9qpxWfStHYJRWQjoN%2F6MPq6abWfxEtgg5yWAYoRfKpHmerVTm2s2BRuZFjRh39BBSUPhp8CDOCHrLkK55imD92W85Zy%2FTcVunxS50959fiAEmZ1um5%2FZTX78Um%2Bbdt%2B%2BjbUfC2W9hyT78x8GrYWqkBW8fZMuQvmOjjMynNbuy23vwEUVDITO7Lpd6sa1TzeWvU6vLD3JL6DBHkWlohz9fbjh0l0Uiw1bP%2FZI4JXbZQDQz5yMRkOpJyRCVh4%2B763nWij2pCPO58ZAvMKwXSo0TNL8tcQwl4CiQX2iAhKdAAf7eHtmBromcTodxUCMPLE8b4GOqUB7I2fswG%2BUH3Y%2BHeigu9ItJycGm%2FsW%2FW%2BOc9zMDgE5otfLBHKAmWGtW5mv9oU%2FBRonYfzdWOT79aOTHQCsJP2mqAyn1Lcjt4NfBDLXgoUCzp6cKIotAwlA%2FKgZnDHxEnf8IDSlXsh3LHXVUMFW7d9BnsmKj83LYojYrrgFrgYqXjvAagqhDzbybUJBvX%2BrtPo2BSCiY%2Fu3unWPqdOMiOdgmaDo9QP&X-Amz-Signature=fe248fcaa7b9d220f6c31f507b7aa84f2e58db4002ab47afba8f67f69554315b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZAX7B5O%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCdqjLSPDUhTdIKHoMUUwrG0LP0m5b12re4OyGXKSMx2wIgTaZzQ%2BG0WUhfGfdgZAkAZtNfZmGQMxX1KsD9gT0n2GAqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLroc913MgM6sHsgrircA3kiy5kdbyajTdQFrrFyMv80kFzKxrUyqPFbl8zM%2FeexFr%2FLBrZltWM2Td%2FP5ZqNbvx%2F3hiqE561BkD7XlLKdrnnJgovMPdllC57TeqMaIaw8sPoEpngN5g1LeV5avNIA%2FRnVgFgYy%2B77dO3nny125GspElPijo0VuzL1JTuYC9VMA3kIpQo2J6h%2Fcm%2BBBK9fVTSgAf5EXtH3jM9DEXlftGTGHLSoLxTzCRs14%2Bt8pxphMehVHQPrFspLkgAzJSPqhIQklcsDYEKMI4HVv9mCWkmo1zvqhlmHXoJ5dMbhIEW%2BAqAatKTtvQpxkZXV7efVPUac7iF3qaunBZNSCuZxg5byxtQPRK0ioOT4iIg6Itllg87qQqj2S2piTlTg%2B%2F3PHV84DchsH2zzJAHmStXbJg6NHcNQEXZZnYGJUcPW%2BOKU7DSioX4Bx5%2FHVMK%2FydA392iYwPiXOsPuM7%2B8LIvn25nxbOmosshWCK8edYjZZrOeSdhmhkZP9FV8Z5O7%2BQ6eDOxECB8fNGTwIPnIlDB5UZkfgeP5jQmgWfWbQ30lVPObLVcg0eXxFtZyVadReONe9Sr65evQ03EyBA1KP4v0WeH%2F6GRMGSm3NAQIitRczcbeZJR5ucJOA5UoaObMPjF8b4GOqUBlqyzRTE41euzbUxT55gmchm3nkla65BVaGr2XLh5%2B6KPVqBKVU9stgMXyfldZdQio4yx8Fl1C2USz8dD%2FHnoA8VZFRvSP0H%2FcXzRdvBq5fbAZ5O5ejjk3ExoPIru6EosnlQddbh9Yd9DGhwNkuE0yIlImQ6n%2F9t%2FYRPewyyDVZHyD6ygcy3Dg%2Fy%2FTHlOXFcnmlIf48F0qYMj0%2F04%2FSrmcxGcdPf5&X-Amz-Signature=811e4d5ddfcd4ed0a70f5925e9de652943a45d7c510068ae0e2ccb376229a08f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVWEXCC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIFDl4NKVZNJE2TRTRuc0K8zAhmJcZWDAq0eThvEKYKmoAiBUDrOp%2Fb3DAG8u4iSG5BTxr2Hozpn966%2BX9DqOC7TCGCqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMk3SIdbnKd1iPdCSoKtwDsyCO1QL1UdwWxRP%2FwE0djkBGBUqUsEev7BlwWSVGG0M8K%2B6tXlqOK7rdiqh9Ry82lN5sIEoJIdghF2z4%2BbjMH0ZHSQiyogvz0CQEDQFsrRwEO4HotvJsv2n%2B5VZnujjx3C8sGxLcwf%2BvWd4fzF5Qcze%2F0NXhNznOmVJBRhZOwuTu3K5B4b4CpmczhOd5Qhgh%2B4uuxyjbdw%2Bez7bzRFbURGep3IlqYngYJWPOK1M79g3iEfpoj9MNbrEj3%2BOSjyabWOT%2FTjJv9b9XEFi0FWj92LP9sc%2FvF%2FGFo8obvlzgvDkOBzD8nVAccTdK1iam4jkXBj23EIX5GnuhwjpeALCFQ4GQqv4eRNw9pdQa21oRzObL9gDBimF2WBu186y5vUs8l9aLz5JN1hiAw1AJGXnMD9YVf6gFFHBGjZhr2PwVOJdv7gE2PVRhVN2hKMTFhWY5HikDh15bDIm0JmZV%2B6CffbzvxVl66WOO1IIPtmbAYYw9zUI7o9oN6QNgElaxGWZYtHFXgDvJvSgTPKKXjKiPh8K3pUlMB4mJ%2BkLEHPB%2BwycWtYxbKaRJwyU99NNQfUO358HsBd9Ur9Z9A8U0tdhxDizBq%2Bho7PRfFaLh4RmYgMwWm71s6vb1%2FTRKNh4w38XxvgY6pgF%2Fm888N2HBouyIMyI75jWTIYAspVvkNedYZIkFDZrdpZrR1%2F5JdMWzxvcIJ6WHR0PTb6SzbJPaMy4lK0KxCzjukJnwwKUbRSRYmDPvYNOLNkbJRvYC15PwhboHMUIj4SojnopLTJGQbFfQk1u2t5mNKiySzCtEDc2LJIEq8GmxPqbKYFvX%2Bxnzs7tq0Z%2BQA7M0OfVNkejq9Ka7c70Y36au170TVZld&X-Amz-Signature=96f28e47cec24851900d14443c93f8089464aa9d0862ffe657438131cefee293&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
