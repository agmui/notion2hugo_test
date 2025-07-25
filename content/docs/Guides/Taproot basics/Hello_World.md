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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPNMXIR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGBcmst4SKx%2FjuU9OeRtzqk%2Fgt9lsnQZeq%2Bt1r9KXOThAiAZI2P5VIR2lIl1sMAf5lQbMaC6XRaS0lLx2lF71crRMCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyXgWmx%2FXJm%2Bs0v2dKtwDrYjuRG5BHZ59IBkxQACHRdfCz%2F3ZiE5fQEEPGv9T9ygMTOkdLxou5e4po52UqfVww0%2F3tXw%2ByPgV7VwWBeQSaMwaIlc%2BxBNuHQZUy9stLZsGb%2FxBuJXf8Uu66j79Np%2FliuLNJMg9o7qm90FXjIsjiXrtBlMkc0EEYCSAYbnvHxlc1Vy3uQ0RT0PRa9DQpxIomuwAZRpGAvhX%2B%2FFt30XFRM2aBIufGWZSMNlMkBprbRL%2B9CiotogXB7JWuWP1SLHYzIBhAYKooo%2BUVNOjWd5qZFgQWfhx%2FVrVcPUWmGuTh5Q58S87lmgWzCUayTj4JSfykhMHlWrxxEMLwDES%2FXe1Z5bN312h20tlcJx9hmb38IBBbcrPyrYGk57rsUc%2FcpGTcVwSyKV8fnFyDLuOOTaAKnWfAIA31DxCb7vub0BKk%2FOLvbTmNResROSaTkRkRN5KedFhCkdi%2Bt8qtglSUFZ3RklEPBYyAZMss7lr00K1F0pEgD7mgIAs5jOUVONhVYzpHZA207IN9KlMbeH9aGmEFYrL5vbLcq09Ht3txj3Sje2tKRvlDi09mU85SKCuN1%2B%2FYeXXPLdOFcYC0%2F7zwOV3RTE6vkX%2BmW6c67HFsptjQWh7q4SQB8xRmkgixpwwj5yMxAY6pgGzGL8zewCDFEIPtPQjmHGAtnTI77cnQcAKeegJ0YZFJ1EyagSkHclS6e5%2Fw45mEtD3R12d0LrfP%2Fhzxisi4t3ft4iw%2FANiXFRN0hldt5aT%2BwwA8BKiLm%2Fva9kPnuoMSsddHsBiV2C9VTOclaRvIKZ1fMUpEVujGa7dObDU4W9Uh3vQWPrFevbJx4mHxdj1kPNgLYd2ZWZquqCUL3meoHNUt4yieg6x&X-Amz-Signature=ceb871d3b654d2a3e56a9cb0dcf873623b136f583a9c00e3b303106e48fb6feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPNMXIR%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGBcmst4SKx%2FjuU9OeRtzqk%2Fgt9lsnQZeq%2Bt1r9KXOThAiAZI2P5VIR2lIl1sMAf5lQbMaC6XRaS0lLx2lF71crRMCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyXgWmx%2FXJm%2Bs0v2dKtwDrYjuRG5BHZ59IBkxQACHRdfCz%2F3ZiE5fQEEPGv9T9ygMTOkdLxou5e4po52UqfVww0%2F3tXw%2ByPgV7VwWBeQSaMwaIlc%2BxBNuHQZUy9stLZsGb%2FxBuJXf8Uu66j79Np%2FliuLNJMg9o7qm90FXjIsjiXrtBlMkc0EEYCSAYbnvHxlc1Vy3uQ0RT0PRa9DQpxIomuwAZRpGAvhX%2B%2FFt30XFRM2aBIufGWZSMNlMkBprbRL%2B9CiotogXB7JWuWP1SLHYzIBhAYKooo%2BUVNOjWd5qZFgQWfhx%2FVrVcPUWmGuTh5Q58S87lmgWzCUayTj4JSfykhMHlWrxxEMLwDES%2FXe1Z5bN312h20tlcJx9hmb38IBBbcrPyrYGk57rsUc%2FcpGTcVwSyKV8fnFyDLuOOTaAKnWfAIA31DxCb7vub0BKk%2FOLvbTmNResROSaTkRkRN5KedFhCkdi%2Bt8qtglSUFZ3RklEPBYyAZMss7lr00K1F0pEgD7mgIAs5jOUVONhVYzpHZA207IN9KlMbeH9aGmEFYrL5vbLcq09Ht3txj3Sje2tKRvlDi09mU85SKCuN1%2B%2FYeXXPLdOFcYC0%2F7zwOV3RTE6vkX%2BmW6c67HFsptjQWh7q4SQB8xRmkgixpwwj5yMxAY6pgGzGL8zewCDFEIPtPQjmHGAtnTI77cnQcAKeegJ0YZFJ1EyagSkHclS6e5%2Fw45mEtD3R12d0LrfP%2Fhzxisi4t3ft4iw%2FANiXFRN0hldt5aT%2BwwA8BKiLm%2Fva9kPnuoMSsddHsBiV2C9VTOclaRvIKZ1fMUpEVujGa7dObDU4W9Uh3vQWPrFevbJx4mHxdj1kPNgLYd2ZWZquqCUL3meoHNUt4yieg6x&X-Amz-Signature=1831b4a6d8bf9489055d69fbc1c7dc5978ecad56724417e3255a4f89265ce3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
