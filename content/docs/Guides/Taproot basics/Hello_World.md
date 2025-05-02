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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RRWNIA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCBFCS8TfJavifAoAZU5hs2J%2B3Y6TT4ea4h8vNGvUtmOgIgS7qqP7tLroXjzpVdfrJTeH1R7de9hrSbRpGXm%2BjBO5UqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExanfSHYmdHnk5PaSrcA%2FDDft%2BvwlNZRSiMS%2BwabWmaDdInzzKUqvEw%2FGzcThXO9H6vvnEaB12MmH7fR6XQ4dcZorjbfjljMwjC7J%2BGukVsOW1z146fvNCbZ9ZzeSa%2Btg0FSiDJv%2Fk5cJe7D92BmMEj1xoGIL8KrPWPLQaRF%2BQoTdxZ9MNla4N49PV%2BqQm8LKSSxGm%2FcY7MmV4Kk5HKZxBFzRwqHFIx5Rkdn4pAHbWgF41mNvkJG3wQUNZjIL%2FGq%2FMOF6ijIFchzAZ%2BQfEOLl2qq0%2FoKfA%2FSMCh7TXRxIiiDU24IWhwpr400j%2FceZ39QiJjbqR8uxIZMhn%2Fs9xBNyLSU57JO8NCFS7aXA9nSK4fjoW1lZvJiZJspud7G44VEL83SUoGOWffYGFlJOvH%2FPPuBLm%2FDv6fi1COxmq%2FOrYJx%2BfaRqz1GGF0vF3eXpVWXE4tZA9%2FNQL7HwNaMmYgX7t8GppiIgu8KbWET4LFzVoR01fs1%2FzIH18w2%2BoqfujJteBI8NOtbl5d%2FWTQ7EnKILY4gJD2JcqB54ZSZSajRZmC3FAfKxHgEdhc%2FP8AILIIDfBlHloIGeOSbx5tdl%2Fun7rHjwJNxPYsFKpivDGQkPPDT21Mkmzak9b25rBQpM2FRSqp3FXealCNkxPrMPKo0sAGOqUBzH1083f62gpg0oX2kycWMsYmC3tqGhUDqrw7lgYWwOXvvbL8IjDPfxLbZ4%2BM%2FMxRraisdaHLBmiYgdFUTDFlPbFI%2FRWyyvnO5jhftKd3i0mA70gXvmE0kTsSqaZ26253G%2Fli9yvec1azcEQrJgHdNTTSzDJUTxBa8Ek2ByU2yMdF%2B0%2BJR3pdUVYuCXondcOS9obmsY%2F4sLRK1z036aTOMXZ3SNeA&X-Amz-Signature=ca940a659af5c53d8a6f0d10ee54ff19d8b7b3f84f64b1e77813ec634f2d8f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6RRWNIA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCBFCS8TfJavifAoAZU5hs2J%2B3Y6TT4ea4h8vNGvUtmOgIgS7qqP7tLroXjzpVdfrJTeH1R7de9hrSbRpGXm%2BjBO5UqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExanfSHYmdHnk5PaSrcA%2FDDft%2BvwlNZRSiMS%2BwabWmaDdInzzKUqvEw%2FGzcThXO9H6vvnEaB12MmH7fR6XQ4dcZorjbfjljMwjC7J%2BGukVsOW1z146fvNCbZ9ZzeSa%2Btg0FSiDJv%2Fk5cJe7D92BmMEj1xoGIL8KrPWPLQaRF%2BQoTdxZ9MNla4N49PV%2BqQm8LKSSxGm%2FcY7MmV4Kk5HKZxBFzRwqHFIx5Rkdn4pAHbWgF41mNvkJG3wQUNZjIL%2FGq%2FMOF6ijIFchzAZ%2BQfEOLl2qq0%2FoKfA%2FSMCh7TXRxIiiDU24IWhwpr400j%2FceZ39QiJjbqR8uxIZMhn%2Fs9xBNyLSU57JO8NCFS7aXA9nSK4fjoW1lZvJiZJspud7G44VEL83SUoGOWffYGFlJOvH%2FPPuBLm%2FDv6fi1COxmq%2FOrYJx%2BfaRqz1GGF0vF3eXpVWXE4tZA9%2FNQL7HwNaMmYgX7t8GppiIgu8KbWET4LFzVoR01fs1%2FzIH18w2%2BoqfujJteBI8NOtbl5d%2FWTQ7EnKILY4gJD2JcqB54ZSZSajRZmC3FAfKxHgEdhc%2FP8AILIIDfBlHloIGeOSbx5tdl%2Fun7rHjwJNxPYsFKpivDGQkPPDT21Mkmzak9b25rBQpM2FRSqp3FXealCNkxPrMPKo0sAGOqUBzH1083f62gpg0oX2kycWMsYmC3tqGhUDqrw7lgYWwOXvvbL8IjDPfxLbZ4%2BM%2FMxRraisdaHLBmiYgdFUTDFlPbFI%2FRWyyvnO5jhftKd3i0mA70gXvmE0kTsSqaZ26253G%2Fli9yvec1azcEQrJgHdNTTSzDJUTxBa8Ek2ByU2yMdF%2B0%2BJR3pdUVYuCXondcOS9obmsY%2F4sLRK1z036aTOMXZ3SNeA&X-Amz-Signature=66a68f8688aad27f8bfbc42f01dabe990d5751e7fd482533dfe8984d2b9d6f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
