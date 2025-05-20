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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAQHSBV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ4h75Di59rNn%2BuZH96lV%2BdlPdbMyn28A7u7nA0CadhAiEA9ZUDYVrBKA127yU2faYE4U0avfQauDqAKKhfqq%2FNFC0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbHJJuXyy7so4C0xircA2M7o1jPviADK7AZNc7WjLlmwpPAUqxa37dcBeBfuosSDpp9eKWJwDMYWAi0S1fzMcnrOmTrpg1S1p1NHL1%2BNYm30HvD8r7tOMVoqzLDMkD2q0I7d5JTNfSwnuxLaufTYRWPfK9fWNYvf%2BUGdCrN6wvMPao2w8h5pmCU1xVmkaIq3d%2BB2jQS2vhA7maPiLPrqEIehk4NdMhgTBCpj1dXkvqn6QfBt7dt6rIu1wvEgyYjIY495e%2FnF%2B44qNH%2B9MsNJpEGlbPsQkoOfAyErI4UYIwpmm8NH9v9haqOvKOzhWleNO1pp7DIjH4hO925fYCgwE3fCFdtxcVAWufDrRXmms5fGDNz6i8VOSG1n9JW7D3EgbH381VlbJx3f0JOhPDP0ijRi35SUYb6WeM%2F4Q1ZggU%2FryyPgq0oRvce0x1vzBhrpX2PgqLFSyFo%2F57SbWqqpiXMcIeWN2O%2BCEz%2F5lK3vjgHP8tzkLHeQMrjoXsHBenSDAFJZ%2FaZRempLBlDJWPBBm3SN6TnvHD2tLe7gGXWLrar8Ux876mWPDUiXqxWIEDDiFSl62ZIqwgr6R2sdO4Rr2kTLdZoedam9lY6bV7J1SFzvpiMLA%2Be5%2FrxBh4Ko%2Fu5A7SYrAjfwmCp2pHcMMyVsMEGOqUBCgV%2BQd7OlJKP42dyWfjQa05cXKWgJPVonxFQJl9OeFbnueMEYZXFWXQnAZEyAZgSBLttUG7Ugd9rdCq5b74AeliySsKa31xlEui%2FbkyAQ9mo1h6SxCZ4l4XynFHD03nrG1NZShq8wyzikZ8LymFkkDMm9gcCU%2FBircnWpPUbC17A%2FQ5AQE%2F9SbcTcNDj1KQg3T5eGtnSUz2JtoXa8Tmk7MqL8yyr&X-Amz-Signature=f02835ff0820fcb2c646dc86895fe94eacb5efa01dc1a8e85654ddec24308b53&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAQHSBV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZ4h75Di59rNn%2BuZH96lV%2BdlPdbMyn28A7u7nA0CadhAiEA9ZUDYVrBKA127yU2faYE4U0avfQauDqAKKhfqq%2FNFC0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbHJJuXyy7so4C0xircA2M7o1jPviADK7AZNc7WjLlmwpPAUqxa37dcBeBfuosSDpp9eKWJwDMYWAi0S1fzMcnrOmTrpg1S1p1NHL1%2BNYm30HvD8r7tOMVoqzLDMkD2q0I7d5JTNfSwnuxLaufTYRWPfK9fWNYvf%2BUGdCrN6wvMPao2w8h5pmCU1xVmkaIq3d%2BB2jQS2vhA7maPiLPrqEIehk4NdMhgTBCpj1dXkvqn6QfBt7dt6rIu1wvEgyYjIY495e%2FnF%2B44qNH%2B9MsNJpEGlbPsQkoOfAyErI4UYIwpmm8NH9v9haqOvKOzhWleNO1pp7DIjH4hO925fYCgwE3fCFdtxcVAWufDrRXmms5fGDNz6i8VOSG1n9JW7D3EgbH381VlbJx3f0JOhPDP0ijRi35SUYb6WeM%2F4Q1ZggU%2FryyPgq0oRvce0x1vzBhrpX2PgqLFSyFo%2F57SbWqqpiXMcIeWN2O%2BCEz%2F5lK3vjgHP8tzkLHeQMrjoXsHBenSDAFJZ%2FaZRempLBlDJWPBBm3SN6TnvHD2tLe7gGXWLrar8Ux876mWPDUiXqxWIEDDiFSl62ZIqwgr6R2sdO4Rr2kTLdZoedam9lY6bV7J1SFzvpiMLA%2Be5%2FrxBh4Ko%2Fu5A7SYrAjfwmCp2pHcMMyVsMEGOqUBCgV%2BQd7OlJKP42dyWfjQa05cXKWgJPVonxFQJl9OeFbnueMEYZXFWXQnAZEyAZgSBLttUG7Ugd9rdCq5b74AeliySsKa31xlEui%2FbkyAQ9mo1h6SxCZ4l4XynFHD03nrG1NZShq8wyzikZ8LymFkkDMm9gcCU%2FBircnWpPUbC17A%2FQ5AQE%2F9SbcTcNDj1KQg3T5eGtnSUz2JtoXa8Tmk7MqL8yyr&X-Amz-Signature=8d13a01d182c6baab7a9cc13588cacef1eb4879d2e3536a4aa68db48f8617a21&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
