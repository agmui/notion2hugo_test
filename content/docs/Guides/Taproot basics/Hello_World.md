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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IH32L%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACL66%2Be5pnVJ5tZve8WlEbIZqthboeDPmaHh3LYyASAIgT4AjjLrdlDoXAH5J7ZDLbZLkklS6Jc0gBxG5qI%2FfEdUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIprDwepUlntxEcueCrcA3C0NZzVB2MXnk766SVLz6mtH8L21vdRy3ZAJ%2F4573wIVn8xCbajIEM6qlrbxAoidMea5ZcZ%2F9f1VyGfhKDVplJ3l25kvN1f3vhcAQTccNaeCpftkliTvw568H8fvIcJ5MWLZyW5hfGvY3tZfgahJvrnOF28UQMFQYSphDD5W2CkAOQA4NXoObM8Ew4aFJN1cH4zRskqiWTxAS%2FtVK9yk8xs2wLIIH4F67EzeyIl1xFlbiaOH0U3mXWSvRFM%2FuFBprfRGNHNo0e3s%2Fcq1Ev%2BBMKKHrA7Y8iTEwwVfyeJFHW%2Bh%2BS9NZ0cpB8QPkmqA11oxh4gJ03Jc4Oj6DImIhel6WRvbIVCp59NwXiErazotRAIQiu5no%2By1lzJ3hQWGY60v7WgokykhXLPzYM4lq2GQtxbguD%2FxoJ0TIRGCjh3WjjUH%2Ff9Zzf1VmhQdEpm%2BbP%2BFOybsfGIavm3ICf90o%2FIcRWs5Q49oN0xNtKEJ37RtcYc3qSdZidW0gfewh582JQA%2FCRYXWZYqTjHKOxDnoOCG3Ewg4df2aNonEGFVeu%2Fc7LoXJuHfe1eCJZ%2FP2%2Bq6qP8La1X4iThV6mjiVI5xkUhdwO3sJEhDpBfzQLz5v2nK6ohe%2BEVsNvySYYaGK0VMIXgx78GOqUB%2BkSWQi0YQcXy4bo%2Bxf71ABhK5Qnf7qCSCPPw1WEImOQ8EWJompjtRsjZErvytFC4y%2Fo862gAn8sm0h7EL0HAhTK%2FygSMnTBjYoWt7TZ%2BP6yRu7v8YRf9VnApTDVumoB1NX7%2BbsLKyrSaCgDvVajjzobeu%2FQ4sYFj%2BkeSmdAakp9hPaJJGmIuYJLNhYXKcIToVhAaz6dEbSvimmN%2F%2Fai1w0Y8eBME&X-Amz-Signature=f633db1df09834c70bef5b624898d9b7ab96232bf9cd7f260e05618a3bd9c7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IH32L%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDACL66%2Be5pnVJ5tZve8WlEbIZqthboeDPmaHh3LYyASAIgT4AjjLrdlDoXAH5J7ZDLbZLkklS6Jc0gBxG5qI%2FfEdUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIprDwepUlntxEcueCrcA3C0NZzVB2MXnk766SVLz6mtH8L21vdRy3ZAJ%2F4573wIVn8xCbajIEM6qlrbxAoidMea5ZcZ%2F9f1VyGfhKDVplJ3l25kvN1f3vhcAQTccNaeCpftkliTvw568H8fvIcJ5MWLZyW5hfGvY3tZfgahJvrnOF28UQMFQYSphDD5W2CkAOQA4NXoObM8Ew4aFJN1cH4zRskqiWTxAS%2FtVK9yk8xs2wLIIH4F67EzeyIl1xFlbiaOH0U3mXWSvRFM%2FuFBprfRGNHNo0e3s%2Fcq1Ev%2BBMKKHrA7Y8iTEwwVfyeJFHW%2Bh%2BS9NZ0cpB8QPkmqA11oxh4gJ03Jc4Oj6DImIhel6WRvbIVCp59NwXiErazotRAIQiu5no%2By1lzJ3hQWGY60v7WgokykhXLPzYM4lq2GQtxbguD%2FxoJ0TIRGCjh3WjjUH%2Ff9Zzf1VmhQdEpm%2BbP%2BFOybsfGIavm3ICf90o%2FIcRWs5Q49oN0xNtKEJ37RtcYc3qSdZidW0gfewh582JQA%2FCRYXWZYqTjHKOxDnoOCG3Ewg4df2aNonEGFVeu%2Fc7LoXJuHfe1eCJZ%2FP2%2Bq6qP8La1X4iThV6mjiVI5xkUhdwO3sJEhDpBfzQLz5v2nK6ohe%2BEVsNvySYYaGK0VMIXgx78GOqUB%2BkSWQi0YQcXy4bo%2Bxf71ABhK5Qnf7qCSCPPw1WEImOQ8EWJompjtRsjZErvytFC4y%2Fo862gAn8sm0h7EL0HAhTK%2FygSMnTBjYoWt7TZ%2BP6yRu7v8YRf9VnApTDVumoB1NX7%2BbsLKyrSaCgDvVajjzobeu%2FQ4sYFj%2BkeSmdAakp9hPaJJGmIuYJLNhYXKcIToVhAaz6dEbSvimmN%2F%2Fai1w0Y8eBME&X-Amz-Signature=e51bd57219176ccef9e0abb06cceadcafc10270ba60870515bec2ff4fa9c7a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
