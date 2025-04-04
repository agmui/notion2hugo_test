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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAY2LY3N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRynQ5JlyWx7G1hLWtygZC5sD%2BUd88vWnR7ozgZ1o8zAiBOwMDw2uTllv%2FIYK0GF76sr%2Bt1auffxN3xsCLEY5U7siqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRGybePD4PjKYtG%2FwKtwD49yM0FpBIkAVb1gkvrf1tbR1PrSvcRROuZRoPPJYDmMPv3APYY%2F%2F8Edmy4%2BJotpvgznSOogk%2FCl6ix587s9wgyBCzCXv16o5ZXhfYjW4MMcdLGip8GhV8XZkR2gba8IEHIoX2v3NxVruH4wjwq6rWZDw8%2B9%2FDNg7aL%2BCY83yX20yFXw50mtLLtp2HIFCCHqBq72DuSJeTuC0TuaI7ZA6TVZQxQnRVG%2FAKjGwJ1yiCmMSCHs2rg2eBtglMyAQRC%2BcQ6KHqCAvwklkXSJBQWz99tdp%2BjkYfssfA3nXVZooMHB%2F0KxgU%2F%2BCg25QeOffMI3jLLLwEtxCE8l8dmSDhGBz1FfIOPkonwrCsFlB7T65Sw03LutVsZDD4MVJWKD5D%2F5ocPFgSC2bKfeM3OpjokN5ZKMi9%2FL6oKG7C4tFOTf5uxDluTDOZFKYwxDdkDt8GIyX%2BL5%2FLzUFgtmE%2BSuQksfofd5W9RwOb4qnRtO45g%2FoWARmOGLjh7eGph20oXDSJLstINd%2Bfz0c0WNpRPqzfyi5QRRhhjMi1UmnXpiMSvM0AZeWpzDwGlj%2F3RHVxQrcoqRVLs%2BcWX91E0YhxUW7y%2BohE5fG5IhMzHqK2TW20BKa%2FqucRBD0dQnn5pQvXTow56u9vwY6pgGtNfOZ794V4t4AASFo3xn1uBGTEuVTTcAIJxNriHbqeefua0Mx5QJOq%2FXGqhuuE5YlQUZuvstJCh%2FKJc9x8qQI%2BoYz7N9XV2ruw4Ico2dek7V%2BO1LbmhtzehCINoquaFVxBnbSAtmf234R5ysKKwO8vFmZp%2FMFT8XpEqlTfqP3YDy%2BQaX1e5IRW32Pfq6WyTILPZTb9KhWNtVOVa2XLxnKkfQ6Wu%2Fx&X-Amz-Signature=e076a3790b2a1a8b87676f1e4709f5e7068c951993b47e5f0defbb6cbe0a3e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAY2LY3N%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRynQ5JlyWx7G1hLWtygZC5sD%2BUd88vWnR7ozgZ1o8zAiBOwMDw2uTllv%2FIYK0GF76sr%2Bt1auffxN3xsCLEY5U7siqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRGybePD4PjKYtG%2FwKtwD49yM0FpBIkAVb1gkvrf1tbR1PrSvcRROuZRoPPJYDmMPv3APYY%2F%2F8Edmy4%2BJotpvgznSOogk%2FCl6ix587s9wgyBCzCXv16o5ZXhfYjW4MMcdLGip8GhV8XZkR2gba8IEHIoX2v3NxVruH4wjwq6rWZDw8%2B9%2FDNg7aL%2BCY83yX20yFXw50mtLLtp2HIFCCHqBq72DuSJeTuC0TuaI7ZA6TVZQxQnRVG%2FAKjGwJ1yiCmMSCHs2rg2eBtglMyAQRC%2BcQ6KHqCAvwklkXSJBQWz99tdp%2BjkYfssfA3nXVZooMHB%2F0KxgU%2F%2BCg25QeOffMI3jLLLwEtxCE8l8dmSDhGBz1FfIOPkonwrCsFlB7T65Sw03LutVsZDD4MVJWKD5D%2F5ocPFgSC2bKfeM3OpjokN5ZKMi9%2FL6oKG7C4tFOTf5uxDluTDOZFKYwxDdkDt8GIyX%2BL5%2FLzUFgtmE%2BSuQksfofd5W9RwOb4qnRtO45g%2FoWARmOGLjh7eGph20oXDSJLstINd%2Bfz0c0WNpRPqzfyi5QRRhhjMi1UmnXpiMSvM0AZeWpzDwGlj%2F3RHVxQrcoqRVLs%2BcWX91E0YhxUW7y%2BohE5fG5IhMzHqK2TW20BKa%2FqucRBD0dQnn5pQvXTow56u9vwY6pgGtNfOZ794V4t4AASFo3xn1uBGTEuVTTcAIJxNriHbqeefua0Mx5QJOq%2FXGqhuuE5YlQUZuvstJCh%2FKJc9x8qQI%2BoYz7N9XV2ruw4Ico2dek7V%2BO1LbmhtzehCINoquaFVxBnbSAtmf234R5ysKKwO8vFmZp%2FMFT8XpEqlTfqP3YDy%2BQaX1e5IRW32Pfq6WyTILPZTb9KhWNtVOVa2XLxnKkfQ6Wu%2Fx&X-Amz-Signature=963f456c67189b481f257aa51b831b4830b90f4f4af48aa7012d82fdfcd3210c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
