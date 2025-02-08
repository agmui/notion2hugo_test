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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CVY34I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCfdLxbpDtcxWutolMrHppzxLV0GmwwLHuSvWucnJZuiAIhAJSKvwzoDGQwsz3%2Foxirsr1Uli%2FSNheHsWrrGByewMakKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKp0rBL3ODIzuzfsYq3APZUdXU93Ti9mpwwvc%2ByKTkln0EyQrQXGhf2NweLFD40WD%2BeVGxbDGrJk3AQHLATycMM8NHllxHa4gQKfZvJGsdzdcDTm82NAafRh7X1PeG%2FLvWgiX7womFO7IzWgXZTJ5TQNbIjVTrdP1zTNXW%2FQ7%2FUDYs5uc%2FIdUnV5FY%2BYoGlfuzpx7%2BvfnIi%2BnU5LRZ9HXsjxhgONooQVIDct%2FT6Rtgm8eRMtT4BZLbMz013YRcMnWyTmPWWIqN7VRM9yTJkvQLpz1VQcB%2FK2dEVYcbnbuFIjl7J60c4%2BYhgyLvRWLKeeOZQakoCQ3HzVhens%2BX4nvQaecf3XWLuUzEfzjC0Q3qMOh4lLXXBTAs595kjwWC3LAmIKU21HuiQG1iIK94fnzLR6o7yuOM%2BwaYL3yOd2Q6exGBj5%2B9hAL9eLy5loH4uHkXA3zfAFgLrpIirgck0ECkNLiL09bzi28FplepIM2ZEkepilOseO6%2FOdUQNFiaexcIPf4YUCcWSIRJRquOuphpw0W3mLnBq6qr7%2FwRhwEoQjkARtw79eLEGz5tGg77Md7y0csRCr%2FLywgkVqh1lhyu1loME7eZU5ahv3Oi4wFwU2dLCRUuCaCANqKbvGmBKiZfxP%2BlIP6IM9dfyzDI3pq9BjqkAZTGzXkWDSn%2FiUjBm6JS0lRaZVaJcDnzhhyCWOUmCmxVM43krh4Y2dX0gQ8kqIlM2O0ojF6z6FhM1%2FrPe%2BllC1Nh9kAlH7vucmaBCv4ktxiIXiOV6Ondo8d23zs9PFiiX6ScPRsliSOpBGKB4a9wXxzLDiXUS38Q%2BwPTZ69v8rfY8uAe2S7W5sUKTrceQYmSiYnUtTxn0ihgYvKnnUyVKChvvJQ9&X-Amz-Signature=543ac8e7bc8064aa21e03ad928b5d6c992654f875fbb40825752017ec9114d46&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CVY34I%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCfdLxbpDtcxWutolMrHppzxLV0GmwwLHuSvWucnJZuiAIhAJSKvwzoDGQwsz3%2Foxirsr1Uli%2FSNheHsWrrGByewMakKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKp0rBL3ODIzuzfsYq3APZUdXU93Ti9mpwwvc%2ByKTkln0EyQrQXGhf2NweLFD40WD%2BeVGxbDGrJk3AQHLATycMM8NHllxHa4gQKfZvJGsdzdcDTm82NAafRh7X1PeG%2FLvWgiX7womFO7IzWgXZTJ5TQNbIjVTrdP1zTNXW%2FQ7%2FUDYs5uc%2FIdUnV5FY%2BYoGlfuzpx7%2BvfnIi%2BnU5LRZ9HXsjxhgONooQVIDct%2FT6Rtgm8eRMtT4BZLbMz013YRcMnWyTmPWWIqN7VRM9yTJkvQLpz1VQcB%2FK2dEVYcbnbuFIjl7J60c4%2BYhgyLvRWLKeeOZQakoCQ3HzVhens%2BX4nvQaecf3XWLuUzEfzjC0Q3qMOh4lLXXBTAs595kjwWC3LAmIKU21HuiQG1iIK94fnzLR6o7yuOM%2BwaYL3yOd2Q6exGBj5%2B9hAL9eLy5loH4uHkXA3zfAFgLrpIirgck0ECkNLiL09bzi28FplepIM2ZEkepilOseO6%2FOdUQNFiaexcIPf4YUCcWSIRJRquOuphpw0W3mLnBq6qr7%2FwRhwEoQjkARtw79eLEGz5tGg77Md7y0csRCr%2FLywgkVqh1lhyu1loME7eZU5ahv3Oi4wFwU2dLCRUuCaCANqKbvGmBKiZfxP%2BlIP6IM9dfyzDI3pq9BjqkAZTGzXkWDSn%2FiUjBm6JS0lRaZVaJcDnzhhyCWOUmCmxVM43krh4Y2dX0gQ8kqIlM2O0ojF6z6FhM1%2FrPe%2BllC1Nh9kAlH7vucmaBCv4ktxiIXiOV6Ondo8d23zs9PFiiX6ScPRsliSOpBGKB4a9wXxzLDiXUS38Q%2BwPTZ69v8rfY8uAe2S7W5sUKTrceQYmSiYnUtTxn0ihgYvKnnUyVKChvvJQ9&X-Amz-Signature=c0658c59f79230f35115901b4e99de55978f2a7b47bb1110bd90447b240cdf33&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
