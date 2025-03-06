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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6B7HRL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKzngdF1lxi9vn0906Qw5IdWrMz8UjpQE5p6g416lzgIgMhJlYQxFoqPDZu92xcGWIsiTLzH%2FWvAjY3fVbqadd4Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJWoLwCNigYLYjUxgyrcA2W6SXPn2n6DCoqIP1IyeMW694B7wkbWiuGKDEzzMhixVuPtd%2BJfmN3JbZ%2BCwV3rc4oRc01YSgtnISI0P1VPd58HnEqURKhJDTXp2SyYrO%2FF8GFw5JciGhV%2FaHOteZ8imozcKL3GH79AKwH9JNOXsmPXX9LSSSVjI9pN9b8EmofhAH%2B5RLWX%2BAr%2Fb4fIET6BwXHk7qLNj0SMOR%2F5BsX%2BRKR8BfYc%2B5da0jWN4nKpiZprF53SDPqPBnNUKpmUEL5i%2B8H2bAaxDXkdQSY05223mTXRoAIqjr6N5X33js0jW7Pxy40ct%2FiLo7BRdj2HFRU1KDR6%2B5QYXMu1jVyrATJHf7iZtjLxjPF5J3wASqazv0%2BzC7HgP34X%2BJx1RAj8u5CemXZ%2BG99ST6O72WQmsD4IcFe5yG1k1AC3swAB7hEOpPM2rEg3e8dDPYtnTJHeS9o9sirRGgqB4vwqzk7J9FDS7DcqoGKZFtHSvLyFFE9%2F%2Bvz1ZGL%2F%2Fvp56%2BMg8g84NwylEOf8oTeN%2Bmfi%2BmNLwErSTYAZJCBgskdLlHgMiND%2Ft04DkWaA9fDIAXzeDm7Z%2B%2Fqw73r44vbWgKnnG8p3Px9R9pmwffD4k32M7fK2QaBV4x7s4XkfVDI6FmgnlrpEML%2BRpr4GOqUBtaIwYEEp68Z7I7Rg5IrNNtlnQRYtTxUk3atGHAtYDK8hy4PFGoM13QJD2x9r1%2FPPw6PcuzroXjPybdaDdujIMpnJU%2FaJT4RHqLo2ZYUBx6JogaWS%2BhPKQgMuxeg%2BILSB6KrCMG7Ce4u6DeHHPR%2F%2B1azGqhmTudJfjxJ78OyTyMCXxRcVlJfAt5a0Kx6cX7GeisMmJXBtLI0wLxNBTeHMa%2FQOrx2O&X-Amz-Signature=898673cb0174b31280332d94caf9242eb1285e053a7ece8ca6e67883acea0945&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO6B7HRL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsKzngdF1lxi9vn0906Qw5IdWrMz8UjpQE5p6g416lzgIgMhJlYQxFoqPDZu92xcGWIsiTLzH%2FWvAjY3fVbqadd4Yq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJWoLwCNigYLYjUxgyrcA2W6SXPn2n6DCoqIP1IyeMW694B7wkbWiuGKDEzzMhixVuPtd%2BJfmN3JbZ%2BCwV3rc4oRc01YSgtnISI0P1VPd58HnEqURKhJDTXp2SyYrO%2FF8GFw5JciGhV%2FaHOteZ8imozcKL3GH79AKwH9JNOXsmPXX9LSSSVjI9pN9b8EmofhAH%2B5RLWX%2BAr%2Fb4fIET6BwXHk7qLNj0SMOR%2F5BsX%2BRKR8BfYc%2B5da0jWN4nKpiZprF53SDPqPBnNUKpmUEL5i%2B8H2bAaxDXkdQSY05223mTXRoAIqjr6N5X33js0jW7Pxy40ct%2FiLo7BRdj2HFRU1KDR6%2B5QYXMu1jVyrATJHf7iZtjLxjPF5J3wASqazv0%2BzC7HgP34X%2BJx1RAj8u5CemXZ%2BG99ST6O72WQmsD4IcFe5yG1k1AC3swAB7hEOpPM2rEg3e8dDPYtnTJHeS9o9sirRGgqB4vwqzk7J9FDS7DcqoGKZFtHSvLyFFE9%2F%2Bvz1ZGL%2F%2Fvp56%2BMg8g84NwylEOf8oTeN%2Bmfi%2BmNLwErSTYAZJCBgskdLlHgMiND%2Ft04DkWaA9fDIAXzeDm7Z%2B%2Fqw73r44vbWgKnnG8p3Px9R9pmwffD4k32M7fK2QaBV4x7s4XkfVDI6FmgnlrpEML%2BRpr4GOqUBtaIwYEEp68Z7I7Rg5IrNNtlnQRYtTxUk3atGHAtYDK8hy4PFGoM13QJD2x9r1%2FPPw6PcuzroXjPybdaDdujIMpnJU%2FaJT4RHqLo2ZYUBx6JogaWS%2BhPKQgMuxeg%2BILSB6KrCMG7Ce4u6DeHHPR%2F%2B1azGqhmTudJfjxJ78OyTyMCXxRcVlJfAt5a0Kx6cX7GeisMmJXBtLI0wLxNBTeHMa%2FQOrx2O&X-Amz-Signature=d14aae03a6ffc45344d5cdeb80f647689e0cd1e7b43e54eaed51d4838aa724ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
