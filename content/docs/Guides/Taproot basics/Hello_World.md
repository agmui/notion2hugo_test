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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUQLBEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc7QDMZb5O5LUaoIw0lIbKq0UYcWMVEClfOFTUOMYRPAiBuRFoAZERjslOiwX1kiQcifsiy0eAh0PSBNFZycKkfHyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMghWziRt7xt4tdLBvKtwDtZ7sWC0fXCIhN6aECmGfBc7ZSHQvRuXrn5VoGvo0OeL9IWurO8jTzI6S2zDIc7pmRyBy%2BZVdEN7MgITFBgH9%2BNFrT8PjxQS06lWXOO14651UTRct8cxu8r%2BAytJtsIrpObigR3D7ZIuau87d03GmDlgBtUf09J1t%2F4IMoVl3wTmBbGp%2FYenJ%2BgHgvKmyyqANz7h6KhnLlVpLw2NNxME6%2FDkOw34gOiBI4b1EDeGbXijKj4WAbgK9KpzD3vWbfVYjY9f0zcUx4urqgPEnGceYJ%2BDRhbJ29ik77sgJ6AQmdNst3sjzJ2aFXw26lpkuX5K5IsiD8b%2B6IQyFc0VZvWzWkp9lSTPronw3UWxIgn3heWAzwcRJMGzZ0CpVQ516312cm2sIfsbXMss1rRi4bVfdXUnfTu6v362NxG5VMxJCjQCk1W%2BvPpv2fZ7RI3k9SRKZtUEbYKYLG%2Fnhxw9Q%2BLZ2uN1WCJfmTneE7Al2kAjUmJbbDdnTih5i42%2Bz5EdATymye%2FqQTyyW95mR0Sl6xKgom0dofGrOYclTO4PC9nqWV2I358mwvUJR8pbp%2BsTKtDbi86AcBvaumrO4W%2Bg83pRV5GI5O1VZUIBIiIbycWJ1FkfI1O9g5sSz90L%2FeMAwlZDyvwY6pgEYbOoKJ6fSn%2B%2BX32Z81FmqY9QPTHKVYUn4BGjNV0v7XQjqewnU%2BimtFloEb8nepZD7C%2F8llCv9IfCxZTJUXVkKZ3FkRolEQxYk0bNyL6SzVR17slfpDpJMJpQZJ9i3yJGMbfEpCWLiiaC0C9fAWyOYTE8mXsQiKZlvACyJgTo3%2B3Fnk5LF5KfPVjo6d6U%2B0IvKrTnx%2BbeIYWrQmDYvnG%2F6N9A59%2Fbr&X-Amz-Signature=db4c96d5c9cf3adc75a5b42657792aa8abd111e1146461281a1a99191d768b41&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUQLBEU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc7QDMZb5O5LUaoIw0lIbKq0UYcWMVEClfOFTUOMYRPAiBuRFoAZERjslOiwX1kiQcifsiy0eAh0PSBNFZycKkfHyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMghWziRt7xt4tdLBvKtwDtZ7sWC0fXCIhN6aECmGfBc7ZSHQvRuXrn5VoGvo0OeL9IWurO8jTzI6S2zDIc7pmRyBy%2BZVdEN7MgITFBgH9%2BNFrT8PjxQS06lWXOO14651UTRct8cxu8r%2BAytJtsIrpObigR3D7ZIuau87d03GmDlgBtUf09J1t%2F4IMoVl3wTmBbGp%2FYenJ%2BgHgvKmyyqANz7h6KhnLlVpLw2NNxME6%2FDkOw34gOiBI4b1EDeGbXijKj4WAbgK9KpzD3vWbfVYjY9f0zcUx4urqgPEnGceYJ%2BDRhbJ29ik77sgJ6AQmdNst3sjzJ2aFXw26lpkuX5K5IsiD8b%2B6IQyFc0VZvWzWkp9lSTPronw3UWxIgn3heWAzwcRJMGzZ0CpVQ516312cm2sIfsbXMss1rRi4bVfdXUnfTu6v362NxG5VMxJCjQCk1W%2BvPpv2fZ7RI3k9SRKZtUEbYKYLG%2Fnhxw9Q%2BLZ2uN1WCJfmTneE7Al2kAjUmJbbDdnTih5i42%2Bz5EdATymye%2FqQTyyW95mR0Sl6xKgom0dofGrOYclTO4PC9nqWV2I358mwvUJR8pbp%2BsTKtDbi86AcBvaumrO4W%2Bg83pRV5GI5O1VZUIBIiIbycWJ1FkfI1O9g5sSz90L%2FeMAwlZDyvwY6pgEYbOoKJ6fSn%2B%2BX32Z81FmqY9QPTHKVYUn4BGjNV0v7XQjqewnU%2BimtFloEb8nepZD7C%2F8llCv9IfCxZTJUXVkKZ3FkRolEQxYk0bNyL6SzVR17slfpDpJMJpQZJ9i3yJGMbfEpCWLiiaC0C9fAWyOYTE8mXsQiKZlvACyJgTo3%2B3Fnk5LF5KfPVjo6d6U%2B0IvKrTnx%2BbeIYWrQmDYvnG%2F6N9A59%2Fbr&X-Amz-Signature=6aa991178ba9db5d84488496774df21bbc52e2f4edb152237c7f7e5ce52d38fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
