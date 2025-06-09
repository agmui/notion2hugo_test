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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AWXWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEqxPp3T7tJLmP3Hpc67zD57lrbrEigB%2BFgle38SuRTAiEAu71zCztQm2yyCII2ZNAORDVWbjwsnhQnhlv9EFgrJ1kqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG0c5nh9%2FBC6a%2FPeircAzBm6pRpoWO7Cg1uliCXMuXhVqmRyrKZG6bpxVSNOMizLLgWKrkYws1ZKFpQ%2BLMRfbh1Hqufhv6gXFU6lyLYk%2FsGqfT%2BCm21GDFC%2BEM7s16Jc2V2uavZk3DC222Xxr6C9XcNKlrrCIcvTB7zro%2B8si0czT%2FVLfJWJ%2BOljw%2BjaWXcGFeBf8%2FhJUvSQDERlNXMBNzvjj%2FCiTFSXy4jP3A4pXQTu4s%2F82Z2PLzqroIxjhJWveTYHxRhL3bR6SZTwbvDC5f%2BYcB41HCgJf2dkDNxxPPSGAEOJzmMkt8HkGIB3UuT0%2FITf4jPVlQDZjxE7zxNr9mZ%2B07%2BehQc0C19ECfxCjaTcd6fswzIVKd9nVNUv7975UoDpYwyM481mFQ47%2BCUdpAjblGUAfMglbeDJE8nCrpGV9XJs86agxt%2FomqwLQAt6UL2aK3f8cv0g%2BC79YD79gjJ2L3PnbwiGC8nX62CZrhINzhWWWxTyFZ55eIifrW%2FjGO9TLDDJ%2FqGMvdpWThNCZYoCvQG121cxxBl2dh2L5XHfUcSLaC2dMZ%2BcqocBKH8kudFQpvKfKalOhQDyAIrAgllCtHs3612zBpOfBZ8RphsF7FdnHVqz4kkQ6SJ%2FFN%2BZNohR%2B2l28aRbL8VMKvFncIGOqUBon5%2BYAn2a7o7XbmbK6P3TJLe7%2BgxZY48pjpNdU8xQ6VsqFmgeOM4IYrCtIMRca0QTmo8JHWv%2Flt0glvaXsDPFDGfNrbJjJEcX8vGmciEiYnZpggeMwYHIKpIuUnCDUnFSHxpLyimDpUzc6PYmMK87k387hQrQ2G9vkyPdCV08cszYHArdaT1U%2FI899zq8haJO6MRbcRsDUJd%2BxM7AAPCDf7Y4sMr&X-Amz-Signature=99dd4968ec71294ab30a37896b2411d851175ccfebdd323f8eb7555675c31626&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7AWXWI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEqxPp3T7tJLmP3Hpc67zD57lrbrEigB%2BFgle38SuRTAiEAu71zCztQm2yyCII2ZNAORDVWbjwsnhQnhlv9EFgrJ1kqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKG0c5nh9%2FBC6a%2FPeircAzBm6pRpoWO7Cg1uliCXMuXhVqmRyrKZG6bpxVSNOMizLLgWKrkYws1ZKFpQ%2BLMRfbh1Hqufhv6gXFU6lyLYk%2FsGqfT%2BCm21GDFC%2BEM7s16Jc2V2uavZk3DC222Xxr6C9XcNKlrrCIcvTB7zro%2B8si0czT%2FVLfJWJ%2BOljw%2BjaWXcGFeBf8%2FhJUvSQDERlNXMBNzvjj%2FCiTFSXy4jP3A4pXQTu4s%2F82Z2PLzqroIxjhJWveTYHxRhL3bR6SZTwbvDC5f%2BYcB41HCgJf2dkDNxxPPSGAEOJzmMkt8HkGIB3UuT0%2FITf4jPVlQDZjxE7zxNr9mZ%2B07%2BehQc0C19ECfxCjaTcd6fswzIVKd9nVNUv7975UoDpYwyM481mFQ47%2BCUdpAjblGUAfMglbeDJE8nCrpGV9XJs86agxt%2FomqwLQAt6UL2aK3f8cv0g%2BC79YD79gjJ2L3PnbwiGC8nX62CZrhINzhWWWxTyFZ55eIifrW%2FjGO9TLDDJ%2FqGMvdpWThNCZYoCvQG121cxxBl2dh2L5XHfUcSLaC2dMZ%2BcqocBKH8kudFQpvKfKalOhQDyAIrAgllCtHs3612zBpOfBZ8RphsF7FdnHVqz4kkQ6SJ%2FFN%2BZNohR%2B2l28aRbL8VMKvFncIGOqUBon5%2BYAn2a7o7XbmbK6P3TJLe7%2BgxZY48pjpNdU8xQ6VsqFmgeOM4IYrCtIMRca0QTmo8JHWv%2Flt0glvaXsDPFDGfNrbJjJEcX8vGmciEiYnZpggeMwYHIKpIuUnCDUnFSHxpLyimDpUzc6PYmMK87k387hQrQ2G9vkyPdCV08cszYHArdaT1U%2FI899zq8haJO6MRbcRsDUJd%2BxM7AAPCDf7Y4sMr&X-Amz-Signature=a42c0da54f10c179e671e0b3d8bf469ee6031b8296a123bfc2ed72d0c4af04b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
