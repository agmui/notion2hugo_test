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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXXLIRN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDAwflVooScxS85T%2BAsVTUG8tF48ZYCNmZLh9CakVceXAIgC%2FqVb4eSI1FFPcWsDaQiiWqSOw4xVhvw%2B3ToggHDZZMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb%2FL4cgyeRRyQ4RKircA2QA%2FbrBTxHYjEfexpdCnjmASHxSPRXiaFf6J41P%2FaqJTS5SWbm0fNQwTMMEpRtGl7gXL%2BpH3NZxSRow7uDvS68%2F%2BzCvXe%2BLnj5o3HpZcUYdrKmcuW3eKy1DTj2f%2FSohC%2BRhDb97Fdt6b0B8%2BtmgcA1nsAcmZj9CRkiDnqcc0isX5wKy4GmJAb7Om0Tl5gImxDvFApMtGwoSVQJWcuLeWEbeUChebFF%2FgGUfIDm9uKk2oOjgQb7bWvfpDLkv2BwVap4aW7S1UUDq18d8Ytcw5F4XPtnP1RO%2Bb2i1fORr%2BqhsaDGf55WT6Gg1H7ttFLLyxhdQyeHivCVM%2BQdjl8oIWGuSESX%2FhUITStWP%2F0D03IardG0cj44fyjVaPh1%2BituPTTkdhvAfuAexFSf%2B%2FkF%2BHb50jT%2FGNXlVIUk%2FU0%2FM6S9VX7INtXa5hkY5uyd5HKO6LBlz0r%2FirPSY1xyxgonpgwrHZCIqEXi%2Ff9jxtVmxhrx2XDEXWmrcAs%2BqkFM9bhiMhNiXcUsIm%2Bvwhjje6%2F2%2BEsU7aoxBhXvC8yBIxEjZQEM827K%2FW3ylqK1V5GV%2BnLjGrFPDyiOMAxHvsRSbEi2incFJqFq3hTTQUbcQOMPdSdpnuKWBKDj7%2F0AUozggMOvguL8GOqUBCI9MhUa7CS0iFElq7a3qAtsYz1earDeRnyzmvQ6nA1ShU%2F9s%2FqcF9xHES3CyyKqOx%2B6Mq%2B49xNaH2WZi4L7x6qow7YGPaOXjApDGqq58OYf8B9iK9tcsdibzKFoDP0RuEhbZTU4obAUOu2i0URIuwxUsak%2Bw25AeByqGKOPoojMmXM8gXMCLyR4IgOjHYTnikFZIhnHEZa%2Bg1XKeVNIo6qyCTv%2BP&X-Amz-Signature=b29586fbaa5ccaad2a3e96f91bd4e9e81919a6acb01ce81bca66671798d75732&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXXLIRN%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDAwflVooScxS85T%2BAsVTUG8tF48ZYCNmZLh9CakVceXAIgC%2FqVb4eSI1FFPcWsDaQiiWqSOw4xVhvw%2B3ToggHDZZMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb%2FL4cgyeRRyQ4RKircA2QA%2FbrBTxHYjEfexpdCnjmASHxSPRXiaFf6J41P%2FaqJTS5SWbm0fNQwTMMEpRtGl7gXL%2BpH3NZxSRow7uDvS68%2F%2BzCvXe%2BLnj5o3HpZcUYdrKmcuW3eKy1DTj2f%2FSohC%2BRhDb97Fdt6b0B8%2BtmgcA1nsAcmZj9CRkiDnqcc0isX5wKy4GmJAb7Om0Tl5gImxDvFApMtGwoSVQJWcuLeWEbeUChebFF%2FgGUfIDm9uKk2oOjgQb7bWvfpDLkv2BwVap4aW7S1UUDq18d8Ytcw5F4XPtnP1RO%2Bb2i1fORr%2BqhsaDGf55WT6Gg1H7ttFLLyxhdQyeHivCVM%2BQdjl8oIWGuSESX%2FhUITStWP%2F0D03IardG0cj44fyjVaPh1%2BituPTTkdhvAfuAexFSf%2B%2FkF%2BHb50jT%2FGNXlVIUk%2FU0%2FM6S9VX7INtXa5hkY5uyd5HKO6LBlz0r%2FirPSY1xyxgonpgwrHZCIqEXi%2Ff9jxtVmxhrx2XDEXWmrcAs%2BqkFM9bhiMhNiXcUsIm%2Bvwhjje6%2F2%2BEsU7aoxBhXvC8yBIxEjZQEM827K%2FW3ylqK1V5GV%2BnLjGrFPDyiOMAxHvsRSbEi2incFJqFq3hTTQUbcQOMPdSdpnuKWBKDj7%2F0AUozggMOvguL8GOqUBCI9MhUa7CS0iFElq7a3qAtsYz1earDeRnyzmvQ6nA1ShU%2F9s%2FqcF9xHES3CyyKqOx%2B6Mq%2B49xNaH2WZi4L7x6qow7YGPaOXjApDGqq58OYf8B9iK9tcsdibzKFoDP0RuEhbZTU4obAUOu2i0URIuwxUsak%2Bw25AeByqGKOPoojMmXM8gXMCLyR4IgOjHYTnikFZIhnHEZa%2Bg1XKeVNIo6qyCTv%2BP&X-Amz-Signature=c48dd620b62aa4d4c174a4992dcc668a7e850b4497037ffd2f796c990c39b539&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
