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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLZDIJG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDhjTu%2BhXy9a2NMTvgeetrU4WU0%2BVrzwmWcr0dr4cAtyAIgeshGeHBsNd5csQuQjDxkkb9tm3LtdgX%2BU9jbTemnjX8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMezkCnGbQU6sgzsCyrcA%2BPRbQDa8JbDrtf3I9UI%2FiW2zJqEd4S0OeWqJUpYoI0Ytd3X7hxwrXHMokySKnVTar%2B1DYL8tUdtp8nJmJm0a4ydpxS2aGrWxrSurgmsZ9n9F%2B4Y4DCadPl9ySIgHqYRP4DX02rJ%2BHRkTDqbiMXALcuy2g8K10jAHfyenodOdvHaOmBDmCXcUGiO%2FDBHQ5kUxQUDjQAy1KIknTuLuE1mPXB0NLY0cZ21kzRlzC5oJlY8Vc4%2FQa0NJxGo5B%2FSQ6oU0Zz1WdoNdKyVLUbZIxW%2FGBB03vk0zudNmlHw4UcInhSN%2Ff%2F086u7QXBduVpI9IjEGhNa5Fr7Gqb5Ia7So6yeinayV2q9aoWOX5c2cqjIqaJOJb%2FZB1pW9QKwxkXk4m0mNFyetXbjVX8XjOIgqgvbxLqdkO%2BbHCbC1JEPclG0PQJWTPVUo8EU6cUA2352GYQmEVp%2FGfTPYzVed84Rz%2FX0978uwOm5AQAF5n49K9s11bftvqs0F01RSw55OMYEvkMs6Khq31JInbrp99GX4byTF5m%2BO3okiMlCPjgVK19g85eWwk0mWk%2Fk70EW2CcqY6BvRIO0mmRbV2ZDOz6RKSpcd9dZPZ%2B9urqyId6wuBKDb2rIrIHleWc4zp3Z1izHML6Oz8QGOqUB8pHWiVzN8KcEZyZ6IFS8GpobV12sRLs7Qt%2BheIVLqqozGBmhBbXKaSujaenrfXY20ooX3bs%2FUgRbywIS%2BaV6q4dKws2auNOl250YcBNiSRQQctePN4F5%2F1DmeSpxKoUNdGnAz9Tm3V7UyAKr03p27WGAN1LazMSpmC%2BO0ddcqtOORqB1dnATixjZploX7BF6M0tBBpJpQC5trGX4hx3XR8tiXnqN&X-Amz-Signature=004d348134c10298c97dbcfff35b94014353476a866dcaf975348cebd34468c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJLZDIJG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDhjTu%2BhXy9a2NMTvgeetrU4WU0%2BVrzwmWcr0dr4cAtyAIgeshGeHBsNd5csQuQjDxkkb9tm3LtdgX%2BU9jbTemnjX8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMezkCnGbQU6sgzsCyrcA%2BPRbQDa8JbDrtf3I9UI%2FiW2zJqEd4S0OeWqJUpYoI0Ytd3X7hxwrXHMokySKnVTar%2B1DYL8tUdtp8nJmJm0a4ydpxS2aGrWxrSurgmsZ9n9F%2B4Y4DCadPl9ySIgHqYRP4DX02rJ%2BHRkTDqbiMXALcuy2g8K10jAHfyenodOdvHaOmBDmCXcUGiO%2FDBHQ5kUxQUDjQAy1KIknTuLuE1mPXB0NLY0cZ21kzRlzC5oJlY8Vc4%2FQa0NJxGo5B%2FSQ6oU0Zz1WdoNdKyVLUbZIxW%2FGBB03vk0zudNmlHw4UcInhSN%2Ff%2F086u7QXBduVpI9IjEGhNa5Fr7Gqb5Ia7So6yeinayV2q9aoWOX5c2cqjIqaJOJb%2FZB1pW9QKwxkXk4m0mNFyetXbjVX8XjOIgqgvbxLqdkO%2BbHCbC1JEPclG0PQJWTPVUo8EU6cUA2352GYQmEVp%2FGfTPYzVed84Rz%2FX0978uwOm5AQAF5n49K9s11bftvqs0F01RSw55OMYEvkMs6Khq31JInbrp99GX4byTF5m%2BO3okiMlCPjgVK19g85eWwk0mWk%2Fk70EW2CcqY6BvRIO0mmRbV2ZDOz6RKSpcd9dZPZ%2B9urqyId6wuBKDb2rIrIHleWc4zp3Z1izHML6Oz8QGOqUB8pHWiVzN8KcEZyZ6IFS8GpobV12sRLs7Qt%2BheIVLqqozGBmhBbXKaSujaenrfXY20ooX3bs%2FUgRbywIS%2BaV6q4dKws2auNOl250YcBNiSRQQctePN4F5%2F1DmeSpxKoUNdGnAz9Tm3V7UyAKr03p27WGAN1LazMSpmC%2BO0ddcqtOORqB1dnATixjZploX7BF6M0tBBpJpQC5trGX4hx3XR8tiXnqN&X-Amz-Signature=09bb3c90a76397fe0100c6a6a5b32197619a70bc3b3e0348dbebca222b927738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
