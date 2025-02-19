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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXZDTA5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDXzq0KlRuAw7HQuXjG7FhPWJCo5XsYCt2klXmgUVXHiQIgIXxbpbzGxHjoAS4XMn0SJVShN9qIWsLXy8q92enEYqQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpXd0IFsHa%2F6ag1HircA95OtBcqtHWl8vVMPLdNo%2Bg5Uv51k0gitE6rAQg9zkTPhkMAdAS6ow3ZTR8AsvFO1NpKyfDg%2Fz%2FcWJGAQsTDKfJJ9oTxKNSo%2FXLd1hmilpvL0007F%2FJPBl0I%2BaBAeSps20wXEfJvrDVuB0T5OGvvmR%2FbuiiX2zlHvDf3BrmnxII5He4qYZXAXx0S7H%2Fdy3P2sVFiyO6vss6M5rPYRwjgU9reB0QIdUNI184Bb9UhUJITP8VyLlUOU6VEv8PiChphXzgNTineVQcm0q2L6iZzk45EQVyjkKFfZLsamnL37jGVKvcrOZp25DHjhGIBuGrnaOx9LGb%2FXWRY1DO3eAv3XA97%2Bi%2ByQYSb1Wg2jacwAkD403NbrppPLPCndNaBpDuVvMQpEHvUnxZHnQgd7xVeC78gNztJ8HE1%2FRuZZpG2Hl%2Bd9c62nyRcfwdAY0XgwP3ioxEGX6jbTXsTxTtQFmTPERvkpki1TOrMblnvvWSMyryp3vncfnSPxYYXcW5gx1Iw9gYx70vP4lOwMQObBTzVMtWoPfflwOASYs5k4Z3I4zroAW93HE6GtnnokYjHGjgec7IIt123eLQBkzBr4dNcu4Od818hY2JSBrr0LrAeh9zxqSRb73l4EjzFH6%2FQMOiH170GOqUBLyO%2FMwJFU2LgJMZlG%2FZ1pUZzqM43ldlYMAYvWCnSO%2BWvv1e0N1EfZ8sDd292sHwe4jJvFzlPVYMgt4VKn7PebNTF0%2FS%2Bkb3rUAEMIMswmbTzuvN%2BhMW%2B7Q1ZkbbONzURLCTmqQdMb7vVuSm4lBLzzOGvCvQeV%2BBAlwarLILAU1PrHLPqlgImv7bVHpYKrHYSTCI6JkTR7c9Z3pEAGhhYzG8FwsWx&X-Amz-Signature=d0e8c80684a2e36989180d807a010c0646586cc92e877232c56e540323f5ec77&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZXZDTA5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDXzq0KlRuAw7HQuXjG7FhPWJCo5XsYCt2klXmgUVXHiQIgIXxbpbzGxHjoAS4XMn0SJVShN9qIWsLXy8q92enEYqQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpXd0IFsHa%2F6ag1HircA95OtBcqtHWl8vVMPLdNo%2Bg5Uv51k0gitE6rAQg9zkTPhkMAdAS6ow3ZTR8AsvFO1NpKyfDg%2Fz%2FcWJGAQsTDKfJJ9oTxKNSo%2FXLd1hmilpvL0007F%2FJPBl0I%2BaBAeSps20wXEfJvrDVuB0T5OGvvmR%2FbuiiX2zlHvDf3BrmnxII5He4qYZXAXx0S7H%2Fdy3P2sVFiyO6vss6M5rPYRwjgU9reB0QIdUNI184Bb9UhUJITP8VyLlUOU6VEv8PiChphXzgNTineVQcm0q2L6iZzk45EQVyjkKFfZLsamnL37jGVKvcrOZp25DHjhGIBuGrnaOx9LGb%2FXWRY1DO3eAv3XA97%2Bi%2ByQYSb1Wg2jacwAkD403NbrppPLPCndNaBpDuVvMQpEHvUnxZHnQgd7xVeC78gNztJ8HE1%2FRuZZpG2Hl%2Bd9c62nyRcfwdAY0XgwP3ioxEGX6jbTXsTxTtQFmTPERvkpki1TOrMblnvvWSMyryp3vncfnSPxYYXcW5gx1Iw9gYx70vP4lOwMQObBTzVMtWoPfflwOASYs5k4Z3I4zroAW93HE6GtnnokYjHGjgec7IIt123eLQBkzBr4dNcu4Od818hY2JSBrr0LrAeh9zxqSRb73l4EjzFH6%2FQMOiH170GOqUBLyO%2FMwJFU2LgJMZlG%2FZ1pUZzqM43ldlYMAYvWCnSO%2BWvv1e0N1EfZ8sDd292sHwe4jJvFzlPVYMgt4VKn7PebNTF0%2FS%2Bkb3rUAEMIMswmbTzuvN%2BhMW%2B7Q1ZkbbONzURLCTmqQdMb7vVuSm4lBLzzOGvCvQeV%2BBAlwarLILAU1PrHLPqlgImv7bVHpYKrHYSTCI6JkTR7c9Z3pEAGhhYzG8FwsWx&X-Amz-Signature=0ccd6aa79d8ba70e0fce2b511ab65a4b11bcac1b71f53254b26423d1fe01771c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
