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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQRYJXJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlD50U%2B5tez9IkeDN9wQ%2Bt%2Butv4S7GePtsXAhds6U3zAiEAgXOM6xmOA8G8WnlhGvYs2tPK%2Bg1tCd2eH8PIxRyBBGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNFzHqd72r2mb%2BdmCrcA9lzYXNXRV2v66M08leamHq2yYdkIdxg2KVq4x%2BN%2FJZ0%2FfYU3ia7hsyl147Kafa3IEj%2F%2FqjzuvdTT4K06AcLmSiuGCFELl1%2FhjRArEnYzWGqVVcQAEA1%2FTarESV%2B2xcPAEb4w4IiM%2FrniNFgA2XKZn9IkqeZ3oAWU8ykcD%2BlWXpAX0xD6fUk4fn%2FQADxDnwBA5N9YcnadGZ08PbsLHQzCpuEzLmyrhq7I2kjusNyn%2Be5A6Ev1VCG6X%2FHWQGVG1vhTL%2BNqXh7ISok5haEl6CC0BSoarFfADdZg4yllnwg1IS0Q%2BBEUbld11oFa14vAhBwszGwhwwu0rp9MnsChyYCLTLCZtW34uOs85usxmAgsUpApHASj9VobXWVu%2BCb1wCqa1R7MM7pUYZk%2BKf4GEofZ5h8U3rZR6Z6kWGbIL9V%2FrOjAg2EqXsXUd%2FhDJXMmz5z%2Fx%2BRj%2FO9iGCTIqTiPV6AtFfeeSF%2FWVYzJa8Ea8v9kCCmsuuTV3pnE%2BXtPVdvB7A3zC%2BK67JdSzfJUS0ND9AxdXvI49rcvDV0jj9kgAz0iarsqzXM%2Bi0BMpR%2Bsqnkv4nvnVaiUSvD88Pda9VlIrsgwL9tnbScT%2BjJK7LDyG81wOH0WPbzWLxKCMKb6X26MIOy4cEGOqUBNAGxq5gdixiT3UTO6CNt%2B%2FtUr5JwbLryBFQ9oD2bXln%2Bfo0Ri4SxL6kRP5auTjzLdfVSk0gtKdHdaIT2078VpP%2FFC5UMQ3bG9PODnYua15PyVg8oUtM6jkwDha8rqsRLnwasArQrUx1s1uNQ9U6Xy3HxcKEdttJQGb62w4ijnvj%2B1sl1kmlDNRkLzvG6ckPyrxFzDDmR%2BOlvZt1qc%2FxiOHKTlZSs&X-Amz-Signature=05491731bd47cfc0ad80aece4ecdd8bf022b60a4bcb68c7d6f4da717f7e381b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQRYJXJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlD50U%2B5tez9IkeDN9wQ%2Bt%2Butv4S7GePtsXAhds6U3zAiEAgXOM6xmOA8G8WnlhGvYs2tPK%2Bg1tCd2eH8PIxRyBBGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNFzHqd72r2mb%2BdmCrcA9lzYXNXRV2v66M08leamHq2yYdkIdxg2KVq4x%2BN%2FJZ0%2FfYU3ia7hsyl147Kafa3IEj%2F%2FqjzuvdTT4K06AcLmSiuGCFELl1%2FhjRArEnYzWGqVVcQAEA1%2FTarESV%2B2xcPAEb4w4IiM%2FrniNFgA2XKZn9IkqeZ3oAWU8ykcD%2BlWXpAX0xD6fUk4fn%2FQADxDnwBA5N9YcnadGZ08PbsLHQzCpuEzLmyrhq7I2kjusNyn%2Be5A6Ev1VCG6X%2FHWQGVG1vhTL%2BNqXh7ISok5haEl6CC0BSoarFfADdZg4yllnwg1IS0Q%2BBEUbld11oFa14vAhBwszGwhwwu0rp9MnsChyYCLTLCZtW34uOs85usxmAgsUpApHASj9VobXWVu%2BCb1wCqa1R7MM7pUYZk%2BKf4GEofZ5h8U3rZR6Z6kWGbIL9V%2FrOjAg2EqXsXUd%2FhDJXMmz5z%2Fx%2BRj%2FO9iGCTIqTiPV6AtFfeeSF%2FWVYzJa8Ea8v9kCCmsuuTV3pnE%2BXtPVdvB7A3zC%2BK67JdSzfJUS0ND9AxdXvI49rcvDV0jj9kgAz0iarsqzXM%2Bi0BMpR%2Bsqnkv4nvnVaiUSvD88Pda9VlIrsgwL9tnbScT%2BjJK7LDyG81wOH0WPbzWLxKCMKb6X26MIOy4cEGOqUBNAGxq5gdixiT3UTO6CNt%2B%2FtUr5JwbLryBFQ9oD2bXln%2Bfo0Ri4SxL6kRP5auTjzLdfVSk0gtKdHdaIT2078VpP%2FFC5UMQ3bG9PODnYua15PyVg8oUtM6jkwDha8rqsRLnwasArQrUx1s1uNQ9U6Xy3HxcKEdttJQGb62w4ijnvj%2B1sl1kmlDNRkLzvG6ckPyrxFzDDmR%2BOlvZt1qc%2FxiOHKTlZSs&X-Amz-Signature=9fcd92b2c8cd394bbee829ef3826df37d49ee38dc6c45cb024cfb774baf32dce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQRYJXJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlD50U%2B5tez9IkeDN9wQ%2Bt%2Butv4S7GePtsXAhds6U3zAiEAgXOM6xmOA8G8WnlhGvYs2tPK%2Bg1tCd2eH8PIxRyBBGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNFzHqd72r2mb%2BdmCrcA9lzYXNXRV2v66M08leamHq2yYdkIdxg2KVq4x%2BN%2FJZ0%2FfYU3ia7hsyl147Kafa3IEj%2F%2FqjzuvdTT4K06AcLmSiuGCFELl1%2FhjRArEnYzWGqVVcQAEA1%2FTarESV%2B2xcPAEb4w4IiM%2FrniNFgA2XKZn9IkqeZ3oAWU8ykcD%2BlWXpAX0xD6fUk4fn%2FQADxDnwBA5N9YcnadGZ08PbsLHQzCpuEzLmyrhq7I2kjusNyn%2Be5A6Ev1VCG6X%2FHWQGVG1vhTL%2BNqXh7ISok5haEl6CC0BSoarFfADdZg4yllnwg1IS0Q%2BBEUbld11oFa14vAhBwszGwhwwu0rp9MnsChyYCLTLCZtW34uOs85usxmAgsUpApHASj9VobXWVu%2BCb1wCqa1R7MM7pUYZk%2BKf4GEofZ5h8U3rZR6Z6kWGbIL9V%2FrOjAg2EqXsXUd%2FhDJXMmz5z%2Fx%2BRj%2FO9iGCTIqTiPV6AtFfeeSF%2FWVYzJa8Ea8v9kCCmsuuTV3pnE%2BXtPVdvB7A3zC%2BK67JdSzfJUS0ND9AxdXvI49rcvDV0jj9kgAz0iarsqzXM%2Bi0BMpR%2Bsqnkv4nvnVaiUSvD88Pda9VlIrsgwL9tnbScT%2BjJK7LDyG81wOH0WPbzWLxKCMKb6X26MIOy4cEGOqUBNAGxq5gdixiT3UTO6CNt%2B%2FtUr5JwbLryBFQ9oD2bXln%2Bfo0Ri4SxL6kRP5auTjzLdfVSk0gtKdHdaIT2078VpP%2FFC5UMQ3bG9PODnYua15PyVg8oUtM6jkwDha8rqsRLnwasArQrUx1s1uNQ9U6Xy3HxcKEdttJQGb62w4ijnvj%2B1sl1kmlDNRkLzvG6ckPyrxFzDDmR%2BOlvZt1qc%2FxiOHKTlZSs&X-Amz-Signature=5141bd27e19015739f2d76a1a442b341ec8b0d23fbac13111c0afb43825b36d9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVZZL43%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC9JOQ9tM82P%2FXAXCFwtaXd5TlmgoY%2BT7b9qOKp1gkztQIfQ1D8GhN%2Fne9E2U0BSmTvRFVQjwOIFHFk93ldNJRWhSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnK%2BmKWaGGt%2BNrOAzKtwDYNMmYm1YB0QqHnGbN9y7NkhYxkvlj6POhRxWn38ewn3PFkFIU72GwJMSyp7uEL5MQ9ayUYh%2BoR2JjxyUKVa0IGH7SLVFn%2BmOuwVREEXbyXWyzsbLQa4imsX4wIYrO6FFSkay4Z9Yb9dMc7zV5pBXfvnQuvv17WQt3pGT6hBSC%2FmkFMnB3geFXxv7N6rgpiwc8glgksQEd7auoXDMc3Aq0U9XleaceT4%2BcH%2FB58CIT3wSqzbJcHFdLd29F4kTWuhQV3I9YL5S8nRIAnVCXXq6xOSqq38xKNe8Xl5Q4AsT07EJdH49EYHjpHNtS41tszFs7d%2F9hWtMzASCXUQ%2FRN7MJ2%2FAInLvz4lM%2FKhPscSr%2FeXV6IAYy9TCGL8vURK26E5jsvXrf8aCeWCVEsZ6PcdiKeUR4CC7zeVCUQn%2Fh%2F4Uhx8mV2tFSiXoigHFMt8XflSO7AsJDq%2BMm%2FoMQWjMPNx3vfxy%2B7hGN%2BMpQc%2BkN%2Fc1Oa%2F1jLvWhSuZRlKo5E0UMJKIekHjFlX9h1lTahu8uddfrlJ9o9Jc33oKD4s1%2BBBXTWAbiYUx0PYpcW2ezlSvWlwW6zcD1CE4Yy%2Bgnq2OciV4Modbg1dVR42Lsa%2B8wuhOMklROa%2Fq5ykV%2Fm8HZWswoOrhwQY6pgFXtnxdY8fWUgwSVSVmsPVdfICSacextyObLirPOm8I36Q9ajjFtIAovIDouyYmPRcZIKAWmdlQCRtgystGru9MA9CWjvej17FWh0owt8vwzS0J%2B6ryVBxt23IwdeSqs5z2TipkpI4qPFw76cnYNCTapw6YgWEXBoUb2g73pzT3%2FTQmxh4DtUUh%2FjurGR5Gm20T26AASSvPJz%2FXUeHOVXg2m07f2doc&X-Amz-Signature=5254ef58a7dcb57ca56a3eb5defc5161cb7c6dc1eb29b9b1fdb9c76e58a1018d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MT3CNET%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUew%2F%2BBjsoICf91aPjumkcplZ7dApECxMa5Sq4n%2FmrvQIgWmWNDkfoS9hQu%2BjMFh01mS9st6yDLP7EglVZys8T7t0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk3UrUcOB6csnuCDyrcA1sQKPzqaA4jGaQVPsjoUI3YzFwlg2Yc%2Fj6j%2B9YoWqJTgxnMHHxrYHpjcyzKvXEQu1pnNpMWWNx%2F1vkHOwM8xGJvCK7DCCML2Mt7s43do1rw2JBOcuPkdTpd%2BqktMp0B%2FGXmKnHCN3tvvKGMdrIo33dIuSx9YveZ8jQ92ThYwZ5vbnRgmkeZEQyCKH1898DvwJYRo7SHwOJ3WWOrjAl8kFPbpiN%2BmnVIh%2F5m9U8HnysI%2Bo4dqyz%2F0j6iLMahEvevuQwVBkZHe5qeZJUD65rJ%2BzETmGHe%2BSYIi1KRCRhdNKxP%2FScQ01bp0JjwDJKpa3bI2Q2iPvTYWNmGKODn3vIyJFVWivc42aVpDRUEDqL1HQZwF5JI%2BCCJtaaOPnrlN7ZsCccGyXbmvG6Nn9BmbesXbZo03Rv39k%2B52Pk7RCsLw%2FeDcI33lvYteQGJtLj01pZIhMn9p3kTvIoJEgETF7U6Bq2M3z5bclMj%2B8UvW%2FGCWD3ctPCm60M0q%2FmAZ0fDUQOI3x4UYwpYz7oTCPFwIkObQrzBZOL%2BXu%2BRPieHqzJnkPbS7LUZlIVLeMBUmHADaVa4DRYM5w6DMXuUs3j%2BfNgEtk3z%2BNxaUoylom7qYtObQ4Ltw7%2FXIJQvnYo29kBnML2y4cEGOqUB7wfdHVKaDrlUVd3OVFOpv2EZE%2FsjImH4XtWNcgxEbUZnU8YFJ%2BKQzqe0S0tHit1g4ZKIY2nhzuEjvGwYwh0n5BZ7JVEt5%2F8tx%2BB51GkJTXZBwFYb0oh3q2qEa9s%2F5zwmFJ2qyHEnSiwn%2FYrcZQPEw5GGm2GvabXAyppKbkN7eosN66e452YFJ5MYdYEMZ91lqA91p%2F9vGb4cLKeTZcECM%2Bza6IWY&X-Amz-Signature=089fdcd6893dd66b92252c1f0139a7372d9db2ff789b03f1db4de5b60ffe904f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNQRYJXJ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlD50U%2B5tez9IkeDN9wQ%2Bt%2Butv4S7GePtsXAhds6U3zAiEAgXOM6xmOA8G8WnlhGvYs2tPK%2Bg1tCd2eH8PIxRyBBGYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNFzHqd72r2mb%2BdmCrcA9lzYXNXRV2v66M08leamHq2yYdkIdxg2KVq4x%2BN%2FJZ0%2FfYU3ia7hsyl147Kafa3IEj%2F%2FqjzuvdTT4K06AcLmSiuGCFELl1%2FhjRArEnYzWGqVVcQAEA1%2FTarESV%2B2xcPAEb4w4IiM%2FrniNFgA2XKZn9IkqeZ3oAWU8ykcD%2BlWXpAX0xD6fUk4fn%2FQADxDnwBA5N9YcnadGZ08PbsLHQzCpuEzLmyrhq7I2kjusNyn%2Be5A6Ev1VCG6X%2FHWQGVG1vhTL%2BNqXh7ISok5haEl6CC0BSoarFfADdZg4yllnwg1IS0Q%2BBEUbld11oFa14vAhBwszGwhwwu0rp9MnsChyYCLTLCZtW34uOs85usxmAgsUpApHASj9VobXWVu%2BCb1wCqa1R7MM7pUYZk%2BKf4GEofZ5h8U3rZR6Z6kWGbIL9V%2FrOjAg2EqXsXUd%2FhDJXMmz5z%2Fx%2BRj%2FO9iGCTIqTiPV6AtFfeeSF%2FWVYzJa8Ea8v9kCCmsuuTV3pnE%2BXtPVdvB7A3zC%2BK67JdSzfJUS0ND9AxdXvI49rcvDV0jj9kgAz0iarsqzXM%2Bi0BMpR%2Bsqnkv4nvnVaiUSvD88Pda9VlIrsgwL9tnbScT%2BjJK7LDyG81wOH0WPbzWLxKCMKb6X26MIOy4cEGOqUBNAGxq5gdixiT3UTO6CNt%2B%2FtUr5JwbLryBFQ9oD2bXln%2Bfo0Ri4SxL6kRP5auTjzLdfVSk0gtKdHdaIT2078VpP%2FFC5UMQ3bG9PODnYua15PyVg8oUtM6jkwDha8rqsRLnwasArQrUx1s1uNQ9U6Xy3HxcKEdttJQGb62w4ijnvj%2B1sl1kmlDNRkLzvG6ckPyrxFzDDmR%2BOlvZt1qc%2FxiOHKTlZSs&X-Amz-Signature=29b72fb051db70bd4d9728cd1e25747df774fd373bce1686126b0239d08dee9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
