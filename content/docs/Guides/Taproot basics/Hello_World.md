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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D2DT727%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCwrurDTBCQeekOp8QZ%2BV5f2sXewHvf1UZ1epNgm%2FloAgIgeQvdYsQ0XqN9NjAbwcDOmM%2FoBumlsZ20MZtsnZ%2FCXpgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF92H0DGJEUhwVZfByrcA8t1pnq4Lgx%2FT0EH2wM8QOTMqT32hn8EGSpYcXIMrvSh0TNi%2Bz3HZHevjC2uxJAZiNmZAWFR4gy39dd2hZdx14pkRMVnZ9coFhobZpWQZZVX7K5a8FAvzuPf4Nd9w3AYZ5c2bJYiz1OhTwmzEPw1DJ7JzLky7mi%2FMofr%2BgXG08yFxqhIuqCsZ1Jjb1GcelnZBku8CGccmXQQf1LQtNLhLOmBF7r8TWi9WzmZm07NZzemQvMWTLDZVFS0ZM9X27euEYgyocv4P2om1MHcsMKuhkGXLBwSASX7pclOUr9oj5EEz6fB3IdWqKoByViNdd3ie9k7vR9q1yNfRQJz0xyZ8VxmcXM63wxRNVByBvMkjl0oMLm69rmlxBm%2Fr7xtHnb2b6TLJAW1yCpn1EKakeV8MK0%2BcbUBNLCgTwOUiafbs6zCdej94Nn1WpbIXB1tLY5To6od%2FWee7jp7mmecT195h8eixLII%2F%2F2GacsNWKLiroM8OwOFsSX3uk%2FjD40XP0prdqZ3ziGmYOQTpiHrEcz6pTVQdenyFB5zSchgL4C7pRLHivqpSCbKYt7DGUY62pFw%2BXrOC5iu4Jjnw%2F2IY%2F6BslKWlUc08gRLGZqYiHVtaQffg30W1YoPiGEj1wlAMMHC7cIGOqUBCDyWeCudYOLC7UKK0JLXzElCWs6D4acHc2ejMSwRd6ERvDl4MY6GoaBH9msJCy5YHysdt7htMMnVPGJgGA7QA22G0kq8u3ofiLbSvByjHaLZOMQNlmKGLZ%2BKU3u33jzM89JE581W2kj%2FTagi6ZSDxCTwGM8jZfMuoI0pUP%2Bx02%2BBDk6KgenH%2FLCZxmCzutp5lL13I4Q0WaaVDRjndicu366ScMO%2F&X-Amz-Signature=035ebcbb973bf262ad91ff2ae1fdc1613c1b5f198bfd265ba8268cc6147fc337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D2DT727%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCwrurDTBCQeekOp8QZ%2BV5f2sXewHvf1UZ1epNgm%2FloAgIgeQvdYsQ0XqN9NjAbwcDOmM%2FoBumlsZ20MZtsnZ%2FCXpgq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF92H0DGJEUhwVZfByrcA8t1pnq4Lgx%2FT0EH2wM8QOTMqT32hn8EGSpYcXIMrvSh0TNi%2Bz3HZHevjC2uxJAZiNmZAWFR4gy39dd2hZdx14pkRMVnZ9coFhobZpWQZZVX7K5a8FAvzuPf4Nd9w3AYZ5c2bJYiz1OhTwmzEPw1DJ7JzLky7mi%2FMofr%2BgXG08yFxqhIuqCsZ1Jjb1GcelnZBku8CGccmXQQf1LQtNLhLOmBF7r8TWi9WzmZm07NZzemQvMWTLDZVFS0ZM9X27euEYgyocv4P2om1MHcsMKuhkGXLBwSASX7pclOUr9oj5EEz6fB3IdWqKoByViNdd3ie9k7vR9q1yNfRQJz0xyZ8VxmcXM63wxRNVByBvMkjl0oMLm69rmlxBm%2Fr7xtHnb2b6TLJAW1yCpn1EKakeV8MK0%2BcbUBNLCgTwOUiafbs6zCdej94Nn1WpbIXB1tLY5To6od%2FWee7jp7mmecT195h8eixLII%2F%2F2GacsNWKLiroM8OwOFsSX3uk%2FjD40XP0prdqZ3ziGmYOQTpiHrEcz6pTVQdenyFB5zSchgL4C7pRLHivqpSCbKYt7DGUY62pFw%2BXrOC5iu4Jjnw%2F2IY%2F6BslKWlUc08gRLGZqYiHVtaQffg30W1YoPiGEj1wlAMMHC7cIGOqUBCDyWeCudYOLC7UKK0JLXzElCWs6D4acHc2ejMSwRd6ERvDl4MY6GoaBH9msJCy5YHysdt7htMMnVPGJgGA7QA22G0kq8u3ofiLbSvByjHaLZOMQNlmKGLZ%2BKU3u33jzM89JE581W2kj%2FTagi6ZSDxCTwGM8jZfMuoI0pUP%2Bx02%2BBDk6KgenH%2FLCZxmCzutp5lL13I4Q0WaaVDRjndicu366ScMO%2F&X-Amz-Signature=7af0ee0fe70807ced2f36cecdaac48163648aed8af765793a0b48747e467154f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
