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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQJIOBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMx5BU0qqBYWN31JKSS5wPfHFCS19bH891TUAyXKRTwIgGZF9aKI%2FMcrd%2Fzp3bCLOnMSrKk3EVNpjFOiRDHSHNtQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJE2Iik1ykdHLHbwiircA5AqV6Z06zRfttEi%2BD%2F2o8qNaZJfPwq3pXkdG4lZuOaWvRqVR1FWj5znna47I6ugKxeA6Cm5gN%2FSG8eJ35BhpzP1c38Ta5G%2B40h7brH9W0IMNODkdFl44VLP2KS1nzr%2FGWRI7w4w3OfXo%2FjoLNQsn%2F8fjLLRr0zLLGsjqUvIxlL17KuLg6FbF%2FPDBy78pq%2Fhk31hJ%2FryroXCgPfVO93pqH7kOnOBndi5YnsqG1GdgZ4vJqKySowTZ8ROMApIfYRPqWvKEF2GQ77tJlrLNatAiY1WTPve%2FijcbdaSuSI4a0%2BLCmIi1ihhwT4aBlkPz%2FR5C1U%2F3AHX1%2FBYCEG7hDLqM0SLVimvY3Vq6HHIa1jtpRuLKWq1q3XFyKZQBkqQvLMM3FB9SlG8kEgARgSDo4DduQpxx9Pj1N8EcG5YK6wXwhY0l86lEWabriWEMh%2FWcyMsoMic057lQ5X8DhPevt8B%2BmE9pZzOebTaXh1VOYRixayAzoHG2mF265muWK0GhVENFtEcnSQIsyLmWypWaSoioVU3NrFx4DAwBVakiytde2%2B7PzB%2FUWtIx4g4ut6sfgqT6JzumElpiunInYpSYOAE6ZNQIavtv8pwjL2lSdMM2m6%2FqVrD0IvVez%2Fgd9sQMMOqnL8GOqUBInee4sQ2bXAQGvtd01Lycp%2BUjR5HqccnYbcciRLsvMf9bY8TVKlflLHy3snMjHTwIU4wV%2FrucQz%2BpdIpImKTHl%2B%2F4MgKdJSaKz2Bt5I7im8Be3x4u8w2tW%2BP2%2B%2F7L6dRVp%2FrKG5Dn4kgCkHLrBaOGbjC7zVThVTZpm837t%2FItVYKug6L9o9%2B6zk4kZK6v26wOIxM9QJ8mZMJh5V1JUerkrRRpeNO&X-Amz-Signature=57677be2e7ec70739df061c61bdc89d4a636f957958bf8e1e79fcc349b0335ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQJIOBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMx5BU0qqBYWN31JKSS5wPfHFCS19bH891TUAyXKRTwIgGZF9aKI%2FMcrd%2Fzp3bCLOnMSrKk3EVNpjFOiRDHSHNtQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJE2Iik1ykdHLHbwiircA5AqV6Z06zRfttEi%2BD%2F2o8qNaZJfPwq3pXkdG4lZuOaWvRqVR1FWj5znna47I6ugKxeA6Cm5gN%2FSG8eJ35BhpzP1c38Ta5G%2B40h7brH9W0IMNODkdFl44VLP2KS1nzr%2FGWRI7w4w3OfXo%2FjoLNQsn%2F8fjLLRr0zLLGsjqUvIxlL17KuLg6FbF%2FPDBy78pq%2Fhk31hJ%2FryroXCgPfVO93pqH7kOnOBndi5YnsqG1GdgZ4vJqKySowTZ8ROMApIfYRPqWvKEF2GQ77tJlrLNatAiY1WTPve%2FijcbdaSuSI4a0%2BLCmIi1ihhwT4aBlkPz%2FR5C1U%2F3AHX1%2FBYCEG7hDLqM0SLVimvY3Vq6HHIa1jtpRuLKWq1q3XFyKZQBkqQvLMM3FB9SlG8kEgARgSDo4DduQpxx9Pj1N8EcG5YK6wXwhY0l86lEWabriWEMh%2FWcyMsoMic057lQ5X8DhPevt8B%2BmE9pZzOebTaXh1VOYRixayAzoHG2mF265muWK0GhVENFtEcnSQIsyLmWypWaSoioVU3NrFx4DAwBVakiytde2%2B7PzB%2FUWtIx4g4ut6sfgqT6JzumElpiunInYpSYOAE6ZNQIavtv8pwjL2lSdMM2m6%2FqVrD0IvVez%2Fgd9sQMMOqnL8GOqUBInee4sQ2bXAQGvtd01Lycp%2BUjR5HqccnYbcciRLsvMf9bY8TVKlflLHy3snMjHTwIU4wV%2FrucQz%2BpdIpImKTHl%2B%2F4MgKdJSaKz2Bt5I7im8Be3x4u8w2tW%2BP2%2B%2F7L6dRVp%2FrKG5Dn4kgCkHLrBaOGbjC7zVThVTZpm837t%2FItVYKug6L9o9%2B6zk4kZK6v26wOIxM9QJ8mZMJh5V1JUerkrRRpeNO&X-Amz-Signature=8db3d0b14c0b0547231aa352d46ec4c79def8f349385f5f9621bba96d41e8000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKGXTYWV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZj%2FZq8hJidGOU1dY4ouJwkW9HwvH92JdnS5Y3IrtdgIhAIDahV5qbbtxRQ08r25zEW8JL%2Bi5TV5K8nmB1LufkY1fKv8DCGcQABoMNjM3NDIzMTgzODA1IgxqxMz2TXWc65jP6TMq3APj2huWzsuO8l%2FvcUZ4z81XoWSH4TnZO1LaW30RuO1NyJwIApx7JNol1X1j86plq2iCsgO%2F%2FyCF0r1pG1ujeLYDVFVxJAuMnCh7Sp%2FDueDyeJx%2FkZQ8dJGLSM7FZhuy4ovMdjwU81pRHNkoCKnAWKXI41webgQnOlo7%2BozcYjS2rz47cqDERIcHi2TYhLt6QEiqQt5234XizuB6O071ddXU%2B4iph5zq0oZCixfQxXG9nSZZWUbZm3YMwWoLXU44vu5EfCIp%2B%2FCIcTrBf8vFr4QtCUlkgjTlzfESztN0NoXb5qO8LYkyffmJORUMFHGilqW9gh4UHJ9nGqxq9jGgbXoU%2BvvnjNgDfgH0PvYLU9v6%2FXyx%2FkG9LciiMmLm7LK2%2FROIiFJ%2FIfDS2oc%2BYmqE40jA63mMdc3guhzz%2BdYVGH0OYFNyRORCyg9FNhWWRyMy3FCd1TO7kezzX7X%2B6pdQocG8SNYPYReRS8MOAuL2FuJ90iwEfEqkoLsuMc31tsZItM0B38Wm3Z8Rbl3p9ltyiSLsgjcGDqspSeGgeP81wwjxkEAjQZttqSxAnMCKRaoY43R7pPnylx1s1NSNQLmvAx8BK1Bk6zv88l55zMxfC3j0VgT6OdWxMIchEuDe1TDVqpy%2FBjqkAd8bVFMES63EQsAtVtn9N06iF7Gne6PCzvCaSfK9AZSZnwn%2FREAcsJ2WXQBmNIe%2FW6qe82Cir5fJfMMziFor4xgLOD4xQkpmqfgj11hXyUT2t%2FRboQZS6DAPsXrK4VY2gUJ4yz2VytPXGz6y%2Bi8pSsy4fJO6ah9XQkn9LPnPtIJdHVc5K0z3g%2FX%2Fh4cnDyRHYaN5xAwtilsdXPXW%2BY5w%2F0r2MvrV&X-Amz-Signature=9a6be26c8ed1527886bd8b54db0da57723f54849f8fd6514996e4ef621b0fd59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466727VVN6G%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3ZBU%2FeC5odU9Vqet1CRv17kTi%2FFenwCOP7FOkTdYb%2BAIhAI4%2BZWgK63LlMRaK8lk%2FcjXW8aii2p7eW11%2F4ohIPiWkKv8DCGcQABoMNjM3NDIzMTgzODA1Igw0ca7j5SVHhqe%2BzKwq3AOLsnFldZg3%2BlZuYUlm7aCbEdcH2IpKYJVEz11zJ%2BlfXzw56AQEqAE5J6vufR%2F%2F3DPmKOT1LyWoDYJ7afEz8%2BQRVj%2BUYnFbxCiq73ow%2FDw%2B%2FWqNZHOxonN1qcQ347qhDjgPWciWZHVlqf8j8kgJi9uIPFyqcPlrOr%2B91ssWgUxKJJOZw8lkvBEqjDqtszVnpLQSs5Wo3xG8jaP2zIt4fjcG35y9sWfbITLpdJWr34cFDcDNDRLwZrOni6NfUAyeo8RkAYUVKv9wD3nFeoT6vZ33d3e26Vg07PRdHA3D8TG%2B53VdC%2Bfte0%2FGGXv2%2BziKG4S9Yyme0UfDUvL0PYXB5o1yQG6HRONj%2Bc%2F3BNG22i0vMyRty71KnerC9jLFJ88CCwKtIj7LGcui%2BXpiJxJQIEcnEDOJl21pBFDU2PgiO3lf22u2x2%2FDOm8udz3ecKk%2Fz2aJ7%2B47RZYtMfLpqbpAhAfrPGp6Sc%2BSo0D9QNI2vi3o8lQXvL6KQABJ5WEJKsOCJFmPIC520fNAgv62bSspaKHQHXWzNPYvxkEfqPqlzLFjrbPDIOaBOd6MHZmvH1zjoU7GXycrX4k%2BhDaMprXNVlfyd%2BZTFsmsq24PfG8YMjrftDmOlTSBAMknRPhbYTDuqpy%2FBjqkAdPnzguoTZjAlGP1B%2BJP9Vf4f8hHzIeu3gb%2BxeoDojNaisgdP5XL7AogqFKKcarK0Q29og4TMemBhcHyN%2Fvtq5Wktve2HBfH53kwWx8ZyqzzgoD1ETyIPmJvxBB0spNk%2Bd3A2K9Oha%2Btymmfht5kjGh6x5u1lr67ZpPTJOQie3cwdCdNKVbcqEmOS9bWlcr7%2F105jk9j2o0M9DaOV6mIJfFS74ji&X-Amz-Signature=c5fe3ab2a05bbeed74889165e635a4eefffd5d6e5a963fbd606b89c9566086b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQJIOBV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMx5BU0qqBYWN31JKSS5wPfHFCS19bH891TUAyXKRTwIgGZF9aKI%2FMcrd%2Fzp3bCLOnMSrKk3EVNpjFOiRDHSHNtQq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDJE2Iik1ykdHLHbwiircA5AqV6Z06zRfttEi%2BD%2F2o8qNaZJfPwq3pXkdG4lZuOaWvRqVR1FWj5znna47I6ugKxeA6Cm5gN%2FSG8eJ35BhpzP1c38Ta5G%2B40h7brH9W0IMNODkdFl44VLP2KS1nzr%2FGWRI7w4w3OfXo%2FjoLNQsn%2F8fjLLRr0zLLGsjqUvIxlL17KuLg6FbF%2FPDBy78pq%2Fhk31hJ%2FryroXCgPfVO93pqH7kOnOBndi5YnsqG1GdgZ4vJqKySowTZ8ROMApIfYRPqWvKEF2GQ77tJlrLNatAiY1WTPve%2FijcbdaSuSI4a0%2BLCmIi1ihhwT4aBlkPz%2FR5C1U%2F3AHX1%2FBYCEG7hDLqM0SLVimvY3Vq6HHIa1jtpRuLKWq1q3XFyKZQBkqQvLMM3FB9SlG8kEgARgSDo4DduQpxx9Pj1N8EcG5YK6wXwhY0l86lEWabriWEMh%2FWcyMsoMic057lQ5X8DhPevt8B%2BmE9pZzOebTaXh1VOYRixayAzoHG2mF265muWK0GhVENFtEcnSQIsyLmWypWaSoioVU3NrFx4DAwBVakiytde2%2B7PzB%2FUWtIx4g4ut6sfgqT6JzumElpiunInYpSYOAE6ZNQIavtv8pwjL2lSdMM2m6%2FqVrD0IvVez%2Fgd9sQMMOqnL8GOqUBInee4sQ2bXAQGvtd01Lycp%2BUjR5HqccnYbcciRLsvMf9bY8TVKlflLHy3snMjHTwIU4wV%2FrucQz%2BpdIpImKTHl%2B%2F4MgKdJSaKz2Bt5I7im8Be3x4u8w2tW%2BP2%2B%2F7L6dRVp%2FrKG5Dn4kgCkHLrBaOGbjC7zVThVTZpm837t%2FItVYKug6L9o9%2B6zk4kZK6v26wOIxM9QJ8mZMJh5V1JUerkrRRpeNO&X-Amz-Signature=1e0c0f1ac4471e2311b861c0eec7dec1f38a9aa849004402e710f33b6db4514c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
