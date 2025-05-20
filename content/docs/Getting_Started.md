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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PWZX6D%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgFPS8aDmVoa1r%2F4MtMzSPpwrugS0aGR7AZEuMPDp6FAiAbjO6YOHK4j5u9yBYp5Fk7iUTgzADcZeTQJUdSVsqN0iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdVpqxNmP%2BlLqccXKtwDXjq649HroIWWdTPGf3EFagikwJB0efmwd1vM7HJ79iRUhevlLDfRDf8hvk5XFruypg0nnQEHcHiGhB6dqaLKwFd8CkuaRGqBYhnvRHcUwOZG72ATrSwGg2bnR8DNOHCaRDhRLyIFGYNQ14QcK3lr3j3KNHkPEUEfsvdoCQnQZES9Bc0ZH%2FfSOSV%2FX3LN%2BPQjijlUoXq02bTQjGJMJzmUQ0zLL%2FNAR1wsGxE6nd%2FZZrbQ1YjH1c%2BN%2BqWvcyYSW8OZ2YJ4%2FVZvqmcwLG4W1ckzD%2BlDRUjc03j6TXy72Y2AGTlFvO2hXTsxpE0ajWQ2JPQHy10um5V0lxLkxKoQ0eAI7FHWllxwDdLZy4XX3h8AgcS3H9P7pT0YuBDGBKN47d9tET1K7TnSwa8g8rH330v79RcZCGcxHgwjGVYkAgisdvV%2FJPD%2F%2FtWqG8jTIRD%2FDL9SFpUAWalGVVw%2B3JtO%2BmBV8oPGJGqWvMHzYcrbD8t5qDc66NS5wqTGX6bFSmeWKEwfkaTpJB%2B3bsNKX3etW0z7FaXGokD9SdYHevtY8nHvagpYfnCCk3fivn5ipZJPm%2Be%2Bk5ZU13DO7Jwqm29JDvkYgqwNFGLvMRiC0shHHMZDTowDo4jh14C8OxkdxYowz8awwQY6pgE5BxEg6vy4a4wo60PLOxBSMSiEsETdBNgO5CHKqNSdlNOaH09WpJDLP47L38g0r7Qn9%2BuYSe46MR6u1Tu3PJKsiU7G52D5ONYvD1I4%2B3nkvNdz7EjVgkjrViqeow2tnvu25Q%2BLxc%2BhuLjWXHzvHVt0yg8JrY1qs0kWVGj%2B7%2F67v6EXr%2Bu4K%2F2D6yQni9XaGBcTVc2qWwXHt3GtGDcKiN3dG%2B8jo06f&X-Amz-Signature=5bbc2b74b7268c6967ff5dc8eeed9c94b3955e87af1c10a742016ae87bdb0d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PWZX6D%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgFPS8aDmVoa1r%2F4MtMzSPpwrugS0aGR7AZEuMPDp6FAiAbjO6YOHK4j5u9yBYp5Fk7iUTgzADcZeTQJUdSVsqN0iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdVpqxNmP%2BlLqccXKtwDXjq649HroIWWdTPGf3EFagikwJB0efmwd1vM7HJ79iRUhevlLDfRDf8hvk5XFruypg0nnQEHcHiGhB6dqaLKwFd8CkuaRGqBYhnvRHcUwOZG72ATrSwGg2bnR8DNOHCaRDhRLyIFGYNQ14QcK3lr3j3KNHkPEUEfsvdoCQnQZES9Bc0ZH%2FfSOSV%2FX3LN%2BPQjijlUoXq02bTQjGJMJzmUQ0zLL%2FNAR1wsGxE6nd%2FZZrbQ1YjH1c%2BN%2BqWvcyYSW8OZ2YJ4%2FVZvqmcwLG4W1ckzD%2BlDRUjc03j6TXy72Y2AGTlFvO2hXTsxpE0ajWQ2JPQHy10um5V0lxLkxKoQ0eAI7FHWllxwDdLZy4XX3h8AgcS3H9P7pT0YuBDGBKN47d9tET1K7TnSwa8g8rH330v79RcZCGcxHgwjGVYkAgisdvV%2FJPD%2F%2FtWqG8jTIRD%2FDL9SFpUAWalGVVw%2B3JtO%2BmBV8oPGJGqWvMHzYcrbD8t5qDc66NS5wqTGX6bFSmeWKEwfkaTpJB%2B3bsNKX3etW0z7FaXGokD9SdYHevtY8nHvagpYfnCCk3fivn5ipZJPm%2Be%2Bk5ZU13DO7Jwqm29JDvkYgqwNFGLvMRiC0shHHMZDTowDo4jh14C8OxkdxYowz8awwQY6pgE5BxEg6vy4a4wo60PLOxBSMSiEsETdBNgO5CHKqNSdlNOaH09WpJDLP47L38g0r7Qn9%2BuYSe46MR6u1Tu3PJKsiU7G52D5ONYvD1I4%2B3nkvNdz7EjVgkjrViqeow2tnvu25Q%2BLxc%2BhuLjWXHzvHVt0yg8JrY1qs0kWVGj%2B7%2F67v6EXr%2Bu4K%2F2D6yQni9XaGBcTVc2qWwXHt3GtGDcKiN3dG%2B8jo06f&X-Amz-Signature=a574feead0141ef2cba64b8ae5155bd9f9a5645c1ea59ad7be291d0974c30694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PWZX6D%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgFPS8aDmVoa1r%2F4MtMzSPpwrugS0aGR7AZEuMPDp6FAiAbjO6YOHK4j5u9yBYp5Fk7iUTgzADcZeTQJUdSVsqN0iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdVpqxNmP%2BlLqccXKtwDXjq649HroIWWdTPGf3EFagikwJB0efmwd1vM7HJ79iRUhevlLDfRDf8hvk5XFruypg0nnQEHcHiGhB6dqaLKwFd8CkuaRGqBYhnvRHcUwOZG72ATrSwGg2bnR8DNOHCaRDhRLyIFGYNQ14QcK3lr3j3KNHkPEUEfsvdoCQnQZES9Bc0ZH%2FfSOSV%2FX3LN%2BPQjijlUoXq02bTQjGJMJzmUQ0zLL%2FNAR1wsGxE6nd%2FZZrbQ1YjH1c%2BN%2BqWvcyYSW8OZ2YJ4%2FVZvqmcwLG4W1ckzD%2BlDRUjc03j6TXy72Y2AGTlFvO2hXTsxpE0ajWQ2JPQHy10um5V0lxLkxKoQ0eAI7FHWllxwDdLZy4XX3h8AgcS3H9P7pT0YuBDGBKN47d9tET1K7TnSwa8g8rH330v79RcZCGcxHgwjGVYkAgisdvV%2FJPD%2F%2FtWqG8jTIRD%2FDL9SFpUAWalGVVw%2B3JtO%2BmBV8oPGJGqWvMHzYcrbD8t5qDc66NS5wqTGX6bFSmeWKEwfkaTpJB%2B3bsNKX3etW0z7FaXGokD9SdYHevtY8nHvagpYfnCCk3fivn5ipZJPm%2Be%2Bk5ZU13DO7Jwqm29JDvkYgqwNFGLvMRiC0shHHMZDTowDo4jh14C8OxkdxYowz8awwQY6pgE5BxEg6vy4a4wo60PLOxBSMSiEsETdBNgO5CHKqNSdlNOaH09WpJDLP47L38g0r7Qn9%2BuYSe46MR6u1Tu3PJKsiU7G52D5ONYvD1I4%2B3nkvNdz7EjVgkjrViqeow2tnvu25Q%2BLxc%2BhuLjWXHzvHVt0yg8JrY1qs0kWVGj%2B7%2F67v6EXr%2Bu4K%2F2D6yQni9XaGBcTVc2qWwXHt3GtGDcKiN3dG%2B8jo06f&X-Amz-Signature=be89d084b9bcd007e9f4e90a797b3807b3aebc55e34b25d76407ad87168a4930&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625C6ZW3J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpPoFgshRfgJcn0OLchrZT3pl5U0EjzhZHbK%2BjZWTDaAiAja90BS6EAmMZaiOcAWUXRQVqW8MQe5y%2FQidn7jIBSASqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCQKr%2FOBtU46pYooOKtwDf4U31MEcSclVijVviJeztQFuTbLCUF7S0wVjUq3RvH92ENN6gKaw7F0%2FH6bx%2Bc1pNY60GeLMUbs2flUBKVOcKlRD%2Fi7obgoMC8grfRAAZ8oumsd4yLO3rXmDHnqKUrvPVyVuVk%2FEkQVUVwmAFepW%2FoYqsaqgE5v4U6Ix5aX9mz3zG0pXFRSr%2BGI2yeFL5Z5vnJN%2F5%2FG62cnSsVOu%2Bm2Q%2B8LqMpKZnvvsAtb5da7o6l7oxSWSV%2BDKb1Pi3yAAHUGZEVtg14GbEgUnRMmJSjfQ7MLNJCgvITNaljfcLMtbuTrBaPglGQiUL%2FKZ8A48jIrL6uYUVh4xwluTiewZZJG5Z5mmfzIY2sv8fpvNGHwn%2FsU34XD9oAfIZisd3sTNY2Wb5XmT%2FdsHXBauG%2F%2FTjLfp70Ge306W7JCpYPDfAdj1kPnkjkUUpcRyFawZSL9dABs9i2omghWnXTpL%2FSfv2SELwbXLBfg8ZKwr%2BKmRvdoMDbJGLkRi8OZ5rjlXWtsP%2B9vMYQaE8mr4RSM8uOxU1b%2FP3YM8BCoffwzyrjBdqD8W8dIhk7C3viQQ1VMSZeXwhApjxsfqVHcRvoG8t1AYpX72i7KvQgAOil4RVFJHqXhT%2B8klB48UnDQSyyI8FTgwvMawwQY6pgG8VtwcOSP0lEqYGvvnOBgBy9NhVAQeBUBtMw%2BQJZi1JmZ9OXH2V4usDl52Yhc8x1W028hDXXVTs%2F1Bqh1usi%2FUHwPruTTWSfA%2Bfv6Lxu656O%2FB0doceQXPaSLvooXbGzTE3zuMOtBaLnKAXqDU5wH9C%2BnrP6Van4LjFyy7I1qzqj9P%2Bg8Mw35m0jw%2F7xR3BOFQ955SEZ5l6OCCymUrLJbC3Q7tDRhX&X-Amz-Signature=10c3cb0ad2f9da224436e39e27d9bed333c514b147a39b711e6d2407dce61e87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMGJVH5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BBQuTNpdQMUUZudSJ0epGaiCBK%2BamdqRtL7459zG9pwIhAMUO1wsrZG89J9%2F8KLW4H9b8g%2B8rhvakQdLMvpnqcVzaKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy51fLTsHDzHVA%2Bxzcq3APVm5c47JzISB06HXLMGwyOSMLTSQlHAd9XLWUcM62DiHkkb2HGwAEov%2BwthOrmE%2Fwp7g28STnbkOX%2BUzjskCpjgOJX7Hgx%2FFGdq7PxTu0zZDFhJ%2BvtqIVB3yBU7aCeosB8elmSKCeFHIKRkP4PuAHWhc8czebCif3cCZQMGL42QX4MEOtR3VNablRts9HBCqWi86l6Pts6NcUfnsdx7m1JsvVp5wi0RAfEuM5P%2FV5pV1DD48rMmyy4RMPLmAzaxp8hyKQzVwVVpR6b51tJUpyZlqJ8NYb0xqZyWx0HfHG6htcqTN6O6zYVowwJkjn6K339fZ2aLfo6qecz3%2BNK8fzYmDHnku5jodzXRjGkfNnr%2B83G2uUvNLmt01xDanwjqtWbv9h2D2fGR%2FqaDduZ7y4jRCrflXtJXhii8ksOCIVdG9wDqS1LvgrgQQUZQnYBkwqVx4JqXFn6Np7WCs7WiSObJBP020IGt%2FGSs270QuXFK%2Fv4YWwF1FXrR%2FYHMDZxZ%2FL1wKDk6oPwAhHpDMP%2F0RoqMx6rg5G4Oz7w4PV5IegbYnuKezoNNCkwhAGS%2FZLguWILey95tYn7luX%2Feym2c1OJ4HsmTnCWOPu07I0ov8aicf%2FXJqi%2BJg2Z7azMuTCJxrDBBjqkAcvs3XTSIhHoZTDLqT7pz6nCPwaMz%2FcfCHiJlvEXxXNpJuUiWUmedcku8MfDPvB1lzCzOBXRABYjTexwUsJywi8dti0czyzpoNDBqdgwRgvVNUPUN7p8p9vLa9qLQarvsokywuj5N6TOTmz4yXEIswg%2BdSYE2IEnnOiLzFvhoXCIZsIeNJ%2FNgNS6WqEVEpAPGd9LkMH4GrDOto1hyeykps4%2Fiq68&X-Amz-Signature=3dd8d42553ff1715199966c8dc42d5fa3b893a08aa519b1ab2e93de9b1d70999&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633PWZX6D%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgFPS8aDmVoa1r%2F4MtMzSPpwrugS0aGR7AZEuMPDp6FAiAbjO6YOHK4j5u9yBYp5Fk7iUTgzADcZeTQJUdSVsqN0iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdVpqxNmP%2BlLqccXKtwDXjq649HroIWWdTPGf3EFagikwJB0efmwd1vM7HJ79iRUhevlLDfRDf8hvk5XFruypg0nnQEHcHiGhB6dqaLKwFd8CkuaRGqBYhnvRHcUwOZG72ATrSwGg2bnR8DNOHCaRDhRLyIFGYNQ14QcK3lr3j3KNHkPEUEfsvdoCQnQZES9Bc0ZH%2FfSOSV%2FX3LN%2BPQjijlUoXq02bTQjGJMJzmUQ0zLL%2FNAR1wsGxE6nd%2FZZrbQ1YjH1c%2BN%2BqWvcyYSW8OZ2YJ4%2FVZvqmcwLG4W1ckzD%2BlDRUjc03j6TXy72Y2AGTlFvO2hXTsxpE0ajWQ2JPQHy10um5V0lxLkxKoQ0eAI7FHWllxwDdLZy4XX3h8AgcS3H9P7pT0YuBDGBKN47d9tET1K7TnSwa8g8rH330v79RcZCGcxHgwjGVYkAgisdvV%2FJPD%2F%2FtWqG8jTIRD%2FDL9SFpUAWalGVVw%2B3JtO%2BmBV8oPGJGqWvMHzYcrbD8t5qDc66NS5wqTGX6bFSmeWKEwfkaTpJB%2B3bsNKX3etW0z7FaXGokD9SdYHevtY8nHvagpYfnCCk3fivn5ipZJPm%2Be%2Bk5ZU13DO7Jwqm29JDvkYgqwNFGLvMRiC0shHHMZDTowDo4jh14C8OxkdxYowz8awwQY6pgE5BxEg6vy4a4wo60PLOxBSMSiEsETdBNgO5CHKqNSdlNOaH09WpJDLP47L38g0r7Qn9%2BuYSe46MR6u1Tu3PJKsiU7G52D5ONYvD1I4%2B3nkvNdz7EjVgkjrViqeow2tnvu25Q%2BLxc%2BhuLjWXHzvHVt0yg8JrY1qs0kWVGj%2B7%2F67v6EXr%2Bu4K%2F2D6yQni9XaGBcTVc2qWwXHt3GtGDcKiN3dG%2B8jo06f&X-Amz-Signature=9cad30bd3f93a811cb438953794c2e7d45bf3dbf9a0c6be38e3fbf8ecddde493&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
