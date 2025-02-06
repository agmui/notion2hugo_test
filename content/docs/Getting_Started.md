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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NIDSIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC7QB4z0Cs%2FR7wVcj8RkHxPX5K8IKZJkHGKdL1PzkMhQIhAOK7ojg3OM3njT30mCgc3ClUXgNKLCyclFREIUezNEqMKv8DCFoQABoMNjM3NDIzMTgzODA1Igy3f8ilOeGRA0%2BwXcwq3ANblDBaraYXSxDJcNB0ZAMJtGU8G3kTsAxn8OKM%2FszOdhBUi2V3t%2FT49dzpY73eYGB9eDxSJ7Z1lFViqXj%2B%2FlXVBPpdPDilgikOLa%2BxMbtX7GwEEQolJcHP0zMYVty8%2BSE%2BYQzl3ZJ1t%2BntgSGYoqPJOzAst9YCyofD7vZfC9MczkaA%2BPnm2rb30TGMovMeI%2Flt1PG528ZE%2FAVeVYciU3WZmrHct3p2cIFvaWWjGZCpmCKQtrOQisUw%2B5TTejXFrBNYMOYonxpCQv6c1hrml8WFbkISASArXPJa%2Bdzj9FOFhc2bhyWJLIUcQGQd0UXZ08idclkl5j62tSzvaJNo%2BOmlgthX8fCF4K1vuKlGhPvKiYkDLnS5bBayPniYzrpgDpYljWmN9IWU9fBhpO0zcxgkAiCcQEo7SK5J2mjAcZZkDDWQY%2BU071cuycJ3KqmqlRir16CpCGQ44Z6di6S%2BzHSeiDahIAGhXOsXZ%2FJN%2BEFoH9r6eBcIKQMr9KBDhrucEFWoX15RVQyHLr3xjqJrYnlswDnYjnsoKlbJbjgf%2FVVxXITyg5wkN17rXd47grkMgbL6n9GF1OHhgDRvJ7Dfc989fT%2FkjDj%2BaP0TWsKVtJaY4kwISPX7HX6SIglVzTCV7ZG9BjqkAXIaaygVDh7nu067GM%2BevzlHTI2wz3OBsTXkBdmEYyoM9f5H%2B3h0Ucr6ZXcYhgzalYZvQAxcOygIvP2aoDpAMjuGXn%2FOxga0Vh7NUl8s9G%2FxFrOqPlec57DMjKSdOeZvv6JnIVWdGBE5hP1CyGj7xMRsCrZmRfFDyaDXPQBmRB9KdrSc6n8KjedqeVy0%2Bxaqjcho5mThxB3L4zMrQ9Eq4WM%2F68Xw&X-Amz-Signature=5d3ae8c96db77a325bf4233b703313d5d916f6e850d344511793483144ebfb0b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NIDSIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC7QB4z0Cs%2FR7wVcj8RkHxPX5K8IKZJkHGKdL1PzkMhQIhAOK7ojg3OM3njT30mCgc3ClUXgNKLCyclFREIUezNEqMKv8DCFoQABoMNjM3NDIzMTgzODA1Igy3f8ilOeGRA0%2BwXcwq3ANblDBaraYXSxDJcNB0ZAMJtGU8G3kTsAxn8OKM%2FszOdhBUi2V3t%2FT49dzpY73eYGB9eDxSJ7Z1lFViqXj%2B%2FlXVBPpdPDilgikOLa%2BxMbtX7GwEEQolJcHP0zMYVty8%2BSE%2BYQzl3ZJ1t%2BntgSGYoqPJOzAst9YCyofD7vZfC9MczkaA%2BPnm2rb30TGMovMeI%2Flt1PG528ZE%2FAVeVYciU3WZmrHct3p2cIFvaWWjGZCpmCKQtrOQisUw%2B5TTejXFrBNYMOYonxpCQv6c1hrml8WFbkISASArXPJa%2Bdzj9FOFhc2bhyWJLIUcQGQd0UXZ08idclkl5j62tSzvaJNo%2BOmlgthX8fCF4K1vuKlGhPvKiYkDLnS5bBayPniYzrpgDpYljWmN9IWU9fBhpO0zcxgkAiCcQEo7SK5J2mjAcZZkDDWQY%2BU071cuycJ3KqmqlRir16CpCGQ44Z6di6S%2BzHSeiDahIAGhXOsXZ%2FJN%2BEFoH9r6eBcIKQMr9KBDhrucEFWoX15RVQyHLr3xjqJrYnlswDnYjnsoKlbJbjgf%2FVVxXITyg5wkN17rXd47grkMgbL6n9GF1OHhgDRvJ7Dfc989fT%2FkjDj%2BaP0TWsKVtJaY4kwISPX7HX6SIglVzTCV7ZG9BjqkAXIaaygVDh7nu067GM%2BevzlHTI2wz3OBsTXkBdmEYyoM9f5H%2B3h0Ucr6ZXcYhgzalYZvQAxcOygIvP2aoDpAMjuGXn%2FOxga0Vh7NUl8s9G%2FxFrOqPlec57DMjKSdOeZvv6JnIVWdGBE5hP1CyGj7xMRsCrZmRfFDyaDXPQBmRB9KdrSc6n8KjedqeVy0%2Bxaqjcho5mThxB3L4zMrQ9Eq4WM%2F68Xw&X-Amz-Signature=0a05ef81f720478f4708e59d1cd0f26e66a30f0e8ccabe7b1c836a02b00a5278&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3GWZGZA%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIGo9UnXzTTXBaGalMyHW2B%2BB9r8%2F%2FN3S0HmvROfvD%2BnKAiAXIypWCkoyKpfSErmQzFvCO26ywuCKWUr1V8eK5cDeeSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMjLcpwRIVe0BO%2BkiSKtwDAuqtgN8U%2FJEaWZtMjkIyqBtCj9T91x1lH%2B1JUvEWYYy%2BK9MpsFkw1BIEs78y%2BqQf9LfhianAVfk1ULqHfWdMwCGlWzBBQk0P6hx%2BnwrxSJ%2FZghB6xmLCA6uWTHL%2B2l4pkqWmHHkuCoSpzD5S7s73YCKWOwe51YcIRuqAqzzKD9uRvsw96yput0H4OIzL9%2BwuGCiw%2FCjEhNndWX7APzGg%2BaUlTwtUVe1RhtRGW%2FjQOX8%2FxVhzyUEtYs7lc3fTIODEaZtx6XRu0Zu22%2BkCxX15Ua639c3IYpiDV6XlhdVriA3CizwGJzix5RM4KPliqspTYAx5OlLE8YDOcQBvaldXjDX4W5LvHvnbMVodeN1GNBGe2vrtWUXvhs%2FMy3HJ%2FsCQtec8ahlW1L9i%2Bna%2B8VqASnup2FLYlBU5zzh89iTQkDEfxKGfTfwUBSx40%2Bn9cmzcZaRlmcWoVXnXdcWik3ACXHsnKHMlmlDUkZNoO0WRG3T2JgxQ%2BbRxDWLheLF5y%2FgeH6DNYmppIT%2BKaGK0h%2Fsr2NkuoUH0BeIdkpHmMPazqADSVLNpa%2FyBrHRB5%2Bz6xVhTWhEJ02AozXq1hiWMBYixX5BP2%2FbmISyr16LLoxqL1y3Th39vUfB4dcoPMhYw2O2RvQY6pgEyLatIpO%2BV6PLMc0OfdEr3f9fZETxhGHpskEJdYUNLQ%2B7569PCCBRFtctIQ7xzM0F1BbLTC%2Ff5mjSk8%2Bbln8B3K4UQ9Ky3vGx6kDRbWaY0E2dnCw5QowZ5cGrAPdGr4mlP%2BXayaUfumk1HUXwaXd99T9u1RCdfbrC7f1sL3OtADG9mRwLgI7Tw9AXQTz3VVT6LcO05u8hLdbFZ8WjxIpG2qJ57TW6B&X-Amz-Signature=1766cb7146f1992ce7aa3142001492ecfa56674593b85ac4c30fe92174199832&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GOYA7Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCICDsT4UOZpPoCwE8gRCjS6Iu9%2B7Q%2F3%2FwZynaxGRA9o30AiB6gDIBIJkRBsh%2FcFZ4%2FBi%2FqgiU0wb5GjoDqYLt3n3%2F2Sr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMfck8FlGwB29mSMx4KtwDe7ndPYjozHIAUf%2F9VMUh7tA2iu3jiE7hf4q6vv84J55FlbdtcBULtWaGg2rM%2Bjrd%2BAx3GbKkhfkJjbj2fD1wa%2BsYX8BtuVsFRGTR1e2bsjTNGa3Fz6MgpK0ywP3t3JzwW2qN6ex5kyLsitxkhsGnz8Jc5EeFBMazZrXI96rCtkm3b7yKhavZAvSzxeuOWRKOOFwL%2Ft1bF7MkHEuuArorLKRW036qVBvo2ye8lrOqwWim5BmagrdCuXJpSFrWk9u4hVwtwRqGRBsB7PrS%2BX%2FBrQJ9P%2BF7UP9RmVZQcVj9wcIZEhvoZPAbKFz1USqnC%2Fu2Gmme1VRHXSOTw6ASoH9O6iOYI1RpzLJKaZ18QeSq%2B%2BfO2Z%2FH1dLHzUuqYtKJW1hy3CJR3n90u5GoqWgGRxAlTusUCxGDn9gjEGPYjgTKL%2FT5waKQGrDAKbdcKiBLnznBKEszPoGpjq8rxvqOP37wy%2F5yXIL8kAEpKH2YgUo48h6%2FJg6L%2BdBZevwzgn9YYqZoupCqovnmqiD%2FgmYbXYT20gZw44Oea1Qc%2FIvBJ9Wle4glTCqsfTYAtlMC0NtPzHe6bh53AzbwOcldK2WWyPTzMCZ11qs0MQGtDD5%2FMYx5D9DllmXI8S88ThL2nj0wsO2RvQY6pgHUPfnZ1QI7%2Fv7%2F0UP%2Bi%2F2LiXhSi27u25ZxKW%2F%2BJbS%2FNWwFPiETKMVCKEUx5FPFBsxK%2FzvwdJ5WdlTQoHCwldeR6AAKp%2BnYFAjXOTpfZ0mO%2BNl6qu3siQ23HRL0DXISLCxJ%2FTL5DgN7MekgV%2BV83dri0M%2BJz2VifkXikgvsPj6BDjHOyDNVBu5qN68i4jyU%2B1APKsvhsfw4TaKUAUfyaaRTHNTTXNBz&X-Amz-Signature=c53245146c8856bae89312bafa235c6392788e52ff14463441280925668b7a24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NIDSIH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDC7QB4z0Cs%2FR7wVcj8RkHxPX5K8IKZJkHGKdL1PzkMhQIhAOK7ojg3OM3njT30mCgc3ClUXgNKLCyclFREIUezNEqMKv8DCFoQABoMNjM3NDIzMTgzODA1Igy3f8ilOeGRA0%2BwXcwq3ANblDBaraYXSxDJcNB0ZAMJtGU8G3kTsAxn8OKM%2FszOdhBUi2V3t%2FT49dzpY73eYGB9eDxSJ7Z1lFViqXj%2B%2FlXVBPpdPDilgikOLa%2BxMbtX7GwEEQolJcHP0zMYVty8%2BSE%2BYQzl3ZJ1t%2BntgSGYoqPJOzAst9YCyofD7vZfC9MczkaA%2BPnm2rb30TGMovMeI%2Flt1PG528ZE%2FAVeVYciU3WZmrHct3p2cIFvaWWjGZCpmCKQtrOQisUw%2B5TTejXFrBNYMOYonxpCQv6c1hrml8WFbkISASArXPJa%2Bdzj9FOFhc2bhyWJLIUcQGQd0UXZ08idclkl5j62tSzvaJNo%2BOmlgthX8fCF4K1vuKlGhPvKiYkDLnS5bBayPniYzrpgDpYljWmN9IWU9fBhpO0zcxgkAiCcQEo7SK5J2mjAcZZkDDWQY%2BU071cuycJ3KqmqlRir16CpCGQ44Z6di6S%2BzHSeiDahIAGhXOsXZ%2FJN%2BEFoH9r6eBcIKQMr9KBDhrucEFWoX15RVQyHLr3xjqJrYnlswDnYjnsoKlbJbjgf%2FVVxXITyg5wkN17rXd47grkMgbL6n9GF1OHhgDRvJ7Dfc989fT%2FkjDj%2BaP0TWsKVtJaY4kwISPX7HX6SIglVzTCV7ZG9BjqkAXIaaygVDh7nu067GM%2BevzlHTI2wz3OBsTXkBdmEYyoM9f5H%2B3h0Ucr6ZXcYhgzalYZvQAxcOygIvP2aoDpAMjuGXn%2FOxga0Vh7NUl8s9G%2FxFrOqPlec57DMjKSdOeZvv6JnIVWdGBE5hP1CyGj7xMRsCrZmRfFDyaDXPQBmRB9KdrSc6n8KjedqeVy0%2Bxaqjcho5mThxB3L4zMrQ9Eq4WM%2F68Xw&X-Amz-Signature=1383417c4f7d022b70d83d03be5d0104c98002f2f7abd8de2c6b9746fd04643e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
