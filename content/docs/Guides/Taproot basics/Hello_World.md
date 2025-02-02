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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OER4MHN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BdX8qbxbhrR5xpxzW61twiZ%2F%2BcL4RzUgZfBAWRYo%2BcAiEAwgnoytCKgpdEV340wyEb2xrxDfg2yZppmZRVr3EwEhcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfixtS4JBPqbVOsCCrcA3%2BH1f9Do3T7NQthM3I%2F0yL8NSqzXOqMIi2ZHL2bS0a4lCUpzNcbSiDmmRbXQS27z%2FtJuwJoa4wvUC9k3Y23Rn6tnbCUDW6CWeZXaZNuAeFCJsCngoMZqXCQr0ogPELNrPwezoV2WYpkkmLcCuMCZ%2Fl6Y2DqFXvJmcgWmwubkGmqkjSyVytAR3ymSIZrEqZZQklCZSlvU25lQxyXiZeqrgUDl2zfTjoT3sH%2FJ8lILG25s6YjoQGviWHI3xcSU3ZYU6nVuu%2BJkuvtNgR1BB1OKD9R2QddQuXayNg3QVlEWF1TKg%2FCLKdsR49ngoFaeFCztzooMvP60oJA7%2BSaCbPmT2Vo2fKt55q5HkEqHc8j%2B3ltnlAlOiILqrolUNjozMZQyjiHyzWyr%2BdCbhXO0S4TvROr1vONcOmMYJd%2FwXx5Uzn996yTINY17gOUx9PKK5kxmCLOjw0ciRlG39lYwL3d%2B2lJIm5rxDgcAO9ONBa3innrPD%2Byb83Uuxtw5nUAtnb58C%2BFtWyMcffA8zRwFPpanGheIqzPQaeV8zpSckavKTBetJiajKMW6tur%2Fg5uetW9ad%2B6mtx0H8dPpiJ9b8xd13EzIt0qVvGt1zPRr97KHY6%2BMfJySZ9l1JZKANLSMPLc%2FrwGOqUB2Yd3DW9bs%2BfgDTVoHMSOY5kgN56XYMuqC%2BpeM9z%2BiLNrTCd1zr0NDyZMc4miStbh9vlRF5oKeuKo3b%2BRPIFXk%2Fq2NkLhtD4tFJHkaHpXo62Qsr6T60DfTC2SsspeThVblhR9VVXk4IznxTb0iHzniiUDsXPJ4xsEwUMb46f8olgtKYPXXBc7i8aL5hFa9i%2FrgS4of80v%2Bg261aZ8vikKgRpny0Gr&X-Amz-Signature=a9b3aaedf23045e98aacfb5f9088f6938d113b87a4e99e7bb2eb563fd18e52e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OER4MHN%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BdX8qbxbhrR5xpxzW61twiZ%2F%2BcL4RzUgZfBAWRYo%2BcAiEAwgnoytCKgpdEV340wyEb2xrxDfg2yZppmZRVr3EwEhcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfixtS4JBPqbVOsCCrcA3%2BH1f9Do3T7NQthM3I%2F0yL8NSqzXOqMIi2ZHL2bS0a4lCUpzNcbSiDmmRbXQS27z%2FtJuwJoa4wvUC9k3Y23Rn6tnbCUDW6CWeZXaZNuAeFCJsCngoMZqXCQr0ogPELNrPwezoV2WYpkkmLcCuMCZ%2Fl6Y2DqFXvJmcgWmwubkGmqkjSyVytAR3ymSIZrEqZZQklCZSlvU25lQxyXiZeqrgUDl2zfTjoT3sH%2FJ8lILG25s6YjoQGviWHI3xcSU3ZYU6nVuu%2BJkuvtNgR1BB1OKD9R2QddQuXayNg3QVlEWF1TKg%2FCLKdsR49ngoFaeFCztzooMvP60oJA7%2BSaCbPmT2Vo2fKt55q5HkEqHc8j%2B3ltnlAlOiILqrolUNjozMZQyjiHyzWyr%2BdCbhXO0S4TvROr1vONcOmMYJd%2FwXx5Uzn996yTINY17gOUx9PKK5kxmCLOjw0ciRlG39lYwL3d%2B2lJIm5rxDgcAO9ONBa3innrPD%2Byb83Uuxtw5nUAtnb58C%2BFtWyMcffA8zRwFPpanGheIqzPQaeV8zpSckavKTBetJiajKMW6tur%2Fg5uetW9ad%2B6mtx0H8dPpiJ9b8xd13EzIt0qVvGt1zPRr97KHY6%2BMfJySZ9l1JZKANLSMPLc%2FrwGOqUB2Yd3DW9bs%2BfgDTVoHMSOY5kgN56XYMuqC%2BpeM9z%2BiLNrTCd1zr0NDyZMc4miStbh9vlRF5oKeuKo3b%2BRPIFXk%2Fq2NkLhtD4tFJHkaHpXo62Qsr6T60DfTC2SsspeThVblhR9VVXk4IznxTb0iHzniiUDsXPJ4xsEwUMb46f8olgtKYPXXBc7i8aL5hFa9i%2FrgS4of80v%2Bg261aZ8vikKgRpny0Gr&X-Amz-Signature=dee92432af7066b358acf9e101816644654ddd47b46ef5621c321d5f669d8e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
