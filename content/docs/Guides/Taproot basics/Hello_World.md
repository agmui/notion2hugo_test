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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6XQZBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDIp6sabPXE1JM7b7qmYTF5dUJ68yJ%2B274tnv8VH7BUtwIhANmQm85fVjN9rQFa1qmYVwVvVK47Jmk5CYK9wggq5jyOKv8DCH0QABoMNjM3NDIzMTgzODA1IgzcoSJ%2FZsD3fZ8JtUcq3ANn13sxULv%2BdrepYo%2Fdq2jvEXi5RGI1yLtimhQPRzZTUnaWI%2BxcpxLAtKl8ogFQ1nAhxNZbvaGEm4AksomxWzaMtd9sHC4WWa5bwcIgrAN%2BbULo7XYh6SdqfsWs%2FE3stujk9pqaiIn7uzeahbwQFsMolVKmKOiwsNcGDF2wND4ARjOfK50Ke0NLOOULBrINT5Dpzo9lmf77x1p6BtREm2sw27SL%2Fndd5capfz8dMvAX3P%2BvylBBrvKaMpKBRTSWcdL2PX5SvLAeWDnI26q7aTL0T6yMKUC0X%2Bpo3i8O%2BjgvmNymUXo8uCNV%2BgM%2BxlzHz6XYWfNCz8DXIJ9ppahYc5N7YF7dM1TvdQGiHLAd4LrAvbRuRDy20ssMbMmkcMMWut6l4L0Qr2UqVYlFJEY2wqwSkg474vxme6ql%2BeVRe0m2gGvlDvj6v1mMP54uTYuuAEjvZlWzvS%2BArETZ73gAor7pRtl7D22BZwZLZiuu6yb3HCvbXJfuGvN9u9yln%2FXU0Nq6dQeGfrbJi1bB4c1tzKcJbzv%2BAL9SV4EQ4J%2ByNmGi7uoqQPl3DBdJQiWy8XknMXYe%2FNfi3QSRZgr2RT1zY7iMFj7Gwz6%2BS3aw8cCoevoFFtNOuwIlN6Z8NVNaXDC54Le%2BBjqkAfAGbVzr6lfIiw4U4wVd5K3dmK%2BilJ7pFY0VlzB9hs33cvvNEtD07a2LT6mqd9tw9CDv%2F3%2BF3F5V462ySHm9e1FqhmDIDjIeLjS4ahm2xr%2Bwn1HTMzByr8jxGfxJCUTf2kSCgMRmRr7ETJ1SkV4o97Cmlxat1UacUTlKTsTaygBhHvrH4t83za7sy8i8VCugqFo%2B%2BVrpWfuuPBkVD64dQvDoJini&X-Amz-Signature=4308901daa6002b1c2ffcd02d660e4f580d949f9938ef737ba3efc92c0c9fa49&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6XQZBA%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDIp6sabPXE1JM7b7qmYTF5dUJ68yJ%2B274tnv8VH7BUtwIhANmQm85fVjN9rQFa1qmYVwVvVK47Jmk5CYK9wggq5jyOKv8DCH0QABoMNjM3NDIzMTgzODA1IgzcoSJ%2FZsD3fZ8JtUcq3ANn13sxULv%2BdrepYo%2Fdq2jvEXi5RGI1yLtimhQPRzZTUnaWI%2BxcpxLAtKl8ogFQ1nAhxNZbvaGEm4AksomxWzaMtd9sHC4WWa5bwcIgrAN%2BbULo7XYh6SdqfsWs%2FE3stujk9pqaiIn7uzeahbwQFsMolVKmKOiwsNcGDF2wND4ARjOfK50Ke0NLOOULBrINT5Dpzo9lmf77x1p6BtREm2sw27SL%2Fndd5capfz8dMvAX3P%2BvylBBrvKaMpKBRTSWcdL2PX5SvLAeWDnI26q7aTL0T6yMKUC0X%2Bpo3i8O%2BjgvmNymUXo8uCNV%2BgM%2BxlzHz6XYWfNCz8DXIJ9ppahYc5N7YF7dM1TvdQGiHLAd4LrAvbRuRDy20ssMbMmkcMMWut6l4L0Qr2UqVYlFJEY2wqwSkg474vxme6ql%2BeVRe0m2gGvlDvj6v1mMP54uTYuuAEjvZlWzvS%2BArETZ73gAor7pRtl7D22BZwZLZiuu6yb3HCvbXJfuGvN9u9yln%2FXU0Nq6dQeGfrbJi1bB4c1tzKcJbzv%2BAL9SV4EQ4J%2ByNmGi7uoqQPl3DBdJQiWy8XknMXYe%2FNfi3QSRZgr2RT1zY7iMFj7Gwz6%2BS3aw8cCoevoFFtNOuwIlN6Z8NVNaXDC54Le%2BBjqkAfAGbVzr6lfIiw4U4wVd5K3dmK%2BilJ7pFY0VlzB9hs33cvvNEtD07a2LT6mqd9tw9CDv%2F3%2BF3F5V462ySHm9e1FqhmDIDjIeLjS4ahm2xr%2Bwn1HTMzByr8jxGfxJCUTf2kSCgMRmRr7ETJ1SkV4o97Cmlxat1UacUTlKTsTaygBhHvrH4t83za7sy8i8VCugqFo%2B%2BVrpWfuuPBkVD64dQvDoJini&X-Amz-Signature=93a747a23c72b8d3a4ebf8dd1cd8614138f93ffc16e1692bb70aa7499c5b475f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
