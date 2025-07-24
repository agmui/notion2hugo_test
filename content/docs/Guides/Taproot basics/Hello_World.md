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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSVIANS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDy3MHu91zRWSrmFrG2rpoIgxfkyPijkbh5CvQDRW1Z1QIgVl4mRsVZ5Sz8TQa2R3KdsFqRCWu1VI5BnraAaT1fqwUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOz3BJBAppXILAAxzSrcA2fFr7lknwQrVN3AYhOgIdymbgshvjCgg2FHrdhisNQvOADMHgqKBkuN9GQ5BVLDQ7Nl46gBvL7lxR%2F70RPtuPT1eO7Oh5ia%2FLuKTFEz8DiyPnBLVbMrt%2Fn%2B9UiD1vilo5iPNSuL6m9r3kc6LcH5fsl6qvqJdKNyQlHrsvJPIe1l7SEK3Vc6fovXy4A8ZVj%2BQ5uRO8ecmIOBBTvAx6kk7mmD4xqbxckiDYsriIes4MWCR%2BwlOwNJ6tHh8CoCL6pxIzUkO%2BmR7%2BSWmw0oPfAcV4QlsTwermZoFIgmzBVYH%2F2aonaov%2F6BLXguS2QICgq23uhyY7QQz761QziqXtellhL5lfizND3tIhD11lgiaHEOfUNTQfv50Ek%2BDi7eGeCna72bAfIUivQNkJROhCmKgXuex4XAH02cDsV%2BuurOeFaAgtLri50n9La%2BapKxE%2F%2Fmz5zUqjT5CO2z8HBuSNbUz%2BjI%2FX2GTLPEdY2pg0zKyZFU1437mmDNYOX4X2wqdgSp14a2VcpP0zsR8Fd3n4RXVHzscsJ%2BZuCRF2xmDkaGDwL08WlT7sLPNuHF3qa9cFr7NtBF2uTaFZryab%2FSXeD0wdmLFZaeQaV4dEhPtFESFXqz%2B%2FMX7Kx6z0LoHU2rMMSPisQGOqUBP%2FgMk0NyRVYqxR9Gyp03R7dlchzdommwfUrv6L7CE1MRfN4v4UvslqbM0A7b9pYXwlkvxzcJwLm1hfrJvBdjFWO%2BmpFbBDNIqgTHQqLrswqKdxTOtJPIFasqGi67diKZmQa2HtyxhEp8cZ1e0cSffBOhoCPMa4ijWU1AgVqJ633o2JU%2B4ZliNzD4KVzslVynACXuGJzQEqzlmOZwFmr%2FyvUQYRpb&X-Amz-Signature=7a785c37639fc38bb3a6a1d706888a5d59a0be11e2380e070fcbaf8ed9bbcb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXSVIANS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDy3MHu91zRWSrmFrG2rpoIgxfkyPijkbh5CvQDRW1Z1QIgVl4mRsVZ5Sz8TQa2R3KdsFqRCWu1VI5BnraAaT1fqwUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOz3BJBAppXILAAxzSrcA2fFr7lknwQrVN3AYhOgIdymbgshvjCgg2FHrdhisNQvOADMHgqKBkuN9GQ5BVLDQ7Nl46gBvL7lxR%2F70RPtuPT1eO7Oh5ia%2FLuKTFEz8DiyPnBLVbMrt%2Fn%2B9UiD1vilo5iPNSuL6m9r3kc6LcH5fsl6qvqJdKNyQlHrsvJPIe1l7SEK3Vc6fovXy4A8ZVj%2BQ5uRO8ecmIOBBTvAx6kk7mmD4xqbxckiDYsriIes4MWCR%2BwlOwNJ6tHh8CoCL6pxIzUkO%2BmR7%2BSWmw0oPfAcV4QlsTwermZoFIgmzBVYH%2F2aonaov%2F6BLXguS2QICgq23uhyY7QQz761QziqXtellhL5lfizND3tIhD11lgiaHEOfUNTQfv50Ek%2BDi7eGeCna72bAfIUivQNkJROhCmKgXuex4XAH02cDsV%2BuurOeFaAgtLri50n9La%2BapKxE%2F%2Fmz5zUqjT5CO2z8HBuSNbUz%2BjI%2FX2GTLPEdY2pg0zKyZFU1437mmDNYOX4X2wqdgSp14a2VcpP0zsR8Fd3n4RXVHzscsJ%2BZuCRF2xmDkaGDwL08WlT7sLPNuHF3qa9cFr7NtBF2uTaFZryab%2FSXeD0wdmLFZaeQaV4dEhPtFESFXqz%2B%2FMX7Kx6z0LoHU2rMMSPisQGOqUBP%2FgMk0NyRVYqxR9Gyp03R7dlchzdommwfUrv6L7CE1MRfN4v4UvslqbM0A7b9pYXwlkvxzcJwLm1hfrJvBdjFWO%2BmpFbBDNIqgTHQqLrswqKdxTOtJPIFasqGi67diKZmQa2HtyxhEp8cZ1e0cSffBOhoCPMa4ijWU1AgVqJ633o2JU%2B4ZliNzD4KVzslVynACXuGJzQEqzlmOZwFmr%2FyvUQYRpb&X-Amz-Signature=0534a79bbcbe52f35c5e66dbf75991216ce7e92a09b2083601da92c83bc0db6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
