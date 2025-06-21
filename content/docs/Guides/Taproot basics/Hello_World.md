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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPT3PUF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe4luEkLLXg6tHpVCyqz1i5jmiCrN9%2FV1WX9N9D%2BYhOAiEAl5XamFVECMz3cKRTvaAI9Fez7VFRUaF82awHPHCmzGkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B8Tg4qoK9wVsc2jSrcA%2BOnsbR0TaYaPTCQrIJ65LR61N%2BCHUo5g8ob1YRPopdLg%2B8Vgoe1q8wAGYGkFjPlxJZDyMxDg89Uw7bPBV7Oi2zkzC8qlKt%2B6Xh4hGPuCA%2Fd1ckuRS3RtaMXh45yb84IKQmrecJjv5Ppuq5IoI6HuFHu0RGIwyOmTze5SlSyoL4xu0D4fr1S89UaE1sPzamPxvF3kSzKK8VbtlQ6Xj3Q%2BNIfgXQfayQmNCKs7Bf6C%2BTeacVsr%2BsSJWFHfILQV%2BLCXquxxPByWibB7WwO3EbDoatPMwWwTumxpLe7ofS3cX%2FUgrg9gN0i2z%2F9RNHckJsxvFWsPTSAeWOka16BJf2bU1NZ0cToq3eSGtktX4VBIfJEHtfWBayHmOEkdmBLwwj2q3pSVOl1TW3565KtiPA7XUOWqlxx90SrBvKYjWzfzTcukA%2BGNpF5c8e9j%2BJ%2F9TJfd5qWiskGu9lv3E8Mh1LiCdM2Jd04ZAl%2F2O6xSIsZHtnvBn0lkfb8xb7BAGaUtM9MfLUDXTEijTj7Hp8VPMIM5fmDbvzMTCWVjwzexTaerdbBSTLVjr%2Bpa9yYnB1NYCkaXZCKBO%2FJ7jCoR%2Fv2wzpfiVDfQaS1d5GTD6I%2FQZOIa%2Fhx%2BCZLtYGaGaH1eJh2MKrP2cIGOqUBvpOd6LXeHqO5wPwunV5OPk2OKC5DEAj8weTI293tdHDLJyQxdB9uQLVmudWisiyHDV1JW6hU0RKBAWgkP%2BUZmor5J0P%2BRT9iF67dRhgAgUdlqQBSaIpNyEOglBtrb%2F2BxOW53MZWlA7ub0LzuDAYH6sGoS0q4JXh8l1qKwTxUcalO%2BAP6g09mEtRAF%2BrA%2BXh9eSoJmDQOQDT6nZlAs7di1IqAprv&X-Amz-Signature=3689ea0b35aab2e35b388d908c305d833a869cd86fcc5e7f22890457d631ee7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPT3PUF%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe4luEkLLXg6tHpVCyqz1i5jmiCrN9%2FV1WX9N9D%2BYhOAiEAl5XamFVECMz3cKRTvaAI9Fez7VFRUaF82awHPHCmzGkqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2B8Tg4qoK9wVsc2jSrcA%2BOnsbR0TaYaPTCQrIJ65LR61N%2BCHUo5g8ob1YRPopdLg%2B8Vgoe1q8wAGYGkFjPlxJZDyMxDg89Uw7bPBV7Oi2zkzC8qlKt%2B6Xh4hGPuCA%2Fd1ckuRS3RtaMXh45yb84IKQmrecJjv5Ppuq5IoI6HuFHu0RGIwyOmTze5SlSyoL4xu0D4fr1S89UaE1sPzamPxvF3kSzKK8VbtlQ6Xj3Q%2BNIfgXQfayQmNCKs7Bf6C%2BTeacVsr%2BsSJWFHfILQV%2BLCXquxxPByWibB7WwO3EbDoatPMwWwTumxpLe7ofS3cX%2FUgrg9gN0i2z%2F9RNHckJsxvFWsPTSAeWOka16BJf2bU1NZ0cToq3eSGtktX4VBIfJEHtfWBayHmOEkdmBLwwj2q3pSVOl1TW3565KtiPA7XUOWqlxx90SrBvKYjWzfzTcukA%2BGNpF5c8e9j%2BJ%2F9TJfd5qWiskGu9lv3E8Mh1LiCdM2Jd04ZAl%2F2O6xSIsZHtnvBn0lkfb8xb7BAGaUtM9MfLUDXTEijTj7Hp8VPMIM5fmDbvzMTCWVjwzexTaerdbBSTLVjr%2Bpa9yYnB1NYCkaXZCKBO%2FJ7jCoR%2Fv2wzpfiVDfQaS1d5GTD6I%2FQZOIa%2Fhx%2BCZLtYGaGaH1eJh2MKrP2cIGOqUBvpOd6LXeHqO5wPwunV5OPk2OKC5DEAj8weTI293tdHDLJyQxdB9uQLVmudWisiyHDV1JW6hU0RKBAWgkP%2BUZmor5J0P%2BRT9iF67dRhgAgUdlqQBSaIpNyEOglBtrb%2F2BxOW53MZWlA7ub0LzuDAYH6sGoS0q4JXh8l1qKwTxUcalO%2BAP6g09mEtRAF%2BrA%2BXh9eSoJmDQOQDT6nZlAs7di1IqAprv&X-Amz-Signature=fe5f0266f4637c728a0e4a18b33d2b2b96b5c6bb725d531fe90908d445ff0a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
