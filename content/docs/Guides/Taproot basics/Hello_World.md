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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHP3KMX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFTko7RhiA8U7mqEmQNFiu9dFhTynQ7eXLMp5udBSUEoAiEA8lEtQGeZ6tXC0ZqaHncT3m9XCCrJuYpJCyl88M1pgMUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjQL6k4jhT7z5w%2FJCrcA3w4XpYnbnXKGykNexSqTocyTY3CKWMMN9P%2FznRjKTvjPef1J3NjegXxczwf2lnXJQCadfnIq1uugmw1%2B%2FxWpNYtk40b8Py2VIVY%2FT7pxoATqQ2tinjg3zRiJPVcifjR9wfyKhxtXXsGAWRa5EYS6IgsuAqgcLgCqv82NGgPf97Rwb76cf2jmP15hLSDKTZdHnFmmvq8ZE7okdqKmcWVJsImuutv6Xa8VbgkPU7cyPqmZtImBAG9%2FzAsuKHSKImi9eBCwcZfuahAGrhLDh37kvx51SQhoBjZECmQuKF0X7%2Fie9M%2F37IeSlNgJwhYH8xH90iZj2PeqZvQDCcakZiwGfOZfYJbWnQKVynUl%2BTTO14kDFALWNEPZr3ZeNfDsWWK7MIP5FWbmER4WyL4EAtkC1Zy3HiDLqEJEb8ruTbddOJRGK3nqW2Nf7hNvhdJMe1jl8C8ZwCo3Q8%2Bm12MyEGJZpb%2BYDajCBTGZiyz%2FCUBbWE99VRiUE1t1jpqr0HyddirafNzQLjIpTNqTJ2DrljIFgBJoQHuIvlpgoK%2FaJDsrxrA66fbywpkrx2azeffPmF1Tiu1leXQYpORuDOFGOClmUw3Cdu8nv%2FCZNhVpAAFRrnXQrKMtrWiGKF%2FyIUjMImP78EGOqUBP6JS%2BTkFGkSNV1HtKjpR7%2BqKSnThVvAgxsWfYJIHQTbWgKHOvQKtub8O0s%2FQdicWk%2F6crRXxSfA85hJtejvart%2BI6wdcvCrhgU7KjfoHge6QnIH6Y9lyrVcm3Ru92uzZExh2gBN6XIxqQoJYscKKWYIzVJiOxQV8EYAEJ18Y0oUihsFyG2%2BZD22nvaV9CyL9TZPM89Uv2Q4O7uZls%2FFprmzUHt%2Fz&X-Amz-Signature=84e4fe13d8430c639daaf1e89cc4a230bf658d19b7a933ec9dab83b71085a166&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZHP3KMX%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIFTko7RhiA8U7mqEmQNFiu9dFhTynQ7eXLMp5udBSUEoAiEA8lEtQGeZ6tXC0ZqaHncT3m9XCCrJuYpJCyl88M1pgMUqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjQL6k4jhT7z5w%2FJCrcA3w4XpYnbnXKGykNexSqTocyTY3CKWMMN9P%2FznRjKTvjPef1J3NjegXxczwf2lnXJQCadfnIq1uugmw1%2B%2FxWpNYtk40b8Py2VIVY%2FT7pxoATqQ2tinjg3zRiJPVcifjR9wfyKhxtXXsGAWRa5EYS6IgsuAqgcLgCqv82NGgPf97Rwb76cf2jmP15hLSDKTZdHnFmmvq8ZE7okdqKmcWVJsImuutv6Xa8VbgkPU7cyPqmZtImBAG9%2FzAsuKHSKImi9eBCwcZfuahAGrhLDh37kvx51SQhoBjZECmQuKF0X7%2Fie9M%2F37IeSlNgJwhYH8xH90iZj2PeqZvQDCcakZiwGfOZfYJbWnQKVynUl%2BTTO14kDFALWNEPZr3ZeNfDsWWK7MIP5FWbmER4WyL4EAtkC1Zy3HiDLqEJEb8ruTbddOJRGK3nqW2Nf7hNvhdJMe1jl8C8ZwCo3Q8%2Bm12MyEGJZpb%2BYDajCBTGZiyz%2FCUBbWE99VRiUE1t1jpqr0HyddirafNzQLjIpTNqTJ2DrljIFgBJoQHuIvlpgoK%2FaJDsrxrA66fbywpkrx2azeffPmF1Tiu1leXQYpORuDOFGOClmUw3Cdu8nv%2FCZNhVpAAFRrnXQrKMtrWiGKF%2FyIUjMImP78EGOqUBP6JS%2BTkFGkSNV1HtKjpR7%2BqKSnThVvAgxsWfYJIHQTbWgKHOvQKtub8O0s%2FQdicWk%2F6crRXxSfA85hJtejvart%2BI6wdcvCrhgU7KjfoHge6QnIH6Y9lyrVcm3Ru92uzZExh2gBN6XIxqQoJYscKKWYIzVJiOxQV8EYAEJ18Y0oUihsFyG2%2BZD22nvaV9CyL9TZPM89Uv2Q4O7uZls%2FFprmzUHt%2Fz&X-Amz-Signature=9448a138519132c9a41aada17564901f73c73cbf728d7024e3a67e2e5d19538c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
