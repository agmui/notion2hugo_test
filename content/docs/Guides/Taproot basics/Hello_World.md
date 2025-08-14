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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5Y66KE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrpexiH5MHR1cuxkVUgs1GNMMIyZcNFDo%2BUcqf2QzDgIgDwUNt3GdssNPP6RunxrF4GrqxQcq%2FbjAVX35w%2FSaQKcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAwGv1Hnsiaip%2FF5%2BircA3Fn9CzcBv9zEyElYdibufBcNawr6%2FtT3F3nufS6uUJSwD2Vy3MkaZSfpN502Vv8cfIK8oD3zb7G1%2Bpu7svmuVNn5gVKLeGhd%2BKaGqwgbtsFIH9zxVjz9tDBcmIsbo6Cu7rpiBTyQwSonizOWsyMix9jmfirLMnguwy1LyRh3QVVnspckfcIwvFxcQoS1mm4yZQQoZEzf4uEXjviel8f%2F40Z8t3sMj519O7cd8V2OGGi4E59mWX1W9nQRZ4cZSrXABzHdplqmypWpdlcCnuhxzB%2FUX4h819Ldn3f5vSg1v6emc8iuIXWZBpCA62aAxTv7KRs8sfplT7UoYJ8R4MU8q3Igf5HY4OdOPZ64EuGTh68KWqQtkdgURQAvxyKFjKHRY5Pzc2OpQ4X7CxNnULZYYcrE4bdKcBDJhQq%2BfD56QUrno%2By%2BBUc%2BN153Ie%2F7EyxC2xWRzwqLyIFYAgQv3yPQ7054G3WtgEjktcL0St07CzkIBylsJb8tP8yhSQBKaCofDW%2B2yaKuhV3ti%2BNREzBu3woLoYtosuck96HR6jTj9JN3C4%2BlKw8JBwZu55gY9c%2FakacCGjeJFUU4cGQqoVM4EyHq554ysFHb63WD7QQGXvgMWs4mKMebfKaHHI1MM2L9cQGOqUBq6eBcT15mvUw8ieOOg07C9nJSKrlTd53hc0FE7cfoZ3qgX9Lyth4ecA83rilBpckABWs3c7aeVM30iF%2BM3Ck9mRTUO8QEPKrWuN01bVCC7KIcQ6kFOd9QM7F4OMCp0%2B3%2BkbINtxDa7FBjc3Qon1griCGO4nxfEcNLKKWuuivf2bntXIH9%2Bu5OITyohWgpiW2MTmakAsI93g3%2F0MlaI9kIzWQGsND&X-Amz-Signature=f708856630e9606d9442a2627c1ce8045ebf1b1bd94304121333fa74642a1f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5Y66KE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrpexiH5MHR1cuxkVUgs1GNMMIyZcNFDo%2BUcqf2QzDgIgDwUNt3GdssNPP6RunxrF4GrqxQcq%2FbjAVX35w%2FSaQKcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDAwGv1Hnsiaip%2FF5%2BircA3Fn9CzcBv9zEyElYdibufBcNawr6%2FtT3F3nufS6uUJSwD2Vy3MkaZSfpN502Vv8cfIK8oD3zb7G1%2Bpu7svmuVNn5gVKLeGhd%2BKaGqwgbtsFIH9zxVjz9tDBcmIsbo6Cu7rpiBTyQwSonizOWsyMix9jmfirLMnguwy1LyRh3QVVnspckfcIwvFxcQoS1mm4yZQQoZEzf4uEXjviel8f%2F40Z8t3sMj519O7cd8V2OGGi4E59mWX1W9nQRZ4cZSrXABzHdplqmypWpdlcCnuhxzB%2FUX4h819Ldn3f5vSg1v6emc8iuIXWZBpCA62aAxTv7KRs8sfplT7UoYJ8R4MU8q3Igf5HY4OdOPZ64EuGTh68KWqQtkdgURQAvxyKFjKHRY5Pzc2OpQ4X7CxNnULZYYcrE4bdKcBDJhQq%2BfD56QUrno%2By%2BBUc%2BN153Ie%2F7EyxC2xWRzwqLyIFYAgQv3yPQ7054G3WtgEjktcL0St07CzkIBylsJb8tP8yhSQBKaCofDW%2B2yaKuhV3ti%2BNREzBu3woLoYtosuck96HR6jTj9JN3C4%2BlKw8JBwZu55gY9c%2FakacCGjeJFUU4cGQqoVM4EyHq554ysFHb63WD7QQGXvgMWs4mKMebfKaHHI1MM2L9cQGOqUBq6eBcT15mvUw8ieOOg07C9nJSKrlTd53hc0FE7cfoZ3qgX9Lyth4ecA83rilBpckABWs3c7aeVM30iF%2BM3Ck9mRTUO8QEPKrWuN01bVCC7KIcQ6kFOd9QM7F4OMCp0%2B3%2BkbINtxDa7FBjc3Qon1griCGO4nxfEcNLKKWuuivf2bntXIH9%2Bu5OITyohWgpiW2MTmakAsI93g3%2F0MlaI9kIzWQGsND&X-Amz-Signature=22eb6b22a5dc105c06a1b8f354a7b934385f57bf2613ece994a0a07aadadd18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
