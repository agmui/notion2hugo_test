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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTAYXGK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzRd7VvDyIXMOpcvRiJg2%2FY9VIkGi5%2FxCQDbNt3%2BbM1AiBRTt3vL2%2F5LiSS0sobWv7pYaWkFVa6osQG0r4aYvrkoiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4PZavoF2s2aU4XUKtwD%2Bf5%2FL6qMDnxaPJ%2B%2BujdJYKY2Al6ThmTao%2F%2F0vc4gpVABgMPO693qRZO4DmsJ3dRgS8exjYuf3z38rQtv%2F4Ra1dVhTyWjPRPEO23%2F7rI323vAFNmiCqcAPBNRZ0nRkzNpia%2Flb%2F363hiEE%2BDXc5N%2FNRHx9HQhmRegdSJxl06cFRewNhBfvJxp4h2awmonOrvgw53jWdpFOKItnV62kukC6RNMebEfqpLlA%2FdsVEut1Do30%2BWFlQxpM5Fl6PA805nC2rYMcvoDJaijLyfKq%2BFoFnvEjdCv4ZjbH8f9Q8caTgJpS2NnidWCAqB4hwDMKvdOTwjC%2FnDHCM8ELMTHdLlVmRbqFQHnvGN3SVgID5JucYLaEye765ncQWUwr4xDskWBfPTKamO7X7e7F85SsBaT4DMsRXmvCrvLQbDf%2B2Jl7vx8q8KxBugeHAjXH2ZTLh6HH7PYnMJGeDZI2TcHvyswwf1EOMclC7Ra899KFtFuihmK5zNtNRf0hok4NeCrDcUImcc5CFV7n8iJe1nLrYixrLKwvKwW%2FpiWBt1swetGFr0OSQPVmJjw6juP1CQ99nQab9GOdmdgKjOu%2FDlWUqIPKfJQebGaBYjnGbXfjkmA12IlHRAnwMbrgUgFpkgwoNnMwwY6pgHMMgm3EjcwDuJw%2Bd7opzwf6hvR%2Fai2sjS7PAGvSjA9yKH116hJbAfphAwyWlE7jHjxybTaYWqOGqxxZwri%2Fgq4L0Vuad9YTgoNRUQa%2F1wnQl%2FPLM3rOozxcWhq2PvwzPrWkCP0n5m5t02SFDDLF5XC30AIFtbNvwD52EBFZE7icru%2B8naOBX7vjT%2BVHZVmZneL0jXWoxzfBRttX52SGt8rCJaKp18O&X-Amz-Signature=c5ad00d17c13a22ed0c6b81f956a47378bd7b0d63e43d0e73e6747ff32e922ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTAYXGK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzRd7VvDyIXMOpcvRiJg2%2FY9VIkGi5%2FxCQDbNt3%2BbM1AiBRTt3vL2%2F5LiSS0sobWv7pYaWkFVa6osQG0r4aYvrkoiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy4PZavoF2s2aU4XUKtwD%2Bf5%2FL6qMDnxaPJ%2B%2BujdJYKY2Al6ThmTao%2F%2F0vc4gpVABgMPO693qRZO4DmsJ3dRgS8exjYuf3z38rQtv%2F4Ra1dVhTyWjPRPEO23%2F7rI323vAFNmiCqcAPBNRZ0nRkzNpia%2Flb%2F363hiEE%2BDXc5N%2FNRHx9HQhmRegdSJxl06cFRewNhBfvJxp4h2awmonOrvgw53jWdpFOKItnV62kukC6RNMebEfqpLlA%2FdsVEut1Do30%2BWFlQxpM5Fl6PA805nC2rYMcvoDJaijLyfKq%2BFoFnvEjdCv4ZjbH8f9Q8caTgJpS2NnidWCAqB4hwDMKvdOTwjC%2FnDHCM8ELMTHdLlVmRbqFQHnvGN3SVgID5JucYLaEye765ncQWUwr4xDskWBfPTKamO7X7e7F85SsBaT4DMsRXmvCrvLQbDf%2B2Jl7vx8q8KxBugeHAjXH2ZTLh6HH7PYnMJGeDZI2TcHvyswwf1EOMclC7Ra899KFtFuihmK5zNtNRf0hok4NeCrDcUImcc5CFV7n8iJe1nLrYixrLKwvKwW%2FpiWBt1swetGFr0OSQPVmJjw6juP1CQ99nQab9GOdmdgKjOu%2FDlWUqIPKfJQebGaBYjnGbXfjkmA12IlHRAnwMbrgUgFpkgwoNnMwwY6pgHMMgm3EjcwDuJw%2Bd7opzwf6hvR%2Fai2sjS7PAGvSjA9yKH116hJbAfphAwyWlE7jHjxybTaYWqOGqxxZwri%2Fgq4L0Vuad9YTgoNRUQa%2F1wnQl%2FPLM3rOozxcWhq2PvwzPrWkCP0n5m5t02SFDDLF5XC30AIFtbNvwD52EBFZE7icru%2B8naOBX7vjT%2BVHZVmZneL0jXWoxzfBRttX52SGt8rCJaKp18O&X-Amz-Signature=d032158707b8f0fe36f2741189afad9f9269a28c4d00f1d22adab0083a9c87a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
