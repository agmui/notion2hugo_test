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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGSMWT4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG3bzw27qivKnV8FvC90eqIB%2BBUSR2NttliCd3YgC2LQIgJN7lcQbPzyF7M5gHIxxCRrW2r%2BPqFtxfTAlYwNdv2AoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGkAhWimU%2F0m6lzrCrcA6Kvwng2JSKJNxNbYUWoSshtN9QEvMlQ2Xh4HS4uvZ8UpmwbqPXX%2BmbDrCXIHNcTzYY4XBNUCMOfnf3D7V%2FnSA495%2F4rSpSLqSRoiQgAJh46Vs94ZhH%2F%2BnJtvPYYhnx7HhcH6gDYU901CYQFhJ2i2%2BAZPpk0BeRZ0UsC4i3mAtY%2F5eqsmh3Isjt%2FgH3M%2BqETJo6NOwSmfRM9%2FxkrvH8k4mZgU3XyS2uyjORg5Bqab4cqZlgn91AyY24pEv29dqrdfaSl8aEykgtFrd708gkKXPNCd5jWGMhtWXuGMuu67OTUvuvvnpc7fIeWtwxqeG28tID8%2BxiuwjzGWyDcYpnkBMCIpxP21mbWBudk1pfc7cttqkmRXR6FMb652bArpub0RVaUS0bQkmhVdiTdy7%2FsGTHLlN2l96YwNCPrxsk3rHO9JMKzNVQwVSsXMRb3b3W06qidu0HqCVSDk0M8nwb4JykJ8%2BUjXQOaHqFcyDvpQAvilMt4kkoNljUyvv%2B2J5d%2FiFt4HixoGzBheamAT0X4%2FYj%2FMNqr%2FQ%2FgKq4ubZ1gj%2FSHMtojkIbKntv8Rcm1rmOszv7OjD02JATSZd7Mit0W6TwP8NxsvI6frjfLCBtzQlWyol7b1vh%2BA1S7mrTaMPXF7MMGOqUBc2oJt%2Bg3UUi1AMjvivY0F%2FHSMwTRc2fDRlnop746%2BFSU20kR4Rj5S6XtDPWNYWzpqK0pJSLdVmsj9sx1XFTSkMNv71CSFckeNoYanz1RZMiKWzaFClzogLg%2FC06B2lz2eFmtQMMOFYgtFh5%2FFrN4QllNRllhac6gBrSAgeCw81He4DYq1HcVf1Hl1qjbzNxh7pnBXMDSwFhXco%2BntmV%2FdcO1Xb8I&X-Amz-Signature=7c09b8b8a24cdefa03a41d64cc5011472baff4a1f91dd0f0ff19fc58b5257ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRGSMWT4%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG3bzw27qivKnV8FvC90eqIB%2BBUSR2NttliCd3YgC2LQIgJN7lcQbPzyF7M5gHIxxCRrW2r%2BPqFtxfTAlYwNdv2AoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGkAhWimU%2F0m6lzrCrcA6Kvwng2JSKJNxNbYUWoSshtN9QEvMlQ2Xh4HS4uvZ8UpmwbqPXX%2BmbDrCXIHNcTzYY4XBNUCMOfnf3D7V%2FnSA495%2F4rSpSLqSRoiQgAJh46Vs94ZhH%2F%2BnJtvPYYhnx7HhcH6gDYU901CYQFhJ2i2%2BAZPpk0BeRZ0UsC4i3mAtY%2F5eqsmh3Isjt%2FgH3M%2BqETJo6NOwSmfRM9%2FxkrvH8k4mZgU3XyS2uyjORg5Bqab4cqZlgn91AyY24pEv29dqrdfaSl8aEykgtFrd708gkKXPNCd5jWGMhtWXuGMuu67OTUvuvvnpc7fIeWtwxqeG28tID8%2BxiuwjzGWyDcYpnkBMCIpxP21mbWBudk1pfc7cttqkmRXR6FMb652bArpub0RVaUS0bQkmhVdiTdy7%2FsGTHLlN2l96YwNCPrxsk3rHO9JMKzNVQwVSsXMRb3b3W06qidu0HqCVSDk0M8nwb4JykJ8%2BUjXQOaHqFcyDvpQAvilMt4kkoNljUyvv%2B2J5d%2FiFt4HixoGzBheamAT0X4%2FYj%2FMNqr%2FQ%2FgKq4ubZ1gj%2FSHMtojkIbKntv8Rcm1rmOszv7OjD02JATSZd7Mit0W6TwP8NxsvI6frjfLCBtzQlWyol7b1vh%2BA1S7mrTaMPXF7MMGOqUBc2oJt%2Bg3UUi1AMjvivY0F%2FHSMwTRc2fDRlnop746%2BFSU20kR4Rj5S6XtDPWNYWzpqK0pJSLdVmsj9sx1XFTSkMNv71CSFckeNoYanz1RZMiKWzaFClzogLg%2FC06B2lz2eFmtQMMOFYgtFh5%2FFrN4QllNRllhac6gBrSAgeCw81He4DYq1HcVf1Hl1qjbzNxh7pnBXMDSwFhXco%2BntmV%2FdcO1Xb8I&X-Amz-Signature=e202e2cc9b937e89e9cd8689a8edb01980df417484633f164018a914252013f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
