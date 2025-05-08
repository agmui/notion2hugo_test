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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL733BSG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRg%2Fyl%2BGUG%2BQ0dcFDBNidMjNCYLrlOqifJPyWYkNli9AiEA70%2ByHLTUmU3HNZPUf7KVXOrX%2FytDI2cuimu6YUIu0Aoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMexleh1srLx4x%2BJ1CrcA4jnTYyc4pHbt7P43lfPzATKhlRRrKc9bDPXAt8x3bFs%2BG0s4pypPidyjtffsbtK0H8Fg10B8m8DaAcLaGwHzt9ssH7j2pjrYj1T9KE8too13WdiTgHFaI3NHfCTwbo27rKo3HFD8KCA98OdGi9JgMn6rewjJf6%2BwOAvhorzowLy%2F1hzA46h8ISaS2WwC4dgsGmFS3DnNUomH5AUgBaSpvHOY4JYC2mRzlY4fPGO6iC4kRRmz5QiHVwmtZ%2B%2FlKr1xV91AVIRO6yTvsvngAGwB4TU1s9CEKDedHhA9%2F09%2BjV%2BbzWqYEisT9v3S95hIq69afycxkMdH2vpwrMmf9YzkeKCO%2FVrYoFYv%2FdCy7Vt9dUrpF9gq9cfetk1UCP8EUwSWVW7NjNEBnPit0MRlFbe%2FON0CXx5xB9PViG%2F8ir8K0VDUiVyaPGBKv%2B8wQQ8lcXmZvhurFwp0PtEWNkdYDi4QIHMsO512V2n2dJLXAYAlZyvYjMBtrh3p4QKyRu5MF3G7mEqxeLLsgfpsgjjie6kxyVsei0Mr6JiSdFNH4JbYKn%2FfW4wE6GQZc1TH7R3gNbz2prbcMReGJa%2FgwO3Lfx1kYvxiwFPHSEUo5TpNHcRyXMt%2BwpVHoPVfGbhM1AlMN3f8cAGOqUBixY6lFoYRKdSgNRUQYgPCIEpucVMzbT4XEU9qBToUI3NoQxDWOsTDO8iaPfoTYfmcPOYQtxCMPMYeL16nZU0jiKuLwAh%2FW85daua5qmjkIEa7pbmovAipw8kWeeVCZzd07Q8kxbv1hpDW2XRIJ2Kmqo11YPofRlLJ3mmDo2mrH%2FSiSGwMFX8x5vHD9i7Lge6iJ5u445Hp0ts8e25Kg35brIZKjE4&X-Amz-Signature=9abad8b2471de4a38aad6a602da3521948619e499df684dd86c5dfabf5bad266&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL733BSG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRg%2Fyl%2BGUG%2BQ0dcFDBNidMjNCYLrlOqifJPyWYkNli9AiEA70%2ByHLTUmU3HNZPUf7KVXOrX%2FytDI2cuimu6YUIu0Aoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMexleh1srLx4x%2BJ1CrcA4jnTYyc4pHbt7P43lfPzATKhlRRrKc9bDPXAt8x3bFs%2BG0s4pypPidyjtffsbtK0H8Fg10B8m8DaAcLaGwHzt9ssH7j2pjrYj1T9KE8too13WdiTgHFaI3NHfCTwbo27rKo3HFD8KCA98OdGi9JgMn6rewjJf6%2BwOAvhorzowLy%2F1hzA46h8ISaS2WwC4dgsGmFS3DnNUomH5AUgBaSpvHOY4JYC2mRzlY4fPGO6iC4kRRmz5QiHVwmtZ%2B%2FlKr1xV91AVIRO6yTvsvngAGwB4TU1s9CEKDedHhA9%2F09%2BjV%2BbzWqYEisT9v3S95hIq69afycxkMdH2vpwrMmf9YzkeKCO%2FVrYoFYv%2FdCy7Vt9dUrpF9gq9cfetk1UCP8EUwSWVW7NjNEBnPit0MRlFbe%2FON0CXx5xB9PViG%2F8ir8K0VDUiVyaPGBKv%2B8wQQ8lcXmZvhurFwp0PtEWNkdYDi4QIHMsO512V2n2dJLXAYAlZyvYjMBtrh3p4QKyRu5MF3G7mEqxeLLsgfpsgjjie6kxyVsei0Mr6JiSdFNH4JbYKn%2FfW4wE6GQZc1TH7R3gNbz2prbcMReGJa%2FgwO3Lfx1kYvxiwFPHSEUo5TpNHcRyXMt%2BwpVHoPVfGbhM1AlMN3f8cAGOqUBixY6lFoYRKdSgNRUQYgPCIEpucVMzbT4XEU9qBToUI3NoQxDWOsTDO8iaPfoTYfmcPOYQtxCMPMYeL16nZU0jiKuLwAh%2FW85daua5qmjkIEa7pbmovAipw8kWeeVCZzd07Q8kxbv1hpDW2XRIJ2Kmqo11YPofRlLJ3mmDo2mrH%2FSiSGwMFX8x5vHD9i7Lge6iJ5u445Hp0ts8e25Kg35brIZKjE4&X-Amz-Signature=0ba16f3b9826ee6ae344c83f47cf9beb82d3abe6ec21424cca8a942a81a84a91&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
