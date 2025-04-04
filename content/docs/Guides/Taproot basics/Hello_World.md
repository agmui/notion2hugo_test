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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XUTHFH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ8Q1qz9oAXId9ybnuJF4dZTCIPDSkJN0Kn%2BawUZaGnwIhAN4GqaXEIIHyEl3WDmG3Xmzh5FHtSrp7vvIN8N1rUWl7Kv8DCB0QABoMNjM3NDIzMTgzODA1IgzlLJdYCj7kpmDTXNYq3AP3cAFOeWXna4AK99ogxsupvTR9iRR3AJPMmYlkf5m0b46MVI3iQLzxOqwB%2FZJ0Pl9K2hI1WfnystztNSYwBIVpCmJb173oD%2BCGJvvGD0Xjo1l%2FxT7Eyq0TGBG3rAglS8tS597ug0pdLFEaNL1jFhvqvDrZpl%2BzrkutMVksYZNJP9%2FoDl%2B2QhtjXoSgwUUXVwPqAuV0mkkkA0jPxrgDbwIW1Dj0wW8T1NFHHCFkHOCqHfWBSaJxIXq84Zg04S4aW1y4w0gU55A3YMBGUr4ZylggunLYKcRwNyCIlJHyP1%2B1%2Bjw9jH2nQA3gPzRGEkzxZEbcSKBYw9Gz450vd8K6i0FSs2gEr0V3slVCBcu9pNkEYaPM8ADrDkRLaodgVVoGLpwr%2FfgNxg7o%2FbWxBFx3rKG6s6g95mopAR4NpUErDweQoaa77ZXnr19pHvpxlz%2FWFBP%2Fkb9WbuA5WecpK3LHzYuVETgL%2BGgslldAQyFDz1GA%2BIQrC8jj4%2FDuxC%2BvZ1Bxvwb9UpUkaSfq19ois8Fol0Z72WfmN7zikLu4uuw%2BayMotf%2BG97ZYrsLEEGKGQN56HU71NPEPRaOz2eFh3TysLdnz2HOeQtGXpAF%2Bh4qzx7JEX2wAcjtexfunfr%2FFXzDC7sC%2FBjqkAdMJ%2FRJM2j3m9Aa6QtEE5Oyp3AehJtQrtWPDtamwRmqydaL9Mi%2FP836qkTJ75%2FFqXtgqd2qOoo1gTSydaJ247dn%2FBsfZFGjYb%2FaoINqcz421877D9JIBD%2Bw8f8FnWwdGihOPnpCzB3Xoa3n4b5%2FE%2BJwQTx9jnTvpj7qMQdTWKSIguRPvvmY6mQKepCY3OeB9hqL96F29CHfVMgRqJFGnV0FjJsZV&X-Amz-Signature=514bf89be731ed22196dab0b12f535712b9bd83a9cb721c156f1459a2a8ce59b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XUTHFH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T200901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ8Q1qz9oAXId9ybnuJF4dZTCIPDSkJN0Kn%2BawUZaGnwIhAN4GqaXEIIHyEl3WDmG3Xmzh5FHtSrp7vvIN8N1rUWl7Kv8DCB0QABoMNjM3NDIzMTgzODA1IgzlLJdYCj7kpmDTXNYq3AP3cAFOeWXna4AK99ogxsupvTR9iRR3AJPMmYlkf5m0b46MVI3iQLzxOqwB%2FZJ0Pl9K2hI1WfnystztNSYwBIVpCmJb173oD%2BCGJvvGD0Xjo1l%2FxT7Eyq0TGBG3rAglS8tS597ug0pdLFEaNL1jFhvqvDrZpl%2BzrkutMVksYZNJP9%2FoDl%2B2QhtjXoSgwUUXVwPqAuV0mkkkA0jPxrgDbwIW1Dj0wW8T1NFHHCFkHOCqHfWBSaJxIXq84Zg04S4aW1y4w0gU55A3YMBGUr4ZylggunLYKcRwNyCIlJHyP1%2B1%2Bjw9jH2nQA3gPzRGEkzxZEbcSKBYw9Gz450vd8K6i0FSs2gEr0V3slVCBcu9pNkEYaPM8ADrDkRLaodgVVoGLpwr%2FfgNxg7o%2FbWxBFx3rKG6s6g95mopAR4NpUErDweQoaa77ZXnr19pHvpxlz%2FWFBP%2Fkb9WbuA5WecpK3LHzYuVETgL%2BGgslldAQyFDz1GA%2BIQrC8jj4%2FDuxC%2BvZ1Bxvwb9UpUkaSfq19ois8Fol0Z72WfmN7zikLu4uuw%2BayMotf%2BG97ZYrsLEEGKGQN56HU71NPEPRaOz2eFh3TysLdnz2HOeQtGXpAF%2Bh4qzx7JEX2wAcjtexfunfr%2FFXzDC7sC%2FBjqkAdMJ%2FRJM2j3m9Aa6QtEE5Oyp3AehJtQrtWPDtamwRmqydaL9Mi%2FP836qkTJ75%2FFqXtgqd2qOoo1gTSydaJ247dn%2FBsfZFGjYb%2FaoINqcz421877D9JIBD%2Bw8f8FnWwdGihOPnpCzB3Xoa3n4b5%2FE%2BJwQTx9jnTvpj7qMQdTWKSIguRPvvmY6mQKepCY3OeB9hqL96F29CHfVMgRqJFGnV0FjJsZV&X-Amz-Signature=efcc332db4809e52a3bd9b44b2eb43ce637cedf287c3e780cfd57cc768385bda&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
