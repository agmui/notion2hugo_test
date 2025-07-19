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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHYMU7U%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc26BsoF0oa%2F6bbkuhiHDNXrMmfezu4gmQeerS5UXm1gIhANgGRibDI1JovVqYx%2FyJ0Ttae64GFSSqHnuZIkbN3HDcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTZe0L7VvdT42Z%2B4q3APl5VZgK3gUsRFLxszrDYIfcyLgJR8dU0%2F3vSofjI1OvE9%2BKLpAS5JAREZCRok79E9%2BcARVnQM7Q4x3l4p3Gg2GeTYxqJHY%2Br%2BuSoCpbOKSn2uCEEkNiLIeYWkg9Z3wFNfzrclOBkocFgsa2k40TwD0mJ9elxZx68LIzOFiP2a453NvHLR3j41DTaBRE7cUwsZQz9djuXl%2F0C7X0SwGZZN960OOWZ2VmKqv82pxKzPhfG3iOacIRVwVKUOv8tfgMyhToDEDtqIFLsnb9k0OUzxz%2B2xYnqTe6OpokrUJunepEFPG4whet6wWumjZlqWNenhqQE3lpZgneAR10HO7D8wX3SVuxkZBMiWyr9h9PsOXmmKYIws5M7ecg9wFXOsYvjYD8P0J7erWvKo28T6FZkXBMYKVDMbqttK%2BZRyb8WvvcX5f1%2B0Yjud2uS1uxdo%2FO2nom%2FRyoAqE0pXcvu5B1%2BUZ6PBnlbpZNNClMyvGm%2Btl8E%2FgQZFu0Mp5IB172qbIBisg%2Fg6QV46TKfux1zYaIYQIeJHNLMGS7LjUeKZpXctJeyE9UvZ%2BsJ4PMJJhHxiSxuJgfcsQrfnYSPM3v8zuUM4Hu75oVlzCN9azJga5ZscKazvsNON4jOVf3KJumTC8xezDBjqkAQwytLCpbAsENB%2BLy4nUNpvUfV%2BeG2usROy1jtCNW8Pn9ii3n8qLlRkSHIUQFV6sf6rIJQMnQa%2BoxALHkyz1q5sElxIEJW37vzzrRuRPXpjUQps97TiNSDsSmAJkHaDQaZvjT7TSHMr22zFxYmL5t60k0WreYl4hQJtrsi5wXrQQMtu7OKejAlQr55wj7jjC6CS3vYVzErorOUADdTDw%2B0RvDJ1c&X-Amz-Signature=355ac2cb0a1df17a33fe329549a78851a1c3035dc8c90c65e1fb383052a4c773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHYMU7U%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc26BsoF0oa%2F6bbkuhiHDNXrMmfezu4gmQeerS5UXm1gIhANgGRibDI1JovVqYx%2FyJ0Ttae64GFSSqHnuZIkbN3HDcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTZe0L7VvdT42Z%2B4q3APl5VZgK3gUsRFLxszrDYIfcyLgJR8dU0%2F3vSofjI1OvE9%2BKLpAS5JAREZCRok79E9%2BcARVnQM7Q4x3l4p3Gg2GeTYxqJHY%2Br%2BuSoCpbOKSn2uCEEkNiLIeYWkg9Z3wFNfzrclOBkocFgsa2k40TwD0mJ9elxZx68LIzOFiP2a453NvHLR3j41DTaBRE7cUwsZQz9djuXl%2F0C7X0SwGZZN960OOWZ2VmKqv82pxKzPhfG3iOacIRVwVKUOv8tfgMyhToDEDtqIFLsnb9k0OUzxz%2B2xYnqTe6OpokrUJunepEFPG4whet6wWumjZlqWNenhqQE3lpZgneAR10HO7D8wX3SVuxkZBMiWyr9h9PsOXmmKYIws5M7ecg9wFXOsYvjYD8P0J7erWvKo28T6FZkXBMYKVDMbqttK%2BZRyb8WvvcX5f1%2B0Yjud2uS1uxdo%2FO2nom%2FRyoAqE0pXcvu5B1%2BUZ6PBnlbpZNNClMyvGm%2Btl8E%2FgQZFu0Mp5IB172qbIBisg%2Fg6QV46TKfux1zYaIYQIeJHNLMGS7LjUeKZpXctJeyE9UvZ%2BsJ4PMJJhHxiSxuJgfcsQrfnYSPM3v8zuUM4Hu75oVlzCN9azJga5ZscKazvsNON4jOVf3KJumTC8xezDBjqkAQwytLCpbAsENB%2BLy4nUNpvUfV%2BeG2usROy1jtCNW8Pn9ii3n8qLlRkSHIUQFV6sf6rIJQMnQa%2BoxALHkyz1q5sElxIEJW37vzzrRuRPXpjUQps97TiNSDsSmAJkHaDQaZvjT7TSHMr22zFxYmL5t60k0WreYl4hQJtrsi5wXrQQMtu7OKejAlQr55wj7jjC6CS3vYVzErorOUADdTDw%2B0RvDJ1c&X-Amz-Signature=5e1426d8081974a8f8231fc743f05fd67c66ead93cb9cf3bdf0d9440b9dbc18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHYMU7U%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc26BsoF0oa%2F6bbkuhiHDNXrMmfezu4gmQeerS5UXm1gIhANgGRibDI1JovVqYx%2FyJ0Ttae64GFSSqHnuZIkbN3HDcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTZe0L7VvdT42Z%2B4q3APl5VZgK3gUsRFLxszrDYIfcyLgJR8dU0%2F3vSofjI1OvE9%2BKLpAS5JAREZCRok79E9%2BcARVnQM7Q4x3l4p3Gg2GeTYxqJHY%2Br%2BuSoCpbOKSn2uCEEkNiLIeYWkg9Z3wFNfzrclOBkocFgsa2k40TwD0mJ9elxZx68LIzOFiP2a453NvHLR3j41DTaBRE7cUwsZQz9djuXl%2F0C7X0SwGZZN960OOWZ2VmKqv82pxKzPhfG3iOacIRVwVKUOv8tfgMyhToDEDtqIFLsnb9k0OUzxz%2B2xYnqTe6OpokrUJunepEFPG4whet6wWumjZlqWNenhqQE3lpZgneAR10HO7D8wX3SVuxkZBMiWyr9h9PsOXmmKYIws5M7ecg9wFXOsYvjYD8P0J7erWvKo28T6FZkXBMYKVDMbqttK%2BZRyb8WvvcX5f1%2B0Yjud2uS1uxdo%2FO2nom%2FRyoAqE0pXcvu5B1%2BUZ6PBnlbpZNNClMyvGm%2Btl8E%2FgQZFu0Mp5IB172qbIBisg%2Fg6QV46TKfux1zYaIYQIeJHNLMGS7LjUeKZpXctJeyE9UvZ%2BsJ4PMJJhHxiSxuJgfcsQrfnYSPM3v8zuUM4Hu75oVlzCN9azJga5ZscKazvsNON4jOVf3KJumTC8xezDBjqkAQwytLCpbAsENB%2BLy4nUNpvUfV%2BeG2usROy1jtCNW8Pn9ii3n8qLlRkSHIUQFV6sf6rIJQMnQa%2BoxALHkyz1q5sElxIEJW37vzzrRuRPXpjUQps97TiNSDsSmAJkHaDQaZvjT7TSHMr22zFxYmL5t60k0WreYl4hQJtrsi5wXrQQMtu7OKejAlQr55wj7jjC6CS3vYVzErorOUADdTDw%2B0RvDJ1c&X-Amz-Signature=165048bc231083345fb3a1682750e48408f083dfab23ff3652610ac40c6e0c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2CJTRCC%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICniH9prgI18m%2BKBbsVhf%2B8HvVqgH%2Bc7lf1CCI%2BiwYlRAiBb5uZcF1rY5rd1GMcdQj4U3jmNL%2BSr7OVYXfLAqgk8%2BCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgWrFyrYLhsmmoXHbKtwDwn0EIlYEZlWWVSXhE4IZI9hjTBE0zX%2BUNEY%2FzRlBxAK0rWHaRlb%2FxjCxNctmsSgdmJmV0OGsYWDN6z1fBjADYmlpRzQxZ7bRZlbR3bL7Dur%2Fgz5jHlyqYVDCv0%2BXjnezSdRr7QTToRKhAlijxw8M%2FlQ%2B3wBLx6uj5kpqikVWF2bGfY7MGH7MU2%2BcDe%2BBMFvlL884zn5WlmhWfLALtBFMYUNa7K79V4QaX5Ug6HS%2ByJ6FMik4GUAuO1P344Nn9XE2T1NYXZsqLARnY6bv%2BZ27pe6lQUv8Ml8BF2PcwzKXhjKZVMIfyX98jMQqATOE26sK5j%2BwKWTG17Zs5BkKRuo2NzfwSpJTE%2B3t5hHN%2F18Gl12xGwWru%2B1YInvhS25hXXdfppFjIcpJoZs7x0N1OBjeo%2FYkSJIW5imp%2FNNUl00GkPg41byE%2BukVIsNaZVzwStCHR5pPH9q%2BW%2BrWYkwcMxciCpmE7Dxi9kyWsV4lArMR6GMg6rcoypeQ1GlmBrXXjQ9PKFD%2F2g4huHBlv7Oc6tGY9h6c%2FV3a4LzwjH28KOM%2B9cwQ%2FRheXjwBNqrLxEAAQIvzTss6uSannBnHfQAm4gf7nfGjIS60LCoHJ%2FURgA8SdSFv7fgxR3fdR%2B%2BqPO0wvsXswwY6pgFi0IItd1Cu6R9yBJV4zauUiyVFTtLDISZwjQu4tbpPQzal%2Fp2%2BQkKCXBo%2F4iFLJsGwQtVHarUhJ7KZHXsrE2t688RA7PRrOnV3JI8xMUOCXQ5p1rG5KwjEtVzTk%2FvAcedkrf%2B1deeOmhN%2FIPsKKiRM4sU5KVllvaz%2BMXftylfOc69O3d4v%2FD1jzMCcFRMEFyG9m2%2Bh2zVYGLWvIkYs5Q2s8p5ngqHR&X-Amz-Signature=e7ac8ae6f661931adf7f3bdb38686cd5f50459e5b14bf48c54fb97ab7e771abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YLW6M4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwSk6eh4%2BYZdBv8215nOfNOtb5PY%2BwEERUKc6ftbcnNQIhAKMmbf9Xk9hDKkpZqQMQkCqfrSVEM%2BBD0069I4i7GyNzKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZQEcbOMvD2uTzfREq3ANxxcp4qrLy6MjC%2FAcc7lZjuHOx7RtcCqo8P%2BU9indKQojt9HNS12PamZR%2FoLmBvbCdr4NMrZx%2FkC788%2BvbVjoNAGUbK2e%2FtMBs8LeR%2FgAzw9a35EPZOpFAzId3Sjw7Va%2Fqoig%2FkGDQyPPwwEMDSXCO1DhMZpRxIyL2KROeh8dSUmzHCSZY5FzVs2ELuZ0qGq5oJ%2Bn%2F%2BSDIgQ%2BYyfCx0wTgpXiEIzY5Q7JRGEYYCzGZrPwh8Z6TQowGLr3Q%2BN6kwvAAL12WFmltE7zbaI6nUijtS9OJRWb0LG8gRFuLApYEv6p6%2BTbyHfEuSmA7JBZm6HoLD5V9jhIiVmelD0leSa6eqT5pPy70PzSZKXe%2F%2FP7vrO9OfXDsPgt3yDkWpwBGAJ0TPRrurowo36H7%2FhON%2FTjezSrpi8r5ayi1omwKtBu09P1IjQpMQn%2FQVHYB7lPPvsLLMfeDhsiZETXZVT%2BJAeX5Gr2Qo%2BrlukdTsM6aNCwzUXmLhTkrE579vsBar5Pn1CwlLOAuTn7RD5fPOXIrw4k4Wi2A%2FqqEOLvTyMVocvLGoCn0ZGfBejn3W7R%2FV9YX6x7c4IbtheqcqHMcNmSPa%2BNbpoi2AQDNYWCp2t2Y86%2FFbBUbBHpgBDrv5ymBFTDdxezDBjqkAd%2F%2B%2FA%2Fb0M%2F%2BRnY%2Ft4%2BnQDT2wQZhihWNhIf0ITg7mEhyQ1CMsUEEbYkHXUKBYKmAm891ddH%2Fkztgj5%2BgeFnyCrPGYuln9NXN56h8r28yqNN99yxANd9v4mMDLgbOoWqsCxsdOjfpYzNO57WOe%2B%2FB5SMa8iHLOve%2F5yzqVpLxuwtrW9%2Fx4pObzx2BbujkOavS9ZPGMGXaApHFMI95qJ%2FeFUbmk1PX&X-Amz-Signature=040b84e5baf251d71ec16991a09680e915e592c2e0c620914badc7308497988e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNHYMU7U%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc26BsoF0oa%2F6bbkuhiHDNXrMmfezu4gmQeerS5UXm1gIhANgGRibDI1JovVqYx%2FyJ0Ttae64GFSSqHnuZIkbN3HDcKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJTZe0L7VvdT42Z%2B4q3APl5VZgK3gUsRFLxszrDYIfcyLgJR8dU0%2F3vSofjI1OvE9%2BKLpAS5JAREZCRok79E9%2BcARVnQM7Q4x3l4p3Gg2GeTYxqJHY%2Br%2BuSoCpbOKSn2uCEEkNiLIeYWkg9Z3wFNfzrclOBkocFgsa2k40TwD0mJ9elxZx68LIzOFiP2a453NvHLR3j41DTaBRE7cUwsZQz9djuXl%2F0C7X0SwGZZN960OOWZ2VmKqv82pxKzPhfG3iOacIRVwVKUOv8tfgMyhToDEDtqIFLsnb9k0OUzxz%2B2xYnqTe6OpokrUJunepEFPG4whet6wWumjZlqWNenhqQE3lpZgneAR10HO7D8wX3SVuxkZBMiWyr9h9PsOXmmKYIws5M7ecg9wFXOsYvjYD8P0J7erWvKo28T6FZkXBMYKVDMbqttK%2BZRyb8WvvcX5f1%2B0Yjud2uS1uxdo%2FO2nom%2FRyoAqE0pXcvu5B1%2BUZ6PBnlbpZNNClMyvGm%2Btl8E%2FgQZFu0Mp5IB172qbIBisg%2Fg6QV46TKfux1zYaIYQIeJHNLMGS7LjUeKZpXctJeyE9UvZ%2BsJ4PMJJhHxiSxuJgfcsQrfnYSPM3v8zuUM4Hu75oVlzCN9azJga5ZscKazvsNON4jOVf3KJumTC8xezDBjqkAQwytLCpbAsENB%2BLy4nUNpvUfV%2BeG2usROy1jtCNW8Pn9ii3n8qLlRkSHIUQFV6sf6rIJQMnQa%2BoxALHkyz1q5sElxIEJW37vzzrRuRPXpjUQps97TiNSDsSmAJkHaDQaZvjT7TSHMr22zFxYmL5t60k0WreYl4hQJtrsi5wXrQQMtu7OKejAlQr55wj7jjC6CS3vYVzErorOUADdTDw%2B0RvDJ1c&X-Amz-Signature=17fe5163b6b686af86c24a661f456a98d64dc21d2f2f9eda727c6d6649f0c3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
