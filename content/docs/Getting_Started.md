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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDASCDP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEJK%2FJb%2Bik8HtBoknD3VYsio2w6MdUbOUmOAGfUOopZlAiAoB4rMo2lR9OBt%2Fe4Zc1XBj8RGSIu6tdbTF8pqVN%2B0Kyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRa7hybU5z8edur4zKtwDnXuyWzbrMn2JXkde8rzyqznBuM0lNinJKqTC2HDQ97t1hMs6HGb8v8DJmeayVdVQl%2F5w3w4HUkNwSE%2F9j9T07Dfm0nsBkwS7sGne8ByPBfCqNG7dvCSqRAQD4ZZWl3YcYNwI3UI7%2Bn7FFZJtrCyHTXa92wIHbUt7qEEyvYytp86HEHwiaM%2FYY%2FfjpNifbmBQgRe7ZYqubn3i6HuxHRohifEC8a2XuiokwNT8vJdQk3h0fpfB3csSSq9n4hXL6W1PJ5x3kwTgOZzRdHvom4I8YIXL%2BkYmGfSvPF%2BfslFZQlv4HbVXArZsaLcsKey01PXOusz1opJ7ar5YfP1pAujWYQxr1DXrY%2FLiK%2Bg5qRXASEHaaSK%2FjktwdWtS1PA1cEyId39X3Ulqe0%2FlNHqgwE%2F4hwVcq5zoCT0hJgoVfbHLHyJkhh3R8YB1C18dMXENVc4RdbRi6sTZTJTT6ysUgQLnqeBi0DgoBrKAxaJ%2BW6u%2Fp24jM30ZC6fOc%2BbzlCTGxkicGtLIcN%2Bn5v%2F0Z8JekUfHVaR%2BTq2O6zSwIAflNF6pc31DXF%2BIIeTiYXAy7rTyFsMZv%2B%2B6qBiBHNQzkjFnKWg2ouFmrvkT31XjRKLndQI9y8eS1jx3bLNWOjWcfoAw17HnvgY6pgH3piyyll9WYB1sXNV0%2FBtgME%2FyyHnXgF4ngvs1Oq4gX%2FUMWjgEPSCmXOabcTevF9bTQZtgFqOSMjHER3BTIqA6NZB%2FZd0mkBZPS5%2BjGfup6U3k9ZrLqyVt1nLBOW40pvQmP6GsvIcHPj0c1aGlQiVUL%2Bl6CqwS1FRf%2FLpcIQXQAE0PmQcirFkpm3ZXsgtNvuRo7XNK1X5d6AGEoXYjzfVr7w1mDbRQ&X-Amz-Signature=e30da6df15a0cb94ed08644f602de2fee70d9ac7c1f1cb2eb33805fc6adb7d08&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDASCDP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEJK%2FJb%2Bik8HtBoknD3VYsio2w6MdUbOUmOAGfUOopZlAiAoB4rMo2lR9OBt%2Fe4Zc1XBj8RGSIu6tdbTF8pqVN%2B0Kyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRa7hybU5z8edur4zKtwDnXuyWzbrMn2JXkde8rzyqznBuM0lNinJKqTC2HDQ97t1hMs6HGb8v8DJmeayVdVQl%2F5w3w4HUkNwSE%2F9j9T07Dfm0nsBkwS7sGne8ByPBfCqNG7dvCSqRAQD4ZZWl3YcYNwI3UI7%2Bn7FFZJtrCyHTXa92wIHbUt7qEEyvYytp86HEHwiaM%2FYY%2FfjpNifbmBQgRe7ZYqubn3i6HuxHRohifEC8a2XuiokwNT8vJdQk3h0fpfB3csSSq9n4hXL6W1PJ5x3kwTgOZzRdHvom4I8YIXL%2BkYmGfSvPF%2BfslFZQlv4HbVXArZsaLcsKey01PXOusz1opJ7ar5YfP1pAujWYQxr1DXrY%2FLiK%2Bg5qRXASEHaaSK%2FjktwdWtS1PA1cEyId39X3Ulqe0%2FlNHqgwE%2F4hwVcq5zoCT0hJgoVfbHLHyJkhh3R8YB1C18dMXENVc4RdbRi6sTZTJTT6ysUgQLnqeBi0DgoBrKAxaJ%2BW6u%2Fp24jM30ZC6fOc%2BbzlCTGxkicGtLIcN%2Bn5v%2F0Z8JekUfHVaR%2BTq2O6zSwIAflNF6pc31DXF%2BIIeTiYXAy7rTyFsMZv%2B%2B6qBiBHNQzkjFnKWg2ouFmrvkT31XjRKLndQI9y8eS1jx3bLNWOjWcfoAw17HnvgY6pgH3piyyll9WYB1sXNV0%2FBtgME%2FyyHnXgF4ngvs1Oq4gX%2FUMWjgEPSCmXOabcTevF9bTQZtgFqOSMjHER3BTIqA6NZB%2FZd0mkBZPS5%2BjGfup6U3k9ZrLqyVt1nLBOW40pvQmP6GsvIcHPj0c1aGlQiVUL%2Bl6CqwS1FRf%2FLpcIQXQAE0PmQcirFkpm3ZXsgtNvuRo7XNK1X5d6AGEoXYjzfVr7w1mDbRQ&X-Amz-Signature=1758a274f5094020f591a2064ba045b91c8072759d399380aab2c1ba113e7d67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KYKUZHB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDiRLUikWuuo0Sppa1eBt8bGZ8ZNsPFw7Pt1PUF0KNtBgIhAPg%2FxpdOafYKvu8DNStZ4zXlGoi%2FWYSr9PkTU1MigFtxKv8DCGYQABoMNjM3NDIzMTgzODA1IgxfBYaIYE1%2F4gdbQkEq3APkz6SAlTPLOoMMejof2C1IBfpKQiPfrkhM8fFMEptph6GAXfRKK7Uub2S8CsiXCgeKB80jUA8hV%2FbR9rEcTEJoxZnFI7%2FBxxhe%2B0%2BzclG52pDCMirWTk58KpBEETmCK9cB7OT3j0uLlpGjA1tpoMtIuiEduSmHoZrAezypkfntcoPCUUaYfYLhO58WlTDYiqlVgi072usOkaizjVWOe2oJxXzxQMlSfGXscmVPftIAEyhEJABc4pE0OKlKskTDOtmfin1%2F9V7D1cbILpnZtZUpo1nMHucOTL9jNlSS9jkVX33KGlSIOqhNKKlggjoj4tVeJmRtdFrNYF2tAP0ft0mAqH%2FGZU0Fms4aaHgR0uvkMVeZjBko4gcyZR7Jmcb60kChRnyP5TTnrUMUAm1GloZbJmaPn%2BFoqHkPHz5KJCV7rnW5Vg%2BEFo7mx4jGzJRyYtApgD5uXDjYKV8DDcFWcAcrsinTHq75TA%2BkIC0Z%2FYw0oTqY2xYltPb%2By3pka%2FrzQmaI8ZaYTrOYFxu0rd4Pt2rXuBj3pj6Ix4iGQbWJN8E2BrLLdAWyneu2YDd3FJQdXe1Qbohrs%2FNdC7E6TKU4cbHZPc3kSZmqVwk%2BG4rpZocp1aPN64vMI6f%2FFv795jDEsee%2BBjqkASYzjn4CXlrvFrmY7v5LhqZHfJlnqIc1IuePUg4mNQwGurUNpbulMpo%2BPXIKnv%2BQZbi8Tds7gW%2BrNhTlrekaCY7n%2Bjqb91OCODcLfo3fHEwcaRaX65pw4G3IFfOjedlxdjvr32DsfKhDmaIUt1nuxjRSQyQ5kAuCh%2F%2FZO21zj710QcgeiW3znGNy8Oo%2FwATIDXpZy4vUvZP0MU5de2050UwA20ap&X-Amz-Signature=5aa1e9e72c9360ebb8a2183c05e9a91b0fee6a311a35b257bf80297c42168a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKDZXTM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCAm130XfiosCmkmB2SB890h%2F1tojJ6R9tYLAS5%2FqpadgIhAJqf07udynb6rczg1uAb9FuVxSwlfiLx15e3DcjboI51Kv8DCGYQABoMNjM3NDIzMTgzODA1IgwxXGgcj5Vmyddq1nIq3ANrP86Z3GxCHW%2FSEtFHIDpscx78n%2FrnBE4MvipcUhN7vtdX30ztFbN%2FDk20o5Shcfd9STevbvjXdMyBTk5rUPjzmHEpl166hgdnMsIQwRLm%2BqIl0FSkVzFhxrfBjCVy1TsqRfnlw9ChcLT0%2FS0vsqBhasDKS0jv31rNNdCs1JTJ2YYdBIumQLVe6tkO41Q7uBPN4ixLJc1hWg7dBNExzGSOscByi93cINTQx88k4z48DQ5pLn99FL72JuBxzvC9EVOoJpeUqlxln9mA93px4DlVn6wk5tLiafrshLKP%2BLSpxTJ%2BHzE3CYA%2BZNfF3r%2BYja%2FAhCkuDIqwVp%2BON%2FFwI3cMBVbMTOcgrA9Ov%2FlVztI%2FWI9aG2C9pB6EEJz969F6MHyyBo5%2FyIHgzfB4%2BCsrA0EwukfzPDu9J5PQ6jKyYQ%2B66s2dOUm%2BU4uzthyv57IpSWzbseTqbvzWL4rdSPqKRkUiy5gK4vT4fs6BD4gkxICxn1mVJ%2FmSkj%2Fm27uea8Y30zXpjgBOLcYETcN3FB%2BIwIDCRxiwWHihvbQZmwyGqB9YQhGe5QBRv35t03H%2B2X0oEiUzvYkKdcb5eWdPVfP15kvj2jCEVru38QX1oOvkv%2F6V0Ft7Td9gJbUTQIro4jDOsOe%2BBjqkAdpiZZhw4%2FSnjnPnOCrQawrAhrt8tUL9gKEeHZsWhsTtvw4W4jhPWH5dmW9c%2FbUoPtC63IonrzRvjXYW7ddpre6ulce3bALTPsyxcTPyq%2Bt3diQhQUyuPiT%2FaF54rkKxK7rWwUgz9YI65Zy8tk65MA54EBS%2B0MeDAqW7SNFq2XgHDzaTa5cpOhEE9dcxE0AemMmrfPUkzfPma2CLF%2Fzib4EcF3PK&X-Amz-Signature=c00ca1763f9b246a7faaa441a1b479c73c7c637b5a44addc2b80c24f9d132af9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYDASCDP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEJK%2FJb%2Bik8HtBoknD3VYsio2w6MdUbOUmOAGfUOopZlAiAoB4rMo2lR9OBt%2Fe4Zc1XBj8RGSIu6tdbTF8pqVN%2B0Kyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRa7hybU5z8edur4zKtwDnXuyWzbrMn2JXkde8rzyqznBuM0lNinJKqTC2HDQ97t1hMs6HGb8v8DJmeayVdVQl%2F5w3w4HUkNwSE%2F9j9T07Dfm0nsBkwS7sGne8ByPBfCqNG7dvCSqRAQD4ZZWl3YcYNwI3UI7%2Bn7FFZJtrCyHTXa92wIHbUt7qEEyvYytp86HEHwiaM%2FYY%2FfjpNifbmBQgRe7ZYqubn3i6HuxHRohifEC8a2XuiokwNT8vJdQk3h0fpfB3csSSq9n4hXL6W1PJ5x3kwTgOZzRdHvom4I8YIXL%2BkYmGfSvPF%2BfslFZQlv4HbVXArZsaLcsKey01PXOusz1opJ7ar5YfP1pAujWYQxr1DXrY%2FLiK%2Bg5qRXASEHaaSK%2FjktwdWtS1PA1cEyId39X3Ulqe0%2FlNHqgwE%2F4hwVcq5zoCT0hJgoVfbHLHyJkhh3R8YB1C18dMXENVc4RdbRi6sTZTJTT6ysUgQLnqeBi0DgoBrKAxaJ%2BW6u%2Fp24jM30ZC6fOc%2BbzlCTGxkicGtLIcN%2Bn5v%2F0Z8JekUfHVaR%2BTq2O6zSwIAflNF6pc31DXF%2BIIeTiYXAy7rTyFsMZv%2B%2B6qBiBHNQzkjFnKWg2ouFmrvkT31XjRKLndQI9y8eS1jx3bLNWOjWcfoAw17HnvgY6pgH3piyyll9WYB1sXNV0%2FBtgME%2FyyHnXgF4ngvs1Oq4gX%2FUMWjgEPSCmXOabcTevF9bTQZtgFqOSMjHER3BTIqA6NZB%2FZd0mkBZPS5%2BjGfup6U3k9ZrLqyVt1nLBOW40pvQmP6GsvIcHPj0c1aGlQiVUL%2Bl6CqwS1FRf%2FLpcIQXQAE0PmQcirFkpm3ZXsgtNvuRo7XNK1X5d6AGEoXYjzfVr7w1mDbRQ&X-Amz-Signature=5c8d68538d4f968ebbcaccd36442467c6b821e8191e78ebc76f4919ee4b0e985&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
