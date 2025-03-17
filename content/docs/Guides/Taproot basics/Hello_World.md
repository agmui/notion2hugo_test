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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GL7F7R%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2viJrGyh2qELLdOlv3HeFTZh9BkAXFbbXw94bq0GtbAiEAmrTmPOXGQj%2FXfEYcx2lKTMMmkCq%2FKwOh63FxAIhUyHYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNDS1W%2BPnCrZUBTGkyrcA9L6Z%2F5tojgL9ssvoLYcaLg1816ld2KcVst3ApCv%2Bkq1BBGgle63q37sykS%2B3W3qdne%2BQKxPWxeXsmayPvgFrl7rcpFuEvArQ32iKuGofPEZ3sRXfcVBnbgtyA9PC60i8gvNtoFOmQDQMoGNzrBehyJSDuyuEKTjtGbGRjFj755xvAwhHaDuHi5PLOITwmmy88OZCd8bpzwnslyG%2B3iPHZoEvRtnr4OAgO0v0dt1qncyLg2fGU44y%2B8oCAW940xb9k68VFJlIDavTFJTWEo2YtSc7oEI3MWOPuun%2FWCUI1W1OTHKeIZOkIoM9JAGHXGsdZmNyIk21OhgD6ozLyZ%2Fu1sXVa3ykfhxpExlTE2G8t3vsTps85Ca7srbaOSout4RmW3NafZJea5rpXD0LYdIffctC5PrEYWMgLOSlq1HpFpkpj8lBg7CfsH1mZV%2BQsCFwH5Okt7rfPOKndCU1J83ZmYHn8XS0r00ViW1dhSW%2FltzZt1E8c5KJ3znQOP%2FaNeA48CknMdaysIRj6WICsylMguqRapttoSdXERHmFG8kscEdGeqjLwmUKkG8uc0O290LkOZ03AyAHkA9qVbKxHCjzxAhOpjwWp2asVC9BorKdwZGbUy7OMsouWQNU7UMNen4b4GOqUBxCUtEeIgb%2BU3%2FYuJh5ocvxT8RJE1E1dMf7Ig1N5lM5uyroiRmqIFj5kCic6YplkoimdUOY60pEPpuFPDgytUYO0gpUBYrNXPElkRTHL7XdYKJxj1qIJhzEW5asAfjSPEEX%2BoaJ9k1kEV9tRGQ6PGljImwr59BBt%2FNhtE6UsJWWZxN9rKGSg5Nlx2Ynba60tpDpZuOdbcKqaoRvXbtwcBl1B%2BAa5H&X-Amz-Signature=72490d45e715ed0129f727756f6e788c72394ac7bfa0b4319cecf319fe016029&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GL7F7R%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2viJrGyh2qELLdOlv3HeFTZh9BkAXFbbXw94bq0GtbAiEAmrTmPOXGQj%2FXfEYcx2lKTMMmkCq%2FKwOh63FxAIhUyHYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNDS1W%2BPnCrZUBTGkyrcA9L6Z%2F5tojgL9ssvoLYcaLg1816ld2KcVst3ApCv%2Bkq1BBGgle63q37sykS%2B3W3qdne%2BQKxPWxeXsmayPvgFrl7rcpFuEvArQ32iKuGofPEZ3sRXfcVBnbgtyA9PC60i8gvNtoFOmQDQMoGNzrBehyJSDuyuEKTjtGbGRjFj755xvAwhHaDuHi5PLOITwmmy88OZCd8bpzwnslyG%2B3iPHZoEvRtnr4OAgO0v0dt1qncyLg2fGU44y%2B8oCAW940xb9k68VFJlIDavTFJTWEo2YtSc7oEI3MWOPuun%2FWCUI1W1OTHKeIZOkIoM9JAGHXGsdZmNyIk21OhgD6ozLyZ%2Fu1sXVa3ykfhxpExlTE2G8t3vsTps85Ca7srbaOSout4RmW3NafZJea5rpXD0LYdIffctC5PrEYWMgLOSlq1HpFpkpj8lBg7CfsH1mZV%2BQsCFwH5Okt7rfPOKndCU1J83ZmYHn8XS0r00ViW1dhSW%2FltzZt1E8c5KJ3znQOP%2FaNeA48CknMdaysIRj6WICsylMguqRapttoSdXERHmFG8kscEdGeqjLwmUKkG8uc0O290LkOZ03AyAHkA9qVbKxHCjzxAhOpjwWp2asVC9BorKdwZGbUy7OMsouWQNU7UMNen4b4GOqUBxCUtEeIgb%2BU3%2FYuJh5ocvxT8RJE1E1dMf7Ig1N5lM5uyroiRmqIFj5kCic6YplkoimdUOY60pEPpuFPDgytUYO0gpUBYrNXPElkRTHL7XdYKJxj1qIJhzEW5asAfjSPEEX%2BoaJ9k1kEV9tRGQ6PGljImwr59BBt%2FNhtE6UsJWWZxN9rKGSg5Nlx2Ynba60tpDpZuOdbcKqaoRvXbtwcBl1B%2BAa5H&X-Amz-Signature=809125e74eef639dc37ea23aef79d67a5c3554f311373d011fc9a10ce8a06b2f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
