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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJSKMTKJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ6hZ%2FrVXvG8I6RUo2gUyctnxfA4IzDWRzwdiKIWnExAiEAwbxF0YuhiU4trKXmO2x%2BggA2WBd94vKW4GSiY1OH%2BLIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHbNrNiST%2BS%2FBDRPJCrcA4%2BkFhTRhU2Jt4Sa%2BcNWG96vhjIlSCJjBXz%2FwOgzcjWFg282jZYRQxGFgv76fj73Jr7ueA%2FPDIRQ5s58L6J8hMy2uQnrMWTHIzRsMrW%2BH9IZcsY%2Fd5fxMzs90Ph3%2FvyzAJftrlavs6nywOlmmaMRT74u3UDltZSJiLdSddxlYajOacLeBYJspzK8QLUqDS8bik4q9oM65%2FhEfXHqZxPo42uRhOJVHoZXC7gtizxnMQP1CBvj0PjXjq6HWbymEtLU93HCTns10zXwkqqJmk4mb80n9a2%2BYpw0%2B%2FHKDz7zqDEkhcH5%2BCT1GoSOIV4qqt2UKVduoxhTlRqqVKTZVDSPbDp6BpjY9fmi5g%2BeZGKH5LIDq7FgtKJm%2FasVRRcIEkGoOznIbNp5pSLPm%2BPqzHM34TcvKsyRqdjDE%2BjQRwzSRJiGKJRnkxRtYyDucIQaSg%2FLGSX%2FeB8hyeBc9B9cQ6jC9A4EG3j9CQAg5FO1riIjOSAKTjl4mX%2BdzWIo7HFu2xOUuWsZVsif1OvfNcTFqAudgfDmN9ZLwBSM0zH9sP65rJgWGrZzEOXwfYR46o6b16PFWVOJIalBYyQy64zoFLubtI748pbkR6IOoV%2FoNF7iive9boID8kVdl6XU2tHaMJqM4L4GOqUBFKCv8GQ%2Flq%2FPvuVo1Fer47RPZEEVw7ljgqN1OUmfD2V54JRmrcRF1k8%2BcQ%2BGxNJF%2BBdVcKDKD8JTpgpY3vO0lWmK6W3buMNK61%2FK3asqImsKw0R4agsPwo7z%2F2RwnI4DEhlfXiJf3SNa32YBwI%2BJ0V5kjbNqg9Y5toyJA7bCVabwl0qknjoABGjrI8CbjL6nPcmb%2BT4f39choNYVwimCrrE4fPGH&X-Amz-Signature=262523266a285d28eae99a3c153ed79e6e19c00173ff3fbfbea383a5bd8ee026&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJSKMTKJ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ6hZ%2FrVXvG8I6RUo2gUyctnxfA4IzDWRzwdiKIWnExAiEAwbxF0YuhiU4trKXmO2x%2BggA2WBd94vKW4GSiY1OH%2BLIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHbNrNiST%2BS%2FBDRPJCrcA4%2BkFhTRhU2Jt4Sa%2BcNWG96vhjIlSCJjBXz%2FwOgzcjWFg282jZYRQxGFgv76fj73Jr7ueA%2FPDIRQ5s58L6J8hMy2uQnrMWTHIzRsMrW%2BH9IZcsY%2Fd5fxMzs90Ph3%2FvyzAJftrlavs6nywOlmmaMRT74u3UDltZSJiLdSddxlYajOacLeBYJspzK8QLUqDS8bik4q9oM65%2FhEfXHqZxPo42uRhOJVHoZXC7gtizxnMQP1CBvj0PjXjq6HWbymEtLU93HCTns10zXwkqqJmk4mb80n9a2%2BYpw0%2B%2FHKDz7zqDEkhcH5%2BCT1GoSOIV4qqt2UKVduoxhTlRqqVKTZVDSPbDp6BpjY9fmi5g%2BeZGKH5LIDq7FgtKJm%2FasVRRcIEkGoOznIbNp5pSLPm%2BPqzHM34TcvKsyRqdjDE%2BjQRwzSRJiGKJRnkxRtYyDucIQaSg%2FLGSX%2FeB8hyeBc9B9cQ6jC9A4EG3j9CQAg5FO1riIjOSAKTjl4mX%2BdzWIo7HFu2xOUuWsZVsif1OvfNcTFqAudgfDmN9ZLwBSM0zH9sP65rJgWGrZzEOXwfYR46o6b16PFWVOJIalBYyQy64zoFLubtI748pbkR6IOoV%2FoNF7iive9boID8kVdl6XU2tHaMJqM4L4GOqUBFKCv8GQ%2Flq%2FPvuVo1Fer47RPZEEVw7ljgqN1OUmfD2V54JRmrcRF1k8%2BcQ%2BGxNJF%2BBdVcKDKD8JTpgpY3vO0lWmK6W3buMNK61%2FK3asqImsKw0R4agsPwo7z%2F2RwnI4DEhlfXiJf3SNa32YBwI%2BJ0V5kjbNqg9Y5toyJA7bCVabwl0qknjoABGjrI8CbjL6nPcmb%2BT4f39choNYVwimCrrE4fPGH&X-Amz-Signature=61a9e4055b1d61545a21eceaf2edde8f83c90197167994dfff52d08baad98870&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
