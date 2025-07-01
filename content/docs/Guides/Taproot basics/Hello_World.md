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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5X6XQYS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmrHeLdjY8uKqzekJFFtD1aYJfeiE2pk4DNwu%2BxvR8JwIgTJxha9hJgTvQtjO4BO%2BVKaCaVtlAmrzBwcL7JHT5YnYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIBxus4N6RsdnEC8ircA2a%2BKcx5V8UHc9OBGEWnBAWC1N6lpKeMk8fxhWBxFWEz7pzk8vI3L02JQgh4EvDdK1SOTIrmIEtnjIUFT7xBjPSZpOEbzPUzydcUInnjrWxHVZnlfSvkhJSN1nfOn8kRzn2cwUbdQ1hEk%2BvRkR9LbYnZwMum9uTuSx3EfOgHPVfazUJg6ipYBapEEwzwrEHC1a%2B%2BfpAyhjw1qJ1g8gGgXr3d%2FqmfOd5VHFyksygqwzRhZ5gGrXR0Dg8vlu0n4ObqXJswAGClyV1IOs1XnWw0iu58TuYv8luQCzLrT0jFb%2BE7ceaXMHmtcg%2FRcxaUJuCtn%2FmssQTlvd9Vo6LkJ0rOOSakh5Ryi%2FAL%2BJOAc0PyzEXD33jPGuZw8DS6vZ%2FJzq2sb5YYE9BNKoxE%2BVGPtyntuIQfyMLPStYMTkEaK1rKbGbwsyvyJ3rAg2XU%2F57fUxkQVZdlZAa1b1EDo6sO3U6cV5ZG%2BJZjm%2BSfFL9KaaEuACklGNHHM3p22C5eHHBXD7oUzs%2FOP7JjoCZwIP8JICaO%2BDt%2BMURZ7lqGUgt7ecNdRd9YbTZ6a1Mc8E3RPMPIOUGs5pX6tyarq94kcxgMCrMm6Ggh4Jn7EtGmJSLbUf6qQmMWEYUvo8FL7RwqlbQtMPGFjsMGOqUBxHwOC7bN5xmVjs64%2F%2BSgSXq2u1cGxHD1gdD8ez1O1W8o7orHSR8mllzUpRhSsRdxq3ClygrFS2WXHd%2FD4j64hASXzr021gvhKl7gNHKAvU5a7fFFPqDE8khvVCZuIzw29P%2BEve71Z2kf7eNKe6k7YsDDfCUHezX%2Bmo%2B1hUazDT7g36kU9%2Bqci7JwSQdr6cOrAc4mNKz4mT1Vuy4yry0StiCObiqV&X-Amz-Signature=9bbea6be7f05dda0b26e134c9043597f5ebbb8e0947b5815c128a3b053a14988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5X6XQYS%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmrHeLdjY8uKqzekJFFtD1aYJfeiE2pk4DNwu%2BxvR8JwIgTJxha9hJgTvQtjO4BO%2BVKaCaVtlAmrzBwcL7JHT5YnYqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIBxus4N6RsdnEC8ircA2a%2BKcx5V8UHc9OBGEWnBAWC1N6lpKeMk8fxhWBxFWEz7pzk8vI3L02JQgh4EvDdK1SOTIrmIEtnjIUFT7xBjPSZpOEbzPUzydcUInnjrWxHVZnlfSvkhJSN1nfOn8kRzn2cwUbdQ1hEk%2BvRkR9LbYnZwMum9uTuSx3EfOgHPVfazUJg6ipYBapEEwzwrEHC1a%2B%2BfpAyhjw1qJ1g8gGgXr3d%2FqmfOd5VHFyksygqwzRhZ5gGrXR0Dg8vlu0n4ObqXJswAGClyV1IOs1XnWw0iu58TuYv8luQCzLrT0jFb%2BE7ceaXMHmtcg%2FRcxaUJuCtn%2FmssQTlvd9Vo6LkJ0rOOSakh5Ryi%2FAL%2BJOAc0PyzEXD33jPGuZw8DS6vZ%2FJzq2sb5YYE9BNKoxE%2BVGPtyntuIQfyMLPStYMTkEaK1rKbGbwsyvyJ3rAg2XU%2F57fUxkQVZdlZAa1b1EDo6sO3U6cV5ZG%2BJZjm%2BSfFL9KaaEuACklGNHHM3p22C5eHHBXD7oUzs%2FOP7JjoCZwIP8JICaO%2BDt%2BMURZ7lqGUgt7ecNdRd9YbTZ6a1Mc8E3RPMPIOUGs5pX6tyarq94kcxgMCrMm6Ggh4Jn7EtGmJSLbUf6qQmMWEYUvo8FL7RwqlbQtMPGFjsMGOqUBxHwOC7bN5xmVjs64%2F%2BSgSXq2u1cGxHD1gdD8ez1O1W8o7orHSR8mllzUpRhSsRdxq3ClygrFS2WXHd%2FD4j64hASXzr021gvhKl7gNHKAvU5a7fFFPqDE8khvVCZuIzw29P%2BEve71Z2kf7eNKe6k7YsDDfCUHezX%2Bmo%2B1hUazDT7g36kU9%2Bqci7JwSQdr6cOrAc4mNKz4mT1Vuy4yry0StiCObiqV&X-Amz-Signature=cebd1e74eb81a683a294748026303f80083714a08c7bfc5afb0cb6e741203174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
