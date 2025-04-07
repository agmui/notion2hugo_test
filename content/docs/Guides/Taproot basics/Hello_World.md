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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647R3NARL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYyaUqT%2B3gPMABVy20mWrsyi2rtmM3Nyfs9PjkdbM1%2FAiEAhqzvg3pVAvNgnRKDRluSewpHvF2OMcRLesZVcX2b%2BCkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCv7lEieZZl5bNHpRSrcA9BVp2rx9zDhfXJS0%2BPwFtWYCx0b56Wvm0B1nQUwbiasCU4V3BMfSpCBBrfFEHI9dKHauMVgbKc%2B1WW9T1yx7rcnAANqiO%2BPsATAtxG1PgbEwGKHAvML9tcJZnVAtY%2BsXjzmlhOD6Xj%2F245%2FfeqT9KJVgzZvzRpfKnmqdLK3RSKecPerBucPmbAhxX1q7RaVFMSeimL5EmMM%2FtvHyjOpHLA4kZ8nQSkZETh7r%2FxAq6G%2B2KR26FVEavOPSBrP6ZwboNT5fNy329%2F%2F%2FdpvzuOYl2KANbNdcYKKn%2BJgahH5Xzg7yY19McQMlPjsvAVd88NrHrXgBW%2FwUmvnd90GlRJarpSEF%2FlTxuAdAjEazIipIRSxKTW6DGRCeLu%2FzpgdU%2FOohZbvrAXtgEwiXhn2lSYaoTCbY3aoNdM7AovEg8ggh4uzAHr5u7G2IfMjL80SvjEofiRhmVKXeG7tnqLmC22IA6PAVpJE%2FKAGcAhgo47g8h0lRqychxz1ZyUTGfbgfHaU8ni2vFL%2BalxV6KoqcARiGz4TDGTEsoeW4ug%2FLQXjsRZVFijfYWgYmmGIFgur%2FwOxefyhJsTpiP%2FiqrcO%2Bnx8m2SIP4kejbArKdRsy1QKNl2GWWKbifHQtZ9colLOMITsz78GOqUBF0GEAzdz0l9lKFFCVDPnzARf9kjANT%2B2j%2Fc11A%2BvO8HEsyOSh7%2BCCk6rzF0Iacl6danFGsuIXMg7prtOTc7CkRQJVIKE2sZES7pqojTLWKg05RiQHw%2Bb%2Fxi7MswDHOlDB3qWlTI5gJGvvtN0raBCdm6G837zqy9XWHMmYPJXqNvc1qAbQecMsqvFUxrRjQs1vVFhjm%2BdJ4uQN8bZMAaB0dnpAFR1&X-Amz-Signature=bc705075e98a77b882a4d75e78fa401e82d8c6c223a4ec2609f6f7c9bfb6f215&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647R3NARL%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBYyaUqT%2B3gPMABVy20mWrsyi2rtmM3Nyfs9PjkdbM1%2FAiEAhqzvg3pVAvNgnRKDRluSewpHvF2OMcRLesZVcX2b%2BCkq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCv7lEieZZl5bNHpRSrcA9BVp2rx9zDhfXJS0%2BPwFtWYCx0b56Wvm0B1nQUwbiasCU4V3BMfSpCBBrfFEHI9dKHauMVgbKc%2B1WW9T1yx7rcnAANqiO%2BPsATAtxG1PgbEwGKHAvML9tcJZnVAtY%2BsXjzmlhOD6Xj%2F245%2FfeqT9KJVgzZvzRpfKnmqdLK3RSKecPerBucPmbAhxX1q7RaVFMSeimL5EmMM%2FtvHyjOpHLA4kZ8nQSkZETh7r%2FxAq6G%2B2KR26FVEavOPSBrP6ZwboNT5fNy329%2F%2F%2FdpvzuOYl2KANbNdcYKKn%2BJgahH5Xzg7yY19McQMlPjsvAVd88NrHrXgBW%2FwUmvnd90GlRJarpSEF%2FlTxuAdAjEazIipIRSxKTW6DGRCeLu%2FzpgdU%2FOohZbvrAXtgEwiXhn2lSYaoTCbY3aoNdM7AovEg8ggh4uzAHr5u7G2IfMjL80SvjEofiRhmVKXeG7tnqLmC22IA6PAVpJE%2FKAGcAhgo47g8h0lRqychxz1ZyUTGfbgfHaU8ni2vFL%2BalxV6KoqcARiGz4TDGTEsoeW4ug%2FLQXjsRZVFijfYWgYmmGIFgur%2FwOxefyhJsTpiP%2FiqrcO%2Bnx8m2SIP4kejbArKdRsy1QKNl2GWWKbifHQtZ9colLOMITsz78GOqUBF0GEAzdz0l9lKFFCVDPnzARf9kjANT%2B2j%2Fc11A%2BvO8HEsyOSh7%2BCCk6rzF0Iacl6danFGsuIXMg7prtOTc7CkRQJVIKE2sZES7pqojTLWKg05RiQHw%2Bb%2Fxi7MswDHOlDB3qWlTI5gJGvvtN0raBCdm6G837zqy9XWHMmYPJXqNvc1qAbQecMsqvFUxrRjQs1vVFhjm%2BdJ4uQN8bZMAaB0dnpAFR1&X-Amz-Signature=53dee0850776cf13d7f9caceedd2f2001416d251524fde834dba2bed0cf09f09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
