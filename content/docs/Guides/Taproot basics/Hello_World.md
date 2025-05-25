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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSRNZX2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFxcdBlhQZpz%2FbScpYAC3%2FOpXTPxijwmvmWaI7DGQDqdAiAybtE1N0cMcaeiGJzV1IkXdmsn%2BSxN2BEcJcUOTr3BYyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMASjYNpIwKIfTHPLAKtwDrmfmBRQxVtu2rI8dmPng6xv%2B012o7uZZ%2FV6fkngPYq7joa1%2B6IRVljzBOfuHVd2iKbCLPK4Sbgcm6TgHGmkxVSujWE%2FYUzTkyDrNH%2FvJS2uixivcF%2FPWHAq7pGISHI8BfFkgQRwTgkFjFfrF51UpicOtYvYTIm2D7j3QX4%2BPUwO3d9KgeS0G5pIuMmNCbMWadQr3PQ2Nt%2FhbDn8GPBsOQOJvlZp%2BZlK9sqVgyjGH%2BQSXr7F%2B8ik27zJJcYMdyTxPHhoAkxw93bJ1Res8ZoR0R%2BDyLiQj0WKV7PTmiLSHz5TdZS8ADy0Pp9z01jJKIgGTcvJEIGVtFmCscRDl4rCRfS5eo7HahbzJF6iaFu1uKhQYKjv6BZ1K8eRDfejX%2FJdLRTWnAm2BCi2%2B%2FUd8TCU6WdcZFz5SHKJ8P49ELfkf5SXgM1Qn%2BHcC0wtqEuvshuAohufmrKxj241Q6sG2UN6DHjyt8N%2FQUtyQ%2BYN3H0SOZcP9KjSHW0r%2BlUfwng%2BVtO0UOxvdGwNjyxk4MEtYgmBCVAjaptzNq9LOwevKkWsRhXosRz6SGGLV%2Bb8lHWTlQKeiOpPzaDwt%2Fn%2BKR7M6IPsrz4KZB4VMEPuUbAeX2%2BGvuFd9ZoarjRX1r8DeviEw25bLwQY6pgEj0j7Ak7kN4KndKJa50FxE4UNvLyxsN4wNIyEgDvgvxtjr%2Fu7EG9wUz%2BE22lk1q2H%2FBH87WNNGq1BJ1pZyYtCsxHChsx5j5WS8FUVEIRI%2BqWCaCYSNIszpYFN4%2FLFMUeEhRKVit%2Br8MKUbzZZtV4tK%2ByLsFzbAuPF6%2FZ8u1QN3oxhXoarLWA4s74dr%2BTypBTblrddOyVeKjBSWQrx6V0ptiEjmh9v9&X-Amz-Signature=b02adcf2d3614a4d4767ce350de6023bd56a9dcbb256692df36d1b4dc965adef&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSRNZX2%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFxcdBlhQZpz%2FbScpYAC3%2FOpXTPxijwmvmWaI7DGQDqdAiAybtE1N0cMcaeiGJzV1IkXdmsn%2BSxN2BEcJcUOTr3BYyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMASjYNpIwKIfTHPLAKtwDrmfmBRQxVtu2rI8dmPng6xv%2B012o7uZZ%2FV6fkngPYq7joa1%2B6IRVljzBOfuHVd2iKbCLPK4Sbgcm6TgHGmkxVSujWE%2FYUzTkyDrNH%2FvJS2uixivcF%2FPWHAq7pGISHI8BfFkgQRwTgkFjFfrF51UpicOtYvYTIm2D7j3QX4%2BPUwO3d9KgeS0G5pIuMmNCbMWadQr3PQ2Nt%2FhbDn8GPBsOQOJvlZp%2BZlK9sqVgyjGH%2BQSXr7F%2B8ik27zJJcYMdyTxPHhoAkxw93bJ1Res8ZoR0R%2BDyLiQj0WKV7PTmiLSHz5TdZS8ADy0Pp9z01jJKIgGTcvJEIGVtFmCscRDl4rCRfS5eo7HahbzJF6iaFu1uKhQYKjv6BZ1K8eRDfejX%2FJdLRTWnAm2BCi2%2B%2FUd8TCU6WdcZFz5SHKJ8P49ELfkf5SXgM1Qn%2BHcC0wtqEuvshuAohufmrKxj241Q6sG2UN6DHjyt8N%2FQUtyQ%2BYN3H0SOZcP9KjSHW0r%2BlUfwng%2BVtO0UOxvdGwNjyxk4MEtYgmBCVAjaptzNq9LOwevKkWsRhXosRz6SGGLV%2Bb8lHWTlQKeiOpPzaDwt%2Fn%2BKR7M6IPsrz4KZB4VMEPuUbAeX2%2BGvuFd9ZoarjRX1r8DeviEw25bLwQY6pgEj0j7Ak7kN4KndKJa50FxE4UNvLyxsN4wNIyEgDvgvxtjr%2Fu7EG9wUz%2BE22lk1q2H%2FBH87WNNGq1BJ1pZyYtCsxHChsx5j5WS8FUVEIRI%2BqWCaCYSNIszpYFN4%2FLFMUeEhRKVit%2Br8MKUbzZZtV4tK%2ByLsFzbAuPF6%2FZ8u1QN3oxhXoarLWA4s74dr%2BTypBTblrddOyVeKjBSWQrx6V0ptiEjmh9v9&X-Amz-Signature=5ddb79afc85c8b40036f8914d985c49d161344799ff9b528be079cc0e34c8439&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
