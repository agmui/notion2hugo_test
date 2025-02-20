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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUYGSLT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBn7k4KMT6dXcJn0BqWYd1iJjV9QeCdG2hJ52E6SN7%2BAiEAyU%2BvwhL%2BWpczH8cwKonWU66dfI0HLpfnqE11k%2Bc8crYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmANOtqMqO7dGX8NircA4552jZcmHNTQr003OCZIlMLD9LDQUcAIE2MUWBpGOOh2sJ1bSOpayuN0%2B8hNu%2FonZzpcGr0NSj3VPObQU%2B3u4u5K3pZ8mUm4hDfN68lTLaigKIbzGJuoyFv7uMjOIB8Eo07%2BDts0QnBNEU8RL%2FJUls0C4ikxcqTgRiprQMPjy26TLBAo6VlkiXZHOKIDAMPEXugRm%2F5uk6avpW7MFvJ%2BedW2ZmcdQjgFkHI6Co8KPdNC2y9UPdMoUao81gzcd4OLf4c1XM2udKQUstZiiFt9sYKMM5nCd8UVQiB4uQwOLK2PRE9FcVhRu64NcJpN2zErT7pKqgAIfLqaTsNkcm1zF2DaC26Sfs1edPkFaWR3EjGzXGOOpScT8T1Gnp8GFIrSS6GYxgNuI1U3xH7mDIvr4d%2FBJ4fDWZBlwJqtyw99r%2F0Fb28oQvbK5YLNmUcoyGK2%2FwU7LnIS27uiqOEcgWe3gMTX0PqqSA0CeQJcXhhWUGvFUd4ucn0GCqW15LiMUkiHCG5YFwnboC3f%2BjbMkf%2BvrA6zKasIDx92f9Up%2BOHWkNz5%2Bb0nPW6y04J6WvBWNy5C1JCKUMWMNLqHf8TUUWmkLNOQYCvdHDlzCf0FWZIz1kKYLbTk96aMF2VDq6RMOX43L0GOqUBezGH7dPn%2FJb6wV503NSDNxqH%2FbycNvgybJgEf%2F9NCYoK8gSJMPNaUT9Evba1Itz1fU85ugEuvQ2jije0%2BWzT1IPbLgsSockAh32ETgqVpJWySd0%2BL0uyUfVmKFdIMAA7GulySAhKbj7I12S2097Gj4FpnzxTnJPd5V17aH7ZvxBr9uPCYNVdHTxaJBu23nVdTXRSJu1oc5u0LvV5%2Fbp3mX%2BeLJ6g&X-Amz-Signature=87deae1ba24333ef0b53e164d544b62a7057be8158fe4b737d13c0554beb1584&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QUYGSLT%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBn7k4KMT6dXcJn0BqWYd1iJjV9QeCdG2hJ52E6SN7%2BAiEAyU%2BvwhL%2BWpczH8cwKonWU66dfI0HLpfnqE11k%2Bc8crYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmANOtqMqO7dGX8NircA4552jZcmHNTQr003OCZIlMLD9LDQUcAIE2MUWBpGOOh2sJ1bSOpayuN0%2B8hNu%2FonZzpcGr0NSj3VPObQU%2B3u4u5K3pZ8mUm4hDfN68lTLaigKIbzGJuoyFv7uMjOIB8Eo07%2BDts0QnBNEU8RL%2FJUls0C4ikxcqTgRiprQMPjy26TLBAo6VlkiXZHOKIDAMPEXugRm%2F5uk6avpW7MFvJ%2BedW2ZmcdQjgFkHI6Co8KPdNC2y9UPdMoUao81gzcd4OLf4c1XM2udKQUstZiiFt9sYKMM5nCd8UVQiB4uQwOLK2PRE9FcVhRu64NcJpN2zErT7pKqgAIfLqaTsNkcm1zF2DaC26Sfs1edPkFaWR3EjGzXGOOpScT8T1Gnp8GFIrSS6GYxgNuI1U3xH7mDIvr4d%2FBJ4fDWZBlwJqtyw99r%2F0Fb28oQvbK5YLNmUcoyGK2%2FwU7LnIS27uiqOEcgWe3gMTX0PqqSA0CeQJcXhhWUGvFUd4ucn0GCqW15LiMUkiHCG5YFwnboC3f%2BjbMkf%2BvrA6zKasIDx92f9Up%2BOHWkNz5%2Bb0nPW6y04J6WvBWNy5C1JCKUMWMNLqHf8TUUWmkLNOQYCvdHDlzCf0FWZIz1kKYLbTk96aMF2VDq6RMOX43L0GOqUBezGH7dPn%2FJb6wV503NSDNxqH%2FbycNvgybJgEf%2F9NCYoK8gSJMPNaUT9Evba1Itz1fU85ugEuvQ2jije0%2BWzT1IPbLgsSockAh32ETgqVpJWySd0%2BL0uyUfVmKFdIMAA7GulySAhKbj7I12S2097Gj4FpnzxTnJPd5V17aH7ZvxBr9uPCYNVdHTxaJBu23nVdTXRSJu1oc5u0LvV5%2Fbp3mX%2BeLJ6g&X-Amz-Signature=ef812c7f867c5183adf5a876443fb3b3b20eb6d5b5c69fb7011dd88a0e7cf0b4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
