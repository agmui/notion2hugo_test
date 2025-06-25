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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLGURVF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDwY7dC8Rne9RACO8DKcACyl8U%2Bwg62nnPVOLYnNEjJEAiEA3w4AaCZfYNKThS9JT3ZvTWhdIuutYLIn%2Fnvp52tUvRUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCJzQ%2BvX%2BO2s7nVpkCrcAym053lnL%2FR6FWbflKjJKPPckxx5zUnpMVRO%2B7eLaDSO9He7fLSeZBeqFoH1LKoXbKB68BcfY%2FI9NGPxpUqmjlRA4M%2FFdGG3%2FE5LKIPzkpxB0OrvYg9AwxyHH3bvZBCEESYRIN0UxIy8ZE%2F4T%2F3EE0DBWodNrQrj71Y8tVbW%2Bh3%2BMhqIuwFcNLsckg9GNanLDrk%2B3OmiXqtJtzq%2B%2FvkO%2FqycEJAdALsbpOs9kRcCzj5VEOHIngbdf1hLooyyWDWHFPipGmB224rCG2IWw%2BoRA5YMH%2BhjziGh3gLm%2FtDXWHuNFcLbROt1HFzp%2FCRhecn6KVllZo%2FffAsiMEFtRuKldWQMvuzn9NbGtgo%2Fs%2FI0SiAxCN4b2qgarH3UCsalYJYjCWI8psXE8DMLX4rn0U4U0ms%2BF7QuBIODduDzo%2BPeD%2Bjp8P5ZcvNhGsnCjhuEvOM8C%2BPFuWMGzx7xaEfKYZ3TsxH2HeEMFo3Yn9BfcX4WsMydRICpssOePyUe%2Bx%2FXJYoz4DuK4997w7h0%2F4sZ2YuhRWxDT8HShln5HM9%2F95zov38kghyX8G5c7R9G4tA1dv2ero6sfgTpDWt2vdKuCzw1SGf%2BEbeDqZzGphUxJJp%2FselAUfcRrzL6nt%2Bi6z5bMLrv78IGOqUBEdmarbAYnhf6RUPKlpGy34TcUXplM4tmBQhIulYuTNZXvx2cWsjbw059WrJXkjIUZ8uxdc%2Fo4vECFPMUx%2FVSbb11toTMrQ6z8guoozqvmyZv46GdwrYhIYjFI0kZhCtK8LZPnGmiDluQCoqd0Q%2BB7I3aaxwmcMro6Qkbo28JFeYb7cnTttr0vy7EuJMftrmHDxseEnAMBx09D%2BtCG1K7gj%2B5m7x7&X-Amz-Signature=add418c0ba3ba3e0bedfd347fec7c21222948d4b36093d89bef6b1d13be5e448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDLGURVF%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T132651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDwY7dC8Rne9RACO8DKcACyl8U%2Bwg62nnPVOLYnNEjJEAiEA3w4AaCZfYNKThS9JT3ZvTWhdIuutYLIn%2Fnvp52tUvRUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCJzQ%2BvX%2BO2s7nVpkCrcAym053lnL%2FR6FWbflKjJKPPckxx5zUnpMVRO%2B7eLaDSO9He7fLSeZBeqFoH1LKoXbKB68BcfY%2FI9NGPxpUqmjlRA4M%2FFdGG3%2FE5LKIPzkpxB0OrvYg9AwxyHH3bvZBCEESYRIN0UxIy8ZE%2F4T%2F3EE0DBWodNrQrj71Y8tVbW%2Bh3%2BMhqIuwFcNLsckg9GNanLDrk%2B3OmiXqtJtzq%2B%2FvkO%2FqycEJAdALsbpOs9kRcCzj5VEOHIngbdf1hLooyyWDWHFPipGmB224rCG2IWw%2BoRA5YMH%2BhjziGh3gLm%2FtDXWHuNFcLbROt1HFzp%2FCRhecn6KVllZo%2FffAsiMEFtRuKldWQMvuzn9NbGtgo%2Fs%2FI0SiAxCN4b2qgarH3UCsalYJYjCWI8psXE8DMLX4rn0U4U0ms%2BF7QuBIODduDzo%2BPeD%2Bjp8P5ZcvNhGsnCjhuEvOM8C%2BPFuWMGzx7xaEfKYZ3TsxH2HeEMFo3Yn9BfcX4WsMydRICpssOePyUe%2Bx%2FXJYoz4DuK4997w7h0%2F4sZ2YuhRWxDT8HShln5HM9%2F95zov38kghyX8G5c7R9G4tA1dv2ero6sfgTpDWt2vdKuCzw1SGf%2BEbeDqZzGphUxJJp%2FselAUfcRrzL6nt%2Bi6z5bMLrv78IGOqUBEdmarbAYnhf6RUPKlpGy34TcUXplM4tmBQhIulYuTNZXvx2cWsjbw059WrJXkjIUZ8uxdc%2Fo4vECFPMUx%2FVSbb11toTMrQ6z8guoozqvmyZv46GdwrYhIYjFI0kZhCtK8LZPnGmiDluQCoqd0Q%2BB7I3aaxwmcMro6Qkbo28JFeYb7cnTttr0vy7EuJMftrmHDxseEnAMBx09D%2BtCG1K7gj%2B5m7x7&X-Amz-Signature=f9f4aa61d4322ee14c8bc6db887ff74c010cab1c5ff445441fdcae5c9e82e756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
