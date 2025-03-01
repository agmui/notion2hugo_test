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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSFTI74%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeDIC8HHNWJQFlWoVdDagAmNPk%2FnkU8smWa5UWSrb60gIgBZL%2Fc8SAjpPINrc9bzn2aOZ%2Ff5TbDvTgu3XBtnKrtu4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHa2TGV6rEh0%2BWMSyrcA5hukoMo1MrbKJ9UlpLB64bS7qJ3rRhzSQXLTJp9fjOoqV1pxcTyiGE1CRPXdxsc2JnoENcsTgaCjG38f%2FLvIUqua25AVbOIK61mAtWMsDOduREy%2BhQ9dbxKtysf7OXQ2A34vYu9d0ExRnOBgy%2B%2FJGIWLX8mIPUWO1INCwsgQOmExcN7efNwEc9MxQQypIJCMGwMrB53MrFJ26%2FIZQJkjeI4S39cMnUT%2F6jG01OAry4NSnQRS9jKie6ntUao0hC3mhjUuVVSLhENzI4Y1IVcmd5GpC0AGFEz1ooAlKPFWxKYr5toygcdxS2ZkwXhiPLa9xAsRojo2joAWxlJcYeVeNmsFwTt4byz50HOa1uE3ybGS7IgxS84oMaCTeCVHIFEcN5gV3rjdXS%2BIMzmhXyu5SGxe%2FERWPkY8k4bMtMHSHxb%2FCRrt%2FFt%2FwlEhzQ6Wz80U1YfJIVR6VjoQrMixdf4ijOLxozh7E9BAkzb0msSDbuiCRh1Eo4eAifK9FAIRj7Zf1aImHERGHkI30y1d%2Bsd7OTaKvP25OrQ9U4uhxFZYu7doC1D7aZW05QXcKu%2Fe89zMMTuiYRos%2BJ5%2FDaWVrjUTjzd5C%2B7L5pcOHMrBTlVeFga9JoNRD3qy4fEgXdSMLSQir4GOqUBOR%2FaPn6K7pbFbTRwAu0xmcH8%2B1681Fc99S2h%2BU0LfonvqZKGLkjspdnPOkLYNCoc65jPa8HUG%2BR1tKOuZ9V25U2F%2BHdaFGUdGjPbDxfj94MkUQRUomjqOxW6h3lQe82P7U0OHSqfziP8FT6HGgga3kO3%2B6t4CJD0lLclsckahA0GlIg4v8HUY%2Fy22uobRFPOJmGgWNPgTfXIJSAyEe%2BsDoecJ8GC&X-Amz-Signature=630d15f67d914e5e5dd2d54a35452b4c27602aa6d908f66ac9e1e20ad04a27cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPSFTI74%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCeDIC8HHNWJQFlWoVdDagAmNPk%2FnkU8smWa5UWSrb60gIgBZL%2Fc8SAjpPINrc9bzn2aOZ%2Ff5TbDvTgu3XBtnKrtu4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHa2TGV6rEh0%2BWMSyrcA5hukoMo1MrbKJ9UlpLB64bS7qJ3rRhzSQXLTJp9fjOoqV1pxcTyiGE1CRPXdxsc2JnoENcsTgaCjG38f%2FLvIUqua25AVbOIK61mAtWMsDOduREy%2BhQ9dbxKtysf7OXQ2A34vYu9d0ExRnOBgy%2B%2FJGIWLX8mIPUWO1INCwsgQOmExcN7efNwEc9MxQQypIJCMGwMrB53MrFJ26%2FIZQJkjeI4S39cMnUT%2F6jG01OAry4NSnQRS9jKie6ntUao0hC3mhjUuVVSLhENzI4Y1IVcmd5GpC0AGFEz1ooAlKPFWxKYr5toygcdxS2ZkwXhiPLa9xAsRojo2joAWxlJcYeVeNmsFwTt4byz50HOa1uE3ybGS7IgxS84oMaCTeCVHIFEcN5gV3rjdXS%2BIMzmhXyu5SGxe%2FERWPkY8k4bMtMHSHxb%2FCRrt%2FFt%2FwlEhzQ6Wz80U1YfJIVR6VjoQrMixdf4ijOLxozh7E9BAkzb0msSDbuiCRh1Eo4eAifK9FAIRj7Zf1aImHERGHkI30y1d%2Bsd7OTaKvP25OrQ9U4uhxFZYu7doC1D7aZW05QXcKu%2Fe89zMMTuiYRos%2BJ5%2FDaWVrjUTjzd5C%2B7L5pcOHMrBTlVeFga9JoNRD3qy4fEgXdSMLSQir4GOqUBOR%2FaPn6K7pbFbTRwAu0xmcH8%2B1681Fc99S2h%2BU0LfonvqZKGLkjspdnPOkLYNCoc65jPa8HUG%2BR1tKOuZ9V25U2F%2BHdaFGUdGjPbDxfj94MkUQRUomjqOxW6h3lQe82P7U0OHSqfziP8FT6HGgga3kO3%2B6t4CJD0lLclsckahA0GlIg4v8HUY%2Fy22uobRFPOJmGgWNPgTfXIJSAyEe%2BsDoecJ8GC&X-Amz-Signature=6bb0127119b254ece8d7047b06a9c7265bb6dd4b05519a1a378b502e0849b4df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
