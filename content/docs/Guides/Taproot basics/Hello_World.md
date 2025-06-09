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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZT62T3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpDVjkLMIERZvzspj5Qu0I5BmVQRLhsF0MUcVtL0z%2F4AIhAKY8%2BqECVCAxqo9e6stTEvA4LtkmsVPIutZQch48%2B2t1KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1Qs90FGKom9G808q3AP0n5K28nq6Zo8N0o86ZfEOYUxf16az2SUNIaRfE6%2Blzg4FVdsPg2cbHvmjeh2ywW%2B%2F%2By%2FAgB5ImPNJZ3shSgHnWfhnofAR3BSo6eTIwlILc9jSAVvWjy%2BFstEOL9Jtfe0djxrUlDqFxfpLsyl08VAqYAav2nnp%2FX%2Ba%2FQiCIUFBqHNbviMer0X%2B9Q8gIFvGm8Totc9%2FcxiUaajrN6tyt%2BxhrHBxushcfBBOPc1273SBLlj4Sz4cIOow1iHk%2FDc4cxITCzAglfFUynKTczMwzB%2BWCWFQlMG%2B0GzK5pYr%2BMsynCyLosGlmi5V8pXBSOZaBU0BP6Kt4rBIHft1s3dKDz9t%2BY6dZpG5vs1pZoWx7IqmGTFEX9v%2BFiDAM6JWXZYVrHAO1gweiEbQ0N3hwzCU7bb2BtI6fRMO9yabrJUdj%2FYQM0TeJEy%2BrQftYTED0YYwtlQeeR4P1MrgQXYXagqM9wWxCi5yTxa3xJ5AXKhLyUVt3QhaoF2LXgqw2yzUZLgDVt%2BxkdAk7OPSSYLvm0nr0lFJ6HbcksnCYXeK4hyAZxLlXIDq%2B7OSgPoFZjE73yyxhL7Oo%2FFFAL6byelUhhay%2Fz%2FRQ50OgL1IkPuOkFkvgaiW9qYzgckzGom1A0898TC2mp3CBjqkAYHPxhCiwSFypDW%2BHl2Tb7Sfy2CigjCt83sA1eHqsW4jD0DBIeeahMI12rPyaVNURfIf%2FcfFuhBJm9WsvlXVu8C99PvIZTvOYz6b52dy6QIZd3kaD1zQJ1lhBPvoho%2BBE82phpBdTkRobp3rj49llBZqHvdAEmrdA6G8kjFPyRl0DyX59EzQY3uAXjdjsDygE0AIHdqeosP5bxAhNJbXUF%2BCWnIJ&X-Amz-Signature=902ae06c954eafd8ba48ae4e78beaf560859825fca13c61d7abad5fbbaf465cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZT62T3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpDVjkLMIERZvzspj5Qu0I5BmVQRLhsF0MUcVtL0z%2F4AIhAKY8%2BqECVCAxqo9e6stTEvA4LtkmsVPIutZQch48%2B2t1KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1Qs90FGKom9G808q3AP0n5K28nq6Zo8N0o86ZfEOYUxf16az2SUNIaRfE6%2Blzg4FVdsPg2cbHvmjeh2ywW%2B%2F%2By%2FAgB5ImPNJZ3shSgHnWfhnofAR3BSo6eTIwlILc9jSAVvWjy%2BFstEOL9Jtfe0djxrUlDqFxfpLsyl08VAqYAav2nnp%2FX%2Ba%2FQiCIUFBqHNbviMer0X%2B9Q8gIFvGm8Totc9%2FcxiUaajrN6tyt%2BxhrHBxushcfBBOPc1273SBLlj4Sz4cIOow1iHk%2FDc4cxITCzAglfFUynKTczMwzB%2BWCWFQlMG%2B0GzK5pYr%2BMsynCyLosGlmi5V8pXBSOZaBU0BP6Kt4rBIHft1s3dKDz9t%2BY6dZpG5vs1pZoWx7IqmGTFEX9v%2BFiDAM6JWXZYVrHAO1gweiEbQ0N3hwzCU7bb2BtI6fRMO9yabrJUdj%2FYQM0TeJEy%2BrQftYTED0YYwtlQeeR4P1MrgQXYXagqM9wWxCi5yTxa3xJ5AXKhLyUVt3QhaoF2LXgqw2yzUZLgDVt%2BxkdAk7OPSSYLvm0nr0lFJ6HbcksnCYXeK4hyAZxLlXIDq%2B7OSgPoFZjE73yyxhL7Oo%2FFFAL6byelUhhay%2Fz%2FRQ50OgL1IkPuOkFkvgaiW9qYzgckzGom1A0898TC2mp3CBjqkAYHPxhCiwSFypDW%2BHl2Tb7Sfy2CigjCt83sA1eHqsW4jD0DBIeeahMI12rPyaVNURfIf%2FcfFuhBJm9WsvlXVu8C99PvIZTvOYz6b52dy6QIZd3kaD1zQJ1lhBPvoho%2BBE82phpBdTkRobp3rj49llBZqHvdAEmrdA6G8kjFPyRl0DyX59EzQY3uAXjdjsDygE0AIHdqeosP5bxAhNJbXUF%2BCWnIJ&X-Amz-Signature=74b5182b64b2d12a84ffa6f3a770ff4a0a7b7aa5345757c2a0c6cb7bbd5e6379&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
