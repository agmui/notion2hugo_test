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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2572RY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNfEXU09KrR1ptQxXCczNvpeO1kz1acTQ%2F4kPxRbC8gIhAKN%2FPHZHfWvZb7RLv2wg%2FFohgUqFJHLCdOmqN8qCx9S%2FKv8DCFsQABoMNjM3NDIzMTgzODA1IgxxgVZjUrlCJA%2FbFoMq3AN1iaT%2Fq9W8pqqAdry1JDaOSU%2F9%2BPtvGCtp0oiyvqV9kXsbIPgMu%2BqlmeqWOYUCh3CykzMWWr1n1frMZPDZJwif2uDBZifCHPMxd%2FSKExlQTe01BKN%2BYHvij1ztGBI0dP7DBdSo%2BSGBxlTvCAC%2Fn79Jwhja7dC%2BZLwXaKb59J64DOPGFJ3ij6V88e8EqpZ%2B4dzBYny0jPpkNYa8dZEanENs8o%2B9AFIn31ZUvTgf9latCuaBc3oKlLQ3XIuohkKFLsp4i356mcuAgVpS9lPpw3fN9aWeU%2FHyt9YHEYUBbZXvehDI2FRqvMdHeJaAR8oY%2BWJT2XbOdD9wS1pcRQlpQJLuWJZ7%2BLVjUvA6s7Nwdj5H0U4mwygcShlzhVjn%2BkJUGajHLfU6%2FMi3Xp8k2scJ4m%2BgG1Zr2ieTXmOEtWAV4fsLzem6Am2DDtOJybiwe27VOx%2BJcABhdOhapAmi7mJeftlYnDtrUkTPrX5JfH9y0D8GgFx4lQIgJ7BNzLWyqm8BfPPbSQkzV3c6oD6Zv9ZOeAoOxohsds%2Bn6A8uJ1HDAJACs8DYfhfze8P87j6D3ziRGlYlPt%2FBz3WpJ4nCtjG5YIVo0SCY%2Fj%2FiZKogC%2B1wna%2BcXpBk5xw4t6UDqg6reDCzjLjABjqkAai%2B1kwZZp6wzsYMgEP4Xm%2BmsNfO7flWyQlQj9RffT74ZOevmZgcxC0wyEhhg8uXozytXtoq%2BzrWxveE%2B2uxHpUh6q%2Bke3rjTjcbHkhKph97yIob2cvcm5cHYanOL2oUI%2BHXE2VjlLmEx9o23lRsXAw7Jpw3v2B3o9GmL0uVaYjN9YwGzuuBrTn3R9rSDNoDkKw9qNOU77nVUVAbvckmNFOaU8PF&X-Amz-Signature=ca8fb58992d38d548b6d48eeac7a5596f885b62e477178cdae5db23eae15863b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU2572RY%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBNfEXU09KrR1ptQxXCczNvpeO1kz1acTQ%2F4kPxRbC8gIhAKN%2FPHZHfWvZb7RLv2wg%2FFohgUqFJHLCdOmqN8qCx9S%2FKv8DCFsQABoMNjM3NDIzMTgzODA1IgxxgVZjUrlCJA%2FbFoMq3AN1iaT%2Fq9W8pqqAdry1JDaOSU%2F9%2BPtvGCtp0oiyvqV9kXsbIPgMu%2BqlmeqWOYUCh3CykzMWWr1n1frMZPDZJwif2uDBZifCHPMxd%2FSKExlQTe01BKN%2BYHvij1ztGBI0dP7DBdSo%2BSGBxlTvCAC%2Fn79Jwhja7dC%2BZLwXaKb59J64DOPGFJ3ij6V88e8EqpZ%2B4dzBYny0jPpkNYa8dZEanENs8o%2B9AFIn31ZUvTgf9latCuaBc3oKlLQ3XIuohkKFLsp4i356mcuAgVpS9lPpw3fN9aWeU%2FHyt9YHEYUBbZXvehDI2FRqvMdHeJaAR8oY%2BWJT2XbOdD9wS1pcRQlpQJLuWJZ7%2BLVjUvA6s7Nwdj5H0U4mwygcShlzhVjn%2BkJUGajHLfU6%2FMi3Xp8k2scJ4m%2BgG1Zr2ieTXmOEtWAV4fsLzem6Am2DDtOJybiwe27VOx%2BJcABhdOhapAmi7mJeftlYnDtrUkTPrX5JfH9y0D8GgFx4lQIgJ7BNzLWyqm8BfPPbSQkzV3c6oD6Zv9ZOeAoOxohsds%2Bn6A8uJ1HDAJACs8DYfhfze8P87j6D3ziRGlYlPt%2FBz3WpJ4nCtjG5YIVo0SCY%2Fj%2FiZKogC%2B1wna%2BcXpBk5xw4t6UDqg6reDCzjLjABjqkAai%2B1kwZZp6wzsYMgEP4Xm%2BmsNfO7flWyQlQj9RffT74ZOevmZgcxC0wyEhhg8uXozytXtoq%2BzrWxveE%2B2uxHpUh6q%2Bke3rjTjcbHkhKph97yIob2cvcm5cHYanOL2oUI%2BHXE2VjlLmEx9o23lRsXAw7Jpw3v2B3o9GmL0uVaYjN9YwGzuuBrTn3R9rSDNoDkKw9qNOU77nVUVAbvckmNFOaU8PF&X-Amz-Signature=cf166e00be804aef91855b30d1521d63c3b7da807035b73d3ced392408326fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
