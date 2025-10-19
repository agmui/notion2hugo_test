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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCJKKEF%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIELJKxR4hVwW8FteUXPGv%2BtXkpbm2Z2edOY%2FCTAzmC6YAiEAiJTgz4WYB9OnsZcN0Ch2mYrVpJ6RknIekddzqT8d65sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfWT1Cpo4%2FdXnZYICrcA5U%2BiXwWvl6nMyddVDebe%2BWib7GPh2cVeDLDrIlRUJd68krCNfZ%2Fp%2BFRGcqbaG5QorIWTq2NX7uaCcCATc9c2mKD4RDrnSx26e1MsRL6yx7T%2B5a0yqpAvz4e7Maq5xzs4Z7UpsUGsUtLm8ORHoCryTMXFG8qxbVEjfeAE9o4xuFCWEDoXO5p12jOXMYR%2F3wnZvRKJ1lXICsv0ljQBuAwtZni%2BA1WzDIf26FjmmUAHVs51x%2FjkPun%2BKQloozu6iiBLt5Q%2FHtyPLcHVOfKafBUVFicqaE6n0lGiZEO0W8tKwyfacr7J7bvEMOwZ1n1pOS%2FIrUNNue9GbV5cIFzKrXApUSycbH9%2BO5nr7YwXeD4q0vY%2BldHJZ6%2F%2BEvrYUQoRUKFhZUwjcWE1oOPQevlt7Gd0oHRS1N2A8VzXrSr9YbueHe9NH3%2BdEeRJ%2BylA9LqyoI7eyEaUdSDcBbD2fKuwkyU%2FqUt1Y1a9aBzLW1iKo604W6dlgSLQUmu%2BffHrfGdmiU%2BVhct62coXFhAGcWgn6a%2BJaAUAzwu5OHCD0MU1%2BZDbatMHPDpsloCUFGJOO635%2BWcjv%2FLq6GvSfhJNliT2b4xUapVstxPYQOZvp%2Ffwqqc8a1VREcmhL2xw27Y6Zg9MM6A0ccGOqUBD5I%2B%2B36ND9rSRGpV4RTZevobMc1H91L0bF%2BAOeW1W2fvsf%2BMeYRzjgQB8fGbbL7Jn9%2BN%2FDzttkwdJWPz8K7CpD19YLtBQ1KNY4PmJIg3EGa82AshyOH0F2twldFEs8E%2FDRIBBMNSf9h%2B%2Bph93LYCuDag049Egz5beV204jY90CqlgmShDm6Q9MScGY32htjLPTOX371Ykl51gmgKHXCkk%2Bf6egkD&X-Amz-Signature=a90909169a161fd24f050c28758d29baf89d27ca541c57745366beec8b24eab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCJKKEF%2F20251019%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251019T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIELJKxR4hVwW8FteUXPGv%2BtXkpbm2Z2edOY%2FCTAzmC6YAiEAiJTgz4WYB9OnsZcN0Ch2mYrVpJ6RknIekddzqT8d65sqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfWT1Cpo4%2FdXnZYICrcA5U%2BiXwWvl6nMyddVDebe%2BWib7GPh2cVeDLDrIlRUJd68krCNfZ%2Fp%2BFRGcqbaG5QorIWTq2NX7uaCcCATc9c2mKD4RDrnSx26e1MsRL6yx7T%2B5a0yqpAvz4e7Maq5xzs4Z7UpsUGsUtLm8ORHoCryTMXFG8qxbVEjfeAE9o4xuFCWEDoXO5p12jOXMYR%2F3wnZvRKJ1lXICsv0ljQBuAwtZni%2BA1WzDIf26FjmmUAHVs51x%2FjkPun%2BKQloozu6iiBLt5Q%2FHtyPLcHVOfKafBUVFicqaE6n0lGiZEO0W8tKwyfacr7J7bvEMOwZ1n1pOS%2FIrUNNue9GbV5cIFzKrXApUSycbH9%2BO5nr7YwXeD4q0vY%2BldHJZ6%2F%2BEvrYUQoRUKFhZUwjcWE1oOPQevlt7Gd0oHRS1N2A8VzXrSr9YbueHe9NH3%2BdEeRJ%2BylA9LqyoI7eyEaUdSDcBbD2fKuwkyU%2FqUt1Y1a9aBzLW1iKo604W6dlgSLQUmu%2BffHrfGdmiU%2BVhct62coXFhAGcWgn6a%2BJaAUAzwu5OHCD0MU1%2BZDbatMHPDpsloCUFGJOO635%2BWcjv%2FLq6GvSfhJNliT2b4xUapVstxPYQOZvp%2Ffwqqc8a1VREcmhL2xw27Y6Zg9MM6A0ccGOqUBD5I%2B%2B36ND9rSRGpV4RTZevobMc1H91L0bF%2BAOeW1W2fvsf%2BMeYRzjgQB8fGbbL7Jn9%2BN%2FDzttkwdJWPz8K7CpD19YLtBQ1KNY4PmJIg3EGa82AshyOH0F2twldFEs8E%2FDRIBBMNSf9h%2B%2Bph93LYCuDag049Egz5beV204jY90CqlgmShDm6Q9MScGY32htjLPTOX371Ykl51gmgKHXCkk%2Bf6egkD&X-Amz-Signature=9cc31facdfd757aa474625c591d771b79118059b7b519473c01cdf1bcee08c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
