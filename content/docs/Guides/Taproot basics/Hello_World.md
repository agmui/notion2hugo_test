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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQ5OT6J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbeTkfzegjV2vyNMCUntfzxB6a%2FMKoPLbqYHX%2FTOMU8AiBaL8EY0fwXh3jBT5RLk93pWRQHbmJKuKpbLuV8pmFQrCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMTBvA4BZwyGJSmtnUKtwDX41IQ0fCXnuwsX0x6sLGyGpmI%2BfyWSSpJZdLH%2BgbNdSy%2Bsy8x6002j3SPU8Wt%2FEVDGhDFBiXXs38%2F90s2DGw7eBwmdEC15fKtrVet6WOxKP0d5jHIdU7VW97hhFxEm8idG8CtCLEJl4mFWZXLOESI7FkV6bYnhTWrS%2BYiW9HoXI00PXpSZt5FfA%2F7FKtAZv61ib6teXLczV8xxdC4vNYtZMx4EgXfLVIpJMADi4Nbglps85R%2FZXWAGvDyvuLyw7OV0r6wrNsp7dpU8DpjTM2M6qYKZFH4S9qHrkEu5VVOZH1WrxBKGqFhGVaD82xnBg8p0e%2B%2B9DSU06N%2BaLJRNNoBHnw8hkaQjuFhKoFbtySXWV8oPfcGXyi%2FS96lrXootBWTdkZcBgYXEw6k5x7vLd1q2%2BEZxICLC%2F7dPdAH%2F4FfjPu%2F1wSXDlBqULKgrtPkXMNDOmn5RUk1ikre8Dvkj0FVk52f0FO005AnPs9IvNauAJUt3k2xIQghsfheeOoi1aK5R4v7wHwgkv8DQd%2FiWfkDJSmhJjhzXDDREXkb%2BEEYpJC4KiAjuBFx0iXbODGklAJZfPDP2Kk%2FfjuTF7XHbQIxcgCi7NMu9Eow45H6pLGoPNp2leyA0MEshbOjfMwu9%2B4vQY6pgHw%2FWQVHu8o%2B4g%2FjufcetmDko9sxYjxKLHKEvzyqbLWZGZrz9lwL%2Fjq2gBtbg%2FoUYlSPy060UgAVmAna59JVv9OeTR8vqAt7NgNhq12q4XD%2FZUDYH6Bkl1K4tBRtskgRgXps0ycbpDWkN35ysc2bYb%2BHnqDwy%2Fev%2F9jXh5BLaGH82d3IKpzIrcIvIHdbuXACIw24cLfgD6J1GtR7sGLA4EQ96FjJbub&X-Amz-Signature=eb2678934815060d342283165be7b612382c6bdafddcc84f1076f06b3f5e0fac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQ5OT6J%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFbeTkfzegjV2vyNMCUntfzxB6a%2FMKoPLbqYHX%2FTOMU8AiBaL8EY0fwXh3jBT5RLk93pWRQHbmJKuKpbLuV8pmFQrCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMTBvA4BZwyGJSmtnUKtwDX41IQ0fCXnuwsX0x6sLGyGpmI%2BfyWSSpJZdLH%2BgbNdSy%2Bsy8x6002j3SPU8Wt%2FEVDGhDFBiXXs38%2F90s2DGw7eBwmdEC15fKtrVet6WOxKP0d5jHIdU7VW97hhFxEm8idG8CtCLEJl4mFWZXLOESI7FkV6bYnhTWrS%2BYiW9HoXI00PXpSZt5FfA%2F7FKtAZv61ib6teXLczV8xxdC4vNYtZMx4EgXfLVIpJMADi4Nbglps85R%2FZXWAGvDyvuLyw7OV0r6wrNsp7dpU8DpjTM2M6qYKZFH4S9qHrkEu5VVOZH1WrxBKGqFhGVaD82xnBg8p0e%2B%2B9DSU06N%2BaLJRNNoBHnw8hkaQjuFhKoFbtySXWV8oPfcGXyi%2FS96lrXootBWTdkZcBgYXEw6k5x7vLd1q2%2BEZxICLC%2F7dPdAH%2F4FfjPu%2F1wSXDlBqULKgrtPkXMNDOmn5RUk1ikre8Dvkj0FVk52f0FO005AnPs9IvNauAJUt3k2xIQghsfheeOoi1aK5R4v7wHwgkv8DQd%2FiWfkDJSmhJjhzXDDREXkb%2BEEYpJC4KiAjuBFx0iXbODGklAJZfPDP2Kk%2FfjuTF7XHbQIxcgCi7NMu9Eow45H6pLGoPNp2leyA0MEshbOjfMwu9%2B4vQY6pgHw%2FWQVHu8o%2B4g%2FjufcetmDko9sxYjxKLHKEvzyqbLWZGZrz9lwL%2Fjq2gBtbg%2FoUYlSPy060UgAVmAna59JVv9OeTR8vqAt7NgNhq12q4XD%2FZUDYH6Bkl1K4tBRtskgRgXps0ycbpDWkN35ysc2bYb%2BHnqDwy%2Fev%2F9jXh5BLaGH82d3IKpzIrcIvIHdbuXACIw24cLfgD6J1GtR7sGLA4EQ96FjJbub&X-Amz-Signature=15cfd69030a38cd274e098a3cb21a407535a032bba69c009b7e889ea8c0252c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
