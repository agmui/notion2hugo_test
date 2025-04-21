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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PLNQZZV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCKjeurIHDwP%2FIzZYFJiIUkk5S2Tjp6sdPDFo1iHMar2gIhAIbSUwUe7NiCEU5DYMGj3qE6D6R8NQvPKMEuphq0%2By%2BVKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQHH6uKwrfEBzuh5sq3APP2SEb7SwkYzjZwEppn8ipaYYzkwrcfuy7gSBZn3ZpfjPXE46hhxUv41t%2Blgk0SdWcltg%2F23Hww4lWLpfkXWjy098gotDJN1hbSlnZERqpes75nISTtHYpDPLkMyCiX7p%2FUtwGwiVcOJmx7BZuGjDwQvgS6muppmMxxj282rECpK0mew9DRcytUnmi2qefvOsXphMcwyJF7BxpgbAWeiS3501cIEMOVEStoFiWFS15u6MkIPdSV%2Bdsb47EibSCFDQg4NnjtawDBydtZdu9arUHZA31d74x5CnjntOK2Pk7Gf3t1Q%2FJRZIKk7e1cxYN3mRyKJWszYwEn2jzV7gt8I4VplaG3bzcyzOhqO7VfQN5o2ser%2BHnPsmeROOJ9jzQq2vv%2FeiPDPp2x%2FjUlhKKqsJsTvf3K2YuUiccWV%2FVahyVc3QzV3hVsVEX%2BZxZNyxj2Xg%2BYmgyGNc8eaqY3T1Gy%2FHQXRaFw%2BpXB3jPS2wnmgl5ozIvXKcE6sC%2B865lNHpjmKRfYVZmEYYkBPtp7dZZCGMjSuQhLm45caDm0PsprA2jdtx8jc8SxQikfySE%2FtsPSsVD%2FNDUmtK8Qq3qO3Ml0G%2B4xDQPaoTb%2BabouCKXV6OgkMZwQUtPCdkwb%2BMJFjDp%2BJbABjqkATFVLUu9TgD0Npr9535NyvgoH0xq3wj%2BJW6t1fPIESbywyB49k0x%2Bs1KduYKPZimze341kRZkS52mL8%2BWNT8fPKWMdkwurTzFUejtVNY02IekMLu0nOssHoLViRlHHEucFCWIAtJJZ8rOA81ct2YIaRq%2Fz%2BrQg%2F3C34ESI7F45RHvO%2FR%2FM61DM8Y%2FC1KB6TFZV%2BrAxDKKKrrhAjFQbOEBdVY9OAv&X-Amz-Signature=c6e25cd6364953766951c014e73c82e58de15f1374a51b0531ab0154a7843d13&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PLNQZZV%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T041135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCKjeurIHDwP%2FIzZYFJiIUkk5S2Tjp6sdPDFo1iHMar2gIhAIbSUwUe7NiCEU5DYMGj3qE6D6R8NQvPKMEuphq0%2By%2BVKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQHH6uKwrfEBzuh5sq3APP2SEb7SwkYzjZwEppn8ipaYYzkwrcfuy7gSBZn3ZpfjPXE46hhxUv41t%2Blgk0SdWcltg%2F23Hww4lWLpfkXWjy098gotDJN1hbSlnZERqpes75nISTtHYpDPLkMyCiX7p%2FUtwGwiVcOJmx7BZuGjDwQvgS6muppmMxxj282rECpK0mew9DRcytUnmi2qefvOsXphMcwyJF7BxpgbAWeiS3501cIEMOVEStoFiWFS15u6MkIPdSV%2Bdsb47EibSCFDQg4NnjtawDBydtZdu9arUHZA31d74x5CnjntOK2Pk7Gf3t1Q%2FJRZIKk7e1cxYN3mRyKJWszYwEn2jzV7gt8I4VplaG3bzcyzOhqO7VfQN5o2ser%2BHnPsmeROOJ9jzQq2vv%2FeiPDPp2x%2FjUlhKKqsJsTvf3K2YuUiccWV%2FVahyVc3QzV3hVsVEX%2BZxZNyxj2Xg%2BYmgyGNc8eaqY3T1Gy%2FHQXRaFw%2BpXB3jPS2wnmgl5ozIvXKcE6sC%2B865lNHpjmKRfYVZmEYYkBPtp7dZZCGMjSuQhLm45caDm0PsprA2jdtx8jc8SxQikfySE%2FtsPSsVD%2FNDUmtK8Qq3qO3Ml0G%2B4xDQPaoTb%2BabouCKXV6OgkMZwQUtPCdkwb%2BMJFjDp%2BJbABjqkATFVLUu9TgD0Npr9535NyvgoH0xq3wj%2BJW6t1fPIESbywyB49k0x%2Bs1KduYKPZimze341kRZkS52mL8%2BWNT8fPKWMdkwurTzFUejtVNY02IekMLu0nOssHoLViRlHHEucFCWIAtJJZ8rOA81ct2YIaRq%2Fz%2BrQg%2F3C34ESI7F45RHvO%2FR%2FM61DM8Y%2FC1KB6TFZV%2BrAxDKKKrrhAjFQbOEBdVY9OAv&X-Amz-Signature=24a651dddce18782a44ecacdf82174cd74f9be39ca5a53c8a920488b664f8053&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
