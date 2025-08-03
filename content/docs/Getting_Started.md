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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMJVSAJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpxYWvNLbGeheWnTuSdVzsK7IV4%2B4cJc6UCDYFZnvvsAiEAjUPW305FBTLTPhaZ8syCC90lQWr5bRpzCsvFKBmHsaQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2Bco%2FaAJ9URS4HOxCrcA4Yi7RZ1lnPdEh60%2Fwa6IgufyOSuTP3FKR0Z632SPqw77vT0XGlrSC5S3%2B3hrRbxphRBOz1ddlhuF9jHQTP%2FEEusTG5bB%2FOx43k4f6ZN2yLdzjFEffob1qBHrA948ldGE0KqMYx3AogzFlchwwAyKhWzgMIY1rE0eGXYUGu7uEo8QLxORJj2jdMehxokoHfxYPgRhV80CxdPN07EyhZPvLKfS9pfn21D8K415zS4K9Xa3znXgddt5KiJzbhdcK9ytZvvWDF2KmdCpLjuI6nfIZWZz7MZQWPjKjRalf0pUGVR%2B8rzOIl6kR0cQE%2BgTe2YyDUhFYDK6FMo8cRq4Eo%2FKFHJaF75qRktw3T1SPxZlfOW3N%2BTGx4zQbkLep6798eAqAcJuNKXj5C9RqrPBzFMZTQSUQLhTf1BArqWf09Lr%2FNlVVN8s0doKtudNpVHTP7lNA2DFfcGqWa6P%2BnW%2BmsmCuruZWtMveVbdS7B6Lo7ii7DV3fh04XC5QsE4rcNP79%2FwaBt6iKs2bAtRMAHdwJ6I2qG1DotTHbYWug%2F2xgJwwcw6llZdtZAKxZNRHZ4WIWhq1TbE6Wk%2F%2BZKVnW6wy5dVu%2FhCtSKATn%2B4O1pJaUrixxKV%2FgPrYWWOT4W85YbMJDZvsQGOqUB%2FOdCBXN5HyC1oWbdHHw5HAuEWl%2FLXyk3FFeUOXWjGbqAr%2B%2Fl45tmOc8lXIK%2BW%2F7k%2BEySsgRSMkvNR1I23BTFdiOD96kACFnRd41wBXOiHsLRGO%2FX7v72%2BGS3iZZGr7hCX8GA7QaWRWk%2BbcOWHynGxcXRi%2FAdE0HjRgCZ%2BngJ7aYfJzDwiYoTyJUmuUUF56LYDrbFIdIwo1nja5NUW8xJssua55pc&X-Amz-Signature=5d14381db325f073df0426d634fb59e3757399fe1b49cca92806474ebb5d019c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMJVSAJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpxYWvNLbGeheWnTuSdVzsK7IV4%2B4cJc6UCDYFZnvvsAiEAjUPW305FBTLTPhaZ8syCC90lQWr5bRpzCsvFKBmHsaQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2Bco%2FaAJ9URS4HOxCrcA4Yi7RZ1lnPdEh60%2Fwa6IgufyOSuTP3FKR0Z632SPqw77vT0XGlrSC5S3%2B3hrRbxphRBOz1ddlhuF9jHQTP%2FEEusTG5bB%2FOx43k4f6ZN2yLdzjFEffob1qBHrA948ldGE0KqMYx3AogzFlchwwAyKhWzgMIY1rE0eGXYUGu7uEo8QLxORJj2jdMehxokoHfxYPgRhV80CxdPN07EyhZPvLKfS9pfn21D8K415zS4K9Xa3znXgddt5KiJzbhdcK9ytZvvWDF2KmdCpLjuI6nfIZWZz7MZQWPjKjRalf0pUGVR%2B8rzOIl6kR0cQE%2BgTe2YyDUhFYDK6FMo8cRq4Eo%2FKFHJaF75qRktw3T1SPxZlfOW3N%2BTGx4zQbkLep6798eAqAcJuNKXj5C9RqrPBzFMZTQSUQLhTf1BArqWf09Lr%2FNlVVN8s0doKtudNpVHTP7lNA2DFfcGqWa6P%2BnW%2BmsmCuruZWtMveVbdS7B6Lo7ii7DV3fh04XC5QsE4rcNP79%2FwaBt6iKs2bAtRMAHdwJ6I2qG1DotTHbYWug%2F2xgJwwcw6llZdtZAKxZNRHZ4WIWhq1TbE6Wk%2F%2BZKVnW6wy5dVu%2FhCtSKATn%2B4O1pJaUrixxKV%2FgPrYWWOT4W85YbMJDZvsQGOqUB%2FOdCBXN5HyC1oWbdHHw5HAuEWl%2FLXyk3FFeUOXWjGbqAr%2B%2Fl45tmOc8lXIK%2BW%2F7k%2BEySsgRSMkvNR1I23BTFdiOD96kACFnRd41wBXOiHsLRGO%2FX7v72%2BGS3iZZGr7hCX8GA7QaWRWk%2BbcOWHynGxcXRi%2FAdE0HjRgCZ%2BngJ7aYfJzDwiYoTyJUmuUUF56LYDrbFIdIwo1nja5NUW8xJssua55pc&X-Amz-Signature=c99b07026c65346478a0d80f4a32ccc04dcdb42ac9a6dddd6165fc99573cbba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMJVSAJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpxYWvNLbGeheWnTuSdVzsK7IV4%2B4cJc6UCDYFZnvvsAiEAjUPW305FBTLTPhaZ8syCC90lQWr5bRpzCsvFKBmHsaQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2Bco%2FaAJ9URS4HOxCrcA4Yi7RZ1lnPdEh60%2Fwa6IgufyOSuTP3FKR0Z632SPqw77vT0XGlrSC5S3%2B3hrRbxphRBOz1ddlhuF9jHQTP%2FEEusTG5bB%2FOx43k4f6ZN2yLdzjFEffob1qBHrA948ldGE0KqMYx3AogzFlchwwAyKhWzgMIY1rE0eGXYUGu7uEo8QLxORJj2jdMehxokoHfxYPgRhV80CxdPN07EyhZPvLKfS9pfn21D8K415zS4K9Xa3znXgddt5KiJzbhdcK9ytZvvWDF2KmdCpLjuI6nfIZWZz7MZQWPjKjRalf0pUGVR%2B8rzOIl6kR0cQE%2BgTe2YyDUhFYDK6FMo8cRq4Eo%2FKFHJaF75qRktw3T1SPxZlfOW3N%2BTGx4zQbkLep6798eAqAcJuNKXj5C9RqrPBzFMZTQSUQLhTf1BArqWf09Lr%2FNlVVN8s0doKtudNpVHTP7lNA2DFfcGqWa6P%2BnW%2BmsmCuruZWtMveVbdS7B6Lo7ii7DV3fh04XC5QsE4rcNP79%2FwaBt6iKs2bAtRMAHdwJ6I2qG1DotTHbYWug%2F2xgJwwcw6llZdtZAKxZNRHZ4WIWhq1TbE6Wk%2F%2BZKVnW6wy5dVu%2FhCtSKATn%2B4O1pJaUrixxKV%2FgPrYWWOT4W85YbMJDZvsQGOqUB%2FOdCBXN5HyC1oWbdHHw5HAuEWl%2FLXyk3FFeUOXWjGbqAr%2B%2Fl45tmOc8lXIK%2BW%2F7k%2BEySsgRSMkvNR1I23BTFdiOD96kACFnRd41wBXOiHsLRGO%2FX7v72%2BGS3iZZGr7hCX8GA7QaWRWk%2BbcOWHynGxcXRi%2FAdE0HjRgCZ%2BngJ7aYfJzDwiYoTyJUmuUUF56LYDrbFIdIwo1nja5NUW8xJssua55pc&X-Amz-Signature=e8eafc9abbe280fa04c03b197375f27888bf19f062a97eaef69defa889a58e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5AVMFI%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOqqGcr0bianfXIzXGfXIQR9oJ5FUTkXQbkXKu0o%2BTGAiAbZXucTBhafi8LyiV4BVcOI7A1DJDTHRJ%2BS2HCTDVZkyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM1CMTJDGn6OXXsfx9KtwDDmUMCbAI5zQ47rKbQkWu2xbD%2BqL1PJX2dO%2F8edwWrIfxFtRT45Nil1iYqWLKaj%2B%2Bk1CRBHS%2BnFHOC6fC8CkWhtvh8AbTv6JPHns3uN03xWqmT%2BUnHqV88fP4gkeclAw4w7Us%2Fk3kgbawgsXcUWC4UvUwsTWTHCwy8S3yoyx%2FQfCL1AaZfGTfLOw4JOYnULfKDSZ3T9Dvg7XVOX4F5L1GkV7ybcMWYdC5nuHDEgtCaxQE9g%2FVP%2FaEmAi7IWwB%2F%2BVhQRT96%2BBXB75pTrMZFVBfeD1ENTPWcTScjavZMF%2BI9fY15sC8VsnzUcpY40FgrjDqfcJt0Ou4RX51qli8SB3szkyGf4ZREGoz0C5hAcrb3TLwOgy3HVKXhSQp%2FsVSfc2RozqLVvIk%2Bz0sw0kIOExZXt6wvQTIUO78MUReup6vtUs5XkWKnhfSHPDoFdaQlmN%2BiFHy5kgJIJ9A3Sp1II%2BLnaABPXOelInzZO21%2F8XN71ykO9eVZpu9mpf4ZNGu9bAqhfRJ3W1IP9Q8K8AkMMdjjrn2QflOk3h1NVYcjllXu6VDB1c8ThsuhmI2ahHRknkTjKfqquABLfFpGpojL5VNl8v%2FZkxULS2BKZ%2FFaFF1%2Bhf%2FZhWgjX2pEICjs9Awmtm%2BxAY6pgFNxeJnhSH1A3CqQw1qGWSRxU9Ujx2m2nrFgD%2BHi%2BD9mFYm4Iij02E745UHtNnZK%2FOuCpWGkxTppIHKWhec9nkh6M27upCbNg25gOn1aknd9MSOY1kntHHBMj2eDoa%2BlgH4WmSJSFpqd8z8nrcyup5yEIgqECRyXVPs9ZzaendRZvvZaC0INUycKw62L6wbcCMj2UjJzCDfhgMeWVJBR9aH58EWaOuA&X-Amz-Signature=aa1a75f7f48a81606b8662491ed7427c364f74225521865057a13ecb8295962a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VALYMISS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdnbU7qQu9%2FIMHpCCdxfYCPic4n%2FvHDcOgKdXO5dNicAIgA%2Fl0xy9g35lsVUfM%2Fbh80aV3sA5nyCCLLgUpGZJhARkq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGblpkMoV34ijjOojCrcA1P1TSyZsvNEmPV1HoTf3qku6H8Gmb%2Fy%2BZVqwGI6b1ZPf45slYL6HXINPfBHEKoe361IbwR%2F%2FsJlRpviG5VAHtIE4lL9WHAbik69186X2uZBPoPl30L2BIYjw%2Bi2JS8JwTCU0dYUVh9GVOrOr4VNfRNnPxFF3wA%2FmFwWqPvEnY5iEFPdxIP8za%2BviDbvMBb963Ms0dM6WFo3UrAPwijUmK7daZ158qWzTE3OfHnwe3YGV3tnmNbyT%2BGP29TXKaI7TEFLK3uk%2FrJHaM1gCRHza4FnAthjtasIBMBIXqm%2FpMjGO8PevhuybY8B66voWCUVj9RUzt6d1yDZU7ztm52qzVHLW3s9%2BjEzrplJyWNJt4vUrGqs5t6vYgpBAKrmUMYLQ%2FDw3TmuXvF1DSXDl69Q%2Bv1GxMAyH72fefI4kmqBJl1I3JLBJLl3v%2BPLsMk4PZZ7KiVDJ0DlD0MPD8NVHowy1fvH8xXs5piaTvPLdpEJeEH4olVQHo2l%2BHnOJhf1h%2F7CiijTia%2BagwaOTU4yhGb2sK3J%2FXn9tByfQlA9CR4mGSlB%2BkCd46MQftLg98Dx8tzn9rLxyBAvMqBDSrCstO3WC6H4%2Bb%2FA%2BARhzPfXy53yqtRveJXcQw%2BCKUW%2FkbI0MIfZvsQGOqUBR8rdDKYmt46CmqByRs9fgs66KUZbnMreDo0KuaSj1iINW1E0pSyDiGE7pim95JtRIaI6XzR6DzuOLWQRdMDEM4zDHU2sJPAATZQK2Tt9XhyhTwSeZRYFPeJrqq14dMzl3ALu8kJJnqRQ09LTrVJ9ildHpWQqAuGdYO0pToBPJIPbBaxud5ojsVUKhCY1osPHbHZ%2B1MWjVOwN7uKLLv3qdyEYdhwh&X-Amz-Signature=db3a7afab79dc2cb0b35d6fc4a4c8c69e902bdd34c6d2711760515af1b1cff43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPMJVSAJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpxYWvNLbGeheWnTuSdVzsK7IV4%2B4cJc6UCDYFZnvvsAiEAjUPW305FBTLTPhaZ8syCC90lQWr5bRpzCsvFKBmHsaQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDE%2Bco%2FaAJ9URS4HOxCrcA4Yi7RZ1lnPdEh60%2Fwa6IgufyOSuTP3FKR0Z632SPqw77vT0XGlrSC5S3%2B3hrRbxphRBOz1ddlhuF9jHQTP%2FEEusTG5bB%2FOx43k4f6ZN2yLdzjFEffob1qBHrA948ldGE0KqMYx3AogzFlchwwAyKhWzgMIY1rE0eGXYUGu7uEo8QLxORJj2jdMehxokoHfxYPgRhV80CxdPN07EyhZPvLKfS9pfn21D8K415zS4K9Xa3znXgddt5KiJzbhdcK9ytZvvWDF2KmdCpLjuI6nfIZWZz7MZQWPjKjRalf0pUGVR%2B8rzOIl6kR0cQE%2BgTe2YyDUhFYDK6FMo8cRq4Eo%2FKFHJaF75qRktw3T1SPxZlfOW3N%2BTGx4zQbkLep6798eAqAcJuNKXj5C9RqrPBzFMZTQSUQLhTf1BArqWf09Lr%2FNlVVN8s0doKtudNpVHTP7lNA2DFfcGqWa6P%2BnW%2BmsmCuruZWtMveVbdS7B6Lo7ii7DV3fh04XC5QsE4rcNP79%2FwaBt6iKs2bAtRMAHdwJ6I2qG1DotTHbYWug%2F2xgJwwcw6llZdtZAKxZNRHZ4WIWhq1TbE6Wk%2F%2BZKVnW6wy5dVu%2FhCtSKATn%2B4O1pJaUrixxKV%2FgPrYWWOT4W85YbMJDZvsQGOqUB%2FOdCBXN5HyC1oWbdHHw5HAuEWl%2FLXyk3FFeUOXWjGbqAr%2B%2Fl45tmOc8lXIK%2BW%2F7k%2BEySsgRSMkvNR1I23BTFdiOD96kACFnRd41wBXOiHsLRGO%2FX7v72%2BGS3iZZGr7hCX8GA7QaWRWk%2BbcOWHynGxcXRi%2FAdE0HjRgCZ%2BngJ7aYfJzDwiYoTyJUmuUUF56LYDrbFIdIwo1nja5NUW8xJssua55pc&X-Amz-Signature=47bae12bf824a3c02e585c50badb1992f0bc83eeb588f74e5c62afed57624c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
