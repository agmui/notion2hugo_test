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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4MEUAR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDLsGAr4tx9VQO2YsgO9Qq8HULKyGyNn0JvR3wjz9QfAIhAIObgGBfbLsH9s%2FgXfwa%2Byr6FPuQylMxub5fE3H4SZtIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvIBWNtBJD0MYW%2BnAq3AMehTSMcY0V1%2BO%2FIyfK%2BJstVM6RtryNsYufYd4S970Rwe9w7n8uksKqcJc1IpwUMfbpSzl%2Feu1wQ8q6FKOsaYEVwHydAFgW8K0ngeMGY7VsyFaq7MW9VRaJtW3WIJBDlvPhXD%2FRBtnxaQnYpjb3BwJYf1Qxiw3WMtQM7TKSHUXZzmx%2Bs9krQhvZ5IxSdqWtX29l8CYL5ck2K%2BbFhiAphKft4Ug6PMiEiepFy1SuVwLQO1i3AOZYC2v4b%2FeP5x5euXSsBf2hfqKEOWvNJnPqQmtik4oGcnroVgmbQlhx%2FeHxceGR4V62qAfEpf8UBZa0PiPrdVKQKssFv%2BLt3DOAHOaxfN9ftI38OK4tA1tLCxD1uN7R0WI6%2BMYsd%2FOz92%2FRirb7uNnJ2L6LIiBQLCb9LDYInURNBUsz61B5w3XLNT3tx0O36b%2FF1uMlpO1MdPdPJVg9jRCbOQuXPTfV5QhhRStmfGrBRuV%2FHTAqfYeG0wAiw4lEmykLNswZ2cnPwORNCXl7XKHHCtimKV3tz9dgIASlECWitN5mIGYKnv4TwFGYL1SZ5gj4emk7F3nHE78MQ3InIcp0YxCC0gPrYpK9e1iXAlg9WxMhh80O5lhAxqKR5dyQKrCWq0OtM6hiyjCxiN%2FBBjqkAdOxEsIHwnpykjSI84HiVJ8eJ%2BFO5bGCudm4ezfLEavW%2FSpidGzOEcSj7ia3nzFxCJ3ol91%2B9temFHPtUkcx0g1nkCzkBZDRI1%2FRl5UmNpzGCSXddbEqhi5Oc%2F%2F4bZy8KzGhmmr%2FvhomUTSUu7sftuiUEi05BGL%2BvyRsudC%2BD7ACcB7EbAFP3P5%2FjlEwT4V1Cwh3mRok93OtGXQQTaGNdsxa9Qe8&X-Amz-Signature=0aca555a7979c7d0fbb516263f62372eef01416431686026e2fc540ec38c9c44&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4MEUAR%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDLsGAr4tx9VQO2YsgO9Qq8HULKyGyNn0JvR3wjz9QfAIhAIObgGBfbLsH9s%2FgXfwa%2Byr6FPuQylMxub5fE3H4SZtIKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvIBWNtBJD0MYW%2BnAq3AMehTSMcY0V1%2BO%2FIyfK%2BJstVM6RtryNsYufYd4S970Rwe9w7n8uksKqcJc1IpwUMfbpSzl%2Feu1wQ8q6FKOsaYEVwHydAFgW8K0ngeMGY7VsyFaq7MW9VRaJtW3WIJBDlvPhXD%2FRBtnxaQnYpjb3BwJYf1Qxiw3WMtQM7TKSHUXZzmx%2Bs9krQhvZ5IxSdqWtX29l8CYL5ck2K%2BbFhiAphKft4Ug6PMiEiepFy1SuVwLQO1i3AOZYC2v4b%2FeP5x5euXSsBf2hfqKEOWvNJnPqQmtik4oGcnroVgmbQlhx%2FeHxceGR4V62qAfEpf8UBZa0PiPrdVKQKssFv%2BLt3DOAHOaxfN9ftI38OK4tA1tLCxD1uN7R0WI6%2BMYsd%2FOz92%2FRirb7uNnJ2L6LIiBQLCb9LDYInURNBUsz61B5w3XLNT3tx0O36b%2FF1uMlpO1MdPdPJVg9jRCbOQuXPTfV5QhhRStmfGrBRuV%2FHTAqfYeG0wAiw4lEmykLNswZ2cnPwORNCXl7XKHHCtimKV3tz9dgIASlECWitN5mIGYKnv4TwFGYL1SZ5gj4emk7F3nHE78MQ3InIcp0YxCC0gPrYpK9e1iXAlg9WxMhh80O5lhAxqKR5dyQKrCWq0OtM6hiyjCxiN%2FBBjqkAdOxEsIHwnpykjSI84HiVJ8eJ%2BFO5bGCudm4ezfLEavW%2FSpidGzOEcSj7ia3nzFxCJ3ol91%2B9temFHPtUkcx0g1nkCzkBZDRI1%2FRl5UmNpzGCSXddbEqhi5Oc%2F%2F4bZy8KzGhmmr%2FvhomUTSUu7sftuiUEi05BGL%2BvyRsudC%2BD7ACcB7EbAFP3P5%2FjlEwT4V1Cwh3mRok93OtGXQQTaGNdsxa9Qe8&X-Amz-Signature=f2caf33a1a5afe4ebd0b2a26554599d2254ec1ce769c0d5b3e67e348d18df3ef&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
