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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7JLGJH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDtPVc3AeXIUrNfSu%2Bs1dJ8DsRx00eX1GvhjLXKw3CFgQIgMrVKwu%2FU7YdrLx8xaN2rd7bImCV6nENHQHd6y6wllCkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDUSEERtwCSnhMlBVyrcA6uurZWNzBgKydr%2B6O2TzGLjOatDPdV2g4i5pbFvtg9VQezZkGxY71bYApCtmaakYGq4WVUW8bEADwGu%2BztEqkJyAOdDIVl9XtBVKmiO2u0BTi78NIaMsOzrR6EO3e%2Bi0THVb0rOODrgF73olei3oet85V%2FXKBOQ0EO2EpYP3nndkiPj8zFV7IhkSUc1v2VvCj2QLX5jBXTX692h%2Foyo%2F4ba3HvPmFAYdTlG9%2FSHWat1HYllH6KDgrh8nZXelRgku%2Bts8CZkc4JAowr35Ayj1qQEG1eJrZ49JxH1B7FqXyQ80l04TtEebpCE8jdXkEHTe0OB6EhSW7CGw5bn3evnDHiet1C91g8fSapt02a963sHgwFkLGHOkChKYxOFSoEsQSFIo7YslbCsmu166yFjf59V17IX2r3v%2B3IH53oY%2F4JXwYbglPvzRmR8xDpl9l6mPTpDjir9bSWwkdcqxE8lmmvFXgdqzVz0iJ5Ib5oWezmTFtlnw0WFye7SDGjR4uCM%2FPWQ4tE0hT6AGVj6KSk4HQxjAWG5gpHrGxLYgdDkbdVQnf%2FnjcGSDKBOzKhhgaguzo0wtjokl4hgWEtZgL4b%2B2yABKfZsazl8vDKbOvR9oG03%2B4UQMygVodMya3BMOSQtr4GOqUBCkFdFzazYI3nFXPh%2Fh6uvKz7LEOn%2Fd9eONzMcs%2BxLnRh9EUHqW5kD3g8RTQDAZW4ieJY9I%2BV%2BxZLEry1TGUXfpqmlZARsXaU6Itg185%2FDrE76FGHElpfrvE7DJWgrkblLoE3PjqBu8T2yjsHWenp3IqIHrQsw2qgKcQeAYYl6T%2FwtyiZfg1L2PLdpSBqhvJOFvm6rXODF6QArHCXnrdGGzTjKLg%2B&X-Amz-Signature=db481d5deb54961c0e2f82251b03767207bca8b434b99b4b6d3731ddef753af5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7JLGJH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDtPVc3AeXIUrNfSu%2Bs1dJ8DsRx00eX1GvhjLXKw3CFgQIgMrVKwu%2FU7YdrLx8xaN2rd7bImCV6nENHQHd6y6wllCkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDUSEERtwCSnhMlBVyrcA6uurZWNzBgKydr%2B6O2TzGLjOatDPdV2g4i5pbFvtg9VQezZkGxY71bYApCtmaakYGq4WVUW8bEADwGu%2BztEqkJyAOdDIVl9XtBVKmiO2u0BTi78NIaMsOzrR6EO3e%2Bi0THVb0rOODrgF73olei3oet85V%2FXKBOQ0EO2EpYP3nndkiPj8zFV7IhkSUc1v2VvCj2QLX5jBXTX692h%2Foyo%2F4ba3HvPmFAYdTlG9%2FSHWat1HYllH6KDgrh8nZXelRgku%2Bts8CZkc4JAowr35Ayj1qQEG1eJrZ49JxH1B7FqXyQ80l04TtEebpCE8jdXkEHTe0OB6EhSW7CGw5bn3evnDHiet1C91g8fSapt02a963sHgwFkLGHOkChKYxOFSoEsQSFIo7YslbCsmu166yFjf59V17IX2r3v%2B3IH53oY%2F4JXwYbglPvzRmR8xDpl9l6mPTpDjir9bSWwkdcqxE8lmmvFXgdqzVz0iJ5Ib5oWezmTFtlnw0WFye7SDGjR4uCM%2FPWQ4tE0hT6AGVj6KSk4HQxjAWG5gpHrGxLYgdDkbdVQnf%2FnjcGSDKBOzKhhgaguzo0wtjokl4hgWEtZgL4b%2B2yABKfZsazl8vDKbOvR9oG03%2B4UQMygVodMya3BMOSQtr4GOqUBCkFdFzazYI3nFXPh%2Fh6uvKz7LEOn%2Fd9eONzMcs%2BxLnRh9EUHqW5kD3g8RTQDAZW4ieJY9I%2BV%2BxZLEry1TGUXfpqmlZARsXaU6Itg185%2FDrE76FGHElpfrvE7DJWgrkblLoE3PjqBu8T2yjsHWenp3IqIHrQsw2qgKcQeAYYl6T%2FwtyiZfg1L2PLdpSBqhvJOFvm6rXODF6QArHCXnrdGGzTjKLg%2B&X-Amz-Signature=7aefa53785dbdddc40f1b813267f17ec5056dba9435d4a9ac7cff8335deb0748&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
