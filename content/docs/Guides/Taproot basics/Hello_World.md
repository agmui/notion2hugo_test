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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTYRLTW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPgxzPIZhXVnjgqiuP5GqKQ2DPc1LK6Qnb6a61UH9n5AiEAwZoVr3Ct8RZUQ2wyqMufzznOetsPi4esx%2FDS1g2Ei7oq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLBtVwlrnKT7yAExICrcA4JkRBX0XJELD0uYpK0osHJ3LhiJWoXtIMXDv472IxdKRe0%2FLkGGsPsSowkFn3YUpQX0Cf4%2FLmTIVZuNzAc6RSIo80KvM2HxUhrs6LpPA2nl3qSKu3pgmFNqJbFxvaeRmrplFT2WikL7e0epiNY%2B3BaYZfnvr0mcStbu%2BB9LbvhdVvMi%2Bsx3upX2aqfUieATADUfwgObAG%2FvTXXDXloBvhHU2hhzi2qey50SBfMNZsLZEEuZ5Vl9cpJd4MeiNmlJmTefbo0x8%2B%2BASym6P6hRaQ2HrjFmkHDe092HQpIZsOuKoApE4uVxDCoXTVsAzAyh08d89Mo78T0JEmM1QhKRZ9BsY4F%2Fxy2RNVwAyfrD9MhyuIiKd4pRThOtiXaz10cRNDZUXl0fMvHsw7IYTheejq8HVZMqElPse4j%2BcF8ovCOmoHycNWj1sQvOM7PTGSPV3SRK2LBzeaxq3T2wywAWMYpONsFE%2FlBy%2BsX2RkcEFaqf9u9ZXzY4ny4wLnVwoGrRieDrGo%2BQSIXvb6RcvIAyjmRafsDzFcHl%2Ba82%2Bw4%2FDf1KfzO426vb0MVCgY7p98cwL%2B6bcodvDuHKgKef2h5l%2BxMoCYg%2BLW03LeInDHAvDwHX%2FKlhkM63Y8MXsN7jMPKvrMAGOqUBulgz8c%2BJqyrVcA2XPjpbhCd%2FajIdm2MEFxkz82Yy7ZHh7PFTRPYtfv1dYMGSjpCo118n%2F4dNtWBQ7VrE1c6pKc%2BUSHETzTRKf4aVpuVNHxroHpBSOQac%2FoFExDu4Magnt64iQ2i7CPbv3NGTty%2FMEwTVru5JEzOc2LzvkXUvDN%2BoqHdXEXLrvOiPPBjy0xJ12Ucbudx48HSt5GTmH5SciJ59F22N&X-Amz-Signature=17dc65f9cb2f3a389f1ee563173f24d5eaf6350ed3a3a2e5d5f8a944c078617d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTYRLTW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPgxzPIZhXVnjgqiuP5GqKQ2DPc1LK6Qnb6a61UH9n5AiEAwZoVr3Ct8RZUQ2wyqMufzznOetsPi4esx%2FDS1g2Ei7oq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLBtVwlrnKT7yAExICrcA4JkRBX0XJELD0uYpK0osHJ3LhiJWoXtIMXDv472IxdKRe0%2FLkGGsPsSowkFn3YUpQX0Cf4%2FLmTIVZuNzAc6RSIo80KvM2HxUhrs6LpPA2nl3qSKu3pgmFNqJbFxvaeRmrplFT2WikL7e0epiNY%2B3BaYZfnvr0mcStbu%2BB9LbvhdVvMi%2Bsx3upX2aqfUieATADUfwgObAG%2FvTXXDXloBvhHU2hhzi2qey50SBfMNZsLZEEuZ5Vl9cpJd4MeiNmlJmTefbo0x8%2B%2BASym6P6hRaQ2HrjFmkHDe092HQpIZsOuKoApE4uVxDCoXTVsAzAyh08d89Mo78T0JEmM1QhKRZ9BsY4F%2Fxy2RNVwAyfrD9MhyuIiKd4pRThOtiXaz10cRNDZUXl0fMvHsw7IYTheejq8HVZMqElPse4j%2BcF8ovCOmoHycNWj1sQvOM7PTGSPV3SRK2LBzeaxq3T2wywAWMYpONsFE%2FlBy%2BsX2RkcEFaqf9u9ZXzY4ny4wLnVwoGrRieDrGo%2BQSIXvb6RcvIAyjmRafsDzFcHl%2Ba82%2Bw4%2FDf1KfzO426vb0MVCgY7p98cwL%2B6bcodvDuHKgKef2h5l%2BxMoCYg%2BLW03LeInDHAvDwHX%2FKlhkM63Y8MXsN7jMPKvrMAGOqUBulgz8c%2BJqyrVcA2XPjpbhCd%2FajIdm2MEFxkz82Yy7ZHh7PFTRPYtfv1dYMGSjpCo118n%2F4dNtWBQ7VrE1c6pKc%2BUSHETzTRKf4aVpuVNHxroHpBSOQac%2FoFExDu4Magnt64iQ2i7CPbv3NGTty%2FMEwTVru5JEzOc2LzvkXUvDN%2BoqHdXEXLrvOiPPBjy0xJ12Ucbudx48HSt5GTmH5SciJ59F22N&X-Amz-Signature=cd5106132fcda3a0f8d63c7f8c1496cb18622fe8e3348886d5be8f03c335278e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
