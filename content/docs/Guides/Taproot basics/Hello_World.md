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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWUO3H5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFrLh%2BaLfoMUGP0%2FSIXX47oj2fGeA5TzM%2B68Ty%2Fhi2KRAiB5dOWJcw655H9QI0Bcynu0eP45V2b0r1Fuf9uHN7AjpCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMkrappiAXFz0KDwGRKtwDfeWqIt7Q8HikY4HC9DkOJ5MaUgadZZyWG4w5VLpdNBEnsoLPEP2sU3KW3Skcsya5DcdCJjuK430h7OYmXM3TK%2BOMcKXvXkly8FC1u8vYjq749S9DRaTmJgAMPpNRTlMAdYoBHXY6ltXKfWn2bRXpFndtTsCVLSDL%2BWAyjEvXWxB1QDC5WawhHk74OisgK4qemli6%2BdVxCHTLuEd6FwN1p6NXB0j0XSnzeYRGPBRSYbaUMCOAOh76kiGpblkUK%2B9e5FdScDKkobweYu3wfD75x8oGp62qIrQPryFpzeEyowjo4rGyuKo2GDMjXTqGUWXC9YDd2HmSj5%2BhybgBqYYvzlAV%2Fjov6e5bcG9ZmK5B58W5iHUtInH%2FsLgf9RHxBq3LWGahd48vrsCzgfM6nHhbpe6v6sEqwNJUv9BWw6me43tI7q5OX3BtPKZmCbuVIbf%2F%2B3hRcg3DEfMYBxlXKaogdDh7QCdm%2BWgYnQLkJysrGxAQOyGgA%2BeV5aAkk1Juu8UNSKcNL6MBKeeTUeo6ad5qvJR9JDfoUS%2FK5g7XaO7s5y%2FSEjEPIgR4G2B3HtAu%2BjquziAnvmhD953rQyFVJIF6Xf07cCP8cLuKHoXnlewrropQ7zCk8uy0yBY7%2Fpkw9d7MwQY6pgErS1CwYLuOKu63%2FtcClzvIOj4RlEPp3mNjG%2BxBssHyKY8jx6d%2BDlt4FkfB8nR4HKMdOIJYQfgEVlMV8UeZeunmWoknbaVy3Hb4p2%2FkpZLpQsBozVSJshI8wuydgQaMC6WUsqukHntDRkfxn4vZtw%2BXzp5G9P%2B8yuwOO146kEssb39vY2INUClIKRz%2Fcf9HbURL%2BnflhoQ7dwsWtTd1zz4qWGnYtXVh&X-Amz-Signature=b537fb55de1b07666b0f1b66ffb18b3d79669f7577f060cff2f939ff34fde3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWUO3H5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIFrLh%2BaLfoMUGP0%2FSIXX47oj2fGeA5TzM%2B68Ty%2Fhi2KRAiB5dOWJcw655H9QI0Bcynu0eP45V2b0r1Fuf9uHN7AjpCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMkrappiAXFz0KDwGRKtwDfeWqIt7Q8HikY4HC9DkOJ5MaUgadZZyWG4w5VLpdNBEnsoLPEP2sU3KW3Skcsya5DcdCJjuK430h7OYmXM3TK%2BOMcKXvXkly8FC1u8vYjq749S9DRaTmJgAMPpNRTlMAdYoBHXY6ltXKfWn2bRXpFndtTsCVLSDL%2BWAyjEvXWxB1QDC5WawhHk74OisgK4qemli6%2BdVxCHTLuEd6FwN1p6NXB0j0XSnzeYRGPBRSYbaUMCOAOh76kiGpblkUK%2B9e5FdScDKkobweYu3wfD75x8oGp62qIrQPryFpzeEyowjo4rGyuKo2GDMjXTqGUWXC9YDd2HmSj5%2BhybgBqYYvzlAV%2Fjov6e5bcG9ZmK5B58W5iHUtInH%2FsLgf9RHxBq3LWGahd48vrsCzgfM6nHhbpe6v6sEqwNJUv9BWw6me43tI7q5OX3BtPKZmCbuVIbf%2F%2B3hRcg3DEfMYBxlXKaogdDh7QCdm%2BWgYnQLkJysrGxAQOyGgA%2BeV5aAkk1Juu8UNSKcNL6MBKeeTUeo6ad5qvJR9JDfoUS%2FK5g7XaO7s5y%2FSEjEPIgR4G2B3HtAu%2BjquziAnvmhD953rQyFVJIF6Xf07cCP8cLuKHoXnlewrropQ7zCk8uy0yBY7%2Fpkw9d7MwQY6pgErS1CwYLuOKu63%2FtcClzvIOj4RlEPp3mNjG%2BxBssHyKY8jx6d%2BDlt4FkfB8nR4HKMdOIJYQfgEVlMV8UeZeunmWoknbaVy3Hb4p2%2FkpZLpQsBozVSJshI8wuydgQaMC6WUsqukHntDRkfxn4vZtw%2BXzp5G9P%2B8yuwOO146kEssb39vY2INUClIKRz%2Fcf9HbURL%2BnflhoQ7dwsWtTd1zz4qWGnYtXVh&X-Amz-Signature=4d042e0786fee70ac664170107625a437813fb081cc8eb6005c1631ca2738cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
