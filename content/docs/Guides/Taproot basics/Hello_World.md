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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736TGJ5O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FxS%2FrAPOo9xx%2BXHNCDsvIH%2BDQDI8PzE0oVnTI6623QIgWbJ%2FCDBiLb5tdxQfDnFxVSSOKSYWJRKHljy%2B6durkKMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP7d%2BsaQQHdAngzhZyrcA2YZ8vRVHwRXHq5k777TlS%2FDsXbbP7HiUbnPCKLTquW6D1Vp5riyhBz6c6eeV1Eu0sjhM8JgtTa4imYp7HK8dAGzFzMtwV66wYsWeOHyVHKrXDHEYXVNUWod5HwmChYesnnAAD%2BxxTsWvoYDoNX1tA%2BjPttEIGGqBPifW93HPlBgxnztR7nWt376eW77M4J4q0lmjBBbbHgniO%2FtVxrZ%2FEdGgC3lHdPWqMRqgSOXum%2FrtBGGOO%2B%2BKCf7gDb0ptBpmXwAj244xej9BleGEvE%2BvLKYbUooDwxMlrVhYGG3j8CIOYvvFjtCi29nO0iIMSxfvIQ2et3PSWl%2FddRtJJTnmwr6%2Ba6ZSTchwGs977yj7fpsrdC3Hi1K%2BP0QyUP08ii7knxUnF8pWhV%2F7JItVZVKRtFeqN7tvASZdO5sPajnqgLevrHFS0ZG46bLvWJ757adx1GSA90EGc5qKdcMa3ujKcAZGls07FA3F1mUtQ1ZKMXKfPhxje8YNLQ6YAUSvpaGpY8oKpxnDqN2kYmFi6BxAbegZPDV4JQBmeQcSBq9GRGp7fHK087okDPHXbCReB0oZdPrSAveXBwSrl%2FzIQRWI%2B%2FNQ4dwIWyrJY1fzwTP2szoTS2KgajYejn7Cc51MPaf0r8GOqUBHrYrlQLgIMc2H9A3BpZZBxkk3bt5XQCN7PGcO%2Bj%2Fi4oHErELHZsAdukW6wb5MRK4VCZI%2FJIvZSlCljBWW65k59IBeYonmLI9XVVzVhh2VgPxCLT0d5cFxNj0Bt6Su9NjD4DHHq%2BllOAs9U7xLbzhvEMYfZMKRvMephHbtTzeP4KumZ3kJJidMlBKRtw3GWbOc7SkXw%2BPdm9PyaUFzTPXFpF8XITs&X-Amz-Signature=61128e4779f7c734db13ccfb661686f9c579d20cef22449810d16ed344bf4634&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466736TGJ5O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq%2FxS%2FrAPOo9xx%2BXHNCDsvIH%2BDQDI8PzE0oVnTI6623QIgWbJ%2FCDBiLb5tdxQfDnFxVSSOKSYWJRKHljy%2B6durkKMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDP7d%2BsaQQHdAngzhZyrcA2YZ8vRVHwRXHq5k777TlS%2FDsXbbP7HiUbnPCKLTquW6D1Vp5riyhBz6c6eeV1Eu0sjhM8JgtTa4imYp7HK8dAGzFzMtwV66wYsWeOHyVHKrXDHEYXVNUWod5HwmChYesnnAAD%2BxxTsWvoYDoNX1tA%2BjPttEIGGqBPifW93HPlBgxnztR7nWt376eW77M4J4q0lmjBBbbHgniO%2FtVxrZ%2FEdGgC3lHdPWqMRqgSOXum%2FrtBGGOO%2B%2BKCf7gDb0ptBpmXwAj244xej9BleGEvE%2BvLKYbUooDwxMlrVhYGG3j8CIOYvvFjtCi29nO0iIMSxfvIQ2et3PSWl%2FddRtJJTnmwr6%2Ba6ZSTchwGs977yj7fpsrdC3Hi1K%2BP0QyUP08ii7knxUnF8pWhV%2F7JItVZVKRtFeqN7tvASZdO5sPajnqgLevrHFS0ZG46bLvWJ757adx1GSA90EGc5qKdcMa3ujKcAZGls07FA3F1mUtQ1ZKMXKfPhxje8YNLQ6YAUSvpaGpY8oKpxnDqN2kYmFi6BxAbegZPDV4JQBmeQcSBq9GRGp7fHK087okDPHXbCReB0oZdPrSAveXBwSrl%2FzIQRWI%2B%2FNQ4dwIWyrJY1fzwTP2szoTS2KgajYejn7Cc51MPaf0r8GOqUBHrYrlQLgIMc2H9A3BpZZBxkk3bt5XQCN7PGcO%2Bj%2Fi4oHErELHZsAdukW6wb5MRK4VCZI%2FJIvZSlCljBWW65k59IBeYonmLI9XVVzVhh2VgPxCLT0d5cFxNj0Bt6Su9NjD4DHHq%2BllOAs9U7xLbzhvEMYfZMKRvMephHbtTzeP4KumZ3kJJidMlBKRtw3GWbOc7SkXw%2BPdm9PyaUFzTPXFpF8XITs&X-Amz-Signature=bfee3099da46e2dcd527c8b0a3d5d3ab480d9288279167082208d4ce1f6bee9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
