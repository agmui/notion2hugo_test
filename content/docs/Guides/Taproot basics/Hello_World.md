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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHEASCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHRfg7BTxApE3pb1C%2FjWqRVumgwt6ukzlUAmhKYWTN0AIgVucNl81NceaD3nkV4%2FNsNkwZ%2FcbjeEdifkOon9b9rQ0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU78iwcFtNNLqtc%2BCrcA%2BYfEkJYSy0l3P7a9Yb4oJDuSOJW8S%2BG4h4gZi2QbTHep2f3pSzBqY69udieOSRRy45D16LXmF9VlaQc9edHs84kJOSsqe56hd4V3xwzivYNFExlBjcTUldocwAf0sDBHzweAGTkVlpOxkYg7UhaWpZ%2BV8nNtREblQ3kSlMdQ1w8uKZx%2FNSb3%2F6BH%2BXIuZnFz%2BMO%2Fked4cNQPAfhtFJ7GQV0LyfZxR3bMEWtEsc3YT%2FwGAS11K4iZMF9U6wqMfsHC%2FxETmsxoUyd6%2F65ctOyGM3FyDG%2BE9c7yYCf5ZbZ3rlRS8CfwP%2ByodYkEaxwwpgfKCqdRMP%2Bbwj9PSU5L%2FMgNUCzrp2j%2BBciI7fSFW8CaQFnp3lEP5ELBVArF8RneA5TBNiKNa9himH%2Fr7JzrjC6n93rhyQBcU1%2Bqe4ttRnhipzyaG3XMg%2B2D87V7T7pRwO6QhfCZr%2FRGyS4x7AaFruagcwcR83g3PX6MSNKHFGxEkl76zgNauiiR0U1P3mIRxUK%2FC1hcGUaLQM%2FX6xRVkMCo9O6MXvitfN1A1OOTpfyGfQFG97%2BUhYzJgTUa%2BKBz%2FFhqH3c6kUeJ67I68XonkqJQgwg19YjAj1UZRzfAPUv29FumXD6GJsSwceWkUMeMIjF28QGOqUBSA0a1G6KT7DYfCF6m93tGZu42XmN9U%2Fdi3bikUtyejMC4Z3psnXnXOGpvw8SvhbMIi3eI3AuhAMrhlcAcKfp9d1M41b1YpgAlbcEazzS%2Fc6OKqVOvJCo1dsn7%2Fj%2Fn7%2Bx%2BcTtDF8phGiQSsXNlHlsFWFug1rCycVtcfhiKZlvye3akEJMLTPVQ9ol2diSWhEpx3Wqm2kquM029EKvIkDEPVweYhVa&X-Amz-Signature=718ed24772312de383135727b6a0a57caa608ebd6e1db86d211af357a0689e76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHEASCT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDHRfg7BTxApE3pb1C%2FjWqRVumgwt6ukzlUAmhKYWTN0AIgVucNl81NceaD3nkV4%2FNsNkwZ%2FcbjeEdifkOon9b9rQ0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU78iwcFtNNLqtc%2BCrcA%2BYfEkJYSy0l3P7a9Yb4oJDuSOJW8S%2BG4h4gZi2QbTHep2f3pSzBqY69udieOSRRy45D16LXmF9VlaQc9edHs84kJOSsqe56hd4V3xwzivYNFExlBjcTUldocwAf0sDBHzweAGTkVlpOxkYg7UhaWpZ%2BV8nNtREblQ3kSlMdQ1w8uKZx%2FNSb3%2F6BH%2BXIuZnFz%2BMO%2Fked4cNQPAfhtFJ7GQV0LyfZxR3bMEWtEsc3YT%2FwGAS11K4iZMF9U6wqMfsHC%2FxETmsxoUyd6%2F65ctOyGM3FyDG%2BE9c7yYCf5ZbZ3rlRS8CfwP%2ByodYkEaxwwpgfKCqdRMP%2Bbwj9PSU5L%2FMgNUCzrp2j%2BBciI7fSFW8CaQFnp3lEP5ELBVArF8RneA5TBNiKNa9himH%2Fr7JzrjC6n93rhyQBcU1%2Bqe4ttRnhipzyaG3XMg%2B2D87V7T7pRwO6QhfCZr%2FRGyS4x7AaFruagcwcR83g3PX6MSNKHFGxEkl76zgNauiiR0U1P3mIRxUK%2FC1hcGUaLQM%2FX6xRVkMCo9O6MXvitfN1A1OOTpfyGfQFG97%2BUhYzJgTUa%2BKBz%2FFhqH3c6kUeJ67I68XonkqJQgwg19YjAj1UZRzfAPUv29FumXD6GJsSwceWkUMeMIjF28QGOqUBSA0a1G6KT7DYfCF6m93tGZu42XmN9U%2Fdi3bikUtyejMC4Z3psnXnXOGpvw8SvhbMIi3eI3AuhAMrhlcAcKfp9d1M41b1YpgAlbcEazzS%2Fc6OKqVOvJCo1dsn7%2Fj%2Fn7%2Bx%2BcTtDF8phGiQSsXNlHlsFWFug1rCycVtcfhiKZlvye3akEJMLTPVQ9ol2diSWhEpx3Wqm2kquM029EKvIkDEPVweYhVa&X-Amz-Signature=09d3f3f0f420a0c7178d4385e90b825d46e8ef54dbe76ed254d2078c7e039fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
