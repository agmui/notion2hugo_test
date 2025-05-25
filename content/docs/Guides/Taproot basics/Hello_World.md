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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQDGFYHV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGEdUqzmyXrPrcmeO3dePKSyOHGvy0GsZTTy0oYoakIcAiEAwjEGoaxWqUfZTFHOsw8IJ7SAvs7T48lZzjVQRC%2F8kb4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFty0YNpK658eUB%2BjyrcA8UjRfLEEp85IpmP%2BN8%2FEZxaZHtASW0xuF45b5V0cVKkcvG1FabvuNTrRw6qgeRLX3vMvPNJzC3joHn%2FjB7%2FlNZW7GjgGVAOD3UmBkYYKTgyNjbwGeSsDWXYq1zzTYnohzdTmFODts%2BZnVTBnrHbZVkxJxituwkonQ%2FVEbdzRbjPvleYfmN1rVvHvKa20uJXmsLh%2FDew5EqKnHpT4Zv0VBosPkBshReMBK1L8a0iUWcLqVoGhtav%2Fw45fquBo3dYA15oj9Tle0mxoYgtjLX%2BAfCP6i2dcz982iKbNL1MwIGoJNNuf7YFAGTtj2u1%2Bk5wAMxe%2F%2BWBB9idRz5rWLOFy92uB3P4T66E8Hz5sNrASInM6MKOZfZc%2BiZs4IYAwU4uMRnkpQcDhVo3lKAceikciCUvPlL2RzYu1I8%2BtUitrxXEg8idjNP%2BMh0E9CVQ9bTDIIbpMB%2Fdlcw6TWM5wbEOXJ5Lu6GKZHYIQVZOi8aMIxYQ7SLGsE96y6XpJ5UOXV1UO5ohLR6VnVHSf2LFs3F3A%2BmixhFXz8k4W5nVoU4T8u3ZoyrdvgEh3GvqXKmB6sb9z9L26aifzKKClYIxpjdiDF5BOjS0i57JCGChg12o5zJahCIKFdCUc3LaqkFUMO%2Fay8EGOqUBaPllzdQIn9Pei1eMc2K96E4s9rR8f4fvrjFHSREsVR1dNbp%2BJgJKHTlH9STzuWzeDIg8FGEK%2FHFVPLBr250nsVkoWw%2FkmBKSo3Av6uVlo4i9vy5rLxWG8tqAgqKk%2FEnw%2BsMGMFkwtUD8hvsJmJ0yyBFmfKWRCa5mCNvlnkEFBMDDpGFQH1%2FFvWizs4wjY3h0J4n1Tm1EZB%2FXGnfmhiSXar1htC6c&X-Amz-Signature=992135eff42515618b620e06e582a9cd26a7233389843e29129f7cb7a866144f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQDGFYHV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGEdUqzmyXrPrcmeO3dePKSyOHGvy0GsZTTy0oYoakIcAiEAwjEGoaxWqUfZTFHOsw8IJ7SAvs7T48lZzjVQRC%2F8kb4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFty0YNpK658eUB%2BjyrcA8UjRfLEEp85IpmP%2BN8%2FEZxaZHtASW0xuF45b5V0cVKkcvG1FabvuNTrRw6qgeRLX3vMvPNJzC3joHn%2FjB7%2FlNZW7GjgGVAOD3UmBkYYKTgyNjbwGeSsDWXYq1zzTYnohzdTmFODts%2BZnVTBnrHbZVkxJxituwkonQ%2FVEbdzRbjPvleYfmN1rVvHvKa20uJXmsLh%2FDew5EqKnHpT4Zv0VBosPkBshReMBK1L8a0iUWcLqVoGhtav%2Fw45fquBo3dYA15oj9Tle0mxoYgtjLX%2BAfCP6i2dcz982iKbNL1MwIGoJNNuf7YFAGTtj2u1%2Bk5wAMxe%2F%2BWBB9idRz5rWLOFy92uB3P4T66E8Hz5sNrASInM6MKOZfZc%2BiZs4IYAwU4uMRnkpQcDhVo3lKAceikciCUvPlL2RzYu1I8%2BtUitrxXEg8idjNP%2BMh0E9CVQ9bTDIIbpMB%2Fdlcw6TWM5wbEOXJ5Lu6GKZHYIQVZOi8aMIxYQ7SLGsE96y6XpJ5UOXV1UO5ohLR6VnVHSf2LFs3F3A%2BmixhFXz8k4W5nVoU4T8u3ZoyrdvgEh3GvqXKmB6sb9z9L26aifzKKClYIxpjdiDF5BOjS0i57JCGChg12o5zJahCIKFdCUc3LaqkFUMO%2Fay8EGOqUBaPllzdQIn9Pei1eMc2K96E4s9rR8f4fvrjFHSREsVR1dNbp%2BJgJKHTlH9STzuWzeDIg8FGEK%2FHFVPLBr250nsVkoWw%2FkmBKSo3Av6uVlo4i9vy5rLxWG8tqAgqKk%2FEnw%2BsMGMFkwtUD8hvsJmJ0yyBFmfKWRCa5mCNvlnkEFBMDDpGFQH1%2FFvWizs4wjY3h0J4n1Tm1EZB%2FXGnfmhiSXar1htC6c&X-Amz-Signature=6e01a252469b8dbd8f8957fea19fac3b68f11de843688a13b2a52ccaa4e0fd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
