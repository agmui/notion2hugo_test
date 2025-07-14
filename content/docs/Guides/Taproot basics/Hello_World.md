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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=e477bd9d0a43a8eff1df4945fc3ee6afb81ec80337ae639cc89cd9cbde463ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXOQR34X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDFT8yNflnldDgdTLnmVtW2ikGdEVLwjadZkvKBXhMe8gIgBKLAG5bYfzddpiBSDQlk6nKDlqKOKJSUG710VgfcrMQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLA1Eg%2BuaIHbr3HqKSrcA2hJOdHQuxNtGTyckx1LzsU2gtW8JzijTHpdhnqVN2OYDmiesiRuhq5Au8JJYg88wXbXR%2F5XviBsCAis13j4AiL6cusFvF028WtJFMzwB3oeIugC0FAJR%2FJ1na6tsrSDp0RXL86gFQTFWaDpF7HENfPRkkk%2Fy3ui%2FRxpxCR6B8FA7%2BC5N0FTA8lKTYG%2BWtehqkFH6XkWZtHbAc8Vs%2B5XkXPnI1AYctt4otyOe3MGz1OnT9lCTpVY9IXkAL93NJzgf0NW2Ng8ChACsquX9lhzHd5A%2BpnNYjr72owbgIfuDrb%2FR95CRxLkOEEgSsMan%2B6n6YS5hPmd0TiA0qKTQdxuf%2F0jm1vIs9o9s8dJ7xKjyYcUHUY0Z6LJnR7ljuBsEYpQqgwPGdjsoay97oiWdV%2F2BDeYZIhNIQssmN0H28EoTk2v03G0Gn1l8p898JPMCaUakwzmsBfC%2BgE38MS0MoAAXOyJGE89iXi0OfcCrywwpNhk6W2EEBi6AydyReMMrP%2FcDx%2FA9l7yMDXe%2F1WCIXXi%2BmpvNdHJNF6yBxhzt9%2B8tjzkeUlDw%2FDNgp9DGLhw1cPPolJ5enM%2FupeKq%2FTWeakZqgy98F6qztJUUIA6RLJ9A%2BYQMWDq%2Fk8atv3zO0iKMMek1cMGOqUBSR2KBpnl4JUKKXMgy0w8pbbz2Aesd8Kn4%2Beg8QfTaoxpipilFkDNtTXQA4g8SI9NYIEvFMSuvTb0cigq44sU5hSLiJeCchiD7ejCQUOzGyyNSlc7cmswCOEU%2BYAyUg8ixBYiC1wR%2B7pQd6leHGtV2OgKUC6IGMeiIHFBwFbnlZdo1bAcoeD9rd7iTZg6sGLSEaki7CRshlSA7l7xhlEOw23WIRCq&X-Amz-Signature=8b5c228e8c6c5b2da8311d583f652ea78693636ae670d72513460a010da74625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
