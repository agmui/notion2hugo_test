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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57UPIFB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgTVgaZJJGJ%2FdE1o8eNabJ%2FNkximIH7C5j2elgU1DX2AiEAhNbLSvMl%2FijR521SvuJ3CaCJFLsUEe2uz3VM6hZ4RJcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ080hYNocLKJDPgircAwj0UXTwJE1nY6SjMCN45THqZ60LTUPDK4Y2U3A2N5fabKBgzCRfTRUlqYK%2Fc1ms62ZSw6k4zc4ur%2B306bhshnGVcaD6UKiiuIL6VsmgFEcmakOJWpc9QWSdjs%2FpAlvQ7dwRRFtxANqGzA7Bzb1h30O2heQ12%2Bm51ynZJ8C%2FRTGAr56EZBEF2jKToWYMOweQ7qS1V05Jjow%2BtUZAVryrlU8rjpmfBXrxciKFr43VKsKtdvgGwn8AF5CtYTjNqQB9jEZ9Sjkv%2B5N3StUxDN%2FoeoA3tNefTcI5CqS0r5bodvDyZ132X35MTw4%2FR2mzBhBDRSNDVHNA72RHRn%2BmxWQt4H6j%2Fq0yYg9gg3w%2FHrBXuuroYjTs4gntNv%2F9ifOFccdUwxhw1f6eS9CHe2qyUP8K%2FOfMipeek5dCN%2BiK2JpIso74%2FN7918g8y8%2F2Nb4gBR%2FVTZkDL2zt9qmbTa3VxNQ9s%2BvGLJ6Ht%2BMQ%2Fd6So8%2BhcTt8SNUq14FYzA5nRXywLeBrp6DSYc0rdl56QiRWrIIwt%2B1N91%2Bi8hsKzyfe5KPU07jMF0DxNyrQxr3Cn2KtYLiJc6zMSMn6HNG7Q6x3Tg03KigxRdW%2F1%2B%2FKZrit%2FEQBsdwO%2BiWxxsNvJ11NtsUAMLfI%2BLwGOqUBHZQXUnoOdj3WIH1zLqCrUoMYakTuBg6NH8WzITmrB9Br%2FHdegFExeWiiB1Ftjm56klzhBC7taSIihhfQA2dDA3jJaysuCKCKMqnDV5igyVAMXFttVrv7Pa3XwdWJYOYGnIZQWmx7P79KdrNmpaafXz%2Fz2C2hZJ6NTFZQuaVzz45NgZNMH9HU6Tn%2BLQCduRBwxwUCNblemHLBj5BAu7E1AvuUaQH6&X-Amz-Signature=0978e2d4770a6ed295672c7b886a7b0953412120c81c6e35d84c90ba3e8d3ef1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V57UPIFB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgTVgaZJJGJ%2FdE1o8eNabJ%2FNkximIH7C5j2elgU1DX2AiEAhNbLSvMl%2FijR521SvuJ3CaCJFLsUEe2uz3VM6hZ4RJcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQ080hYNocLKJDPgircAwj0UXTwJE1nY6SjMCN45THqZ60LTUPDK4Y2U3A2N5fabKBgzCRfTRUlqYK%2Fc1ms62ZSw6k4zc4ur%2B306bhshnGVcaD6UKiiuIL6VsmgFEcmakOJWpc9QWSdjs%2FpAlvQ7dwRRFtxANqGzA7Bzb1h30O2heQ12%2Bm51ynZJ8C%2FRTGAr56EZBEF2jKToWYMOweQ7qS1V05Jjow%2BtUZAVryrlU8rjpmfBXrxciKFr43VKsKtdvgGwn8AF5CtYTjNqQB9jEZ9Sjkv%2B5N3StUxDN%2FoeoA3tNefTcI5CqS0r5bodvDyZ132X35MTw4%2FR2mzBhBDRSNDVHNA72RHRn%2BmxWQt4H6j%2Fq0yYg9gg3w%2FHrBXuuroYjTs4gntNv%2F9ifOFccdUwxhw1f6eS9CHe2qyUP8K%2FOfMipeek5dCN%2BiK2JpIso74%2FN7918g8y8%2F2Nb4gBR%2FVTZkDL2zt9qmbTa3VxNQ9s%2BvGLJ6Ht%2BMQ%2Fd6So8%2BhcTt8SNUq14FYzA5nRXywLeBrp6DSYc0rdl56QiRWrIIwt%2B1N91%2Bi8hsKzyfe5KPU07jMF0DxNyrQxr3Cn2KtYLiJc6zMSMn6HNG7Q6x3Tg03KigxRdW%2F1%2B%2FKZrit%2FEQBsdwO%2BiWxxsNvJ11NtsUAMLfI%2BLwGOqUBHZQXUnoOdj3WIH1zLqCrUoMYakTuBg6NH8WzITmrB9Br%2FHdegFExeWiiB1Ftjm56klzhBC7taSIihhfQA2dDA3jJaysuCKCKMqnDV5igyVAMXFttVrv7Pa3XwdWJYOYGnIZQWmx7P79KdrNmpaafXz%2Fz2C2hZJ6NTFZQuaVzz45NgZNMH9HU6Tn%2BLQCduRBwxwUCNblemHLBj5BAu7E1AvuUaQH6&X-Amz-Signature=1be51efd78a6523ae43b3c357875fb73f95d846808991d2cd9d6c76b7f6458bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
