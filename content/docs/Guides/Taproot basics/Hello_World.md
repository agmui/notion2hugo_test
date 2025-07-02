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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5UB4PQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkk1U4AgvWxiHN2hEPf%2FYx7NLff50p%2B3Y67k4IlTMhMwIhAP85Ba1u7iHbTMMIoSYFY%2FjKYWMKzrcEVDJOIetd17asKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B5Ayg7xazZ%2FsSnEkq3AM7jRxGF1KNqnI3zJ4hIYBFy%2FTIZK0VmrU%2BHcX%2Beaq8gAxeWcNUryAou3HXi9BEgklEa%2BpkktE2Mo1kfJJF4ttIu41MvNa7Xx1Kt0cSjSbTYhFwLoK0y9oF9%2FASk4GA3lCNV%2FWRrBWoYa09yNMNlrAUqpF5m%2FwUc4Zkfl0zeW%2B2URzGtt%2B3mzsMhoMdorNoWfwMd5ExCjpRhYt9YyGPqq8e552EOnXdrGhFssqzvesNO%2FHQ6H%2F5W4ahQg1QF1zQcvtIzwRcW6Zu%2FkwsgN0OTEvS%2F7eqFEwFN9hPW1oHvLXg0OoA8KW%2FWF0WSa7pGdUyiRT3rw8P%2F2kv9U2mnB%2Bnd783G3rdHl6twLhGBbJXjB5B8D9QuTtm5d%2FnduJ%2F1p0gHRmvltM3QPsKX92LMWHNds87PfjTT12zJ1cozfjP8t7LD9ibnpCVWrAfQ3EnuKuMYvXiJcAP4k1WFFsM0fbh31yjKp8nOyBgLoRz1ajU%2BeLcuwszS14EKzq4cZw6uCHYlk6QV0nWv4N6Vvps6JF97k2myjFYW8mVeVebkfufs3X0zwe%2FNlo0EgDq%2BbrtNhgEP6ZMbTPvG8dCdLM6WbxmD98ZpB%2FiUo7Yfy3%2BkHWALoGuJf0Kw67IewzMcYxb8zDvipPDBjqkATN3knjKWgH3GFIS8aGXA4ovXqmfSBQbuQti0A3dFpa8XunN2hmP8S7AKgD5V01HlsHlCuXN2XHohE6DbhXtjXW8pe376PnPHhh0WX%2FrrHhIF0JC7fWdZyOKzo0yGLgqoZ%2FbzNRM3aFuFWsO8zdrlvUZNNnrTatQe6NEDZIDruBxuyKRB98IczHdbI4rHTOooteJTGA8Vr0zdyC6GbdAna4pSSn4&X-Amz-Signature=a79217048341ea00ddce84a7ded21cecd9e0a5406a2f38296db4ba4c68d214bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI5UB4PQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkk1U4AgvWxiHN2hEPf%2FYx7NLff50p%2B3Y67k4IlTMhMwIhAP85Ba1u7iHbTMMIoSYFY%2FjKYWMKzrcEVDJOIetd17asKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2B5Ayg7xazZ%2FsSnEkq3AM7jRxGF1KNqnI3zJ4hIYBFy%2FTIZK0VmrU%2BHcX%2Beaq8gAxeWcNUryAou3HXi9BEgklEa%2BpkktE2Mo1kfJJF4ttIu41MvNa7Xx1Kt0cSjSbTYhFwLoK0y9oF9%2FASk4GA3lCNV%2FWRrBWoYa09yNMNlrAUqpF5m%2FwUc4Zkfl0zeW%2B2URzGtt%2B3mzsMhoMdorNoWfwMd5ExCjpRhYt9YyGPqq8e552EOnXdrGhFssqzvesNO%2FHQ6H%2F5W4ahQg1QF1zQcvtIzwRcW6Zu%2FkwsgN0OTEvS%2F7eqFEwFN9hPW1oHvLXg0OoA8KW%2FWF0WSa7pGdUyiRT3rw8P%2F2kv9U2mnB%2Bnd783G3rdHl6twLhGBbJXjB5B8D9QuTtm5d%2FnduJ%2F1p0gHRmvltM3QPsKX92LMWHNds87PfjTT12zJ1cozfjP8t7LD9ibnpCVWrAfQ3EnuKuMYvXiJcAP4k1WFFsM0fbh31yjKp8nOyBgLoRz1ajU%2BeLcuwszS14EKzq4cZw6uCHYlk6QV0nWv4N6Vvps6JF97k2myjFYW8mVeVebkfufs3X0zwe%2FNlo0EgDq%2BbrtNhgEP6ZMbTPvG8dCdLM6WbxmD98ZpB%2FiUo7Yfy3%2BkHWALoGuJf0Kw67IewzMcYxb8zDvipPDBjqkATN3knjKWgH3GFIS8aGXA4ovXqmfSBQbuQti0A3dFpa8XunN2hmP8S7AKgD5V01HlsHlCuXN2XHohE6DbhXtjXW8pe376PnPHhh0WX%2FrrHhIF0JC7fWdZyOKzo0yGLgqoZ%2FbzNRM3aFuFWsO8zdrlvUZNNnrTatQe6NEDZIDruBxuyKRB98IczHdbI4rHTOooteJTGA8Vr0zdyC6GbdAna4pSSn4&X-Amz-Signature=dfc7129545543ed76c5134bcc2b7b3311c154a3b158076c7760c31196583cba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
