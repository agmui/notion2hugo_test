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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMISPCCL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7i08NyynhSFPA%2BBJqHRsZN7pWbCHfpW93IgROH6J79AiBuIxe8BJ5jsB6XZ2Bi4YOb3q3%2BtfN%2Fw83kPrJkD4XX6iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu66czNdDpPO8wNSkKtwD7YanB%2BU7sbTrCj2Z4XQeHJ8D78eHzpxMH6bNeRyIpviqATyl%2F%2Fvb8%2BYjdjZ1imQL9ZemI8ArrF6w6XQLFWuaWVvUKUnXbATysJ01fGNc%2FfGpWs2pit%2BFrGgnK5ZdxzmRAO%2Bb2GAHDP3bhJ6nYpgCY4F%2F1K8hMSbTULBx2XxPxx0Nn8%2BNQ7mlZNgiq09uj%2BUBpldqjHcyeTd7DRmuXBq1V80k7T6DZq1NdqhnIMN%2BZvuPAIlAIkNRVObY8QgrWnphBmpNSsGVd1AUtmef6ymu0Fp9sDpQYGgxEqQSAmOGFQuuxvH9x4vkUGoCfhYnT6OKuoZo%2BMAS%2FpKBLuhxhuCDx0ylOwNWTC9W991WFcMuqiJtownbzT7loYy0Y6KatSdc7DQqpkKOVdYUM2OoHrG4O6QdAq4Db05es%2Fr3EGbBDOoMpIpdhHN%2FCOjWvwhXyZz3kDyv1GHXs62l1q9tQPFIGomKRu5wEv9JjDbeVTrjZ5rp92v%2FNITNiCpvKmBteyGlS9RlFix2c1aml4uOXqJs%2BGxMInMeP%2BrytGRArXqu8QsuAnmnNyDY%2Fb5T8zpwps20E7B9sJNrJe98ysAxRQvI9fRrMAZgyNQljTxnmrI9frrc3P%2BaPzsl%2FLQdDdswqvm%2FwwY6pgGfnSu1UzUX%2FbE4x9EIrjZsJcYTeH095UvwLI2Z9nZpLPMu27n%2Fa98bIuPhYs4wrylOH7ID2RJIxrWcrREFkl53gJ3Sc439d0EJCM03QtErHdcXyZKpwj%2FPMvkTarWP9ul7wqcpCS%2Fm5bATYuiVrRyWgCADFwdhTNgZqUEgcRY6tH1Pncm52StDbpjzySkpiEl481FFtCdYR3EUJHnhIoyv3BFUqP0%2F&X-Amz-Signature=29e35ddda966ace99167f47bab7cce6799cd44d14783f3153443428476095f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMISPCCL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7i08NyynhSFPA%2BBJqHRsZN7pWbCHfpW93IgROH6J79AiBuIxe8BJ5jsB6XZ2Bi4YOb3q3%2BtfN%2Fw83kPrJkD4XX6iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu66czNdDpPO8wNSkKtwD7YanB%2BU7sbTrCj2Z4XQeHJ8D78eHzpxMH6bNeRyIpviqATyl%2F%2Fvb8%2BYjdjZ1imQL9ZemI8ArrF6w6XQLFWuaWVvUKUnXbATysJ01fGNc%2FfGpWs2pit%2BFrGgnK5ZdxzmRAO%2Bb2GAHDP3bhJ6nYpgCY4F%2F1K8hMSbTULBx2XxPxx0Nn8%2BNQ7mlZNgiq09uj%2BUBpldqjHcyeTd7DRmuXBq1V80k7T6DZq1NdqhnIMN%2BZvuPAIlAIkNRVObY8QgrWnphBmpNSsGVd1AUtmef6ymu0Fp9sDpQYGgxEqQSAmOGFQuuxvH9x4vkUGoCfhYnT6OKuoZo%2BMAS%2FpKBLuhxhuCDx0ylOwNWTC9W991WFcMuqiJtownbzT7loYy0Y6KatSdc7DQqpkKOVdYUM2OoHrG4O6QdAq4Db05es%2Fr3EGbBDOoMpIpdhHN%2FCOjWvwhXyZz3kDyv1GHXs62l1q9tQPFIGomKRu5wEv9JjDbeVTrjZ5rp92v%2FNITNiCpvKmBteyGlS9RlFix2c1aml4uOXqJs%2BGxMInMeP%2BrytGRArXqu8QsuAnmnNyDY%2Fb5T8zpwps20E7B9sJNrJe98ysAxRQvI9fRrMAZgyNQljTxnmrI9frrc3P%2BaPzsl%2FLQdDdswqvm%2FwwY6pgGfnSu1UzUX%2FbE4x9EIrjZsJcYTeH095UvwLI2Z9nZpLPMu27n%2Fa98bIuPhYs4wrylOH7ID2RJIxrWcrREFkl53gJ3Sc439d0EJCM03QtErHdcXyZKpwj%2FPMvkTarWP9ul7wqcpCS%2Fm5bATYuiVrRyWgCADFwdhTNgZqUEgcRY6tH1Pncm52StDbpjzySkpiEl481FFtCdYR3EUJHnhIoyv3BFUqP0%2F&X-Amz-Signature=856570c0867571586c8c6396a2416131857ac4aa59baffbf85e9097d6a36a764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMISPCCL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7i08NyynhSFPA%2BBJqHRsZN7pWbCHfpW93IgROH6J79AiBuIxe8BJ5jsB6XZ2Bi4YOb3q3%2BtfN%2Fw83kPrJkD4XX6iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu66czNdDpPO8wNSkKtwD7YanB%2BU7sbTrCj2Z4XQeHJ8D78eHzpxMH6bNeRyIpviqATyl%2F%2Fvb8%2BYjdjZ1imQL9ZemI8ArrF6w6XQLFWuaWVvUKUnXbATysJ01fGNc%2FfGpWs2pit%2BFrGgnK5ZdxzmRAO%2Bb2GAHDP3bhJ6nYpgCY4F%2F1K8hMSbTULBx2XxPxx0Nn8%2BNQ7mlZNgiq09uj%2BUBpldqjHcyeTd7DRmuXBq1V80k7T6DZq1NdqhnIMN%2BZvuPAIlAIkNRVObY8QgrWnphBmpNSsGVd1AUtmef6ymu0Fp9sDpQYGgxEqQSAmOGFQuuxvH9x4vkUGoCfhYnT6OKuoZo%2BMAS%2FpKBLuhxhuCDx0ylOwNWTC9W991WFcMuqiJtownbzT7loYy0Y6KatSdc7DQqpkKOVdYUM2OoHrG4O6QdAq4Db05es%2Fr3EGbBDOoMpIpdhHN%2FCOjWvwhXyZz3kDyv1GHXs62l1q9tQPFIGomKRu5wEv9JjDbeVTrjZ5rp92v%2FNITNiCpvKmBteyGlS9RlFix2c1aml4uOXqJs%2BGxMInMeP%2BrytGRArXqu8QsuAnmnNyDY%2Fb5T8zpwps20E7B9sJNrJe98ysAxRQvI9fRrMAZgyNQljTxnmrI9frrc3P%2BaPzsl%2FLQdDdswqvm%2FwwY6pgGfnSu1UzUX%2FbE4x9EIrjZsJcYTeH095UvwLI2Z9nZpLPMu27n%2Fa98bIuPhYs4wrylOH7ID2RJIxrWcrREFkl53gJ3Sc439d0EJCM03QtErHdcXyZKpwj%2FPMvkTarWP9ul7wqcpCS%2Fm5bATYuiVrRyWgCADFwdhTNgZqUEgcRY6tH1Pncm52StDbpjzySkpiEl481FFtCdYR3EUJHnhIoyv3BFUqP0%2F&X-Amz-Signature=e19b79018f41a0f084d6956041f1cf39d1d5f279765ed2c7e8f8c54fb0184aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3FCAKU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVfIBAuaO7o9JEBkApaTFdEheJ0XYEV9zvXiQTaQuFVwIhALA7NAifSUpZUpprmdztm4xO5mil5RbUAcmyubIh9vcDKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzCzFWZ1L%2FwSbgRuUq3AN35c%2FV6aWqNTJiK3Aqq1P1fnrvqXQdj6r9oki07HHfttJR6Fh4eyyAZvNzq1Ta8RUQtwIek0ZciXgzCgTYDdnH7tEli8A%2Bxz2%2F9lfazEauxQNCckI%2FXgcZRhUxq51nh99kbGP5AbQ2G0JMUM5eaobpAuT9zIiwLJUf%2BLt7kUwa2ZK6pFQW8EmLCDA%2B%2FR6evwD0DswYFZOdSFFZzqbD6%2Fa2JPlKj%2Bq7GORZ0W%2BDUsfQl%2BPmDytFkx4pSpixgNEz%2F84TpNyxtqrpzSj2idLgOBPYCf7CdxP0mAZswtGkc6lOLAfKi3rlnOls4%2FrsAFb4pMd95BmO99Gk6clulGeeNkZyknoekuv7EcaviVWRDvXK1y9VXLUdEvTGta1o%2FuoWBYltsllE0b6ZXGBxb8cUjdSV2n3U0JGvonkvV83hcU%2FRNj3kQ0A2xC%2Fb%2BZK4F9WxycX%2BdPfgzQcmQv9c2XkEFsr7IVZY8tlqFaUkVivvGrXEuHotdoQwK3gPi9yNVBJtPdsLYuZd8KDsqFJta5rly6kzSVjrVfJNP0ltvW%2BbAv0CfMEpwaRAyVkQFQhuEtXU0hNBN2jS4Of1cdHcFRpGs8RDalYyNtM%2B8vMKAz6Ljyztzjrc68sXD2qAX7VN0jDA%2BL%2FDBjqkAbVMlIct9%2BJzcsMn4pdTHsLrOOEDk%2B%2Fv4uTxi3FA%2Br%2BNl9IOXIz7tyFMpnBACEvA2YqeXM3SG4706RSB5BE4fjSg9AoewyuaaH7x1ip4ZdFENm7YzXwcnFt1mE1%2Fqn2Fcy22ETURl8eoDH%2FD%2Bm3mjon5wp3xFY9Nmk5C6bAZ5uizItbOio767fEPG7p5xBuPSBFMYoBSF320Eg5aXI3XbXZ0u5Uv&X-Amz-Signature=ec511a67497da32e1f2d05e409f5f12df3d55c7fb3efeb908ecfea33c1346dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BOK5QF%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm6Vr1LHXOdg%2B%2BIGzSRZPHB1CXihheL2gJNtuWBU3G1wIhAM%2Bwru9W0GAC61D1LNVqYdXKRyLllvF4mym84Vi2ukfMKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybMXsIpBdA0n59vM0q3AMPigHafUBmYa%2BUI0Pc35eBczgLLbf1AoLZaUd13Z%2F3KwcobFzvWyLHFZjogPUR5ZE0XBgn6fAGoV6MAxJ%2F1FdQRLa4%2BzduiwqE5DtVerPNS7vYlXu4q0lAyxjjo8UH9n9kgr8nmPxsNWRUuwsSFoEYqnU2SP0l5WROBFRclZLFiFHADuYbKI2sjeuLQDa7UjBPxTI0JJLyy2lWH9LAqm164LCtL6ItmfN7gXb%2Bnk%2FOh0TwVVLB%2FpzDa1cfip%2FpNFLBRYvRjEKa3qJzgvQHxn1bepHsFuT3pPKU4S4vSu41nFe9KecJIxo%2BO%2FR9yvayGOe23iq%2BipLSFKC41ycpKCosy8O9%2FR%2FF6G87g%2BwbPYGX7xIofqGsN1ELNu1A2sG0RkcqN6FuBnmsea8fGyE2m6ZBcWTDnSev5f2bgymPpL2Aht2a8ACb6lYYewBuRVDq%2BeYSW6H%2F%2FINUJpk%2B%2BuVc5D%2BEMVKMqQZj60GhZihUFp9dZGyjLrl4crTbjNrASd9buTSoXzIN7cIMbBWzXCDMwt2ic4jHGasGsC1P4FzWMGSBtV5ZG3cIxv%2F5K%2BgaDupsidIML9ZcK8wNfxxUddf6cqsqDsfrhuaW9uAe8B%2BhXU0wjloSxVp2zRhlv%2FpUhTC5%2Bb%2FDBjqkAdrWM6%2B%2B9Hm9sX%2F4mqiqMdR1y2CbEWsiZweuiNY9C9Iw6ljqKKN4msngYV%2B%2FPToAal%2B%2FB%2BPspT%2FDWF8mOpnl9tmqF6Dlu5VCNrNtZY8Vvgjf8%2FBRc4XSiYeOdGFkzFypVAW9ei%2F4ozyQ96ezQSLYiBmVj8gJJ%2BnQ9qCnO9zFiAuYj7T2WNHmonZcck4yLnTFcqCfSJaS9Nw24A4zrEB9MtjageVL&X-Amz-Signature=43abb818d27a19f7aa41729dd402ac6df27738700db732179e41049eb0355d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMISPCCL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7i08NyynhSFPA%2BBJqHRsZN7pWbCHfpW93IgROH6J79AiBuIxe8BJ5jsB6XZ2Bi4YOb3q3%2BtfN%2Fw83kPrJkD4XX6iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu66czNdDpPO8wNSkKtwD7YanB%2BU7sbTrCj2Z4XQeHJ8D78eHzpxMH6bNeRyIpviqATyl%2F%2Fvb8%2BYjdjZ1imQL9ZemI8ArrF6w6XQLFWuaWVvUKUnXbATysJ01fGNc%2FfGpWs2pit%2BFrGgnK5ZdxzmRAO%2Bb2GAHDP3bhJ6nYpgCY4F%2F1K8hMSbTULBx2XxPxx0Nn8%2BNQ7mlZNgiq09uj%2BUBpldqjHcyeTd7DRmuXBq1V80k7T6DZq1NdqhnIMN%2BZvuPAIlAIkNRVObY8QgrWnphBmpNSsGVd1AUtmef6ymu0Fp9sDpQYGgxEqQSAmOGFQuuxvH9x4vkUGoCfhYnT6OKuoZo%2BMAS%2FpKBLuhxhuCDx0ylOwNWTC9W991WFcMuqiJtownbzT7loYy0Y6KatSdc7DQqpkKOVdYUM2OoHrG4O6QdAq4Db05es%2Fr3EGbBDOoMpIpdhHN%2FCOjWvwhXyZz3kDyv1GHXs62l1q9tQPFIGomKRu5wEv9JjDbeVTrjZ5rp92v%2FNITNiCpvKmBteyGlS9RlFix2c1aml4uOXqJs%2BGxMInMeP%2BrytGRArXqu8QsuAnmnNyDY%2Fb5T8zpwps20E7B9sJNrJe98ysAxRQvI9fRrMAZgyNQljTxnmrI9frrc3P%2BaPzsl%2FLQdDdswqvm%2FwwY6pgGfnSu1UzUX%2FbE4x9EIrjZsJcYTeH095UvwLI2Z9nZpLPMu27n%2Fa98bIuPhYs4wrylOH7ID2RJIxrWcrREFkl53gJ3Sc439d0EJCM03QtErHdcXyZKpwj%2FPMvkTarWP9ul7wqcpCS%2Fm5bATYuiVrRyWgCADFwdhTNgZqUEgcRY6tH1Pncm52StDbpjzySkpiEl481FFtCdYR3EUJHnhIoyv3BFUqP0%2F&X-Amz-Signature=16678db6dbfd1a18d3dd8c20dd238312da6e7e731e2b420dc04e6acc1bfec76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
