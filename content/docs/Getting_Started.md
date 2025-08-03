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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBM2TK7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCOdByUCSzY%2BzUt9N%2FcytFbuX7SpvtVgGM15vVzCB7kAiB9uVfj8YgngTCbstZ7hHOvXg0NeErDKOIdCJ%2BNuvuOjCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSFCs8FM6fAbUsw8vKtwDm%2BB11XmXiswtTODjX9CzyCDvkuKDGPqHUUzktOnh%2Bkj0ztlLZQ%2B8czgKa%2BfV6Yszb4JXuKfFrQ9%2FXoeHtr6G5p88Qn9ekYaVIdsN%2BIhbwYHOlJteN3D9kow8dvvKHIyT8whjLpdL1DA1Q0jdQ%2FfAPm8IEYL%2FjGdD6pF%2B7eFeCdeh6fB79Rn6%2Fdv7BwDfdyrxusR1KHR3kTW191GeEFvIsgZi%2BZKN%2FR7Fhbbgcm8mFqm%2FXKjPdrImD6OK%2FZmw00SBFFi3TaCmiCaql6BOYvBPoVwr%2B9AklLQuXKg3bg6H6whTTcHk9g4%2Fx0Db8ukzW08Et6%2B6KUTbVy5%2B3iEmbP7roSKth%2FwhJma3iNEjvXssPvc%2FxEPcIOkq%2BvSDGT3E5rSUmNaTmFAlxpXfGeRGSgrrLzrTMGMao%2FsAyYhDiYgh7%2FgVm5TY32YHAMcZBQ88j%2FJLrKcB0VI5f0WixRJe%2FbU0%2BAHKNmRC2Ji75NzCwPsPoS7%2FRaOxWli2PZsXmVE%2FdvyhGx3vvrFJIi25Czls5eeKJC%2FAfRlPk89cZd%2FCP1iwRztZ6XpaNnEJZt2vS7O7VZ010pm%2FtD7q7a%2BQV3z%2BVhMPFbqGkXe2x07dsh8LLgSRFT%2B%2FoAtUmvNweKptDcgwgqe7xAY6pgHEDV2bq3h1Uw6zowDEH9wiHJCt1oO5y1XdyDTBuVW48Y5lQoKcvdzXIlsn9nXHCf25jniZI0CPdsww%2FkNNjxgM2LAWRe%2BDQTVDrqTNyGrdpEzkwjfU5yd63eoRDfyN%2BI%2BGLNlJmyNC3Tceo0xkWz7%2FhzxYMr%2BuG5alGf%2FvoLuGnzd6RLTppop5ltvPwwP3bnLXuQ4IAHW4z%2Fa3IRzf9lalsofmD0Zi&X-Amz-Signature=b84291f113f0c8bd91eae5c77d303f2e44b2a43bddd762803207067474fc74e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBM2TK7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCOdByUCSzY%2BzUt9N%2FcytFbuX7SpvtVgGM15vVzCB7kAiB9uVfj8YgngTCbstZ7hHOvXg0NeErDKOIdCJ%2BNuvuOjCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSFCs8FM6fAbUsw8vKtwDm%2BB11XmXiswtTODjX9CzyCDvkuKDGPqHUUzktOnh%2Bkj0ztlLZQ%2B8czgKa%2BfV6Yszb4JXuKfFrQ9%2FXoeHtr6G5p88Qn9ekYaVIdsN%2BIhbwYHOlJteN3D9kow8dvvKHIyT8whjLpdL1DA1Q0jdQ%2FfAPm8IEYL%2FjGdD6pF%2B7eFeCdeh6fB79Rn6%2Fdv7BwDfdyrxusR1KHR3kTW191GeEFvIsgZi%2BZKN%2FR7Fhbbgcm8mFqm%2FXKjPdrImD6OK%2FZmw00SBFFi3TaCmiCaql6BOYvBPoVwr%2B9AklLQuXKg3bg6H6whTTcHk9g4%2Fx0Db8ukzW08Et6%2B6KUTbVy5%2B3iEmbP7roSKth%2FwhJma3iNEjvXssPvc%2FxEPcIOkq%2BvSDGT3E5rSUmNaTmFAlxpXfGeRGSgrrLzrTMGMao%2FsAyYhDiYgh7%2FgVm5TY32YHAMcZBQ88j%2FJLrKcB0VI5f0WixRJe%2FbU0%2BAHKNmRC2Ji75NzCwPsPoS7%2FRaOxWli2PZsXmVE%2FdvyhGx3vvrFJIi25Czls5eeKJC%2FAfRlPk89cZd%2FCP1iwRztZ6XpaNnEJZt2vS7O7VZ010pm%2FtD7q7a%2BQV3z%2BVhMPFbqGkXe2x07dsh8LLgSRFT%2B%2FoAtUmvNweKptDcgwgqe7xAY6pgHEDV2bq3h1Uw6zowDEH9wiHJCt1oO5y1XdyDTBuVW48Y5lQoKcvdzXIlsn9nXHCf25jniZI0CPdsww%2FkNNjxgM2LAWRe%2BDQTVDrqTNyGrdpEzkwjfU5yd63eoRDfyN%2BI%2BGLNlJmyNC3Tceo0xkWz7%2FhzxYMr%2BuG5alGf%2FvoLuGnzd6RLTppop5ltvPwwP3bnLXuQ4IAHW4z%2Fa3IRzf9lalsofmD0Zi&X-Amz-Signature=2b1b9331bb38359116f3535836917f4771ac56dab44f49d41987b14f0dc32a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBM2TK7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCOdByUCSzY%2BzUt9N%2FcytFbuX7SpvtVgGM15vVzCB7kAiB9uVfj8YgngTCbstZ7hHOvXg0NeErDKOIdCJ%2BNuvuOjCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSFCs8FM6fAbUsw8vKtwDm%2BB11XmXiswtTODjX9CzyCDvkuKDGPqHUUzktOnh%2Bkj0ztlLZQ%2B8czgKa%2BfV6Yszb4JXuKfFrQ9%2FXoeHtr6G5p88Qn9ekYaVIdsN%2BIhbwYHOlJteN3D9kow8dvvKHIyT8whjLpdL1DA1Q0jdQ%2FfAPm8IEYL%2FjGdD6pF%2B7eFeCdeh6fB79Rn6%2Fdv7BwDfdyrxusR1KHR3kTW191GeEFvIsgZi%2BZKN%2FR7Fhbbgcm8mFqm%2FXKjPdrImD6OK%2FZmw00SBFFi3TaCmiCaql6BOYvBPoVwr%2B9AklLQuXKg3bg6H6whTTcHk9g4%2Fx0Db8ukzW08Et6%2B6KUTbVy5%2B3iEmbP7roSKth%2FwhJma3iNEjvXssPvc%2FxEPcIOkq%2BvSDGT3E5rSUmNaTmFAlxpXfGeRGSgrrLzrTMGMao%2FsAyYhDiYgh7%2FgVm5TY32YHAMcZBQ88j%2FJLrKcB0VI5f0WixRJe%2FbU0%2BAHKNmRC2Ji75NzCwPsPoS7%2FRaOxWli2PZsXmVE%2FdvyhGx3vvrFJIi25Czls5eeKJC%2FAfRlPk89cZd%2FCP1iwRztZ6XpaNnEJZt2vS7O7VZ010pm%2FtD7q7a%2BQV3z%2BVhMPFbqGkXe2x07dsh8LLgSRFT%2B%2FoAtUmvNweKptDcgwgqe7xAY6pgHEDV2bq3h1Uw6zowDEH9wiHJCt1oO5y1XdyDTBuVW48Y5lQoKcvdzXIlsn9nXHCf25jniZI0CPdsww%2FkNNjxgM2LAWRe%2BDQTVDrqTNyGrdpEzkwjfU5yd63eoRDfyN%2BI%2BGLNlJmyNC3Tceo0xkWz7%2FhzxYMr%2BuG5alGf%2FvoLuGnzd6RLTppop5ltvPwwP3bnLXuQ4IAHW4z%2Fa3IRzf9lalsofmD0Zi&X-Amz-Signature=cb3786cca7672bf0011e27fe4807c259c400ba759bd902007ed281ab6f225b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QEE2NTG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAyl15a0NMSlKIkf00rm5tpe8zZaOH9gQcPqlQAbDPVAiEA%2BySBQO69haTOgZiczUq9JODUIpfNlo1QW6o8qUY53lwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCG4FSVJLzVM1unAHircA1tQozxXBtbi5kRyMfKuzr1JLayL%2Bh1mTL7wLNEB3%2FRf%2F1SpkFW%2FY2fDao%2BXoZFXBhBxqDS%2BtM%2FjDmvLhacIS9VzfZBwqI8FI9YJp0N89ygIYVoQOtXLVkd6lPCUio6uK%2BZ5lidv4C0pzDl6PxZFcAtCgP18RAC3Lat7p0bnszr4syABzSdG1fu0IbdvveWEBYh4n96FZOAxhyIBq6iKgNwGOgaBBkzwHntv8l%2FrvqiOcUEURJK%2B1UfGZ5QU%2B4skiZ8xtD%2Bu8fqFHNnLk51zJabsmWbIBJuEfmrYUWCBLbVfvfhj1kJ8wavn9R%2BFb9BwsB5AbJPETjqITs6E1lR7s8Esj9prNlTlJplR4yAMlOIzGugzctCpIf63JDI%2FAVdhdqCwG8HUsq4gW7zPzmsmuULO%2Fojy6fg3h1It9kM8GYOHgs9o2CiPiCUxyA1dOlOxPHo9JxJOQifWIPSeGrmVzUNlJlxjASh9Q2gkIEUxlbpj12GyjIDUhMk7erzGizcvM1rIhbvIiplVRR6rRm3ZofCmvKfkt9%2BW6I7wkMfYr4iE6Si%2FuPUMPMkX31rynfN8G%2BELbGTtg4SkttudwC92PNMtpGH6o5gKA9844b5HIK5tyI9XS7sLzbKa5%2FU7MPKlu8QGOqUBcgbpH54sECB7fRFkaN8pSLDfQb1%2Fm1GniPcYYIMrP%2F9lXorXpSwoWh4ACZJM0zLVKjtiNYguRTze3DcNJovuYb1eo7cLIbRV%2FgK7l7GQAn4h2xwiWOnaIp%2BvTyJzue%2FadD0ghJ%2FRBtu43E1gX38FaqloLZ0vgfDtdMW6thr%2BLTHVRetL7OGNor06%2B2DbpuTRmY4mwTpts7Cu5tFBsFRJVaKGdvtP&X-Amz-Signature=b3a951b38852d3774bded9d565c2d807faf504595fa899a05cdf88c11414767a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EXG6QUT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEsjNiRAVEAdRCMZsMNyHpl1psktG0%2F0z6MTbEQ%2F3e1VAiAE1TWCCtM9M1J7%2B%2B%2B%2F8zEVgMTfHXTVF78PkUtKlgXDyyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMK9asROGX6mMVc1FBKtwDkRAPeium008SIYjaRBIB7EjUdZzuaAkPQ9N%2FrwVJ1ITWhHURbzIcPMgPqwZyJhVBCicPm0dVX6162x1YwIm41LRcMFrGD3UuTLo4GR3WgKTHYHayjcdFbLNRZDAu2Uc4AN11zPm8OQ9JJS67%2BGAEOJSa9cfCjLg8PotuLTtx7JOeC9Tr%2FkAw1iCdsXlM6VnLhQP9CbQBODy4Y7AamQX4Mn5FbeSLpJul58YxhrYg35QoCD0VMlbG3px%2BO7%2FURZWL5TlfQm7HANkHExhuZuty86g1cJPidbywxSP79m7ZgXHjy1MZcybrW2aV3Ly597A6cGTznKuiBb0UHqs4Fp40QG8T%2BIcVWFz%2Fwj%2Bxw2wxnSf87Tbn8Bw8G9ov1ZgPj0i3f1DzjKz8ijMSpbwfjKCAPJ2%2FbN%2Fd5TxRI5QpSdf4jIgt91Tq690JTZI0wKOojb4UYROMALNWdaPRwxyYeJ2g0PnYSf8E1u8uFQu1sIsbhI60uFBm2CjHwxARwRT5BSR5a8fn5pcAq8odj7mOEi6J%2FBkf%2B7%2FqgQ4i2V1UWVpuD78XYj%2BxUR9co0Eyr0tRF3vtd8y5g3ylVjXKh8GxmOqtntFwKo7F%2B6z3Ky464mONS%2Fe9LRdr8mJrF0gNSccw%2BaO7xAY6pgEelyr6AAz2yIK3jy%2FPT3342nqfon1xajEc%2BTq8qeK%2BWWTfq2oYP1MyhSPies5zqYcuMeypK0Sco%2Fgp0vOS8ddaKikPVLbjChU%2BMprvz3%2B6mssna3qXLgQC4JRw3dVTtRkdAX%2BKTbY%2FKUJML66PGUpTHGGrCT2CaI6jgFFUdOQl%2F8PdM3wU7Th%2BlOyM%2FV%2FKxHUERCoGuRwK5pNgG7XTQwRYq8xK1y12&X-Amz-Signature=f41fba08b92bb9ccd47f08629b2bd75a40e7ea010269c5175e47a8eac381ff0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBM2TK7%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCOdByUCSzY%2BzUt9N%2FcytFbuX7SpvtVgGM15vVzCB7kAiB9uVfj8YgngTCbstZ7hHOvXg0NeErDKOIdCJ%2BNuvuOjCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMSFCs8FM6fAbUsw8vKtwDm%2BB11XmXiswtTODjX9CzyCDvkuKDGPqHUUzktOnh%2Bkj0ztlLZQ%2B8czgKa%2BfV6Yszb4JXuKfFrQ9%2FXoeHtr6G5p88Qn9ekYaVIdsN%2BIhbwYHOlJteN3D9kow8dvvKHIyT8whjLpdL1DA1Q0jdQ%2FfAPm8IEYL%2FjGdD6pF%2B7eFeCdeh6fB79Rn6%2Fdv7BwDfdyrxusR1KHR3kTW191GeEFvIsgZi%2BZKN%2FR7Fhbbgcm8mFqm%2FXKjPdrImD6OK%2FZmw00SBFFi3TaCmiCaql6BOYvBPoVwr%2B9AklLQuXKg3bg6H6whTTcHk9g4%2Fx0Db8ukzW08Et6%2B6KUTbVy5%2B3iEmbP7roSKth%2FwhJma3iNEjvXssPvc%2FxEPcIOkq%2BvSDGT3E5rSUmNaTmFAlxpXfGeRGSgrrLzrTMGMao%2FsAyYhDiYgh7%2FgVm5TY32YHAMcZBQ88j%2FJLrKcB0VI5f0WixRJe%2FbU0%2BAHKNmRC2Ji75NzCwPsPoS7%2FRaOxWli2PZsXmVE%2FdvyhGx3vvrFJIi25Czls5eeKJC%2FAfRlPk89cZd%2FCP1iwRztZ6XpaNnEJZt2vS7O7VZ010pm%2FtD7q7a%2BQV3z%2BVhMPFbqGkXe2x07dsh8LLgSRFT%2B%2FoAtUmvNweKptDcgwgqe7xAY6pgHEDV2bq3h1Uw6zowDEH9wiHJCt1oO5y1XdyDTBuVW48Y5lQoKcvdzXIlsn9nXHCf25jniZI0CPdsww%2FkNNjxgM2LAWRe%2BDQTVDrqTNyGrdpEzkwjfU5yd63eoRDfyN%2BI%2BGLNlJmyNC3Tceo0xkWz7%2FhzxYMr%2BuG5alGf%2FvoLuGnzd6RLTppop5ltvPwwP3bnLXuQ4IAHW4z%2Fa3IRzf9lalsofmD0Zi&X-Amz-Signature=9740e4d1e4952a072f4ea45fc30e42b49ff0e1d1b4a38fbe6693d1335fc204a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
