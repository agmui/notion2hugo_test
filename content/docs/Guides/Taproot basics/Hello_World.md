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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RM5TWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLtgsOmK2TSIg9TDjbHODPln0mPeC1MDiQ7mjrrm3FwAiAd63vkzUR2zNnrrGStzRjH%2Br%2F8KxgAvO7U1MWzn3jMgir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM85Q%2FodEvq%2BJdvFgVKtwDn9p%2BAASRuKfLcMmt5FMHayGW3ZFG37PIt4IGjTAVt9iVNmYBNolE7oa%2FrGSNblHvI%2Fs2Ph1iEvweWYUeQ3FqqnGgLS6ktvyIl8QLHqYcKWdo5I%2Fc7%2BqSPMCKrFhz0cHxcZm52TaFwVDJopEazQNMNrJtzNtvyf%2BKo00FomMw8BEl6fcIfGy40fEp4Ik3mZkHNwCMjAB90NNNJqIIHADNT9%2FlV1codXUi2BjjYmytCYecwz1oQ%2FQ5NLpQvJgM8AoovS%2F8YG7SZXqsuw6jMAOXkal9wG59B%2BavdwHPzA9RCepaqb%2Bb8sWI7XR5q7Zv1odBaCtLKYC67OT2r6plA%2F6CjrqXY8MHfdBkyveXCsD2Cklimm5Se%2FmbMKc5pkhSXaNYqNlxZdQ5KFaSBSTzOOJGrLkhIK52kPJh9NUZDWYCbGrD4%2BxrUL9GxCZmuQkD8b1AvevNoxY25Kj4glyPZ9hjoJpLZES%2FpKgheThfJEOBLZLq19QkNEyLkyErQiC7gQoRHDYIHWECovnF0KwZK%2F3ofHDNAkOnzzm%2F278BCfx6Hf3%2BODkIBwts6krnPbh82BzUKCIkKUUomj5Da8V8eX9b%2BVm6JD%2FCp5MhK2kRmsj5Z28jT27kndJ9otTZ0SAw2cCZvwY6pgEfvEdyNWK4CJyuv%2BLlXa1uOgxTclHQHnOT%2FZrhYccx8261XF8qgxbOzxj%2FF6kUSU6UNO%2FXYbPkMBD%2FKkByLtosX2oyBVWQY3mSSrQFEumyNtadNHULGranXU2EY5%2F6Yo%2FFSsvmEwwA%2Fy7u7UqWGscUdOo0NyENv613XFl9X0BovmMy3npvitQOSmAZxMZ7b0AgeQaLUZzFCciICrEuphBDozMbYWDI&X-Amz-Signature=63e21c3b16c8251700af82a9ac2ae5073b3bb65ac99e12f1e380070e83acb97e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RM5TWPN%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLtgsOmK2TSIg9TDjbHODPln0mPeC1MDiQ7mjrrm3FwAiAd63vkzUR2zNnrrGStzRjH%2Br%2F8KxgAvO7U1MWzn3jMgir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM85Q%2FodEvq%2BJdvFgVKtwDn9p%2BAASRuKfLcMmt5FMHayGW3ZFG37PIt4IGjTAVt9iVNmYBNolE7oa%2FrGSNblHvI%2Fs2Ph1iEvweWYUeQ3FqqnGgLS6ktvyIl8QLHqYcKWdo5I%2Fc7%2BqSPMCKrFhz0cHxcZm52TaFwVDJopEazQNMNrJtzNtvyf%2BKo00FomMw8BEl6fcIfGy40fEp4Ik3mZkHNwCMjAB90NNNJqIIHADNT9%2FlV1codXUi2BjjYmytCYecwz1oQ%2FQ5NLpQvJgM8AoovS%2F8YG7SZXqsuw6jMAOXkal9wG59B%2BavdwHPzA9RCepaqb%2Bb8sWI7XR5q7Zv1odBaCtLKYC67OT2r6plA%2F6CjrqXY8MHfdBkyveXCsD2Cklimm5Se%2FmbMKc5pkhSXaNYqNlxZdQ5KFaSBSTzOOJGrLkhIK52kPJh9NUZDWYCbGrD4%2BxrUL9GxCZmuQkD8b1AvevNoxY25Kj4glyPZ9hjoJpLZES%2FpKgheThfJEOBLZLq19QkNEyLkyErQiC7gQoRHDYIHWECovnF0KwZK%2F3ofHDNAkOnzzm%2F278BCfx6Hf3%2BODkIBwts6krnPbh82BzUKCIkKUUomj5Da8V8eX9b%2BVm6JD%2FCp5MhK2kRmsj5Z28jT27kndJ9otTZ0SAw2cCZvwY6pgEfvEdyNWK4CJyuv%2BLlXa1uOgxTclHQHnOT%2FZrhYccx8261XF8qgxbOzxj%2FF6kUSU6UNO%2FXYbPkMBD%2FKkByLtosX2oyBVWQY3mSSrQFEumyNtadNHULGranXU2EY5%2F6Yo%2FFSsvmEwwA%2Fy7u7UqWGscUdOo0NyENv613XFl9X0BovmMy3npvitQOSmAZxMZ7b0AgeQaLUZzFCciICrEuphBDozMbYWDI&X-Amz-Signature=f250f011f4cc4dd9748ef3194da389361a71a6ed1220a624d889f8180f171b63&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
