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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=a887697d76b72f1b4b544917d77c11b0d05ec93ce38f6b4b9bac54f8b6bdc84a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X64PL3CB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVTWRg65VHgzcbklnEgoAZO1Tts2wpa1QLd%2Bf%2BY52BbQIhAP31GtkuHU10pVSkA8FLppWCTYO2YYbW4B%2FvX4%2FAqaIfKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrO5wnFrmWtVGLoJMq3AOQ6szYBQJeD1jcmGnVv2QOYMiBUxLMOkWtKAumwLiqXR4x4QXnGs8VSOw8l5eZ9UfAcynw44ofru3kPoYz6qAV7n1jlbmDMleBzvS8ufhFkCcj%2FsohFycMIMYcdaAhE7x%2FHexnO39LRwlms6XWFVE8GyLlu5Y1BtgHBVw6PAXDyX9b0t2N21doc2EgqlSSA9wiDaIfLeqVmSxhprJplxDDNb3sguDfgsjPILqTYxFUDT%2FJ%2F9GnJ%2FHCj1PLegIylWkz9CZaUMOrTX3ExuEsGSf4FWm7jk6v%2Bjq%2BrIlsL7sbeDito63ebLR6MKFVarzzP8SJaj2cquXdZWtPg1HQXtPNktB9LBhybQ4z5ri4v1inUrAUTKgO67cYR4%2BpXKlOoKAQsLJGrqAY%2B8rk1rvgJxF3my2zG7THBCcux9ZGIxsKoQT9vEGqnoOf3ddZj5%2FwGs%2FbvpqxyI1pCj%2Bzc6%2B%2FfTWKm2WWWQGAvyMAjUS6a1NwRoIjtkkvnAH7RrH1jQO5XZVYIClTTdr%2BlC5TrvJ%2F0KOJZdEV7w2C1patJFfBHwnLRcN2m4Su1Ql%2BRN1Na3mEDtbB6QLlq6dSJ2TdyvhdnyqFyiVvkNcQ%2B%2FR3gNAhCsx6JVVExrbfO071txUS7zDp%2FevBBjqkAd12K9X65C4AeBVsAD3ggOkBv7XlfZQUzOkGeHXsR41h8BOxhk5aQ8w581dVHDoTDx3530MM772KjEkLmB4FmNMbh2jmwnDh8VCYr%2F%2BcKsvUNWAudhSw%2Bs5gvyrwsJJwT4AUza1Vnz2TGSprTm6EW7JheAkLESO4PcE1wflXPINx4xf4iilaToGtAZ6dfzHTUp1NV%2F6sZliohICdpJxt8yqbqwpX&X-Amz-Signature=f14c14ab440e15b7bef83e8cb5a18ac7cd7600dd22008e96ad38be206ab882db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
