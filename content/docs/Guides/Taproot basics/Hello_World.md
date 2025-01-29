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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMI7XW3F%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0MxmZnzLDAIcJZH0IqNQN4%2B86RLp6NAqcrj1a%2BTaA1AiEAw1IhoUG0u4bR%2FjI0d5HvShas%2F7yvO9wxXrKR%2Ff0Z2v8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxQ9BxsfeB80k2jPCrcAxhLL0QK1Jg1uiLkid6DHOSVpLTmUeyns1ZOn5J1YNIiKTgu5%2BlGg9EdIoJVfOsYH%2FmZbpCUxDxeNlwMzytYNO3SOQsmGRAzE9aoR6XuJDsEX7yRpfmoNyFPe1ZD5zSjHehDpmCUiVnY%2Fxh0HpiRUUnHj8Tg4nE3NK8FsRCHk7lOYA664H%2BJKi5MSQDXj%2BGrzYudjkAulxG5w9yKjp4TFYP6lRa4LkiqmPqIMp36lMf%2B0Yx0uGvkxgSxjc8jr%2BBWkKKRsuhSoidAvN57PD9Wob%2BTd3ldi1VoeoVkW9YkKnXeNLdJsyh6HHtYIE8uXS2hpZc3pJE1YRVPbOBFByifeo%2BP5dBikO656tGh%2FgQO3dkeEv7L1bran3XlOBq1h6kbRkL%2Fj8AJk56Rr30cOCVw7bWG%2FFkHsqFPAB7CdV0J2NdA3soZSVKULmqfHyqB58nGa4vomySfSmiZUcIdjqdDZq8Skz9qMNvjblMimZxLhIL%2F5wgvBYLBzpgHVeiAG95gWJgQRggKSIa51TlAlbywL%2Fg3czDrM%2BodzbvjqrphqO79sqYeBWd67a%2BVVR96FX2MWVg3oHoUUSvTy3a3WMIBKgMzdZTvcTwLiz2W7nc7NkM2NrkA0EMiXwath6VlMMuu57wGOqUBtOkfI1KU%2BrAZCxxO7azxBoyggVKHjO%2BjV6E8G689taOmYYyqwO8yDVKU8UfVyL%2BxkPutrqeYxQ1yC4j3DBwaS9ZkH11J2bnsPvRWPYpn%2FSt6VffNZ1BPjaieaCe03zU9Fr3HxkXI8Lx4OcP64WI7sJcKCMsKOrk3UJsmSUSDS8AxQfK%2FF0QHU%2BE%2FoRA2r0mReaeft6wcf20kk6RuBpCepG1xT5Iv&X-Amz-Signature=c4fcc71ac8a0f0f262ef2f5e6d5c46fdee5c082257b677bf6f7525d458efc6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMI7XW3F%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0MxmZnzLDAIcJZH0IqNQN4%2B86RLp6NAqcrj1a%2BTaA1AiEAw1IhoUG0u4bR%2FjI0d5HvShas%2F7yvO9wxXrKR%2Ff0Z2v8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxQ9BxsfeB80k2jPCrcAxhLL0QK1Jg1uiLkid6DHOSVpLTmUeyns1ZOn5J1YNIiKTgu5%2BlGg9EdIoJVfOsYH%2FmZbpCUxDxeNlwMzytYNO3SOQsmGRAzE9aoR6XuJDsEX7yRpfmoNyFPe1ZD5zSjHehDpmCUiVnY%2Fxh0HpiRUUnHj8Tg4nE3NK8FsRCHk7lOYA664H%2BJKi5MSQDXj%2BGrzYudjkAulxG5w9yKjp4TFYP6lRa4LkiqmPqIMp36lMf%2B0Yx0uGvkxgSxjc8jr%2BBWkKKRsuhSoidAvN57PD9Wob%2BTd3ldi1VoeoVkW9YkKnXeNLdJsyh6HHtYIE8uXS2hpZc3pJE1YRVPbOBFByifeo%2BP5dBikO656tGh%2FgQO3dkeEv7L1bran3XlOBq1h6kbRkL%2Fj8AJk56Rr30cOCVw7bWG%2FFkHsqFPAB7CdV0J2NdA3soZSVKULmqfHyqB58nGa4vomySfSmiZUcIdjqdDZq8Skz9qMNvjblMimZxLhIL%2F5wgvBYLBzpgHVeiAG95gWJgQRggKSIa51TlAlbywL%2Fg3czDrM%2BodzbvjqrphqO79sqYeBWd67a%2BVVR96FX2MWVg3oHoUUSvTy3a3WMIBKgMzdZTvcTwLiz2W7nc7NkM2NrkA0EMiXwath6VlMMuu57wGOqUBtOkfI1KU%2BrAZCxxO7azxBoyggVKHjO%2BjV6E8G689taOmYYyqwO8yDVKU8UfVyL%2BxkPutrqeYxQ1yC4j3DBwaS9ZkH11J2bnsPvRWPYpn%2FSt6VffNZ1BPjaieaCe03zU9Fr3HxkXI8Lx4OcP64WI7sJcKCMsKOrk3UJsmSUSDS8AxQfK%2FF0QHU%2BE%2FoRA2r0mReaeft6wcf20kk6RuBpCepG1xT5Iv&X-Amz-Signature=846600278f244e7caadf64d58dfb820bfc7ccf4e59279966a8131ed69ac890b2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
