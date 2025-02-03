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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425CHDWY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFC0n2L3mbjsMMSn%2BWDlSTREobvjvHiTeatO7VvE360uAiEA56JSsaQpKzW%2BcwxDCTMSrWfxFpn4Lg%2BgMMh%2BTBdNF%2F4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPJt60J95hJdTobSVyrcA3QjT6QHy%2B%2B7DP8%2B%2BPwrL5J0f%2FCEvxZj%2BjJvNnAc9hfmneH9EQMQGp1PpYxiQNVC8yp6M7HCRnl0%2B1tkiDULXbS9r65yzRBwZQ0lqQkP3M3Z7o%2FcIHxrT3TKJ4vpfeg7aBVjjs0cPX7AGBv8EWxCh3ek3C2YsWF37bXUQhQZdjKCBtEihpXI0UbAkyH7omOtiDfxvPYlH9jLOZWnstYMVNSEaVmf5Nbc2G%2BX9brLSNk%2BnR5BkeKb%2BxDgAOifXHQVGVHGyTEu%2BFcjCX1AHkjiVZBcRahg69Hqw5Qxd4z44kA0tOYEo7nYLz4FO93z6YBUgggiFVx1VN9nR7n2hyByM09VabN0hQRFIPjO%2FZgFGMoJ1VQw0419rfcevVBAUlmiJpynrcVJUFXBsaDPvJY9CHnCsdnM7TGOX7llJXLYMhPuNCrQtnhiIWI78uDDs7zi8MYgeFx5EEe%2FiZe1qBtkhckQ7M5wIRpBYwfNyPESFWqmIfj3CGjvwIxIi9NL6A66UfqGe%2B28oHNKmyye8bwdyLRkE%2BbTO0tBSoHoe4JdEqWLokHn0vRYKGvSWL7bkORxtY7l6YKXZeammhTuNQwqZ8PkIOUWEC%2Bt0H%2FvgXJoFL4hxx6uvC%2BFP8Xj4ubWML%2FbhL0GOqUBiwSoQYjiASp49iKc%2FMiK39GRAbzxmQ%2Bqzsr47HL01MugDRfSrKrKDnCRSyhXYwLeNxXRy5v4wlHFKiL47269ZtZzDzJldfyc8xO8EIH6sJ8GTlPrBLNqlZLtSMN%2FGk8ruAAQLlJ4SVWtscWw2Ymtb9hgjadAfjk%2FsWuTF3Rn4ChuU3MfzusYpFl2vH1Rl1Lz1ADI5W0ia8qbIygKIzOUfMs8WZmx&X-Amz-Signature=adbc7d71c044c83ca8b8b33114cf03670e96c6386425528e5b933627be68f2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425CHDWY%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFC0n2L3mbjsMMSn%2BWDlSTREobvjvHiTeatO7VvE360uAiEA56JSsaQpKzW%2BcwxDCTMSrWfxFpn4Lg%2BgMMh%2BTBdNF%2F4q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDPJt60J95hJdTobSVyrcA3QjT6QHy%2B%2B7DP8%2B%2BPwrL5J0f%2FCEvxZj%2BjJvNnAc9hfmneH9EQMQGp1PpYxiQNVC8yp6M7HCRnl0%2B1tkiDULXbS9r65yzRBwZQ0lqQkP3M3Z7o%2FcIHxrT3TKJ4vpfeg7aBVjjs0cPX7AGBv8EWxCh3ek3C2YsWF37bXUQhQZdjKCBtEihpXI0UbAkyH7omOtiDfxvPYlH9jLOZWnstYMVNSEaVmf5Nbc2G%2BX9brLSNk%2BnR5BkeKb%2BxDgAOifXHQVGVHGyTEu%2BFcjCX1AHkjiVZBcRahg69Hqw5Qxd4z44kA0tOYEo7nYLz4FO93z6YBUgggiFVx1VN9nR7n2hyByM09VabN0hQRFIPjO%2FZgFGMoJ1VQw0419rfcevVBAUlmiJpynrcVJUFXBsaDPvJY9CHnCsdnM7TGOX7llJXLYMhPuNCrQtnhiIWI78uDDs7zi8MYgeFx5EEe%2FiZe1qBtkhckQ7M5wIRpBYwfNyPESFWqmIfj3CGjvwIxIi9NL6A66UfqGe%2B28oHNKmyye8bwdyLRkE%2BbTO0tBSoHoe4JdEqWLokHn0vRYKGvSWL7bkORxtY7l6YKXZeammhTuNQwqZ8PkIOUWEC%2Bt0H%2FvgXJoFL4hxx6uvC%2BFP8Xj4ubWML%2FbhL0GOqUBiwSoQYjiASp49iKc%2FMiK39GRAbzxmQ%2Bqzsr47HL01MugDRfSrKrKDnCRSyhXYwLeNxXRy5v4wlHFKiL47269ZtZzDzJldfyc8xO8EIH6sJ8GTlPrBLNqlZLtSMN%2FGk8ruAAQLlJ4SVWtscWw2Ymtb9hgjadAfjk%2FsWuTF3Rn4ChuU3MfzusYpFl2vH1Rl1Lz1ADI5W0ia8qbIygKIzOUfMs8WZmx&X-Amz-Signature=d9e6ab18e65fbe50320b57d41ec99b714af88adcaf56e6f8c7721ad000c48bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
