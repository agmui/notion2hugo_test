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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBIWN5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDaSbQibjpiQSswxYWppAjKC3TWVhwFWFUnr1Xjrj310AiEAiWPdoyAJEbGpj1vYvLApRqu1z09Tt9UzPrS8iyRRW1wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAeeMx1Q5m5tM7myrcA%2FdAt9F%2F9TCs4x53%2BhrAFaCTVK%2FNQ8cVb%2BRM2iYaD1HgzrDiuLVcp2jDfdIbmByYTPg9tRWEdY6rV5mFt%2Fkfrl%2F5R%2BrU6SBxLh238Leiy4opUXNCMcjxMah%2BMJjpRx9vat%2F0wM8qjGglQ1k5GXjYLkffjI%2BlWZTsQFNxNIn%2F5U3OAJqyafpVegRIbNZfy39SMouR%2FvOWuhst2%2FxBObHVhDiyAa4fslsP0vtL1X96HbDkMNBR5TT4hoA872KqsxRWeRwiEx8tQGyXIbaIX%2BfJvWY5CaUYfhWG3JvJWDVu2XYEWAHMQI1lzzNrqPSu%2BTM7c7%2BVQqtPJ8bYAlSjg3tK%2BBib410CwjPwewjScOPf7hKZzYaVsStJlq6iBFN3y30Idl4HD2XhP324QnKZCPdnZruza2pBTPB3KBEMw5nodwZB4sPyBmqHv432jWpC%2FjncNTLGgjci%2BW217QcENP%2F6Ed23FMCnXHbcSV%2FLA3SSE%2FElwNpXYRmjzHzAE%2BfdxBxjjQarnOGYROtebrv1n6tWfmXeVU3e0WXzLvh5XPJUw%2FzFtCDPEuUo3tpD9VBIZIywPhb609dT8t9PMteNG2FBsIT35Nv0FpyJ1eGfISk6%2FyAcA90koXOwaYmKC%2BhTMPL33L8GOqUB9WGhzfqWvYFDnlCK4Gv3OG%2BN7g0Kr83e7sFgMSABj9CLCWJsMtyBjfiBWuodyHdr7nnY9Xj0iFWNEydeYO9Z9pD6P0Jn0J4NxoJ6gCwQD%2FpsGveiFOApFXviULjdKRQvH3Pzng8xWkmixnYEzWwHFmW1RTP1Vsn944RBP%2FSRTCtHrOyZWa6EekDX6cAVuuBUDfhaZK8ZHo%2BlmNkcz4XItav9tAuh&X-Amz-Signature=8f47c8f3364d2eb0d5da6aad3566a07e7da52dce564f6f66b89f3cac3d467b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XBIWN5J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T041045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIDaSbQibjpiQSswxYWppAjKC3TWVhwFWFUnr1Xjrj310AiEAiWPdoyAJEbGpj1vYvLApRqu1z09Tt9UzPrS8iyRRW1wqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkAeeMx1Q5m5tM7myrcA%2FdAt9F%2F9TCs4x53%2BhrAFaCTVK%2FNQ8cVb%2BRM2iYaD1HgzrDiuLVcp2jDfdIbmByYTPg9tRWEdY6rV5mFt%2Fkfrl%2F5R%2BrU6SBxLh238Leiy4opUXNCMcjxMah%2BMJjpRx9vat%2F0wM8qjGglQ1k5GXjYLkffjI%2BlWZTsQFNxNIn%2F5U3OAJqyafpVegRIbNZfy39SMouR%2FvOWuhst2%2FxBObHVhDiyAa4fslsP0vtL1X96HbDkMNBR5TT4hoA872KqsxRWeRwiEx8tQGyXIbaIX%2BfJvWY5CaUYfhWG3JvJWDVu2XYEWAHMQI1lzzNrqPSu%2BTM7c7%2BVQqtPJ8bYAlSjg3tK%2BBib410CwjPwewjScOPf7hKZzYaVsStJlq6iBFN3y30Idl4HD2XhP324QnKZCPdnZruza2pBTPB3KBEMw5nodwZB4sPyBmqHv432jWpC%2FjncNTLGgjci%2BW217QcENP%2F6Ed23FMCnXHbcSV%2FLA3SSE%2FElwNpXYRmjzHzAE%2BfdxBxjjQarnOGYROtebrv1n6tWfmXeVU3e0WXzLvh5XPJUw%2FzFtCDPEuUo3tpD9VBIZIywPhb609dT8t9PMteNG2FBsIT35Nv0FpyJ1eGfISk6%2FyAcA90koXOwaYmKC%2BhTMPL33L8GOqUB9WGhzfqWvYFDnlCK4Gv3OG%2BN7g0Kr83e7sFgMSABj9CLCWJsMtyBjfiBWuodyHdr7nnY9Xj0iFWNEydeYO9Z9pD6P0Jn0J4NxoJ6gCwQD%2FpsGveiFOApFXviULjdKRQvH3Pzng8xWkmixnYEzWwHFmW1RTP1Vsn944RBP%2FSRTCtHrOyZWa6EekDX6cAVuuBUDfhaZK8ZHo%2BlmNkcz4XItav9tAuh&X-Amz-Signature=243a147f326612fd29e564abab1eecccb13ec9d7d6d5a1ec0341def9e8f6abc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
