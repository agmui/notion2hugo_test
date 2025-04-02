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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOE3OGT5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCNwVuiET3ymR%2BMrRmbZcXQ8SZS8pMPlThtHFl7kMD80AIhAMDnF0d0SZ4x19zhPeIgF%2BK1aNMrCuMxk4HDzVZZDuzjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1kL9eCiedqy%2FEIIIq3APd1rHJ7V8%2BxkL023tVvR%2BtMf4FoEvr%2FOgcg2v1G%2BLGJ7kV3E6uy1a%2Fbt5qUe%2FyBw%2B5w%2FcgbG%2FfDmeT6qc0FWDt8pa%2FFum3tkzqn9VK4m1RCGljB1SM9WfkxAlc21A6KeKrHf7rFTjQ%2FiAVncDWKXg7ziAZuDBC7dpgb0zZumB82k4eo%2F7Ga%2BhvB3yKiz86a0Ke60NnHqF2AwrF29bGF6JGKyaTQXh%2F2oYg6kFWmZRAWFjIHq1XiOUlfJp6afT7bvVPSDUUm%2FrvzFlkQE%2FCYr%2ByMLkU17Qihx%2BgOGNLnd5peir1AW7SevPd2lG3DlpOFsic45l%2BXMmcU9FA64SuXcey8ysO4Jmk5aL%2FHjp6fVjIUv%2Frw%2F0wjIohy8w6m4OzfrCExFlHNB%2FPQ2LdUTUqlM3qgA%2FDbpT0dgmu9FlUeLcpAK4jaATd%2BjGr9v3TCOC1mC2VOaAcNPvXIgOvjBt3Cs8W4KX6MeK2m%2F524rXmgX7hPSsFIil89i9uLLvBj1J6YdRwzjz%2Bi8ycTGcYJhvd0NCEOwYYrwHqM2Omiv%2BrSMdTjETdUALjvI1CoFKzz31rJoDNIZ6xNUQjMTS7ffhsDebT%2BjXcdNuvK%2BmJNplvSFQG2MevY6wirnq08xLnnDDP%2BrS%2FBjqkAWlTTZvATlBy4fvkKNamb4pmzLOyywXlALY5TSdLnEddk8ad4qnhCDzDZvhb9t7M2gTTs6vb%2FYlWmzXl3XKf8MRW%2B8lb7UnqnjdcpK4cSLghVkVo%2BXnqtFaAk32VKLkOmXO%2FXKRZbY3kOsAKI4FR%2Bh18DlUzr7RMkKTWQ5tL653IbDn%2Bh4osddCm9ptKPnkjIVT3SLqzkt7DPOnjlVhm2ianiqLH&X-Amz-Signature=7a5a5e7f199c7d09bc0cdf8a94730288a31b9adc090942f9ee1d253f98c92e22&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOE3OGT5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCNwVuiET3ymR%2BMrRmbZcXQ8SZS8pMPlThtHFl7kMD80AIhAMDnF0d0SZ4x19zhPeIgF%2BK1aNMrCuMxk4HDzVZZDuzjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1kL9eCiedqy%2FEIIIq3APd1rHJ7V8%2BxkL023tVvR%2BtMf4FoEvr%2FOgcg2v1G%2BLGJ7kV3E6uy1a%2Fbt5qUe%2FyBw%2B5w%2FcgbG%2FfDmeT6qc0FWDt8pa%2FFum3tkzqn9VK4m1RCGljB1SM9WfkxAlc21A6KeKrHf7rFTjQ%2FiAVncDWKXg7ziAZuDBC7dpgb0zZumB82k4eo%2F7Ga%2BhvB3yKiz86a0Ke60NnHqF2AwrF29bGF6JGKyaTQXh%2F2oYg6kFWmZRAWFjIHq1XiOUlfJp6afT7bvVPSDUUm%2FrvzFlkQE%2FCYr%2ByMLkU17Qihx%2BgOGNLnd5peir1AW7SevPd2lG3DlpOFsic45l%2BXMmcU9FA64SuXcey8ysO4Jmk5aL%2FHjp6fVjIUv%2Frw%2F0wjIohy8w6m4OzfrCExFlHNB%2FPQ2LdUTUqlM3qgA%2FDbpT0dgmu9FlUeLcpAK4jaATd%2BjGr9v3TCOC1mC2VOaAcNPvXIgOvjBt3Cs8W4KX6MeK2m%2F524rXmgX7hPSsFIil89i9uLLvBj1J6YdRwzjz%2Bi8ycTGcYJhvd0NCEOwYYrwHqM2Omiv%2BrSMdTjETdUALjvI1CoFKzz31rJoDNIZ6xNUQjMTS7ffhsDebT%2BjXcdNuvK%2BmJNplvSFQG2MevY6wirnq08xLnnDDP%2BrS%2FBjqkAWlTTZvATlBy4fvkKNamb4pmzLOyywXlALY5TSdLnEddk8ad4qnhCDzDZvhb9t7M2gTTs6vb%2FYlWmzXl3XKf8MRW%2B8lb7UnqnjdcpK4cSLghVkVo%2BXnqtFaAk32VKLkOmXO%2FXKRZbY3kOsAKI4FR%2Bh18DlUzr7RMkKTWQ5tL653IbDn%2Bh4osddCm9ptKPnkjIVT3SLqzkt7DPOnjlVhm2ianiqLH&X-Amz-Signature=8950108fbcab7bbafc38b0319a17fe886d12766f6aa4844d3d8628b058a2ffa8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
