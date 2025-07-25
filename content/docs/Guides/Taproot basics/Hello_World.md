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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQN2K5G6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC2SdQqUiwp89r%2BI0NtKtzwbt3rimTKthD%2B%2BfZhA5B%2BeAIhAL3kBtLbYtYIG%2FGEUZu0qrJX2uJuKji6%2B4cDwj0q%2F%2F9iKv8DCD0QABoMNjM3NDIzMTgzODA1Igzb18Rxn3tQhCo9%2Fn4q3APWD%2F6wLpCmLulgLUeBIb%2FaqoWQa1tHGjd9UZAL%2BIWzM5AGS9xf%2BP2mB%2BbBiFiAM6gpL2gUHvIQuTsm%2BUfNUplRHs8uWNlBTL70Bp0rhD0CSReFtpeowZN1ZhupL%2FG5ZbwAyZt6ow4bskPYjMbgyL0EnaKhd10FUUNPnKHhZxu6BeF%2BsFU1YfC2V9K3beYtQpVIpgZIl6Le0UDU2mXcwHda4wDsPqX4FI%2FF4h8c6OVgVKZR0b4zAJIdrYdWsZokBw%2FlXUDbzOlWam%2BpJ7dCRpAEjDvg6tAlSvAEx2exRlkuzhKHc%2B52IeiXdNvFrILvouJ8X6eMq9CPo%2FreWyTygq%2FiLx7hjRtz0IvWEpIeO20JdhzrcQN6UlzZPlDtSnZDqqhQe5pyxNLacs7%2FZwSV0MulK4we41qbx0fxXsP7BSwbvyTKKXey8DwbyO1Op4ubaQoIqU%2BUbruXG19v4QlWVMujKEzVl7KqQmRUHC%2BbdyuiWsFXg4Tyj61VuGYotTKgJApvzKb7qax%2FKplg7Fb3RlfomChDS9I%2Bbs%2BV9%2FsXSbIQpKtZm26Nt4H7VvqcAbHitipTB2fXheugh7bULJMFG7LYPVxGoFK%2FVYxXBswrGzMXcTev9H5kyrzOdC%2BZ2jC%2F94vEBjqkASPwOwNWZ5cpW%2FJejOdEzHCPhbNYTVPdxTmKovFH7QHqtNvjo8%2BV8Sq6Mr%2FnPjpL8fIso8yO%2B%2FU321hECWjprrVDpc%2Bjy2MJPvwgWXuHWGq2WM47F%2FOYs10qD%2FxN43uul4%2FyS2wlXB1eM5la7dJ510UPs9gXN%2BtPs8Q2u4cWZeXaTzJ%2FWKgMMoSdz9bOV06FeFvlYVYDWlw2Z0drkjGnJ%2FtgNVtS&X-Amz-Signature=d089220c2ccef47887f461458595a9ec73271631f0c7fbded2c927d11f73ab4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQN2K5G6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC2SdQqUiwp89r%2BI0NtKtzwbt3rimTKthD%2B%2BfZhA5B%2BeAIhAL3kBtLbYtYIG%2FGEUZu0qrJX2uJuKji6%2B4cDwj0q%2F%2F9iKv8DCD0QABoMNjM3NDIzMTgzODA1Igzb18Rxn3tQhCo9%2Fn4q3APWD%2F6wLpCmLulgLUeBIb%2FaqoWQa1tHGjd9UZAL%2BIWzM5AGS9xf%2BP2mB%2BbBiFiAM6gpL2gUHvIQuTsm%2BUfNUplRHs8uWNlBTL70Bp0rhD0CSReFtpeowZN1ZhupL%2FG5ZbwAyZt6ow4bskPYjMbgyL0EnaKhd10FUUNPnKHhZxu6BeF%2BsFU1YfC2V9K3beYtQpVIpgZIl6Le0UDU2mXcwHda4wDsPqX4FI%2FF4h8c6OVgVKZR0b4zAJIdrYdWsZokBw%2FlXUDbzOlWam%2BpJ7dCRpAEjDvg6tAlSvAEx2exRlkuzhKHc%2B52IeiXdNvFrILvouJ8X6eMq9CPo%2FreWyTygq%2FiLx7hjRtz0IvWEpIeO20JdhzrcQN6UlzZPlDtSnZDqqhQe5pyxNLacs7%2FZwSV0MulK4we41qbx0fxXsP7BSwbvyTKKXey8DwbyO1Op4ubaQoIqU%2BUbruXG19v4QlWVMujKEzVl7KqQmRUHC%2BbdyuiWsFXg4Tyj61VuGYotTKgJApvzKb7qax%2FKplg7Fb3RlfomChDS9I%2Bbs%2BV9%2FsXSbIQpKtZm26Nt4H7VvqcAbHitipTB2fXheugh7bULJMFG7LYPVxGoFK%2FVYxXBswrGzMXcTev9H5kyrzOdC%2BZ2jC%2F94vEBjqkASPwOwNWZ5cpW%2FJejOdEzHCPhbNYTVPdxTmKovFH7QHqtNvjo8%2BV8Sq6Mr%2FnPjpL8fIso8yO%2B%2FU321hECWjprrVDpc%2Bjy2MJPvwgWXuHWGq2WM47F%2FOYs10qD%2FxN43uul4%2FyS2wlXB1eM5la7dJ510UPs9gXN%2BtPs8Q2u4cWZeXaTzJ%2FWKgMMoSdz9bOV06FeFvlYVYDWlw2Z0drkjGnJ%2FtgNVtS&X-Amz-Signature=f902f412e7edc3525574efe6a3a8fd1a0f7bb9d8f2e6481c91bc444f2468d8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
