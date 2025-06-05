---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4I6SKL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH8Dov65BGc1tUOFheAP2Liw1oTA%2FMMU%2BwbOvV%2BY9PP%2FAiEA0JKEaqIumk9thp8ZYi%2F3Mlh3cKXKypnZwYvmVTymIK0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDw%2FY%2FJ4fFi81%2FoYZSrcA691f1jRbjC55l5QBWMhTsAQiNPpRxfSKLytPYbd%2Fto4vhmOk3otdZtpuhIpK2o40kYsZW2m2cyV5uhLCg3%2FiVzwi3pP4T5jKI6upYHf2fu9djZvtWmc6oFFWwJOoXXCaFhkhsU69ZTExbgEAvTCggcYe42Y%2BL%2B8YHiHZwhrvxQIbAyV4I7PlzLFkcc52uXljcfwLTqIvOZzJWYRQr%2BrfTBpW67x58WTHEdp7PhMgTBqc%2B7HXE9FSJpbBh2zM7CunleEM1u3Xnu%2B1O2GHfxQOPuERHdYQP2n55OPubckzG5rTnE9x8vUDMhNF4Ep9sYEzyHv7yXPdZjNXONIPQ2WnN%2Blr3h4Y7r2tXoIjjaMaO%2By5qMDk0hDJX3PxJXaAt%2BfEC8puTJu2oadPMsEacp%2F4EiJzZhDgzqWyWMgTfbm4SEvThSv3692bhw7dPfAOnNyF8qzfaiZ93mjc7rB3GNfxAe3AwY%2BL96J%2BYDHCCzGMZBy5VxFEj3RK3kGVyZdLRY8Ra8GfYfAynv0Rp%2BRPhkH0nu6ggVXnQzzFGb2RJKoWQC9W%2FXIc44UdQ9WdZ5ROc6Il5h29zB2IHbcxi73xrQPVyb9tu0FSkOwmZ07NQxx5ClhFDYcWFZGUhn%2F9c%2FfMKLlhMIGOqUB9Xk9v5rt9RBAbSiW6YISN8RrUh51xxxtkBeWeOAjGVV2aQCVM6bYakvjpQLq7MTeH43sleo8TXwO0%2FF67nH4pd4nQCC6VgpOs7OXxEeJ4Rzu7%2BRyrgJEouj%2F9v4CTKdhcqzZIiLdPQCJ7uZfipA0RS%2F%2B4S9%2F7o8gQ0D6wHiVaF6t4Xm2n1%2BNq68qpj98oU%2B6%2FL9CG6bQmCiYPRMtu8nMMzMpbh2M&X-Amz-Signature=cbc838d05d46dd0b3727164caf37539394a9539f5f1337fe6674b2a8eb923f36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ4I6SKL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIH8Dov65BGc1tUOFheAP2Liw1oTA%2FMMU%2BwbOvV%2BY9PP%2FAiEA0JKEaqIumk9thp8ZYi%2F3Mlh3cKXKypnZwYvmVTymIK0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDw%2FY%2FJ4fFi81%2FoYZSrcA691f1jRbjC55l5QBWMhTsAQiNPpRxfSKLytPYbd%2Fto4vhmOk3otdZtpuhIpK2o40kYsZW2m2cyV5uhLCg3%2FiVzwi3pP4T5jKI6upYHf2fu9djZvtWmc6oFFWwJOoXXCaFhkhsU69ZTExbgEAvTCggcYe42Y%2BL%2B8YHiHZwhrvxQIbAyV4I7PlzLFkcc52uXljcfwLTqIvOZzJWYRQr%2BrfTBpW67x58WTHEdp7PhMgTBqc%2B7HXE9FSJpbBh2zM7CunleEM1u3Xnu%2B1O2GHfxQOPuERHdYQP2n55OPubckzG5rTnE9x8vUDMhNF4Ep9sYEzyHv7yXPdZjNXONIPQ2WnN%2Blr3h4Y7r2tXoIjjaMaO%2By5qMDk0hDJX3PxJXaAt%2BfEC8puTJu2oadPMsEacp%2F4EiJzZhDgzqWyWMgTfbm4SEvThSv3692bhw7dPfAOnNyF8qzfaiZ93mjc7rB3GNfxAe3AwY%2BL96J%2BYDHCCzGMZBy5VxFEj3RK3kGVyZdLRY8Ra8GfYfAynv0Rp%2BRPhkH0nu6ggVXnQzzFGb2RJKoWQC9W%2FXIc44UdQ9WdZ5ROc6Il5h29zB2IHbcxi73xrQPVyb9tu0FSkOwmZ07NQxx5ClhFDYcWFZGUhn%2F9c%2FfMKLlhMIGOqUB9Xk9v5rt9RBAbSiW6YISN8RrUh51xxxtkBeWeOAjGVV2aQCVM6bYakvjpQLq7MTeH43sleo8TXwO0%2FF67nH4pd4nQCC6VgpOs7OXxEeJ4Rzu7%2BRyrgJEouj%2F9v4CTKdhcqzZIiLdPQCJ7uZfipA0RS%2F%2B4S9%2F7o8gQ0D6wHiVaF6t4Xm2n1%2BNq68qpj98oU%2B6%2FL9CG6bQmCiYPRMtu8nMMzMpbh2M&X-Amz-Signature=2d8a86fd8d2e5f259b87e961c76205568c8d7291b968f6797cdcb05747bd18a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
