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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LL36PUK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICH0sEf8W1fLFT9qWVfoO4akU3S%2Fc5YZQyh%2BlPhx3%2BVoAiEA5u1npuqrlG%2BSE0Ylrql3VVDKsyjjjUNF2DoHxIy80FMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFVFAwDRYZFF5VA9jCrcA59SRaNY4BxlaTRD%2FkgZv5trdWTTxX1CggJ2BzqRUEGCGyKFSe6dPe%2F4LY92kLDsD3utn7ZfSasZHHQU8Bgv759zCqr2TrhpSSwZrvUZjDLGjIVCJC4DQMpTQlW%2BpXpmvBbaSzKPP8PrF%2FEQnPHulYdVAHAwe22w7EIrhubQce%2FIK5qTPCKwjbvticWwvELuysw5IFZ9DI8pAQP1X1t2hv8yfY9AN07rmOPq3RYH%2Fw%2FvK1JqEejBQ5kCG9LfChXohVaEJDMtzp0w%2Bz0lKv2RIkq%2FERMZ8tdBT6pULM0k6EEuy%2B0LcuwFA7SBVRF3MTXwbFMdZKwxeUgDcGPEF8RHD6AJDvhN0Hd7PJDR3etnZMF0viXmlsmvfAa3EvkEB6wYh1CgcXPC1pKw1ng%2Fpporvbs5TNEEr6qvGjTwBkqmEGb7R9fu%2FS8BKOy4enkYB%2BRt1aAsZ9V7mwO7CAwXo9ElMXc7%2Fg82lg0w4g7XGIWX3F%2FoRHhmj8b8H8RsuPT5yMlCcwByyFiM%2B0ga8MYqK9Qpi%2F%2Br2RM%2FirOtfCRYtQUQH28fbwYcADyATJWrMjrd0TA8uApglmYgsQaiUQQkDkWdGTn3FT0BxwT%2FYMpeUzgN0YYDIPzLydS7gjbSth7kMM3u78IGOqUBHi53AKa8ZbdSZeQGq38rXS8H7lzUtv3FAIJ6neQZjlrOXSQXM5cLKeUL8NxrwJQCsy6LtlHthNKBuQdpJ82Mf7C6nSyjOIv%2BjVH91yQG65VBW%2By7%2FZT0UzOMWkUJstvyMxEqEMLe6tA6uT8dfzbzqUWMZjCnAwRwV9q%2BtSuOF%2B4ANZbXed5ST8MmR6WjRv7LMGZfLTPMx33Rp3nvxrmLT8AIU74T&X-Amz-Signature=445ab3ef07b6bf1da09af53fc44af63c19c7f3f6c42713f8805487d2e238bde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LL36PUK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICH0sEf8W1fLFT9qWVfoO4akU3S%2Fc5YZQyh%2BlPhx3%2BVoAiEA5u1npuqrlG%2BSE0Ylrql3VVDKsyjjjUNF2DoHxIy80FMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFVFAwDRYZFF5VA9jCrcA59SRaNY4BxlaTRD%2FkgZv5trdWTTxX1CggJ2BzqRUEGCGyKFSe6dPe%2F4LY92kLDsD3utn7ZfSasZHHQU8Bgv759zCqr2TrhpSSwZrvUZjDLGjIVCJC4DQMpTQlW%2BpXpmvBbaSzKPP8PrF%2FEQnPHulYdVAHAwe22w7EIrhubQce%2FIK5qTPCKwjbvticWwvELuysw5IFZ9DI8pAQP1X1t2hv8yfY9AN07rmOPq3RYH%2Fw%2FvK1JqEejBQ5kCG9LfChXohVaEJDMtzp0w%2Bz0lKv2RIkq%2FERMZ8tdBT6pULM0k6EEuy%2B0LcuwFA7SBVRF3MTXwbFMdZKwxeUgDcGPEF8RHD6AJDvhN0Hd7PJDR3etnZMF0viXmlsmvfAa3EvkEB6wYh1CgcXPC1pKw1ng%2Fpporvbs5TNEEr6qvGjTwBkqmEGb7R9fu%2FS8BKOy4enkYB%2BRt1aAsZ9V7mwO7CAwXo9ElMXc7%2Fg82lg0w4g7XGIWX3F%2FoRHhmj8b8H8RsuPT5yMlCcwByyFiM%2B0ga8MYqK9Qpi%2F%2Br2RM%2FirOtfCRYtQUQH28fbwYcADyATJWrMjrd0TA8uApglmYgsQaiUQQkDkWdGTn3FT0BxwT%2FYMpeUzgN0YYDIPzLydS7gjbSth7kMM3u78IGOqUBHi53AKa8ZbdSZeQGq38rXS8H7lzUtv3FAIJ6neQZjlrOXSQXM5cLKeUL8NxrwJQCsy6LtlHthNKBuQdpJ82Mf7C6nSyjOIv%2BjVH91yQG65VBW%2By7%2FZT0UzOMWkUJstvyMxEqEMLe6tA6uT8dfzbzqUWMZjCnAwRwV9q%2BtSuOF%2B4ANZbXed5ST8MmR6WjRv7LMGZfLTPMx33Rp3nvxrmLT8AIU74T&X-Amz-Signature=a64545fac4b39f048f59f02a77b48067591f9539a445d816d77a26e8bf59aad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LL36PUK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICH0sEf8W1fLFT9qWVfoO4akU3S%2Fc5YZQyh%2BlPhx3%2BVoAiEA5u1npuqrlG%2BSE0Ylrql3VVDKsyjjjUNF2DoHxIy80FMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFVFAwDRYZFF5VA9jCrcA59SRaNY4BxlaTRD%2FkgZv5trdWTTxX1CggJ2BzqRUEGCGyKFSe6dPe%2F4LY92kLDsD3utn7ZfSasZHHQU8Bgv759zCqr2TrhpSSwZrvUZjDLGjIVCJC4DQMpTQlW%2BpXpmvBbaSzKPP8PrF%2FEQnPHulYdVAHAwe22w7EIrhubQce%2FIK5qTPCKwjbvticWwvELuysw5IFZ9DI8pAQP1X1t2hv8yfY9AN07rmOPq3RYH%2Fw%2FvK1JqEejBQ5kCG9LfChXohVaEJDMtzp0w%2Bz0lKv2RIkq%2FERMZ8tdBT6pULM0k6EEuy%2B0LcuwFA7SBVRF3MTXwbFMdZKwxeUgDcGPEF8RHD6AJDvhN0Hd7PJDR3etnZMF0viXmlsmvfAa3EvkEB6wYh1CgcXPC1pKw1ng%2Fpporvbs5TNEEr6qvGjTwBkqmEGb7R9fu%2FS8BKOy4enkYB%2BRt1aAsZ9V7mwO7CAwXo9ElMXc7%2Fg82lg0w4g7XGIWX3F%2FoRHhmj8b8H8RsuPT5yMlCcwByyFiM%2B0ga8MYqK9Qpi%2F%2Br2RM%2FirOtfCRYtQUQH28fbwYcADyATJWrMjrd0TA8uApglmYgsQaiUQQkDkWdGTn3FT0BxwT%2FYMpeUzgN0YYDIPzLydS7gjbSth7kMM3u78IGOqUBHi53AKa8ZbdSZeQGq38rXS8H7lzUtv3FAIJ6neQZjlrOXSQXM5cLKeUL8NxrwJQCsy6LtlHthNKBuQdpJ82Mf7C6nSyjOIv%2BjVH91yQG65VBW%2By7%2FZT0UzOMWkUJstvyMxEqEMLe6tA6uT8dfzbzqUWMZjCnAwRwV9q%2BtSuOF%2B4ANZbXed5ST8MmR6WjRv7LMGZfLTPMx33Rp3nvxrmLT8AIU74T&X-Amz-Signature=975a33e9b3347c7f954ec722c68f97c273dcdf2e6e39368d4998895ef8294d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4B4EZQK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGCJpBElvjJQuMBnU%2Bt5HZGypwn7aw%2BbVTS8M8kwIle0AiBm4pROCHWJ9Hx88i7WTutnSwTJk5eIU4x0%2BNT09lDn3yr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMTVCQzfRLjFzZkTIzKtwDuKLa67%2BOm8mKDM3IWlI%2BzonzkOX598ppkFvHk7wXfZ8UPJa8lCsJ5dqUwvbKB4%2BF6iP0ITe03uOgXqrKYRWWMwasawRjKS3RAF79ck%2BZxTrSxNI1dvGat6mtbBLgFeu3EpjW0386Zvfv9Dgx2ME%2B8ixd3RJYGV6%2F4TKU27tjH5whrh%2BhRRmA5aF%2Bcw7bhnPr9B5NPtKl7D%2BxC9TpHh%2F3txhnNZS9fNNExKmsWQoZg3Ve4pTF8wPRxEa85wEg4O31%2BB4aT%2FCGN3TDEM3mDrnHIdmEG2jzT%2BZp8Wy6n7d01zdQjY8GJEzMLnDbmH%2FVCe5CNCCzA6X5caOlDm%2FFLrrHs1i45GloboWb8yNuLx%2BzzKIGW3L%2FJB6Yr0ZPx4XC0UqD%2BgWOIyQBFvlUEMxuqeAkEvVfv7HGmeJw2PpgfnrDgfOV2x%2Bpwx%2FG3lKFpQcDyfxnbNPCPInIFColKLxtybiuoNBq09JcEDLf%2Bj70qStXHksdHEflj3q6MbuD9riWoBJayKzPrtEMz4qD38HLgT%2F1J0HG02maPIwvhzWuuN1V3jRzT1%2FeVG9D8E09yejvQAxc8sjbYLRE9KpjXXdiCS8wrcz%2BCkXy6pjxT8WnUvAneq0DsZPngPXufyhrSU4wh7%2FwwgY6pgFWGmlRp9tlLLFxy71cCyvZZRi0UgEnA5fXfM7L7%2FcuXAL9ENVQU5OFRyyDqhVoeCgOv2Z5tiHrornWoSC5%2Bus6yyIQrAavnFKims8pj1%2BRNZg87eLzTmLazy%2FiuUZuZxa006YPMFft3YhVIHOCKFekhPMmCkyB3UOWw20PI192do5J1aLlWhf2TUojkUFJrixFDdTou3C8%2FHzu9HG8HBwtqpGBTHZ3&X-Amz-Signature=510e3cf146736c9f232e3eac07b9e4ac32f1a9abde542b457c548dfe8a4599a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEEQ5EU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDdy%2FHnVmgJ82%2BKitoeipNY61AjyKYY%2BoR4LHdIUYzqSgIgL1skUDgkz2Cp2I91nBkmtzwFd1WNDHrH2vHOjKDvS4oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDEE%2B8LeqkFRxH0JSGCrcAw%2F7vkcwI14wNd0pLa9SmaRfhr7Y3Up1MVtLV6zxF%2BdOBptcuPvWvYxeva2GIi%2F%2F6vhv9tOpKr2LqUoYq4VjKpHCfbQ0X6AujfkYfrOyWli2U0aFvaFcCC6Q6%2FkuXoQ%2F7vDsOHnHMrxLHYLwSAUYDxCFXYil8MFaM2Vqahl9zHvIKmzJGA5T1mNI5W74hrQ7qfQbJBD96e4O0XYUzyUb5qxv2XTAtPli7bWtmUW9rGE18zre8MHbw2KS2ECh6WFq91cVP1GGixEFn%2FO8w0NPmig1SZVzmc0Cb%2FuiqsWLNuJnpkXN%2BdAJWdQAbmuIio8wzFXxEFXcla8LFsna0wIaghPLb9xvX2PN%2FR7TFDZzX8daiN4oJzZjWTN3etluslARhQNn3Zl%2Fw9rxuXAW6yAyQqrHd7Q%2BnBmH%2BtYiLIhfe8dh4uJ9ctAMWwgPs79qVsrx7aXHchsjhTIgCs3jwyxg6vjXXKA1%2FAFmuigtEPowUKPUvDiRDh7SM0BzQOkRAbUB2DPc6tkt%2BK1nZS85wjOoePNxRCT9Kc%2BeiAq4xiXUAxo0poEsQEPOEOdIXSztx47LOYnEWPhCsxDXzzuZpOO6Zp16dRsT40IBnPIYjwyzYz1xRuJXk0CrYvqqhBD%2FMIy78MIGOqUB7hn2sqLBhC5a5JUHv2tUjPiAxqVcyVig46TluMpQuB9qxDBPcgiqihmCzoFGynavqM3H7vuPZhmqSo40o7VwLV3ng0WyH0VMKqEBYH9T682d%2BD1ySfpVX5kCEXmuugrFURSoF74U4m0tl7stvBKdMarwO3Fg0Wn6mTBosk1GgQSOOtSKLp3ql9vakQJQxqUPle0rMnuyN5TgtO%2FObkptHbHyUjy2&X-Amz-Signature=ed222bee5519cceeda98eb1977ab248c1a35f6d1c0e20381d509ba7163060bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LL36PUK%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICH0sEf8W1fLFT9qWVfoO4akU3S%2Fc5YZQyh%2BlPhx3%2BVoAiEA5u1npuqrlG%2BSE0Ylrql3VVDKsyjjjUNF2DoHxIy80FMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFVFAwDRYZFF5VA9jCrcA59SRaNY4BxlaTRD%2FkgZv5trdWTTxX1CggJ2BzqRUEGCGyKFSe6dPe%2F4LY92kLDsD3utn7ZfSasZHHQU8Bgv759zCqr2TrhpSSwZrvUZjDLGjIVCJC4DQMpTQlW%2BpXpmvBbaSzKPP8PrF%2FEQnPHulYdVAHAwe22w7EIrhubQce%2FIK5qTPCKwjbvticWwvELuysw5IFZ9DI8pAQP1X1t2hv8yfY9AN07rmOPq3RYH%2Fw%2FvK1JqEejBQ5kCG9LfChXohVaEJDMtzp0w%2Bz0lKv2RIkq%2FERMZ8tdBT6pULM0k6EEuy%2B0LcuwFA7SBVRF3MTXwbFMdZKwxeUgDcGPEF8RHD6AJDvhN0Hd7PJDR3etnZMF0viXmlsmvfAa3EvkEB6wYh1CgcXPC1pKw1ng%2Fpporvbs5TNEEr6qvGjTwBkqmEGb7R9fu%2FS8BKOy4enkYB%2BRt1aAsZ9V7mwO7CAwXo9ElMXc7%2Fg82lg0w4g7XGIWX3F%2FoRHhmj8b8H8RsuPT5yMlCcwByyFiM%2B0ga8MYqK9Qpi%2F%2Br2RM%2FirOtfCRYtQUQH28fbwYcADyATJWrMjrd0TA8uApglmYgsQaiUQQkDkWdGTn3FT0BxwT%2FYMpeUzgN0YYDIPzLydS7gjbSth7kMM3u78IGOqUBHi53AKa8ZbdSZeQGq38rXS8H7lzUtv3FAIJ6neQZjlrOXSQXM5cLKeUL8NxrwJQCsy6LtlHthNKBuQdpJ82Mf7C6nSyjOIv%2BjVH91yQG65VBW%2By7%2FZT0UzOMWkUJstvyMxEqEMLe6tA6uT8dfzbzqUWMZjCnAwRwV9q%2BtSuOF%2B4ANZbXed5ST8MmR6WjRv7LMGZfLTPMx33Rp3nvxrmLT8AIU74T&X-Amz-Signature=16f534af8f79bd3173321552cd1cb1f9fc552ea0b38bd7c4fccb94def811df8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
