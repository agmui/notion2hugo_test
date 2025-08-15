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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OHCPEZY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA5JdTRYTC40cnI7gdA5kFLFhe74BFFhc892F3l5y2rVAiEApe0T9Y%2Be8wDedrHbjMA8gcGROjYeLEvZi8uI%2FMADiosq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIN7R%2F4kke9FMkyO8CrcAz2SpLWxqQvB0pwuZyRjDahidCmBb6QSvURWGCwm0ohVBQPLQSVwb9kW%2FKlE0U2ASFilXHkgqX%2F0Te2zkF6EbYsKt8mjLvNpvckFY1HCLl3EcNz5hMPTUAArGVxYa2uNQf0UDUopKUszHEm0xCJVj8HpGwNHs%2BcsQBD2iWMSRvLL1gtOEw7mZEDevV0iQdYLijLwUulYvQP56gKmaB6sdKGdnbleWC4WLR9ac5EfZpw53yXLaI3P%2B3zZsPFqHVgDEwbu1a3VKA9FzHkE4HrCU65TasnjjSNfuk5DAd6Q8nbDnYY5I42AXdhmnhSS3GqNMtv9ccfCzyZvc5uHqtctJFPXuYwvHnGFg3YLJ7lyx8JGDuHNT%2By5vzjfsNlUsXSOHM14AeZ0m8dKE3Af3bqmm3eRTHYgg77DBpjdDfGktCtihopInILlOGXs6P4DbX9HuOlY7Fx7KYvazTgtIzQI%2FSbqLdGhbt02x3370GaEeDVi31hBaOUZb1Duo4kVPn0ADtHlpZgAMDdI49SmEL7F8ShOnmGP0i63OtESIlHa7SuXYxoLAqJO1K5aJH5ym6DG9aVVIQ2UdHtvp9HRtcUsyDItlYcYEstfiMdnIXTqPw3K1OUKI2HexTFmiUNFMMfb%2FcQGOqUBZf%2FG7Xa2btAOCicD3lJlqlzlZliNPGNylVe6qqfJxVj9GVCLiCk3OLGaMw3mNADA5yphPyEKFYgPw5MSmba%2FHvod8pxecMXVzJrA4wQxIZDQ3V%2FpPJsqmnAjSaRxr1vAjK6gZmOZnjPHcMkinoySSytLdMXJzfWY5KE3sqnKzJ5uoHpRLCHtZ9Ti91dC61kGUf0EwHoFUnYIqKLkMsCgSTmjpAYA&X-Amz-Signature=47b8c1a727971816bd5e72727aebabb025726b87500bfb558f671ac6b437e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OHCPEZY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIA5JdTRYTC40cnI7gdA5kFLFhe74BFFhc892F3l5y2rVAiEApe0T9Y%2Be8wDedrHbjMA8gcGROjYeLEvZi8uI%2FMADiosq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIN7R%2F4kke9FMkyO8CrcAz2SpLWxqQvB0pwuZyRjDahidCmBb6QSvURWGCwm0ohVBQPLQSVwb9kW%2FKlE0U2ASFilXHkgqX%2F0Te2zkF6EbYsKt8mjLvNpvckFY1HCLl3EcNz5hMPTUAArGVxYa2uNQf0UDUopKUszHEm0xCJVj8HpGwNHs%2BcsQBD2iWMSRvLL1gtOEw7mZEDevV0iQdYLijLwUulYvQP56gKmaB6sdKGdnbleWC4WLR9ac5EfZpw53yXLaI3P%2B3zZsPFqHVgDEwbu1a3VKA9FzHkE4HrCU65TasnjjSNfuk5DAd6Q8nbDnYY5I42AXdhmnhSS3GqNMtv9ccfCzyZvc5uHqtctJFPXuYwvHnGFg3YLJ7lyx8JGDuHNT%2By5vzjfsNlUsXSOHM14AeZ0m8dKE3Af3bqmm3eRTHYgg77DBpjdDfGktCtihopInILlOGXs6P4DbX9HuOlY7Fx7KYvazTgtIzQI%2FSbqLdGhbt02x3370GaEeDVi31hBaOUZb1Duo4kVPn0ADtHlpZgAMDdI49SmEL7F8ShOnmGP0i63OtESIlHa7SuXYxoLAqJO1K5aJH5ym6DG9aVVIQ2UdHtvp9HRtcUsyDItlYcYEstfiMdnIXTqPw3K1OUKI2HexTFmiUNFMMfb%2FcQGOqUBZf%2FG7Xa2btAOCicD3lJlqlzlZliNPGNylVe6qqfJxVj9GVCLiCk3OLGaMw3mNADA5yphPyEKFYgPw5MSmba%2FHvod8pxecMXVzJrA4wQxIZDQ3V%2FpPJsqmnAjSaRxr1vAjK6gZmOZnjPHcMkinoySSytLdMXJzfWY5KE3sqnKzJ5uoHpRLCHtZ9Ti91dC61kGUf0EwHoFUnYIqKLkMsCgSTmjpAYA&X-Amz-Signature=29004bc0badf0da39cfc2f3506703de39d4e497dd7f83ea1f375db275d472679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
