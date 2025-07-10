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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEP7ZJZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFyhVzzQRBa5ftsOYeHumkMfSOQ%2F0ULDotSmPggQVIQAiEA0NSEqxQkstFTz6MKAuo02nUFfdfbs13blwLsinCLhiYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmaOBBTK%2FBJ8FC0ASrcA0R%2BLHN%2BqJZkZV%2BR5584CrHPmwU%2F73JB5GZKU4FBMwTbzLRffCzcNcRs0gLd5nVh7x8M8D6wcyOgVv%2F%2BBtbn2sgs6h47h5uUJUoqfAEDK7UaRafN%2Bx3zhFTatIMiNx6OreTvg64LUkoP%2FPYVpQoESdErBWfUaoWSw9ETQnbtJRD36Q%2FN0c4lCIFYXCZjOOOTwue1hVUP%2FH6MSsFgepH7ttjpsEYlGba7abxJn%2B2G1IXEbufKm5iyxDlplC5eaG9kKod8nGuiceW3%2F%2BSDwcwrnaQ4kyQEI3PQ%2FfYqZHHSgDHkU84D5iNqIpbv1seZt%2FyqVec1HCnSzKHJgsdFRCmlCfc7WV1pQLNclZ6TLMTJ9yCZ0uI8hqggDq7ZdWHJcddci7oKOsaIMXFl1N0IQz0DHCUhSKHE5HNniaZy%2BN1%2BAKzwoqyRNe95Doek1OcbpqLNoHhA1V9KF%2By5TK84FGZDiZDfsOWkEhROACShd6QniZbEXN4BErAeSojUMW0MkADSX6bHuAmwd%2FjXpCSjPy7LSisq1SzaxVh7YFHlsGIDT4Oww90bWEzZ6JORtUp2FrI%2B6Hpi2Lxo6lLIeTzLdCesvSvrLtbiZldClQs6TTn9%2Bajc3N1ZZFn96eOzxcxcMO2qvsMGOqUByQWWxu6%2BEVnVTt8VY3coUspMb8aHq8HWaEUkLcSQYJsrUT7aq9rOkoK%2B2M8oWPONAqNZll%2BVJ8exy23sNCsHjPZz1%2FCVCrR3x6JG6%2B6sPZe88BwupVndUJQZxprgOuPwbzk2jjkhBFb1Qy0MwdK%2B%2FJ0VTuP33z2pBFJZmSP%2FbrUqxdF5KHPreI9faHnT5FqxxPVwXqXuSoccyT5Zxe%2BF1K0wkgZt&X-Amz-Signature=cb18cfd3242886bdbe584aa756c1196c2e0bcab619b05852e07e047d140da7c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEP7ZJZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFyhVzzQRBa5ftsOYeHumkMfSOQ%2F0ULDotSmPggQVIQAiEA0NSEqxQkstFTz6MKAuo02nUFfdfbs13blwLsinCLhiYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmaOBBTK%2FBJ8FC0ASrcA0R%2BLHN%2BqJZkZV%2BR5584CrHPmwU%2F73JB5GZKU4FBMwTbzLRffCzcNcRs0gLd5nVh7x8M8D6wcyOgVv%2F%2BBtbn2sgs6h47h5uUJUoqfAEDK7UaRafN%2Bx3zhFTatIMiNx6OreTvg64LUkoP%2FPYVpQoESdErBWfUaoWSw9ETQnbtJRD36Q%2FN0c4lCIFYXCZjOOOTwue1hVUP%2FH6MSsFgepH7ttjpsEYlGba7abxJn%2B2G1IXEbufKm5iyxDlplC5eaG9kKod8nGuiceW3%2F%2BSDwcwrnaQ4kyQEI3PQ%2FfYqZHHSgDHkU84D5iNqIpbv1seZt%2FyqVec1HCnSzKHJgsdFRCmlCfc7WV1pQLNclZ6TLMTJ9yCZ0uI8hqggDq7ZdWHJcddci7oKOsaIMXFl1N0IQz0DHCUhSKHE5HNniaZy%2BN1%2BAKzwoqyRNe95Doek1OcbpqLNoHhA1V9KF%2By5TK84FGZDiZDfsOWkEhROACShd6QniZbEXN4BErAeSojUMW0MkADSX6bHuAmwd%2FjXpCSjPy7LSisq1SzaxVh7YFHlsGIDT4Oww90bWEzZ6JORtUp2FrI%2B6Hpi2Lxo6lLIeTzLdCesvSvrLtbiZldClQs6TTn9%2Bajc3N1ZZFn96eOzxcxcMO2qvsMGOqUByQWWxu6%2BEVnVTt8VY3coUspMb8aHq8HWaEUkLcSQYJsrUT7aq9rOkoK%2B2M8oWPONAqNZll%2BVJ8exy23sNCsHjPZz1%2FCVCrR3x6JG6%2B6sPZe88BwupVndUJQZxprgOuPwbzk2jjkhBFb1Qy0MwdK%2B%2FJ0VTuP33z2pBFJZmSP%2FbrUqxdF5KHPreI9faHnT5FqxxPVwXqXuSoccyT5Zxe%2BF1K0wkgZt&X-Amz-Signature=fd14e3750d20555ef90de326d8d3281038deeef126079074cb6434d126c941ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
