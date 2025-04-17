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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJDQRVQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkqZxnU0oM488seLfhJxvbhSF%2BPccp3F1zVn2wF%2BVx3AiByoOweh32ICd3X%2Bh96PTZieHRkg89q3xN56ngrgMhWDCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMFWtR8Y1cT0FpsAvSKtwDKXS88Mvo08WJXUcfVmBXxXgf%2FlcG4ebplDLQ3zjNW9VoHgwgYirLfKndzouVF7Nvvfa8JveiIf5gPldR3Hq9RyLkz6AD%2FP0i7qXbkOXfsQRFCV7JqMkRvC06AHitzRaPbw08lMYfMI5nV%2BqHb4A1l1mtplD8XC7mnMHkCMlqvZ5syAMMhQypru5A8XP6MKQxGp2K7WOezPuIWAA3QNNI%2Fw0wSujEthN%2F%2BskKs6NgXfwBX59oxbL2cQWndmQXXvsHE975Jk0tUx1YiTj0XwVEhkFI1m%2F8HinPeersGicwHPaQZ%2BQUOAwNuGsaf2Ba%2BWJNUMOTM6y5VAifqli%2BX9LStIgd%2B9CykuDYIdQlkNnqvfZLGQm%2Bp0u%2FM3RLTn1nRKmpYPEduYmsh4zh9ZgdfUKOaSYCLk9riYdFSUed7jWEwVk4OhuVkndlvF5PtA4cal%2B7DQp21xSvVOW%2F5TVp%2FoLH3Q5X54l6Di%2BiUTN9lUtMe3E6PENkk3RoWlgRHGd%2F04hDxF6905QjTfPv3CefTM4BQGJt7qX1Rl1bgeNmjz8cgid8QvT6L4tYU8w8PayDj668mCk7kUxOgjuVuT0eAO1t8Iw2NZY3Wk81yN1AA0kbC9WmMf%2FLNMX6yMroEbswjvyDwAY6pgHMnbCDSGzbWYgWL2rMBS%2F8n0sXjCtcxKsYyqOnQN2nSTIYA4F3fJHkN7kdSGDesXW45bYou0pEhw195SselwQqQHlnAhDyC8EsAhT5Q36T61lW6IxvNSW6g5l%2FBu7sznfY%2F4hKJjyXXiij%2FRJ716gs1f3gnWEdhLURPAKEblnuJ757d%2F3KbuJxrq%2B4JaiSjhGuw1fcEKYE6%2FbE1BwWKND112pUoWKe&X-Amz-Signature=900c731e4c8a9fcc66a88e9843aa97cc2a0b3ebf960009a5b235225380df2376&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJDQRVQ%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkqZxnU0oM488seLfhJxvbhSF%2BPccp3F1zVn2wF%2BVx3AiByoOweh32ICd3X%2Bh96PTZieHRkg89q3xN56ngrgMhWDCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMFWtR8Y1cT0FpsAvSKtwDKXS88Mvo08WJXUcfVmBXxXgf%2FlcG4ebplDLQ3zjNW9VoHgwgYirLfKndzouVF7Nvvfa8JveiIf5gPldR3Hq9RyLkz6AD%2FP0i7qXbkOXfsQRFCV7JqMkRvC06AHitzRaPbw08lMYfMI5nV%2BqHb4A1l1mtplD8XC7mnMHkCMlqvZ5syAMMhQypru5A8XP6MKQxGp2K7WOezPuIWAA3QNNI%2Fw0wSujEthN%2F%2BskKs6NgXfwBX59oxbL2cQWndmQXXvsHE975Jk0tUx1YiTj0XwVEhkFI1m%2F8HinPeersGicwHPaQZ%2BQUOAwNuGsaf2Ba%2BWJNUMOTM6y5VAifqli%2BX9LStIgd%2B9CykuDYIdQlkNnqvfZLGQm%2Bp0u%2FM3RLTn1nRKmpYPEduYmsh4zh9ZgdfUKOaSYCLk9riYdFSUed7jWEwVk4OhuVkndlvF5PtA4cal%2B7DQp21xSvVOW%2F5TVp%2FoLH3Q5X54l6Di%2BiUTN9lUtMe3E6PENkk3RoWlgRHGd%2F04hDxF6905QjTfPv3CefTM4BQGJt7qX1Rl1bgeNmjz8cgid8QvT6L4tYU8w8PayDj668mCk7kUxOgjuVuT0eAO1t8Iw2NZY3Wk81yN1AA0kbC9WmMf%2FLNMX6yMroEbswjvyDwAY6pgHMnbCDSGzbWYgWL2rMBS%2F8n0sXjCtcxKsYyqOnQN2nSTIYA4F3fJHkN7kdSGDesXW45bYou0pEhw195SselwQqQHlnAhDyC8EsAhT5Q36T61lW6IxvNSW6g5l%2FBu7sznfY%2F4hKJjyXXiij%2FRJ716gs1f3gnWEdhLURPAKEblnuJ757d%2F3KbuJxrq%2B4JaiSjhGuw1fcEKYE6%2FbE1BwWKND112pUoWKe&X-Amz-Signature=ca45edb48d272e515b4538428c236fbdaef769ba6da3c3f79e755355870659be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
