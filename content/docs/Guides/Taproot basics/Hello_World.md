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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADVNKDJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFdvmSp7St4H0JgBCuQu3j5PsMYs3PorNwzMMfwmfzA5AiAYTZDxrFqH8CSKOrRvU2uYsG0pAH%2FvfBGMko2%2BfcFsvyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMgcgc7cAHy3U2%2FEKVKtwDSlRtFzm7GuT6wLH4Sit2ZJaNpZCRt3dbyaA4PeA3BCpifIhJbqNarQwWoyzNHAZyGrxK4N8BQ5be2nDi9lGsdG13LabA2DI9sLHxzSRxLhB%2FSsac%2F7EN7Xf%2Bi16oxw9bYx1HMD4IQtRvFetH5EQ2ABK8lzjTgfmersXlJ0S4%2FPuIAlFgoOqmWP%2F6i3fq4lQhNkuzhnyyV8z5qTYMpZHAZeohigVcdDpsAZqTYT9Mc1vySt2g%2BKYV7hX%2F737bVsiiXMONzecUdpef4wVuGAUFjBTBrQbNJ7stfhKXJAMUjXpQQ%2BPTGJDMcRTpW9DXuQmCLudIDvWExr%2BcRlJVudLjFrkXyE9fCJ37C%2B9o%2FyOR2duwDpe%2FDCW%2FazsvNIiPpPLH1OErE9P2Ob0UQREKo0nEkoeHrt7MICP8xRKLvrDX6c6YKmS0fO%2BW19Q1JhpptzC1Qo14XWak87IWJ%2FLZ6YPfFTFL4adkUv%2BFqe3Wb%2FDrU9Y2Fl55mjL%2BmkwUs2BPFJERJuPBwrCiHc9lOxUp7%2Bwwh3zcItB%2B%2ByRYN5%2Brnvbsc6%2B1uDQnN4VVL5pPbiZn7r4TM0kdgNgsa3C1uD0tX6l3QEe2enma5uwQmbJYPFIft9U0KyOC8slKZadECK4ww%2BuqwwY6pgFhHdbNHhCQJqTN29oGtT0fOAzTyUb55wmvroTcm8PizmMhZriVF%2BDVaZlNxU6luRw%2FLdMc9NkA4zF%2Byq104LxGOtN%2FYwTlP7%2BLui%2BrevFBkloY07AfGyB3L%2F3MZE1%2BQtWyq4Q7Jw98ox8q%2BzWvafZxrNcBxIaw4X%2BAjcyqdLjLgX23X1CsxIfPbIdRhCH3hhE5LKEV3QVTh3OyY%2FyqM5%2Bgt1wYsRZb&X-Amz-Signature=311a3b2759ed99755dbba55806e910821f7fcde4c968c252024121bace6f8b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZADVNKDJ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIFdvmSp7St4H0JgBCuQu3j5PsMYs3PorNwzMMfwmfzA5AiAYTZDxrFqH8CSKOrRvU2uYsG0pAH%2FvfBGMko2%2BfcFsvyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMgcgc7cAHy3U2%2FEKVKtwDSlRtFzm7GuT6wLH4Sit2ZJaNpZCRt3dbyaA4PeA3BCpifIhJbqNarQwWoyzNHAZyGrxK4N8BQ5be2nDi9lGsdG13LabA2DI9sLHxzSRxLhB%2FSsac%2F7EN7Xf%2Bi16oxw9bYx1HMD4IQtRvFetH5EQ2ABK8lzjTgfmersXlJ0S4%2FPuIAlFgoOqmWP%2F6i3fq4lQhNkuzhnyyV8z5qTYMpZHAZeohigVcdDpsAZqTYT9Mc1vySt2g%2BKYV7hX%2F737bVsiiXMONzecUdpef4wVuGAUFjBTBrQbNJ7stfhKXJAMUjXpQQ%2BPTGJDMcRTpW9DXuQmCLudIDvWExr%2BcRlJVudLjFrkXyE9fCJ37C%2B9o%2FyOR2duwDpe%2FDCW%2FazsvNIiPpPLH1OErE9P2Ob0UQREKo0nEkoeHrt7MICP8xRKLvrDX6c6YKmS0fO%2BW19Q1JhpptzC1Qo14XWak87IWJ%2FLZ6YPfFTFL4adkUv%2BFqe3Wb%2FDrU9Y2Fl55mjL%2BmkwUs2BPFJERJuPBwrCiHc9lOxUp7%2Bwwh3zcItB%2B%2ByRYN5%2Brnvbsc6%2B1uDQnN4VVL5pPbiZn7r4TM0kdgNgsa3C1uD0tX6l3QEe2enma5uwQmbJYPFIft9U0KyOC8slKZadECK4ww%2BuqwwY6pgFhHdbNHhCQJqTN29oGtT0fOAzTyUb55wmvroTcm8PizmMhZriVF%2BDVaZlNxU6luRw%2FLdMc9NkA4zF%2Byq104LxGOtN%2FYwTlP7%2BLui%2BrevFBkloY07AfGyB3L%2F3MZE1%2BQtWyq4Q7Jw98ox8q%2BzWvafZxrNcBxIaw4X%2BAjcyqdLjLgX23X1CsxIfPbIdRhCH3hhE5LKEV3QVTh3OyY%2FyqM5%2Bgt1wYsRZb&X-Amz-Signature=d691808b4746b67f55712d9adc442457fd4471c879cd5bf04d9c0db2bc51110e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
