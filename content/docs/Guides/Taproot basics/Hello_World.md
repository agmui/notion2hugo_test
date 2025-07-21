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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKQYEUB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC526lwKooODmf7dqrRhbndl5amP19jFhWa2QcB1jaHzAIhAK06K7YBHcFwu4BVTwirUf0z0vSAYA%2BAgvXgJor1BGChKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekypyxEbtoH8xtmUq3AN5vyI6khkUecudE4pEfVIaveXieylaGqD7XNqnEXW%2FNYvCig6BMZXDw%2FQJ3PDmcg9%2BRm9uHWx%2B7elbpsjaIPePX4DYjppwQbaN2Vjtyjrk7fAkllr7DRQYccs6ULxu60PTHXAwWd3HaLrw8gsJG%2FtJaY6zRs3q4DYX50jBT0ta5N4jD%2F8Tygwx%2FHKSpIgTNUpCY59ojIPfvaRjv%2B9aZCSiS9nkX5vy1MJ83QJFPJoB%2FUKscR8Jzn%2FdAceJBbqsvKn%2Fa1Y6V5mo41cZvGRV7elaysH%2B06mZq1najIEik1xfb2mMcKodv53IsMdJyk9ZEzTZvk9ajiedapkRB0UVw95Bheco%2BHR7fCZO%2BdWhksoR1XH%2Fw4XW5ZdQFpw%2F4CEO2A1HdBRO57sNmwuhtrvnqFKu9lQFRkwxekhfPzaZIg2L14X7ni9sBl6Y0JVqMFxAR8sKrLcCuYNewe%2BUW0k7VxmboyvVbWWCgb6e%2FVa3UD42ezFXn7eSqR8ssL6r2hlcR0G50lJ%2F2y49SUwjWMQKC5j%2BTH6MuuD1QbnWdACn0iPDs14o%2FLHNrKll2T0z%2FJax7sXwkblLdMrwEbTxGAQxBYXBGyv6qtnsjLeFCDxeWfhqSGZOcrxZXdTwjJLlKTDXjvrDBjqkAZuVzXFfuceOxOuChu3afkVCe8CciWMYS2wXlxM5e0GADoyX2PkF9OcZaC7SnCHMBLiUOpqRBDNBXtBjX919GCc4%2FCJls1eXcWZKsxhGwpCPEiRHeeTNKYM3eh6jQ%2BN503GPnPq57mFDDxTrr29Tyyej9LZ3lC6cZTx8RDc6dTsn%2FeCmvQ9sh2VH68NwPFP7HPHovb0iseGJAu0cTG6RswHEIehx&X-Amz-Signature=b380ac4320de6deede3da460404d9157e0857e6d5b49f1683399910bd61e5a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKQYEUB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC526lwKooODmf7dqrRhbndl5amP19jFhWa2QcB1jaHzAIhAK06K7YBHcFwu4BVTwirUf0z0vSAYA%2BAgvXgJor1BGChKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekypyxEbtoH8xtmUq3AN5vyI6khkUecudE4pEfVIaveXieylaGqD7XNqnEXW%2FNYvCig6BMZXDw%2FQJ3PDmcg9%2BRm9uHWx%2B7elbpsjaIPePX4DYjppwQbaN2Vjtyjrk7fAkllr7DRQYccs6ULxu60PTHXAwWd3HaLrw8gsJG%2FtJaY6zRs3q4DYX50jBT0ta5N4jD%2F8Tygwx%2FHKSpIgTNUpCY59ojIPfvaRjv%2B9aZCSiS9nkX5vy1MJ83QJFPJoB%2FUKscR8Jzn%2FdAceJBbqsvKn%2Fa1Y6V5mo41cZvGRV7elaysH%2B06mZq1najIEik1xfb2mMcKodv53IsMdJyk9ZEzTZvk9ajiedapkRB0UVw95Bheco%2BHR7fCZO%2BdWhksoR1XH%2Fw4XW5ZdQFpw%2F4CEO2A1HdBRO57sNmwuhtrvnqFKu9lQFRkwxekhfPzaZIg2L14X7ni9sBl6Y0JVqMFxAR8sKrLcCuYNewe%2BUW0k7VxmboyvVbWWCgb6e%2FVa3UD42ezFXn7eSqR8ssL6r2hlcR0G50lJ%2F2y49SUwjWMQKC5j%2BTH6MuuD1QbnWdACn0iPDs14o%2FLHNrKll2T0z%2FJax7sXwkblLdMrwEbTxGAQxBYXBGyv6qtnsjLeFCDxeWfhqSGZOcrxZXdTwjJLlKTDXjvrDBjqkAZuVzXFfuceOxOuChu3afkVCe8CciWMYS2wXlxM5e0GADoyX2PkF9OcZaC7SnCHMBLiUOpqRBDNBXtBjX919GCc4%2FCJls1eXcWZKsxhGwpCPEiRHeeTNKYM3eh6jQ%2BN503GPnPq57mFDDxTrr29Tyyej9LZ3lC6cZTx8RDc6dTsn%2FeCmvQ9sh2VH68NwPFP7HPHovb0iseGJAu0cTG6RswHEIehx&X-Amz-Signature=3866a565f402c5ebbdca8425a7786741cfae261a56dde05cd06f000a8179d8f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
