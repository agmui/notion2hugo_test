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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ADZTYIS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbUS5jYJffM2BIO6n7b9F6OIRJXW2sk2RlKWlllTimQIhANGMJM0I9jhgQxG8uMozsbfARKoabONTSzVSDdmwzqqmKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvynMZLLFFc8hfRVUq3AMXUCcMFThTZEAn8F0RC315Cj7S%2FgVO0n5CYIPnBJ49Ajwo7kC9PsOLKwl3NHZKwCl1V1E%2BqWfFZJRNLvqmPDZ%2BVhpUmBJk4drd%2BzatI8E42js6j8EVciHuiflCyvph4hr8b0yIcRYT5VX%2F50xRoMOQexhKUEZGUF7MfUGbeJoijF1aKVOSbMEVj3BD9Mxndr1BMh00fpziym%2B9H%2BpkCjN3aKvvE2%2FQ1Yq95dVMYMF5z44dt2C8rMpa998TGdeGtTOx%2Fapv3hbXy9VR95UzGFt203CmFJosfOLNSJCsLL0gXikJ%2FGQDG0j8QziLx9mtt9LOl%2BiN9U1bEdn4zoFaQ3RleIb6PSLAx6IKGnMnOIwUCN82EEtku5gh0He8NjIOd2Gsph8%2B92OAyeLWG%2BqsJvKo6FjsFkM%2FqKBosTZsYG9ele78ZAdJR06COqP5V9HMNrK85l1xffWHIjG%2F4JCPA2tyFuPGKN6clCKQ9bHUh5k%2B4ZjJvQ2JLCbHa2X8oQ2pEKZcmDWSwha5VYaAf2lS6LsULkH07FzkxKwV3NAc3bZNN1Cr3ZEuOf%2F%2Fj1AhlB2N2CyDil1boJLGB3eLmVqFInl8zqxKDOK2QqnPsu4vDkFLtDkQiz91BfVTr6K1hzDJraXBBjqkAWXSB%2FNglzkYV5FbxPrf9HmMyQra4uhKQd9aUnwl03dX7cNdsbDHqw4RtiFQ%2BlGReqTtBwt%2FeuToJtYvXTN1v1OEN3a1ocUDboEyE2%2BiTzScB753RlnnJs0mZ71Cie3tW3d95H9zLbJJkuAek3Qg6%2BHsB9l6B59y0DV27zO8qaQi%2FhDYmRXqIAVsxu2yhZhEN7ULTRQ9TwC%2F1%2FCbGwVEHUBUTwLl&X-Amz-Signature=5ea483813fe07058b8bfeebf82d4f68d30a090ffe1a95e9f6f85de8c13a0d63e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ADZTYIS%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbUS5jYJffM2BIO6n7b9F6OIRJXW2sk2RlKWlllTimQIhANGMJM0I9jhgQxG8uMozsbfARKoabONTSzVSDdmwzqqmKv8DCG0QABoMNjM3NDIzMTgzODA1IgwvynMZLLFFc8hfRVUq3AMXUCcMFThTZEAn8F0RC315Cj7S%2FgVO0n5CYIPnBJ49Ajwo7kC9PsOLKwl3NHZKwCl1V1E%2BqWfFZJRNLvqmPDZ%2BVhpUmBJk4drd%2BzatI8E42js6j8EVciHuiflCyvph4hr8b0yIcRYT5VX%2F50xRoMOQexhKUEZGUF7MfUGbeJoijF1aKVOSbMEVj3BD9Mxndr1BMh00fpziym%2B9H%2BpkCjN3aKvvE2%2FQ1Yq95dVMYMF5z44dt2C8rMpa998TGdeGtTOx%2Fapv3hbXy9VR95UzGFt203CmFJosfOLNSJCsLL0gXikJ%2FGQDG0j8QziLx9mtt9LOl%2BiN9U1bEdn4zoFaQ3RleIb6PSLAx6IKGnMnOIwUCN82EEtku5gh0He8NjIOd2Gsph8%2B92OAyeLWG%2BqsJvKo6FjsFkM%2FqKBosTZsYG9ele78ZAdJR06COqP5V9HMNrK85l1xffWHIjG%2F4JCPA2tyFuPGKN6clCKQ9bHUh5k%2B4ZjJvQ2JLCbHa2X8oQ2pEKZcmDWSwha5VYaAf2lS6LsULkH07FzkxKwV3NAc3bZNN1Cr3ZEuOf%2F%2Fj1AhlB2N2CyDil1boJLGB3eLmVqFInl8zqxKDOK2QqnPsu4vDkFLtDkQiz91BfVTr6K1hzDJraXBBjqkAWXSB%2FNglzkYV5FbxPrf9HmMyQra4uhKQd9aUnwl03dX7cNdsbDHqw4RtiFQ%2BlGReqTtBwt%2FeuToJtYvXTN1v1OEN3a1ocUDboEyE2%2BiTzScB753RlnnJs0mZ71Cie3tW3d95H9zLbJJkuAek3Qg6%2BHsB9l6B59y0DV27zO8qaQi%2FhDYmRXqIAVsxu2yhZhEN7ULTRQ9TwC%2F1%2FCbGwVEHUBUTwLl&X-Amz-Signature=e4cd471fddc1c5a4747b1798fda5ed4238fbefe9137c20b17296a21fdb142e75&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
