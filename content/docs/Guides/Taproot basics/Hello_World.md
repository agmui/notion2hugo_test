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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFJIBJL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCZX4qDvE4OmmXZPNR7%2FFzZ2c9oAiQL68Q3L597OFeyOQIhAM2V00rGh5Q0rvoDLA%2BY25GmrUI9cMpnFlSz%2B4fe9J6XKv8DCDgQABoMNjM3NDIzMTgzODA1IgzcKg2LApqDzkmACHsq3APvVxtuLmg26r%2F4xnjkR0mTzRlRRL%2Bw5QL3qO%2FMDUKCozhXfuZS0osWGlAdb3Ip9hb0Y2Vi4j%2FVlmxfZnU4DkqhGHUdHymuG0iN2jRiGLFCXShhIwhS%2BXXEmZekdNPim9o9v1NW9qkxxwgrPonug5ap%2FQGm3t8xE7elj1ieCj%2BhLKUyvCBj3Nu2QZKtw06iBIWq%2BHrh%2F9XGoskTf5UKPr8ev2yEnN%2FHrj8lIhLk434CsLUV7qlf4C7CV7gYtRaQgyfEUyGhVp4ka5ZLF5s6NqbyvlrAjr6pRFfRpB7CdKFyAbTcrVmNemQKWkG6jKSPnZyDtcN5FfsNdJPqgQakYA%2F0reHOyujoingLKxNIQuUR8A8KdN1sBxV42u38w%2BY89Q7VKMcJMf65XWsTi2lcB%2B%2F%2Bh4yk4xudZmb0XYuM8KvRo6zxl051lsWfgQ%2BlvjrNGpjMpjuwoyNcwqNGTk%2Fft%2FJvMQ51ecxaCdVYB4%2FuINwrrQoKtKQyvkKuOP2TYt2XXcmUAMynoiIXGYZ1%2FTkstns%2B%2FcRZ4sq1RR3CXW8Ij55GCtCKgS%2BC8mBzvfIvJidqyE7oO1hcXIQSUUX21a8SRhFSL1RINGu8pyjn3x%2FoRAnpM1BT9FZQ1O3X83%2BF8zCju87BBjqkAfFVZaqukC6lsqRX%2BVqUqUdJg1rh5m6xiKfvZCiA3OkVkj%2BGtl5mBUVFMI6e0YXmmsO4toVNvh%2Fn6U8Ztd3mH6%2BJe2JcxxfyiOWacVaNnEjEtv18%2BilANH0%2BWJLnS%2FCHyM6hwH5fa5T4Dgis8HGc1QzfOHqCvoYqFncFCKr%2FWJaVCwo%2F4Yfv88tff7GO7MrRfgsLGtFW6CHWbgu5Z6MBAlemeCcz&X-Amz-Signature=379a4632d360802583634d4eaa8e8fbf58588411a3188e30b83a359ecaa00663&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFJIBJL%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCZX4qDvE4OmmXZPNR7%2FFzZ2c9oAiQL68Q3L597OFeyOQIhAM2V00rGh5Q0rvoDLA%2BY25GmrUI9cMpnFlSz%2B4fe9J6XKv8DCDgQABoMNjM3NDIzMTgzODA1IgzcKg2LApqDzkmACHsq3APvVxtuLmg26r%2F4xnjkR0mTzRlRRL%2Bw5QL3qO%2FMDUKCozhXfuZS0osWGlAdb3Ip9hb0Y2Vi4j%2FVlmxfZnU4DkqhGHUdHymuG0iN2jRiGLFCXShhIwhS%2BXXEmZekdNPim9o9v1NW9qkxxwgrPonug5ap%2FQGm3t8xE7elj1ieCj%2BhLKUyvCBj3Nu2QZKtw06iBIWq%2BHrh%2F9XGoskTf5UKPr8ev2yEnN%2FHrj8lIhLk434CsLUV7qlf4C7CV7gYtRaQgyfEUyGhVp4ka5ZLF5s6NqbyvlrAjr6pRFfRpB7CdKFyAbTcrVmNemQKWkG6jKSPnZyDtcN5FfsNdJPqgQakYA%2F0reHOyujoingLKxNIQuUR8A8KdN1sBxV42u38w%2BY89Q7VKMcJMf65XWsTi2lcB%2B%2F%2Bh4yk4xudZmb0XYuM8KvRo6zxl051lsWfgQ%2BlvjrNGpjMpjuwoyNcwqNGTk%2Fft%2FJvMQ51ecxaCdVYB4%2FuINwrrQoKtKQyvkKuOP2TYt2XXcmUAMynoiIXGYZ1%2FTkstns%2B%2FcRZ4sq1RR3CXW8Ij55GCtCKgS%2BC8mBzvfIvJidqyE7oO1hcXIQSUUX21a8SRhFSL1RINGu8pyjn3x%2FoRAnpM1BT9FZQ1O3X83%2BF8zCju87BBjqkAfFVZaqukC6lsqRX%2BVqUqUdJg1rh5m6xiKfvZCiA3OkVkj%2BGtl5mBUVFMI6e0YXmmsO4toVNvh%2Fn6U8Ztd3mH6%2BJe2JcxxfyiOWacVaNnEjEtv18%2BilANH0%2BWJLnS%2FCHyM6hwH5fa5T4Dgis8HGc1QzfOHqCvoYqFncFCKr%2FWJaVCwo%2F4Yfv88tff7GO7MrRfgsLGtFW6CHWbgu5Z6MBAlemeCcz&X-Amz-Signature=3be004dd8092b5704d740dccc396d637bcca7678cf72b9035376abee3cd59ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
