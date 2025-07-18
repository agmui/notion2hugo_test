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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BB7T4Q%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCbMbSrDc8mvB0Zx%2FiH0RFZGhTHRvDLHz%2FX2t4N1ib%2FYAIgQv2BwQPErJe2HssJNqSXgStgGYPMqiVrn6ypZ8t5N10qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2FkfUo3ijCOmXhyrcA6Fp7onZ%2FCP8Ijoksq%2FpF4242WHYnt52B%2BarSwripSNzXmie9eifLWi1Qh%2Fy7S2%2FfgKERUrhqG1AtfagScbiaIKlf3jeunJYJ5ypTa%2FtzHAwHIV2QgOG0eaR3fYlfEaDU0JVhw8mQo8hqiXILVNhQxLI5Y76XbtMvipmEaGd2mHaP9oQBw%2BkMPNEOvaE%2F2aIGLmMF9W2NrsENX7PdnlIGQtLUW8bA1iR3kQ2bYmwo6%2FwT3DAtg5lxVBvGsL0Frlwo2Ki1kOOm5jklLKUzMTu3%2FRbUb981R7AAXMV%2FLM%2F1SCLf1nLkI8vlvQW90CW1o3nlkUjpQK17b8dg39gpq8Huu4i2Dr1qcTThfx2OWBmtwQZ6gt6DkYMPICY1IT1xISE5m9ll%2B%2FbdDtyWAZtLKl9bVDnACddAExCzIi9Hy%2FQFTLGKtBQ7mP4P9N54PfD9wOW%2BH1OntvNac3q1Jreqa2x0QXGN3mXJtoVj6Y%2FcTmfVwctqwVbIkMHmXg3BGOMme%2BT%2BIzaqbap5T%2F5y8v6OFIWD1rtdW32wZmvh0Tl4tY%2BYFJDW30qsXAnobNayjwmAmvfI3o%2BK%2B6umd0a0AX%2BtBrF%2BVYwS%2FCz1bSjJwvzDVTrynELnKJkxUJJjjEfvPciMLvQ6MMGOqUB0VGGPW66xxRPc5%2FxpDtu9acwttHpqbTY5DHiBFWjUa1tRv5Ey9sDYeXtPvzV6HbtM3vmxduF4OR%2BdXCNNjDni6146scLVug7q88HLgWMRSBiumfzTnQvnnzjqgLs0fYcDaw3q%2B%2BZqZ8traAMRYA5we%2FIuVd%2BSpp5VHUQI6AaoJWsHm4v7UVSH9JI1EKknSeIxbj8XYdSNgyzq7Ou07AmW0abVKql&X-Amz-Signature=42ca847e0eaacc2acb5af1a97dcfadaaba846b62a3f876082182d7be2bd922e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7BB7T4Q%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCbMbSrDc8mvB0Zx%2FiH0RFZGhTHRvDLHz%2FX2t4N1ib%2FYAIgQv2BwQPErJe2HssJNqSXgStgGYPMqiVrn6ypZ8t5N10qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2FkfUo3ijCOmXhyrcA6Fp7onZ%2FCP8Ijoksq%2FpF4242WHYnt52B%2BarSwripSNzXmie9eifLWi1Qh%2Fy7S2%2FfgKERUrhqG1AtfagScbiaIKlf3jeunJYJ5ypTa%2FtzHAwHIV2QgOG0eaR3fYlfEaDU0JVhw8mQo8hqiXILVNhQxLI5Y76XbtMvipmEaGd2mHaP9oQBw%2BkMPNEOvaE%2F2aIGLmMF9W2NrsENX7PdnlIGQtLUW8bA1iR3kQ2bYmwo6%2FwT3DAtg5lxVBvGsL0Frlwo2Ki1kOOm5jklLKUzMTu3%2FRbUb981R7AAXMV%2FLM%2F1SCLf1nLkI8vlvQW90CW1o3nlkUjpQK17b8dg39gpq8Huu4i2Dr1qcTThfx2OWBmtwQZ6gt6DkYMPICY1IT1xISE5m9ll%2B%2FbdDtyWAZtLKl9bVDnACddAExCzIi9Hy%2FQFTLGKtBQ7mP4P9N54PfD9wOW%2BH1OntvNac3q1Jreqa2x0QXGN3mXJtoVj6Y%2FcTmfVwctqwVbIkMHmXg3BGOMme%2BT%2BIzaqbap5T%2F5y8v6OFIWD1rtdW32wZmvh0Tl4tY%2BYFJDW30qsXAnobNayjwmAmvfI3o%2BK%2B6umd0a0AX%2BtBrF%2BVYwS%2FCz1bSjJwvzDVTrynELnKJkxUJJjjEfvPciMLvQ6MMGOqUB0VGGPW66xxRPc5%2FxpDtu9acwttHpqbTY5DHiBFWjUa1tRv5Ey9sDYeXtPvzV6HbtM3vmxduF4OR%2BdXCNNjDni6146scLVug7q88HLgWMRSBiumfzTnQvnnzjqgLs0fYcDaw3q%2B%2BZqZ8traAMRYA5we%2FIuVd%2BSpp5VHUQI6AaoJWsHm4v7UVSH9JI1EKknSeIxbj8XYdSNgyzq7Ou07AmW0abVKql&X-Amz-Signature=b65bcf5dee138f09f2904a3f866a379b8ac3ec659ddaeacfacc62b21a921ffdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
