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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVHLWCF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCP219tcukxC%2BkGQslDg7gLpXy6peCZNXBGxKWvHfIRIQIgetDriz4x7hlwz%2B1HdSjykJyRHzdGE48m4zh%2FfNu9IQYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhh8liTJna%2BPqdkxircA0wg52y7pNsVoI4kpbbJ1OnOZeQlFHZU2QDOGQt7LFHqNdydPCPSjbq9BoUZl62uMAFzowlcIKdTSAAOFl9zJx1izupLxOt0D72PJR2br8f2AwdVig6Mfer0zWDB68CWM1AZov1Np3abuNzve9EOClIUpqXNTkcVnhuKtXjGcKi4GDhC%2B5CLiLriitICuVpQjdGhu9BCukpwG1u1wr4RzFtCI2RbNbHQ25oIGPo8iaHGJIbvEQjMoyo1yna5ShuE30kEfbtAdW2sGeL%2B7P4%2FLNsphiP9Q8zUVFeBa2r6GRn9NproP361Cg6A%2B7i0pvbJv5OQLOxlKtmUIID97ZlqSAU%2FZ1u4vE60uIkp5IJGRHMNcyXRFuNTYJkrxtPFnNKEBHGnqvhny3V3sqGcBJV3yB%2FcXwOtNrZJb5NmDww56gr9%2BzxjBMaUH1jyDJtFAV7kEP%2BT8cFptE0wiFltOr05bMa%2Fh1B7x2wdeN%2BANjZmPY9Oh1egLPJ4waf89vuK2LfnT5FnhVSUWQX8bDD5RPdbZFjGtMoZp4q4Vf5Q%2FN%2F4XZgTno8Rxjpu0J7PKhZj7rlFPYrRxV%2Bps45xWM%2BmoFYaPasBbtJhJlymwFS9sVg%2BbasOL1WlM%2Fn%2FCVUEggBdMKvrnMQGOqUBCO1g57i7toD%2F1fHQgHBWs6PuOBwASkFB%2FMHB%2FPLfXJowfOIHLw0V8U%2FXFAk31mY%2FGt5k0a1emiTUFwRg4%2BqiNnHh8afSjWJcozWEoD%2FbGOLf24xzEmhIrD3dLlfx2EUo%2Fzo85Cf%2FpwG5FCtICoCKA4f3VYpM%2BGjB%2BWzDSSCCSXQsNza7uKFaIp0%2FEpgYHwCn5FPQblKNnMG58l4YOaU4ufgLyoy1&X-Amz-Signature=3df614a1de5720a920f959238578833975a74c11af15a0783a2066f167fbe731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVHLWCF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCP219tcukxC%2BkGQslDg7gLpXy6peCZNXBGxKWvHfIRIQIgetDriz4x7hlwz%2B1HdSjykJyRHzdGE48m4zh%2FfNu9IQYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhh8liTJna%2BPqdkxircA0wg52y7pNsVoI4kpbbJ1OnOZeQlFHZU2QDOGQt7LFHqNdydPCPSjbq9BoUZl62uMAFzowlcIKdTSAAOFl9zJx1izupLxOt0D72PJR2br8f2AwdVig6Mfer0zWDB68CWM1AZov1Np3abuNzve9EOClIUpqXNTkcVnhuKtXjGcKi4GDhC%2B5CLiLriitICuVpQjdGhu9BCukpwG1u1wr4RzFtCI2RbNbHQ25oIGPo8iaHGJIbvEQjMoyo1yna5ShuE30kEfbtAdW2sGeL%2B7P4%2FLNsphiP9Q8zUVFeBa2r6GRn9NproP361Cg6A%2B7i0pvbJv5OQLOxlKtmUIID97ZlqSAU%2FZ1u4vE60uIkp5IJGRHMNcyXRFuNTYJkrxtPFnNKEBHGnqvhny3V3sqGcBJV3yB%2FcXwOtNrZJb5NmDww56gr9%2BzxjBMaUH1jyDJtFAV7kEP%2BT8cFptE0wiFltOr05bMa%2Fh1B7x2wdeN%2BANjZmPY9Oh1egLPJ4waf89vuK2LfnT5FnhVSUWQX8bDD5RPdbZFjGtMoZp4q4Vf5Q%2FN%2F4XZgTno8Rxjpu0J7PKhZj7rlFPYrRxV%2Bps45xWM%2BmoFYaPasBbtJhJlymwFS9sVg%2BbasOL1WlM%2Fn%2FCVUEggBdMKvrnMQGOqUBCO1g57i7toD%2F1fHQgHBWs6PuOBwASkFB%2FMHB%2FPLfXJowfOIHLw0V8U%2FXFAk31mY%2FGt5k0a1emiTUFwRg4%2BqiNnHh8afSjWJcozWEoD%2FbGOLf24xzEmhIrD3dLlfx2EUo%2Fzo85Cf%2FpwG5FCtICoCKA4f3VYpM%2BGjB%2BWzDSSCCSXQsNza7uKFaIp0%2FEpgYHwCn5FPQblKNnMG58l4YOaU4ufgLyoy1&X-Amz-Signature=1f42e9430fe0c4254d4d483355401c15935bc202a6cfa3887424e401f6eeb9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVHLWCF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCP219tcukxC%2BkGQslDg7gLpXy6peCZNXBGxKWvHfIRIQIgetDriz4x7hlwz%2B1HdSjykJyRHzdGE48m4zh%2FfNu9IQYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhh8liTJna%2BPqdkxircA0wg52y7pNsVoI4kpbbJ1OnOZeQlFHZU2QDOGQt7LFHqNdydPCPSjbq9BoUZl62uMAFzowlcIKdTSAAOFl9zJx1izupLxOt0D72PJR2br8f2AwdVig6Mfer0zWDB68CWM1AZov1Np3abuNzve9EOClIUpqXNTkcVnhuKtXjGcKi4GDhC%2B5CLiLriitICuVpQjdGhu9BCukpwG1u1wr4RzFtCI2RbNbHQ25oIGPo8iaHGJIbvEQjMoyo1yna5ShuE30kEfbtAdW2sGeL%2B7P4%2FLNsphiP9Q8zUVFeBa2r6GRn9NproP361Cg6A%2B7i0pvbJv5OQLOxlKtmUIID97ZlqSAU%2FZ1u4vE60uIkp5IJGRHMNcyXRFuNTYJkrxtPFnNKEBHGnqvhny3V3sqGcBJV3yB%2FcXwOtNrZJb5NmDww56gr9%2BzxjBMaUH1jyDJtFAV7kEP%2BT8cFptE0wiFltOr05bMa%2Fh1B7x2wdeN%2BANjZmPY9Oh1egLPJ4waf89vuK2LfnT5FnhVSUWQX8bDD5RPdbZFjGtMoZp4q4Vf5Q%2FN%2F4XZgTno8Rxjpu0J7PKhZj7rlFPYrRxV%2Bps45xWM%2BmoFYaPasBbtJhJlymwFS9sVg%2BbasOL1WlM%2Fn%2FCVUEggBdMKvrnMQGOqUBCO1g57i7toD%2F1fHQgHBWs6PuOBwASkFB%2FMHB%2FPLfXJowfOIHLw0V8U%2FXFAk31mY%2FGt5k0a1emiTUFwRg4%2BqiNnHh8afSjWJcozWEoD%2FbGOLf24xzEmhIrD3dLlfx2EUo%2Fzo85Cf%2FpwG5FCtICoCKA4f3VYpM%2BGjB%2BWzDSSCCSXQsNza7uKFaIp0%2FEpgYHwCn5FPQblKNnMG58l4YOaU4ufgLyoy1&X-Amz-Signature=7eaa3b2cb4c7d8fbd38d0a6fb226dc8ed3ed7393b622598a9f227014d4a2fd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JSJUSFZ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDvJhEfgJwUOzpDDeeWTm6GW6M2tPuU%2BkXsp8yJLZnL4QIhAI6pc2fbkk2kXSPSSbUQSAeyBiqdGiNOQUmnztXKDke9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1I5ppN0tVfrFqitAq3ANUO7wbG02qwkE8MS8P36n5IyWzervEOB4GEL6XhvYGcOqfR3BlnPHXOLccou8O9u%2F5Br%2B39hIiDjkJEg%2B7yXyQe7GAHBFuJLN%2BWxhrLeTWIvRNdqH81zze1itFbuRp%2F8JazSeAsHfxiA31AZDOgo0eHPwR20abvefbs7%2BYM%2BZVqaZvkXwYov1O1Sc62ZDxoXnn%2BpfEySQUfBoaEEArb%2FmxN8t8QLnw6zhTMjdA3K3t1Si3MMPPnLrGOVfvz0i8C8Ql5zzzVhGYVtKRQn%2FPG8VzcoxZOppMKN3ddEouaSlsqvg%2BTJGTxYzX6GTRn%2FxwMdRgKrTJITzbIvw0KBs9ln5Y1ayA4ZMQXCqsYUstxUOiLI2kGxTOefnO93o3zaiTobgGdw1hpypga%2FCNe6ULpEKvALx2v9Wq30lRA5YIy0X1RhnvRY40ydHB0TP8FbUV84S%2BimN%2B7n5OQ9RKMdJG7jHOSFKx%2BIBPBQABZtPfBhd%2FcwEnld3DPCLWunHgMLuuvDVBq0%2FCmN4mlCcGcY%2Bj9pBnuXm%2FRjeXhIVkkEhrlN02%2FjwyM%2F61O5f6qmX9%2F9IFVeX0txgiADBwJtStzUCBvbv9IkbIcOZmtBQKp9Wm5%2FsvNiKg8LblGm3VN0N3OTCA6pzEBjqkAUVmBiMHatN9tINH%2FJjAFfC%2BB3pptwFTU8PGNPoV7OP%2F7moe2ezG9fkoT95I9vr9hrXiRg1xVBJgZwjs6TjOig%2BsUghSme7OXWp2ckAOX%2FZKqZV2jV1cp5F9OwUeRCNmWmgkZn0Tx3zv8C2py%2Bodjh%2BXqilo%2FTNlzE4DuIdQnIFNnfGFzg4XYM57z9XHzs4H45253b82%2BtWrqgfa%2FIcgSF2FT9Fl&X-Amz-Signature=175771b0c5e5731a39de8d3cc9e77233e7950ba00ebb8a315ea0481cde22394f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3XIY7EK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD1lsYxf3ZWx6hKNzvKkzFeQyjN7nsMW%2F%2B02sjgCpFn8QIhAMkRR7lovFIHuE4y%2F6Mig0Iy%2FaylMmweNBqepYgxbCIJKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPdw06g6WR%2BvlFftgq3AMYSPaH%2BkQI1C5RjJJu%2FG9PDgPY0mLO0tvuLHkBjoz24uLxIp9phI5dUyQAw0Ztiam3RsiMvoPu7JvUL9NT8sjHSWgDOeWhuMe4zKUfIcMfhru7X2Tolx3CqHO2UUL6VBIEWLoXhYxnwrmQDs%2Fj5IlE%2Ffl9bIJCo3xlRJ3GHF7iWotEjv%2BxMxEmzwqDzLWMyS1bxTFSo5Tbwpo1i9w32jBGU0JlwPi%2FItq7celWuOelas5hXQC0R2XsdqruZOPOKNwq5kwAYXe0GF%2F1eAOlUimOKGRPc8OXVIiLV27vOPy4vPy3kHLhx5BI4tv92bgT%2BPoMu%2FHJckeZkaM%2Bz1Ejyp62auXcIfJQgK%2BTmLZG%2BbqWjiS1Re9W8wnbFh%2BVCfxjbIu9WxjK2CYKd7M%2B5TV1t1bH7geseHyQnwLTZSvzhbQjwD%2FISqXE4Ymm9wf%2FdVlWupD7RMTjXWiIWeO48JJV5ec3Oe9dZFjMr0EfV45Mk5v5E3F6woZE0L%2FE6RgOblU5trLHtYfAgtfwfciddyir%2BwAH669A35aE7i7FDTaNX19MwYCDRa9cEQkRLaSwL3hjNF0yMjCUwChky1rjhnOn2id7Lc1DkgnTW3NAB2DHYqXNfy4H4N2ujUu5%2BnuTLjDM6pzEBjqkAfFPUTwXkhkIdFj1UIdN1FXaBcl2KiIMhcMNGKyBiKduNuY9A6Efx6xFnssrM1yqAy9fOo0aHDBK95v3ZYPvxBxUhmPjsamivqpYsnRHbliwhvl2bV0kVi90JF8u7%2Fv54EgymiR6zZ8NnxMmvjNWg1CgXWoNSrRnvg1PhoMFhprObKdLeWnIVIUGvXRhxLJlAsb%2BLCcCpQd55liU9QJDdExfBQYW&X-Amz-Signature=f2c00daebf3b415c74a3d4d23b6b20bfcd87771d26a812280507590348ad19d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SVHLWCF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCP219tcukxC%2BkGQslDg7gLpXy6peCZNXBGxKWvHfIRIQIgetDriz4x7hlwz%2B1HdSjykJyRHzdGE48m4zh%2FfNu9IQYqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhh8liTJna%2BPqdkxircA0wg52y7pNsVoI4kpbbJ1OnOZeQlFHZU2QDOGQt7LFHqNdydPCPSjbq9BoUZl62uMAFzowlcIKdTSAAOFl9zJx1izupLxOt0D72PJR2br8f2AwdVig6Mfer0zWDB68CWM1AZov1Np3abuNzve9EOClIUpqXNTkcVnhuKtXjGcKi4GDhC%2B5CLiLriitICuVpQjdGhu9BCukpwG1u1wr4RzFtCI2RbNbHQ25oIGPo8iaHGJIbvEQjMoyo1yna5ShuE30kEfbtAdW2sGeL%2B7P4%2FLNsphiP9Q8zUVFeBa2r6GRn9NproP361Cg6A%2B7i0pvbJv5OQLOxlKtmUIID97ZlqSAU%2FZ1u4vE60uIkp5IJGRHMNcyXRFuNTYJkrxtPFnNKEBHGnqvhny3V3sqGcBJV3yB%2FcXwOtNrZJb5NmDww56gr9%2BzxjBMaUH1jyDJtFAV7kEP%2BT8cFptE0wiFltOr05bMa%2Fh1B7x2wdeN%2BANjZmPY9Oh1egLPJ4waf89vuK2LfnT5FnhVSUWQX8bDD5RPdbZFjGtMoZp4q4Vf5Q%2FN%2F4XZgTno8Rxjpu0J7PKhZj7rlFPYrRxV%2Bps45xWM%2BmoFYaPasBbtJhJlymwFS9sVg%2BbasOL1WlM%2Fn%2FCVUEggBdMKvrnMQGOqUBCO1g57i7toD%2F1fHQgHBWs6PuOBwASkFB%2FMHB%2FPLfXJowfOIHLw0V8U%2FXFAk31mY%2FGt5k0a1emiTUFwRg4%2BqiNnHh8afSjWJcozWEoD%2FbGOLf24xzEmhIrD3dLlfx2EUo%2Fzo85Cf%2FpwG5FCtICoCKA4f3VYpM%2BGjB%2BWzDSSCCSXQsNza7uKFaIp0%2FEpgYHwCn5FPQblKNnMG58l4YOaU4ufgLyoy1&X-Amz-Signature=0ba48d3338c3bc698ca66fd8ea5a672e7d21fa7fc3ef828e2ae46423caa9353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
