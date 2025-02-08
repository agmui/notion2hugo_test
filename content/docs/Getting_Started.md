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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Z3B3BY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF1nz%2F9ZkJ0H%2FMqEr5xQY9FClGeF6ziblzr8pPo9ixtZAiEA810z2EeS8w0Inmcw70Fhv6hUNc1N4oFDeEKLSq45ackqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B%2FP59%2F61vJMR%2BugyrcA7nUfwIklQlbLdO4MgnQqSJCt9cUFI4dMLrGuFBsFNmB0x0bGzdjebg7p%2FWJ4VgDH9qNW2JGplL5Kvzm7Pa%2BV1Kf0n8XjDnNy%2BCcUNFoND4rrkHURKj4REcCT0XcKF2RbU%2FLAQJ%2FWn189GfThYqE%2FTYmOKGiz6aF4Nt%2BehG02jZTbWPCOEOLBQIczfj4vQkt0Yocw0OiEbApU%2Fsi7jykETvx%2BRAWCfgkdmKPF7rxF72%2BgivVwcmXqLqpPk7Wr84eAXq5iS8DbX6O1touoGSoAeJG9h0kE3Km%2BELZmLxF9HVH3qyaX6boFcIZKBWChbSuh%2BCgHlOuaSMqbivR0JAUOOzotpq6vm1FujoQhnMMz6IBptXSJrFoSLZxp3qLM2OEbGffSFdvMkKZ%2FWghfPRVarOMXPJh81h%2FykkSD9b%2B21WYvspS5jKrLnnZzBfADJ2VIDkOYn51XMDASq%2FwQz%2FsAOieRvgZcGa3DnPpN6uFZzRgxonMvu753V8rzXJMEaKDMjvmm8zlj88HJZX3KWtc02WjkQTDxc1eT2TDg0P1YhGEmRikKvU3egYgAFkTUrNN1OQ8GXNVfvSnB%2Frb5CHyGb25BiyuLZ5fs%2F0adAlM6BfbAZKMJLXqUaqBsG2EMJqGnb0GOqUBY4Wokx9Td5hA7BfqllmnkfDtgTavym9InzoTO5Cxd403zba%2BE9gnRUXfPqWCUlcwmIC2y%2BLWmKroEDcxN2fWYmzHUdLhtivbZlhd9ueT1d9y7keHCjZgOKQoSsZVYjrrC04ouP7gtFnDu6zdJCyxJBa6i2uYKqq1SjaBGqgOGj1F2%2FMlZdu6gZxXU86Sv44XjEeMVPMUS86Nylau0plCzDFWaCqr&X-Amz-Signature=7734d8a7f1bc40f019e966e1860e12e98d6d65110091e4d08cc5f8087cdf67ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Z3B3BY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF1nz%2F9ZkJ0H%2FMqEr5xQY9FClGeF6ziblzr8pPo9ixtZAiEA810z2EeS8w0Inmcw70Fhv6hUNc1N4oFDeEKLSq45ackqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B%2FP59%2F61vJMR%2BugyrcA7nUfwIklQlbLdO4MgnQqSJCt9cUFI4dMLrGuFBsFNmB0x0bGzdjebg7p%2FWJ4VgDH9qNW2JGplL5Kvzm7Pa%2BV1Kf0n8XjDnNy%2BCcUNFoND4rrkHURKj4REcCT0XcKF2RbU%2FLAQJ%2FWn189GfThYqE%2FTYmOKGiz6aF4Nt%2BehG02jZTbWPCOEOLBQIczfj4vQkt0Yocw0OiEbApU%2Fsi7jykETvx%2BRAWCfgkdmKPF7rxF72%2BgivVwcmXqLqpPk7Wr84eAXq5iS8DbX6O1touoGSoAeJG9h0kE3Km%2BELZmLxF9HVH3qyaX6boFcIZKBWChbSuh%2BCgHlOuaSMqbivR0JAUOOzotpq6vm1FujoQhnMMz6IBptXSJrFoSLZxp3qLM2OEbGffSFdvMkKZ%2FWghfPRVarOMXPJh81h%2FykkSD9b%2B21WYvspS5jKrLnnZzBfADJ2VIDkOYn51XMDASq%2FwQz%2FsAOieRvgZcGa3DnPpN6uFZzRgxonMvu753V8rzXJMEaKDMjvmm8zlj88HJZX3KWtc02WjkQTDxc1eT2TDg0P1YhGEmRikKvU3egYgAFkTUrNN1OQ8GXNVfvSnB%2Frb5CHyGb25BiyuLZ5fs%2F0adAlM6BfbAZKMJLXqUaqBsG2EMJqGnb0GOqUBY4Wokx9Td5hA7BfqllmnkfDtgTavym9InzoTO5Cxd403zba%2BE9gnRUXfPqWCUlcwmIC2y%2BLWmKroEDcxN2fWYmzHUdLhtivbZlhd9ueT1d9y7keHCjZgOKQoSsZVYjrrC04ouP7gtFnDu6zdJCyxJBa6i2uYKqq1SjaBGqgOGj1F2%2FMlZdu6gZxXU86Sv44XjEeMVPMUS86Nylau0plCzDFWaCqr&X-Amz-Signature=a1332c4db638ca3f8c500d4fb75321d8242c56bee5e3f854b3619e9e2fe373b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZ3NF2V%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCCWllKsQHP4%2F93Z2sUushbeqbszw4pRxz3emv2k%2Fd%2BtgIhAN0Z2ghoylinjzoy9H5qzReYIrqhu%2Bk2BVqxFA7UBNU%2FKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGjcDRwOo%2FB2oNzXwq3AM%2FHWMvDeh6eUlWH%2Fuel2wDBCdeU3sGp%2Fv0l%2FkvwVSquYgw60MwLEqazDrAWKtUFlH%2Fga4xleJHqz395vyFuEeQPaYt4k67ZB3%2Br4DzhNTRWgEqhb%2FJyZFd%2FNvRksJylhpP4Unf3Dr11bUH3pvlOMe6vq51fEpZ%2F7G3WgfkkkfYRmFl3G51X1N6q%2Bp%2BCmHtekx08%2F2lgVKALtuJcIVV44nGmshSTwi72dhWC3r8tAMbgX7ViTPnN%2BoKslrdgM9SCPYsAxIDVboKpnPZWEpG%2F5MxqULynWixD79bh9tFXzebu0ly0a4paHtgqJxYV9JtITp5%2F7sXHK46aUBn5YMTu4zcEZWZTKevAT%2BIRtvRyu3UoYXe3O4LqTY4ta7leGIG2EqANnvRYx6shZnTdysapG53uxE070ywJ7cC6MZkpVVQN3ZXkLuB0iEE%2BTZKLiU4EKvMpQ7jlc6Odxu%2FFnSh3UF4vw1v4i5gZt%2BCL94S5DSkp61EP58GloyZL9VpW4aIBT%2FuSfCb1hg7tAwYNavDOWjs3budUfsvlu1PRcTIcOl65f1S2TUYpw1z3tBQkxmariQ0eQMQiLjoYTRJIA9gx4C776UOWYC%2B79JlldfBE8O3NohSbHGFdOB92C8JKDDSh529BjqkAfqdUEQ%2B2HdwU9Nh9Jjz2zF2bwy8%2Byld5IMkyZ1T9PCsA2WA4Ns7MheVWBrqXJyRmr3S2Mw16A%2FUkncF%2FHC8ndbHHnh2OzB8towADUN3JDLSSmR59pWRL5iPwC7a29f109bfqSzK4CB9it4RKfzQAdHg7oGLhI5Wfe2F3ypLoMv7ovUa3PAOt%2FqkNpoOQaQtkg86PiYwLuOqZIS%2FOh3zuB4fslf4&X-Amz-Signature=e2e931092cff4552355cdcf7c0e5565b7de077a6a19b71d4a89a5a0dabc1f716&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDRYWOAP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB7zlTCPLaOKqRTcNbc1Tplnihy8vtEmKE6X%2BEDPsb%2FTAiBDCRTJPq9%2BAGzbV6PkkkE9PDytc4AqkKHv%2BjPjHzYQ1yqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSS3IeKJHGzU%2FUoImKtwDRaHqfKpbPO9qiC9M4zXxPkSueF6RiPwn187OuvrIvMBdJH2VnC71TJmuoOlhI%2FqXg1aez%2BkkZL7DLgWrdCNGiiNWssWMU2PmRVtdukopVloM5u7Zvf2TMpDKNylfXmhpVJxH8iZquc%2BFOSOGXB%2FBef%2F4X1hk3Dsu7bk9%2BfhMLi3GuoNHdlsD5a1RtQtUSXpIxN2Cbi9yKTM0bWjT68WGHvsoc%2BuC4sph4JjthFftt5p14pxJIN1TkvIRXyodFHWd1tHqOu5J6tABU1vlmVTLqDu86NJR19J9BF%2BFuP4x35mQ7WbaPLlNXilhkSN%2FSiSdC7NxLq9xGrVsIkm%2BpCfN0Wa5oQBzBaZkKQkmPL%2FlRkJL08sQUySamZIFWO6tHgvUAwYy%2BYOtlB3sIK3gQ75NeXlW74LLEsUBN1b2XZiMfaaWN%2FQWTnWjh6ZMSvJVu3r4%2BZtiISJ56zF%2Bydg6If%2Ft6fM%2B53FwAPGL4Rw8%2FFLGi3OmSLtx%2Fh8B3MHOMoVy5sew9l3v%2BH3j2aibU7QhRJipKb9IXWSMpGgGlndJlPKpqnAanPQs5R7lgctvAlTkQe0eCq%2F1eirA4HajdDHSyVIG5J6bjGtDQy2KI5%2FYDqu%2FHm%2FybQlAd7NjL4ni1DUwiYedvQY6pgHxm8V3Dq8Zkcy1SS5zaURYKJB7jP%2FUT2%2FUOcMvM8TnZp553THcnY%2FcY%2Fa6J8BPPZqjYf72P3SV4G1BPxbZJAFPH7BvkRDVGio6r%2BaShtNdLmoVDvAK%2BClq%2FUAyzFjswaFvZhe7SyJc7Eo8oWC8tIvKBYJq6VxeNKJ%2F5wC%2Fc1N9nxJd2kK6T0nFwqPh9GR4GDMZNz7JPW7nxsodVH3Dj7vbweIGMAji&X-Amz-Signature=a3469dcd100e6eb6d1ffd4ed84ecd7c25b3a8e492b189bdf56b29bcf31f9cfeb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7Z3B3BY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIF1nz%2F9ZkJ0H%2FMqEr5xQY9FClGeF6ziblzr8pPo9ixtZAiEA810z2EeS8w0Inmcw70Fhv6hUNc1N4oFDeEKLSq45ackqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B%2FP59%2F61vJMR%2BugyrcA7nUfwIklQlbLdO4MgnQqSJCt9cUFI4dMLrGuFBsFNmB0x0bGzdjebg7p%2FWJ4VgDH9qNW2JGplL5Kvzm7Pa%2BV1Kf0n8XjDnNy%2BCcUNFoND4rrkHURKj4REcCT0XcKF2RbU%2FLAQJ%2FWn189GfThYqE%2FTYmOKGiz6aF4Nt%2BehG02jZTbWPCOEOLBQIczfj4vQkt0Yocw0OiEbApU%2Fsi7jykETvx%2BRAWCfgkdmKPF7rxF72%2BgivVwcmXqLqpPk7Wr84eAXq5iS8DbX6O1touoGSoAeJG9h0kE3Km%2BELZmLxF9HVH3qyaX6boFcIZKBWChbSuh%2BCgHlOuaSMqbivR0JAUOOzotpq6vm1FujoQhnMMz6IBptXSJrFoSLZxp3qLM2OEbGffSFdvMkKZ%2FWghfPRVarOMXPJh81h%2FykkSD9b%2B21WYvspS5jKrLnnZzBfADJ2VIDkOYn51XMDASq%2FwQz%2FsAOieRvgZcGa3DnPpN6uFZzRgxonMvu753V8rzXJMEaKDMjvmm8zlj88HJZX3KWtc02WjkQTDxc1eT2TDg0P1YhGEmRikKvU3egYgAFkTUrNN1OQ8GXNVfvSnB%2Frb5CHyGb25BiyuLZ5fs%2F0adAlM6BfbAZKMJLXqUaqBsG2EMJqGnb0GOqUBY4Wokx9Td5hA7BfqllmnkfDtgTavym9InzoTO5Cxd403zba%2BE9gnRUXfPqWCUlcwmIC2y%2BLWmKroEDcxN2fWYmzHUdLhtivbZlhd9ueT1d9y7keHCjZgOKQoSsZVYjrrC04ouP7gtFnDu6zdJCyxJBa6i2uYKqq1SjaBGqgOGj1F2%2FMlZdu6gZxXU86Sv44XjEeMVPMUS86Nylau0plCzDFWaCqr&X-Amz-Signature=961f170d57efacd1cc2194d9b66e0adede0c6c0bfc8b0fb219b043e22d77463f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
