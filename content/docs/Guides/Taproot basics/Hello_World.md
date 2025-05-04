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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWFZDVE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCM0y6WUsd5RaVwWcXFzyg1kAuXOk3OcYQfKbkvQMBc5QIhAMB%2Fh32DDNHg0IidS5XC3gkm6Cpyg2NEbrEw2O8726%2BSKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvIW6cz14DB4KLeUq3AOwqrbuG6gHAVJlXRLY4I0tzeqXg3QpyMF8bwVUKTK0wzoALAj2cnUMLq%2BbYAZp6iBtpQDneJG0V9CS1M9O%2FX7grtZJ1ed%2BEWTfWGsAE%2BFAJClaEhAB5AMcIWJT6p9W8r27qMOA%2B4TN%2BKRAPgYNX1ZCNHHQh7qBz2fzxE2ZCu33JPTkg6L0KahLgfin3cDtwlshsp6QVIoAjjXFmaXgGt7iHtzNGzJ%2BV0K5bztgEJ3uc53mrNgAnyyK2tr%2BYSbKUnJPYRo1C%2B8flSYi%2F%2FPnZtt7jo1RUYKIwafajIVIXGjwV4Vik3FQ1%2Fc3BRsOZxuLd0l3a2Px5Gsh%2B%2BOQuPrbwiJPvlr2qZ0HUIel7RjWjMpy4uotRHM%2Bp7uNY2GIdEjrrq0OcgmJIEawZqy0BJghJqjcHaQc%2FySEhkm%2FJa4vKIWTTeyJ%2FXRe5uO75Jd0ASxVZZ%2Fb0ZNFXK7IFWlOz7fGPio3C8k2zxLR%2FSvjBjpBlkKvsxN2N6STE9I8fI8ZABhyPMulxstVd1NKjRtFHhPWyt3gVoP11RM8xhtt7k0OxNL9VEp4FN5hlWxDmdc%2BRORQdPYWNBBYBMPs6DTM0nqOcqaV%2BFRyT8CNfIuEeFs2B%2BW8G3oCfuQ1jazBm1yZYjDv2NrABjqkAfSlUOaU3dwNms%2BwA8UPoB4aOGbP1BU2PqpkqGhQ2SHCGKm%2BQ8kpM3zLWh2bornnxmnYbt6MOYPaZAMlyOO1GEuR1JizAneWm5%2B%2B%2FC32WHrT2CU5Bzqszc5McBWbmubGCyY2glcG6Y0GwhknfiRDmgkqXKpkVnWpLr2UsOMDsh3ufNQ17ExDwPMCa5mdjJcyI1%2FjVcRowKSSc2VzK5e4rsRvQCYw&X-Amz-Signature=ec6dcde035e783fbe9cbb356a757a44b66497bd71d8dee9a636572be1ed44609&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWFZDVE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCM0y6WUsd5RaVwWcXFzyg1kAuXOk3OcYQfKbkvQMBc5QIhAMB%2Fh32DDNHg0IidS5XC3gkm6Cpyg2NEbrEw2O8726%2BSKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwcvIW6cz14DB4KLeUq3AOwqrbuG6gHAVJlXRLY4I0tzeqXg3QpyMF8bwVUKTK0wzoALAj2cnUMLq%2BbYAZp6iBtpQDneJG0V9CS1M9O%2FX7grtZJ1ed%2BEWTfWGsAE%2BFAJClaEhAB5AMcIWJT6p9W8r27qMOA%2B4TN%2BKRAPgYNX1ZCNHHQh7qBz2fzxE2ZCu33JPTkg6L0KahLgfin3cDtwlshsp6QVIoAjjXFmaXgGt7iHtzNGzJ%2BV0K5bztgEJ3uc53mrNgAnyyK2tr%2BYSbKUnJPYRo1C%2B8flSYi%2F%2FPnZtt7jo1RUYKIwafajIVIXGjwV4Vik3FQ1%2Fc3BRsOZxuLd0l3a2Px5Gsh%2B%2BOQuPrbwiJPvlr2qZ0HUIel7RjWjMpy4uotRHM%2Bp7uNY2GIdEjrrq0OcgmJIEawZqy0BJghJqjcHaQc%2FySEhkm%2FJa4vKIWTTeyJ%2FXRe5uO75Jd0ASxVZZ%2Fb0ZNFXK7IFWlOz7fGPio3C8k2zxLR%2FSvjBjpBlkKvsxN2N6STE9I8fI8ZABhyPMulxstVd1NKjRtFHhPWyt3gVoP11RM8xhtt7k0OxNL9VEp4FN5hlWxDmdc%2BRORQdPYWNBBYBMPs6DTM0nqOcqaV%2BFRyT8CNfIuEeFs2B%2BW8G3oCfuQ1jazBm1yZYjDv2NrABjqkAfSlUOaU3dwNms%2BwA8UPoB4aOGbP1BU2PqpkqGhQ2SHCGKm%2BQ8kpM3zLWh2bornnxmnYbt6MOYPaZAMlyOO1GEuR1JizAneWm5%2B%2B%2FC32WHrT2CU5Bzqszc5McBWbmubGCyY2glcG6Y0GwhknfiRDmgkqXKpkVnWpLr2UsOMDsh3ufNQ17ExDwPMCa5mdjJcyI1%2FjVcRowKSSc2VzK5e4rsRvQCYw&X-Amz-Signature=af5a698e4d39541fc01c5295b3f98039279a3a96035993b7fdeb0a082bfc8dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
