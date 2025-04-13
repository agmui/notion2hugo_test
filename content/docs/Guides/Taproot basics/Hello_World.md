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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTW7VF5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWFPwvxO6z40WRbJYFWJLrCDYCoZnTHvbi5Zgv4pQ2vAIhAMcADvP9%2Bgz6a2EGF20diGTBTseXIaiNRbfL%2FKBlG%2F%2FIKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb1%2BMpAOk4swm%2B%2ByYq3AOBWSZxsHNv3EEL0%2BovdN20%2B1Kj2DpfXtwOjeYOjBMcSEJ2IxfrFkXb7sfv8SzKNyoPOGdF8j8JlKo7Ucz3fLgXix7BJnaLjpHWIn4O4oJH%2FtHH0ExKm9wx%2BCq%2BJCP5rOOOXCjabazJKPueXZC9KRzipYfwKY%2F41hXy7PEIqQbcCZWG5wuuVLoW7tqdR32R4Qfljqqhh06OXdSnpgthhM4bLSbLGuLMB9vadZnEyZlqQMmQIuAf%2FfQYqTmeLmUw5temceaGyUQm3hz49%2BsqM%2Fu%2B%2BPMSrO7CsE9eWNtKE%2FspgT%2FUmSMuAgTGGivlsDNWqc%2Fywz2JmrqQGGNXDs4GFKs0%2B7AslLljjnAsugbPycQuhh9q6GXMQFn5a6wpYdDoHDl5sVCHidU7q8kqOTNhX1ZF58ySmChn24IGP1ouvwg5Drq8JBeNivYx9YMP5rM0F4EgabS5HIdWo9TPdBGflYDa9aFw68G9Z%2Bkehgla0bqRK%2B937DXnAaKnu14ZlKqlXkB9rSLkivOZAnwHNEMMB2tHZ%2BuZ%2FoUK3y9zEG07DoW7IQckG3YHHrDZVZIjF81St70hxHoFCsdN8bvHKCorGX6S8GXA%2BgP2VeY1cq5sh1k%2FefsgQSRIdFZ3rlxExzDO2e%2B%2FBjqkAcYCMwrT6orOkqERUl2pCVXm2bofK8jFXOvsbkjJ4IwHIy9tiv%2BFq%2B8%2BaOssSB2hT38hiMzdkzISCyuYgu%2FWCXNTg%2BIAsJQFGGeWpCeqwmPnwsgBy4Mqq%2BGoukbvWSl3yQsVgAaQZNoE8oeX7jahPp1y07AB3BsVSEfp%2B2IPEKZcFUP%2FilBRSGoKIiM1Zuo00GAbGFryLNr9QxAnCCqW%2BLPcFa%2B1&X-Amz-Signature=cd6549c94fffa4201cc391fcf56c5499bb66511b75491313db952058b905a86d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTW7VF5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWFPwvxO6z40WRbJYFWJLrCDYCoZnTHvbi5Zgv4pQ2vAIhAMcADvP9%2Bgz6a2EGF20diGTBTseXIaiNRbfL%2FKBlG%2F%2FIKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxb1%2BMpAOk4swm%2B%2ByYq3AOBWSZxsHNv3EEL0%2BovdN20%2B1Kj2DpfXtwOjeYOjBMcSEJ2IxfrFkXb7sfv8SzKNyoPOGdF8j8JlKo7Ucz3fLgXix7BJnaLjpHWIn4O4oJH%2FtHH0ExKm9wx%2BCq%2BJCP5rOOOXCjabazJKPueXZC9KRzipYfwKY%2F41hXy7PEIqQbcCZWG5wuuVLoW7tqdR32R4Qfljqqhh06OXdSnpgthhM4bLSbLGuLMB9vadZnEyZlqQMmQIuAf%2FfQYqTmeLmUw5temceaGyUQm3hz49%2BsqM%2Fu%2B%2BPMSrO7CsE9eWNtKE%2FspgT%2FUmSMuAgTGGivlsDNWqc%2Fywz2JmrqQGGNXDs4GFKs0%2B7AslLljjnAsugbPycQuhh9q6GXMQFn5a6wpYdDoHDl5sVCHidU7q8kqOTNhX1ZF58ySmChn24IGP1ouvwg5Drq8JBeNivYx9YMP5rM0F4EgabS5HIdWo9TPdBGflYDa9aFw68G9Z%2Bkehgla0bqRK%2B937DXnAaKnu14ZlKqlXkB9rSLkivOZAnwHNEMMB2tHZ%2BuZ%2FoUK3y9zEG07DoW7IQckG3YHHrDZVZIjF81St70hxHoFCsdN8bvHKCorGX6S8GXA%2BgP2VeY1cq5sh1k%2FefsgQSRIdFZ3rlxExzDO2e%2B%2FBjqkAcYCMwrT6orOkqERUl2pCVXm2bofK8jFXOvsbkjJ4IwHIy9tiv%2BFq%2B8%2BaOssSB2hT38hiMzdkzISCyuYgu%2FWCXNTg%2BIAsJQFGGeWpCeqwmPnwsgBy4Mqq%2BGoukbvWSl3yQsVgAaQZNoE8oeX7jahPp1y07AB3BsVSEfp%2B2IPEKZcFUP%2FilBRSGoKIiM1Zuo00GAbGFryLNr9QxAnCCqW%2BLPcFa%2B1&X-Amz-Signature=9806037e57336a47c5d64b4b8238e9cd54f7f2ada5b3e000b97eaf39c9f8635e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
