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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHM5KZU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFrJWgh5qoz9AuKQyH3lA60EeHmg9wpXPbgZ%2B8VKvrX3AiARcpCQfi0rI3n4BIUe2Lrj5b%2BOlTwzhmSlXnpW1nIp%2BiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTe7CEN%2Bpvv9YyrANKtwDGxGGTA6OlMDvwdmzisL%2BMi1IImRn%2FDx6gMtyfqESJZQfBUyFXBXf8xAkXrLovhgtCOWwQ1o4eiQvlkcprEYuS5cY44fPcaX9Tmy%2BCIVfphSQXlm8E%2FQIc4sPJW%2B4bi8G%2BwdaXPgw0xvS%2BHKGMkKQkWYrJXBloQhFUHCylOo2oK88OzHkdNGzAD3VMwYOejQ2nKAcE3TwcyKFu2SUWR6pr5NOdHWq0dUL76fit463zZJh%2BvLxgbS79x3Ftj7nQuu6YUMQzdDQfJB0FScyiQC7OIOaN%2FNf713JhwvMcNG0Qge5J%2BPiZIxP06SUrverPqySmM2E1JfmSP36WkjWZkIW39xxNnbyTzlZrrGcjNWP0QyiD1sm11p0rbfVGln2sFdZVs5PedVkL4WPfy9RDJxDOcBwPCOyK6sdO9DT7VsVTZQRnVgiERczlwg7VOZ0%2FL1ThzTeRj26lhIEktfRS9DuaODmFtGJN6ceWMCjFmHN%2Bd%2FwSSyPgABxZh%2FdnuQbQ%2BZkL%2Bh4KQxN6HFeZ0nyKxy%2FOkSExMtYmjhjA%2B3jh0PEiGVnl2oOWIIxeT5MWS%2BEmdOmXon2Q1wDSQSdw6d9Gs26Kju4CTwlH%2BXbCHm4LMQApVv7JDrZzl5%2FY%2B88QyAw5evAvgY6pgFD1X%2Fu%2FbddbCgjGP%2FS1TuILAnT7YU%2FHmiO9PyDPMUmQBnoFil1gRc4fG5WVoASIHAiHFrGXRBD9RiveCrr4X7eE%2FYVljiaaYO0XP0uXlcoQ9n1jvx0n8BQVN7VfxLfHRZL0IG9hIFbSH783VMd2lKFCBXcZKlZ3MOh3hhy8LvQ7i6uZqL9NmX6WhpFZ8zHjyuExJQZkwRH4CYLGIh7n9BE4lPewr6e&X-Amz-Signature=68eac9cb7c268314b19024c14fba39a7b40b34768b739fcf9de4dcba78d1800e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCHM5KZU%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFrJWgh5qoz9AuKQyH3lA60EeHmg9wpXPbgZ%2B8VKvrX3AiARcpCQfi0rI3n4BIUe2Lrj5b%2BOlTwzhmSlXnpW1nIp%2BiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTe7CEN%2Bpvv9YyrANKtwDGxGGTA6OlMDvwdmzisL%2BMi1IImRn%2FDx6gMtyfqESJZQfBUyFXBXf8xAkXrLovhgtCOWwQ1o4eiQvlkcprEYuS5cY44fPcaX9Tmy%2BCIVfphSQXlm8E%2FQIc4sPJW%2B4bi8G%2BwdaXPgw0xvS%2BHKGMkKQkWYrJXBloQhFUHCylOo2oK88OzHkdNGzAD3VMwYOejQ2nKAcE3TwcyKFu2SUWR6pr5NOdHWq0dUL76fit463zZJh%2BvLxgbS79x3Ftj7nQuu6YUMQzdDQfJB0FScyiQC7OIOaN%2FNf713JhwvMcNG0Qge5J%2BPiZIxP06SUrverPqySmM2E1JfmSP36WkjWZkIW39xxNnbyTzlZrrGcjNWP0QyiD1sm11p0rbfVGln2sFdZVs5PedVkL4WPfy9RDJxDOcBwPCOyK6sdO9DT7VsVTZQRnVgiERczlwg7VOZ0%2FL1ThzTeRj26lhIEktfRS9DuaODmFtGJN6ceWMCjFmHN%2Bd%2FwSSyPgABxZh%2FdnuQbQ%2BZkL%2Bh4KQxN6HFeZ0nyKxy%2FOkSExMtYmjhjA%2B3jh0PEiGVnl2oOWIIxeT5MWS%2BEmdOmXon2Q1wDSQSdw6d9Gs26Kju4CTwlH%2BXbCHm4LMQApVv7JDrZzl5%2FY%2B88QyAw5evAvgY6pgFD1X%2Fu%2FbddbCgjGP%2FS1TuILAnT7YU%2FHmiO9PyDPMUmQBnoFil1gRc4fG5WVoASIHAiHFrGXRBD9RiveCrr4X7eE%2FYVljiaaYO0XP0uXlcoQ9n1jvx0n8BQVN7VfxLfHRZL0IG9hIFbSH783VMd2lKFCBXcZKlZ3MOh3hhy8LvQ7i6uZqL9NmX6WhpFZ8zHjyuExJQZkwRH4CYLGIh7n9BE4lPewr6e&X-Amz-Signature=0410b3c9f75fc3001f836907b2887d3570bce94cdb861261dc55dff8e4100266&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
