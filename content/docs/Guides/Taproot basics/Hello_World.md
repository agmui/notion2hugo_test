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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCD4VFA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDU25pR5MeMTK4jL2BRPHILpJbzOa%2Bmp%2BqMKXtXD%2BUrfwIge3o9teoKaZBs7YoLZ6Vp7D1uuCIS5jn%2B8A%2FYsGXuP%2BYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPzK9V6%2F8%2FD%2FmAjL%2BCrcAy3aXNMySReu3W%2BoDdV%2FaD%2B58oWnaMi%2B7ZSCauRPfykk4mPwtfBHgAfA7zhHxeILwnxwjVBkecLsdk67rp6XoQiTE6vTQ58uXt0Siv2A1QcsKgMg9BsY3aAWH1FiFvAoodWytwGQoZWmFcxsOkyZpbyym%2B0Wk1qhI1%2F8OdjUZgS6gVeGRFSY13bVFUAUTZeoD5gUtbz68KM3ufuvBVSGOvdZeA9Ym3%2FgwsOuhD3EwHXay7viflpq196QNBlRcvc5cFq6wsuxRkLmrKTPZ0viy2L6dNZi17v1R0hZEg8YKZBXbnzlBaxon%2BvP0QORv1GxPIS2VHdlqT0taB6ObOZEiK3NV1VoE2jZRhreDSXKXmNJ3vipAQWWh3Wj0cFtpAHS9NLndiA1wHgtVh31aj5wrIlv2neBxCGvlqC8A70NnUdC5GqPzT%2FHRGfBnPeCsK5%2FO98nTe0y66wh8ulIC5rlZc28tBQZfqqphmAxyC6Ao%2B4vfELbhqABhSsFFCelIi08mKdSAVeRKSozZXIM0p8MMZIjNfifPPMFDVqNOTKawyaMcAD7ztqLc4do3HYIpYZVWhWBSRzClYGMq81jvT2Zrxxpjdrs%2BlqtS9ni%2FQAM9Wc0CsqUEVqOTs0sfy3qMNuvwcIGOqUBDVLryVYER1Oiz8JNllpwJIHLppR0ln4uQZJde1ed1c%2BR8QkjhQRGVVxH2HS2yW9OH37MLhMbcW8T5nR402J%2F0ElGIkCgw9wqhgrWQioQUavXtlal31%2Ffmzmb2sJmgBKNbyy61WZrDlNnL4Mf%2BJxDg1EsZ03NtWUfrY3i%2B7ctuvUZIAgCTthbrsljicbpeX%2Bvltmm7TQ46IiIZ4%2BVNBBNSrcuXNJN&X-Amz-Signature=f9bf88d0626f5f8ac214131ba7d8d0ab4d91a82508b7f0977ce6a8559c9b5e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCD4VFA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDU25pR5MeMTK4jL2BRPHILpJbzOa%2Bmp%2BqMKXtXD%2BUrfwIge3o9teoKaZBs7YoLZ6Vp7D1uuCIS5jn%2B8A%2FYsGXuP%2BYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPzK9V6%2F8%2FD%2FmAjL%2BCrcAy3aXNMySReu3W%2BoDdV%2FaD%2B58oWnaMi%2B7ZSCauRPfykk4mPwtfBHgAfA7zhHxeILwnxwjVBkecLsdk67rp6XoQiTE6vTQ58uXt0Siv2A1QcsKgMg9BsY3aAWH1FiFvAoodWytwGQoZWmFcxsOkyZpbyym%2B0Wk1qhI1%2F8OdjUZgS6gVeGRFSY13bVFUAUTZeoD5gUtbz68KM3ufuvBVSGOvdZeA9Ym3%2FgwsOuhD3EwHXay7viflpq196QNBlRcvc5cFq6wsuxRkLmrKTPZ0viy2L6dNZi17v1R0hZEg8YKZBXbnzlBaxon%2BvP0QORv1GxPIS2VHdlqT0taB6ObOZEiK3NV1VoE2jZRhreDSXKXmNJ3vipAQWWh3Wj0cFtpAHS9NLndiA1wHgtVh31aj5wrIlv2neBxCGvlqC8A70NnUdC5GqPzT%2FHRGfBnPeCsK5%2FO98nTe0y66wh8ulIC5rlZc28tBQZfqqphmAxyC6Ao%2B4vfELbhqABhSsFFCelIi08mKdSAVeRKSozZXIM0p8MMZIjNfifPPMFDVqNOTKawyaMcAD7ztqLc4do3HYIpYZVWhWBSRzClYGMq81jvT2Zrxxpjdrs%2BlqtS9ni%2FQAM9Wc0CsqUEVqOTs0sfy3qMNuvwcIGOqUBDVLryVYER1Oiz8JNllpwJIHLppR0ln4uQZJde1ed1c%2BR8QkjhQRGVVxH2HS2yW9OH37MLhMbcW8T5nR402J%2F0ElGIkCgw9wqhgrWQioQUavXtlal31%2Ffmzmb2sJmgBKNbyy61WZrDlNnL4Mf%2BJxDg1EsZ03NtWUfrY3i%2B7ctuvUZIAgCTthbrsljicbpeX%2Bvltmm7TQ46IiIZ4%2BVNBBNSrcuXNJN&X-Amz-Signature=e63fbe5a57288d9ec840c66ccb610c69ca8ba484b9eef65d4586fe2f300c1bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
