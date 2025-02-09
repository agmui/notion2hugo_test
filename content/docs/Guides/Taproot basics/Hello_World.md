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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6NSJPJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyliimWMeZ9t4%2Fb%2BgkGTXSwa7XO%2BrD92ye8FRmkDVawIhAOq%2BOOdY1Z07OrKXBaf5jhMRe5DzkwZQaIKRVcU2PUMLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE7is%2B7Xz117AV2Bkq3AMk79xB%2FWgxbl3V5r6WswKeu8yzol9n2TlrZyfydx899Kx4pivgLEh64qerZqgip2w81Is4nJ8yGAE3JUMAXi5uyagLjxa%2Fx8OjeLQy10oStyMVk2HkpupFj934WcZqQm6FrpU8NSMQu2BDuPL%2Fkd1KIL69caD%2FKiCAJ8oQ47qxRLDO3FBVqb0HW%2FV3IjdvcMoDTSgpY%2BnQ5j2iLMWdvllhqalkeqUFS30AMbJSYM7YIFwG7NnVQ4DO5kVSxiEZlg7a%2B5EfsTSW2fME0RPDF%2Bi1rbEHjYyLmrlmyyj%2F%2BRlziwutNX%2BqiE%2F%2FKwUErL4k4UYCHlPjQ6u6GOUBqoQ4mFn8ilSRqbCkYVyZDP9y8CrOuamuFaD22Wz5YjRyopfFjVUGLRll7OI%2BUZX3N937EWicj93AMQcCAPbj8vqNi8ZX4ymFDRBJn%2Fwdn7L1XaHbOW4ue1fph3R%2BaKYQImGbFDRPv36htht2rauBxD2eUeJrNWBCoEijzaOAGTtCw28mIwii8ddC9cGWGiN4wu5aiDIWlOgyPKDRQRQfJeiZrWnp4a0LN%2FtRW9en8ygp7kmuuDE584BScjO%2B5CNysR%2BMIPeBSnLXFYXJer5h%2FuzNVtoZCO8pgmAJc4z2uE6C6DDahqO9BjqkAT8qSrBgwkuTl8DwJ3hrNfaDKF8Bm9KMtSTk04hWEY00ftp7O9OA1mT3wN2nLcOqPO6VRm5qOuYXHLRSmL19wTBSKH3W9%2FwKZT5%2FQSZv07GTXhEcM%2Fv%2FrvFox%2FU%2BdCPYyIj2MoN8q6SZsMvQvcIPxDCiJTE1SwHCB9GuehOIpYlZJRQn%2FOCum7uWoqV1yUjza4B1AoYrfkb8qBMe85M1y6rzIHWh&X-Amz-Signature=df72a1660153c96af265d20e6c35725e67cfd201378418359567bab111e22966&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6NSJPJ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T170148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZyliimWMeZ9t4%2Fb%2BgkGTXSwa7XO%2BrD92ye8FRmkDVawIhAOq%2BOOdY1Z07OrKXBaf5jhMRe5DzkwZQaIKRVcU2PUMLKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE7is%2B7Xz117AV2Bkq3AMk79xB%2FWgxbl3V5r6WswKeu8yzol9n2TlrZyfydx899Kx4pivgLEh64qerZqgip2w81Is4nJ8yGAE3JUMAXi5uyagLjxa%2Fx8OjeLQy10oStyMVk2HkpupFj934WcZqQm6FrpU8NSMQu2BDuPL%2Fkd1KIL69caD%2FKiCAJ8oQ47qxRLDO3FBVqb0HW%2FV3IjdvcMoDTSgpY%2BnQ5j2iLMWdvllhqalkeqUFS30AMbJSYM7YIFwG7NnVQ4DO5kVSxiEZlg7a%2B5EfsTSW2fME0RPDF%2Bi1rbEHjYyLmrlmyyj%2F%2BRlziwutNX%2BqiE%2F%2FKwUErL4k4UYCHlPjQ6u6GOUBqoQ4mFn8ilSRqbCkYVyZDP9y8CrOuamuFaD22Wz5YjRyopfFjVUGLRll7OI%2BUZX3N937EWicj93AMQcCAPbj8vqNi8ZX4ymFDRBJn%2Fwdn7L1XaHbOW4ue1fph3R%2BaKYQImGbFDRPv36htht2rauBxD2eUeJrNWBCoEijzaOAGTtCw28mIwii8ddC9cGWGiN4wu5aiDIWlOgyPKDRQRQfJeiZrWnp4a0LN%2FtRW9en8ygp7kmuuDE584BScjO%2B5CNysR%2BMIPeBSnLXFYXJer5h%2FuzNVtoZCO8pgmAJc4z2uE6C6DDahqO9BjqkAT8qSrBgwkuTl8DwJ3hrNfaDKF8Bm9KMtSTk04hWEY00ftp7O9OA1mT3wN2nLcOqPO6VRm5qOuYXHLRSmL19wTBSKH3W9%2FwKZT5%2FQSZv07GTXhEcM%2Fv%2FrvFox%2FU%2BdCPYyIj2MoN8q6SZsMvQvcIPxDCiJTE1SwHCB9GuehOIpYlZJRQn%2FOCum7uWoqV1yUjza4B1AoYrfkb8qBMe85M1y6rzIHWh&X-Amz-Signature=0fe416dee71f1bd76b6722930637d63e4bc73ab9c926339a69407432c979de2e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
