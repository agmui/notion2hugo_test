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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RFEBXT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIExwOWWCUFaAS79TKHrN5EbZNYU9JOQUyBE36JwwyQXfAiAGGYGajdgzLmSs0uO3TXcaBTnavKiAyI7qzv4vb4E0kCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMqWjYLEV9kkS%2FpNmCKtwDbqYmf0%2FXUVC8mSBNc10vxfJiDKzqX2eqr0N9N0YV2uCCT8Wx7ITkZT2vgE7FwnaeboZY3xZ5iihDEFp0gIcFhu7VNsI1AfZnyrhvbCChhyAplu06MKfU5W1l6dN18u0x1xsAB03b93vNoK7S1fuvXZOCFd2OixRwXCb1JY4VPjeLZEGwbNk%2F%2FX%2BtLfbeAH1lWpB%2BXKL4SXdp1fD88VegWtznA4KQtfWPi%2FLEV%2Fd2iK4cRSThYpJZmnNAq6JKppkRm6JPnRffmvbssdRt3Ql6%2FztY7ESTKqGUufxJib13cjm9tHLF3GgRRs6u43a8ew8E9xGZvqEftW5mMeQbalviBycjh936C%2FNxTfMq45Z%2F%2BjaYxVZoC7c0TU2saHeZ726s2Y9RviJyCNp7EWCn2YOnudGBopo6r1aLS0E1%2FoJdWCJZi30AFtWKlXKpoesL92pI9R8ZFuqtXuAT3McWtl3I%2FfgkMhpUeX0ZxulQHQDqCmusfqe1KDJKIM0bfIpwpToPsDrqZIYWMpDUWnWuuUuBakCn1SB6KQ1EzCCnqdHJOxZf4SWnb5XmdVtbFieMjMLQaZCuSt5GIQ9EwwlC0T9OvtQe1JgocfAGlyqEb5%2BJ99T5puhJ3BPWs79qEY0wkfOqwwY6pgHoZV0ieoU5octXdEh%2Bic5JqFmzDD%2FnztpnWVu1T8zKN6bbtuGH4gtHjeclYnd0ElNSqwnNr96uW%2FSyQj13t9SJvlonRaAO4ul1YzG%2B%2BQm4ArzTDihsOKd%2BfKX%2BDeT%2F1qmyxXnx5XVi84rCenEwgZhlaHXbmO3uccOamfs1rKne%2FM6Qx0moJxkpF3oFOxHPYzcIsQSHDoTlOeSFPXNPGCvuXnngcxzi&X-Amz-Signature=affa9282e20dd53036001f5b8ed55fa17a33b2666362f32fcf13a04593c561e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5RFEBXT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIExwOWWCUFaAS79TKHrN5EbZNYU9JOQUyBE36JwwyQXfAiAGGYGajdgzLmSs0uO3TXcaBTnavKiAyI7qzv4vb4E0kCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMqWjYLEV9kkS%2FpNmCKtwDbqYmf0%2FXUVC8mSBNc10vxfJiDKzqX2eqr0N9N0YV2uCCT8Wx7ITkZT2vgE7FwnaeboZY3xZ5iihDEFp0gIcFhu7VNsI1AfZnyrhvbCChhyAplu06MKfU5W1l6dN18u0x1xsAB03b93vNoK7S1fuvXZOCFd2OixRwXCb1JY4VPjeLZEGwbNk%2F%2FX%2BtLfbeAH1lWpB%2BXKL4SXdp1fD88VegWtznA4KQtfWPi%2FLEV%2Fd2iK4cRSThYpJZmnNAq6JKppkRm6JPnRffmvbssdRt3Ql6%2FztY7ESTKqGUufxJib13cjm9tHLF3GgRRs6u43a8ew8E9xGZvqEftW5mMeQbalviBycjh936C%2FNxTfMq45Z%2F%2BjaYxVZoC7c0TU2saHeZ726s2Y9RviJyCNp7EWCn2YOnudGBopo6r1aLS0E1%2FoJdWCJZi30AFtWKlXKpoesL92pI9R8ZFuqtXuAT3McWtl3I%2FfgkMhpUeX0ZxulQHQDqCmusfqe1KDJKIM0bfIpwpToPsDrqZIYWMpDUWnWuuUuBakCn1SB6KQ1EzCCnqdHJOxZf4SWnb5XmdVtbFieMjMLQaZCuSt5GIQ9EwwlC0T9OvtQe1JgocfAGlyqEb5%2BJ99T5puhJ3BPWs79qEY0wkfOqwwY6pgHoZV0ieoU5octXdEh%2Bic5JqFmzDD%2FnztpnWVu1T8zKN6bbtuGH4gtHjeclYnd0ElNSqwnNr96uW%2FSyQj13t9SJvlonRaAO4ul1YzG%2B%2BQm4ArzTDihsOKd%2BfKX%2BDeT%2F1qmyxXnx5XVi84rCenEwgZhlaHXbmO3uccOamfs1rKne%2FM6Qx0moJxkpF3oFOxHPYzcIsQSHDoTlOeSFPXNPGCvuXnngcxzi&X-Amz-Signature=368b258789c8a8535320fe5c3cbf0f3c7908268caa2f28ceb15af9c8c219b6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
