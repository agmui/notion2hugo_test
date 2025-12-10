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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PG6HZ3%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfvPflIIfXq4%2BzfXVyevH9lEjfepHVF%2FD3mxdDuHL8CAiEAmFbsEjgtxZNckgMtqx5OlSrcqih%2BFIQc859KmCycmpMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5s86Y3akvheVevCrcA3L3BsHN77smV90jRhthJar6ZeS5%2FRp1L%2FmK6ZhMsJtDj8xp%2Bbi4Uc0oHawG9AJZPOZiCXRZOK%2F3DUhXmXDUCRtI6rmNkMtXTA3051PMTu0C2wrVmkNJFhzwm7X%2B14ZAUP4LekeI6cD4GSIIztmBP%2Ft2oK%2FGGYI4f5ic15h8QKaOOw6S8kNrGCVkC%2BFpyjwf0pdvh8dDe7cUsgjav0gTt%2FI2OJNRPfpKTizl5X7XVscAI6xolPZkwi95EQBa6lMlfqL9ado2W4oFH2JfM0CJs44zYqtMOPYtufgM0e6ZZOl2QNlig3P29Z8kaI29IHAoG4ipLPRXEEIUFE5HXJmUIj32758ytFfr6mFZWF6tdl%2BdXk30JQAzGusoIubSceutClXfkMrYdjLBQt%2BtTfr0FpHrLSKIFc%2Bsjy%2FDDB2IaWP4zVncaxYT4EwwwRl3zfPcvfgKiEA%2BljmjvNCyN2b7Oh3bSbba0Fk8TNYFo9amV1eAbKBgwl3E6w6dGlFcXSWrmA%2Fx820oY%2BAbYGlPfIhYfq37I2NXFsQ5knCO8uy20ZsbzfD33U9iov7ar7jkMBFGyDxj1AqwYxh4h0BdOMkz2R3eChZVhbLD%2FM26Qq6MKfBnxLrRnCXfwvTWBUiVMJHJ4skGOqUBdoAMokCI3Zf4DVWF6vbxb%2BDsIqHlm74dif5adCo2LnaeR50ZxooAoFD3hHNLv8zrX69MSSuIuZdY9PS1QjcYiu5bC4fZAgYoDh84RusaHXYj4sn745j95XadMU1uuBQylOtT5tC5PYmPmK3IdYc3z2L9w34DoDQXuYYxdS7WiUZ9otyB6r5csLOnNe5hoFvLeg73wnKZoWtWOIiY7tx3LVUrSvL0&X-Amz-Signature=4e0b2a9af7bee64212f4be820c3bcc012b375c19a4c4b7cdfdf1260d5ca47739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625PG6HZ3%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfvPflIIfXq4%2BzfXVyevH9lEjfepHVF%2FD3mxdDuHL8CAiEAmFbsEjgtxZNckgMtqx5OlSrcqih%2BFIQc859KmCycmpMqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5s86Y3akvheVevCrcA3L3BsHN77smV90jRhthJar6ZeS5%2FRp1L%2FmK6ZhMsJtDj8xp%2Bbi4Uc0oHawG9AJZPOZiCXRZOK%2F3DUhXmXDUCRtI6rmNkMtXTA3051PMTu0C2wrVmkNJFhzwm7X%2B14ZAUP4LekeI6cD4GSIIztmBP%2Ft2oK%2FGGYI4f5ic15h8QKaOOw6S8kNrGCVkC%2BFpyjwf0pdvh8dDe7cUsgjav0gTt%2FI2OJNRPfpKTizl5X7XVscAI6xolPZkwi95EQBa6lMlfqL9ado2W4oFH2JfM0CJs44zYqtMOPYtufgM0e6ZZOl2QNlig3P29Z8kaI29IHAoG4ipLPRXEEIUFE5HXJmUIj32758ytFfr6mFZWF6tdl%2BdXk30JQAzGusoIubSceutClXfkMrYdjLBQt%2BtTfr0FpHrLSKIFc%2Bsjy%2FDDB2IaWP4zVncaxYT4EwwwRl3zfPcvfgKiEA%2BljmjvNCyN2b7Oh3bSbba0Fk8TNYFo9amV1eAbKBgwl3E6w6dGlFcXSWrmA%2Fx820oY%2BAbYGlPfIhYfq37I2NXFsQ5knCO8uy20ZsbzfD33U9iov7ar7jkMBFGyDxj1AqwYxh4h0BdOMkz2R3eChZVhbLD%2FM26Qq6MKfBnxLrRnCXfwvTWBUiVMJHJ4skGOqUBdoAMokCI3Zf4DVWF6vbxb%2BDsIqHlm74dif5adCo2LnaeR50ZxooAoFD3hHNLv8zrX69MSSuIuZdY9PS1QjcYiu5bC4fZAgYoDh84RusaHXYj4sn745j95XadMU1uuBQylOtT5tC5PYmPmK3IdYc3z2L9w34DoDQXuYYxdS7WiUZ9otyB6r5csLOnNe5hoFvLeg73wnKZoWtWOIiY7tx3LVUrSvL0&X-Amz-Signature=890367fe52b1c7f5fbdf107b3f296258078afb341d56da5b77f138c652572dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
