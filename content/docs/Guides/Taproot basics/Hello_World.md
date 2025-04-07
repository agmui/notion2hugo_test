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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UF4WK7U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw0SPpfsZ2SyB01H5s9r5L2XzhxkpQflpTURiAY8wOsgIhAJZItfLWVrXCt9l1mqfVIBv%2BljmucYU%2Ff%2BjpFpwW5fW5Kv8DCGMQABoMNjM3NDIzMTgzODA1Igy%2FDwuvO9AfkWI7Tm8q3APWoAVC97Bg4gMnKXbMDoR%2BgnKvEQjG42OsnOs2CQdazmv2js2iDh0wdszZgDSv73oATXwbSjDHZlouXrG35GP%2F82%2FZ9W2i6pMxwa9ialkpT3Fn%2FDHtm5ZBL9bTDFpcbAGsl92Zvd7y1oGwYkbDeWzT9%2BRdWZ54JG77BDf%2FJM8ngVZbZDVZjOS17lUJVVG2e1ITsuh6jekN4EWGi2UPdrCrxn4vYN35dAgOZXVspFuKgRoJuCSCMt3vcXkgO6sf%2FilmAOC9uLe8zSYn%2FaqewQIWaMCfy5JF1PFppAf69Zm3bDeNd116upNnkhpx2ghCH6ep5obR7WOAk1JMfn5jQ7jPTB2KPi2NcWznBXUZvY2HfuTitNb08armBR3%2BPSQV%2FsfZ3BTm7s3mJ6UfoGbX8iA36UIVzZGJQx9ljh55Du6BuqNI2A%2Byu9rfC2v1huIVa%2BzXw6qPImE6qo0u2KY3KuCW9hMRLrdSSACRr5q9Zyak%2FdaCbqVjMVSwltswpIBqnBWbOJNnQErLMycIWwv2Twy28mxn9O5goBrV5jQv2MsHGwGxrv4rbj5r3o1oIkFFWmD1lZv1jXpF8K7uM%2BWec6KiXSELu3uHlLiOoYDCRWw0NwMRpVJIHCu0SMCGMzDoo9C%2FBjqkAUV5j8CipUsisCLC8S7PdWR2ROgdsEafmXtxYkBHzzDPxCP5os7vFfIRirXL6k2wpN%2BRz0bm6u%2BOBmS1YH5ZnUofXS0vVis7VETr%2FXuMz2o2N7%2F%2BlWJRdcivs5zHNv8PiNEHywi855dUdIZzvLXUgkxOaMpnjHxw1TtMtBaumGbPfqibdiYefpwfWssgTnzLBM%2BIipnuJlRXVu2s7WrQF%2FKa9mMA&X-Amz-Signature=243963653ad1444c74ed7984185bb13269dea6483b3a80eab1f1135acdcb0b21&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UF4WK7U%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw0SPpfsZ2SyB01H5s9r5L2XzhxkpQflpTURiAY8wOsgIhAJZItfLWVrXCt9l1mqfVIBv%2BljmucYU%2Ff%2BjpFpwW5fW5Kv8DCGMQABoMNjM3NDIzMTgzODA1Igy%2FDwuvO9AfkWI7Tm8q3APWoAVC97Bg4gMnKXbMDoR%2BgnKvEQjG42OsnOs2CQdazmv2js2iDh0wdszZgDSv73oATXwbSjDHZlouXrG35GP%2F82%2FZ9W2i6pMxwa9ialkpT3Fn%2FDHtm5ZBL9bTDFpcbAGsl92Zvd7y1oGwYkbDeWzT9%2BRdWZ54JG77BDf%2FJM8ngVZbZDVZjOS17lUJVVG2e1ITsuh6jekN4EWGi2UPdrCrxn4vYN35dAgOZXVspFuKgRoJuCSCMt3vcXkgO6sf%2FilmAOC9uLe8zSYn%2FaqewQIWaMCfy5JF1PFppAf69Zm3bDeNd116upNnkhpx2ghCH6ep5obR7WOAk1JMfn5jQ7jPTB2KPi2NcWznBXUZvY2HfuTitNb08armBR3%2BPSQV%2FsfZ3BTm7s3mJ6UfoGbX8iA36UIVzZGJQx9ljh55Du6BuqNI2A%2Byu9rfC2v1huIVa%2BzXw6qPImE6qo0u2KY3KuCW9hMRLrdSSACRr5q9Zyak%2FdaCbqVjMVSwltswpIBqnBWbOJNnQErLMycIWwv2Twy28mxn9O5goBrV5jQv2MsHGwGxrv4rbj5r3o1oIkFFWmD1lZv1jXpF8K7uM%2BWec6KiXSELu3uHlLiOoYDCRWw0NwMRpVJIHCu0SMCGMzDoo9C%2FBjqkAUV5j8CipUsisCLC8S7PdWR2ROgdsEafmXtxYkBHzzDPxCP5os7vFfIRirXL6k2wpN%2BRz0bm6u%2BOBmS1YH5ZnUofXS0vVis7VETr%2FXuMz2o2N7%2F%2BlWJRdcivs5zHNv8PiNEHywi855dUdIZzvLXUgkxOaMpnjHxw1TtMtBaumGbPfqibdiYefpwfWssgTnzLBM%2BIipnuJlRXVu2s7WrQF%2FKa9mMA&X-Amz-Signature=fb6c4482952b6834c50aadb1730ee19ef9a8a9231d4cf33606c31cd5043ce8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
