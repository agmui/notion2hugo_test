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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JYOMAT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB5h4Po%2FWacrUpoDEzpr968Goi3IA6oEc5hRcoGEKbD1AiBU%2FLIM04QJtlVbmtsXKMPj8TR3CXQ9PKLBdbL5sEGSYiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCgEJMRbjZWXKM5KKtwDCI4sQ%2FbE6qRE6m%2FbCaxkT3a9sLMd4u1WEpGRYYIr988CyYS%2BDPd35dm2WSDzpofQN6ehpawU91lEAoU5OV6sw2D1%2BDZyODQnF0wx049%2BeJ7GOq%2FQ%2F%2FjGIEGC5Pq3R9rd79a4RvORHycr3N5Qz2%2BpPo%2BBrhAj8vjAQqosml4ot%2Bio7trGU7qXS%2FVG%2FzfPAjZomrwfn0gi4OprcoqkZf9%2F0A05KRTqvMGRs0E1M6WDKjww%2BUNDnj8ImHuxq%2Fxe%2FN7UmVYjz6tF8cN0Jij897RCHry8Nm7Orx08eHInwG%2Ffd8SrHbqVNfXt5BF8XBLWqQnn56O9gRV%2FU9Scbi7dZ9tFHyCGTOs8xUtSNFLQxGvxs7XCZ2uuLffS53HJjeEk%2B3CQZcrZXrnqrbgqJG96OOSCV84SLknFe5AziipVnT7x8%2BSZPQIAgt6trnANgDX9Vnnr0q%2FFdE%2F0NB9MlLI0BAY4d0Hu1mrkMyz129wMItFE9jtOuCsnVF0eDNYVArib9RzFfHezXOxmOl3sR%2BaSyURHJqEvTDGVUuA%2B809z3s%2BR0MqIHld4SZpLdKd39%2B1spn4alDJIpQrjBDKWXbwbJcHhBv10ZVI2aVLSDybv6cag3dMWbswN2cAo3jRvZOIwgpSpwgY6pgE8aHVZnlvWNtDH6tIPpfXkX9ScD8%2Fy%2BiFEGsFHCDZaz5%2BZiNclv6oC%2BOYFEmiHKYZtEoQXPz5YmBUc%2F4164mckbOgHovbUNjCVSwswbCdBIxuFDL1D8VUoZjNyFaadxSvU7vLZM4CM%2Fw8cXW6Kc0Y68afQHbj9TZT5wWoexu1DPhng6IgnzDcqoOEV4vHUeocLHdTk%2BOi9rXJwa%2BjqAlOdq7VZp%2FQD&X-Amz-Signature=3e74ba6a1c563f680d7261f007ceaa3cefe2cf681cabd56b9dba6cddb73ca452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JYOMAT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB5h4Po%2FWacrUpoDEzpr968Goi3IA6oEc5hRcoGEKbD1AiBU%2FLIM04QJtlVbmtsXKMPj8TR3CXQ9PKLBdbL5sEGSYiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCgEJMRbjZWXKM5KKtwDCI4sQ%2FbE6qRE6m%2FbCaxkT3a9sLMd4u1WEpGRYYIr988CyYS%2BDPd35dm2WSDzpofQN6ehpawU91lEAoU5OV6sw2D1%2BDZyODQnF0wx049%2BeJ7GOq%2FQ%2F%2FjGIEGC5Pq3R9rd79a4RvORHycr3N5Qz2%2BpPo%2BBrhAj8vjAQqosml4ot%2Bio7trGU7qXS%2FVG%2FzfPAjZomrwfn0gi4OprcoqkZf9%2F0A05KRTqvMGRs0E1M6WDKjww%2BUNDnj8ImHuxq%2Fxe%2FN7UmVYjz6tF8cN0Jij897RCHry8Nm7Orx08eHInwG%2Ffd8SrHbqVNfXt5BF8XBLWqQnn56O9gRV%2FU9Scbi7dZ9tFHyCGTOs8xUtSNFLQxGvxs7XCZ2uuLffS53HJjeEk%2B3CQZcrZXrnqrbgqJG96OOSCV84SLknFe5AziipVnT7x8%2BSZPQIAgt6trnANgDX9Vnnr0q%2FFdE%2F0NB9MlLI0BAY4d0Hu1mrkMyz129wMItFE9jtOuCsnVF0eDNYVArib9RzFfHezXOxmOl3sR%2BaSyURHJqEvTDGVUuA%2B809z3s%2BR0MqIHld4SZpLdKd39%2B1spn4alDJIpQrjBDKWXbwbJcHhBv10ZVI2aVLSDybv6cag3dMWbswN2cAo3jRvZOIwgpSpwgY6pgE8aHVZnlvWNtDH6tIPpfXkX9ScD8%2Fy%2BiFEGsFHCDZaz5%2BZiNclv6oC%2BOYFEmiHKYZtEoQXPz5YmBUc%2F4164mckbOgHovbUNjCVSwswbCdBIxuFDL1D8VUoZjNyFaadxSvU7vLZM4CM%2Fw8cXW6Kc0Y68afQHbj9TZT5wWoexu1DPhng6IgnzDcqoOEV4vHUeocLHdTk%2BOi9rXJwa%2BjqAlOdq7VZp%2FQD&X-Amz-Signature=f0d02a7586ea7fc89126f76b0439f7af00f155d67efdfa787fd61edecfade525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JYOMAT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB5h4Po%2FWacrUpoDEzpr968Goi3IA6oEc5hRcoGEKbD1AiBU%2FLIM04QJtlVbmtsXKMPj8TR3CXQ9PKLBdbL5sEGSYiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCgEJMRbjZWXKM5KKtwDCI4sQ%2FbE6qRE6m%2FbCaxkT3a9sLMd4u1WEpGRYYIr988CyYS%2BDPd35dm2WSDzpofQN6ehpawU91lEAoU5OV6sw2D1%2BDZyODQnF0wx049%2BeJ7GOq%2FQ%2F%2FjGIEGC5Pq3R9rd79a4RvORHycr3N5Qz2%2BpPo%2BBrhAj8vjAQqosml4ot%2Bio7trGU7qXS%2FVG%2FzfPAjZomrwfn0gi4OprcoqkZf9%2F0A05KRTqvMGRs0E1M6WDKjww%2BUNDnj8ImHuxq%2Fxe%2FN7UmVYjz6tF8cN0Jij897RCHry8Nm7Orx08eHInwG%2Ffd8SrHbqVNfXt5BF8XBLWqQnn56O9gRV%2FU9Scbi7dZ9tFHyCGTOs8xUtSNFLQxGvxs7XCZ2uuLffS53HJjeEk%2B3CQZcrZXrnqrbgqJG96OOSCV84SLknFe5AziipVnT7x8%2BSZPQIAgt6trnANgDX9Vnnr0q%2FFdE%2F0NB9MlLI0BAY4d0Hu1mrkMyz129wMItFE9jtOuCsnVF0eDNYVArib9RzFfHezXOxmOl3sR%2BaSyURHJqEvTDGVUuA%2B809z3s%2BR0MqIHld4SZpLdKd39%2B1spn4alDJIpQrjBDKWXbwbJcHhBv10ZVI2aVLSDybv6cag3dMWbswN2cAo3jRvZOIwgpSpwgY6pgE8aHVZnlvWNtDH6tIPpfXkX9ScD8%2Fy%2BiFEGsFHCDZaz5%2BZiNclv6oC%2BOYFEmiHKYZtEoQXPz5YmBUc%2F4164mckbOgHovbUNjCVSwswbCdBIxuFDL1D8VUoZjNyFaadxSvU7vLZM4CM%2Fw8cXW6Kc0Y68afQHbj9TZT5wWoexu1DPhng6IgnzDcqoOEV4vHUeocLHdTk%2BOi9rXJwa%2BjqAlOdq7VZp%2FQD&X-Amz-Signature=08b83237a004c73f4f48156e2473b07a18f75f8073efac6fa12ec52f3dfe0269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVR2BUQ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCysbkiSxelLD9XOCNrec6VMEjrz3rz%2FLoecRsuDWjj3AIgWu%2BWdGwEfvjDOtiUFvjLNGIb%2BhSEh9ErxAknEukayfcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdz2o2vAD8xYqQioSrcAyFetHDdnSfHMxswYaMJ%2BBoFzsijzFSXRQFUrXkjFyHy6gyfoU2effyefhRPqrf8TAo%2FbVPHpP4xgo10Z2pr8rJ74L9sVkn1b1uGyTJAp5AY6PJYe8D2kNIEGqBalgG%2B3nMFs%2BLSb%2Fw8KoYYotZ5edg03r2gvs%2FcO93yUNt9HvYBS26hQ%2BEjwpFgjo07Xq5ci%2FjnTm2sIGOPhbFEVay35qVa8PLXw8r0u5NTDog3xB8pBddBZc7FawIGktscaaOCt5T%2FxtQ85dFrt7H2c86zDmV21J7j3PG9%2FwCUk%2BLbmA%2Bk4djTQd%2Bj4dzmaOKeDilFGoqRU8Npw%2F5NThpbPv0ma6qQ7I9bVqt6eX4ghbdjbSG6DOvSgmeoSQe8gwMft28cgBFYmrAKdewwN871jbKCZEYm0%2BBjwtQJLxNzSECsbVtQo3NVPmbsTRmfDLyBX5KLZtftYvtE217hHezE4CpeyIyXQjHh7HYp4odqea1v4KMmGwmDNHMjUDoaIb2Mq%2FLiTthICCuDim7JD5RjbeVmhtKU8IkQPw1YvSP84SFLHRxeFe2e3%2FAEUjFeYV4PiuUbVt5LVnA%2FBElLCexjUg93Jhhp55Hn85Da5OKfR0D%2F%2B3MHeQKLewGe7qo24Lz1MIuUqcIGOqUBOmAL5xBc7kLj5jBRPZ%2BBJcYKW3hYtXfrgYTyJBDkfdBV2vQXdmlMuMAK%2BJF62c61an%2FVVoEwvEMLny1U2HFSu%2BRmzohl68WVwUbHjtFBgs7Q9LqIldqGPaE8ly%2FsIAIFneBB%2By5QN21yYRE3tYJXQ%2BPipKZqZ5KPLjxQD6KQxpvei8nJwiAWAbo2XzbtctFx%2FImuKd6EMGWBQHjIPCFVnu%2FhchVr&X-Amz-Signature=896352338db7e0d5fee9953428491c4ff6d7a56ca5067d98d730594ff372c2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZMEZGC%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIC4rr369zqOGL08%2BE5AzSdfeFYm8lBaqRHG3A3lkmkoMAiBY9iV4yHetjwaknKV5uqjhKPyDBHV%2BHVap7VdGXqdT3SqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbPwgfcm6iqmviiQEKtwDGJnHs2wArDdwXhnq%2FxLl3Pa8mRKt9if8TXgbtSHIswukL1%2BQC9Vlj63jU4EQmmMxJKmR8hZPNv2lmwdzlCYMtAt3drps4T2f%2BgNkcj4JFTy%2BsRqyaB81rP0gPEm%2BAJYW5cwmA6qbXpVNlfFLv5juhPpMVyeFZf1IDqlk7MeE334GHHy7yWr%2BdpQrU6GKTqPNk%2FFSoH2sYIpEoLYlqP%2FB%2Frk9jQfybB0Agke9ZOsfhFmva2%2Bpt8TLXzlZMEgm85UWW%2BUx8WpAkryZcz3TIYMPStqIe8uZ23ERearXyOrCYIk4BIBpdsNj9p4avFgrtJpRED8l5g8oVdeXenzFl%2BRbiWnHXjceq6LUx8D4%2FFghB93st485WZz3cdLd%2BTCBIm1KWe%2F6UquwllaD5LaSua8qXhMv%2BP6ozfvbHFebUhJOTrXVdMG%2BxQVse5a1XdeqkJPTlh6ZXs%2BtIqhV4QJOhN%2FOptejYIwBXaC0qIjymYb02pnVZZx7b03dBwUkJyHmaUCmVotdT9OOyN9hgI21bJfgKuRpT1PFfkWcprfIBfL0fE7DR1MZVD4phmPMjQ0Sq9PgNcFUg5qyllbCvfEkfWt2oQ91t9afaR6aSpFSQPpbvvaPhiceVh1d9rVU2xswzZOpwgY6pgHxuJBfLngyeqwoDZvf8zq2xbG9NZjenneG6YqyXIsOzjmWFM2KVDbj%2BZHEz6f0Zx6n9mbKKYg2laOHsnzxHLUTCg5i7GHLcZBjjZaZVV7UHxKw1tF61vgnud%2Baw1DUmqU8or30zCUM0diCuhhiH3OrBryqRGXwYDRvjRl3yQ8RdCbPfPd2h9YjJSkkAgqmeOSUpNX3bUNouBlOsfRO5zMrv3o3JjiS&X-Amz-Signature=a02b8e81ae8c9c341d83f6ee7513a7c0dfb2a5b2243c6e973b9607c38e3a3221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JYOMAT%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T033947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIB5h4Po%2FWacrUpoDEzpr968Goi3IA6oEc5hRcoGEKbD1AiBU%2FLIM04QJtlVbmtsXKMPj8TR3CXQ9PKLBdbL5sEGSYiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCgEJMRbjZWXKM5KKtwDCI4sQ%2FbE6qRE6m%2FbCaxkT3a9sLMd4u1WEpGRYYIr988CyYS%2BDPd35dm2WSDzpofQN6ehpawU91lEAoU5OV6sw2D1%2BDZyODQnF0wx049%2BeJ7GOq%2FQ%2F%2FjGIEGC5Pq3R9rd79a4RvORHycr3N5Qz2%2BpPo%2BBrhAj8vjAQqosml4ot%2Bio7trGU7qXS%2FVG%2FzfPAjZomrwfn0gi4OprcoqkZf9%2F0A05KRTqvMGRs0E1M6WDKjww%2BUNDnj8ImHuxq%2Fxe%2FN7UmVYjz6tF8cN0Jij897RCHry8Nm7Orx08eHInwG%2Ffd8SrHbqVNfXt5BF8XBLWqQnn56O9gRV%2FU9Scbi7dZ9tFHyCGTOs8xUtSNFLQxGvxs7XCZ2uuLffS53HJjeEk%2B3CQZcrZXrnqrbgqJG96OOSCV84SLknFe5AziipVnT7x8%2BSZPQIAgt6trnANgDX9Vnnr0q%2FFdE%2F0NB9MlLI0BAY4d0Hu1mrkMyz129wMItFE9jtOuCsnVF0eDNYVArib9RzFfHezXOxmOl3sR%2BaSyURHJqEvTDGVUuA%2B809z3s%2BR0MqIHld4SZpLdKd39%2B1spn4alDJIpQrjBDKWXbwbJcHhBv10ZVI2aVLSDybv6cag3dMWbswN2cAo3jRvZOIwgpSpwgY6pgE8aHVZnlvWNtDH6tIPpfXkX9ScD8%2Fy%2BiFEGsFHCDZaz5%2BZiNclv6oC%2BOYFEmiHKYZtEoQXPz5YmBUc%2F4164mckbOgHovbUNjCVSwswbCdBIxuFDL1D8VUoZjNyFaadxSvU7vLZM4CM%2Fw8cXW6Kc0Y68afQHbj9TZT5wWoexu1DPhng6IgnzDcqoOEV4vHUeocLHdTk%2BOi9rXJwa%2BjqAlOdq7VZp%2FQD&X-Amz-Signature=ad06f9761dae4531bf6bc109fe1b6dcbfd602ee15a6ffe25cfe964d594927c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
