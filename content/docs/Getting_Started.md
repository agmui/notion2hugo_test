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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGL4BDI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF0ot0bV7BmcjOAz34lA6cJzbkaoWXJd%2FLEwTWMTsrgBAiAApAmYpqQLhW3HjKNJJ7jl%2BxntKPjMgfBBiB7XgMDd%2Fir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPygQ007krkOvgHD9KtwDXJlG3Titki2E08x%2BjncHGZtlyP9An5BCQxDW%2BGbGyHxHC4tyOnUzFMjUlYeMjuJhaqjwEmayTkmKvSSEzlcd3zIg3nRDsqf%2Bs%2FSTXo0UVfZVFEOU845dWExTdaeFlSDQF79LZnc3V0Dn3NwV2zaZjTjQGRuALpzXno77OQlcSAhiIAvXU8d40srb%2FKOZ8%2B6d%2FhGkNmern%2BZ6ls%2FU6eYhp5XSfDKYQnVqTvPwY6UUnfFOyS65TT5FP9uzQSPnH%2Fcu7cRf%2BpgGkw6vJcxBjVzWoDLe54aPmr1tpDKLMfQCcvynU79q8aUE2Ej7DvqTY31PFFOzHa5j7DlNfSeAHrTxvLBDUOoD9Bzah03q6dSxaiEBcVs8iNjavEuQL7tYe7cKdRO9p2Lh%2F5zDapVkG1JkNC0gE3FBVoaYH5Yt75tF1NOzG5u7iEX38l4zXiATr4nBWzZ2Qga6rpIBZXV0J5s49DvlKncRKLZvSyEEGDKvXGpe4xpZO%2B4h3Hkdyogta8OAEMlVC4fI9yhTa4vIy52hRnLeTZVIkQWhSdDUiH8wjOO%2FBR2rA1FClZraSowr9SxHq2JWJMlPMe9%2B02jJD9KocAa6GT0t1EpGUpdvxzlgccXkLlECqCB6GA1KICgwm8PtwgY6pgHUpd04WuYTjQ0SXeYYwmU6bs7%2F8XzJ0P79%2F%2FFZk1R%2FNjGOSNiFrXxpKq9mUj8%2FkvPVWzyjmDbMIgZbEfCR01OGrFN6bjpO8v9sNBSK392lA9l6XHBBGvQmdeXD8iL4Nx0tbmRe15b%2B%2BU%2FI4bH5AGNn2O27VAn90KxNRb6Qqrd%2FoJeBnvFgRngpq6Y7XQTPusMs8nh%2BLWKE5PG9dSdykxDxD1qKzcE3&X-Amz-Signature=a4a6665114d3a72599c170efdebc4dcaaacefbb033f75d06b0cc824e55a53aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGL4BDI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF0ot0bV7BmcjOAz34lA6cJzbkaoWXJd%2FLEwTWMTsrgBAiAApAmYpqQLhW3HjKNJJ7jl%2BxntKPjMgfBBiB7XgMDd%2Fir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPygQ007krkOvgHD9KtwDXJlG3Titki2E08x%2BjncHGZtlyP9An5BCQxDW%2BGbGyHxHC4tyOnUzFMjUlYeMjuJhaqjwEmayTkmKvSSEzlcd3zIg3nRDsqf%2Bs%2FSTXo0UVfZVFEOU845dWExTdaeFlSDQF79LZnc3V0Dn3NwV2zaZjTjQGRuALpzXno77OQlcSAhiIAvXU8d40srb%2FKOZ8%2B6d%2FhGkNmern%2BZ6ls%2FU6eYhp5XSfDKYQnVqTvPwY6UUnfFOyS65TT5FP9uzQSPnH%2Fcu7cRf%2BpgGkw6vJcxBjVzWoDLe54aPmr1tpDKLMfQCcvynU79q8aUE2Ej7DvqTY31PFFOzHa5j7DlNfSeAHrTxvLBDUOoD9Bzah03q6dSxaiEBcVs8iNjavEuQL7tYe7cKdRO9p2Lh%2F5zDapVkG1JkNC0gE3FBVoaYH5Yt75tF1NOzG5u7iEX38l4zXiATr4nBWzZ2Qga6rpIBZXV0J5s49DvlKncRKLZvSyEEGDKvXGpe4xpZO%2B4h3Hkdyogta8OAEMlVC4fI9yhTa4vIy52hRnLeTZVIkQWhSdDUiH8wjOO%2FBR2rA1FClZraSowr9SxHq2JWJMlPMe9%2B02jJD9KocAa6GT0t1EpGUpdvxzlgccXkLlECqCB6GA1KICgwm8PtwgY6pgHUpd04WuYTjQ0SXeYYwmU6bs7%2F8XzJ0P79%2F%2FFZk1R%2FNjGOSNiFrXxpKq9mUj8%2FkvPVWzyjmDbMIgZbEfCR01OGrFN6bjpO8v9sNBSK392lA9l6XHBBGvQmdeXD8iL4Nx0tbmRe15b%2B%2BU%2FI4bH5AGNn2O27VAn90KxNRb6Qqrd%2FoJeBnvFgRngpq6Y7XQTPusMs8nh%2BLWKE5PG9dSdykxDxD1qKzcE3&X-Amz-Signature=bd76fdd09c042970f3137175a763a25380c7340b4b81afdff2b4814524966455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGL4BDI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF0ot0bV7BmcjOAz34lA6cJzbkaoWXJd%2FLEwTWMTsrgBAiAApAmYpqQLhW3HjKNJJ7jl%2BxntKPjMgfBBiB7XgMDd%2Fir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPygQ007krkOvgHD9KtwDXJlG3Titki2E08x%2BjncHGZtlyP9An5BCQxDW%2BGbGyHxHC4tyOnUzFMjUlYeMjuJhaqjwEmayTkmKvSSEzlcd3zIg3nRDsqf%2Bs%2FSTXo0UVfZVFEOU845dWExTdaeFlSDQF79LZnc3V0Dn3NwV2zaZjTjQGRuALpzXno77OQlcSAhiIAvXU8d40srb%2FKOZ8%2B6d%2FhGkNmern%2BZ6ls%2FU6eYhp5XSfDKYQnVqTvPwY6UUnfFOyS65TT5FP9uzQSPnH%2Fcu7cRf%2BpgGkw6vJcxBjVzWoDLe54aPmr1tpDKLMfQCcvynU79q8aUE2Ej7DvqTY31PFFOzHa5j7DlNfSeAHrTxvLBDUOoD9Bzah03q6dSxaiEBcVs8iNjavEuQL7tYe7cKdRO9p2Lh%2F5zDapVkG1JkNC0gE3FBVoaYH5Yt75tF1NOzG5u7iEX38l4zXiATr4nBWzZ2Qga6rpIBZXV0J5s49DvlKncRKLZvSyEEGDKvXGpe4xpZO%2B4h3Hkdyogta8OAEMlVC4fI9yhTa4vIy52hRnLeTZVIkQWhSdDUiH8wjOO%2FBR2rA1FClZraSowr9SxHq2JWJMlPMe9%2B02jJD9KocAa6GT0t1EpGUpdvxzlgccXkLlECqCB6GA1KICgwm8PtwgY6pgHUpd04WuYTjQ0SXeYYwmU6bs7%2F8XzJ0P79%2F%2FFZk1R%2FNjGOSNiFrXxpKq9mUj8%2FkvPVWzyjmDbMIgZbEfCR01OGrFN6bjpO8v9sNBSK392lA9l6XHBBGvQmdeXD8iL4Nx0tbmRe15b%2B%2BU%2FI4bH5AGNn2O27VAn90KxNRb6Qqrd%2FoJeBnvFgRngpq6Y7XQTPusMs8nh%2BLWKE5PG9dSdykxDxD1qKzcE3&X-Amz-Signature=98d81256d52a458593f99ee38eff913981c418f60b36b9522b8a413aa394f7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N46RYV7%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIH%2FCLmLRWxgQmQEicY%2F7mWPQWsaDKa0RxIeADW7ZmAy6AiBus4%2F8gWTTax6Zp%2FAPsQyXhrpHkPZK9UfV2qNbcOPCayr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMB1Y6lYTzYYzEN2ltKtwD4MwHPttssEPi97YLiP5br4nmxgrNL5%2BC%2FkL4lrWeuV4XJHg4TGfnsHaNTCfkg8i5k%2BeDtVOCPXoTL6TtSIjCES77khz7OEv5JA7%2FnsSZdB2ilWpGbKeor%2FgZTq2WNiAaQw9Q91%2F5AwmNXjxS3PxI3RQuo5O%2B9lzq9f7uTOBrMa3Nb06bJxn7NGaIljYJBko%2F2V8xa2InSdklq7kqP489ozT07T%2BWxIAssaZ3xrixOLy5dYK5joH5wWzqu6My8Yus%2FkXFJV4BMeGcASr2Eu5%2FvpBanzu11EGkzN05IXqJvuD%2F%2FWr63X3JVpzzK%2BeXGOI%2F8DX4p5x0nTN5EZxWD5rJz628hlmP7T55Ef3StsYNEqbOh6Sc3rBdn0lZ4b%2BmVqfAUGMB8NcLOfBVXsUH1PybUwY9JpW6zIhkkQjMCvmb3HvP0Y6qF1OHfYppUv50Ftm1AsK8J5NKzVOvzSu5nqCHZomWoKYhl1Yb%2FrcMDbJq%2BkKUbfeYJyzCZu7uuppOammbGMdPr%2FQvn03SOd%2BGJQYKCqVflwqo0C9KZHPfVYoms7DtG0KSdR4FWSt1etJZPrHrlg%2BFiXmaQ1F0YJBqTjHL7j0%2FUHu1cmlkLlR5CMGU4vRls91LHUB8c8UwO20wwM%2FtwgY6pgEHhg5iCg7KS3PcZ9sy%2B%2FmuGRZReBEavzDx%2FkXN2je%2BWgI1pdMUsCXKZ0jSqB96BGTL3a%2BvDmE3hye68G33icnUiJ4RFlA%2BHtjTBnTaw6R8qfoPO55GO42YZOlpQXhtqoI%2B9qRcrruxpjNhiY1M36HiZQyCOEljW9zgnO0ucYVfkJlp3bWMC%2FTLXOieMnJA79eQfCKne8gl92cjhncvOWCo087yZLRM&X-Amz-Signature=9ac8ed87341f856cc4ec0e59dce807b6a078986dcc834610abff3e56c8ca9d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXS3CYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHFLpTintaQxAg8N3W2jAFYQaW%2B%2FTiH05yYC35Y92C8bAiEA2peCa%2FkokeucVLQllWmvXV9Yjc0iM4%2BEVP0NDQlSeScq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDHJo611NyEhLyOZFHyrcA5beIqqKATnbXehquBtq6LvJ41Tv%2Fs2y61Xx%2BBg1Zj%2Bt9jvoOwJQny0iIL4SyJ5BxpTWR2yloMc5BB3HOX2zvTKGi9w1%2FVVsH6R4ZGgAZVOFTtb9N%2FYM4Sa4pUueUYJm5XCYuG3ebf1ucVlx5ok1lJGj0TrV%2F0B6sL0B9Cu0J6864B36Ak1cMQR6PvztSL2rvbLinRp9cYnnBl5%2Bkux0fv4AD5qom9Ff2WWIQms0xWWzVDZ4UP2U6LPnO4xuLrzXh4%2FTWEtLow36CxDwPYcgNbLSpv76bzh4Y2MobUC3bsE1ky0O52gxPoi5K0SWg34iV%2B2PBqWZZYJQZ6f54iW7BLG7n6emH8G3ZVWbuHvLt%2BqS8U2cuDJn3tS2kn2ZYxHuK%2BaXapvzcSft9NrjmsswGK4%2BGXIEH%2FY1Wyy1Fkc1pL5zhTtMvAsuno2P64w7fxswMQt6Awh3PMX18P3j%2F3DbYgwbGzziRf9CUFDsO%2Bg3iV%2BMHMAzcpXI2WSoDuLQjWgKyBYl6GXuvYNo2FDGck%2Feu%2BFzf%2Bg8LI%2BmrIQMvugHrJx05ipvFSMHSCnYzDM8mOSuqx%2BLEsBEj%2BZ6RDj4P92ZfA%2Faqlr7dM%2FriOT%2Fe01xiTfXYwWp1zHzP7%2BsBJGHMNnC7cIGOqUBU8ufcfNDq8z6s7%2BDFDfBHjPcNK%2FS6yNmVQljbw%2FCBEH8W8mJ17isQ1tiJXfpe5lPyXyaAZjQ8Yr18Dzy3VDG7bz13Y%2Fhbbp3LhC5hzIfBbq7dVN4X9hmjmaP%2BocNzlFeFFFc6mqd22NWADwwNH%2FhwLw8hv1hoqWQnqZoS5Xz%2FW3nUWuZvC5NJW2SYB8mfbeawS95GG5WLWSeNm5JPOoV6eSIaAPx&X-Amz-Signature=e74b3e86a9e01abc406f00a1c93ba56eee5ed47527514904689c33597ae05fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJGL4BDI%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIF0ot0bV7BmcjOAz34lA6cJzbkaoWXJd%2FLEwTWMTsrgBAiAApAmYpqQLhW3HjKNJJ7jl%2BxntKPjMgfBBiB7XgMDd%2Fir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMPygQ007krkOvgHD9KtwDXJlG3Titki2E08x%2BjncHGZtlyP9An5BCQxDW%2BGbGyHxHC4tyOnUzFMjUlYeMjuJhaqjwEmayTkmKvSSEzlcd3zIg3nRDsqf%2Bs%2FSTXo0UVfZVFEOU845dWExTdaeFlSDQF79LZnc3V0Dn3NwV2zaZjTjQGRuALpzXno77OQlcSAhiIAvXU8d40srb%2FKOZ8%2B6d%2FhGkNmern%2BZ6ls%2FU6eYhp5XSfDKYQnVqTvPwY6UUnfFOyS65TT5FP9uzQSPnH%2Fcu7cRf%2BpgGkw6vJcxBjVzWoDLe54aPmr1tpDKLMfQCcvynU79q8aUE2Ej7DvqTY31PFFOzHa5j7DlNfSeAHrTxvLBDUOoD9Bzah03q6dSxaiEBcVs8iNjavEuQL7tYe7cKdRO9p2Lh%2F5zDapVkG1JkNC0gE3FBVoaYH5Yt75tF1NOzG5u7iEX38l4zXiATr4nBWzZ2Qga6rpIBZXV0J5s49DvlKncRKLZvSyEEGDKvXGpe4xpZO%2B4h3Hkdyogta8OAEMlVC4fI9yhTa4vIy52hRnLeTZVIkQWhSdDUiH8wjOO%2FBR2rA1FClZraSowr9SxHq2JWJMlPMe9%2B02jJD9KocAa6GT0t1EpGUpdvxzlgccXkLlECqCB6GA1KICgwm8PtwgY6pgHUpd04WuYTjQ0SXeYYwmU6bs7%2F8XzJ0P79%2F%2FFZk1R%2FNjGOSNiFrXxpKq9mUj8%2FkvPVWzyjmDbMIgZbEfCR01OGrFN6bjpO8v9sNBSK392lA9l6XHBBGvQmdeXD8iL4Nx0tbmRe15b%2B%2BU%2FI4bH5AGNn2O27VAn90KxNRb6Qqrd%2FoJeBnvFgRngpq6Y7XQTPusMs8nh%2BLWKE5PG9dSdykxDxD1qKzcE3&X-Amz-Signature=8bf20e5d3f449007f885e93cf84c9967e708456af595ce7743ae4a003a513e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
