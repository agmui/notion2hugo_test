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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBU6MQV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bufmq3Wl5fxPk%2BTXLEh6vTSM38IowHk1%2Bk9RXEftliwIhAMausJiWE%2FS8W%2B7r1HyP8O0GoCoFg1y2ilsjjV2pqAGlKv8DCEAQABoMNjM3NDIzMTgzODA1IgyplovZNGPaWjkFIq8q3APsP3a3qFIqYRc0eK%2F35SdBRySfhRk6s1mSEOe5%2FSeboo2SKQPGdarb6soTjgjaI6tIAyVWM4P7anYhOLOd2UcsvSRcUNxcswMu%2BAsb9NC5jsJB7WbMdAGRrClBCVkahGTiHfNb2c5sv2fDiPYsiYOQU47chs2k%2FrNbtuYLRiAY%2FD%2Bj%2BYLqJ3DqCRuNwACnFrl8Qzbcir6HWpG%2BA%2BGclTF%2FgnF4%2FFRPdyEPkSGoCn%2BdDPIw4zoqVvaUJfYEf8FetaQZbjzMXRs23GPKhS3dfdGLZeBR3a2K%2FBVjOShz0JqBS%2BNJavEqgpTB%2BPVQ8SEfG7n%2BjGXmZ%2BZy7F96zhgUSlRTbH9dITc%2FJRCcmSmycLxLjzbTq%2FwHQUdISmSzRZ6A4czlq8Hf4lnIbrhW5bZ5TbY6gxZ%2F5cF4Vc%2FGYdS89nHNqZc%2B2E1ThDH%2BZpR8vN2wZMh14KmU1EG7BZC0PN2qTDVhOtrDi2iuafeezRoqQ5AfWuoLdg6Gf%2FglbCttPtKNEXNuZ5uRo%2FNeD%2FlUu1%2BFsB1vL3XgsIwx4jldz9FYoAVV0uLrZUrdh8MkPX3pB7SOF1n%2BcrrS8d%2Fjnl%2BlnPLZYrpfpKOls0XoYYCuNVLtM7BgRxQXToAJXeXtn2yQajDxg7LABjqkASVQjwtHIT%2FHfmuDN5ZslE3EYFBpW4AZPxTw01vXuqQAVFZ%2BoWS%2FwrGTaDI0w2Vas6KFo0lBa29l9ZVUZVD%2FIb23SyRxw2d0%2FUlJnccRNTPGymEylcjHZYABehqei2yboUZSBIiMqdx6Ksp9BDiYgifovaxI88FOnwT7RE2OH52%2FJDFsVAHIJoEamTiIe0GCvcjRj0ILUdHoNpvCB1YW%2Br2297Z9&X-Amz-Signature=becc3e70d053216fbd97b4c699dd5fbc266830ad10a4b7f96f9797aa6608fc30&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKBU6MQV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bufmq3Wl5fxPk%2BTXLEh6vTSM38IowHk1%2Bk9RXEftliwIhAMausJiWE%2FS8W%2B7r1HyP8O0GoCoFg1y2ilsjjV2pqAGlKv8DCEAQABoMNjM3NDIzMTgzODA1IgyplovZNGPaWjkFIq8q3APsP3a3qFIqYRc0eK%2F35SdBRySfhRk6s1mSEOe5%2FSeboo2SKQPGdarb6soTjgjaI6tIAyVWM4P7anYhOLOd2UcsvSRcUNxcswMu%2BAsb9NC5jsJB7WbMdAGRrClBCVkahGTiHfNb2c5sv2fDiPYsiYOQU47chs2k%2FrNbtuYLRiAY%2FD%2Bj%2BYLqJ3DqCRuNwACnFrl8Qzbcir6HWpG%2BA%2BGclTF%2FgnF4%2FFRPdyEPkSGoCn%2BdDPIw4zoqVvaUJfYEf8FetaQZbjzMXRs23GPKhS3dfdGLZeBR3a2K%2FBVjOShz0JqBS%2BNJavEqgpTB%2BPVQ8SEfG7n%2BjGXmZ%2BZy7F96zhgUSlRTbH9dITc%2FJRCcmSmycLxLjzbTq%2FwHQUdISmSzRZ6A4czlq8Hf4lnIbrhW5bZ5TbY6gxZ%2F5cF4Vc%2FGYdS89nHNqZc%2B2E1ThDH%2BZpR8vN2wZMh14KmU1EG7BZC0PN2qTDVhOtrDi2iuafeezRoqQ5AfWuoLdg6Gf%2FglbCttPtKNEXNuZ5uRo%2FNeD%2FlUu1%2BFsB1vL3XgsIwx4jldz9FYoAVV0uLrZUrdh8MkPX3pB7SOF1n%2BcrrS8d%2Fjnl%2BlnPLZYrpfpKOls0XoYYCuNVLtM7BgRxQXToAJXeXtn2yQajDxg7LABjqkASVQjwtHIT%2FHfmuDN5ZslE3EYFBpW4AZPxTw01vXuqQAVFZ%2BoWS%2FwrGTaDI0w2Vas6KFo0lBa29l9ZVUZVD%2FIb23SyRxw2d0%2FUlJnccRNTPGymEylcjHZYABehqei2yboUZSBIiMqdx6Ksp9BDiYgifovaxI88FOnwT7RE2OH52%2FJDFsVAHIJoEamTiIe0GCvcjRj0ILUdHoNpvCB1YW%2Br2297Z9&X-Amz-Signature=cab78bd6a8711afdcb6d2b6f04c6f6e296c2445ca60bb389f0988b8a279a452e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
