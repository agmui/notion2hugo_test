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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX452ESN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnnqZ6ZwBTQzzB0wQa0QCjtytVJYzv8YsTAgBZ6HaPwAIhAMmPKcSKO1ZCaey4oSW1heKg7t8KwcCjUAfF72ddlaiMKv8DCDYQABoMNjM3NDIzMTgzODA1Igw6ETScKCHSRDKNYyMq3ANacUoN3654Qe%2BqRRlQq5yWY5sSONQ5eLPum1UunHEBAn1%2B4oxWc08IoAg2woPqbAIZq3DmvE2cbN2%2FsY2E218nm7TSvVgt0bw8CGU0I9WJ0BWBVC14lIjmA8bz%2FZnB%2BZ3n4vHsc0MWptEnnaJ%2Fn8yFEFgC5efQV%2BYw%2FbzT8vAO7DjeGRSwSrZz6ifMY68RDjF5RXXrzDVwWby8pN0uef1wtvBq5PPJnVsFZp2Po1ujuUqBnTTHieaZnXJ%2FjLLec7WcwOQZTEjdky4GugSIVAlEikZBuLkuYO4LmtZhcf9PoCJDxTqn2PUC1Gr%2BRkD%2BDjWXiZdBCgLshovBE2tKNE%2FFhPQIsaJcJzWWB6PeolMjMrvYyB7FqkPiC4fEm4WZrc4NXq99Sn%2F3zZsQXAgGEKFZGV8aRiJPNcQ2SNoQE3TAVTQ7biRHS32M8wNCCaURjUl6yKsDCOo1oZMGdKS%2FNtPuA4M2gjTLljGy6L%2F7HsVECkn%2BANIDk4Eyhb6pqSdc3LQEc8j47mdKbiLZlS3rkKNJU6IZiucrhmQdUh73qMvlmZrGDX8Tcb58wnPDVVWbKTSx4EeVEv%2B4y6YDCsrbfTPnLSs1RP2oPDod5JMF6T4Zio%2BSceGv9MaHmtiZkzD4%2Fdy%2BBjqkAZFGZmt91A2lzaZfsF2DXOYsWKtKvE48K6L%2Frqaph%2FMF%2FHW3G8XTAhRW8PONiZiWyzTCdhYOHQ11tjR%2FA9MdDSqFD4V2hQZMYhzzkc1b4UN6gtp9elcEwCO5Z19%2B7w9lwO2xpISaJIFSYyiNEA%2F5BmZ7w3XZwIqgReYQPhfl2wOUqrM9wTLhfVZVRDaHoPveGlX%2BFtUPchcxmafu7yPPXoe7PoNQ&X-Amz-Signature=b56cc12cff5c9e280ecdab06411d95f82f0f2ee6c90c491e7b106783bb43b624&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX452ESN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnnqZ6ZwBTQzzB0wQa0QCjtytVJYzv8YsTAgBZ6HaPwAIhAMmPKcSKO1ZCaey4oSW1heKg7t8KwcCjUAfF72ddlaiMKv8DCDYQABoMNjM3NDIzMTgzODA1Igw6ETScKCHSRDKNYyMq3ANacUoN3654Qe%2BqRRlQq5yWY5sSONQ5eLPum1UunHEBAn1%2B4oxWc08IoAg2woPqbAIZq3DmvE2cbN2%2FsY2E218nm7TSvVgt0bw8CGU0I9WJ0BWBVC14lIjmA8bz%2FZnB%2BZ3n4vHsc0MWptEnnaJ%2Fn8yFEFgC5efQV%2BYw%2FbzT8vAO7DjeGRSwSrZz6ifMY68RDjF5RXXrzDVwWby8pN0uef1wtvBq5PPJnVsFZp2Po1ujuUqBnTTHieaZnXJ%2FjLLec7WcwOQZTEjdky4GugSIVAlEikZBuLkuYO4LmtZhcf9PoCJDxTqn2PUC1Gr%2BRkD%2BDjWXiZdBCgLshovBE2tKNE%2FFhPQIsaJcJzWWB6PeolMjMrvYyB7FqkPiC4fEm4WZrc4NXq99Sn%2F3zZsQXAgGEKFZGV8aRiJPNcQ2SNoQE3TAVTQ7biRHS32M8wNCCaURjUl6yKsDCOo1oZMGdKS%2FNtPuA4M2gjTLljGy6L%2F7HsVECkn%2BANIDk4Eyhb6pqSdc3LQEc8j47mdKbiLZlS3rkKNJU6IZiucrhmQdUh73qMvlmZrGDX8Tcb58wnPDVVWbKTSx4EeVEv%2B4y6YDCsrbfTPnLSs1RP2oPDod5JMF6T4Zio%2BSceGv9MaHmtiZkzD4%2Fdy%2BBjqkAZFGZmt91A2lzaZfsF2DXOYsWKtKvE48K6L%2Frqaph%2FMF%2FHW3G8XTAhRW8PONiZiWyzTCdhYOHQ11tjR%2FA9MdDSqFD4V2hQZMYhzzkc1b4UN6gtp9elcEwCO5Z19%2B7w9lwO2xpISaJIFSYyiNEA%2F5BmZ7w3XZwIqgReYQPhfl2wOUqrM9wTLhfVZVRDaHoPveGlX%2BFtUPchcxmafu7yPPXoe7PoNQ&X-Amz-Signature=d37d64f4e7c526e69d0f9324c36031c057edc8d13ab5bfebc8f25875e82a6f48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMPWHJM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjiWR9bot5pPOuZtVwESgFZa9GKGS2aNrfOZCo7%2FXSFAiEA3w6omJ2G6wwpVzA3r9fA44DCON1kDWKDS1tOIHrlPGsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMAhtEZAdR86M8TvPSrcAy4Ew6Nl6dj99DOiwgGunuo5XlxKyAWusTHnt%2F4F1EvyPbPF3Vd5L90FUXVKVPtx6ngtiYPOYjt199ScxTPN4tP72GQPoLomkRXNRkVMAuwHRIkqKipopILsWwQ09QEzgb563lXqc5%2B4%2FIR1HoyccMtZbRM0WpzFcowVqcrqHdpeZiYuDVYn85ydvjYFOjuPQUKB2U%2BM5rRmj7bbS8OmStBei3zgh68NpurAGBH5tRBd%2FMKd6QXpLwKuAQS3z7CstZ73bsTGvGbbVZPXVDp47b6OJnK1AGA%2F%2BLMCv%2FUJKavDFIHQdQHao6INC0hT12Q4lJQGYLRaXt%2Ftd%2FiKwMr9yrH%2BwK6fFYwmHV%2B%2FfiPT%2BCEr02FR7UzE5npRBF5xa66ZYSZYDOC2aGCdZHl0ag%2FfYDoA68oaDDqlVSf5i4e%2Bq6gJJMutg5Xkpc6ffJDZBtS%2BDoKW%2BVMWulWIn2GtVvblkZUWswEeHUC74FZXs3ReV7OMlOnulDRrfzkRd0d3i9TKhxjAE0WRy7Hfs49sCX%2Fdoic4Dh9JSujfF3amguCa3PQfP012zadH%2FO4WzdbvniCTNlBw3MXME37UEuPghx85Yv6crXJJKSVLqzSCx%2F4jz7rguP%2BrSS1St4u7t1uVMPj93L4GOqUB1DCDmi4S5ykNKjnwWQbkghIwHLCeLgPx6lNkOTNCw8HRQV2xb8AYYSNXivzpACOiVTSOPdwYJuSfoNAaXKwrfEKPXIGU2xeJFRJ%2F6tE5GRU%2FQv%2FeU0EfwUAZD3RyWLSl48C8oEI%2FYie4AkTwVtp79Il6XJb25NxEEorFBpRohfdjRh7Zb%2BCxurQzxGBpaPeP7q%2BZ4gjwkFSlNGIUPqWJ7rL346EJ&X-Amz-Signature=19d62a66e3f77b1ea87fc1f924e5cf0993309bb73c58c5101b0fcc6085ef3399&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLV6ZY5E%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bqd2o312s%2FtyPEUu%2FvgOG6suYnNVpI2rV9atTtbLNjgIhAPnX4e6XRWCqhOURJiWGB3nAb6QhbR%2BwtPcqHRgu3oJ2Kv8DCDYQABoMNjM3NDIzMTgzODA1IgzqK5%2BXJCKuQ2LdWPoq3AM7jptgDKugtBA46BxhGvU1efB3Mnc23%2FEEeIuSFvGSWpFii5xKXfQvxklrPAqIugL0Ob7YSkW3EGcw2c29VjYUzwzXerrbXHYQuZJoXjuoIPG86v5VtvOvUYdSA9SNL9V8Vk8k14SW824aJ8qCxHW2wrhiWBMedcMKveoROLj%2FiMFsalkFUX7iHAHTBus5EapevEMa9Vlrjzp2g2yB3g8e0MDBygZlt0htKLltRs3grrfd0OtUjovi3k5KkQZpWfORX9fwZkkErOCyPQ1m3f1RMjT2ZYI3ksK%2F92Eo7c1VLfNFA%2B%2Fb%2BAHd5DAKEC%2BDF1XNrRdxtWljdWXYmcEn9fNj8X%2FNXlcqCJx5SzT8RSxEywphY7PmTaKAdIcKzllDnpwBIzLYhuUAGdjirfoeog13bXnw%2FUnPO7%2BbDjEAB34x4LpKrnyU4dd4VZrDIjSwqqZe2c6Gt3jJTLNCk3CVzndCAmWKqu2Az2%2FKtfenBIUJyikWs7ObcMXqFG17LhIRa9CXfA7KyhDFpLRpSslDj88inwoQeNT%2BtdlNe9JcVzAo%2BH8M%2BWreNgz74tdcyjMis4ZuvVHPXGhCj1NCX27wigUutXh6XCBghpM5wMhvtdgtFsng8Mid6E14JiURuzCV%2Fty%2BBjqkAXD2eTVnuvXS7qArH53cUEew7vwxaklZqvzXBfSYhlzYdlIUDe80RmJ9i4wWJPs%2BjluuFPVM0LupdhAZrX4tvXU4Ms48vmtPcuYQT56U30mvVbV7mHsK7zK8OvYlWckhiQ%2Bq7taODjOwVO3zA%2FEg%2BlN7EygCQtrHuy4QetF8cyDD7bRh7tGD0lHleN16C%2FtffH2BL1nP3396N%2FBjTihbOk6szt4M&X-Amz-Signature=218573a3c7d6de80a933a9450319e2240718cdea4fadaff94995cc333684880c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX452ESN%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T220057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnnqZ6ZwBTQzzB0wQa0QCjtytVJYzv8YsTAgBZ6HaPwAIhAMmPKcSKO1ZCaey4oSW1heKg7t8KwcCjUAfF72ddlaiMKv8DCDYQABoMNjM3NDIzMTgzODA1Igw6ETScKCHSRDKNYyMq3ANacUoN3654Qe%2BqRRlQq5yWY5sSONQ5eLPum1UunHEBAn1%2B4oxWc08IoAg2woPqbAIZq3DmvE2cbN2%2FsY2E218nm7TSvVgt0bw8CGU0I9WJ0BWBVC14lIjmA8bz%2FZnB%2BZ3n4vHsc0MWptEnnaJ%2Fn8yFEFgC5efQV%2BYw%2FbzT8vAO7DjeGRSwSrZz6ifMY68RDjF5RXXrzDVwWby8pN0uef1wtvBq5PPJnVsFZp2Po1ujuUqBnTTHieaZnXJ%2FjLLec7WcwOQZTEjdky4GugSIVAlEikZBuLkuYO4LmtZhcf9PoCJDxTqn2PUC1Gr%2BRkD%2BDjWXiZdBCgLshovBE2tKNE%2FFhPQIsaJcJzWWB6PeolMjMrvYyB7FqkPiC4fEm4WZrc4NXq99Sn%2F3zZsQXAgGEKFZGV8aRiJPNcQ2SNoQE3TAVTQ7biRHS32M8wNCCaURjUl6yKsDCOo1oZMGdKS%2FNtPuA4M2gjTLljGy6L%2F7HsVECkn%2BANIDk4Eyhb6pqSdc3LQEc8j47mdKbiLZlS3rkKNJU6IZiucrhmQdUh73qMvlmZrGDX8Tcb58wnPDVVWbKTSx4EeVEv%2B4y6YDCsrbfTPnLSs1RP2oPDod5JMF6T4Zio%2BSceGv9MaHmtiZkzD4%2Fdy%2BBjqkAZFGZmt91A2lzaZfsF2DXOYsWKtKvE48K6L%2Frqaph%2FMF%2FHW3G8XTAhRW8PONiZiWyzTCdhYOHQ11tjR%2FA9MdDSqFD4V2hQZMYhzzkc1b4UN6gtp9elcEwCO5Z19%2B7w9lwO2xpISaJIFSYyiNEA%2F5BmZ7w3XZwIqgReYQPhfl2wOUqrM9wTLhfVZVRDaHoPveGlX%2BFtUPchcxmafu7yPPXoe7PoNQ&X-Amz-Signature=59da4a65fc08ac73037b9266465c7637577ff5e7c4aa3ec692862fc48b3e7b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
