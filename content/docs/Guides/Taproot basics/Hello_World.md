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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRP3S5Q%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kGrxgjLV7mIDyaIlMCzi8u5mrnULRjh8Anycmsdd6AIgG7sHOv7DOhmgpDUWbTN7j1P2dZMX6J6uQ1zF6rE4JQ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA3NMglWSyoWbifTyrcAzcuDcv56oiGtFrFjUFK080GQdEsSJ8GmdT6WaxbWSXP4bIqkpJx6VynkSZqgfQTTYO3WqtHDnJ8nmwiB8qeiAoDtIUVdUS1%2BPiCZHnvJNW6xGdjnWOlXLaZsQp16zjBcccorM2F52n%2BtJu5OoIfh7nctMeGaLioL1cdXn99nAmD8T3I2yGu92OypUXEkVAHkuvDV4c57Zh%2FXmKpHDuUp%2BEkpwVTb3yvbe7Y2OP9OKVPCZm4Y1htwa06o6SlsITpC07p5bLGcn28QDaADh3rHm2sKtg1yTmH%2FjJ3ALuzZraANnhFb2UyV0aE%2FHMirAQWyVn8NdL6WjjSy5RKgo3KZdXeLe9z%2FFA2R%2FF51pd58%2BJ1wvzqKTntzWjkZv3IYXlIy%2BqEXGOYiD1fVDKYPkVh75urodHfky%2BKAq6d4OioJOwUtFT9DrhLUZU0SNhsUeUvoPQ7CmVj3zHVKxFF%2FGG762VX5sI1VNX6cmsv9urr5zux6PvLoOKepMxG4WyaeWkG4eZI77ES121ftQqDMRI2Y6Ms988dfMGOJhoyWKeoOXJ2sqTxSC1ML4fi800aV%2B6CtfetLXEHjkfNWl5oHLCxOns7nSe5%2BUdFgUxUDKgivndETShlBEnPnI%2F0ZQg7MMq9ucMGOqUB6qmLxel7wfivUJRKFzP00HtX8sZgjivOKQih68J1X33fu%2FaWHy1BJci2A3OW09cKGh3TKYq%2BBSQRxWKu1HcKNaBwThBosDoCaFTq3U38XxPbaByDXni0YHoJb3j5kwrB4wpstD%2FDGX1CxHyw2FyInM83fEuDDhXnnnfiDOFIKNUL8LJ8YKkB8ZY6fHz9QCdJVmlgk%2BSbYPM1VKk20zTnz9QvkYmS&X-Amz-Signature=bfb451fdc4d9a21233a7ced55b174b51abb0fba50715de47dca3ea681b83f25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRP3S5Q%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T132625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kGrxgjLV7mIDyaIlMCzi8u5mrnULRjh8Anycmsdd6AIgG7sHOv7DOhmgpDUWbTN7j1P2dZMX6J6uQ1zF6rE4JQ4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAA3NMglWSyoWbifTyrcAzcuDcv56oiGtFrFjUFK080GQdEsSJ8GmdT6WaxbWSXP4bIqkpJx6VynkSZqgfQTTYO3WqtHDnJ8nmwiB8qeiAoDtIUVdUS1%2BPiCZHnvJNW6xGdjnWOlXLaZsQp16zjBcccorM2F52n%2BtJu5OoIfh7nctMeGaLioL1cdXn99nAmD8T3I2yGu92OypUXEkVAHkuvDV4c57Zh%2FXmKpHDuUp%2BEkpwVTb3yvbe7Y2OP9OKVPCZm4Y1htwa06o6SlsITpC07p5bLGcn28QDaADh3rHm2sKtg1yTmH%2FjJ3ALuzZraANnhFb2UyV0aE%2FHMirAQWyVn8NdL6WjjSy5RKgo3KZdXeLe9z%2FFA2R%2FF51pd58%2BJ1wvzqKTntzWjkZv3IYXlIy%2BqEXGOYiD1fVDKYPkVh75urodHfky%2BKAq6d4OioJOwUtFT9DrhLUZU0SNhsUeUvoPQ7CmVj3zHVKxFF%2FGG762VX5sI1VNX6cmsv9urr5zux6PvLoOKepMxG4WyaeWkG4eZI77ES121ftQqDMRI2Y6Ms988dfMGOJhoyWKeoOXJ2sqTxSC1ML4fi800aV%2B6CtfetLXEHjkfNWl5oHLCxOns7nSe5%2BUdFgUxUDKgivndETShlBEnPnI%2F0ZQg7MMq9ucMGOqUB6qmLxel7wfivUJRKFzP00HtX8sZgjivOKQih68J1X33fu%2FaWHy1BJci2A3OW09cKGh3TKYq%2BBSQRxWKu1HcKNaBwThBosDoCaFTq3U38XxPbaByDXni0YHoJb3j5kwrB4wpstD%2FDGX1CxHyw2FyInM83fEuDDhXnnnfiDOFIKNUL8LJ8YKkB8ZY6fHz9QCdJVmlgk%2BSbYPM1VKk20zTnz9QvkYmS&X-Amz-Signature=2a5acd83a9006b4f26edcee1195da8e80d02e495e84cda3672b60b28ef08a06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
