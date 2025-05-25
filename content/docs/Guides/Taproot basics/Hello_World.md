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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQVYGH5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeh%2F1ZgMrJX%2FvOWWwVRbekFW8%2FW95SB3Tn9Y6AcCYe2gIgVrc5a7LsOkG5YceN%2FwVNQcpAyR1elQR9NffyqyiyWqYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCpEEdOlC7hEi7xx8SrcA%2F%2BzCEuJQ%2BtGPv4VxdPqzTJZLuKuMOH3y8MVVMKT0OfKYAJ7xAbnME5PZKxuliJsM0oqckwsdK2M3teCtL6YA%2FC7xE7DuruA2LYtsDuACxaBIruSL3xUZ%2BhA91DwCDV9%2BZDmVLLUKlDF2%2FfPruovva%2BtvSErPLUo6XZrRHVxmdQwEz1t0x%2FqAAb3R0Vbq9Csf%2F3B1Pe81jibg36GvfxDdNtUb%2Btq5b8UvznYGfNl141Mmrj5aywZlQVSuWrnuDu20bHes1me7hFotYzBKsJ7wh1%2FsqhB5%2FE11su81ZfY1Vb%2BFSPW0HCfd1pzRbDKoY%2F97KUKXlJXJRDsxNk7VDiEtEwkoPMvyYMsgJyfQQpK%2BauFCzFyePIztZzyqPjAMte4PtlVlSg%2B5awxs5WTtniz7Ebe4eA2pOIJdhRx5EKV0Ij4XL%2FgTl0LUwf%2Bk3nd9lYMfCHpUKroRJ6O6bUMCvRC1Yl%2FEL3B%2B7pPF1ZEddn5qNlZRbVhXF7zR1Y9VgClrBuuYQUunGcmMQ9eUm5hUIACWAUdlVdOB%2FIZk2FQeCi2%2FD7LstnX8oyz1X5KEL4LccD4yRBPPdTjI99ScUZB2jo2v97qkAyq8wbaRn2Xm11iR7WkSukRX0nnQgH%2Bl2PTMMK5ysEGOqUB8SAxO8Y0Egbi%2FE%2F1lYQWyPeDrd%2Fcfq88Xct9KidCj4oll4F56noGGZpPn26f6VeuWemq73bFDCaYp7Roi1A8VjdO8isWkQ5RE4l6pixSeiOyviaifY%2BwnIrXZAGOSX5sTAz3CtRX8SuZngNyd1vVDnQSmpIq9WgQ9qioAhaBcg3lKq9Ejmdl8PmAgTbHtE%2BmC%2BrfHNvPPsqaiflJXd3Fo08D2EVt&X-Amz-Signature=2f5cf20028d2290eec5ea709f02f9ca14dd6d32c6b04e03689eb0b35e7a2dec8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQVYGH5%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T100748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDeh%2F1ZgMrJX%2FvOWWwVRbekFW8%2FW95SB3Tn9Y6AcCYe2gIgVrc5a7LsOkG5YceN%2FwVNQcpAyR1elQR9NffyqyiyWqYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDCpEEdOlC7hEi7xx8SrcA%2F%2BzCEuJQ%2BtGPv4VxdPqzTJZLuKuMOH3y8MVVMKT0OfKYAJ7xAbnME5PZKxuliJsM0oqckwsdK2M3teCtL6YA%2FC7xE7DuruA2LYtsDuACxaBIruSL3xUZ%2BhA91DwCDV9%2BZDmVLLUKlDF2%2FfPruovva%2BtvSErPLUo6XZrRHVxmdQwEz1t0x%2FqAAb3R0Vbq9Csf%2F3B1Pe81jibg36GvfxDdNtUb%2Btq5b8UvznYGfNl141Mmrj5aywZlQVSuWrnuDu20bHes1me7hFotYzBKsJ7wh1%2FsqhB5%2FE11su81ZfY1Vb%2BFSPW0HCfd1pzRbDKoY%2F97KUKXlJXJRDsxNk7VDiEtEwkoPMvyYMsgJyfQQpK%2BauFCzFyePIztZzyqPjAMte4PtlVlSg%2B5awxs5WTtniz7Ebe4eA2pOIJdhRx5EKV0Ij4XL%2FgTl0LUwf%2Bk3nd9lYMfCHpUKroRJ6O6bUMCvRC1Yl%2FEL3B%2B7pPF1ZEddn5qNlZRbVhXF7zR1Y9VgClrBuuYQUunGcmMQ9eUm5hUIACWAUdlVdOB%2FIZk2FQeCi2%2FD7LstnX8oyz1X5KEL4LccD4yRBPPdTjI99ScUZB2jo2v97qkAyq8wbaRn2Xm11iR7WkSukRX0nnQgH%2Bl2PTMMK5ysEGOqUB8SAxO8Y0Egbi%2FE%2F1lYQWyPeDrd%2Fcfq88Xct9KidCj4oll4F56noGGZpPn26f6VeuWemq73bFDCaYp7Roi1A8VjdO8isWkQ5RE4l6pixSeiOyviaifY%2BwnIrXZAGOSX5sTAz3CtRX8SuZngNyd1vVDnQSmpIq9WgQ9qioAhaBcg3lKq9Ejmdl8PmAgTbHtE%2BmC%2BrfHNvPPsqaiflJXd3Fo08D2EVt&X-Amz-Signature=bebf1b5c488e730468460e21b87fa5fa238a3d1371dd87642d0f9fb927e394ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
