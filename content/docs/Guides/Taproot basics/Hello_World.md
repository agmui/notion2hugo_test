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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DTAPTY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC9qtQDst3BJhjuOQJNygZzOctUSpeKRHGB1qHsGNmj1QIgP60gw8F6url0TfOhzGJ%2BYFhxZ6Y3ujNfY1ASjliauqsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfd0%2FCUho%2BRVFwa9ircA7jHm3%2FXqS25UwlP%2BdiSjge2TEm1d%2Bx8VC6z2hAwN%2Ftf4%2Fy2SJZ8EPOqw%2Bkv1pZy4AskHRod1rwE1QAThurzvA3LHKvEIOljOKYRcl7FiB6x%2BO2%2B3wi7lOw265p9UfeSA822sd%2Fu%2FiVcKrGZD5WmMQsWQ%2Fr8dQwEhqszUU%2B5KA7GYAA9lTpdC%2FjZwX%2BWFJ51KhER1FcSNY6GYAgPnLksIKsutwmeC6xRIigHmSJ83Vbs64r9wNzw9CbiSTQafzSz%2FOBOTNUegMWMLvfI5BMlOXMhTX6I4KgszfYg7jTLooNDmBVeuNTzbcHeIXzZQJGA7Zu5Ix87m7woZiF%2Fok2j7vWG7qUVCMjmZKJE5jJStOxcrEUjSi1mVmG1Yji%2FScHW2Y9iLMxy4%2BIhyyZR%2FjKIOI9MiKjrxC12kd0yV8NwRF1Zh74WEG03smAjfZk4T6%2BNUaO5lyMvOk5oGK2diqvcjM45osc7keRktDj1rYYVPB48kl%2FmBjD4I7Ib0ADBAXz9m0vmWU1kkJBUz1t0Qp8zm9td%2BaVBEKAApC3LfhP6oepAPKpaxZSvNaqkGQYZPIX8VO7OISeFducwcNFWS76HAT404ZVsgr%2Bl0eAUeOiRMLVLysSc4pW%2BXYBXwcfsMMiF578GOqUBb7qAFoarYUaOfY9H23I8WVXjg4Mwcm6lAxgzZ3lukuxjUsgaJBXLx6ztlOtvlb8zzeudUFRIfsKc1qvqNhRKPsycZEbzQkPE%2BuAYJKP9BjZ5j9NpU31ezHAY9WJ8L9ceyykuMK7dDUJWT6Sr9cGmk%2B1Qa5BvSB5gqCw1UVVnGjzbYYOxfTM%2BQC7RxjTMZUXhSR4qy6OYsmDmjytAkVrWrjUUCiav&X-Amz-Signature=f8b1faaf89390f057efef34fc2afd6ac876c662f4a1eccafb0ebc92e1b3e8f84&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5DTAPTY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC9qtQDst3BJhjuOQJNygZzOctUSpeKRHGB1qHsGNmj1QIgP60gw8F6url0TfOhzGJ%2BYFhxZ6Y3ujNfY1ASjliauqsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfd0%2FCUho%2BRVFwa9ircA7jHm3%2FXqS25UwlP%2BdiSjge2TEm1d%2Bx8VC6z2hAwN%2Ftf4%2Fy2SJZ8EPOqw%2Bkv1pZy4AskHRod1rwE1QAThurzvA3LHKvEIOljOKYRcl7FiB6x%2BO2%2B3wi7lOw265p9UfeSA822sd%2Fu%2FiVcKrGZD5WmMQsWQ%2Fr8dQwEhqszUU%2B5KA7GYAA9lTpdC%2FjZwX%2BWFJ51KhER1FcSNY6GYAgPnLksIKsutwmeC6xRIigHmSJ83Vbs64r9wNzw9CbiSTQafzSz%2FOBOTNUegMWMLvfI5BMlOXMhTX6I4KgszfYg7jTLooNDmBVeuNTzbcHeIXzZQJGA7Zu5Ix87m7woZiF%2Fok2j7vWG7qUVCMjmZKJE5jJStOxcrEUjSi1mVmG1Yji%2FScHW2Y9iLMxy4%2BIhyyZR%2FjKIOI9MiKjrxC12kd0yV8NwRF1Zh74WEG03smAjfZk4T6%2BNUaO5lyMvOk5oGK2diqvcjM45osc7keRktDj1rYYVPB48kl%2FmBjD4I7Ib0ADBAXz9m0vmWU1kkJBUz1t0Qp8zm9td%2BaVBEKAApC3LfhP6oepAPKpaxZSvNaqkGQYZPIX8VO7OISeFducwcNFWS76HAT404ZVsgr%2Bl0eAUeOiRMLVLysSc4pW%2BXYBXwcfsMMiF578GOqUBb7qAFoarYUaOfY9H23I8WVXjg4Mwcm6lAxgzZ3lukuxjUsgaJBXLx6ztlOtvlb8zzeudUFRIfsKc1qvqNhRKPsycZEbzQkPE%2BuAYJKP9BjZ5j9NpU31ezHAY9WJ8L9ceyykuMK7dDUJWT6Sr9cGmk%2B1Qa5BvSB5gqCw1UVVnGjzbYYOxfTM%2BQC7RxjTMZUXhSR4qy6OYsmDmjytAkVrWrjUUCiav&X-Amz-Signature=18d3e2845e9ed965f540cb39265388ce9e7e79371ee7977f8c0e6603ce3fcb47&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
