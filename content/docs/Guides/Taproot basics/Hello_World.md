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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL57IKC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGrtxkCqRXpyNh4rH6Kbvt1rfjDIbr4n16ZHoBMTzDT%2BAiA5xTkdNuFFbXpRO8NQDUFwJVsqGOjj8%2B7INgirnAfACSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAr2Xzaxcug%2BKPXXtKtwDuiEIViUTj77uGYTCxrr%2BPVn8nre%2BHo5s19FHZLQFLDbnCnZgietg3Q%2FR09ldL9nQayXteHCVI9vAU4NnVwJSX5XWi9q1sGn6aechhjsHEwZRQACxU07Hx3BA%2BQppSdx%2B3bBDMCYf7ozRbKgBs2uahevLHjTVy6cJe3DKJvHjoErio5fo7XDViKY%2FB3u3djyFT5g1dnDd8a6%2FvFVrB2OCbo99rPnqsQ3WG0TNWPEe6fzaKbHLc6dClYnTeY%2F6RGMGj3Bce8X%2Fp4i8y%2FJNvgAGhAWsbwH%2B0j6TO%2Fi5T%2FucL3rgNUVDIP%2B2lWmpFfGOqvukYfMBqrOsdV%2FIKuhoVZ8sak3qv4R3oR3UMFo%2FZTryIexW%2BixHUXdNsL%2FDXDUXe8OcJZoZY%2B%2FohK6roTSXgD8Vt2Uk8cpS5dUKH8cj4t9A5is7jdoNQtDxhF6oGaGpd0lO99AuL%2F7kbmF1MOE3gIVnBTn853fPA%2FOIBqcrGMlAReLUzXN32%2FhjucBs4azaBoqom3MHayhL7eeObRaw%2ByKj5eCVg0aTBILfQ42Z1inBtjUPUriL4dU9Fe%2FYutDtpUqmOADtEfzJJ0kWAEqahxklM1qJfj3a6nW%2Fejk1YypH0YWO%2FYexY53j%2FcARgZwwouigwwY6pgGPBx6J%2FaesJk8NcA3Oukxy3aOqXAEn1rph99%2B67cIndnYI08Zarc2XoQAkvXm7pHcwzvWUXb0dlkfFzfjVj%2By9rSoKzi6mM3ZLiV2sIVYNZEAjn5vnM70YOMnbFv4UEKgWptzAsMW8%2BNHAtsELdphijgqG0LHsZCGG87BNUIZRaS0rOTyXsQWVJJqEmmcWGAm5Uso0Q3qEMflXs33sxyJbTHoWu7T%2F&X-Amz-Signature=18433030293c6797feb8cbc8e0dcafc204a02a3bb39371e4e2ef5ec982ab0b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EL57IKC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIGrtxkCqRXpyNh4rH6Kbvt1rfjDIbr4n16ZHoBMTzDT%2BAiA5xTkdNuFFbXpRO8NQDUFwJVsqGOjj8%2B7INgirnAfACSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMAr2Xzaxcug%2BKPXXtKtwDuiEIViUTj77uGYTCxrr%2BPVn8nre%2BHo5s19FHZLQFLDbnCnZgietg3Q%2FR09ldL9nQayXteHCVI9vAU4NnVwJSX5XWi9q1sGn6aechhjsHEwZRQACxU07Hx3BA%2BQppSdx%2B3bBDMCYf7ozRbKgBs2uahevLHjTVy6cJe3DKJvHjoErio5fo7XDViKY%2FB3u3djyFT5g1dnDd8a6%2FvFVrB2OCbo99rPnqsQ3WG0TNWPEe6fzaKbHLc6dClYnTeY%2F6RGMGj3Bce8X%2Fp4i8y%2FJNvgAGhAWsbwH%2B0j6TO%2Fi5T%2FucL3rgNUVDIP%2B2lWmpFfGOqvukYfMBqrOsdV%2FIKuhoVZ8sak3qv4R3oR3UMFo%2FZTryIexW%2BixHUXdNsL%2FDXDUXe8OcJZoZY%2B%2FohK6roTSXgD8Vt2Uk8cpS5dUKH8cj4t9A5is7jdoNQtDxhF6oGaGpd0lO99AuL%2F7kbmF1MOE3gIVnBTn853fPA%2FOIBqcrGMlAReLUzXN32%2FhjucBs4azaBoqom3MHayhL7eeObRaw%2ByKj5eCVg0aTBILfQ42Z1inBtjUPUriL4dU9Fe%2FYutDtpUqmOADtEfzJJ0kWAEqahxklM1qJfj3a6nW%2Fejk1YypH0YWO%2FYexY53j%2FcARgZwwouigwwY6pgGPBx6J%2FaesJk8NcA3Oukxy3aOqXAEn1rph99%2B67cIndnYI08Zarc2XoQAkvXm7pHcwzvWUXb0dlkfFzfjVj%2By9rSoKzi6mM3ZLiV2sIVYNZEAjn5vnM70YOMnbFv4UEKgWptzAsMW8%2BNHAtsELdphijgqG0LHsZCGG87BNUIZRaS0rOTyXsQWVJJqEmmcWGAm5Uso0Q3qEMflXs33sxyJbTHoWu7T%2F&X-Amz-Signature=7c4ec5a6fa3bc8ed9a4854919fc02d92d5968c4c8f1373282b078652e0ac8f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
