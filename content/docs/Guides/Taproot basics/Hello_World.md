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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUIYWH4M%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlqLFIDqxRmGp3RlNWP9r%2BNL2ToRD3ZznKa9vTYu6kdwIhAIZVJG1OdJM5PKlkh8JFRYLODDQcagS%2BuoxFNqNBDToQKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6KI2KqHKpnQw3eQ0q3ANejWkV4jHisNvUSZB0xozACITQw%2BrXmpfjfPGNVi9ugKEVVxU53IYB2QdRP%2Bnn2KJ%2Fq4QPnhuboK4Ki%2FpJ3ydxfSy%2Fmau0mMdOd%2BzzSKyXpPnL6ndgy6yVHJfHaoB7TOFGimVqb3a1Nw6ux68SqfD6HjD9XpEUmUb7Qj7C7WZKdOOe6sQcnvTTae4tehmeTp2zWO98xJSwxww9JXbSJFsI1rbVee7E%2FU5daktUfoJEGX3MggUFg%2FGxtrDqo48z8aqIKB4B3DAiCJy2yNmXWVnSkLlEyklPPWqQUYXDF5zhv%2BkSZboipgg0liE5g%2F8JQVBMZoXR27P7HnzZu307fHmqtcCwagbUJbS6hBGY7f1WAzNGn%2BL2SZPaGBNEQctBqK%2F%2FFCj8I2fj8Z%2FQ3u3xdKaeRSfCMgYvftsDtNTg4MXjF7rYRbEYRZoWqARecCeg5toqYK8Z1u9B1yxGnwAJuQDbf7MN7sKAZO1v10%2BVo1czWumB%2B4Z5evZZmAwlT6eXsXwyQcxRrbS2Q02yVkxQPtmVlKdR3%2FBOtKdvL5gFFlztk0criHgCPkv8jI1SZHWIiqEad8zzWeiTiljR7WnOQBbkRON3ebbhkruIYiliujdyNInQG6SfK9aXFZnmkDC97vW8BjqkAQ0X%2F6XiOK1KITHmfVhKjRehsHKmdoNZ5FfrYsP9Pq%2BsAyycG2cl0SFCinPidFEUIuTQvbqgxjxsWBnCPvPXa%2B0Y4xwrwM3CD%2FbyzX8Qh0Im7X8uzenBa5tbm%2Blu4yFCTX46EyNOkxQXWzhzVKGww36cGFM0U9jSB4cTlYx%2BCizF74pjMxu1HOxCfuk2oVjSvxriuUXSpKPoL1%2FVuh2cls9VmyQF&X-Amz-Signature=d740988958e1e49c1fd2b88dbf5655f1a6217b5158ca02326d019a9ef9041bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUIYWH4M%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlqLFIDqxRmGp3RlNWP9r%2BNL2ToRD3ZznKa9vTYu6kdwIhAIZVJG1OdJM5PKlkh8JFRYLODDQcagS%2BuoxFNqNBDToQKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6KI2KqHKpnQw3eQ0q3ANejWkV4jHisNvUSZB0xozACITQw%2BrXmpfjfPGNVi9ugKEVVxU53IYB2QdRP%2Bnn2KJ%2Fq4QPnhuboK4Ki%2FpJ3ydxfSy%2Fmau0mMdOd%2BzzSKyXpPnL6ndgy6yVHJfHaoB7TOFGimVqb3a1Nw6ux68SqfD6HjD9XpEUmUb7Qj7C7WZKdOOe6sQcnvTTae4tehmeTp2zWO98xJSwxww9JXbSJFsI1rbVee7E%2FU5daktUfoJEGX3MggUFg%2FGxtrDqo48z8aqIKB4B3DAiCJy2yNmXWVnSkLlEyklPPWqQUYXDF5zhv%2BkSZboipgg0liE5g%2F8JQVBMZoXR27P7HnzZu307fHmqtcCwagbUJbS6hBGY7f1WAzNGn%2BL2SZPaGBNEQctBqK%2F%2FFCj8I2fj8Z%2FQ3u3xdKaeRSfCMgYvftsDtNTg4MXjF7rYRbEYRZoWqARecCeg5toqYK8Z1u9B1yxGnwAJuQDbf7MN7sKAZO1v10%2BVo1czWumB%2B4Z5evZZmAwlT6eXsXwyQcxRrbS2Q02yVkxQPtmVlKdR3%2FBOtKdvL5gFFlztk0criHgCPkv8jI1SZHWIiqEad8zzWeiTiljR7WnOQBbkRON3ebbhkruIYiliujdyNInQG6SfK9aXFZnmkDC97vW8BjqkAQ0X%2F6XiOK1KITHmfVhKjRehsHKmdoNZ5FfrYsP9Pq%2BsAyycG2cl0SFCinPidFEUIuTQvbqgxjxsWBnCPvPXa%2B0Y4xwrwM3CD%2FbyzX8Qh0Im7X8uzenBa5tbm%2Blu4yFCTX46EyNOkxQXWzhzVKGww36cGFM0U9jSB4cTlYx%2BCizF74pjMxu1HOxCfuk2oVjSvxriuUXSpKPoL1%2FVuh2cls9VmyQF&X-Amz-Signature=9203c949386ca8b5816933b1b6aac7ec02e48cb61cd9fc675804a10832a29103&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
