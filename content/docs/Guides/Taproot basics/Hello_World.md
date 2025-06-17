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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GXHR5U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHlsWo%2Ba7rtxmmYAq1IZh0G3b3yYIgEQLHOZluUerHSAiEAwUo59jkJ5bsjKA88JGkg0ZUAPPV6VdrED7TdwczMWWIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKmLNNfA%2BwpOBHX6%2BCrcA3IuYHfz395oOgz2%2F5y2x9cKec8aWWTTRkUrg2Zr1WGtmUskzsRNhoft5JiCXDNxXZ6%2BKYMWRdcVqVVCWTclovH6diOfEQlwEg0bVfTuN6MqMZKnxv72MDD8i4KRXeEnlYRFc9w0cdGNXsUIxv1OrDS1IZlpUyLjND0ddQeqKxS14MoPnLmZV6lfPO%2BFp9YTI80ZHTpwbN8OHy41Jg84sX7kys4nqS08rkxHbnyx1tgIxBnkc9vPYneRZvE2HTcNI31RrcILlhD6u%2BlTgwv9YzpQVa10W6dfyVCzWS7ygv2gFuHuOHTqfCfPWqbbYCYYYGPChOBJlWnP%2Bo0a8Qrr%2BfWEUcCGAb3nLqxI1qsDI99tSm%2B%2FlRZLJlsLYqzKdF9l1nFG0EbLFpRJoPST3H%2FxnUUQUJQH1VFYbVyyjFCfKp8yEF2slISqA%2BLNPYbk7FtDwalXn35ipxzl7WX8gQkA%2FAkvyFhP663w40GxslMe16U%2FDvBf5bWAgsvqel8cftMbhIOXBrra1XYqqTORpN8rh9WLtCvQclY%2BoCDCj1H5d0viXOjJmEmAPd4bR7WqVWQEyAdE%2BVHM9ugplYac0UrwEK8QlkFFEJ01DOw4UmC6mPqGvHEj3tJ%2BYenAHSC0MOuJxsIGOqUBqVNG%2FjzjXPiV%2BLNiIXzBslxvjUufyfrFGoulRLkWNK8Ww8hEIjFgdHWqUkuvLvAuLHnyH3w2qEiMbyQo8pNXbyaMr%2FkEZPCK5mu5AVC0WZVU1Y1xEcEeTGZDreuzd7oIcgo3dwOVXIBJuy%2FAstESQoVvGC93bnCx02GKyuVmrwGFHBHnE8V8RMTIok2ohRznyljoSaS5vHRuWvBa6GSo6Rf%2FHD2y&X-Amz-Signature=f1b45edcae536b0b812f38d66038b700abe042df4c3dccd96ae89b2383b71939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GXHR5U%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHlsWo%2Ba7rtxmmYAq1IZh0G3b3yYIgEQLHOZluUerHSAiEAwUo59jkJ5bsjKA88JGkg0ZUAPPV6VdrED7TdwczMWWIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKmLNNfA%2BwpOBHX6%2BCrcA3IuYHfz395oOgz2%2F5y2x9cKec8aWWTTRkUrg2Zr1WGtmUskzsRNhoft5JiCXDNxXZ6%2BKYMWRdcVqVVCWTclovH6diOfEQlwEg0bVfTuN6MqMZKnxv72MDD8i4KRXeEnlYRFc9w0cdGNXsUIxv1OrDS1IZlpUyLjND0ddQeqKxS14MoPnLmZV6lfPO%2BFp9YTI80ZHTpwbN8OHy41Jg84sX7kys4nqS08rkxHbnyx1tgIxBnkc9vPYneRZvE2HTcNI31RrcILlhD6u%2BlTgwv9YzpQVa10W6dfyVCzWS7ygv2gFuHuOHTqfCfPWqbbYCYYYGPChOBJlWnP%2Bo0a8Qrr%2BfWEUcCGAb3nLqxI1qsDI99tSm%2B%2FlRZLJlsLYqzKdF9l1nFG0EbLFpRJoPST3H%2FxnUUQUJQH1VFYbVyyjFCfKp8yEF2slISqA%2BLNPYbk7FtDwalXn35ipxzl7WX8gQkA%2FAkvyFhP663w40GxslMe16U%2FDvBf5bWAgsvqel8cftMbhIOXBrra1XYqqTORpN8rh9WLtCvQclY%2BoCDCj1H5d0viXOjJmEmAPd4bR7WqVWQEyAdE%2BVHM9ugplYac0UrwEK8QlkFFEJ01DOw4UmC6mPqGvHEj3tJ%2BYenAHSC0MOuJxsIGOqUBqVNG%2FjzjXPiV%2BLNiIXzBslxvjUufyfrFGoulRLkWNK8Ww8hEIjFgdHWqUkuvLvAuLHnyH3w2qEiMbyQo8pNXbyaMr%2FkEZPCK5mu5AVC0WZVU1Y1xEcEeTGZDreuzd7oIcgo3dwOVXIBJuy%2FAstESQoVvGC93bnCx02GKyuVmrwGFHBHnE8V8RMTIok2ohRznyljoSaS5vHRuWvBa6GSo6Rf%2FHD2y&X-Amz-Signature=6dc3fce89d6955adead9ca468b4529051533e0c423d578ce2187f3d872d51476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
