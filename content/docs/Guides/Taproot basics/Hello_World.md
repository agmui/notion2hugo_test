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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CN534ZM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCja524EcZ8NJRi5o362lRNv3JPANiE1UpjRPhA0A32VwIhAI2diKaUvN8FRLNkkvUDjAgYnfA6UY9%2F1fRZozOBb1LoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmKjFykJVeUwgB9x8q3AOz68y%2BU6zMCJnYid%2FfjPUQ%2F3CcY6p%2BfNutwDgwsxoRHDzi3gZQ3M%2BDxfZgIkBPz8eK%2FxQKAOpumE5H5eLIfsOJmPk%2FVT16dj57nQomUHJk2xc8LXfK5FoxwZBG4ylrg%2F2pCboxOo3C%2F6%2BKgeC6ecGQluLmSEU4q6X8kO%2BHWalCrDl28T6Kh1kFRE5An9NOBrtcTfMGhOLwkuRgufoH%2FO%2BMg9QmS5xtEY%2Fj82SYw1DBPjdyYVYXsARkDUOOVA%2F%2FfY4bMbQJ7H916gwg3AMbbtwDEO%2F%2BS3apRDHLfWkBThGqeUQWmTUzkdDUZs2iMDx1fYn%2F62Ar7BYZPMBrW9cwzZZ9mbCZC18IrgtTggr9xRJYqFbuONG1%2FoVmSWIlEJXAjggpJ5dET7QR6HFdpXI8qu4LXfq23%2BQFoi2O8%2FNRJ11i%2F9V9JE7tawCsTcX2vRv0ElzhQik7Atev4N3p%2B%2BH181PWCdVOZg4XWKqHgPYih4wt2o0WIrEzAXPrsZVAXwaXsPBT1sUjelrzEesCDUk4nkbOl1lgUxVIOeH%2BBEwSCXExtSHcPyps8uGkUCm3NGilFZ18tB%2Bn9fbBazx8Uyqikeqr41myvaD0Vh6RlbWVDT7oLxWcZJllN8bQIUHw9zC%2BmLW9BjqkAaaHwo5iDQoEEvb1eQ9OuS7t%2FfyMAYH8dK76ZH4DuU0SvIuhAg4jaSqnUggRGBHLwZk6tzZP1FDoTAl0SZrbsCklKIOM%2FDCa6E5kQMJtvk1EuRwtotzE8CApaEeona9sOooDSO6tUb0c83xJp0FtGLnxDWWX0VMlfKGIez6i812QFS3IFX8cweh433KfEr4eaoyZBgxD%2FVb32kHxzwnocjFai5vt&X-Amz-Signature=dfb0502f9aff07b2cc9ab5d9509cb6e6f2969a54ed22b2ba962ee95462c35fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CN534ZM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCja524EcZ8NJRi5o362lRNv3JPANiE1UpjRPhA0A32VwIhAI2diKaUvN8FRLNkkvUDjAgYnfA6UY9%2F1fRZozOBb1LoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmKjFykJVeUwgB9x8q3AOz68y%2BU6zMCJnYid%2FfjPUQ%2F3CcY6p%2BfNutwDgwsxoRHDzi3gZQ3M%2BDxfZgIkBPz8eK%2FxQKAOpumE5H5eLIfsOJmPk%2FVT16dj57nQomUHJk2xc8LXfK5FoxwZBG4ylrg%2F2pCboxOo3C%2F6%2BKgeC6ecGQluLmSEU4q6X8kO%2BHWalCrDl28T6Kh1kFRE5An9NOBrtcTfMGhOLwkuRgufoH%2FO%2BMg9QmS5xtEY%2Fj82SYw1DBPjdyYVYXsARkDUOOVA%2F%2FfY4bMbQJ7H916gwg3AMbbtwDEO%2F%2BS3apRDHLfWkBThGqeUQWmTUzkdDUZs2iMDx1fYn%2F62Ar7BYZPMBrW9cwzZZ9mbCZC18IrgtTggr9xRJYqFbuONG1%2FoVmSWIlEJXAjggpJ5dET7QR6HFdpXI8qu4LXfq23%2BQFoi2O8%2FNRJ11i%2F9V9JE7tawCsTcX2vRv0ElzhQik7Atev4N3p%2B%2BH181PWCdVOZg4XWKqHgPYih4wt2o0WIrEzAXPrsZVAXwaXsPBT1sUjelrzEesCDUk4nkbOl1lgUxVIOeH%2BBEwSCXExtSHcPyps8uGkUCm3NGilFZ18tB%2Bn9fbBazx8Uyqikeqr41myvaD0Vh6RlbWVDT7oLxWcZJllN8bQIUHw9zC%2BmLW9BjqkAaaHwo5iDQoEEvb1eQ9OuS7t%2FfyMAYH8dK76ZH4DuU0SvIuhAg4jaSqnUggRGBHLwZk6tzZP1FDoTAl0SZrbsCklKIOM%2FDCa6E5kQMJtvk1EuRwtotzE8CApaEeona9sOooDSO6tUb0c83xJp0FtGLnxDWWX0VMlfKGIez6i812QFS3IFX8cweh433KfEr4eaoyZBgxD%2FVb32kHxzwnocjFai5vt&X-Amz-Signature=c054949854b0f94d8d428d28615858e99c6c8eaea0fed9d7674de7a3659c0198&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
