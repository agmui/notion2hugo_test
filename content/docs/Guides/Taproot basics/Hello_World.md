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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WX3KLSB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCkXxvCdV1BgDk5jNHQI%2Bw0Y2nGXZC7xpt3Vh4BzS0BIAIgXDEqYWveOJsqwUoGqVxE%2FbhRGt096nDxXQt39lgP%2BFQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDM443UThdeZw29QAQCrcA7e41w4RLwWkRXgSHNZIvVW1iYJrhLpd%2BdlKzbqSJI%2FYI%2F5538XHNbBpUxwQW66Vpx0o2CjX6jye68ygra4q%2BpBdRLQx1WWu%2B7pwhZ4pY3XYzmEP890yq2utlnowjWaTvEPdBmJScsGWV4FsOOi%2BnrWWzf8vuPHwdD7sm2XSpNDAYVmCIgNPpx3AKWLc4RTcFewKAbOafHRlXNp9snZP%2BCcPM%2FSZTueZf%2BOWKmCZW1zCJt%2FfyT%2BkOeE1mYU%2BUkR18LnXoFycTOk1JzA3R7slxbwAhszB2DzOKWziZ2t%2FTkEyX1OPSnGJUTql5%2B2YIF6LxxpPFAS89HDaDjQQk%2F%2FYuIHDVSZ%2F9mx4c5qPRf0qn%2F8pK1%2FzhA4IxQUfPmBnepGrOa47Ob1g65dOowvem0I3XSoA0Pb%2FG1Ytte8f9GiAVYaox%2BgIMzB5%2BgJ%2FO1e2GpnSpGDRsBvihR2ewrX6M0fbpEQcjTDxMfnIQLcOmGFYYdrLbAo8L9tLs97vlx1hIiayveA0MEGunDJbV5Tjqli1X9sM36O7jY63WplunyoEOBrJQXvkgGzImMCqoevfyvenYl16WSx097%2FiZ05wC1lakDBHHFTyutq5ODW3DyPs0HvC4V9%2BLeO8rJ5nZjdDMM34pMMGOqUBnA2tmSOjR7b9LeI2Ne938Hkc3KXxyKVPOCnwLg1U%2FvHBAWJeD9lrN8niHMxACcL5Zc3n3m1rY3GKZsWZQACd3FxCfKXOFYVmlLWeaxi2bRpQLNSEfLtAL%2BPs1CaSgWCmUrTVNjmKcqigGHtiS83HC3aHYJOx5nf5sbvVoZlNwigJ%2FPq6BfS6euk5DfQILQGRK4n%2BbbTdF%2FFWj7KWlmRrwNAaD7NT&X-Amz-Signature=96faf6aef6218994b40bc2946fa21ff655d173854e4fcc6cda46c8eac603d2a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WX3KLSB%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCkXxvCdV1BgDk5jNHQI%2Bw0Y2nGXZC7xpt3Vh4BzS0BIAIgXDEqYWveOJsqwUoGqVxE%2FbhRGt096nDxXQt39lgP%2BFQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDM443UThdeZw29QAQCrcA7e41w4RLwWkRXgSHNZIvVW1iYJrhLpd%2BdlKzbqSJI%2FYI%2F5538XHNbBpUxwQW66Vpx0o2CjX6jye68ygra4q%2BpBdRLQx1WWu%2B7pwhZ4pY3XYzmEP890yq2utlnowjWaTvEPdBmJScsGWV4FsOOi%2BnrWWzf8vuPHwdD7sm2XSpNDAYVmCIgNPpx3AKWLc4RTcFewKAbOafHRlXNp9snZP%2BCcPM%2FSZTueZf%2BOWKmCZW1zCJt%2FfyT%2BkOeE1mYU%2BUkR18LnXoFycTOk1JzA3R7slxbwAhszB2DzOKWziZ2t%2FTkEyX1OPSnGJUTql5%2B2YIF6LxxpPFAS89HDaDjQQk%2F%2FYuIHDVSZ%2F9mx4c5qPRf0qn%2F8pK1%2FzhA4IxQUfPmBnepGrOa47Ob1g65dOowvem0I3XSoA0Pb%2FG1Ytte8f9GiAVYaox%2BgIMzB5%2BgJ%2FO1e2GpnSpGDRsBvihR2ewrX6M0fbpEQcjTDxMfnIQLcOmGFYYdrLbAo8L9tLs97vlx1hIiayveA0MEGunDJbV5Tjqli1X9sM36O7jY63WplunyoEOBrJQXvkgGzImMCqoevfyvenYl16WSx097%2FiZ05wC1lakDBHHFTyutq5ODW3DyPs0HvC4V9%2BLeO8rJ5nZjdDMM34pMMGOqUBnA2tmSOjR7b9LeI2Ne938Hkc3KXxyKVPOCnwLg1U%2FvHBAWJeD9lrN8niHMxACcL5Zc3n3m1rY3GKZsWZQACd3FxCfKXOFYVmlLWeaxi2bRpQLNSEfLtAL%2BPs1CaSgWCmUrTVNjmKcqigGHtiS83HC3aHYJOx5nf5sbvVoZlNwigJ%2FPq6BfS6euk5DfQILQGRK4n%2BbbTdF%2FFWj7KWlmRrwNAaD7NT&X-Amz-Signature=62ca5a4ed39407e8919dcc47013a919ba090131f5b15c159d18fb39ab6bf100e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
