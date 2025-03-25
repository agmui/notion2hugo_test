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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGJGSUD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB29iDx4hmquKLJnKVbJ1Esyc%2FLzUPXoedrRjod67aMXAiEAyM%2BD5oDv%2FN7seKKZqo6PNXorAAQ8a01fe1xoxLKJRQAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI%2FqrRdpOEV4GYPPxircA5ZP1R4vlhGnkLNLgQEl0O9mBTic0WNQ6chtjnMMTlvF7KUM%2BmTGsr2WkarMSkq1jWn2WtQx0KN4Sy7lANN6RVJ4xbBwVpt5w0O2fMPJozfZLtLBOg%2FZZDAqWIKerHDbxdyew5XkV95wFJLqk7uJk1MdLhISlHJaMWxri0m2HSNRz%2FH7jI4wD9TdznhmiyTjD7sX6J%2BX%2BimBbhZlh20aILhVdzIBwNnc%2Fd8KE7RlOyyJPSTUZfjBhUQYAJ70AFtYTKpsW%2FoskjOHBYWfNS4AUK1uZbthj3AgaJEutVIjryqcqT9KqOtAcjd2pqr9Q8aP4MM2BrkAzIw10xhoHieOWi3yaRg9KRoXyz7crgJYm1LOrEtCxRhxqQw%2Fn%2Fa0nVr0IXYtihQHg%2B3EzgdcHwwB7zBN4lnJepB5su25php3XirIl7H3elJIrD8Ns1gy0DPbYLoJuzjst6aZglhxMK%2BheMHehfo2ooypVJrs2THVhNxluYijE46N295ycQnyHV7ROMQa5Xx%2BF2kz2Y6zT3tribzEbUImjTtw2OnbpRy6EF7Y4Svq3zKCtINZK%2FKGz6xNnPUOpty%2B8pZPjPul01%2B1B3xgv9LNMkWwApD1qLvh6E4WdUxMiSTOwQi5VhnUMO%2Bnir8GOqUBhUAqbZzfyQYXE0r5HMEgrcP%2FeGy%2FuHTyQ0Fh31dBgV2HKPxdU0DAVogmcQgylv47KZ%2FcnN8s6i8BfcXr4iTlTZp%2FBXfAmUsT9HXE%2BxG5V%2FCpqSxnH1zFeEUXmTdqVi76oMB33c3wcNXKxFcBLuNgoiXh3HNfabyKAke7E3Sfdxgb0s5Ss0B6zfFcynPLr9T%2B8vdqadKewIJq1dNgrPixX178kb7R&X-Amz-Signature=2e0356e697ca5e49e6e3273c1f037286d94e31e844f6bf9f89231bd7f04a50ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QGJGSUD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB29iDx4hmquKLJnKVbJ1Esyc%2FLzUPXoedrRjod67aMXAiEAyM%2BD5oDv%2FN7seKKZqo6PNXorAAQ8a01fe1xoxLKJRQAq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDI%2FqrRdpOEV4GYPPxircA5ZP1R4vlhGnkLNLgQEl0O9mBTic0WNQ6chtjnMMTlvF7KUM%2BmTGsr2WkarMSkq1jWn2WtQx0KN4Sy7lANN6RVJ4xbBwVpt5w0O2fMPJozfZLtLBOg%2FZZDAqWIKerHDbxdyew5XkV95wFJLqk7uJk1MdLhISlHJaMWxri0m2HSNRz%2FH7jI4wD9TdznhmiyTjD7sX6J%2BX%2BimBbhZlh20aILhVdzIBwNnc%2Fd8KE7RlOyyJPSTUZfjBhUQYAJ70AFtYTKpsW%2FoskjOHBYWfNS4AUK1uZbthj3AgaJEutVIjryqcqT9KqOtAcjd2pqr9Q8aP4MM2BrkAzIw10xhoHieOWi3yaRg9KRoXyz7crgJYm1LOrEtCxRhxqQw%2Fn%2Fa0nVr0IXYtihQHg%2B3EzgdcHwwB7zBN4lnJepB5su25php3XirIl7H3elJIrD8Ns1gy0DPbYLoJuzjst6aZglhxMK%2BheMHehfo2ooypVJrs2THVhNxluYijE46N295ycQnyHV7ROMQa5Xx%2BF2kz2Y6zT3tribzEbUImjTtw2OnbpRy6EF7Y4Svq3zKCtINZK%2FKGz6xNnPUOpty%2B8pZPjPul01%2B1B3xgv9LNMkWwApD1qLvh6E4WdUxMiSTOwQi5VhnUMO%2Bnir8GOqUBhUAqbZzfyQYXE0r5HMEgrcP%2FeGy%2FuHTyQ0Fh31dBgV2HKPxdU0DAVogmcQgylv47KZ%2FcnN8s6i8BfcXr4iTlTZp%2FBXfAmUsT9HXE%2BxG5V%2FCpqSxnH1zFeEUXmTdqVi76oMB33c3wcNXKxFcBLuNgoiXh3HNfabyKAke7E3Sfdxgb0s5Ss0B6zfFcynPLr9T%2B8vdqadKewIJq1dNgrPixX178kb7R&X-Amz-Signature=d9f603bf5322fc6d374fc010f4a156346fb25f351a0043e5ad5f7b6d561adcc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
