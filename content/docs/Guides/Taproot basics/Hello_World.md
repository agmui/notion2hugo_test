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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYAS4F7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHdltVa27iLyhGFZz0nXGFJB374XF6edCeK5y0ZtfxuSAiEA%2F3Iumzgm%2BvNrbJZ59hEIf735KlmahZZqsuENuWCO%2FAkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLumqr%2BxJ%2F6LgshofCrcA3xwgRRBgrzyJx9R%2B51SZ72f8wOSU5NE2zUcs58cxLt1Bhsho1P9SymXRgQ%2Bho9uk5z%2FZX7QWFr4O3ebR3kvPPkTCy33rovXhjW50%2FfaVB00KJXVzhS3ZpqWgwxwSZ%2BWKG%2BD2G5iBotFFa0EVuom3HeCv9UCTgQ1n1yhSsrQ90FNQpv1xpBVhFr69U6KvrYGD4qHnMP8%2FY48juIPDFsqiNE0eJ9v96eIPBo6xxJKBGW0dnU4h%2BdtYOl3YIrH4dFcgNGMPbvGe%2BkdBNmGxUDV245clOQg0FmixIvxVpFkg%2BwqKrP29ZRk8fiaounj1MOPcCKFatHRsGMEzwk0692PujTsgq6i5qtoa6YqA4S0ikCDoeqyY7MDjzHOMPpv0kUPQt3zy3R4ZA6ODiUS1tgh99W0nkEbQnHubnaWzJLiFBaQIv6CXmPR%2B7qE1S%2BFWS5WnVFM%2F6c3r3Uh%2FgjJ5aao1dPNpAGa9c0SHww0sPfsrUcW9A5aJyGTWCbfh79eE%2FaRNaGGJegWpeqhzSxtVf7G56UG6buMIQsoQ94pDzLy4cJzHhndxHTe382sOSCk48wQKXk0jgDBpElW%2FpCaNw9cQcuspBMfDvLWNldtuLQmEmcFnIS0rFCs%2B1dkaKG7MOCly8AGOqUBR8TjQzbucWMvnccmffRPmdjmMpHFipE7Rlpb8bh2%2BZVnhHeb4ZX2U%2BWFQ2pelHeCPruX6e9OqhQ2iYw4EwLsIDMS2tmGky0EDOoQfD5lLLEpV1twg3kOuXcIqwI8d%2Fan9ArLi%2F8lgGtBpxE3o6Mr%2FvnQO6WAQDY22Y7cQWUJjzC%2By%2FScju74WWzyRdVja65wnJD2ndFp%2B%2Fd0%2Bjks1Yt65lZD%2Bhov&X-Amz-Signature=91d97cc4c83e55ebb8dbb1016d7f1a20259b284d41baedf5a0c16fe111cd61ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UYAS4F7%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIHdltVa27iLyhGFZz0nXGFJB374XF6edCeK5y0ZtfxuSAiEA%2F3Iumzgm%2BvNrbJZ59hEIf735KlmahZZqsuENuWCO%2FAkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLumqr%2BxJ%2F6LgshofCrcA3xwgRRBgrzyJx9R%2B51SZ72f8wOSU5NE2zUcs58cxLt1Bhsho1P9SymXRgQ%2Bho9uk5z%2FZX7QWFr4O3ebR3kvPPkTCy33rovXhjW50%2FfaVB00KJXVzhS3ZpqWgwxwSZ%2BWKG%2BD2G5iBotFFa0EVuom3HeCv9UCTgQ1n1yhSsrQ90FNQpv1xpBVhFr69U6KvrYGD4qHnMP8%2FY48juIPDFsqiNE0eJ9v96eIPBo6xxJKBGW0dnU4h%2BdtYOl3YIrH4dFcgNGMPbvGe%2BkdBNmGxUDV245clOQg0FmixIvxVpFkg%2BwqKrP29ZRk8fiaounj1MOPcCKFatHRsGMEzwk0692PujTsgq6i5qtoa6YqA4S0ikCDoeqyY7MDjzHOMPpv0kUPQt3zy3R4ZA6ODiUS1tgh99W0nkEbQnHubnaWzJLiFBaQIv6CXmPR%2B7qE1S%2BFWS5WnVFM%2F6c3r3Uh%2FgjJ5aao1dPNpAGa9c0SHww0sPfsrUcW9A5aJyGTWCbfh79eE%2FaRNaGGJegWpeqhzSxtVf7G56UG6buMIQsoQ94pDzLy4cJzHhndxHTe382sOSCk48wQKXk0jgDBpElW%2FpCaNw9cQcuspBMfDvLWNldtuLQmEmcFnIS0rFCs%2B1dkaKG7MOCly8AGOqUBR8TjQzbucWMvnccmffRPmdjmMpHFipE7Rlpb8bh2%2BZVnhHeb4ZX2U%2BWFQ2pelHeCPruX6e9OqhQ2iYw4EwLsIDMS2tmGky0EDOoQfD5lLLEpV1twg3kOuXcIqwI8d%2Fan9ArLi%2F8lgGtBpxE3o6Mr%2FvnQO6WAQDY22Y7cQWUJjzC%2By%2FScju74WWzyRdVja65wnJD2ndFp%2B%2Fd0%2Bjks1Yt65lZD%2Bhov&X-Amz-Signature=a286cde8af70af8293a3eb4c0f4b7370397518a7ef28dee8a32f5cdd56541c22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
