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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TLXSEF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SgWGjdwtI3sLRfqQEGeviWQ4md%2F25MJM6GMOmqdt0wIgdy9EvCZ%2F%2FnmVovOhiBGIpY3ovN9iNXeonM6oVbfOzgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNfNUZgVS9TR3%2FOf4SrcA14pWAMrXxyGgUw9TZBjsxL3DYuO5CQTMukS7j3L6GXSmZTiWoCjFwqftI3buroGlSgWGAdNKMBGSK5SYVJHZIpiHvDdQ1Rzn6G3NY6Dzyl6j9aUrYhVzBLo2ExqLZtApmiFpMArhV35YAR7U32W8i%2BBz%2FeNR0QLsy6MIeiYN3HIAEBVGKWiUsqeBXvJ4c9jKvMhXmWB%2BF1NknUr1Rnrujy6C9vZJIKx0LiR1gAAqcEiw1s%2BrEWiSWYUXpLm%2FncDSUGtkjmyD%2BEWzpLw0p3tmsPSdqs3ixAxQEjJ8%2BNtbPdxiNffzSvyzcEF8Lrv4C9mDZWbX2aUA2ldCYCzNNxcQKs4WPPFXbNOhPa2BHy67YBd6v5oIeuxDMlPiRu355vaSb9DKeGCRMM%2FWHmJp6p92TVm9J3w%2Bh5kuuA9ZdB8%2BROOtnNal0Aqh7sc4AxyJD5bgC8AE%2BkeZ%2B%2BuQx%2B0RWz1hD4vaHDnnUUpbicvDdW9nzlfZnpFBgmBd0hxM1F8z27P%2B6TEGJKvHXX6EAT4Sy0AW7DAe43qJthScr4HnSXkJE3iTgu0Mxsiz9PBA4uHFxxC%2BpjMkUBZfDux6YRRvoEHI%2B0wfQPXrI4EAQFgA7tsAUaEhTX4jnKIvdtO%2BAU%2BMLSWob4GOqUBhsaDBKoRwe0I7szvoJb%2FOdDdKJF4pgHVRQCU4N8uyYUgWWj1QvNqHj7FKCDe5cLp793daveDU8l9UEeCNEBlMYk%2BMtZVDKugxeFw4Qs%2Bs6x4jL1FlZY3xY8KEW4cULUnwQjL4tNSA6BbZZBN1geaF3CgvC7iKb%2BqHeWnwaXKE%2FxeJ4WG54P2BRg5tNJ9wbxTaINuFtS%2FyQsgIzWAI6h9qL8SRoCB&X-Amz-Signature=951f1e2201fe3938e18d136f2ba6e4301d66fffb6641be7052d2b76e06fb078c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653TLXSEF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SgWGjdwtI3sLRfqQEGeviWQ4md%2F25MJM6GMOmqdt0wIgdy9EvCZ%2F%2FnmVovOhiBGIpY3ovN9iNXeonM6oVbfOzgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNfNUZgVS9TR3%2FOf4SrcA14pWAMrXxyGgUw9TZBjsxL3DYuO5CQTMukS7j3L6GXSmZTiWoCjFwqftI3buroGlSgWGAdNKMBGSK5SYVJHZIpiHvDdQ1Rzn6G3NY6Dzyl6j9aUrYhVzBLo2ExqLZtApmiFpMArhV35YAR7U32W8i%2BBz%2FeNR0QLsy6MIeiYN3HIAEBVGKWiUsqeBXvJ4c9jKvMhXmWB%2BF1NknUr1Rnrujy6C9vZJIKx0LiR1gAAqcEiw1s%2BrEWiSWYUXpLm%2FncDSUGtkjmyD%2BEWzpLw0p3tmsPSdqs3ixAxQEjJ8%2BNtbPdxiNffzSvyzcEF8Lrv4C9mDZWbX2aUA2ldCYCzNNxcQKs4WPPFXbNOhPa2BHy67YBd6v5oIeuxDMlPiRu355vaSb9DKeGCRMM%2FWHmJp6p92TVm9J3w%2Bh5kuuA9ZdB8%2BROOtnNal0Aqh7sc4AxyJD5bgC8AE%2BkeZ%2B%2BuQx%2B0RWz1hD4vaHDnnUUpbicvDdW9nzlfZnpFBgmBd0hxM1F8z27P%2B6TEGJKvHXX6EAT4Sy0AW7DAe43qJthScr4HnSXkJE3iTgu0Mxsiz9PBA4uHFxxC%2BpjMkUBZfDux6YRRvoEHI%2B0wfQPXrI4EAQFgA7tsAUaEhTX4jnKIvdtO%2BAU%2BMLSWob4GOqUBhsaDBKoRwe0I7szvoJb%2FOdDdKJF4pgHVRQCU4N8uyYUgWWj1QvNqHj7FKCDe5cLp793daveDU8l9UEeCNEBlMYk%2BMtZVDKugxeFw4Qs%2Bs6x4jL1FlZY3xY8KEW4cULUnwQjL4tNSA6BbZZBN1geaF3CgvC7iKb%2BqHeWnwaXKE%2FxeJ4WG54P2BRg5tNJ9wbxTaINuFtS%2FyQsgIzWAI6h9qL8SRoCB&X-Amz-Signature=6fb3fb5300b8253366e61b4df1b55a40e79f6050f1190d9f94d9b0e144170480&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
