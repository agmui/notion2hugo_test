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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=d742c71a716253d4cc2889caa409c7279f499a89b8fd33debdeefc0ceb500913&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S77ZVFAN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeaaEs6t918YU%2FEZo8u2RlsJDWRo%2FEDxD1Hl5nJkt8uAIhANlZPypYRYlF9PNREpVrEKfK0APVk6mhMvPcYISkVXxVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwRKnKJvo%2B%2F21e5K2Yq3AMtjeHcVTvUQayFOamJlo69yQyfFgpX%2Fk6YjdTP07h87VY0B3K4G0%2BJPsO31JcqrCcV1Tpkyy7X4MwytJXXi2I8q9lFjA8sVEulBJ8p3Rms345tdcSLqJg9%2F8RnvNKVkg4opAbKthFaQg%2BYuAj2VNtb%2F4Bzhx%2FRVA3HUHbJihvtj8JEeQ7d4os%2BB5SmPxk6HuRt6tDof0Xv%2FR%2FgCo6P3ZfNVi0KdQ%2FSONTfp1A%2FBq403fsTpJSFwSRBTnl5Mue0BXq8tOSFJwYSveEeOIQtrI7Tq0iLyyEubihTRR%2BLPcYvuZJhvOHnZL%2BmO2ZkeUptT4dG%2Bfi%2B3TGabFTdMizVhTY9upe91fO%2BfRY%2F%2Bf32xElXV9wlYPc%2FxK4%2B%2FW0RPFiIL8fQew%2Btw%2Bq7yACwFFWAbZfnplS4v85y7HDeRgc8lnYJ4tTMb8YH3kdo0t2erU5UPibnS6ZcS6yHiWpJiy7mU2iqxTwTdYJrCbQ0K0WRgpVAYnuGmOwLIi5Vo0bedYXaliNebkW8YWW7X5jUKDFbd1Wf0jXMPb4i2iU0ubdhTfKjAELOrOFgFx64T19a51xsU7lm2hF3Zy%2FQC0KvBJP7nhVxfbGy4HxOg91Jeuaz%2Ba%2BooEDlosU1yVU0A2M1lDDPkJ7BBjqkAZTmWgO%2FPeWe7WHx8KdSHaCX6aeswbRK%2BQW3smZofldPi6uV1qxhA4UYbvgJdYk4KQcdheECgkfn7WbfAVjSL%2FqYC4brjqtjyX1yOHYwCrCRstudsg1QhX%2FfF%2BQ05aAnFFeM3cGkhTpWY8xwKhXmyFe1O%2FEGk8n8JZNCe9WTAqh9oaSlrhkU65yLK%2BXg%2B5fvjaNDWY7Si%2BrESUXKqSCmbzuR7lw3&X-Amz-Signature=47f3145a670aa31f28c7872e4f76617d99ab9f64d8daa100e49874e8f43333d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
