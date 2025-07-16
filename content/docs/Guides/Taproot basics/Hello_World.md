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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMCD2CG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFPZOq9YRjdvFGk0V%2B538Zkayb34usRDFR22ClxM7%2FBNAiBM0h3bCVoTBuHco5T6QmlYWQcDaC3PHcX%2ByIwUcwZ%2FtCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM5JG7%2Bi0nEj66Ai2%2BKtwDdl4ZDQm0B6zQPScfiXcKczhTqH2DqBVH8oYg87%2FnEvVqsRV6VTWllyfTpX8ABe7z5vdEeMOR%2BCPekuk4rCE7N9lrlCbR6FwEuBsucA65gmmW8eZ%2FAPyoesx0vV9sOAsnZzWjWLfrpb3OycLKEFYsAHTyEf%2BTeQGxiNIVx2TTfuAiQqSmmfMXbyg1xZzQAiDqBfzK1Y1FAul7CRxPlXkwzsgvoPmI%2FqJ0Y0TdpuNXMFDyCxWAFT6aWBNidB0j7jdNdWwgXstLH6N4lFTnopfwnXGMKzRYIbNanVis%2FBUxgvqgLx64s%2FmJVnXADwRa2bUoWNI4l8ihll38U9TU63metWSo2Io4h8%2BDph2IRArWMHx9TzqG7DuDLSHm7DaMKGqtJxeSYBq2GJNZgGyPMXCnEvXmf8m2AzGScIgMF28b6zLACpE3X%2FlCSsBU7AVDnw7RGnM4%2FjdhKlvGFdyh6Pd5nJ3vyAp5pvz1uBuEcJAfhyItCf0spgU7wIuRYzIyYrSWZ4ixNrj55Y118jHbQJ9e00nkwrvuoTHkn0AG4T%2Bnlt3t%2Fr9c%2F%2FzZ8TD%2BkA2DBNbgk4F3zotIKOF2AzRemT5zSbLGAGzQbVj%2FF1CLarKgho25c0aDrLM3%2BKk4RWUwluDfwwY6pgGj%2BoOCU7OMlUUYmysxQhNAuKSqhoTyi7UAUxSC6oQ%2F3ISF3qnE9g4%2F3cyHsv6DepLnjWzeR0RChr%2B1kR0o3ESgojMMxeG%2FjgB0iBW%2BgfXKyWrwONyQ1Bzus8gci9OhMFA6yHAP0UcxiZsEK6mb8vV3gNF47B2HnJBo%2BE9Hqv98Gc2zFskzO7KezH3QTGAqms9byidDAR%2FD8TxvrZUxuPwnYxLoRKG0&X-Amz-Signature=b510813ad181401ba57c008e0f8499631bcc6a9a3840cfd14eb1b0f5e63ec3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMCD2CG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T190911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIFPZOq9YRjdvFGk0V%2B538Zkayb34usRDFR22ClxM7%2FBNAiBM0h3bCVoTBuHco5T6QmlYWQcDaC3PHcX%2ByIwUcwZ%2FtCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIM5JG7%2Bi0nEj66Ai2%2BKtwDdl4ZDQm0B6zQPScfiXcKczhTqH2DqBVH8oYg87%2FnEvVqsRV6VTWllyfTpX8ABe7z5vdEeMOR%2BCPekuk4rCE7N9lrlCbR6FwEuBsucA65gmmW8eZ%2FAPyoesx0vV9sOAsnZzWjWLfrpb3OycLKEFYsAHTyEf%2BTeQGxiNIVx2TTfuAiQqSmmfMXbyg1xZzQAiDqBfzK1Y1FAul7CRxPlXkwzsgvoPmI%2FqJ0Y0TdpuNXMFDyCxWAFT6aWBNidB0j7jdNdWwgXstLH6N4lFTnopfwnXGMKzRYIbNanVis%2FBUxgvqgLx64s%2FmJVnXADwRa2bUoWNI4l8ihll38U9TU63metWSo2Io4h8%2BDph2IRArWMHx9TzqG7DuDLSHm7DaMKGqtJxeSYBq2GJNZgGyPMXCnEvXmf8m2AzGScIgMF28b6zLACpE3X%2FlCSsBU7AVDnw7RGnM4%2FjdhKlvGFdyh6Pd5nJ3vyAp5pvz1uBuEcJAfhyItCf0spgU7wIuRYzIyYrSWZ4ixNrj55Y118jHbQJ9e00nkwrvuoTHkn0AG4T%2Bnlt3t%2Fr9c%2F%2FzZ8TD%2BkA2DBNbgk4F3zotIKOF2AzRemT5zSbLGAGzQbVj%2FF1CLarKgho25c0aDrLM3%2BKk4RWUwluDfwwY6pgGj%2BoOCU7OMlUUYmysxQhNAuKSqhoTyi7UAUxSC6oQ%2F3ISF3qnE9g4%2F3cyHsv6DepLnjWzeR0RChr%2B1kR0o3ESgojMMxeG%2FjgB0iBW%2BgfXKyWrwONyQ1Bzus8gci9OhMFA6yHAP0UcxiZsEK6mb8vV3gNF47B2HnJBo%2BE9Hqv98Gc2zFskzO7KezH3QTGAqms9byidDAR%2FD8TxvrZUxuPwnYxLoRKG0&X-Amz-Signature=ca23af7475b14c4dc359d7382e563692717cc6dcd0ca931a9ed544ca7a96a3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
