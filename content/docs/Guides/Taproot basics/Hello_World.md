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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQI6GDFW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5vn8EtJQYnRte3TInIBXC2AgHuUIsMFNKevyI%2BtMJiAiEAgEHN2rTiTY1iEdxJaoWpHAvNM1nOPE8PUDtby%2BLA9fMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP3VH9TA8kW2TU7K%2ByrcAz%2BO4U6F%2BY53np0cwuxkItjR1B84YBoJQHaSOf%2B%2FPpBixv3cjbRuQGS3qfSiHIc1uDVgyiZb0FKY1HEGKyjbfaA%2Bc%2BUBs6BvxLRskeyhjcKt3vfzX8HRJEOTKP1VXbL6JtU38XSqNZaRc0Y3De1AT8vX09NA79xcxC3fBbDUiq%2B%2F89tjlV9a5GVky26lmYNKpq8UoebImP6OgDmZE%2Bhkmft44XlWRisTDsCbZw9lTOMn7lLDRjKUbiNq2McP479MwM9KBG8kp7KblZXhWYq15XFlKMh3CgsK7G8ykR0Jy3h50xEzHMDrmE8w%2BnVOGUKWY%2BYIroR8NWDtCm4XbWK7VRrdgHikFOSncgQWilcfmpRt%2F6437yi8ySPgYKbQUjAErIHPPpR4%2B4LugJPrWEULjCyQV04hFWseP2xR9SvN5UhcPwFf3GliXt0rwiqUFY%2FlMPPTsl8dQLxhYUfHXa96vbG13YAA6yQnlbc4enYuIT10GEkDwTMT%2FWTyECkrk4oTDPfHxhYdhVHJ4hETSOLCz0GG31rrpppNEUNn%2BIQzEQwzT7Q3qSE%2FhfjYfnvwCkCFwzc2XxwWJF6QQ4KZH9i32CXx4YqvadT9CTbyI7OpYggphRPzATruWaghoTc6MPaKusAGOqUBmVe8f4%2B8YYWaVvuDSE1c1PpydIvVOY3X1VF680MH25m%2BPojjb9gtcDcXcKx%2BrhpAfc6IDz0%2FdJJtdW%2Bq2oq0y%2FdA55qX3pPjdEhayaLvpgo4D8Z7ah4qGXg7%2BtsFsbCXJwhAqVDzS%2Fw0kFaMZhP2YLjgeEKt%2BOk5UR1lkzo98KMoFvC%2B3yQr0OFJYKdsCPiHUJ6ybWp5J2pg1DLDLpSFew1uaBYP&X-Amz-Signature=d6687854dc3e6a2df2f3b25eb63cdef7c63190dcdad9cff42c2f8e32ab8506c0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQI6GDFW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T230742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5vn8EtJQYnRte3TInIBXC2AgHuUIsMFNKevyI%2BtMJiAiEAgEHN2rTiTY1iEdxJaoWpHAvNM1nOPE8PUDtby%2BLA9fMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDP3VH9TA8kW2TU7K%2ByrcAz%2BO4U6F%2BY53np0cwuxkItjR1B84YBoJQHaSOf%2B%2FPpBixv3cjbRuQGS3qfSiHIc1uDVgyiZb0FKY1HEGKyjbfaA%2Bc%2BUBs6BvxLRskeyhjcKt3vfzX8HRJEOTKP1VXbL6JtU38XSqNZaRc0Y3De1AT8vX09NA79xcxC3fBbDUiq%2B%2F89tjlV9a5GVky26lmYNKpq8UoebImP6OgDmZE%2Bhkmft44XlWRisTDsCbZw9lTOMn7lLDRjKUbiNq2McP479MwM9KBG8kp7KblZXhWYq15XFlKMh3CgsK7G8ykR0Jy3h50xEzHMDrmE8w%2BnVOGUKWY%2BYIroR8NWDtCm4XbWK7VRrdgHikFOSncgQWilcfmpRt%2F6437yi8ySPgYKbQUjAErIHPPpR4%2B4LugJPrWEULjCyQV04hFWseP2xR9SvN5UhcPwFf3GliXt0rwiqUFY%2FlMPPTsl8dQLxhYUfHXa96vbG13YAA6yQnlbc4enYuIT10GEkDwTMT%2FWTyECkrk4oTDPfHxhYdhVHJ4hETSOLCz0GG31rrpppNEUNn%2BIQzEQwzT7Q3qSE%2FhfjYfnvwCkCFwzc2XxwWJF6QQ4KZH9i32CXx4YqvadT9CTbyI7OpYggphRPzATruWaghoTc6MPaKusAGOqUBmVe8f4%2B8YYWaVvuDSE1c1PpydIvVOY3X1VF680MH25m%2BPojjb9gtcDcXcKx%2BrhpAfc6IDz0%2FdJJtdW%2Bq2oq0y%2FdA55qX3pPjdEhayaLvpgo4D8Z7ah4qGXg7%2BtsFsbCXJwhAqVDzS%2Fw0kFaMZhP2YLjgeEKt%2BOk5UR1lkzo98KMoFvC%2B3yQr0OFJYKdsCPiHUJ6ybWp5J2pg1DLDLpSFew1uaBYP&X-Amz-Signature=e57e3b9072f8519470a0865c3478210b90bcc47490ec1b912d91beb488d3a784&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
