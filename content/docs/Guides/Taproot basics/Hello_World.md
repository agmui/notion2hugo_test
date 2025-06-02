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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYTBSAA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFJmhw%2FZWa9jUej1IxffkqYX1x8wAQhKTe06eWDlNC58AiBNqDlp7BEvdqqu0f9l3NvhsgO%2FrRGJ2DZ2g2IqmKFSBiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI0SgoxbrOtyKQoExKtwD4eDXjPs8R%2FtXfm2D1jJusI%2FIrBO37Qdaq3Wr0d6agSBK%2FPs%2FV05jOJYjymgrXtey3ZEZEcQBiY%2F6Rusjzi5AndZRW2blBQCOSp2zOxEHGliKpEPx%2B%2Bo4YrF4L%2BTq5cZXrLKa9IQLi%2Ff%2F3Afm5w1xZgvb6oMxaOIN4%2BpC1jQPkuRDZ9JwbjzwHY9T1PU8Bt%2BRjzhCEIS3RPhIUAa5ajecFunBQBe%2BrOcGieLK%2BVI9lgIX8QnQFdEYabc%2BLnbHradiTrFmE5SEEHnS3L65%2FYTjqil7H6gfQ7c3TBjBJ67ZVWyP7eBd3r71u3bEtK1%2Bpkm5mwWbPPJGxzm7BlEXJZOyMZgZgBSv6eAyLWLH6StFsVz34QzDe3pP1FIfjDlxfp2ANxkTdYbG49T89RVnKedLDg%2BV2Z9dTnD83uvJ6eq8HJOUjLtvHmLaSefw3FpKQBqzNwMTH2Fb%2B6nqOAncNYdml75Cv2mmcldF1uLilOsHcTmu2q1XVU39jcIDlQNFBk7Hn2TzMV%2Bd%2FKcoNh9K56n3nXFyvqRVTR12E6XtP8Z22zrB0LIjqoYQsc93OY0QJxg8tb1gKtb2odUeM1gjRiXCmsSrUD61KcMGvXSo%2B%2BU8EVyNCmlvHMCX8gQXC%2B4wtuL3wQY6pgGyv2vj%2FmWwH0dYRvRp5FtyqvAVSn84wKFwm0snTH6VSqsA2SmT3z5y3neNO3AqG0X0tH7JW6LtvLAMumbrcbOz%2FRv6cBODE7Tpajmm%2BqvkA44WalpEUxOSwBHjXBjo55Eq6bgmBAM38JbPMxPCtC70izOZK5DujX3jSyk233trrbTaSTznIinGS7FUaULB5gDfBH0Y1gvQse9H1fQijiAu7YYJb1LN&X-Amz-Signature=6aa0c4c3a9cb24299bde14b703fb07404b93a6dd7cefadde148e5cc840d5713c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYTBSAA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFJmhw%2FZWa9jUej1IxffkqYX1x8wAQhKTe06eWDlNC58AiBNqDlp7BEvdqqu0f9l3NvhsgO%2FrRGJ2DZ2g2IqmKFSBiqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI0SgoxbrOtyKQoExKtwD4eDXjPs8R%2FtXfm2D1jJusI%2FIrBO37Qdaq3Wr0d6agSBK%2FPs%2FV05jOJYjymgrXtey3ZEZEcQBiY%2F6Rusjzi5AndZRW2blBQCOSp2zOxEHGliKpEPx%2B%2Bo4YrF4L%2BTq5cZXrLKa9IQLi%2Ff%2F3Afm5w1xZgvb6oMxaOIN4%2BpC1jQPkuRDZ9JwbjzwHY9T1PU8Bt%2BRjzhCEIS3RPhIUAa5ajecFunBQBe%2BrOcGieLK%2BVI9lgIX8QnQFdEYabc%2BLnbHradiTrFmE5SEEHnS3L65%2FYTjqil7H6gfQ7c3TBjBJ67ZVWyP7eBd3r71u3bEtK1%2Bpkm5mwWbPPJGxzm7BlEXJZOyMZgZgBSv6eAyLWLH6StFsVz34QzDe3pP1FIfjDlxfp2ANxkTdYbG49T89RVnKedLDg%2BV2Z9dTnD83uvJ6eq8HJOUjLtvHmLaSefw3FpKQBqzNwMTH2Fb%2B6nqOAncNYdml75Cv2mmcldF1uLilOsHcTmu2q1XVU39jcIDlQNFBk7Hn2TzMV%2Bd%2FKcoNh9K56n3nXFyvqRVTR12E6XtP8Z22zrB0LIjqoYQsc93OY0QJxg8tb1gKtb2odUeM1gjRiXCmsSrUD61KcMGvXSo%2B%2BU8EVyNCmlvHMCX8gQXC%2B4wtuL3wQY6pgGyv2vj%2FmWwH0dYRvRp5FtyqvAVSn84wKFwm0snTH6VSqsA2SmT3z5y3neNO3AqG0X0tH7JW6LtvLAMumbrcbOz%2FRv6cBODE7Tpajmm%2BqvkA44WalpEUxOSwBHjXBjo55Eq6bgmBAM38JbPMxPCtC70izOZK5DujX3jSyk233trrbTaSTznIinGS7FUaULB5gDfBH0Y1gvQse9H1fQijiAu7YYJb1LN&X-Amz-Signature=b8c441d1768acce22e0889b3675940a5e6d5754809f79bbfd54c26e993c2286f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
