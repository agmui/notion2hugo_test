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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TNWQ5Y%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClaa3G3VJiWzdh%2BPr%2F1iHwSPysIstpM0iM6cJCh%2BsyIwIhAI5yyTbL3zVGKLanc1AeINYBD0phRDAcZyeiyNtcXDHIKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHF138JudHpbNXL0sq3AOHE%2FNoYKZOkkgXJlfwcAb117m9qJTn%2FKcIhnX1Ll7CMYrAbWux4VIXEI8nWSJ8DJSFNr68CsRcOjoxc0KZpWGRYa6uVxU0iWw32RrtPSVRRmKwaQwQAQW7s%2Bpy3WB%2B3c%2B1HaDL3WAyPVKNopybaqWEnWoqH0TccKjopzdQOblAntr8GXIPtSOBVT2b4zpbpB67YhI4mwQhvSmo8EtkSmKclqxczkyqW9oCZRJNzVDiOuiJqZfdtXr0h%2Ff%2F%2Bc8%2FDZL2Ev4BdCNqe%2BGpfDXk9HxGFyytCfGUdQdIZoKnxY0b5ufFpmLKkALHlgNOlNYnJHgoM1pxgEJO4UMBj6XOG85JavH5sEWAYf9ICe4du85VuRI0uPeIRSMkvmkbrvr48xI%2BUJ2RAucr3WauuhAiXhQQ8VnQEQ8VjB8bOu6c4izG2%2Bvr0qDQeBLviXTHUHcVboBUXxM1fXwzFx3Ar0pc57%2BCU7rX1KCYO4cKb2AxLBPVe9urX5awplewdf6Rat1atjw%2FIgHGgCopgUq6s4jRZlLbqykwszQMooEk%2BTrjIMt7nk8R2C8lv2OjYVlZJKgYllvbzlNt2tDRh2I8bdfBzQ7n9PqrUIkVBYuuC%2BZZOJjbiSsBdX0vy1hY%2FiV3wzC23eTBBjqkAXvsbXljlip8LgHj6xuxu3UiYvtEJhK%2FjaYXKcfO5gGwk9gSl63zx6TR%2FmstCHwcVrmWlk%2F5xqVGPeW0t8HumEcVdk2THYKw6i1rvkAJxl22MHMvOwQblcQ5pK%2FkVx6NDYALXbY4%2FB5mOxRb5NSUEyTEebomEr91F26RKG3KoZB0D9M6swC2MrJAkqVb6Wgaj1wT9eUJCENlrITqAtTj2SCfVpa0&X-Amz-Signature=54a3a07da43dd9a10db928e193c766e33c7cd6f2fcbf98d6003625e8540fe9dc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7TNWQ5Y%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClaa3G3VJiWzdh%2BPr%2F1iHwSPysIstpM0iM6cJCh%2BsyIwIhAI5yyTbL3zVGKLanc1AeINYBD0phRDAcZyeiyNtcXDHIKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHF138JudHpbNXL0sq3AOHE%2FNoYKZOkkgXJlfwcAb117m9qJTn%2FKcIhnX1Ll7CMYrAbWux4VIXEI8nWSJ8DJSFNr68CsRcOjoxc0KZpWGRYa6uVxU0iWw32RrtPSVRRmKwaQwQAQW7s%2Bpy3WB%2B3c%2B1HaDL3WAyPVKNopybaqWEnWoqH0TccKjopzdQOblAntr8GXIPtSOBVT2b4zpbpB67YhI4mwQhvSmo8EtkSmKclqxczkyqW9oCZRJNzVDiOuiJqZfdtXr0h%2Ff%2F%2Bc8%2FDZL2Ev4BdCNqe%2BGpfDXk9HxGFyytCfGUdQdIZoKnxY0b5ufFpmLKkALHlgNOlNYnJHgoM1pxgEJO4UMBj6XOG85JavH5sEWAYf9ICe4du85VuRI0uPeIRSMkvmkbrvr48xI%2BUJ2RAucr3WauuhAiXhQQ8VnQEQ8VjB8bOu6c4izG2%2Bvr0qDQeBLviXTHUHcVboBUXxM1fXwzFx3Ar0pc57%2BCU7rX1KCYO4cKb2AxLBPVe9urX5awplewdf6Rat1atjw%2FIgHGgCopgUq6s4jRZlLbqykwszQMooEk%2BTrjIMt7nk8R2C8lv2OjYVlZJKgYllvbzlNt2tDRh2I8bdfBzQ7n9PqrUIkVBYuuC%2BZZOJjbiSsBdX0vy1hY%2FiV3wzC23eTBBjqkAXvsbXljlip8LgHj6xuxu3UiYvtEJhK%2FjaYXKcfO5gGwk9gSl63zx6TR%2FmstCHwcVrmWlk%2F5xqVGPeW0t8HumEcVdk2THYKw6i1rvkAJxl22MHMvOwQblcQ5pK%2FkVx6NDYALXbY4%2FB5mOxRb5NSUEyTEebomEr91F26RKG3KoZB0D9M6swC2MrJAkqVb6Wgaj1wT9eUJCENlrITqAtTj2SCfVpa0&X-Amz-Signature=a3ead7f684c2fb139a707065d679b0c2fa8b57d480db744cfac1a41ab682b836&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
