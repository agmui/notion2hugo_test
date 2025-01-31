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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKHFHOY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6TvDTdrGUBnQkkdG%2BGZnvSwLQkc0BNvgWDQmrq9D2gIhAJPD3PVhDQLsaAwkGio3zJEotRD9vcu5fIkcwCfs%2BPoBKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBhaq7LsOStY64B4wq3AOyflZf3DOqY%2FpNL7zZ8zZYAxV4MM6zLcILKe7Dd5rThOr7wMKz2KMNgepIZdBymtZ1JXJEmiRbypaUrzHvVGBIcEHYhjZUu5enA6SF7fVJStWL%2BFhO98vu9nkjRmvLN8aKDC36kyEdFBY80EJUwW65Cdjqvfo0KWJpSHMx5o9PA5aqbR1ehbt29IUakzjaqDEnPEkAClQWDOBr0sFiAOUhYDgg7ngFkqj3yv%2FoEts%2FViyStwuoadDRnndwkCvYiSP02XB6J2oQpe4I6EROdFaEjgUHnc03lMSuSwuivRASu0gir1oPZqymM4kzxyJu%2Fla2dt%2F27B9zqOrKDYXqLVg%2Fyqy0oQkR9frIgc9C99hhMBeUEwIGtojbNAvaSoQ9qX8W9oFnu5eiLT6TA6CpIJ3jh6qYTTzD4LGxO2bKyaXnRCKFW3d1yLTN15U2fERaIKBo0NhMsh%2BKAqovkOARyFobG2vDkG629TDd3rGLoBRgo%2FLbJFuvOWHVLdMjh8J%2FAYtBoYg%2Bq9EBt5NTraDeVBVGXGrF5iJj0bjkHexiyPpDDuWAEuIMOVZherRDUnh75qUpP%2BxwJ7qmduuOP9O8Tkk%2Fq3owY2YN30E6LE9oGL2ZaOjDryCUdnWdAiGjajDzlPW8BjqkAb2ZWgtT%2B8yrofBxkmSUE9NQb7SgFrbhzyVGnmaEeP7Kv4V1po4UY344Wdxo3WfMhgbMvw2ZzcVLcJk0Ggspbo2TF8au5BXAYitvAqQHLVTe5bNcj6TLyxtmpj5kWfd%2Bf9wTSimWfe81%2Bd%2FK0fWf7FY3f%2B3JInmKIz8TcVQfJg1rtJyDRBJ4fuM1HVA4kVsGoKMAnk2Z3ejbiep54Ll%2FcODQlhA8&X-Amz-Signature=5d0d19fec08b2167eddda9907719a7d23a18dd607f368e14ae1eac4e912b4182&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKHFHOY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6TvDTdrGUBnQkkdG%2BGZnvSwLQkc0BNvgWDQmrq9D2gIhAJPD3PVhDQLsaAwkGio3zJEotRD9vcu5fIkcwCfs%2BPoBKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBhaq7LsOStY64B4wq3AOyflZf3DOqY%2FpNL7zZ8zZYAxV4MM6zLcILKe7Dd5rThOr7wMKz2KMNgepIZdBymtZ1JXJEmiRbypaUrzHvVGBIcEHYhjZUu5enA6SF7fVJStWL%2BFhO98vu9nkjRmvLN8aKDC36kyEdFBY80EJUwW65Cdjqvfo0KWJpSHMx5o9PA5aqbR1ehbt29IUakzjaqDEnPEkAClQWDOBr0sFiAOUhYDgg7ngFkqj3yv%2FoEts%2FViyStwuoadDRnndwkCvYiSP02XB6J2oQpe4I6EROdFaEjgUHnc03lMSuSwuivRASu0gir1oPZqymM4kzxyJu%2Fla2dt%2F27B9zqOrKDYXqLVg%2Fyqy0oQkR9frIgc9C99hhMBeUEwIGtojbNAvaSoQ9qX8W9oFnu5eiLT6TA6CpIJ3jh6qYTTzD4LGxO2bKyaXnRCKFW3d1yLTN15U2fERaIKBo0NhMsh%2BKAqovkOARyFobG2vDkG629TDd3rGLoBRgo%2FLbJFuvOWHVLdMjh8J%2FAYtBoYg%2Bq9EBt5NTraDeVBVGXGrF5iJj0bjkHexiyPpDDuWAEuIMOVZherRDUnh75qUpP%2BxwJ7qmduuOP9O8Tkk%2Fq3owY2YN30E6LE9oGL2ZaOjDryCUdnWdAiGjajDzlPW8BjqkAb2ZWgtT%2B8yrofBxkmSUE9NQb7SgFrbhzyVGnmaEeP7Kv4V1po4UY344Wdxo3WfMhgbMvw2ZzcVLcJk0Ggspbo2TF8au5BXAYitvAqQHLVTe5bNcj6TLyxtmpj5kWfd%2Bf9wTSimWfe81%2Bd%2FK0fWf7FY3f%2B3JInmKIz8TcVQfJg1rtJyDRBJ4fuM1HVA4kVsGoKMAnk2Z3ejbiep54Ll%2FcODQlhA8&X-Amz-Signature=b4bc5e112b51dd8c1deadeb8e82a0e516fcf1b1dc65099e9e349e2048f43f2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PSSYFMD%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxLc%2FDob5F7LQdxg5DOrOSmHiRngjKI4ZRx2zO9I4azAiAi4HtbOIuQo%2F13fb98x84Lw5l5aJy4%2F8NfiY3EXCb9niqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM8rkjAQYU4huiTRHKtwDFtU5CNH%2FI6DTAPmKRplqs8rFD3Jfy6lKpYzJl0QwOGK9yvzoRenfxGJxuFcNQGC%2FpdfMNmhPxy5b0Uk9OyBqrI0Ftjy7hj8JqCZEUfgTOvEgBhioq620aXSrqogUvs5%2B1u%2Fv3Jd8HNXjd8dDmAVmOq9srxrLGea2O59ShSvOs8i6DBPMDzWVisksfamnESlCgmL1NyMAm01Ma07jzQhNRoryw%2F6YvBZTAE5scSADB5QN2Q6POJ289TtjhD3chcSuKOSnsnQfH3JkgO9GhReEPXo%2F7jPoiHnX%2BKuIMWvUzi%2BSixrMUbBt9%2BzXJHX9jWzWSZbTTRn1loEk%2Fq4s3MLuQBwvbpNJ%2F1WOSv69ta05IVBgKM%2BCuax4baFE2lfnEbhOho6PX6pvtL8SV9c3yTiJnNfT2cnisselbA1XtbhnTxGLiOp4Hj5GWejx1hUat8MPwOhOC00RFqthU8mB9rws0GvXzFQNQEt%2BbSjasX%2FFrkGWGh7GerqPHJpzYE0yP8HtXIVnAOzDjIGqXitdPiwB9phb58tOxke%2F4oZGJYDcI3%2FGuCYBPVc2Zf136wFbvbHajIU%2BROnoZJhNBLlwFOLK8CcNcUtK7B5%2Bfcls2CaWB%2FnY%2FP%2F%2Fmgtilm3Pu7Mw75X1vAY6pgE10W%2FN0Sq62m4Lhc71PwyF4tCNdE4hdrA6N%2BXFP%2FU6bucKg%2BNBGXx1KgS56ugzjn1ZM6KgWC1ws0ewzrEvSUsB0SAj7XaufrdomlhV8QcJrza1bB%2Fm3vkPIAnSdYb0G6OKESbJvN77C8wKV5hO2QBKHGtpnqK6UVrnJ6PeAQ84SrB7Kx0CQzGsCEgNqHzmDqY6NeDiIrGuKoAZUqB%2FC6BGWRX4Ub2P&X-Amz-Signature=ab6597c34a01139739a6ef2b0597763c95c6a67119daad8f9190495a99c0525d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4SL6GH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXeP6MRbLHzx6jQNWp%2FwOaSdSOKNsMYI2tLGr6LaxSNAIhAK0ilk9s10BLASWFzxc8n%2BemmOBQuu22VhlwSoerhr2pKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcSvsTa9cf%2BrV0Z1Uq3AMYkMZz4XFjHPa7oZhwFzZ55wPiZYDrbJc01%2Bf%2FIPabeRCiEk%2BxWb1CBKuerNWuyphRZIH1BuKZj6pXkHmYEGpmpykVL7xrhXWN1omfToD3zcel4Gl0j7cl9txPOvSjyphJw%2FwPm3jsZpipMK9V0ttXxnIk3pIU5CCnYtHTL8nZfkjHHr2Ik844bcKAEm28ltstjPxujcEOV57VLgrSbXUeP9fH2BZaYsMXMOGX9bTmlSC1lBT5EgCkPQ2r5ZKNkCNDcvocH7m7Z8Vsr2k8KlCPEQ%2F5aI%2BMu8exyngaUa5lV0%2BxTwEwLJrmJF59rvQutPVZSI7DGg3ijMl7cjI9jt6iBXfzi3lm9ZlEiv2lHHQXlzHLGqLJ6isVoMMz%2FGADDqYzrG8RcKc0LUWdiPQOrn3ulNp4FGJf3hy4%2FR%2FktuX7EhFfDOY%2B1yPiU%2BmRfX7F9%2B6r9dEs9m1zOBvxdXZhRCqeIHUe5qCG6lHoO42DpZZyYhR1QEnMn50hNjeH9hNGEMTE3rjVZDj%2BHas7bIsKbnjn892kCmOEg9eq2w%2FIBKkuKa3crDDL3KteOpWxBSS1Y8a0ay9Cjk%2FiSj97WmT3F2TDyHw%2BAXd9uemiliopn8UkD%2B7fpgk20q5DlzK3ozDllfW8BjqkAUgajwlrZaWTCuDNXf7WIr9p7CTLLl41jnwJne8JuGviuVw3%2B80T9JSLU10aWJH6j6ya0%2FoQV2Eyli0UJ%2Fczs3k1YzjgN65yleQ%2BktmREoDqOgsIKBzWTQbVSQJg9vRhJ2LZBjqclxKfmz6jn7lml5RKHuBK3nxdg%2BzyLRK1E93QA8aIpzUnQzIaONuuiwDrR0uGwe4jnyXOQLxTU%2BU32wGhN4hN&X-Amz-Signature=601f203e8a3bf027e122f80ae1a5a87cc7416f8e3d885376d688d8cc7932afc9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGKHFHOY%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B6TvDTdrGUBnQkkdG%2BGZnvSwLQkc0BNvgWDQmrq9D2gIhAJPD3PVhDQLsaAwkGio3zJEotRD9vcu5fIkcwCfs%2BPoBKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBhaq7LsOStY64B4wq3AOyflZf3DOqY%2FpNL7zZ8zZYAxV4MM6zLcILKe7Dd5rThOr7wMKz2KMNgepIZdBymtZ1JXJEmiRbypaUrzHvVGBIcEHYhjZUu5enA6SF7fVJStWL%2BFhO98vu9nkjRmvLN8aKDC36kyEdFBY80EJUwW65Cdjqvfo0KWJpSHMx5o9PA5aqbR1ehbt29IUakzjaqDEnPEkAClQWDOBr0sFiAOUhYDgg7ngFkqj3yv%2FoEts%2FViyStwuoadDRnndwkCvYiSP02XB6J2oQpe4I6EROdFaEjgUHnc03lMSuSwuivRASu0gir1oPZqymM4kzxyJu%2Fla2dt%2F27B9zqOrKDYXqLVg%2Fyqy0oQkR9frIgc9C99hhMBeUEwIGtojbNAvaSoQ9qX8W9oFnu5eiLT6TA6CpIJ3jh6qYTTzD4LGxO2bKyaXnRCKFW3d1yLTN15U2fERaIKBo0NhMsh%2BKAqovkOARyFobG2vDkG629TDd3rGLoBRgo%2FLbJFuvOWHVLdMjh8J%2FAYtBoYg%2Bq9EBt5NTraDeVBVGXGrF5iJj0bjkHexiyPpDDuWAEuIMOVZherRDUnh75qUpP%2BxwJ7qmduuOP9O8Tkk%2Fq3owY2YN30E6LE9oGL2ZaOjDryCUdnWdAiGjajDzlPW8BjqkAb2ZWgtT%2B8yrofBxkmSUE9NQb7SgFrbhzyVGnmaEeP7Kv4V1po4UY344Wdxo3WfMhgbMvw2ZzcVLcJk0Ggspbo2TF8au5BXAYitvAqQHLVTe5bNcj6TLyxtmpj5kWfd%2Bf9wTSimWfe81%2Bd%2FK0fWf7FY3f%2B3JInmKIz8TcVQfJg1rtJyDRBJ4fuM1HVA4kVsGoKMAnk2Z3ejbiep54Ll%2FcODQlhA8&X-Amz-Signature=0df8f0b4fb375e73a57762cfbdfcdf539807ed1be8c4e104fa75ee4f9072c56d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
