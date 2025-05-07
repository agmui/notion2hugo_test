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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR675GQF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHR%2B%2BpOMrq3KHl10X44n3cdXXGT1Gaw%2BSqKsihfgtMYSAiEAt2%2BUl%2FXCCbN2wq40gPlzRORd4%2BUpTQfJ5b3Px%2FD3vOQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPRjap%2BLVS%2BGlnPMxCrcA4GM0U5WdAzvVEy%2FF2zfiqXDZlPo3MCFMFZhBENU2c4C%2BrsxjFPWDDjs7W6r%2F4%2F5C%2FyqqSNYleWnm9K179u%2BCCePHcFnWBF%2FYIcFbc91g30EDVnqndFh4eN6mno0%2BNONlNYcQ8v1LKUcZkX1%2FH6J8j8LzpXHNJPeh%2BBL23Fh8CwNMoB9miMhpay4j90Y16vFiFmtxIcdnZ4Qzj9oXviGIKBZAe63iTxE6ifPnd%2B13%2BvPdwsny7jHwL7lBge2RUZAcNV8craVDBHtJOfM8wEhOZdOteEUD5oiEz6Czo6E2T8FuFNLE5ifXUMokcxRTgYJwkP6LfQbYMc010%2FcnORxxlSs99eQJGR%2FV6%2BZLd2ygkW%2BFXo%2F34dQvLr9GlTGs2y%2F2tITJ%2FTWDjMRaa98X3bgZ09SCahQeFLmYO8oHdlnwjV9ctEGpOrjBfFf9LoXYF3zGlapOGRPUedhYCiesLcIA6F3FX1GlFOynYF%2Bk1%2BAH5oQBp27ZhMLt8NYa0oiCKrG86iwJGv9wieuJ2wM%2BKgbhGQrkyDUH6DbmeXDoYIGs6UfjNPyquTbAIC0jeJoBds6fk9dxQhwO1g4P%2BIcP56Jx6XZsvBh5xbSQDzN6NfGtc8mKexo2uUDQjLtuLJWMPSw7MAGOqUBHl6vcaO7r32tcSrcDUafO3awpyNtNpKEz%2BwHhhH1PwxD03OpievQkDXr57ZES73J1%2FmZYfuVy908J3hqnq2NzaCe1DnqCe7FcKtn%2Bd%2FA%2FLeUo3j%2FzEw%2Bcl%2BZt0t2g%2BCCwNK1P%2FhQm%2BIBS7pEMe7GcWNoCBnXylP4cZ5b7un%2FxUwgB8kSd04fTInL5do5anYlkSwko8HDHZqtsteXWe2hni%2BA%2BwWP&X-Amz-Signature=8dcdea1a744e70d53873c028f5df17c7f22e933298958ce0f3e93c0685ba2524&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR675GQF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHR%2B%2BpOMrq3KHl10X44n3cdXXGT1Gaw%2BSqKsihfgtMYSAiEAt2%2BUl%2FXCCbN2wq40gPlzRORd4%2BUpTQfJ5b3Px%2FD3vOQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDPRjap%2BLVS%2BGlnPMxCrcA4GM0U5WdAzvVEy%2FF2zfiqXDZlPo3MCFMFZhBENU2c4C%2BrsxjFPWDDjs7W6r%2F4%2F5C%2FyqqSNYleWnm9K179u%2BCCePHcFnWBF%2FYIcFbc91g30EDVnqndFh4eN6mno0%2BNONlNYcQ8v1LKUcZkX1%2FH6J8j8LzpXHNJPeh%2BBL23Fh8CwNMoB9miMhpay4j90Y16vFiFmtxIcdnZ4Qzj9oXviGIKBZAe63iTxE6ifPnd%2B13%2BvPdwsny7jHwL7lBge2RUZAcNV8craVDBHtJOfM8wEhOZdOteEUD5oiEz6Czo6E2T8FuFNLE5ifXUMokcxRTgYJwkP6LfQbYMc010%2FcnORxxlSs99eQJGR%2FV6%2BZLd2ygkW%2BFXo%2F34dQvLr9GlTGs2y%2F2tITJ%2FTWDjMRaa98X3bgZ09SCahQeFLmYO8oHdlnwjV9ctEGpOrjBfFf9LoXYF3zGlapOGRPUedhYCiesLcIA6F3FX1GlFOynYF%2Bk1%2BAH5oQBp27ZhMLt8NYa0oiCKrG86iwJGv9wieuJ2wM%2BKgbhGQrkyDUH6DbmeXDoYIGs6UfjNPyquTbAIC0jeJoBds6fk9dxQhwO1g4P%2BIcP56Jx6XZsvBh5xbSQDzN6NfGtc8mKexo2uUDQjLtuLJWMPSw7MAGOqUBHl6vcaO7r32tcSrcDUafO3awpyNtNpKEz%2BwHhhH1PwxD03OpievQkDXr57ZES73J1%2FmZYfuVy908J3hqnq2NzaCe1DnqCe7FcKtn%2Bd%2FA%2FLeUo3j%2FzEw%2Bcl%2BZt0t2g%2BCCwNK1P%2FhQm%2BIBS7pEMe7GcWNoCBnXylP4cZ5b7un%2FxUwgB8kSd04fTInL5do5anYlkSwko8HDHZqtsteXWe2hni%2BA%2BwWP&X-Amz-Signature=a8610b014c788510d3d2cf3d914b94407b1b0f6bd14c8521d9468d87ea8df2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
