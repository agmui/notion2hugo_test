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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2FADKB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmJW58I7O9wyugbGJXJdril0CMEPUnIkmmK5sOY%2BopmAIhAJnNqc83VTI403h2FQw0cYxzxg43EjN8nYAXh14A%2BuYKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzds%2BPIxr3fpGxya48q3AOiZgqJFweeqdt7DEzkhWYQ9X5dYxhcHRDlLGpo%2FST7Ywt60VH52oeRqMgyrlbhJLioidugK2Wrc6HvqgByCTOOu5a5knh8seios7c6r8eO8GMH8nH8v8aCFnwE3OkVwqswizxC4U%2Be%2Fy4p6PKvUgka02U4XbDiE6KxFFpypnBtcQVAU%2FXIH04DCa%2BptLSFlztxF%2FhKEHJyFxZkIcxdrWj%2BhxBMnqfmW%2F%2BPqeeQYmW2LI7uCKGyVgrnoIYoL0Pd9i3wWU%2BufGRivG5F6Pf8EV9mg4aA8iQjQh%2BWx2wObGtQDR6elQEZwmCABPEheMdvSrIsfg2qX8S7GMcvKimM2bQZ%2BTzJWjqnyEqrXxCi7A404Xja%2BdTuuxvRG19tj%2FSgbryeVn%2FDKvYdwVHdD7CUiaAT%2FCJHNS7zJzwmOKwDVWQOIQGUt9Ik6HullSDW%2BPSqt8LydwOIi2TO0lKLeinvB7yPXKwfXhUpomstCOklHHrkjyy9fLpXq6cw6RXf%2FcNNn%2BQtjyhjSwQMXEfOFeTyERJsVAkZLeN43YO3Nvz9ATZ6ADfORKZrsCa75HEhGYtehiDVZasF0kuBN3h6myfhH6m69WXfWeCe5CBvanHYWhFyFYa0jLQ6IzxqeQOLRTDmx%2Fi8BjqkAdD6T0ZfRenklawu28jmMUpbK4b%2F3JY15Lhao3mYWvbbBYxhzKABGWFyVo5G%2BWkTW%2FyBwt%2B3QEQ6cTpuU1eEEEQjFXS5bFhMIUG8xSODEuCUD572Cp9Pc1oSY3V%2FhX6hGm27qvVKuFKBiRM7EocjJ%2BVE9bqijtT09imtNxlhvdH81zT8djnoOFA6IioBFyIFhQiJI0DFmCT2sZr5Mey0dXSSbsH4&X-Amz-Signature=129caf78dc738bd6497ff4ac71e92a3983a1a7f5097021862bb7ce20bc94995d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2FADKB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T160713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmJW58I7O9wyugbGJXJdril0CMEPUnIkmmK5sOY%2BopmAIhAJnNqc83VTI403h2FQw0cYxzxg43EjN8nYAXh14A%2BuYKKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzds%2BPIxr3fpGxya48q3AOiZgqJFweeqdt7DEzkhWYQ9X5dYxhcHRDlLGpo%2FST7Ywt60VH52oeRqMgyrlbhJLioidugK2Wrc6HvqgByCTOOu5a5knh8seios7c6r8eO8GMH8nH8v8aCFnwE3OkVwqswizxC4U%2Be%2Fy4p6PKvUgka02U4XbDiE6KxFFpypnBtcQVAU%2FXIH04DCa%2BptLSFlztxF%2FhKEHJyFxZkIcxdrWj%2BhxBMnqfmW%2F%2BPqeeQYmW2LI7uCKGyVgrnoIYoL0Pd9i3wWU%2BufGRivG5F6Pf8EV9mg4aA8iQjQh%2BWx2wObGtQDR6elQEZwmCABPEheMdvSrIsfg2qX8S7GMcvKimM2bQZ%2BTzJWjqnyEqrXxCi7A404Xja%2BdTuuxvRG19tj%2FSgbryeVn%2FDKvYdwVHdD7CUiaAT%2FCJHNS7zJzwmOKwDVWQOIQGUt9Ik6HullSDW%2BPSqt8LydwOIi2TO0lKLeinvB7yPXKwfXhUpomstCOklHHrkjyy9fLpXq6cw6RXf%2FcNNn%2BQtjyhjSwQMXEfOFeTyERJsVAkZLeN43YO3Nvz9ATZ6ADfORKZrsCa75HEhGYtehiDVZasF0kuBN3h6myfhH6m69WXfWeCe5CBvanHYWhFyFYa0jLQ6IzxqeQOLRTDmx%2Fi8BjqkAdD6T0ZfRenklawu28jmMUpbK4b%2F3JY15Lhao3mYWvbbBYxhzKABGWFyVo5G%2BWkTW%2FyBwt%2B3QEQ6cTpuU1eEEEQjFXS5bFhMIUG8xSODEuCUD572Cp9Pc1oSY3V%2FhX6hGm27qvVKuFKBiRM7EocjJ%2BVE9bqijtT09imtNxlhvdH81zT8djnoOFA6IioBFyIFhQiJI0DFmCT2sZr5Mey0dXSSbsH4&X-Amz-Signature=b6b8a2dc5b830e3cf7b11c69d807835c98bc4da834cc96be3fe3d76868ceae3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
