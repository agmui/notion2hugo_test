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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRBETNV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBfCVoyu4hreqtvFXza0qwfJu4lq77FNjhvSIj4CeGGIAiEA%2FesZnZ3e2V22EiMieuNI4reITQNozrqi0rdzKY%2FhooMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAHPTPFeRAspSJ27QCrcA%2BLtejMwYTCIDxgArf4vJeN3QtadDc%2F%2BKjIuGjxDErTQPmZtW%2FR118l%2FbxEQtJ7ME1G8Xnjv9J5aEPGK4g4fHFPbA3PogcB%2FLvJPjrD6wSABVJJ4lwbJTbje1RiOwHu74QQJFqKnvmdThHVJDYMWZ2UGGHjwAYEWuKBPU75xoA6LjLKEZkJrRxACuel6TWzeWr8RQI%2BzdUq8veoagdLM6NclG3%2FYPOPBnjMknHdHLe%2FlqMHH9l%2BdrIevXQWxGgMucPkHyJOVVd%2FJ5FF1mhEyQ5NIKiyWAyjgF%2FTc5%2BTXdI12oQtICEN%2FHcksIDAMB4rZOE6lDenTQvcw0XMvsjY9QfE1hsbP3OG7j4rt5inJEhCidm48zltb8zALbeEkPvpWMzUhA65y0xH69cixqW%2Bmi92Em5g320tRiB9JftcWxi%2BRRkouOpuf%2BTV7CRk%2BRZkkrkZvZl1HZYPYIRvJPkLPg0W2tXNmWL5JOnhfUj2PQ665fvXfPmO5sQZbyoUU6ZiOnllnrj%2BsXhffIvk%2FuE9DuZ5wvWLMvxGGLEHNnYZaZMfzSvPVd8LUYp4R4xD%2BoGyyMr3qYRwyqnvehvHRLKx3RqzI%2BVthUQQTF2vjV%2FCN0Ji57hPTSOpcNqFjEODyMMj12sMGOqUBdJyyehvvse2PLIHRFfAwVzw3YPVOvbIMe4JQ3OaTSEBvP9rfwVxAt6vvHsBt46uQGJlnxp6YQrB1r%2BM6b2Q%2FUCOjPuqx6ZCVSwbRwi8P%2B1ZencRXnZ4gBV3b7VWAOzYgWa4nb%2Bz443uCZrswNIUg4IEMHoP0yakNyBGrJZFskSD%2BEUDnDIjbEO1yA%2F0hJ61%2But9Fm%2BbVmV%2BMGfSQ6FXNeyu7YILh&X-Amz-Signature=c9d8a82a3d509b2557d0d25974a86234381ccf532bece927d530537aa6d6ac55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRBETNV%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBfCVoyu4hreqtvFXza0qwfJu4lq77FNjhvSIj4CeGGIAiEA%2FesZnZ3e2V22EiMieuNI4reITQNozrqi0rdzKY%2FhooMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDAHPTPFeRAspSJ27QCrcA%2BLtejMwYTCIDxgArf4vJeN3QtadDc%2F%2BKjIuGjxDErTQPmZtW%2FR118l%2FbxEQtJ7ME1G8Xnjv9J5aEPGK4g4fHFPbA3PogcB%2FLvJPjrD6wSABVJJ4lwbJTbje1RiOwHu74QQJFqKnvmdThHVJDYMWZ2UGGHjwAYEWuKBPU75xoA6LjLKEZkJrRxACuel6TWzeWr8RQI%2BzdUq8veoagdLM6NclG3%2FYPOPBnjMknHdHLe%2FlqMHH9l%2BdrIevXQWxGgMucPkHyJOVVd%2FJ5FF1mhEyQ5NIKiyWAyjgF%2FTc5%2BTXdI12oQtICEN%2FHcksIDAMB4rZOE6lDenTQvcw0XMvsjY9QfE1hsbP3OG7j4rt5inJEhCidm48zltb8zALbeEkPvpWMzUhA65y0xH69cixqW%2Bmi92Em5g320tRiB9JftcWxi%2BRRkouOpuf%2BTV7CRk%2BRZkkrkZvZl1HZYPYIRvJPkLPg0W2tXNmWL5JOnhfUj2PQ665fvXfPmO5sQZbyoUU6ZiOnllnrj%2BsXhffIvk%2FuE9DuZ5wvWLMvxGGLEHNnYZaZMfzSvPVd8LUYp4R4xD%2BoGyyMr3qYRwyqnvehvHRLKx3RqzI%2BVthUQQTF2vjV%2FCN0Ji57hPTSOpcNqFjEODyMMj12sMGOqUBdJyyehvvse2PLIHRFfAwVzw3YPVOvbIMe4JQ3OaTSEBvP9rfwVxAt6vvHsBt46uQGJlnxp6YQrB1r%2BM6b2Q%2FUCOjPuqx6ZCVSwbRwi8P%2B1ZencRXnZ4gBV3b7VWAOzYgWa4nb%2Bz443uCZrswNIUg4IEMHoP0yakNyBGrJZFskSD%2BEUDnDIjbEO1yA%2F0hJ61%2But9Fm%2BbVmV%2BMGfSQ6FXNeyu7YILh&X-Amz-Signature=72aeb280929573626fa1bc3e02bffcaf0aa39dd888d4c066e6efd75f1e8a2525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
