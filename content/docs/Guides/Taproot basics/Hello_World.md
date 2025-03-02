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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRULNO6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDopayGO7kVSyP6yAdOvDcVUkQJ9n5OUr5Arjx2s9gb9wIhAJP684yIr40Aq3mouvqW9riEjJz01Ne5nH4GidqJbC58KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9pQURTc6qXCdnydQq3APk71JLGY1Ptfmrq%2FgoXbLCc7wfONK8MWtZZMWD6Ts5IDibJtInbMxUnoFjRrImbvOgI%2Bf5ucDaB4LWftLCKthJeCAVcsBqmCu2qHpNL%2BIUzlKc1ijyE1SU8QTb5uArDQJfuvhCxCE8gqfuUorp%2FA2elkyR%2BzWbEti1V%2FvMeKS6qY9KgGAw0Ut2aLcPBBmU9qOxIjyoXcyq0fXBfNpphZzBUL9J3kSq6OL54zXyJ%2FZKcELka9h8r1LwaSgc6dZJBh5dsgnfmITW055pNC8NNF%2BrPV1GJW3uKSvE2F7k7RymdgbA%2BJ6FIJFZAu7DRGWod0ZTneyVfKyP0mRHiJXswTeHX5%2FHHgMvHR%2FvuSoIKHSuq3K39KvdINdoFfxc2wkWEm7PjQwbsJ1zYRgyNaPVUiU6rHGGZiQ4VEiqqebG%2FVs6SwylU%2Fso5L7YkWrgVf9T9ICIFCKTDNxo7i3LUbe4ki%2F9WvmMalf0qXwTp%2BPBh8VUihfSrvCuK9%2Bv2nmZq6QlSzqGzo4gdbEkM3bRLnuMJiqJbhveNwNRVC9JbdQvuaUZuFVy9upnHrEDwf1N%2BeoPdAtTS1S652M1QGX6REeKFcI4p%2F8nW8Ne3LEUh1L64SqAjUFoDThXdw6g8d2OdDCP9o6%2BBjqkAaCvm%2FIecKF0FRGWD715VFpYx78ixr4pZ2xJUDNbVsgheujPPn7hRgRqCdOlTE%2B3yKoiT%2Fho95MQo5IBkCru1MFeLuU2Wdq%2Bc36%2FjrwCXsToX6RvzlgPSZ0%2Badlf%2BUxw%2BjrhAkYPXRmdFeSl1khQaEg0BQiFSF3owJWAMmk15RLrxZzSiw4F6kv2i68kmnk6ZpL%2FuBHZjjPQKL%2FsEV0aoMkdKwLP&X-Amz-Signature=232660b1d851235d8ef0ced83bb181430e29071490f0c2b7bcc8ae784161db93&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRULNO6%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T031838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDopayGO7kVSyP6yAdOvDcVUkQJ9n5OUr5Arjx2s9gb9wIhAJP684yIr40Aq3mouvqW9riEjJz01Ne5nH4GidqJbC58KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9pQURTc6qXCdnydQq3APk71JLGY1Ptfmrq%2FgoXbLCc7wfONK8MWtZZMWD6Ts5IDibJtInbMxUnoFjRrImbvOgI%2Bf5ucDaB4LWftLCKthJeCAVcsBqmCu2qHpNL%2BIUzlKc1ijyE1SU8QTb5uArDQJfuvhCxCE8gqfuUorp%2FA2elkyR%2BzWbEti1V%2FvMeKS6qY9KgGAw0Ut2aLcPBBmU9qOxIjyoXcyq0fXBfNpphZzBUL9J3kSq6OL54zXyJ%2FZKcELka9h8r1LwaSgc6dZJBh5dsgnfmITW055pNC8NNF%2BrPV1GJW3uKSvE2F7k7RymdgbA%2BJ6FIJFZAu7DRGWod0ZTneyVfKyP0mRHiJXswTeHX5%2FHHgMvHR%2FvuSoIKHSuq3K39KvdINdoFfxc2wkWEm7PjQwbsJ1zYRgyNaPVUiU6rHGGZiQ4VEiqqebG%2FVs6SwylU%2Fso5L7YkWrgVf9T9ICIFCKTDNxo7i3LUbe4ki%2F9WvmMalf0qXwTp%2BPBh8VUihfSrvCuK9%2Bv2nmZq6QlSzqGzo4gdbEkM3bRLnuMJiqJbhveNwNRVC9JbdQvuaUZuFVy9upnHrEDwf1N%2BeoPdAtTS1S652M1QGX6REeKFcI4p%2F8nW8Ne3LEUh1L64SqAjUFoDThXdw6g8d2OdDCP9o6%2BBjqkAaCvm%2FIecKF0FRGWD715VFpYx78ixr4pZ2xJUDNbVsgheujPPn7hRgRqCdOlTE%2B3yKoiT%2Fho95MQo5IBkCru1MFeLuU2Wdq%2Bc36%2FjrwCXsToX6RvzlgPSZ0%2Badlf%2BUxw%2BjrhAkYPXRmdFeSl1khQaEg0BQiFSF3owJWAMmk15RLrxZzSiw4F6kv2i68kmnk6ZpL%2FuBHZjjPQKL%2FsEV0aoMkdKwLP&X-Amz-Signature=bdffae6466af76c637c93375adb2295cdc602825626a5bfac151cedafce359ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
