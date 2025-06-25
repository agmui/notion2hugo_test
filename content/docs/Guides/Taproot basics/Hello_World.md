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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GOI3SN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC5nFnPXnUW3JCb%2BqyzBG2IYu467sR3q6797KYFyWzNzAIhALXq2G5lTJ%2BHUB21SsFCLwyRii8lQMUqbl0Si%2F2ur%2BtqKv8DCDwQABoMNjM3NDIzMTgzODA1Igyitpb%2FLgYSo36feXMq3AMxMr9mPNFoKpLbuN65QduVGU9ihMwA4tQCWFlZXZdPEUwXF8smWFPjgitZRXsDyiVm1YIrcsswryiQI1Bz%2BzzSl%2BEOi88s50X0JaW3ZHVOFGjtCdB3HcxeKPUFS7mSv6HSuTZBSTB57gN%2BKuFRdykZtkgvgc6DqPE2bxEBWKOn0jMS1iubNruh2O7i8mGcfD9Y1qgHaJBVw2RXdiicFYb7qGE12OvnomPcYZ%2FJk4FnwHN2ldmFkPvBA9x5cMV8E1uX%2BYNxegPVKP8IqAM7MM9H%2FaKYdKLqOOUdTj%2F3mxfV1jtWRNQaT1dTZf9bs9CN0g%2BQBHWhaBAHdgHKJKo4yXe7r%2BR1qvQowT56jk8yGkJ%2BrVYm%2BSBrfW7B9Fmc3xbP%2BpFacHqiAHCEwpMNp%2F7sCo8xVjkaz5spACJIUdUEZ6m7GFUmt%2BexHeOeX%2FGHm6Anwz%2FxgtFGZ3yg1RvEATmLqyvPJ298Lnefn2%2BJzoE63AjjQJOaxbD8Oavtf21xmjKguRiu52iTFSPNiopx7WuDpXz9c3mpB4Zx8bHNdTZdPzqiD6Eaobio3Vum73Ljlgpc%2FTBA8HaznlfTG%2FnWlyyt5Vi%2Bllrji59mUlCkMC1PPNplWWEDL3KNg%2BEkL%2BmNMzCvwu3CBjqkAbAyHaPLpcSDMlkXO%2FHxcDWDTcbT8oie31iS3grtQEevVOjAoTN27HW%2Fox6fcVLtSnN9zC4EW54VYHOI1GrhwAidtXeGoZtV67r0oSf%2BBjMh9XNuKAhdf44FQLqfrYrrkdJ7z3tptFB8xkMZ40Y3rL7qoiJITwAHel3NlDsDdtw%2BIi26bf5IG9fkYc%2BlYGLik6qYR%2B9PAOSQ7oM%2BB1vd9Ty1XvEL&X-Amz-Signature=2a040f7779cd6a03267be37baaac9039742a785dd22ba226f839de3bfc2f76fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GOI3SN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC5nFnPXnUW3JCb%2BqyzBG2IYu467sR3q6797KYFyWzNzAIhALXq2G5lTJ%2BHUB21SsFCLwyRii8lQMUqbl0Si%2F2ur%2BtqKv8DCDwQABoMNjM3NDIzMTgzODA1Igyitpb%2FLgYSo36feXMq3AMxMr9mPNFoKpLbuN65QduVGU9ihMwA4tQCWFlZXZdPEUwXF8smWFPjgitZRXsDyiVm1YIrcsswryiQI1Bz%2BzzSl%2BEOi88s50X0JaW3ZHVOFGjtCdB3HcxeKPUFS7mSv6HSuTZBSTB57gN%2BKuFRdykZtkgvgc6DqPE2bxEBWKOn0jMS1iubNruh2O7i8mGcfD9Y1qgHaJBVw2RXdiicFYb7qGE12OvnomPcYZ%2FJk4FnwHN2ldmFkPvBA9x5cMV8E1uX%2BYNxegPVKP8IqAM7MM9H%2FaKYdKLqOOUdTj%2F3mxfV1jtWRNQaT1dTZf9bs9CN0g%2BQBHWhaBAHdgHKJKo4yXe7r%2BR1qvQowT56jk8yGkJ%2BrVYm%2BSBrfW7B9Fmc3xbP%2BpFacHqiAHCEwpMNp%2F7sCo8xVjkaz5spACJIUdUEZ6m7GFUmt%2BexHeOeX%2FGHm6Anwz%2FxgtFGZ3yg1RvEATmLqyvPJ298Lnefn2%2BJzoE63AjjQJOaxbD8Oavtf21xmjKguRiu52iTFSPNiopx7WuDpXz9c3mpB4Zx8bHNdTZdPzqiD6Eaobio3Vum73Ljlgpc%2FTBA8HaznlfTG%2FnWlyyt5Vi%2Bllrji59mUlCkMC1PPNplWWEDL3KNg%2BEkL%2BmNMzCvwu3CBjqkAbAyHaPLpcSDMlkXO%2FHxcDWDTcbT8oie31iS3grtQEevVOjAoTN27HW%2Fox6fcVLtSnN9zC4EW54VYHOI1GrhwAidtXeGoZtV67r0oSf%2BBjMh9XNuKAhdf44FQLqfrYrrkdJ7z3tptFB8xkMZ40Y3rL7qoiJITwAHel3NlDsDdtw%2BIi26bf5IG9fkYc%2BlYGLik6qYR%2B9PAOSQ7oM%2BB1vd9Ty1XvEL&X-Amz-Signature=5fe07df41137333b23a44de7db10f76c6b4fdb2657ebc8b5fa815b7d0bde852f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
