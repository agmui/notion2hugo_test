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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773NTWDD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK2X6sepkqAowrt41ReUEEHUIiqnK03Ih1kD0US6G%2BQAiARUjkLu7GTyM8v%2F2NqdiuK%2BIB6F%2BUn5B%2BKix15bkd%2BsyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVR4fGeKMFuI9LUZKtwDOY9ZLW5m5ksklsxgCFARm%2FVQcyhOhoeWtLLzUEIybVCJQyrqfdmAU1vgVSYDhfwggO8odh8waWhgtUzydOc1dYYehLs15iYOaC7DXGRURHjLbbxoRM12neMXrlWmXjqhjvUHEBdBo%2FV2Q1h9CA69gng9bE1XUofZ%2BLSMbfUCfxZB2UadH5OOGxGvGoLOiu6OOLx6gUx8ZR7%2FOJ6QC8lcVZQeRwPT0%2FBjwKYMQlTIEbVRIAxuWiUWGUsJRyv0sJkCpIYfmlhMF0rbwLJb%2F8h4KjPLzuA%2BZK44iMLDRyXEKAL4FKTer44AhaM5m76U44l2S1DbANzPN1uvrbYCz8tcHTWGgPbv1yZ4%2BZYQVwX%2FDAh%2BCftsf8PnVhK5j2ebiyptKlWDRl%2BrU9sSH7h3w5VxhEvyotDtkTeeigM5JcKh8MW7BOoUPHJvEtxXCAxfDCSwtQfsYDVyFg%2F5gZloWIZ6jw%2BMfk6MbvUd5ncglbbl9SF0fM3mV57cw%2F93rfzXqXwTaW3QMUSi%2Fvt5%2Bs8noCVm%2B45yZ%2B%2B5z7QFTnpLl3K7wGs%2FaZfJrP1oQNXiXaodvfXkVjAxfY027odq0VNnZUn6vKB%2BTmDNzPtdODm77qWjX6Z0ZNCanHyIh8w%2BG0Ew1r%2F9vAY6pgGnjaUSo39peOa9CSyZUe94QoNjyy%2FWv98UgCMHqKA3zidQPBkPeEon8Jlsax0miEVEdr3dkrJdMluPMjxdDwiGlNLvfBSVYUEoxCWwt1jLqOhusFFNw7jazeRCw%2B%2BAgNb5qEzizSEuuNzoVlcVP%2F6%2Fl37Fy2ABHyACeEJV6VvW1efVQLdFQRVSsG2zUq15dcJPiHgwmu8jtszwu1LsMqmb2HpOehyN&X-Amz-Signature=23ee80f61db3ff822659e3bb65171eb980b0e7c28359cf93419cc5084be398b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773NTWDD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK2X6sepkqAowrt41ReUEEHUIiqnK03Ih1kD0US6G%2BQAiARUjkLu7GTyM8v%2F2NqdiuK%2BIB6F%2BUn5B%2BKix15bkd%2BsyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHVR4fGeKMFuI9LUZKtwDOY9ZLW5m5ksklsxgCFARm%2FVQcyhOhoeWtLLzUEIybVCJQyrqfdmAU1vgVSYDhfwggO8odh8waWhgtUzydOc1dYYehLs15iYOaC7DXGRURHjLbbxoRM12neMXrlWmXjqhjvUHEBdBo%2FV2Q1h9CA69gng9bE1XUofZ%2BLSMbfUCfxZB2UadH5OOGxGvGoLOiu6OOLx6gUx8ZR7%2FOJ6QC8lcVZQeRwPT0%2FBjwKYMQlTIEbVRIAxuWiUWGUsJRyv0sJkCpIYfmlhMF0rbwLJb%2F8h4KjPLzuA%2BZK44iMLDRyXEKAL4FKTer44AhaM5m76U44l2S1DbANzPN1uvrbYCz8tcHTWGgPbv1yZ4%2BZYQVwX%2FDAh%2BCftsf8PnVhK5j2ebiyptKlWDRl%2BrU9sSH7h3w5VxhEvyotDtkTeeigM5JcKh8MW7BOoUPHJvEtxXCAxfDCSwtQfsYDVyFg%2F5gZloWIZ6jw%2BMfk6MbvUd5ncglbbl9SF0fM3mV57cw%2F93rfzXqXwTaW3QMUSi%2Fvt5%2Bs8noCVm%2B45yZ%2B%2B5z7QFTnpLl3K7wGs%2FaZfJrP1oQNXiXaodvfXkVjAxfY027odq0VNnZUn6vKB%2BTmDNzPtdODm77qWjX6Z0ZNCanHyIh8w%2BG0Ew1r%2F9vAY6pgGnjaUSo39peOa9CSyZUe94QoNjyy%2FWv98UgCMHqKA3zidQPBkPeEon8Jlsax0miEVEdr3dkrJdMluPMjxdDwiGlNLvfBSVYUEoxCWwt1jLqOhusFFNw7jazeRCw%2B%2BAgNb5qEzizSEuuNzoVlcVP%2F6%2Fl37Fy2ABHyACeEJV6VvW1efVQLdFQRVSsG2zUq15dcJPiHgwmu8jtszwu1LsMqmb2HpOehyN&X-Amz-Signature=208ce45e99a96e8ce65458c0aa5d7a97594e19921c8e3cb6a1fb67acdf16b613&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
