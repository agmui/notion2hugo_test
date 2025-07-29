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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWZ5Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4b56exMnkPx%2Fi0v4oBvD2rMd9YKVYrHgdmxw9JZgt1AiEA2gz6S9hb94uEhdHwH%2FKR%2F15aHCdAYitWHDpBblIOqLAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLToGccXTTeiNmhNyrcA%2FKgrDZfuOI25sprGvTbLzjaLaN9Vm2thtCV%2BktVB3Z86gOSn5Ya7YANwRIZCWOByuidJ96nKORfkECiE3EB%2B4gJGAzzTHg0Ee6ZI8lEKxbtst3l17qKHkvKlod3hX4mGxrzr5C%2BhUV2rkrIoX%2BVH1fqDWT7q5CWbBq77GlvArrXJ8CwMchDX%2FF%2BnzUl1cP4ETmwM1oIzHr03lT0rEiDJwzBuaYj5xBaLvb9RFdfqgPcBZ0SbQorGvy26W6EZ0%2F37UzV%2Fw2KmvmZpyDyM3489dcThYTjjydQlrCnKtAFkYKgoioAr81F9MeaWPVLizWYvPxC343m3F3%2BmdNTM3%2BvpX%2B68L1QCLOnod%2B5QI0LlZwG1kIkr7Bmgj%2FOias7K1Ou%2B9%2F6Z9xQ3EAncoq%2BZIIwyRRSW5MX2i0cFZKfRHaWx729zuJHChs16nxwTRRT4tvBf9%2FdYz1xMNIJyI9d7fE4Om6zxk73IvOOOpgMZxSA7gR4ARZEAXrrJnoTOeUR13dJ3Z2qUdlZYV4UKxph4MqLcszdIJ0oc6OjlFJhMOwTlu0LgQJdS143d8SDhDCQMAITKwEKnGiCJtfR4RgxZCMvs0zU%2FtHMf3NBeQAd718J3ci%2BU226IfzE%2FgZILKeLMNL%2Bo8QGOqUBw%2FLx%2B9IBMFwC9584dbtEFX7yfgJvBj%2FAOBt7ApLNJ8%2BpHWY7LsvvDBmuvXhfTW7B%2FiFuzRZf5GWDZrLpqoW%2B%2Bw1qIRbzBzMBG95hFy3PqvOX05PTkC38BC76yxtQp6uLI1HSVG9x8bTQVd2J%2FM1qDn4Ga0fMU7hGLAU5sTfWmEjOCQN%2Bdfee7532tFcd2UIMugYSN%2FtN0N%2FEqvJfm0aOGmj1fzCk&X-Amz-Signature=c0eab48e015966142bde4c136c5e17fa0bd058eca1f3f266d8cf48e4e20111b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TGWZ5Y%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4b56exMnkPx%2Fi0v4oBvD2rMd9YKVYrHgdmxw9JZgt1AiEA2gz6S9hb94uEhdHwH%2FKR%2F15aHCdAYitWHDpBblIOqLAqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLToGccXTTeiNmhNyrcA%2FKgrDZfuOI25sprGvTbLzjaLaN9Vm2thtCV%2BktVB3Z86gOSn5Ya7YANwRIZCWOByuidJ96nKORfkECiE3EB%2B4gJGAzzTHg0Ee6ZI8lEKxbtst3l17qKHkvKlod3hX4mGxrzr5C%2BhUV2rkrIoX%2BVH1fqDWT7q5CWbBq77GlvArrXJ8CwMchDX%2FF%2BnzUl1cP4ETmwM1oIzHr03lT0rEiDJwzBuaYj5xBaLvb9RFdfqgPcBZ0SbQorGvy26W6EZ0%2F37UzV%2Fw2KmvmZpyDyM3489dcThYTjjydQlrCnKtAFkYKgoioAr81F9MeaWPVLizWYvPxC343m3F3%2BmdNTM3%2BvpX%2B68L1QCLOnod%2B5QI0LlZwG1kIkr7Bmgj%2FOias7K1Ou%2B9%2F6Z9xQ3EAncoq%2BZIIwyRRSW5MX2i0cFZKfRHaWx729zuJHChs16nxwTRRT4tvBf9%2FdYz1xMNIJyI9d7fE4Om6zxk73IvOOOpgMZxSA7gR4ARZEAXrrJnoTOeUR13dJ3Z2qUdlZYV4UKxph4MqLcszdIJ0oc6OjlFJhMOwTlu0LgQJdS143d8SDhDCQMAITKwEKnGiCJtfR4RgxZCMvs0zU%2FtHMf3NBeQAd718J3ci%2BU226IfzE%2FgZILKeLMNL%2Bo8QGOqUBw%2FLx%2B9IBMFwC9584dbtEFX7yfgJvBj%2FAOBt7ApLNJ8%2BpHWY7LsvvDBmuvXhfTW7B%2FiFuzRZf5GWDZrLpqoW%2B%2Bw1qIRbzBzMBG95hFy3PqvOX05PTkC38BC76yxtQp6uLI1HSVG9x8bTQVd2J%2FM1qDn4Ga0fMU7hGLAU5sTfWmEjOCQN%2Bdfee7532tFcd2UIMugYSN%2FtN0N%2FEqvJfm0aOGmj1fzCk&X-Amz-Signature=5e3a49c2d1a1b694ba0edb66b67920834362616c8e7c71e39d67c28f846f03a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
