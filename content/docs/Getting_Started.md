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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ILNGQN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyOZS7wtAVclOgKbQsI6D7ctq2GRDHAR%2FkNPNzp3UrVAiByT8%2BaD7YbLWgwotVf0whtF07q8e8bopZJ8FQlcMImUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzRevsm28FcNGIl0KtwD%2BdqyptarlxQQOA51LQ6IgiZAKQLEc2yQOqjiDWfEtpQw1g3L4wB85MyXZwTisoU6MaqtDpIwBwd0%2BuFLeIoX%2FTJ58hh0w%2B7AuMucczozsj1frCXEaCCsxJqbx9hhoZnKvuiBuMqe1G4W7Bx7Zx4hP7hG%2BpbGRfiJyAMe%2BroC2GPxWmn9JY9nCBWEKy9P2E6jq2mwCGbnLAdo75dI8VHviem%2Fr%2FRGKVZ9hfXvsFfoUawimJq9FsGK27pJ5l7HivDLTJ9xQEkbZ2ZQfzy3GvW%2FHp0tJlK4M%2F7NFTgnawZoVXh%2FscfXkPA82qmiDPiL6ogOZnYqizIt9DZ4anBudbLNHKtGSYjweJrS9LxHvArnr7EltPAKzRrY5HQpQz5rJe55rhzsggbgFwg9l8xWObbtnG969q9FJtR1N1HWxI8NBEvI1y%2FxGQlrsKCslUmzcRk%2F7Z9xYZqq9JXHAGAB4nGZfC69wcLRdHaqXMVkkUBJY2GUTcrLhiZKiv4kbxqWCYz6jyqNVgdBXKclQaVL0L1SXtw02Y3Px350XNDEjq%2B3eMKpZBajvDvwic8M%2BdQQuvZ%2BKMpder7KVa2JUg8uAUrEn1uKJzAQCcf7CxLmcGSUd2PWHbXkTBTa3YTobDYw8fbpvAY6pgE7L6gFuVs3D3cm5ItXKNR04u4abWwEEGuPIMTRspNrm%2F76FWwuIj7ATICzPptUPwk0Z0yGEDuVjfjVWcEY65j1MD7epUdla%2BxcMHatoGSJR8z7CW8Hsm4ki%2FRfu51OX5wRMBlsXT%2BmgM6PJ7K7mTPdti2P8avmIbZgaINTB9TObZYthtCEIhdM97C%2FVkKgyL1loNiXcbSSHehzffUuZYaGN2nql9RE&X-Amz-Signature=1969d6c5f53851342a4e4be47d81638f647393b88b64aed684f713dbcee14cce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ILNGQN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyOZS7wtAVclOgKbQsI6D7ctq2GRDHAR%2FkNPNzp3UrVAiByT8%2BaD7YbLWgwotVf0whtF07q8e8bopZJ8FQlcMImUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzRevsm28FcNGIl0KtwD%2BdqyptarlxQQOA51LQ6IgiZAKQLEc2yQOqjiDWfEtpQw1g3L4wB85MyXZwTisoU6MaqtDpIwBwd0%2BuFLeIoX%2FTJ58hh0w%2B7AuMucczozsj1frCXEaCCsxJqbx9hhoZnKvuiBuMqe1G4W7Bx7Zx4hP7hG%2BpbGRfiJyAMe%2BroC2GPxWmn9JY9nCBWEKy9P2E6jq2mwCGbnLAdo75dI8VHviem%2Fr%2FRGKVZ9hfXvsFfoUawimJq9FsGK27pJ5l7HivDLTJ9xQEkbZ2ZQfzy3GvW%2FHp0tJlK4M%2F7NFTgnawZoVXh%2FscfXkPA82qmiDPiL6ogOZnYqizIt9DZ4anBudbLNHKtGSYjweJrS9LxHvArnr7EltPAKzRrY5HQpQz5rJe55rhzsggbgFwg9l8xWObbtnG969q9FJtR1N1HWxI8NBEvI1y%2FxGQlrsKCslUmzcRk%2F7Z9xYZqq9JXHAGAB4nGZfC69wcLRdHaqXMVkkUBJY2GUTcrLhiZKiv4kbxqWCYz6jyqNVgdBXKclQaVL0L1SXtw02Y3Px350XNDEjq%2B3eMKpZBajvDvwic8M%2BdQQuvZ%2BKMpder7KVa2JUg8uAUrEn1uKJzAQCcf7CxLmcGSUd2PWHbXkTBTa3YTobDYw8fbpvAY6pgE7L6gFuVs3D3cm5ItXKNR04u4abWwEEGuPIMTRspNrm%2F76FWwuIj7ATICzPptUPwk0Z0yGEDuVjfjVWcEY65j1MD7epUdla%2BxcMHatoGSJR8z7CW8Hsm4ki%2FRfu51OX5wRMBlsXT%2BmgM6PJ7K7mTPdti2P8avmIbZgaINTB9TObZYthtCEIhdM97C%2FVkKgyL1loNiXcbSSHehzffUuZYaGN2nql9RE&X-Amz-Signature=6826b3d9658ee6ff412ffcb6a0b6249409517d75828c4995c1ab98597d8dc25a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UTUMXA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDuQGyCgPFM955UgyiziyJ3Av9GeSZZ5opVbMLqyQxZQIhAL0f51X2n0nnbNPlKd%2FFmwuURuYF9nEbvq86S3HsTG08KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ0x0xW6IAs6YJCQkq3AM8Zj40hO%2BjtM5CqvI0Ayhr%2FFHALxwBsLSkg94hBJ7lwOxyadllOItl2mtikK1k5j1JbW2xV%2FAofCo7wzOiZB3T37A6VCPd9%2BC66GWCeOgWEbI3okoqxiSe23ypR5Wbl7eXaO2dw8YZGvP1FltXTqXDog0a4RkOm9f9B6hhSDwky%2FNYx2TrdIWJPLjRvUWIZ%2F3Awng6frxLY68tIJgFFIEAL78UGmZazZJv5vlkSp5jUMsgdEBYfc284na5WJWTSCcVj6QRYHLEX84MoW86E8jm9K8scKSc94qvIDNXeZeM1Lp8SHlqBLkIV7JFb6Lu4vymtMA5c%2BQAeBMR%2B1yOFMXAEJEV8Ghadbs2r2zw8FMIE0VW30%2B3qNjJeszIyZwVSLf%2BRjVvbYW5GtJBfG370V0eVaavWGAH%2FUgvLNy2%2BEQUHpS0mlH3mkaiW7FVCe5DxvqIvGT3kDAfas0ojUGxsnve1aF3dh1lhgkpJTUDunJK91ZZ3K7IHps1h7D0D2P%2BKUqglzdnqE7hcJu%2BeXp3DgkvIMuNlK8QWo%2BrYq3VH6xQ7amKdiRB3ukUMVnt%2BsIt9lPd6dGAoGUmtoHSWEugZMtjyzJh4x3cODJKGxDZULoW9%2B4CHzxq36UEJ0isgjDn9em8BjqkAYN7kfX2B6DhePDCHyN3Adx4WQFmQjvX519CK3dDuG73OcZclW%2Bit3Y4vYRkwqKn6cIPkeHY6IGxZjcQ1C5mtBlAFKXunzKjcGuInYhh%2Bu3yzFDtWqbF%2BrWtpPYW3JN3pCfotqqfQxAfM%2F90eDAIKBgVVoEzWDwMkoyb48sniHJSt%2FsQnozvlJMtyaogoP8a%2F3tOclXsA4l1h4jC6IFksuPwnbpF&X-Amz-Signature=a3ff8405064446a6b097eb0851250525b46153c0ababf8e7e7558d5b5e438e20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6OEE22S%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICAU9HaMmFLEjYbrL%2F98l9sz0V6iUyfNmbxSlVF6qSASAiBMrz1eZhxAg%2FWuNe0%2FRiOXvWvq3lSyyJkSFIJmbDFpqiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzGTEKkpDxFxsJGtLKtwDQ0p2Ut6Bwpf%2FnWMEZmh7FsqX60UJGuVeYK8eaZ%2FdQCli6GXRTt7sMJ3MU7BfY%2FeDYgjbD8uh72gN%2BM3c82FUYb47RgdU6RA2pkrIFZ6Zrz%2ByQ81s5psH9lV5ZYEaLt1YRRoMDSs8j7Aymany7Uh7h8cUGLYJjNDlhg3jyOVFdO2gtgfjpSayoXK%2Fn68hr5zz07zXraHeBEh%2FN9WDmj1npElaya550tf%2BGUaBUE1AwHD8XnIIY%2BBIn8PWZRj7RrViNF11fL4lfkZfSQmruwb8iNmdtPW0EKGtQREGBK%2BV1eUDkbDhI%2F9ZmtOior93G45V%2FEvvXzGB%2BuYyfSjDaCqenbxM%2FR%2BUYfDC%2BgD7LeDZ%2F5dsR%2F5GYpSUvGBOp5GTdvmMBoWQKQOSizQlCgJcliT%2BUVEkt%2B%2FgKIfWi9Mjks8NFLQIT%2FM9rxayofvKHTj1ycLz2t9YWCw4zpcdgSRSZ%2FG8CaZ3W5geIFY3o5ILjE8Yna640nLAg1zr1C8eczk95sr7j6Bqcd1sSmDbwmw9%2BIOKS%2BSGVCmZ3sbjnXzB%2F6Hl2WV%2B1qw9T6cDuMiuAloR3mdJXBUPfQYDCBuSH5P7AlKelJoFtF6ayUvUojBpdK2DCOVpMaadano0MLx9wpAw3fbpvAY6pgHqhsvCKt4yDl9nLkI1XD2CDcV2cclL3MRQdTbQl9k0GZykO4XHm%2B437a6V8glWsPdtSE3%2BcsoOOGsdLarAtOW5kaR81QQy4OAvaAvVTjWo3Hh4swym7Y3ahcHrBhn3odl%2FdcPA4w3EqUz4t4eIPITxktHrD7eTCUrLpsTdjFg6yCew3MPN9%2BJCEG7aeWTr8csfQCmSUGtLDISfg%2FXLt1%2FYeuUJvCmh&X-Amz-Signature=bbc3045a76c30671b85fa7edaf7329bffda42fc6cc43fba5a1e9a67165ec67cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ILNGQN%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyOZS7wtAVclOgKbQsI6D7ctq2GRDHAR%2FkNPNzp3UrVAiByT8%2BaD7YbLWgwotVf0whtF07q8e8bopZJ8FQlcMImUiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOzRevsm28FcNGIl0KtwD%2BdqyptarlxQQOA51LQ6IgiZAKQLEc2yQOqjiDWfEtpQw1g3L4wB85MyXZwTisoU6MaqtDpIwBwd0%2BuFLeIoX%2FTJ58hh0w%2B7AuMucczozsj1frCXEaCCsxJqbx9hhoZnKvuiBuMqe1G4W7Bx7Zx4hP7hG%2BpbGRfiJyAMe%2BroC2GPxWmn9JY9nCBWEKy9P2E6jq2mwCGbnLAdo75dI8VHviem%2Fr%2FRGKVZ9hfXvsFfoUawimJq9FsGK27pJ5l7HivDLTJ9xQEkbZ2ZQfzy3GvW%2FHp0tJlK4M%2F7NFTgnawZoVXh%2FscfXkPA82qmiDPiL6ogOZnYqizIt9DZ4anBudbLNHKtGSYjweJrS9LxHvArnr7EltPAKzRrY5HQpQz5rJe55rhzsggbgFwg9l8xWObbtnG969q9FJtR1N1HWxI8NBEvI1y%2FxGQlrsKCslUmzcRk%2F7Z9xYZqq9JXHAGAB4nGZfC69wcLRdHaqXMVkkUBJY2GUTcrLhiZKiv4kbxqWCYz6jyqNVgdBXKclQaVL0L1SXtw02Y3Px350XNDEjq%2B3eMKpZBajvDvwic8M%2BdQQuvZ%2BKMpder7KVa2JUg8uAUrEn1uKJzAQCcf7CxLmcGSUd2PWHbXkTBTa3YTobDYw8fbpvAY6pgE7L6gFuVs3D3cm5ItXKNR04u4abWwEEGuPIMTRspNrm%2F76FWwuIj7ATICzPptUPwk0Z0yGEDuVjfjVWcEY65j1MD7epUdla%2BxcMHatoGSJR8z7CW8Hsm4ki%2FRfu51OX5wRMBlsXT%2BmgM6PJ7K7mTPdti2P8avmIbZgaINTB9TObZYthtCEIhdM97C%2FVkKgyL1loNiXcbSSHehzffUuZYaGN2nql9RE&X-Amz-Signature=4527170910aa58a0994494996844b66dcd7ef90aba5c401c3fd475e94cb3842f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
