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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVVC6NH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH2hTfHLQHvlcpDP7k6hXJd4HlB%2FD%2FDTe93NMrnC%2FRRwCIQCSlEGZXIA%2BOB8btKOb01A8gOONzIctn5V%2Bqe%2BCRFvrTCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7p1m4fNhmy7c6rzTKtwDuhu1OJr6OQRP2%2F2cqKbjsYi1Z3R6XiYRMK9mARbAnmyOTBSAND5SKklOKl4MWG6Z26Fgm0Aqb7ubHYH7KXYoIl%2B1YcOHmDJ%2F19pbU6aC8iUwb8C0lpOo%2B7rjXrzGPmvdjE3FY1vAEGllaBjWOq0SZ2rPLMj5HFP6Lxgv54Ifz0BAtCMIghx60F0p%2BF36Am8EovAAfPXAYSVLprd5DOWc2qroqFuCdiS4dgwo%2BbINsgnCVhlQ6MTolwURi%2FYFW5iXTEmgzDULXLwZrCyODGzAeavY8RgkXH5OjDptdyY4313uu5a%2F6oQ7%2F%2Fp8MSeVK0lh0bftMq7usxOJnsdcMVcRqvmeobAow9E2cKp6FI28XpaTqjZaEmNkIdes3SeS227XvjNP7uroTamjkh%2FxWZklqroYBQK7WCYn72JZFSWG80uUL3y%2FNVTMUIsZha849tyNJ0g212b%2Fi4UpzM%2BJmCLrb9MzR3oNnNAcj62W44k%2FA9yUcXPHl4%2B4hqfwtVkCi8b21HB0C1pH4mboqTjqwV7AQ19nw0JOnEc9tG%2BgcSRm8K4xln%2FySsif1da1GAdofxKvgfq0gzNHxcABX9jaBUoT91XWphnlC8MVMTKyQKjMLUuN1a4vU9w%2FOQyCqhAwza%2FfwQY6pgFiXChEfuPjAsf3wZ5J4x28njaZldiAD7v1lkTsT6ZAUMi8yhimhiWOS4TmyRqYMcIM%2BJYeD4dxVexcei2O0n8aOHU%2FNMMdoySh%2FLpZd5gL6zQN%2Ft0ryfj9aqpaIG1Np6bJdz6iDEI8DVwyuLZITxRX%2B3rhVmp85b99GXfTJXV8QvIlQRjwgQ0acKB9fS34cwpp3jUhXZiNb%2B9wRUomdF0A00dPWUhO&X-Amz-Signature=e134ead98b9ac95e3dc7fa41ca2a2be9e04ce0a1d03930eaa419fa14b6de00eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVVC6NH%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH2hTfHLQHvlcpDP7k6hXJd4HlB%2FD%2FDTe93NMrnC%2FRRwCIQCSlEGZXIA%2BOB8btKOb01A8gOONzIctn5V%2Bqe%2BCRFvrTCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7p1m4fNhmy7c6rzTKtwDuhu1OJr6OQRP2%2F2cqKbjsYi1Z3R6XiYRMK9mARbAnmyOTBSAND5SKklOKl4MWG6Z26Fgm0Aqb7ubHYH7KXYoIl%2B1YcOHmDJ%2F19pbU6aC8iUwb8C0lpOo%2B7rjXrzGPmvdjE3FY1vAEGllaBjWOq0SZ2rPLMj5HFP6Lxgv54Ifz0BAtCMIghx60F0p%2BF36Am8EovAAfPXAYSVLprd5DOWc2qroqFuCdiS4dgwo%2BbINsgnCVhlQ6MTolwURi%2FYFW5iXTEmgzDULXLwZrCyODGzAeavY8RgkXH5OjDptdyY4313uu5a%2F6oQ7%2F%2Fp8MSeVK0lh0bftMq7usxOJnsdcMVcRqvmeobAow9E2cKp6FI28XpaTqjZaEmNkIdes3SeS227XvjNP7uroTamjkh%2FxWZklqroYBQK7WCYn72JZFSWG80uUL3y%2FNVTMUIsZha849tyNJ0g212b%2Fi4UpzM%2BJmCLrb9MzR3oNnNAcj62W44k%2FA9yUcXPHl4%2B4hqfwtVkCi8b21HB0C1pH4mboqTjqwV7AQ19nw0JOnEc9tG%2BgcSRm8K4xln%2FySsif1da1GAdofxKvgfq0gzNHxcABX9jaBUoT91XWphnlC8MVMTKyQKjMLUuN1a4vU9w%2FOQyCqhAwza%2FfwQY6pgFiXChEfuPjAsf3wZ5J4x28njaZldiAD7v1lkTsT6ZAUMi8yhimhiWOS4TmyRqYMcIM%2BJYeD4dxVexcei2O0n8aOHU%2FNMMdoySh%2FLpZd5gL6zQN%2Ft0ryfj9aqpaIG1Np6bJdz6iDEI8DVwyuLZITxRX%2B3rhVmp85b99GXfTJXV8QvIlQRjwgQ0acKB9fS34cwpp3jUhXZiNb%2B9wRUomdF0A00dPWUhO&X-Amz-Signature=8bc7d6251d1c7795232ffaca685d9aafe9f621a659ed4bf542bae9e9c9b13b07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
