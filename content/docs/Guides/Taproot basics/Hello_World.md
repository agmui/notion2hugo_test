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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL2FRWC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgCxLBG5U%2BGochLbzxRd1BH%2BQiZ98Wyk0vi7pqgBjjQIgRFNUFTcB63CYXHhLLb30ov1sPKQatoehYgWkQZ53FugqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATzOq3Jt6zuJIaolircA9HIbrkydUg94pGs%2BkY7YsUdbtYPp%2B27Nj%2F3Z5I%2FAELfauHY9nNbRD7LKVkV8X4vH9U0VsBECLqOzBSIi3r4Xp6UvMizWKDPLN1JOcRy6Gn3c6%2Br5LuFCvgDuP%2FJM5%2B6TvvEtmSkTbvvJS27H1RM5hw2s6xNQdXN%2B7zKRQu8fyXoPAae2KovqG1S0rKGifxCS%2F4JCXrU%2FdobHoSeKLkVmWA9HO7aLhFGaiY5WIj6Gq3r3txGA4CK48%2FwZcL3FblCsHqff8H9AfmYQVtrAtCoQuLL2x5po2Dv38WPg3AixWbugbll0eHC4GDXK3%2F%2Fxk4Oim3cZzKbCPurjlUKvpIP6uRQ%2FDcjjd8NiN5vwdjCUyatxVPRUGz%2FF26hbqI0Xs00nvBzuFg1o2ow38d1HoCIGtyAtC2zwHhb%2B4RrhZ7GU6jgDxJ3M%2Bbvw5OdGyeYv0dpyPU6Oyl5sANPo5sm%2FxopcePSfTyXfVuiu3hDn3qH%2FJ0Fcf9fks%2FtNptzPi9OcmgveM7HhuZkB%2BuimpvAH2b64%2FZT0B8dGTtPHbZyiKsx1Iz9o4gY4kzid6sQMDTRHxXeKRLKFlqfs%2BgY7fKaiLdKRyW3zgQecQ4k8qnipuJNCek34QkmqpnpYIxi6rRjMIfjub8GOqUBDJKpN7kGZP1z%2B7%2FcQ%2FloxigNR%2FNn%2FfWU2Iv9sJx5wI4YOtIPL4rt2UM8Lb0YJul65i6aKmsnNc8ufNFpiA%2F54pAFOTpSwFvBSDvWBZEJZSI01dfTRGN4Xe2n5f%2Fe3hH6zsir7vofXQG2H88ZgDM49TXse9RF41jAUCLOdLkbU6XNuHyduKZi6LcNVbSprnVjg6zF1hmjEINqkCau26x2J%2FKc2EBw&X-Amz-Signature=92bb62b481bda2001ba5e5f8887ecf81fb1efbd0ac3161734902809832b5ba69&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL2FRWC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWgCxLBG5U%2BGochLbzxRd1BH%2BQiZ98Wyk0vi7pqgBjjQIgRFNUFTcB63CYXHhLLb30ov1sPKQatoehYgWkQZ53FugqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATzOq3Jt6zuJIaolircA9HIbrkydUg94pGs%2BkY7YsUdbtYPp%2B27Nj%2F3Z5I%2FAELfauHY9nNbRD7LKVkV8X4vH9U0VsBECLqOzBSIi3r4Xp6UvMizWKDPLN1JOcRy6Gn3c6%2Br5LuFCvgDuP%2FJM5%2B6TvvEtmSkTbvvJS27H1RM5hw2s6xNQdXN%2B7zKRQu8fyXoPAae2KovqG1S0rKGifxCS%2F4JCXrU%2FdobHoSeKLkVmWA9HO7aLhFGaiY5WIj6Gq3r3txGA4CK48%2FwZcL3FblCsHqff8H9AfmYQVtrAtCoQuLL2x5po2Dv38WPg3AixWbugbll0eHC4GDXK3%2F%2Fxk4Oim3cZzKbCPurjlUKvpIP6uRQ%2FDcjjd8NiN5vwdjCUyatxVPRUGz%2FF26hbqI0Xs00nvBzuFg1o2ow38d1HoCIGtyAtC2zwHhb%2B4RrhZ7GU6jgDxJ3M%2Bbvw5OdGyeYv0dpyPU6Oyl5sANPo5sm%2FxopcePSfTyXfVuiu3hDn3qH%2FJ0Fcf9fks%2FtNptzPi9OcmgveM7HhuZkB%2BuimpvAH2b64%2FZT0B8dGTtPHbZyiKsx1Iz9o4gY4kzid6sQMDTRHxXeKRLKFlqfs%2BgY7fKaiLdKRyW3zgQecQ4k8qnipuJNCek34QkmqpnpYIxi6rRjMIfjub8GOqUBDJKpN7kGZP1z%2B7%2FcQ%2FloxigNR%2FNn%2FfWU2Iv9sJx5wI4YOtIPL4rt2UM8Lb0YJul65i6aKmsnNc8ufNFpiA%2F54pAFOTpSwFvBSDvWBZEJZSI01dfTRGN4Xe2n5f%2Fe3hH6zsir7vofXQG2H88ZgDM49TXse9RF41jAUCLOdLkbU6XNuHyduKZi6LcNVbSprnVjg6zF1hmjEINqkCau26x2J%2FKc2EBw&X-Amz-Signature=d6b454f70ecc4c51be9f9a92817ccf0e658d25c20123ee1be9e647c238b6551c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
