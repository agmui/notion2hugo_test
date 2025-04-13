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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEOQWMJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAxNhCgRD9Fy6eS%2BxcLAsikcEAT9XE1ZIDefVtVcXVQbAiEAvqhLvvoYGCIO0K4%2F7qyGvaTsDVBZETaqZm%2BsBWc%2B2%2FcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJHns3VFT5%2BBR%2FAnSrcA%2BU4G6QBIiY6EUZjwprneFwacUu70lcc1t1yYtq1axhs%2FbvSSAQ7JlXnYfxjkidrizuO7WStLl4xBtanflknc6xkpD%2FHTexPEDhRzYpt9n5coTQYiOh9QxdpXXEduQ2UY0EbZTS730HzfWeUm6fyZZCIIbt2ClLjbJ5S4Yf85ihgS0yclUlqfwc35sgfnuhPwoiKAqOigHpHiJQnC8KchofNBIi6Fcjm3%2BL5hdGkCCUYQadY5f58RF1yMoRp5SZc7CAiVIXTii7wDf0vP1xMnlfcl5bJ1H6bqmbRdUR0K3FTqtheu9GLSpUUEquBYywvXNPWdkUuzhtXEv%2BeUICwlBMga%2FCc3AkAJtLaZoK8FsoCohxSTrSRkswAbNHY%2FKVnN1h3xB76egw18B01GidEIIweKw1MSzaa5aLdqAT9AKJO7TftGCMKQKXS%2FFVb50BCcdb5b3sla84Xbux%2FkJ%2BPREZ4nEjAmZxtsrxAm0b5foD8YimzjdTQmRvVZetYlMGfCryZoao6GMffqESE929piOKGQBecohh9oSPhsyT0eJEA2O8hfbkHKjSo7INtj55PJM5KIHy5I9r2pKiY2i6XmzP10SduxM9MY2nh7KJ%2FbLMh%2BWvtk1SUMajQa9UMMIqx678GOqUBSLVPYK5xwSUzVOXZisCPnOn23Tl5WVhtr7I760wLE04%2FXIFPMGAxfSXQorpxiECSofEmuIgEGVkoByMzvfFtHHaFoRDHdY2%2Fi3U1%2FLjUK5aexH9vyuQYLEDj4YPx5jjvav4wyHKNV66sh%2Bs6QiWdzcB6ucgFiTssopPy%2BhhB0iTwOBQ8RfrI0pvZrSnedQj6Rzx%2FRwPFF0%2F5WyooBtwrkMr1vTIr&X-Amz-Signature=b61487a12e5bb682b525da8df8dacd89773efa8ab84fe24cef4f98aa4d33cd30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIEOQWMJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIAxNhCgRD9Fy6eS%2BxcLAsikcEAT9XE1ZIDefVtVcXVQbAiEAvqhLvvoYGCIO0K4%2F7qyGvaTsDVBZETaqZm%2BsBWc%2B2%2FcqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJHns3VFT5%2BBR%2FAnSrcA%2BU4G6QBIiY6EUZjwprneFwacUu70lcc1t1yYtq1axhs%2FbvSSAQ7JlXnYfxjkidrizuO7WStLl4xBtanflknc6xkpD%2FHTexPEDhRzYpt9n5coTQYiOh9QxdpXXEduQ2UY0EbZTS730HzfWeUm6fyZZCIIbt2ClLjbJ5S4Yf85ihgS0yclUlqfwc35sgfnuhPwoiKAqOigHpHiJQnC8KchofNBIi6Fcjm3%2BL5hdGkCCUYQadY5f58RF1yMoRp5SZc7CAiVIXTii7wDf0vP1xMnlfcl5bJ1H6bqmbRdUR0K3FTqtheu9GLSpUUEquBYywvXNPWdkUuzhtXEv%2BeUICwlBMga%2FCc3AkAJtLaZoK8FsoCohxSTrSRkswAbNHY%2FKVnN1h3xB76egw18B01GidEIIweKw1MSzaa5aLdqAT9AKJO7TftGCMKQKXS%2FFVb50BCcdb5b3sla84Xbux%2FkJ%2BPREZ4nEjAmZxtsrxAm0b5foD8YimzjdTQmRvVZetYlMGfCryZoao6GMffqESE929piOKGQBecohh9oSPhsyT0eJEA2O8hfbkHKjSo7INtj55PJM5KIHy5I9r2pKiY2i6XmzP10SduxM9MY2nh7KJ%2FbLMh%2BWvtk1SUMajQa9UMMIqx678GOqUBSLVPYK5xwSUzVOXZisCPnOn23Tl5WVhtr7I760wLE04%2FXIFPMGAxfSXQorpxiECSofEmuIgEGVkoByMzvfFtHHaFoRDHdY2%2Fi3U1%2FLjUK5aexH9vyuQYLEDj4YPx5jjvav4wyHKNV66sh%2Bs6QiWdzcB6ucgFiTssopPy%2BhhB0iTwOBQ8RfrI0pvZrSnedQj6Rzx%2FRwPFF0%2F5WyooBtwrkMr1vTIr&X-Amz-Signature=bcf6c45332e9cb05c356e4e25abd33b78f3279f475c1c2258fdf120a66477334&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
