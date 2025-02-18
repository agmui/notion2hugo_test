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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJC4K23%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7pe5eu6BjlD%2FKiyaw0t1r53Of3dCUAhCY5eTejMyjXQIhAIsMJNti9Nh58urDBtCbexfHfP2ZV9bxrqVIYYh3fYmXKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFEet7rMEgD4ghmYAq3AP3MzWvVQqPx1cuEo%2B8TxrwkJVBa0V2nPby%2BpBZ%2Fj3HjC47SH60nDvbUIaSh%2Fgt51BQoPNqmvcHlxZ1qVNawD0seWo8y%2BhfEnsv73GFnFkzZaPJtglzvmO%2BHBtN1mYiob1Je0kLeZEY7i1nwXCCC7mv12Q8QIqwry6%2BcU6Xp6Zgp%2B%2BLJV6WfG8%2BxDUc8XIky6XwsMjSxUI74xfNxJdupVSQzeMYnpSZb7JXAtKaFlS63%2FZh%2FMVIbj09m%2F6sWFqtITQazFIR6TUXqhIh0qqERX9TqKWToigvHeuhiQuF3FN7Kh8QdX8%2FVZ2%2BuMq%2B%2B58ZW%2FWD2wkiDo2DMsnaeUEaMgco0pyJ%2FpbmxL0Tx4RmWsYciBxkBLGonrNBMzQcUYsta6n9rtMTQ8J%2BJzpGGfJKFvQ65SySZHkDkaSbdPA6qH%2FmixvSoe2fgrwWVLKKvV9PiuGR5AGBwdDEPS%2BAdnpNQLjyg2FrGwlnjlM8pIgk3J%2BSu7%2BUxTthC%2BULTXX%2BRvPrktyFZnesac5ac1AlymCU9AWdhnh9tccH0fp5dJcODG%2BgK%2BhKHtruGOvd%2BR5y19uwSRuZM7fJvJMZ0hp0c4KJ7zLAIgA3O3usKToTRLkPUqjhK81fdiUzh0Gtd0OPvDDEm9O9BjqkARxR9IoV2a%2FeRnqPkLE5BRja0P%2BDU1YfJnqIcVuIwEL7UsJx28C3NDm7GBgEd5ZFDrzQQxmu6K5Wbfrkwa4orXxkVtgjfUQZYGHh9aeisqUMe0Ryt6ccDhkYXZc4s8EofackMC7C09H2MpTzEnV7GQ%2FKy330RPaGdQz3PUOrSO%2BzR35%2BatMiNoy70c2adWMxgZdYHxLuccUPrY5uUSzeDNNgZs%2Fd&X-Amz-Signature=46aea2f79384dff7ac45633eb11bcbb40640d5f8918056d479e2eeb7983e750c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJC4K23%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC7pe5eu6BjlD%2FKiyaw0t1r53Of3dCUAhCY5eTejMyjXQIhAIsMJNti9Nh58urDBtCbexfHfP2ZV9bxrqVIYYh3fYmXKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFEet7rMEgD4ghmYAq3AP3MzWvVQqPx1cuEo%2B8TxrwkJVBa0V2nPby%2BpBZ%2Fj3HjC47SH60nDvbUIaSh%2Fgt51BQoPNqmvcHlxZ1qVNawD0seWo8y%2BhfEnsv73GFnFkzZaPJtglzvmO%2BHBtN1mYiob1Je0kLeZEY7i1nwXCCC7mv12Q8QIqwry6%2BcU6Xp6Zgp%2B%2BLJV6WfG8%2BxDUc8XIky6XwsMjSxUI74xfNxJdupVSQzeMYnpSZb7JXAtKaFlS63%2FZh%2FMVIbj09m%2F6sWFqtITQazFIR6TUXqhIh0qqERX9TqKWToigvHeuhiQuF3FN7Kh8QdX8%2FVZ2%2BuMq%2B%2B58ZW%2FWD2wkiDo2DMsnaeUEaMgco0pyJ%2FpbmxL0Tx4RmWsYciBxkBLGonrNBMzQcUYsta6n9rtMTQ8J%2BJzpGGfJKFvQ65SySZHkDkaSbdPA6qH%2FmixvSoe2fgrwWVLKKvV9PiuGR5AGBwdDEPS%2BAdnpNQLjyg2FrGwlnjlM8pIgk3J%2BSu7%2BUxTthC%2BULTXX%2BRvPrktyFZnesac5ac1AlymCU9AWdhnh9tccH0fp5dJcODG%2BgK%2BhKHtruGOvd%2BR5y19uwSRuZM7fJvJMZ0hp0c4KJ7zLAIgA3O3usKToTRLkPUqjhK81fdiUzh0Gtd0OPvDDEm9O9BjqkARxR9IoV2a%2FeRnqPkLE5BRja0P%2BDU1YfJnqIcVuIwEL7UsJx28C3NDm7GBgEd5ZFDrzQQxmu6K5Wbfrkwa4orXxkVtgjfUQZYGHh9aeisqUMe0Ryt6ccDhkYXZc4s8EofackMC7C09H2MpTzEnV7GQ%2FKy330RPaGdQz3PUOrSO%2BzR35%2BatMiNoy70c2adWMxgZdYHxLuccUPrY5uUSzeDNNgZs%2Fd&X-Amz-Signature=7833504a4d2876ac4c99af0ae7ea6f8c779a87cd08454e81fb6697fc03b27b00&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
