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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BUJFTXZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8M9%2B5sTSNE365wYXEnS4sx2ddv7ou7Jr8Pq%2FdOD483AiAEIynrSNORa%2FM1hlFyW7SZDRZ6Syui6VVesgaqjclILCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMmsI79xG0QLRT%2F6B2KtwDdIfQk4uWVsXlf7iWg8aQz9J4On%2BwMXvQY05FCxh3RxSRXOVf1CibskyxN5sDG%2B9kqiMfxoap5zt3Z25btwjoWcK7pGzLfJ%2FAKO2lVqnC87eM%2FMNMHgvfypim2ioIHmid1N5IJGpXIADSRkpX%2Fs1TiXabwPSRNv6BHKkJuh2uRdo2UITxBxDU6aGDdkm3UbVSIODGqFzTiDgOqwwFxea3qFXJveFzsEapsyQ7Vn6%2FEmIDoY%2F0Pr0p%2Ba%2BYy0G75jxES4zEYVgjmYkQ%2FK0Bwsd6mLiBCEkMXUPMaRof1%2FJ%2BfgYEUdRcFO0zj4MEv6RFwrPfqA8xqkSuHcpzm8E2PNinQuxbaXjX0Cz7MjsSJ9pNnrsmQfPN3hwWkZBFqh%2BN34fOCA2P4tEMBzmHWKT9%2BDL6%2BWQj2VZCTQED4H4JGY4iHX4pICTtynEvs9kIZEz5WF%2BjMPKZjeIfLohtXDb7dl25f4fpzsSXRGPpm3aXGB91qze9Olotz5ORZDE8Lm2BJnEdLPqm3KYgP9e41Uwdr0OqUDwh4oeTmVLNY3MnrP9GMqdQ0OHIxPPp7epSDd70ickWeZiK3wDeYgNx8qn76R0XUAMHDKPWjN2xNwROw%2FZzYGm%2Fi36pF2JhoY7DqQUwnoOFwAY6pgGzf3oswSRTiKRiqdy%2F%2Br1rlVTrgS1ecMMKT7lNFObuTBKB%2Bzz3peCndT7%2BvtNUUeP%2Bmbz%2B49xe53U7oZ%2FSn5F7CgQUIC2JZxvacIUvOZfRxYCbD8TRmslv9JU1eGA7cLptkpanNWD2s6bwTRgHAG1IgVP%2BWQn0f%2BVTIzc1rgJHtAhHHSN5HYIcsYrLj%2BmJuVvCRA7Hg4Tbrnos9ONql5Dvgr6nQQ2B&X-Amz-Signature=25c85e3e5b2be6953db74a462fdcd0b07ba7e36ac24d4b42e877047f438525a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BUJFTXZ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8M9%2B5sTSNE365wYXEnS4sx2ddv7ou7Jr8Pq%2FdOD483AiAEIynrSNORa%2FM1hlFyW7SZDRZ6Syui6VVesgaqjclILCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMmsI79xG0QLRT%2F6B2KtwDdIfQk4uWVsXlf7iWg8aQz9J4On%2BwMXvQY05FCxh3RxSRXOVf1CibskyxN5sDG%2B9kqiMfxoap5zt3Z25btwjoWcK7pGzLfJ%2FAKO2lVqnC87eM%2FMNMHgvfypim2ioIHmid1N5IJGpXIADSRkpX%2Fs1TiXabwPSRNv6BHKkJuh2uRdo2UITxBxDU6aGDdkm3UbVSIODGqFzTiDgOqwwFxea3qFXJveFzsEapsyQ7Vn6%2FEmIDoY%2F0Pr0p%2Ba%2BYy0G75jxES4zEYVgjmYkQ%2FK0Bwsd6mLiBCEkMXUPMaRof1%2FJ%2BfgYEUdRcFO0zj4MEv6RFwrPfqA8xqkSuHcpzm8E2PNinQuxbaXjX0Cz7MjsSJ9pNnrsmQfPN3hwWkZBFqh%2BN34fOCA2P4tEMBzmHWKT9%2BDL6%2BWQj2VZCTQED4H4JGY4iHX4pICTtynEvs9kIZEz5WF%2BjMPKZjeIfLohtXDb7dl25f4fpzsSXRGPpm3aXGB91qze9Olotz5ORZDE8Lm2BJnEdLPqm3KYgP9e41Uwdr0OqUDwh4oeTmVLNY3MnrP9GMqdQ0OHIxPPp7epSDd70ickWeZiK3wDeYgNx8qn76R0XUAMHDKPWjN2xNwROw%2FZzYGm%2Fi36pF2JhoY7DqQUwnoOFwAY6pgGzf3oswSRTiKRiqdy%2F%2Br1rlVTrgS1ecMMKT7lNFObuTBKB%2Bzz3peCndT7%2BvtNUUeP%2Bmbz%2B49xe53U7oZ%2FSn5F7CgQUIC2JZxvacIUvOZfRxYCbD8TRmslv9JU1eGA7cLptkpanNWD2s6bwTRgHAG1IgVP%2BWQn0f%2BVTIzc1rgJHtAhHHSN5HYIcsYrLj%2BmJuVvCRA7Hg4Tbrnos9ONql5Dvgr6nQQ2B&X-Amz-Signature=3ec56c9a81c384b12651b29097e4be2a48a35a7601399fbec16cc972ad61b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
