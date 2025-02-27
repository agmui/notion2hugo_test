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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5BYHL2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGA63BkgKd3cABPJ7REAA%2BCmTJCPKmEhIwsOgLDdn5MTAiAM9ZVZ6agw%2FPNhkOMfXMtUVg4OUAaQ0BHwNBnQvgen7yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM5kHgNBXusp3WMpR2KtwD2Ht8s9R%2Bz5DO6KUioktEWUaDYSRh9P%2FYZVUoFD0Brb0tB9%2BmL70xn%2BFbCjq5SOTfjUawTgSh1JzR141hmhmME%2F1kCoaeHnZPa2FBdM%2F0pwythmKtxW9w9FxfhhnIFDC80ZfsRl4zR3EhyOJOc05SnH2jBFts45hKzJGqUdmTJkH55ndMqvCOUjcuQf3xw1WeYg7cNlnxTrwFuCWDQvFxa7%2Fz9988FMPMAFJWHS4PNZsGxnOpdrmyBdQNXb03X3yl1jaGn0xwZ4kQrgVFtxBjeLM3VLamIPIhn%2FET4cHlyKkL3Y9stQEMGpCKgkprtt1sUXNskRXNCnowbG2KWlo6EKMEQylEQqwL1QlVm5%2B%2FhWe1IGSrMx0BxTHwS6Mtc4b1B9B9DLJnxdYnK9Izw7ibIs729%2BY%2B9w3qR%2Ffa1CbQ8oNSFzNdjEhPoxcxE8opoZVH3%2F1MmS4o45PGTKOjgl61RTv%2BKTPjMdVTtRt308b49Rr6cdQI6J9rJq3QDoEXzcwQspcM%2Fle9mox9yyAAH%2B9OnH4LGLDS4wZhVYu7IvECHv%2F2da8POYWKbu7ZGjEokN0sjLDkekhVRqsZSKVUe2JoDqngAeMkJankQufad442V480bMOr0L9v%2FA6B6Jcwku2BvgY6pgHJFpIcWWgHIKvO%2FzNvflHHgBXy%2F8CEtjo70cBovniZeKf5rjyxTn5JCsAmnsbUZyTKeuukWbIj5Oik9I3pYoaF0azrtR1gQpxiVGlulc0cHNYMcV5thQbNV9iQ%2BuL%2ByMWe6ukNoQGn7K%2Fl21X%2BuyGG%2F%2FF1%2Fz7nwPCYYIPIdmXJeU31Xs86N%2BfnEmx9TKtaQKYkNNBoPBu0iytrUq%2FaHiPut64pRHgJ&X-Amz-Signature=f88e04cbcf74f046f12a0abd5d9cdef9426e2667c06be5259378c0496ec1ef52&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5BYHL2%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGA63BkgKd3cABPJ7REAA%2BCmTJCPKmEhIwsOgLDdn5MTAiAM9ZVZ6agw%2FPNhkOMfXMtUVg4OUAaQ0BHwNBnQvgen7yr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM5kHgNBXusp3WMpR2KtwD2Ht8s9R%2Bz5DO6KUioktEWUaDYSRh9P%2FYZVUoFD0Brb0tB9%2BmL70xn%2BFbCjq5SOTfjUawTgSh1JzR141hmhmME%2F1kCoaeHnZPa2FBdM%2F0pwythmKtxW9w9FxfhhnIFDC80ZfsRl4zR3EhyOJOc05SnH2jBFts45hKzJGqUdmTJkH55ndMqvCOUjcuQf3xw1WeYg7cNlnxTrwFuCWDQvFxa7%2Fz9988FMPMAFJWHS4PNZsGxnOpdrmyBdQNXb03X3yl1jaGn0xwZ4kQrgVFtxBjeLM3VLamIPIhn%2FET4cHlyKkL3Y9stQEMGpCKgkprtt1sUXNskRXNCnowbG2KWlo6EKMEQylEQqwL1QlVm5%2B%2FhWe1IGSrMx0BxTHwS6Mtc4b1B9B9DLJnxdYnK9Izw7ibIs729%2BY%2B9w3qR%2Ffa1CbQ8oNSFzNdjEhPoxcxE8opoZVH3%2F1MmS4o45PGTKOjgl61RTv%2BKTPjMdVTtRt308b49Rr6cdQI6J9rJq3QDoEXzcwQspcM%2Fle9mox9yyAAH%2B9OnH4LGLDS4wZhVYu7IvECHv%2F2da8POYWKbu7ZGjEokN0sjLDkekhVRqsZSKVUe2JoDqngAeMkJankQufad442V480bMOr0L9v%2FA6B6Jcwku2BvgY6pgHJFpIcWWgHIKvO%2FzNvflHHgBXy%2F8CEtjo70cBovniZeKf5rjyxTn5JCsAmnsbUZyTKeuukWbIj5Oik9I3pYoaF0azrtR1gQpxiVGlulc0cHNYMcV5thQbNV9iQ%2BuL%2ByMWe6ukNoQGn7K%2Fl21X%2BuyGG%2F%2FF1%2Fz7nwPCYYIPIdmXJeU31Xs86N%2BfnEmx9TKtaQKYkNNBoPBu0iytrUq%2FaHiPut64pRHgJ&X-Amz-Signature=c9167cee63885c6dc98cb6c4f5766b9abdf24fa4edfe6a414d129597d7831cff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
