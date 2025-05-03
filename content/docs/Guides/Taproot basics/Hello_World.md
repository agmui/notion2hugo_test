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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBFU7MB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICP5kwRsihsZWyxc68KivhFu5p5pda%2BJFb%2Fpo3kUUjRcAiBwna7%2FI0oz%2FQ6caT4xOPmDPWArluJBrFqPNycet9d92SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSCmdxNmrZTLJnxDJKtwDzi4n1xUc%2FBUDirLlT09i%2Bm%2BwZ9rmRZwxzws1ze6EvO2E7Xzf5F1fUt0mBV0QYR56BfF2iqUcCZYv3CZCr6Wo2iaK1d%2BZhOcXkg6jz4TCUGpALXqy08M4Pv%2Fh6M2NhqN4DFE0VAo%2BwnZmLPPqQ189el9zTdYzMBJNZkpBHZ5OaATHsTD6JS7MCTpcmmT3xr1asKZg1RgupwD1S%2FTsex3HboNeX9ysfBmxgWAkmKmqKfsf%2BX%2BvvFZrC71U2QrEmmWilmnISTpH08GOG7C6eYUVPe6dBf6aI2peI1s46dO%2FzXRSa7rfL49%2F2wImPHiIYhgBXOTekbERD%2FDRP22TMek1M905sHtOa8qEktfP7bDTVUh323vgQdnLXdeOH2TE1wr6UUIu%2BuWr7bTavftUU%2BROJbpyiIN9uSJfdMZGnq2qt3ZRTjysZDmM%2FQtqG6FMswTwoC69v4ueiBuUssxuoTmRI%2BFT2f0%2FHnSZUNWcA7xwYKDXZtmnNJQ2%2Fr7M7WbWuGhB0KChY8mUN4C0w2oUV4TZrOm3ffIzeFDa2yPhJvlKoAAw0Y060YLQLCe0msXws5NamzI%2BjAdX9Xj%2BXNP0fyO%2BXeTdt9vMhI0x9E%2B3dx4ksuc81sfXwDWoHNCeGv4wpdTYwAY6pgG31mrx%2BKU4Q04Cx7WbJPOohVxtP3XyBeIIxcQnKhxstJ65AOwZptBQkdJj725wZlicr%2FmJcMIQ6YgPBr4oRRb0pFHZVbmz6LV96U97TKS58aPN5ZqBn%2FpYZz77FlPOrd6iiG4XgkCI3yBf8ifQ82bKm2YooEX%2FUaRgeFUsCFKrmCJDZP3STnWZqNRb9fAE5JcJHHAEnClXuxKKoJKuGfNvy%2Fuh3gyG&X-Amz-Signature=939b6808dcf264405759ea95ca7fc79f653694f6db022e812b4370f23a2ac61e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJBFU7MB%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T170335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICP5kwRsihsZWyxc68KivhFu5p5pda%2BJFb%2Fpo3kUUjRcAiBwna7%2FI0oz%2FQ6caT4xOPmDPWArluJBrFqPNycet9d92SqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSCmdxNmrZTLJnxDJKtwDzi4n1xUc%2FBUDirLlT09i%2Bm%2BwZ9rmRZwxzws1ze6EvO2E7Xzf5F1fUt0mBV0QYR56BfF2iqUcCZYv3CZCr6Wo2iaK1d%2BZhOcXkg6jz4TCUGpALXqy08M4Pv%2Fh6M2NhqN4DFE0VAo%2BwnZmLPPqQ189el9zTdYzMBJNZkpBHZ5OaATHsTD6JS7MCTpcmmT3xr1asKZg1RgupwD1S%2FTsex3HboNeX9ysfBmxgWAkmKmqKfsf%2BX%2BvvFZrC71U2QrEmmWilmnISTpH08GOG7C6eYUVPe6dBf6aI2peI1s46dO%2FzXRSa7rfL49%2F2wImPHiIYhgBXOTekbERD%2FDRP22TMek1M905sHtOa8qEktfP7bDTVUh323vgQdnLXdeOH2TE1wr6UUIu%2BuWr7bTavftUU%2BROJbpyiIN9uSJfdMZGnq2qt3ZRTjysZDmM%2FQtqG6FMswTwoC69v4ueiBuUssxuoTmRI%2BFT2f0%2FHnSZUNWcA7xwYKDXZtmnNJQ2%2Fr7M7WbWuGhB0KChY8mUN4C0w2oUV4TZrOm3ffIzeFDa2yPhJvlKoAAw0Y060YLQLCe0msXws5NamzI%2BjAdX9Xj%2BXNP0fyO%2BXeTdt9vMhI0x9E%2B3dx4ksuc81sfXwDWoHNCeGv4wpdTYwAY6pgG31mrx%2BKU4Q04Cx7WbJPOohVxtP3XyBeIIxcQnKhxstJ65AOwZptBQkdJj725wZlicr%2FmJcMIQ6YgPBr4oRRb0pFHZVbmz6LV96U97TKS58aPN5ZqBn%2FpYZz77FlPOrd6iiG4XgkCI3yBf8ifQ82bKm2YooEX%2FUaRgeFUsCFKrmCJDZP3STnWZqNRb9fAE5JcJHHAEnClXuxKKoJKuGfNvy%2Fuh3gyG&X-Amz-Signature=7ba988ec978a866d41cf9a0945301085e2fb900e1b75903d3c99b9db61c78a92&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
