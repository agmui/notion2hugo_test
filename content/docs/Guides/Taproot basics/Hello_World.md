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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOEXNXD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAqbpE65rWv%2Fh6L2sJyNz82v1i5X31XOSRb4MhkPVo4rAiEAtozPjpeCWhQWmPU8nAYE59kmg%2FndddYuWNCCrCg01BoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuGmwki%2BL3bqdhDPCrcA1XUPg2WeJsn%2BtrjKgd%2B96Ta0DW1omOvkN6LpYFaPClAQQcLyifYLLK1EpRkOnFLQ7ilTNPqCzZNfy0FRrGNa9Zd3UbVnR62ECDDw3tog16Py4CuSXIBvKcqTvWKQY6ySFxxZEyEpcszIsAMto4YxfTYdZZgEdjJdP81XXLNfQSzzZdDZ9OI8hvHbSWFw1lXkPQDwBrIKuxC%2Bw%2B0PsKAjh8bwf%2B67UXq%2FC7SwZcYvZlvDxbRAKAmA8%2Bb2iWXO3q861%2BDGW5InWU88wOp3udjsDJ2bSPSu3%2B%2FaxVUw5Mpuhc4JOyG%2Ff40HakjQ7NssmDfTcllBQebyJjkf9yHF9fCC5jCHt7eoM2dgpdhuYgynFRJdN5ZTYJZmHHeRS0renkHyOWfnkpuhAlyaGJyggrTVw7S9sa1IdyJ%2B3GrXGAO8fiOVf1NBVmF0KfVcYJkkcbmJ1EOKA%2Ba9R3oFCgl7uxHnc0pDe6jTjrq1T7sPfamXdObiHI5QhpONO8MWf3tGHmn%2BKcidLZeZ9jzidpSHY%2FR6C5qKQgzK5lqExQjk%2B0X4%2Fp%2BCK3IAusIi3RLEPSoobCR%2FhdjB1kn1avATA682zzfpNGbEjNQ4mKWXtIuPjPqj%2BK0CGXqMICToyNeh14PMO6BkcAGOqUBOsSKQRMsDCfahgxj%2BVMJrZHPS3zMV%2B%2BxrZZjNqgoUGlXIPFxgpnt95MFI1ltlxYEwtPwppoJ8JQ5qKzwXwcQr9O6Q0DQ%2FwDcxdaKhQkBgBC%2FKHXYjE3P5wiIuHxUgz7Eung%2FXXQw76FDiTw9hUc9U4qDTgH6nEo%2B2dwJwJwJtgNUdW9e5wN5XEw86IyrqZcZ2z1EAOecpy%2BAozvp4gHUyiIO4RHy&X-Amz-Signature=64b86f6d531871be9fa077c7e47b341ca12a70d3e669ac6ee0f6a6cd86807846&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOEXNXD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAqbpE65rWv%2Fh6L2sJyNz82v1i5X31XOSRb4MhkPVo4rAiEAtozPjpeCWhQWmPU8nAYE59kmg%2FndddYuWNCCrCg01BoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuGmwki%2BL3bqdhDPCrcA1XUPg2WeJsn%2BtrjKgd%2B96Ta0DW1omOvkN6LpYFaPClAQQcLyifYLLK1EpRkOnFLQ7ilTNPqCzZNfy0FRrGNa9Zd3UbVnR62ECDDw3tog16Py4CuSXIBvKcqTvWKQY6ySFxxZEyEpcszIsAMto4YxfTYdZZgEdjJdP81XXLNfQSzzZdDZ9OI8hvHbSWFw1lXkPQDwBrIKuxC%2Bw%2B0PsKAjh8bwf%2B67UXq%2FC7SwZcYvZlvDxbRAKAmA8%2Bb2iWXO3q861%2BDGW5InWU88wOp3udjsDJ2bSPSu3%2B%2FaxVUw5Mpuhc4JOyG%2Ff40HakjQ7NssmDfTcllBQebyJjkf9yHF9fCC5jCHt7eoM2dgpdhuYgynFRJdN5ZTYJZmHHeRS0renkHyOWfnkpuhAlyaGJyggrTVw7S9sa1IdyJ%2B3GrXGAO8fiOVf1NBVmF0KfVcYJkkcbmJ1EOKA%2Ba9R3oFCgl7uxHnc0pDe6jTjrq1T7sPfamXdObiHI5QhpONO8MWf3tGHmn%2BKcidLZeZ9jzidpSHY%2FR6C5qKQgzK5lqExQjk%2B0X4%2Fp%2BCK3IAusIi3RLEPSoobCR%2FhdjB1kn1avATA682zzfpNGbEjNQ4mKWXtIuPjPqj%2BK0CGXqMICToyNeh14PMO6BkcAGOqUBOsSKQRMsDCfahgxj%2BVMJrZHPS3zMV%2B%2BxrZZjNqgoUGlXIPFxgpnt95MFI1ltlxYEwtPwppoJ8JQ5qKzwXwcQr9O6Q0DQ%2FwDcxdaKhQkBgBC%2FKHXYjE3P5wiIuHxUgz7Eung%2FXXQw76FDiTw9hUc9U4qDTgH6nEo%2B2dwJwJwJtgNUdW9e5wN5XEw86IyrqZcZ2z1EAOecpy%2BAozvp4gHUyiIO4RHy&X-Amz-Signature=185cf6ccf7a6291ee6e8651db6062be17294f8fcc6f4a4ee8ca0f54c2080d4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
