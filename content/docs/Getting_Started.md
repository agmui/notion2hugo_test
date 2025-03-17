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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPIWMGX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4oYMRhGubTZX2P28aGm8SS0VkWWcsnsjO38RGrPcvXAiEAwew%2BHXObtPwsQsBLaNlBennJwnasviolPpcE8C%2FISAYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD3ene656fhl%2FgQh7yrcAxKmwyhazGkwbQhza8C%2BTr275Cuq8XRzjAMaT2%2FH7V40k3DF984HJQ%2FcnlKzacfnI9Pc9CwidWWq1cs8fSO%2FfrIguOKEkK%2FF%2FjHgH4NFKR6NTcnaZZTN3bW%2ByfHPyvjYe3hN8AJi%2BvWJplKDPSqoJ0osgHqcqrKyJ0G0zSs0aW6iZTBvv6QE4QYIiNIjbTti5EkGN9NMUQUtk8Y4rFSxWEAYGuNLxc0agTnRcof6jZBHZimpD2PtjpW7Xo44nxSE8SADy97XBXUxcojdXFz2sF%2FhtplWWyEayfjQ8E3K81Hy0FLrytICg6JbJEypaaMVSAD2tg0lV83gkQ01aO2JbTFGBYevBTd0hTRkecs4Wg0yqUo6t4XPnhBczncNqKl2%2FVzHGdl7itV%2BYBmldNYi8KNZ%2FhHDhGOZtGiPFiDY%2BtJ4iMTNF9BYuhp8dLEX9R%2B6rjb3WMAfZPJUDd23j%2Bx6km5On4wfAF3TW6nXdcvCkTvXtLn%2B%2FuMh%2Bipy6LoDBHNnZx%2FdkoQFUjHA7coWfVMLZ%2BfkSGhx9RDqUfxTu8ET30cuvDrmbbBUWunW9palzuawHlTFjlXzIBijVVJbeAsDS8rY9oXHbn%2BiBqk1mIWVp1gNUFXyLnTYRgbEbJqMMNjA4r4GOqUBi%2FN%2BKIar4q4HAQr6tgvZna6jma5xE0sk7p2ZVxgodBM8es6L4AZjBCBaBMyNh65Z4mwe%2F6AwCyDnQmAVIVMqXC%2F%2By5yLrP8HBfemwDCi%2FN564efIIMxVg4rA8gCkHtsj42WVmlwT6l8lhV%2F7kbeWpeRHZ9dxu7H7tcFk3FTx1mMDcDEPW7zXUOqZNqbMNjvGBvThvJ%2B7R4z22ARSXZiFqr8BKUO%2B&X-Amz-Signature=4552688d51857cfa266ebaf6d0e81b6b660d0b9a6b2fd140023a3aababd8f138&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPIWMGX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4oYMRhGubTZX2P28aGm8SS0VkWWcsnsjO38RGrPcvXAiEAwew%2BHXObtPwsQsBLaNlBennJwnasviolPpcE8C%2FISAYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD3ene656fhl%2FgQh7yrcAxKmwyhazGkwbQhza8C%2BTr275Cuq8XRzjAMaT2%2FH7V40k3DF984HJQ%2FcnlKzacfnI9Pc9CwidWWq1cs8fSO%2FfrIguOKEkK%2FF%2FjHgH4NFKR6NTcnaZZTN3bW%2ByfHPyvjYe3hN8AJi%2BvWJplKDPSqoJ0osgHqcqrKyJ0G0zSs0aW6iZTBvv6QE4QYIiNIjbTti5EkGN9NMUQUtk8Y4rFSxWEAYGuNLxc0agTnRcof6jZBHZimpD2PtjpW7Xo44nxSE8SADy97XBXUxcojdXFz2sF%2FhtplWWyEayfjQ8E3K81Hy0FLrytICg6JbJEypaaMVSAD2tg0lV83gkQ01aO2JbTFGBYevBTd0hTRkecs4Wg0yqUo6t4XPnhBczncNqKl2%2FVzHGdl7itV%2BYBmldNYi8KNZ%2FhHDhGOZtGiPFiDY%2BtJ4iMTNF9BYuhp8dLEX9R%2B6rjb3WMAfZPJUDd23j%2Bx6km5On4wfAF3TW6nXdcvCkTvXtLn%2B%2FuMh%2Bipy6LoDBHNnZx%2FdkoQFUjHA7coWfVMLZ%2BfkSGhx9RDqUfxTu8ET30cuvDrmbbBUWunW9palzuawHlTFjlXzIBijVVJbeAsDS8rY9oXHbn%2BiBqk1mIWVp1gNUFXyLnTYRgbEbJqMMNjA4r4GOqUBi%2FN%2BKIar4q4HAQr6tgvZna6jma5xE0sk7p2ZVxgodBM8es6L4AZjBCBaBMyNh65Z4mwe%2F6AwCyDnQmAVIVMqXC%2F%2By5yLrP8HBfemwDCi%2FN564efIIMxVg4rA8gCkHtsj42WVmlwT6l8lhV%2F7kbeWpeRHZ9dxu7H7tcFk3FTx1mMDcDEPW7zXUOqZNqbMNjvGBvThvJ%2B7R4z22ARSXZiFqr8BKUO%2B&X-Amz-Signature=3db028c835e2327efec4318e9cf2400d7a4b8fe8f391e167e48ddac92c34dff9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFMJ4AMY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy5yMT2d3pHGbR5nm3N5WvJUyHnCgwG752rT7p6HOB1QIgHRdeES%2FH9IKaV8AWa1lV5QBsVKkoZPHtS4qA6e1IF5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGcs1vks3Jm4hI1SxCrcAwWzhpW%2BBq2W2qnWVrNWHOeUwaI5wiOIcTUctm905%2BLl1VpTDRP%2FqbOJftGf4gpWLXl24CkSGBWVYQY4eIHPehdOZ60ncvOb08e2PC0ZV0dIVqjk8%2BPjm3C3cPonfd6eEB4h2Uc2hoIvzocCjiQfKsY%2BZCjvMA9VmQkKeSUjRHwomA0aqPuX0YVa7%2BVKwsVa8CBtXuy6eZ741u9NA%2FN94wFE2Tq2lywo6H%2BoV58RCSspevyxkV6Cngc3sG8rncSk6m%2B44UN1W66bCwPp7wdU1mKufCbwqkyqMjcXEGtvp03ydaUkp4ZHHZyuJkUW15QFf%2BqhHjaIiqZemizwRm8nRo7Fo4V9oiq69EhD2pLaOgaBcx9rZStk947nrBQ7OxcyEllHUrXiGpSVw4v8dsGc0EtpzxhVFPh64hQnv3iV14xVLL3rl4cnnhtSau4nECsmlv9O%2FnshpXvHqxf0ddn528O7mNoxp1hYxNrc13ZXsE8W1e2ZXbAH1tTuYQX5BS7NVRd8tzTygnVQEPePJiSFQmxwW7qd8dbWyEpV7Hm9aJxFYbLSzc4u3YWoL5z6zZ8tF%2BiGhFhldQQKRJfkVcxfpEVJeCztIEreZClpkJW68xtBx4F8hEdjQgneYav3MKnA4r4GOqUBx%2FakSwpLi5fJwP3ASmgIWiIGaoDdaOcelpPYKlLPnxl%2FpZtf79bVqUsDFvX3pI8o7QLd4MZYiyJrIcBxWr1nFi3Eu7CLieUui926ciMKdfaBGjnKkX12zPS3uADnjgRLylYB%2B%2F%2FAQPvGsdEsMNCZ6XnZ2gI1S2oSVuaDshG6YARGlcHvPFQeInM8wlLvC2E2%2FKvG88rbxSFasDcIoO0dpxcqitMC&X-Amz-Signature=b513119adc1b9bdb13c13cbfdfe6d965817b6cef08a62730afecc1fae4668327&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLRSGO6V%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbip1MMyVXHUhhFdwnftHAFzoGpzffS4KQxNSiGqwHEwIhAIGr2yfv8%2Bn2C125hzkDWdMMgVWOlUGoQoJ9Hf9NILWrKv8DCE8QABoMNjM3NDIzMTgzODA1Igy5bFoB%2F9fAYXN7Cgsq3AM1TJpaLRGXZZgK1Zq1lktSXHIcmRLoo%2FskCVtPvYwfpRWuysfLFD87f0ErVOoHTvdDW051NqEe2YzBYkeHfLZ%2BIhiNKAKjOYi0KKPfQZGvXz7iQy2zHhuBMtrLX4pMnMySIyizRyF0OpBiM3xOAAOJBSTFNbpSd2dNmSrsOgT0369ykqyA9ZkrXF86fzN1p9CJKHTI8aFyvgYNe8GUbNOYD4fHIJlM2OsGlh%2BUMExRtLGVTRnjXV5N0rbrm%2FZCWDRN%2BFGfft71wnijdHUDPX02LgFyDGeWYQ5AwpjofOjUJ%2FSwaFEF2wsuUnZJ0UFYDPPybJKNwP2171wWMkFaaYOmOJX6%2ByT8nPsPHOz1zcSngq0M%2BrDwUrbeTSwlKZUEbZH7i6HeoQV7e5OliJyftbYZ%2BLp4lZpny8Detykv9AlntMgOlmGgjCHbu84PkEtlXWAIeuCyuOM0KcshNib4TMU9onwI7HQ8%2BvQgXZuWxA49TP4%2BA6NKdgKz7o%2BW48fv8xKwgXsUcVSByoMYHpkXE34KaUu0HtOKcPbe8v34omf03KeUC1kXvvV1WjdQ5P2j1kxojKZw3F4DywHbNWvDqaaKMlYc%2BzoZDynpvYMAWIZBta5R4pRdgeE%2FkhantDDiwOK%2BBjqkAc1DjCtxniK6ZDEzD%2FkZ3JmioXOMiGtRAbA800PPPgEmY0CaGUdQYna3j9LJ%2F3yLcfyIS6gqnIfuLf5jriwcIkF2UfqzRtdAu%2Fg3Cf4sV9Gc9UYu0bEVmEM8VvJ9xTI%2BoiwaSkMwKFgTxeA%2BTzQ%2F%2FY1oiuQ0dm1hd8fSXyj8Fu6EYphA6JLncbbfLbT2%2FGfvCxkzHYyLg%2BICSkPJzXGu%2FytOagEM&X-Amz-Signature=686c16bebe2c34371d9432728999c72d3ecae12c7771c4bab6195b6ce5d7882c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DPIWMGX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4oYMRhGubTZX2P28aGm8SS0VkWWcsnsjO38RGrPcvXAiEAwew%2BHXObtPwsQsBLaNlBennJwnasviolPpcE8C%2FISAYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD3ene656fhl%2FgQh7yrcAxKmwyhazGkwbQhza8C%2BTr275Cuq8XRzjAMaT2%2FH7V40k3DF984HJQ%2FcnlKzacfnI9Pc9CwidWWq1cs8fSO%2FfrIguOKEkK%2FF%2FjHgH4NFKR6NTcnaZZTN3bW%2ByfHPyvjYe3hN8AJi%2BvWJplKDPSqoJ0osgHqcqrKyJ0G0zSs0aW6iZTBvv6QE4QYIiNIjbTti5EkGN9NMUQUtk8Y4rFSxWEAYGuNLxc0agTnRcof6jZBHZimpD2PtjpW7Xo44nxSE8SADy97XBXUxcojdXFz2sF%2FhtplWWyEayfjQ8E3K81Hy0FLrytICg6JbJEypaaMVSAD2tg0lV83gkQ01aO2JbTFGBYevBTd0hTRkecs4Wg0yqUo6t4XPnhBczncNqKl2%2FVzHGdl7itV%2BYBmldNYi8KNZ%2FhHDhGOZtGiPFiDY%2BtJ4iMTNF9BYuhp8dLEX9R%2B6rjb3WMAfZPJUDd23j%2Bx6km5On4wfAF3TW6nXdcvCkTvXtLn%2B%2FuMh%2Bipy6LoDBHNnZx%2FdkoQFUjHA7coWfVMLZ%2BfkSGhx9RDqUfxTu8ET30cuvDrmbbBUWunW9palzuawHlTFjlXzIBijVVJbeAsDS8rY9oXHbn%2BiBqk1mIWVp1gNUFXyLnTYRgbEbJqMMNjA4r4GOqUBi%2FN%2BKIar4q4HAQr6tgvZna6jma5xE0sk7p2ZVxgodBM8es6L4AZjBCBaBMyNh65Z4mwe%2F6AwCyDnQmAVIVMqXC%2F%2By5yLrP8HBfemwDCi%2FN564efIIMxVg4rA8gCkHtsj42WVmlwT6l8lhV%2F7kbeWpeRHZ9dxu7H7tcFk3FTx1mMDcDEPW7zXUOqZNqbMNjvGBvThvJ%2B7R4z22ARSXZiFqr8BKUO%2B&X-Amz-Signature=a8d979619dd74b8c41642ddaa21865c51c87d5062a9207520b96303bce3938a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
