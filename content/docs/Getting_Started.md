---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL4EFCW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEgxuvCT0QaoHZriewbK6ZtkD9l%2B8qVh0sQVT0Y6%2FG%2F7AiAS3l9CPP7tEm%2FD3lwG2u8K7%2Bo5SXWqh6LW%2B8VpIBV96CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0949XCkLAWZRcT86KtwDgl%2BEcjRk1a8AUZjIY%2FRYWXjrGt2btJ0oOd1QrB2wxpPxmBCS6YZoMtVOzgHKVpBt%2F%2BG7%2FGm5kBclBJ4y5bwGaV69ECpNKV85bKhQohbMH9EhQQbQ8gzU%2B1w53pcUnkhL4OpvUyAPxWirsQGWRqqF9CZTrC6qpm%2FLqsuZ26mPGwJXfavo4QpSHyw9p9PkK5yf2ardQ4wvyj6thSGy26QRilCF1fen9l%2BUHFWN1BI8PE3DQfVJfZNwmJOPWmPTpplxdrhT1VOR3nsfCNy%2BjS2QV%2BNh%2FPKusrsQhU8Wdfpg725H7t%2BCuv5lBhU%2FQUN8oCEQsMwCaP0fguklgH73dQnpXue%2FlnNtFyUmp4SuHc%2BnBn3d9UD8WkTwMt%2FGsQvL%2F0qMT0i%2FaedCSWhXFwDlQSBuWd23p159o%2FpfJCxcdyvuMURYCkei36eIax5d9FrxRoHXm8ueDBkO9kfg2lO%2B9QDP1PKMY5ymj7HnUY36e65FvJaUL6LhnqjBTlv%2F4t%2B5NnexZTdsCC2%2BDVUeP3PExMjCGf3sxhvnhfZ6%2FyteCE23tvDkojdBDtXQHo2b%2B%2FcyhYwv7W0RkHYk%2Fy2wdTkXECMYlqOMD6AZdebU7Y%2FWciy1O%2FD0DmVkROmgZBeFqxEws5%2BawAY6pgGg6MLDehfVp0Uug6ee8fA6dCKNGFxyQSsCKtcDgw7HHSKtHnOmjp4mv%2FMMNDLrx91qUTwDcYB5kugQn%2BV0IUuvOpVWhwuSWrSbALWrPvpjntTMlIchEhwikwK88iR8rv7ztPtk5m5WfIwHF3RmM4mDxVazgyXhnQvkTXxYVsryDkyqlz9gPQitcHN%2FevgpUgcYZLtMZ%2BagllCeC0TQbe8VAznRGSxy&X-Amz-Signature=86f700467fa6e910a0358cef9b3ddd95ad9db4a480e1b7a48d514b5155f1a460&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL4EFCW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEgxuvCT0QaoHZriewbK6ZtkD9l%2B8qVh0sQVT0Y6%2FG%2F7AiAS3l9CPP7tEm%2FD3lwG2u8K7%2Bo5SXWqh6LW%2B8VpIBV96CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0949XCkLAWZRcT86KtwDgl%2BEcjRk1a8AUZjIY%2FRYWXjrGt2btJ0oOd1QrB2wxpPxmBCS6YZoMtVOzgHKVpBt%2F%2BG7%2FGm5kBclBJ4y5bwGaV69ECpNKV85bKhQohbMH9EhQQbQ8gzU%2B1w53pcUnkhL4OpvUyAPxWirsQGWRqqF9CZTrC6qpm%2FLqsuZ26mPGwJXfavo4QpSHyw9p9PkK5yf2ardQ4wvyj6thSGy26QRilCF1fen9l%2BUHFWN1BI8PE3DQfVJfZNwmJOPWmPTpplxdrhT1VOR3nsfCNy%2BjS2QV%2BNh%2FPKusrsQhU8Wdfpg725H7t%2BCuv5lBhU%2FQUN8oCEQsMwCaP0fguklgH73dQnpXue%2FlnNtFyUmp4SuHc%2BnBn3d9UD8WkTwMt%2FGsQvL%2F0qMT0i%2FaedCSWhXFwDlQSBuWd23p159o%2FpfJCxcdyvuMURYCkei36eIax5d9FrxRoHXm8ueDBkO9kfg2lO%2B9QDP1PKMY5ymj7HnUY36e65FvJaUL6LhnqjBTlv%2F4t%2B5NnexZTdsCC2%2BDVUeP3PExMjCGf3sxhvnhfZ6%2FyteCE23tvDkojdBDtXQHo2b%2B%2FcyhYwv7W0RkHYk%2Fy2wdTkXECMYlqOMD6AZdebU7Y%2FWciy1O%2FD0DmVkROmgZBeFqxEws5%2BawAY6pgGg6MLDehfVp0Uug6ee8fA6dCKNGFxyQSsCKtcDgw7HHSKtHnOmjp4mv%2FMMNDLrx91qUTwDcYB5kugQn%2BV0IUuvOpVWhwuSWrSbALWrPvpjntTMlIchEhwikwK88iR8rv7ztPtk5m5WfIwHF3RmM4mDxVazgyXhnQvkTXxYVsryDkyqlz9gPQitcHN%2FevgpUgcYZLtMZ%2BagllCeC0TQbe8VAznRGSxy&X-Amz-Signature=5ad27321554c065d063d504c89d41d05c2ff5c1b6a9401fa1212380604c18d02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2UJWDG%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCpzCWoaDJOb69lu1EwpmKXyYZdxB7Ew1yC9K8GGCiP7QIgQq09BVUGh0De%2BN3fyfVBI9%2FiFPaNt%2BglgDw2Etl6k%2FIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIS2GFPvtIOxbnLmSrcA8ZJSlf8XD4BDjjV599IIh4T%2FWQv%2BuId1oOXu67NQzJazvpp7lEH%2BcnQfwvwHvOtdqdh7Bnn6OU6WZIb0hicUMj2cgr0wZUqZcTL5lgLpS00I8Ylbuj%2BMu4LHp5v0uxmlCsGxU259oQK0PNF4heuQAadiYAUUZkwdbydtpqJty2Klo7OBJg2TWQ0p3A3bPDPhoXbnpAnrjdppyr0wbjLzTEc5wprcDerRZ1B2dG6o4qjFWQUrQ0ffhK1oV%2BE7D%2BGudZ96IWqwexB1vJWZwJWl8%2FpyLP2docwoodiFcPLNJVSMh8H9IND0QbqF12ENAHXJ7EBYG8NsHjnv8RX2mAdCB1JDswuTvENBIZV%2Fn4%2BlK0Wf4m%2FrJRxaDt%2FYjjGOmmO%2F3Te5Fq7tFbLcuxo4ScenBXpzx0UiN0LBB5wZzqHqyVtmBGzudBKRdRuLaX88tkTHi%2B4qaH%2F4WM6ER2v0IwQW31gaNpzYFKVYS6YuIBxulOX9nWuJYD%2Bpt2AaA9bgh%2B5oqXxlIMQBapYfoiWaAYaNkTepy7uYIIe2%2FeJNtNhHuAmN68%2Fl8W8kUl5oKvJDqzZXPkJGQW%2BPMo8Rt4fToD11GCLKxhuK1HskPZMT8459f7C9%2FA8gxUDcXgiaf0cMPyfmsAGOqUBUEh58W7ENlsTpGy%2BWCWAXP1bPGB4zScFokRDVfc8aD1u8BOiJaaR29T4sqzYRjcBn4AxLimeOQbRrRKgXosBcRqXX6Tabm3iktKc%2Be5SrJUr4boszWnHlZKPLIwIKCjSjMuXTDZcsBRspIgW6zW3RoQYh%2BhflNHlTXP0PT8n86%2FCB16UD4QxLIhjist0oH3CchG36PSVMRkY3yTbPJ2uWMk6sEq1&X-Amz-Signature=6857035f8940e62bfe958320fff8217c819a8f9416bfc8a44eec5187d17c714d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D2XNG4A%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGhOjRZRKt8995NJ9GFmAvw0Qnabsk55oSS5zbfOPZU7AiBYEtIQ7yqMmucMSnELTaMWHs1mDVfzmWXFLf%2BuKR9gVyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECq6x3XK9FigVVBHKtwD%2BhcwVkekd%2B9YoklLqoo3mTfhkO42G%2F9AL3MiZjUYfW281VTqnRDUyScwg3G2jBiWe2JKTXJbjTcE5WLKu%2BMwwRTTl5JD7eV0docXAos1ojW%2FLbQGoegQHsOyVQqhYsYGDl3NmIU0Y91yPrMGpEU%2Fjikq0Pvmv7Vrr8Xp7YhmAWtaUizpwL8JRKmiCqBfEfofwCrSXUplLayXblEI9tkIBR3MuZpe0cY6%2BeL5WAM8gOw0Jfzz8Pb%2FAx%2BO3D%2BIrpetc9Ps755vAvnDOy7wL3eN42EIqyB4xU7jR9YQZDlnQi7W2eDzhaJGmp%2FsJhrf3O6rntDS2dz%2BCeRm6XcVnbxKfOZ4lDyvadcDJ776kKe8gc5CORfRfs2Jt4kEMzUjciMDLCwlFtMfTDeYawxLkPrtlban2jGwlULxgJOut9b%2F7IpyF%2BPBwzmq1saZ%2FB6IeZzXzJeCoJ5jog%2FPRW3qErFjOXu3oFr4haYEL8mHLYuS3m68ADTy4uy56jVcwwmzP%2B1%2FAfpaBa%2Bu0ZWBd5CNNc2KzdZUNEvZTFdLHk2Bdvz8ZYZjVbwWGeYo%2F4zWfH3nY8EtF0IDxSQnXvvZ3w7cmjXy5xF9rk0T4WfRW8TLFvFPu9fJDS4VZY9fNDtJ17Yw%2FJ%2BawAY6pgGPhVGWzXy5VVNsWyVaOfU4mUXthqExFwd5lQLL67Sn1G6UvehEFudcAWIyOKCY4JHzvv57%2FfBzHAst8WXqtU7fyyUVTfGBx%2FxbfZPXEzfLzcqlOGMgS3ui1qpdts1Co6JX6oTWjZRbTxpB0VGAUhnOAf%2BXh5IzLmTNXy8dlH14q61JikYEKXFX763InbCXTQFkLNXK3OJhtFT4O7gn8Ey3D6O6vN6S&X-Amz-Signature=3f35bcdc317d1e7d2ed2949e4e4be5cfda59b6621fcb4e94192451e807233804&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL4EFCW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T190417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIEgxuvCT0QaoHZriewbK6ZtkD9l%2B8qVh0sQVT0Y6%2FG%2F7AiAS3l9CPP7tEm%2FD3lwG2u8K7%2Bo5SXWqh6LW%2B8VpIBV96CqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0949XCkLAWZRcT86KtwDgl%2BEcjRk1a8AUZjIY%2FRYWXjrGt2btJ0oOd1QrB2wxpPxmBCS6YZoMtVOzgHKVpBt%2F%2BG7%2FGm5kBclBJ4y5bwGaV69ECpNKV85bKhQohbMH9EhQQbQ8gzU%2B1w53pcUnkhL4OpvUyAPxWirsQGWRqqF9CZTrC6qpm%2FLqsuZ26mPGwJXfavo4QpSHyw9p9PkK5yf2ardQ4wvyj6thSGy26QRilCF1fen9l%2BUHFWN1BI8PE3DQfVJfZNwmJOPWmPTpplxdrhT1VOR3nsfCNy%2BjS2QV%2BNh%2FPKusrsQhU8Wdfpg725H7t%2BCuv5lBhU%2FQUN8oCEQsMwCaP0fguklgH73dQnpXue%2FlnNtFyUmp4SuHc%2BnBn3d9UD8WkTwMt%2FGsQvL%2F0qMT0i%2FaedCSWhXFwDlQSBuWd23p159o%2FpfJCxcdyvuMURYCkei36eIax5d9FrxRoHXm8ueDBkO9kfg2lO%2B9QDP1PKMY5ymj7HnUY36e65FvJaUL6LhnqjBTlv%2F4t%2B5NnexZTdsCC2%2BDVUeP3PExMjCGf3sxhvnhfZ6%2FyteCE23tvDkojdBDtXQHo2b%2B%2FcyhYwv7W0RkHYk%2Fy2wdTkXECMYlqOMD6AZdebU7Y%2FWciy1O%2FD0DmVkROmgZBeFqxEws5%2BawAY6pgGg6MLDehfVp0Uug6ee8fA6dCKNGFxyQSsCKtcDgw7HHSKtHnOmjp4mv%2FMMNDLrx91qUTwDcYB5kugQn%2BV0IUuvOpVWhwuSWrSbALWrPvpjntTMlIchEhwikwK88iR8rv7ztPtk5m5WfIwHF3RmM4mDxVazgyXhnQvkTXxYVsryDkyqlz9gPQitcHN%2FevgpUgcYZLtMZ%2BagllCeC0TQbe8VAznRGSxy&X-Amz-Signature=ae9c69d1da3aaeaef3f7e54bbd9fe46126ac94e4ecaa27062bf010f7fec28b14&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
