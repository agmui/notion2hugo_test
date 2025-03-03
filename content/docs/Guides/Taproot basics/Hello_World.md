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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UME46COO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCABhS5AIQW75ffO8dSMWcKNhg9mrT5%2FNcRLHYazK1Z7AIhANAJyp%2FSq8pNbVvwqWLykbO2cIHqWApG%2BpXgecdfgNFbKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlzHcNrABAj6J5L08q3AMlS3kJy5eaKY%2FmVVBd7Y3KF6nJ8aRcecs0x5fhjyJuPjHSh2dozc2Y7u2Yp%2F7JuXyi%2F6zaAdRJm0JdlQDJ3GNw4WzSbeEn4aL1ESO0iZx7FIznL0GyH9qOO2yuHB34Hw9mBSdcYGR%2BGiq%2B6JDBpjfWzRVxmWv54y7tBG1eQEqLIiZnUK6p%2BZJlGe%2FpV9tIGC6HoUXPEubXtZgvdPMAbjQABpFP2urCpLIepDkAoxqpqp8r75spWMhuSBWyGH5SCOID6ppSYMI4sOKuB3UuFj%2B5BOZGC%2BqXan3fWjBnRVo4Ax7esBV9Pcoz3jdlJGzryvi%2BJ%2FYmDR90rswBWNmKLLev%2B%2F4z86j9zP5bbwAlf30JMj02Ri6NYxydYVqFZVdHZZNlTTauXVOFI525WDSB0VmIiQYJaWfRg7toCw3DTLEQ%2BfETQSu3l5oS4O8KLo9ucctnejwgti0Fngr5upn3z7js%2FxeLOSEhCi88Mq1j%2FbbIbScwUmIkC9yuMgbRlb8OS4eITGlP%2BLvhpCUrJEGCgFulVa91XhthK6YrOruC2zDTzRkicAanxCvyw8kN06o28olEaruQ%2Bku4dgyTBl4MeCWO5efhemxJmMbAkEnX9p6WUsD3kptP0hEdbvATZTCm%2BJS%2BBjqkAbN9%2ByUMPmWaV%2FhPSWawOY54baUZR%2FJ%2BRlFwWAQpLdJBlLMdd2RixX71OlGppeWkvkTY9suR1eAGkKacnK%2BKXMWgD%2BxbmCkHwMrt%2BqmxH%2Bnmq506dwLsoq5Bs1S1Sij7eiQaEnYz%2BExLmi6TvFm62lp4JOA0l6RE%2FUnKpGzGqTS5sjlRW368dEzsJ8Hi7dNJUKhkZhwAE51t03MLWEv9bcVCQfv4&X-Amz-Signature=b272425fdab0d05665f6a3b5ae520f4e80c685b83b74d3548706c606e1eb11ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UME46COO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCABhS5AIQW75ffO8dSMWcKNhg9mrT5%2FNcRLHYazK1Z7AIhANAJyp%2FSq8pNbVvwqWLykbO2cIHqWApG%2BpXgecdfgNFbKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlzHcNrABAj6J5L08q3AMlS3kJy5eaKY%2FmVVBd7Y3KF6nJ8aRcecs0x5fhjyJuPjHSh2dozc2Y7u2Yp%2F7JuXyi%2F6zaAdRJm0JdlQDJ3GNw4WzSbeEn4aL1ESO0iZx7FIznL0GyH9qOO2yuHB34Hw9mBSdcYGR%2BGiq%2B6JDBpjfWzRVxmWv54y7tBG1eQEqLIiZnUK6p%2BZJlGe%2FpV9tIGC6HoUXPEubXtZgvdPMAbjQABpFP2urCpLIepDkAoxqpqp8r75spWMhuSBWyGH5SCOID6ppSYMI4sOKuB3UuFj%2B5BOZGC%2BqXan3fWjBnRVo4Ax7esBV9Pcoz3jdlJGzryvi%2BJ%2FYmDR90rswBWNmKLLev%2B%2F4z86j9zP5bbwAlf30JMj02Ri6NYxydYVqFZVdHZZNlTTauXVOFI525WDSB0VmIiQYJaWfRg7toCw3DTLEQ%2BfETQSu3l5oS4O8KLo9ucctnejwgti0Fngr5upn3z7js%2FxeLOSEhCi88Mq1j%2FbbIbScwUmIkC9yuMgbRlb8OS4eITGlP%2BLvhpCUrJEGCgFulVa91XhthK6YrOruC2zDTzRkicAanxCvyw8kN06o28olEaruQ%2Bku4dgyTBl4MeCWO5efhemxJmMbAkEnX9p6WUsD3kptP0hEdbvATZTCm%2BJS%2BBjqkAbN9%2ByUMPmWaV%2FhPSWawOY54baUZR%2FJ%2BRlFwWAQpLdJBlLMdd2RixX71OlGppeWkvkTY9suR1eAGkKacnK%2BKXMWgD%2BxbmCkHwMrt%2BqmxH%2Bnmq506dwLsoq5Bs1S1Sij7eiQaEnYz%2BExLmi6TvFm62lp4JOA0l6RE%2FUnKpGzGqTS5sjlRW368dEzsJ8Hi7dNJUKhkZhwAE51t03MLWEv9bcVCQfv4&X-Amz-Signature=c86be42e2dcab744a29a096448482fb5838317166dfc7efaf4407edcdff4f7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
