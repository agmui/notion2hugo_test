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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5W7F4PL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYEURVsgEwT2oCjS45NC2ZfcZoGB81t8kDXnNKnc0YIgIgQrADbvLNu56P9ITuwQ8nqAllASpDzsgZ6p2emarFPCkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8geT%2F319T%2F%2Fz4svyrcA3Ki6yTkVvfcjH19YN%2BS7g4mDaBVMjv1oRe4L0sjrZ8ijfnaQ%2FPF2bO2QqCxKSEoBmckgQ1%2BW0%2FA4AM50cY5GQo1Cvh5acLXNBzomqd9aZ3WLPbT%2FxcVr%2FGZKoDhlTmhONHHO3nDN%2BEJ7Y%2Bglz7RsiS4VUimvrDPhIH%2BROrJwjCwgXOWGpqBNiOi5P8cyupifrBBO%2FyQGLyG73yvk6Qrk05f5vwBn20MvFyfRR5a%2FnpPsXMeU%2Bh%2BwmXlO%2Bvs4R3gEVnmUAzGkNnztFF4teN1H5HYAup0BJd7te9D4PaNJPB1FTCmLg0VAwD3wChKAOg1FgYeDDDzfyttyHG%2ByZyuMVFBt%2BUhDmZA1da7K3syRQxXyROsQhhE3FC1DRTLcOnRmI4Cjum6l6CMsNuB4fLmTrutFvTZC0B47rhfqZQpjkUbX0latbBAHjSZzDhA2lUCyb5KF%2B0RHlSuGdsxjBHKfjxq3bsMoSAsFvWVBf9W5VkJ4G0HWDJTujiufovzGGfnMobkjIycQfTReMggE1SztBSBGYQNqg7DiObh2ISd7zRrZHU8qFAuqHkB%2FeP%2BkhqQMTUxUymtYvA9sVd4pYINymtn6zcZ5%2FkkgsXqvVXKTwnh7eLWznnPHlI9%2FeANMNKPpL0GOqUBBWCR5dqGV3UC2BPgkIYLHlfjCM1IdGUKWF6vme762BVBGcVKxysiFmb%2Bq2T6%2FUdUOEqroL8cR%2BmdfSjeQ5bZD1Y7%2BAzHKsOGZrRO1rtXWP27zoHqqkhFQwCk15k%2FewSlZq5qi27Z2l8QydGkVnkNpCMCM7KGItlIBmfoihoPbAwKoFT6%2BsD9%2BXXWSyAHnnTRyAskA4Yx88dTlruEFKEu5ehxkm4Z&X-Amz-Signature=66ca575ae88bab3269523452b7d36bd5dc8bbf572f33b78169d79f480eadf7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5W7F4PL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYEURVsgEwT2oCjS45NC2ZfcZoGB81t8kDXnNKnc0YIgIgQrADbvLNu56P9ITuwQ8nqAllASpDzsgZ6p2emarFPCkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8geT%2F319T%2F%2Fz4svyrcA3Ki6yTkVvfcjH19YN%2BS7g4mDaBVMjv1oRe4L0sjrZ8ijfnaQ%2FPF2bO2QqCxKSEoBmckgQ1%2BW0%2FA4AM50cY5GQo1Cvh5acLXNBzomqd9aZ3WLPbT%2FxcVr%2FGZKoDhlTmhONHHO3nDN%2BEJ7Y%2Bglz7RsiS4VUimvrDPhIH%2BROrJwjCwgXOWGpqBNiOi5P8cyupifrBBO%2FyQGLyG73yvk6Qrk05f5vwBn20MvFyfRR5a%2FnpPsXMeU%2Bh%2BwmXlO%2Bvs4R3gEVnmUAzGkNnztFF4teN1H5HYAup0BJd7te9D4PaNJPB1FTCmLg0VAwD3wChKAOg1FgYeDDDzfyttyHG%2ByZyuMVFBt%2BUhDmZA1da7K3syRQxXyROsQhhE3FC1DRTLcOnRmI4Cjum6l6CMsNuB4fLmTrutFvTZC0B47rhfqZQpjkUbX0latbBAHjSZzDhA2lUCyb5KF%2B0RHlSuGdsxjBHKfjxq3bsMoSAsFvWVBf9W5VkJ4G0HWDJTujiufovzGGfnMobkjIycQfTReMggE1SztBSBGYQNqg7DiObh2ISd7zRrZHU8qFAuqHkB%2FeP%2BkhqQMTUxUymtYvA9sVd4pYINymtn6zcZ5%2FkkgsXqvVXKTwnh7eLWznnPHlI9%2FeANMNKPpL0GOqUBBWCR5dqGV3UC2BPgkIYLHlfjCM1IdGUKWF6vme762BVBGcVKxysiFmb%2Bq2T6%2FUdUOEqroL8cR%2BmdfSjeQ5bZD1Y7%2BAzHKsOGZrRO1rtXWP27zoHqqkhFQwCk15k%2FewSlZq5qi27Z2l8QydGkVnkNpCMCM7KGItlIBmfoihoPbAwKoFT6%2BsD9%2BXXWSyAHnnTRyAskA4Yx88dTlruEFKEu5ehxkm4Z&X-Amz-Signature=899834fea7b8147aefc0722709388ccae85d512311ce58797cab45e1d44c0316&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
