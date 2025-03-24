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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4NMRHW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YvWqXq35sjX1p0tRRKgVNWafiFHiGdIFGUAHI8briwIhANzwzyNKD%2B4tr2azqc0YC1eyqONxo6TTHOFQNRvv3t3lKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX1rp7GIDslUz4Eugq3ANnbI6tvb9ljeutDIU3Pi9I0uvWIuVuGXSugSD8VqQXamJZtHqoN4oQh1SzPDNt3xOk2W%2BSvy7hVZs51YHKbIdfSJG%2F32p%2BR8xtcuurIaeBsw8e5eYdUlU7YIb3eqccnqBSWtT6Jq9%2BV2X%2BTb%2BHhFB%2F7bEJt2PAcanOYB3omzYoENe2nvp3mpRHd8LNIise9ZYApORMozbt%2BsvPWw0fmFyCda6GWfuPIHqubPDvfCE%2FQZ40LrV%2BuvAoGb%2B4uMptNDmCUV4JhTJ53JXyzeSSpz0vM9cdt7F%2F4mG%2BxwismuvmgEYJXrydzwTBjJvF7EkeKM7Gg0ToW0F0fY77NwBeKVYgb1DBEPUmnRDZAkoX0bJN7BiNOgZVcu1dOpV5S%2FC2hNAsVAz85zRNoJGEQQzst6H2SfYPX%2BNM9vc1CV01EMJJUXIpRybvNDTKx4aPLs8dbQSNcj4FLsqAHTtG1QKxM1ZAGroNHQwEoZgZLkj%2Bfz5PtCMKyHd%2BeYWbMMh0Up1moiLztf%2F9KVuEn%2Bm8ik8jIECALgYX8HlGRIaQTeXn5rC%2F9BcAmP%2F9FnhhycdeMW%2B3TfCnn2tqC6jO%2FhWVkF271Kme0FK6PmgZu0ax6AUb7zpC5EbrbralusNWhrqa6jC2n4S%2FBjqkAcrA5XK0ArkPz5Gtmzpvb0bC7JVeVwQfORE9uqEFnytiH8btJmnrLAs%2FzlQunOhDIziWoDVNRO6hdR1j%2BsC6t6PL2JwA0bXpuQ0UsBf34i0YH0cmR0P1yCDJGFHC0ths1yqQYfHOaLiYVKRqILbo23BdXSSkbNKHYheenoinZDiq3mjhLl3UCZOjQB6V%2BgVj0mBhm5jPOWSSxs50MnP6RfO5GQbs&X-Amz-Signature=f1af210840cf59093e9577a3002ad0d165d17ecd163692e619d455ac8860423d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4NMRHW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7YvWqXq35sjX1p0tRRKgVNWafiFHiGdIFGUAHI8briwIhANzwzyNKD%2B4tr2azqc0YC1eyqONxo6TTHOFQNRvv3t3lKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzX1rp7GIDslUz4Eugq3ANnbI6tvb9ljeutDIU3Pi9I0uvWIuVuGXSugSD8VqQXamJZtHqoN4oQh1SzPDNt3xOk2W%2BSvy7hVZs51YHKbIdfSJG%2F32p%2BR8xtcuurIaeBsw8e5eYdUlU7YIb3eqccnqBSWtT6Jq9%2BV2X%2BTb%2BHhFB%2F7bEJt2PAcanOYB3omzYoENe2nvp3mpRHd8LNIise9ZYApORMozbt%2BsvPWw0fmFyCda6GWfuPIHqubPDvfCE%2FQZ40LrV%2BuvAoGb%2B4uMptNDmCUV4JhTJ53JXyzeSSpz0vM9cdt7F%2F4mG%2BxwismuvmgEYJXrydzwTBjJvF7EkeKM7Gg0ToW0F0fY77NwBeKVYgb1DBEPUmnRDZAkoX0bJN7BiNOgZVcu1dOpV5S%2FC2hNAsVAz85zRNoJGEQQzst6H2SfYPX%2BNM9vc1CV01EMJJUXIpRybvNDTKx4aPLs8dbQSNcj4FLsqAHTtG1QKxM1ZAGroNHQwEoZgZLkj%2Bfz5PtCMKyHd%2BeYWbMMh0Up1moiLztf%2F9KVuEn%2Bm8ik8jIECALgYX8HlGRIaQTeXn5rC%2F9BcAmP%2F9FnhhycdeMW%2B3TfCnn2tqC6jO%2FhWVkF271Kme0FK6PmgZu0ax6AUb7zpC5EbrbralusNWhrqa6jC2n4S%2FBjqkAcrA5XK0ArkPz5Gtmzpvb0bC7JVeVwQfORE9uqEFnytiH8btJmnrLAs%2FzlQunOhDIziWoDVNRO6hdR1j%2BsC6t6PL2JwA0bXpuQ0UsBf34i0YH0cmR0P1yCDJGFHC0ths1yqQYfHOaLiYVKRqILbo23BdXSSkbNKHYheenoinZDiq3mjhLl3UCZOjQB6V%2BgVj0mBhm5jPOWSSxs50MnP6RfO5GQbs&X-Amz-Signature=9a6d3a8ba76f02c5ead53aac1d06e94ebe66e50feafecfa56a09a1d00bcd76a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
