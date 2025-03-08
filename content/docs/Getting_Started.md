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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSGYGSL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGFSUSdyi%2Bt6OlRPgO20kTO92VEmc7LAT4lxQmI%2FvTB2AiEAjqxCcuTFfty8IdjVB0JiYVRb88qOz1ruOtcjxCSP9Fkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHt%2BeMFRJEjUR8KccCrcA5KvRX5824MiQ1nlkMBzkooSZ2DZVW89%2F%2Fv%2BzBWo5EhA7VnWln00TTxjUtBoiKpoTxGviWeWbQ0EZYFDw1Y29CKgk8ZlzXMXYwfAqByhWghw3wEsv5eAm9TCaXmABGJQXC%2FxUtmSWxjHVV%2BHiCyCfErpoOCrrLPifHUPy9PKoBUqIYWUwpBoBMS%2BPlI3oh8NmRa2JS8B6Ix%2BT9IHPJfGWb735XwOAvimO7uGvk8EgaspWcAyLkXO0TT6A4ACrWPoOGKXFu3ErFmFk%2BFPsYQUjmCrqay0CF%2BJvqwb0PThky9LO2WdwkG8K%2FBGZLAZW2j2aqLJoEBJzFjwqCby9ACBeuZqt4duL0w9O8wAhDt8h6%2Bs4dMhI5feMU3z9p6atpQeRMWl4purnFHP9XYuvE78SmIegMPQJUL9debnA5VnRivyVcVu73uDJlEBIBcFMCh1qXn2yrdS%2BLkNBYQUxSBLMAHopUMb0pyTPNt2ikdjwKoY5g0nWgC8wIgwEiXQ50SbE7O9bFZco65XsZVkcyw6rm5X7k8CHQZuliesLbBRa8uyrqMr6HAqjn4tVYtkiCO1oCFUBvJVUjt16KRzsoumhMwKqdfzGeEHl%2BPdum6tpjibq%2FTxBIIdA9OmjJFXMKC9rr4GOqUBbkssK1QFG0YD9f7EFszRicVZLgKB3lp4NlF7YNa98Zou9mrTbLsNRADW0rXe4hDk4p7QcUEXc8YAsdo3qOvdA6w9M4yRzvoYnhiDsrpsAdF%2FB0Bfyhy8hFyflzwSTCle1KqvU3QtcIWFsVvGuzOmll4QehLQAFT%2FBlRWLRlJ4LE48DSG5btXJas3dq5jlMQD%2Fi6Nd4kCrnE5INRVISyIAPbMKPSr&X-Amz-Signature=09113bdcae791593a7423493b815541d97116a472f3ad9cc7ee4752e890e9256&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSGYGSL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGFSUSdyi%2Bt6OlRPgO20kTO92VEmc7LAT4lxQmI%2FvTB2AiEAjqxCcuTFfty8IdjVB0JiYVRb88qOz1ruOtcjxCSP9Fkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHt%2BeMFRJEjUR8KccCrcA5KvRX5824MiQ1nlkMBzkooSZ2DZVW89%2F%2Fv%2BzBWo5EhA7VnWln00TTxjUtBoiKpoTxGviWeWbQ0EZYFDw1Y29CKgk8ZlzXMXYwfAqByhWghw3wEsv5eAm9TCaXmABGJQXC%2FxUtmSWxjHVV%2BHiCyCfErpoOCrrLPifHUPy9PKoBUqIYWUwpBoBMS%2BPlI3oh8NmRa2JS8B6Ix%2BT9IHPJfGWb735XwOAvimO7uGvk8EgaspWcAyLkXO0TT6A4ACrWPoOGKXFu3ErFmFk%2BFPsYQUjmCrqay0CF%2BJvqwb0PThky9LO2WdwkG8K%2FBGZLAZW2j2aqLJoEBJzFjwqCby9ACBeuZqt4duL0w9O8wAhDt8h6%2Bs4dMhI5feMU3z9p6atpQeRMWl4purnFHP9XYuvE78SmIegMPQJUL9debnA5VnRivyVcVu73uDJlEBIBcFMCh1qXn2yrdS%2BLkNBYQUxSBLMAHopUMb0pyTPNt2ikdjwKoY5g0nWgC8wIgwEiXQ50SbE7O9bFZco65XsZVkcyw6rm5X7k8CHQZuliesLbBRa8uyrqMr6HAqjn4tVYtkiCO1oCFUBvJVUjt16KRzsoumhMwKqdfzGeEHl%2BPdum6tpjibq%2FTxBIIdA9OmjJFXMKC9rr4GOqUBbkssK1QFG0YD9f7EFszRicVZLgKB3lp4NlF7YNa98Zou9mrTbLsNRADW0rXe4hDk4p7QcUEXc8YAsdo3qOvdA6w9M4yRzvoYnhiDsrpsAdF%2FB0Bfyhy8hFyflzwSTCle1KqvU3QtcIWFsVvGuzOmll4QehLQAFT%2FBlRWLRlJ4LE48DSG5btXJas3dq5jlMQD%2Fi6Nd4kCrnE5INRVISyIAPbMKPSr&X-Amz-Signature=78b6077a992b7e5edbd806d76d639124f696a79bcd57cb1c3ef75eb7f3221b75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTCAKRS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDSx5D8wZne9WIyNMmhq%2Fc%2BRqfvO5qHD0nRmmnBENC%2BOwIhAO9rZPDI21lN1beGccaDpfwS3ds%2BZBLVil4MrSGPwImeKv8DCFMQABoMNjM3NDIzMTgzODA1IgyVwWqAWYeXTZrnbc0q3ANxujgmRmMNjKw5Y84i2c76FJjnP%2BVv9MITUkZaagehcSZLV1UCWayrYQAyBNvby8zZmkJ51JeetFOjvF8Zjk4LJci6nH%2FGZRL%2FI1do847pXJogsOMRnbG8e5kW9iN2JHOxbS11%2Fwk6vQkjTDWQcqb7HR49WQyF8%2BCp%2FORGrhf%2BPL184GM0YjTrixCwQvnwYUQ4zt8Op9PqPyh9m1x%2BioGC4HrvUsKSogGt9nBW7DcFcHs%2F6jS27n%2FW2UlfMNDyEIreHMoGYRn7gVr6b6EEnSoeYCmnMuCvTCsrAtjyyCpauzkDQsgbHDIjAeYX%2BSd%2FStTBYdHXAXynjii1mjoXywkUbytZZGMvowg1eWG%2B86VmblqsE2YR3u2zmPSrQOf3gyUmKNUk4Jv0VE3IHx%2BIl2du5p1nu3yH2nWFjyvn%2FMctouOBtENTNJcg3xPNaHzbd%2FeoQVW2%2BjeAm1PWDRAuaVpJvXTPPMoVRPG3ajiw2l0utM4ObETtVtug4bt5sctan2%2BMANYBSEg3m1y44%2FHMB1MgZklWNZ5czcPonD1bVKeTFHan%2Fdu6Z3ly5V3N8G%2Fk6KQi9JVbEKGQHYOda2lOe%2FHtZCgmPDIn13DJkizEub75km7b0k4kumRavl9UgDDlvK6%2BBjqkAW0k5eDvnRdBGZyrJsEbISxwk6oaMRK5QUwlrEwt%2B91OT3NB7WGIW13PunMa9WMEqgkXczWtM11sbq6KZGSL9ksQLnkkjmTeyc%2FIHJgnVbwr8oOABV0C6R6%2Bq0wf7DZchtUDKCQcLveQoHbKNRFi4Kok94zUeH1aHn265IoH50b0e5DZxitemRYxCHLeoD%2FMPPxwQDq%2F%2BuZw0bSKPXlYEyhSB0yI&X-Amz-Signature=02d946218a024e6f8e507483354f012ba9836a6628c24052dd6445ea2c052c07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSDZKECC%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFzuDDcvqh98zGRvKtVXOqmr8B0I0aPeWcPZ0nCPzXzwAiEAttbGMJKkRMLT5xO1RyeqVTd%2Byoj%2F%2BAuXVr5%2B0Au2YfYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKzhcdxJKx6y%2BpTN0yrcAyqPJSGRwxWI0%2BD7eIXKAX6In%2F02d6oxaVbNaayyQtridLMky3d%2BC3l%2Be8OHhFc5ccPPa8U8YSIiefkciBTbgDIM1mgkzN%2BIXRwq8Dgn7iZotPv%2BchIfTB7G7HAI54pqLotvl7U%2B0BNwgRSq4Xr9g%2BqyuuT6GIFZBFSNnifpBQVvWO0iuLpY76eN4QPUHHDkQk9khigTFK2UPy1nxUhJJCcLYT7PxJEb%2BJ55pA8Lz8XPMHbE0bUaob3nWE2mTuyz0L0%2B%2BaBgxA2NgJQTET2rwnLlt2X%2FkM4XoXxr%2Be7RGBlc9XxFx2yzMMVJIFZVtj3j1kVrG%2FTxprxEpK38%2FR%2Ff5FTR1%2FF06cxwPCV%2FJa2SbVkPevFkZUSfhgJvjSptmWWWpMgnGEwuKq%2Fv%2FvGE2BaizPV8idjEYCMVFT38bB6guaubcvg46tkM4%2B26RKh6v1cOR49af1np%2BdiDLetCG%2BqCGmC2HMMCv%2BT6KxDiLmeUjk%2B%2BZKTt3Z3qNeiLhTNeglDi3iSWtsUlB9TSMJhbRS%2Bk6%2FmbgCfvv6zGcmlz4onTKKB3jSmWuQktoxXdQRBxQQwuAV5M0Zgp149Hv3uPVzYdJerUCk0zinfY4DmAei34aNtQBH9jH0I9%2F7PPR2egMPi8rr4GOqUBJbUjEB584PgDFmcEWxpjdVl%2BEGyb4TiKX8qwSXP1EypHFsivwfO3JKfrptO5z%2F7VYxosdRasKvPI%2BQyN8PMub5Azy0Jr5jBuPyTUSZ%2B7eoGyRRR%2FI3Jfen%2FVnYUdBKO9VwUPyX%2FRBkNEommi%2BXKGmrx%2BL1YpejjFZEKW3KQt2MgDCkl8rpLwl313asvEOqJpq5i3w%2B0ZNqn4HKjho1%2B36P7d6xXm&X-Amz-Signature=034dc0ebe5efc2caf7a74d5b46e640219acd7f9e6ffcd37e3b6b696733971547&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSGYGSL%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T022142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIGFSUSdyi%2Bt6OlRPgO20kTO92VEmc7LAT4lxQmI%2FvTB2AiEAjqxCcuTFfty8IdjVB0JiYVRb88qOz1ruOtcjxCSP9Fkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHt%2BeMFRJEjUR8KccCrcA5KvRX5824MiQ1nlkMBzkooSZ2DZVW89%2F%2Fv%2BzBWo5EhA7VnWln00TTxjUtBoiKpoTxGviWeWbQ0EZYFDw1Y29CKgk8ZlzXMXYwfAqByhWghw3wEsv5eAm9TCaXmABGJQXC%2FxUtmSWxjHVV%2BHiCyCfErpoOCrrLPifHUPy9PKoBUqIYWUwpBoBMS%2BPlI3oh8NmRa2JS8B6Ix%2BT9IHPJfGWb735XwOAvimO7uGvk8EgaspWcAyLkXO0TT6A4ACrWPoOGKXFu3ErFmFk%2BFPsYQUjmCrqay0CF%2BJvqwb0PThky9LO2WdwkG8K%2FBGZLAZW2j2aqLJoEBJzFjwqCby9ACBeuZqt4duL0w9O8wAhDt8h6%2Bs4dMhI5feMU3z9p6atpQeRMWl4purnFHP9XYuvE78SmIegMPQJUL9debnA5VnRivyVcVu73uDJlEBIBcFMCh1qXn2yrdS%2BLkNBYQUxSBLMAHopUMb0pyTPNt2ikdjwKoY5g0nWgC8wIgwEiXQ50SbE7O9bFZco65XsZVkcyw6rm5X7k8CHQZuliesLbBRa8uyrqMr6HAqjn4tVYtkiCO1oCFUBvJVUjt16KRzsoumhMwKqdfzGeEHl%2BPdum6tpjibq%2FTxBIIdA9OmjJFXMKC9rr4GOqUBbkssK1QFG0YD9f7EFszRicVZLgKB3lp4NlF7YNa98Zou9mrTbLsNRADW0rXe4hDk4p7QcUEXc8YAsdo3qOvdA6w9M4yRzvoYnhiDsrpsAdF%2FB0Bfyhy8hFyflzwSTCle1KqvU3QtcIWFsVvGuzOmll4QehLQAFT%2FBlRWLRlJ4LE48DSG5btXJas3dq5jlMQD%2Fi6Nd4kCrnE5INRVISyIAPbMKPSr&X-Amz-Signature=d16a3f8fac3eae10e87d0655ab2eed544380c757b3be8fa34621e6af3dcc8b77&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
