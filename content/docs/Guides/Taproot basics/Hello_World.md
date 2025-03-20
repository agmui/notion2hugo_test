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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUXJ7PZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAjWJBfDwvM4jsFIrEN78JIkpzj44XQMEsTItnoOQ1e4AiBDlpij6Joop7Von5Klu6wkQV7l00zKwdCPT3XGSKLHjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfkEREP3x2amazo02KtwDtzkteK0f1Zr1T64cDSiEZXnkT1HzToStyxsCTzsqncWUjUO8W6LoMFTkdjCtjXVJpuwid0846RkJalmnbuewpkBoQW4%2BmEMSWHVn3h%2FM9cjNjqqnoOEaR75ToGLKm3vZMItU6DFX0hpwyBMNDtxKUvNf0U%2F6yssewssCo8O7qduxIcBT4c5GTCPFI4QOHSI1e9fiR4DicvjY77f5f0LwUfbKbuVEw5Sl4ttYieJ%2FmKJty%2B0Fu%2BMuaUlBqyNdb6GsNPweUmJgHJmBib1yriRbdxRenLg9FgedwWINDaza7xpDRYJwVlx5S2Iequ%2FS3PgYQaTc1T2OMY%2B%2BV3nTbLz9uekO%2BQZk%2BUKj2t2otxuz8cN3M9ZTcNFY527FuR0aD5IwznC8JQ%2BGWahs4Sk%2B%2FggeLwfFNg2JgpaquNFt0jaKSVQLXdwgg5Hh5PB6HzzXHqIOZcpfKTvRnY5OyhlWRbcXwB7psFcIKcju54%2FPp7QtUxAgFJDebUo%2BiG44bxFeFZm3qqxKbTEaq05gqWYOyvj0nKF1r%2BoNjInDuHcQ5Kakvx6rUMHtam1nOJBMCMAZXh6h6SOa7sSbLiOpUiXo5Hj8b%2B1XLaek4UXDMwgXXuSwFtx0xth0O%2FcIwZs4z08w8sTxvgY6pgHw5bya0Zp8GCULJGyf5zTT8EWuDlbwItVZclGNwVxNBS3KjUyRgUropkClEGbBVJmvJkzhtqRwZFNp8WgqZjmFsjaJRQuJdCPITMzQpw8RgPzzkZ8RWOU9GTAGPdAH8yI7IKLk4P%2B78Pmr459%2FED1pm7XQA67BBYPvQAjVcopEnByhJPEsCPVbmqu5mQV43326twG%2FrLkLknFfx35UYeI%2FY92t84qj&X-Amz-Signature=f89c370a062722545737e69caf564e5dd90d2c5214fe87948eef631df3bc98f6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUUXJ7PZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIAjWJBfDwvM4jsFIrEN78JIkpzj44XQMEsTItnoOQ1e4AiBDlpij6Joop7Von5Klu6wkQV7l00zKwdCPT3XGSKLHjSqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfkEREP3x2amazo02KtwDtzkteK0f1Zr1T64cDSiEZXnkT1HzToStyxsCTzsqncWUjUO8W6LoMFTkdjCtjXVJpuwid0846RkJalmnbuewpkBoQW4%2BmEMSWHVn3h%2FM9cjNjqqnoOEaR75ToGLKm3vZMItU6DFX0hpwyBMNDtxKUvNf0U%2F6yssewssCo8O7qduxIcBT4c5GTCPFI4QOHSI1e9fiR4DicvjY77f5f0LwUfbKbuVEw5Sl4ttYieJ%2FmKJty%2B0Fu%2BMuaUlBqyNdb6GsNPweUmJgHJmBib1yriRbdxRenLg9FgedwWINDaza7xpDRYJwVlx5S2Iequ%2FS3PgYQaTc1T2OMY%2B%2BV3nTbLz9uekO%2BQZk%2BUKj2t2otxuz8cN3M9ZTcNFY527FuR0aD5IwznC8JQ%2BGWahs4Sk%2B%2FggeLwfFNg2JgpaquNFt0jaKSVQLXdwgg5Hh5PB6HzzXHqIOZcpfKTvRnY5OyhlWRbcXwB7psFcIKcju54%2FPp7QtUxAgFJDebUo%2BiG44bxFeFZm3qqxKbTEaq05gqWYOyvj0nKF1r%2BoNjInDuHcQ5Kakvx6rUMHtam1nOJBMCMAZXh6h6SOa7sSbLiOpUiXo5Hj8b%2B1XLaek4UXDMwgXXuSwFtx0xth0O%2FcIwZs4z08w8sTxvgY6pgHw5bya0Zp8GCULJGyf5zTT8EWuDlbwItVZclGNwVxNBS3KjUyRgUropkClEGbBVJmvJkzhtqRwZFNp8WgqZjmFsjaJRQuJdCPITMzQpw8RgPzzkZ8RWOU9GTAGPdAH8yI7IKLk4P%2B78Pmr459%2FED1pm7XQA67BBYPvQAjVcopEnByhJPEsCPVbmqu5mQV43326twG%2FrLkLknFfx35UYeI%2FY92t84qj&X-Amz-Signature=69fd1eb7dc398618036ccfa060bf8196b44e9b1295f4e7082b5376bf1c07234d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
