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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLM5AEP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHa7lwNXMalF4XyDa9uEk4bN%2Bgf3cEIZZu56o8aHy8fzAiB5%2Fxof3Yx2INSk%2BjZry4fBZ%2FRZ0QkHJONHl3K7pUApkyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMoEDF%2BUZRhxcb7HiPKtwD3WNvlGLg29B%2BWVCcUat%2BmZqsisPyBRHsT%2FKifTY4C7NOzD7IwVbU8xqAfCgvA%2FgLKb%2ByHhjmyqGcfSHQqauaEqQH0kMBjjgIFNCmgm7ukKY3KJam4wZKQZU4FhQP0PsM0FckJWtqpbIQwNGJemvhfLORYJE2Lw7lurPgxU5Z2oAORzZjKqW0807lomPyc9KwR0RV0nUDt3k7MDlRQ8PjjIMcS41MiQACWRsk4CW26ce3aa6yHMkuIix0lLTKYw4et4Zkdui64UGT1bUz4BlmCV%2FZtJN92GS6RmMIeLggRCxk3siAjnFkgcx7Wp5lJZX%2Fr9PiCFt0X%2BBGyXKEms5eJ1gIN%2FgUQB%2BLPDMp9ZojjTISk7O9TlMGoQmV5rK6hirETsTAr8cCDCAWBHOgET1v6vUezA5IVo80k%2FOzBhmeZK5SMd4He296DzNL9gcRgw99UntvlyNuDvxcmAn0%2FBDcSYV5JtBzk2TrdxcIP3TWM%2F2hi0BZYHhqF9Xlk%2BDkFbB1dWWnKWI8s1xZDId5Prd8K%2BHXSy7dXc4GuJ%2BS0otPjrjkM9T0tuoIkb0zyy1WZ3vRrJMicpnVYX%2BLPmqRF%2FlUPovzEbStq%2BbakZxRQxlPm9JBovBQsQg%2BeAS3vX4wlafCxAY6pgH8j2ITOSGDewFPkey5ETeCmlBMCRDpI4V343m6gdAyYMLW%2B8hTNH1Hk15X7I5Ts0kKR3Ju%2FcVEvUfP19czLO8mJMTsiT8w3gkNcag9mnsttFU3TwgQKx9Yga6xkXEvNEJQa6FOnR%2BH4%2BKtzzbd95AqQDWBDn%2FoyZwROA0Cg0G59a7lyOiZxu1yhkjPJN1kwgku6nHUEOKV%2B9Ul5HmQL5%2F8P5xLItpL&X-Amz-Signature=6102de035113ba73928ced850d274a4c9d1bf4683d13f5dec98a3a5ec2a272ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBLM5AEP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIHa7lwNXMalF4XyDa9uEk4bN%2Bgf3cEIZZu56o8aHy8fzAiB5%2Fxof3Yx2INSk%2BjZry4fBZ%2FRZ0QkHJONHl3K7pUApkyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMoEDF%2BUZRhxcb7HiPKtwD3WNvlGLg29B%2BWVCcUat%2BmZqsisPyBRHsT%2FKifTY4C7NOzD7IwVbU8xqAfCgvA%2FgLKb%2ByHhjmyqGcfSHQqauaEqQH0kMBjjgIFNCmgm7ukKY3KJam4wZKQZU4FhQP0PsM0FckJWtqpbIQwNGJemvhfLORYJE2Lw7lurPgxU5Z2oAORzZjKqW0807lomPyc9KwR0RV0nUDt3k7MDlRQ8PjjIMcS41MiQACWRsk4CW26ce3aa6yHMkuIix0lLTKYw4et4Zkdui64UGT1bUz4BlmCV%2FZtJN92GS6RmMIeLggRCxk3siAjnFkgcx7Wp5lJZX%2Fr9PiCFt0X%2BBGyXKEms5eJ1gIN%2FgUQB%2BLPDMp9ZojjTISk7O9TlMGoQmV5rK6hirETsTAr8cCDCAWBHOgET1v6vUezA5IVo80k%2FOzBhmeZK5SMd4He296DzNL9gcRgw99UntvlyNuDvxcmAn0%2FBDcSYV5JtBzk2TrdxcIP3TWM%2F2hi0BZYHhqF9Xlk%2BDkFbB1dWWnKWI8s1xZDId5Prd8K%2BHXSy7dXc4GuJ%2BS0otPjrjkM9T0tuoIkb0zyy1WZ3vRrJMicpnVYX%2BLPmqRF%2FlUPovzEbStq%2BbakZxRQxlPm9JBovBQsQg%2BeAS3vX4wlafCxAY6pgH8j2ITOSGDewFPkey5ETeCmlBMCRDpI4V343m6gdAyYMLW%2B8hTNH1Hk15X7I5Ts0kKR3Ju%2FcVEvUfP19czLO8mJMTsiT8w3gkNcag9mnsttFU3TwgQKx9Yga6xkXEvNEJQa6FOnR%2BH4%2BKtzzbd95AqQDWBDn%2FoyZwROA0Cg0G59a7lyOiZxu1yhkjPJN1kwgku6nHUEOKV%2B9Ul5HmQL5%2F8P5xLItpL&X-Amz-Signature=f1f9d7f2406916b486df13d607ef974f3d17c3d3709557e77e446c7c6535074f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
