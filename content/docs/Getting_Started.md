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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75FDIH7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA9orDHd5aQC%2BZNEJIwxXnVFPJZUDzHdN9hU1BW1OJvmAiBkph3QQPBNJwkW4HIkUtHFSQ2gEdQX4IPoTafuucXHfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZSQz4L5X90a6iUeKtwD9d0Fcn%2Bya3iPxl%2BOpSMH1PrSKJaLHArsDSYlx4yHeakoB7qQv%2BZG5PkT4ss0izU68IaMcxJYZhnpn7aI5smbVyaTAias3QUWXNFHeqFMXnnBeOOgZedKGbzFu%2FNL1N0mpep31VAKOjMnaIW%2B88NwsPJHz3a6o2hBppdOoVWFLPyJHjxiZH52JYG6iwn6BpJ7ETLgpPx7JKcwAGGGtM7hc9CtdOtBv96dRGgOX5Tup1qHl8HhQyIR2kPnpngD2y9pG4dXTofbXvEginisgZVf3T0iWyD7qAAdMBbcrBulEvyXbjFHPA9kv213XhxPRBuoJbYBnsh8vonyZxUo0IQ56fT%2FmBC3baQkcaGJgrSEH399RBDUV%2FktgBg%2FtZEUZCTtXhNMtIwYETvQE2FEf%2FNuGWHjuFpldiuf%2BATUUdtSdyTbwHYDMNeDpU6W%2Byfytv%2FpDqU%2Bnko818EQa%2BhruzoY153SzmAzToTigwOu%2FQV1quCasb8zxbfUSdcBwL28JxJ87tb6svl46sG1ai0ddPlIxpc%2BqeIsyH7FLsuEjP9TFhrNVdduXzvdcJAedohEs%2BQSiYy29V57wQBS3rSeDl%2BVutw6iniuCdmFZFQFAkRZ1CwCvooPJcD%2Br8kiNiYw6M%2BGwQY6pgEXIBYPFg5EWOjPbYnQdZmv5EXX%2BOJ%2FKg6%2FW5rvsT5gvAF5STkOIeXzyR0B79aLRjWrtQWYSo8lbIZE06ZT%2BSI7kNsnUmpef9OUFCy0Oiyd3BCXFzmQNcTvSZRMfyZSvqx4zYtf3et7zGgj2oAWXVhivUhYi3QAs4kNQuSECd5xeNg3%2FOUzYQoMnd4ZPEuldo%2BrRiAzOwxJPlhn87BZWAv9XQYjy8rV&X-Amz-Signature=93a6d135bc63941db43ad819824628919a9ca06d5f48336f9564a9f55846baa0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75FDIH7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA9orDHd5aQC%2BZNEJIwxXnVFPJZUDzHdN9hU1BW1OJvmAiBkph3QQPBNJwkW4HIkUtHFSQ2gEdQX4IPoTafuucXHfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZSQz4L5X90a6iUeKtwD9d0Fcn%2Bya3iPxl%2BOpSMH1PrSKJaLHArsDSYlx4yHeakoB7qQv%2BZG5PkT4ss0izU68IaMcxJYZhnpn7aI5smbVyaTAias3QUWXNFHeqFMXnnBeOOgZedKGbzFu%2FNL1N0mpep31VAKOjMnaIW%2B88NwsPJHz3a6o2hBppdOoVWFLPyJHjxiZH52JYG6iwn6BpJ7ETLgpPx7JKcwAGGGtM7hc9CtdOtBv96dRGgOX5Tup1qHl8HhQyIR2kPnpngD2y9pG4dXTofbXvEginisgZVf3T0iWyD7qAAdMBbcrBulEvyXbjFHPA9kv213XhxPRBuoJbYBnsh8vonyZxUo0IQ56fT%2FmBC3baQkcaGJgrSEH399RBDUV%2FktgBg%2FtZEUZCTtXhNMtIwYETvQE2FEf%2FNuGWHjuFpldiuf%2BATUUdtSdyTbwHYDMNeDpU6W%2Byfytv%2FpDqU%2Bnko818EQa%2BhruzoY153SzmAzToTigwOu%2FQV1quCasb8zxbfUSdcBwL28JxJ87tb6svl46sG1ai0ddPlIxpc%2BqeIsyH7FLsuEjP9TFhrNVdduXzvdcJAedohEs%2BQSiYy29V57wQBS3rSeDl%2BVutw6iniuCdmFZFQFAkRZ1CwCvooPJcD%2Br8kiNiYw6M%2BGwQY6pgEXIBYPFg5EWOjPbYnQdZmv5EXX%2BOJ%2FKg6%2FW5rvsT5gvAF5STkOIeXzyR0B79aLRjWrtQWYSo8lbIZE06ZT%2BSI7kNsnUmpef9OUFCy0Oiyd3BCXFzmQNcTvSZRMfyZSvqx4zYtf3et7zGgj2oAWXVhivUhYi3QAs4kNQuSECd5xeNg3%2FOUzYQoMnd4ZPEuldo%2BrRiAzOwxJPlhn87BZWAv9XQYjy8rV&X-Amz-Signature=696269fe94d89ec114dc6f2b6e6c4ad8910b6940145d3fa9d0d71b76f75ae053&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75FDIH7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA9orDHd5aQC%2BZNEJIwxXnVFPJZUDzHdN9hU1BW1OJvmAiBkph3QQPBNJwkW4HIkUtHFSQ2gEdQX4IPoTafuucXHfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZSQz4L5X90a6iUeKtwD9d0Fcn%2Bya3iPxl%2BOpSMH1PrSKJaLHArsDSYlx4yHeakoB7qQv%2BZG5PkT4ss0izU68IaMcxJYZhnpn7aI5smbVyaTAias3QUWXNFHeqFMXnnBeOOgZedKGbzFu%2FNL1N0mpep31VAKOjMnaIW%2B88NwsPJHz3a6o2hBppdOoVWFLPyJHjxiZH52JYG6iwn6BpJ7ETLgpPx7JKcwAGGGtM7hc9CtdOtBv96dRGgOX5Tup1qHl8HhQyIR2kPnpngD2y9pG4dXTofbXvEginisgZVf3T0iWyD7qAAdMBbcrBulEvyXbjFHPA9kv213XhxPRBuoJbYBnsh8vonyZxUo0IQ56fT%2FmBC3baQkcaGJgrSEH399RBDUV%2FktgBg%2FtZEUZCTtXhNMtIwYETvQE2FEf%2FNuGWHjuFpldiuf%2BATUUdtSdyTbwHYDMNeDpU6W%2Byfytv%2FpDqU%2Bnko818EQa%2BhruzoY153SzmAzToTigwOu%2FQV1quCasb8zxbfUSdcBwL28JxJ87tb6svl46sG1ai0ddPlIxpc%2BqeIsyH7FLsuEjP9TFhrNVdduXzvdcJAedohEs%2BQSiYy29V57wQBS3rSeDl%2BVutw6iniuCdmFZFQFAkRZ1CwCvooPJcD%2Br8kiNiYw6M%2BGwQY6pgEXIBYPFg5EWOjPbYnQdZmv5EXX%2BOJ%2FKg6%2FW5rvsT5gvAF5STkOIeXzyR0B79aLRjWrtQWYSo8lbIZE06ZT%2BSI7kNsnUmpef9OUFCy0Oiyd3BCXFzmQNcTvSZRMfyZSvqx4zYtf3et7zGgj2oAWXVhivUhYi3QAs4kNQuSECd5xeNg3%2FOUzYQoMnd4ZPEuldo%2BrRiAzOwxJPlhn87BZWAv9XQYjy8rV&X-Amz-Signature=b43ae7ccfa34b685e1c6206f73955c2c391de52f5e00aa12a45d2c487e0291a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RDKQWA2%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIAR4bG08tpcAwc8rC%2F8ErHaSBufx2zI5SHkIbOJJAEJ1AiEA%2Foq7j%2Fe5wyxaN3WwQs93M9OezrxegJMiJ%2B59KPuuIw0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdJCHrTj8mUn3%2BFeyrcAxCbQ6z5DvVHbBFfd1dQQjITyAfFz9HiYWKaetSe8uoaoNpozKF568Rku4QtknGfjuxMW%2B3lJiBRXt7f3RD%2BaQUyAM46lqiHXXvONxOD0jZd6AM%2F5KDR94A%2BPzPuoxHXvnqTpE%2Fv%2Ft6rgTbaReG3Su9piBd%2BbODvofLit9Mus0RG6VO78MDLblUf7BPA275CHIiTW0vd596GOJAEA1eUImKuF8BgDEAMl%2B%2FJDNiTvw2Z73mrr2Toc6iBpuFjPUgGgd0HwQke6cPv8QlUj5ABeikujJ8%2FMPqyC5xxvdU%2FeBBUazDXs%2F5Q2cRFO4pT%2BCzbskNe%2BVgTGtmtd7xX3m2h7ZTzqaawOwe9%2FHu661Zapl%2BqdrdSVa92Mgvhb%2Fu3xIocVHIKDvHEsmkycT7%2FvtXssnTun9MMMajCs%2Bvl3sOsBu3hxXUk516xCk1CIETRpcThldsCCufneUZdIgNcaTqmPRCCqYlt48PXGbAl5yiLsOz1sGensQWVeA4Jw21nEL9twIs4fxbngZjnVelX3fKUJwInbnRb%2FIqkb95d9zI66ahGj9HSu6L38xtS5WCmpuCX8ArbJjOea49WJqJWoI0i%2BzaacX7PRF6nZtV0G%2BI%2BWhv9ZsqOSC8pstHidXurMLLPhsEGOqUBj3Ws2EufkKRaXz0RQVfv4HghUkux5GFkqtvpVh1asJyAFEW8EwJYL1G03U8sJcbNqSWWWikCQyB1gh9lQ4QPvf3kR3Y118Heg3daVETQD3tGOqu0Zd1TU123D1N15YPTp%2BmAD0DKrJ6eexC5j0qhgPIoRYHYcAKA3Pz%2F5%2FZhNW76ulBrXWsQAzY7%2FawIVssJQge9VqU8L27sRBmSbJ%2B%2FGqSfipQs&X-Amz-Signature=6889e05019222fc83cbb7bec7da041f4e9c52a1f266faf2869b770f96861186b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TW5WYSE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDHWNYEntVQDyNsKtV1D29%2BhwRkomZs2e4kIRS6QcvSPQIhAK%2BVc0CDJPGZEoLn2B9rI6Nr%2BSmmx5bl1yt3I8cIfvw2KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYBNDbfH%2BArRbUBbUq3AOPTRY%2Fj6ZVCrntjb9RMnmUXw%2BciJwCHBMrwxzL3qd%2FDlKDr2ZoaHoGdDpQvy%2FMCzLJLW63UeT9%2FRZfFOTZhhVkrgJwv9DhcOMqw2eSR7gp8mAtLjTLQxW1hrRVbogsLjgapBaF6aa0DbqdAmJFfj1A%2F88Ra9Uh66MBnwedzvCggz5ISJj9%2FPBtgOGP1i2mr4AIy6jXEUjJ06Tv7Y5IcDe4xGgesI7an%2FHtfFftJyk5P70SKExTrZbLLoI9IJ6JWyOHMa9i4qDUM8mYZEyAtmZrawCMD7T%2BbpGtuKIb%2BxqKySBTegni3pBxoyD%2BEL5%2FfOuLsHwG5iGnFfYqrKZIao%2B1XIBkqwRr7J1w3OXoG0W%2FzPOVPvaqq3p1EULfpSNBOrhNvJsOivkItqa%2FAgQacDz3LDHsHB6gDf5Pos8SjLZ8TVZipWaC8cOYx4T%2FnnwVRgkP3%2FmwQ5jRZxWtlBlCK0kQa7jJowltixYEWhHYhLb8MW8ywr2qHK%2FYd5gX8acqOpu5ntW9QX3GPmSSWvxRVEZkueGG4CONKgErg56%2FAuOOg1Rqp95NNiDOXvXwssr5oNxbTYGBOdZ6mV0e4sa7J6UrpiG57nYMCvAsLOYJ0CmMXK3jokXRzxOiSfbCnTDxzobBBjqkAVJJ9u%2Bd0p%2BRIDK%2BbyRBHmWffRNmG1H1GTzBqZBh6cqIrQ1es7cr1ScxKn2vf7vntCrOr57I0AIW1EbZ%2BZ6f2USU66Bsp3KVCsu6r%2BfkIGMzwqXlQxDbmKpyaZ1vPSAHIWdiinsxUAYEAIVFSObSuYiXT7zzC%2FGs%2B2GxXqyBQPWgomFmYfqLzYWUwIauQ08L7lZhbUpjby%2FxfNxWpSb%2BL%2B9IW0IG&X-Amz-Signature=2068381571c9a3b0167093c400a517d25cdba4e7d072d72c2fad2eeabae69a39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75FDIH7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIA9orDHd5aQC%2BZNEJIwxXnVFPJZUDzHdN9hU1BW1OJvmAiBkph3QQPBNJwkW4HIkUtHFSQ2gEdQX4IPoTafuucXHfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZSQz4L5X90a6iUeKtwD9d0Fcn%2Bya3iPxl%2BOpSMH1PrSKJaLHArsDSYlx4yHeakoB7qQv%2BZG5PkT4ss0izU68IaMcxJYZhnpn7aI5smbVyaTAias3QUWXNFHeqFMXnnBeOOgZedKGbzFu%2FNL1N0mpep31VAKOjMnaIW%2B88NwsPJHz3a6o2hBppdOoVWFLPyJHjxiZH52JYG6iwn6BpJ7ETLgpPx7JKcwAGGGtM7hc9CtdOtBv96dRGgOX5Tup1qHl8HhQyIR2kPnpngD2y9pG4dXTofbXvEginisgZVf3T0iWyD7qAAdMBbcrBulEvyXbjFHPA9kv213XhxPRBuoJbYBnsh8vonyZxUo0IQ56fT%2FmBC3baQkcaGJgrSEH399RBDUV%2FktgBg%2FtZEUZCTtXhNMtIwYETvQE2FEf%2FNuGWHjuFpldiuf%2BATUUdtSdyTbwHYDMNeDpU6W%2Byfytv%2FpDqU%2Bnko818EQa%2BhruzoY153SzmAzToTigwOu%2FQV1quCasb8zxbfUSdcBwL28JxJ87tb6svl46sG1ai0ddPlIxpc%2BqeIsyH7FLsuEjP9TFhrNVdduXzvdcJAedohEs%2BQSiYy29V57wQBS3rSeDl%2BVutw6iniuCdmFZFQFAkRZ1CwCvooPJcD%2Br8kiNiYw6M%2BGwQY6pgEXIBYPFg5EWOjPbYnQdZmv5EXX%2BOJ%2FKg6%2FW5rvsT5gvAF5STkOIeXzyR0B79aLRjWrtQWYSo8lbIZE06ZT%2BSI7kNsnUmpef9OUFCy0Oiyd3BCXFzmQNcTvSZRMfyZSvqx4zYtf3et7zGgj2oAWXVhivUhYi3QAs4kNQuSECd5xeNg3%2FOUzYQoMnd4ZPEuldo%2BrRiAzOwxJPlhn87BZWAv9XQYjy8rV&X-Amz-Signature=4bbfb3be9c14aef6c02090b6bc1deb0d79b2b923e49b60f46d77aef09611ea6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
