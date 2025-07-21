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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPU5GND%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ3ZIDq0AWbxpAC6wTsHb%2BDub1kq8j3r4od2yt9mnSsQIgVKe2qcZGqNqLtab6lzf28NYV8HTTVaOgC7S1wWqLTZEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BZJwKQP2zT8TYsHCrcA4ZAbPmDgDeRB3Cqopv5x4jRWkeWFlMFbloqDK68pk%2BIFOc0FREUiXwiTYKDpkKoA59VzYpdYM7W%2BOjRSzO711%2FOltfF98p67rGB3iCrByUxcRudpbY%2F8ylSZ3kIp%2ByQ%2BqxZ3xw933usQjXAhe5QRS4SNYs3Qu59L%2Btuo6pQnsalEagpWlexX7alL0tSKZ3Ylb2%2Bp3TmOWk9jWl40oTZa13hP%2F42T3H4nOAQ8VXxLz1LiSeA7gVEoBDePTfFbJXAxGDHHE35EkPd6XXxxSplvUqfEz4DLQD5Hg9nO4Hvc21dyDWgW%2Fjs3x%2Fk0AxrVlmG2AYppUDchoV%2BmKyXcarTh7ivZXoMmRqVDAO%2FOqkCy9bt4CJL9PhCy1Kro51icCjtdOJGu%2B3%2F7MR9zEe22mNdgF8YDw4xss8ktdHybeKm0ri7ZuQ7PHsSCpg%2Fxeu9J1tUETQHZFAYuVxfPMVNyuZkqNB1g%2F6rn6rhZfNgZA6gWx1psM%2BEEyD1xn0EmvGzxy6oLfkfm9%2BYOwOXyeRRXHOopgXPUK3XDhNY12FlWhmXVwVc2lfwLfs3KEdAsUOPvJxiNv%2FoLbgpFopOhsEkI2WkYrzbTXjKi0BUAhfxkTz2I%2FUyMILe6zvN5miuXxAtMO%2F7%2BsMGOqUBHqzDKxwCFoeYzFOn3lNbM6zXGd5BzfpzgugMO2yoPwHv%2B1fz50%2BkLGCj%2BxavAsmfUYuFMgMawYLxzdAOo4cir20A6tAVn1YIQb6twsyv4mgo7%2Bt0UidvUqjojF%2B%2B4CqIRbQhGxdwlmL7NA642ep%2FNdHW9tS3fEHi2GVqyRppODQnog2PEuf56kT6W7DmVpPQ9plsnJurEEn4xNJKUS9PfEOcx8dZ&X-Amz-Signature=51dc049770363d33d0c040a50726a1a7375a44e95dd0f1e5ddde4ec1cce0f00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPU5GND%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ3ZIDq0AWbxpAC6wTsHb%2BDub1kq8j3r4od2yt9mnSsQIgVKe2qcZGqNqLtab6lzf28NYV8HTTVaOgC7S1wWqLTZEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BZJwKQP2zT8TYsHCrcA4ZAbPmDgDeRB3Cqopv5x4jRWkeWFlMFbloqDK68pk%2BIFOc0FREUiXwiTYKDpkKoA59VzYpdYM7W%2BOjRSzO711%2FOltfF98p67rGB3iCrByUxcRudpbY%2F8ylSZ3kIp%2ByQ%2BqxZ3xw933usQjXAhe5QRS4SNYs3Qu59L%2Btuo6pQnsalEagpWlexX7alL0tSKZ3Ylb2%2Bp3TmOWk9jWl40oTZa13hP%2F42T3H4nOAQ8VXxLz1LiSeA7gVEoBDePTfFbJXAxGDHHE35EkPd6XXxxSplvUqfEz4DLQD5Hg9nO4Hvc21dyDWgW%2Fjs3x%2Fk0AxrVlmG2AYppUDchoV%2BmKyXcarTh7ivZXoMmRqVDAO%2FOqkCy9bt4CJL9PhCy1Kro51icCjtdOJGu%2B3%2F7MR9zEe22mNdgF8YDw4xss8ktdHybeKm0ri7ZuQ7PHsSCpg%2Fxeu9J1tUETQHZFAYuVxfPMVNyuZkqNB1g%2F6rn6rhZfNgZA6gWx1psM%2BEEyD1xn0EmvGzxy6oLfkfm9%2BYOwOXyeRRXHOopgXPUK3XDhNY12FlWhmXVwVc2lfwLfs3KEdAsUOPvJxiNv%2FoLbgpFopOhsEkI2WkYrzbTXjKi0BUAhfxkTz2I%2FUyMILe6zvN5miuXxAtMO%2F7%2BsMGOqUBHqzDKxwCFoeYzFOn3lNbM6zXGd5BzfpzgugMO2yoPwHv%2B1fz50%2BkLGCj%2BxavAsmfUYuFMgMawYLxzdAOo4cir20A6tAVn1YIQb6twsyv4mgo7%2Bt0UidvUqjojF%2B%2B4CqIRbQhGxdwlmL7NA642ep%2FNdHW9tS3fEHi2GVqyRppODQnog2PEuf56kT6W7DmVpPQ9plsnJurEEn4xNJKUS9PfEOcx8dZ&X-Amz-Signature=78a31157acb16e94fa5e4472ce8292df6c71f775f4c18eca0ff217a85a73a5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPU5GND%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ3ZIDq0AWbxpAC6wTsHb%2BDub1kq8j3r4od2yt9mnSsQIgVKe2qcZGqNqLtab6lzf28NYV8HTTVaOgC7S1wWqLTZEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BZJwKQP2zT8TYsHCrcA4ZAbPmDgDeRB3Cqopv5x4jRWkeWFlMFbloqDK68pk%2BIFOc0FREUiXwiTYKDpkKoA59VzYpdYM7W%2BOjRSzO711%2FOltfF98p67rGB3iCrByUxcRudpbY%2F8ylSZ3kIp%2ByQ%2BqxZ3xw933usQjXAhe5QRS4SNYs3Qu59L%2Btuo6pQnsalEagpWlexX7alL0tSKZ3Ylb2%2Bp3TmOWk9jWl40oTZa13hP%2F42T3H4nOAQ8VXxLz1LiSeA7gVEoBDePTfFbJXAxGDHHE35EkPd6XXxxSplvUqfEz4DLQD5Hg9nO4Hvc21dyDWgW%2Fjs3x%2Fk0AxrVlmG2AYppUDchoV%2BmKyXcarTh7ivZXoMmRqVDAO%2FOqkCy9bt4CJL9PhCy1Kro51icCjtdOJGu%2B3%2F7MR9zEe22mNdgF8YDw4xss8ktdHybeKm0ri7ZuQ7PHsSCpg%2Fxeu9J1tUETQHZFAYuVxfPMVNyuZkqNB1g%2F6rn6rhZfNgZA6gWx1psM%2BEEyD1xn0EmvGzxy6oLfkfm9%2BYOwOXyeRRXHOopgXPUK3XDhNY12FlWhmXVwVc2lfwLfs3KEdAsUOPvJxiNv%2FoLbgpFopOhsEkI2WkYrzbTXjKi0BUAhfxkTz2I%2FUyMILe6zvN5miuXxAtMO%2F7%2BsMGOqUBHqzDKxwCFoeYzFOn3lNbM6zXGd5BzfpzgugMO2yoPwHv%2B1fz50%2BkLGCj%2BxavAsmfUYuFMgMawYLxzdAOo4cir20A6tAVn1YIQb6twsyv4mgo7%2Bt0UidvUqjojF%2B%2B4CqIRbQhGxdwlmL7NA642ep%2FNdHW9tS3fEHi2GVqyRppODQnog2PEuf56kT6W7DmVpPQ9plsnJurEEn4xNJKUS9PfEOcx8dZ&X-Amz-Signature=521e6c3603dd33886d180f0022b91ffea0093199bc3da4cea4c7e09bb26efb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSVKL42%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3mbtFJDvV%2F7NUVVlAgp01eYIXluUZhFq%2F0oP6dkDCrAIhANSqBoalE2kKfzynTN9M0%2FFD4Pz0V6YIFN4aBv4Am9ICKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDTa8HeuLjk53ujoUq3AO2LTjYVF8PcN07mJsOJVkF57PT5DCuYeCN9iPke8E95aVlnL4t4uvrPhL%2FAu5RBlHGCua%2F%2Fl6l%2BevsDSB4F%2FjDWQxx%2B%2Bjz3%2Bzoui6%2BEoYVLZ8DoIiywmxN7lanSN1fI1leuN8dDH1uhbvvWb%2B6gqJpYejzpGWT2k96a%2FiduI3aI1XHLcXRpf0bYt%2BlvOqi9GgeaNznW5%2B%2FUnfVOfv8Ng3K1uBcf%2FGDIzkhEHosmgzvTuWk63luw1toSwd7rL95BnI4s6iIcVXhvDOd0EQ%2FTq3k4onujY2VzS2KejoLcQgpEaOPC%2BV60j594dPXXBFZPUprcWTud%2BUwpuWLCPwYLhB9NeGQkJytIMKHHua1aZ13MqDaivVUdN9UjSp8MIG0dKuQpuPj7kfLFbRt025mHFFm2fHCWBapOsbpk4ZFFg3vnEUIAARk2rur9lz%2FLt2WbS9vTem6gs1eWj%2FM%2FUGsCmjdLVjTNtdkoYMdZIo320HX0KBz%2Foa60YImWCzc3U1w1v8Yxo1o080%2FZopf7MWoDc2amGAKuE8ffLx%2FsXoM7vgBKqDRKEGL%2FdCe5QTYOUjI2BqX3POAVTCZyBBsp5JJR0RL4OB9%2BcR1aMVEXHkYoyVBHmBDeeu1a5DAn4f0kDCO%2FPrDBjqkAeWvM6J5pT%2F199BsmU2w3%2Bd646ciTQMXhQGX5nojlhlZ%2FuNmdPCcsVwUJACdF0gqDicqNMS2mILL%2BiGiBDaIu%2FY8WkkGMlCthCZorYVmYtHagLqvPk7TiBfyR7Zx5Kj06M8AJ%2BoQDuJuQYA7gByHX1nSpEL19Qj3heTMex64g3uJvXK%2Bf89lM8R%2BLUShnN8gZxkE25Lf3BimScFKEPG2OqYsmLsa&X-Amz-Signature=f5ff313188998b7a24701ec0624374c26096973d3247ca0a3aa77689202b5c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKP2K7L%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc3t5%2FcofxqdNRiea0MksvLtSEQTbFxTgXe1pAQHWh7wIgcqLltqwsSUl0RKeLvqzr07MlDrIbRg%2FZEkFJ%2BCkpsrkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV%2BkjMhb5LvssDyqyrcA0LzVs6ntxHSCJU9KkWfHG6hROCdESIulwIELy%2Bygkcz2PMZAupRj6SzDuTTcZfi00GOFRBxcUa9XHlgz%2BNgTdXg4G%2F1kWiKhMG%2FCADUsZAqMxKVUn7sNWopAZhIabjVpe4rV688hK75OkwdZ21t0x1469bMU1Bq4FMkNxHJJrLpg8%2FsGrgHKfhpB3zHXaR86zu2iOx1Seje9cOfisySlu8wEApdraJzsQeVJcPSzfdl%2BQ1rvJH%2BeMDkOqORD6%2FovtlzlXdq87N1WLnRJhNCE2R%2BcqMXNzC9SQcLMpId81tAyTY4ZEQ5h3Rz9SwYvJevJkfIuAUwGRrYCZ6oso8vy8KMWFWunrLEl4AC%2FRvLJfPlXM7z1TWP4zAoQeKBjSFk6sHsMRP4l%2Bw0nptoANgn1SmhQFTZ3ET02TtivrJh08o6S8w9K2wqB3uOce1akPAA9kzOxYgvHeDLUlAKZYw%2BJtMpDDm44WuaNDHfl91UdXyn4PUg2Y2x5rHobpM%2BTt45HcC138yHV69oemo%2B3ASwqNbnc%2Fxs8G1GXAGAMeTJc2s%2BNR4jvk5oy9J%2B8DLIcvaiVkyYCGpl8tjqYe0PujimOVLKq6gpo%2F%2B5ogbwaKjPFKxk0Nc0mQ2SU8Yye8t%2FMJ78%2BsMGOqUB88tT4CPfVG2hqnujJ%2FWxuzkFGGZYF9Zm8oFEghu13d18zmYl061CZZQi3MrR7W7LBMK6oIEUgkPprfmM8Pr5tRdr0qH3Uh1WxcIfvHS%2Fax5Kyqzrf158eaAd1VcNRCurWzfVbooRY0SybML2DNkFlAlGWRy7sBXSEd2PlRxcGsfBJzBTHodsfKmHND4cHxulRxqtRIU4EC2lAc8%2B1%2B3Q5XK911Sd&X-Amz-Signature=f9d505e1e7327351e6f850fda6de35c7e99302dd2e5b436241797121c01bfb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPU5GND%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ3ZIDq0AWbxpAC6wTsHb%2BDub1kq8j3r4od2yt9mnSsQIgVKe2qcZGqNqLtab6lzf28NYV8HTTVaOgC7S1wWqLTZEqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2BZJwKQP2zT8TYsHCrcA4ZAbPmDgDeRB3Cqopv5x4jRWkeWFlMFbloqDK68pk%2BIFOc0FREUiXwiTYKDpkKoA59VzYpdYM7W%2BOjRSzO711%2FOltfF98p67rGB3iCrByUxcRudpbY%2F8ylSZ3kIp%2ByQ%2BqxZ3xw933usQjXAhe5QRS4SNYs3Qu59L%2Btuo6pQnsalEagpWlexX7alL0tSKZ3Ylb2%2Bp3TmOWk9jWl40oTZa13hP%2F42T3H4nOAQ8VXxLz1LiSeA7gVEoBDePTfFbJXAxGDHHE35EkPd6XXxxSplvUqfEz4DLQD5Hg9nO4Hvc21dyDWgW%2Fjs3x%2Fk0AxrVlmG2AYppUDchoV%2BmKyXcarTh7ivZXoMmRqVDAO%2FOqkCy9bt4CJL9PhCy1Kro51icCjtdOJGu%2B3%2F7MR9zEe22mNdgF8YDw4xss8ktdHybeKm0ri7ZuQ7PHsSCpg%2Fxeu9J1tUETQHZFAYuVxfPMVNyuZkqNB1g%2F6rn6rhZfNgZA6gWx1psM%2BEEyD1xn0EmvGzxy6oLfkfm9%2BYOwOXyeRRXHOopgXPUK3XDhNY12FlWhmXVwVc2lfwLfs3KEdAsUOPvJxiNv%2FoLbgpFopOhsEkI2WkYrzbTXjKi0BUAhfxkTz2I%2FUyMILe6zvN5miuXxAtMO%2F7%2BsMGOqUBHqzDKxwCFoeYzFOn3lNbM6zXGd5BzfpzgugMO2yoPwHv%2B1fz50%2BkLGCj%2BxavAsmfUYuFMgMawYLxzdAOo4cir20A6tAVn1YIQb6twsyv4mgo7%2Bt0UidvUqjojF%2B%2B4CqIRbQhGxdwlmL7NA642ep%2FNdHW9tS3fEHi2GVqyRppODQnog2PEuf56kT6W7DmVpPQ9plsnJurEEn4xNJKUS9PfEOcx8dZ&X-Amz-Signature=5da4f59ac6d9bd47470a180be2101927127e3014c32c27cb19ecbd37a089565a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
