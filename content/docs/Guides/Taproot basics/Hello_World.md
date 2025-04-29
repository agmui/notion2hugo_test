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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO45CQOG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmgbM5RZvS7gZgYFGxsgeeuJ8iWIr548PEgJ42kUYhgAiAfSic%2BgEOXgxnEG1ck5FH%2FA3VdLPsSgj8URNXt%2BLtGOCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vozOhtSWMcTsL%2FWKtwDBNgFmCgM%2FHPpW7MUKVAH%2FfPtOqQ9PvmyrRYOWv5n48a9dQydRQ6pm462gCfHHu7Lk4lm1N90%2BMHQzZimpequ24lZiurquo4LWXepBI5U6P3NJHUg4gaYkADLUrWKtJvGuT%2BYeN1WOsFQoXmnFTZhUXp0QwWgaiNRdKAbz3fUXj0wA9rnDzDvt3NJiuyD7S9fY3Ih3xV4HMZiv2YIVpcyV%2FryrFQgBARcb3CQh0Tn3MTgm0VjX2MvU1ENeT1JrnEWjaHy2sWif%2FRNnCHMwnBew01tqmCUBWsjuYdOuqLNZ472KKQoyK757bWaKxb5yvZQ0SXb3nDlvSPR3nKmcTz9zHdO%2BFgtyP0rigEgjrsM0ZGYxx7r0FTtDd7bplV9Z%2BHQgJfClImae7YZlzIPg2FQzhel6d9woM%2F0vMYgZbsN%2BqvQvqsFJ7dwX%2FbVVXNk86xKKk54k5sQqZlKAk2mAjH2NGG%2FHGwFbn7QRFblA%2FLUIE77YkijgG8SpvbRf7Vxng4ZImAu1q4A89F8Mb4L3ygALRQgkl%2BGl20ckwgfJSonQ6NtL9bbvUzaSFYktv7sodYlKwTboU6WFytJChzW1ZF8rRTAApXe8oKq0%2BFeDZ7wJYGkXL63vsL7dkKDDS0wv9vDwAY6pgFhfCRrU06NuvgaVbOYEvnUgC%2B2%2FZtcxnTANWF%2BPTNLkQi8LNbUr%2Fa0i%2BUGgtfJQ6%2BI2vylAti78Yd7d%2Fv%2FhFI%2FcYutWTkW3EbNnZiRyKOSLwh45jACyECmWR4L%2FWBsN8f3%2BfpeQ8ljEkih3Sd458hsd9AOzERv7%2FzAqJkTQsx9pG5w27VWzaO%2BMcdCtbHVKpIdyXvFZR%2B6bLeKkZKGdT5TZCmTmFk%2B&X-Amz-Signature=c2594052cda44515ab100c5953fa4c9829aaaec83e081a0ef2a868d2645a4f69&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO45CQOG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmgbM5RZvS7gZgYFGxsgeeuJ8iWIr548PEgJ42kUYhgAiAfSic%2BgEOXgxnEG1ck5FH%2FA3VdLPsSgj8URNXt%2BLtGOCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7vozOhtSWMcTsL%2FWKtwDBNgFmCgM%2FHPpW7MUKVAH%2FfPtOqQ9PvmyrRYOWv5n48a9dQydRQ6pm462gCfHHu7Lk4lm1N90%2BMHQzZimpequ24lZiurquo4LWXepBI5U6P3NJHUg4gaYkADLUrWKtJvGuT%2BYeN1WOsFQoXmnFTZhUXp0QwWgaiNRdKAbz3fUXj0wA9rnDzDvt3NJiuyD7S9fY3Ih3xV4HMZiv2YIVpcyV%2FryrFQgBARcb3CQh0Tn3MTgm0VjX2MvU1ENeT1JrnEWjaHy2sWif%2FRNnCHMwnBew01tqmCUBWsjuYdOuqLNZ472KKQoyK757bWaKxb5yvZQ0SXb3nDlvSPR3nKmcTz9zHdO%2BFgtyP0rigEgjrsM0ZGYxx7r0FTtDd7bplV9Z%2BHQgJfClImae7YZlzIPg2FQzhel6d9woM%2F0vMYgZbsN%2BqvQvqsFJ7dwX%2FbVVXNk86xKKk54k5sQqZlKAk2mAjH2NGG%2FHGwFbn7QRFblA%2FLUIE77YkijgG8SpvbRf7Vxng4ZImAu1q4A89F8Mb4L3ygALRQgkl%2BGl20ckwgfJSonQ6NtL9bbvUzaSFYktv7sodYlKwTboU6WFytJChzW1ZF8rRTAApXe8oKq0%2BFeDZ7wJYGkXL63vsL7dkKDDS0wv9vDwAY6pgFhfCRrU06NuvgaVbOYEvnUgC%2B2%2FZtcxnTANWF%2BPTNLkQi8LNbUr%2Fa0i%2BUGgtfJQ6%2BI2vylAti78Yd7d%2Fv%2FhFI%2FcYutWTkW3EbNnZiRyKOSLwh45jACyECmWR4L%2FWBsN8f3%2BfpeQ8ljEkih3Sd458hsd9AOzERv7%2FzAqJkTQsx9pG5w27VWzaO%2BMcdCtbHVKpIdyXvFZR%2B6bLeKkZKGdT5TZCmTmFk%2B&X-Amz-Signature=40f5014395c987e3f6cbe8a4b5acd81cecea951c4062994dd666fcb2f5520579&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
