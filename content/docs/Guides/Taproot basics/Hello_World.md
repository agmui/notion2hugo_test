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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLPYHNM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCoD3K0cQuAvDZ8%2B9slMhFyYMaR79ekT0r7QAhiJ0NThgIgLDNe6bSqJRZtRdAxWLmB3ysNGbsgGaGeH51kzcDOsVAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF7Vhk2kec%2BJo4CfqCrcAxZuRlbmkbXPCIL%2FKJwp5UlQVWLAibP50WTXGmQzWbNPSTm6zRoHEuYqabpasenWNyImqe4Co1eVCTew%2BUD6Ep877MX0AA2pNrlcPFZsHy8THQAQSm3jW4YO1tpM4OOsYBhFtLHQY%2Fdsrmj3D6K03dR9fBCr5nuC9xiHwleWy%2F4MkOuIbwlRSqqAZ0ZZ6WzV0ltX7KX%2Btbubh%2Fx%2F4FfS3%2FzJ5jinCQ2tevKCX07S2rRWaexUt%2B0NMMOhv8lBzj2KrLaN5e8dGTFyplbzBfNd7r1avd0bc9k9X1eRFvXB0YunvBW1g0ueNQeQuIlXQD%2B90Z5y47jxTDPjMYzfNQ6LQlkf61QUzxhbc6hfX7xT%2BNE63QcPWvGVfPvGYPAYkNE387cvcAdaOrvDs%2FOPAjTeyFRNf%2FFdtaRoYFa09BLH7ZMBIc3rFW4LaOdBsj59cQ5kEQbK98RKN7cwSDSAAwMD6S7LrFpS00%2BHS1XHLWgeyN%2FeYCFdG165KCsFC%2Frtu1CYICgOHK2eCIBQDHzhKC%2FWRTj6bNleDlhDKt9iRPiSbIzQf%2BC9BcMhyZlf7WtxNprZ9GgB9NjmFQjX9Q%2FqF3Hl3qj9gvU89SA%2BPVae0RzDvi7KvE6nDC6LS9pyvO37MMTooMMGOqUBMVGriMmYSY9NUJ7CcECmkUt%2FDOFqeaMivKiFMewl4w%2BFmEFNg01UJnoAEIC5bCywdGHqay1BL0cVFDlraLBtJKBBXgvTk3xo36AOrIkTk906nBNuR%2BdQEKE6XPP%2Brxg2b0hilND3oCh8AONS4g31PtLWFGvzwDXtkhFWiJ%2BqxzCgr7IPy%2FXEv0WbrucXYr0%2FH6Xe%2FscQ4gKC1akP8uX9anuC7vS%2F&X-Amz-Signature=ee06952eed70dffd4d1656c53c58c9af8f691f382af6bea8ac68df589d78d913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLPYHNM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCoD3K0cQuAvDZ8%2B9slMhFyYMaR79ekT0r7QAhiJ0NThgIgLDNe6bSqJRZtRdAxWLmB3ysNGbsgGaGeH51kzcDOsVAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDF7Vhk2kec%2BJo4CfqCrcAxZuRlbmkbXPCIL%2FKJwp5UlQVWLAibP50WTXGmQzWbNPSTm6zRoHEuYqabpasenWNyImqe4Co1eVCTew%2BUD6Ep877MX0AA2pNrlcPFZsHy8THQAQSm3jW4YO1tpM4OOsYBhFtLHQY%2Fdsrmj3D6K03dR9fBCr5nuC9xiHwleWy%2F4MkOuIbwlRSqqAZ0ZZ6WzV0ltX7KX%2Btbubh%2Fx%2F4FfS3%2FzJ5jinCQ2tevKCX07S2rRWaexUt%2B0NMMOhv8lBzj2KrLaN5e8dGTFyplbzBfNd7r1avd0bc9k9X1eRFvXB0YunvBW1g0ueNQeQuIlXQD%2B90Z5y47jxTDPjMYzfNQ6LQlkf61QUzxhbc6hfX7xT%2BNE63QcPWvGVfPvGYPAYkNE387cvcAdaOrvDs%2FOPAjTeyFRNf%2FFdtaRoYFa09BLH7ZMBIc3rFW4LaOdBsj59cQ5kEQbK98RKN7cwSDSAAwMD6S7LrFpS00%2BHS1XHLWgeyN%2FeYCFdG165KCsFC%2Frtu1CYICgOHK2eCIBQDHzhKC%2FWRTj6bNleDlhDKt9iRPiSbIzQf%2BC9BcMhyZlf7WtxNprZ9GgB9NjmFQjX9Q%2FqF3Hl3qj9gvU89SA%2BPVae0RzDvi7KvE6nDC6LS9pyvO37MMTooMMGOqUBMVGriMmYSY9NUJ7CcECmkUt%2FDOFqeaMivKiFMewl4w%2BFmEFNg01UJnoAEIC5bCywdGHqay1BL0cVFDlraLBtJKBBXgvTk3xo36AOrIkTk906nBNuR%2BdQEKE6XPP%2Brxg2b0hilND3oCh8AONS4g31PtLWFGvzwDXtkhFWiJ%2BqxzCgr7IPy%2FXEv0WbrucXYr0%2FH6Xe%2FscQ4gKC1akP8uX9anuC7vS%2F&X-Amz-Signature=001bc17a13a6726096f1a9d4a64f565f48f961d3bc717b5fd3bb68c0046e3625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
