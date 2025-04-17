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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVGCUHS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgNOJ7fI7qOFT5ccI3pDaiuVobx4VcXBkw1lJQBE3QgIgaS8lu8YnThSWOqBptfJfPDMJsU9aZO8Gu8PGLm%2B73mAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD%2Bym70yUwOKsd6thCrcAzTTBQ1%2B9zySbuNVqDqmBcGD0ybKAbfJ6WTADWs1XQTbXp7svXXOnSfstqkw5sjlg2yKY1UZ7w5YLDGc4oYiVQ0hnJgkQu11MsrMeuUG4rm194RFEVxDxFLW7F7o2zFKRJBtpnqJMBSKAD%2B94%2F%2F5uK661YMJSvwqF1QuFi3lnAv0XI%2F9DP5uHWpEaVM4PRqrhUAuVwZ6eGMysp%2BRB7YBdmhE64E6ksffg53BQzVX7F5ANdlKwx10B3p%2F%2BhzOpIBTGqF9NlFd9B9pXYjv2Gny981XzQFjfc8ui3MOtu6aw0NRbwQzL3WuDeu6urqwJoSvCMHkpQRwzNsW1ZXvScgO089AnYAnozaCzZzjb0IfpJOHADVcO9wyKrWIHP%2BlDu2SV387esI3UNRyzziQ4xMGQ12i2qzp%2BaSZMuaJngH6LgVnitPNlAvMdMNhNwS4EB64SQFv5FVmhXPznCgA8UX%2F4HZ9juw2NJ%2BMntyZl5LT5%2BIu1uH2B3sWiXgW2pCK9UUu59Xezrtkr5yJH5lji0d0ufCyodyzGtJAG%2B7KhmOlwWo1lBU0eQSpIbL3NjLnn8uUAy%2FtvU%2FDXPRE%2B9266dTZloqQDQpyJDvUdF7WC5iEIcRgfcluniZJRcvUiBlnMJCvg8AGOqUBhDSHHhMEmKjqvKtKoXVN%2BcGbSs3PHalWWUghMfsZosP5lwrQVCEe3vIE5NAH1ohxw73Ce%2BHWTEOaluGrwfaNIbOU%2B%2FofElHcHkHW%2FWTJucicWm4tbEWdJFx08JaDOBjFDFUJs%2BS2OC4aFuloi%2Bm%2BAhsQvCgGzUGjM6RihS1palcQmyKVYP2OAj6p9WoBpjj4Ip7PCn68K3tFHF1IlOARBxFE7HDw&X-Amz-Signature=31a1457bbe11e59a0807f103f684a043544df9461ecfcfd59a3d99417b7c2aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFVGCUHS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEgNOJ7fI7qOFT5ccI3pDaiuVobx4VcXBkw1lJQBE3QgIgaS8lu8YnThSWOqBptfJfPDMJsU9aZO8Gu8PGLm%2B73mAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDD%2Bym70yUwOKsd6thCrcAzTTBQ1%2B9zySbuNVqDqmBcGD0ybKAbfJ6WTADWs1XQTbXp7svXXOnSfstqkw5sjlg2yKY1UZ7w5YLDGc4oYiVQ0hnJgkQu11MsrMeuUG4rm194RFEVxDxFLW7F7o2zFKRJBtpnqJMBSKAD%2B94%2F%2F5uK661YMJSvwqF1QuFi3lnAv0XI%2F9DP5uHWpEaVM4PRqrhUAuVwZ6eGMysp%2BRB7YBdmhE64E6ksffg53BQzVX7F5ANdlKwx10B3p%2F%2BhzOpIBTGqF9NlFd9B9pXYjv2Gny981XzQFjfc8ui3MOtu6aw0NRbwQzL3WuDeu6urqwJoSvCMHkpQRwzNsW1ZXvScgO089AnYAnozaCzZzjb0IfpJOHADVcO9wyKrWIHP%2BlDu2SV387esI3UNRyzziQ4xMGQ12i2qzp%2BaSZMuaJngH6LgVnitPNlAvMdMNhNwS4EB64SQFv5FVmhXPznCgA8UX%2F4HZ9juw2NJ%2BMntyZl5LT5%2BIu1uH2B3sWiXgW2pCK9UUu59Xezrtkr5yJH5lji0d0ufCyodyzGtJAG%2B7KhmOlwWo1lBU0eQSpIbL3NjLnn8uUAy%2FtvU%2FDXPRE%2B9266dTZloqQDQpyJDvUdF7WC5iEIcRgfcluniZJRcvUiBlnMJCvg8AGOqUBhDSHHhMEmKjqvKtKoXVN%2BcGbSs3PHalWWUghMfsZosP5lwrQVCEe3vIE5NAH1ohxw73Ce%2BHWTEOaluGrwfaNIbOU%2B%2FofElHcHkHW%2FWTJucicWm4tbEWdJFx08JaDOBjFDFUJs%2BS2OC4aFuloi%2Bm%2BAhsQvCgGzUGjM6RihS1palcQmyKVYP2OAj6p9WoBpjj4Ip7PCn68K3tFHF1IlOARBxFE7HDw&X-Amz-Signature=e8769d5064a5a2603afb278e7798739d52bfd0ce34b1ddfee1b55a60105ab786&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
