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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQG7QGC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO4%2FQKxYli8jSuQQeoUUoji64VV%2Bsw4DNZKP3ruv9x8QIhANwl9%2FbR4IoeRSQWxmyMU6Upcgr7yPQEOmDqXnwTEjqfKv8DCD0QABoMNjM3NDIzMTgzODA1IgyEqcSMbTSqj7ztooIq3AMlkIWUMezUH6Huszy5%2FbVVg6PFrEt6MYla9esG2YxfU18qi6tF1YyKaLIRamCD3VqJu8AqeX0ov9CVIui%2FfozsdDEDwZHLsm%2F7BbsPzy6kQYl0qhMV%2BQed63hF0D7au8cnVAsxXhKsRFsqOgKGbrAhnFk79BBm6XMEfS7%2BajMQ9Du5d%2B4Zn0sAvg3YwDAeHC4f%2B7SDQZJfBo9HDXQqngmnAD05Ka69y43NmICeQOcSo%2BIjD6sNoiKi8Z5PRukDcOK4GZy7yaOeBtxRvH%2Fxt7gQ%2F%2B2BbEz%2FUp76iOolivugCpgdRswXfqGayvurs8ugvrhGmnJZAWVP8Jk4lyep4K3r3lw%2BQagq22gPj2RASsL8e2y%2FU56CYEeXsAV5x46fIGWuSB23K6hUfT0pZDZQOa1n98VWwpZpQG7p0%2BOm5zPEuM0zSlpJZXl2fMRU8NsiV%2FgGPj%2FyFxAuSU49LioF%2B%2BiTKxaGiJ%2B5PnCfAoz91Tps2c8IPOSofTSq4OiXvcJdSNEd60B7sbMMlLw2cLvCLtsBTkDVApQV%2F43d6ErY96eYR%2FWehm%2BRHzjuQh39iDTgVeUKe2KncFlTEql5Kr8TyQJDfmSHJybI6mblxL6R9IvWN07CFtQuEJfqtnIlCDDcqrHABjqkAfp%2FI86ohy570%2B8V52jdugTyj3YRcwZ9G9FOn8a5deUnZ0ITL%2FMxrqfKfD0hUfxy1n%2FRJfbhYa2hBhB5W08GysE6xlqIsJujPsLrnC7Cee14oVx4LbPe8nFCx9u6KuAzHn%2F0p3KEgQa4NwbHk5Y4l14Rq0PMIUCSVmG4i5kQDxKxpG0hDFJliCoeFD3A5ZiiJgRh79RKl5%2BXZ70lhemrvnvCtSM3&X-Amz-Signature=74257ec86ee50a32c1d6d4a8e5bb83ec008b8976397409d30426e449591a393f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQG7QGC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO4%2FQKxYli8jSuQQeoUUoji64VV%2Bsw4DNZKP3ruv9x8QIhANwl9%2FbR4IoeRSQWxmyMU6Upcgr7yPQEOmDqXnwTEjqfKv8DCD0QABoMNjM3NDIzMTgzODA1IgyEqcSMbTSqj7ztooIq3AMlkIWUMezUH6Huszy5%2FbVVg6PFrEt6MYla9esG2YxfU18qi6tF1YyKaLIRamCD3VqJu8AqeX0ov9CVIui%2FfozsdDEDwZHLsm%2F7BbsPzy6kQYl0qhMV%2BQed63hF0D7au8cnVAsxXhKsRFsqOgKGbrAhnFk79BBm6XMEfS7%2BajMQ9Du5d%2B4Zn0sAvg3YwDAeHC4f%2B7SDQZJfBo9HDXQqngmnAD05Ka69y43NmICeQOcSo%2BIjD6sNoiKi8Z5PRukDcOK4GZy7yaOeBtxRvH%2Fxt7gQ%2F%2B2BbEz%2FUp76iOolivugCpgdRswXfqGayvurs8ugvrhGmnJZAWVP8Jk4lyep4K3r3lw%2BQagq22gPj2RASsL8e2y%2FU56CYEeXsAV5x46fIGWuSB23K6hUfT0pZDZQOa1n98VWwpZpQG7p0%2BOm5zPEuM0zSlpJZXl2fMRU8NsiV%2FgGPj%2FyFxAuSU49LioF%2B%2BiTKxaGiJ%2B5PnCfAoz91Tps2c8IPOSofTSq4OiXvcJdSNEd60B7sbMMlLw2cLvCLtsBTkDVApQV%2F43d6ErY96eYR%2FWehm%2BRHzjuQh39iDTgVeUKe2KncFlTEql5Kr8TyQJDfmSHJybI6mblxL6R9IvWN07CFtQuEJfqtnIlCDDcqrHABjqkAfp%2FI86ohy570%2B8V52jdugTyj3YRcwZ9G9FOn8a5deUnZ0ITL%2FMxrqfKfD0hUfxy1n%2FRJfbhYa2hBhB5W08GysE6xlqIsJujPsLrnC7Cee14oVx4LbPe8nFCx9u6KuAzHn%2F0p3KEgQa4NwbHk5Y4l14Rq0PMIUCSVmG4i5kQDxKxpG0hDFJliCoeFD3A5ZiiJgRh79RKl5%2BXZ70lhemrvnvCtSM3&X-Amz-Signature=43a67e93a4a0f710a6e46b9ad12df399a748390ad567c16f35bb7734068899d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
