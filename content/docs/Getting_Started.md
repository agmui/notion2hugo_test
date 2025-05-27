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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYJMG7A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bv1Fqt9mS4WX2DYOpewB1Q3tJx%2BI7qhHs2MBIB5lkiQIhAJIzeBoDb%2FlZaIRFvEBAru6nM%2B28ARfDYGxsLN3AuyhoKv8DCGQQABoMNjM3NDIzMTgzODA1IgxCU1QYVq%2FTUEbRNYAq3AMvp4CppABlr2AEAIL4i2uKZMyvy7otfYGU9MwBn0%2ByJc0gwI7CeqEee1cX6z55x62tXEGSb2ciiRXXl8kCBywap6RnN0v39mgRhSzb3n2a7s77QzGC7rqY8pY4INFZCWxW0aDm6fMWR3bVN4J0Zk5ZH5Rxp0mWf3ruxooKg2NM6zJcxDQV6t%2FGtfwXTSF79ebGb4dV33XVU2kQqROLshRSg5ud2jZhKR3PKlNvx9dFfS%2B1TsXjXCY3w7jIwd5xfznpzgFC01F%2F0QwOWG1t507FtD6iVw52kDgl3lqpkt1r%2FHSACfMrK4Qtfjnp1SszqNh7Yl4jexEvpbuvgrm43p%2BZTuXCi3gB5tJ2eaGKv2GMuconDXRt98zt60D5aiULyqbShxitjMxmIZoaMI4%2FgKZbZyr0sF5ArVaSdJjVF%2Fx2%2B1DZFZ7D4Nt3QgqrXJYCMXk6tGxGblX9Mpi6AF%2FCx7pO1bKpegiyV%2FVpoucYab12qBbgFvttAj5bqt5KXJbtlD1q2B7PcQYacqVy%2Bnt50JYR0S9sEWY%2B9CACnbWjUGcTo3%2F7Cm%2F4m8veuuWyBkhWH9TePupgrZ28jKkQ38ukfIFuD%2FJ6i7VPQWdr0eN%2BTX6TD19vDq6fZtk%2FI9d8gTCPltjBBjqkAdHxSAX3bD9TVtazUZMZkbEeJSxmtmcHJ28tz%2B5ez3izbRGCYwvivCTJp%2B4dsquNZM3Cn3PEmEvJ0%2Fk5qB3uCzZKC7Sj4pRmcDpwt5ZDL0ce4JSHTYXFhkyMjEcgKnyiJ1jl4n0BkqKPyPLWpNzRB8WV21lxd3r3ViQv6sa5s4dlK0ul%2FnmgTOvxVfwk2Vn5PHke3vGhTjuBWK8xpcwY8WroZ%2BZD&X-Amz-Signature=d3fcfb99b09b22bde0e9921dfce108cbefee23a4397db98bfc0ae2120e435796&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYJMG7A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bv1Fqt9mS4WX2DYOpewB1Q3tJx%2BI7qhHs2MBIB5lkiQIhAJIzeBoDb%2FlZaIRFvEBAru6nM%2B28ARfDYGxsLN3AuyhoKv8DCGQQABoMNjM3NDIzMTgzODA1IgxCU1QYVq%2FTUEbRNYAq3AMvp4CppABlr2AEAIL4i2uKZMyvy7otfYGU9MwBn0%2ByJc0gwI7CeqEee1cX6z55x62tXEGSb2ciiRXXl8kCBywap6RnN0v39mgRhSzb3n2a7s77QzGC7rqY8pY4INFZCWxW0aDm6fMWR3bVN4J0Zk5ZH5Rxp0mWf3ruxooKg2NM6zJcxDQV6t%2FGtfwXTSF79ebGb4dV33XVU2kQqROLshRSg5ud2jZhKR3PKlNvx9dFfS%2B1TsXjXCY3w7jIwd5xfznpzgFC01F%2F0QwOWG1t507FtD6iVw52kDgl3lqpkt1r%2FHSACfMrK4Qtfjnp1SszqNh7Yl4jexEvpbuvgrm43p%2BZTuXCi3gB5tJ2eaGKv2GMuconDXRt98zt60D5aiULyqbShxitjMxmIZoaMI4%2FgKZbZyr0sF5ArVaSdJjVF%2Fx2%2B1DZFZ7D4Nt3QgqrXJYCMXk6tGxGblX9Mpi6AF%2FCx7pO1bKpegiyV%2FVpoucYab12qBbgFvttAj5bqt5KXJbtlD1q2B7PcQYacqVy%2Bnt50JYR0S9sEWY%2B9CACnbWjUGcTo3%2F7Cm%2F4m8veuuWyBkhWH9TePupgrZ28jKkQ38ukfIFuD%2FJ6i7VPQWdr0eN%2BTX6TD19vDq6fZtk%2FI9d8gTCPltjBBjqkAdHxSAX3bD9TVtazUZMZkbEeJSxmtmcHJ28tz%2B5ez3izbRGCYwvivCTJp%2B4dsquNZM3Cn3PEmEvJ0%2Fk5qB3uCzZKC7Sj4pRmcDpwt5ZDL0ce4JSHTYXFhkyMjEcgKnyiJ1jl4n0BkqKPyPLWpNzRB8WV21lxd3r3ViQv6sa5s4dlK0ul%2FnmgTOvxVfwk2Vn5PHke3vGhTjuBWK8xpcwY8WroZ%2BZD&X-Amz-Signature=6e428287df841958a4d01265f253826f1a2cacbf449fa4b8dd2a25b9d9a20610&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYJMG7A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bv1Fqt9mS4WX2DYOpewB1Q3tJx%2BI7qhHs2MBIB5lkiQIhAJIzeBoDb%2FlZaIRFvEBAru6nM%2B28ARfDYGxsLN3AuyhoKv8DCGQQABoMNjM3NDIzMTgzODA1IgxCU1QYVq%2FTUEbRNYAq3AMvp4CppABlr2AEAIL4i2uKZMyvy7otfYGU9MwBn0%2ByJc0gwI7CeqEee1cX6z55x62tXEGSb2ciiRXXl8kCBywap6RnN0v39mgRhSzb3n2a7s77QzGC7rqY8pY4INFZCWxW0aDm6fMWR3bVN4J0Zk5ZH5Rxp0mWf3ruxooKg2NM6zJcxDQV6t%2FGtfwXTSF79ebGb4dV33XVU2kQqROLshRSg5ud2jZhKR3PKlNvx9dFfS%2B1TsXjXCY3w7jIwd5xfznpzgFC01F%2F0QwOWG1t507FtD6iVw52kDgl3lqpkt1r%2FHSACfMrK4Qtfjnp1SszqNh7Yl4jexEvpbuvgrm43p%2BZTuXCi3gB5tJ2eaGKv2GMuconDXRt98zt60D5aiULyqbShxitjMxmIZoaMI4%2FgKZbZyr0sF5ArVaSdJjVF%2Fx2%2B1DZFZ7D4Nt3QgqrXJYCMXk6tGxGblX9Mpi6AF%2FCx7pO1bKpegiyV%2FVpoucYab12qBbgFvttAj5bqt5KXJbtlD1q2B7PcQYacqVy%2Bnt50JYR0S9sEWY%2B9CACnbWjUGcTo3%2F7Cm%2F4m8veuuWyBkhWH9TePupgrZ28jKkQ38ukfIFuD%2FJ6i7VPQWdr0eN%2BTX6TD19vDq6fZtk%2FI9d8gTCPltjBBjqkAdHxSAX3bD9TVtazUZMZkbEeJSxmtmcHJ28tz%2B5ez3izbRGCYwvivCTJp%2B4dsquNZM3Cn3PEmEvJ0%2Fk5qB3uCzZKC7Sj4pRmcDpwt5ZDL0ce4JSHTYXFhkyMjEcgKnyiJ1jl4n0BkqKPyPLWpNzRB8WV21lxd3r3ViQv6sa5s4dlK0ul%2FnmgTOvxVfwk2Vn5PHke3vGhTjuBWK8xpcwY8WroZ%2BZD&X-Amz-Signature=958c8a0c2253f15c50fd6ce8dcd5ac1b1f6932365de2be5ae28e99fbc2042b41&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P72BOKV%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2F27Gb%2F%2Bt4HOsrkmlDJycyg2A3HGe0CBKk3O6osR6ibAiBEc4WvSnlwwGNQqdj%2F317%2FPzA1VDVpai5v87WuIMBHaSr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMSLLxHILEE%2BWzFqojKtwD483XY4huFzltu5iTeYH6EV1N6poAV1%2BMWVrThOcqE6mrFRVmYkrTVz%2FkkVz8l0CBJJatO%2BgzmnqL5HDyXW51NBCHxhrmFfZCidk0nOzJdMNxHsRuN%2BELuoTPWx1CsoV8TSHm2XFhOK5J0NmGAemcYNaQKO8qRdyzCKfkVWijathUZM6DtsAkLUfuDuzNOvEZYdJlSWJQFaaqx%2Fer9WwmAqWvcOL04jKDNqzgLFl8p9X2sW7UuJb6zXgvP32Fp9oW1e%2BLZn8YpIdZjED2zleRJG2Av1BHh2xqyte%2FoFejSNMV%2B6kbh%2Bx4qHIkXrz74%2FoqFWeoDOoiVUAndBQtFERKPAl27f190YdkL6%2BYN1R%2FWn6h2edYtAGW4%2BMxi7ezAA3FIdvpgm%2BLemMi4PW9EkJmmobcFwixSLawDLYmdjodzjXjNtWzIqi59HoEp3i9A6ak7mSb9Wb%2FdXE%2B37blQhX7cv2r4uVOeo6pLYA6E7ERWjUZVvN8cHqKPbGYg%2B5MNAbIPd4BpZq4b%2BclKG0EPufOxxGNyOLmnOO2lckdrR%2FngKjdHawp4%2BgENO0nFXudpHJ4hZ%2F%2B2tNcCDjCf0LWCxrQxoYjoiu5m1JfAG1XWbfdlR%2BL4Zfa%2FNoG%2BO9ky2EwoZbYwQY6pgGEtalY907tDGW5Vq9sxtlyq8b%2BjtH9IUvqWFi92sqgFVT7%2FLLp4F7E8ltFSUyVtTUQs5WNgAsZf0pNpnqvabggB6he7eVgIE8XZ9EhntDJ%2FLp%2FngILDCdhDX5SgT53VXvorR0Ls55ktMD5urI4UeYzGBnFRILZzPUfmbEWJTBpFARA1BBlDyZjrOOvegGIeFTWLQmY9zLzxcKhPPailryJw7GDtXhC&X-Amz-Signature=a6d53b50ee4a4cf8fe5c99215827f1b0fc2af6b7c9734a35993b2ba8fec6bfe6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ETBOZ6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANsDq9HuzRsDVyOy7jUadCT7Jv%2FG435DjOyJx79q%2BHdAiAO0LvcBuGeync%2BBVXugZQ7REJeC0%2F7q6KWoo5z4Ka5tyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMQkwC1tQ5Y042VNhWKtwDD2V%2BYH4AR79vjg0AiutW1CeVl9B1GG9ZqzDDJPmC38ecoG4MgmvT8nF0h35olqYxln%2FWVTZkYUZ3DKis7gactSn46ayg%2FuDoJmno7SOVWwjzJeuPQ8Wm0xSjkinf8XXjHRWn2BzRjbbdyXW%2Bk46w8AdsQbuxNrJqp4Ag4bPKDcJNcVz3DAstP0ZqpjtFrrZfwXU7y0ic3HhDWmu%2B%2BPNKw4rXzJvfJOTFjMv5eWH0CgoyeDjq3Rr3Wb6%2FWJTIn3lb9VHTRzv7hEDme5hQbrxRqn72jzOPnArIZ%2FXjFFkCFwK5VJWPxiUFByHJMivMM6d98CF1cy7%2FvH2cYKLvxn3V7wD1TebD1m07QXW3iWjtctPUQzksmeM0AGA6NLGFjw0FA4%2BYN%2Fdf%2BA1u5jUX8bvEKjAOpo6TLSY3ZffMrbM0UZN2ld9nvg4lR%2BfxKAtcqdglWpyFTZLWmgnzWlxyH2APzPz4N3ZPlawTRKx1V0lEwqI7A6WUIARHwh%2BQL%2FP3HJXPA%2BYg%2BS87XwlqGi6KRAVBK0LxBebxYMkCbh7UW8GRZ5Ef9GpVe1Vx65MFA8vlDeznTSYDQ4W5lKsBvPb27N7BmGT1XSG1%2BsQDntrZZH3Azn5CkpDKlAxE1altGIQwypbYwQY6pgFyVtfChaWe5wpDu1lB%2BGB7ZcKzoon25d53bkatYaPNb4Z6IllDTvtYeZN9z8lUzyiZHeDSm5JppG7Dy3SKt0gvjZC06VF8%2BLv4c%2FAS0k%2F%2FASqqJ%2Fa%2FRYGn9S8%2BgVyeVEuxS3BxIpUgyicv1%2FR3BARZUpDVqnTubke3%2F81iZWnKITs2ojbjnf8BaBe%2F9ztKB346QlvB%2BfiiT99Z2fw6i11%2BSGLthAPk&X-Amz-Signature=3ca8a6f5fca8eaa6b792dfe5d406504c485dbb84834d4558228a834c0a6f2422&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXYJMG7A%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bv1Fqt9mS4WX2DYOpewB1Q3tJx%2BI7qhHs2MBIB5lkiQIhAJIzeBoDb%2FlZaIRFvEBAru6nM%2B28ARfDYGxsLN3AuyhoKv8DCGQQABoMNjM3NDIzMTgzODA1IgxCU1QYVq%2FTUEbRNYAq3AMvp4CppABlr2AEAIL4i2uKZMyvy7otfYGU9MwBn0%2ByJc0gwI7CeqEee1cX6z55x62tXEGSb2ciiRXXl8kCBywap6RnN0v39mgRhSzb3n2a7s77QzGC7rqY8pY4INFZCWxW0aDm6fMWR3bVN4J0Zk5ZH5Rxp0mWf3ruxooKg2NM6zJcxDQV6t%2FGtfwXTSF79ebGb4dV33XVU2kQqROLshRSg5ud2jZhKR3PKlNvx9dFfS%2B1TsXjXCY3w7jIwd5xfznpzgFC01F%2F0QwOWG1t507FtD6iVw52kDgl3lqpkt1r%2FHSACfMrK4Qtfjnp1SszqNh7Yl4jexEvpbuvgrm43p%2BZTuXCi3gB5tJ2eaGKv2GMuconDXRt98zt60D5aiULyqbShxitjMxmIZoaMI4%2FgKZbZyr0sF5ArVaSdJjVF%2Fx2%2B1DZFZ7D4Nt3QgqrXJYCMXk6tGxGblX9Mpi6AF%2FCx7pO1bKpegiyV%2FVpoucYab12qBbgFvttAj5bqt5KXJbtlD1q2B7PcQYacqVy%2Bnt50JYR0S9sEWY%2B9CACnbWjUGcTo3%2F7Cm%2F4m8veuuWyBkhWH9TePupgrZ28jKkQ38ukfIFuD%2FJ6i7VPQWdr0eN%2BTX6TD19vDq6fZtk%2FI9d8gTCPltjBBjqkAdHxSAX3bD9TVtazUZMZkbEeJSxmtmcHJ28tz%2B5ez3izbRGCYwvivCTJp%2B4dsquNZM3Cn3PEmEvJ0%2Fk5qB3uCzZKC7Sj4pRmcDpwt5ZDL0ce4JSHTYXFhkyMjEcgKnyiJ1jl4n0BkqKPyPLWpNzRB8WV21lxd3r3ViQv6sa5s4dlK0ul%2FnmgTOvxVfwk2Vn5PHke3vGhTjuBWK8xpcwY8WroZ%2BZD&X-Amz-Signature=4569338b97ef9978913e6785fb1f42388589f0a3409a565a1ab4e9e7c3cefa5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
