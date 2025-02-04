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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYBX4RA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCGFfPLv2t8jkpmrMt%2FeDLSYH8CpdCJCIrh%2BZSCPQ9EuwIhAJFIvmPIFv%2F744Sn161uC4Ug%2BbaPjjqlOtOSUUSS5idKKv8DCCoQABoMNjM3NDIzMTgzODA1IgwPp79phffwe2OT%2FSkq3APEEooMr6oFKhct%2BApZLaLbiaOtspmbeuwke67%2FGW8s%2B8RvTMnANObJZFE87b8znhdaQJKV99GjGcXyoXkSUiKefSh87I%2FLxheMPFm2AQoFJice4bSgCZXuVgk4uZEXytiN%2FQNzqIj08lkgNj8avzU7DbjSaXNjb6WIM2bAdFCL7SgAWoRHxgB1Be4AEgMtQjRb64Lv83Pqa90yrEJUTUdHrxWApTv%2F1w3vcgiF9aYIAwz0ViEaHEhl7HnoBsoMRb1Y%2ByVbm5OqgqyKESBUifwgeGp3lt%2FJkGa1UVaqLIFPwRVQrl4LuBjilJNLDA%2BGgmN4LEKzw4Y55mZHEY7jwQ%2FveIP7tQ8JVkARMVcL2qVKgkBABJW99dbboy0zgDvEFo55BPPst39ljeljtssTjsPeL9XBg7TQxaM7VOzNjedW6oqpQgJrfADA3eT3JEQBNUADp2BCWiFV4ynpMklInmhV1mCf6mrM82BBbW1zjuHGfhR8JgEeH%2FwzJnDqyJv8qxzXfJFRchFjxogbDqVerSu%2BhY31uqRE8Ua%2F93PSwDIIRvdlKHV4SL7yYCJ0i4eHx0HPQFVEcohVf458g6w1ubegFWqXeF8FDUbE8lFy9gCWi8CcsEvLsP60MSmajTCur4e9BjqkAWK0xiIshljEG0%2ByI8PLncV0mNfJdW%2F%2B2qxTBWnQk0EBI49fm3rRETtOOuB8hYCqwfeC71VIhrm%2FZAMgM0qEbGtGR1EeRT2ecxhHRSrSjI0mFIEDh3QGdJ%2FtqXXl9DY5E5ernVHn1p67a%2B8XADrgnPifaxzk8F1O7oI0DGDMN3feGd4Mva5D%2FZRtVEhXsToexuBhY90vJijiVCsWYBVG37MXk%2FfY&X-Amz-Signature=baccc9737e2d56daa8744c3788bff6e96d9ea1a3385f27793f0eed39b69c83e8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XYBX4RA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCGFfPLv2t8jkpmrMt%2FeDLSYH8CpdCJCIrh%2BZSCPQ9EuwIhAJFIvmPIFv%2F744Sn161uC4Ug%2BbaPjjqlOtOSUUSS5idKKv8DCCoQABoMNjM3NDIzMTgzODA1IgwPp79phffwe2OT%2FSkq3APEEooMr6oFKhct%2BApZLaLbiaOtspmbeuwke67%2FGW8s%2B8RvTMnANObJZFE87b8znhdaQJKV99GjGcXyoXkSUiKefSh87I%2FLxheMPFm2AQoFJice4bSgCZXuVgk4uZEXytiN%2FQNzqIj08lkgNj8avzU7DbjSaXNjb6WIM2bAdFCL7SgAWoRHxgB1Be4AEgMtQjRb64Lv83Pqa90yrEJUTUdHrxWApTv%2F1w3vcgiF9aYIAwz0ViEaHEhl7HnoBsoMRb1Y%2ByVbm5OqgqyKESBUifwgeGp3lt%2FJkGa1UVaqLIFPwRVQrl4LuBjilJNLDA%2BGgmN4LEKzw4Y55mZHEY7jwQ%2FveIP7tQ8JVkARMVcL2qVKgkBABJW99dbboy0zgDvEFo55BPPst39ljeljtssTjsPeL9XBg7TQxaM7VOzNjedW6oqpQgJrfADA3eT3JEQBNUADp2BCWiFV4ynpMklInmhV1mCf6mrM82BBbW1zjuHGfhR8JgEeH%2FwzJnDqyJv8qxzXfJFRchFjxogbDqVerSu%2BhY31uqRE8Ua%2F93PSwDIIRvdlKHV4SL7yYCJ0i4eHx0HPQFVEcohVf458g6w1ubegFWqXeF8FDUbE8lFy9gCWi8CcsEvLsP60MSmajTCur4e9BjqkAWK0xiIshljEG0%2ByI8PLncV0mNfJdW%2F%2B2qxTBWnQk0EBI49fm3rRETtOOuB8hYCqwfeC71VIhrm%2FZAMgM0qEbGtGR1EeRT2ecxhHRSrSjI0mFIEDh3QGdJ%2FtqXXl9DY5E5ernVHn1p67a%2B8XADrgnPifaxzk8F1O7oI0DGDMN3feGd4Mva5D%2FZRtVEhXsToexuBhY90vJijiVCsWYBVG37MXk%2FfY&X-Amz-Signature=9305182f92ea194f1dfcbc02a3246eb9dbc0129a1ae177a65232dc1399f456e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
