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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64DYEQU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCNnQDvoE70xu4U7HuY1oGfEI6d8Ameb%2BM5Uh4%2F3fm58AIhAKFYN3HlFltE0z2EWTVtPrCYRVdvLSCcMh0Tr4e4TboyKv8DCEwQABoMNjM3NDIzMTgzODA1IgxnbQsW6SOymNdDUGYq3ANlS8gQCohgWUZXMgx%2F9ULRqmYxFRrQYIvt2K%2FZSaUNmEk2cplnXXh2U7Y8CFt%2BWQ4OSeV1VOMP3VCPHQx6%2Bl%2FHxyPaJi%2FIX6LBJgChJO8oIg9kctT2%2BH4rSLn6xzST73gWEZrajnCZUgeqzoo6rKCzKa8JvWREWbdaeAyBZjU836LxQu8Qlo%2Bu2V4LbAY7SZ4ZW9cvtLMouT5CsOqPTus%2B%2FlRU6VpRHVSmW8LssRz7ylHoJRu0V5rrJb5sWRLeAIVnzooX0TSZVoCDAyqdt2YtEyTZJMBXKv0pcX1amgrYbe9WjXzHWuHNwME4KdXXqk7nfXPkRHEajcKlSNYJr5bm7goNDlZun3PzDWb7h1vwwrgQ5OfYViNoXqAqB2sH4LhZr2H%2BNIiL3mG2B08neWJhfQlTwXTyg51HowqZE%2FLsAYS0HVOLdpbDJla%2FSG5WClNYHpo3zar4mup2nbA%2F9F4Misn9hQO1zlFNLS%2BY2DYrcOhoDSNVvRKh%2FJTZKZKwR%2BcO3BD10RWgdxNo2Hjmr8bvY9QAetO0ILm%2FpAO7SpX%2BFrYF2AbvCXRo8Espqw93ALqCi%2BIdwXOKbH%2F%2BrV7m2s4vT5dzP4SDNurADmQ6dxaZHHnvRWLAv7rMKSFvqjCf6PjEBjqkAVCDbL57UyBDZQbbTr8h9Lsx25Nr8giqRsX6eC7D5kycMpvN9z07bQgnYE6grJmZtYmoaLbsI7f%2BVbMAEwYsBaXG7FVXoHTEOjPkWWWypVRrGJS4wzS3UTKrBQ2BN3OeaOSlvCxp35j%2BVYIKzTXeZQLakq6ZXidyy418wmzrUGcilTh2EztTjq7%2F84ZBo5U97iCu8idt79mKFyX%2F2PyN7B4BtpS9&X-Amz-Signature=51144a9fdab1a02caa3f89c0e53991fc6f60ae7d58c2ea5bd6ae8b2ecea7f5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64DYEQU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCNnQDvoE70xu4U7HuY1oGfEI6d8Ameb%2BM5Uh4%2F3fm58AIhAKFYN3HlFltE0z2EWTVtPrCYRVdvLSCcMh0Tr4e4TboyKv8DCEwQABoMNjM3NDIzMTgzODA1IgxnbQsW6SOymNdDUGYq3ANlS8gQCohgWUZXMgx%2F9ULRqmYxFRrQYIvt2K%2FZSaUNmEk2cplnXXh2U7Y8CFt%2BWQ4OSeV1VOMP3VCPHQx6%2Bl%2FHxyPaJi%2FIX6LBJgChJO8oIg9kctT2%2BH4rSLn6xzST73gWEZrajnCZUgeqzoo6rKCzKa8JvWREWbdaeAyBZjU836LxQu8Qlo%2Bu2V4LbAY7SZ4ZW9cvtLMouT5CsOqPTus%2B%2FlRU6VpRHVSmW8LssRz7ylHoJRu0V5rrJb5sWRLeAIVnzooX0TSZVoCDAyqdt2YtEyTZJMBXKv0pcX1amgrYbe9WjXzHWuHNwME4KdXXqk7nfXPkRHEajcKlSNYJr5bm7goNDlZun3PzDWb7h1vwwrgQ5OfYViNoXqAqB2sH4LhZr2H%2BNIiL3mG2B08neWJhfQlTwXTyg51HowqZE%2FLsAYS0HVOLdpbDJla%2FSG5WClNYHpo3zar4mup2nbA%2F9F4Misn9hQO1zlFNLS%2BY2DYrcOhoDSNVvRKh%2FJTZKZKwR%2BcO3BD10RWgdxNo2Hjmr8bvY9QAetO0ILm%2FpAO7SpX%2BFrYF2AbvCXRo8Espqw93ALqCi%2BIdwXOKbH%2F%2BrV7m2s4vT5dzP4SDNurADmQ6dxaZHHnvRWLAv7rMKSFvqjCf6PjEBjqkAVCDbL57UyBDZQbbTr8h9Lsx25Nr8giqRsX6eC7D5kycMpvN9z07bQgnYE6grJmZtYmoaLbsI7f%2BVbMAEwYsBaXG7FVXoHTEOjPkWWWypVRrGJS4wzS3UTKrBQ2BN3OeaOSlvCxp35j%2BVYIKzTXeZQLakq6ZXidyy418wmzrUGcilTh2EztTjq7%2F84ZBo5U97iCu8idt79mKFyX%2F2PyN7B4BtpS9&X-Amz-Signature=a75f7e24d0d0b3952bc398319e4c8dbdb94f3f9ade5d7646b276b9eae5d76a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64DYEQU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCNnQDvoE70xu4U7HuY1oGfEI6d8Ameb%2BM5Uh4%2F3fm58AIhAKFYN3HlFltE0z2EWTVtPrCYRVdvLSCcMh0Tr4e4TboyKv8DCEwQABoMNjM3NDIzMTgzODA1IgxnbQsW6SOymNdDUGYq3ANlS8gQCohgWUZXMgx%2F9ULRqmYxFRrQYIvt2K%2FZSaUNmEk2cplnXXh2U7Y8CFt%2BWQ4OSeV1VOMP3VCPHQx6%2Bl%2FHxyPaJi%2FIX6LBJgChJO8oIg9kctT2%2BH4rSLn6xzST73gWEZrajnCZUgeqzoo6rKCzKa8JvWREWbdaeAyBZjU836LxQu8Qlo%2Bu2V4LbAY7SZ4ZW9cvtLMouT5CsOqPTus%2B%2FlRU6VpRHVSmW8LssRz7ylHoJRu0V5rrJb5sWRLeAIVnzooX0TSZVoCDAyqdt2YtEyTZJMBXKv0pcX1amgrYbe9WjXzHWuHNwME4KdXXqk7nfXPkRHEajcKlSNYJr5bm7goNDlZun3PzDWb7h1vwwrgQ5OfYViNoXqAqB2sH4LhZr2H%2BNIiL3mG2B08neWJhfQlTwXTyg51HowqZE%2FLsAYS0HVOLdpbDJla%2FSG5WClNYHpo3zar4mup2nbA%2F9F4Misn9hQO1zlFNLS%2BY2DYrcOhoDSNVvRKh%2FJTZKZKwR%2BcO3BD10RWgdxNo2Hjmr8bvY9QAetO0ILm%2FpAO7SpX%2BFrYF2AbvCXRo8Espqw93ALqCi%2BIdwXOKbH%2F%2BrV7m2s4vT5dzP4SDNurADmQ6dxaZHHnvRWLAv7rMKSFvqjCf6PjEBjqkAVCDbL57UyBDZQbbTr8h9Lsx25Nr8giqRsX6eC7D5kycMpvN9z07bQgnYE6grJmZtYmoaLbsI7f%2BVbMAEwYsBaXG7FVXoHTEOjPkWWWypVRrGJS4wzS3UTKrBQ2BN3OeaOSlvCxp35j%2BVYIKzTXeZQLakq6ZXidyy418wmzrUGcilTh2EztTjq7%2F84ZBo5U97iCu8idt79mKFyX%2F2PyN7B4BtpS9&X-Amz-Signature=bba6a672f5736567eb5f43577f22159e94ccfa8a2fa5e0d89ea0edec0f04fb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY26GKK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC96xFAWISsArx61nM0Gs7BxSfRG%2FAM%2Fg3dDA63oouhHAIgPiFJj%2BdZpEchF9WqjG1kzWOc46GUZeXy5oWS9QPSeegq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDDszusLyvkmY5voSKircA3gsuaYICCgvqpUcHsCFRzOgxh7us4vMkyciYx%2BVDiSLS8yFxBCotuoMSAK4ji06DCHkvk8RGJFVCX0VJ4Eg%2FpUZta76ewuviddgxzGzuZVMnjHlUIefnkax3btUbWxJEy6KFT8X9l9aKtEuNQT%2FNhk5jD91uCzTLpdVv8CZra9y7m6I2jsCOBliFiHuNCOy5mk3TpVSJfUqz%2BObIbaL3W33xP45a%2FkAljS8XCwoIb7ZegoYk37qM8FzdYWusziFCoKprr%2BfqSIR7LjWIUoGkNGPGunPakYwaa7WOJs3SY2U7ZZE1Qn%2Fl1zJPe7KmeoQZ%2BGPzeSVdJQ2vkJSZz6J167TrI8PuOAfhbFL5pvxXCUH13sc13%2BKIaCiO%2Fh56Yt8WCNZDhA4zzscIWcu3NZGt33UhMMiYDrYvQb%2BOeYVQNE9TxdECJDCWR6E7qyiRKkKNJaV%2F9P7D3FaFnK14qGFlUwwd4r9ST0Y%2Bjs0m8UfbBaIL8V%2Bl6VV8yyONACRDG%2FWSvwS8qysFjEilJyx9Fvj%2Fn4KSwn1ojVBO%2BlxZZ3D9r%2BIzSOwNt9sSDSFU7TabP8%2B59oHSer2ZVxT9cemyTRU63J3nQwAZM7lZ70RIyLe9d3WPpkVRK1yjxcIIlAbMLDo%2BMQGOqUBUlw%2FOiX4ppKx92ElaIdE%2B8x29uTlni84hLuJ4KZCDdW%2F4kVYRkq3o63ZpuqBkuZcXVCoDXh1h2S5aHTnFG0pYBOuJolw1A0DI3IyMj6Z3KwbBbBII5dzrhm2em6%2BeY7Ig8XwvGHDo%2FaMvd4%2B7HyRt65oX8Iga7zB5%2FpgKhAoaZ5bdjKoKaGcYxE%2FYv6wzJe8zk%2BrIwf%2FXnGMVWPfiwxuKA5F61RA&X-Amz-Signature=20eebe948a00f368fbd3b10147ff5f09f4d867ac3c0b515debc3ffadf993c0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRRUN6U3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDOVXYGskSo%2BWD95BqPDaTA%2FrS8d0MvFHZygyylZkQW7wIgAKxQrT4zs0QRAbEfugc7Mv%2FJIXesQEUktQtuwd8FaQwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGWh1Kdi7u0rmeWOfircA9SrKdvCuYLoXaXu8Wo6TkC9%2BfJtH9R9l6mL2lZxV1MJFEfNRo8y%2F%2BD2EsGdJDol8zbXro5QJIBqvpH7uBDLtfg2RXUaCaTcID7JD3qX95CsgFPX78iJK7VX%2F%2Byr6dtpJOnm2i9rMO6gn9dXNgMdmewCMgWFHpRd8pBm%2BVNHTSPlCTNeza6SdTimfhF%2Btl3%2F7h9WPLHjGgiY7su%2FaxiTVy8EcjzoyimI5prUBjqJn%2BKQQff98rOIrcQflQZqoyjgKXLi7AuGpownQ%2FoYXkU41nONqoXg7MoqDCI7uBiRllUS92boyelyKUK%2F2EVN2J9UD7NGp3muKY%2FQFeb2U7rZnc%2Bxxl1%2BNCEjoQROQ9qSZrCdakBa1F8eM%2B0JVQVuhzatmv%2B%2BHpv0OdNUwjSxNrGbXNIhRrDqrXbGPoykKkWFDtZVjBohA9S3%2F3pAS1ZYSfbxk1C4%2FohhStBCU72TNs29tb1qUAHrAfJgEG0QevH2Hlfo0bCaRVgWR1xzunJMoN0b2q7BzIPGGVJVm6NCDX8uKpltuM105Dfy2qqooC%2B6HerlrDNRys9Zuf54XqdSAmiZQg7j%2BrucC54nxofM%2F6e2ACHxxzCmFBTXpu3SpR8A8W51UaGB%2FAoqJhwEFnn7MMPo%2BMQGOqUBqfoSlIgyD9RC4j1Ke51vAK1S6LwV0ddXXrMRIB4EfMkZxTTOPxk4jV8bNlu7SSd4a9wYMAMI8uP0YArLsECnrRq0kVguOtH58AQrCCpHfD%2FjYHU27pQo58OqmEiLYbm5Ha8g5hL1omZ7E9da16h0t9PAF6%2FxzsfndhlC7w5tGDUsIg97AVJ8PMi5LZAmKynRHJbtU2Pz0BbKQWvOQBExNVf75b9U&X-Amz-Signature=ed7fe0ab0afb8693e84a3045cd5b3346af932d6e69f026e24d9a337b782e288a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V64DYEQU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCNnQDvoE70xu4U7HuY1oGfEI6d8Ameb%2BM5Uh4%2F3fm58AIhAKFYN3HlFltE0z2EWTVtPrCYRVdvLSCcMh0Tr4e4TboyKv8DCEwQABoMNjM3NDIzMTgzODA1IgxnbQsW6SOymNdDUGYq3ANlS8gQCohgWUZXMgx%2F9ULRqmYxFRrQYIvt2K%2FZSaUNmEk2cplnXXh2U7Y8CFt%2BWQ4OSeV1VOMP3VCPHQx6%2Bl%2FHxyPaJi%2FIX6LBJgChJO8oIg9kctT2%2BH4rSLn6xzST73gWEZrajnCZUgeqzoo6rKCzKa8JvWREWbdaeAyBZjU836LxQu8Qlo%2Bu2V4LbAY7SZ4ZW9cvtLMouT5CsOqPTus%2B%2FlRU6VpRHVSmW8LssRz7ylHoJRu0V5rrJb5sWRLeAIVnzooX0TSZVoCDAyqdt2YtEyTZJMBXKv0pcX1amgrYbe9WjXzHWuHNwME4KdXXqk7nfXPkRHEajcKlSNYJr5bm7goNDlZun3PzDWb7h1vwwrgQ5OfYViNoXqAqB2sH4LhZr2H%2BNIiL3mG2B08neWJhfQlTwXTyg51HowqZE%2FLsAYS0HVOLdpbDJla%2FSG5WClNYHpo3zar4mup2nbA%2F9F4Misn9hQO1zlFNLS%2BY2DYrcOhoDSNVvRKh%2FJTZKZKwR%2BcO3BD10RWgdxNo2Hjmr8bvY9QAetO0ILm%2FpAO7SpX%2BFrYF2AbvCXRo8Espqw93ALqCi%2BIdwXOKbH%2F%2BrV7m2s4vT5dzP4SDNurADmQ6dxaZHHnvRWLAv7rMKSFvqjCf6PjEBjqkAVCDbL57UyBDZQbbTr8h9Lsx25Nr8giqRsX6eC7D5kycMpvN9z07bQgnYE6grJmZtYmoaLbsI7f%2BVbMAEwYsBaXG7FVXoHTEOjPkWWWypVRrGJS4wzS3UTKrBQ2BN3OeaOSlvCxp35j%2BVYIKzTXeZQLakq6ZXidyy418wmzrUGcilTh2EztTjq7%2F84ZBo5U97iCu8idt79mKFyX%2F2PyN7B4BtpS9&X-Amz-Signature=ab2e674e3244dc6ac57b5a884095355017e5803c304d289de7c33d3b346244bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
