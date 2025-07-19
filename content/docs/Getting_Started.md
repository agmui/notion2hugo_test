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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG7UPWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD8%2F83t%2BM2%2Fa0m%2BBVzBRvPvhwE13kmvqTmYlmvvxUsiAiEAxuOPB3L8UFStiYaF7C0aOmw7Ixb0jOAx66k6xzbTgK0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK4dtqhSAPjC5EhtCrcA2ycjXA4qd1b4tge9jEab%2B%2FPs9B2RSQqtzsuoGtiMM%2BXFHumzIyNFaGIapWIc%2BIOZe3GgV7z%2F%2FnpFAdYg%2BGYoaUgHL6tea6rfjxbOuxlCz71ixU6FQb33HPQofK7STZ3vfkzlFoMJ7t9nFNSVpqK4B4ZfDh5OzeHOvafThngRFqb4DLFiAbIvqSMKrUV80o138C5wDi9adci87oz0EnMhNzIcd7CzO0Bju7Q1rK9yd07402SrMa190eDR2MmsRExT8Mb%2BNhuwAPVNmQr6Um9LDYP8QBT2%2Fot9rt0t0rPPUSEXxsCjPv38owWRMAc7QWEGoXbFlrWd5NZ1Pra3amR1aXAg6XZZkhEIbfG2suIRECVSIK6WG1eUT52YBAaFtgMW1ubqOQwarAZ7sHlpanhLl7ZF2vSQcBxCuskHzGcLc%2BSwa0fUk2HZmiqIFbimQEeRa7Ei%2FaKGwE7rQp%2Ba8d8Q9IF%2F7xmw19n8KmMIHM%2FRBdvNxQwgLGqdm0%2BqmkJpdkfEYY3MLav082oT9Hbvc40rtoxFy17R2WtAf%2FCFomVuVkFhS4n22IBo%2B9nq21iFU7QErdOmsaMlkQZNNahsUTXfz4OQIA7kc5flNhWsX%2FIQenS3piyQjQJq4LEvRt3MOvF7MMGOqUBiukB1VtD3Lm0Ddrxk5vWikUDSvI%2BLNzKBuy7xDMFFT7snRVBvNkXqoRLVCX8MDc7id%2Fy3DYZ80dgHZQmQU691ELdiAzdsGJmYgnK1kFKBHQ1msfbI5Qguh%2BkAJyN3SOkNj6nDfl9BHMfD3emNj86ViaTgfit%2FVTWcUrA6uO%2BoBqw7w9jwBe010zAq3PnX2wOlyTe3dt7qcmRCTmc%2BRjU8HLbd6c7&X-Amz-Signature=db0685fbac572071fcda5930a0ad01ecc64b664de20b9bf1bc7ec5b94ef27745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG7UPWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD8%2F83t%2BM2%2Fa0m%2BBVzBRvPvhwE13kmvqTmYlmvvxUsiAiEAxuOPB3L8UFStiYaF7C0aOmw7Ixb0jOAx66k6xzbTgK0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK4dtqhSAPjC5EhtCrcA2ycjXA4qd1b4tge9jEab%2B%2FPs9B2RSQqtzsuoGtiMM%2BXFHumzIyNFaGIapWIc%2BIOZe3GgV7z%2F%2FnpFAdYg%2BGYoaUgHL6tea6rfjxbOuxlCz71ixU6FQb33HPQofK7STZ3vfkzlFoMJ7t9nFNSVpqK4B4ZfDh5OzeHOvafThngRFqb4DLFiAbIvqSMKrUV80o138C5wDi9adci87oz0EnMhNzIcd7CzO0Bju7Q1rK9yd07402SrMa190eDR2MmsRExT8Mb%2BNhuwAPVNmQr6Um9LDYP8QBT2%2Fot9rt0t0rPPUSEXxsCjPv38owWRMAc7QWEGoXbFlrWd5NZ1Pra3amR1aXAg6XZZkhEIbfG2suIRECVSIK6WG1eUT52YBAaFtgMW1ubqOQwarAZ7sHlpanhLl7ZF2vSQcBxCuskHzGcLc%2BSwa0fUk2HZmiqIFbimQEeRa7Ei%2FaKGwE7rQp%2Ba8d8Q9IF%2F7xmw19n8KmMIHM%2FRBdvNxQwgLGqdm0%2BqmkJpdkfEYY3MLav082oT9Hbvc40rtoxFy17R2WtAf%2FCFomVuVkFhS4n22IBo%2B9nq21iFU7QErdOmsaMlkQZNNahsUTXfz4OQIA7kc5flNhWsX%2FIQenS3piyQjQJq4LEvRt3MOvF7MMGOqUBiukB1VtD3Lm0Ddrxk5vWikUDSvI%2BLNzKBuy7xDMFFT7snRVBvNkXqoRLVCX8MDc7id%2Fy3DYZ80dgHZQmQU691ELdiAzdsGJmYgnK1kFKBHQ1msfbI5Qguh%2BkAJyN3SOkNj6nDfl9BHMfD3emNj86ViaTgfit%2FVTWcUrA6uO%2BoBqw7w9jwBe010zAq3PnX2wOlyTe3dt7qcmRCTmc%2BRjU8HLbd6c7&X-Amz-Signature=030961c8a0dfb69c61bbff4a67c04cd03c6a912c91650f6f489e4be45d9ecb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG7UPWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD8%2F83t%2BM2%2Fa0m%2BBVzBRvPvhwE13kmvqTmYlmvvxUsiAiEAxuOPB3L8UFStiYaF7C0aOmw7Ixb0jOAx66k6xzbTgK0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK4dtqhSAPjC5EhtCrcA2ycjXA4qd1b4tge9jEab%2B%2FPs9B2RSQqtzsuoGtiMM%2BXFHumzIyNFaGIapWIc%2BIOZe3GgV7z%2F%2FnpFAdYg%2BGYoaUgHL6tea6rfjxbOuxlCz71ixU6FQb33HPQofK7STZ3vfkzlFoMJ7t9nFNSVpqK4B4ZfDh5OzeHOvafThngRFqb4DLFiAbIvqSMKrUV80o138C5wDi9adci87oz0EnMhNzIcd7CzO0Bju7Q1rK9yd07402SrMa190eDR2MmsRExT8Mb%2BNhuwAPVNmQr6Um9LDYP8QBT2%2Fot9rt0t0rPPUSEXxsCjPv38owWRMAc7QWEGoXbFlrWd5NZ1Pra3amR1aXAg6XZZkhEIbfG2suIRECVSIK6WG1eUT52YBAaFtgMW1ubqOQwarAZ7sHlpanhLl7ZF2vSQcBxCuskHzGcLc%2BSwa0fUk2HZmiqIFbimQEeRa7Ei%2FaKGwE7rQp%2Ba8d8Q9IF%2F7xmw19n8KmMIHM%2FRBdvNxQwgLGqdm0%2BqmkJpdkfEYY3MLav082oT9Hbvc40rtoxFy17R2WtAf%2FCFomVuVkFhS4n22IBo%2B9nq21iFU7QErdOmsaMlkQZNNahsUTXfz4OQIA7kc5flNhWsX%2FIQenS3piyQjQJq4LEvRt3MOvF7MMGOqUBiukB1VtD3Lm0Ddrxk5vWikUDSvI%2BLNzKBuy7xDMFFT7snRVBvNkXqoRLVCX8MDc7id%2Fy3DYZ80dgHZQmQU691ELdiAzdsGJmYgnK1kFKBHQ1msfbI5Qguh%2BkAJyN3SOkNj6nDfl9BHMfD3emNj86ViaTgfit%2FVTWcUrA6uO%2BoBqw7w9jwBe010zAq3PnX2wOlyTe3dt7qcmRCTmc%2BRjU8HLbd6c7&X-Amz-Signature=96894794431390f5063f3287198a551987d540b0e0ae3526e3df709984b81b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCDE45ZP%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCPjGKoQ8Rk62Cr0NcQDqd8R6ma2scI3fRw30vg6fy3wIhAIbjk2AuQvGj0t8cNSVVbXAQilzOkshY9IfjdPnreazdKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyggCdoRFb5aCwxIUUq3AMY8OIHjP7TttsLIcoI%2B78%2FjJovIXywqiZ50AaJEdZneaCUiTt04sURDAhLSu1y2EalQIDbO9IfjHezV2iSXVwnG3k0SUFXGRyHBXmQHjolwZcKv4mHEeE74zUmzUhBF7DYFKQqrNk%2Brmwio%2FfXW1UUn7f4a3KvsDZ1%2Fl2cjOYXKwLF6q0BAQh7iWOMUO5fW%2FR0qkagwRfwTnsQH%2FBgNjbNIhHtEvcjG2Qg%2FgHIuE9U%2BxaFgtToj%2FBnHmp2BrYm52quKHfHzbCediPoQ%2Bbn6%2BOGSXCyvlK07CMCg1qs2lXuhLnzrNxCKBIagymQaGFQf7K3Aye1soOpjq7sW%2FznDzhnqK%2B1YyB4syfeQ0cP3LBnBvm6WLx%2FfP6NTL2AhuUPoTQmbSf7%2FeTqC%2F3fmaopChfpSN%2BaFeobmLHmnQG4KBuKJnrYkAgXStkEUhbL446F5vbMnD%2BBtjPXT1Ao%2Ft2h5ZOLheS5xswkWoaZF7ij8XqWAETKrMrRSGIFZZaAx4IWpZWjW9wSwqRfKD0VIUaTvJfMJC9vVUKUsRowx5kE%2BWDi5HK29lTGSEK7it3Ke742Jki0b3MD54HJfTPPIuNyu88VhPdkv2TNgQJa5XhqH4XQFV%2BanBokHnt9N%2BvqPzDaxezDBjqkAcjzxkuz745hhp8XGwKtL1Afo7SMUogCkQYvkWFNeBBQiy7r9UXIDUV%2BlZj%2BmCuVbejXeroDH%2BRekZ4JASqrSNENKx6uPS7WbLUEVjxRYnsw5Tk5%2BrRHFsp%2BfvbeJqHQPIvjbleYP%2FjvfSFP01afwEkwRVYncbz%2B%2Br4pBns8h%2BBhEVIrB3Ywa%2BFsEGq6qWLv3X0zVKhnUKeekP5fYMoQfCZ2GLbu&X-Amz-Signature=2da31836f2428243df69a611ea83fda753a33d3f8c7a1f25d4b9de53a3d24f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDJ7WPV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuSRbdeHwFhq15CIPWSGpUlUx9%2BhXmlcNUjZzpmzatYAiEA46p5m9fdFMX493FdDJAF3fUyfOiswFgEDjfuI8pkqmwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP96Nl%2FN9QpL%2FzRQFCrcAyykm5YqbrrnhuoQqhSHAPUPvz5M6vg0YVLbLgAWc5Y0RAI8USndoZa5Vrq3RDUzAwO6rMRu5SE%2BMiMfIOg2WgNzz704ZN6GEfqoLKTLbdyFdkJB8sZgVUtxpOcKbeqaucNWx9bcvVempK6c8k8auyBQpVWUW24d0Qve%2B%2FAhETzghAUJmRPldZDOvB%2BMElxJPBaHIuD9DRNDIx0YI3re9lVjOUOLOI35KE%2BFYn8A0AjDXlYvmrFwBNYrzQeJ7qtiB8KNzw8kicp2xtpBhpjIpN9UiIuxchO9%2FEEqrUwaUvBdVvvRMqfSn7RrkWYiVs6VpMjQ42UDIuJ0WbNTo%2B3h%2BoxfjmVft7RI%2BP594Y2i2O1wjRztgpDbYrUx4Tl3CQ9pcPSC2Wn2nJ3Z3T1UNP5MxJR%2FrFPLGDygsciTMFYarAuS17X%2FKpEg4KCokbjnAXwOa6J%2B%2B8drzLRlJTLCGrFBTHIZQ1S7b0ZUKcIyE%2BMfizTe9Uxk1L4W%2Fs2DFhk2SJuZAJ8Y%2FNnnvSTju1AYa%2FRHrXZjnfn5nXL7bq%2Bxcol2Q1sjN4qjqt9wdRA0guVvcjbg%2FpFMFT3renksTzCRqdXQpQNItQOsqUVBAqZnngpvFcUhc097Dkd3bOhMfMH4MPbF7MMGOqUBhHsVP2T1wIlnBjD3FNllexrPZHk8kUfPaFfp0Uyjl7wekpOspEUs432Z%2FucSHs5OJHAf8uBick5NoGWMK2anWXqY7RiRdVPVwy9V0GNBTJE0eALbBwsMytBxATfQADpR6AyR6qovUZJnhqpUv5dJxkvemfBd1cJbdWEBtofVrN8j6Q8kj5h3cPrnhp87hR3osLOnK7vjm2P0v%2BAOh1r5DBUG%2F2iH&X-Amz-Signature=3a73f6e7c5fc154f937ec52cb53d8b40d75b4a1bdf18320079bebf0da63276bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNG7UPWQ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD8%2F83t%2BM2%2Fa0m%2BBVzBRvPvhwE13kmvqTmYlmvvxUsiAiEAxuOPB3L8UFStiYaF7C0aOmw7Ixb0jOAx66k6xzbTgK0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK4dtqhSAPjC5EhtCrcA2ycjXA4qd1b4tge9jEab%2B%2FPs9B2RSQqtzsuoGtiMM%2BXFHumzIyNFaGIapWIc%2BIOZe3GgV7z%2F%2FnpFAdYg%2BGYoaUgHL6tea6rfjxbOuxlCz71ixU6FQb33HPQofK7STZ3vfkzlFoMJ7t9nFNSVpqK4B4ZfDh5OzeHOvafThngRFqb4DLFiAbIvqSMKrUV80o138C5wDi9adci87oz0EnMhNzIcd7CzO0Bju7Q1rK9yd07402SrMa190eDR2MmsRExT8Mb%2BNhuwAPVNmQr6Um9LDYP8QBT2%2Fot9rt0t0rPPUSEXxsCjPv38owWRMAc7QWEGoXbFlrWd5NZ1Pra3amR1aXAg6XZZkhEIbfG2suIRECVSIK6WG1eUT52YBAaFtgMW1ubqOQwarAZ7sHlpanhLl7ZF2vSQcBxCuskHzGcLc%2BSwa0fUk2HZmiqIFbimQEeRa7Ei%2FaKGwE7rQp%2Ba8d8Q9IF%2F7xmw19n8KmMIHM%2FRBdvNxQwgLGqdm0%2BqmkJpdkfEYY3MLav082oT9Hbvc40rtoxFy17R2WtAf%2FCFomVuVkFhS4n22IBo%2B9nq21iFU7QErdOmsaMlkQZNNahsUTXfz4OQIA7kc5flNhWsX%2FIQenS3piyQjQJq4LEvRt3MOvF7MMGOqUBiukB1VtD3Lm0Ddrxk5vWikUDSvI%2BLNzKBuy7xDMFFT7snRVBvNkXqoRLVCX8MDc7id%2Fy3DYZ80dgHZQmQU691ELdiAzdsGJmYgnK1kFKBHQ1msfbI5Qguh%2BkAJyN3SOkNj6nDfl9BHMfD3emNj86ViaTgfit%2FVTWcUrA6uO%2BoBqw7w9jwBe010zAq3PnX2wOlyTe3dt7qcmRCTmc%2BRjU8HLbd6c7&X-Amz-Signature=90545deba89b0ab7d5b564148feafb8d04962b290964fd0797910013c1c1d8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
