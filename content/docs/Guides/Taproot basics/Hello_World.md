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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LXVTNKO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCfT1FOIZ9kqiZ0Qqn5BUR%2FZ1mSL2zIPsL6R7p1fEJPaAIgf6O15v3ahfzQUEsAB%2BbMMjnK%2FkXNUoFvc5C5LUlea2gqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId%2B5NERnfBrg8991ircA%2FTzfRVA%2Fpo8dl3iNARcMWcTifGvBRIyjpV9PevUrBqUewzhdgd8q%2BaXvdDXnt4SV20hWCYqMnaeLrf3yfsZnMydxKyod85XZtu1i%2FP9ro0qz0h2BwxLWnejS29q66wDrwCwiqN%2FhjdTSSbQV2N6tH1J0Cb84SbotGTYRABEXQMK9hYW93RGFGHcfHUwtwLZGvyJiG6EdN9BIfDaqdHx9KQdcAtuO10aSb9Sk5Mew5iiai%2BKixy3ICNV20FxObZJ7yntd9QlqzY3KzxsvF9NvTXvqWZYbKTCZpcZYGXgmvE5FGmWMCNp3s%2Bry2jQcvEVayMhV4mky54paS25T6HdY0LtzR7SYF%2BR5PbrFlNn5gzF0azo3lAMqkPRnmOQLBLun3jOojaVCVBIfDhYiqFPL9LTmMJi2lsc%2BSxDNKpq21nalBbOSiDiSw7RT9MUvdenDY6ET7%2FZDacd9AasGr2I2k2imtD1Qkf8VeYJ%2FqKAxMkNSCZ7pvdbm0e%2Biu6YJGoALF0tbdIrcJj0TYKzH1hGe%2BrkThNQW826nqP1zJYc14C%2BwslO400grn%2B7mjCmuLT%2F2LUu9FgkH09i0UKkLmMvO9dMKkTfOuAT7X8dMkBv4snB7f7m%2B2VxyjcjTGnfMOKQir4GOqUBPlp58PT6zenuwleUpDawZlSXd9W3czNvmPrCxVd6rzp7EcoSa3Egyw7ud%2BRaZa%2FhXPuu08DXDaRWVIxs%2FGlqAsoIt4NyJj6Pq90qvrxmIGb9YDhB6zlSvsWajxuQy8N2Q7iJbOuDN1KfFhKHW3Xg0DXehZ3u3nfI7EFVxeFOe%2FDU8GzJmpRnE9BuSFVDbBaDjIthImeD0P%2FuvB9amGdfEVcIl%2BWB&X-Amz-Signature=9046c76ca076b2373b156c0b7f00269c5739566ae6482be2ec63ba00458b631c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LXVTNKO%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T050731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCfT1FOIZ9kqiZ0Qqn5BUR%2FZ1mSL2zIPsL6R7p1fEJPaAIgf6O15v3ahfzQUEsAB%2BbMMjnK%2FkXNUoFvc5C5LUlea2gqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId%2B5NERnfBrg8991ircA%2FTzfRVA%2Fpo8dl3iNARcMWcTifGvBRIyjpV9PevUrBqUewzhdgd8q%2BaXvdDXnt4SV20hWCYqMnaeLrf3yfsZnMydxKyod85XZtu1i%2FP9ro0qz0h2BwxLWnejS29q66wDrwCwiqN%2FhjdTSSbQV2N6tH1J0Cb84SbotGTYRABEXQMK9hYW93RGFGHcfHUwtwLZGvyJiG6EdN9BIfDaqdHx9KQdcAtuO10aSb9Sk5Mew5iiai%2BKixy3ICNV20FxObZJ7yntd9QlqzY3KzxsvF9NvTXvqWZYbKTCZpcZYGXgmvE5FGmWMCNp3s%2Bry2jQcvEVayMhV4mky54paS25T6HdY0LtzR7SYF%2BR5PbrFlNn5gzF0azo3lAMqkPRnmOQLBLun3jOojaVCVBIfDhYiqFPL9LTmMJi2lsc%2BSxDNKpq21nalBbOSiDiSw7RT9MUvdenDY6ET7%2FZDacd9AasGr2I2k2imtD1Qkf8VeYJ%2FqKAxMkNSCZ7pvdbm0e%2Biu6YJGoALF0tbdIrcJj0TYKzH1hGe%2BrkThNQW826nqP1zJYc14C%2BwslO400grn%2B7mjCmuLT%2F2LUu9FgkH09i0UKkLmMvO9dMKkTfOuAT7X8dMkBv4snB7f7m%2B2VxyjcjTGnfMOKQir4GOqUBPlp58PT6zenuwleUpDawZlSXd9W3czNvmPrCxVd6rzp7EcoSa3Egyw7ud%2BRaZa%2FhXPuu08DXDaRWVIxs%2FGlqAsoIt4NyJj6Pq90qvrxmIGb9YDhB6zlSvsWajxuQy8N2Q7iJbOuDN1KfFhKHW3Xg0DXehZ3u3nfI7EFVxeFOe%2FDU8GzJmpRnE9BuSFVDbBaDjIthImeD0P%2FuvB9amGdfEVcIl%2BWB&X-Amz-Signature=7683384ecf500f79c81c3b93a8327b6c029449d2f8273e7247bcb250bab954c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
