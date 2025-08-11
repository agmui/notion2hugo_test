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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XXHFY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC37OCMRb1lVlMftUuaQa87WEOEpIOSYfcckHi1TdK3oAiEA%2FhMJ3fbw1ouOUZxu2DXCWKzgG1rTiPItVTfLOYEo1VoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg%2FG6dEhPpQPRNTYCrcA3EHVhnAKltTvMdrC%2BCfw5oXFTbTC4VP9TDkQEehUENvGc054ErsdgH3YVktQhU1j6ilqa90H6YUMB%2BYa3zYT6DzD%2B1dsMtHf5sMjJbjgg4Vvpj269VdAMrXXqGT6zPNFGqXYQ%2BZ4q8OvMoFjIfqk%2FA%2BgJhSqLo165cqukzMzVN2WjIJGzlYY8aLM5%2BC8sfTsJ%2FabFaXLNvap33vt6oG5CRIU6HinfhZYTCfjjL9H9qSSgPN9pDTsBv553U6zMqu62XdZo5uxRp7qwT3piNRt4gIHN7fjgHi2d76uFon3jbt%2Bxvg3vsfamlyObdH61jxz2N4K%2B8h1QygTPzLMQHxAL9aD%2BJSam%2FN1NQ8FgudGCPAmd1lEvJQtH2ghdfnm9dxH6jTLLdzq7S7v2N2O%2BKf86Jl9PsL8VM0bl7ofrSkvTRH0FkcXDb1s%2BJAci56fWM%2BT5MXCNTzP1eaBOI%2FTI3pWx7uUcRYHumFNMr0m6C4nsAdr%2BvnmClc5BEpVMnAQpaYwnwhoWVOyXpSZ629jJgjnKdml5jkW8f0iuVrIyx0ERTmtbzMZ0KZn5KP2wMe6AxxIOOYja6v%2BmbfmQ8E2fIk2YYT7jPHQbrT%2F074WlGmtiC0J9r2GhupFqQ2qlH1MKzc5MQGOqUBD09XWIiNFW2%2FWXJENk3Wl8YkKY%2FAdYkLPMQb6RJbG0s7tNvDmYjuFdGXP5WyMl6Nq7Owz9msdJol%2BiUW3KE06rkhTAoZnkKcZzQ1NbOTAh3W3zLyzuk9r7khshngNyiF6PPhR2gnY4wCHL6fo0kAgb%2Foqkhic0jU6DgEHYD2LsmpeHDWlFVkTmfHksJ4AX5Uh38jm4cVv96LYpgtRRei%2FTpYf2Fb&X-Amz-Signature=d501f4bc221efc4308095f16482a692e4c883b9e88d3a6107af2db53f2e5e1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5XXHFY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC37OCMRb1lVlMftUuaQa87WEOEpIOSYfcckHi1TdK3oAiEA%2FhMJ3fbw1ouOUZxu2DXCWKzgG1rTiPItVTfLOYEo1VoqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLg%2FG6dEhPpQPRNTYCrcA3EHVhnAKltTvMdrC%2BCfw5oXFTbTC4VP9TDkQEehUENvGc054ErsdgH3YVktQhU1j6ilqa90H6YUMB%2BYa3zYT6DzD%2B1dsMtHf5sMjJbjgg4Vvpj269VdAMrXXqGT6zPNFGqXYQ%2BZ4q8OvMoFjIfqk%2FA%2BgJhSqLo165cqukzMzVN2WjIJGzlYY8aLM5%2BC8sfTsJ%2FabFaXLNvap33vt6oG5CRIU6HinfhZYTCfjjL9H9qSSgPN9pDTsBv553U6zMqu62XdZo5uxRp7qwT3piNRt4gIHN7fjgHi2d76uFon3jbt%2Bxvg3vsfamlyObdH61jxz2N4K%2B8h1QygTPzLMQHxAL9aD%2BJSam%2FN1NQ8FgudGCPAmd1lEvJQtH2ghdfnm9dxH6jTLLdzq7S7v2N2O%2BKf86Jl9PsL8VM0bl7ofrSkvTRH0FkcXDb1s%2BJAci56fWM%2BT5MXCNTzP1eaBOI%2FTI3pWx7uUcRYHumFNMr0m6C4nsAdr%2BvnmClc5BEpVMnAQpaYwnwhoWVOyXpSZ629jJgjnKdml5jkW8f0iuVrIyx0ERTmtbzMZ0KZn5KP2wMe6AxxIOOYja6v%2BmbfmQ8E2fIk2YYT7jPHQbrT%2F074WlGmtiC0J9r2GhupFqQ2qlH1MKzc5MQGOqUBD09XWIiNFW2%2FWXJENk3Wl8YkKY%2FAdYkLPMQb6RJbG0s7tNvDmYjuFdGXP5WyMl6Nq7Owz9msdJol%2BiUW3KE06rkhTAoZnkKcZzQ1NbOTAh3W3zLyzuk9r7khshngNyiF6PPhR2gnY4wCHL6fo0kAgb%2Foqkhic0jU6DgEHYD2LsmpeHDWlFVkTmfHksJ4AX5Uh38jm4cVv96LYpgtRRei%2FTpYf2Fb&X-Amz-Signature=e36201fe24d43b688a733081c1b5a2615e369373dcd82e789c1e65a299bfa28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
