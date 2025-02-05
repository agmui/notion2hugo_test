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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5XZVFD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC%2FrDwPrZGqGQ0swaaXZciYoTCNGHZvJJVPkxSgAQgCBQIhAI41YyrAkMiCRXGC1fSBuT5lv%2FYs6uUNiDrXlEpzmChVKv8DCEoQABoMNjM3NDIzMTgzODA1IgxlN8IL3dG9d434%2FQIq3APipTmabdGLXzJkpM94aKa1i9fAJAHluAXjqQxfURBCrj3stypQm5SGc%2Fy3fLOBKi%2ByMiu1bT%2FgQuA8dx7AUAxxYt1CKtisr6bPCfTqdpXzRP%2Feop7IG6kOzl4a5F6gSGByJ014EPv4vcJTROADjR6setGMe%2BP0mO9nMAnd4JIH1TwwfwmAa9EiqwWNxNT94REBHkLt7d334rwZLmfAupbX7otYYzKcb3RApA3rR4LL0%2FjewbUvpG%2FLm%2FZBMh%2FfURGAyhhTpmrKTepjdcXc3%2BdEBZTqULVnYK%2Bw33j5m4EDVWRso0DWQGzkiFPMmTyCj8muxf%2B03tl6Bbb5AgAqPa9RzX6rvm9rS15rt2u%2Bzvy5Os%2BhR7TFnwpgZVIVZg7csz5xue%2F3vM%2F4P%2BWJLIxYpNvtRiUGvoTPTQxX75RhDHFVDrxekFSxGTRC4e4cwTY4oics8T%2F75TIXtodLHNZCvEGlY665DB%2ByNaPvW7cT0%2F0SE1%2BDDh2VUhxWyCqYr2Bo1dT76Q8CAqJ6XneOcdOi0BexV57rVf8Fs%2BhE896xQza7tnOdMSfzUAohPA7eOqtKkJiSf5reaGPssirzyMR8RFnt3LHZCp9MdQO8o82hEzUJKfQhOb%2FRQu0JFBqGDDDyu469BjqkASHx7GR%2F%2Bn9ZVxggWB%2FXnE4BsbRXJTk8cEZ%2BsVRHUXLcorI%2BbNwtq5kEl3%2BDkyjMT8OqiPY9sDf%2BAblVkzj8xLPgAllRMzAXsZrvPTTZxU1dQdRnRBS%2BDO8nbL1XQUpuPRrzSAIqg0OWNewI1wvyM1pbXcJ8zOvBK2LQu2ATiW1I1ZZ7fuuJeFcL%2FefZzQC8po%2BEtqnRBVv0MLL4EcS3x49dqTjN&X-Amz-Signature=fad4706e8ef6653f994b18134750a9ec595a54eeacc4bd3b8c81bdb8610d136e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G5XZVFD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQC%2FrDwPrZGqGQ0swaaXZciYoTCNGHZvJJVPkxSgAQgCBQIhAI41YyrAkMiCRXGC1fSBuT5lv%2FYs6uUNiDrXlEpzmChVKv8DCEoQABoMNjM3NDIzMTgzODA1IgxlN8IL3dG9d434%2FQIq3APipTmabdGLXzJkpM94aKa1i9fAJAHluAXjqQxfURBCrj3stypQm5SGc%2Fy3fLOBKi%2ByMiu1bT%2FgQuA8dx7AUAxxYt1CKtisr6bPCfTqdpXzRP%2Feop7IG6kOzl4a5F6gSGByJ014EPv4vcJTROADjR6setGMe%2BP0mO9nMAnd4JIH1TwwfwmAa9EiqwWNxNT94REBHkLt7d334rwZLmfAupbX7otYYzKcb3RApA3rR4LL0%2FjewbUvpG%2FLm%2FZBMh%2FfURGAyhhTpmrKTepjdcXc3%2BdEBZTqULVnYK%2Bw33j5m4EDVWRso0DWQGzkiFPMmTyCj8muxf%2B03tl6Bbb5AgAqPa9RzX6rvm9rS15rt2u%2Bzvy5Os%2BhR7TFnwpgZVIVZg7csz5xue%2F3vM%2F4P%2BWJLIxYpNvtRiUGvoTPTQxX75RhDHFVDrxekFSxGTRC4e4cwTY4oics8T%2F75TIXtodLHNZCvEGlY665DB%2ByNaPvW7cT0%2F0SE1%2BDDh2VUhxWyCqYr2Bo1dT76Q8CAqJ6XneOcdOi0BexV57rVf8Fs%2BhE896xQza7tnOdMSfzUAohPA7eOqtKkJiSf5reaGPssirzyMR8RFnt3LHZCp9MdQO8o82hEzUJKfQhOb%2FRQu0JFBqGDDDyu469BjqkASHx7GR%2F%2Bn9ZVxggWB%2FXnE4BsbRXJTk8cEZ%2BsVRHUXLcorI%2BbNwtq5kEl3%2BDkyjMT8OqiPY9sDf%2BAblVkzj8xLPgAllRMzAXsZrvPTTZxU1dQdRnRBS%2BDO8nbL1XQUpuPRrzSAIqg0OWNewI1wvyM1pbXcJ8zOvBK2LQu2ATiW1I1ZZ7fuuJeFcL%2FefZzQC8po%2BEtqnRBVv0MLL4EcS3x49dqTjN&X-Amz-Signature=93bc7f20c5c3792f59e5713dcb809094566b0873b1baf7a560f54e18cb183b05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
