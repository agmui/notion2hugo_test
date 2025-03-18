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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSZ3Z3D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWz%2BXG3Kx%2BHiUXGMdEq6S6RMjPCLTPcbszA%2B8pGZDuQIhAJxyOksKwVtzUzj37D9DpPvHErnsfdTKusB6RTChFRPwKv8DCFEQABoMNjM3NDIzMTgzODA1IgyRGdz%2Fd%2F0MEjX7PMMq3APtWhRKx3NnwvSB11Zf0HrJ0o6%2FzA3shrFiLiOa3YAs92oJbxhI6OI8i%2F5T%2FRTkGwpfSMK%2BwvOP8VNkCUR%2FJFemta%2FLKWwaZaW2wJx5qNXe53tqXJqfcm7htt7ghD8T0xxKLtpKkKO1yI%2BbaBOXj%2FoY%2FchnZNIKdClzIcEFNfvGCViTI4CtzUN%2BCH1Mw55z4%2FeKin5vF9NokbOJQIdexcblnCppTpajTpVuTOF%2FCLqYMUzHD88uFpFnarSc30JsU5wmQTWqTD6lG4qu0i8g90IT%2FgUKIJMvihdZciUZlx3jUKVs7SgQGaEj0s%2BcOkMCkDfDf%2FJIVGD3EirX1Itzes3IuDahgbYnASXgQSgHqzVMQWnXCGHmX6%2FY%2ByJN3%2B5uia4F6ZTQ%2FJHzqNIGyGGQ%2Fpa1GBz4vAMNg0IcdONjK0KiUruXM7jw3ftgRAriVz03XLly0COoMg61rVh3PpoYhAECYXkSi7aGSCH9ACc%2F%2Bis2paMY0wRmfy4dNbM0%2BW4nZwJmaITMOuT%2FXB1ZHaBRJsItHr1k%2FTwQelBYL6ZRu8zkAyta6Yyx6Nqjv6HMMUW9VTOjuQQ9TSdzq9Ql5J%2FWFeMuE1IUgK1bw0uw6zRuJcprPOHHSUeIPSVDUYD%2BzTCJ7eK%2BBjqkAVYavD%2FnijD0qaQusBO659atdrcplgNwsRYbs6qDb6uX9gHYLNV8HC%2Fv53hf29nkJSMETo%2BtYYWvjbRbbDmxORCSoezWi9UR7bJFFYfRpK7lvs8pZlgQJXOO4MFQI2VsFXV4v78AgX44mNj%2Bi3NKXtu%2BdJroFGD9Zu%2BTMEde2lT%2FHVEjxG%2Br86sddua8Qdtcu0KYvpA2v0%2F4aBbN4RyjzKIHlx3%2F&X-Amz-Signature=c17423578a6be7efb40094c13d989d5b2ca2e330b0cd3f167e4891b44a116565&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSZ3Z3D%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWz%2BXG3Kx%2BHiUXGMdEq6S6RMjPCLTPcbszA%2B8pGZDuQIhAJxyOksKwVtzUzj37D9DpPvHErnsfdTKusB6RTChFRPwKv8DCFEQABoMNjM3NDIzMTgzODA1IgyRGdz%2Fd%2F0MEjX7PMMq3APtWhRKx3NnwvSB11Zf0HrJ0o6%2FzA3shrFiLiOa3YAs92oJbxhI6OI8i%2F5T%2FRTkGwpfSMK%2BwvOP8VNkCUR%2FJFemta%2FLKWwaZaW2wJx5qNXe53tqXJqfcm7htt7ghD8T0xxKLtpKkKO1yI%2BbaBOXj%2FoY%2FchnZNIKdClzIcEFNfvGCViTI4CtzUN%2BCH1Mw55z4%2FeKin5vF9NokbOJQIdexcblnCppTpajTpVuTOF%2FCLqYMUzHD88uFpFnarSc30JsU5wmQTWqTD6lG4qu0i8g90IT%2FgUKIJMvihdZciUZlx3jUKVs7SgQGaEj0s%2BcOkMCkDfDf%2FJIVGD3EirX1Itzes3IuDahgbYnASXgQSgHqzVMQWnXCGHmX6%2FY%2ByJN3%2B5uia4F6ZTQ%2FJHzqNIGyGGQ%2Fpa1GBz4vAMNg0IcdONjK0KiUruXM7jw3ftgRAriVz03XLly0COoMg61rVh3PpoYhAECYXkSi7aGSCH9ACc%2F%2Bis2paMY0wRmfy4dNbM0%2BW4nZwJmaITMOuT%2FXB1ZHaBRJsItHr1k%2FTwQelBYL6ZRu8zkAyta6Yyx6Nqjv6HMMUW9VTOjuQQ9TSdzq9Ql5J%2FWFeMuE1IUgK1bw0uw6zRuJcprPOHHSUeIPSVDUYD%2BzTCJ7eK%2BBjqkAVYavD%2FnijD0qaQusBO659atdrcplgNwsRYbs6qDb6uX9gHYLNV8HC%2Fv53hf29nkJSMETo%2BtYYWvjbRbbDmxORCSoezWi9UR7bJFFYfRpK7lvs8pZlgQJXOO4MFQI2VsFXV4v78AgX44mNj%2Bi3NKXtu%2BdJroFGD9Zu%2BTMEde2lT%2FHVEjxG%2Br86sddua8Qdtcu0KYvpA2v0%2F4aBbN4RyjzKIHlx3%2F&X-Amz-Signature=937ba0e5c41720633ddd428c78c52329dacca8a339ea9634c54ca679fbc3c650&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
