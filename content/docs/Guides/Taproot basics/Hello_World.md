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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETLZAQW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4SCGaVtCGl0%2FOEfunA9FgOxJFCq3bGz9fSDTQJSa%2FFAiEA7D7LplGcOBVv2e%2BS6wWVRV7Jigri7CaDcwhQsRebQO4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFrSSzF6zCzfFAokeyrcA%2BqC5sgOZnfhpGOP58SP9GyOKONBhbGmpBCekdptw8y1VnLABTf8H2kfaBt7iHrB%2Bjax5gDyKpo3U9GW4Z626o4YMSSXfkqt4a%2Bn7hJPk02mMprzbx%2F%2BVHloKhjWko%2FqY0SRLDfqOJStzVEeVnOdTh6s7zFlaQm6qFejpeDTUSIDs2CLicsgsKUtYCeRwXwxfZdA%2B%2FveC%2Bo5k%2FanPuRNGWf4QmZOKmkweMhIOy2FfG4j9GothGTK9Yr6sj92q9YdtrUyvv8zbUIKK%2F%2BuqYGO8fLIlp4kcm4H5nYE2l%2FzV33%2FzaIXIHaF8afeAHJF1OadJCRHEa89hvCl7%2Bon5tJECGYkuhyyREXtZ%2FI8NIs3%2FJLAnevgyOh30zM1Jzxnr1GaZT8R65J6z4Jsa3CElucZ4l0JSD%2BqCkW8VSEedldw4notGj%2B62tTvZK8TvjqTLyEyvKdWB9BWIenja9%2BMh7RjqAvz3aRZ1IsFeAXJT0y0yBFCkgYg9aEeZsvR%2FLsFWZddQIJO1jOflQcGJKGYugMiTM70xL%2Bw2aho%2FrhcpNfUOLVf%2FLjB%2BNG0MWGLQx4Zd3w8uatjVe7d9XJN80lPpD5KqKeTfK%2BaS%2BLc4nwlGlHqjpFUhKBDadYAfwFpcYQnMKqTgMAGOqUBOlHlmHkZYU0FHSWO7AeB%2FDyWc6WDP19qRyzVP71euvM2NhkhASp6PdCVEzrxGQQZNWAt0%2Fz6y7sP2rUMa9DUpSJTHiU9Y4nTVTx5JOASKNFuovGDzm2tStrsg33sh78NIhGs1Di8I7Cc%2Bg5Fmkr0%2FngCTb1CiHYDk0n8iinPqxllee1X2PJynBsIjP1x9cs%2FsaJVKCZOXUfcrBoeDPdJ9C4U%2FQeu&X-Amz-Signature=43e8bff860ef9c043a84a3a0efa294528f715b4ecc5bfbb1c607a4987dcf0e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TETLZAQW%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4SCGaVtCGl0%2FOEfunA9FgOxJFCq3bGz9fSDTQJSa%2FFAiEA7D7LplGcOBVv2e%2BS6wWVRV7Jigri7CaDcwhQsRebQO4q%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDFrSSzF6zCzfFAokeyrcA%2BqC5sgOZnfhpGOP58SP9GyOKONBhbGmpBCekdptw8y1VnLABTf8H2kfaBt7iHrB%2Bjax5gDyKpo3U9GW4Z626o4YMSSXfkqt4a%2Bn7hJPk02mMprzbx%2F%2BVHloKhjWko%2FqY0SRLDfqOJStzVEeVnOdTh6s7zFlaQm6qFejpeDTUSIDs2CLicsgsKUtYCeRwXwxfZdA%2B%2FveC%2Bo5k%2FanPuRNGWf4QmZOKmkweMhIOy2FfG4j9GothGTK9Yr6sj92q9YdtrUyvv8zbUIKK%2F%2BuqYGO8fLIlp4kcm4H5nYE2l%2FzV33%2FzaIXIHaF8afeAHJF1OadJCRHEa89hvCl7%2Bon5tJECGYkuhyyREXtZ%2FI8NIs3%2FJLAnevgyOh30zM1Jzxnr1GaZT8R65J6z4Jsa3CElucZ4l0JSD%2BqCkW8VSEedldw4notGj%2B62tTvZK8TvjqTLyEyvKdWB9BWIenja9%2BMh7RjqAvz3aRZ1IsFeAXJT0y0yBFCkgYg9aEeZsvR%2FLsFWZddQIJO1jOflQcGJKGYugMiTM70xL%2Bw2aho%2FrhcpNfUOLVf%2FLjB%2BNG0MWGLQx4Zd3w8uatjVe7d9XJN80lPpD5KqKeTfK%2BaS%2BLc4nwlGlHqjpFUhKBDadYAfwFpcYQnMKqTgMAGOqUBOlHlmHkZYU0FHSWO7AeB%2FDyWc6WDP19qRyzVP71euvM2NhkhASp6PdCVEzrxGQQZNWAt0%2Fz6y7sP2rUMa9DUpSJTHiU9Y4nTVTx5JOASKNFuovGDzm2tStrsg33sh78NIhGs1Di8I7Cc%2Bg5Fmkr0%2FngCTb1CiHYDk0n8iinPqxllee1X2PJynBsIjP1x9cs%2FsaJVKCZOXUfcrBoeDPdJ9C4U%2FQeu&X-Amz-Signature=c9fc47161758d4804517e233eb3a247e736fd2fb514ac6b40c48d962f6aad6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
