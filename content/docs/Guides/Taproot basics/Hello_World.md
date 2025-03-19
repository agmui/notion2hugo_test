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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HRQQQT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDz%2BfDmld%2B5v0%2B%2FactiNqlGfe71Q7YNAX0v3RSmh3XEyAiEAtmtZAc28c774lMAUlepPg1w6wKbCoEG8DqiMzCBvCL0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMmBpaUfk2q9Rhlr8CrcA%2FjnWvGqs67RQjK1XnFdXqIxM8jtj8vH5JirCaBgpfSmL6jVAUMLYi6QZJ05OV2gk53oATkMwto%2FRy24CrFTHvdUoZar1VVqE9ikf0dHUnxnZm7TaJIrdX54kKn%2Fe9gflihb%2BC9BNrFm3gP6GNeHWMHDOP%2FdCbmPrDPZnFsWfw9aNZgim%2BEx3yNVANv%2FA3BLT42g9XDTrpNo3QmaX4XzpYIV%2BQLPMa6%2FN94V80ewRpDhcIsW0PlkzgPXzLu7%2BjH7y9lqwQpctmBcKMIC6rvSZCP3S6Lv49AWyUzHkPFBJlYAjxq6UwKN8CCMau03VAt4sYtnqtmT0jRAPOrNIWO7U8Uek3u0ALmtvHvPiJkusf6f09mmy4DdsmguLccd5Ooz2IK4aKge4bW%2F65NrzzIB4VkITomhfOypf9dV4lXeqgb4XLwFl3CQFUYlu%2FK%2Br%2FnkxYsan1wWQf6N4fYfivAuD2Ji7oHAIpVUlMzxeH1B2KNmhmYpNMqgnQgpd07FT1zV4moaj8MXFtfpWh7W96lPBmON6oe0YzVrSEO9gMAZSU9oSCmYpXuISAzJnrob9Pb8rRZc3Kf5oDNImEFNeGa9FlbcUP4BTJQ7aWCyQ9wvrZQsTUTknkPMBg2ifv80MJLZ7L4GOqUBfHK%2FKnTMeaLesELZHCKSUvtXxFiR3ifkU7GJ0aCDj5YbCZCL%2Fbwp%2B5twBT%2FP9xOA2CK%2BejvYsBhAqx0ULBE8APHfzi6m4YNDV9PrecJ4UEBqrrBSqV6swZCdLapF4eFUe5arm6EYeIiuNFVEawexCJWfiloxxcUmdf7%2FI9CfY%2FobB0zmbtDVIoylXH7w5uobaN%2FI7V1Xd1greQbsT8oGSTisC8Wp&X-Amz-Signature=a7b8d287375b6cf66480fddc41d34a1f316c02fc96b7b7bd8444cf880844751c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6HRQQQT%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDz%2BfDmld%2B5v0%2B%2FactiNqlGfe71Q7YNAX0v3RSmh3XEyAiEAtmtZAc28c774lMAUlepPg1w6wKbCoEG8DqiMzCBvCL0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMmBpaUfk2q9Rhlr8CrcA%2FjnWvGqs67RQjK1XnFdXqIxM8jtj8vH5JirCaBgpfSmL6jVAUMLYi6QZJ05OV2gk53oATkMwto%2FRy24CrFTHvdUoZar1VVqE9ikf0dHUnxnZm7TaJIrdX54kKn%2Fe9gflihb%2BC9BNrFm3gP6GNeHWMHDOP%2FdCbmPrDPZnFsWfw9aNZgim%2BEx3yNVANv%2FA3BLT42g9XDTrpNo3QmaX4XzpYIV%2BQLPMa6%2FN94V80ewRpDhcIsW0PlkzgPXzLu7%2BjH7y9lqwQpctmBcKMIC6rvSZCP3S6Lv49AWyUzHkPFBJlYAjxq6UwKN8CCMau03VAt4sYtnqtmT0jRAPOrNIWO7U8Uek3u0ALmtvHvPiJkusf6f09mmy4DdsmguLccd5Ooz2IK4aKge4bW%2F65NrzzIB4VkITomhfOypf9dV4lXeqgb4XLwFl3CQFUYlu%2FK%2Br%2FnkxYsan1wWQf6N4fYfivAuD2Ji7oHAIpVUlMzxeH1B2KNmhmYpNMqgnQgpd07FT1zV4moaj8MXFtfpWh7W96lPBmON6oe0YzVrSEO9gMAZSU9oSCmYpXuISAzJnrob9Pb8rRZc3Kf5oDNImEFNeGa9FlbcUP4BTJQ7aWCyQ9wvrZQsTUTknkPMBg2ifv80MJLZ7L4GOqUBfHK%2FKnTMeaLesELZHCKSUvtXxFiR3ifkU7GJ0aCDj5YbCZCL%2Fbwp%2B5twBT%2FP9xOA2CK%2BejvYsBhAqx0ULBE8APHfzi6m4YNDV9PrecJ4UEBqrrBSqV6swZCdLapF4eFUe5arm6EYeIiuNFVEawexCJWfiloxxcUmdf7%2FI9CfY%2FobB0zmbtDVIoylXH7w5uobaN%2FI7V1Xd1greQbsT8oGSTisC8Wp&X-Amz-Signature=f29ee36ff2f1a9a7c915ee06f098c6c2f475f3a34cebfcc9d805acefe3aec92f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
