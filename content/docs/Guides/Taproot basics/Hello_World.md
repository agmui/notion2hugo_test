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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQDAHKS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDjjdCO95oxKvbkQHGwmF6ICKiAIghPbsjt6pnYg3bh8gIhAK6BhXUv2O%2BKcHlRcM88mrdtRsHjXMt8ctXibCB%2F4Nu0KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEjaeKMeDpmjZlh%2Bcq3ANwoTZQeHn8VSZ%2FPXZiEBBmGm0anCCSszNcCi0vhHQ5kUnmSqKbITu3J%2F%2F1sJbcKHEgNJsISv66BTcmh%2FmoPcz4dnVE4sRvhoBkaKDIchftB4UktQZ7shasN%2FPWySVP3m6PTaBuFSQrYsYVp5OTUwx03wtg8gyPe86JTt8P3Ji7hDgfFncZK5gJDfaZ6NSh8ewFAEFuOoZL0umDyU5vH%2B1htTGnOGe%2FmIC1Ph8Gk0Z4p8DJ1C34Q6Afb9YZ5HzPzVZs%2FKobLN6oO0Vo%2BNungIDhYZmNSYMNugAdo%2FAnMuH5voP9z%2BnEJLQ4o9YbfgGwHii9YenhaUYX7AMT8ptY6cD63%2F00HOcGTE6ujfwqnTnHYC8gI%2FvDsXdvWPUtS0UqHj93lAEVjL4NCiH8tZxk5MuP3lxhny%2FVYVHF%2FED%2FF78yeZZsr3oDtqt4sa%2F%2BNCM6iykpNbnXHJrKLIPJVJSiUGUiEAkeD3QS0WEdJ%2FUA1Bz3ckBuZIvPL0jznH9%2F5cu98BlHelR99xaa8J1FbOTHJ1vH0Z1nsY6qxCL0QLq5BRAh4zzx2ZSlG9KKFuTSq6wfY1b2ERJtKN0U9Pt6sntGwAmXpoN5zaIi20LY%2B7VG3o74zDj4dudRuk3oKe3pCDCJzP%2B%2BBjqkAWjHlSMAelMiUmbUBRDJB12TdSTvfwRj3cejh5wjMglzs1eTzK9FPwnsOZLGL2PhEN6h9mgE6VRqttvhQerCb66JLdg1VRildWf4Tj4diovNnbNL%2Bkhxyqw1qo%2FIoUyPUX%2F6cncczSvz20fJIgc6%2FaI3nZTL0mBgibOFB8Pe5oXCotXeyVm2uFBAOSdC06bdPV0NFWIieEFt1ILlweBzAf3OYlh2&X-Amz-Signature=0c08c17ac2b4c8d7804a496f893ebd95b67f5e0e079b6c208a0856983d790134&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IQDAHKS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T160757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDjjdCO95oxKvbkQHGwmF6ICKiAIghPbsjt6pnYg3bh8gIhAK6BhXUv2O%2BKcHlRcM88mrdtRsHjXMt8ctXibCB%2F4Nu0KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEjaeKMeDpmjZlh%2Bcq3ANwoTZQeHn8VSZ%2FPXZiEBBmGm0anCCSszNcCi0vhHQ5kUnmSqKbITu3J%2F%2F1sJbcKHEgNJsISv66BTcmh%2FmoPcz4dnVE4sRvhoBkaKDIchftB4UktQZ7shasN%2FPWySVP3m6PTaBuFSQrYsYVp5OTUwx03wtg8gyPe86JTt8P3Ji7hDgfFncZK5gJDfaZ6NSh8ewFAEFuOoZL0umDyU5vH%2B1htTGnOGe%2FmIC1Ph8Gk0Z4p8DJ1C34Q6Afb9YZ5HzPzVZs%2FKobLN6oO0Vo%2BNungIDhYZmNSYMNugAdo%2FAnMuH5voP9z%2BnEJLQ4o9YbfgGwHii9YenhaUYX7AMT8ptY6cD63%2F00HOcGTE6ujfwqnTnHYC8gI%2FvDsXdvWPUtS0UqHj93lAEVjL4NCiH8tZxk5MuP3lxhny%2FVYVHF%2FED%2FF78yeZZsr3oDtqt4sa%2F%2BNCM6iykpNbnXHJrKLIPJVJSiUGUiEAkeD3QS0WEdJ%2FUA1Bz3ckBuZIvPL0jznH9%2F5cu98BlHelR99xaa8J1FbOTHJ1vH0Z1nsY6qxCL0QLq5BRAh4zzx2ZSlG9KKFuTSq6wfY1b2ERJtKN0U9Pt6sntGwAmXpoN5zaIi20LY%2B7VG3o74zDj4dudRuk3oKe3pCDCJzP%2B%2BBjqkAWjHlSMAelMiUmbUBRDJB12TdSTvfwRj3cejh5wjMglzs1eTzK9FPwnsOZLGL2PhEN6h9mgE6VRqttvhQerCb66JLdg1VRildWf4Tj4diovNnbNL%2Bkhxyqw1qo%2FIoUyPUX%2F6cncczSvz20fJIgc6%2FaI3nZTL0mBgibOFB8Pe5oXCotXeyVm2uFBAOSdC06bdPV0NFWIieEFt1ILlweBzAf3OYlh2&X-Amz-Signature=ea07ace08dcd7b277e3754c01f15df1c1e83c6c1b850e3b5ed27bb20a41aec2c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
