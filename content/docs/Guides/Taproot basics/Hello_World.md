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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236XGYAC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMVzupAXROOhtKNnFL7kska07bnZso%2FMPGvoREkaXtVwIhAOFekccUZXIs8OE9dC04uucSdP%2F1N6hh6AXW27hnL0zjKv8DCHkQABoMNjM3NDIzMTgzODA1IgytUI7N%2FQ1U3qIV5kQq3AM2YD%2B8CUL%2BeWirK4mXG1n%2F1FOqNEpUlnQBVUBFLzru9%2FKFvq3gxYGBc1hXFwrtPV3ST2H3cKKpof5lQubv7L8QwJfPGJsMhQ42NeZDIlHC12QMasrb4JjDyjQlYMeYAxQKuCh2BYMSBzOuGtEsKaGEB0Mr%2FgQqDmYsAULqQ1jx8cIAA30hIyubNbOwThLbC%2Fb42e2Z0%2BU3MQcoCtKboFWrRAplJlBqljp86El7mIEIeAqtuKrQ7tZxY3UlvY6rzwOSLQS49CIyq%2BEcnZ46kVKmmho5ooQZomZWTR0yJRLYgGJno9AXoGf4UHZBHYuw6hrCt9%2FXy3feIJ8s15lIUuZE5iOY3O6FOuzhjoghX2maMb4gtpzSrQxe1PZFjlmZu4wZrNA8ZoC8IeW3y7IJsHs1zUWfpF7GQcB8lwSoq73%2FdVZvVWhuvyX1pB7LHGWfMS6CYLlCXFDuppduPivhUV%2F7jAtjoEHy33taDG1Rv90SMEWqqSJ4t5yG0NL7958mCgCq5tSkPutB4Qfa6qnM7%2BxohMPkYK6D3rTh0ye%2FrIh4G808QKGSAG2jMqT2d1TvQ9RnudaIYV7jgb8qj7kvsGzYWrVYHH21wLIg4s89BKclzqSK4IJTnz5eCbd3BjDs9vrCBjqkAbRZfMQS%2BYwvdJ3KK5fQBs7tw8RO%2BSHaZjb4Qy81ePmqA9dVCE1BaheImcblSZXgG3hbKT4tsrD23InQWM9HyZJOcQyyUtRZ3d86Mhf8qkMZpDLBwtj9Z1xhVSU3nGncMIjTMxblthTUOkFE9KWtBVQnejDc49qIfEwtasCfmb3v8YSOIhWCZTGQ1%2BZnPnamc6nw3qfOrQtxEB8dZprF1K2QQ%2F8e&X-Amz-Signature=488766a14e67481cff40b40ee1ead5a447a5a521d06f731b0ae199a717ee8e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466236XGYAC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMVzupAXROOhtKNnFL7kska07bnZso%2FMPGvoREkaXtVwIhAOFekccUZXIs8OE9dC04uucSdP%2F1N6hh6AXW27hnL0zjKv8DCHkQABoMNjM3NDIzMTgzODA1IgytUI7N%2FQ1U3qIV5kQq3AM2YD%2B8CUL%2BeWirK4mXG1n%2F1FOqNEpUlnQBVUBFLzru9%2FKFvq3gxYGBc1hXFwrtPV3ST2H3cKKpof5lQubv7L8QwJfPGJsMhQ42NeZDIlHC12QMasrb4JjDyjQlYMeYAxQKuCh2BYMSBzOuGtEsKaGEB0Mr%2FgQqDmYsAULqQ1jx8cIAA30hIyubNbOwThLbC%2Fb42e2Z0%2BU3MQcoCtKboFWrRAplJlBqljp86El7mIEIeAqtuKrQ7tZxY3UlvY6rzwOSLQS49CIyq%2BEcnZ46kVKmmho5ooQZomZWTR0yJRLYgGJno9AXoGf4UHZBHYuw6hrCt9%2FXy3feIJ8s15lIUuZE5iOY3O6FOuzhjoghX2maMb4gtpzSrQxe1PZFjlmZu4wZrNA8ZoC8IeW3y7IJsHs1zUWfpF7GQcB8lwSoq73%2FdVZvVWhuvyX1pB7LHGWfMS6CYLlCXFDuppduPivhUV%2F7jAtjoEHy33taDG1Rv90SMEWqqSJ4t5yG0NL7958mCgCq5tSkPutB4Qfa6qnM7%2BxohMPkYK6D3rTh0ye%2FrIh4G808QKGSAG2jMqT2d1TvQ9RnudaIYV7jgb8qj7kvsGzYWrVYHH21wLIg4s89BKclzqSK4IJTnz5eCbd3BjDs9vrCBjqkAbRZfMQS%2BYwvdJ3KK5fQBs7tw8RO%2BSHaZjb4Qy81ePmqA9dVCE1BaheImcblSZXgG3hbKT4tsrD23InQWM9HyZJOcQyyUtRZ3d86Mhf8qkMZpDLBwtj9Z1xhVSU3nGncMIjTMxblthTUOkFE9KWtBVQnejDc49qIfEwtasCfmb3v8YSOIhWCZTGQ1%2BZnPnamc6nw3qfOrQtxEB8dZprF1K2QQ%2F8e&X-Amz-Signature=1790644279c34c470433272d83f259b93fda910e592a176d49767c18b5f7baec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
