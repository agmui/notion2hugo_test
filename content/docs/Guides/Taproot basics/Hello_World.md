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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CYTSI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC1pTDsz385Lyo2J9irW07kXqU8KbjL0yXrTGmJAyyQTQIgfHOFIetMxzRpUp0IYSjiY0womJ7aOo0C%2F%2FumcHp8FW0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6D5NS49xTUoWosoCrcA6GXxvratqWQygpIEZFsUokKgBOyelKoDdH2503w4upKiezdbsvskFL%2F0N5NNjLtIaIoP%2Fv0E%2BrhVkpA0cD7q95zHHb5HYQSXXvII1i5Bf%2BjD880%2B10LJ9%2BlnBe6P1fteeUMAx%2BsNDZY7%2Bpe1iXowxJX7s26iBsjxFt%2FWoXMYCwt6b0pEaasIG6SOcOrkn%2BORIsSEtlC8ZgQF4K5Bw9NtmbPCw0%2Bwf9RcnaI3fvg97GAmcZoC80z6RAwlk0uqYCwx8pchqgs9rtqLV9RbmMj0pb1fXwVvizJdLjOJ4d0V6ndvHWUd6gRmBXSssiVSJUg0I67sVL3as1vCN2QIm2Xqc3Ku5K8qS2G1AdBVImrirsau16Itnmb45tE3lZs2gX7dWhTmLqQNNUy4PKcOIYjZoDepG6VyJRUo0Tia0CMeMVWJs9uE8EBVfWTBMToNRcyj%2FcnAGszLwDw4u8zJsCznr4X8JxiKhH0T5Lh3c6XWcVJjMGUEAwYm38bCHNhAGHrdFowB%2FgyhgGZ%2BhtqEln5pKAwtAZv6yjMhawJtUj%2FzyPZNvWBCZiEpOqpw6qZ8wbsiDhhdLy3BcTd86mXrW6swT8mvtkH8X7Py20o2M1WiqWHcqjEZYOq5RCMb%2FrkMITDv8EGOqUBxX65J9xejmHaOP2vxjeArTcMbCoTLGkNYVYo22Q1f7f7gT4cihHRxruk2YGWYsw8y6%2BJCuA1hOilmmNiY3kZwuQCBelw1%2Fa4S4VdFXzczPTUjhK2IgyyNWiwl5SxXey8PwQ%2B%2FnrDW5yfgWa8DO17RpR5vYvVZACXJb6%2FldHG%2FEHKWlGVwBPZjp6PawT2O7SSkmgVfWfq%2B9LJ07wgCcwngkZ%2F5RAM&X-Amz-Signature=45aa44a7612ab211596de555c81637ab6f9a44728ec128df6fa1762669f19f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653CYTSI3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T033518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQC1pTDsz385Lyo2J9irW07kXqU8KbjL0yXrTGmJAyyQTQIgfHOFIetMxzRpUp0IYSjiY0womJ7aOo0C%2F%2FumcHp8FW0qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6D5NS49xTUoWosoCrcA6GXxvratqWQygpIEZFsUokKgBOyelKoDdH2503w4upKiezdbsvskFL%2F0N5NNjLtIaIoP%2Fv0E%2BrhVkpA0cD7q95zHHb5HYQSXXvII1i5Bf%2BjD880%2B10LJ9%2BlnBe6P1fteeUMAx%2BsNDZY7%2Bpe1iXowxJX7s26iBsjxFt%2FWoXMYCwt6b0pEaasIG6SOcOrkn%2BORIsSEtlC8ZgQF4K5Bw9NtmbPCw0%2Bwf9RcnaI3fvg97GAmcZoC80z6RAwlk0uqYCwx8pchqgs9rtqLV9RbmMj0pb1fXwVvizJdLjOJ4d0V6ndvHWUd6gRmBXSssiVSJUg0I67sVL3as1vCN2QIm2Xqc3Ku5K8qS2G1AdBVImrirsau16Itnmb45tE3lZs2gX7dWhTmLqQNNUy4PKcOIYjZoDepG6VyJRUo0Tia0CMeMVWJs9uE8EBVfWTBMToNRcyj%2FcnAGszLwDw4u8zJsCznr4X8JxiKhH0T5Lh3c6XWcVJjMGUEAwYm38bCHNhAGHrdFowB%2FgyhgGZ%2BhtqEln5pKAwtAZv6yjMhawJtUj%2FzyPZNvWBCZiEpOqpw6qZ8wbsiDhhdLy3BcTd86mXrW6swT8mvtkH8X7Py20o2M1WiqWHcqjEZYOq5RCMb%2FrkMITDv8EGOqUBxX65J9xejmHaOP2vxjeArTcMbCoTLGkNYVYo22Q1f7f7gT4cihHRxruk2YGWYsw8y6%2BJCuA1hOilmmNiY3kZwuQCBelw1%2Fa4S4VdFXzczPTUjhK2IgyyNWiwl5SxXey8PwQ%2B%2FnrDW5yfgWa8DO17RpR5vYvVZACXJb6%2FldHG%2FEHKWlGVwBPZjp6PawT2O7SSkmgVfWfq%2B9LJ07wgCcwngkZ%2F5RAM&X-Amz-Signature=461704b8bcba4469dafba2f1b2bee44cc226b4b3b8c6d342542c9dc0e3226866&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
