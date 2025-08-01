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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGZPQCL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnrUUqBrqMrc9btDkRPTsjG7xUw3tD%2FbsjBNQwXMYiWAiAiSnhUvTqyE9ocyTuBCewg40c%2BYv5nzgtUgMcdm%2Bwj8SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkMKVB0%2FqW4dDd9wDKtwDfJNBSNXFSMJQfjaiTE5qEwNgxLU2aEQNJrl4gDJaDo2COryO5zGvYqf5Yyiua4dAE4QhkK7G6OAMcTjmoRBAgTSb4PjTlR28JdltsP2DWpFdu5H2rCKNHfcQz5pK3sWZtnBxTBSGy%2FO0xGsu8uvqnIsKEgtvBmMxdWZAYn5PzyUktZPIE8qU085R9AQ%2FBXyrAGsu4iZJzYal6SsfMi15zjSuyB9lubhMAmQCWRIIGcyEbE3L66%2FQ3HLlX4fIrZ9coMqeJip%2FkQDaxocIjDogo3rZBiGqV7RaK%2B4jcNxiyn7xjMakDB6vzp0WKxMb8JO%2BWYTu8wSltZH%2BJf8kxLk%2F2EC9C0Wq%2B1Du68X1iJdGKzyFC4KzGWj7fLzg4lGSOgPKOfw0Llqs2qOQP%2BhnCKDY2RELIoRhxj5Sm3C3p7k6Smm5elBmvX61OMeAXZUk2NEpcAAzmZyEg%2BbG7aG1UqhPz%2BZM4szp6MF5Uzvu4O35GZy8UK0SeJWxMXQwIm2AXlmzV2LxmiOwlgtLBVwPS5PCFy4qVuQM%2BR1B8B9l2xNek5l2FV38nWut34k%2Fw2tF0RGG4n0aDSKXOKVnz4XPFtdpnrS4ZrxoHSqMMU2mGtCE%2FmARyMZRqK4GC7NPf%2Bww5L%2BxxAY6pgF6nzVEdWcisbtjkqlKk84Ro18iVtUnME39Vo4x9K1Fvjn%2FzrVgpnaI2nOqlboKm4gDcLJWnAbIa%2B%2By7sFuAUZuatQIIkebaqBZCHDzrKFEmOEgahdILzQRWYwrv2vbpm9eRXC25uOAlK%2F8TZIk0PUQlj3w%2BN%2BBWH%2BZCdV5Jf8%2FCa5ZhVOECqAcxF0745EMWSMqwYjtMihjajSblq1kosBNZdcCXIg1&X-Amz-Signature=dda3a2aa2f882edd780bf6daf9b22433817d177e30d02f1e6c3a6f7cf2b58869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGZPQCL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnrUUqBrqMrc9btDkRPTsjG7xUw3tD%2FbsjBNQwXMYiWAiAiSnhUvTqyE9ocyTuBCewg40c%2BYv5nzgtUgMcdm%2Bwj8SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkMKVB0%2FqW4dDd9wDKtwDfJNBSNXFSMJQfjaiTE5qEwNgxLU2aEQNJrl4gDJaDo2COryO5zGvYqf5Yyiua4dAE4QhkK7G6OAMcTjmoRBAgTSb4PjTlR28JdltsP2DWpFdu5H2rCKNHfcQz5pK3sWZtnBxTBSGy%2FO0xGsu8uvqnIsKEgtvBmMxdWZAYn5PzyUktZPIE8qU085R9AQ%2FBXyrAGsu4iZJzYal6SsfMi15zjSuyB9lubhMAmQCWRIIGcyEbE3L66%2FQ3HLlX4fIrZ9coMqeJip%2FkQDaxocIjDogo3rZBiGqV7RaK%2B4jcNxiyn7xjMakDB6vzp0WKxMb8JO%2BWYTu8wSltZH%2BJf8kxLk%2F2EC9C0Wq%2B1Du68X1iJdGKzyFC4KzGWj7fLzg4lGSOgPKOfw0Llqs2qOQP%2BhnCKDY2RELIoRhxj5Sm3C3p7k6Smm5elBmvX61OMeAXZUk2NEpcAAzmZyEg%2BbG7aG1UqhPz%2BZM4szp6MF5Uzvu4O35GZy8UK0SeJWxMXQwIm2AXlmzV2LxmiOwlgtLBVwPS5PCFy4qVuQM%2BR1B8B9l2xNek5l2FV38nWut34k%2Fw2tF0RGG4n0aDSKXOKVnz4XPFtdpnrS4ZrxoHSqMMU2mGtCE%2FmARyMZRqK4GC7NPf%2Bww5L%2BxxAY6pgF6nzVEdWcisbtjkqlKk84Ro18iVtUnME39Vo4x9K1Fvjn%2FzrVgpnaI2nOqlboKm4gDcLJWnAbIa%2B%2By7sFuAUZuatQIIkebaqBZCHDzrKFEmOEgahdILzQRWYwrv2vbpm9eRXC25uOAlK%2F8TZIk0PUQlj3w%2BN%2BBWH%2BZCdV5Jf8%2FCa5ZhVOECqAcxF0745EMWSMqwYjtMihjajSblq1kosBNZdcCXIg1&X-Amz-Signature=a1f13459162a7dbbf5904b16cb56922ca616106cdd38b3608bec3a27bbc7588a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
