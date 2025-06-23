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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RITVDX7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBswh14ciKNlh7QgG%2FrxJGZl02Xg9QW61521TeNWLLENAiAZUSMdwsif7ZVSHtYc7evYOGt2bnGNhuMNES25zvcmzir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMopqm7Dd2L2e%2B68ZKtwDbXOCJWTNPFHPj5YwD6zPRRU1samVDgNXuyDQu3vR2KBOPmGhaMhkFDgNl7M58GIERAX5i4u%2B7N4GaLVF1%2FVKneYOxqep1CW2pN9jO4yLK6tfj6quxfgPv26yBiMfNbVYIMz1%2BsveO%2BmrVbJb%2B5DGrFCL4%2Blavgb3OLHXYXRnpzNFxtQfrPjUDuSTrmf%2FZNuomDdqVpWVw1hmv4OxOK1CWen0jF%2BeEFSqWjltUxETfNwb5qIVAHqD%2FOyb%2FUaJjrR4bv9kR8%2F3hu%2FRstJPKj27Sn%2FERqgBnSJToYwUEbHNkf5HgNpbIUklptYk00ToE7376IPDqFYndw64ytJvQFmYqkYhJp%2F%2B7fz2%2BFfVVt2XJMdrumZNZCrC22fJU8xmWGcuIfPsf1EVoAq3cqfA%2Bb78wS5tdKjncxddweQGJjZdPCf3ZyYTXu109BWCrhafL9Zeu32hDWmc0q9x%2BNs0hIhT7dz79RAYVYrsKaLetGvhtCElCuBil52w1xrKsb8aEQEOo4NJv0zBL9yr7CWkVFPf7%2B126MkVciZCsDwnjaepSBu1HAKURv1f4RtKDNgP%2F%2BrrzHmpm3cOYODI9IiTjhoOPgidi27CKgVY7hDKSlKWy03LzjY0Jh8T2HqcmLQw2qrmwgY6pgEPg17PGqJatlQmLEd59RPxFrlDpxywBF%2B43wHqePzUrzvjv%2Bnvl9HIg4fH8IVwHVkkh7Wb5wAL6YE7APttaABTVX1WoGPdKfgghYbcrqYn5PgIK8T8WoP6QGAlukLpX0R3OK7f4XizRwCiRWX%2FyF%2BJo9UCvYnvSi4g7lqVaAzA7y29O6x0Nuo7h2%2FQcW8pM0SffNuCZnqKzo72e557do%2BT23kzLrAp&X-Amz-Signature=a33235948d8020325869eceb1c539f665e9420aec376696443548e83aa52ac17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RITVDX7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBswh14ciKNlh7QgG%2FrxJGZl02Xg9QW61521TeNWLLENAiAZUSMdwsif7ZVSHtYc7evYOGt2bnGNhuMNES25zvcmzir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMopqm7Dd2L2e%2B68ZKtwDbXOCJWTNPFHPj5YwD6zPRRU1samVDgNXuyDQu3vR2KBOPmGhaMhkFDgNl7M58GIERAX5i4u%2B7N4GaLVF1%2FVKneYOxqep1CW2pN9jO4yLK6tfj6quxfgPv26yBiMfNbVYIMz1%2BsveO%2BmrVbJb%2B5DGrFCL4%2Blavgb3OLHXYXRnpzNFxtQfrPjUDuSTrmf%2FZNuomDdqVpWVw1hmv4OxOK1CWen0jF%2BeEFSqWjltUxETfNwb5qIVAHqD%2FOyb%2FUaJjrR4bv9kR8%2F3hu%2FRstJPKj27Sn%2FERqgBnSJToYwUEbHNkf5HgNpbIUklptYk00ToE7376IPDqFYndw64ytJvQFmYqkYhJp%2F%2B7fz2%2BFfVVt2XJMdrumZNZCrC22fJU8xmWGcuIfPsf1EVoAq3cqfA%2Bb78wS5tdKjncxddweQGJjZdPCf3ZyYTXu109BWCrhafL9Zeu32hDWmc0q9x%2BNs0hIhT7dz79RAYVYrsKaLetGvhtCElCuBil52w1xrKsb8aEQEOo4NJv0zBL9yr7CWkVFPf7%2B126MkVciZCsDwnjaepSBu1HAKURv1f4RtKDNgP%2F%2BrrzHmpm3cOYODI9IiTjhoOPgidi27CKgVY7hDKSlKWy03LzjY0Jh8T2HqcmLQw2qrmwgY6pgEPg17PGqJatlQmLEd59RPxFrlDpxywBF%2B43wHqePzUrzvjv%2Bnvl9HIg4fH8IVwHVkkh7Wb5wAL6YE7APttaABTVX1WoGPdKfgghYbcrqYn5PgIK8T8WoP6QGAlukLpX0R3OK7f4XizRwCiRWX%2FyF%2BJo9UCvYnvSi4g7lqVaAzA7y29O6x0Nuo7h2%2FQcW8pM0SffNuCZnqKzo72e557do%2BT23kzLrAp&X-Amz-Signature=3ee7c0e54050de0143037df96d84145426c4cc8ed57a51f8b3279cba2380b0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RITVDX7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBswh14ciKNlh7QgG%2FrxJGZl02Xg9QW61521TeNWLLENAiAZUSMdwsif7ZVSHtYc7evYOGt2bnGNhuMNES25zvcmzir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMopqm7Dd2L2e%2B68ZKtwDbXOCJWTNPFHPj5YwD6zPRRU1samVDgNXuyDQu3vR2KBOPmGhaMhkFDgNl7M58GIERAX5i4u%2B7N4GaLVF1%2FVKneYOxqep1CW2pN9jO4yLK6tfj6quxfgPv26yBiMfNbVYIMz1%2BsveO%2BmrVbJb%2B5DGrFCL4%2Blavgb3OLHXYXRnpzNFxtQfrPjUDuSTrmf%2FZNuomDdqVpWVw1hmv4OxOK1CWen0jF%2BeEFSqWjltUxETfNwb5qIVAHqD%2FOyb%2FUaJjrR4bv9kR8%2F3hu%2FRstJPKj27Sn%2FERqgBnSJToYwUEbHNkf5HgNpbIUklptYk00ToE7376IPDqFYndw64ytJvQFmYqkYhJp%2F%2B7fz2%2BFfVVt2XJMdrumZNZCrC22fJU8xmWGcuIfPsf1EVoAq3cqfA%2Bb78wS5tdKjncxddweQGJjZdPCf3ZyYTXu109BWCrhafL9Zeu32hDWmc0q9x%2BNs0hIhT7dz79RAYVYrsKaLetGvhtCElCuBil52w1xrKsb8aEQEOo4NJv0zBL9yr7CWkVFPf7%2B126MkVciZCsDwnjaepSBu1HAKURv1f4RtKDNgP%2F%2BrrzHmpm3cOYODI9IiTjhoOPgidi27CKgVY7hDKSlKWy03LzjY0Jh8T2HqcmLQw2qrmwgY6pgEPg17PGqJatlQmLEd59RPxFrlDpxywBF%2B43wHqePzUrzvjv%2Bnvl9HIg4fH8IVwHVkkh7Wb5wAL6YE7APttaABTVX1WoGPdKfgghYbcrqYn5PgIK8T8WoP6QGAlukLpX0R3OK7f4XizRwCiRWX%2FyF%2BJo9UCvYnvSi4g7lqVaAzA7y29O6x0Nuo7h2%2FQcW8pM0SffNuCZnqKzo72e557do%2BT23kzLrAp&X-Amz-Signature=55e191c04d5b0b3746aa5cc250a1f62d67da1c20375d96f78fbfe6d90f436e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HXTEKK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIA%2BmGtiwd0x7gYCdDW1bcbYKAnqviaylSNtJRwsCXe9aAiEAoSKgH5k4V6zjtfrbbJKJ5tUGkGboWwoW54Yuhe8IJwIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHkU%2BaiF0WPGEdExUyrcA6TmXRTOJA1qnRxJHHfCsujUnC5dKcR7KcRsF6jsXHCjVykV2PyAcPYuBo6f3ndeP0bmT2Fa6dwPOGcNaYC%2BMCePekDtsdltb4okj4o3tH563RI357dlQMux9i9AwAFIWMdxorKYllmn%2B2hiMJ2M5z2AfzZjJmXfuhEstb9q7F4oYrzRDuD2b3QNFSziT2Cd0Uh8Tm%2F%2BlIZICBcP%2BIvCWBqWWw41gNneQSNE9DL%2FLWyMCO5mrgHbG%2BAkvz%2B3ABYubHxPG6910lTW7yxnDQ3ibBwl7BJKkvjI5thrjrAgrPWIXAfNWYbGuTXeYFYtF0XTDcqqHETinEA0074MnDgi9bfy1EjUDVLi2wdDUoz0kr%2FAjAGqr48qdSjPvhjsl12%2B66eM78PPaYvoYorOeKl13Df2fFzLHQWHJRLx8ChDLtAz1MZNecxlvRAT5fDb7TkLZkGCqO10zStIx8thbQXEFUo1iQUMhHY0UIWindWgexjX9IHtc2EVH6EhWZGF%2FOr3yokWSDIBwM1Vm4UYRspIzpOsoF8QNNY0f6WefrtHWGHY5Uhm97GYwtuqzbHPzYQNLWuqJbWJXOrUgkPiC3gEyFiRBI3xkxcLoPKYLDxKSdmzIUFncGmZH6K7Hg16MP2q5sIGOqUBzOtLGtHNP%2FaCGtObd6GqdR9iqPD5eYQ%2BxgkXN6OoTp8QkaC%2BlIhSnYtZ5unq%2BtKXINq9IXMaLDdujfRzrHDTOg4UBcI7YTeeEvUxcQrMrkmumMMYIZG7adD13TzwkkqVEgHvOfkuZB51F%2FK9FhWP832Wt8CxgyQWxCfWqFT5HNfOApzBIZQ3a4i%2F3gRAH4t%2BZaatyczmXRa%2BVJB9834q1apHoZxV&X-Amz-Signature=3f380b558b6a188e8829764c634b44a4bca08d5cff497dc804c28fefd41a3e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G67NYCV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCICRcaNawI5duNsFN8iJZgbr8hRyR%2FyqpvFjtUVn60JIFAiEA7J%2FNUO0aPtMgrj%2BroGacrF3SrKedaMZUG6CnZH4L9Y0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDBo25LiMyHPj5kWBbyrcA8sS6XatmyH6s0Gb6dt9RNR%2BKX4TtgMXDVCUF4qd6dcTZLBb5KMzB6CmSkW1fEvr75%2F8ORkoYRB0FhrnlpU9C2RwjrL4SHNUCASUnj5924CRzX105lDloIDmzJOK3f5%2BptMUo8rqlGP9SLsnrvQrhje49WybJ31eGNh8IiyKRjVfpyJ9lAbR7Jd%2Fh%2BLNOvYBItiy3yuWvN9svHTw9oB32HnWD2LVF18frf6QnqtXEogHqsd2lwEMjNQeuFtiCwV7Z2lfhp8aGp42mcVuktMOO4aaJKg%2FuKSY65YD6H2ozuAOOB4FvVe6ksFlf6qjqdwBfrvDeC8g2pDgaSuNOrAALFFLSVQU%2BUGnecPgCPWxZyAWdKsYjv6FH%2FgLAts30hbbEPva4u8UxPeihgA5gTjnPv8PdlfX5ofnLt1l6Ta85iBjJ8ALTU4JixbMC68V1GEn6qYbbOsHJauySUZcpUZp46m4OUz6b3eW8GzlvxyGtY5uoTGKv2v%2Bz%2BdLTYWMli%2BBdYISgDmXF72YetG3vdWPet2VAaxPilzmJB5knZDAmaMN1%2BUeeynwPv%2FyMVBqKUiACQMR01R0DKG23cYjO0KIgFH3AQx95F%2FXWhJdM3ReoAXUsv8Geg8gGUW2iTR2MJaq5sIGOqUBfTNUNKOZw35tpi58KyThfRdhOiiCp9NtUZ8quAEr4z13UUZj5CaBqHTEtNUnMEkjO0kvBLmDptKvKNFXdlLkhpK9kuFgfDcuAtWhFHTHxhjEW%2FCWhDgHELPpHWw92OaJ1q882LfGRm2f2ebeqxDBXuwZM%2BxcOFsok1KPHTK%2FuzirI1O7LsJHQf7RVz6EX5ApoPpIGAzRzvzLA7FKG0b0nFiVYv4Q&X-Amz-Signature=d0280815dafb835a25c60fa1c2eb19093b8175c20cee2da5151a72f3a63e74b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RITVDX7%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBswh14ciKNlh7QgG%2FrxJGZl02Xg9QW61521TeNWLLENAiAZUSMdwsif7ZVSHtYc7evYOGt2bnGNhuMNES25zvcmzir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMopqm7Dd2L2e%2B68ZKtwDbXOCJWTNPFHPj5YwD6zPRRU1samVDgNXuyDQu3vR2KBOPmGhaMhkFDgNl7M58GIERAX5i4u%2B7N4GaLVF1%2FVKneYOxqep1CW2pN9jO4yLK6tfj6quxfgPv26yBiMfNbVYIMz1%2BsveO%2BmrVbJb%2B5DGrFCL4%2Blavgb3OLHXYXRnpzNFxtQfrPjUDuSTrmf%2FZNuomDdqVpWVw1hmv4OxOK1CWen0jF%2BeEFSqWjltUxETfNwb5qIVAHqD%2FOyb%2FUaJjrR4bv9kR8%2F3hu%2FRstJPKj27Sn%2FERqgBnSJToYwUEbHNkf5HgNpbIUklptYk00ToE7376IPDqFYndw64ytJvQFmYqkYhJp%2F%2B7fz2%2BFfVVt2XJMdrumZNZCrC22fJU8xmWGcuIfPsf1EVoAq3cqfA%2Bb78wS5tdKjncxddweQGJjZdPCf3ZyYTXu109BWCrhafL9Zeu32hDWmc0q9x%2BNs0hIhT7dz79RAYVYrsKaLetGvhtCElCuBil52w1xrKsb8aEQEOo4NJv0zBL9yr7CWkVFPf7%2B126MkVciZCsDwnjaepSBu1HAKURv1f4RtKDNgP%2F%2BrrzHmpm3cOYODI9IiTjhoOPgidi27CKgVY7hDKSlKWy03LzjY0Jh8T2HqcmLQw2qrmwgY6pgEPg17PGqJatlQmLEd59RPxFrlDpxywBF%2B43wHqePzUrzvjv%2Bnvl9HIg4fH8IVwHVkkh7Wb5wAL6YE7APttaABTVX1WoGPdKfgghYbcrqYn5PgIK8T8WoP6QGAlukLpX0R3OK7f4XizRwCiRWX%2FyF%2BJo9UCvYnvSi4g7lqVaAzA7y29O6x0Nuo7h2%2FQcW8pM0SffNuCZnqKzo72e557do%2BT23kzLrAp&X-Amz-Signature=6254cc60633d322233eee52b22c354403a3382a538579ce8262a005ec7cd6508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
