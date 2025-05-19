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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKBCR3B%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKbZIjFUu%2F3kRA3dfLU0BhQ7nRtDK79MiFBJRYjDCRtgIhALYK2nhsGUky0CRSMd4HDo%2FzJt2XE7DiMKMo%2BjcglLjtKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwremXJSHjqYt4J6oq3ANMjaAiWmg8fKmQLS1fcMaVvu35M5XGT5Oo4TQjzvDlAbLid729bfXfoK%2Bey4KcjBy3PmK%2BCsXGCIpAtbjlUVVsqduiTSWCXrJEqnFOHmOSCiGBvpmTcJleioi3jLFnELtVR8uZOshi%2FrQLZYngQm6Kvzy3uxLA4wKEveXbucPefqtXkqJ299YrXV%2FwSPxuhkZRpLVTUhtRJWyCJJ%2F6suAE9hrES4%2BXAFcTHhu5cZae%2FrqqLltXDDD7U6oE61lU8xTJG3f2xFXuK2KsXWS5hj1VCqBgWOynxpF1HtFRM5tOluT1lJWFHfmDPjG5V%2By8AUipGfv1aqQlDeNQo453wOXatXvstI%2Fq16z24rjiID8cKec5RylDv43IMzlIe%2FHAHF3AGqMVNSqF5xGWeC8o7oymaNpe%2FwhpBxqZmTa%2BEdkhBY2WR2kyMFHmmLkwwbJMFyL72AJvW5KRTvWE5ecrfLfANnlz28c84BRkEoxefSeOa5jwC1TKm2cXNdCmDtd04Xl8n2fa6SrDR6KVnqB3wFFqmx%2FCd8dhrQ%2BPuCPczA3meu53lsYr%2B42%2Bf4ptmkaopZCCcIOjnNcc7E%2BCaId%2BmB%2Fp3b9X7tI32Kh2uAZ8ouhcGj1u9VPM0G2n3riFIzCGya3BBjqkAXgTQAinz3ucDczpYDj9%2FjFB30z7EzuqwymhRbh59qmI1AYQl5FVZMkdmySHfIorG1YXVrpWKQVFZ4W3ccsUxP%2BC9z%2Fdlb1t4tw9o212vTiFRRXYzcB1gmWSbQdGFdmwMh6vmgKBzESvs%2F9yJ8bhC8WmJLkT%2BJN%2FM3N2fwgwlgp9nL4oMwxyEi3qM9TePZCO%2FbcBaEaa8Up1CyeI0ivUJV7xhfjc&X-Amz-Signature=424f2da97190265ef9778152fa81e37d9900f40bced65b25f224bac09952bf7b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKBCR3B%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKbZIjFUu%2F3kRA3dfLU0BhQ7nRtDK79MiFBJRYjDCRtgIhALYK2nhsGUky0CRSMd4HDo%2FzJt2XE7DiMKMo%2BjcglLjtKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwremXJSHjqYt4J6oq3ANMjaAiWmg8fKmQLS1fcMaVvu35M5XGT5Oo4TQjzvDlAbLid729bfXfoK%2Bey4KcjBy3PmK%2BCsXGCIpAtbjlUVVsqduiTSWCXrJEqnFOHmOSCiGBvpmTcJleioi3jLFnELtVR8uZOshi%2FrQLZYngQm6Kvzy3uxLA4wKEveXbucPefqtXkqJ299YrXV%2FwSPxuhkZRpLVTUhtRJWyCJJ%2F6suAE9hrES4%2BXAFcTHhu5cZae%2FrqqLltXDDD7U6oE61lU8xTJG3f2xFXuK2KsXWS5hj1VCqBgWOynxpF1HtFRM5tOluT1lJWFHfmDPjG5V%2By8AUipGfv1aqQlDeNQo453wOXatXvstI%2Fq16z24rjiID8cKec5RylDv43IMzlIe%2FHAHF3AGqMVNSqF5xGWeC8o7oymaNpe%2FwhpBxqZmTa%2BEdkhBY2WR2kyMFHmmLkwwbJMFyL72AJvW5KRTvWE5ecrfLfANnlz28c84BRkEoxefSeOa5jwC1TKm2cXNdCmDtd04Xl8n2fa6SrDR6KVnqB3wFFqmx%2FCd8dhrQ%2BPuCPczA3meu53lsYr%2B42%2Bf4ptmkaopZCCcIOjnNcc7E%2BCaId%2BmB%2Fp3b9X7tI32Kh2uAZ8ouhcGj1u9VPM0G2n3riFIzCGya3BBjqkAXgTQAinz3ucDczpYDj9%2FjFB30z7EzuqwymhRbh59qmI1AYQl5FVZMkdmySHfIorG1YXVrpWKQVFZ4W3ccsUxP%2BC9z%2Fdlb1t4tw9o212vTiFRRXYzcB1gmWSbQdGFdmwMh6vmgKBzESvs%2F9yJ8bhC8WmJLkT%2BJN%2FM3N2fwgwlgp9nL4oMwxyEi3qM9TePZCO%2FbcBaEaa8Up1CyeI0ivUJV7xhfjc&X-Amz-Signature=cd3918d3969e8bbce6b8d011f730dc1ab814fa06038479e4b5c7dee66fe53121&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
