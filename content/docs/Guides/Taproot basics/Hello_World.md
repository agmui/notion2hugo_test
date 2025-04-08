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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKO4CO2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHCoiwpr3kI1t%2FybZ3SWO%2FnD4KQFl8lkd26JjyvxEuPcAiEAlXFt1rh%2BstSZG1lZ4lYI5TpPssuwWPTuJCnSYleyYakq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNOGxvgPqzMZpuUSESrcAwR9KU%2BiT9PKVPNa6ZXZpym3SVmncKh3b66%2FZ8Wi9jS0ccsCbf8V1FZwrMkele%2FFwVbZaJm%2FUoPrDmVbh15FzQv0T9XCD1PE6VLWK3NhPqxDveHrD3m8tceswD%2FhLxnBvhAQvZamLLlUSIi62e1w%2B8m06rw5OfJejsHJzZ22urqK1aM1IXHMpY7Qv7m2bndAFvsLbLKD8wjXvK6i8EplUhPb6xaRd%2Bku2obwrpxfIxci66F3VGgDkfjm9h2akOsnynnGkQsbGJLxvLH0kYLyl7yximu10OycAiRZ15LXb95NiZHTfduywdL5PG%2FE0IiQW%2FukwBmzqvYT6xrDdS2Me%2B%2FxdwYZXGdsZI6i2UqQw0G%2Fzdx0kNdHh0XV%2BSPBo0hRivoslMySpC5GM3DGB7cMSHAU7W6e28Csx%2FJVke3NMBPuwYwzb90HXm72Qjyct3%2FZKNrhT4NfN00aOLRomhVnU3cHiAVh22NnQjynjpWAWBwNyplLD1FBscSscWV1TYyJtelQAR16BwTQahTnHm1vQn7tCF4yP4wagtE06b79uUw7oUl7wUThD4evD6GKRJ32I3fd2aB6Fcs1Ty2GTF8BxKEpBlBgr76CSnQxu4FJvvKaPT13VbpMNWod3oOZMK7V1b8GOqUBC%2FlaQvAVn4AnkuvgL0vuCHzhNqtJFyoOrUkPOA5hLBQoRSUGvbrpUUmF1mNtP0rx4opMiXccu1elKJtqU9dW9bP%2B2BCQChbs6s6kuV1SYC8zrw36zkFrpSW9w80Qf%2FDg1Yp1%2FIsFKddwZebQkhUAEAHZ4hCeXWR0P61gDHJwrmV4llDAiyC0beFw8cHZMiYaLv1QwtbE8W9HcPPsVy%2F1WT%2F1SLLu&X-Amz-Signature=56393dd155bd25361ec9d1441c7bb8f1dc3e838d8a1f37cef2825c5bee3e75e3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDKO4CO2%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHCoiwpr3kI1t%2FybZ3SWO%2FnD4KQFl8lkd26JjyvxEuPcAiEAlXFt1rh%2BstSZG1lZ4lYI5TpPssuwWPTuJCnSYleyYakq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDNOGxvgPqzMZpuUSESrcAwR9KU%2BiT9PKVPNa6ZXZpym3SVmncKh3b66%2FZ8Wi9jS0ccsCbf8V1FZwrMkele%2FFwVbZaJm%2FUoPrDmVbh15FzQv0T9XCD1PE6VLWK3NhPqxDveHrD3m8tceswD%2FhLxnBvhAQvZamLLlUSIi62e1w%2B8m06rw5OfJejsHJzZ22urqK1aM1IXHMpY7Qv7m2bndAFvsLbLKD8wjXvK6i8EplUhPb6xaRd%2Bku2obwrpxfIxci66F3VGgDkfjm9h2akOsnynnGkQsbGJLxvLH0kYLyl7yximu10OycAiRZ15LXb95NiZHTfduywdL5PG%2FE0IiQW%2FukwBmzqvYT6xrDdS2Me%2B%2FxdwYZXGdsZI6i2UqQw0G%2Fzdx0kNdHh0XV%2BSPBo0hRivoslMySpC5GM3DGB7cMSHAU7W6e28Csx%2FJVke3NMBPuwYwzb90HXm72Qjyct3%2FZKNrhT4NfN00aOLRomhVnU3cHiAVh22NnQjynjpWAWBwNyplLD1FBscSscWV1TYyJtelQAR16BwTQahTnHm1vQn7tCF4yP4wagtE06b79uUw7oUl7wUThD4evD6GKRJ32I3fd2aB6Fcs1Ty2GTF8BxKEpBlBgr76CSnQxu4FJvvKaPT13VbpMNWod3oOZMK7V1b8GOqUBC%2FlaQvAVn4AnkuvgL0vuCHzhNqtJFyoOrUkPOA5hLBQoRSUGvbrpUUmF1mNtP0rx4opMiXccu1elKJtqU9dW9bP%2B2BCQChbs6s6kuV1SYC8zrw36zkFrpSW9w80Qf%2FDg1Yp1%2FIsFKddwZebQkhUAEAHZ4hCeXWR0P61gDHJwrmV4llDAiyC0beFw8cHZMiYaLv1QwtbE8W9HcPPsVy%2F1WT%2F1SLLu&X-Amz-Signature=43ad1ac32fe745f771e0a1133d799e1c546d9ae1126c5e4b9e50375e3e28b3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
