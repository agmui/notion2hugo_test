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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TI5JACP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID9U6WIGnv5jZ1RmezT7hNuLm2Tj41TswaPjh9eCen0UAiAaqB0mIgZPa8jZncnbA%2Fs5GAj9SQUwau2GT8FJOakx%2FSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMFGhvmgfOl6KESbMqKtwDxIz%2FRUpMaZhQL7RiNKwvgjraiAwAvY6rJAw44KU9%2F7GaWFH1qstSmfNO69gk6gsALsSIG1AXraJuMTnC8FK72yFC8O0ANTHH7ztcj9iZaumQA0R5OVuSp8fegQQkTF9o5u4xf3AhA%2Bd9JOfv3xF8HPsQvwRxyWoOywBcY%2BuSYT7yO67F12CCDR5S1Tx7Y57uxyRQJWofVvSJxr9EzgCmki%2B7PzkMBgtHwzQyfb6yToc0AXWZgUaqhQNi%2FgEEfkxsbluHQWA16tF7kMXODL9a959o9JHTAuFtzVZs4qx%2FUAx%2F2PJgga2v2qQI3bEcaMkdgU0mUyhPUODUQwH4TfEOocux4UbfgVNtiJMwdijV993wMxyQ%2BBSxFuGiyc4Y4ljRHh50KeS5E8DLg0JBnB7b2co2nTV7R5W6nonGmfxzkDSWFsCu0Rs%2FndvOwwmhm%2FQ86rPHehhkLfgrfeJco2hn5f3FaMaM%2FQi0yFbcTXT8zSzPsIlprfay3a%2FBC8kZHL3QlKynOeQYg5ZJ4oQu4oJzJB9JJsKx6wRKMhD9qj92guRZAyXvR4c5yC1nOFzOTtoLkSHoueLu7lxCWWlCGsRtN1XDR6ON9mLJCeqxzHlN07Z0Wn9i85dCveoQZMIwi92swwY6pgEmJOy0NuFWahVYUopEoynIT8%2B%2BeNb0BRMgav9fyEjp7asZDG1KOfTfqpssMDxC2iEiUKaIYDHZZJ3R1jJcDWzS0SLiboiEUNFRx2gHhuOV5GEvG3ATzis%2Fq%2FP664dfmd6%2FXMovkRvo4NM4WPT369rlrLyMqiOTmkSmsUYmZeNkNZtUOBWAemgbWzLNwvHddkV9SS4Y2xTiD8oxtRwgUcn7jES4ViZR&X-Amz-Signature=4eb034658b9858add3630d5ab279b1c4a7904eb51a2ac39714000d5321e605dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TI5JACP%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCID9U6WIGnv5jZ1RmezT7hNuLm2Tj41TswaPjh9eCen0UAiAaqB0mIgZPa8jZncnbA%2Fs5GAj9SQUwau2GT8FJOakx%2FSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMFGhvmgfOl6KESbMqKtwDxIz%2FRUpMaZhQL7RiNKwvgjraiAwAvY6rJAw44KU9%2F7GaWFH1qstSmfNO69gk6gsALsSIG1AXraJuMTnC8FK72yFC8O0ANTHH7ztcj9iZaumQA0R5OVuSp8fegQQkTF9o5u4xf3AhA%2Bd9JOfv3xF8HPsQvwRxyWoOywBcY%2BuSYT7yO67F12CCDR5S1Tx7Y57uxyRQJWofVvSJxr9EzgCmki%2B7PzkMBgtHwzQyfb6yToc0AXWZgUaqhQNi%2FgEEfkxsbluHQWA16tF7kMXODL9a959o9JHTAuFtzVZs4qx%2FUAx%2F2PJgga2v2qQI3bEcaMkdgU0mUyhPUODUQwH4TfEOocux4UbfgVNtiJMwdijV993wMxyQ%2BBSxFuGiyc4Y4ljRHh50KeS5E8DLg0JBnB7b2co2nTV7R5W6nonGmfxzkDSWFsCu0Rs%2FndvOwwmhm%2FQ86rPHehhkLfgrfeJco2hn5f3FaMaM%2FQi0yFbcTXT8zSzPsIlprfay3a%2FBC8kZHL3QlKynOeQYg5ZJ4oQu4oJzJB9JJsKx6wRKMhD9qj92guRZAyXvR4c5yC1nOFzOTtoLkSHoueLu7lxCWWlCGsRtN1XDR6ON9mLJCeqxzHlN07Z0Wn9i85dCveoQZMIwi92swwY6pgEmJOy0NuFWahVYUopEoynIT8%2B%2BeNb0BRMgav9fyEjp7asZDG1KOfTfqpssMDxC2iEiUKaIYDHZZJ3R1jJcDWzS0SLiboiEUNFRx2gHhuOV5GEvG3ATzis%2Fq%2FP664dfmd6%2FXMovkRvo4NM4WPT369rlrLyMqiOTmkSmsUYmZeNkNZtUOBWAemgbWzLNwvHddkV9SS4Y2xTiD8oxtRwgUcn7jES4ViZR&X-Amz-Signature=2dae186934b198ff0927043ad9519a2b17ac83cf8d68dd07b41e49af45f45380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
