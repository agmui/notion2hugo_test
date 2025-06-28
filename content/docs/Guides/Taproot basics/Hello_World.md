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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FFHHBQX%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZCqjjYjS25P%2FBIilH8hnoPRhHzaympP2Piypu8NU61AiEA63xgfZUyvdesIFwo1BxnRm%2BbcEEOKze5Y2mYRvV3I9UqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfaLpULUl6abv56HircA%2FspDsDDIas1mw6NuH5JlIWMGhoaSfFGpaB%2BMAPuxNQcoSs9vDy%2BkFMaSSQCvuRIS4g3Fo73AywzUOGOhSPxKlyARXZKeUq%2B0I50HVO%2BEGwp1YOfM525EaPhFPQaLQPCqa%2FNyh7FyFS5YvjvVhK1j10oHr5GpAswa%2Fj6rf%2F15QeDT%2BS8NsjMdPUjw4g5cq3nDdJJdHflSgvAUw%2B32h7lSFMg%2BYvqsvlMBem8bD1J3z23Y%2Bh3L6ct6SW8aaQ88JxdmbUIhW5XOR25SiDvzm0krFeAH9SbOcnL88nizwfkMMOm6iNfdtNWBHKRALdByEcaNuLqW3XurQttKgNTCg9zzaF4kGdM6LnGPSd49pXS6HFq%2BGa3EIjJ%2BRA3nvo170XJ32uxzz2c1k8Mg2EGATlr5W%2BwDZYsgDxg9z1e1Z%2BVTgwK5%2FDek5d2W%2FxA0wFljdSmIN0SV%2BoozEJwDX9LMjaBYv4Z7NapCh9JUWEu%2B92lqJ4CNDkbX%2FQvqfGjVTjpww1aeOr5xryjVxX1N%2B7fcW2kWeiH5xOgRnCl%2FTqfP0jhUURg9Tx%2F5cb3n%2B96leLUDSH3d2hfT3KcnkMijjLeGZP6ZTBGI7D82BOkWjhWkjikw7esem9vNxtBodcHpHpoMISQ%2F8IGOqUBvHnKeK7k9fM0iDnppETHLdnoign4fjiAh2E2gFTMN7n7rpGsQm31P4ZAapwuxX2Por5weTk4%2F34Ta5EC1tufXBU0SNX6HeFkNhLa3KGgZDMJlVXS%2Bny6w8hYWwnr8u48v2wOXV8652r%2Bl%2FfPZ93FORCyaQLPEuwkglTFIFgKNqgM8tA7%2Bfvw5OPGWkhJd6PJtil3xN6pCC0XXMPsbTkrKxKC%2Bmgm&X-Amz-Signature=94ece9a98d9af2022e42c9858870a29c569188e60892638c7e282b11cd70cb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FFHHBQX%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZCqjjYjS25P%2FBIilH8hnoPRhHzaympP2Piypu8NU61AiEA63xgfZUyvdesIFwo1BxnRm%2BbcEEOKze5Y2mYRvV3I9UqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfaLpULUl6abv56HircA%2FspDsDDIas1mw6NuH5JlIWMGhoaSfFGpaB%2BMAPuxNQcoSs9vDy%2BkFMaSSQCvuRIS4g3Fo73AywzUOGOhSPxKlyARXZKeUq%2B0I50HVO%2BEGwp1YOfM525EaPhFPQaLQPCqa%2FNyh7FyFS5YvjvVhK1j10oHr5GpAswa%2Fj6rf%2F15QeDT%2BS8NsjMdPUjw4g5cq3nDdJJdHflSgvAUw%2B32h7lSFMg%2BYvqsvlMBem8bD1J3z23Y%2Bh3L6ct6SW8aaQ88JxdmbUIhW5XOR25SiDvzm0krFeAH9SbOcnL88nizwfkMMOm6iNfdtNWBHKRALdByEcaNuLqW3XurQttKgNTCg9zzaF4kGdM6LnGPSd49pXS6HFq%2BGa3EIjJ%2BRA3nvo170XJ32uxzz2c1k8Mg2EGATlr5W%2BwDZYsgDxg9z1e1Z%2BVTgwK5%2FDek5d2W%2FxA0wFljdSmIN0SV%2BoozEJwDX9LMjaBYv4Z7NapCh9JUWEu%2B92lqJ4CNDkbX%2FQvqfGjVTjpww1aeOr5xryjVxX1N%2B7fcW2kWeiH5xOgRnCl%2FTqfP0jhUURg9Tx%2F5cb3n%2B96leLUDSH3d2hfT3KcnkMijjLeGZP6ZTBGI7D82BOkWjhWkjikw7esem9vNxtBodcHpHpoMISQ%2F8IGOqUBvHnKeK7k9fM0iDnppETHLdnoign4fjiAh2E2gFTMN7n7rpGsQm31P4ZAapwuxX2Por5weTk4%2F34Ta5EC1tufXBU0SNX6HeFkNhLa3KGgZDMJlVXS%2Bny6w8hYWwnr8u48v2wOXV8652r%2Bl%2FfPZ93FORCyaQLPEuwkglTFIFgKNqgM8tA7%2Bfvw5OPGWkhJd6PJtil3xN6pCC0XXMPsbTkrKxKC%2Bmgm&X-Amz-Signature=3edce6818cc8b76ad11d8a3cbd4523f22dee741235a744cdf5374678a22af48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
