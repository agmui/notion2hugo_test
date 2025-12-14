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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5L6A3K%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFLZTtWNr0JdQlfzj%2BmuxBDwQNVcRADlJ4gqjJ5aa2ulAiEAql89Hp9zLAvGV%2FRxYO3SKNCYmwNbtFUzAGobqUdQv8Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL377tEq5cSVtjLx4SrcA6QrskT%2BBHnvHcEHY6tetqJyD582azQWks2hNdqhLq2L%2B%2BvbNo1gVPpG%2F1T8dgQ90lA84k5jr0PpuoM5WEpT6XOcLNFozGIVpmGohUiynoheOmqDwD7e1uGmN3QrqeOONc6LKAv2hYGWf5ShXzRZ2X%2FoW86cbt5HCBm2%2Bu%2BpDWHlEpkXso6g7C0kOsnFpCDaja%2F3oMfuzx%2FrHaJDu2xgwIcqr5dVApgbjkJ0suuz3XE5AKtvVLdSzTucNh20p4%2FfSIVGYe%2BGhlNEgA6e4wjxy5QeLK83twNnApqGw58JPbDiJoUzx7kZ%2BLZOvxBIvTqkZdmtbjZE2ZnX21ccfZe%2Bwqnmuge0hAddeIgBi8mQTcC9fWTHoqE33FSy35y6%2Bai0cpYb8Qzs3soPqgec5sHaVvzq6ZU26ZPVLlKkdYLw4jSW27TS7%2BKmufVgoV38Ten3xvJR%2FgAG2ayZsEzWLZDBbmmBcl9jqid2N47S7r%2BLuSPFIb5A%2FCU1gRWqASlU9g9w4IxOKR%2BCOXSSVHZxpV5yS55DTWGrs3iuZACVYCqopWw0LmXXJFV02%2BDYuBfOjneqUW50ZX%2BOQ1oSDCOCi%2B2mVKOHTeY78Gioz1Ll%2BnMcF1VPn7HRW880lw0c6hpCMKeW%2BMkGOqUBQoyF3uF9iJHttLGhcnOevat%2BD6W%2F8TMU8WVdsJ9dd%2FjImL9GQYY%2BGinBY%2B58Rw3FCX9yObhWnXqmRAbWjwtREzxrV41%2FFwRodG8lLNWS8J3NG5WBT8mY%2B3tXltcGcZg6%2BHJP7VE2n6dUKGIYCMu9HYwmADrwpf1LyZsSyVg4Z67r%2FAgUk7d30QDt4wapzvwroclpVzdLkRKKf6ir57QTZvCQ3d9i&X-Amz-Signature=34a69311164b910c543d4d5b6767eeec6f9fbb84d39b74d820ca542a17705c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP5L6A3K%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFLZTtWNr0JdQlfzj%2BmuxBDwQNVcRADlJ4gqjJ5aa2ulAiEAql89Hp9zLAvGV%2FRxYO3SKNCYmwNbtFUzAGobqUdQv8Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL377tEq5cSVtjLx4SrcA6QrskT%2BBHnvHcEHY6tetqJyD582azQWks2hNdqhLq2L%2B%2BvbNo1gVPpG%2F1T8dgQ90lA84k5jr0PpuoM5WEpT6XOcLNFozGIVpmGohUiynoheOmqDwD7e1uGmN3QrqeOONc6LKAv2hYGWf5ShXzRZ2X%2FoW86cbt5HCBm2%2Bu%2BpDWHlEpkXso6g7C0kOsnFpCDaja%2F3oMfuzx%2FrHaJDu2xgwIcqr5dVApgbjkJ0suuz3XE5AKtvVLdSzTucNh20p4%2FfSIVGYe%2BGhlNEgA6e4wjxy5QeLK83twNnApqGw58JPbDiJoUzx7kZ%2BLZOvxBIvTqkZdmtbjZE2ZnX21ccfZe%2Bwqnmuge0hAddeIgBi8mQTcC9fWTHoqE33FSy35y6%2Bai0cpYb8Qzs3soPqgec5sHaVvzq6ZU26ZPVLlKkdYLw4jSW27TS7%2BKmufVgoV38Ten3xvJR%2FgAG2ayZsEzWLZDBbmmBcl9jqid2N47S7r%2BLuSPFIb5A%2FCU1gRWqASlU9g9w4IxOKR%2BCOXSSVHZxpV5yS55DTWGrs3iuZACVYCqopWw0LmXXJFV02%2BDYuBfOjneqUW50ZX%2BOQ1oSDCOCi%2B2mVKOHTeY78Gioz1Ll%2BnMcF1VPn7HRW880lw0c6hpCMKeW%2BMkGOqUBQoyF3uF9iJHttLGhcnOevat%2BD6W%2F8TMU8WVdsJ9dd%2FjImL9GQYY%2BGinBY%2B58Rw3FCX9yObhWnXqmRAbWjwtREzxrV41%2FFwRodG8lLNWS8J3NG5WBT8mY%2B3tXltcGcZg6%2BHJP7VE2n6dUKGIYCMu9HYwmADrwpf1LyZsSyVg4Z67r%2FAgUk7d30QDt4wapzvwroclpVzdLkRKKf6ir57QTZvCQ3d9i&X-Amz-Signature=b6c5d703abc804226b21d1ac3dd1931a140e15a30ffbd0c63a6371410d0cd966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
