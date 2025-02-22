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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPRXCLP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO%2FTQUA0HCy%2Bb4VR5P7HH8lZzpQgORBLPhpZ5pph5zAIgGQF207eNodUBS5na36Zj0TBX372ooq43YH%2FNz94ACioqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1vBPjoDksqdT7%2FJSrcA%2BRe0g84vYJnmKxlxdROhXEAFQxgPe89gh5X5iAcefbtkHIfZFAEUEBxuWS3PCBqAu1l%2BEmhOPp%2FMVrO37xcy5SoarrbWHXU8%2FkQuJpCEGnhVrgsMBONd01pq1Yv3ZvE13RQVIqVIbgBAtRd2%2FpdxV5N43S6ZfWhU9ZEfJiPjK0IZjs1pnjMZNHnMkTzFZqvz157GxM8vn8DgQlBkj1zzJkEXuwrZ6W4GIi9NaB1WQiC0w%2BBGwCCRntZhv8YNDszdEEDVPIwFhTC6VjrNGoxEHMDthgR715HB6GBiUzbxQQnUbMRwaWgXE4k2vdP5WoCj4l7ARs26xN9RZNy1MCjGlsb%2BJ%2BpspCX6XTharA7%2BOs1O67JrZRh5ZAaZzX0bol2RJNciF001ebbJTYL48hEu0YHCRe6uJBL4Qbh3yXIRcDDNUFvqHDsAkosB58aOBdvH2LQ5FrWMocF09943RPLeWmQc9okilorC0m6SxVJdFJAMqqZ%2FkCAe90PcSuhj%2Bmbk4h3hTrhu%2BTubT%2Bi4M%2Fh5fcyG14P%2F7UGA%2Bi7ZgdhB2K1wblxEeLUdAeZ8lpohZ1%2F69t4vCjOgmIMcsM%2BbWwdq9e%2BBNtsgI0DP%2Fv6THq2%2BP3mVnMAeZfU3sz5WOL2MLDH5b0GOqUBs7DVV%2Bt1o5Qw%2FnWr7ngX2ElW0ppml347xnvz06PM3WwgxqeDXzno6bIrt1H0cErOyrI7LEUdPd7Y6%2FTNrPPX1oeuiCwjzzAZ11m11xtYME9BluJo7PUuUyV58dFvAFLaOlrwRKhJzYTAIGHpP%2BKYuuxKRTHqZ2ZV%2Btr5PakKccfQfiYZ%2B4%2F1NRpAV0KG6xsDNRykrsIVI5oYhEkfkFp%2F7w7C%2FluR&X-Amz-Signature=b59919274c14c48b1d4954e85c6c9bb433fd2b49191a9775a3652373f1dfc363&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPRXCLP%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPO%2FTQUA0HCy%2Bb4VR5P7HH8lZzpQgORBLPhpZ5pph5zAIgGQF207eNodUBS5na36Zj0TBX372ooq43YH%2FNz94ACioqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1vBPjoDksqdT7%2FJSrcA%2BRe0g84vYJnmKxlxdROhXEAFQxgPe89gh5X5iAcefbtkHIfZFAEUEBxuWS3PCBqAu1l%2BEmhOPp%2FMVrO37xcy5SoarrbWHXU8%2FkQuJpCEGnhVrgsMBONd01pq1Yv3ZvE13RQVIqVIbgBAtRd2%2FpdxV5N43S6ZfWhU9ZEfJiPjK0IZjs1pnjMZNHnMkTzFZqvz157GxM8vn8DgQlBkj1zzJkEXuwrZ6W4GIi9NaB1WQiC0w%2BBGwCCRntZhv8YNDszdEEDVPIwFhTC6VjrNGoxEHMDthgR715HB6GBiUzbxQQnUbMRwaWgXE4k2vdP5WoCj4l7ARs26xN9RZNy1MCjGlsb%2BJ%2BpspCX6XTharA7%2BOs1O67JrZRh5ZAaZzX0bol2RJNciF001ebbJTYL48hEu0YHCRe6uJBL4Qbh3yXIRcDDNUFvqHDsAkosB58aOBdvH2LQ5FrWMocF09943RPLeWmQc9okilorC0m6SxVJdFJAMqqZ%2FkCAe90PcSuhj%2Bmbk4h3hTrhu%2BTubT%2Bi4M%2Fh5fcyG14P%2F7UGA%2Bi7ZgdhB2K1wblxEeLUdAeZ8lpohZ1%2F69t4vCjOgmIMcsM%2BbWwdq9e%2BBNtsgI0DP%2Fv6THq2%2BP3mVnMAeZfU3sz5WOL2MLDH5b0GOqUBs7DVV%2Bt1o5Qw%2FnWr7ngX2ElW0ppml347xnvz06PM3WwgxqeDXzno6bIrt1H0cErOyrI7LEUdPd7Y6%2FTNrPPX1oeuiCwjzzAZ11m11xtYME9BluJo7PUuUyV58dFvAFLaOlrwRKhJzYTAIGHpP%2BKYuuxKRTHqZ2ZV%2Btr5PakKccfQfiYZ%2B4%2F1NRpAV0KG6xsDNRykrsIVI5oYhEkfkFp%2F7w7C%2FluR&X-Amz-Signature=b0d031683e37a6b9a3fb4b962f97cc56633d6b6e828f157d1e4e925a597ec2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
