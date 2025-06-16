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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7E7YU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKt032O%2FMHKvcSpFE%2FQHGC7ibvp6I2i3zqo3a0HZkQKgIgG3QiI2ojf7pRTa9sRonKUirKf3ib16Vt3brrtIat5KAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDHXAtTHGKQflnxErSrcA%2FUd1dsjFBSb7y3fAe0PDjl2fIAp6G4DUHQlAnMqp67UTp2Elf6AZJoADkIWq%2F2vmQefGNZDWHc05UawEbwiUjTbEmShVZCfI0Bm5HPP%2B4wKJ614ou6QVEjYjgL6Du%2BEK4%2FIj3qf07I51EgUuvSU3OhEOiNnDQX%2FWuul1qws2wdx7Hg437GwoGBO%2BgHEX1%2BWMRx0BoQtt9YZBKJCmJJJ62RZuOS2dd1h0SFVfPPc5E25yUn%2BvccOaFXybaSR%2B%2FOneXqldkzG2cyjpl5iBtMcVgJZcqRWNgBn1qnPtWooK7urPFico1HzxQr01w7kpKoEYRr2KFFvBnXXEcShtv4dqlKaYB8QhlkRH9ZzwAzwMoHReHbb7qHBJ9Jb2kpxVfdumMZDxt%2BRoxZsVrv%2BIZQUVLyQ8vItgB%2FrJEgaj2xkd60DrqCuUNU65bIWKkzjtDTqsRi21UgnliaLz4CdQWUAzXkenZHgTxZeWGpXJki5SHH0NJ2GxqXXNl%2FoaSz963YisEjlEpj1zLaA5C3T5jQg4aW%2FoShnSJGaXrQBFANTB80n0NSZHx5UneaKza8B3KwyIggWw9Hbwi9ct1Pm0r9P829rn9n2vWBYY3WkJ6BIXExfgPO5ASq3gqoXIuiXMMXIwMIGOqUBP8zjZ6fslBBIEbqjHZux834MjEoKw2j6CxvhafqUthXt97WVQuqk5u8GeT6zAYd9xyOgL0ySaxTO15MFKDK0Jb6z3K%2FlnWJe3kks4xQfEkPfo9dsMoMqqnDnxFQtgv%2BmfJaPYxXqaz6PjlvIy2%2B4N1IYBTlYR6fVh84M2RPnHwq%2B9IGq%2Bk0zKrZMHL9DtA%2F%2B0Is8wooiC0aa2BuLWo0wiPhKa%2BhM&X-Amz-Signature=122caa74f110bb026a9e3abdb2cbdc30abf0216493dcd1f599d8d9b26f55f69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7E7YU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKt032O%2FMHKvcSpFE%2FQHGC7ibvp6I2i3zqo3a0HZkQKgIgG3QiI2ojf7pRTa9sRonKUirKf3ib16Vt3brrtIat5KAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDHXAtTHGKQflnxErSrcA%2FUd1dsjFBSb7y3fAe0PDjl2fIAp6G4DUHQlAnMqp67UTp2Elf6AZJoADkIWq%2F2vmQefGNZDWHc05UawEbwiUjTbEmShVZCfI0Bm5HPP%2B4wKJ614ou6QVEjYjgL6Du%2BEK4%2FIj3qf07I51EgUuvSU3OhEOiNnDQX%2FWuul1qws2wdx7Hg437GwoGBO%2BgHEX1%2BWMRx0BoQtt9YZBKJCmJJJ62RZuOS2dd1h0SFVfPPc5E25yUn%2BvccOaFXybaSR%2B%2FOneXqldkzG2cyjpl5iBtMcVgJZcqRWNgBn1qnPtWooK7urPFico1HzxQr01w7kpKoEYRr2KFFvBnXXEcShtv4dqlKaYB8QhlkRH9ZzwAzwMoHReHbb7qHBJ9Jb2kpxVfdumMZDxt%2BRoxZsVrv%2BIZQUVLyQ8vItgB%2FrJEgaj2xkd60DrqCuUNU65bIWKkzjtDTqsRi21UgnliaLz4CdQWUAzXkenZHgTxZeWGpXJki5SHH0NJ2GxqXXNl%2FoaSz963YisEjlEpj1zLaA5C3T5jQg4aW%2FoShnSJGaXrQBFANTB80n0NSZHx5UneaKza8B3KwyIggWw9Hbwi9ct1Pm0r9P829rn9n2vWBYY3WkJ6BIXExfgPO5ASq3gqoXIuiXMMXIwMIGOqUBP8zjZ6fslBBIEbqjHZux834MjEoKw2j6CxvhafqUthXt97WVQuqk5u8GeT6zAYd9xyOgL0ySaxTO15MFKDK0Jb6z3K%2FlnWJe3kks4xQfEkPfo9dsMoMqqnDnxFQtgv%2BmfJaPYxXqaz6PjlvIy2%2B4N1IYBTlYR6fVh84M2RPnHwq%2B9IGq%2Bk0zKrZMHL9DtA%2F%2B0Is8wooiC0aa2BuLWo0wiPhKa%2BhM&X-Amz-Signature=860dc7223ced2518b6c8de37077ca9e62db88d05880f6cb6ce40998fd21d9bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7E7YU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKt032O%2FMHKvcSpFE%2FQHGC7ibvp6I2i3zqo3a0HZkQKgIgG3QiI2ojf7pRTa9sRonKUirKf3ib16Vt3brrtIat5KAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDHXAtTHGKQflnxErSrcA%2FUd1dsjFBSb7y3fAe0PDjl2fIAp6G4DUHQlAnMqp67UTp2Elf6AZJoADkIWq%2F2vmQefGNZDWHc05UawEbwiUjTbEmShVZCfI0Bm5HPP%2B4wKJ614ou6QVEjYjgL6Du%2BEK4%2FIj3qf07I51EgUuvSU3OhEOiNnDQX%2FWuul1qws2wdx7Hg437GwoGBO%2BgHEX1%2BWMRx0BoQtt9YZBKJCmJJJ62RZuOS2dd1h0SFVfPPc5E25yUn%2BvccOaFXybaSR%2B%2FOneXqldkzG2cyjpl5iBtMcVgJZcqRWNgBn1qnPtWooK7urPFico1HzxQr01w7kpKoEYRr2KFFvBnXXEcShtv4dqlKaYB8QhlkRH9ZzwAzwMoHReHbb7qHBJ9Jb2kpxVfdumMZDxt%2BRoxZsVrv%2BIZQUVLyQ8vItgB%2FrJEgaj2xkd60DrqCuUNU65bIWKkzjtDTqsRi21UgnliaLz4CdQWUAzXkenZHgTxZeWGpXJki5SHH0NJ2GxqXXNl%2FoaSz963YisEjlEpj1zLaA5C3T5jQg4aW%2FoShnSJGaXrQBFANTB80n0NSZHx5UneaKza8B3KwyIggWw9Hbwi9ct1Pm0r9P829rn9n2vWBYY3WkJ6BIXExfgPO5ASq3gqoXIuiXMMXIwMIGOqUBP8zjZ6fslBBIEbqjHZux834MjEoKw2j6CxvhafqUthXt97WVQuqk5u8GeT6zAYd9xyOgL0ySaxTO15MFKDK0Jb6z3K%2FlnWJe3kks4xQfEkPfo9dsMoMqqnDnxFQtgv%2BmfJaPYxXqaz6PjlvIy2%2B4N1IYBTlYR6fVh84M2RPnHwq%2B9IGq%2Bk0zKrZMHL9DtA%2F%2B0Is8wooiC0aa2BuLWo0wiPhKa%2BhM&X-Amz-Signature=666acf65c113e4066520462789f403ea95811d939e08d06d6a0696829102dc11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZWIQ4A%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCQoLhYMWRX0Jn1cjIAmriBR%2BU5gUQfsNqi5Wxy1nfHAAIgHoQvwGQDeSHnCt92P4hweSKtrfwdebYOUp%2B1U3kYvAoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDO%2F2JaGzd9FeLAbRVCrcA52x%2FXjHVcGAvrw5GtXt8JRYDXjMuxhQenLwwcfx5yOB684G67cQud%2BxjW4bDRlCTzwqciDcuXggKqx5dDGhzsvddO3c1CoijKpfhu7bQfjyhZ31hcplJtJQu21lHq5YgNeAuDV3hwJixv3TrKybiexXJMRXXDOd5qPV3H7mx4465rQcKwysRPJYR698ZWYJI9iL4H9dfTGQ%2BmdCtqqJAlH8Y7Bc%2BYQik%2BzTmg5mkigKYTtgFaGO2GJ4F8mi49Ob1gKbbmQW18Hqkskhf8dapX2CWS4NmrbaU824U8VT9bXXT9%2FQDLbpxtjrC1bLVjf4N5PwHiVxcjb%2FhFgcGOHqEddBv%2BTYtg1kZuD2OROOH6%2FLS%2FmSZwHE4IRQPyOH2Q4KcVki9YN18MoN%2BumlN7CuT%2FAKbM6Jj4jzR4%2BgdmaSvBqddb%2BUsgAim2czsskps%2FmsbzrogUdqibuzsSoGYIbdpQeQAGxl8BDnfwVpk34gKShB0UiIHs%2BhdUj1qilTmh4SdeI87MyGcSjgIJy0ZD%2BD68R58ygTGZwgDLc80QB4W%2BHIZz27H16P0KFwuqy6sPrAoBTyJuLi7ax7WK8%2FKxpkCn6xBMLSFGP0ZKSjP%2BBZE0t0WuvMxC47l1vCYbWRMPTIwMIGOqUBitdjRQJnbDKdV7ZmHjpkzVS6fI25gR8Os7Wx06re1NTJkH4uyzk5U3mVXZzR8oCtIwIbzq4UQPAuqtIaJ6iFEkPEgOX38M2FWvhNkcb00cL3GtWGzfdpySghGcgqwtRA7Gijbx6wEIHHDLGIPIiz8r8Ys8BS5yb1I2lfQHp4xN6DdEVW8cVmwMkrO2dx3iayb1Aqd5lnW6alzGM%2BSzeSMUqO4VIW&X-Amz-Signature=29c974ca29f87b73fc3e050a551b2f3275bcad5cef7479837d2c50e3644bdbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRUKXZR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2F4xFXb29w%2FePUMX5WBafiqyqvNVqNOzXMgYqVvVoFrAIgK5%2BDnqbpA0GPA4RPMYnbCRamVf%2B%2BSB2hi6iK2UIhktoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPC83bH%2FIhvh7RgE4ircA2ZpH5gap6N%2BaQVl0LYWHlJRci8nstzcvHbEIyyKrm4WUKn%2BKpF7zEzv7tl2sQV8%2BihVYqo5UjeoXkTFgUsLau5hYyier6hXrI2V6F0wwfqdt0JsLQjZzQtbezXbg%2B74pbpjF4L7lF4MZGLjNkvtFRQUc0qQsfyathaLWDPAVNzIxh%2FSyrf4ke%2BaUCuej6%2FGiZdFmBu2U8HCfZnnRAHWeRY3cUnpXfQC%2FVtE%2F9G3zcvu2j00Yfizsj2tNVfilynoLDhKGM9Lgr82Wynd9hmohzdowxNYjktd0sQi2MRAfiUIeN8AHHwKWRXPpGpnruZcwxTDiOdkHlZZJh0WoQaIMiWhq55vStggg5T3en5n5m2nMk9Y3%2FJBQq%2BbkcK3AZO6c7YEOsaUEjj%2Fp0uiEwPf9ZDBk1WcwSFwDsp1EFUpKL7g%2BC0nS3dRX6LqxQECoZyMi4jQAd1KGQuIAJwPXQ1Xj5%2FyLWPqJUmQdU6QEIgVItm69MR3zhbmYveLl7I4NP3gT8JpzLhjzQdQqKiak6iGDLSV2Ubz78g7UK3Oo5KbPNWFrDhqs3YGLdHMpEjnWmyuLqIkjTTbbSYq30NnEwAZVWUFNKfKLDnHhYxo%2B3ZUdOMdMHH%2FPWMJlv%2BJuHj1MI%2FIwMIGOqUBsyaO1%2FovgXWyfjwe06DkkR6xXz%2BDr%2BrsUxEQCgdJ4U7K9eEYPJJBlkVrF5eYvWcVew68q%2BNm4gVMfEKGmjojDa2wHBN%2BBTMI%2Fp8Y19wJt2DFAU5vbuUnx9jMz3u3HWxQFIXOluVwhG4Hrn%2B%2FZ%2B9Ei4OdiqD7qqmH7%2BL0CWC4o25c44Nq4%2B4o2nuK%2BN%2Fozlh0h1cuaagTwH1p%2BTdZGap3us%2F%2B351F&X-Amz-Signature=4f97932e8ed2eb4014b68f1cd966829a93e9c2a6d2b07c8153a65b0ff8ea8cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN7E7YU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCKt032O%2FMHKvcSpFE%2FQHGC7ibvp6I2i3zqo3a0HZkQKgIgG3QiI2ojf7pRTa9sRonKUirKf3ib16Vt3brrtIat5KAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDDHXAtTHGKQflnxErSrcA%2FUd1dsjFBSb7y3fAe0PDjl2fIAp6G4DUHQlAnMqp67UTp2Elf6AZJoADkIWq%2F2vmQefGNZDWHc05UawEbwiUjTbEmShVZCfI0Bm5HPP%2B4wKJ614ou6QVEjYjgL6Du%2BEK4%2FIj3qf07I51EgUuvSU3OhEOiNnDQX%2FWuul1qws2wdx7Hg437GwoGBO%2BgHEX1%2BWMRx0BoQtt9YZBKJCmJJJ62RZuOS2dd1h0SFVfPPc5E25yUn%2BvccOaFXybaSR%2B%2FOneXqldkzG2cyjpl5iBtMcVgJZcqRWNgBn1qnPtWooK7urPFico1HzxQr01w7kpKoEYRr2KFFvBnXXEcShtv4dqlKaYB8QhlkRH9ZzwAzwMoHReHbb7qHBJ9Jb2kpxVfdumMZDxt%2BRoxZsVrv%2BIZQUVLyQ8vItgB%2FrJEgaj2xkd60DrqCuUNU65bIWKkzjtDTqsRi21UgnliaLz4CdQWUAzXkenZHgTxZeWGpXJki5SHH0NJ2GxqXXNl%2FoaSz963YisEjlEpj1zLaA5C3T5jQg4aW%2FoShnSJGaXrQBFANTB80n0NSZHx5UneaKza8B3KwyIggWw9Hbwi9ct1Pm0r9P829rn9n2vWBYY3WkJ6BIXExfgPO5ASq3gqoXIuiXMMXIwMIGOqUBP8zjZ6fslBBIEbqjHZux834MjEoKw2j6CxvhafqUthXt97WVQuqk5u8GeT6zAYd9xyOgL0ySaxTO15MFKDK0Jb6z3K%2FlnWJe3kks4xQfEkPfo9dsMoMqqnDnxFQtgv%2BmfJaPYxXqaz6PjlvIy2%2B4N1IYBTlYR6fVh84M2RPnHwq%2B9IGq%2Bk0zKrZMHL9DtA%2F%2B0Is8wooiC0aa2BuLWo0wiPhKa%2BhM&X-Amz-Signature=563ab9ebe1ad33a7713a4f6be23944018dc9698fe470480391d9e293e1dc3fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
