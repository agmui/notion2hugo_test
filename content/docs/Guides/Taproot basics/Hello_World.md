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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTFHMQJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCveCjwqT%2Bkg0KGGoqtmlJDtBLG9nUKGS6NTZ3ryOa0HgIgBSHp6bKSgKVBLgx%2FIxLe5FffIaq8D2Ly5mI41%2FjffL8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMYqemwQW4mb1RB5KyrcA99aSrECbDO1ojb9h6GqpAh%2Bk8J5rWvfNCslC0JZRYFyhvkrTwvCJ%2BAxngKFqQxIjRoE%2BFplff816zmTflIqyVyS7v4jduHScjXReQ1NsFN7vMyTZbbBh0I%2FXyFxeIbrK0csPqvzhPr%2F3IP5ys6XTptQpv1Am5X5eNZt0XMle5THstvqevtKX6OykecfkO8igFTLqlZotAFpkKrqW7lYulnxYNU%2FVJY%2Fj0gUmDU1RMnAPuIN8q0rmM2o1yJOYpDuwFXF%2BQ8dhqvONqguAe2ehJBTW0gqELhoHKfaKQ6wA32%2BdWpy9M5lLbkr6zcuwoQ%2Bn29oWiKrxk0rBPwvc2HRRz4s0K%2BevsLJqmXuihJ5QkfXaEnl3eoks7d1jUD0JFe9ntZDIsIjS2GRVjUyxPntJgT9fWZw2sRibo%2BDAqpvmu31XieED53%2BJHxnACoZPc2NkJZGiizaXQqaz0FOJAP4UAUQzB7PP%2FK%2BAeU7XAaNW60FvnwAO%2FMN7GYYHLR1DNKYeOTenKGrsHH%2F3JWdbGmzvwzVXe4T%2BNBvpTS1W%2FqBK%2BmydL%2BxyAo0VyoBpocCkSRTA66JbQoLaxA9ZXsOd6GFQp7KmIQgvB%2FcOlkuWupAcm2GLcszidyN0UpNTenBMLGz%2BcQGOqUBXtft4GJt1CayKGt1L%2FmHZUksuLcKfE8fUn8FPIsCdJ5yUPO%2FOhQhGFRZeETMzKhNXHq8GGIC5lsvvRBzMEAu8igN0BlNqEfVTAHIAukJJHxtXZxbJkJ8CBI%2FVhgFsozcUlF53wWOWdWvwx3Pj0ZCs%2F1E7kwq3GhTOaBYqwujHPSPa9a80oAv9G0ajT%2BZq1jjL0lmuMp7XRp1VbH7cgHwvg6GZ2oM&X-Amz-Signature=49482aba7813ecbf72d0c47a19f07b3e942166df1ef1cd234c5e4aa2852fc39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTFHMQJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCveCjwqT%2Bkg0KGGoqtmlJDtBLG9nUKGS6NTZ3ryOa0HgIgBSHp6bKSgKVBLgx%2FIxLe5FffIaq8D2Ly5mI41%2FjffL8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMYqemwQW4mb1RB5KyrcA99aSrECbDO1ojb9h6GqpAh%2Bk8J5rWvfNCslC0JZRYFyhvkrTwvCJ%2BAxngKFqQxIjRoE%2BFplff816zmTflIqyVyS7v4jduHScjXReQ1NsFN7vMyTZbbBh0I%2FXyFxeIbrK0csPqvzhPr%2F3IP5ys6XTptQpv1Am5X5eNZt0XMle5THstvqevtKX6OykecfkO8igFTLqlZotAFpkKrqW7lYulnxYNU%2FVJY%2Fj0gUmDU1RMnAPuIN8q0rmM2o1yJOYpDuwFXF%2BQ8dhqvONqguAe2ehJBTW0gqELhoHKfaKQ6wA32%2BdWpy9M5lLbkr6zcuwoQ%2Bn29oWiKrxk0rBPwvc2HRRz4s0K%2BevsLJqmXuihJ5QkfXaEnl3eoks7d1jUD0JFe9ntZDIsIjS2GRVjUyxPntJgT9fWZw2sRibo%2BDAqpvmu31XieED53%2BJHxnACoZPc2NkJZGiizaXQqaz0FOJAP4UAUQzB7PP%2FK%2BAeU7XAaNW60FvnwAO%2FMN7GYYHLR1DNKYeOTenKGrsHH%2F3JWdbGmzvwzVXe4T%2BNBvpTS1W%2FqBK%2BmydL%2BxyAo0VyoBpocCkSRTA66JbQoLaxA9ZXsOd6GFQp7KmIQgvB%2FcOlkuWupAcm2GLcszidyN0UpNTenBMLGz%2BcQGOqUBXtft4GJt1CayKGt1L%2FmHZUksuLcKfE8fUn8FPIsCdJ5yUPO%2FOhQhGFRZeETMzKhNXHq8GGIC5lsvvRBzMEAu8igN0BlNqEfVTAHIAukJJHxtXZxbJkJ8CBI%2FVhgFsozcUlF53wWOWdWvwx3Pj0ZCs%2F1E7kwq3GhTOaBYqwujHPSPa9a80oAv9G0ajT%2BZq1jjL0lmuMp7XRp1VbH7cgHwvg6GZ2oM&X-Amz-Signature=f94146b51c47c300c92129e1211427f80e15eeaeadf88a4542f809a1fc6f3ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
