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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEM7QNX%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdFzROBufThXZ6kdQXB8h2hyoCKZsqsNyKNgJdzpx5SgIgDzQxgT9HE11YXaxlkDCnn2wWulqPuBObSqg29PLGqA4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDKBCJmnSj8oxN9CyrcAyLVeNyoeKbcLJnJcUmXweZV%2BagtKwIW%2F%2BA%2FF0E%2FxXJ3wvpR5jOwWkGo6ZV9IMbCzVT63%2FxjZ6YOz1CXhFf69%2BEtiwg3rUjnj5ge19bdLQUdAoV0Hpi7Ha60wCXYInSQTvk9arAs20iJB7Inda3bx%2FEIGdE91Y394Rgdje7w7BFMnZXEB54ulCM2wdTktpFW2Y6NECVHumHsxMCUEpNYUCOiBjyb8Hq6y%2FLaqXNVwWo751%2By1ci8ygo7y7A9vapkgGZYW1Jov1zq9w5qmdxY0xG2DlEfA%2F78uf8THjiZ1i3bVawGtR8%2FAsKR1XZ%2FULBMvAM%2F73EetegCc9749HCm9EX%2FOgOM1HiDey14gBfcfPnu12B3LDZvC6DGsEAI65R7DBuf09%2FBY%2Fh0WhYEfobxMK3l0Parzntg3qjSHGbfHJ9oSai%2F%2FbaiqTl1ZYRy3NW6HGwz0bYddWeSB5CHLHRiXsO54XcBR9UDP5m1edqLuGqTzqNJYF%2B7mPOuKOp69CJ06nUuwmtGMgYokdLgK0B7f2Yhnxg19jI9dHeclcYQeo6h7YOnHNMYZccAN%2FrfoF39ncVvaemecaIanJ90eBRiw%2F4YPofnT0lqgDKHgsYz0U%2F0uAerzTld24oxCxynMMetscEGOqUBXnD2aGSrMrsPWDgQ6yrZPdlT5xCfpvrDvBuCru0NJ4yWW0lyivaps3hofSa2qk4ag24ExsGfTwljZwjKn%2B5GTIrvqVo5Dc7hU1VcZNiXpaiDpwLB6Cy8jmHtWnuwo0CMkDvp0TCJiaXz74bA4Et25KXEZhM4%2Bw8j2I32ISL3sauJ8WURs9qPTCU5AwlVGm5M6mYBHBwFCxtZAqVLhV3HNQxdojNI&X-Amz-Signature=c1a61804a195603c6452aedb436aa1190fe0f2b8f8282d477cc81acb1cd76bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEM7QNX%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdFzROBufThXZ6kdQXB8h2hyoCKZsqsNyKNgJdzpx5SgIgDzQxgT9HE11YXaxlkDCnn2wWulqPuBObSqg29PLGqA4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDKBCJmnSj8oxN9CyrcAyLVeNyoeKbcLJnJcUmXweZV%2BagtKwIW%2F%2BA%2FF0E%2FxXJ3wvpR5jOwWkGo6ZV9IMbCzVT63%2FxjZ6YOz1CXhFf69%2BEtiwg3rUjnj5ge19bdLQUdAoV0Hpi7Ha60wCXYInSQTvk9arAs20iJB7Inda3bx%2FEIGdE91Y394Rgdje7w7BFMnZXEB54ulCM2wdTktpFW2Y6NECVHumHsxMCUEpNYUCOiBjyb8Hq6y%2FLaqXNVwWo751%2By1ci8ygo7y7A9vapkgGZYW1Jov1zq9w5qmdxY0xG2DlEfA%2F78uf8THjiZ1i3bVawGtR8%2FAsKR1XZ%2FULBMvAM%2F73EetegCc9749HCm9EX%2FOgOM1HiDey14gBfcfPnu12B3LDZvC6DGsEAI65R7DBuf09%2FBY%2Fh0WhYEfobxMK3l0Parzntg3qjSHGbfHJ9oSai%2F%2FbaiqTl1ZYRy3NW6HGwz0bYddWeSB5CHLHRiXsO54XcBR9UDP5m1edqLuGqTzqNJYF%2B7mPOuKOp69CJ06nUuwmtGMgYokdLgK0B7f2Yhnxg19jI9dHeclcYQeo6h7YOnHNMYZccAN%2FrfoF39ncVvaemecaIanJ90eBRiw%2F4YPofnT0lqgDKHgsYz0U%2F0uAerzTld24oxCxynMMetscEGOqUBXnD2aGSrMrsPWDgQ6yrZPdlT5xCfpvrDvBuCru0NJ4yWW0lyivaps3hofSa2qk4ag24ExsGfTwljZwjKn%2B5GTIrvqVo5Dc7hU1VcZNiXpaiDpwLB6Cy8jmHtWnuwo0CMkDvp0TCJiaXz74bA4Et25KXEZhM4%2Bw8j2I32ISL3sauJ8WURs9qPTCU5AwlVGm5M6mYBHBwFCxtZAqVLhV3HNQxdojNI&X-Amz-Signature=86cdfaa3351cb596392f266d19530153701d1754eca10d59ffb0a7568c84535f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
