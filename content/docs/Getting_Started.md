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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XB45D6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvgbyfoooZ6UK90ikSDZVijLM4eBNdqYHIOsdeeyss7wIhAJm2Z6P%2By71WRY4phzSaJFzbGzqNQhT5IW%2FFEIixcrXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxQdHh2i9W7TwZhV0q3AMU6%2BEN%2B26A0yjsZZp5YOUPEftx38XI6A8s2s3D1So%2F1%2BTMj3qo3S0IRSLD%2FVi2N75aQdc2APsOWVblZ%2Bup%2FBpeb56Iq72hfY2iYMJy4wjhTV83UY%2BraohwIoCTKhfGTdGm89lJXRw7Oc6RTN%2F9f8ieNmqBuWmuZaO4Djfil9Iwbc3iFaC0ELfd7P5sa55ltVNUiY9nfImioCyOxoIozcNNe7NGDPHDPtPjCEqwoj4K8H3tdl%2BuDGYOABMyq%2ByHSGonDaOhOx6xqKx1GYPOnnFK%2BhfcME3gC40r6%2B1muurNPBHf8VLodMG9AdFOfeV6CZILNx2Rm4accgS5WxK5yHILJ9NDy34nDscjk%2FOf%2FsZNgbYzYXvSnmGc5QxvfcIqwBAEYkvLxIFJ5JEOY4BKh0P5IgNcBiOok6%2B2qhFqxiocq5H5q6hizReOt%2BvmRMPYda%2Fg3oSU8XWGhC2YWJRffTlW%2F8Wou6Sf4jzX1EyK5QijnklCH%2BjXch5cptSOcmYkJJkiZrrsu1%2BG09CFrm27g51g11ks9fNmmT%2Fu6w7xcx1zMvkExcOmXYu09SVM4pVzc5w2Kw6ef1auMfl4CbuVAVbkWrnvuM%2F%2Fb4f28re6I3LoP1yBJKtg0zQP%2B2WImDC6ua%2FDBjqkASs2F418vvSaajOdzGJYIJ%2BemLbzeaqybC438ybGlLo0f4XoOenB%2B2Rs6FUwa4eg1H9rl3cihJLRtO1lKKMI0PzU%2BAg%2F9T2gTf%2FHlAHHte8pGSd8%2FqMVBmUPqlzaIY%2BJGjl8kLWtyCyPzS1jIHwA5GtC3fJWPVJc2hAXj6v52A5LtRRhQ7sr3EO3ZIl1xA5%2FjOy6oxo7ULl1oWSW%2FxQu50zeKD5P&X-Amz-Signature=ff81af6cb0d30767d5f861489ba5f51d9d99b8a7b77618ee3f275d004e0fe75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XB45D6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvgbyfoooZ6UK90ikSDZVijLM4eBNdqYHIOsdeeyss7wIhAJm2Z6P%2By71WRY4phzSaJFzbGzqNQhT5IW%2FFEIixcrXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxQdHh2i9W7TwZhV0q3AMU6%2BEN%2B26A0yjsZZp5YOUPEftx38XI6A8s2s3D1So%2F1%2BTMj3qo3S0IRSLD%2FVi2N75aQdc2APsOWVblZ%2Bup%2FBpeb56Iq72hfY2iYMJy4wjhTV83UY%2BraohwIoCTKhfGTdGm89lJXRw7Oc6RTN%2F9f8ieNmqBuWmuZaO4Djfil9Iwbc3iFaC0ELfd7P5sa55ltVNUiY9nfImioCyOxoIozcNNe7NGDPHDPtPjCEqwoj4K8H3tdl%2BuDGYOABMyq%2ByHSGonDaOhOx6xqKx1GYPOnnFK%2BhfcME3gC40r6%2B1muurNPBHf8VLodMG9AdFOfeV6CZILNx2Rm4accgS5WxK5yHILJ9NDy34nDscjk%2FOf%2FsZNgbYzYXvSnmGc5QxvfcIqwBAEYkvLxIFJ5JEOY4BKh0P5IgNcBiOok6%2B2qhFqxiocq5H5q6hizReOt%2BvmRMPYda%2Fg3oSU8XWGhC2YWJRffTlW%2F8Wou6Sf4jzX1EyK5QijnklCH%2BjXch5cptSOcmYkJJkiZrrsu1%2BG09CFrm27g51g11ks9fNmmT%2Fu6w7xcx1zMvkExcOmXYu09SVM4pVzc5w2Kw6ef1auMfl4CbuVAVbkWrnvuM%2F%2Fb4f28re6I3LoP1yBJKtg0zQP%2B2WImDC6ua%2FDBjqkASs2F418vvSaajOdzGJYIJ%2BemLbzeaqybC438ybGlLo0f4XoOenB%2B2Rs6FUwa4eg1H9rl3cihJLRtO1lKKMI0PzU%2BAg%2F9T2gTf%2FHlAHHte8pGSd8%2FqMVBmUPqlzaIY%2BJGjl8kLWtyCyPzS1jIHwA5GtC3fJWPVJc2hAXj6v52A5LtRRhQ7sr3EO3ZIl1xA5%2FjOy6oxo7ULl1oWSW%2FxQu50zeKD5P&X-Amz-Signature=bd42cbc74bc51d6cca2bf1d2f05e2aad8411ed5e127ca1c194adb93eb992ffdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XB45D6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvgbyfoooZ6UK90ikSDZVijLM4eBNdqYHIOsdeeyss7wIhAJm2Z6P%2By71WRY4phzSaJFzbGzqNQhT5IW%2FFEIixcrXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxQdHh2i9W7TwZhV0q3AMU6%2BEN%2B26A0yjsZZp5YOUPEftx38XI6A8s2s3D1So%2F1%2BTMj3qo3S0IRSLD%2FVi2N75aQdc2APsOWVblZ%2Bup%2FBpeb56Iq72hfY2iYMJy4wjhTV83UY%2BraohwIoCTKhfGTdGm89lJXRw7Oc6RTN%2F9f8ieNmqBuWmuZaO4Djfil9Iwbc3iFaC0ELfd7P5sa55ltVNUiY9nfImioCyOxoIozcNNe7NGDPHDPtPjCEqwoj4K8H3tdl%2BuDGYOABMyq%2ByHSGonDaOhOx6xqKx1GYPOnnFK%2BhfcME3gC40r6%2B1muurNPBHf8VLodMG9AdFOfeV6CZILNx2Rm4accgS5WxK5yHILJ9NDy34nDscjk%2FOf%2FsZNgbYzYXvSnmGc5QxvfcIqwBAEYkvLxIFJ5JEOY4BKh0P5IgNcBiOok6%2B2qhFqxiocq5H5q6hizReOt%2BvmRMPYda%2Fg3oSU8XWGhC2YWJRffTlW%2F8Wou6Sf4jzX1EyK5QijnklCH%2BjXch5cptSOcmYkJJkiZrrsu1%2BG09CFrm27g51g11ks9fNmmT%2Fu6w7xcx1zMvkExcOmXYu09SVM4pVzc5w2Kw6ef1auMfl4CbuVAVbkWrnvuM%2F%2Fb4f28re6I3LoP1yBJKtg0zQP%2B2WImDC6ua%2FDBjqkASs2F418vvSaajOdzGJYIJ%2BemLbzeaqybC438ybGlLo0f4XoOenB%2B2Rs6FUwa4eg1H9rl3cihJLRtO1lKKMI0PzU%2BAg%2F9T2gTf%2FHlAHHte8pGSd8%2FqMVBmUPqlzaIY%2BJGjl8kLWtyCyPzS1jIHwA5GtC3fJWPVJc2hAXj6v52A5LtRRhQ7sr3EO3ZIl1xA5%2FjOy6oxo7ULl1oWSW%2FxQu50zeKD5P&X-Amz-Signature=faa71018adfa2243a253647a14cef8469c171b382396c0246f06b84f0af54584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMWACZWK%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGg1giOKQG%2FDpnYFDeQZzc166cd8J1Xirx%2FFKG4W06vuAiAnZAPiYhG2DZo4aFQjy79IjM%2FhNjfqu1nKAd2lOQd3VCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMAR2vVHz99Od6d7SnKtwDQIlXGkWurIlZ5uAwt8jLi8xYVomKRpDvVgqA9Gp%2FTiIFZoKdGK%2FJkc4yIjf1EMb1qp843X79gnWAMjPQ9IcYWIAvS1A5oTvtFjMrfXSZNbqsIsoboahWefolZCKiB7lVnSyuO2Uhm78QWTqrw9fiYHhc46iHSKAhnfaceQ521%2BA2ofHkY%2FNWKFKORt2FzBNr1IzfJhAN0CtnTuWxT%2BXjX%2F2BglwR%2F4azx%2Fjt4wvNfPWFJqArY5xN7y7JqUIIC9soseWlCskBRAfDwItsp4PvvUOZ97eTDFQSjB2je6ykXWBiiGnhOsoaJILULUNG7VZnfCiqQUOw8P9AI6WRykQoxnWrDPstEihgXt3yiRRvB8Gyxzei0NLdDZpgxmIE9X5MqrBNG45RhBC44SgDUcoZVtX%2BUq6uRDi5aB4z2%2BKGry8gVI3NH7jEvTtd0a9HINT1ZaKH%2BVRvKZla9UQMwEuPVIer3%2BD75eXZHLGQCykGW3JQBavUtPZjFDkkzs8%2Bkjq25rCKCbYS%2FkRSdFbptkqgQX%2F4NF0hYIJbI3eVymj5OYxpO5OocZpLBZ%2BgbKlmdL6BoIn4B6qpWOnGQRrOy7YtFcwvZfIibZBCK4IkO9CmJCg868valbtjf7UFMTYwxLivwwY6pgFM4tE%2FgwSoOr9zneqydvZE2G%2BYPO1BlPNMYd41vwxNa%2BOrEySoSnafvVnDszejXlBFNHfwEDDArep82IDGKjdL5RR5Fr%2FWwfKE0hWMsTSm0vZzJkc%2FQV5vwSvB%2FvI%2FacLbiUHM35xdgYGWQRmftisYxWjzcju9jN%2BTzppTYskt7bVnYFOjbsTE7pC1CSOnbgp0f7pk8hDLYIWHIfs9szZy%2B6r1yy2D&X-Amz-Signature=46414e7d3f7d9909baaf50df60a13450697035e010c48263887ab9c3599aeed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQIHDJEV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDpX0zipMuRBDzsLP%2FjzWMmoVUx0OaGcIwLYeU6m9JHkwIgeb4lDXKmJcDLFSfRSVmSlFcfAXWFk06dC0dKl9f7lTkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDORdlGZ23NXBiFiQCSrcA%2BS6JpnwGQSk%2FYmVvzWGMO%2FWEVGd4CBftWJ0L1J2BNbJC9drfrDU3%2Fa8bkZkvrtVdFPl3ftLt1Gnoe4AykpaPOqDN%2B%2FBxpy34IRNBCUru%2B1osmEgPzE6UBDKPlcLJBK0wfpxBDgKbWV3EFNOT5tnDTgM9VVtTVk4MH5pn0MnSvfLuobxsFtLYNihMpD0632TDsYRZD%2F7bPYY1zggygz2ebMZiAUUGUY7nujKwUQElaDIxsS5OXgnoPWDh8A%2FgVs0w%2FD6%2Bim7HmvNc5MJ5N%2FNOgOIXm27h1c0OOw5KgGnCCztAh4U8xg9wrIvjF1rMgdeaN0OvUJYDfLOT9DTaNr9U5Qrqap95q2CwY9l%2BJtQyqnW44wqUATEU4kt5ScY18lOyWGeBCJbHQzIVEa7vwJ%2BmUpiVYFWpHncQpYk50mLSPeIU0kBTru4AmEahtSMIFnT15BJnbVRgguAK4ebBCeLZnTZiLzAQzHfU3voAyOnmEIUdfzltQNsaJSeHuFgrBRHisTA0tCaOJipAlOUFdCUp%2FL9x1i468pleNgbsymOq6%2FnXDtHEF4%2FXXQMthj0ZlS%2BPbhB7Ah2F150XjCbX0WtFA5sicou%2FLR2AHZ3Q%2B25d4M%2BkE9HRlSaHiYnROOtMMq4r8MGOqUBlk3FOfivEfzbDlSKSVjn1u0Kczepi4O%2F9D6ig9%2FjJ2Nc0CXQiyFbCmWqYRwjcuW%2Bx9V2dAn99OL0kDeAt%2B9ym665T5Xex1g0grs6IWOiiFZvYYtqyU227XlcpKVT2M3lZbXWotfQElkx9KbPGxH5wQC6ArRpQtHG963TZeLVO0n%2B16xEGq7cmaBEnhCsh6M%2BZ7ZXRnhMu9QjkBF2DsbR8MTtQjGk&X-Amz-Signature=60292c789e358aa94bd81c92c818712559fd824512438035425634cae7d0ef92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XB45D6%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCvgbyfoooZ6UK90ikSDZVijLM4eBNdqYHIOsdeeyss7wIhAJm2Z6P%2By71WRY4phzSaJFzbGzqNQhT5IW%2FFEIixcrXXKv8DCHgQABoMNjM3NDIzMTgzODA1IgwxQdHh2i9W7TwZhV0q3AMU6%2BEN%2B26A0yjsZZp5YOUPEftx38XI6A8s2s3D1So%2F1%2BTMj3qo3S0IRSLD%2FVi2N75aQdc2APsOWVblZ%2Bup%2FBpeb56Iq72hfY2iYMJy4wjhTV83UY%2BraohwIoCTKhfGTdGm89lJXRw7Oc6RTN%2F9f8ieNmqBuWmuZaO4Djfil9Iwbc3iFaC0ELfd7P5sa55ltVNUiY9nfImioCyOxoIozcNNe7NGDPHDPtPjCEqwoj4K8H3tdl%2BuDGYOABMyq%2ByHSGonDaOhOx6xqKx1GYPOnnFK%2BhfcME3gC40r6%2B1muurNPBHf8VLodMG9AdFOfeV6CZILNx2Rm4accgS5WxK5yHILJ9NDy34nDscjk%2FOf%2FsZNgbYzYXvSnmGc5QxvfcIqwBAEYkvLxIFJ5JEOY4BKh0P5IgNcBiOok6%2B2qhFqxiocq5H5q6hizReOt%2BvmRMPYda%2Fg3oSU8XWGhC2YWJRffTlW%2F8Wou6Sf4jzX1EyK5QijnklCH%2BjXch5cptSOcmYkJJkiZrrsu1%2BG09CFrm27g51g11ks9fNmmT%2Fu6w7xcx1zMvkExcOmXYu09SVM4pVzc5w2Kw6ef1auMfl4CbuVAVbkWrnvuM%2F%2Fb4f28re6I3LoP1yBJKtg0zQP%2B2WImDC6ua%2FDBjqkASs2F418vvSaajOdzGJYIJ%2BemLbzeaqybC438ybGlLo0f4XoOenB%2B2Rs6FUwa4eg1H9rl3cihJLRtO1lKKMI0PzU%2BAg%2F9T2gTf%2FHlAHHte8pGSd8%2FqMVBmUPqlzaIY%2BJGjl8kLWtyCyPzS1jIHwA5GtC3fJWPVJc2hAXj6v52A5LtRRhQ7sr3EO3ZIl1xA5%2FjOy6oxo7ULl1oWSW%2FxQu50zeKD5P&X-Amz-Signature=9f57e73e0f286c9a6e09be056c1770b33a7521856a8fa74b7d65a3d45c023991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
