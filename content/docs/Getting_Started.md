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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7M7BC7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD3rbNL6gOJh2oVqbXhUEX3pcnHBwC03dk%2FVQmpE5y34AIhALeJILsOTtB3f%2FmLmCJh6bv0VbSwB%2B5tv7MjX1nw1GB5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzhwBq6fBsOqVV7hXgq3ANI6oY6nmRG4Se%2F5AgzsChnFI1AmiO7Dv7idB8%2FzBLSY3nwpEjNxMweFLX2kTNkHnHXhmQlpeqarI0zuz7ZxwayYa%2FMJZuL0sKRq9q9Ijn5Vun64Ik0AdUQCijn5Wr7oFbxoqmrDaoIK8mNJpZSR7n5hgp4Smb1z36R8Ce%2FAdik3cJ4rwVF4q%2FvmuzVnd9J%2B5aMGrRg3K9TdADpkxg4iRiPqU2bUSY4jOW2fs%2BrCestLZvV8hHmEls%2F0WbXM5H68sCSCe6JyslvDSW9TGXjvRNygxZZwVDWqN6povGPhwHjeYDeUsHhrfH6oqB8cbQjA%2FBQXgwbGgHmCLHQD6G6HbpAIWfdnKzHli58wRGE1VPV9QrZX1dgRUmNeB%2FaXsJVbk4Plqqf5NwJO9ZsFvxtvuQyGdGErGm0aAZycvHLn1WRlj9zh1Wouivtb9jpEulaoux%2BHZ4NVnxNQcRmPbRy4x%2FgQmETOiMMtRDOZ6V48KMsIhu1Krjpscqfl4%2BepNAgVIsrXGXmhRcRHVUIznTPWv9WHIHHbflAfjxV9x0YMWPNntOM4uDUKppdfb%2FX5veqassxf0Q3MGKp4vcbisL7qt7kptFbc5BTrXKwpief6GbmUyjMj82RUCGiB2gt2DDins%2FBBjqkAWcTRgeXZUJEKkhrg4CNddHy%2FKKyI2l22wlNEK0EMcqYguSsdzCSVvG2Q4XuZ8QtC4fbaq00oVshLUfuFCoSF5elDtHb1jDUXXYih%2FqrunuZIg8Hxbr3WXHlt5Z2KnjgbJNuS5%2BAeNJCq3kVSnwjmsmAUzl2y%2BSHsa6Iu%2FNoHfwqh5FSTqNmVIntobmD36fmL7z%2B%2B8Pwf%2BX7xtj%2BUoUUyCPXMsN3&X-Amz-Signature=9c5ab7267ece53d1797eb18f24dac1d7d0d36a5f760f0bbbdae20dad564b646c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7M7BC7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD3rbNL6gOJh2oVqbXhUEX3pcnHBwC03dk%2FVQmpE5y34AIhALeJILsOTtB3f%2FmLmCJh6bv0VbSwB%2B5tv7MjX1nw1GB5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzhwBq6fBsOqVV7hXgq3ANI6oY6nmRG4Se%2F5AgzsChnFI1AmiO7Dv7idB8%2FzBLSY3nwpEjNxMweFLX2kTNkHnHXhmQlpeqarI0zuz7ZxwayYa%2FMJZuL0sKRq9q9Ijn5Vun64Ik0AdUQCijn5Wr7oFbxoqmrDaoIK8mNJpZSR7n5hgp4Smb1z36R8Ce%2FAdik3cJ4rwVF4q%2FvmuzVnd9J%2B5aMGrRg3K9TdADpkxg4iRiPqU2bUSY4jOW2fs%2BrCestLZvV8hHmEls%2F0WbXM5H68sCSCe6JyslvDSW9TGXjvRNygxZZwVDWqN6povGPhwHjeYDeUsHhrfH6oqB8cbQjA%2FBQXgwbGgHmCLHQD6G6HbpAIWfdnKzHli58wRGE1VPV9QrZX1dgRUmNeB%2FaXsJVbk4Plqqf5NwJO9ZsFvxtvuQyGdGErGm0aAZycvHLn1WRlj9zh1Wouivtb9jpEulaoux%2BHZ4NVnxNQcRmPbRy4x%2FgQmETOiMMtRDOZ6V48KMsIhu1Krjpscqfl4%2BepNAgVIsrXGXmhRcRHVUIznTPWv9WHIHHbflAfjxV9x0YMWPNntOM4uDUKppdfb%2FX5veqassxf0Q3MGKp4vcbisL7qt7kptFbc5BTrXKwpief6GbmUyjMj82RUCGiB2gt2DDins%2FBBjqkAWcTRgeXZUJEKkhrg4CNddHy%2FKKyI2l22wlNEK0EMcqYguSsdzCSVvG2Q4XuZ8QtC4fbaq00oVshLUfuFCoSF5elDtHb1jDUXXYih%2FqrunuZIg8Hxbr3WXHlt5Z2KnjgbJNuS5%2BAeNJCq3kVSnwjmsmAUzl2y%2BSHsa6Iu%2FNoHfwqh5FSTqNmVIntobmD36fmL7z%2B%2B8Pwf%2BX7xtj%2BUoUUyCPXMsN3&X-Amz-Signature=685e558fcb4b4c8b1e974102345f7ce9deda9216a392da754dc8fb78d086aae0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7M7BC7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD3rbNL6gOJh2oVqbXhUEX3pcnHBwC03dk%2FVQmpE5y34AIhALeJILsOTtB3f%2FmLmCJh6bv0VbSwB%2B5tv7MjX1nw1GB5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzhwBq6fBsOqVV7hXgq3ANI6oY6nmRG4Se%2F5AgzsChnFI1AmiO7Dv7idB8%2FzBLSY3nwpEjNxMweFLX2kTNkHnHXhmQlpeqarI0zuz7ZxwayYa%2FMJZuL0sKRq9q9Ijn5Vun64Ik0AdUQCijn5Wr7oFbxoqmrDaoIK8mNJpZSR7n5hgp4Smb1z36R8Ce%2FAdik3cJ4rwVF4q%2FvmuzVnd9J%2B5aMGrRg3K9TdADpkxg4iRiPqU2bUSY4jOW2fs%2BrCestLZvV8hHmEls%2F0WbXM5H68sCSCe6JyslvDSW9TGXjvRNygxZZwVDWqN6povGPhwHjeYDeUsHhrfH6oqB8cbQjA%2FBQXgwbGgHmCLHQD6G6HbpAIWfdnKzHli58wRGE1VPV9QrZX1dgRUmNeB%2FaXsJVbk4Plqqf5NwJO9ZsFvxtvuQyGdGErGm0aAZycvHLn1WRlj9zh1Wouivtb9jpEulaoux%2BHZ4NVnxNQcRmPbRy4x%2FgQmETOiMMtRDOZ6V48KMsIhu1Krjpscqfl4%2BepNAgVIsrXGXmhRcRHVUIznTPWv9WHIHHbflAfjxV9x0YMWPNntOM4uDUKppdfb%2FX5veqassxf0Q3MGKp4vcbisL7qt7kptFbc5BTrXKwpief6GbmUyjMj82RUCGiB2gt2DDins%2FBBjqkAWcTRgeXZUJEKkhrg4CNddHy%2FKKyI2l22wlNEK0EMcqYguSsdzCSVvG2Q4XuZ8QtC4fbaq00oVshLUfuFCoSF5elDtHb1jDUXXYih%2FqrunuZIg8Hxbr3WXHlt5Z2KnjgbJNuS5%2BAeNJCq3kVSnwjmsmAUzl2y%2BSHsa6Iu%2FNoHfwqh5FSTqNmVIntobmD36fmL7z%2B%2B8Pwf%2BX7xtj%2BUoUUyCPXMsN3&X-Amz-Signature=cbb2586a30ac1b5ee9854e5b0414fdf0f4c624bcf0d6bf6d662629c5ba77972f&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z5IS3P5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCWZ%2FGUdsESUGpeR5F7d7ZAA5%2FasEbmDCOzVJKX5tlTyAIgPIpWSNXn45SaEAMlLrmiFuKVAjaQBec5itlYCI8Fp2gq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKUzW0sTbriiQQHNCCrcA4oEy5443qRKOg6DObY8ZM0EfKhWOa6eDpwlM6dG0FE98HEerOYNrWLzNtrmRhnVbsif1si2syBYYSwWenBEmZLikpFrEkQblXBvSEdXWVIns%2Bku%2Ba087WfCCjgr65Z7KZgy6f6UZrHBdqOqJlUDIT5ePAaot3YStwIfRcJPt5QUshL22eMmVFTTgkD11atECeTq2af1wEHNnIyuUZWcoBXkkufJD9hTIgRmfDvq%2B90BkS3cwKyss1sWpWnY3H0C7svGfa%2BRvIidWmMy3PywbxjTpIkr8BHyY5HKyjV%2Bd%2F2ckC%2FH74BKPmgz3%2FusIdWQU7%2FPhpSfB0HAxn4sovJJnxdB0rmyOsttKgNFHLVfJgTT4Hi%2BRBIlXKbmgtiXr9%2BvzEvF80IiT9MHAVMR9uHkbPpHyX1KMcJD7PhV8et6IecRFmpdF6djKpbDPzw86F5phusFrqfVsPJzWVCiS9H6l6Od6waUeXwrok3WF2kgkrQXhRc5Iz9BKlNYf0U8xP4vnMqJ5okTqj9oyU%2FaKgl%2FtfyPGwhqCk5zkBqZ7SFUdloHYCTYzJU%2BTp96tF1OFceAtPV3cHGY63Hhbfl3ZPETzxb2hPnGN%2FqL76wMFgpYW6pmSPxMn81AEjuWOZoGMPidz8EGOqUBLQm1Xo9PSzC4yUUe2RwTGBI43K9htdlit50V%2BolvPQgknpFGRJ34ePnkH1Kux7Ljbz3H6MBdERxXfamGca6Jo9%2B%2BjnDEmAUzR%2BJU5WIm3gyfVIo4IMPiUjjeZVvW6K%2FT%2FsUOc53dtoGzsbqAYlJeAKzijTp%2FtLLoO%2FdwrXmpBOSMFGF9scNgYOMTek5UEt0EefDbsIVpMGfWQkE%2FzAL6kfXLOcYQ&X-Amz-Signature=eabf468f4bca221789cbc633b1e8f37a14ef99a339e46c59d5b5c69ce6e835e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4X7DGCJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC7PpzOEXmaU6i%2FlNEge0be7st15t0TYWWt466Al3OEwQIhALdLgJWtTbW4zKev%2FCVzBU9Ki5ptPbqbR3jWNrIzwsT4Kv8DCDsQABoMNjM3NDIzMTgzODA1IgyP4ClZ5g4SXcyVx1cq3APCd87ha%2FxsOqapxFe9bbdmIBdKTrAQKVui13bQQaPkFh3qiUZT2yjmIdoIi1lhkjrYnHc7qn4rNp4VyjSQjjQIpt4FJ8D7ga8c55PbYruBLs%2BZMUIKNWPHrqVeP59rieFo1BAnPtq8InLVdwkyU8JQdWGeNe6Nr3WZcsPYGmoHihA6ZTIPHqYM9zmFI0%2B2vIrYddzEKm64G3263PFxJ3Vf04vjqRLn0yWsLAsEeGnr%2FxVJUMumC0kZtqPfijCsdxWZjAYTXV1BDZe4r3JNpkT0AIwaq0p8H90bBALvqJSvssoAIaR2a9a%2BoHYy%2BdE2PqF4oc6%2FARXOu9D2As%2B3NGvSrMB5BIJtk2NAqERklBu5TJlwh0BLWb89962v8EJ6%2F1lpj8EshJf4ZUc144JNKQypBaNsQBkf1K%2BWiC3wMw3XmV8mpFsHxqTPGb0q7LQiVhXMVk6ZHqCHVt56E6KSbBwnV2vlWINrGAPm1fFddwnZ%2F0jqbwAE53%2B8sdM9MJDxtb9CF9V%2B%2B4pVrfvQ%2BsAydO4%2BuYlskj0Muodrwt1%2BLAROxHQFk6nNad9tkxs1GhxruQ1HP8SENTGcGjxcGOnOry6W3y9sjf08Osob2XnOpDVJhhfZz9cUy1NF2FPkQzDwnc%2FBBjqkAX9KV3Ymk2cGsfTvL3eJX2PaDEUPyuDv%2Fud0rqQmZyajt63z2oRqDG5Vo2s15S6YApf7586jAxJ6mf%2BinFqtOhwfnGEhoT24DBnJz0EJK7TfFFSgV8zXWXxW3c1KFgUt4pzXMEh2fkP9%2FfK61uaJ3jL1eyndfwjzEbPacxhd90eFXU5IyD5ETlkC6%2F4frxxm6Xw7vzNZMjos5eiWO%2FIzYA76NM7M&X-Amz-Signature=f678236a2797e4e87586ad220455a406bbb4743088f28c5d75b1743bf8449d23&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R7M7BC7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQD3rbNL6gOJh2oVqbXhUEX3pcnHBwC03dk%2FVQmpE5y34AIhALeJILsOTtB3f%2FmLmCJh6bv0VbSwB%2B5tv7MjX1nw1GB5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgzhwBq6fBsOqVV7hXgq3ANI6oY6nmRG4Se%2F5AgzsChnFI1AmiO7Dv7idB8%2FzBLSY3nwpEjNxMweFLX2kTNkHnHXhmQlpeqarI0zuz7ZxwayYa%2FMJZuL0sKRq9q9Ijn5Vun64Ik0AdUQCijn5Wr7oFbxoqmrDaoIK8mNJpZSR7n5hgp4Smb1z36R8Ce%2FAdik3cJ4rwVF4q%2FvmuzVnd9J%2B5aMGrRg3K9TdADpkxg4iRiPqU2bUSY4jOW2fs%2BrCestLZvV8hHmEls%2F0WbXM5H68sCSCe6JyslvDSW9TGXjvRNygxZZwVDWqN6povGPhwHjeYDeUsHhrfH6oqB8cbQjA%2FBQXgwbGgHmCLHQD6G6HbpAIWfdnKzHli58wRGE1VPV9QrZX1dgRUmNeB%2FaXsJVbk4Plqqf5NwJO9ZsFvxtvuQyGdGErGm0aAZycvHLn1WRlj9zh1Wouivtb9jpEulaoux%2BHZ4NVnxNQcRmPbRy4x%2FgQmETOiMMtRDOZ6V48KMsIhu1Krjpscqfl4%2BepNAgVIsrXGXmhRcRHVUIznTPWv9WHIHHbflAfjxV9x0YMWPNntOM4uDUKppdfb%2FX5veqassxf0Q3MGKp4vcbisL7qt7kptFbc5BTrXKwpief6GbmUyjMj82RUCGiB2gt2DDins%2FBBjqkAWcTRgeXZUJEKkhrg4CNddHy%2FKKyI2l22wlNEK0EMcqYguSsdzCSVvG2Q4XuZ8QtC4fbaq00oVshLUfuFCoSF5elDtHb1jDUXXYih%2FqrunuZIg8Hxbr3WXHlt5Z2KnjgbJNuS5%2BAeNJCq3kVSnwjmsmAUzl2y%2BSHsa6Iu%2FNoHfwqh5FSTqNmVIntobmD36fmL7z%2B%2B8Pwf%2BX7xtj%2BUoUUyCPXMsN3&X-Amz-Signature=c9e57a31aec8d73789ec362fa090386af435f28be211f9e8e996fc40ccc48985&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
