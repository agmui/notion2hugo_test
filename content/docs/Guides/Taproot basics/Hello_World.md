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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLL5XVU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwVvbmV%2FKmmscjIhXQcUnz1f24uFcy2JSOBTrvQJB7cAiEA0QCF5SzibsiXPyGf%2BxQCY1kdNYhfI%2B3oMpz6d5ANML8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ufDHU0GiMuRGC4ircA6tvHONZXQFkSLU2BBQaYli%2FCHne8OexO3uAAyuYgjfP66N8Y9NINMtE2x9XFB3Q8vUpzuBEVk5zNhI84HriNUEPCy70Wfv%2FFtrpzQz0L7If3qjXodu9VNKmeI8g%2F0wY%2BSOK06Tqpbgn2eipGKFIt%2B%2B611P0PZYICQRi2%2BPacFFtWZbJI%2BDBR03AAWBkDm4dUnfnlLEW4xlExUkNhNDcOhNYFlE%2F%2Flpv%2FrUeWHfMGb8T25wcNZOpQtlKd%2BOLqPXV7Kn5C%2Fn0RkM0AuD%2FfafnxlC4yO0SvUZFD%2B6DFtQ5fy9cfi3eOb19M5Qn60xtBAZS1OU%2FTqTWq9KWU1nJai05IPQfQN8URDMpsXqra2AjK%2FH7MfBIkv%2BQgExzhTxKf78IDMHAiq7Ky8PTEtCxEIr9%2FWgySG2iQW2JlOsalWZubsvIf29hsY4JMhVsZQX6JIYGquA1VjakpbTSDs%2F7q29sdvCthjCIR13bUAWPjxNnBKeMGvt0KmjABPKgWHF0gfzO%2BHvlwkkv9OWUDFzuv94K5oZaqOh1B2fRUBAELQwn32TkuoWJLbKMUzQL8SiaaRjsHfPCHY0wNLUNNDwuCD9ilZyDBaNMVW20n30gKG9LjPQS0AXGETXHF0x%2BAKeOMJqj4L0GOqUBInPLcO0r4fsFYT%2B5dL6fv62MbjF6mXfxwZrwgvqz%2BDbjVRCYyz3tqRnOaCOC2I98dqg%2FgQb6u%2FqivsoS0gxnEpafX7zS6EbQsJIqFS8%2FjaGqbfbPoOxPwS3U7Pq%2BXfZU2MWCIjSIADgarCcP40ndvEVzC7dMbNQX1C2iXK0cLlNamzvjKrPlnbqhHkfS9%2BPt3V6WGsxF87hzb%2Fe51WcxoIFbMZH2&X-Amz-Signature=5ca25ed6b20c4166ddc33641a4d38709f6ba2e2f7a7a6dd2c6cd5d68fd80a9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNLL5XVU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwVvbmV%2FKmmscjIhXQcUnz1f24uFcy2JSOBTrvQJB7cAiEA0QCF5SzibsiXPyGf%2BxQCY1kdNYhfI%2B3oMpz6d5ANML8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ufDHU0GiMuRGC4ircA6tvHONZXQFkSLU2BBQaYli%2FCHne8OexO3uAAyuYgjfP66N8Y9NINMtE2x9XFB3Q8vUpzuBEVk5zNhI84HriNUEPCy70Wfv%2FFtrpzQz0L7If3qjXodu9VNKmeI8g%2F0wY%2BSOK06Tqpbgn2eipGKFIt%2B%2B611P0PZYICQRi2%2BPacFFtWZbJI%2BDBR03AAWBkDm4dUnfnlLEW4xlExUkNhNDcOhNYFlE%2F%2Flpv%2FrUeWHfMGb8T25wcNZOpQtlKd%2BOLqPXV7Kn5C%2Fn0RkM0AuD%2FfafnxlC4yO0SvUZFD%2B6DFtQ5fy9cfi3eOb19M5Qn60xtBAZS1OU%2FTqTWq9KWU1nJai05IPQfQN8URDMpsXqra2AjK%2FH7MfBIkv%2BQgExzhTxKf78IDMHAiq7Ky8PTEtCxEIr9%2FWgySG2iQW2JlOsalWZubsvIf29hsY4JMhVsZQX6JIYGquA1VjakpbTSDs%2F7q29sdvCthjCIR13bUAWPjxNnBKeMGvt0KmjABPKgWHF0gfzO%2BHvlwkkv9OWUDFzuv94K5oZaqOh1B2fRUBAELQwn32TkuoWJLbKMUzQL8SiaaRjsHfPCHY0wNLUNNDwuCD9ilZyDBaNMVW20n30gKG9LjPQS0AXGETXHF0x%2BAKeOMJqj4L0GOqUBInPLcO0r4fsFYT%2B5dL6fv62MbjF6mXfxwZrwgvqz%2BDbjVRCYyz3tqRnOaCOC2I98dqg%2FgQb6u%2FqivsoS0gxnEpafX7zS6EbQsJIqFS8%2FjaGqbfbPoOxPwS3U7Pq%2BXfZU2MWCIjSIADgarCcP40ndvEVzC7dMbNQX1C2iXK0cLlNamzvjKrPlnbqhHkfS9%2BPt3V6WGsxF87hzb%2Fe51WcxoIFbMZH2&X-Amz-Signature=afe41972cc8e1718bfbf2a7f404338022a9b5754343fe5120741d31bd2861afb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
