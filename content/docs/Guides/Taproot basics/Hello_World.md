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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUCNQYO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgwoP%2FsQ2XVc7a8zhYkfANqMSk18c0K8qhClg57UWUQIhAJsS8HKg%2FtGCr5IBlAHV21nZjOA%2BqpC6tURNawhFPkmnKv8DCHAQABoMNjM3NDIzMTgzODA1IgyAkhu1r5G%2Bzh0h2%2FYq3AOgP1zSl7r6oG67LVWbCMquXe7Wh%2FfpBMELUQwQ5fI0cmjfH%2BN39UXaKgcvW6i%2Fw9hjfk620y9x7kCzw0%2B5YCvKkfL4WK3sK9k0QcQTq4BE1CWPmv0ACngjWQ4MrbHcEHADY7biN%2Bde4LsUCTmXnDNaZ2R4xtORxN0blnAQAms%2BfKekeoB5sX6iNqEy%2B%2F%2BJuR80RxHP%2BY9OIb8TB0lcIViKyFokhygIvBm1G5CBOyra3I60zVhLvZBtoKJLW4JM3OSFJxnAO1pWB6tnMwadocv4vwCSNRtQAYLZl6jowOAiayM1EqElTeyQZl2XryPtUDMDiRS512q1N4B7Q%2BH7cnbS%2B1NIbWWAPzOsXL28Cax0JqTklcg6JQJ5ldXPrNBu7D%2FZOkqNy8%2BB5u2hGvrPMoDOHfTwZinZrvana7EZIkcJZX3s1fzfohh2FIwurZoWAYXfoxZHDVSqOnjtMuFRd41Rnn%2FqqroDxSK0VI1NqCCD9gv2PCoppeUSw0p%2BLmgz5kHq%2FOzIVDQflWpbQ5m8aBys%2Foa0s6Jb02woZGjHwxfaF1qoluxKxxxePztodqXLVLMIWUuT2wFBy6IToAzzW%2BQDFH4skTv9Epcvz2As6yY6meJDLYILHWUXHhYJRDDz9drBBjqkAYRqOKFFW0Mp9lo3pGofST9Rp%2FGcAs7CnJG8v%2Fy%2FTu3N2TyeHSIn9FbjW8%2FzGioMxs8MnJnUbhY4LFMKG1%2BDlU%2B1loOBwpSufuhoUIHPeXivTDPQsPDz7EPqaDSrliR0B4%2B%2Fwh5QENuiUpvhtxy%2FBz9t4dMX1tjq%2B9lkjhjWENGWPLZDIQUuYrOHobjRw%2BdyfjkQsUuZLq2e2L%2Br7Qgk6BH9%2B3Yp&X-Amz-Signature=1dc8274c32919c8bc7ba416e5699f12bef490c0c3ae0c8482a705c38535a8c27&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FUCNQYO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtgwoP%2FsQ2XVc7a8zhYkfANqMSk18c0K8qhClg57UWUQIhAJsS8HKg%2FtGCr5IBlAHV21nZjOA%2BqpC6tURNawhFPkmnKv8DCHAQABoMNjM3NDIzMTgzODA1IgyAkhu1r5G%2Bzh0h2%2FYq3AOgP1zSl7r6oG67LVWbCMquXe7Wh%2FfpBMELUQwQ5fI0cmjfH%2BN39UXaKgcvW6i%2Fw9hjfk620y9x7kCzw0%2B5YCvKkfL4WK3sK9k0QcQTq4BE1CWPmv0ACngjWQ4MrbHcEHADY7biN%2Bde4LsUCTmXnDNaZ2R4xtORxN0blnAQAms%2BfKekeoB5sX6iNqEy%2B%2F%2BJuR80RxHP%2BY9OIb8TB0lcIViKyFokhygIvBm1G5CBOyra3I60zVhLvZBtoKJLW4JM3OSFJxnAO1pWB6tnMwadocv4vwCSNRtQAYLZl6jowOAiayM1EqElTeyQZl2XryPtUDMDiRS512q1N4B7Q%2BH7cnbS%2B1NIbWWAPzOsXL28Cax0JqTklcg6JQJ5ldXPrNBu7D%2FZOkqNy8%2BB5u2hGvrPMoDOHfTwZinZrvana7EZIkcJZX3s1fzfohh2FIwurZoWAYXfoxZHDVSqOnjtMuFRd41Rnn%2FqqroDxSK0VI1NqCCD9gv2PCoppeUSw0p%2BLmgz5kHq%2FOzIVDQflWpbQ5m8aBys%2Foa0s6Jb02woZGjHwxfaF1qoluxKxxxePztodqXLVLMIWUuT2wFBy6IToAzzW%2BQDFH4skTv9Epcvz2As6yY6meJDLYILHWUXHhYJRDDz9drBBjqkAYRqOKFFW0Mp9lo3pGofST9Rp%2FGcAs7CnJG8v%2Fy%2FTu3N2TyeHSIn9FbjW8%2FzGioMxs8MnJnUbhY4LFMKG1%2BDlU%2B1loOBwpSufuhoUIHPeXivTDPQsPDz7EPqaDSrliR0B4%2B%2Fwh5QENuiUpvhtxy%2FBz9t4dMX1tjq%2B9lkjhjWENGWPLZDIQUuYrOHobjRw%2BdyfjkQsUuZLq2e2L%2Br7Qgk6BH9%2B3Yp&X-Amz-Signature=7486a46078fae325ed8d2d91729706e49fcbab9d31567b8a13472f519e7b5f71&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
