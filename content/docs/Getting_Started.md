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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33RCTPV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxRkZA6A%2BAxZ1viSTqrd2PzGSczOO1Ao0q57avUkXqiAiEAxIjmcyUfGOUVeTODNzpgWwJvvvw3EMs2SJU6nt%2F0oxYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNE%2FNhMGtJP%2BmRKpaircAwe5JDgkVgOFMLZQ6aRqfwyq5VpAfqJzNIXlk8ailJLlGHAmq7hPw7LbbVzGEXnArMzwXj%2BQKW%2FRQ3QF9Rk4dt%2F7XitrdgkUSG1EK9YXkfZWLYwVVsvVA9m9G20YntCTFo6QI1eKYTxKF8IMxJ%2BybTkUMuO%2Bbmz%2FhGq1OAYz%2BO3Zi%2BMgVd6VFy%2BpIJnWMbiEJTZlftyR2dBolxmas%2BuBS9QY9udPaxkmtDsps5CedLZV%2FS8lhCYUnLUe9maFkEkJ3X7UxOwgM%2BbXnNTCu0PIfc6f1P%2FMz8NKsnW%2BT4qwKVn1TTd4SN0V0E%2FHJfvgNW%2BXhOVKl%2BDbnUeq1juWT3oQUJ7fidYgl4jR1eCuJR752d2dn3KstBlvu8lw6trPRVX3Y8%2FdKbbslzrO1aB1IJbUC0SseLjD3hSnldBBE%2FAgdgsjbZupV0nf6jIvp4Tt6tQFQr3DPY8MWOeFZkoQ8Hx3ngqpsEgVnWmuzcSS6VtAIkThCDhMnW9Kajc%2F%2BLCVIaeV%2B59TDcjfsrVSRMgA7V0NNoopu5fJ1KKtt4oV3gSQdcutBM6QEUNB1oZ5S6nSDTAyvX8ecSk1E986hjemJEkb7Z8xR2lnFHI6xTnp3cXeY8FuXHW6v2%2BS8T0EZCdQMJmQ1cEGOqUBo6fIlEk0zC8WoULpazdOlzquNHetUsCGEmrNaaBjJTLUhKI4mcwqnl1Y17FF91evPzOuZxpDr2VG4SRj8LxoaOkb2%2BGUG4BkLBSbhioinWUsLqEcr76mggVWG6%2BHxqgLfmD%2BLJ%2Ft7L%2BIjbdkLiR%2Bdg9qxniYYREzJURAHbgQ14nyDh0BLVo%2FN%2BTLNA565CNfr8AB4HZ1OoUpL6sfygNMEQXRQiw%2B&X-Amz-Signature=f6e687961ad7f5aefd35b015c8abeefb8ad0a2f029f9816c1282446f4ab162ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33RCTPV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxRkZA6A%2BAxZ1viSTqrd2PzGSczOO1Ao0q57avUkXqiAiEAxIjmcyUfGOUVeTODNzpgWwJvvvw3EMs2SJU6nt%2F0oxYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNE%2FNhMGtJP%2BmRKpaircAwe5JDgkVgOFMLZQ6aRqfwyq5VpAfqJzNIXlk8ailJLlGHAmq7hPw7LbbVzGEXnArMzwXj%2BQKW%2FRQ3QF9Rk4dt%2F7XitrdgkUSG1EK9YXkfZWLYwVVsvVA9m9G20YntCTFo6QI1eKYTxKF8IMxJ%2BybTkUMuO%2Bbmz%2FhGq1OAYz%2BO3Zi%2BMgVd6VFy%2BpIJnWMbiEJTZlftyR2dBolxmas%2BuBS9QY9udPaxkmtDsps5CedLZV%2FS8lhCYUnLUe9maFkEkJ3X7UxOwgM%2BbXnNTCu0PIfc6f1P%2FMz8NKsnW%2BT4qwKVn1TTd4SN0V0E%2FHJfvgNW%2BXhOVKl%2BDbnUeq1juWT3oQUJ7fidYgl4jR1eCuJR752d2dn3KstBlvu8lw6trPRVX3Y8%2FdKbbslzrO1aB1IJbUC0SseLjD3hSnldBBE%2FAgdgsjbZupV0nf6jIvp4Tt6tQFQr3DPY8MWOeFZkoQ8Hx3ngqpsEgVnWmuzcSS6VtAIkThCDhMnW9Kajc%2F%2BLCVIaeV%2B59TDcjfsrVSRMgA7V0NNoopu5fJ1KKtt4oV3gSQdcutBM6QEUNB1oZ5S6nSDTAyvX8ecSk1E986hjemJEkb7Z8xR2lnFHI6xTnp3cXeY8FuXHW6v2%2BS8T0EZCdQMJmQ1cEGOqUBo6fIlEk0zC8WoULpazdOlzquNHetUsCGEmrNaaBjJTLUhKI4mcwqnl1Y17FF91evPzOuZxpDr2VG4SRj8LxoaOkb2%2BGUG4BkLBSbhioinWUsLqEcr76mggVWG6%2BHxqgLfmD%2BLJ%2Ft7L%2BIjbdkLiR%2Bdg9qxniYYREzJURAHbgQ14nyDh0BLVo%2FN%2BTLNA565CNfr8AB4HZ1OoUpL6sfygNMEQXRQiw%2B&X-Amz-Signature=8027ff9d8c2de64b30f49015c17aa7c474a2aad78b4cb6a5ae48b1f8ddf29b48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33RCTPV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxRkZA6A%2BAxZ1viSTqrd2PzGSczOO1Ao0q57avUkXqiAiEAxIjmcyUfGOUVeTODNzpgWwJvvvw3EMs2SJU6nt%2F0oxYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNE%2FNhMGtJP%2BmRKpaircAwe5JDgkVgOFMLZQ6aRqfwyq5VpAfqJzNIXlk8ailJLlGHAmq7hPw7LbbVzGEXnArMzwXj%2BQKW%2FRQ3QF9Rk4dt%2F7XitrdgkUSG1EK9YXkfZWLYwVVsvVA9m9G20YntCTFo6QI1eKYTxKF8IMxJ%2BybTkUMuO%2Bbmz%2FhGq1OAYz%2BO3Zi%2BMgVd6VFy%2BpIJnWMbiEJTZlftyR2dBolxmas%2BuBS9QY9udPaxkmtDsps5CedLZV%2FS8lhCYUnLUe9maFkEkJ3X7UxOwgM%2BbXnNTCu0PIfc6f1P%2FMz8NKsnW%2BT4qwKVn1TTd4SN0V0E%2FHJfvgNW%2BXhOVKl%2BDbnUeq1juWT3oQUJ7fidYgl4jR1eCuJR752d2dn3KstBlvu8lw6trPRVX3Y8%2FdKbbslzrO1aB1IJbUC0SseLjD3hSnldBBE%2FAgdgsjbZupV0nf6jIvp4Tt6tQFQr3DPY8MWOeFZkoQ8Hx3ngqpsEgVnWmuzcSS6VtAIkThCDhMnW9Kajc%2F%2BLCVIaeV%2B59TDcjfsrVSRMgA7V0NNoopu5fJ1KKtt4oV3gSQdcutBM6QEUNB1oZ5S6nSDTAyvX8ecSk1E986hjemJEkb7Z8xR2lnFHI6xTnp3cXeY8FuXHW6v2%2BS8T0EZCdQMJmQ1cEGOqUBo6fIlEk0zC8WoULpazdOlzquNHetUsCGEmrNaaBjJTLUhKI4mcwqnl1Y17FF91evPzOuZxpDr2VG4SRj8LxoaOkb2%2BGUG4BkLBSbhioinWUsLqEcr76mggVWG6%2BHxqgLfmD%2BLJ%2Ft7L%2BIjbdkLiR%2Bdg9qxniYYREzJURAHbgQ14nyDh0BLVo%2FN%2BTLNA565CNfr8AB4HZ1OoUpL6sfygNMEQXRQiw%2B&X-Amz-Signature=9db89b3d18085c17e22754ec168af0a1a460901b69f5dbdd61a66cb70ff8e08a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOLRYGSQ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYRpv%2FSYIcaiRTpbUQU44Kc33i1wDnlT%2F6B9xs1SdQ0AIgW2EriTEV42oDvXuSL3qIFMxC%2BBN2vD0cZ1GhTuFUn7Iq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDPWfhtYIux2nnycxrircA94OJt0FNK17P%2B2ck0thnlnIJsTDAIf9clU7l7n7cpTQw4daeHYQn03biirUbYpPYiBDWtTqNxazRqm0n0Ly5QdfS3WAZ3cuPWbYS2Y6MA%2F%2BK12PTx9yJ8at08fpuK4C6sfm4E2Mh67x1nWvOWKwTBFxVUSyIK0xtAjKtHOuGN7nm0NqUYBaYKgu%2B1Fb5Kkr1KSe1NCTfgAWyZHcnki3mhF5KWiLQvy5Ml4rObIeqiT%2BNhF5pd8rpDOEBNo0f8nLHX%2FvECqUSgotGdorgT0JEJh9sZIq4nZmUQ%2F%2FL%2BUg7MpuzAQWSHndx6LfWpRKJXmhmP%2BihID75TYgzNZBD2nqOwKNYXlaKNMbGVDOl%2BOw24C8kVu04dmhFzpU330T6kHqK8V44EBNpCfeyYI3CjxILaEvtM%2B5LlQ%2B1UwK80qh8L5%2FdAHsR5DOeS9Px%2Be1%2BnxxKMnoa6yXxQghURe04OcDDft3f2i%2B56%2BYGGLgdL%2F0PYMJsIfoQ3pdqm01%2FCXy4XCePg8Z1%2BZyMWZOgwDXG1Y1oU8f3Bxk9cyAAseYkL5Je092dvqW%2B6BD0xSwSY9%2F1RHrTeU%2FBfDxibqoh8dS4%2B3M7SWtjttAmfAivOE3gTVMuJy00E5epXccgun2KYPYML2Q1cEGOqUB3Akh7XUp8qG4MtZzrBM%2BZJIvhtS8QuXvzeX%2FBCZ0xcQAzDCjeLGk%2Bhqpzl1ffmoaWuO9Hc3%2BnwTEpumaC3MR7eY1s6aXMk63ZhMkaVvEglOOznXxKR24i%2FndiyFijL4h5XEnIS4ra94T3XlIgvJvjoR59wlatS6C2t5RexoenfV%2F6EPONWdeK%2F2oml%2FkEnY%2F41MT3I48tAEW9vQaK9bLDEoh8Sb2&X-Amz-Signature=191882df1fbf82bb4a5506cc2d20339a20e8e50a54169c0356f33bec6e82fc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2NPVEV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSL2aiexcXRz5O09YPXSHlj5lYOu9KuDo1EyzQbEs6AIhAIOPyhcplQR16CCMNuznt0MbfR5UgCnRsnAg2HyJGbJZKv8DCFYQABoMNjM3NDIzMTgzODA1IgzpQ%2F%2FvOkU2YBflAGcq3AMNpMZ9B9F6yKpkHBNQRzcG8cp6489GJ5u6U1n78jKZ4a0EWzA4vIs0TCYEdorD3i6dIe%2BX2K0K1VoO6VjPtF%2BuUxUkADLLtsP9Puf2mnicejKnU1g7VVBbblQKw%2F0%2BlDQvFVzyJB6OSMG3NIN5gsZRdo2JakgKj86m0IONNCG9roCrPC3ye2mD%2Fcy%2F51lz2jCbSApDfahml6EGinh7lpJ1sK52tU9mYmfeK%2Bw7aduJ5ioaWZWlXmFv6DLy83AwMaoLteZfUFnQwIIw%2B4yreT9Sd7s7qTqD1NSmFoqFfDcuDvL0NUMWjyzgksZGy3rOwYoM9dajZCp6FBeGfFBMnr931lIIaRmNlRfK8bLqxg4EyId1%2BWC04hRBlNDNers%2Bd379QGTuZ1nZgPt0U3MEoILIWAEPgNZ5I2BZpbriSC79qP5zL79enrH5b2MGGJZpV5fTkkUBigUu9CeVgYz8LbLhmO10jqONp6WJSxe6J41n3zHZSPaNO9AJ%2BF1tSW4mCx3x8jZ5wvxDvanrEAS1ZCigJIJbYR5utsvnjb9u0vpy65YDfgUARJ0UZd8gsDtNIC3CORCYS9opsR9IbiNF0xu5Iyav0Sz%2FKrK%2BeYpB0oV0eBrTmD%2BSptdiGTjmhTD5kNXBBjqkAaifIMNWpqHtDQelAdrHI3sIMSMahsowdjbIl%2BfOac%2Fd2WuA12p59aNj8P1crL6HMZYLasd8Y1HX098k0GCUsXnIyzchB%2BZ%2BkpuMGgq3lFvxfDysQvw9uNOA8Pv2WQR17JVk887IEIACb7QJQOTok53pr295WtuJUeRECyMp%2BRuhgPGKi%2BKun%2BmDu7frw%2BcM6yWi2QbraOY0Nm%2FD0OGapWJHFK4b&X-Amz-Signature=9e64ab4ab9c465c2d121d08708067fa0cb1336e9dd7c1d8f143ce33ac9545e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33RCTPV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxRkZA6A%2BAxZ1viSTqrd2PzGSczOO1Ao0q57avUkXqiAiEAxIjmcyUfGOUVeTODNzpgWwJvvvw3EMs2SJU6nt%2F0oxYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNE%2FNhMGtJP%2BmRKpaircAwe5JDgkVgOFMLZQ6aRqfwyq5VpAfqJzNIXlk8ailJLlGHAmq7hPw7LbbVzGEXnArMzwXj%2BQKW%2FRQ3QF9Rk4dt%2F7XitrdgkUSG1EK9YXkfZWLYwVVsvVA9m9G20YntCTFo6QI1eKYTxKF8IMxJ%2BybTkUMuO%2Bbmz%2FhGq1OAYz%2BO3Zi%2BMgVd6VFy%2BpIJnWMbiEJTZlftyR2dBolxmas%2BuBS9QY9udPaxkmtDsps5CedLZV%2FS8lhCYUnLUe9maFkEkJ3X7UxOwgM%2BbXnNTCu0PIfc6f1P%2FMz8NKsnW%2BT4qwKVn1TTd4SN0V0E%2FHJfvgNW%2BXhOVKl%2BDbnUeq1juWT3oQUJ7fidYgl4jR1eCuJR752d2dn3KstBlvu8lw6trPRVX3Y8%2FdKbbslzrO1aB1IJbUC0SseLjD3hSnldBBE%2FAgdgsjbZupV0nf6jIvp4Tt6tQFQr3DPY8MWOeFZkoQ8Hx3ngqpsEgVnWmuzcSS6VtAIkThCDhMnW9Kajc%2F%2BLCVIaeV%2B59TDcjfsrVSRMgA7V0NNoopu5fJ1KKtt4oV3gSQdcutBM6QEUNB1oZ5S6nSDTAyvX8ecSk1E986hjemJEkb7Z8xR2lnFHI6xTnp3cXeY8FuXHW6v2%2BS8T0EZCdQMJmQ1cEGOqUBo6fIlEk0zC8WoULpazdOlzquNHetUsCGEmrNaaBjJTLUhKI4mcwqnl1Y17FF91evPzOuZxpDr2VG4SRj8LxoaOkb2%2BGUG4BkLBSbhioinWUsLqEcr76mggVWG6%2BHxqgLfmD%2BLJ%2Ft7L%2BIjbdkLiR%2Bdg9qxniYYREzJURAHbgQ14nyDh0BLVo%2FN%2BTLNA565CNfr8AB4HZ1OoUpL6sfygNMEQXRQiw%2B&X-Amz-Signature=6fe869321e756cbcfc161d8b951074430a73861591818c67c7de0828ad9a6ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
