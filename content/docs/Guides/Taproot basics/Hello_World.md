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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVEDP32%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfrs0DZDsgZTY5oKIMaSd99NAMFTrQ6cfOs3HBOpz3FwIgKrmXvTcxNiVUD%2BWM7%2FdRatTTRG9mfOuLEUBLjeKBHYYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDU8yQwkCxTEekCsuircAygq38hrhBVyg2UOCH9XhMNqYFgPzMpbm8wfU0NBP1Ak49SPZeND88xdnXQZZHDPEn6rUKux1YgPWPb77L7HCQdeCyYZS36yyokkhe4V4gP99Q07zthLzlq8VItNFZWiM%2FdkC1nAL%2FVBE6oUuZOjU3OulAZWK%2FDNtXVmZlksNGHShsh2JAXDtTXR47Kccmsjub9T9ZuKp07ZTspsOEE80Xbw7kTj6r8WtLh50niMj8f7kUkaGOLrRvjxpHVrB2WWuSkcV4BqqQJzFNwevQepJE32JEBx8h55rSUVJ%2B6TPWCtR3YA%2Bt%2BwYUXR2tVGebqcTC0l70pr5r0B%2Bo%2F75k2h5Gzok4rIu6%2F%2B6s%2Bqiqi6o%2F4eqqts%2FODfGVW0GyGCi%2BhZ1TULEltIICav7lhyy1s1VuzXgrTBN0RbGGExGSLv%2B2v5wijJ7msi%2F1spYDpY%2BdSl8V1W4C6p%2BrLoJOq0M9pjv3parW6j%2Bq6x8haJNC6lzbk%2FUgJRpnOTic8QHi8Jtv3rgNDiFShf6jYTPtk3IlRoeyhNExV%2BLlnW81bckuFuUO1qZmpeuQ63VlSF934XqvhsFBX4%2B5grcTnP6sLCy6fTWlkpgBXsIen0eX0oscugrTKUNSQbEROk2%2FtK8Y%2FMMKrR2MkGOqUBDbh1AK0rSk6rVOuSiDIz7Nz4NBNQ8ncgygBNHmrFHoavSBJqub3LNrt%2B5eQyPXZwjPJ30QVBkU3bf%2Fy7HK8enW6sOlKF8ntjXz%2Fu7vf5KUG907c8FmTvfD5O7YuWaRzMN%2B1OZdjb59gOikG1kKkgLbMOabnLprWBYiPQMJUUNmxsC2hfRTeTbNwiPrWGEvK4QrLdSEaacykZYWqwrv63ei%2FRosIc&X-Amz-Signature=cda02c4f7ae0fac0744318ead6044bf63383fc17dd1390d3bdb955359db37310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CVEDP32%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfrs0DZDsgZTY5oKIMaSd99NAMFTrQ6cfOs3HBOpz3FwIgKrmXvTcxNiVUD%2BWM7%2FdRatTTRG9mfOuLEUBLjeKBHYYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDU8yQwkCxTEekCsuircAygq38hrhBVyg2UOCH9XhMNqYFgPzMpbm8wfU0NBP1Ak49SPZeND88xdnXQZZHDPEn6rUKux1YgPWPb77L7HCQdeCyYZS36yyokkhe4V4gP99Q07zthLzlq8VItNFZWiM%2FdkC1nAL%2FVBE6oUuZOjU3OulAZWK%2FDNtXVmZlksNGHShsh2JAXDtTXR47Kccmsjub9T9ZuKp07ZTspsOEE80Xbw7kTj6r8WtLh50niMj8f7kUkaGOLrRvjxpHVrB2WWuSkcV4BqqQJzFNwevQepJE32JEBx8h55rSUVJ%2B6TPWCtR3YA%2Bt%2BwYUXR2tVGebqcTC0l70pr5r0B%2Bo%2F75k2h5Gzok4rIu6%2F%2B6s%2Bqiqi6o%2F4eqqts%2FODfGVW0GyGCi%2BhZ1TULEltIICav7lhyy1s1VuzXgrTBN0RbGGExGSLv%2B2v5wijJ7msi%2F1spYDpY%2BdSl8V1W4C6p%2BrLoJOq0M9pjv3parW6j%2Bq6x8haJNC6lzbk%2FUgJRpnOTic8QHi8Jtv3rgNDiFShf6jYTPtk3IlRoeyhNExV%2BLlnW81bckuFuUO1qZmpeuQ63VlSF934XqvhsFBX4%2B5grcTnP6sLCy6fTWlkpgBXsIen0eX0oscugrTKUNSQbEROk2%2FtK8Y%2FMMKrR2MkGOqUBDbh1AK0rSk6rVOuSiDIz7Nz4NBNQ8ncgygBNHmrFHoavSBJqub3LNrt%2B5eQyPXZwjPJ30QVBkU3bf%2Fy7HK8enW6sOlKF8ntjXz%2Fu7vf5KUG907c8FmTvfD5O7YuWaRzMN%2B1OZdjb59gOikG1kKkgLbMOabnLprWBYiPQMJUUNmxsC2hfRTeTbNwiPrWGEvK4QrLdSEaacykZYWqwrv63ei%2FRosIc&X-Amz-Signature=df622acfb5a0a7a804f85425081e8afd5e8f20f68baf18b65fb97f82bfbbf6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
