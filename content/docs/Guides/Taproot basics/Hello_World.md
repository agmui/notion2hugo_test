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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWAAVT4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCxv8e%2BRQSAG0KQK27AnnjDLKKIWNOXb%2FmuzU%2BxNgeHHAIhAKEBhzVDweZ%2Bzdq5MC5ZtIPO8p0nVHD5CwbFarYnPgZeKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq8BCn0L%2F661aoKt0q3AOOc%2F%2FI%2FqsjJdl1f2TJJggu0MlxUr4SwtUL47BzDLYPqMV3ejiw95%2F6WsE5dRe2FkBt%2FDJu9ZeFwv7QKpweRdXutIyW2vBKOSZRXyXWCNIIQdiFgo5lsac7jj52R01YL2ZpxBW29JYYipA52Ppkln2QC0oFzAAt506hMKgXm94ZMlBtXi5QO4DlKd9GOk7I04%2BGIezO8CVTHPrKe5mnExEWcHYs8aZJ8V1t1%2FIq%2BT3K6wCg%2BFVWIDG6G7Nm2OsbI1Xc5OnJ%2BWjmrBHVElME9sqshhiFjXwWV8L4S1Et%2Bi0bAUaj3BrA2oHbuQXL8mHA00O3jKz1wIhwDycFfw2UK8uatZKy18hE18uHtehV4lk14r2dOKfamm%2B9il1xmkvQ%2FVYZHegZJYWyWXjL%2FIqdzczdxNhvvqO82DHatccmnIeYkIKnveNjRTdxo%2FK%2FdeP4MJtRJQPDLQE%2FKECc2nsld43%2BFDG7QXnddQ8RG3WYuK%2BTFEneS5z%2F81abHqEJlgWAgd1prtWrMI%2FGHauWEvxDbxRXueD3T3qeScmpAHuIRd%2Bx2qgQtgqxNr7DIAHFCvX6I5c6YWjoYCaH6%2FXsQrg7XmITCV7vF2QuUbIZXqKm5s4EhmFyYiIXx1%2Fyz%2Bh7rzCd6bW%2FBjqkAf4z0NE0ojirXJO8b5qje8hn%2BEOMI%2BM1woyLvq7y3fuiYe2lgdSAVdto5m7D5MLw84UROVWvrxbHRmjH5LwUiBTbVTTQXclKp9XvqsgzW048s0R7%2F6%2Fkp6wg0rBgpA7wLYMyarlENgN4pCelSQ44U4YiOa7kjtzjayDzjgC4eO8TrUK67%2F%2FqAIiRlpItunvMjocjxRzgOH%2F9vAjfC7awFuDIWqFc&X-Amz-Signature=6858e4dd6f80e886d00e90790b2e8706cb7426339e306cc797ba2173e3d96df8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKWAAVT4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCxv8e%2BRQSAG0KQK27AnnjDLKKIWNOXb%2FmuzU%2BxNgeHHAIhAKEBhzVDweZ%2Bzdq5MC5ZtIPO8p0nVHD5CwbFarYnPgZeKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq8BCn0L%2F661aoKt0q3AOOc%2F%2FI%2FqsjJdl1f2TJJggu0MlxUr4SwtUL47BzDLYPqMV3ejiw95%2F6WsE5dRe2FkBt%2FDJu9ZeFwv7QKpweRdXutIyW2vBKOSZRXyXWCNIIQdiFgo5lsac7jj52R01YL2ZpxBW29JYYipA52Ppkln2QC0oFzAAt506hMKgXm94ZMlBtXi5QO4DlKd9GOk7I04%2BGIezO8CVTHPrKe5mnExEWcHYs8aZJ8V1t1%2FIq%2BT3K6wCg%2BFVWIDG6G7Nm2OsbI1Xc5OnJ%2BWjmrBHVElME9sqshhiFjXwWV8L4S1Et%2Bi0bAUaj3BrA2oHbuQXL8mHA00O3jKz1wIhwDycFfw2UK8uatZKy18hE18uHtehV4lk14r2dOKfamm%2B9il1xmkvQ%2FVYZHegZJYWyWXjL%2FIqdzczdxNhvvqO82DHatccmnIeYkIKnveNjRTdxo%2FK%2FdeP4MJtRJQPDLQE%2FKECc2nsld43%2BFDG7QXnddQ8RG3WYuK%2BTFEneS5z%2F81abHqEJlgWAgd1prtWrMI%2FGHauWEvxDbxRXueD3T3qeScmpAHuIRd%2Bx2qgQtgqxNr7DIAHFCvX6I5c6YWjoYCaH6%2FXsQrg7XmITCV7vF2QuUbIZXqKm5s4EhmFyYiIXx1%2Fyz%2Bh7rzCd6bW%2FBjqkAf4z0NE0ojirXJO8b5qje8hn%2BEOMI%2BM1woyLvq7y3fuiYe2lgdSAVdto5m7D5MLw84UROVWvrxbHRmjH5LwUiBTbVTTQXclKp9XvqsgzW048s0R7%2F6%2Fkp6wg0rBgpA7wLYMyarlENgN4pCelSQ44U4YiOa7kjtzjayDzjgC4eO8TrUK67%2F%2FqAIiRlpItunvMjocjxRzgOH%2F9vAjfC7awFuDIWqFc&X-Amz-Signature=f6f2b3c9088230d37a4d99c1e83ddc6037148291a11ba6f3bafa0b00bdeb6a05&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
