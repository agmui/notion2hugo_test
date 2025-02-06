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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KVAEBF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDy37cY1adNBYpuvVlwxIocKRGmTEuOSnD94jDt%2F%2BqyewIgM8UfEClICBqY6gvkk596Pw6X2tNzmwq%2BX3mjHPwmKk8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL3qo%2FWErCSxA%2F0%2BdyrcA%2Ba6aOmKfjPXiE%2F5fg2cdARi6zAVCf5Zng1v6Ww4mwgDl1spntuUUrryOk1i38ShekkdUIXVjRf0%2FN0%2Fn5TaTrjxDZRt1iBBqfAllKTmhChgOVKi2A0JRcN4MV5fY%2BHjjj7zgj01yyLXPak3dQ%2FbAvyYA5saUP0qmY0sB3Zy7K3DZ83O0wDOxGI%2F49If9AFv33z8%2BZZ%2FMRm9ut367%2FkVZwjp3y0%2FI4TbBTi9xGpXy9BOW1N6D0AjPKCq3HMc5WMsIRjxFA6xMZlyTn48czYuHPjKJqhsmpecM%2FrjhN1HP%2BAe4VPVOCHp9%2BsVyd4P%2BbFKgEWlhEkZ%2FwP4%2B%2FzBOu%2FKqxqAW5QEEJVX1HlWHgTBa6nZLNurQs5mIrXjvfI3lpu7lI0FdIxToAN3%2FzwE1HOviklGwrWAfo%2FoYM23hrDP8eyK8LtCMQ%2FGesw%2FCu8u7ocXdejaX1IBDOTcYj3M7cGVITFxOJJVdt4lHvei1wHZW44db0oarjjBT6vrSjzoug7waKkAYklz3fXFgBuK%2BxPwa8P9piENvJT5XdVl334%2BhBUCrN2Vc5I39M%2BoL7U0KacRFDoiYx1SaLsOLqlOfYK%2FnlgHuv0igaxGiey%2F0McKu4DOqEbpmJJ1awNz9ntVMKDhkL0GOqUBM6DH%2FBMdeh8DRKO9sq1Z3WdBwN%2Fa5ckezDBVJ6uKozm7qUPvHWk%2BRAMwMPOmRWhe61uTmvjU8iXbvtexAq9%2BG8lh31grNe1%2BGwhgDpy%2BzI42Dv7R8dMbRd6MgdoHN1QVIW74tzb2mFlmvDzxSI9Lux6CkRCZRYSNXfqPB7dtkt133egvjOz18D8Oiax9WHLcJ9hcy9xlNiFsMV3LEunwg5vthDpF&X-Amz-Signature=5d2efcb66c6bbf3991b33053397ce5935a4e191d188ba1f05e1aa1c3bbf7c88d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4KVAEBF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDy37cY1adNBYpuvVlwxIocKRGmTEuOSnD94jDt%2F%2BqyewIgM8UfEClICBqY6gvkk596Pw6X2tNzmwq%2BX3mjHPwmKk8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDL3qo%2FWErCSxA%2F0%2BdyrcA%2Ba6aOmKfjPXiE%2F5fg2cdARi6zAVCf5Zng1v6Ww4mwgDl1spntuUUrryOk1i38ShekkdUIXVjRf0%2FN0%2Fn5TaTrjxDZRt1iBBqfAllKTmhChgOVKi2A0JRcN4MV5fY%2BHjjj7zgj01yyLXPak3dQ%2FbAvyYA5saUP0qmY0sB3Zy7K3DZ83O0wDOxGI%2F49If9AFv33z8%2BZZ%2FMRm9ut367%2FkVZwjp3y0%2FI4TbBTi9xGpXy9BOW1N6D0AjPKCq3HMc5WMsIRjxFA6xMZlyTn48czYuHPjKJqhsmpecM%2FrjhN1HP%2BAe4VPVOCHp9%2BsVyd4P%2BbFKgEWlhEkZ%2FwP4%2B%2FzBOu%2FKqxqAW5QEEJVX1HlWHgTBa6nZLNurQs5mIrXjvfI3lpu7lI0FdIxToAN3%2FzwE1HOviklGwrWAfo%2FoYM23hrDP8eyK8LtCMQ%2FGesw%2FCu8u7ocXdejaX1IBDOTcYj3M7cGVITFxOJJVdt4lHvei1wHZW44db0oarjjBT6vrSjzoug7waKkAYklz3fXFgBuK%2BxPwa8P9piENvJT5XdVl334%2BhBUCrN2Vc5I39M%2BoL7U0KacRFDoiYx1SaLsOLqlOfYK%2FnlgHuv0igaxGiey%2F0McKu4DOqEbpmJJ1awNz9ntVMKDhkL0GOqUBM6DH%2FBMdeh8DRKO9sq1Z3WdBwN%2Fa5ckezDBVJ6uKozm7qUPvHWk%2BRAMwMPOmRWhe61uTmvjU8iXbvtexAq9%2BG8lh31grNe1%2BGwhgDpy%2BzI42Dv7R8dMbRd6MgdoHN1QVIW74tzb2mFlmvDzxSI9Lux6CkRCZRYSNXfqPB7dtkt133egvjOz18D8Oiax9WHLcJ9hcy9xlNiFsMV3LEunwg5vthDpF&X-Amz-Signature=5c0c5c10e32862ef1872daac43230c80faea5b5b8167a8b03efb80ccfd3811bb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
