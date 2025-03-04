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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6BLCMU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxy3XOXfrRFztZWWyVkgfjnM3k3ULsYijZi7taRv4qEQIgekiChwkFrX%2F4qCxiadV7%2BRooZirYmsfCiNAvfgH7YZsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvJWQeTTWT3AsLkfSrcA7bcbj2YsjkncBPngGc4fV5wStvn%2BtmXN9eqOfjQxgVGn9pCUdbZ%2BkSFO29ecygr2gOj%2BD50gFxksvNyf9GHikCVtIONML5869uQii7DDLueWMJ2%2BaQk48uQyC73PnvDfipcjj6rVQ5Jd4g41tGhw5P%2Frrdr3UsqEnraBW%2BhhaF9DYvr9rROlZjS6vARRR5RtNjtYZ2QzqoWBG5UGxbd48EspaBU1FoiPgMNIKJelv7fqsTsMLypO2rBQwlM5H6F6dTtOz5lrk%2FqS5kA4%2FSlbBdNrujfxv8ZNH5U0nTaUykPJMkJq8ctlgwlwU93S%2FpYy%2BCTAlVlFD4%2FZx%2BDrE%2BIs6E784A3RhQPCsbXOPr0ITPoQv574m%2BfYM0Nlpg4Fm7yLxO%2FdaWN%2BsGz8dap1dqaaoaxawETUoKOaLoDM83oBTusFFzRyFj24f67v3SkCWBJfSgk3diPULW%2FF3v7EXWruzoBk3v35rP1Z0KydODnKqgpTAcEzaja1l9SrES1BkPn%2BPcUrfpPMvHetA7CXt7srzmskKuPtI7GU01UxRGodQ%2FCwMi%2BSkjh1YMXjk%2FdItw1BlYyXMfIqvZyjrVtaFJz65L9%2BLhCfWbBM20ylz7NelwBvQpMEGzU8lK0sNVLMMTSnL4GOqUBE%2B8V5j5ZWCsu5v379BFP0zD1bG8OKxbalc5%2FlMl7V1znSwy5mYwHKYk4MvPBbTrEUwSyx3NVqgzHtW7BD2FkrDGEqw7HVEQCYfpOxU%2FZGD%2Bpl2Uj6UdJEqaxh8c6aOdLfJn1m6dmhpotRy9tevgwn9RADBYmYxWci6ULijyyu1726VgJ%2B3hK0zhkM59IvGSZXdkQcEK3bwyn6M4rw4RWWb7tLy26&X-Amz-Signature=aad5fdf67d9436b5d5ed73f41528adc0fa3b59f5a48d0897075e23f430c968fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6BLCMU%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxy3XOXfrRFztZWWyVkgfjnM3k3ULsYijZi7taRv4qEQIgekiChwkFrX%2F4qCxiadV7%2BRooZirYmsfCiNAvfgH7YZsqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvJWQeTTWT3AsLkfSrcA7bcbj2YsjkncBPngGc4fV5wStvn%2BtmXN9eqOfjQxgVGn9pCUdbZ%2BkSFO29ecygr2gOj%2BD50gFxksvNyf9GHikCVtIONML5869uQii7DDLueWMJ2%2BaQk48uQyC73PnvDfipcjj6rVQ5Jd4g41tGhw5P%2Frrdr3UsqEnraBW%2BhhaF9DYvr9rROlZjS6vARRR5RtNjtYZ2QzqoWBG5UGxbd48EspaBU1FoiPgMNIKJelv7fqsTsMLypO2rBQwlM5H6F6dTtOz5lrk%2FqS5kA4%2FSlbBdNrujfxv8ZNH5U0nTaUykPJMkJq8ctlgwlwU93S%2FpYy%2BCTAlVlFD4%2FZx%2BDrE%2BIs6E784A3RhQPCsbXOPr0ITPoQv574m%2BfYM0Nlpg4Fm7yLxO%2FdaWN%2BsGz8dap1dqaaoaxawETUoKOaLoDM83oBTusFFzRyFj24f67v3SkCWBJfSgk3diPULW%2FF3v7EXWruzoBk3v35rP1Z0KydODnKqgpTAcEzaja1l9SrES1BkPn%2BPcUrfpPMvHetA7CXt7srzmskKuPtI7GU01UxRGodQ%2FCwMi%2BSkjh1YMXjk%2FdItw1BlYyXMfIqvZyjrVtaFJz65L9%2BLhCfWbBM20ylz7NelwBvQpMEGzU8lK0sNVLMMTSnL4GOqUBE%2B8V5j5ZWCsu5v379BFP0zD1bG8OKxbalc5%2FlMl7V1znSwy5mYwHKYk4MvPBbTrEUwSyx3NVqgzHtW7BD2FkrDGEqw7HVEQCYfpOxU%2FZGD%2Bpl2Uj6UdJEqaxh8c6aOdLfJn1m6dmhpotRy9tevgwn9RADBYmYxWci6ULijyyu1726VgJ%2B3hK0zhkM59IvGSZXdkQcEK3bwyn6M4rw4RWWb7tLy26&X-Amz-Signature=d250136dc1de6caa6ddbc5ffc3f0bff3966e4b01fb7b1e4fd64d33413ffe498b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
