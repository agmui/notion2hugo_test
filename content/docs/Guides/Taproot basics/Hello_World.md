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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNGL7CZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfH%2FYIbBQZLX4e8bUKwg3fkjzkx6VccYfHilsWQhTU%2BQIhAIK4jfqHHGW65H4fFJvLKcViuBNwaP4EhTBYOnbvJLitKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8jOZjmy8CA7Pu%2Bwq3AM98Uk2trh0ERh%2FEYeJBdoxUnbx0EEBxYb5cfgoWxqV7IucH5Fx8L0tfugkZvUcZzxv%2FhLGdOrKmvvlgDTGrEXwKG2lpvL85aqWGzuGifCxSQYhqcaAqVU3tP%2FrSB6cuMctz%2Fvm9eWwg%2FTEf8w7Izzy55jgOvmYPqOshftoyfStjkF8cFrCxB0r2lPiUBhBEtbDogZ9N9HwIwzN3ucdcbjeGnBiCqxqPGJZSfom4P8rRXq%2BuprqZY4PXMRJdgAFahv3AZb5vyMpi6N7szpF0I477K2NgrBjzUDXCdqS8d1epl8N9VGlgciZqjcbMMpMCCfHy5Ihdou4u17E2A580whbtxDrZ6PUXNbWS2DQXHNhCcISqqYpawJ3Co8N9ThNQLPLbKZJsiNpZDJTl%2Fo1R6iG4kZ4X8nMV3xDyiyNhusEqA3mdlZQCLwd5DIXvoPAjBMuAMz3Fakp3%2FVo68jPYpCp18lN%2B%2FNde72PcYreQumu%2B2e8SwqrYcrBX%2B5f9CINVkQ9RuQc2qIXA9ZW2xlm4xdjFhwYLbjdokjWqDqlE%2BKCT9ZZ29wHkxo7XlMO1YICOX1AzdCC09DVEgDp8mGWy2X8CMUPsV5XPIxflO1q%2F8%2BFEp6FhEVMNAc8CzZW2DDmpfe8BjqkAZ0zs97vGZoCHohJL0JRBR5e7z86jK7CPw5aUEqBt8KR6o%2FlwGVtmg3S%2FjVlezCpWnfLUERbRDNmSC3dViIkvtN6HIp%2BMjIUf%2FjZefMw6%2BgQumYr%2Fo%2FsmqZpVncztAEqe2oCc9G6EyR70McA5bHaC1XrPVifUKpjn20%2BCnhe27fLVB53S514CTeYXMpZhT5GXK0xSxs65cXdwWK1u0Nz8tf8Jcwn&X-Amz-Signature=9e44e78f57e466d4e806c23e186311f5ddca5f30d76122d647864c0aac278657&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNGL7CZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfH%2FYIbBQZLX4e8bUKwg3fkjzkx6VccYfHilsWQhTU%2BQIhAIK4jfqHHGW65H4fFJvLKcViuBNwaP4EhTBYOnbvJLitKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B8jOZjmy8CA7Pu%2Bwq3AM98Uk2trh0ERh%2FEYeJBdoxUnbx0EEBxYb5cfgoWxqV7IucH5Fx8L0tfugkZvUcZzxv%2FhLGdOrKmvvlgDTGrEXwKG2lpvL85aqWGzuGifCxSQYhqcaAqVU3tP%2FrSB6cuMctz%2Fvm9eWwg%2FTEf8w7Izzy55jgOvmYPqOshftoyfStjkF8cFrCxB0r2lPiUBhBEtbDogZ9N9HwIwzN3ucdcbjeGnBiCqxqPGJZSfom4P8rRXq%2BuprqZY4PXMRJdgAFahv3AZb5vyMpi6N7szpF0I477K2NgrBjzUDXCdqS8d1epl8N9VGlgciZqjcbMMpMCCfHy5Ihdou4u17E2A580whbtxDrZ6PUXNbWS2DQXHNhCcISqqYpawJ3Co8N9ThNQLPLbKZJsiNpZDJTl%2Fo1R6iG4kZ4X8nMV3xDyiyNhusEqA3mdlZQCLwd5DIXvoPAjBMuAMz3Fakp3%2FVo68jPYpCp18lN%2B%2FNde72PcYreQumu%2B2e8SwqrYcrBX%2B5f9CINVkQ9RuQc2qIXA9ZW2xlm4xdjFhwYLbjdokjWqDqlE%2BKCT9ZZ29wHkxo7XlMO1YICOX1AzdCC09DVEgDp8mGWy2X8CMUPsV5XPIxflO1q%2F8%2BFEp6FhEVMNAc8CzZW2DDmpfe8BjqkAZ0zs97vGZoCHohJL0JRBR5e7z86jK7CPw5aUEqBt8KR6o%2FlwGVtmg3S%2FjVlezCpWnfLUERbRDNmSC3dViIkvtN6HIp%2BMjIUf%2FjZefMw6%2BgQumYr%2Fo%2FsmqZpVncztAEqe2oCc9G6EyR70McA5bHaC1XrPVifUKpjn20%2BCnhe27fLVB53S514CTeYXMpZhT5GXK0xSxs65cXdwWK1u0Nz8tf8Jcwn&X-Amz-Signature=756947a48f8452857880a74e9a1146988f440e2f875f9f249bc29e0c5385d807&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
