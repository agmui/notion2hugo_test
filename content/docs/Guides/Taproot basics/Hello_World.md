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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTNJJPA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvLpGCkDR30MjuiXBqQ76EqjbKXD2qYenhMPbZVc%2FQwIgIZxp3p9Ff3GnbhNE5ErzE8HGdvXbTjDHRoWu0BWzrHkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJqScZQ5QnVyMuukCrcA%2FlSBOOrteFsNfLWRqZFYIOApoY6OHfVaMkcMm2jFtH58AK5eEAo5to0G8YOMNm2KO2XnBpuf%2FwI4Vj7LspD%2BAINOwnYZhTUQLw0r7Qi5vXZzsDhHDoJIugppAuD3RzrJZF7Vr2fkcInFqFLCnpboL3kgAtCPqd0rEW6RuJXKfvxGQCLeawrajKbcz64APAbZYuqZ5LZV4UUoXnYC3YMIX6piFxvoyWFRrHGR3RTZG8G3W7RT5nsnQFxnwWA6MhZQ8pO2zKR6liNuXPvvUDm2HtmrZoHX4QDwMlCg51gSBwY%2Bd8XaJneHaT0YGyhabgsIxegQ%2F4JYtCkOq%2Fjm9gsA3daEFH0k0NdJDiWl7xkoQRpzIM1NWcuuuxgtkHqyE6P%2BKs%2BxcLe5lA%2FWGR6lz2bg%2Fpuz5B%2F1No5Btg8oaNCdjeE0f7PX4EgEOKNt3Zs2bnYjuZ%2F07v8JgfEpjP4ZRUbl18ExL2nTl6Ocf8ZE2gpvQevTzd5UZDi3YSZgplToSzUJ4A80w7cBbUkN6Ch8cHZQJO%2B%2F57wZaREtZBZu50VV%2BlGJixqET9xIt0Pd1%2Bk5Ah8tvACCo9vamMrM58STaIFrtBsjoO9CJti3hjdMo5nobBobkBsqsKCq9pqYO%2B6MMHgpL0GOqUBTo2gYxuiOooaW9wx6yViuy8oQ1Vub28VMVSWr1aLEgMYGZBScJQjPCHcZOkeFlz2H22Kx8aphvnfDefhp2L6hmiEYvvoByMgz%2BOfp%2F4ow32MvghRsAUTrghq6zYnb4S55pp6OslNrh65Z2Gl%2Bn2zCScgzwPaUe%2FTgjmdH4XUZvFH%2FoeHrRpf4icLM1THtjf9yS%2BqvzD%2BpQwKC10R%2FxrhvkZ%2BCnk1&X-Amz-Signature=70d204cb8c17668a6215376de7bda48bdf3a75b80708c507607bad8413453b05&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TTNJJPA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNvLpGCkDR30MjuiXBqQ76EqjbKXD2qYenhMPbZVc%2FQwIgIZxp3p9Ff3GnbhNE5ErzE8HGdvXbTjDHRoWu0BWzrHkqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJqScZQ5QnVyMuukCrcA%2FlSBOOrteFsNfLWRqZFYIOApoY6OHfVaMkcMm2jFtH58AK5eEAo5to0G8YOMNm2KO2XnBpuf%2FwI4Vj7LspD%2BAINOwnYZhTUQLw0r7Qi5vXZzsDhHDoJIugppAuD3RzrJZF7Vr2fkcInFqFLCnpboL3kgAtCPqd0rEW6RuJXKfvxGQCLeawrajKbcz64APAbZYuqZ5LZV4UUoXnYC3YMIX6piFxvoyWFRrHGR3RTZG8G3W7RT5nsnQFxnwWA6MhZQ8pO2zKR6liNuXPvvUDm2HtmrZoHX4QDwMlCg51gSBwY%2Bd8XaJneHaT0YGyhabgsIxegQ%2F4JYtCkOq%2Fjm9gsA3daEFH0k0NdJDiWl7xkoQRpzIM1NWcuuuxgtkHqyE6P%2BKs%2BxcLe5lA%2FWGR6lz2bg%2Fpuz5B%2F1No5Btg8oaNCdjeE0f7PX4EgEOKNt3Zs2bnYjuZ%2F07v8JgfEpjP4ZRUbl18ExL2nTl6Ocf8ZE2gpvQevTzd5UZDi3YSZgplToSzUJ4A80w7cBbUkN6Ch8cHZQJO%2B%2F57wZaREtZBZu50VV%2BlGJixqET9xIt0Pd1%2Bk5Ah8tvACCo9vamMrM58STaIFrtBsjoO9CJti3hjdMo5nobBobkBsqsKCq9pqYO%2B6MMHgpL0GOqUBTo2gYxuiOooaW9wx6yViuy8oQ1Vub28VMVSWr1aLEgMYGZBScJQjPCHcZOkeFlz2H22Kx8aphvnfDefhp2L6hmiEYvvoByMgz%2BOfp%2F4ow32MvghRsAUTrghq6zYnb4S55pp6OslNrh65Z2Gl%2Bn2zCScgzwPaUe%2FTgjmdH4XUZvFH%2FoeHrRpf4icLM1THtjf9yS%2BqvzD%2BpQwKC10R%2FxrhvkZ%2BCnk1&X-Amz-Signature=b98272077673ceb1afe9caa863e68392d5c9ad99d1a378a98e88c92b0db57a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
