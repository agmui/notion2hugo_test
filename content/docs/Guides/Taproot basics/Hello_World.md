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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3VV6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcXwxXXQ%2BA4x5zvcw%2FoU%2BIpo2o87O2QCzUDaUaumQlwIgIQPGBLwqxUTIeNeyW0OzPk%2FUm3tS%2BTMBi5lnX9WZCJQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNVZJ4xla3MfYlJzIircAzJv6HlyrF0p1F5eapkzblhRZfwAb3ah3yOQXqgyjLjpbOU51BFA1ZSUOxwL4%2FYrYnRWtz73TmX8b4EaSIXLKAgOVbzXjr39EttpGBPaN4uWK%2BB%2Bu6eKxG724ALvRZ2TDcQ8ZfRvj24LiqWCFg%2BPCjHbFUTxxNtN%2FcxEv%2FYpSzMxdcog3ZFfz9lOV1G%2FA33t68thHHbN9HIKNGdq1bc2TnYN4nciz7wqUqu9Rgw3xl4Is7TvldoS4mvwrhn%2BTNCcdf%2FXbQ7kphfmv4%2FYDnu8bOr5q%2FRrtG19Hl%2FbvZiw%2F1FZPmcs0WIao1wOZTcDFJe9Zsbp%2BVoR9u%2Fvu1PFIpWRFF8T8sz%2Bm0nvvUxnE%2FWG8LsS2FGBmJKOBuwKydw8NC0vh9j6Qq73xBMsMUYO7lSrdDuOSFmLJ1vEXO55%2BeCKOiky772DvUcUr62kx1qy67wbJr5uEtJlwu4ZYQLbFervfLW2U6Axa%2FCV6k5dwzZ%2FRE5CYbhR7A4ukU4d9YVJv0isFAVsOMCax%2FBYQc1dgD6VyyKgg1mWvWh3tMyT30UbTvGz%2FoE1g8HUnGxA%2BulbmoteHu3F11TbKD%2FfturOSxfkC%2F73uhg%2B8BqWNTqypSpzn5QGlKRcgiAYsZ3e7qhlMM2U9b8GOqUBz4NCZIW0opuyXQSySlX4SFUVxi3lbK2Ckp1D6gX6UVvp6A7xrQ5I%2FUBYRiSB3ZEN7ioUNFLQFm6dRH4QhdIKO7MhRB%2Ft1DSlQReRf5UbI5J4q3nJMK%2FNKKP9GVXSVBgd6TU6ofaFTFt%2F3OLIE0omR1CGQZc%2Bq1kUCmTXoBOmO3K40vbPii9uqjr3RwHoxJHnneBBbaquarSugGSnEsGwxKd2wOj8&X-Amz-Signature=613ee2e6355d3a0a1658f98dde2812bf5e3216276da1370013431edb1d53a028&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJL3VV6G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcXwxXXQ%2BA4x5zvcw%2FoU%2BIpo2o87O2QCzUDaUaumQlwIgIQPGBLwqxUTIeNeyW0OzPk%2FUm3tS%2BTMBi5lnX9WZCJQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNVZJ4xla3MfYlJzIircAzJv6HlyrF0p1F5eapkzblhRZfwAb3ah3yOQXqgyjLjpbOU51BFA1ZSUOxwL4%2FYrYnRWtz73TmX8b4EaSIXLKAgOVbzXjr39EttpGBPaN4uWK%2BB%2Bu6eKxG724ALvRZ2TDcQ8ZfRvj24LiqWCFg%2BPCjHbFUTxxNtN%2FcxEv%2FYpSzMxdcog3ZFfz9lOV1G%2FA33t68thHHbN9HIKNGdq1bc2TnYN4nciz7wqUqu9Rgw3xl4Is7TvldoS4mvwrhn%2BTNCcdf%2FXbQ7kphfmv4%2FYDnu8bOr5q%2FRrtG19Hl%2FbvZiw%2F1FZPmcs0WIao1wOZTcDFJe9Zsbp%2BVoR9u%2Fvu1PFIpWRFF8T8sz%2Bm0nvvUxnE%2FWG8LsS2FGBmJKOBuwKydw8NC0vh9j6Qq73xBMsMUYO7lSrdDuOSFmLJ1vEXO55%2BeCKOiky772DvUcUr62kx1qy67wbJr5uEtJlwu4ZYQLbFervfLW2U6Axa%2FCV6k5dwzZ%2FRE5CYbhR7A4ukU4d9YVJv0isFAVsOMCax%2FBYQc1dgD6VyyKgg1mWvWh3tMyT30UbTvGz%2FoE1g8HUnGxA%2BulbmoteHu3F11TbKD%2FfturOSxfkC%2F73uhg%2B8BqWNTqypSpzn5QGlKRcgiAYsZ3e7qhlMM2U9b8GOqUBz4NCZIW0opuyXQSySlX4SFUVxi3lbK2Ckp1D6gX6UVvp6A7xrQ5I%2FUBYRiSB3ZEN7ioUNFLQFm6dRH4QhdIKO7MhRB%2Ft1DSlQReRf5UbI5J4q3nJMK%2FNKKP9GVXSVBgd6TU6ofaFTFt%2F3OLIE0omR1CGQZc%2Bq1kUCmTXoBOmO3K40vbPii9uqjr3RwHoxJHnneBBbaquarSugGSnEsGwxKd2wOj8&X-Amz-Signature=db8ac85dad9333be0793434051eecaafb293bb40797ad3c867a4df6c27cebbd4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
