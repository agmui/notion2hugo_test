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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMESZPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCoElu7mLDZqviqjrnRMqzuqNxHdcARTZbpaWwFZDApfwIhAKriDodqBrBzJygSBTBuw1ePkQUirDn8xC58QFxLrzZCKv8DCHYQABoMNjM3NDIzMTgzODA1Igw2eJjQJ9yach9zg58q3APBuoTQEq1%2F%2FHCT39%2BjU4iZcFr8CYwigFwr4hVtZ9%2FAkG%2FWK6YvmUu%2FDVVgutavLpBKGMG%2BOpEs7HjKLgymfi350wU314rR%2BI6GM7uqaY1acJlbVOGUkhRlwQp1OC54LWNMM96pZGEk9yeko7nlzz1%2BIUyFxFELjFERun62T%2BeVKOowfYmzplbknEOEdY8auFOdUIBfZKx82gws5TqlZTv2%2BLPm5%2BdkYdgvPUe7NImPNTkjawa8LQowJrRO%2BpLo5Qjd0wMrFABbv6Hh0TFTQvFkGTe4CQmXGZ9yorXfm61ZxqtZYHAc4PtSaHXUs%2BuSxvPcC2zhosKogK%2FE4468o4fxLP1zWpOJJQVWSsocMy2pkhnytZJ4inp9K%2FAswK5OQ9Peq6Zw%2B5q%2BZbAL7%2FL%2BBNReb91Uw6QalaHdlBWxJ7JQALiKsVrbq5V%2BVPadyEauLU%2BdQqUsFotvpZEwDDOwBw9AqiQHbgRX0kQQf7sncX5jU2MeFv%2Bd2Q52xg92l0tXBlukyLoxJ5SMKbzK5WfD21cXZP5LwRaZngl7HUsvqlS9dh6LsKOP%2F2cIMMyphgB47xNlbM9DLQRY2QnrnDPOWWEMJMFawPsYUeGgzEpIIDEKOb55OewAZyQcSQtZRTCmpvrCBjqkAXWL9amwX7RQq6F0IjqVaXF18ZzUd3uEHP3Rw9JAZYCwiDwlq%2FxQO%2F%2BvdNyfwEgH2%2BMUIQIN7vEAqTEjjyKijDRLM0bFnkGfdMNpLpRCQrS4tKEHzKMYvaaTaxoTRNo89rHEcRIvOEfyy%2FG02MaHqdo2swuSxcjz887Uyz8nIKs8fpGhDsPohzkAQgem7CzkJejkeJn3D8KYp5ccARBulSwdS2gc&X-Amz-Signature=cb32d72a8564f341980ee66bc5123210e8f83d1e7ba1fd375b4c695fcddf7215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMESZPX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCoElu7mLDZqviqjrnRMqzuqNxHdcARTZbpaWwFZDApfwIhAKriDodqBrBzJygSBTBuw1ePkQUirDn8xC58QFxLrzZCKv8DCHYQABoMNjM3NDIzMTgzODA1Igw2eJjQJ9yach9zg58q3APBuoTQEq1%2F%2FHCT39%2BjU4iZcFr8CYwigFwr4hVtZ9%2FAkG%2FWK6YvmUu%2FDVVgutavLpBKGMG%2BOpEs7HjKLgymfi350wU314rR%2BI6GM7uqaY1acJlbVOGUkhRlwQp1OC54LWNMM96pZGEk9yeko7nlzz1%2BIUyFxFELjFERun62T%2BeVKOowfYmzplbknEOEdY8auFOdUIBfZKx82gws5TqlZTv2%2BLPm5%2BdkYdgvPUe7NImPNTkjawa8LQowJrRO%2BpLo5Qjd0wMrFABbv6Hh0TFTQvFkGTe4CQmXGZ9yorXfm61ZxqtZYHAc4PtSaHXUs%2BuSxvPcC2zhosKogK%2FE4468o4fxLP1zWpOJJQVWSsocMy2pkhnytZJ4inp9K%2FAswK5OQ9Peq6Zw%2B5q%2BZbAL7%2FL%2BBNReb91Uw6QalaHdlBWxJ7JQALiKsVrbq5V%2BVPadyEauLU%2BdQqUsFotvpZEwDDOwBw9AqiQHbgRX0kQQf7sncX5jU2MeFv%2Bd2Q52xg92l0tXBlukyLoxJ5SMKbzK5WfD21cXZP5LwRaZngl7HUsvqlS9dh6LsKOP%2F2cIMMyphgB47xNlbM9DLQRY2QnrnDPOWWEMJMFawPsYUeGgzEpIIDEKOb55OewAZyQcSQtZRTCmpvrCBjqkAXWL9amwX7RQq6F0IjqVaXF18ZzUd3uEHP3Rw9JAZYCwiDwlq%2FxQO%2F%2BvdNyfwEgH2%2BMUIQIN7vEAqTEjjyKijDRLM0bFnkGfdMNpLpRCQrS4tKEHzKMYvaaTaxoTRNo89rHEcRIvOEfyy%2FG02MaHqdo2swuSxcjz887Uyz8nIKs8fpGhDsPohzkAQgem7CzkJejkeJn3D8KYp5ccARBulSwdS2gc&X-Amz-Signature=96f36535b64f262f761dc9de07423dd891d1c87f9d47abdb7fe124d1b14f50af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
