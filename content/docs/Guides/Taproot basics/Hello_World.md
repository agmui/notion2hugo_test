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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDUBFO4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwHTY%2FlkA%2BdSIuJM%2FlJFdVTmxLnVbNfGr%2Bu42Ki0rdQIhANI9T65Vpk0S6yu19KKIvCs4nakOUIOGTALVBmanRGSlKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSf28ykP5KV4AKOQgq3APZJUSB9Lgi1hTFylzNvzKTg3RiZczafZfZcmCmepfnc16HeIO%2FNvhdsBM8po1BONrCgBdFYn%2FsXJbcE5zdjNkT7tlFQO69OaMLGNDgSJEqCT9LJSelw3VvXxkISTDOgnYS86YGvo6Qu8LEBB9VEUmCytqlJhMxq6jmJwxbJ4U%2FOH5pU8IRKgi1y0Hl5BtF0JIEfucHN4R9bp0QepI4%2Fkj99D6YpTvNyAko%2FY%2BO%2B%2FxpL8G5htolcqPHhwKH%2FL%2FejVz5jMay9j3a66IhVvAtawZAgfHG5aG6jtdfAGOIi%2B1dsa1VTwylzLdo%2Bw%2F128dPBM6ZK8m4k4m1e7%2BmsVaQBeYA8lL9Nl%2B9UUxaTPgogdEj8KfIoN3NYcIip7HEUUuqJXFopNLIaQC4GH3L4HK%2FPusaLiGfU8PgpZCp9xaWWkMotbMNI2e8d2B2QJ0f%2F%2BY%2B%2FecEqCQU9ILx4d965q4EoSm%2FBy7ZJ4zyS8MvFxm9Kk9O0uGvkmZ3OX90WMQ4XDZv2%2Fk0l5nhyuuDL3vTcI8OpB5MWX31gz3oNUwVR80uxK5JOjXgLSv6vynR%2BjWbrSozsxbiPRL7Sd%2FD%2BBberMF80cttMFQ%2BcHY5Jnhs3PAExJmJHVy1Mqpl5QIQtAVVTTCe1vvABjqkAeUK5fEd8bfLFQGSZKPUrioHxVF5a2gx7yU4CgUcpadO2TTWIR1VKf8CzzeoWTYkzIWth8d%2F63KeIR6hvVHlu%2Fg0osX%2Fk6D55iAV%2B8kKoO3NWwI9sSGxxoT3VGE2GEUDbWkAAdKZ3GPI%2F1fn%2Ffb1FUeQ3UxF7%2FKLSgu73%2BG0Z3tiFnbuE5lb4PIwFlt08VVUt3M%2B4y9bWyBITdnfoK%2F452Wlfcao&X-Amz-Signature=b14395dbb04132b3b7d37966f1fd4c2451f88819b748d72fb3cf87ae4cfd2a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IDUBFO4%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuwHTY%2FlkA%2BdSIuJM%2FlJFdVTmxLnVbNfGr%2Bu42Ki0rdQIhANI9T65Vpk0S6yu19KKIvCs4nakOUIOGTALVBmanRGSlKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSf28ykP5KV4AKOQgq3APZJUSB9Lgi1hTFylzNvzKTg3RiZczafZfZcmCmepfnc16HeIO%2FNvhdsBM8po1BONrCgBdFYn%2FsXJbcE5zdjNkT7tlFQO69OaMLGNDgSJEqCT9LJSelw3VvXxkISTDOgnYS86YGvo6Qu8LEBB9VEUmCytqlJhMxq6jmJwxbJ4U%2FOH5pU8IRKgi1y0Hl5BtF0JIEfucHN4R9bp0QepI4%2Fkj99D6YpTvNyAko%2FY%2BO%2B%2FxpL8G5htolcqPHhwKH%2FL%2FejVz5jMay9j3a66IhVvAtawZAgfHG5aG6jtdfAGOIi%2B1dsa1VTwylzLdo%2Bw%2F128dPBM6ZK8m4k4m1e7%2BmsVaQBeYA8lL9Nl%2B9UUxaTPgogdEj8KfIoN3NYcIip7HEUUuqJXFopNLIaQC4GH3L4HK%2FPusaLiGfU8PgpZCp9xaWWkMotbMNI2e8d2B2QJ0f%2F%2BY%2B%2FecEqCQU9ILx4d965q4EoSm%2FBy7ZJ4zyS8MvFxm9Kk9O0uGvkmZ3OX90WMQ4XDZv2%2Fk0l5nhyuuDL3vTcI8OpB5MWX31gz3oNUwVR80uxK5JOjXgLSv6vynR%2BjWbrSozsxbiPRL7Sd%2FD%2BBberMF80cttMFQ%2BcHY5Jnhs3PAExJmJHVy1Mqpl5QIQtAVVTTCe1vvABjqkAeUK5fEd8bfLFQGSZKPUrioHxVF5a2gx7yU4CgUcpadO2TTWIR1VKf8CzzeoWTYkzIWth8d%2F63KeIR6hvVHlu%2Fg0osX%2Fk6D55iAV%2B8kKoO3NWwI9sSGxxoT3VGE2GEUDbWkAAdKZ3GPI%2F1fn%2Ffb1FUeQ3UxF7%2FKLSgu73%2BG0Z3tiFnbuE5lb4PIwFlt08VVUt3M%2B4y9bWyBITdnfoK%2F452Wlfcao&X-Amz-Signature=508b24b8d6212c91f64062dd4e8d5e4f25dfa84869f1967b554a2116ce82fffb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
