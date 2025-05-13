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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2K3DQQY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBf4TY5Iya3GjMWH%2FMFnY7S%2FFOqpy4moMGfQNHVNBq79AiEA6sCCZlX6BEJytKLOpbn7dlW2y3AtmL%2BiG26kyb7Vo20qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLKrO734BDN9abCuSrcA%2BqRJB0oF7onDQPD1jgvzkzrvegZiRdDUp46MSjlTg9CF2ClywbgKCwzQXMkVjxQQxp5ab0hjwH53Nn0A6RennajVpb2tbsXpuiPze7jYor7wJb7UoCCXMnVKvg5wnEWm%2FPDX%2FUbpq6vIrLyn9kCTuA%2Ftaz7oayommZWb9M69ZJJLaYEgkO94bC4WO04GEgkDqbGiQAl%2FOI9Rk3seGPvk0eYuOqTYlc8ljKZGscbAkps%2BDq7rWmCfmCE6J5nCpPoDbCacb69jw%2BTTer5QATVlF3GKf4nefKd%2Fom4mW0LA76BfExUaV0ayyH4tc9VoKpBEdxJit5noVqeN1gz4dqXAi35E5%2FoVKFcPUqrKZdo4PIgk6Dw7clkLGNxTXipfwH3uFtoyMkWi5fkBCK87ft9nZnCVJuIT4ZLfhC2Cp8LenYd3ka5mKDxjJe7QFmysSA4x8BjradbJFZDw%2B%2BZnb3RsMHN0SCCcmaz3ThEQGSe5adplakcbQAiDvBFLvFJ1aOUNEENRM15ekoVlRUE%2FOcxEiltp3jzx3zPKMJ2ag03QWL47XbSGbQvFDyMBG8Swm%2FjrBYUGxiCa%2FWXgnExQZKAgfTQK3bKrkcgXmQr6FlMjSqgxTMOlNlDhPqx71CEMIrajMEGOqUBCLb%2FbAuYh3rAH4Y0CmTpLpvOJCmgYHG53rKMzg2c5ObtzPtGKZtd3epkiRbwd7TIy%2BMzp7qbPtjYoRMF5gYEoe2pjaqZr%2FYFczINQwgxHwU7epJfYnxnv8TLWhPP7Qv%2BK944ZqHrHo4plwquud%2B6K994kUzj%2FD91cdtx031NdQoMQcm1FfTOocxe0HBDmeoCwIj10CKW1OZtZ6V4VELb3mh%2B5UEy&X-Amz-Signature=f818fcba8c9ec8583c7b2c2af7c51b8d4dc97fdb97bf36b518bf880d5f03dfdc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2K3DQQY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBf4TY5Iya3GjMWH%2FMFnY7S%2FFOqpy4moMGfQNHVNBq79AiEA6sCCZlX6BEJytKLOpbn7dlW2y3AtmL%2BiG26kyb7Vo20qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLKrO734BDN9abCuSrcA%2BqRJB0oF7onDQPD1jgvzkzrvegZiRdDUp46MSjlTg9CF2ClywbgKCwzQXMkVjxQQxp5ab0hjwH53Nn0A6RennajVpb2tbsXpuiPze7jYor7wJb7UoCCXMnVKvg5wnEWm%2FPDX%2FUbpq6vIrLyn9kCTuA%2Ftaz7oayommZWb9M69ZJJLaYEgkO94bC4WO04GEgkDqbGiQAl%2FOI9Rk3seGPvk0eYuOqTYlc8ljKZGscbAkps%2BDq7rWmCfmCE6J5nCpPoDbCacb69jw%2BTTer5QATVlF3GKf4nefKd%2Fom4mW0LA76BfExUaV0ayyH4tc9VoKpBEdxJit5noVqeN1gz4dqXAi35E5%2FoVKFcPUqrKZdo4PIgk6Dw7clkLGNxTXipfwH3uFtoyMkWi5fkBCK87ft9nZnCVJuIT4ZLfhC2Cp8LenYd3ka5mKDxjJe7QFmysSA4x8BjradbJFZDw%2B%2BZnb3RsMHN0SCCcmaz3ThEQGSe5adplakcbQAiDvBFLvFJ1aOUNEENRM15ekoVlRUE%2FOcxEiltp3jzx3zPKMJ2ag03QWL47XbSGbQvFDyMBG8Swm%2FjrBYUGxiCa%2FWXgnExQZKAgfTQK3bKrkcgXmQr6FlMjSqgxTMOlNlDhPqx71CEMIrajMEGOqUBCLb%2FbAuYh3rAH4Y0CmTpLpvOJCmgYHG53rKMzg2c5ObtzPtGKZtd3epkiRbwd7TIy%2BMzp7qbPtjYoRMF5gYEoe2pjaqZr%2FYFczINQwgxHwU7epJfYnxnv8TLWhPP7Qv%2BK944ZqHrHo4plwquud%2B6K994kUzj%2FD91cdtx031NdQoMQcm1FfTOocxe0HBDmeoCwIj10CKW1OZtZ6V4VELb3mh%2B5UEy&X-Amz-Signature=baa13cdbc01e62f8fe65c763e6eb0b591b6ef609b5e9cbbabea4e5c88e660ac4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
