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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4NPIFK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOkYLqfS2pfZs8TAq%2BQsrmntOd8G2SrKoMy0DAGaWvRAiA7Q6PHODP5LaPDv3oMyMlXfZ97goF6PI2OKEvdIwgETCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gCqAC2uJ9dh51LjKtwDkPvmQij9f5opCf4%2FMHcaYWxTnC1YSiYeZ%2FO0BcPlPM%2BEuo5WBmzUTYaEhtTivoXGC9Xj9VKrxNU5bEl%2FqYuhVdJCqZzbwoejR6IOo3YRX0pXG9WKG0AflgHZwacncdU3r3iTmM2kaZY6%2F%2FC3MBkMaQHY0J2RPn7wcH4U7WJg0h9oxfc2TemH72YuziG%2Bzw9A2b5NG7Jx16nshQUY7b7AasgbB%2BEKOyjBEqEmE%2F8%2BkNJZQ3BO5BtEx28n%2BCBHdH144G%2FDJGBjmkybYoxFiSPQ0Tn52aOc4vFqOxkDPFHizuXJEOh4KMsC2MhaOCpcmyAnB8pS6a4L4gHwTUr9rP8%2BItSwLQ26%2BBpQsJsFi%2B0JZkxAuWzp215V%2B7ErnXvm45JDC8RVzwfmM8OpXbMiPN3XUTr9KOOwOR6j%2BG7kqyyY3ARH%2FzwnkBz6F2JI7ESC4YipYAyKH8Tcf2iNENu4I6qfVaK4siU5JGR0BfiVAHrUsdgd8LvUua5VaFP4XtlB7FdD29wOxpWRFUiQbnVWPawnhz1%2BhY5b70jvYdSPzdSJdjc%2BnbXNP873XqSTDphaubmAlzPs1PcTqk9U8vFmLSgZauGoonIPBoJAEMsvxBWyAy%2Bnm1%2Fkc6VWkqPZGJ0wmPzLwgY6pgGHBE57PKIcwku9aroeILzOgHXrVLXnwt3%2Bsv50cQTq%2FCfv9hV6RskOYpXqA%2FIvHuMVIPPIUBf3oSF95V%2F%2F1ZJ9ZBMxFaJeUCEom3fDU6JokrQjg4CwS7zqjX46SN%2BLaLCM607UcDKNM71Y3GMZExM7H5vX82DFojx5kQwyNKn36kLU0mn%2BLKBOsi%2FinoE4fmM0ktdiVqZ0d3ULADMdsNdOezovuFSe&X-Amz-Signature=9ad89269531a41d0c18b1d0a95858682ace00e9be47501d384e79f014188d9e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV4NPIFK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOkYLqfS2pfZs8TAq%2BQsrmntOd8G2SrKoMy0DAGaWvRAiA7Q6PHODP5LaPDv3oMyMlXfZ97goF6PI2OKEvdIwgETCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gCqAC2uJ9dh51LjKtwDkPvmQij9f5opCf4%2FMHcaYWxTnC1YSiYeZ%2FO0BcPlPM%2BEuo5WBmzUTYaEhtTivoXGC9Xj9VKrxNU5bEl%2FqYuhVdJCqZzbwoejR6IOo3YRX0pXG9WKG0AflgHZwacncdU3r3iTmM2kaZY6%2F%2FC3MBkMaQHY0J2RPn7wcH4U7WJg0h9oxfc2TemH72YuziG%2Bzw9A2b5NG7Jx16nshQUY7b7AasgbB%2BEKOyjBEqEmE%2F8%2BkNJZQ3BO5BtEx28n%2BCBHdH144G%2FDJGBjmkybYoxFiSPQ0Tn52aOc4vFqOxkDPFHizuXJEOh4KMsC2MhaOCpcmyAnB8pS6a4L4gHwTUr9rP8%2BItSwLQ26%2BBpQsJsFi%2B0JZkxAuWzp215V%2B7ErnXvm45JDC8RVzwfmM8OpXbMiPN3XUTr9KOOwOR6j%2BG7kqyyY3ARH%2FzwnkBz6F2JI7ESC4YipYAyKH8Tcf2iNENu4I6qfVaK4siU5JGR0BfiVAHrUsdgd8LvUua5VaFP4XtlB7FdD29wOxpWRFUiQbnVWPawnhz1%2BhY5b70jvYdSPzdSJdjc%2BnbXNP873XqSTDphaubmAlzPs1PcTqk9U8vFmLSgZauGoonIPBoJAEMsvxBWyAy%2Bnm1%2Fkc6VWkqPZGJ0wmPzLwgY6pgGHBE57PKIcwku9aroeILzOgHXrVLXnwt3%2Bsv50cQTq%2FCfv9hV6RskOYpXqA%2FIvHuMVIPPIUBf3oSF95V%2F%2F1ZJ9ZBMxFaJeUCEom3fDU6JokrQjg4CwS7zqjX46SN%2BLaLCM607UcDKNM71Y3GMZExM7H5vX82DFojx5kQwyNKn36kLU0mn%2BLKBOsi%2FinoE4fmM0ktdiVqZ0d3ULADMdsNdOezovuFSe&X-Amz-Signature=d819ae658ae68f101d851432bd70e916ea844e9384d2e38d1e34059223605240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
