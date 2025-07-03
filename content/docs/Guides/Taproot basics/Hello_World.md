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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJLW4GF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD6Fb6AGLjbICHWxubgIt3PtP27qyzOIuCD5PzU1NJZnwIgFjAjlpNKT8TEbltvdu1o%2FA9o7en84AR4%2F1c49Mu67Awq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDLUvF%2BT%2B1E%2FLvo%2BtESrcAwt4ZYClnw9MHGW7y6q%2B3h5A7D6iDZ9DlrsuTavE1xkccbdF9YskxmtV8XPXZ8Rsm1O5ehj7X5jfUHseUHqumFBQNRH5aPlqfbq69MsQJjN29UQKyzi2NiCZh1hUoz%2F3ReLfyOaZ2%2FcwvOP6Zb8YeYO8cAcmMNHZT9GkGATwxC8YTwukNVFhNxwqRHUAOlRxfMPlY03jSSIaH%2FLF7BaY6I%2BD8BX7dEcpbmdDn7OOjlGzKe%2FDsIWkZeGwhvreDO4iGJ5D10GkJC0UdnqOKsVR6QtJMNcLIlRD8ltjKqtSbZtUNbS3UaB%2BuJHto7ippIOTCesS24uSczKjYjKmam2RKcXs7A6jDATw%2FTYxg8uK3w7q80%2Bhg%2BOrhkGE2PrPof3HJKwV%2FZUSIKL5IDp6eYfNOpeoDxvqrClrpZ9TvqYsGnq4k%2BC8NzE2byPzAn1DF4hvKrKhbYRVNrN43nEP1IvzjoxBY21734pUx1NeZOFS6HZjPvM3iXby7Z7UmUNEUHAdlo6059NbofOIUq2acXHbimLkZ4U5OudQTuITUpWxexO3mUCL65VDpnTAwz97oH2c9eYsZ%2BHhLPfUQOh3lgNC0k3YsoO4sq4wYJql%2BuYSB9c0nztYt8CzNiDEt%2BEoMISOmsMGOqUBe%2F6ybKx2CLKYsFa0Bo60Rhy9RxDM0hNIndLgkQARr5gK0z9fUGEZSCAkNuumjOzwS3A1s8%2FZ%2F%2F8eG2y3J0NKt5QwGBKEBEAVcT2sBDyMXzhdIMnhbzeOexzueq56qzrnELL9wY1fgo9hXccY4l9FVcekTf%2F6gBh38xcz7la3MbQhKeDziBkc9Swn3ev6NzcPxihHXUfn0mIH3kUepmUnzXfunlqH&X-Amz-Signature=b9680b3eed53c272b210c4190806eb6bac3926d443921daa4895fc657b942e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJLW4GF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD6Fb6AGLjbICHWxubgIt3PtP27qyzOIuCD5PzU1NJZnwIgFjAjlpNKT8TEbltvdu1o%2FA9o7en84AR4%2F1c49Mu67Awq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDLUvF%2BT%2B1E%2FLvo%2BtESrcAwt4ZYClnw9MHGW7y6q%2B3h5A7D6iDZ9DlrsuTavE1xkccbdF9YskxmtV8XPXZ8Rsm1O5ehj7X5jfUHseUHqumFBQNRH5aPlqfbq69MsQJjN29UQKyzi2NiCZh1hUoz%2F3ReLfyOaZ2%2FcwvOP6Zb8YeYO8cAcmMNHZT9GkGATwxC8YTwukNVFhNxwqRHUAOlRxfMPlY03jSSIaH%2FLF7BaY6I%2BD8BX7dEcpbmdDn7OOjlGzKe%2FDsIWkZeGwhvreDO4iGJ5D10GkJC0UdnqOKsVR6QtJMNcLIlRD8ltjKqtSbZtUNbS3UaB%2BuJHto7ippIOTCesS24uSczKjYjKmam2RKcXs7A6jDATw%2FTYxg8uK3w7q80%2Bhg%2BOrhkGE2PrPof3HJKwV%2FZUSIKL5IDp6eYfNOpeoDxvqrClrpZ9TvqYsGnq4k%2BC8NzE2byPzAn1DF4hvKrKhbYRVNrN43nEP1IvzjoxBY21734pUx1NeZOFS6HZjPvM3iXby7Z7UmUNEUHAdlo6059NbofOIUq2acXHbimLkZ4U5OudQTuITUpWxexO3mUCL65VDpnTAwz97oH2c9eYsZ%2BHhLPfUQOh3lgNC0k3YsoO4sq4wYJql%2BuYSB9c0nztYt8CzNiDEt%2BEoMISOmsMGOqUBe%2F6ybKx2CLKYsFa0Bo60Rhy9RxDM0hNIndLgkQARr5gK0z9fUGEZSCAkNuumjOzwS3A1s8%2FZ%2F%2F8eG2y3J0NKt5QwGBKEBEAVcT2sBDyMXzhdIMnhbzeOexzueq56qzrnELL9wY1fgo9hXccY4l9FVcekTf%2F6gBh38xcz7la3MbQhKeDziBkc9Swn3ev6NzcPxihHXUfn0mIH3kUepmUnzXfunlqH&X-Amz-Signature=54762e23d7ecb991dad60ab7afb09cbb4ebae34b835942148bb7cc9499d1da4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
