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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMANR7B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIACI3omTzGsk7HoBRrifp1eFIdr4Wz5cuQGzGdHTA7DCAiBJVfIhe3XRcAe0D6PPbOKEOiGI6aynVTUa6O4GEO89cyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxVnptJ9UtPJ4o8tQKtwDB9Wt2KFXQpOIGdezefbP5R2sU7g4NoLbhhecumMvWtWnMfm%2FwvRD7%2F1OtxxmuP%2BjM3MD4JnYc7fn%2BgL7vCV384yVn3worQ2Aj6pxeI89nKsaIOy0H51PxZNdhtqDjAU8uW7CeO0qewl8RhYrVl%2Bgd6pJiSEOsZ4Kgdfg%2B9zw3ds5mQISaX9PAxd9Y3AuBnCNTJs9pYYfAGlUrWLHJYEd6kWC45LKJx%2Fj2NI7jUQxPEgPB3nAbxray4JxuQYarsXGHZ2MddR2mk4K5rvYg8iG%2BJLGIJuxJV5cBhpem%2FC0u3dOajNepbudaolHk9w1E3nYyOp6SJHgouPR4rqNaX%2BlwRtkxlEokEnCSPSjaTR3Ms9Er3g8wl9Th8UnVqToaSjYljT0cjiNir5I13IJDcGk71EDBBBsvnH3r2dQB28CcI2jDyDyI%2FgqghllhXNpWvW%2FPeIpRqLvG1UTlTC40nfXDP94rcllRA18WwqqLl5QOLuooSIH3HcZGVjnqJJ7g94KYm7%2F8YmskTfAjrP%2FsPmGZVvhT8xYSpNweDJ6Soo8XDTzULKkFCUWkqxraXgJgeMRd%2BlNc3uRkSux%2B0gaGvkeATgA%2Buo5UoNNMTm1PmNARWkFm6u7g0%2FVbhoqlJEw4%2FvwwQY6pgGYZhPSdHArq07gXTV1vK4rOXN8G6OY29eixLiSL6wGtm%2FOjE8cURbYtLzy70QJUqgPp662mJ4JYvFEoGIZJshlcRT7PH3gCQ29dDVWrUDJFSTwxCN8qFyOAHUVEZmhVcmzFOL2wdPU1ctSyhFEXHA%2BLhijZewU0ATC1XtAJuZuqg21XJzCsh4QjAryLTosiGkhnzPB84H9q2ybM7M9TdP2vW07qxz4&X-Amz-Signature=db86bb0037f38e13f61574f3b4f57f89725ed1676597aaa242fdf9b01541c825&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMANR7B%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIACI3omTzGsk7HoBRrifp1eFIdr4Wz5cuQGzGdHTA7DCAiBJVfIhe3XRcAe0D6PPbOKEOiGI6aynVTUa6O4GEO89cyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxVnptJ9UtPJ4o8tQKtwDB9Wt2KFXQpOIGdezefbP5R2sU7g4NoLbhhecumMvWtWnMfm%2FwvRD7%2F1OtxxmuP%2BjM3MD4JnYc7fn%2BgL7vCV384yVn3worQ2Aj6pxeI89nKsaIOy0H51PxZNdhtqDjAU8uW7CeO0qewl8RhYrVl%2Bgd6pJiSEOsZ4Kgdfg%2B9zw3ds5mQISaX9PAxd9Y3AuBnCNTJs9pYYfAGlUrWLHJYEd6kWC45LKJx%2Fj2NI7jUQxPEgPB3nAbxray4JxuQYarsXGHZ2MddR2mk4K5rvYg8iG%2BJLGIJuxJV5cBhpem%2FC0u3dOajNepbudaolHk9w1E3nYyOp6SJHgouPR4rqNaX%2BlwRtkxlEokEnCSPSjaTR3Ms9Er3g8wl9Th8UnVqToaSjYljT0cjiNir5I13IJDcGk71EDBBBsvnH3r2dQB28CcI2jDyDyI%2FgqghllhXNpWvW%2FPeIpRqLvG1UTlTC40nfXDP94rcllRA18WwqqLl5QOLuooSIH3HcZGVjnqJJ7g94KYm7%2F8YmskTfAjrP%2FsPmGZVvhT8xYSpNweDJ6Soo8XDTzULKkFCUWkqxraXgJgeMRd%2BlNc3uRkSux%2B0gaGvkeATgA%2Buo5UoNNMTm1PmNARWkFm6u7g0%2FVbhoqlJEw4%2FvwwQY6pgGYZhPSdHArq07gXTV1vK4rOXN8G6OY29eixLiSL6wGtm%2FOjE8cURbYtLzy70QJUqgPp662mJ4JYvFEoGIZJshlcRT7PH3gCQ29dDVWrUDJFSTwxCN8qFyOAHUVEZmhVcmzFOL2wdPU1ctSyhFEXHA%2BLhijZewU0ATC1XtAJuZuqg21XJzCsh4QjAryLTosiGkhnzPB84H9q2ybM7M9TdP2vW07qxz4&X-Amz-Signature=ab3ae250f1d00aed709f80df461b1ef483cb1eaa40a43c0809ad0ff6560518d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
