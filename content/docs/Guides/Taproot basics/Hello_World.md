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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU625SYD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHElKqZ03pgY6ofb0szGt4UqXWJlHVrNqxRBN5RNw85ZAiEA%2BfcbjtgnpGfvGplmxm3mKo3vOwzmT6kz2nvoYxbsn7UqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2JcEsar%2BEFVsqP0CrcA2hgbZHc6mdFXUBNcAbUu1RKQQ9vN3IDAsJ%2F14GVDBwqWin9DVVhtK%2BfbHhNzj0ofjjhH4HQHp28hQK2PWOVD10Q5CcJu2aeYjRFhkqLjnei3sTEkRADNMJzhgn1NmkHmS9TLaqhoD1NWstFw6dFhNEjBrGpSmWYJqT8jWTTjJpaFV6Blqh9%2FubKte1g8%2F8be9GugShIMPwiteGO0C9CXNA6SjPzkyiQh1fhpGpcpcYwyrOtqOYhAmMxF8I%2F7SeSMa9ko6u%2BG4Xb32yxQuPK%2BZR%2BRxdiUzTqcv12mAt3Z0%2BGiPH%2BC95Fop5kuJgOrQIJj8BquQefE7zygDZvopWFSTxg6PXhjo%2FFW3a4ih9906DYal5y%2BEKgTMEFczcuhKaKb47t5aD8I87lly0lmm1yDMwunFdtH8%2F691cN2wWRlPJfHOLZEu1vPN4yXa1kuqsAdgap72Tl1kRxvFRUFosuV04RmaD04lrSrDPqNXgAPKn1tFlIklyDGndoFYbuB8tI83ni1LMPM6ZsMnDTnYC1JZstjRlyM5ZyhSuiprvVr7MgFjzIGzDTZOCCiSyYEtdNXkDClYsgZerybrd9xVI2Y7xa9xN8ES1Db5ohKfG%2BrsWvLdDehlnKvxSp1PXIMK%2B7hMMGOqUBYVl55LHve%2FadPRKOxfFJi5ofp372Qu585tD6nbrmktQOnsBvCNPA65z2xVve7lUrTsfqUmx0amOd6DQ09%2F7ontZAklnUx5r0%2FL7DIJXmkZYR14F5Ryk0Xf7BfFr4UqZPJf7AcEPTLDklweRLa3xDQNNtG4DsKMLS0%2FkFXFfUn27CF6R9TjH5mfdHbWYjpzAVZ6%2FIIJdeK4AftWg7Dt6dxgoHh%2BjJ&X-Amz-Signature=df730e85df06f3d3be288d7bae14c69ff401c14eb4d0df6d4976d0f980b350d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU625SYD%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHElKqZ03pgY6ofb0szGt4UqXWJlHVrNqxRBN5RNw85ZAiEA%2BfcbjtgnpGfvGplmxm3mKo3vOwzmT6kz2nvoYxbsn7UqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2JcEsar%2BEFVsqP0CrcA2hgbZHc6mdFXUBNcAbUu1RKQQ9vN3IDAsJ%2F14GVDBwqWin9DVVhtK%2BfbHhNzj0ofjjhH4HQHp28hQK2PWOVD10Q5CcJu2aeYjRFhkqLjnei3sTEkRADNMJzhgn1NmkHmS9TLaqhoD1NWstFw6dFhNEjBrGpSmWYJqT8jWTTjJpaFV6Blqh9%2FubKte1g8%2F8be9GugShIMPwiteGO0C9CXNA6SjPzkyiQh1fhpGpcpcYwyrOtqOYhAmMxF8I%2F7SeSMa9ko6u%2BG4Xb32yxQuPK%2BZR%2BRxdiUzTqcv12mAt3Z0%2BGiPH%2BC95Fop5kuJgOrQIJj8BquQefE7zygDZvopWFSTxg6PXhjo%2FFW3a4ih9906DYal5y%2BEKgTMEFczcuhKaKb47t5aD8I87lly0lmm1yDMwunFdtH8%2F691cN2wWRlPJfHOLZEu1vPN4yXa1kuqsAdgap72Tl1kRxvFRUFosuV04RmaD04lrSrDPqNXgAPKn1tFlIklyDGndoFYbuB8tI83ni1LMPM6ZsMnDTnYC1JZstjRlyM5ZyhSuiprvVr7MgFjzIGzDTZOCCiSyYEtdNXkDClYsgZerybrd9xVI2Y7xa9xN8ES1Db5ohKfG%2BrsWvLdDehlnKvxSp1PXIMK%2B7hMMGOqUBYVl55LHve%2FadPRKOxfFJi5ofp372Qu585tD6nbrmktQOnsBvCNPA65z2xVve7lUrTsfqUmx0amOd6DQ09%2F7ontZAklnUx5r0%2FL7DIJXmkZYR14F5Ryk0Xf7BfFr4UqZPJf7AcEPTLDklweRLa3xDQNNtG4DsKMLS0%2FkFXFfUn27CF6R9TjH5mfdHbWYjpzAVZ6%2FIIJdeK4AftWg7Dt6dxgoHh%2BjJ&X-Amz-Signature=66b09ddf37d0e14ab02bc0d47716495611cfd55001c2aadb4640c7fcf0e09990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
