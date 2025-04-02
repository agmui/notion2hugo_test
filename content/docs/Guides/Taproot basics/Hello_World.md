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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6V2JFR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIG39D43E1mRegqMukew9qrmj81lwDvdoGJHPxqeHFnzvAiBMyoBHOSV6RL5xWCH47KEYSVw%2FniX7bsOI1qNjQKqJcyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5kaZ9MObnD%2BqTNSKtwDeSULZr3z3rLdXKZxHnNJIEPHPUAW26BZbgvY%2BVdDlhBi2KVl%2Bi9id%2Fy%2B7YD4I%2FNPrTBtaq20OAQWqEN%2FcFjunK%2F4RUahxVlVsJO7dMRI0CLWDKxWBrn%2BJH%2F5LrnRBKcTiu5kogSBayLgdCKwtTVmoYZnvE6RH%2FaXhu6KW0jnjlf3Br4tVO2vy4vv4UMHiThM2jkCMTfKatLIA35AsdSrKuQ6pBBkbtNkQKE1mhRBzIBdmll%2FDYFOIKh7yJBGXJJJrAGhGvcLyDBJMvYjaKEaoJDjEhIQDQEMb%2BNLK0Hkc1gs7bEH9aVCW5Yl8Tb5%2BXIm5sRJH7EC64I00i2uzm9pRVsJkbTtboQx8LCVJJQoM2VxuL5IEekEnQrQXDzQJX7JbkBI%2BaGbemZtLnU4JTr%2BKhIa3KDOqsGFcPGDsx9K%2FwfgPam03tFel1MQtLWBDJhQejVT1ya0GviCDkqkeTjICeAiQMw6ohIqug39nroHunuSWHIl4mKdaox80kvSEvGoHjShS5UG5Y77Iac%2B%2B0ISqzXGXDnmjAieTATrPfUV62DwWwbaSVBCny%2BbEcT9WUrZS94R%2BfvVhPhtNDd6RNoBm64GuCwAJjUMEu719mXpdOS2ySIGOTiYdt1%2B%2FxMwsqu0vwY6pgFXIQESQGRF1WEETBbe7H%2BicY4bnrkhlQkMD%2Bp%2BLS19MLErYXPa4sdi664E96Fr71rjp%2B%2FVXdIoetW%2BiDJM2MJpaUEvLNYzXnnriNha1eorEYHCEhbyY11d3WoeOPz1WuaTm5w4vcQrlH4sMAwZVjBq0I1iYrY%2Bd%2F8tgvhJHIZR%2Fb2hHXS8nGJIS53cfk0Ajh5HyeZmHjQpIBSpBacAN8qEX3wk1VUd&X-Amz-Signature=c9888168ec71d8a1365fe222e61cdcf6274c144b87e0e4e6257f14ed37967592&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP6V2JFR%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIG39D43E1mRegqMukew9qrmj81lwDvdoGJHPxqeHFnzvAiBMyoBHOSV6RL5xWCH47KEYSVw%2FniX7bsOI1qNjQKqJcyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj5kaZ9MObnD%2BqTNSKtwDeSULZr3z3rLdXKZxHnNJIEPHPUAW26BZbgvY%2BVdDlhBi2KVl%2Bi9id%2Fy%2B7YD4I%2FNPrTBtaq20OAQWqEN%2FcFjunK%2F4RUahxVlVsJO7dMRI0CLWDKxWBrn%2BJH%2F5LrnRBKcTiu5kogSBayLgdCKwtTVmoYZnvE6RH%2FaXhu6KW0jnjlf3Br4tVO2vy4vv4UMHiThM2jkCMTfKatLIA35AsdSrKuQ6pBBkbtNkQKE1mhRBzIBdmll%2FDYFOIKh7yJBGXJJJrAGhGvcLyDBJMvYjaKEaoJDjEhIQDQEMb%2BNLK0Hkc1gs7bEH9aVCW5Yl8Tb5%2BXIm5sRJH7EC64I00i2uzm9pRVsJkbTtboQx8LCVJJQoM2VxuL5IEekEnQrQXDzQJX7JbkBI%2BaGbemZtLnU4JTr%2BKhIa3KDOqsGFcPGDsx9K%2FwfgPam03tFel1MQtLWBDJhQejVT1ya0GviCDkqkeTjICeAiQMw6ohIqug39nroHunuSWHIl4mKdaox80kvSEvGoHjShS5UG5Y77Iac%2B%2B0ISqzXGXDnmjAieTATrPfUV62DwWwbaSVBCny%2BbEcT9WUrZS94R%2BfvVhPhtNDd6RNoBm64GuCwAJjUMEu719mXpdOS2ySIGOTiYdt1%2B%2FxMwsqu0vwY6pgFXIQESQGRF1WEETBbe7H%2BicY4bnrkhlQkMD%2Bp%2BLS19MLErYXPa4sdi664E96Fr71rjp%2B%2FVXdIoetW%2BiDJM2MJpaUEvLNYzXnnriNha1eorEYHCEhbyY11d3WoeOPz1WuaTm5w4vcQrlH4sMAwZVjBq0I1iYrY%2Bd%2F8tgvhJHIZR%2Fb2hHXS8nGJIS53cfk0Ajh5HyeZmHjQpIBSpBacAN8qEX3wk1VUd&X-Amz-Signature=7f1fd6ad31d03c77132932ac07cc00d10f95f6c9ffd7a62090bb1ef7be39f8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
