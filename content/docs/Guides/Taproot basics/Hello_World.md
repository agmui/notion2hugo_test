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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZE3CZN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU6c8GJmwvMSIkFXmRLEbmZraC9JXFwPrHJfnyXVGOyQIgS2hlimAkAsxhbj5jXP1lo0bPppKrYmxW7kVvOivo%2FIAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ6RCj0PxhOG%2Bz8CSrcA3W%2F37Ln5ZpkklVY6vYtusIrQTUiYObkCh2IKSMlxrWcUjHrX4fvekT86I87IyD9SxKceul%2F35uX6Dr%2F%2BVAzfBaxXjAD9%2F7YiDzNTUW5TznGpIelMauO6jrDan9As9tIrcdQZdadRG%2F4RV2BjUwJntGlF1Wur%2FpHp%2FAcw0BWc6MPi%2BQBjZFG9tI5PZrz%2BfmH5bOM8oOH8vB0b%2Fw9U5iAvHu0%2BOV%2BHrcK%2FpP1n%2BTvN%2FXzupheITncN5EdxwxF34RL05BJZ1KASqucvFR7o8%2BiUoEwIkWopzuCJeRs8UNz2NdKXhQpRZhE8hnyUQkPtGtA%2BjCd7sVFdDt9BXNkIMfnWst6UhruXSK9CkZr86ulDB2DX8KTWx%2BcaIcBYpd8cZ7su2Ji8lB%2BGb9ku%2BNR%2BK5tzt3v0r%2By6ruDK03VpmchM1KhSIZ8Lt%2BAfJyhCNEkxfpQ9ktnj2%2BHcGmS3SeyxCLooTs31M8rdoxSymea4QegZpV5t8DnlnSabvxcoZ5BSsOm8x8NIkDkrVYelFvQGtNT7hid4v4%2Fp%2F%2BZ5MfshJQC%2FT%2BE5fxFsg869xbPkElEBk9bM62V%2B5Q29i0IRMxqz7YO9irGpdjjPVtVHNvDPHHzuUHtY6KVK6%2FmpzEIPaFrML7BgL0GOqUBBT%2FlGWSpHBAQ3yGOjJ0irgDSm64GmMeq3uLUemCZlFZ3pBf5VL76gixcr9%2FAv7%2FpvJNhuw3v%2FnCOLCf2cyexOHE%2FNz7U1E0xXN69YfYT1TcAzMja9UlMGEKdImnaC0ZzIMXahvmjf87hZMQ7DWszWQQvh45KAUceplSrkUJ%2BS64s0kIRu3M4GoTY6hTHhJjp6%2F%2FSMNV%2F17uLmqFvSN1rek7POMKD&X-Amz-Signature=377a9d638a5a8b4a8e875adb0c964ab3688382d840da3fcf093e11f29901594c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYZE3CZN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU6c8GJmwvMSIkFXmRLEbmZraC9JXFwPrHJfnyXVGOyQIgS2hlimAkAsxhbj5jXP1lo0bPppKrYmxW7kVvOivo%2FIAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQ6RCj0PxhOG%2Bz8CSrcA3W%2F37Ln5ZpkklVY6vYtusIrQTUiYObkCh2IKSMlxrWcUjHrX4fvekT86I87IyD9SxKceul%2F35uX6Dr%2F%2BVAzfBaxXjAD9%2F7YiDzNTUW5TznGpIelMauO6jrDan9As9tIrcdQZdadRG%2F4RV2BjUwJntGlF1Wur%2FpHp%2FAcw0BWc6MPi%2BQBjZFG9tI5PZrz%2BfmH5bOM8oOH8vB0b%2Fw9U5iAvHu0%2BOV%2BHrcK%2FpP1n%2BTvN%2FXzupheITncN5EdxwxF34RL05BJZ1KASqucvFR7o8%2BiUoEwIkWopzuCJeRs8UNz2NdKXhQpRZhE8hnyUQkPtGtA%2BjCd7sVFdDt9BXNkIMfnWst6UhruXSK9CkZr86ulDB2DX8KTWx%2BcaIcBYpd8cZ7su2Ji8lB%2BGb9ku%2BNR%2BK5tzt3v0r%2By6ruDK03VpmchM1KhSIZ8Lt%2BAfJyhCNEkxfpQ9ktnj2%2BHcGmS3SeyxCLooTs31M8rdoxSymea4QegZpV5t8DnlnSabvxcoZ5BSsOm8x8NIkDkrVYelFvQGtNT7hid4v4%2Fp%2F%2BZ5MfshJQC%2FT%2BE5fxFsg869xbPkElEBk9bM62V%2B5Q29i0IRMxqz7YO9irGpdjjPVtVHNvDPHHzuUHtY6KVK6%2FmpzEIPaFrML7BgL0GOqUBBT%2FlGWSpHBAQ3yGOjJ0irgDSm64GmMeq3uLUemCZlFZ3pBf5VL76gixcr9%2FAv7%2FpvJNhuw3v%2FnCOLCf2cyexOHE%2FNz7U1E0xXN69YfYT1TcAzMja9UlMGEKdImnaC0ZzIMXahvmjf87hZMQ7DWszWQQvh45KAUceplSrkUJ%2BS64s0kIRu3M4GoTY6hTHhJjp6%2F%2FSMNV%2F17uLmqFvSN1rek7POMKD&X-Amz-Signature=efe828f338d40aa3e8ecdeff6a659f05e950c10208e583234169e952d3b9d274&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
