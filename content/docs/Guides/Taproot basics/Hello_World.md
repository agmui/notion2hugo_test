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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHQDFPU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFxN%2FnnPZO1yg%2BMVwPKhPfYPGlkNAjAYzi0OJVJmBlngIgQ3OnMfci9%2BYBGf%2FV6bhLEsh119%2FyAVaB9aqPUxZKlWAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4EFn9XckR%2FtaTeoircA4%2FwOXv5GGsTLqj1DNjnSN6AD4IBFoXivMEh5ubCkpiEwxIJr2rhDBfkBEzAFhzf5F1gKsCw6lHmYXTqiMU2mEL6GVli5uOekUmSkZkDa0KkQ1k5M5cocpq89YbGMI4hBjaXpSl%2Fp4y4rJNm%2F6K5sCb1kCZoGrOF7SvD7QXsMNB4LNZ1oiZK8hq4W8GggTgEB9yZ9N%2BLr%2FrhXz3QNGRJzkg5v8WoiO8tvfE4ngDCQVUgoqPtAEDaaBiWRkIQsaRpK7K%2BKDrCDQ4d21gn0qhnn8GEtGEfja6gOnnLUAAMNfZ5bA3%2Fq6vVcaI7b17YBCMQhaV9ARpHttUefHSmKBVREtaE7iIBI21%2FLDCMFcUrf50PoMW7g3vQ96fH7fhB9FPnMfBllURNNhA25LHI7OKzqwxuc6dPIbp1Os8dI6GBCztyVidOi9Ho%2BqYXjFGnvEMWoQ%2BmLZDG8Nwc3JrjtNCMeORA5jMmAilXWr9wcc0%2BIIRx%2BopqL0VqYGgQH6qGQgAcMt7vFc9ASUMeeCTnNusmsvBRV%2Bp4X%2B9u1k1IVGdtYZ7IIe%2B1xRi9%2Bw39rgQw4adV9s1F3HsAaH4cqF2FHh6YofpgRozMZkziP%2F5Q2TzEvezKacnLkl9p7%2FSt%2BngmMOCAl8AGOqUBnQBKevtUCg0T4Jbw%2F6Jab4k3XQl%2BGQpV5SgJMKdKZ33WPlwTcyimMw1s2TsNGt9tYLf%2FqfFBMH5YOFtrBzDcyku3s%2FgYCpjSxyaUO%2Blhx%2BXwi7uO24qeUrt1alWqnwJ4lTb%2FfuxanO2%2B4VrS6RdWusLqJTQoDoRcExDBLehg%2B1FQlz3JEottVP1nGnbGYuD8fOv5BKYzVn4cKOcQFkZhzxJxsIlD&X-Amz-Signature=a6fc37c8e46bc19f52ad8c4e98b5611ddc695f43139e2f6163d700042bbb6219&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHQDFPU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFxN%2FnnPZO1yg%2BMVwPKhPfYPGlkNAjAYzi0OJVJmBlngIgQ3OnMfci9%2BYBGf%2FV6bhLEsh119%2FyAVaB9aqPUxZKlWAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4EFn9XckR%2FtaTeoircA4%2FwOXv5GGsTLqj1DNjnSN6AD4IBFoXivMEh5ubCkpiEwxIJr2rhDBfkBEzAFhzf5F1gKsCw6lHmYXTqiMU2mEL6GVli5uOekUmSkZkDa0KkQ1k5M5cocpq89YbGMI4hBjaXpSl%2Fp4y4rJNm%2F6K5sCb1kCZoGrOF7SvD7QXsMNB4LNZ1oiZK8hq4W8GggTgEB9yZ9N%2BLr%2FrhXz3QNGRJzkg5v8WoiO8tvfE4ngDCQVUgoqPtAEDaaBiWRkIQsaRpK7K%2BKDrCDQ4d21gn0qhnn8GEtGEfja6gOnnLUAAMNfZ5bA3%2Fq6vVcaI7b17YBCMQhaV9ARpHttUefHSmKBVREtaE7iIBI21%2FLDCMFcUrf50PoMW7g3vQ96fH7fhB9FPnMfBllURNNhA25LHI7OKzqwxuc6dPIbp1Os8dI6GBCztyVidOi9Ho%2BqYXjFGnvEMWoQ%2BmLZDG8Nwc3JrjtNCMeORA5jMmAilXWr9wcc0%2BIIRx%2BopqL0VqYGgQH6qGQgAcMt7vFc9ASUMeeCTnNusmsvBRV%2Bp4X%2B9u1k1IVGdtYZ7IIe%2B1xRi9%2Bw39rgQw4adV9s1F3HsAaH4cqF2FHh6YofpgRozMZkziP%2F5Q2TzEvezKacnLkl9p7%2FSt%2BngmMOCAl8AGOqUBnQBKevtUCg0T4Jbw%2F6Jab4k3XQl%2BGQpV5SgJMKdKZ33WPlwTcyimMw1s2TsNGt9tYLf%2FqfFBMH5YOFtrBzDcyku3s%2FgYCpjSxyaUO%2Blhx%2BXwi7uO24qeUrt1alWqnwJ4lTb%2FfuxanO2%2B4VrS6RdWusLqJTQoDoRcExDBLehg%2B1FQlz3JEottVP1nGnbGYuD8fOv5BKYzVn4cKOcQFkZhzxJxsIlD&X-Amz-Signature=fb6c4f4c3cbde182cabdf46cc8b9748b51fdb6446a552eed8c6fe9598cd6ba20&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
