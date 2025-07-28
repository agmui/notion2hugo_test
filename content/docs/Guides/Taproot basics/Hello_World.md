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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6APX7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCyBlFmDPYpXWBiizTwwWRqqzBOyEYqK89hXb1hQGe0EwIhAIEBPBeS4I9nYNLVJW%2FoSd8TeJKi%2BUm5NnD0acxJ%2FDl%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNwkTM3zjR736tx94q3AOACoUrXlJoJitPJu3YLRfO14to832S1ngVF3FLmRtg%2FWCBOgwLiSzNh2gnRWl4YMNBjT6DD2nMS9ttigEecFZkRd6wdle7VCZjhaF54xn52zI72y3tQVbZCfQ%2BS5ydl4nZawZpK4vzpXafUN3xllarXJc1NFgeK%2FslIme51IcOzrSyVU5P5sdiho6JQf1Ib0zZpuZTbaJs2MmbEDS%2FIz%2FDsk0Qyhgi5iRzCyqEEoQo2XISsyylep%2FDiTGv81ynk%2BLMcVZ%2B9O%2FEasWo%2FYnmAzSZCfckXzznDraZLsNtKWxsaVePWrLSshey3dPBgEuUReuA6hWE0hA4P1JLMGbNPATsDQ1YIiKHcNA1BMW9tVBYyxmteEziOQ%2FY4iQPsvy8HL9mQK6Ih1nd%2BtRcA9oCrBML2gbjBkew3dGGYbKFsHNesl64QxjCUi6uJGA2pSB5Senk6QcGc28H99tJ3MMNBubsGA9MlWEoUCPnAMfJVHo8698axSdTNgIDb%2B8ROzYw5HH4OSjctqOYz3ERe81UCDPOQD1KRR5xWDxciowzbetQ8Lz%2FGehOLVIcei5SK0BAu%2BjLHa%2FaV4BLC2XaiKQeH7Ao7kTswHpLQnpRkXzZA%2BNFjvLHmBCMLG3aMgCznDDxjp3EBjqkAQiPTE3206lxRUR99DAy9YW7fQLUQ91M5lzu8qaubv9PwQLshSzuCsu1hhIi%2B%2Fmjb%2Fx1zzmr%2B2abQqZ%2FRzdO7Kw7jBycN4U7FHZA7nfCFz4xqdQGCCenb6fkDiQcCtbRzif3dcLYZ%2FDGB4Msp9N%2BOcpRrHfoBdqBzqyJE6MuAKOrsDhEa8VSvViHaHsBo7xCWaK5l%2FeDNHCYuXZ5cOa6mvIDNixl&X-Amz-Signature=03f155f759fc4b4461ec49d89c313546130088101f55a15b389d2eafa3a92449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6APX7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCyBlFmDPYpXWBiizTwwWRqqzBOyEYqK89hXb1hQGe0EwIhAIEBPBeS4I9nYNLVJW%2FoSd8TeJKi%2BUm5NnD0acxJ%2FDl%2BKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNwkTM3zjR736tx94q3AOACoUrXlJoJitPJu3YLRfO14to832S1ngVF3FLmRtg%2FWCBOgwLiSzNh2gnRWl4YMNBjT6DD2nMS9ttigEecFZkRd6wdle7VCZjhaF54xn52zI72y3tQVbZCfQ%2BS5ydl4nZawZpK4vzpXafUN3xllarXJc1NFgeK%2FslIme51IcOzrSyVU5P5sdiho6JQf1Ib0zZpuZTbaJs2MmbEDS%2FIz%2FDsk0Qyhgi5iRzCyqEEoQo2XISsyylep%2FDiTGv81ynk%2BLMcVZ%2B9O%2FEasWo%2FYnmAzSZCfckXzznDraZLsNtKWxsaVePWrLSshey3dPBgEuUReuA6hWE0hA4P1JLMGbNPATsDQ1YIiKHcNA1BMW9tVBYyxmteEziOQ%2FY4iQPsvy8HL9mQK6Ih1nd%2BtRcA9oCrBML2gbjBkew3dGGYbKFsHNesl64QxjCUi6uJGA2pSB5Senk6QcGc28H99tJ3MMNBubsGA9MlWEoUCPnAMfJVHo8698axSdTNgIDb%2B8ROzYw5HH4OSjctqOYz3ERe81UCDPOQD1KRR5xWDxciowzbetQ8Lz%2FGehOLVIcei5SK0BAu%2BjLHa%2FaV4BLC2XaiKQeH7Ao7kTswHpLQnpRkXzZA%2BNFjvLHmBCMLG3aMgCznDDxjp3EBjqkAQiPTE3206lxRUR99DAy9YW7fQLUQ91M5lzu8qaubv9PwQLshSzuCsu1hhIi%2B%2Fmjb%2Fx1zzmr%2B2abQqZ%2FRzdO7Kw7jBycN4U7FHZA7nfCFz4xqdQGCCenb6fkDiQcCtbRzif3dcLYZ%2FDGB4Msp9N%2BOcpRrHfoBdqBzqyJE6MuAKOrsDhEa8VSvViHaHsBo7xCWaK5l%2FeDNHCYuXZ5cOa6mvIDNixl&X-Amz-Signature=32bee2d3644ad80b3f7408b08d0d13c50f7b1d4f065401aa95191a31af3ce149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
