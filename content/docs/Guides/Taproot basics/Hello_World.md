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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO25BVT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD9J%2FLJBgf5Fao5Ov92EQiYgwjLQXVIGVhi3unQaWiYigIhAIMUqpsiONPEEmjfIR0CyYAbhWBBgmU87Rn8adO8Yx5BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJSioGDelfvkCl4eEq3AMGp%2BsE0501Jo%2ByuWz%2BWTsPT%2BGeaKgggKG2ovNjP1ZHctgbLHJ83mnFgtMo2xcm7zqBXtc2auuClSqc6Q8Qi1g2vt%2BfzQFqu24cznLODKJo3QdVoBYARwVuf%2BmWy4Nzg9V6kPv8cAzVsGr%2FOdQfu%2BW8t5ixT2OLM1XrFe6f3JoOSxC8eEoPijNg%2FWUK8hBFuYz0Z5fvHakN0GMKfi58LrhbSwgjj0gaiscH4h%2BSmU8wJgDP8MmR9vAb3wOnMRX3V6Iwu2Lv0mi992a6e4pCxsXIbHfJnJ%2BwFR0davDVF8pOP%2BXgencfzf9jeQjhckdwCn39hXqQkBuX2jQV8E6nDscYxKqsachvtoMXu0l5aNCqp5O%2BS1AUmRE3d9ez4mjlqDwfc3y%2BeTPAeD40R7Tq2QDqAbPBTVs8wBEeDRFWIjXd0VF5TUIqsC5vlK%2FhOwwLLRlu7GwlveY4H%2FJXTC2M43vVtWClvmGWeZqLsCiO9AJ89MQ6Y9x4QqrBXNE%2FDozA24A8zcQKx5HlvOqcDIuZUin2zSctpfmPHQhE8QnHfBf2kp2COTKl6bHrndYP1znbY%2FLkVs2tc2crfZWMKxn4DyYkLWiUE%2Fv0qNIgMABbYrUs8PV7kNHMN3ccUvFGlzDj17C%2FBjqkAea3btuLXhTPvzxLZKvouwdOFsqEG9E9sTYw3a4lr%2BT75GuKbfn4%2Bt8ubgRSB41u2fWAWkvDKhb5M0YK9Xvx0R5hlqBfP0wlaU5TYDVERWaSvDvDwY6XYrVNPBbk2XVjhFVYTb1WIKqN3mQXxJAoJYsCkX0lGylw2eMmQemDgw819Owb1Qt6N7d4C%2FpeFTI4L4SvoR%2FY8gHW1yYc5yGoPjxz4TNF&X-Amz-Signature=26fd39800ee83ed42e8da4f96427114d934f3a2a041082434e64733ce62996be&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO25BVT%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD9J%2FLJBgf5Fao5Ov92EQiYgwjLQXVIGVhi3unQaWiYigIhAIMUqpsiONPEEmjfIR0CyYAbhWBBgmU87Rn8adO8Yx5BKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJSioGDelfvkCl4eEq3AMGp%2BsE0501Jo%2ByuWz%2BWTsPT%2BGeaKgggKG2ovNjP1ZHctgbLHJ83mnFgtMo2xcm7zqBXtc2auuClSqc6Q8Qi1g2vt%2BfzQFqu24cznLODKJo3QdVoBYARwVuf%2BmWy4Nzg9V6kPv8cAzVsGr%2FOdQfu%2BW8t5ixT2OLM1XrFe6f3JoOSxC8eEoPijNg%2FWUK8hBFuYz0Z5fvHakN0GMKfi58LrhbSwgjj0gaiscH4h%2BSmU8wJgDP8MmR9vAb3wOnMRX3V6Iwu2Lv0mi992a6e4pCxsXIbHfJnJ%2BwFR0davDVF8pOP%2BXgencfzf9jeQjhckdwCn39hXqQkBuX2jQV8E6nDscYxKqsachvtoMXu0l5aNCqp5O%2BS1AUmRE3d9ez4mjlqDwfc3y%2BeTPAeD40R7Tq2QDqAbPBTVs8wBEeDRFWIjXd0VF5TUIqsC5vlK%2FhOwwLLRlu7GwlveY4H%2FJXTC2M43vVtWClvmGWeZqLsCiO9AJ89MQ6Y9x4QqrBXNE%2FDozA24A8zcQKx5HlvOqcDIuZUin2zSctpfmPHQhE8QnHfBf2kp2COTKl6bHrndYP1znbY%2FLkVs2tc2crfZWMKxn4DyYkLWiUE%2Fv0qNIgMABbYrUs8PV7kNHMN3ccUvFGlzDj17C%2FBjqkAea3btuLXhTPvzxLZKvouwdOFsqEG9E9sTYw3a4lr%2BT75GuKbfn4%2Bt8ubgRSB41u2fWAWkvDKhb5M0YK9Xvx0R5hlqBfP0wlaU5TYDVERWaSvDvDwY6XYrVNPBbk2XVjhFVYTb1WIKqN3mQXxJAoJYsCkX0lGylw2eMmQemDgw819Owb1Qt6N7d4C%2FpeFTI4L4SvoR%2FY8gHW1yYc5yGoPjxz4TNF&X-Amz-Signature=396725d3fe74744ccd4e2f8fe92fa1cc2d05762013aa35e4c04570b60c75f1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
