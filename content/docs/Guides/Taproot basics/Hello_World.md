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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RE5TS4G%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoJ1%2FvGWtN4tCE3zzDD07njCZY1EO4AlTh0pKkKcc5MQIhAPoZEv%2Fmajwe6RdqMYdcaq3bZj9xGS9Mo1zKUfJUS5UmKv8DCCkQABoMNjM3NDIzMTgzODA1IgyfVci9M8hO7wmoRC4q3AMO19IG0786qdWgQvCEUI7ffP3JfoPl2Kndq1Hb8rio3zkaw8oyOT497XfLdSAVEg%2BUzCgFDMvGRNGTLNvUpemuyKZzZ7Tq76SDQX4yqa3rexD%2B5f%2FKiF3kakVbgiVehgM0TubTZk1sKqO9692zaHyjyXkopIjE8r3MoBVFB4GWEOailBMeN9popCU43gmbS%2BIfjW4YOTY4dNQsBe8QaowE96nLk8o08IB%2Fs7f7cglLg7%2FkGPnqVOG9sPeRqS7K3eB34yjvtRL1DY89DcJa%2F%2FuM9nJg8j4ACwpS3IPO%2FBmTmG12eHAU8%2F4WM0zC8kTGLyezw9nDKNAs0kLFp1Ekgcz%2Fbt%2FRYIsE9HEYnd3iT2uV9qYFhts7dSxnlUtkghPFT0aYeB2iqmlNv8xZL2KVOCFAchIqBLe7fYhMFgF1t2QNqR5irM0ydbP%2Fw7%2FxactXPaoDN0BFug%2B2%2B2DGhecdEoClNalK4AF9iQVvwzD9eAePCwKIR2TnL45iF2U5UQkWLBnRlQ8%2Fc9N5CV%2FfDTyO727EZ5fV3w%2FzqaL1JbPtP2P1v1msaYze6Ln3j7RP8WsjJeAzWZonUFNp8xzCJUp5ldaZXChtvbWqO1YBIJH%2F1J9ryM4mWhvSp5PzSFKZEjDFtpbBBjqkAfvl1yt8Gg9I4cQTWB%2FI%2B0iZpPmGrvjOpqcS5d7kEbIeKBpP3Z0aIC5PvyKLch8ssfe7XI5bhsVmwy7oAtsh1nf%2BGGP7tjVGMRc7Psr9HWq4J4Xs7SH4jMuXMIxjfA2fEEkjBxQLcEvLl9sb4EobGX2XWShv37Vsq%2FWK92ghlQ9bF%2F9rl8%2BJk8tWP9Gdf1fvk1vYQm5%2BzARmJmeXi7oPiWdEkcR8&X-Amz-Signature=aaad2421ef103b8ab16463dc2e22c278657841fb31b3da2b63e2b645dc327df6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RE5TS4G%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCoJ1%2FvGWtN4tCE3zzDD07njCZY1EO4AlTh0pKkKcc5MQIhAPoZEv%2Fmajwe6RdqMYdcaq3bZj9xGS9Mo1zKUfJUS5UmKv8DCCkQABoMNjM3NDIzMTgzODA1IgyfVci9M8hO7wmoRC4q3AMO19IG0786qdWgQvCEUI7ffP3JfoPl2Kndq1Hb8rio3zkaw8oyOT497XfLdSAVEg%2BUzCgFDMvGRNGTLNvUpemuyKZzZ7Tq76SDQX4yqa3rexD%2B5f%2FKiF3kakVbgiVehgM0TubTZk1sKqO9692zaHyjyXkopIjE8r3MoBVFB4GWEOailBMeN9popCU43gmbS%2BIfjW4YOTY4dNQsBe8QaowE96nLk8o08IB%2Fs7f7cglLg7%2FkGPnqVOG9sPeRqS7K3eB34yjvtRL1DY89DcJa%2F%2FuM9nJg8j4ACwpS3IPO%2FBmTmG12eHAU8%2F4WM0zC8kTGLyezw9nDKNAs0kLFp1Ekgcz%2Fbt%2FRYIsE9HEYnd3iT2uV9qYFhts7dSxnlUtkghPFT0aYeB2iqmlNv8xZL2KVOCFAchIqBLe7fYhMFgF1t2QNqR5irM0ydbP%2Fw7%2FxactXPaoDN0BFug%2B2%2B2DGhecdEoClNalK4AF9iQVvwzD9eAePCwKIR2TnL45iF2U5UQkWLBnRlQ8%2Fc9N5CV%2FfDTyO727EZ5fV3w%2FzqaL1JbPtP2P1v1msaYze6Ln3j7RP8WsjJeAzWZonUFNp8xzCJUp5ldaZXChtvbWqO1YBIJH%2F1J9ryM4mWhvSp5PzSFKZEjDFtpbBBjqkAfvl1yt8Gg9I4cQTWB%2FI%2B0iZpPmGrvjOpqcS5d7kEbIeKBpP3Z0aIC5PvyKLch8ssfe7XI5bhsVmwy7oAtsh1nf%2BGGP7tjVGMRc7Psr9HWq4J4Xs7SH4jMuXMIxjfA2fEEkjBxQLcEvLl9sb4EobGX2XWShv37Vsq%2FWK92ghlQ9bF%2F9rl8%2BJk8tWP9Gdf1fvk1vYQm5%2BzARmJmeXi7oPiWdEkcR8&X-Amz-Signature=4b98f7a75fe3d4a83dae5d5bb7bf362dd4e127b41d01352af91b2f2117abbbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
