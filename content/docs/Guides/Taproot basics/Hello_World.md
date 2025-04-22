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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCHDQR7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDM0%2BZZutlIZPWsc4oLFYSGdV4GtP5m5D9ks46eg8jWrwIgGcBiL0Bg39gilsp4TzmkZi5AmKYTfhiY3JnwFVg%2F9cEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMIKdL%2Bb%2FN9EWQcJCrcAzyPi5qh%2F592J16qFtjICRWL%2F4PhD6C%2Bm2ExZSxHA4sOUsVPoLgj%2F5Jq7y%2F4a%2B%2FKzBN%2BfG%2BwN2O3oRsc7qzwzP1J52EPyxnr3LWtlozYmTMYBWCjJMHZ80nWFkeJTXuoENFG8RlR%2BvEX%2BxYP3c90gELtU1bPbfqfSsvPUPzAbXemTn84egnBfYQ14ZlGmM46cG45k%2FN1aw2va2DzP4fOocKexx8RUtdcQdHyJ2XLL%2FmIoqa1Urr4WcTTgI21geJdYBVMQeT3akgAg2Hb5wlYuGkbOJZq0Gz3KHrStd5AXaZlqoThk91gVaJT%2BEFGr46To%2FOkQQ0TlyNW4HXEXQlQA%2BIV1INdAoeRbcXDSciH18M6CyhplNpQ09qNs9SFf9Z%2FHVCQrh91YZpig%2BR4ztQC5LcNkv88SrsEbGlJegzeaHRXJnHwdO8v0jaHF9Z6kukcAKHD525aeDTqsDg0jxRPdSrQKFNw3WqpEU2HZKPTWh1NxLv52sKm2Bfk0%2FDZ82Nt07CZYllPChAtrbiKdYCpukMsPugIFWe9PEqHK%2BFtBYdGyJqMg5DKIBFbs0q35WExN%2BLSQo%2FxoyEL9hhWEUxmPIu6zd6uevbhBsIudSnw1jeJtwuc%2FHVBgte%2BkaOEMPPfnsAGOqUBmTLUN74OQUEP%2BAaugyXyN0xrzVW0A12Ud%2Fv4uvGGADHij6mi5b3zAGOl4PRbma2KvX7ErYaDeoIQ50JIS0qzT4CFVjn4RHLzceS7aTHdlTeBkQFxYmDtLC7aZsiZy4I83Wxg0XtVg6UyipbdWf1veAOa2hSbBMFowrHA4KMpczOOd5SMuxOB3cDvChD2cQtJB2aH1KwUkmJrYM29SVkVj4nSUseJ&X-Amz-Signature=5f6955e0daf666d5d16eee04f086a3ceeec8f0396c1ac380c50a345165e623d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCHDQR7%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDM0%2BZZutlIZPWsc4oLFYSGdV4GtP5m5D9ks46eg8jWrwIgGcBiL0Bg39gilsp4TzmkZi5AmKYTfhiY3JnwFVg%2F9cEqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMIKdL%2Bb%2FN9EWQcJCrcAzyPi5qh%2F592J16qFtjICRWL%2F4PhD6C%2Bm2ExZSxHA4sOUsVPoLgj%2F5Jq7y%2F4a%2B%2FKzBN%2BfG%2BwN2O3oRsc7qzwzP1J52EPyxnr3LWtlozYmTMYBWCjJMHZ80nWFkeJTXuoENFG8RlR%2BvEX%2BxYP3c90gELtU1bPbfqfSsvPUPzAbXemTn84egnBfYQ14ZlGmM46cG45k%2FN1aw2va2DzP4fOocKexx8RUtdcQdHyJ2XLL%2FmIoqa1Urr4WcTTgI21geJdYBVMQeT3akgAg2Hb5wlYuGkbOJZq0Gz3KHrStd5AXaZlqoThk91gVaJT%2BEFGr46To%2FOkQQ0TlyNW4HXEXQlQA%2BIV1INdAoeRbcXDSciH18M6CyhplNpQ09qNs9SFf9Z%2FHVCQrh91YZpig%2BR4ztQC5LcNkv88SrsEbGlJegzeaHRXJnHwdO8v0jaHF9Z6kukcAKHD525aeDTqsDg0jxRPdSrQKFNw3WqpEU2HZKPTWh1NxLv52sKm2Bfk0%2FDZ82Nt07CZYllPChAtrbiKdYCpukMsPugIFWe9PEqHK%2BFtBYdGyJqMg5DKIBFbs0q35WExN%2BLSQo%2FxoyEL9hhWEUxmPIu6zd6uevbhBsIudSnw1jeJtwuc%2FHVBgte%2BkaOEMPPfnsAGOqUBmTLUN74OQUEP%2BAaugyXyN0xrzVW0A12Ud%2Fv4uvGGADHij6mi5b3zAGOl4PRbma2KvX7ErYaDeoIQ50JIS0qzT4CFVjn4RHLzceS7aTHdlTeBkQFxYmDtLC7aZsiZy4I83Wxg0XtVg6UyipbdWf1veAOa2hSbBMFowrHA4KMpczOOd5SMuxOB3cDvChD2cQtJB2aH1KwUkmJrYM29SVkVj4nSUseJ&X-Amz-Signature=a38fd5832e025bc7ec296f064c74bb8c143c24004f2742ebbafe27b50d56a85c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
