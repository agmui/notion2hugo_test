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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVMGRC2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnlQd0hVNbatVlENHb7LTOW36CAvFkwYE8WvSTIfjNjwIgTHBoBM0kX8h%2BADhyvt50VVojsPco2P82Y4gwC9HQek4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFAI0eHUrKjT1H8PkSrcAxg0V7%2FHx7qwy6BwRUBaiG3Clp%2FZEKz1Q0PWyb%2BVgcOmtnlDDLNwMUb0JUlapFsIc%2Bob0TpfphiZNVh9uzDL015XQRwM93iaiJAsJASp9VwXqo%2Bn1A0tAOlLL1eFQjstqFCnMJRS0J%2FrjJdxHoDV%2F2K5Yki5rlw5x%2FQ7IT2yiKzvPc3XAfYapKU5oJPxXSkdqJrJoLY1kJfq6Qe4g2ArUm%2FDhZHH9JO5VT2oxCTelFyCOrg%2Bt54ht5gAE6yasYeTx75mG9AAmrGxO0y11ruIIct7HOLzBLJ0U9TTmMEShTNtV6I9ECiJ%2Fh9ekoWIBs%2F5ul4mBZl3VRBCwYLmwHOxKrNpN%2BlPmzVR2zsF0XmX3P%2BGW9gY91ahpG%2B6ulOopNhZoO5OU3%2FaZVn8cJvAVCn0%2FNhw%2BOZmQ3%2BmwpIkpSyjYCYYyPokZ5UsV6ScABt9DG6usNyX0zGmGGdvMxuUwn%2B%2FpogY6r%2B0jx%2BrayI4ODfJVun2R7dNuSdw8F3ad%2BTKL9vanvpvUuNo6NDj0qT%2FIva5SXGhw3FvHsWEcARUnKtdpSVEAm8%2Bh0hAqCFbrly8kAZXpOiVn8euw1Y7YE3QPnrA10PKOntmcRYxxikG3PtKGm0Hl%2B2VA%2Boc9bZ2KYh%2BMO22hcAGOqUBqnXsRh1f%2FSZOZuKr6xVbfdIwC6pR7waNVwx7DhdRQxAjMK69NWRHY%2F7cSZRunSmQP3uEiXe8uKa81n79Q6edCLiAHoTcdrXnfCFiRYQHSQViVQyi6Vb64euA1bX1%2F9IQMF5T0ND1HrpHLA9BmjtDYIHyauZ76zBf%2BeIyP1N1%2Brw%2Bw%2B89g9EPKFtkmQevnXE9DuGm4GgI2TP%2BS0tMzKMK3X3pJi8D&X-Amz-Signature=ba3a5367c2302148ab7a54da57d3bb17122e3dcd89582c79edb0ec349e15e0db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTVMGRC2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnlQd0hVNbatVlENHb7LTOW36CAvFkwYE8WvSTIfjNjwIgTHBoBM0kX8h%2BADhyvt50VVojsPco2P82Y4gwC9HQek4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFAI0eHUrKjT1H8PkSrcAxg0V7%2FHx7qwy6BwRUBaiG3Clp%2FZEKz1Q0PWyb%2BVgcOmtnlDDLNwMUb0JUlapFsIc%2Bob0TpfphiZNVh9uzDL015XQRwM93iaiJAsJASp9VwXqo%2Bn1A0tAOlLL1eFQjstqFCnMJRS0J%2FrjJdxHoDV%2F2K5Yki5rlw5x%2FQ7IT2yiKzvPc3XAfYapKU5oJPxXSkdqJrJoLY1kJfq6Qe4g2ArUm%2FDhZHH9JO5VT2oxCTelFyCOrg%2Bt54ht5gAE6yasYeTx75mG9AAmrGxO0y11ruIIct7HOLzBLJ0U9TTmMEShTNtV6I9ECiJ%2Fh9ekoWIBs%2F5ul4mBZl3VRBCwYLmwHOxKrNpN%2BlPmzVR2zsF0XmX3P%2BGW9gY91ahpG%2B6ulOopNhZoO5OU3%2FaZVn8cJvAVCn0%2FNhw%2BOZmQ3%2BmwpIkpSyjYCYYyPokZ5UsV6ScABt9DG6usNyX0zGmGGdvMxuUwn%2B%2FpogY6r%2B0jx%2BrayI4ODfJVun2R7dNuSdw8F3ad%2BTKL9vanvpvUuNo6NDj0qT%2FIva5SXGhw3FvHsWEcARUnKtdpSVEAm8%2Bh0hAqCFbrly8kAZXpOiVn8euw1Y7YE3QPnrA10PKOntmcRYxxikG3PtKGm0Hl%2B2VA%2Boc9bZ2KYh%2BMO22hcAGOqUBqnXsRh1f%2FSZOZuKr6xVbfdIwC6pR7waNVwx7DhdRQxAjMK69NWRHY%2F7cSZRunSmQP3uEiXe8uKa81n79Q6edCLiAHoTcdrXnfCFiRYQHSQViVQyi6Vb64euA1bX1%2F9IQMF5T0ND1HrpHLA9BmjtDYIHyauZ76zBf%2BeIyP1N1%2Brw%2Bw%2B89g9EPKFtkmQevnXE9DuGm4GgI2TP%2BS0tMzKMK3X3pJi8D&X-Amz-Signature=c0982fe798f234d0b113d9d061dff9aa1f7003696ebef617c5fb49e0df68eecb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
