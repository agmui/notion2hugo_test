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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCUOYN5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC%2BU2RAQRr4FY3M3ieSaBCate4eDzylQdhl%2BCrdKpJGwIgEc9HhnJYNoITctR9h5aLt%2FI7%2B7MndX437sCzdRXA40cq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKIvVIlIWF%2BERBsV6SrcA31rgVMTC6zIzaT9zM4d58lPc77WjCXZLpLJb8niOfYh9H9gsn5pFDVrnZXihHNlQdoTw23JNe8zzSb0S85O6aufYgoGYQ1gmU8T99BbgXBAJPhNHmASc1tKEscw%2BB3mrVKwOmvZpC%2BCs2PzsB9%2FtrRA4Eiqr9IWNvfGGt53cGrupgTU50Q0XbkN4PlLbiGv6hRYm5Jra%2FjGorpJrvzOPZvg3xDJJs%2BZ%2FBDHXR20fFkZT%2FdKvU4xXyASS6N4S1oTWH0u4F07CxJ7BkfC12ubgTrSW5cqybvBCaA1dqdjzdZ0SCL%2BBloen6qlFKyjN%2FNXsWsv6K1MitvheCa3Qvxq1lgGw83fAHV4%2Fjcw4KFcJMaG%2B8wWOEE3YiprawyAtwzEEhXOvqtZ5lkKJFnPZm%2FLqPGXaMj6gGBDh8Z41lS09DCl7FapHNllnOtzhZ7nqUksGY28aclTaxmHA3s3PjLfFW7L%2FKj09%2FuIfS7PKFc6x9%2Fn0NmdoqQH4nyY3mp4KduLwBvAr1%2FYNJ08PqjHjshl%2B5ywRaAifeJSesBFUced9IRcMwzAFOM4CrtIrEN%2FYcpf%2Ff%2BpvYxKLaNw6gUMC0axClYCjpzW7FPERpvDvWFjIL6l5SRcIwKw6U3S3tozMOuEor4GOqUB36njYk2hXrmYrdjQ3nUy%2FhIKXEjyt3ITAu0tq7lgvJQrKpUauGDn1rqHGtI9RMQKEMuzIPRsM8VVu41f3F85BBlWzehv%2BeP%2FGUyDyc%2B18ym%2BwoMa03ZplFaV7qKP7X8xcqSYiirMPudUKiMR1TEdbb7hyOK6cW%2B7SE3WNoKMR3PD85RCex1Y9S2ca3CY2jDmBZjxmUeDTDIWB74M%2B0NAAW%2BIrxSL&X-Amz-Signature=40d94dcf344dc87365abcc0bf515bd111865f2e748f1455ca01176c9a20b8fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCUOYN5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC%2BU2RAQRr4FY3M3ieSaBCate4eDzylQdhl%2BCrdKpJGwIgEc9HhnJYNoITctR9h5aLt%2FI7%2B7MndX437sCzdRXA40cq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKIvVIlIWF%2BERBsV6SrcA31rgVMTC6zIzaT9zM4d58lPc77WjCXZLpLJb8niOfYh9H9gsn5pFDVrnZXihHNlQdoTw23JNe8zzSb0S85O6aufYgoGYQ1gmU8T99BbgXBAJPhNHmASc1tKEscw%2BB3mrVKwOmvZpC%2BCs2PzsB9%2FtrRA4Eiqr9IWNvfGGt53cGrupgTU50Q0XbkN4PlLbiGv6hRYm5Jra%2FjGorpJrvzOPZvg3xDJJs%2BZ%2FBDHXR20fFkZT%2FdKvU4xXyASS6N4S1oTWH0u4F07CxJ7BkfC12ubgTrSW5cqybvBCaA1dqdjzdZ0SCL%2BBloen6qlFKyjN%2FNXsWsv6K1MitvheCa3Qvxq1lgGw83fAHV4%2Fjcw4KFcJMaG%2B8wWOEE3YiprawyAtwzEEhXOvqtZ5lkKJFnPZm%2FLqPGXaMj6gGBDh8Z41lS09DCl7FapHNllnOtzhZ7nqUksGY28aclTaxmHA3s3PjLfFW7L%2FKj09%2FuIfS7PKFc6x9%2Fn0NmdoqQH4nyY3mp4KduLwBvAr1%2FYNJ08PqjHjshl%2B5ywRaAifeJSesBFUced9IRcMwzAFOM4CrtIrEN%2FYcpf%2Ff%2BpvYxKLaNw6gUMC0axClYCjpzW7FPERpvDvWFjIL6l5SRcIwKw6U3S3tozMOuEor4GOqUB36njYk2hXrmYrdjQ3nUy%2FhIKXEjyt3ITAu0tq7lgvJQrKpUauGDn1rqHGtI9RMQKEMuzIPRsM8VVu41f3F85BBlWzehv%2BeP%2FGUyDyc%2B18ym%2BwoMa03ZplFaV7qKP7X8xcqSYiirMPudUKiMR1TEdbb7hyOK6cW%2B7SE3WNoKMR3PD85RCex1Y9S2ca3CY2jDmBZjxmUeDTDIWB74M%2B0NAAW%2BIrxSL&X-Amz-Signature=f086de009684c679d79e55b68471b492abb0f21b5880913e3653a9bf5e5c7cac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
