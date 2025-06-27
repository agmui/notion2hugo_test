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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7ZJFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICndJ%2BR5m2SaPeRfgvLN8vFkdPjk7kO1jSLRFSxdWWY0AiEAmIslBpYUSz%2BKfxGnCDih2hPI%2BKuMifQSyA6BD%2ByB3rQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJyWpyFeP590khIa%2BircAww448Wwb8wGXmvgwjzxcNf7PaxLDmkNh%2B%2F9Vbxm7GYfXpCr0wJg7e0srkStRxTps5o2M74AS2R0JvR8w4IJFHDK4HeiChG5%2FKDB2%2BG5FtJkYSnvXnGDyilVqvAphYys1dk%2Ba9JSUWxnZx1ylmom0XiJH0d6iY4nhdO%2Fm1BAU9rX9Y%2FAPRnBxMMtkn6gLmlZSfioZccsyP5F%2FhoPEe%2BJOd6CH0xcFgaaC9alJ1KmhQZcgGtVMKJHmKBv8Xs6Tml0jAMu2YGrCvv%2BSjuIISFfiBWuQ0Arz9SsO3dHVt7GS%2Fj2%2BzGWtDaM9HURdEmY8C%2FMrqRiPdSZtHfLpDd0UXAOy9i94gF4NPV5cvm%2BzhIpdxWVBoeu398ILmcBZBb2ytrn3DpiHgAqCwGFUf2tHKRtpAth5JwjLyJoLfaNYDXX0Zarlen27kDNhTY3zbGQEQyvOQSCSlviDvgoTjxXvm%2FZkqDMU6RAUhIxwkrxs3A5%2Fy1cS2Kul96AULz5rpN3EcZnctAJul5YiCH4nOgFcdUuHo6S4a3HiUKpSzSBwKBFdnFxvCWfp4l%2Bk7Fal8o0Idv%2BVxyB0R7c7QNRY2EWAdL6erZ1xCW9nBPBBZmNarji%2BQBZL5DZ6IOnSwsRlbUXMLCg%2BMIGOqUBBaVV%2BO2YcjWn6TBJlKxPirZA2XjfjjdboTt4VR5t4XP1%2FTkia446HQWSj2QQSPIz0JFI%2FZeYlRUVYCc4JC0SRasRIL%2Bsv4cjNY%2Bcvk5wPC5GJ%2FjbCXnjFneCg9EecbcOsMTZx%2BlCh%2FL1ti0XBjwcXJi2WifkTf%2FZezqWEILi9ScTxpDg1us36AIRjDUpktby%2FGeIVO6JIcwK8UP%2BuXVrt9npOY2%2B&X-Amz-Signature=922db1ad5c2f08bf3f73d148254e442dd399605f21e4c71b3f8a4d40b8c5a8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7ZJFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICndJ%2BR5m2SaPeRfgvLN8vFkdPjk7kO1jSLRFSxdWWY0AiEAmIslBpYUSz%2BKfxGnCDih2hPI%2BKuMifQSyA6BD%2ByB3rQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJyWpyFeP590khIa%2BircAww448Wwb8wGXmvgwjzxcNf7PaxLDmkNh%2B%2F9Vbxm7GYfXpCr0wJg7e0srkStRxTps5o2M74AS2R0JvR8w4IJFHDK4HeiChG5%2FKDB2%2BG5FtJkYSnvXnGDyilVqvAphYys1dk%2Ba9JSUWxnZx1ylmom0XiJH0d6iY4nhdO%2Fm1BAU9rX9Y%2FAPRnBxMMtkn6gLmlZSfioZccsyP5F%2FhoPEe%2BJOd6CH0xcFgaaC9alJ1KmhQZcgGtVMKJHmKBv8Xs6Tml0jAMu2YGrCvv%2BSjuIISFfiBWuQ0Arz9SsO3dHVt7GS%2Fj2%2BzGWtDaM9HURdEmY8C%2FMrqRiPdSZtHfLpDd0UXAOy9i94gF4NPV5cvm%2BzhIpdxWVBoeu398ILmcBZBb2ytrn3DpiHgAqCwGFUf2tHKRtpAth5JwjLyJoLfaNYDXX0Zarlen27kDNhTY3zbGQEQyvOQSCSlviDvgoTjxXvm%2FZkqDMU6RAUhIxwkrxs3A5%2Fy1cS2Kul96AULz5rpN3EcZnctAJul5YiCH4nOgFcdUuHo6S4a3HiUKpSzSBwKBFdnFxvCWfp4l%2Bk7Fal8o0Idv%2BVxyB0R7c7QNRY2EWAdL6erZ1xCW9nBPBBZmNarji%2BQBZL5DZ6IOnSwsRlbUXMLCg%2BMIGOqUBBaVV%2BO2YcjWn6TBJlKxPirZA2XjfjjdboTt4VR5t4XP1%2FTkia446HQWSj2QQSPIz0JFI%2FZeYlRUVYCc4JC0SRasRIL%2Bsv4cjNY%2Bcvk5wPC5GJ%2FjbCXnjFneCg9EecbcOsMTZx%2BlCh%2FL1ti0XBjwcXJi2WifkTf%2FZezqWEILi9ScTxpDg1us36AIRjDUpktby%2FGeIVO6JIcwK8UP%2BuXVrt9npOY2%2B&X-Amz-Signature=7b0f72cf62a29f1e4a53975cb34fc51d96e22bc09c7e66dd3650df7c01e119a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7ZJFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICndJ%2BR5m2SaPeRfgvLN8vFkdPjk7kO1jSLRFSxdWWY0AiEAmIslBpYUSz%2BKfxGnCDih2hPI%2BKuMifQSyA6BD%2ByB3rQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJyWpyFeP590khIa%2BircAww448Wwb8wGXmvgwjzxcNf7PaxLDmkNh%2B%2F9Vbxm7GYfXpCr0wJg7e0srkStRxTps5o2M74AS2R0JvR8w4IJFHDK4HeiChG5%2FKDB2%2BG5FtJkYSnvXnGDyilVqvAphYys1dk%2Ba9JSUWxnZx1ylmom0XiJH0d6iY4nhdO%2Fm1BAU9rX9Y%2FAPRnBxMMtkn6gLmlZSfioZccsyP5F%2FhoPEe%2BJOd6CH0xcFgaaC9alJ1KmhQZcgGtVMKJHmKBv8Xs6Tml0jAMu2YGrCvv%2BSjuIISFfiBWuQ0Arz9SsO3dHVt7GS%2Fj2%2BzGWtDaM9HURdEmY8C%2FMrqRiPdSZtHfLpDd0UXAOy9i94gF4NPV5cvm%2BzhIpdxWVBoeu398ILmcBZBb2ytrn3DpiHgAqCwGFUf2tHKRtpAth5JwjLyJoLfaNYDXX0Zarlen27kDNhTY3zbGQEQyvOQSCSlviDvgoTjxXvm%2FZkqDMU6RAUhIxwkrxs3A5%2Fy1cS2Kul96AULz5rpN3EcZnctAJul5YiCH4nOgFcdUuHo6S4a3HiUKpSzSBwKBFdnFxvCWfp4l%2Bk7Fal8o0Idv%2BVxyB0R7c7QNRY2EWAdL6erZ1xCW9nBPBBZmNarji%2BQBZL5DZ6IOnSwsRlbUXMLCg%2BMIGOqUBBaVV%2BO2YcjWn6TBJlKxPirZA2XjfjjdboTt4VR5t4XP1%2FTkia446HQWSj2QQSPIz0JFI%2FZeYlRUVYCc4JC0SRasRIL%2Bsv4cjNY%2Bcvk5wPC5GJ%2FjbCXnjFneCg9EecbcOsMTZx%2BlCh%2FL1ti0XBjwcXJi2WifkTf%2FZezqWEILi9ScTxpDg1us36AIRjDUpktby%2FGeIVO6JIcwK8UP%2BuXVrt9npOY2%2B&X-Amz-Signature=d80652f01a7917e75fccfeb9d25e927aa6d5e8cd45fb251fe02eba72888fa6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466723EA7IN%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHZjFLls7qiixVztVMahANtN%2FBFKsS2n0hMjPZsTyXmvAiEAzeF3Nly3rETXMDsgV4BYs6CYxsrQYzD2NR%2FZ5FuG0gIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMYFo%2BMn5oN22DASkCrcA%2Br%2FPTvFBVoJ4p9UTtd9lu661AkT13wi856irevobEcyG0ogLzKFipy8MOlvSXF9zxo53UNr4xNfWWz%2BmLYmv2z5DIEqKcHfFW6yOCCuhDO7dfgzdV6tHB3RR9TI3CUdx2%2BfinEqGHWHCl%2BG34HMEj1NiO8%2BKYY8cJT2nK9rJaJtl%2FWN99xPf4zpntqL2CZlnA0kna8m2cDwJjBD3EDuh1gkEpWbEIFCjBWReBiL7tOJGm4NTeot9vG%2BO7020rEqxLsQk3z5Lk8Rtui7DD2TFxcGr6nuyWtYPWYIYJeIlvkTVRpDTObwdKzwEu7EU2YHyPHnRufNm2NskWOdaP5yaDbr21C5Qn9V1zGPcecBJseykHXakSsJJTZVdyvuTBe3ergC4DanUuev9FEtuvq4qrC9JyymbrNvXfov4S3P8l7fhOd1CDwxii%2FQbiEEG2%2B4LFj9BnTyroUNB9GT0vuFQSmon5Wtdcl6z1FlB0JmYOBP7yXJlHZTxmb%2FSaEZAcKQwkzCca2v8EYVNOFJ3TfSqgdVOPPV3p3bFFIViR6zz86I7h%2FIPU8fMaA3XMgGuBanyiJBTscGMYXbpM%2BVNRJfmGo%2B38%2BgOsB5isjiXjK0LqySVOq%2BFmSE%2FS8olfoBMKqg%2BMIGOqUBO%2F8F5Y4qOjGOLvT%2BYFMgvnqMRLBBJGHg4er8LE1XfLqPzFm6XNJOi2%2FItLq3G75%2BwWGMBIwvEvIC8Q68zF2H2gT%2BHGlRrVpceHq7VDT8QY05wnnTwqIY7cD4tXOrx6OJQf6ENKm5f5HI%2Fm1qKvfnsF%2FohRjwc6F10bI2OmkhLe4nCFCPh7xbaD4b%2Ftzg1M5rMriyisrDybjfBIaycuOyLV8wPm4R&X-Amz-Signature=9dd2296f1fa742041d0763469330600b64458179085d2d97a6f0aee643392310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3ZI3XZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDU7FjWjn01M6kiJq3PdE45MDM1msHNZ2LCeUlC1i%2BcPgIgMQQEXONFMzbriTLU%2BG7jRxIpjkeC9yWDmecTGat58Icq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFtNG59czXdatUkAASrcAyS2bNzCrCEfTJl%2BDJGZU59yPYRdVoMH0EgctoMHdoQ8Avd9HLU3rVrrU8F4rhtNTInuOC8WE2yciXOvS0iV%2FPdApaqv5IWwArLcQvNpm0TKSCvNcxTz%2FAydqZn1IFAX6YyQlt0ZqhxGDM0qlChVsotm13cNouohwXa3rDHtoCgDgEDE%2FONGJ22z%2FLqTRsGX491MROHP7HX0vA0YIhxx36%2FMOvQGyg%2B5pwfMFq5GR7CTWhrytdORLJmtFSCqZtPnEyVfQypUUlK%2F8SLJc%2Fv1rHdWh0Zcnb4WwF38%2Ff0RCfbo8iqhcKYqWXHZLNkFpq6L5PNyrbxC9zoVIc78QLaL08F93mSoaAkX3fz0NNiynvQuc2%2FOealrDCiinjsJmmNR4aBqlFoUAkWYxfDEf3NUkMUZfDkCgXH%2FJVR5G%2BoIj7PkKuPC4YU%2BvZhvL5JpGkIOPO7cT8kP1ku6GKcwcn1lr3PGRCyuNTduGS52KevPi7FCnCOfNjUJAfofUsLXq0H62SMLOS8OiH%2BusxMgUREWl0N1tRF%2BfL4iTQYGTZ3e0jOTW9J9qJ6E5%2FtjuGdQwGoK5jibaMdn%2BwHRcG6KKxwSaHv5VJzQsyy%2BGn88FPKBwBfBMcgkTfWoa%2FuHDXN%2BMNWf%2BMIGOqUBvTXXVNXmd3YcS076wuX1B5bGCYEGZ3gPAv1bGaK11UEDu2I27AAcbXrmC3LCrx%2BXDpg0e%2F%2FfbYd%2FrZLUpxs1nuRbdULhzSOBES8cjr2JHwI%2FVC7nIsHZ1nPIi7lh8WL9neJA%2F3VlGbDYX30NKWQiLTxpEWlQlynXa%2BQZUpWDNyNmsTf4PN4PLI708CcPEsfhYJvlrwHG3PwseZnajc%2FxNosL5isw&X-Amz-Signature=2533810c777c3d017a26a76b1241ff43266dd5aa2fe549cdc91b87e7fa33be8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DC7ZJFV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCICndJ%2BR5m2SaPeRfgvLN8vFkdPjk7kO1jSLRFSxdWWY0AiEAmIslBpYUSz%2BKfxGnCDih2hPI%2BKuMifQSyA6BD%2ByB3rQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJyWpyFeP590khIa%2BircAww448Wwb8wGXmvgwjzxcNf7PaxLDmkNh%2B%2F9Vbxm7GYfXpCr0wJg7e0srkStRxTps5o2M74AS2R0JvR8w4IJFHDK4HeiChG5%2FKDB2%2BG5FtJkYSnvXnGDyilVqvAphYys1dk%2Ba9JSUWxnZx1ylmom0XiJH0d6iY4nhdO%2Fm1BAU9rX9Y%2FAPRnBxMMtkn6gLmlZSfioZccsyP5F%2FhoPEe%2BJOd6CH0xcFgaaC9alJ1KmhQZcgGtVMKJHmKBv8Xs6Tml0jAMu2YGrCvv%2BSjuIISFfiBWuQ0Arz9SsO3dHVt7GS%2Fj2%2BzGWtDaM9HURdEmY8C%2FMrqRiPdSZtHfLpDd0UXAOy9i94gF4NPV5cvm%2BzhIpdxWVBoeu398ILmcBZBb2ytrn3DpiHgAqCwGFUf2tHKRtpAth5JwjLyJoLfaNYDXX0Zarlen27kDNhTY3zbGQEQyvOQSCSlviDvgoTjxXvm%2FZkqDMU6RAUhIxwkrxs3A5%2Fy1cS2Kul96AULz5rpN3EcZnctAJul5YiCH4nOgFcdUuHo6S4a3HiUKpSzSBwKBFdnFxvCWfp4l%2Bk7Fal8o0Idv%2BVxyB0R7c7QNRY2EWAdL6erZ1xCW9nBPBBZmNarji%2BQBZL5DZ6IOnSwsRlbUXMLCg%2BMIGOqUBBaVV%2BO2YcjWn6TBJlKxPirZA2XjfjjdboTt4VR5t4XP1%2FTkia446HQWSj2QQSPIz0JFI%2FZeYlRUVYCc4JC0SRasRIL%2Bsv4cjNY%2Bcvk5wPC5GJ%2FjbCXnjFneCg9EecbcOsMTZx%2BlCh%2FL1ti0XBjwcXJi2WifkTf%2FZezqWEILi9ScTxpDg1us36AIRjDUpktby%2FGeIVO6JIcwK8UP%2BuXVrt9npOY2%2B&X-Amz-Signature=901dcb9dc84b6d2670c111db01502779ac2f3e070375cf1c5ffc4fbd847e648f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
