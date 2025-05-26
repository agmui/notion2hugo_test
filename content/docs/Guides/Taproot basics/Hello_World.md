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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6B2PESA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC4s2ZygSBDG6r9ZALn99%2F%2FNmfTq%2BT5NI0aNhNBqjywHwIhAI4uiBz3p0ZR7C17ZboZbzRY9D%2FFSXTEXlAaVkcbgt64Kv8DCEUQABoMNjM3NDIzMTgzODA1Igy%2BvjNEIy4W6k%2Bq7d4q3ANv51QmQfR5cFiR%2BMzGvNH5wBrfPI8L8lL4G%2BMsyyqdKKckiNDb9Re2xGSjKj3caMjqjjf9Rg9V6DXHfwjlbkZpIxOxoglm%2BWzlDLNRg8ScVwwrbjAH2eu%2Fnx9EZpirs8Ia7nq1eQYqZdMqoNcAynE8wa3H%2BjHLEcvDTrKwT5AfGJDudY4kbNymBw2KQ8WZY8P6Sm8EbK%2F9D%2F5vkTlpHdSbl7%2FO3BMbVE1zxCSatQ6YbYfuS6hX3iHawBLRaC9dz7oA5PsyQZS%2FQftSnVSiWUdK9ILoN4hSB3XJ742DBk9%2BdVL%2F%2F4okphjmUwIogT7l%2FWHxGXczUI5f%2FiQNt06YuT3qztSYc%2F6owN5%2F5hNyF%2BcmIEL9WSF66Nu6lo9yriyyLoNv3Pj%2BnYFmRMcDbPxBHxJ90yhkBC0UpBTNqDpUzgN76Rh0PD7Wjh31romoCaZc995BeV2HAOr1oc76r2UtmYdWPUpgVY8z9EwHC4RkpwxsVTOssot5qjAGy1r6%2BpIvSS0qJ40Jb4wXMbxiO065uC9OwR9N9kFb1mMbyxJJBgRGIqC3zK7cblwiebjQTpF9ZgPltsSTSWFJYL9lkuD%2B4VF%2FhwfUyrjS3Wq3M7HyIVkG23rZen4A3i3%2FpaKfvDDCqtHBBjqkARoXJ15s9RzaSlBqnpuYCkxYNyyL%2FW8usUy7t5sVY%2FdT0p%2BdoYkZ6RRLZCqJbRB9LF1uDHKtSmwcDCh6R%2BgAbHVGAsckjClq%2FY1O%2FrF9BTRQVT3erDioFkf8XELSbt18dEcMPz%2BQU7fWfW3ttn%2B7O%2F5fVx9f%2BnzIm%2F4GG9Lrn6xKQ95lvgIBycdVlgMa7HqvHcVjZd9ssVXZQs5M0aeoxGEixozb&X-Amz-Signature=94a11cd39b79a9decdbc9a63c9f8d53fe38e3173d8fa235c30f537655d5ae5af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6B2PESA%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC4s2ZygSBDG6r9ZALn99%2F%2FNmfTq%2BT5NI0aNhNBqjywHwIhAI4uiBz3p0ZR7C17ZboZbzRY9D%2FFSXTEXlAaVkcbgt64Kv8DCEUQABoMNjM3NDIzMTgzODA1Igy%2BvjNEIy4W6k%2Bq7d4q3ANv51QmQfR5cFiR%2BMzGvNH5wBrfPI8L8lL4G%2BMsyyqdKKckiNDb9Re2xGSjKj3caMjqjjf9Rg9V6DXHfwjlbkZpIxOxoglm%2BWzlDLNRg8ScVwwrbjAH2eu%2Fnx9EZpirs8Ia7nq1eQYqZdMqoNcAynE8wa3H%2BjHLEcvDTrKwT5AfGJDudY4kbNymBw2KQ8WZY8P6Sm8EbK%2F9D%2F5vkTlpHdSbl7%2FO3BMbVE1zxCSatQ6YbYfuS6hX3iHawBLRaC9dz7oA5PsyQZS%2FQftSnVSiWUdK9ILoN4hSB3XJ742DBk9%2BdVL%2F%2F4okphjmUwIogT7l%2FWHxGXczUI5f%2FiQNt06YuT3qztSYc%2F6owN5%2F5hNyF%2BcmIEL9WSF66Nu6lo9yriyyLoNv3Pj%2BnYFmRMcDbPxBHxJ90yhkBC0UpBTNqDpUzgN76Rh0PD7Wjh31romoCaZc995BeV2HAOr1oc76r2UtmYdWPUpgVY8z9EwHC4RkpwxsVTOssot5qjAGy1r6%2BpIvSS0qJ40Jb4wXMbxiO065uC9OwR9N9kFb1mMbyxJJBgRGIqC3zK7cblwiebjQTpF9ZgPltsSTSWFJYL9lkuD%2B4VF%2FhwfUyrjS3Wq3M7HyIVkG23rZen4A3i3%2FpaKfvDDCqtHBBjqkARoXJ15s9RzaSlBqnpuYCkxYNyyL%2FW8usUy7t5sVY%2FdT0p%2BdoYkZ6RRLZCqJbRB9LF1uDHKtSmwcDCh6R%2BgAbHVGAsckjClq%2FY1O%2FrF9BTRQVT3erDioFkf8XELSbt18dEcMPz%2BQU7fWfW3ttn%2B7O%2F5fVx9f%2BnzIm%2F4GG9Lrn6xKQ95lvgIBycdVlgMa7HqvHcVjZd9ssVXZQs5M0aeoxGEixozb&X-Amz-Signature=4c8af343e6caf8f8374d135eecaaa98bc5368a8b8f895ac9038efa93eb491318&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
