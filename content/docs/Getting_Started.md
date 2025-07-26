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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5N54BX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF%2BykVwdhRGHKWFx%2BW62CrfgQxmJW2f4fo7GKxtwihQlAiAhFikUAbTxnOkOMpi4irqeb78FCXKmKTRZSOpESNdpeCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMf1rO9aar3%2FtCmlQcKtwDJqR94qI3iLjxRUMFiYaM7vD6vTcHAD1sACZt2QUQCDpPKJn828cQm1Qc91VY%2BX1UjCk8eBTKPpgMYL68bssCT6uv0%2BIhQRdshxWSrcjEdlmIEWKTwYvoU4svPrmQPoqSqTVEixqCgAwk%2FoOLDGtIDnn403YiQe8yiUCjDPTsJOOmXwsYjI9qW8b8MS7UYaOGBRQG8wFr3idl277jnh860UqFd3i9CP2N79Zo1xFB6yR83F3x5Gu0Sx90XnVGmvoSKh9Wx95cle6cm9%2FL7qFHDvCTUllri4%2Fw0dAa9gobOLqIfpCHzfD5Opv7CGyXkjzFJdPOJO8DmJMXR%2Fi7V2jUYE0wVbDVspp8JlY%2B9%2FwuPIlTOT2AD2yp79dXLQNS51BoUTSTdsIdcCID0S1BbjRf32EZ06iSgiPn3cayyswRnsUHHg3P9QESnMgs410d8v1%2FAhLSvKDIaY%2FacxlaYqxCSAory4In7hCCNr0x7m0CO7lpROx5qrO%2Fk%2BUpUKU%2F7vR3dW13TzaWKlIzJ9lnpCUXnwhzjSjvuzPTVBn3geo9ATkVtsZ6ND%2Fr3cAKhbBocNksKw0nzVcujyOIn6WC%2BJ%2Bd80Dayki0%2BAVYFO6cvO9nP9Y%2F3AWe9o4ozvWV4fIwqMKTxAY6pgHsZnBFeUqv1sl6tm0mrNMiM0oLGoU879akZxXUQhgh2sfbGRNFbgduvBFr0pZfcVqWidhoS%2FUn1C0oZDNQxo0BI8UE%2FWpCgYEtc%2B7Y8dBMYDkQgu5XPwosZrVzLMxmXm3HOE%2B%2BxI4J8xIygDQ0RdvAfUqdj6%2BhwwZwxr195rLzknKS9bnSTWszYtsm0kBVUbNnHbgqGkioGCY5Xsj2HOYmbQUCimll&X-Amz-Signature=f22267822396963cf1702062039b4c463f661cf78682c4dcf89cf7ae1b593207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5N54BX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF%2BykVwdhRGHKWFx%2BW62CrfgQxmJW2f4fo7GKxtwihQlAiAhFikUAbTxnOkOMpi4irqeb78FCXKmKTRZSOpESNdpeCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMf1rO9aar3%2FtCmlQcKtwDJqR94qI3iLjxRUMFiYaM7vD6vTcHAD1sACZt2QUQCDpPKJn828cQm1Qc91VY%2BX1UjCk8eBTKPpgMYL68bssCT6uv0%2BIhQRdshxWSrcjEdlmIEWKTwYvoU4svPrmQPoqSqTVEixqCgAwk%2FoOLDGtIDnn403YiQe8yiUCjDPTsJOOmXwsYjI9qW8b8MS7UYaOGBRQG8wFr3idl277jnh860UqFd3i9CP2N79Zo1xFB6yR83F3x5Gu0Sx90XnVGmvoSKh9Wx95cle6cm9%2FL7qFHDvCTUllri4%2Fw0dAa9gobOLqIfpCHzfD5Opv7CGyXkjzFJdPOJO8DmJMXR%2Fi7V2jUYE0wVbDVspp8JlY%2B9%2FwuPIlTOT2AD2yp79dXLQNS51BoUTSTdsIdcCID0S1BbjRf32EZ06iSgiPn3cayyswRnsUHHg3P9QESnMgs410d8v1%2FAhLSvKDIaY%2FacxlaYqxCSAory4In7hCCNr0x7m0CO7lpROx5qrO%2Fk%2BUpUKU%2F7vR3dW13TzaWKlIzJ9lnpCUXnwhzjSjvuzPTVBn3geo9ATkVtsZ6ND%2Fr3cAKhbBocNksKw0nzVcujyOIn6WC%2BJ%2Bd80Dayki0%2BAVYFO6cvO9nP9Y%2F3AWe9o4ozvWV4fIwqMKTxAY6pgHsZnBFeUqv1sl6tm0mrNMiM0oLGoU879akZxXUQhgh2sfbGRNFbgduvBFr0pZfcVqWidhoS%2FUn1C0oZDNQxo0BI8UE%2FWpCgYEtc%2B7Y8dBMYDkQgu5XPwosZrVzLMxmXm3HOE%2B%2BxI4J8xIygDQ0RdvAfUqdj6%2BhwwZwxr195rLzknKS9bnSTWszYtsm0kBVUbNnHbgqGkioGCY5Xsj2HOYmbQUCimll&X-Amz-Signature=c32f2b9768f34b56ec4b509b3e78e0e360aa57bf8d876954bad681b12b84f3b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5N54BX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF%2BykVwdhRGHKWFx%2BW62CrfgQxmJW2f4fo7GKxtwihQlAiAhFikUAbTxnOkOMpi4irqeb78FCXKmKTRZSOpESNdpeCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMf1rO9aar3%2FtCmlQcKtwDJqR94qI3iLjxRUMFiYaM7vD6vTcHAD1sACZt2QUQCDpPKJn828cQm1Qc91VY%2BX1UjCk8eBTKPpgMYL68bssCT6uv0%2BIhQRdshxWSrcjEdlmIEWKTwYvoU4svPrmQPoqSqTVEixqCgAwk%2FoOLDGtIDnn403YiQe8yiUCjDPTsJOOmXwsYjI9qW8b8MS7UYaOGBRQG8wFr3idl277jnh860UqFd3i9CP2N79Zo1xFB6yR83F3x5Gu0Sx90XnVGmvoSKh9Wx95cle6cm9%2FL7qFHDvCTUllri4%2Fw0dAa9gobOLqIfpCHzfD5Opv7CGyXkjzFJdPOJO8DmJMXR%2Fi7V2jUYE0wVbDVspp8JlY%2B9%2FwuPIlTOT2AD2yp79dXLQNS51BoUTSTdsIdcCID0S1BbjRf32EZ06iSgiPn3cayyswRnsUHHg3P9QESnMgs410d8v1%2FAhLSvKDIaY%2FacxlaYqxCSAory4In7hCCNr0x7m0CO7lpROx5qrO%2Fk%2BUpUKU%2F7vR3dW13TzaWKlIzJ9lnpCUXnwhzjSjvuzPTVBn3geo9ATkVtsZ6ND%2Fr3cAKhbBocNksKw0nzVcujyOIn6WC%2BJ%2Bd80Dayki0%2BAVYFO6cvO9nP9Y%2F3AWe9o4ozvWV4fIwqMKTxAY6pgHsZnBFeUqv1sl6tm0mrNMiM0oLGoU879akZxXUQhgh2sfbGRNFbgduvBFr0pZfcVqWidhoS%2FUn1C0oZDNQxo0BI8UE%2FWpCgYEtc%2B7Y8dBMYDkQgu5XPwosZrVzLMxmXm3HOE%2B%2BxI4J8xIygDQ0RdvAfUqdj6%2BhwwZwxr195rLzknKS9bnSTWszYtsm0kBVUbNnHbgqGkioGCY5Xsj2HOYmbQUCimll&X-Amz-Signature=41e1cf3f23ea74601cf1bbc2582aab362c5260ebf4f0d1bc92c3c6e8ab2824e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRK7473P%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDNxQ7NuAxY9HoFH6W3XE%2FuhsgpegB3rZuz4SWRolp%2BCQIhAKmqJvGswLwq9jGGofHEmL%2B4R7z2kMiYmtsWzfNzEhj%2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgxO%2B%2Bq5JP9RptavQ2kq3ANi1qLTftmRmW9cCyLsd1LSWf0QwZbBNhpDdN8xx14Marc3X6%2FwkgwlOm1GPNRdjfKyE5DkdsiQ43Ud87deHkEqOeXQ4p1jKcg6JDTFj%2F5bW12WRfQC3UEz9PYPPcFwnEg9fvH%2BvgQ9U6hl58HYbKBHYSFovnExFRM4AhBuw5jlaLCLcQt%2BHBS%2FaRrXyFWGXvfspj61hanQI%2FYhhWzZraGWyiOb06LwFqKQf51cBPnS603rpD3wvYlnbj6OGORWlmEOyVfLSs3a2X%2BZLHUDRFAO5wlcVOhooIaWqPxJjf81bzXhxjr%2BbZl3pRzDZ4tN7O6QqGQYILiE%2B%2BlGyxQ9tHm1g6pvsRUHhzs0Fg8SbDHlsB320UctTLbNEAEKRBH9ELn2SO1Wnal8%2FJCVq3vrFljTGxzKgaMSuUc9qncOmbBs6gp7zKWo75wu7Q2HwhgBvIW4yGW%2BTyvsQBtA5NIzCsV4XSsPV7VWkeqi%2Bk8XOvLg9xLxGQ0EPVML6RDEwbrMaUwkHS79ydrEWZ%2BtdPPV6%2FKQ7i6NxaNFSBcv8FZG3dEV%2Bsji8AYnB8dVia5GmaMgHaxUn7LVyCK9NpLfedAul%2BtdHA0fr7%2B5rhASO88D8wboHYYH%2BavPM7RhnP%2BATDC2wZPEBjqkAS2zFU8nV9ZCJUlqSomlH8qbI%2BEmyH0BVW%2FhMww7k%2BUIrW3HDW1ms3OZZ9Wk8kw5U3uGkF7PALiUUH87xquUpAfhRZVEh7fZ0v49DldNEiQu%2F3XaaodUnnuz4WMTNNPlMoje8TcoIewc4UyzrAJjIDjy3qLQIvyLI3z2XCKVuMUDe7z4a0U16DdgJRqMqSZAe8I9mhpfpcbbDoNmBmJftoC%2BCCyE&X-Amz-Signature=1fca815c86b8366e16ab18c8f3d91bf517a321e592c043e73283c94cf3234e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7VNIP7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIGt4lXYx6eLtxuKeJZ%2F7PeA7Xy74CV5tKfvRnRkCwFyfAiAPPTNBIZVeGcBknNyOet7F%2BprDE1TyX8vsN0UBw%2FEniSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMnCafEcahFUTS1xz8KtwDEFsoklkeBse5vPHRMxTzpgtFsbtYPyVdqa%2BSq1ZhnyOT%2BKQUwhMVuMT2kDHfiq2HnFzDzwxbQ4QudFrpAi9trEYJWl283Rfng7Rz1Ymp%2F3vPrRezsTrTfa91Swrkl5UL%2FNbF7FwjKlWK6h6RRBWFsydfF%2BYtMaM4rXDC46zPciXpQQapXRvBwV67mFI%2BhTciKHpqd1mdYvdbGG9TuwY9kVkBathjtQS8VpJFXkoC%2BWUNwXiRZfn6FLq%2Bukykplw0pla%2B6stNgOsLMlF2GvdtkDr%2BV5fbqHjd2nqLGqqeaWSE%2FXnwunm%2BXNH8Xf8LJa4lKq0KhFk2%2BShvqFXYNmuF5yAmDbLOGuTcjhtj7vpop0Q7bAwgEJzOeCXm7hJo%2BXRb3vcS8dTbs7pshmabn%2BWopgBML3IVjbEZqPyoj7uvZgn7X5zGsPHHRF55dSsVZVuBlsjehoPvOo%2BGqNoOY2vqZrM4wvUf57N9mL2fj0iw3BdYeMYh2h5coi%2F98NUHM4bWkVmhhkvaI0eKLPUngVAOPr7t%2FuahiZzk2cOgfEDXnYuk3oYLGSOsrWNWCDYR5JcFT%2F6CMRYLRTs98mtzwrAlH3vjyr%2BrDWrSbBdwy8ro3Y%2FbUJwK7MDaGNpK7Ukws8GTxAY6pgFPBWMk0UKdPmM4dRqKvjxUjnGd9Y%2FXahuIamaSy2yLkSobtSU%2B3n5HXXiSZ2bXjzOVqGLHidGCdRsgN%2F0VlWdijINPX%2BPKxywVGblefR97Fjlz%2FhLsW180iC31FESr04BAm18A9GywU0vyqDcS8DiLq5hW%2FCa%2BNAW3j9T0EVknLeFXIjm%2Ft%2FDpaTu0G66HZXjewymXwD%2BhAyElx5v07W5rfQGazGS4&X-Amz-Signature=7c40cefd8bcb7edaf8e6dc9fea0ed343214408192a30722664cb892581652dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5N54BX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIF%2BykVwdhRGHKWFx%2BW62CrfgQxmJW2f4fo7GKxtwihQlAiAhFikUAbTxnOkOMpi4irqeb78FCXKmKTRZSOpESNdpeCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMf1rO9aar3%2FtCmlQcKtwDJqR94qI3iLjxRUMFiYaM7vD6vTcHAD1sACZt2QUQCDpPKJn828cQm1Qc91VY%2BX1UjCk8eBTKPpgMYL68bssCT6uv0%2BIhQRdshxWSrcjEdlmIEWKTwYvoU4svPrmQPoqSqTVEixqCgAwk%2FoOLDGtIDnn403YiQe8yiUCjDPTsJOOmXwsYjI9qW8b8MS7UYaOGBRQG8wFr3idl277jnh860UqFd3i9CP2N79Zo1xFB6yR83F3x5Gu0Sx90XnVGmvoSKh9Wx95cle6cm9%2FL7qFHDvCTUllri4%2Fw0dAa9gobOLqIfpCHzfD5Opv7CGyXkjzFJdPOJO8DmJMXR%2Fi7V2jUYE0wVbDVspp8JlY%2B9%2FwuPIlTOT2AD2yp79dXLQNS51BoUTSTdsIdcCID0S1BbjRf32EZ06iSgiPn3cayyswRnsUHHg3P9QESnMgs410d8v1%2FAhLSvKDIaY%2FacxlaYqxCSAory4In7hCCNr0x7m0CO7lpROx5qrO%2Fk%2BUpUKU%2F7vR3dW13TzaWKlIzJ9lnpCUXnwhzjSjvuzPTVBn3geo9ATkVtsZ6ND%2Fr3cAKhbBocNksKw0nzVcujyOIn6WC%2BJ%2Bd80Dayki0%2BAVYFO6cvO9nP9Y%2F3AWe9o4ozvWV4fIwqMKTxAY6pgHsZnBFeUqv1sl6tm0mrNMiM0oLGoU879akZxXUQhgh2sfbGRNFbgduvBFr0pZfcVqWidhoS%2FUn1C0oZDNQxo0BI8UE%2FWpCgYEtc%2B7Y8dBMYDkQgu5XPwosZrVzLMxmXm3HOE%2B%2BxI4J8xIygDQ0RdvAfUqdj6%2BhwwZwxr195rLzknKS9bnSTWszYtsm0kBVUbNnHbgqGkioGCY5Xsj2HOYmbQUCimll&X-Amz-Signature=ae4a7bb6b3238edf5627ff4dbb1f15b2caabdc95cb5cdecc93c31fe5206ee2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
