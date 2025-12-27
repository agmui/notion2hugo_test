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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYM5OYYE%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4i97PT704nePmaFEG5YaMKnjDRIdGMkGANBFcdQFpLAiB%2BvWT%2FX32tTKyjx07tvjQRuEFymysQmAlkffQJBMWWxyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMN2hEndGXjypfM6lKtwDzzLSQBxheTuJqNZmqY7jfXtuojALgYR8hm32MnrsFZTmc9pcqI54aezdfEnLynrDOP0R8Afc4w0QNqlFO7j9NxMdzL%2BdwCL%2BFg3VeGiTDGqyvQusRMFjg4lgHcOETFIJMY5GZGXIuubtKqnv8bA%2BSpDXahbDBqjKHa3CY%2FTDbtCICF1Dq6TQ5ORjZVrQoWbEFNgk94plgQkzU2DWebI0HxLf0OFPXM9Ea4x%2F7tRJDgUYUkDohXRYjS4ZqUD1SCFftFODQDSf6X%2BtNXp3YMeivhx7aPsEgqjUOrPEE%2Fj0qSwF%2FHYjI1agX09i367EzAy00y97jcvik3%2FN4ELahHEbq28aNJ8YEdcZtXBx1ifuVACSiF4wlihgWPRdtkt%2BWYEm8JShExdwFisJS8dyd3PFD4CVBJyxxZyxCdvA9zlD%2FPbTJqRuB4xsbM8DfMupLt%2BbPuFqNWEqdo8KVl%2F6a13vrlhzUwGSYKjMj9zDRbU5rsXKIPu5DRwymhkN57Rqe4FvTyCjvwnk%2FBUhXTLOyWg0Tphjo5QMk7RCvp%2FOsVhxykgTsYUcvlfA04%2FN3tgx%2F%2BsDWKBJSXrjxNw5oBsV4cia%2FoH2dRYt1QsKkiBk%2BnU4TXuJkU%2FYl8zCBw%2BkNeIw3O%2B8ygY6pgH%2BL%2Fadt4gcjOh1ITPI7J7s22T8l7fdwVVFlAh9UgZiSIrUC9VyX8GHqx5wFa%2Fd0oSrcgH1Xqb5CytPS1rfz7O8kuao%2BRmipYXtSz71vfJgyxfffNBTrWBJ7LtMwWNE%2F2AwWXLiKJSDqAwWKijpoU7aemwIIMHHYOQ4WxUeJ0PPA%2B5ptA8ygBskXTjbFeVFt1mkA7n20SmDXvqaP5kaHGclL82UVBvD&X-Amz-Signature=bf9809a1f86992914df372b68866f2f44b984fc510e11fb640112023f78d7785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYM5OYYE%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4i97PT704nePmaFEG5YaMKnjDRIdGMkGANBFcdQFpLAiB%2BvWT%2FX32tTKyjx07tvjQRuEFymysQmAlkffQJBMWWxyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMN2hEndGXjypfM6lKtwDzzLSQBxheTuJqNZmqY7jfXtuojALgYR8hm32MnrsFZTmc9pcqI54aezdfEnLynrDOP0R8Afc4w0QNqlFO7j9NxMdzL%2BdwCL%2BFg3VeGiTDGqyvQusRMFjg4lgHcOETFIJMY5GZGXIuubtKqnv8bA%2BSpDXahbDBqjKHa3CY%2FTDbtCICF1Dq6TQ5ORjZVrQoWbEFNgk94plgQkzU2DWebI0HxLf0OFPXM9Ea4x%2F7tRJDgUYUkDohXRYjS4ZqUD1SCFftFODQDSf6X%2BtNXp3YMeivhx7aPsEgqjUOrPEE%2Fj0qSwF%2FHYjI1agX09i367EzAy00y97jcvik3%2FN4ELahHEbq28aNJ8YEdcZtXBx1ifuVACSiF4wlihgWPRdtkt%2BWYEm8JShExdwFisJS8dyd3PFD4CVBJyxxZyxCdvA9zlD%2FPbTJqRuB4xsbM8DfMupLt%2BbPuFqNWEqdo8KVl%2F6a13vrlhzUwGSYKjMj9zDRbU5rsXKIPu5DRwymhkN57Rqe4FvTyCjvwnk%2FBUhXTLOyWg0Tphjo5QMk7RCvp%2FOsVhxykgTsYUcvlfA04%2FN3tgx%2F%2BsDWKBJSXrjxNw5oBsV4cia%2FoH2dRYt1QsKkiBk%2BnU4TXuJkU%2FYl8zCBw%2BkNeIw3O%2B8ygY6pgH%2BL%2Fadt4gcjOh1ITPI7J7s22T8l7fdwVVFlAh9UgZiSIrUC9VyX8GHqx5wFa%2Fd0oSrcgH1Xqb5CytPS1rfz7O8kuao%2BRmipYXtSz71vfJgyxfffNBTrWBJ7LtMwWNE%2F2AwWXLiKJSDqAwWKijpoU7aemwIIMHHYOQ4WxUeJ0PPA%2B5ptA8ygBskXTjbFeVFt1mkA7n20SmDXvqaP5kaHGclL82UVBvD&X-Amz-Signature=5023de26171a35e513cdfd7e24ae0401daefd1222daf3676cc1eadd1ec5619d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
