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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQM5KBIM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9zhs4sAsXrcr95A6zviNcLRWYSJG2InZ3yRtIR0bETAiEA1kyKnwA7RpDa0P4YfWbnFpNmvDQ2YV9ZuojIABwvfhIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJMqBaVD4YAKuwnFfSrcA52vdjpZVC%2Fdel6Io9nDVfXqMmAnCxo5JCejft7BwmWB0k4hFUHQmN8L49p1Yeo%2BL8kMdvB9g6eI8aqlyajPKb879GIT6evHoMBFBYYodj3wjcT2YndhmI64GuIPFmelynTiH06Wq3QloiYO3PG7hJnA6XqBu4I1Iu5taxsmwLNgiBba9Miz%2FiC9qqJkY%2F4E22HJo5pX4299lcD9OFI7sHwohjLd2EvGBRPbayLTV1NPp%2BrEzV7ZFQ%2Fb9GsDp0IZEBNLHEEXeyVOwGwj0jFNadtanydIWFhwBNFsEbIbB7DdyXWw7BLvpfVG4VKkhi2YGnPfLTFsKlbMMfStXWX4L2qH%2F9eE2KP7QhgiDnqH7Vz7Mc6Zqmubjlkx3J9LZJwZogwAHS%2FShTBqRvYabu39Z5sqMCVZLyflRtjOWQ%2FVxSQ2QnLQMiKHmwGk2I8lsx2W7iNCCt04OUQ%2B3gienVFXZ84Z49p3gQFiZAvzL85bJTBa8U8fTX2CExPMmVcR6G16lr2OVmQcCzdg9IwBjuW0KqOU%2BrE30Me%2BqXkNZYbKzRpjsL9fYr2RaXROnh8XhDuIQYNj%2BIg2B%2FUASzAdx2KkNRwXVJbx%2B1AsN%2Fn1YShYDu0L7BK0J8pnMO99axMPMIforsAGOqUBEF%2FLo1RmS8%2BUpu5IfFKeNxDO%2FJfTaj7CoPmRR%2B71U%2Br6MC9J6osyDoX1WUWyyVLH8vR16ASpY2CjwFYcv9z9KE9kvtUCEOG%2BzPMJ2Gx9Q9MiGEjDpkg7Hm%2B9jSNQJY0oXTpRAgOWYNKO1zGNySSa25%2FgCIb2EIBMft1bnLM3TOOO3rDHzK6b9bKXWfqpAy8YJ%2FGyuHG%2BUttiZuzK5cXYHMuSyd9G&X-Amz-Signature=4cd72c5d79a35d11e206d8cd2906dafeef5e8d054f709b5d25a8a7a9c6fd374c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQM5KBIM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9zhs4sAsXrcr95A6zviNcLRWYSJG2InZ3yRtIR0bETAiEA1kyKnwA7RpDa0P4YfWbnFpNmvDQ2YV9ZuojIABwvfhIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJMqBaVD4YAKuwnFfSrcA52vdjpZVC%2Fdel6Io9nDVfXqMmAnCxo5JCejft7BwmWB0k4hFUHQmN8L49p1Yeo%2BL8kMdvB9g6eI8aqlyajPKb879GIT6evHoMBFBYYodj3wjcT2YndhmI64GuIPFmelynTiH06Wq3QloiYO3PG7hJnA6XqBu4I1Iu5taxsmwLNgiBba9Miz%2FiC9qqJkY%2F4E22HJo5pX4299lcD9OFI7sHwohjLd2EvGBRPbayLTV1NPp%2BrEzV7ZFQ%2Fb9GsDp0IZEBNLHEEXeyVOwGwj0jFNadtanydIWFhwBNFsEbIbB7DdyXWw7BLvpfVG4VKkhi2YGnPfLTFsKlbMMfStXWX4L2qH%2F9eE2KP7QhgiDnqH7Vz7Mc6Zqmubjlkx3J9LZJwZogwAHS%2FShTBqRvYabu39Z5sqMCVZLyflRtjOWQ%2FVxSQ2QnLQMiKHmwGk2I8lsx2W7iNCCt04OUQ%2B3gienVFXZ84Z49p3gQFiZAvzL85bJTBa8U8fTX2CExPMmVcR6G16lr2OVmQcCzdg9IwBjuW0KqOU%2BrE30Me%2BqXkNZYbKzRpjsL9fYr2RaXROnh8XhDuIQYNj%2BIg2B%2FUASzAdx2KkNRwXVJbx%2B1AsN%2Fn1YShYDu0L7BK0J8pnMO99axMPMIforsAGOqUBEF%2FLo1RmS8%2BUpu5IfFKeNxDO%2FJfTaj7CoPmRR%2B71U%2Br6MC9J6osyDoX1WUWyyVLH8vR16ASpY2CjwFYcv9z9KE9kvtUCEOG%2BzPMJ2Gx9Q9MiGEjDpkg7Hm%2B9jSNQJY0oXTpRAgOWYNKO1zGNySSa25%2FgCIb2EIBMft1bnLM3TOOO3rDHzK6b9bKXWfqpAy8YJ%2FGyuHG%2BUttiZuzK5cXYHMuSyd9G&X-Amz-Signature=d4615322370e3043f3cb83c2da093d5231841c494a728219b5fdf29fc8151a37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JZ4JB2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTnUgzxLdu5UIF%2FXz3l%2FGwg%2F2QDICwgxf6riZOKcClFAIgV%2BtXzQ6MJoVnT2Dqp7%2BC2kNW2OHTsuAYvSoijnvH4l0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDOTCS5rSpy03XJaAKyrcA2gjv2XpOynniEATzpfkV2aAAQO7eN0bnIwEk5zRXx3ZgDg1zQ%2FsT8CQoOOwHNB8baKHoq%2BcZXSQo88MA0EedZbOwlcVqEHjEAPTZDkCGp%2Fc79oZV9Qgt8DbYjCJePBT0I4E%2Fide2yA7A7w6IjLM5jOZaLWGwrWUkQ2vdEwKZ0QK1HrkAxylXI%2BYj%2FBkER1WZNqFL7Xqy6iDD%2B03ceqcH9CTVN9wxaPt7%2BwwRovW5j2OLfESj1SoDY5xPGaYfIJltOEWX6uU9NUUlzn9GqhPiI9oCEgLZCG3l87PJK4zirKnRoc7gPzPrQXnwCwrT7bRuixa1Crtj66VT5NIw%2B5IkWaeer6Q5ksdOzyaibMBxuADsbN7JW01H0P3j82RIKdoYbY080K%2FK3UN15mavyvcbE6sp8kcE7pXX1MF7f4oFuAzOQNogpa%2FaPtkUMFpVypTaP9OurT8qJAcvCciUznfE8jCOP6%2FPb1zWfLgrUbSyYj%2B4CacAUDZOq5MaPLO7oVzQ214Ooh%2BfQq1yjLGHOD85LpLF9AYjhVbHNV7wbzfhgmEI1GiR4OImqiiEKF9qGcceXZfMr1KaNMbMx4%2BOD%2F2pKtjlCBmW5GXrdxv4pjXjqdIx2AIN1BMjo0uB9O1MPDnrsAGOqUBsV%2BbchMQAUBKbbufhy4ehc7rVFxbqBWsresiBDhytLzPU%2FFlniTSBtjVyyZ2gbVImp1R%2B7Y19fMzzrfm%2BCBEzfoPeIBfQtNcIIlmmkAHSkLmz4c%2FnchnNLNBnGCzij0OvR2Ko8BtFulcsw8AAsSWG8Z%2FXZWVIChf6DMDqfqK06NkY7bWXxYelnTLj5GxTRRBjh8%2BNyqHovWoq4q8bpSVo1haQb5x&X-Amz-Signature=2432859dc122bb25307bf211627d3af7053c6f37153a13a30e1d7e246df82b69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUS3ORSU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxFrdC3ZG3c3WGkf3hJqtg%2F%2BNsQhiV3rYapzJr9Mox1AIgVl6W7FGjKcMIPuP1pI2g4T8pQsSsMesBaJioy5SlkRQq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIQLDx99rTwfKqJLryrcAzZMdUh9oGE%2BxoaRnluTEDrzJ6NljZsB9Dljj5uhhC3y5SDaT9HXlwFDNN8yTa1NQItgxn9Hf28OB54N4i3el12EJSEPHXdN%2FtdCznwykXMqsQ27x8PtY7a9Mg9UwDV2baVxrLLQkOo5WEEIA%2BPuUCqcthxuDsjj7t%2BD%2Bf%2FboFpMswJvcrErMKJqlSbsPGNhRdyyY1IAqK%2F47bQzNWsSLijKGhErgLWlNbaYZSf26iKfj6R0bDq%2FdzOBqtACaO2DWH3QFHoCsSkLMwK9znxygZE6vwRsprB275Z7od5aiDUI0PWO50eNAGfcT8h05uQ3NcHlJ7%2BRLX64gEk39gDxcCf8IrV7qNYExj%2FGi13g5j7xaUKjNqpcUG1V8H4%2FH81bJOZBkqrQN3waIV6%2FtuNfrdiwDRZdtcZ8pK41W%2BwK1Am6XuFhgcIVD%2Bs%2BOFvzurWh1x9%2BDHxhUJijica8kMymxDmL%2F0y6dIyXJvhkTX01ACBOUC1ucjYQADY3kuMcms9VsHGnKTkPc6zX5qLkxSAjbjtwybKy%2Bzv8%2FldeuEwCTRfEw4wMKV%2B59WfCcep2MozSPJLIyn3B%2BSWxinLNjyCnmPG7aEIS6lceNF5c7AFQ%2BrPoavZhBeTZC7Pt63pAMIjorsAGOqUBv8PT6UU%2B1RP4T7JI4a85WSQmwrHTA59lgTTv7x3o765VvuBw6z%2BQB%2BMwyWHqKPYdCTEPQnwoJ4fayU2myh87wmlwVKptYCh58aaLefYuareJEvOdQiilxLzB7fUfMG95%2FD4RODprhS4CtXrbEp%2BJ8AZANd6GOUGZIwFhMv4hmpgSmLytthTZHAD0SKz4HWr9BFraVedUasW8Tei6fnCKsIrIwN3i&X-Amz-Signature=73475b3621cf8ba3b31653233e1b33d9dec41384558828dab533ac4a189e3ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQM5KBIM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9zhs4sAsXrcr95A6zviNcLRWYSJG2InZ3yRtIR0bETAiEA1kyKnwA7RpDa0P4YfWbnFpNmvDQ2YV9ZuojIABwvfhIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJMqBaVD4YAKuwnFfSrcA52vdjpZVC%2Fdel6Io9nDVfXqMmAnCxo5JCejft7BwmWB0k4hFUHQmN8L49p1Yeo%2BL8kMdvB9g6eI8aqlyajPKb879GIT6evHoMBFBYYodj3wjcT2YndhmI64GuIPFmelynTiH06Wq3QloiYO3PG7hJnA6XqBu4I1Iu5taxsmwLNgiBba9Miz%2FiC9qqJkY%2F4E22HJo5pX4299lcD9OFI7sHwohjLd2EvGBRPbayLTV1NPp%2BrEzV7ZFQ%2Fb9GsDp0IZEBNLHEEXeyVOwGwj0jFNadtanydIWFhwBNFsEbIbB7DdyXWw7BLvpfVG4VKkhi2YGnPfLTFsKlbMMfStXWX4L2qH%2F9eE2KP7QhgiDnqH7Vz7Mc6Zqmubjlkx3J9LZJwZogwAHS%2FShTBqRvYabu39Z5sqMCVZLyflRtjOWQ%2FVxSQ2QnLQMiKHmwGk2I8lsx2W7iNCCt04OUQ%2B3gienVFXZ84Z49p3gQFiZAvzL85bJTBa8U8fTX2CExPMmVcR6G16lr2OVmQcCzdg9IwBjuW0KqOU%2BrE30Me%2BqXkNZYbKzRpjsL9fYr2RaXROnh8XhDuIQYNj%2BIg2B%2FUASzAdx2KkNRwXVJbx%2B1AsN%2Fn1YShYDu0L7BK0J8pnMO99axMPMIforsAGOqUBEF%2FLo1RmS8%2BUpu5IfFKeNxDO%2FJfTaj7CoPmRR%2B71U%2Br6MC9J6osyDoX1WUWyyVLH8vR16ASpY2CjwFYcv9z9KE9kvtUCEOG%2BzPMJ2Gx9Q9MiGEjDpkg7Hm%2B9jSNQJY0oXTpRAgOWYNKO1zGNySSa25%2FgCIb2EIBMft1bnLM3TOOO3rDHzK6b9bKXWfqpAy8YJ%2FGyuHG%2BUttiZuzK5cXYHMuSyd9G&X-Amz-Signature=c2239bcb72db62fa8856a7592cdf1320a553d1ec22a4089cae12b763949fd19d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
