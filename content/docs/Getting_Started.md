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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNRVOL5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHMG%2Bx7vhQSheIZ9hWtc2ghj7Qq5dTjlzcB6I9aXFvEPAiBF%2FEFKlHgNimpsBl8v5WHn2GFMqhIWI8KFnHgbmM%2BS%2FyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgRJ8rYb4SHYaInrKtwDoHN5%2F%2BVciWeG37ZMJa%2FP2yVQFp70TOxPYUJUB2%2BcthBI08AJZqGh%2B7iPcJf8D2r8cF9Zxt3D%2FI%2FXcXqTLzh%2BItL4vtu%2Bxy7f6ZCB9TluI6liTWFuYUCqN9Yn62rm9rDPGn8PYWGJKS6f8bCZ9bkqFgizR2RclvbAQUGBDpSmGakfHASEAOcyIPIkl9Mjl0qWFCAj0kWdjmLA0lYye%2F0z%2Fk%2BW4eFXemmQ5P1kgDecPOA%2BzU7DYtBho2K35pbera6BqDR0%2BKqEHE0Vt35TMxAm7vV8BXySpS1p4gE8ENRxKJbVuQjt3hx%2FWF0XRHxRs2MnNUzYFgkDkI%2BqRIjUWqZRjTpw5Y2IxWf6SEhGlQo1KKBBr8wQZ5d%2Fa3n9NfVi6UylKwBWusvTESJ6cMgIIqF97QmfaiKK1a%2ByspcoaEcWzFPnO%2BBWcEOl5OsHwjOayJcljg8K0c202FaUJcwLvX0mZKlCKV3UbCy5HHSlNbIg8E7vM6z0n99cZDOa6%2FDZayLyk%2BUd%2FnNyTPHqzMqQ2igg1OnDUdwD0xamBUDHziwD87hr4CUV5cZL0CKgX7Itq%2BrQlEfnfoc%2B%2BDpIqdelQViGwJwaJTsOSsu8Inp1sMOPIXL174lSDoQEWBpGOjYw0M7BvgY6pgHy%2BqFCLxOMkv1nRJEUWP2q0QqH4Z0tWP8hWlpTWqNLMNJPmj31ZdY0w36HuEQiHkM%2FhL3QyLPPUvMseLidU062K%2FKIFCoWbOhXM1TV9%2FwXLDgWlpocfWplDwjVMDrS2dR%2FIZCTZXKAzoIQrFmFkDoV5XeDG9j7CaVyueYPkxUftWcw60GhtZtbN7sk2LFLyKMK99dHprbtBfCrd52pfbmCphDNj0Fu&X-Amz-Signature=2522b8794b9016429ecc6d2ac4ba235c86f3e1b403273aa83d137560a0228172&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNRVOL5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHMG%2Bx7vhQSheIZ9hWtc2ghj7Qq5dTjlzcB6I9aXFvEPAiBF%2FEFKlHgNimpsBl8v5WHn2GFMqhIWI8KFnHgbmM%2BS%2FyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgRJ8rYb4SHYaInrKtwDoHN5%2F%2BVciWeG37ZMJa%2FP2yVQFp70TOxPYUJUB2%2BcthBI08AJZqGh%2B7iPcJf8D2r8cF9Zxt3D%2FI%2FXcXqTLzh%2BItL4vtu%2Bxy7f6ZCB9TluI6liTWFuYUCqN9Yn62rm9rDPGn8PYWGJKS6f8bCZ9bkqFgizR2RclvbAQUGBDpSmGakfHASEAOcyIPIkl9Mjl0qWFCAj0kWdjmLA0lYye%2F0z%2Fk%2BW4eFXemmQ5P1kgDecPOA%2BzU7DYtBho2K35pbera6BqDR0%2BKqEHE0Vt35TMxAm7vV8BXySpS1p4gE8ENRxKJbVuQjt3hx%2FWF0XRHxRs2MnNUzYFgkDkI%2BqRIjUWqZRjTpw5Y2IxWf6SEhGlQo1KKBBr8wQZ5d%2Fa3n9NfVi6UylKwBWusvTESJ6cMgIIqF97QmfaiKK1a%2ByspcoaEcWzFPnO%2BBWcEOl5OsHwjOayJcljg8K0c202FaUJcwLvX0mZKlCKV3UbCy5HHSlNbIg8E7vM6z0n99cZDOa6%2FDZayLyk%2BUd%2FnNyTPHqzMqQ2igg1OnDUdwD0xamBUDHziwD87hr4CUV5cZL0CKgX7Itq%2BrQlEfnfoc%2B%2BDpIqdelQViGwJwaJTsOSsu8Inp1sMOPIXL174lSDoQEWBpGOjYw0M7BvgY6pgHy%2BqFCLxOMkv1nRJEUWP2q0QqH4Z0tWP8hWlpTWqNLMNJPmj31ZdY0w36HuEQiHkM%2FhL3QyLPPUvMseLidU062K%2FKIFCoWbOhXM1TV9%2FwXLDgWlpocfWplDwjVMDrS2dR%2FIZCTZXKAzoIQrFmFkDoV5XeDG9j7CaVyueYPkxUftWcw60GhtZtbN7sk2LFLyKMK99dHprbtBfCrd52pfbmCphDNj0Fu&X-Amz-Signature=a874e9e9eec21a3c7d88d10420a5dcd02e1af60da65ee65135eec197f068e8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DH6XF23%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEhscdOipcmEDH9x%2BUoLK%2BOa0eOrtvXxNN%2FMw8t1VNWRAiEAlreR%2FQEf6VCDykiYjYnreW3Lwe3qb7eUMrSCizXHtOQqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAskFpfau5flscdWMCrcA3ency3Y%2BA8rERWOkhd3CLqqPOcNgQLOuHVgv%2BotXd%2ByAW5Fb%2FdjFH7BARyHEteP1JLQno1HX19A4s%2FM5Jv5F663TfpQ0VI8rG3X6gNRfBUB1MOg0YHQkUCG1MTwV3eJ3TqFdN7llRu7wI5yWOFogGpuz%2B7EHFLdbKQ1jHxa118i4UUP%2BHj3i%2BaKclJfkkoVpCfPw25I4oM9QYyQN0khB1EGEQYHaCDnpIeurHSotgAc3tsOqtovR0fkXkGLNKqHYcAvN8hOTgsefeV5ZkkUVF7AtMbd4l2TDONxYUPUBNogIBZVcDTA%2F8gy5lpu%2FZRT3pRtvCidRhQVO6atuqk%2Bo8xZnSj5VadGAfMx5uRgYRALGfqZp1a%2Fc66d03BnwVt3fq1czgGx7Xof%2BzzuSHTvdIbP2oli0dZ%2B7FDHR39cuKJutmO6TJFMctvVZvPFV2xf1rT1yfMWdtUJOaLwWSytlefPIzOH9f5gGVNIr7yAYoRDCobRKmDb6lFdYltyJUTvmFwk%2BENtwbDDyqobXNIJ13XXYUwIf6wHKU6JOyvhGlwjjG9FK7JnEb4LfN4scuWEB%2Bo5Fk0605%2FD1hg%2FecAmseF8sbEEjQdQK%2FyJMCMprlC9ZM6sDStsGg9UIThWMOrOwb4GOqUBILmF%2B2lIlD8zKVfxyqvdghnELwAHX4PdQRURUOOiG6KeR8Ha1Cse8t96xKsI943hwv%2BM1QNSvjNpJcIPxdp3oYhihgnvPo%2BHghtkkSYT3MkHSWJcp9PMs%2BAWMKvcpbfy89DzquG5Gx15QTJFPGA%2BJ9E1ZVWWf3EvE5f5cL8T9jJiEpAxW8pvWgmin%2FVin5dxIrtERXkbDpDqSjnGVcjv7C8a2h66&X-Amz-Signature=c8455bc31e221d904d39fe83edbd3ae33bbc7e293a6bcb65735cc86383cf1554&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IDTSFV%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHvNjb14ZRCLljyX%2FbHutEMu480bhctf7egXvA2d%2FN2CAiEAqu6MAFC1GyUiSaJOrxBHrtQS%2FiuI1atdzeYSZmyjB64qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8%2FgWL3ShK2yjsr3yrcA2%2B1clA1dpxfQx1I1jiqHbK4hXxC6lS6UD8vBUqxkFFd%2BL6thnN4rxvt7hFyve4GW5NdM8BtV5vWjr0m9c%2FiiD9LG08FeMA8fMk9ni%2FNGYD5aVPt5S3Luxu3DF9R4SFuN%2Ba4rvh1eEzzwJstG7FE1c%2Bwl%2FwQxH0OM05LINaON7vHTWgUvGHHvaGe6%2BJvOuI5SKvDn7IotULf7LGzyY5epEHJQKCN9T8OSix8hLXejsG1qPQTgh14%2FLZzFBBFIgZcfnwZu771oK2WHLmGDjaV5p75fjAxjvXZuAcFBRXyLUHDzPkrFL0QVyihjmT7slb%2FarUpYrtHwANOD5pMFKeojmcazP%2Boqq%2FAuXMeEW%2FDpQqbgBGY0J%2BEk1Vg46dOCFPcGuGDD%2Fiw7n5xkfikjvkhPOydVnqTgM%2Fi%2FZP%2FEcN%2FBPr46qQ1sHK7Qwz2JiLI5fBqQK6IlMCcau81RPcb1jRBFKaqLNf0EBw%2B%2F%2BVhxnxQRRQTa7AH8ICvoNQio%2Fjdv6F9erEtpOEFIYRHv08XHExd%2BzQeatiSdev6ctwQYWUd4ScyihQkr%2FbuQL4HW1DNcSJmZmINp7bp2BLX6KWCeJ%2Fx4y3Ai5ZDysyVl9AJ9YKTZ8fjwACxlsED93Mmt5PLMPvOwb4GOqUBlXpe71kkJS0IQdaucMEGKqk0PQFDEbMRrEAHe13goKLk8wO69HWG1qPGqnAFKHrXIT7GWHpYy5cbLj8vGJTns7O3Fa7yv0gf2XiK00d4%2F0UQUCGIcFRNBf3evHrsVjdgwIhT2aow6rP8uCnTolNNfGxER4bRfQBxMITLfwOmVvGicdfY5ksqzDKnoJss9WTHSrkWndJtIW6UmFeSoOoa7%2Bh3bYWT&X-Amz-Signature=0831393c76f226aa3e45d8d9d7917b43e408aa8cb156f36593e619eccc1add77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDNRVOL5%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHMG%2Bx7vhQSheIZ9hWtc2ghj7Qq5dTjlzcB6I9aXFvEPAiBF%2FEFKlHgNimpsBl8v5WHn2GFMqhIWI8KFnHgbmM%2BS%2FyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgRJ8rYb4SHYaInrKtwDoHN5%2F%2BVciWeG37ZMJa%2FP2yVQFp70TOxPYUJUB2%2BcthBI08AJZqGh%2B7iPcJf8D2r8cF9Zxt3D%2FI%2FXcXqTLzh%2BItL4vtu%2Bxy7f6ZCB9TluI6liTWFuYUCqN9Yn62rm9rDPGn8PYWGJKS6f8bCZ9bkqFgizR2RclvbAQUGBDpSmGakfHASEAOcyIPIkl9Mjl0qWFCAj0kWdjmLA0lYye%2F0z%2Fk%2BW4eFXemmQ5P1kgDecPOA%2BzU7DYtBho2K35pbera6BqDR0%2BKqEHE0Vt35TMxAm7vV8BXySpS1p4gE8ENRxKJbVuQjt3hx%2FWF0XRHxRs2MnNUzYFgkDkI%2BqRIjUWqZRjTpw5Y2IxWf6SEhGlQo1KKBBr8wQZ5d%2Fa3n9NfVi6UylKwBWusvTESJ6cMgIIqF97QmfaiKK1a%2ByspcoaEcWzFPnO%2BBWcEOl5OsHwjOayJcljg8K0c202FaUJcwLvX0mZKlCKV3UbCy5HHSlNbIg8E7vM6z0n99cZDOa6%2FDZayLyk%2BUd%2FnNyTPHqzMqQ2igg1OnDUdwD0xamBUDHziwD87hr4CUV5cZL0CKgX7Itq%2BrQlEfnfoc%2B%2BDpIqdelQViGwJwaJTsOSsu8Inp1sMOPIXL174lSDoQEWBpGOjYw0M7BvgY6pgHy%2BqFCLxOMkv1nRJEUWP2q0QqH4Z0tWP8hWlpTWqNLMNJPmj31ZdY0w36HuEQiHkM%2FhL3QyLPPUvMseLidU062K%2FKIFCoWbOhXM1TV9%2FwXLDgWlpocfWplDwjVMDrS2dR%2FIZCTZXKAzoIQrFmFkDoV5XeDG9j7CaVyueYPkxUftWcw60GhtZtbN7sk2LFLyKMK99dHprbtBfCrd52pfbmCphDNj0Fu&X-Amz-Signature=e155739467ef9cad88104e4062eeafcb3cb0c243223f6d244d96238b82c71ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
