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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHS7WAZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuomkVzis%2FTG6STVzeiQJEZKTNldGdvcgOODcyPRsuZAiA9YkhymzKIXfkTmr2ixhWLctq7a1F%2FhwSiaxvpBJEwhyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlu7tytwAIInGzwVUKtwDYIz9YQuM%2BzMVvWiY2h85Ha%2B4acRdyBnUdD4YgUvd18by3h7aLoxXM30aETpOqamrOjZos9cyksfqw53fIl9O%2Ff5weMqqfiUIGnv030Q%2FniQdhY5lRaH59MnoNrrpXMqjg68%2FYFytGFWNwtlaJLPaTxDcjsD3WSIK5pF8AQ8d5jhhEFpkrRQQRZbr2WcOTu6bJ4G80T4DHH0iUWQFiIzf1iYUNPzucSc7YuyovBy9WR6uT53Ur9%2BgHyExOW7KZ1t0%2BeCXJnd9K8GaFAoMMzhfJyc9WMdRZP14xXSAU%2F24wd2tJi%2FXS2W2mWVX6VyGmc0SVD5ZSRCWnUz3MX75XCNdIqoY8xRRRmcBIARwUMIwGvsWjW6zahHNYcwOhYQA7EawYAR%2BKrftlGLnTkdQiAxs5YtX1QihbWFjtnWgYo5Ha%2BlbjcBEpMkSd3bKDd2Yv5Qme%2BgWU9kP8s0U6DYpp%2BM%2BGnx%2Bvl4DK00%2BLhx%2B9vkW%2Bcft3pWtMRGjX1OagksC99LGkLFKPrkS41CfTyXKW81VhVkiIewkGEZeU74wAJMxvpbagGBnhd5oSQBIfwmILDAfKp9k9VYso7JirD5keDuiQIf4gfrVNQGX%2Bjf%2BDa22bJ47CR%2FvJORoLJwWm%2FswnMHDwgY6pgGB5iu43TDNKyaFCCMlccQAM1lbOK36uZo%2FhwiJNpqNPezWRFS34iHckYRRYuceUaZf0SAzUoxZIdJ5g8VuHJxx%2FCqiKvHI%2BRRNNk%2FYBWI2YKW2A6ZmxCwnr07rg%2FMKvjNzBcFQxE6qiRfo8MbMElXHDELR2JBdPx0v06k53wNSGQ%2Fn5Ok7em9%2BgmySF40RowIc0IK7QpQ5RGU%2BGM89txJOqZFWMoty&X-Amz-Signature=547121fd73374e14bb6f091e5c37cc92f03bf6792ee8d0fcc289e408f9809af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHS7WAZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAuomkVzis%2FTG6STVzeiQJEZKTNldGdvcgOODcyPRsuZAiA9YkhymzKIXfkTmr2ixhWLctq7a1F%2FhwSiaxvpBJEwhyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMlu7tytwAIInGzwVUKtwDYIz9YQuM%2BzMVvWiY2h85Ha%2B4acRdyBnUdD4YgUvd18by3h7aLoxXM30aETpOqamrOjZos9cyksfqw53fIl9O%2Ff5weMqqfiUIGnv030Q%2FniQdhY5lRaH59MnoNrrpXMqjg68%2FYFytGFWNwtlaJLPaTxDcjsD3WSIK5pF8AQ8d5jhhEFpkrRQQRZbr2WcOTu6bJ4G80T4DHH0iUWQFiIzf1iYUNPzucSc7YuyovBy9WR6uT53Ur9%2BgHyExOW7KZ1t0%2BeCXJnd9K8GaFAoMMzhfJyc9WMdRZP14xXSAU%2F24wd2tJi%2FXS2W2mWVX6VyGmc0SVD5ZSRCWnUz3MX75XCNdIqoY8xRRRmcBIARwUMIwGvsWjW6zahHNYcwOhYQA7EawYAR%2BKrftlGLnTkdQiAxs5YtX1QihbWFjtnWgYo5Ha%2BlbjcBEpMkSd3bKDd2Yv5Qme%2BgWU9kP8s0U6DYpp%2BM%2BGnx%2Bvl4DK00%2BLhx%2B9vkW%2Bcft3pWtMRGjX1OagksC99LGkLFKPrkS41CfTyXKW81VhVkiIewkGEZeU74wAJMxvpbagGBnhd5oSQBIfwmILDAfKp9k9VYso7JirD5keDuiQIf4gfrVNQGX%2Bjf%2BDa22bJ47CR%2FvJORoLJwWm%2FswnMHDwgY6pgGB5iu43TDNKyaFCCMlccQAM1lbOK36uZo%2FhwiJNpqNPezWRFS34iHckYRRYuceUaZf0SAzUoxZIdJ5g8VuHJxx%2FCqiKvHI%2BRRNNk%2FYBWI2YKW2A6ZmxCwnr07rg%2FMKvjNzBcFQxE6qiRfo8MbMElXHDELR2JBdPx0v06k53wNSGQ%2Fn5Ok7em9%2BgmySF40RowIc0IK7QpQ5RGU%2BGM89txJOqZFWMoty&X-Amz-Signature=394e9e72874199da27a69c6826cbe37cc7aa1e2edc82fe1200e8cf1032570c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
