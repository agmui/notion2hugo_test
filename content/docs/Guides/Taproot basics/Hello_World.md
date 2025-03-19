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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUUHFJO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD97EQx%2BaWSzy7it%2BCHNDeIkwaHYQMHr8w0a%2BfIWjRpGgIgOsaDm85fwoylZDzLYEhP7i5Bbmxd1iivvq1D0aPZym0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMoMR0TtX9VLHINcfyrcA4PpMUv4E%2FJFUUV3uL6veRr9gTWDRKirTyWwYfmQSVwlp%2Bt6XhKTHwNtppHoi%2Bk2dO0kvs5Qjxy1DmMJSpgm%2FICjOaWxDWjTSAcH5LUj4Ed4trjmcBu3xzi76OBTTXhMgkFC%2FP4YRxupzFLYD5ccyr1%2FtU7fcLWR1SuYYk4pESDOBhBDQ7mi1BrWg%2Bcbm4VQJQuZ6ERZ0WxOhuZl8V4l8M%2Fs0sLVh8sexfEID%2BjNc3OoIysqSWVw8eT9xGOq8T1w7lBzzPDbIuFlJLit60FFyAt8Bj5eM3ZbX7eMgKMo2CVP1JdqKCXfkZHSQ1XIM0y7i6j5HBRB2BZuKmd6MO9sapWHzZ4FxTBLD5ouAHgSqeMdnv8ZIJHnOwFwP952%2BvNk6P6svOIxcRYMYJoPgnlMhthRZk6FYgEv4mrUHNXAk%2Btzvo0EXfQTRAqJjkH7cpSQ86%2B5J8QabMnNe%2BmTp7qx%2B6cPv233dkZkF55PyNbkIY5fAVDySTCosn%2BcqyNKlpXHmCLlRAxg6ITrW%2BbvuRRRV%2FGJk8vHEGBhuD2qwW3MeiSeSkomDdqn3XvKjlT2iamP%2FWNG3OeRWajV0BSyHUzpjraHh5bP0O9NTbLdoTA0nRq%2B0sTpvuvL5lED3MZNMIGk6r4GOqUBGL64PFF5u0Xj62qRVTebPZvcYI7GdRb0GujtaeiqMZoNx%2Fdk7%2BDlbE%2FWJmJ8Q%2FUHhZg58AnzTLZmlCI3VtKh%2FVzqcvxxdNaf%2B4nowiKvORkYzlkwym%2ByGJJQ58szo3LFqiUtWT0BpW3lfQjs9jKv97%2B2keZSOi6qjc65ZGqxw9vni3wrDaBS730jQIFLcbyenoPFpiHWNRR0zwx%2BTvxEhE5vf77l&X-Amz-Signature=3ee5403781ba8eb91b317a68f91216cb95088b85274e5f8725d52a26f33b0889&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUUHFJO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD97EQx%2BaWSzy7it%2BCHNDeIkwaHYQMHr8w0a%2BfIWjRpGgIgOsaDm85fwoylZDzLYEhP7i5Bbmxd1iivvq1D0aPZym0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMoMR0TtX9VLHINcfyrcA4PpMUv4E%2FJFUUV3uL6veRr9gTWDRKirTyWwYfmQSVwlp%2Bt6XhKTHwNtppHoi%2Bk2dO0kvs5Qjxy1DmMJSpgm%2FICjOaWxDWjTSAcH5LUj4Ed4trjmcBu3xzi76OBTTXhMgkFC%2FP4YRxupzFLYD5ccyr1%2FtU7fcLWR1SuYYk4pESDOBhBDQ7mi1BrWg%2Bcbm4VQJQuZ6ERZ0WxOhuZl8V4l8M%2Fs0sLVh8sexfEID%2BjNc3OoIysqSWVw8eT9xGOq8T1w7lBzzPDbIuFlJLit60FFyAt8Bj5eM3ZbX7eMgKMo2CVP1JdqKCXfkZHSQ1XIM0y7i6j5HBRB2BZuKmd6MO9sapWHzZ4FxTBLD5ouAHgSqeMdnv8ZIJHnOwFwP952%2BvNk6P6svOIxcRYMYJoPgnlMhthRZk6FYgEv4mrUHNXAk%2Btzvo0EXfQTRAqJjkH7cpSQ86%2B5J8QabMnNe%2BmTp7qx%2B6cPv233dkZkF55PyNbkIY5fAVDySTCosn%2BcqyNKlpXHmCLlRAxg6ITrW%2BbvuRRRV%2FGJk8vHEGBhuD2qwW3MeiSeSkomDdqn3XvKjlT2iamP%2FWNG3OeRWajV0BSyHUzpjraHh5bP0O9NTbLdoTA0nRq%2B0sTpvuvL5lED3MZNMIGk6r4GOqUBGL64PFF5u0Xj62qRVTebPZvcYI7GdRb0GujtaeiqMZoNx%2Fdk7%2BDlbE%2FWJmJ8Q%2FUHhZg58AnzTLZmlCI3VtKh%2FVzqcvxxdNaf%2B4nowiKvORkYzlkwym%2ByGJJQ58szo3LFqiUtWT0BpW3lfQjs9jKv97%2B2keZSOi6qjc65ZGqxw9vni3wrDaBS730jQIFLcbyenoPFpiHWNRR0zwx%2BTvxEhE5vf77l&X-Amz-Signature=a47c31471d866d55b65d0ca953dd8a408059fe2f02c0ae8cbbb3007a9edbd007&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
