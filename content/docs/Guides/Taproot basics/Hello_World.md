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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHEZHVV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRxdiiLKcIhtLPv5u65gox5Xol4Gox4qYQqJnxAb9B4AiBeQUKO50LGLMDrZzoLKEHHjuxnZPRPv6Pb79X5jfQXwCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNj7TTfwxF2v0EVqQKtwDKfMbe5uXq9AdhtS2C2WYlh8cDppK7a4SY%2BtJWNLQrm5CjaO08MZcNOeUy5okd1R356hGkj6ygo2Mamyv5dspO8VN1iXlwdm2Jbx17uNttdGq4KHfHAUz7ePSr6wJNn028iXIBeobfP%2BJChHmE427A%2BIw0v5OTxUFzQUPiTgPPmEhvZLuH0tEYuUITtYr%2FhTxILWOevNzHl16t2BzyxX6z3oMXw8g5Fui6ZworTlKBxtR5BiRQw%2BeryTpr0M0O%2Fp62UNGtWx4p9768LnCTI%2F3DPdVJhNgbOc%2B9%2BJCzSY3I%2FYNsAhIObunkpLYIy%2B9EDvOj0v37j8Nh0haQN%2FbC1knC9nBkhAT43VKpccbAewIOmhU6Szd3QfgatQhE4eTnl2yuR%2FFthpOe2szTQioev4hKWu5WGMKqDfYLQRXgH02NsOFwystqkoBDwAzCu0JgjT87C9MsqzHtitgkthLKhypsvQd7GLtIZEjSfNMXVQ0GmDbXE%2BNz1ZKlAcpz5QxIaXL1dCZBbl9JbWy777CykVyoenIYur9LvnWhzRax0efHcLuvp52ZnsAiKo7ubECI70dlpkCA22h71i%2Bf15BwQGm9r%2F496kUvG0b5JmipFffJh0hDoB9dW9WrCZ%2BwXIwlP%2BdvgY6pgFYUWTElK5GWwZlJ%2FTu3%2BT39iaTJbZm1YZ0AE1B8Ip3F%2FWlKs3imVf2fwf%2BIjCaLKY0uDssIXIl4x4%2FxjYDzi5Sgyv%2FZYHUD6zzXiGyJVGvfUbVcmatQQHqGm16E83a9yVvSHtjgNuySHo%2FbqbpkqgLM%2FzBeWIuFrGpSO2mtHkKgNDLOYPiKSpPTJt7bxJhpFWqfNE1duCvAguSqHl9SxtBpuEO2O8R&X-Amz-Signature=91567479134c400d1091c670407df615b7d4b15b4790a77f4d14cf272dd1bc25&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZHEZHVV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRxdiiLKcIhtLPv5u65gox5Xol4Gox4qYQqJnxAb9B4AiBeQUKO50LGLMDrZzoLKEHHjuxnZPRPv6Pb79X5jfQXwCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNj7TTfwxF2v0EVqQKtwDKfMbe5uXq9AdhtS2C2WYlh8cDppK7a4SY%2BtJWNLQrm5CjaO08MZcNOeUy5okd1R356hGkj6ygo2Mamyv5dspO8VN1iXlwdm2Jbx17uNttdGq4KHfHAUz7ePSr6wJNn028iXIBeobfP%2BJChHmE427A%2BIw0v5OTxUFzQUPiTgPPmEhvZLuH0tEYuUITtYr%2FhTxILWOevNzHl16t2BzyxX6z3oMXw8g5Fui6ZworTlKBxtR5BiRQw%2BeryTpr0M0O%2Fp62UNGtWx4p9768LnCTI%2F3DPdVJhNgbOc%2B9%2BJCzSY3I%2FYNsAhIObunkpLYIy%2B9EDvOj0v37j8Nh0haQN%2FbC1knC9nBkhAT43VKpccbAewIOmhU6Szd3QfgatQhE4eTnl2yuR%2FFthpOe2szTQioev4hKWu5WGMKqDfYLQRXgH02NsOFwystqkoBDwAzCu0JgjT87C9MsqzHtitgkthLKhypsvQd7GLtIZEjSfNMXVQ0GmDbXE%2BNz1ZKlAcpz5QxIaXL1dCZBbl9JbWy777CykVyoenIYur9LvnWhzRax0efHcLuvp52ZnsAiKo7ubECI70dlpkCA22h71i%2Bf15BwQGm9r%2F496kUvG0b5JmipFffJh0hDoB9dW9WrCZ%2BwXIwlP%2BdvgY6pgFYUWTElK5GWwZlJ%2FTu3%2BT39iaTJbZm1YZ0AE1B8Ip3F%2FWlKs3imVf2fwf%2BIjCaLKY0uDssIXIl4x4%2FxjYDzi5Sgyv%2FZYHUD6zzXiGyJVGvfUbVcmatQQHqGm16E83a9yVvSHtjgNuySHo%2FbqbpkqgLM%2FzBeWIuFrGpSO2mtHkKgNDLOYPiKSpPTJt7bxJhpFWqfNE1duCvAguSqHl9SxtBpuEO2O8R&X-Amz-Signature=635ab0b08c7e7ded25664615173c4a9e2bb6e3ffdd8680ee56b2ba16edbb416b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
