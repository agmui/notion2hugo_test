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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7T6UTC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmqHBeUthtXdQLEQOcGHjCXxn7Di7Y5m4gjSpZFg%2FEDAiEAqJIVje%2FAXXY0QFRRJdd9PZACrpumzafTWZgbMEuRwYYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4A%2BEECZPZf7oorCyrcA3w8L5l0Eru030ETtqFLGJ10PkiyU0kjMWqc4XVMODw3X%2FdaeHynqogtaHwYevMofp%2Bfkm8V8hjuIhIp%2FU0vMox9Dk1EuIYq6O8PpbyrS1mvBy0HPR76R5ljOw9ZS1f31E920%2FNjeCNk3O6wOJCYV%2FJYulMdBfNhRNwfpUQfx40gekcA%2BEw%2FVJ4DwFq9srNONFIJPAUk3KAkI3KOZy5Ubc2sFtpFmsIXKnD1Ilzk03sSV%2F8Ig5A8WgHGVeFRILNjjgkftRrvAVDWGTx4RG24YOjKI%2BzBzn6b1Pd0k9T0hwYFIAj2yZgOxhs5Owwcs0sHTuPRaIYXB%2BDZUfoyHkiaufbWubpfXNHq%2FC42CEnxpPcRQdDqLe86n1CTURnYom31CHPyXOBRC2S0OEtlIagTYY0QC1haPpyJBIkh4zdMIFNYJLmxMsJga0k6lfr7aU2vsupPTrHibCgJ6qbS4o53Z0rBSPD9iGAHDaWoNW5fR7wvidtT%2BM%2B3k2J22lGrVGdRnfqS9H6PgOcQTcr7XbQfyfwx4cDifuUehHoQUDify0X2wOEqzndrzqU%2BQP%2BrhIzN4tTmK91V2lSJ0ZFs4GK8jsRjVvnPepAgvh3kIq52QuqvvG7Yf7JJLyl7skHbMKP6pb0GOqUBw1kONOci3mrm8XKpr8ds56LrszlXmIuvTphuJOEx%2B%2BWSt4CayeQfw1ygI1%2FunRg2bhRCMw0fziqdRd%2Fu%2BygLGK3JM3uk6%2BlxSIDp2sXjkUr5N28JXD3wsOm9fOxcttNJaR4z%2BnPIZqBa%2F1YgRLvscDMe4PaOhsf46zTZWX9gdbx252B2a2bHo%2BjjFvBarc39X9sC%2FK3TFmmYe281pftanUGzZZjU&X-Amz-Signature=e75c719d41c011103c1adf8f31e16df8cd5917278cc3f1a888d1b1dc91c3c99b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY7T6UTC%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmqHBeUthtXdQLEQOcGHjCXxn7Di7Y5m4gjSpZFg%2FEDAiEAqJIVje%2FAXXY0QFRRJdd9PZACrpumzafTWZgbMEuRwYYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB4A%2BEECZPZf7oorCyrcA3w8L5l0Eru030ETtqFLGJ10PkiyU0kjMWqc4XVMODw3X%2FdaeHynqogtaHwYevMofp%2Bfkm8V8hjuIhIp%2FU0vMox9Dk1EuIYq6O8PpbyrS1mvBy0HPR76R5ljOw9ZS1f31E920%2FNjeCNk3O6wOJCYV%2FJYulMdBfNhRNwfpUQfx40gekcA%2BEw%2FVJ4DwFq9srNONFIJPAUk3KAkI3KOZy5Ubc2sFtpFmsIXKnD1Ilzk03sSV%2F8Ig5A8WgHGVeFRILNjjgkftRrvAVDWGTx4RG24YOjKI%2BzBzn6b1Pd0k9T0hwYFIAj2yZgOxhs5Owwcs0sHTuPRaIYXB%2BDZUfoyHkiaufbWubpfXNHq%2FC42CEnxpPcRQdDqLe86n1CTURnYom31CHPyXOBRC2S0OEtlIagTYY0QC1haPpyJBIkh4zdMIFNYJLmxMsJga0k6lfr7aU2vsupPTrHibCgJ6qbS4o53Z0rBSPD9iGAHDaWoNW5fR7wvidtT%2BM%2B3k2J22lGrVGdRnfqS9H6PgOcQTcr7XbQfyfwx4cDifuUehHoQUDify0X2wOEqzndrzqU%2BQP%2BrhIzN4tTmK91V2lSJ0ZFs4GK8jsRjVvnPepAgvh3kIq52QuqvvG7Yf7JJLyl7skHbMKP6pb0GOqUBw1kONOci3mrm8XKpr8ds56LrszlXmIuvTphuJOEx%2B%2BWSt4CayeQfw1ygI1%2FunRg2bhRCMw0fziqdRd%2Fu%2BygLGK3JM3uk6%2BlxSIDp2sXjkUr5N28JXD3wsOm9fOxcttNJaR4z%2BnPIZqBa%2F1YgRLvscDMe4PaOhsf46zTZWX9gdbx252B2a2bHo%2BjjFvBarc39X9sC%2FK3TFmmYe281pftanUGzZZjU&X-Amz-Signature=9627b7a82ca22f0ecc7e6f1a8c953ddbafa35fd4b861cbc8302c3166ae3c1b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
