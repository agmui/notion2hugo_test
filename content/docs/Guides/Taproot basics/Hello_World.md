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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVCXK7P%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAeclwzi7O1l7wSuWAyQsVNNLMlmfqFDAOYSXW0txj1lAiBfZeB53QgENgGjwC%2BmOzsuSswRA8h4PiyUxPeuK5DfGyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCyNcBRFwZYstUYW%2BKtwDoKUIJZaTxjo7Bab1rNY0cShRIkWbpbvyG6X8doTKQ5xe1Yu2nYG4IZUJbKbUJt1YguVDfCdP0BX7KCjC0uv1bZ1vH%2BCqnEvcOsem7%2B1czo8oxNyhTBsOqu6aOI1%2BHfv6nlNhPYKy20p2Xs7mffZBzU2LLFBfcFO5yclXzjsJmOAQ6UZnLJWHGSFLCGYRnHVYlCJQm8HUYvyHeXZGgDPqTOtfSO7H9feQ%2BtLHE1%2FmPqcy%2BdBBrxOrocwp%2BriMSj%2F2w2v0pBDRIlJ3mzwXQ4l5C8cKZ3VhpxCfd7nX6Nq7ATRZLdhEE599ZewvPb1UuO5V%2B0o7qWDuVrtgU9446p1ZEl3%2FNRH7LIOrzks4nU9U59%2FNata2wTAisJmXba%2Bny4M6cydlJIkJr4qslXAKMsja4QLGAjopcFKDz5QYa34NigmGXNeTN0utQMUa84UxSXy4M0%2Bnl%2FjDKcJQ1Xm%2BRX2LHq92lHnma%2F%2BLWhjakl%2B7pSQc1T7xPIPwBInjV1IAo3rcPD%2FT78lRWzRt5GFMe23aHHFHNttCyPjEHFq96edyzXeMqaWFyf1ThXrgN7eIqVHu59bwrT6N8y1Vzdd71V3zfrJfJ9xeu%2Ba%2FXJqrZXNs6OfBAFm2W%2BYxJhZAhgww3tnDvQY6pgHHwGZzD0o4Ui2nw1b3Qm55Rsd6I7gzUDHxdphpQtpRNuEDF3no6td6rRzfHidSYZtg5W2hUOQOiALLUXG2VSQYek%2FBvLHDlYeU4xFpmvNd1RofN%2Bq2dqCj8NWo3QAos9zQV4JCM1oPPB9pqUD6Rzk4p3VOQlbmCNtPC25zWB1UyupyyB7FFsvEDvGCWRO%2FIpJgWreUZaY86Y8YRwu8ShPwzqFEHNwx&X-Amz-Signature=452af2462b18b0366b8b747056cd5e889ede43f189c5e27c506787611552d9cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JVCXK7P%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAeclwzi7O1l7wSuWAyQsVNNLMlmfqFDAOYSXW0txj1lAiBfZeB53QgENgGjwC%2BmOzsuSswRA8h4PiyUxPeuK5DfGyr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCyNcBRFwZYstUYW%2BKtwDoKUIJZaTxjo7Bab1rNY0cShRIkWbpbvyG6X8doTKQ5xe1Yu2nYG4IZUJbKbUJt1YguVDfCdP0BX7KCjC0uv1bZ1vH%2BCqnEvcOsem7%2B1czo8oxNyhTBsOqu6aOI1%2BHfv6nlNhPYKy20p2Xs7mffZBzU2LLFBfcFO5yclXzjsJmOAQ6UZnLJWHGSFLCGYRnHVYlCJQm8HUYvyHeXZGgDPqTOtfSO7H9feQ%2BtLHE1%2FmPqcy%2BdBBrxOrocwp%2BriMSj%2F2w2v0pBDRIlJ3mzwXQ4l5C8cKZ3VhpxCfd7nX6Nq7ATRZLdhEE599ZewvPb1UuO5V%2B0o7qWDuVrtgU9446p1ZEl3%2FNRH7LIOrzks4nU9U59%2FNata2wTAisJmXba%2Bny4M6cydlJIkJr4qslXAKMsja4QLGAjopcFKDz5QYa34NigmGXNeTN0utQMUa84UxSXy4M0%2Bnl%2FjDKcJQ1Xm%2BRX2LHq92lHnma%2F%2BLWhjakl%2B7pSQc1T7xPIPwBInjV1IAo3rcPD%2FT78lRWzRt5GFMe23aHHFHNttCyPjEHFq96edyzXeMqaWFyf1ThXrgN7eIqVHu59bwrT6N8y1Vzdd71V3zfrJfJ9xeu%2Ba%2FXJqrZXNs6OfBAFm2W%2BYxJhZAhgww3tnDvQY6pgHHwGZzD0o4Ui2nw1b3Qm55Rsd6I7gzUDHxdphpQtpRNuEDF3no6td6rRzfHidSYZtg5W2hUOQOiALLUXG2VSQYek%2FBvLHDlYeU4xFpmvNd1RofN%2Bq2dqCj8NWo3QAos9zQV4JCM1oPPB9pqUD6Rzk4p3VOQlbmCNtPC25zWB1UyupyyB7FFsvEDvGCWRO%2FIpJgWreUZaY86Y8YRwu8ShPwzqFEHNwx&X-Amz-Signature=213e31dd7f7ff256bb59510ac11bca240dca98beee0966bfcf0e087ff5bc9e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
