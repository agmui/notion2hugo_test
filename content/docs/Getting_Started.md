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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5TAH4Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2cX93V5SRzCq4b4UTz6e8VznCQYjtNq93de%2Bu97kBigIgeHS7Nz7u2LQw9%2BIF2oUA%2BHQ5fhysK1uOEDZqCmAoQpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETRo%2B9rNnZQ1cMZ7CrcA6gkgWihGAe1%2Fs0PbIDEsiY%2BNlhidWc05zXykuNR17hgE%2BE%2FEGrp1u9HTjhQlEuK1gRcrmzdSkdGBpz6EuiAwUuQ6vLpqy%2FObKG8IphDJq9dqzFya970G4%2B2B7km5FVwN0rkN%2FCrlgG7bmnFmsnLdGnPN8uo7afpQao%2B%2FIO6DOIbFWNirSfpKD9CmmiANFYMMmca%2BS1FNx1ByqNyPa%2FUD4Qp8vgUQ2qkrUlGAhtqWe3QbH4Dv2Gqos0qe9uJkm%2FoMA0Tj1HBH%2F0a%2BObAkv%2FSfRIYpyDAmPM8qIsxmHBN4emhHj0dkuBDlVrFW2ebvdQfPzQuH%2BW0xrfYqRRNgltEkJ4p%2BGVklhuBwXF%2B1kNGKW3aLrLLLupmeOwhT6AzoZAHljkuwYR1YvvLBkJ0DzeJQEb%2BwyG18rgbo7E99h3EYTnpFDswMDSc0bmwDjHNNOPD64As7dIc6gAshzgPxEOdDIl6VlAED6quqiWxNvcc32BAMTovIv4LS3Q1Adp3EADGlxWDcg9chHb%2BfMhpAtfeiBnCKqCXCPR%2FByCmS6m6mSVocAG65Q6f63i3Ytw4P2gFC1qSaLGXUA3xcbdu4S5%2FYeo96vtlgkDeLCkCLCMI4zLS30%2FEUVKLjRHH5fstMI6r2sQGOqUBP3fQxCcSB4aT50oDhhTZ6bENl%2BZenjGo00hKl%2FFl%2B8M%2FeWLguOclgYAE7%2FDku7aK5EbOqJYcpcAa7BiyiJeZkMKOXlKoaui%2BcY08rtESlkA2ig9sZ8zGd%2Bt9EM3BedRHIhs1HAO4YwtEUhPsCI5ThrQycPgUX%2Fw1u1GxrvFRW9htGbOfE4L%2B4dtFKz230%2BduFYKH7%2Be4JqRPMhuQ8rvjvDlVs0kM&X-Amz-Signature=385eaf93ad2e0f8b1ca1413c950213d404d411558a86a71d07b1e4f255942972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5TAH4Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2cX93V5SRzCq4b4UTz6e8VznCQYjtNq93de%2Bu97kBigIgeHS7Nz7u2LQw9%2BIF2oUA%2BHQ5fhysK1uOEDZqCmAoQpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETRo%2B9rNnZQ1cMZ7CrcA6gkgWihGAe1%2Fs0PbIDEsiY%2BNlhidWc05zXykuNR17hgE%2BE%2FEGrp1u9HTjhQlEuK1gRcrmzdSkdGBpz6EuiAwUuQ6vLpqy%2FObKG8IphDJq9dqzFya970G4%2B2B7km5FVwN0rkN%2FCrlgG7bmnFmsnLdGnPN8uo7afpQao%2B%2FIO6DOIbFWNirSfpKD9CmmiANFYMMmca%2BS1FNx1ByqNyPa%2FUD4Qp8vgUQ2qkrUlGAhtqWe3QbH4Dv2Gqos0qe9uJkm%2FoMA0Tj1HBH%2F0a%2BObAkv%2FSfRIYpyDAmPM8qIsxmHBN4emhHj0dkuBDlVrFW2ebvdQfPzQuH%2BW0xrfYqRRNgltEkJ4p%2BGVklhuBwXF%2B1kNGKW3aLrLLLupmeOwhT6AzoZAHljkuwYR1YvvLBkJ0DzeJQEb%2BwyG18rgbo7E99h3EYTnpFDswMDSc0bmwDjHNNOPD64As7dIc6gAshzgPxEOdDIl6VlAED6quqiWxNvcc32BAMTovIv4LS3Q1Adp3EADGlxWDcg9chHb%2BfMhpAtfeiBnCKqCXCPR%2FByCmS6m6mSVocAG65Q6f63i3Ytw4P2gFC1qSaLGXUA3xcbdu4S5%2FYeo96vtlgkDeLCkCLCMI4zLS30%2FEUVKLjRHH5fstMI6r2sQGOqUBP3fQxCcSB4aT50oDhhTZ6bENl%2BZenjGo00hKl%2FFl%2B8M%2FeWLguOclgYAE7%2FDku7aK5EbOqJYcpcAa7BiyiJeZkMKOXlKoaui%2BcY08rtESlkA2ig9sZ8zGd%2Bt9EM3BedRHIhs1HAO4YwtEUhPsCI5ThrQycPgUX%2Fw1u1GxrvFRW9htGbOfE4L%2B4dtFKz230%2BduFYKH7%2Be4JqRPMhuQ8rvjvDlVs0kM&X-Amz-Signature=d19a489da46d22e99bb8099ba4150c92ab0f25ade678ab06126658bec7d37283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5TAH4Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2cX93V5SRzCq4b4UTz6e8VznCQYjtNq93de%2Bu97kBigIgeHS7Nz7u2LQw9%2BIF2oUA%2BHQ5fhysK1uOEDZqCmAoQpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETRo%2B9rNnZQ1cMZ7CrcA6gkgWihGAe1%2Fs0PbIDEsiY%2BNlhidWc05zXykuNR17hgE%2BE%2FEGrp1u9HTjhQlEuK1gRcrmzdSkdGBpz6EuiAwUuQ6vLpqy%2FObKG8IphDJq9dqzFya970G4%2B2B7km5FVwN0rkN%2FCrlgG7bmnFmsnLdGnPN8uo7afpQao%2B%2FIO6DOIbFWNirSfpKD9CmmiANFYMMmca%2BS1FNx1ByqNyPa%2FUD4Qp8vgUQ2qkrUlGAhtqWe3QbH4Dv2Gqos0qe9uJkm%2FoMA0Tj1HBH%2F0a%2BObAkv%2FSfRIYpyDAmPM8qIsxmHBN4emhHj0dkuBDlVrFW2ebvdQfPzQuH%2BW0xrfYqRRNgltEkJ4p%2BGVklhuBwXF%2B1kNGKW3aLrLLLupmeOwhT6AzoZAHljkuwYR1YvvLBkJ0DzeJQEb%2BwyG18rgbo7E99h3EYTnpFDswMDSc0bmwDjHNNOPD64As7dIc6gAshzgPxEOdDIl6VlAED6quqiWxNvcc32BAMTovIv4LS3Q1Adp3EADGlxWDcg9chHb%2BfMhpAtfeiBnCKqCXCPR%2FByCmS6m6mSVocAG65Q6f63i3Ytw4P2gFC1qSaLGXUA3xcbdu4S5%2FYeo96vtlgkDeLCkCLCMI4zLS30%2FEUVKLjRHH5fstMI6r2sQGOqUBP3fQxCcSB4aT50oDhhTZ6bENl%2BZenjGo00hKl%2FFl%2B8M%2FeWLguOclgYAE7%2FDku7aK5EbOqJYcpcAa7BiyiJeZkMKOXlKoaui%2BcY08rtESlkA2ig9sZ8zGd%2Bt9EM3BedRHIhs1HAO4YwtEUhPsCI5ThrQycPgUX%2Fw1u1GxrvFRW9htGbOfE4L%2B4dtFKz230%2BduFYKH7%2Be4JqRPMhuQ8rvjvDlVs0kM&X-Amz-Signature=d5495f770de8545c1b778bbf95fa4f09cd744a46e7089f845641e7e74b321355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656T2RFTC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBqwHikK5bXZcmYMN7X%2BYrYA8B2Znoi3EGorFYOAmpGcAiEA5%2BjkdxZV85lKnYzbOWuuHE3WlOrbTBg27syuuYos6i0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGj2fJCsDGIs6iBISrcA4AqvZPWgKWqnywPHz%2B8iEQg2lIHYPUxFUp0gFAZ4yw24CX1QjBCHbGZI%2BxZmeKqSLQNRQHqBY7cLpmU1VletzC8mYkjvQq1AoqBzIvfbcCuIfbSyPVg5qf48qp0O8mXhLdAj%2F4DNMEaE%2FHvkhXsaKmbzNLc1W5NVNvc2enGoVw8FRc7lva4Ywys2hFrsbkGHTGe8jyK82S2IbmsbAZwVEtmvbmF4YcBMtc9h0odQmm8YrslwT67D7wDAzORAi6QwgcCF0mPbI4LAnL5ikVuVZ6WiXgkJ1d5Y%2Bw8b2UBRirWtojUfpvX7%2Bjrr0cPCnobkn12%2FD0h7T9sadLkPPeTLOSoyYoJxSmJhOfdic9%2BY2oRxorVI%2BMw4OERyhQV%2FI%2B1HsbhSprjwGHAG72AynHSLSI3kyaGJxC%2BAScXGmNP7FfRPPRBhsx5QVHQSCPV%2FCTfPvXM%2FSfKj2Uw4N09edBWDhA2SsuXialjRHqLwld7P2xeU7%2FNU8v6xq%2FzjyfYPpWyuQYGNRSXI4vUgCIIcZsZweQs4m0qKS1jVj5EQDPeZfCTaJ1RkTf%2BkQ0fORH1ddO710m1xxND8laK3zadVf48m7e%2F6lk%2FZ%2FiVUi7lXISggqkb8VeIwhg89wvNFDk6MKGr2sQGOqUB%2B1Qj96BjOR19nrVkPSasC9rYQeU5i71DPWn8kwlaEsbDKj%2B770s24LEbau8qdyTIQ44oeXFtr%2FemvCllzgy0%2BljxCYyZKsY2%2FuzknvSxlPmStL1Dr5wJsXoGaBhjok%2FH0657M3FCr3ulsustcR%2BDv6GIR6AXmtuvPYTpsGaShoe5nbjZ7Attx7V5xVo9msFo4KBHuQY%2Fp4yBh0Df61MCwNFcOalR&X-Amz-Signature=9435d3da7114960ad8096787f977cb1a32fd6b69535514c4381eef238df84f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUY7MSKX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIFnSZxq6IaekxCh7KUxYMEuTVyScycBjAuUCZKrp%2BZoUAiBuCdztrxEL3viJe3sgZvTdmwwZVHZBr0TcdIk7Q04XaCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3u3Sv4wy%2BA09lZbbKtwDsIyrDeIkpQIKEr3sqAfIIhd8ZXJczuBhGgoMh35XKC9oID8XwytDK%2FCwoWC%2BU5v3LkQNWXCyfzpIdeT89A1i4DBU5jHIQf97oylnBpk%2BMZi82lzztSF4xwXYG6wMd1DkXKjZ9vYEsJkLrrCL1z0GsHOnKb4gK%2F2L8i2IGDzNrAbUSRgJrdXncIiZhim1bZ6SV%2FBbYIVL11zl5p7eSvOURP6fZxdj4HnU2fyvThn%2FPQe2d6xaB8z%2BVe9n6IF1hOc0yAD0MAy2AG1AUPVkcZF29JBXFrhH86hMWsGXRXtFdVgOUvnrevibOn4%2F6r82YymzCMG6mHgrIz6OlmgWUw9rCT7oYHDpjexhUKK%2FnclgUxohPg2pvDkVm4pkSaYfJzDSVpRoRvTX68sFwC%2FNG5wapKQKa%2BQawK0bPW903USBHXaMXEWC%2BqU7v1IpFwhtSubAziNMWZl43%2FOHZNWcQw4RBFyPwVLNQqqZ23PbyLaCltnUhlHmPxK1ucELzsLvXwSEDm8e2BsfoNPkgXfqOEz%2BMBslMgbj6PQFdy5cewYcRO2ygaIYAmUSmFuxrYwsG4EOAa0RYcZyDDX5sc7FQmD2Q6iNPQ6n6%2BVem%2FcQKwbPe1MVlse41wSWQ74Ope0woqvaxAY6pgHOBY46eCvM5LWq9ZixUISlZ38527cstXcuKlOY5Dnc%2Bk4dE0wm3P5ICLJ%2Fw6jFlBZUWIUfXEt8I0FMa%2FO2m%2FU9jRvUU5CbNwN5he%2FFcrVNYxCM8ZxI%2FGtMGq8VCb%2B02M5fKVkOsiXZuVK%2FjWeGvW4eKj4Tfa4GLpVyPpWNwKaFAFg%2FeGQD0u0l9%2FoFlgyjx3Q3kY8LhbBv8t8HbKUaNkHR9W6Ni8Sg&X-Amz-Signature=513fcd44e5ca6d5a7adf93778b7ed823be6256d96e41ce26f6ba35502e8f4849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5TAH4Y%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC2cX93V5SRzCq4b4UTz6e8VznCQYjtNq93de%2Bu97kBigIgeHS7Nz7u2LQw9%2BIF2oUA%2BHQ5fhysK1uOEDZqCmAoQpIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETRo%2B9rNnZQ1cMZ7CrcA6gkgWihGAe1%2Fs0PbIDEsiY%2BNlhidWc05zXykuNR17hgE%2BE%2FEGrp1u9HTjhQlEuK1gRcrmzdSkdGBpz6EuiAwUuQ6vLpqy%2FObKG8IphDJq9dqzFya970G4%2B2B7km5FVwN0rkN%2FCrlgG7bmnFmsnLdGnPN8uo7afpQao%2B%2FIO6DOIbFWNirSfpKD9CmmiANFYMMmca%2BS1FNx1ByqNyPa%2FUD4Qp8vgUQ2qkrUlGAhtqWe3QbH4Dv2Gqos0qe9uJkm%2FoMA0Tj1HBH%2F0a%2BObAkv%2FSfRIYpyDAmPM8qIsxmHBN4emhHj0dkuBDlVrFW2ebvdQfPzQuH%2BW0xrfYqRRNgltEkJ4p%2BGVklhuBwXF%2B1kNGKW3aLrLLLupmeOwhT6AzoZAHljkuwYR1YvvLBkJ0DzeJQEb%2BwyG18rgbo7E99h3EYTnpFDswMDSc0bmwDjHNNOPD64As7dIc6gAshzgPxEOdDIl6VlAED6quqiWxNvcc32BAMTovIv4LS3Q1Adp3EADGlxWDcg9chHb%2BfMhpAtfeiBnCKqCXCPR%2FByCmS6m6mSVocAG65Q6f63i3Ytw4P2gFC1qSaLGXUA3xcbdu4S5%2FYeo96vtlgkDeLCkCLCMI4zLS30%2FEUVKLjRHH5fstMI6r2sQGOqUBP3fQxCcSB4aT50oDhhTZ6bENl%2BZenjGo00hKl%2FFl%2B8M%2FeWLguOclgYAE7%2FDku7aK5EbOqJYcpcAa7BiyiJeZkMKOXlKoaui%2BcY08rtESlkA2ig9sZ8zGd%2Bt9EM3BedRHIhs1HAO4YwtEUhPsCI5ThrQycPgUX%2Fw1u1GxrvFRW9htGbOfE4L%2B4dtFKz230%2BduFYKH7%2Be4JqRPMhuQ8rvjvDlVs0kM&X-Amz-Signature=34a65b69e8571e6eb79ef93c26e0210812a43f32b165468dac95d89bf2bf2974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
