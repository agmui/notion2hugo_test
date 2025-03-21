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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3UOAB3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDEKSPBq4FVkElO%2BY5Q6jnit1nEpPK%2BsvfnyTomlpeDlQIgJsFGEJlbTWXG5%2BN6BZxWz7AGqp2p4a7Tu7%2FvZcmZ5OkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwIGoPPWh9x%2BwLAhCrcA%2BIqupplz32ORPgtp72QrgXokiYnjootA12YDf%2BAX8VtEZ716s6B%2BcjrOAV%2BQCgqzFRRHiRIB3CtHg2K6FsubErwsluPGglDmcsLi%2FhBmE4SDYiqXNmnsOS19u%2B9si3l2usiqepKfKUzpBGPDV%2BcX4kJQM11wusyqigifLNdcmrAoIG8u1%2F5eBYiC7%2BPX1A%2BJ6VuW21%2BPMTfadBZGdnUMktnsVrl9JH2dvy1AMvLegBiqM7HW4N%2FwS2vTgCQs81jlm9WgudlGb%2BhwakXGQesJ96LTy%2BFiQhi5iNYrZ5WXCEpUhV4rjLfMqKX%2BU3TsL%2Bu5%2B3uQvYyyKGNxDluUKeqWggBavYaFamX9TFVp0VIXVp112CkaP86Zzfcl9WOcexUFV%2FaV0q06eZ9x%2FLJcoVRUq%2BM%2FeK4JRDMQYcIt%2BrK7k%2FkW882hk9FxMN%2FAXOTyGNcVwinlkX0fGNSllQMsFpBpqeblYNH8OSypMYmI7MI1nwXSEDS%2FLHu0oPZKHOkfek%2B3rLMyyUaLS0zKLsTxRWrSMx3yhwBtPqXyXQ8EygOEwr%2FpCzzHg8%2FZ3nU%2FXMxT4Jb%2FJf0E%2BiNJxcQCyXZnf32auHwHBIbNxjX46YZaaVMXun6OESrz0YXaee4h5c7MN3b9r4GOqUBsaQscEZbDeDM%2FJeClH3JfGdWoVvO9rGMlzG%2FpAMpEPSwuPWZGEAZi6AF9ORm3DQ4FiDS76k0Okvvj9kqBk4w9r53wlh3WS5VHA0OUyEShQ71UD30wftxjL9RiB0%2F%2Fui5PCHNvMZXRZR6patmHF0mmIKxIjIUjhLmP3r%2BRVZOuI5GyjpHPuptnefqC0t%2FpSHGdaf8iuxUYzomy6KL2DBu664KwV%2Fs&X-Amz-Signature=8be5cd5b1da7aac04fb517d19e881f3b9e67f261cf22fd177a2d97686012f6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3UOAB3%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDEKSPBq4FVkElO%2BY5Q6jnit1nEpPK%2BsvfnyTomlpeDlQIgJsFGEJlbTWXG5%2BN6BZxWz7AGqp2p4a7Tu7%2FvZcmZ5OkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwIGoPPWh9x%2BwLAhCrcA%2BIqupplz32ORPgtp72QrgXokiYnjootA12YDf%2BAX8VtEZ716s6B%2BcjrOAV%2BQCgqzFRRHiRIB3CtHg2K6FsubErwsluPGglDmcsLi%2FhBmE4SDYiqXNmnsOS19u%2B9si3l2usiqepKfKUzpBGPDV%2BcX4kJQM11wusyqigifLNdcmrAoIG8u1%2F5eBYiC7%2BPX1A%2BJ6VuW21%2BPMTfadBZGdnUMktnsVrl9JH2dvy1AMvLegBiqM7HW4N%2FwS2vTgCQs81jlm9WgudlGb%2BhwakXGQesJ96LTy%2BFiQhi5iNYrZ5WXCEpUhV4rjLfMqKX%2BU3TsL%2Bu5%2B3uQvYyyKGNxDluUKeqWggBavYaFamX9TFVp0VIXVp112CkaP86Zzfcl9WOcexUFV%2FaV0q06eZ9x%2FLJcoVRUq%2BM%2FeK4JRDMQYcIt%2BrK7k%2FkW882hk9FxMN%2FAXOTyGNcVwinlkX0fGNSllQMsFpBpqeblYNH8OSypMYmI7MI1nwXSEDS%2FLHu0oPZKHOkfek%2B3rLMyyUaLS0zKLsTxRWrSMx3yhwBtPqXyXQ8EygOEwr%2FpCzzHg8%2FZ3nU%2FXMxT4Jb%2FJf0E%2BiNJxcQCyXZnf32auHwHBIbNxjX46YZaaVMXun6OESrz0YXaee4h5c7MN3b9r4GOqUBsaQscEZbDeDM%2FJeClH3JfGdWoVvO9rGMlzG%2FpAMpEPSwuPWZGEAZi6AF9ORm3DQ4FiDS76k0Okvvj9kqBk4w9r53wlh3WS5VHA0OUyEShQ71UD30wftxjL9RiB0%2F%2Fui5PCHNvMZXRZR6patmHF0mmIKxIjIUjhLmP3r%2BRVZOuI5GyjpHPuptnefqC0t%2FpSHGdaf8iuxUYzomy6KL2DBu664KwV%2Fs&X-Amz-Signature=8eb3e3a0647559c9a17e26d4b4d7083ce673160379cd48465e190ba0f43a1054&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
