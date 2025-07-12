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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757U2RHJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjxnfuQ23j8%2Bw7eD31KTOlI26ZvJKvzEcUmwGgEqY8hwIhAOjoK%2FOGPUKRtD%2BHa3em%2FVItGux7D0SpHQTWk8%2FAPo6NKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9AeuEVh9EQ6%2B%2F4Kkq3AMltNTdOpvuilCHY%2FqCaow5ffnnb6rkeSlQdgYsoLNVoE%2Fd8D0QwlQ0ftqczT8TP4b859cd7PDLuIrLTK6R5Qw73g3pgcqFG784UeUual5LeBg9ESmlVTvUMdJQr%2B4z1%2BUmBUnfuSVmzP%2F9Q4TyA1DRTioWhbWSL59%2FjFGGOVpfInc9sypHg%2FYE2754PHm1tWhzd19CuZmDwg%2BRBTyzg7CNh6vVZCQBT%2B%2Fwa0Z4BxyGJ8JDAo%2BFu42AGOGrAFGwQjq%2FEkIUhtSE5m%2Fp31mYF6s3%2BqUEwn54bstFOs3uPqyNNLcT0nU%2Bet1OH6JjewhPxmTq8UZ2J810T%2ByUNNdmgXIKYP%2Fdv0KvToHaXpsR%2Bq%2F1feMqWBr59LGr3k4cB2SqFa%2FgEmQa%2FZoS3123SqMLrhF%2FmXxgJQQ8vbZODLa8Qv%2FnT4LxsXaYVMyVXAu1Lj3j7rO0vz1KuzFHcoGjO6gnppmCMAS4Q7gVaL2FUiPOeplP7cAvXOLPRSaKfu4ArtYxJjUZF8diyaGrPz65bnWycw2AvemKRDf3%2BXrHURbJO%2FWXorRuJBu5Y8AS%2BcRfmfaJJemKWHxsmzmO3V2nNu3Vv3TFGtKEwrw9PXjOlCvXnMqJl4%2FVr1MHepw6IhXX6jCU%2FcjDBjqkAVfR%2F%2BiY2ujVsknlDvDa1xeXqSb%2FgN%2B1gONOsvYQuS%2BZt078GVaP1n5JJRqAjgowDxDcP3nYVbY2D88w66EGUEXZXRsqtNySSFCjy%2FLKq54%2BZAJOsL52kX73fNsu%2Fj1ttBGT60KrqQDSv9B0%2BvKyfH6HK%2BQwkKPPlRVhSuwhxz7DrSgmsnTXzR1tQMpj%2F32gBwyvsM5QPkBYbc%2FGL0UGmcB1F4uD&X-Amz-Signature=d305b8f9085bd39e49e13fbb7f4f30aee5a7ff083cbfbf4220c0d3c4915b026b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466757U2RHJ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjxnfuQ23j8%2Bw7eD31KTOlI26ZvJKvzEcUmwGgEqY8hwIhAOjoK%2FOGPUKRtD%2BHa3em%2FVItGux7D0SpHQTWk8%2FAPo6NKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9AeuEVh9EQ6%2B%2F4Kkq3AMltNTdOpvuilCHY%2FqCaow5ffnnb6rkeSlQdgYsoLNVoE%2Fd8D0QwlQ0ftqczT8TP4b859cd7PDLuIrLTK6R5Qw73g3pgcqFG784UeUual5LeBg9ESmlVTvUMdJQr%2B4z1%2BUmBUnfuSVmzP%2F9Q4TyA1DRTioWhbWSL59%2FjFGGOVpfInc9sypHg%2FYE2754PHm1tWhzd19CuZmDwg%2BRBTyzg7CNh6vVZCQBT%2B%2Fwa0Z4BxyGJ8JDAo%2BFu42AGOGrAFGwQjq%2FEkIUhtSE5m%2Fp31mYF6s3%2BqUEwn54bstFOs3uPqyNNLcT0nU%2Bet1OH6JjewhPxmTq8UZ2J810T%2ByUNNdmgXIKYP%2Fdv0KvToHaXpsR%2Bq%2F1feMqWBr59LGr3k4cB2SqFa%2FgEmQa%2FZoS3123SqMLrhF%2FmXxgJQQ8vbZODLa8Qv%2FnT4LxsXaYVMyVXAu1Lj3j7rO0vz1KuzFHcoGjO6gnppmCMAS4Q7gVaL2FUiPOeplP7cAvXOLPRSaKfu4ArtYxJjUZF8diyaGrPz65bnWycw2AvemKRDf3%2BXrHURbJO%2FWXorRuJBu5Y8AS%2BcRfmfaJJemKWHxsmzmO3V2nNu3Vv3TFGtKEwrw9PXjOlCvXnMqJl4%2FVr1MHepw6IhXX6jCU%2FcjDBjqkAVfR%2F%2BiY2ujVsknlDvDa1xeXqSb%2FgN%2B1gONOsvYQuS%2BZt078GVaP1n5JJRqAjgowDxDcP3nYVbY2D88w66EGUEXZXRsqtNySSFCjy%2FLKq54%2BZAJOsL52kX73fNsu%2Fj1ttBGT60KrqQDSv9B0%2BvKyfH6HK%2BQwkKPPlRVhSuwhxz7DrSgmsnTXzR1tQMpj%2F32gBwyvsM5QPkBYbc%2FGL0UGmcB1F4uD&X-Amz-Signature=dd1463ef8d0ce3f327239bf8128a97eb45a4f44d3ac1ad60c9e7d80390fcc15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
