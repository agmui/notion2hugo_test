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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDITKX2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCe7sBiOCwNwZH5yLMQkJmza2xeE3u2OBb5YdZiFhIrOwIgLNOeloKH4kTASwqJHIoayCKKXxaFG%2BeWpdazEVihfqAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRlCRFmKPKDl5jufircA8S2wz5dIhfAPoMhzyR2cH7iWUIsWCoBy%2BB5bAsZETrxhNoV8vJ%2BeGF3ZVVTWjwHssv8lliV1VUm4REVGQZyQ3eHs4NyuNeyMGVlVeXju%2BrkIQNKQ8xiJrXg7K4jq82odTFcQ9nzr1pchhOHbJ5G25x0CtB9%2FVPQhz%2BEGO5hfnA%2FunAWsZMfpjn%2BnYHrdACos4yFyjgW67Nl2mG4mvfYZSfJwT4YgC6DdzMi0dRkgZq8krJ7uJTIGG4X4iVJGrGdKqVle%2FSh1sxNlh3vKnCaECaUitt1K%2BRdWZAyPWEtxhYLVBOoXsl1jNlDjswV0w9mF%2BaLb2JyC6GUtSN7S30TiAMwjEzv4%2B6d3TaAi9o9%2BnCpPjQWvjXJVnmGfRvqHVvxeCyNMqW3B1k%2BeE4I9%2FtRb5MCLVCIJQ3FSiDCHyxeR2JBoL6lekVJd8T01JvZ44D6qT0%2FPNneQAA2YZeNt%2BZMQMYbrV4cXkbDfmdY0WBsDbTPxR65%2BP2hD%2BvhF9T3XX5ELL5htccCXYYaFndbOb06F0VCJmCX5soHOHHU32lm3ZBiUlCHRLfvBabPC65kluPksIrZrxgYRAKkQyOUe6j8cz66JvEJ3C6KZYy9HxNfuXoQJDbR19Fc7zeb8cKxML2TnMAGOqUBimplRAXINb2fYTgQrD%2BYfyHYRW2b60fW6olYt7UmsTBbktTfGOenRtiXi04AcNoNOAmk8WkoHsdcFDiJGL4irJwV53G9asyj0fR7yZfulryy2tqtzouJaQtzWqFHLpSws%2FtTWkPkEHdWYqOBPa%2F4vusfLqwr2Jl1FFu05oUW6O1Qxq4V4O8LngwURxSBPeZQ1g6li0x1T%2B%2Bwq0GWFEUrnagD9JkO&X-Amz-Signature=9b6120a73e05b058182b73394e0543b0bb89385cab1de32d564b4c0265a19ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJDITKX2%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T032805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCe7sBiOCwNwZH5yLMQkJmza2xeE3u2OBb5YdZiFhIrOwIgLNOeloKH4kTASwqJHIoayCKKXxaFG%2BeWpdazEVihfqAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRlCRFmKPKDl5jufircA8S2wz5dIhfAPoMhzyR2cH7iWUIsWCoBy%2BB5bAsZETrxhNoV8vJ%2BeGF3ZVVTWjwHssv8lliV1VUm4REVGQZyQ3eHs4NyuNeyMGVlVeXju%2BrkIQNKQ8xiJrXg7K4jq82odTFcQ9nzr1pchhOHbJ5G25x0CtB9%2FVPQhz%2BEGO5hfnA%2FunAWsZMfpjn%2BnYHrdACos4yFyjgW67Nl2mG4mvfYZSfJwT4YgC6DdzMi0dRkgZq8krJ7uJTIGG4X4iVJGrGdKqVle%2FSh1sxNlh3vKnCaECaUitt1K%2BRdWZAyPWEtxhYLVBOoXsl1jNlDjswV0w9mF%2BaLb2JyC6GUtSN7S30TiAMwjEzv4%2B6d3TaAi9o9%2BnCpPjQWvjXJVnmGfRvqHVvxeCyNMqW3B1k%2BeE4I9%2FtRb5MCLVCIJQ3FSiDCHyxeR2JBoL6lekVJd8T01JvZ44D6qT0%2FPNneQAA2YZeNt%2BZMQMYbrV4cXkbDfmdY0WBsDbTPxR65%2BP2hD%2BvhF9T3XX5ELL5htccCXYYaFndbOb06F0VCJmCX5soHOHHU32lm3ZBiUlCHRLfvBabPC65kluPksIrZrxgYRAKkQyOUe6j8cz66JvEJ3C6KZYy9HxNfuXoQJDbR19Fc7zeb8cKxML2TnMAGOqUBimplRAXINb2fYTgQrD%2BYfyHYRW2b60fW6olYt7UmsTBbktTfGOenRtiXi04AcNoNOAmk8WkoHsdcFDiJGL4irJwV53G9asyj0fR7yZfulryy2tqtzouJaQtzWqFHLpSws%2FtTWkPkEHdWYqOBPa%2F4vusfLqwr2Jl1FFu05oUW6O1Qxq4V4O8LngwURxSBPeZQ1g6li0x1T%2B%2Bwq0GWFEUrnagD9JkO&X-Amz-Signature=3b9150e8fe6e39bd81bc5b566a2d9ada53d0ee8624b8c83a4c65278ca0888dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
