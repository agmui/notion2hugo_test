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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTO6DCS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC63rBrbJS%2B8A9VTr%2FMjKJqJCj5lbw3KzBwoc6OtyVkwgIgXklbV849orLFUeYg2%2BEOBdUBSsue90MxypVQRfscIRAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4JTXUGLDqWGlN26yrcAwvr92TUKruzygbMklO5BBaQ0PEf47ZMMiP7pJr02CVSy3O3gKXDL7mAq8k4jVBqusw6c21LPvYOEx4Wrt0zMeAiOMkWSotInFM2XazdwmPvfdcPzMYECo8VaVDub5xcyeNW1F4HflMH9Su8PwhE2fyH%2BfI4QNpIR6xqKNHCIVh%2BMN5vycHblLwtrFwQHJtlBO%2BnZGv1fjCzeOVuIgarJt1Yl6pZasz6XxVP7iFnffV1bQtDE%2FgJR0UpKzDU%2FLXRyorKGzyssqJ3pnUhrYFdIkLj5HVlFcnuS48Bm7S6b0iqTr2dpfUP4W2%2B0JarHmqWzFd0MDeFXW3cv6KIXsoGPG4Uzco%2By5SD7ouVMEaMjcrJuDnPLnMnXeZ22jJHXOVhtl9QZzSRXOZDwtsx3qfBaaFZJAj0sGzrFpqfhkzoGdCA2J5eBRVu2d%2FMtjYkR8faMGjmyWU6EKsymLIRY1rtrj39DaBx6TcZ25H17J8mSitjlmY5LV8jmNMnotgV4juv%2BJ%2Fvfcz17FmpbG%2FC6did46NMX78xpWSrLyE0fxo1zfcitf3FGrpyuUnZLKW8mWd3sqiK%2Bg0H0mHpgj9SrznP9%2BzCWn3zUFHkZHkO1b%2BtAFxciOXTPwwI1u0pcwqiMPSP%2FMAGOqUBcfuWAXU5liFlp%2BbtJn4OH0lyUnYihbV14kariAH7LvQi2VmROW7DqQgOsEullnUZxlGv0HpJs02Uko0hnJX%2BhafEAqUDy1cRpaKPyM4jODZ5NPoAgSBJjcotvLMCYZlHyc7Dfa9h5vzV%2FLg1EucnIYOf7i3ocBK7KeEW9t3DB54HQB1ozZ2CgxoDsSdYi0EClmgni2ybSwAyjcEjJRjG8NaMrTrU&X-Amz-Signature=a11e267043d1982459490542be6e9982afaa21f4f7b59058eabe22697f0031b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JTO6DCS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC63rBrbJS%2B8A9VTr%2FMjKJqJCj5lbw3KzBwoc6OtyVkwgIgXklbV849orLFUeYg2%2BEOBdUBSsue90MxypVQRfscIRAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4JTXUGLDqWGlN26yrcAwvr92TUKruzygbMklO5BBaQ0PEf47ZMMiP7pJr02CVSy3O3gKXDL7mAq8k4jVBqusw6c21LPvYOEx4Wrt0zMeAiOMkWSotInFM2XazdwmPvfdcPzMYECo8VaVDub5xcyeNW1F4HflMH9Su8PwhE2fyH%2BfI4QNpIR6xqKNHCIVh%2BMN5vycHblLwtrFwQHJtlBO%2BnZGv1fjCzeOVuIgarJt1Yl6pZasz6XxVP7iFnffV1bQtDE%2FgJR0UpKzDU%2FLXRyorKGzyssqJ3pnUhrYFdIkLj5HVlFcnuS48Bm7S6b0iqTr2dpfUP4W2%2B0JarHmqWzFd0MDeFXW3cv6KIXsoGPG4Uzco%2By5SD7ouVMEaMjcrJuDnPLnMnXeZ22jJHXOVhtl9QZzSRXOZDwtsx3qfBaaFZJAj0sGzrFpqfhkzoGdCA2J5eBRVu2d%2FMtjYkR8faMGjmyWU6EKsymLIRY1rtrj39DaBx6TcZ25H17J8mSitjlmY5LV8jmNMnotgV4juv%2BJ%2Fvfcz17FmpbG%2FC6did46NMX78xpWSrLyE0fxo1zfcitf3FGrpyuUnZLKW8mWd3sqiK%2Bg0H0mHpgj9SrznP9%2BzCWn3zUFHkZHkO1b%2BtAFxciOXTPwwI1u0pcwqiMPSP%2FMAGOqUBcfuWAXU5liFlp%2BbtJn4OH0lyUnYihbV14kariAH7LvQi2VmROW7DqQgOsEullnUZxlGv0HpJs02Uko0hnJX%2BhafEAqUDy1cRpaKPyM4jODZ5NPoAgSBJjcotvLMCYZlHyc7Dfa9h5vzV%2FLg1EucnIYOf7i3ocBK7KeEW9t3DB54HQB1ozZ2CgxoDsSdYi0EClmgni2ybSwAyjcEjJRjG8NaMrTrU&X-Amz-Signature=327a55cb4eeadc4bc0a513c3c601085bbe76fb45035d5a3cd68e301d98582a87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
