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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E2VALS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDEp9MX0jP03EJpu4CFRTTbVA56GDHBRvGUDe%2F57GKGXAIhALkN4%2FwmP3xYN7J%2BT0uZiydeUqJmqmkPs5xYMHKyLyyRKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqlKzdJhZvigt%2FTq4q3AM8EeBTztUpnGpqDDFnH3bt9NtU%2F1PS3pnjCoAbSfjK1sxLWOUB1Rv3xmMREWpiLGT3oN3a1sRy7wST%2FgeCqYdF35karULBANpDuRXjEShIjbxpwngaVrCJ0NN7fWRTexfzCclKZOGXKFcqA0qNtJqqX53jqU%2FcCfESzobdSoUq0IWXHw1rGrRzb8SnQQzH%2FPUhhNyudQX%2BRH8gWrR5Zdy5U5JGnvKmk2ecgHNvcoDJ26r%2B5upyz7vJC4lt63ye9gaZBaMz7SwCPecCKdUxeNbep13eGmnB89R4A%2Fri9hZH4P5U76uVN6BvPI8IWFqPG9cq6sX%2BMVgDXz%2BlA8gqdRqiKG36ibCC%2FpiwH8%2BSC6cmjTdPZe%2BfIGh68qSMB2FM3bFaOr1ShF9xOUy0jKnLCrxjLF%2BUooRvVd%2FZ9z9QwtnPjBIQYjYU3BaGIiMU58okNobheuTDt87iByVbCxqSOlYwb8voYZR3RwZV47ARfZpNVXL8KCLx%2BtliJo%2Fpjf36IRF237g5%2BidueKTjr%2FapWkfSiek2VSsdAZwR8nilOHycN3o0hg8UhSQLf6%2FKftGJd5kxUWc06UroqitQQcW2p8s%2B8SiVWG3Xa7A6a74sn6m19gOXkWxfUcMAqGB3yDD2qtrEBjqkAftjG0VAkXZoWgcUqLX%2FIxNqRYq4D%2B3q83b4IQ6I8hcuHUyYMaNMHQIk8wbJH3TQ%2BTezintC7BrHIGswzcits1DmQFTQjQ0LjVxIGyYpUQzxlhv%2BCXgEVTrgN1CgN%2FEwnjiZlnXCqkifwEJApH%2BESp6HnJ8p4%2B7gMOcxAcI0kKu8IvDF1dsh2uGkK1LRsm1s1%2FSWV2qHlreq6yGC2RMMeXlNsNwr&X-Amz-Signature=b16608e60119c87cb13a88310cef8dfdfec5859350f71e53016e447e5747e031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622E2VALS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDEp9MX0jP03EJpu4CFRTTbVA56GDHBRvGUDe%2F57GKGXAIhALkN4%2FwmP3xYN7J%2BT0uZiydeUqJmqmkPs5xYMHKyLyyRKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqlKzdJhZvigt%2FTq4q3AM8EeBTztUpnGpqDDFnH3bt9NtU%2F1PS3pnjCoAbSfjK1sxLWOUB1Rv3xmMREWpiLGT3oN3a1sRy7wST%2FgeCqYdF35karULBANpDuRXjEShIjbxpwngaVrCJ0NN7fWRTexfzCclKZOGXKFcqA0qNtJqqX53jqU%2FcCfESzobdSoUq0IWXHw1rGrRzb8SnQQzH%2FPUhhNyudQX%2BRH8gWrR5Zdy5U5JGnvKmk2ecgHNvcoDJ26r%2B5upyz7vJC4lt63ye9gaZBaMz7SwCPecCKdUxeNbep13eGmnB89R4A%2Fri9hZH4P5U76uVN6BvPI8IWFqPG9cq6sX%2BMVgDXz%2BlA8gqdRqiKG36ibCC%2FpiwH8%2BSC6cmjTdPZe%2BfIGh68qSMB2FM3bFaOr1ShF9xOUy0jKnLCrxjLF%2BUooRvVd%2FZ9z9QwtnPjBIQYjYU3BaGIiMU58okNobheuTDt87iByVbCxqSOlYwb8voYZR3RwZV47ARfZpNVXL8KCLx%2BtliJo%2Fpjf36IRF237g5%2BidueKTjr%2FapWkfSiek2VSsdAZwR8nilOHycN3o0hg8UhSQLf6%2FKftGJd5kxUWc06UroqitQQcW2p8s%2B8SiVWG3Xa7A6a74sn6m19gOXkWxfUcMAqGB3yDD2qtrEBjqkAftjG0VAkXZoWgcUqLX%2FIxNqRYq4D%2B3q83b4IQ6I8hcuHUyYMaNMHQIk8wbJH3TQ%2BTezintC7BrHIGswzcits1DmQFTQjQ0LjVxIGyYpUQzxlhv%2BCXgEVTrgN1CgN%2FEwnjiZlnXCqkifwEJApH%2BESp6HnJ8p4%2B7gMOcxAcI0kKu8IvDF1dsh2uGkK1LRsm1s1%2FSWV2qHlreq6yGC2RMMeXlNsNwr&X-Amz-Signature=f8a060f02ba7f608a657169bde951dc92b869acdbd9dbf0d9f931862f3afc09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
