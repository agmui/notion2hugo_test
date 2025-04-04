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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T4UVHY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sIpmT6SExkru7W0sunq%2FuxzMbdbuMM1aTfJ8cDU16AIgcGru6XzPo%2FK%2BrISzJXFDOYjPcftb%2BJ3fsjF7pIPD41QqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Uun7x0r7O%2BQbybircA7D0wUSilmKGO9kYDS%2FL3gTAZdVl9ibhWIVt5eWcca5MMASAkcoCN19yqifoxKgbYTpDNYhH%2BeLREe4PQW6c670a8ZZfpIvN5VIHTcIKSONJWtl6gGiMp6HD94lX6MLwIHvFweuDNknGQvkSQ5ctupmD2j2FqmYWF9bmOKhDpvNJRi5dc5t6Eza%2BDRUvcT2sjdAXT1KsiylJChnd8Edn2iUtwypSmsA6qcZ0tFmcHVOS0%2BvBqztQXIExHyOGwg%2BTREzVHSzrs%2BWVL5YO%2B%2BlSv0ffYXWuQfiFzIMTVxcuK%2FKGcD4CeA45YLgk3Vqw%2BrO%2F69CsMoL5W%2BzG81K6XvK9ZxGBZamKbYJZYh7YRmAEG5SW5PD40bVxVQxCzo0dP5PBoealYaCeBfIeNkUhnKep5p9avP6wyJh8CIizW4D3lzrM2QZbYhCmuf7AmVs79x8x1q3Lhd2btzuw6qw4GNWvinZfUinmaqoZOnjX5yIN9TKdiQAnMBrJYFNe0gYktmZxmob81ocSMVgYu5CN6w68j64WvPtmIZXXMVAn%2BjlD8RqonV0nH9hVSyWaL4qdtDAfKdRhvItcJVkgeyvpWvSuP5Ekcy03PtpPchTbFtTjUfNC7LItYFuJXDuBlzxmMPSBvb8GOqUBT%2Bamu4ZQuo%2Bvlrc4zQM%2FTm3aiPio%2FzYVWUhmBc3ewMa6wZr4FUzlhA4wRzsakaNV%2FrAGIcin3ZeK4w0sVxH9X7ybOqsZfHXuTgcQ3xq67xE0GvbApS0975PB24%2F3gLJ6NjjSpq2Oc6Z9%2FYTI1pwXuZX5XNfdKSd5TYNkUkkzffibAhjlm8GSvOb82IIxWjR8kx%2FpxNf9QHsGKAN12RrQt7%2BLUAhd&X-Amz-Signature=274203ed47d75842875840260ef3a4ee1961e687efd6c895d87ce26613c45e85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7T4UVHY%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T032400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6sIpmT6SExkru7W0sunq%2FuxzMbdbuMM1aTfJ8cDU16AIgcGru6XzPo%2FK%2BrISzJXFDOYjPcftb%2BJ3fsjF7pIPD41QqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Uun7x0r7O%2BQbybircA7D0wUSilmKGO9kYDS%2FL3gTAZdVl9ibhWIVt5eWcca5MMASAkcoCN19yqifoxKgbYTpDNYhH%2BeLREe4PQW6c670a8ZZfpIvN5VIHTcIKSONJWtl6gGiMp6HD94lX6MLwIHvFweuDNknGQvkSQ5ctupmD2j2FqmYWF9bmOKhDpvNJRi5dc5t6Eza%2BDRUvcT2sjdAXT1KsiylJChnd8Edn2iUtwypSmsA6qcZ0tFmcHVOS0%2BvBqztQXIExHyOGwg%2BTREzVHSzrs%2BWVL5YO%2B%2BlSv0ffYXWuQfiFzIMTVxcuK%2FKGcD4CeA45YLgk3Vqw%2BrO%2F69CsMoL5W%2BzG81K6XvK9ZxGBZamKbYJZYh7YRmAEG5SW5PD40bVxVQxCzo0dP5PBoealYaCeBfIeNkUhnKep5p9avP6wyJh8CIizW4D3lzrM2QZbYhCmuf7AmVs79x8x1q3Lhd2btzuw6qw4GNWvinZfUinmaqoZOnjX5yIN9TKdiQAnMBrJYFNe0gYktmZxmob81ocSMVgYu5CN6w68j64WvPtmIZXXMVAn%2BjlD8RqonV0nH9hVSyWaL4qdtDAfKdRhvItcJVkgeyvpWvSuP5Ekcy03PtpPchTbFtTjUfNC7LItYFuJXDuBlzxmMPSBvb8GOqUBT%2Bamu4ZQuo%2Bvlrc4zQM%2FTm3aiPio%2FzYVWUhmBc3ewMa6wZr4FUzlhA4wRzsakaNV%2FrAGIcin3ZeK4w0sVxH9X7ybOqsZfHXuTgcQ3xq67xE0GvbApS0975PB24%2F3gLJ6NjjSpq2Oc6Z9%2FYTI1pwXuZX5XNfdKSd5TYNkUkkzffibAhjlm8GSvOb82IIxWjR8kx%2FpxNf9QHsGKAN12RrQt7%2BLUAhd&X-Amz-Signature=fa9045b898777f6bf792da15961e2b8a74d715390f02cf09ca0104bffd731ace&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
