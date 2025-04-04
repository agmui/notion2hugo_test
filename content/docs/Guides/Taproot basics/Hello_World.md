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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4SOOJR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUxU7rYbCA9ePmP834zT%2FeOM5bxU1r5PwqA3%2BgJXkstAiBK1P7sSorqyVjrSKBEh%2BYNaHozCXneuuoka3h%2BgmKo4Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMs6SaVM6T%2FV5wEOknKtwDXAgYvdHjNVSrcCJ7s03jS0wUC4fiA%2B%2B8h7HukGV8tffTloT2mQbqxIKsEs05y3RcecNwdBQNMPT5o6vWoac3nXNyi9IcB2acVnf9TeGauH3YMEcemMb3vwO3eq6vbXqBBs%2F9fF71ducmQ46qJ1yj8WbsoUtSJ90ALo5jwCCoiKO3oaC8ElRunW%2BlarVOON90JWX0p66oWFSXkHie7h5YvH%2F3QVEMvpnSU2CioF7ywOsXtB53w0LSRIXPPWcY%2F0k%2B13EZdvRe%2BeES1%2FwpgY1AR7HIDMnIkfMxiI34eYG1BCl4ZY%2FsPxjwbhh7nfEc63t9zj1xrfkC50NewMuGSZkqJyVmXsvxX%2BDHCs4DakWLwTT2lE3ZjWIBjHrex47JVKQI4Kh8Bi2RAt6XZTcbUjgEfc7t55SSBisAQArQ5JJTEInfI1gGHvdkm700%2F%2BHtLAodLLwMMifaiF7bJjuwoPlOaU0KZzTOIbFaLBT8ofJowswlKyB3p8oa6CeEwnx0MqRZmJ4uaraB%2F54h6F9lA6jtA3AabAsY9%2F0SkIWXZwHijL0t9My7YK%2B3VrQt7SCgpmZWUM8IAd3r4zEq8fsnNr9GM8y5D9gaJPrfe73J%2FMUS28LTp9apRxRwnWUfsosw5NLAvwY6pgEbruSN403NvOat6a3VHxnCYrwJLPgtIWRm8WflBuyNWijAFbKgMz3PuJQDRTKg1xZ8UMhi30PEtwUZuhUcrKn%2Bow7mVfo7ROS%2FIIdkAs%2FBHGS%2F0x%2Fvr0GUVYdUdvOm1qtXf6C%2B5ChQ6vnERBplbEh4Sby9AAcml6Fe6u%2FMefHDMvzXsI%2F%2BvhXnC7W0Y1IRl5IRxJUbX6OdfDp5qvPvlvSlbHJpFvz9&X-Amz-Signature=2986adc6b79726e9469cd33169c7eccf2eec59e2f8425e8782bcd070dfb6ecb2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4SOOJR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUxU7rYbCA9ePmP834zT%2FeOM5bxU1r5PwqA3%2BgJXkstAiBK1P7sSorqyVjrSKBEh%2BYNaHozCXneuuoka3h%2BgmKo4Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMs6SaVM6T%2FV5wEOknKtwDXAgYvdHjNVSrcCJ7s03jS0wUC4fiA%2B%2B8h7HukGV8tffTloT2mQbqxIKsEs05y3RcecNwdBQNMPT5o6vWoac3nXNyi9IcB2acVnf9TeGauH3YMEcemMb3vwO3eq6vbXqBBs%2F9fF71ducmQ46qJ1yj8WbsoUtSJ90ALo5jwCCoiKO3oaC8ElRunW%2BlarVOON90JWX0p66oWFSXkHie7h5YvH%2F3QVEMvpnSU2CioF7ywOsXtB53w0LSRIXPPWcY%2F0k%2B13EZdvRe%2BeES1%2FwpgY1AR7HIDMnIkfMxiI34eYG1BCl4ZY%2FsPxjwbhh7nfEc63t9zj1xrfkC50NewMuGSZkqJyVmXsvxX%2BDHCs4DakWLwTT2lE3ZjWIBjHrex47JVKQI4Kh8Bi2RAt6XZTcbUjgEfc7t55SSBisAQArQ5JJTEInfI1gGHvdkm700%2F%2BHtLAodLLwMMifaiF7bJjuwoPlOaU0KZzTOIbFaLBT8ofJowswlKyB3p8oa6CeEwnx0MqRZmJ4uaraB%2F54h6F9lA6jtA3AabAsY9%2F0SkIWXZwHijL0t9My7YK%2B3VrQt7SCgpmZWUM8IAd3r4zEq8fsnNr9GM8y5D9gaJPrfe73J%2FMUS28LTp9apRxRwnWUfsosw5NLAvwY6pgEbruSN403NvOat6a3VHxnCYrwJLPgtIWRm8WflBuyNWijAFbKgMz3PuJQDRTKg1xZ8UMhi30PEtwUZuhUcrKn%2Bow7mVfo7ROS%2FIIdkAs%2FBHGS%2F0x%2Fvr0GUVYdUdvOm1qtXf6C%2B5ChQ6vnERBplbEh4Sby9AAcml6Fe6u%2FMefHDMvzXsI%2F%2BvhXnC7W0Y1IRl5IRxJUbX6OdfDp5qvPvlvSlbHJpFvz9&X-Amz-Signature=aac1404d655800bac17d1660f82eb59660b22be4bd1807638fccd049dc880ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
