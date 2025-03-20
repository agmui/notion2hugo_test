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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQ23FNY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICJW8WKN7jhWQd9GBSosZHGQ2it4o7AzYjpjyvCgCma7AiBmloX3cSnu6MXb8q1rLwt8nqqsTriwdfDSm7fUll54uiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJ%2FPZAjxQBI4VVLEKtwDe8aE0aERUQROzNm4ljPYcbvdTVopJz92pepIprTEE%2FbpY%2BwEOtmY5IuY4D1Vv1VnTJPXu5SBMQSozy5PvJR2qMOvM%2BPbG6vnFohIXGATklP56k4wJM7jaUyl6UQ5arzu9QMcm99JhJDnvQmrjX%2B5YfUGj%2BzHpVXXKKS1blyjIr5DPfV2ekGsrhAOxhV30eSKIicbOdVWsG9Gh3EouqaR5cVpd%2FPJv1fgPrKZTHnEu5VOCg7VBYAJcRXakr9W2I8Jp3fb4IGeUa7Ur%2FbZV3LupjD%2BazhEGwoLxGonp9yOQ9vTtAZUebLrIgLa%2FxgFPSaw8PmG4ZjuqCd6kw0CMm6y4pIWTQqnGrJ8BGHoPoXXM1F3NJRRa0I3GQ0GRUD3LnQ8W2IiX8RvT5juJEeomPHIEbG55jGcr0yLCrrVS9y1WEPfUWLE2kKZNVIMabF5YVbLPQ7SPzgGih05ZD%2BQkQqJzAP9qfrdyOYKKeN9AXwaChj8WCn3TbGlG%2BCi55%2FQGafr9Zwx5dGre70hHX8Ze6m9xWEsnTUOS9AzB77foQnrLZEMTY2iEVYzLIgExB%2BlCzd35sZyxVO%2B8xM9kGz46xQ3%2BP1y2Q8pPu8ttX0D1gc3qAn4o66I8wKvziXkUNkw96buvgY6pgHSsRw41QcWgs15zRJ%2BQJS2vXy22RXXuoCqiwaDXbFsvRmGFuGbAv6CNJlPYK6jv8f1wfKJmFST0m5Bjas%2Bn6MNwjIKPfU9QdL8F2TSS0AfOOFcghv6vuFV6%2Fkezedq7ywXWdwbqAHi4njx3jFjG%2BNcynBjaFmWJGEeJs9LUs%2Blr1ylS4YfyE2p8bWBKeuuKjzm6frEl%2B5WXPiZBfRYhLcnEK6h35Na&X-Amz-Signature=ee37eb97e98d5e950f8724905290b862ad0a5c33a17bf14c4a0939208cb25179&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQ23FNY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICJW8WKN7jhWQd9GBSosZHGQ2it4o7AzYjpjyvCgCma7AiBmloX3cSnu6MXb8q1rLwt8nqqsTriwdfDSm7fUll54uiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJ%2FPZAjxQBI4VVLEKtwDe8aE0aERUQROzNm4ljPYcbvdTVopJz92pepIprTEE%2FbpY%2BwEOtmY5IuY4D1Vv1VnTJPXu5SBMQSozy5PvJR2qMOvM%2BPbG6vnFohIXGATklP56k4wJM7jaUyl6UQ5arzu9QMcm99JhJDnvQmrjX%2B5YfUGj%2BzHpVXXKKS1blyjIr5DPfV2ekGsrhAOxhV30eSKIicbOdVWsG9Gh3EouqaR5cVpd%2FPJv1fgPrKZTHnEu5VOCg7VBYAJcRXakr9W2I8Jp3fb4IGeUa7Ur%2FbZV3LupjD%2BazhEGwoLxGonp9yOQ9vTtAZUebLrIgLa%2FxgFPSaw8PmG4ZjuqCd6kw0CMm6y4pIWTQqnGrJ8BGHoPoXXM1F3NJRRa0I3GQ0GRUD3LnQ8W2IiX8RvT5juJEeomPHIEbG55jGcr0yLCrrVS9y1WEPfUWLE2kKZNVIMabF5YVbLPQ7SPzgGih05ZD%2BQkQqJzAP9qfrdyOYKKeN9AXwaChj8WCn3TbGlG%2BCi55%2FQGafr9Zwx5dGre70hHX8Ze6m9xWEsnTUOS9AzB77foQnrLZEMTY2iEVYzLIgExB%2BlCzd35sZyxVO%2B8xM9kGz46xQ3%2BP1y2Q8pPu8ttX0D1gc3qAn4o66I8wKvziXkUNkw96buvgY6pgHSsRw41QcWgs15zRJ%2BQJS2vXy22RXXuoCqiwaDXbFsvRmGFuGbAv6CNJlPYK6jv8f1wfKJmFST0m5Bjas%2Bn6MNwjIKPfU9QdL8F2TSS0AfOOFcghv6vuFV6%2Fkezedq7ywXWdwbqAHi4njx3jFjG%2BNcynBjaFmWJGEeJs9LUs%2Blr1ylS4YfyE2p8bWBKeuuKjzm6frEl%2B5WXPiZBfRYhLcnEK6h35Na&X-Amz-Signature=76dc2a2dafcfdc48a0cbc7a292e2affedd009d1c7fcf2297b025fce4467a26d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5JACD5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCoUXFWJhIl0R4Rq4ceKa8ObEE3buvHXjmeHiInBWMTqwIgT0QcSC6DhsZQSKwxKz0bLI%2FHLFif4pTkg9q%2FfGmRfnYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvC7Wbj4ClPi617CircA7QxSJDtrwfEh%2Ftx55ZV5N9y6jVoE2%2FROZRnZ%2FmZW8Vo1o%2BUuSZELuyXdgSLvo4TQPZUtCWCPESmwNaQYL0l0zut5PDhPLJzm6dkW%2FaAuGb2d%2FBkexeP8IBCZs0WdUWblYH8ChaIdJl1GZJuXgKALs1TF9sdRN9LcctUyTo8AIm0qt3uvBU2biB%2FqntYKpk8d3uYyze9%2BDeNgTXmElTB08B3aEtywQ1WHS%2BGPkzceNSyKUuAS9n6PymcZbsTZwHNIrEiNmAYGdSIpf3PfoOvORfkWPkWcof83QPj79umTx6FqFQUN3dpTGY1JyYrhYHU2FKjdLXwYt2roWCJt9rnQJ4CAYix2e9QgpNKsJKK9BAi39laBHAT1xIKHBDWDD%2Ba7FHV91PlqfpGWfxMH6j1MXFTUKDu7S1O8C0ZwwLG7Cg%2Bo5veJNxCj1jZejrxjSWfAfYAB6uOXZyoAhFDYmAT7FOgEUvN%2BLMxyMgdQ7onaPPwLb5e8vVTZfkSk0EmNmROnTUsNHxtYNhGOAv%2B%2BybEtDyb8o444sqTWv7JDeeVUuVVfJ3kOUk61JRE3yge1P6wQbzvfGlBmwGZlOtFqRBgWlmHTgSy1X90YzjWc4%2FrvJoYhbZ%2BJgVZ5YnF7%2FUdMNCn7r4GOqUBAHCQNqApI%2FBbzAJn5LDok7yXdeAQJb3d6J61dNbo0hxK4TEIVa5t93lki1FLaYLrYRarq4N5FwHlufYtjI9BX3qbSUzp%2BEMnIgz1mVjuhkEt1Ep1IyrPEYsHKT3K5jVCVEEFABmkGWm274oRwTNCXy2WnBY9KWWjlaVR6JLufAUOUZ6%2B7%2BLwl9fJWU3335RraE3rUcaWwbRXvkxaKBvpLgK1WY00&X-Amz-Signature=e1d10ae454833f8c55582186742af1c095deb7caf955671a9a14e84071b6a24e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJXDG25%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCKOoze7JYCdG0u8NhjsJNpbR%2BtvTVqCDCHpP2IEjpCawIgV7SpUYS0e43VrUvVExpPlD%2F6HBGIAkGLaJnuJFo%2F4rwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpw1UysqdRCSzSZAircA8J1SVFKLq7JjcRhkFC1ztRsQfTiOuZsdw6eesU1CwW62wSpyv1npTK6I8UtpnQPPc0dhQxRATAaBi%2BSEECbTudStthA%2Bea7ZO%2BIQnCUGJNmZEnOfPozdfEEMboUtAX99ZLP0XNwhRSiq1O9i3aingzc%2BO2TJVzVLhQ5XB4qlRlAhTWcmutyBUMYbzUp%2Bbvrpuwjiep676ZQIVVDpUYx5iD%2Fnvb7MZGl3nKmPPea7SgXpZzLZmLPW4SLSrE9%2BEAJ2DxjYXi5rmyOLSdoHhV8g4PVLjdliqI0IA3%2FWiAOGonQplnekcEGI63FOd3uwWU2gjz9NaOHPsUxXMLYtXVm6RL3%2BfXxKY6PhyzsonPJqCcXhCt5XsTGNjHGULLrJYJfRe%2FpLMAC5FnSpDrAYHUl7x1CsfJPf5MGM6FuD0rrUAuSkzQphkRZWDKX5Vs5GCVsiU%2BgKLsSCmhPcLrlF2%2FkuUFJvhv4iaUtyo7phk25dYRo6f3jbsgu543o45CEI%2FGCL%2BANIVU1FePPgzPLOWV23Tuua%2FH9Ibmjx%2BkyHHwo7aPvKDGci6hrabrQEteHpOULlCXof2%2FhT6tS5QW7fdeTap6aHWk2OkhYB2M%2FyZNj9qWGM2ZY41uqnwtg%2FKj%2FMMum7r4GOqUBqz0EXVrBAZgoh70AjJPf3DM15jmFqxCyRcyu7gAGfvHO%2Fi60Qnr%2Fsq9Dt8e7%2BIn9az2CUW1oZeQbox2crMN0YeSh5lY9tBwJ6Iqe9kmIVZKFET9KyKHCVpiqa97GMpLASZkzqWwQ%2B8QpqwbCIR0dQFv%2FYZJkYsWJ0TjzcEX69jIOvUPjf2norQZfEIpoYPHnyo1OBCcHZ%2F7mpAqci0RbI%2BMDTEHj&X-Amz-Signature=cebdd79001d19987d34f1cdaa330952265f560db58fc3101009d3c9c22075070&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQ23FNY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICJW8WKN7jhWQd9GBSosZHGQ2it4o7AzYjpjyvCgCma7AiBmloX3cSnu6MXb8q1rLwt8nqqsTriwdfDSm7fUll54uiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAJ%2FPZAjxQBI4VVLEKtwDe8aE0aERUQROzNm4ljPYcbvdTVopJz92pepIprTEE%2FbpY%2BwEOtmY5IuY4D1Vv1VnTJPXu5SBMQSozy5PvJR2qMOvM%2BPbG6vnFohIXGATklP56k4wJM7jaUyl6UQ5arzu9QMcm99JhJDnvQmrjX%2B5YfUGj%2BzHpVXXKKS1blyjIr5DPfV2ekGsrhAOxhV30eSKIicbOdVWsG9Gh3EouqaR5cVpd%2FPJv1fgPrKZTHnEu5VOCg7VBYAJcRXakr9W2I8Jp3fb4IGeUa7Ur%2FbZV3LupjD%2BazhEGwoLxGonp9yOQ9vTtAZUebLrIgLa%2FxgFPSaw8PmG4ZjuqCd6kw0CMm6y4pIWTQqnGrJ8BGHoPoXXM1F3NJRRa0I3GQ0GRUD3LnQ8W2IiX8RvT5juJEeomPHIEbG55jGcr0yLCrrVS9y1WEPfUWLE2kKZNVIMabF5YVbLPQ7SPzgGih05ZD%2BQkQqJzAP9qfrdyOYKKeN9AXwaChj8WCn3TbGlG%2BCi55%2FQGafr9Zwx5dGre70hHX8Ze6m9xWEsnTUOS9AzB77foQnrLZEMTY2iEVYzLIgExB%2BlCzd35sZyxVO%2B8xM9kGz46xQ3%2BP1y2Q8pPu8ttX0D1gc3qAn4o66I8wKvziXkUNkw96buvgY6pgHSsRw41QcWgs15zRJ%2BQJS2vXy22RXXuoCqiwaDXbFsvRmGFuGbAv6CNJlPYK6jv8f1wfKJmFST0m5Bjas%2Bn6MNwjIKPfU9QdL8F2TSS0AfOOFcghv6vuFV6%2Fkezedq7ywXWdwbqAHi4njx3jFjG%2BNcynBjaFmWJGEeJs9LUs%2Blr1ylS4YfyE2p8bWBKeuuKjzm6frEl%2B5WXPiZBfRYhLcnEK6h35Na&X-Amz-Signature=450e72253f8ecdcabe6fec2ff96464de0a79ceba0e1991b7e4bca2b0cf820fff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
