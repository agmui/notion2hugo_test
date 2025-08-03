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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WASECCA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5DfXx9K6r2Mj6xd5WvsgpAHzK%2BrbUymfN61AIjnVH3AiEA6l%2FrqWdfLSSL259m9A1WVH%2FDpzL4w0mvLaIMtjZ655cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLe9NkHc84tm0gLRcircAyOEQI5Iyhdj5LiDq6nlggXFKpGc3gyJ%2FJoi%2FzbiX%2BBbbXtRyzatLLx8yXAnxUm6lPEV62h9EyDhKwuljo8PpJnW9G8HPHzZfy%2F8F77grPDR7imf3%2FwU3HGQY2W7v6yFoxsCPI2russ6dASJjGaYTBdHwXYmrlB0KLlh4Ch5M3VpFWlEO2VzKm2JKLacUHjNKRWzvDqPO476GZJHuOtufOrGotuxyPYr%2BkMAYyofg4ER4mP35zcMGSd64YyZh7iN5JwtkEi0FgwB%2B%2BWknoJHiV2buN4BvqC%2F1QA2z%2FDcWdl7avc3MbFOxVnt%2FUNWxKelJ4RUIi%2BxGrNUXjHxXi4CdCmrlq33b0Uxd2iahdBzVKJE53xVoi67292MFuNqt8ezMyjz7cUESoqGieQgZyNO2VgLbbaArCNDsEH6oVMqA200fkhAaLmbaOQ2QEZPoRLXZtHVucQ2ToogshQj97iTX71DwglricrS7TxIEwE3ErPYVfbE8I4jJJmvzHJBfyFIIHuZ15Qagta%2BXxkzMKNeQwrmKpqQORcvxU86yg7MH2Ka5qqyp8ooBV5aXIPlZmxyfyha868RJRdkX%2BWTD%2F5k2H8dAm%2FIEVvI64th3o27bD6Nsg9N2g4xnWv0FZ%2FuMKqlu8QGOqUB856SeHxqJn4Tj5gchibVA4l41yvexQ%2B2cE7xkz7hEGqYQRqf11%2BOmhZgw6M0xToG06ZnjKlwO2ehzhV95DCp97obe0rYoDdxbT3f0vjRZJ%2FCR58Ads2RuFxhuMosLEZcmzSFOS5WAVA1ntb0fjGrHTEj17Xfgm0Yckp%2BTvFu8hclYZs1yZjSBpXriBMlpU3jM4sUQx4Tt82nA1YlLWelFGcmul4q&X-Amz-Signature=52613db8658bd6c59fdc99f66a98e9b53b99d582541c5257238456ae7e5931cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WASECCA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5DfXx9K6r2Mj6xd5WvsgpAHzK%2BrbUymfN61AIjnVH3AiEA6l%2FrqWdfLSSL259m9A1WVH%2FDpzL4w0mvLaIMtjZ655cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLe9NkHc84tm0gLRcircAyOEQI5Iyhdj5LiDq6nlggXFKpGc3gyJ%2FJoi%2FzbiX%2BBbbXtRyzatLLx8yXAnxUm6lPEV62h9EyDhKwuljo8PpJnW9G8HPHzZfy%2F8F77grPDR7imf3%2FwU3HGQY2W7v6yFoxsCPI2russ6dASJjGaYTBdHwXYmrlB0KLlh4Ch5M3VpFWlEO2VzKm2JKLacUHjNKRWzvDqPO476GZJHuOtufOrGotuxyPYr%2BkMAYyofg4ER4mP35zcMGSd64YyZh7iN5JwtkEi0FgwB%2B%2BWknoJHiV2buN4BvqC%2F1QA2z%2FDcWdl7avc3MbFOxVnt%2FUNWxKelJ4RUIi%2BxGrNUXjHxXi4CdCmrlq33b0Uxd2iahdBzVKJE53xVoi67292MFuNqt8ezMyjz7cUESoqGieQgZyNO2VgLbbaArCNDsEH6oVMqA200fkhAaLmbaOQ2QEZPoRLXZtHVucQ2ToogshQj97iTX71DwglricrS7TxIEwE3ErPYVfbE8I4jJJmvzHJBfyFIIHuZ15Qagta%2BXxkzMKNeQwrmKpqQORcvxU86yg7MH2Ka5qqyp8ooBV5aXIPlZmxyfyha868RJRdkX%2BWTD%2F5k2H8dAm%2FIEVvI64th3o27bD6Nsg9N2g4xnWv0FZ%2FuMKqlu8QGOqUB856SeHxqJn4Tj5gchibVA4l41yvexQ%2B2cE7xkz7hEGqYQRqf11%2BOmhZgw6M0xToG06ZnjKlwO2ehzhV95DCp97obe0rYoDdxbT3f0vjRZJ%2FCR58Ads2RuFxhuMosLEZcmzSFOS5WAVA1ntb0fjGrHTEj17Xfgm0Yckp%2BTvFu8hclYZs1yZjSBpXriBMlpU3jM4sUQx4Tt82nA1YlLWelFGcmul4q&X-Amz-Signature=d7d56e9f72df690b37e477211bff01d66037f9dcdf4faa3c482fe0b195f6dd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WASECCA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5DfXx9K6r2Mj6xd5WvsgpAHzK%2BrbUymfN61AIjnVH3AiEA6l%2FrqWdfLSSL259m9A1WVH%2FDpzL4w0mvLaIMtjZ655cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLe9NkHc84tm0gLRcircAyOEQI5Iyhdj5LiDq6nlggXFKpGc3gyJ%2FJoi%2FzbiX%2BBbbXtRyzatLLx8yXAnxUm6lPEV62h9EyDhKwuljo8PpJnW9G8HPHzZfy%2F8F77grPDR7imf3%2FwU3HGQY2W7v6yFoxsCPI2russ6dASJjGaYTBdHwXYmrlB0KLlh4Ch5M3VpFWlEO2VzKm2JKLacUHjNKRWzvDqPO476GZJHuOtufOrGotuxyPYr%2BkMAYyofg4ER4mP35zcMGSd64YyZh7iN5JwtkEi0FgwB%2B%2BWknoJHiV2buN4BvqC%2F1QA2z%2FDcWdl7avc3MbFOxVnt%2FUNWxKelJ4RUIi%2BxGrNUXjHxXi4CdCmrlq33b0Uxd2iahdBzVKJE53xVoi67292MFuNqt8ezMyjz7cUESoqGieQgZyNO2VgLbbaArCNDsEH6oVMqA200fkhAaLmbaOQ2QEZPoRLXZtHVucQ2ToogshQj97iTX71DwglricrS7TxIEwE3ErPYVfbE8I4jJJmvzHJBfyFIIHuZ15Qagta%2BXxkzMKNeQwrmKpqQORcvxU86yg7MH2Ka5qqyp8ooBV5aXIPlZmxyfyha868RJRdkX%2BWTD%2F5k2H8dAm%2FIEVvI64th3o27bD6Nsg9N2g4xnWv0FZ%2FuMKqlu8QGOqUB856SeHxqJn4Tj5gchibVA4l41yvexQ%2B2cE7xkz7hEGqYQRqf11%2BOmhZgw6M0xToG06ZnjKlwO2ehzhV95DCp97obe0rYoDdxbT3f0vjRZJ%2FCR58Ads2RuFxhuMosLEZcmzSFOS5WAVA1ntb0fjGrHTEj17Xfgm0Yckp%2BTvFu8hclYZs1yZjSBpXriBMlpU3jM4sUQx4Tt82nA1YlLWelFGcmul4q&X-Amz-Signature=7c5a93243343cb337ccbd026c5543667b6343cbc2e03987e09e1e5fd72dd3af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3Y2ZMH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIQMhVVSEkavHl2UHHtgG4uWor5TQ47YU04umhSVcHBAiARXv85VUNlKX%2BtbV0nPruC2A%2BJXkoxaN%2BDe3JD4FtXlSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMdzDJu%2F2pWuPNcr5sKtwDnBR4zEyY23jT2sbnnZ9tpHoeT1EFYqwwAz7l7DTFp%2BUWqC1lxzRjRoR9X0cX7ObPUeHsuLOcaLQnin%2FEf25cqKLstXES%2F5ro0KierxxYjzI%2F3iexxtcGvhrr%2F%2Bkn33llDAM1j%2B%2FxOp3BEFTFCGKhuthmzZ9qr78jIMpuUWFmuTa3xR%2FPQA439i86lZBNXWLfDwEIAcM3uLE9ekGgj6Z6kgO5BXST7U4kRJSAetojOJDDp3H1%2B42B%2BAZx%2BOxPJ2mdGIt%2FOY2cP9M0ri9psJi6HNi%2BLrMZT%2FzfRsUB5azxvWr5Ex%2B4xHHe7GJbKmnS1uwjA8ON7TFQh%2B9cW%2FGjoA5a3NBApKeQEZfTf1Jrh2nLuYC4HCJfncYxcx6npCUOmNeFb1irCRLx1t%2BmzWrQEuayjkJcYdGNvIe3LgeRewop9zwzkNjhL%2FYpIHEE7EbNGa6CJ4nkVIcQUqqLCDPXYMfbfpAVVW%2FG%2FkH2pnwz4smwjxswhHO%2FOGjO0uThZX7n9pwTxWXhRmde98mtV%2B9c7wHSAgLRHlp1vDVb1W6LAlGOHRCXN8TfSqQYxQM5%2Bxrd1U%2F8yldKOBlv%2BWKURs7eJrtam1AK6y%2BfMUu5YL4JYnCVBB5jOy%2Bon2viicZqj8kwpqG7xAY6pgEgiQNNWOlMuE8PHi6sHAC0vNDoXnHMs1IFoBeZIZYYQYIEK9gYyoXadV35bUA7%2FrxM1bOhJnScUvne2AM05ucWGCOCtDhk4ah4nFDlejzETq48qq%2Fs0dxl54n2WLv8sCHL0nbIyStjbjnzj7NDNKcxfw8oIJsrbinphfHAsFWTbGuJoTiYFKSJBLFCJU10zR24dtoLVHVXdoIrpZCIUA5AoaTIYGuW&X-Amz-Signature=fadfc90d981fe4339b3f89cf394e452880332ba99226dd6a8858ed760a8bee03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2SXQNR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMrfMYO0hc9x5AjcroQQolOxfyk50RgGZunusDHfZQvAiEAggm4HtI2dny2UjIJz%2BuGtgKN4b6sEb0fW7Ax7lNdG%2Bsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO6XVJhWj7gLxZ5WWCrcA4DcitB263Xwq0lbcPF6hUCjgL3IAEGjMC%2FISBsmoMAF8rcLH%2FNOv9WUrm326j0chYmDtyfUysZXMufkIk%2Fpow35twcQ81x4OWVBy5JLsDAH6Qe%2FoqjCCqEExdz0pToH6Hh%2BoF2sPvm4CkE9I8wJPc5aNxpjt9Ny5C8IT85T1%2B58%2F8G6mob9CdP1YtFoQZpMpuwjT2DlFMZOeOadyEG%2FBc6h3P%2BeqXOcWhVyyKIKmyy7gVE4MNuK7YHWFwbfb7in%2BmU%2F17fu2aT5kY%2BSVMP0j9Of8X8CC%2FUBorJgcB948n0axB3FoMWPypRbCarptZ8PSvfxd%2FWS2LamaZtVPYuHXXQvUjp9LbzMrXUxHi4w1JDzc1%2B0YbEaRvpJAvSdohntL6W5DIjWDJdDdMaovGx62E8alC9dKA%2BLrplRiGA%2BqU8j0Dfx%2BMS%2BUkPwgH%2FxHfw3dknAd%2BjSFO1PIW2G%2BxIwNn%2B%2Bp8hVR7xnWQFo4HmJmaofJQ2CzryufelsK9H7odhTN%2FRL76tC0bohtqOfInI4ZuLe1pt4kZ59KWI2oddqKG6LeUxT7tKzh%2Benj%2FBQ3GPtlZJvGd8zGvBtqTHAF5fbc4xO%2FP%2Fq3taFxvCCe9kh1f1Fqur6qkjHF2GQZcNGMISgu8QGOqUBZuVOYcBwKEzB1p3K3boU%2B3tGE00blsv7GH2GwBezTSxAwymD%2FvpybPa8ZD4xzXM1ZXyRHHfbkfn7hzUTRh9oSOac3LCs9RRc56x3YprjCGiGQYP3fH0MjutVHd5Kq%2FLK1H%2F59%2FGoLe6Hf3Rdk5MxeV0ID717%2BAg2Js2A1zO8RjVYj0M7lMNuBWvEfv8j4DkJ3QqlhTlA34QIasf5O2L3qfCeBj8%2B&X-Amz-Signature=c6c8e7348f723bf9c2b5f9d4c5fabb06dc231017c0cc1db00b2f092d7aff5504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WASECCA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5DfXx9K6r2Mj6xd5WvsgpAHzK%2BrbUymfN61AIjnVH3AiEA6l%2FrqWdfLSSL259m9A1WVH%2FDpzL4w0mvLaIMtjZ655cq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLe9NkHc84tm0gLRcircAyOEQI5Iyhdj5LiDq6nlggXFKpGc3gyJ%2FJoi%2FzbiX%2BBbbXtRyzatLLx8yXAnxUm6lPEV62h9EyDhKwuljo8PpJnW9G8HPHzZfy%2F8F77grPDR7imf3%2FwU3HGQY2W7v6yFoxsCPI2russ6dASJjGaYTBdHwXYmrlB0KLlh4Ch5M3VpFWlEO2VzKm2JKLacUHjNKRWzvDqPO476GZJHuOtufOrGotuxyPYr%2BkMAYyofg4ER4mP35zcMGSd64YyZh7iN5JwtkEi0FgwB%2B%2BWknoJHiV2buN4BvqC%2F1QA2z%2FDcWdl7avc3MbFOxVnt%2FUNWxKelJ4RUIi%2BxGrNUXjHxXi4CdCmrlq33b0Uxd2iahdBzVKJE53xVoi67292MFuNqt8ezMyjz7cUESoqGieQgZyNO2VgLbbaArCNDsEH6oVMqA200fkhAaLmbaOQ2QEZPoRLXZtHVucQ2ToogshQj97iTX71DwglricrS7TxIEwE3ErPYVfbE8I4jJJmvzHJBfyFIIHuZ15Qagta%2BXxkzMKNeQwrmKpqQORcvxU86yg7MH2Ka5qqyp8ooBV5aXIPlZmxyfyha868RJRdkX%2BWTD%2F5k2H8dAm%2FIEVvI64th3o27bD6Nsg9N2g4xnWv0FZ%2FuMKqlu8QGOqUB856SeHxqJn4Tj5gchibVA4l41yvexQ%2B2cE7xkz7hEGqYQRqf11%2BOmhZgw6M0xToG06ZnjKlwO2ehzhV95DCp97obe0rYoDdxbT3f0vjRZJ%2FCR58Ads2RuFxhuMosLEZcmzSFOS5WAVA1ntb0fjGrHTEj17Xfgm0Yckp%2BTvFu8hclYZs1yZjSBpXriBMlpU3jM4sUQx4Tt82nA1YlLWelFGcmul4q&X-Amz-Signature=049281b7843f8e2a7ca5488cf1eade8da92ea8b6ff8705d6d79fd9c5e581c4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
