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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644EV5IJR%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETGhE0XzaRZMY5%2FHvGecu%2BJ1lIidBdOeYrRNe%2BFjsxAAiEA3Vf6CMd%2Fvmr0i6eRzOquc01YU0MIAJ9Zj%2FYgQYpTnkEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHGgubNUMkIKTRg0YSrcA6Izm%2FUC2b91xOtve7Z66CevMt0O7%2FwxSDICJ9AHxOTWUhD7E8zAVatMc9lEqmhYIE%2FichAWsSVR57KLcUS8LLgQaHyxatoXwjHDUobhZkU7ibaOyHx7Bdvu8BQr7TqWHfkOd67gqhTQihxOd4qIvnXCXvvGbf7tOLZgDQl2B%2BSg8bkXVJAo9eZoAmNns%2BXAQf%2FwH7Z0mVxyEN9uQpIw9km5dhtQEz2QrBIrrn0fGk4pt4RwAVPVMu4aQgfbETmG67gojscx3tWl1IT2u9OGQB0e0hTtJaTMmjgmPOlklSmAF3ygqEtF1hrSElDzw4hRrLPcbLmdQ0U4TRaFMkmrfMTeXTaLkaNvlhhhcoSPF0zv342npDeyiskWNL6i5mFUAmOxR72NGBaeem0pjIu13p9jF6XseQxuyuaO2u8WXtC0PMlIWzNfdcwgI%2FwkY0S3U3BHdbWucfnLIt9BYyT%2BNpLwhUWRv7%2FA%2BKe9Q1BpxYKSJkFhHD9UWqFPeIzPM%2BnzjEdnCLcOfvhUcT%2Fk1aWAloz8O3HgvqSCRMVe1qG0yQGDn%2BqHwgj7TmzZf1Jyd202OmbF0D6hNWxd1UJFYNiiz3ojcJ2JP2W3Xi46dJV28%2FjTEau2IZKHKdWM7mN3MIDTksIGOqUBG8DZi27poT2469VsUGU6H%2FODHjhyxSnXN%2BZ%2B7wHLGWm2ZOTxuExqFzauRH%2BBECD4petuP6AcBlk4TjKrDDSJciAIffqLcxlzy0S2EVw7m3YjyGIZthCogIEH2cA2CzHGI6HcqtCPEKULI%2F8ZZBYBdbvgS4Ee2ZEah61K2FnjrtH2k83rH5XSpFekpMQKc6FBmvwbnF%2FNhpg92qd7S%2Bb5YktCr2T3&X-Amz-Signature=d5e2fbcc038396f3bd8bcdcf24ade1504e49012182bc7064df7284b75854dc25&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644EV5IJR%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETGhE0XzaRZMY5%2FHvGecu%2BJ1lIidBdOeYrRNe%2BFjsxAAiEA3Vf6CMd%2Fvmr0i6eRzOquc01YU0MIAJ9Zj%2FYgQYpTnkEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHGgubNUMkIKTRg0YSrcA6Izm%2FUC2b91xOtve7Z66CevMt0O7%2FwxSDICJ9AHxOTWUhD7E8zAVatMc9lEqmhYIE%2FichAWsSVR57KLcUS8LLgQaHyxatoXwjHDUobhZkU7ibaOyHx7Bdvu8BQr7TqWHfkOd67gqhTQihxOd4qIvnXCXvvGbf7tOLZgDQl2B%2BSg8bkXVJAo9eZoAmNns%2BXAQf%2FwH7Z0mVxyEN9uQpIw9km5dhtQEz2QrBIrrn0fGk4pt4RwAVPVMu4aQgfbETmG67gojscx3tWl1IT2u9OGQB0e0hTtJaTMmjgmPOlklSmAF3ygqEtF1hrSElDzw4hRrLPcbLmdQ0U4TRaFMkmrfMTeXTaLkaNvlhhhcoSPF0zv342npDeyiskWNL6i5mFUAmOxR72NGBaeem0pjIu13p9jF6XseQxuyuaO2u8WXtC0PMlIWzNfdcwgI%2FwkY0S3U3BHdbWucfnLIt9BYyT%2BNpLwhUWRv7%2FA%2BKe9Q1BpxYKSJkFhHD9UWqFPeIzPM%2BnzjEdnCLcOfvhUcT%2Fk1aWAloz8O3HgvqSCRMVe1qG0yQGDn%2BqHwgj7TmzZf1Jyd202OmbF0D6hNWxd1UJFYNiiz3ojcJ2JP2W3Xi46dJV28%2FjTEau2IZKHKdWM7mN3MIDTksIGOqUBG8DZi27poT2469VsUGU6H%2FODHjhyxSnXN%2BZ%2B7wHLGWm2ZOTxuExqFzauRH%2BBECD4petuP6AcBlk4TjKrDDSJciAIffqLcxlzy0S2EVw7m3YjyGIZthCogIEH2cA2CzHGI6HcqtCPEKULI%2F8ZZBYBdbvgS4Ee2ZEah61K2FnjrtH2k83rH5XSpFekpMQKc6FBmvwbnF%2FNhpg92qd7S%2Bb5YktCr2T3&X-Amz-Signature=8b2bad67cf7775ab6f4e0f37503423a799445b496c4f78ecc16edc842527fe70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
