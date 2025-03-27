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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDMTR4U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtoC7TmBcP74hgAdTG%2FuPUyZrDk27FQMDAIqa%2FMXiz7AiEAuF3Zc8EeaY3sbaJ5QOVq%2Bch48LyI38W12XB5YL0ogl4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFlDqlrulSzKDgcF%2FircA0jdjZ%2BSS2cIflfOHjo8hmm7FBZOGTB3EZ481dyFfEJx6Ck4uHNDsa%2FTMdTASM5c994h6P3rwVfpW9aGRSlmncAfrAAJzp348wLlst7bQEDAYLGLkzySAGYFWIwmv7zw6KUpXHcVWBebrwLMH%2FJJMZW9nnE1fbd6OLEONA3PDTUWfIRZEXMhJg28ZeWHuc0jcOUdAdlrjtSWwGV4cCPL9vL888OqLrWw%2F1ghxLeyXM5MhJj3lQaQT9WqendomthX3xYBDqdEMPBuMeTPM4O%2BPdKFCpIDJroylGSz%2B2v7%2BNm5jbE30m3FrBbxFy88nbrFbRc7TuYphZX%2BkIb2i4B%2FUfQwMdibcNMsEg7xeh3HRtsCfvJGssoUg4rRsooBysLUVO%2FgJXTsQgKdFVFkubsk3i2LiLSGIjl%2Bj6WSDS6pMGlVv3M76OK1ytUwYXVOT3QtGA%2FMd4Y9DAc16TagF09OWXijZru2bj6WXNnMaBLHyyLs16IxsVoKNVmoERoIazQMFXlXO55LCNfse7baLj9F%2F5MHlpvjkBgBrhwEUDSNVyZmOLjHBBJRv4NzQ6zvCP%2F3feJFvhmKkqBcSale4RjAIEhSjUg3CZ%2BCgINGB4GJneNREr%2FiBnhQj78ZlIchMKTNlb8GOqUBPX7GPz0Sa0NuBHi74UQ%2B25%2BQT1YFVcN7AcSqY3u479q%2FyZTxfKUG5mKXJ%2BjR0%2FV3xdvX0HtdfX2G%2BBE1zEl9hjcipbI2EJmjrT0B849Gpo7OuEwUvkdOLfO6V2Dp2ZzKXRBy4%2F6YjeVVQxxFdriGA876iEerRcG%2B%2FP2Xy96NopyL2zjV2WEO6KFpNy1NXyuURukiewlNKfXMaq7FvsmGR6teOeFa&X-Amz-Signature=d49c6a878c7db5153473c9eed26bf641541d49b63ebbcee86b728700f9ce648d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDMTR4U%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtoC7TmBcP74hgAdTG%2FuPUyZrDk27FQMDAIqa%2FMXiz7AiEAuF3Zc8EeaY3sbaJ5QOVq%2Bch48LyI38W12XB5YL0ogl4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFlDqlrulSzKDgcF%2FircA0jdjZ%2BSS2cIflfOHjo8hmm7FBZOGTB3EZ481dyFfEJx6Ck4uHNDsa%2FTMdTASM5c994h6P3rwVfpW9aGRSlmncAfrAAJzp348wLlst7bQEDAYLGLkzySAGYFWIwmv7zw6KUpXHcVWBebrwLMH%2FJJMZW9nnE1fbd6OLEONA3PDTUWfIRZEXMhJg28ZeWHuc0jcOUdAdlrjtSWwGV4cCPL9vL888OqLrWw%2F1ghxLeyXM5MhJj3lQaQT9WqendomthX3xYBDqdEMPBuMeTPM4O%2BPdKFCpIDJroylGSz%2B2v7%2BNm5jbE30m3FrBbxFy88nbrFbRc7TuYphZX%2BkIb2i4B%2FUfQwMdibcNMsEg7xeh3HRtsCfvJGssoUg4rRsooBysLUVO%2FgJXTsQgKdFVFkubsk3i2LiLSGIjl%2Bj6WSDS6pMGlVv3M76OK1ytUwYXVOT3QtGA%2FMd4Y9DAc16TagF09OWXijZru2bj6WXNnMaBLHyyLs16IxsVoKNVmoERoIazQMFXlXO55LCNfse7baLj9F%2F5MHlpvjkBgBrhwEUDSNVyZmOLjHBBJRv4NzQ6zvCP%2F3feJFvhmKkqBcSale4RjAIEhSjUg3CZ%2BCgINGB4GJneNREr%2FiBnhQj78ZlIchMKTNlb8GOqUBPX7GPz0Sa0NuBHi74UQ%2B25%2BQT1YFVcN7AcSqY3u479q%2FyZTxfKUG5mKXJ%2BjR0%2FV3xdvX0HtdfX2G%2BBE1zEl9hjcipbI2EJmjrT0B849Gpo7OuEwUvkdOLfO6V2Dp2ZzKXRBy4%2F6YjeVVQxxFdriGA876iEerRcG%2B%2FP2Xy96NopyL2zjV2WEO6KFpNy1NXyuURukiewlNKfXMaq7FvsmGR6teOeFa&X-Amz-Signature=c98e7cbf6856bba0df36d05a33d912e758b2a6112bb5de18c78394248450b936&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
