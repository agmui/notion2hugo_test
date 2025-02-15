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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAYWPCL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBDQiX6ZJX9SWMMcVEsJZO%2BAbo%2B0PvHqmNnFz6BdCrzmAiATU5DlJSN4xWLOSZoX%2FzHF47AAExHfUmBl3r8WlZWuySr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsTuJEpbU8h%2FxsLKHKtwDrvYTcSw7Ys0XkvNHO0qaLcI8m1%2F9z7sp6YsevBxccfz%2F5jfjuc7wXMTfYU8gVhNbrnenrs24y9C3fLsAR3E4PheJKZgb1qdiMbM4Yvw5SctE%2F5mBye0YoaERPVA6WpN570BMyZMPSBGmifQQItDUGYvexDHy0GLe5USfBfQFGMmf5wU56dGMuxW8LHelpYqL6CgGUJMhxZxiFRaQ3boEkrlsoi83tiOWoSINZCxsElgAQuo%2FYbJNGzvSXUCkEw4%2BjmU%2FmTqv7%2Fy3iOMLutOLv%2BZnVGbM6%2B6ElF1tUEMzEGWSQPDt6CKay0uDM8BSFtdPhYZP449xEn2sKuuC9gRr6CqWm7FOyL5eBMnvTE9PrfxaKu08ZGobMYBqTSYs0vda88IjIBVi7wSS%2FJruEkdtuXsO4DvA0%2FYgQSSD2YcLr5%2FdTGrVCTlGdpCvzi2fhbuf0kg7ssB4eMA%2FshDQxjE4UNYe%2Bncz06l9tR0K0UC%2B9mV9ozXaKRpIEinAERthOx2i7EVMvFhMgBjGL4sZ1aOPs5XU%2BIFYryA1huDLLylkXPL%2FMg%2FBHMM4EGIL3%2FWU9RA3W20E73c0XgKeOt4IuHcQn76DZufk7IoKTB3yfsYxI2lrhwLZSL2qnBHzthAwq67EvQY6pgGhdS2XOmaBw1wjfniE90Sl63NDdx3lN4Ka%2BzNoLtSuwrt8AcWqd4ZOTKDh48vJW%2BsLsJIb%2BolPHIp2BpBapowCRSlXw6aWcMAffiQ%2BonVWgl0GiDMPMD0867f68JaSSNpCL9C28qj5WnxEv31B8rRepXNpx843gw%2BPS%2BoSroZKhlt%2FIic67Em%2B0oFZkKQ3q9FqRqZb84IAjP%2FJ8a5k8AU6SmyP8M2S&X-Amz-Signature=c42e47b6921ff846ebd65a8185cd752cc29b47d9d6f61be4aa61ee769ced1754&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAYWPCL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T230320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBDQiX6ZJX9SWMMcVEsJZO%2BAbo%2B0PvHqmNnFz6BdCrzmAiATU5DlJSN4xWLOSZoX%2FzHF47AAExHfUmBl3r8WlZWuySr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMsTuJEpbU8h%2FxsLKHKtwDrvYTcSw7Ys0XkvNHO0qaLcI8m1%2F9z7sp6YsevBxccfz%2F5jfjuc7wXMTfYU8gVhNbrnenrs24y9C3fLsAR3E4PheJKZgb1qdiMbM4Yvw5SctE%2F5mBye0YoaERPVA6WpN570BMyZMPSBGmifQQItDUGYvexDHy0GLe5USfBfQFGMmf5wU56dGMuxW8LHelpYqL6CgGUJMhxZxiFRaQ3boEkrlsoi83tiOWoSINZCxsElgAQuo%2FYbJNGzvSXUCkEw4%2BjmU%2FmTqv7%2Fy3iOMLutOLv%2BZnVGbM6%2B6ElF1tUEMzEGWSQPDt6CKay0uDM8BSFtdPhYZP449xEn2sKuuC9gRr6CqWm7FOyL5eBMnvTE9PrfxaKu08ZGobMYBqTSYs0vda88IjIBVi7wSS%2FJruEkdtuXsO4DvA0%2FYgQSSD2YcLr5%2FdTGrVCTlGdpCvzi2fhbuf0kg7ssB4eMA%2FshDQxjE4UNYe%2Bncz06l9tR0K0UC%2B9mV9ozXaKRpIEinAERthOx2i7EVMvFhMgBjGL4sZ1aOPs5XU%2BIFYryA1huDLLylkXPL%2FMg%2FBHMM4EGIL3%2FWU9RA3W20E73c0XgKeOt4IuHcQn76DZufk7IoKTB3yfsYxI2lrhwLZSL2qnBHzthAwq67EvQY6pgGhdS2XOmaBw1wjfniE90Sl63NDdx3lN4Ka%2BzNoLtSuwrt8AcWqd4ZOTKDh48vJW%2BsLsJIb%2BolPHIp2BpBapowCRSlXw6aWcMAffiQ%2BonVWgl0GiDMPMD0867f68JaSSNpCL9C28qj5WnxEv31B8rRepXNpx843gw%2BPS%2BoSroZKhlt%2FIic67Em%2B0oFZkKQ3q9FqRqZb84IAjP%2FJ8a5k8AU6SmyP8M2S&X-Amz-Signature=3ea5b5189e0fe7329a9744fdb5bce255b3e7893e762d4409bfc1744e5ba2c514&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
