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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHJ6MGE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBwiy2a5LA0AYByGbZIuPXL2wiX4PBiXZxVgOcblDUlQAiEAgRn87YSsPVcVa4gNdDswlGjfJ9i1%2BqkQsd9TmkDnZtoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcmiSTvZFq%2B6DRloCrcA7g5hNh03trmtT3FObvuN0tDIw7vT4lLHJyqZGBVGQCq6aRqd4nNj1fY5cupAB4UNNb0S48QuHkN0EHYp3WDWpf5N7IWYhpDPT5AeXxSAf%2FL8XnVaWqtC3QtA4SBsZdYrl12BQOj%2Bm5FxYMPYIWcrN%2BZZTMP26MmVt1bvZ83VbkZciWpGHSp7Hhyyy894uH1wWYSAzgcQWj87WkIOAlcdWLhioFo25pyBKTHB88proVYaarDBz47Oou4pG6DTdLcbSQy7F6%2BfDPsb8srMYXbhHvp0QeaCRqV9nZ7eKvZ4Er4YkN6%2FcLUcFPdt7P2lKyC9cpXtcc1863fCz9k%2B7MGYoJPSSOSldSO5wEyk0FINLRGPwbg1cNToOYfqPNX1ygUInkWvQ%2BlmXj46Tqr%2Bnh8QoRxXKdQb2ZCHPfCKq1WiKge5QadponuwBccfxNtfVi8fQ2IBM%2FO6hITogJ9KITITqg7jzcRp3dKCGHmTCYtqshnzCDaKrtTY2%2FitdlZdwyEm3xFtP4kFGXUUT%2Fr6RA%2FNrO0iTkpAB0On%2BdMM3mJOod2Wgp0EhOO3JDO2j5r35f6DeFc4fVvkH1aQT8VNagsgsh3lgs5%2B92y6JDIoyoJjXC79ET669B8%2BY45S%2BXuMIyx678GOqUBOUXtO3zQMOkz9r620IuumptG%2F763chuEPGkvzRScNAZJGHA90pnH7O7ghhCbqA6522ku9IFscDPYnfIlDxHxtd0tSKUPfXZW7YIOsDtbCzjpiRugE0W1Hymoy93M1vPXarGzIrXA%2BribpXU%2FcvawFigrfQDeodH5ZB9ay9PDp80h8ebhO9clpGMo1NgZT4fpLp5sQSJycmYiVYLOnt5pzkKISfkC&X-Amz-Signature=d90ecc2a190b3f52fc4304bce0d507f98a6f6e5efd0077f257e729861e7df2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHJ6MGE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIBwiy2a5LA0AYByGbZIuPXL2wiX4PBiXZxVgOcblDUlQAiEAgRn87YSsPVcVa4gNdDswlGjfJ9i1%2BqkQsd9TmkDnZtoqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcmiSTvZFq%2B6DRloCrcA7g5hNh03trmtT3FObvuN0tDIw7vT4lLHJyqZGBVGQCq6aRqd4nNj1fY5cupAB4UNNb0S48QuHkN0EHYp3WDWpf5N7IWYhpDPT5AeXxSAf%2FL8XnVaWqtC3QtA4SBsZdYrl12BQOj%2Bm5FxYMPYIWcrN%2BZZTMP26MmVt1bvZ83VbkZciWpGHSp7Hhyyy894uH1wWYSAzgcQWj87WkIOAlcdWLhioFo25pyBKTHB88proVYaarDBz47Oou4pG6DTdLcbSQy7F6%2BfDPsb8srMYXbhHvp0QeaCRqV9nZ7eKvZ4Er4YkN6%2FcLUcFPdt7P2lKyC9cpXtcc1863fCz9k%2B7MGYoJPSSOSldSO5wEyk0FINLRGPwbg1cNToOYfqPNX1ygUInkWvQ%2BlmXj46Tqr%2Bnh8QoRxXKdQb2ZCHPfCKq1WiKge5QadponuwBccfxNtfVi8fQ2IBM%2FO6hITogJ9KITITqg7jzcRp3dKCGHmTCYtqshnzCDaKrtTY2%2FitdlZdwyEm3xFtP4kFGXUUT%2Fr6RA%2FNrO0iTkpAB0On%2BdMM3mJOod2Wgp0EhOO3JDO2j5r35f6DeFc4fVvkH1aQT8VNagsgsh3lgs5%2B92y6JDIoyoJjXC79ET669B8%2BY45S%2BXuMIyx678GOqUBOUXtO3zQMOkz9r620IuumptG%2F763chuEPGkvzRScNAZJGHA90pnH7O7ghhCbqA6522ku9IFscDPYnfIlDxHxtd0tSKUPfXZW7YIOsDtbCzjpiRugE0W1Hymoy93M1vPXarGzIrXA%2BribpXU%2FcvawFigrfQDeodH5ZB9ay9PDp80h8ebhO9clpGMo1NgZT4fpLp5sQSJycmYiVYLOnt5pzkKISfkC&X-Amz-Signature=cd135990ca14c7c969d83273b8434d07776b793364ddc4d1ef628d1870bd2096&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
