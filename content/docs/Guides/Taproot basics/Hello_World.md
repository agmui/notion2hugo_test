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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6D3NN5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEMzah5DxrKitlHx7PkehstBVtNzJL83h72fqB2WbVhqAiA8ONyHvXd3D8tHoYcBnjfuCdxQNekPuaqb%2BKiEFPklHir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5tdbOoJe8H3LLrr1KtwDc7IgvYUeepslalMXTxm%2BgI7A1Ly6iX9EbY%2B0zIRXutnrc7GgSRAGmFU41036DacKfI%2BghwvPyXh9H7H2IxYmnsCEgstNy4aXbIaXk1XeIJ%2FUsajnz%2FEMKzMPb%2BhAa7s3Hn8m6IIbPPAlkQrSvmRuLq1eKvwrMsE2KeyBM%2FuiH5cnah2V%2FkAkECoB7iuXHJCa78Z5vg2mL%2FLp0CGxPEY0lB3EpxsUni6v8DmybMWDjzSEcKqoksSPu2%2FT3%2BiGKMBbSSjmv3KuLDHbM8ANMdIPuKxmHcHxdomQvtwfxC8EP0EyFyGFBG%2BUSb2GfKGriYjKO3mZ6jRRbJ1ZCEmp8HehLkOen9EQfzIBjD7f5bGuEgdqwt7DWATaJ1PDgOFRDLrevUsrpzcrfiUsNESfElg7s%2FTvJUhLh%2F7jolUIwfSN1d98nJqXSpkRQcrwuaTx38o9lRq6aGv2yuAuV23EvvnUNm4WR4sCHK8QLFP9UH9v0ugnA9Ep2W1I64WZlbqXXaGfISh2J8vmHiV8kVPZyc%2BN736ZL1G4%2BWuKN9aY7K84udXC%2FP77G5cyEzCwd42J62wkdv3scZ8kY2Q1NTbo6VRXD2bvmkGSn57G6DoDN8lGfe1eTIs5J68BCocavLEw4dTXwwY6pgHQa2DmQANV9Re3j%2F6c0%2FMwuKsPSYRtVAV7EHP51BQCscGk95Er6iPYCfoZglGvf%2F3LHV6WZX0wOFqGBmmzzXwqOUj8rWNBSz3jMx2sSHcYEmUxNT%2FXwWnzrl1vzcY4GazolYmjtVB4v4N4Wm5wipwp63VbAFXoFE5548ETa1r7BkuR55F5M0lGynkqBtWmCySoeLxaRuQg8DO%2FEV4b6IZFebLaeN7U&X-Amz-Signature=850afaf45e1103b79b9ceb78b945d522b2f7afda5190ea02f917a05541776b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V6D3NN5%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEMzah5DxrKitlHx7PkehstBVtNzJL83h72fqB2WbVhqAiA8ONyHvXd3D8tHoYcBnjfuCdxQNekPuaqb%2BKiEFPklHir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5tdbOoJe8H3LLrr1KtwDc7IgvYUeepslalMXTxm%2BgI7A1Ly6iX9EbY%2B0zIRXutnrc7GgSRAGmFU41036DacKfI%2BghwvPyXh9H7H2IxYmnsCEgstNy4aXbIaXk1XeIJ%2FUsajnz%2FEMKzMPb%2BhAa7s3Hn8m6IIbPPAlkQrSvmRuLq1eKvwrMsE2KeyBM%2FuiH5cnah2V%2FkAkECoB7iuXHJCa78Z5vg2mL%2FLp0CGxPEY0lB3EpxsUni6v8DmybMWDjzSEcKqoksSPu2%2FT3%2BiGKMBbSSjmv3KuLDHbM8ANMdIPuKxmHcHxdomQvtwfxC8EP0EyFyGFBG%2BUSb2GfKGriYjKO3mZ6jRRbJ1ZCEmp8HehLkOen9EQfzIBjD7f5bGuEgdqwt7DWATaJ1PDgOFRDLrevUsrpzcrfiUsNESfElg7s%2FTvJUhLh%2F7jolUIwfSN1d98nJqXSpkRQcrwuaTx38o9lRq6aGv2yuAuV23EvvnUNm4WR4sCHK8QLFP9UH9v0ugnA9Ep2W1I64WZlbqXXaGfISh2J8vmHiV8kVPZyc%2BN736ZL1G4%2BWuKN9aY7K84udXC%2FP77G5cyEzCwd42J62wkdv3scZ8kY2Q1NTbo6VRXD2bvmkGSn57G6DoDN8lGfe1eTIs5J68BCocavLEw4dTXwwY6pgHQa2DmQANV9Re3j%2F6c0%2FMwuKsPSYRtVAV7EHP51BQCscGk95Er6iPYCfoZglGvf%2F3LHV6WZX0wOFqGBmmzzXwqOUj8rWNBSz3jMx2sSHcYEmUxNT%2FXwWnzrl1vzcY4GazolYmjtVB4v4N4Wm5wipwp63VbAFXoFE5548ETa1r7BkuR55F5M0lGynkqBtWmCySoeLxaRuQg8DO%2FEV4b6IZFebLaeN7U&X-Amz-Signature=73b26255d3d8d227df11656f35fb49407cc2a0276853540f6257ca60ee0cf80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
