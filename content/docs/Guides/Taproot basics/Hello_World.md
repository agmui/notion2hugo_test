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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3XIFCD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa3pxLHIAswaIboayHiACq%2Bj6FCLsNp2i5ruTwA2uYAwIhANAFK73ZKBYgjAD2gfrDeRtGNKDTh4uz7Cf1XQyUBCCGKv8DCHIQABoMNjM3NDIzMTgzODA1IgyiE7FCZVQ6JnDOIyQq3AN9lqQ9WObIRZpTGPDtMMI%2F0Z7o0%2BCLGGn%2Fp3c29mRfsLKxukTLDVzdceysCgjlOeavTpTArLUOUfjzv0K8%2BDhSByG7e%2FA5Vtb3RZhfMWpen4KcY0UBO%2FMhfqtC%2FyMedADhtJjrHPJTq%2Fc6TM09WdeN8itPXYJONDWMl9aiFpEu0OKMtPZX2qUxoqTKWV%2B02H%2BHTHw3sWm19NwOx%2FFlrjmBBdbdv%2FA6ldW9NtS1bItdj3o7vEu%2F38G9XXiIUdPQsUDwmz4gJShgXgAg2SXEs5c1DoJXXN1zrqfzyAwg%2FvzO2wCLnqrye9xPwgWdlRWy66Uh65WgmpRTILyG7VsUbbPD0s6MyMTQax98OldlwvZpicYc10BV%2Bj9o%2BsZOSFQFkQajgTOMqwEJZGwqR3%2BoZpy77Waren8mKKDcj01K1jJ1YAXMLa34mfvlS5W6H8Dxl1UNjejgqB9CoBQpWiFh6odudGShgB8IVlCb6zVw0crZW37jlHnBvMvxlfA6x385woixNV8tPengl92Sto0ZLGkmMHZWcM5pZ1dSvqrl3IRv%2BXoRQ480toyACrzhSRA4OtWaTUSPOXMjG2vLRBoHZHE0M8O38cqTxD6Hi%2FYwxPlVb0wAPo0kR0WyAyj51zC1%2Bo%2FCBjqkAQVAsyaN7yXzkJifyYEmtM1VPorcLKIri0%2FGRqGPzMG6PQ9mymnCbyEq4WqQjhUYH%2BqdbKrZ6ZkEy6LUWXmK6hE41YGIuF9tmTGt1LdiKUQPDmBAZQjmqQQq5j1a8Qiw1vIGcPUkCJyJ23E8XTsq8UpJ%2BqOGvEQ6D2r6wpBfVkGgplbZkQX0wU%2FEiDYHpR0EPQLy%2F24m%2BIqeT7m9nTxbE5BF1XYi&X-Amz-Signature=8431e3f63c0168619b1809239b79fded77a6a2d41fa7182aa54e2ddea3214cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3XIFCD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa3pxLHIAswaIboayHiACq%2Bj6FCLsNp2i5ruTwA2uYAwIhANAFK73ZKBYgjAD2gfrDeRtGNKDTh4uz7Cf1XQyUBCCGKv8DCHIQABoMNjM3NDIzMTgzODA1IgyiE7FCZVQ6JnDOIyQq3AN9lqQ9WObIRZpTGPDtMMI%2F0Z7o0%2BCLGGn%2Fp3c29mRfsLKxukTLDVzdceysCgjlOeavTpTArLUOUfjzv0K8%2BDhSByG7e%2FA5Vtb3RZhfMWpen4KcY0UBO%2FMhfqtC%2FyMedADhtJjrHPJTq%2Fc6TM09WdeN8itPXYJONDWMl9aiFpEu0OKMtPZX2qUxoqTKWV%2B02H%2BHTHw3sWm19NwOx%2FFlrjmBBdbdv%2FA6ldW9NtS1bItdj3o7vEu%2F38G9XXiIUdPQsUDwmz4gJShgXgAg2SXEs5c1DoJXXN1zrqfzyAwg%2FvzO2wCLnqrye9xPwgWdlRWy66Uh65WgmpRTILyG7VsUbbPD0s6MyMTQax98OldlwvZpicYc10BV%2Bj9o%2BsZOSFQFkQajgTOMqwEJZGwqR3%2BoZpy77Waren8mKKDcj01K1jJ1YAXMLa34mfvlS5W6H8Dxl1UNjejgqB9CoBQpWiFh6odudGShgB8IVlCb6zVw0crZW37jlHnBvMvxlfA6x385woixNV8tPengl92Sto0ZLGkmMHZWcM5pZ1dSvqrl3IRv%2BXoRQ480toyACrzhSRA4OtWaTUSPOXMjG2vLRBoHZHE0M8O38cqTxD6Hi%2FYwxPlVb0wAPo0kR0WyAyj51zC1%2Bo%2FCBjqkAQVAsyaN7yXzkJifyYEmtM1VPorcLKIri0%2FGRqGPzMG6PQ9mymnCbyEq4WqQjhUYH%2BqdbKrZ6ZkEy6LUWXmK6hE41YGIuF9tmTGt1LdiKUQPDmBAZQjmqQQq5j1a8Qiw1vIGcPUkCJyJ23E8XTsq8UpJ%2BqOGvEQ6D2r6wpBfVkGgplbZkQX0wU%2FEiDYHpR0EPQLy%2F24m%2BIqeT7m9nTxbE5BF1XYi&X-Amz-Signature=b25931048614eb0f30e96821d910703f5939fca93005a2fbd6c8b8b64f3029bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
