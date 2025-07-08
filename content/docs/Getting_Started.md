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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXXG4JQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo6sOnQrXieBDMUZzIBsq71TXSoo1GvO2LjMT8xEkAFAiAOLZ7hTz0qJpCiVvZduq%2F8jWf%2FIxm8mkn58cbHoCq6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB39wSKKor6u1pKp1KtwD9XYhFDI187IyenyH19LeSn9Q2CtSvqR1d9x83KDIzq2ao30rvpEWtvZTdiVZoI1nvf0787A0jL4r5ujRdC4lM%2F8V%2FF%2Fvx52BUnbSKud%2BTXN3cUArEJiGbzywnPuUtPMYOS2%2Bn7iC2fRhmVHYM4CBN5KAdCqyWSi3YLuw6G4nUMXqtYtyrAYrgzaLO50SJzjNkB01F35KG63Rsjsgm%2FWcdpC50JOmUr2TEAzznpwK5f%2FZ7Pb%2FsWISo1ivnbqst6%2Bpc%2FuQlx9WVsTXJknzXy1VU0rH6G1EFFzLyEAqGUhQysdjoniVHIhGWMUKv31Nm5BWFgwP2x4%2F%2Fc91HrkVB9ZvBCszRKPbvvZYN6QmvAglS2IIX0FlH5gtFTVi3TlOPtlQU18dATsUTXvOGuArQWT2sdRh9DihTkUt9BlEYxPGtlyoMb2%2Bj9BfJZ2jXK0xWbnbuHClTMTzpxrE5eX3QSlwKHUdHNIGXjSI9OnedBurhG18Vi2scEHIuoT3B%2BmJ0OU6NPQFbzkIYFu2rnUk0CzGdeY3l7Qy3zGlVLaUlkmm8yniDkbWNoh8G8KoE6kJZWukXydRvPCh08FCEuZCY4G9%2B1unEq%2BAo0gsGqOGZFD%2BBgBQ0azLyslFdUXoALIwpIS2wwY6pgEuQRMv%2Bo6yCbhPcxmgWki%2BqJqs5eUc9UDHbQkShTqIn4i0RqJXbhYaAqsvbhOJB1DP4wH7hz92jQ%2Bv52Rep5%2BPFT0h45pbfXxXCKxVfVssreEDY12mFAxMEVn8Bgm3bB7HobU2R%2Bl8vBM2jlS7b%2BU3GBggbMRkGCGa6P%2FKHVil7klH%2FiLNTEu7OnruHsU1CkXH4mjVTRz%2Baj8tXvZ2iAw27m1zesMo&X-Amz-Signature=143e19d785ba32626f1139bf32c138a7d1c02df60372b19623eac973625af663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXXG4JQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo6sOnQrXieBDMUZzIBsq71TXSoo1GvO2LjMT8xEkAFAiAOLZ7hTz0qJpCiVvZduq%2F8jWf%2FIxm8mkn58cbHoCq6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB39wSKKor6u1pKp1KtwD9XYhFDI187IyenyH19LeSn9Q2CtSvqR1d9x83KDIzq2ao30rvpEWtvZTdiVZoI1nvf0787A0jL4r5ujRdC4lM%2F8V%2FF%2Fvx52BUnbSKud%2BTXN3cUArEJiGbzywnPuUtPMYOS2%2Bn7iC2fRhmVHYM4CBN5KAdCqyWSi3YLuw6G4nUMXqtYtyrAYrgzaLO50SJzjNkB01F35KG63Rsjsgm%2FWcdpC50JOmUr2TEAzznpwK5f%2FZ7Pb%2FsWISo1ivnbqst6%2Bpc%2FuQlx9WVsTXJknzXy1VU0rH6G1EFFzLyEAqGUhQysdjoniVHIhGWMUKv31Nm5BWFgwP2x4%2F%2Fc91HrkVB9ZvBCszRKPbvvZYN6QmvAglS2IIX0FlH5gtFTVi3TlOPtlQU18dATsUTXvOGuArQWT2sdRh9DihTkUt9BlEYxPGtlyoMb2%2Bj9BfJZ2jXK0xWbnbuHClTMTzpxrE5eX3QSlwKHUdHNIGXjSI9OnedBurhG18Vi2scEHIuoT3B%2BmJ0OU6NPQFbzkIYFu2rnUk0CzGdeY3l7Qy3zGlVLaUlkmm8yniDkbWNoh8G8KoE6kJZWukXydRvPCh08FCEuZCY4G9%2B1unEq%2BAo0gsGqOGZFD%2BBgBQ0azLyslFdUXoALIwpIS2wwY6pgEuQRMv%2Bo6yCbhPcxmgWki%2BqJqs5eUc9UDHbQkShTqIn4i0RqJXbhYaAqsvbhOJB1DP4wH7hz92jQ%2Bv52Rep5%2BPFT0h45pbfXxXCKxVfVssreEDY12mFAxMEVn8Bgm3bB7HobU2R%2Bl8vBM2jlS7b%2BU3GBggbMRkGCGa6P%2FKHVil7klH%2FiLNTEu7OnruHsU1CkXH4mjVTRz%2Baj8tXvZ2iAw27m1zesMo&X-Amz-Signature=f85823b737aa808fd6904a0640c96055e71a118b62530e3d372d51546403508a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXXG4JQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo6sOnQrXieBDMUZzIBsq71TXSoo1GvO2LjMT8xEkAFAiAOLZ7hTz0qJpCiVvZduq%2F8jWf%2FIxm8mkn58cbHoCq6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB39wSKKor6u1pKp1KtwD9XYhFDI187IyenyH19LeSn9Q2CtSvqR1d9x83KDIzq2ao30rvpEWtvZTdiVZoI1nvf0787A0jL4r5ujRdC4lM%2F8V%2FF%2Fvx52BUnbSKud%2BTXN3cUArEJiGbzywnPuUtPMYOS2%2Bn7iC2fRhmVHYM4CBN5KAdCqyWSi3YLuw6G4nUMXqtYtyrAYrgzaLO50SJzjNkB01F35KG63Rsjsgm%2FWcdpC50JOmUr2TEAzznpwK5f%2FZ7Pb%2FsWISo1ivnbqst6%2Bpc%2FuQlx9WVsTXJknzXy1VU0rH6G1EFFzLyEAqGUhQysdjoniVHIhGWMUKv31Nm5BWFgwP2x4%2F%2Fc91HrkVB9ZvBCszRKPbvvZYN6QmvAglS2IIX0FlH5gtFTVi3TlOPtlQU18dATsUTXvOGuArQWT2sdRh9DihTkUt9BlEYxPGtlyoMb2%2Bj9BfJZ2jXK0xWbnbuHClTMTzpxrE5eX3QSlwKHUdHNIGXjSI9OnedBurhG18Vi2scEHIuoT3B%2BmJ0OU6NPQFbzkIYFu2rnUk0CzGdeY3l7Qy3zGlVLaUlkmm8yniDkbWNoh8G8KoE6kJZWukXydRvPCh08FCEuZCY4G9%2B1unEq%2BAo0gsGqOGZFD%2BBgBQ0azLyslFdUXoALIwpIS2wwY6pgEuQRMv%2Bo6yCbhPcxmgWki%2BqJqs5eUc9UDHbQkShTqIn4i0RqJXbhYaAqsvbhOJB1DP4wH7hz92jQ%2Bv52Rep5%2BPFT0h45pbfXxXCKxVfVssreEDY12mFAxMEVn8Bgm3bB7HobU2R%2Bl8vBM2jlS7b%2BU3GBggbMRkGCGa6P%2FKHVil7klH%2FiLNTEu7OnruHsU1CkXH4mjVTRz%2Baj8tXvZ2iAw27m1zesMo&X-Amz-Signature=3b4820a9ab2007ff66c277514e5b927337b081cdca46c815d84b52148ca08dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QDAV5CW%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHwQaQAbdJf6H8XvtdDk2kR1psON7Z20HsL%2FiFEh82oQIhAIyptyUKhGWoKjaIJD47VPiY9VGyCiBqHjaPxHZ0fkrcKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKjGK6j%2B4CcZCQFyoq3AO1vNZb2peyr3U5GMjeUA%2B1fwvvTLQEkjKOmZV4XCYZSjbLwzFvSMGewmuRn%2Bm3eaxDJwayGWIF1thHPYnyZ%2BaVYnMqyugmclhMR03qeR8t0alkf7eKD0WUVHw4L%2F3KWPElyqCcO9PK%2FHlr9tQ5lGsEjf6%2BxQN%2BFPo4QH%2BWrvJSdy2cvzODAciYAMsZyUQr90zPNpGEz4gmZFXJ239t94wmv5E%2BbWkKWtBiE%2Bpvfq%2F8s9ygEp8VyK%2BGtoPPFqH1j9QePhPaWHp09reAP1pdbTtdE3iEt9J2YUOakGBA8xadXyarDY8na%2BMHlNuRxKvK8ZFa8qOz2mnoQLEY6wtCW6wlECIiAq04Ezaj92WX3QCjHuQjD0tR3JqKkfrbPa1aDejjmbM8%2FDQn57IhbsUEzmj7bgBNzdP%2F66ynySCDsNLEtNYOQomATOC9KW%2BaD9dqjgMrHGYs%2BBLuPDZo0bOi3Z2EK5u3u7pAs7CtnoXihG8OgH88WUa2jiNf6hcT2enYsmpwLxzC15i9ix8kFgrROPeLmbuo%2BntKdKwlHo4djLU4z%2F2dH2vQAsfaaDqcWqT9u38PEvaC8ZZQosJocYEDZR23WeW6fvGZFzD8%2F10F%2F5e7gDUDE2QNeBgMCK2FwDCxhLbDBjqkAcpPgEjLE0xRtOOj5Ef0y857S%2BDX2VqFH7vQlJrKvEE467vu%2B%2F%2BqzRFovdlt9bcwqZP9c56oo0ja4gDFaSbHHOzQibJ64ZGIuTf9LKmPFtljbwQdPpZH3dOaN22waqf4btjCXKeERZSF4V2iq7vLlTSnfv%2FO0dq3r7h9iEF09RITKCkmXKhw5BT8jKO0QFLCbkucFd22J%2Bif7%2FoOXYTOwC2Fwt9r&X-Amz-Signature=24b504263a0fd9e02206b0657c9ee11b27f9a49357fc6b66df68d5a18043cc5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622OTTWVL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD043RFOkNIOcaKIl7CN8%2F1mdLAdiEGKr7CTJT9tORZ5QIgPWlEPH%2F2RuBnNkMdf1wDLVCLarnoEBlogrM%2BK8HXHXUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5fSxPFfrHqCinFAircA0BKrRcHfhdozS5EVsj4atbaRMCHxvpgzvrzzSzqNGnaqZh4ie4iKzFCWm546vDfW1jNWvo%2FQbelqRtlTDeuROWGqO7DsajicsZbG2jG67VofIEw8q5bBbJoL4GPLFeWViUhBmteqpJ3uR2yLCh8V8bMlqVS3ygLfpcYn8judxp3CKzr0tqGb%2BblU6%2BihjmOgp%2BnXBb%2FOtIhlWdLdgBhw5cdo%2FbBCXhMSWY%2FLhv5lrlCN%2Fy2TzvWfSY5qwvKdQcrQzwJWQOMKXWO2%2F6EcBITX1Ggt1qQ2%2BNLfv53vKv7Vfjn1nfLL1bzqc9YjqBpx42ULBP5AQ1xXQxT2AQZnSEcGqYL584huJOhr0r7iMwN3q3Bgp2ylA%2Fq7GNS3MgHMoYXxGnBHevftHy8pSpRKJW2aO4qRzWOW0SCPALk07Kg9ae9qHQuNo7n6boT%2FZFn2w2RXSR57rn3l3YPREOtjqRaYHrG%2Flssdlj%2BjZRRzNbdR99XVNmZbY4wmoa%2BmyUomvepcH%2BlMtjJDV91wH0WqGXJ0PVwSXCGZjey2layGpE3MlGQ%2FXydPSNzCK9vQ5tngJ%2FWksBvf80nCkl9iJsF%2BzVqHHJywBAQQKAskk1ybjnofPNHFe1B%2FQOof7h26JCnMPODtsMGOqUBK2W7m2ahhSJNXcwEM0ILtrQj8FaZcroJ5qD9M7qBQ27pBL13Ha9UCWfAWcDrlc4E12oDjYGf1JhsIU%2Bx%2BUf1u7yEsZuGM%2B8ChJ4vbrOlpSRiNXn4IUXSoqJYH%2F9fOz5mzHLtxnvvyktac3n8NQMWf5JCoxa7rus3gL9yfQ5o%2FSfMtXA5nYMOJkW3gXRaBGCftCysmdM8%2FSWSG0pk%2BFAJZXRlBjRn&X-Amz-Signature=90d611f71361a2d4f9dde4ae5cf7f9b988bf404ecd3f5909f742c6d5bb2f44a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GXXG4JQ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo6sOnQrXieBDMUZzIBsq71TXSoo1GvO2LjMT8xEkAFAiAOLZ7hTz0qJpCiVvZduq%2F8jWf%2FIxm8mkn58cbHoCq6%2FSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB39wSKKor6u1pKp1KtwD9XYhFDI187IyenyH19LeSn9Q2CtSvqR1d9x83KDIzq2ao30rvpEWtvZTdiVZoI1nvf0787A0jL4r5ujRdC4lM%2F8V%2FF%2Fvx52BUnbSKud%2BTXN3cUArEJiGbzywnPuUtPMYOS2%2Bn7iC2fRhmVHYM4CBN5KAdCqyWSi3YLuw6G4nUMXqtYtyrAYrgzaLO50SJzjNkB01F35KG63Rsjsgm%2FWcdpC50JOmUr2TEAzznpwK5f%2FZ7Pb%2FsWISo1ivnbqst6%2Bpc%2FuQlx9WVsTXJknzXy1VU0rH6G1EFFzLyEAqGUhQysdjoniVHIhGWMUKv31Nm5BWFgwP2x4%2F%2Fc91HrkVB9ZvBCszRKPbvvZYN6QmvAglS2IIX0FlH5gtFTVi3TlOPtlQU18dATsUTXvOGuArQWT2sdRh9DihTkUt9BlEYxPGtlyoMb2%2Bj9BfJZ2jXK0xWbnbuHClTMTzpxrE5eX3QSlwKHUdHNIGXjSI9OnedBurhG18Vi2scEHIuoT3B%2BmJ0OU6NPQFbzkIYFu2rnUk0CzGdeY3l7Qy3zGlVLaUlkmm8yniDkbWNoh8G8KoE6kJZWukXydRvPCh08FCEuZCY4G9%2B1unEq%2BAo0gsGqOGZFD%2BBgBQ0azLyslFdUXoALIwpIS2wwY6pgEuQRMv%2Bo6yCbhPcxmgWki%2BqJqs5eUc9UDHbQkShTqIn4i0RqJXbhYaAqsvbhOJB1DP4wH7hz92jQ%2Bv52Rep5%2BPFT0h45pbfXxXCKxVfVssreEDY12mFAxMEVn8Bgm3bB7HobU2R%2Bl8vBM2jlS7b%2BU3GBggbMRkGCGa6P%2FKHVil7klH%2FiLNTEu7OnruHsU1CkXH4mjVTRz%2Baj8tXvZ2iAw27m1zesMo&X-Amz-Signature=f3d1cae9da0cacda8571d81ab4ce2a26bef824a115b9b9d4eada1954c6aa33a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
