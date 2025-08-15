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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVF36NVS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBjMu6Z%2B30%2BMUHTzIvtkSE5EQ2GTrUXMFISqH3Vrc6wuAiAbLwVVw9nMFi4e1q2EzCRCTO92z9W%2FQeMQWVCRgHp8ECr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPB27qYhwxdLP3ugmKtwDpoVgBBfXTu9SoHNWGKR5sqE0RG%2BxoEbv5U%2BsdZ3mYVI6cDD2IFkTEzb3df5kOEKas58m%2BPWzursudl7LmA0Psm0PdG0GacYvplZzL63SHm7j92W7BGkcPXva91xdAnzb0VAJ5cqgRVNeZlB8pMRT3C%2F8NZ5zs8iwHVY4vKYw6V2cEs%2BX8rxSZyC2HPlh0YjwdVEelHJcS2XBOM75hd73Y27VJ1W88iJEQk34TuxRqc6LSGBt%2FhAJYlRWBhEwIFgjbv2XJxwKXqw%2BQNF8eikIpdsbN5BE3gpjTiH%2BG6nFNDxHysqEre3o8Qb3S6rf2BbfORFVNBhNBe8uVi6T%2Bb2vYVReUg0oCuyj5Z8wWIxDUHystmYHVFbmYN0yQfMAi5O5XGzy67%2FI5y52rHl7OyeVKeZNI%2Fj0KS%2F%2BzQ%2BRYC9%2FrVlba36XF6j8gRb9i8Q%2BrWtvZ%2FHeVBvPFDRdjyxH1umdfYWDZGH05Gbn%2FDyQrWGjZSYVUlM%2FADM0PxRkH7tDnV41uTZKO6AI%2BgPjk6dM7UEVguOHGu%2Fes3tzFi8mP%2Fcj084BdFgiyWQ7OUEHg9Van26KxxqqrnvOye1Jv5XGsPBJ%2FlYNMDjUFXIPWBZRvJzc0YjAbB%2B9Fl52DHbXiEEw8dr9xAY6pgHWSqLlkPaH6aiad6aLNnx1eAiEcCSqiKr1QCM6SJnuI%2FScnrWoDe49Kfu4x05RD%2BwxozZgVX5EQGZ%2BdWR2JW%2BZ9M%2Fy0rlCwSoKc3auX%2FM8rhM0p1RR2ufdPzfLtv07c2soP2WkkTRNHbqT62uhHrjNCiHMN1hBPkRgXIe03AKw8CV6SmJJPZRWEEqmuMysIkbsueZtt3xepH0i4NZI6JReYPVSnlwR&X-Amz-Signature=298ee95952730c6466993b7c082ec86d3de4bd566d661039741c025d821b464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVF36NVS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBjMu6Z%2B30%2BMUHTzIvtkSE5EQ2GTrUXMFISqH3Vrc6wuAiAbLwVVw9nMFi4e1q2EzCRCTO92z9W%2FQeMQWVCRgHp8ECr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPB27qYhwxdLP3ugmKtwDpoVgBBfXTu9SoHNWGKR5sqE0RG%2BxoEbv5U%2BsdZ3mYVI6cDD2IFkTEzb3df5kOEKas58m%2BPWzursudl7LmA0Psm0PdG0GacYvplZzL63SHm7j92W7BGkcPXva91xdAnzb0VAJ5cqgRVNeZlB8pMRT3C%2F8NZ5zs8iwHVY4vKYw6V2cEs%2BX8rxSZyC2HPlh0YjwdVEelHJcS2XBOM75hd73Y27VJ1W88iJEQk34TuxRqc6LSGBt%2FhAJYlRWBhEwIFgjbv2XJxwKXqw%2BQNF8eikIpdsbN5BE3gpjTiH%2BG6nFNDxHysqEre3o8Qb3S6rf2BbfORFVNBhNBe8uVi6T%2Bb2vYVReUg0oCuyj5Z8wWIxDUHystmYHVFbmYN0yQfMAi5O5XGzy67%2FI5y52rHl7OyeVKeZNI%2Fj0KS%2F%2BzQ%2BRYC9%2FrVlba36XF6j8gRb9i8Q%2BrWtvZ%2FHeVBvPFDRdjyxH1umdfYWDZGH05Gbn%2FDyQrWGjZSYVUlM%2FADM0PxRkH7tDnV41uTZKO6AI%2BgPjk6dM7UEVguOHGu%2Fes3tzFi8mP%2Fcj084BdFgiyWQ7OUEHg9Van26KxxqqrnvOye1Jv5XGsPBJ%2FlYNMDjUFXIPWBZRvJzc0YjAbB%2B9Fl52DHbXiEEw8dr9xAY6pgHWSqLlkPaH6aiad6aLNnx1eAiEcCSqiKr1QCM6SJnuI%2FScnrWoDe49Kfu4x05RD%2BwxozZgVX5EQGZ%2BdWR2JW%2BZ9M%2Fy0rlCwSoKc3auX%2FM8rhM0p1RR2ufdPzfLtv07c2soP2WkkTRNHbqT62uhHrjNCiHMN1hBPkRgXIe03AKw8CV6SmJJPZRWEEqmuMysIkbsueZtt3xepH0i4NZI6JReYPVSnlwR&X-Amz-Signature=9e332ae215b6e9b632d879f67566609b1447c89748cbdff9edf24fc6452c9b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVF36NVS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBjMu6Z%2B30%2BMUHTzIvtkSE5EQ2GTrUXMFISqH3Vrc6wuAiAbLwVVw9nMFi4e1q2EzCRCTO92z9W%2FQeMQWVCRgHp8ECr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPB27qYhwxdLP3ugmKtwDpoVgBBfXTu9SoHNWGKR5sqE0RG%2BxoEbv5U%2BsdZ3mYVI6cDD2IFkTEzb3df5kOEKas58m%2BPWzursudl7LmA0Psm0PdG0GacYvplZzL63SHm7j92W7BGkcPXva91xdAnzb0VAJ5cqgRVNeZlB8pMRT3C%2F8NZ5zs8iwHVY4vKYw6V2cEs%2BX8rxSZyC2HPlh0YjwdVEelHJcS2XBOM75hd73Y27VJ1W88iJEQk34TuxRqc6LSGBt%2FhAJYlRWBhEwIFgjbv2XJxwKXqw%2BQNF8eikIpdsbN5BE3gpjTiH%2BG6nFNDxHysqEre3o8Qb3S6rf2BbfORFVNBhNBe8uVi6T%2Bb2vYVReUg0oCuyj5Z8wWIxDUHystmYHVFbmYN0yQfMAi5O5XGzy67%2FI5y52rHl7OyeVKeZNI%2Fj0KS%2F%2BzQ%2BRYC9%2FrVlba36XF6j8gRb9i8Q%2BrWtvZ%2FHeVBvPFDRdjyxH1umdfYWDZGH05Gbn%2FDyQrWGjZSYVUlM%2FADM0PxRkH7tDnV41uTZKO6AI%2BgPjk6dM7UEVguOHGu%2Fes3tzFi8mP%2Fcj084BdFgiyWQ7OUEHg9Van26KxxqqrnvOye1Jv5XGsPBJ%2FlYNMDjUFXIPWBZRvJzc0YjAbB%2B9Fl52DHbXiEEw8dr9xAY6pgHWSqLlkPaH6aiad6aLNnx1eAiEcCSqiKr1QCM6SJnuI%2FScnrWoDe49Kfu4x05RD%2BwxozZgVX5EQGZ%2BdWR2JW%2BZ9M%2Fy0rlCwSoKc3auX%2FM8rhM0p1RR2ufdPzfLtv07c2soP2WkkTRNHbqT62uhHrjNCiHMN1hBPkRgXIe03AKw8CV6SmJJPZRWEEqmuMysIkbsueZtt3xepH0i4NZI6JReYPVSnlwR&X-Amz-Signature=e65e17b1280c799f9912c75ec57e91d70fc14c65f4e437c2a355c84c65a7ba28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QDUUIQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBCrFou0Nc5P2Ha8xtf4sF4%2FZHOEIoaVoduuBZMfHDWSAiBgYOwH84AHZmFOWp2hXtt4o68n%2FYItW4UCqj%2BBrvcciir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMCEHXOLsbTN%2B6KEMFKtwDyrGORhwGzYyfZLjQ0BazMKGv0vL%2FRzw1Ejc4fi24x1lj4sv3faIbuReD9QWICpnA6ijp%2FMn7CDECYIOuRsWvBUpe%2BSpHDrNmmGekLXHhQ3sCzrPVB3TzLpi9bCTTxZuu8Aq4jPbnyY8pm74Z6sQmAmxmF4HZHJ%2BvyxfcapLhuqElLNFVH4MDub4hXyk7tCvjeLtllLO6Or5Xl7ttx%2BzZbZ0NkryduLTBER9GvxiEMG6hXzMZZ6lmDCtEqhTqaOyQJvJuka5hzl3vAKlTBbKD3VfVmrzJKrXEeM%2FeQxYquNwWImggb2PmBtrnEgc8u3WmVw5wIkFGqq8nI%2BSDK75nD0Q8px0z%2FNncq1imKTGSfDM%2FRwBmYUnDp0iXepEpnOKUP%2FkDqScu3%2BN2lGNIBfMv7GBIgn2gPe%2Bv9YfiEXosmU%2FI5hF2gwSea2JrNgO5YTFoga9WpKVPYeQ%2FJa2kwcgNvu8yanM8UoOqnlgoyYzme6ZRSowe0HCpwUCY1SO%2FMdTkvN%2FgqIeV2ZAUbqijqrmyIjElccc7x%2BaNeMuuxsguRdlk449hHqkPOb%2B96X2E8djB5attlq6tl%2Baa5pxnyAi3b9Kehz87HSH3%2BcFIrXTKavEMHa5zknl0aTNc2r0wgdv9xAY6pgEomRbI6weLCJFSPGLS4J%2FbV9%2FIQ9GGFoHjBegDelFQ2Svdn01PIkKrS4QosByeYrEK0hHvDlc0TUYDOYmg5XcC7p5yObsR4ZyxGs9aBz1VCxnucihs10rgew54WgZcHqB%2Bkgia5xadt6lB9wZEYHzrBZuTYo2kOo55pxuPWfCXrC513dbuzGYWDc7zDfm0TlyY41y247ZlnEPJu%2BnSTubzHsCjZzUH&X-Amz-Signature=afbf0652f8f36660a59dc82a2fb5dc6c7db01c9e0647ce636f59ac242735d951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RROQWYGY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCgvkLiS5aOj4w5oFJlp%2FzyQkdOKvjk1c4wcdKYG3WGGQIhAPLLn7rzC00KMrY5z3iKR1ew9SBhqE6Y27HPYm6ONqXGKv8DCGMQABoMNjM3NDIzMTgzODA1IgycHqQsW4QMWh4fxWwq3AOBoY85ZnD9luszIaBgtSiO5AYbPUgT1PE%2BtZUPAKZKAMWqmMUY3X3Sl3rCywDDIU1D90mK84XDgo8Iwbb%2FTQ%2BUIwfzavoO9YzVf8F7QfQ%2Fy60NUmFZRy8o00uctG5U2kpVMM1ax3nMBzNbnEeXiTa6usg9jrTobtvOVO944%2BX5lhFUHr1jS1CTAhyK8gcUv8sggcwnZZtzl8%2FbNiunM4k%2BMYq5jrK5OnwlwflIUWiVC5e4VDK0fMESV%2FsB%2BSbK7Ce7dfRcdHFIRQIDs9mFSw156ME28OxSuPsKGpOI5Scld43zPbOFict1%2Bpqa0Ws5v3xUZBmpPV0ZYVE1DJ3OYl7LpTy%2BFtALb5RZkqH5I%2BFAX1DlOHXwRG00IoU3hGnkrsfpXxES8RenRvUv%2BDs0Y7HZOe5y%2FUbdBqEMjnVMpCuyXp8f0Lm8bcTcoSOC4IuSnxTM8wZF7LxiWdTugBu0b4TwHTjztLW53L9K53vRXlAXZcKe2dEwfZz1EXEpdM67aMPUP2vwkbXYqKwC%2B5jt47PTxbBHdG6uCLe5Pavyke4TcsDSntW16Vuh1LwHdHN536il7dznubzuXOB%2F4IfPLYzemY5jdOQhEXHDZ2w4hzo0no%2BhlwvKKDpRciaj8zDJ2%2F3EBjqkAaYhMVF%2FbgHHzzMqRYHR7WCMYHltLA1kt%2F01TXIAXFCYTkYV06m6h0wCHMckDoCcqZSMLHDcg8grPsElLS4N9YMy%2BTxzPWNeNn7hslyZsNSjcV3ZBFx0RiASxAWuUG75XbSIicg49rdhXgtQwi%2FnAxPyIq%2Bq%2BzkKJnM2njGwSP%2FoIlA%2Fmtiutd9KtFjh63L05K6pCREdpUjJElBra32FQc3SK%2BVb&X-Amz-Signature=8b910ece12e973db6f46c7074269fced75d06e625aff0be9d3ee950e541fb93e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVF36NVS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBjMu6Z%2B30%2BMUHTzIvtkSE5EQ2GTrUXMFISqH3Vrc6wuAiAbLwVVw9nMFi4e1q2EzCRCTO92z9W%2FQeMQWVCRgHp8ECr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMPB27qYhwxdLP3ugmKtwDpoVgBBfXTu9SoHNWGKR5sqE0RG%2BxoEbv5U%2BsdZ3mYVI6cDD2IFkTEzb3df5kOEKas58m%2BPWzursudl7LmA0Psm0PdG0GacYvplZzL63SHm7j92W7BGkcPXva91xdAnzb0VAJ5cqgRVNeZlB8pMRT3C%2F8NZ5zs8iwHVY4vKYw6V2cEs%2BX8rxSZyC2HPlh0YjwdVEelHJcS2XBOM75hd73Y27VJ1W88iJEQk34TuxRqc6LSGBt%2FhAJYlRWBhEwIFgjbv2XJxwKXqw%2BQNF8eikIpdsbN5BE3gpjTiH%2BG6nFNDxHysqEre3o8Qb3S6rf2BbfORFVNBhNBe8uVi6T%2Bb2vYVReUg0oCuyj5Z8wWIxDUHystmYHVFbmYN0yQfMAi5O5XGzy67%2FI5y52rHl7OyeVKeZNI%2Fj0KS%2F%2BzQ%2BRYC9%2FrVlba36XF6j8gRb9i8Q%2BrWtvZ%2FHeVBvPFDRdjyxH1umdfYWDZGH05Gbn%2FDyQrWGjZSYVUlM%2FADM0PxRkH7tDnV41uTZKO6AI%2BgPjk6dM7UEVguOHGu%2Fes3tzFi8mP%2Fcj084BdFgiyWQ7OUEHg9Van26KxxqqrnvOye1Jv5XGsPBJ%2FlYNMDjUFXIPWBZRvJzc0YjAbB%2B9Fl52DHbXiEEw8dr9xAY6pgHWSqLlkPaH6aiad6aLNnx1eAiEcCSqiKr1QCM6SJnuI%2FScnrWoDe49Kfu4x05RD%2BwxozZgVX5EQGZ%2BdWR2JW%2BZ9M%2Fy0rlCwSoKc3auX%2FM8rhM0p1RR2ufdPzfLtv07c2soP2WkkTRNHbqT62uhHrjNCiHMN1hBPkRgXIe03AKw8CV6SmJJPZRWEEqmuMysIkbsueZtt3xepH0i4NZI6JReYPVSnlwR&X-Amz-Signature=8adacb33ec9dbb79b87cd2e0634a1c38e0a7c02c9fdb56014acb27bcc6e7c74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
