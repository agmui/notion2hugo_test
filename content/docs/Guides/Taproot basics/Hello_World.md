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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQIWVL6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACbpWuLk70NwF8v5I5b7vtitzXowtFSMrQeS81XaG0zAiEA47QSR0mmSx%2BWknt5MDJuYdMxRLVQheuTnSAewZh4JK4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML1sFH1%2B44p45G5rCrcA6KCKQIkLq5EhXFUKfxLHWu97bCkYDRPl8r0Isj3QjoCh%2FcvDbnLKyKpxkyxVBs3HGIHZO%2FZyNtTBqUvemKB7Z4%2FGhi1FXnrxEBRtsQcCmidTDkNOwISfFjy1vzfpI%2BDsDv1Hm%2BR2EWOuG77hm7W%2BwfCXUgB4iru%2B5trIzOi8mluzgUtRMhodFClP8yPUa0Bk5wNJllRCUfZ7fvprQM6PgV5Ea9T6DY%2B0cs1BPV89%2BLGiOH%2Br527ClMyQD7fUlJWyCMs7cEgljNGw3HgwHrjAHNhOYxWj6ej6iEwIGtsckqKFBQaX99CJkEw5G21fwearCxNr4e34ZSoyHQEqEtNjbAgHzZCvL2exsAzfD3fUHq%2BBI7g%2BbXKIexzeE30flNZvPyNggjCw0nDPwbntDoQ9yGmkGY2XKDX3zxARZFQkhGehP6P6G%2FPRrtuzubwkZLFaqVL8mW%2FsFnmxUMkd2GehU8b%2BIVf9p%2B50xNP%2FSeO%2BRgQWlmPq7El21gE2g9v%2BDa6EYUKa5zfMOuIaup2a8hwK%2B8y0p4GgcqOXjnwHi0rl1RHC4azls8Hgli1ms1yuY5W6xgdbZTXdkofpvHYOMmT1IDHXhPo53EV%2F41mT%2Bykd%2FwWpxLyP6JcTGADqvd%2FMIyhgtIGOqUBt6q7C6IH2C%2Fts5PGjVgBSgnpVQx0GkWv1PWMA%2Bc7%2Bc2AqmgLnnyCywxY8zr1W1sH73zJ39pB6PX0z%2BoIM6X9Dw3DgQaujevCCPXbEEYM1fMUv2wpVPm8yEO6qIhJYm9rtuF6m5DcdN2jpZAfqy5gIcUyellCg0HPY97CYPi31kKBQXqJCEJWWxw2qiVBrfZEd6OB2R6lDnDGzHoJmpApOAiqq59s&X-Amz-Signature=fbd935991e47898f4fe0bce195d605e2cde0231820040a92a0be8790ecf6cfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHQIWVL6%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACbpWuLk70NwF8v5I5b7vtitzXowtFSMrQeS81XaG0zAiEA47QSR0mmSx%2BWknt5MDJuYdMxRLVQheuTnSAewZh4JK4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML1sFH1%2B44p45G5rCrcA6KCKQIkLq5EhXFUKfxLHWu97bCkYDRPl8r0Isj3QjoCh%2FcvDbnLKyKpxkyxVBs3HGIHZO%2FZyNtTBqUvemKB7Z4%2FGhi1FXnrxEBRtsQcCmidTDkNOwISfFjy1vzfpI%2BDsDv1Hm%2BR2EWOuG77hm7W%2BwfCXUgB4iru%2B5trIzOi8mluzgUtRMhodFClP8yPUa0Bk5wNJllRCUfZ7fvprQM6PgV5Ea9T6DY%2B0cs1BPV89%2BLGiOH%2Br527ClMyQD7fUlJWyCMs7cEgljNGw3HgwHrjAHNhOYxWj6ej6iEwIGtsckqKFBQaX99CJkEw5G21fwearCxNr4e34ZSoyHQEqEtNjbAgHzZCvL2exsAzfD3fUHq%2BBI7g%2BbXKIexzeE30flNZvPyNggjCw0nDPwbntDoQ9yGmkGY2XKDX3zxARZFQkhGehP6P6G%2FPRrtuzubwkZLFaqVL8mW%2FsFnmxUMkd2GehU8b%2BIVf9p%2B50xNP%2FSeO%2BRgQWlmPq7El21gE2g9v%2BDa6EYUKa5zfMOuIaup2a8hwK%2B8y0p4GgcqOXjnwHi0rl1RHC4azls8Hgli1ms1yuY5W6xgdbZTXdkofpvHYOMmT1IDHXhPo53EV%2F41mT%2Bykd%2FwWpxLyP6JcTGADqvd%2FMIyhgtIGOqUBt6q7C6IH2C%2Fts5PGjVgBSgnpVQx0GkWv1PWMA%2Bc7%2Bc2AqmgLnnyCywxY8zr1W1sH73zJ39pB6PX0z%2BoIM6X9Dw3DgQaujevCCPXbEEYM1fMUv2wpVPm8yEO6qIhJYm9rtuF6m5DcdN2jpZAfqy5gIcUyellCg0HPY97CYPi31kKBQXqJCEJWWxw2qiVBrfZEd6OB2R6lDnDGzHoJmpApOAiqq59s&X-Amz-Signature=4fbe50dc2794384718cebc8b485e757e0e2fb1dd1958e83bf70718dff792cf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
