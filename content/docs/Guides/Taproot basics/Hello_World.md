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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LDA6RO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXwiX4wJL%2BTPTktAXynA58Ww96j3zLFuuJMVgj9SP%2FwIhAL2jaA1Ioz0s1R1VjdoBJlyYVmeBkMKyNnqA8GX4BYNOKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrgEzzRIvI108ddosq3ANpSmcz9HwmUn9W5nkPXFry5yDLzKA5wq0NHOYuk8mJhffa%2FQQig68d7A%2B%2BnbJQ8eGi4DS4sOEhaRbm4cmp4Ka%2BynIC%2BejDgq7ajWxNRmJc3zxhREs95A%2BLlyE%2Bub9%2F0Nlf4r91JaSdyiuzURWS5SO1e4kRzcjzooMuyyK%2F1ENf9exyN0YGWuLoJAfSSKbvW5WDTmUE%2BVl%2FR2GkgmnYy6T8j8tvr7%2B1vGF5x572%2BWP8%2BOdaUyXAiVTp85uoL%2BBjRocpybj4%2FVzk88%2F1z2tV1TZc53%2FXV9nrKuVW38ZRJoVOczRE29yWFP8L2t3ZHau0Ve%2FwlJ3e85cIGjzV3jLlKK6kkfVXm2%2BZnP1Z%2BQtVjz33Oh19UJIJNJ94OkN1mbX7ES5LiuXc4Kudg1LWtkq%2B0akbzaKZvzCucktUilvKbBkUCl9vvUbZ1LgTc8Xovs6Y8oy9bOiTP6wiqbBd496aGtVuajArbzxidBZSvE3fT6yI66xmVJYE9ZsgBrsUJadQ8NY8UF07RXZHV3lN43extzeipf%2FQSgEgIEpAb9qRXoTZIQlqNzIGUmuSiSD3JF94kj5v%2F%2FoNiEN0LiWBvN4aSmixLVzdciouSGSLBC%2B54wEuuiPHKEDv1FgRoGyH0zCzh5%2FCBjqkAY0MS3oUyiR117b40g%2Fmw4d8LJp3yBr0cCi88TRTMyVy0HMB5SIY%2BXvpgpemYZhxohZV9uc5ZpKUg8GY7pA4R6QPAx3tAucfWXe%2FhlQNFxnURFjKxBsQkfksBfGFLV12TtSFrNH%2FXpTkm9dhLKJkeghDnXEOs%2Bmg9%2FoyXwyoTPDbmVP2I0a8A2rZbtrNQf%2BxD34R7zrSeeJ%2FwJN1xppxn7B8gSp%2B&X-Amz-Signature=427d70ae148ddc77149334e8b71e9e67da29564a75d4b300b113948df0c176e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654LDA6RO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAXwiX4wJL%2BTPTktAXynA58Ww96j3zLFuuJMVgj9SP%2FwIhAL2jaA1Ioz0s1R1VjdoBJlyYVmeBkMKyNnqA8GX4BYNOKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrgEzzRIvI108ddosq3ANpSmcz9HwmUn9W5nkPXFry5yDLzKA5wq0NHOYuk8mJhffa%2FQQig68d7A%2B%2BnbJQ8eGi4DS4sOEhaRbm4cmp4Ka%2BynIC%2BejDgq7ajWxNRmJc3zxhREs95A%2BLlyE%2Bub9%2F0Nlf4r91JaSdyiuzURWS5SO1e4kRzcjzooMuyyK%2F1ENf9exyN0YGWuLoJAfSSKbvW5WDTmUE%2BVl%2FR2GkgmnYy6T8j8tvr7%2B1vGF5x572%2BWP8%2BOdaUyXAiVTp85uoL%2BBjRocpybj4%2FVzk88%2F1z2tV1TZc53%2FXV9nrKuVW38ZRJoVOczRE29yWFP8L2t3ZHau0Ve%2FwlJ3e85cIGjzV3jLlKK6kkfVXm2%2BZnP1Z%2BQtVjz33Oh19UJIJNJ94OkN1mbX7ES5LiuXc4Kudg1LWtkq%2B0akbzaKZvzCucktUilvKbBkUCl9vvUbZ1LgTc8Xovs6Y8oy9bOiTP6wiqbBd496aGtVuajArbzxidBZSvE3fT6yI66xmVJYE9ZsgBrsUJadQ8NY8UF07RXZHV3lN43extzeipf%2FQSgEgIEpAb9qRXoTZIQlqNzIGUmuSiSD3JF94kj5v%2F%2FoNiEN0LiWBvN4aSmixLVzdciouSGSLBC%2B54wEuuiPHKEDv1FgRoGyH0zCzh5%2FCBjqkAY0MS3oUyiR117b40g%2Fmw4d8LJp3yBr0cCi88TRTMyVy0HMB5SIY%2BXvpgpemYZhxohZV9uc5ZpKUg8GY7pA4R6QPAx3tAucfWXe%2FhlQNFxnURFjKxBsQkfksBfGFLV12TtSFrNH%2FXpTkm9dhLKJkeghDnXEOs%2Bmg9%2FoyXwyoTPDbmVP2I0a8A2rZbtrNQf%2BxD34R7zrSeeJ%2FwJN1xppxn7B8gSp%2B&X-Amz-Signature=7e3007cde9a62e26372a811f8d5b0070b3b7e8d696b854f38808f9f271f376b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
