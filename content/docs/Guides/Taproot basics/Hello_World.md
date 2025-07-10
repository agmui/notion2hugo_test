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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQP5MZG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNSgkuXGCVfdVMLlFxaNHf8wiRhZzNWOKm%2FjwVu%2B4CgQIhALb7bHbdRfefqosSAKBQ6n6OqaDajUg5Im1fZbmTXq56KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3uHr3c%2Bn3jVYRuJkq3AN%2FLUOzDfAFHfO3P%2B%2FMi7O1tq8WfoOldpRP6NL5cNMIV4DhzYR6QMUs6GYkKM3iZEj8%2BEeaeuQi%2Fl2PHRNL8LgF8qdTf%2FRe2K9CdVrYfeWL2VZMhTcz4Ltv0%2F0WKuKBh3WwGUq%2FpKvZ50Sq49P45vFMoVBwAmUN%2B6W4rS6Fiw3ImVJCBXTs3Xx3mmbzA3rVqxJeB29I%2Feq7wBLEOe7kKy6diUJI5h2VjDuI8JTTqf3AMLE4PEPy79Mh%2B4%2BYhB8nGsBQRfvlKb313sEML5dLD0lez9IMw7DXvU3VOWt3dNeSmrc2lHz0pqY%2BrLsvAMBhAvcR5lHoW14O5zWUdDZC5vNLvvxlSGVDhP2MDCCcQ%2BNhaBAndxbuIknE6TH0%2BDyrq5woQ6e7aq2aHiyU9UUUEHiibY745Fv2aHIGbgedABpkr2UedXraFqKLUq2HIQkDNuKkobktBsmFCFg8ZX%2F8qhqR1Qj%2BlD6oS97jKC%2Bzv9a79gBfZQqkjxAp5zSB3Vg1YKhCavucvcxhbazF%2BnmRlLG3u%2FE8jSCsuwHKjd8lYHuXJbU0r10x86au33hBLRJO%2FGkGaWgrGP8sF82mQz2pnGWI%2FTDgGjhoohBKKXy4EZjL2HAQd6p5xgSC1JER8DCt%2Fr7DBjqkAXNWnOgV%2FvfDBzNp%2FiCLeZKm0UPF7pitR1ZyyXRVLXyks4KvTdceTSHy7buSWbT0%2BfOT1GD8ct%2BKsTe6XOtSA8AjpshNzNGq7v2Ovg3wjpvhLfd9vu%2BlhE7KylPN1ibhOugHCtD%2BVVz%2FbZJaIYV9j9fFORJ3OAJ6mzbqoqgZt%2F4NZJnfenLDmYHjal2DYdVGlIj6QTCdRtl22cT5%2BNNvXtE2PcG%2B&X-Amz-Signature=5f44046068883efe494a49ee460224c2ca13d7781d298509a5d51043470dc490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBQP5MZG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNSgkuXGCVfdVMLlFxaNHf8wiRhZzNWOKm%2FjwVu%2B4CgQIhALb7bHbdRfefqosSAKBQ6n6OqaDajUg5Im1fZbmTXq56KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3uHr3c%2Bn3jVYRuJkq3AN%2FLUOzDfAFHfO3P%2B%2FMi7O1tq8WfoOldpRP6NL5cNMIV4DhzYR6QMUs6GYkKM3iZEj8%2BEeaeuQi%2Fl2PHRNL8LgF8qdTf%2FRe2K9CdVrYfeWL2VZMhTcz4Ltv0%2F0WKuKBh3WwGUq%2FpKvZ50Sq49P45vFMoVBwAmUN%2B6W4rS6Fiw3ImVJCBXTs3Xx3mmbzA3rVqxJeB29I%2Feq7wBLEOe7kKy6diUJI5h2VjDuI8JTTqf3AMLE4PEPy79Mh%2B4%2BYhB8nGsBQRfvlKb313sEML5dLD0lez9IMw7DXvU3VOWt3dNeSmrc2lHz0pqY%2BrLsvAMBhAvcR5lHoW14O5zWUdDZC5vNLvvxlSGVDhP2MDCCcQ%2BNhaBAndxbuIknE6TH0%2BDyrq5woQ6e7aq2aHiyU9UUUEHiibY745Fv2aHIGbgedABpkr2UedXraFqKLUq2HIQkDNuKkobktBsmFCFg8ZX%2F8qhqR1Qj%2BlD6oS97jKC%2Bzv9a79gBfZQqkjxAp5zSB3Vg1YKhCavucvcxhbazF%2BnmRlLG3u%2FE8jSCsuwHKjd8lYHuXJbU0r10x86au33hBLRJO%2FGkGaWgrGP8sF82mQz2pnGWI%2FTDgGjhoohBKKXy4EZjL2HAQd6p5xgSC1JER8DCt%2Fr7DBjqkAXNWnOgV%2FvfDBzNp%2FiCLeZKm0UPF7pitR1ZyyXRVLXyks4KvTdceTSHy7buSWbT0%2BfOT1GD8ct%2BKsTe6XOtSA8AjpshNzNGq7v2Ovg3wjpvhLfd9vu%2BlhE7KylPN1ibhOugHCtD%2BVVz%2FbZJaIYV9j9fFORJ3OAJ6mzbqoqgZt%2F4NZJnfenLDmYHjal2DYdVGlIj6QTCdRtl22cT5%2BNNvXtE2PcG%2B&X-Amz-Signature=f4956e4e235df922c68f96152ce3332f24b8ecd48d26ceff03958f4a4e4820f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
