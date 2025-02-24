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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IXPE2I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUyOZaGxqBZ7kkqN%2Ba78DPWqj8zEfLZ5CImn%2Fu2yS9QIgAs0B7noUYxiYfYl%2FzLF%2Fw8HLuIAdBTvbmH3nhnGF1bUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIjbhHTLr7p%2BpweVHCrcA%2FBZyqIFT3TfVWwnpIOiE6iiXfAetzPTMblBCb7xkMbIfwvwPHWkSK4rMTd1sZmAqaiOIDw1U1D%2BB10Ha5fSrlvf5uBKwp%2FoqvxwDxWxSsczBV2mX4%2FN2aTuiLwdu28uMcPeLTBpxQsRTIY7N2%2FJUjKfK%2BFXJAOKv1Tl%2F5N6j1XDEijVftF1Wo1DJZ%2Fx97T5Gxioq0gEn3djOymBk5ai%2BbXKPgzunlHPaM2ap3Mb%2F4pN8W6rUaBxW1n15MEWk%2FExcbME1%2BnwqfMn627OYiU9QRjynoJLql%2FN34GAFDT9pKxro4UELQVBaUIha7LCt3Mpprwzfsb3%2B3mDha7MBSrSb%2BuJ9sNYhmUyPb6fXRvsSyJ2oViQkNN145x7odmwejuAOOEqoUnAyobJ9mDSPOGN66%2Fi8LcjpPmiI2YBo9fl5bFp2Z4nGR6iB5WamgAnek8pM0pbjCKB4pzL5MZydlnnmz723xz769rIK1DDvIoj4WBBpHaLddjczoEn8KSDHZhJ4t%2BZAJfRxgzRSwu5pyjKqOV0FL5ox%2FhgbvggLG%2BMScQey0aa1P%2FdqhzP%2FGBrlozZL3IPx1L%2BD6th3XjaWki8VMSuRvRVyRKLfwwixFmZK7LwFHv05yLhtF6dtOjoMPrx7r0GOqUBY8y8aIEdRHWdQCOQxcVn5RdOcZH0XQ8qjwQ17baU6dhOBcVmXZmyzWgo10UCSgztgOvvo8fNk1wPQeidn3pxsbicTyDfWCXNYzyA8H2UFz93ilk%2BW5wZMFm7Tylb0USuyT6YDwhPHvW1OG546WxxQec3EmdAZJ4hKjqykt9unCrOVWw2ecjz8HWB6pl6u7ZaLCcHOh3EcRhr%2FigouA06zgfDZgd%2F&X-Amz-Signature=0ab61b312f7f8aec8fdaf8896cf1b9d20179e99444f88fb191b44c75ace25ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644IXPE2I%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnUyOZaGxqBZ7kkqN%2Ba78DPWqj8zEfLZ5CImn%2Fu2yS9QIgAs0B7noUYxiYfYl%2FzLF%2Fw8HLuIAdBTvbmH3nhnGF1bUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIjbhHTLr7p%2BpweVHCrcA%2FBZyqIFT3TfVWwnpIOiE6iiXfAetzPTMblBCb7xkMbIfwvwPHWkSK4rMTd1sZmAqaiOIDw1U1D%2BB10Ha5fSrlvf5uBKwp%2FoqvxwDxWxSsczBV2mX4%2FN2aTuiLwdu28uMcPeLTBpxQsRTIY7N2%2FJUjKfK%2BFXJAOKv1Tl%2F5N6j1XDEijVftF1Wo1DJZ%2Fx97T5Gxioq0gEn3djOymBk5ai%2BbXKPgzunlHPaM2ap3Mb%2F4pN8W6rUaBxW1n15MEWk%2FExcbME1%2BnwqfMn627OYiU9QRjynoJLql%2FN34GAFDT9pKxro4UELQVBaUIha7LCt3Mpprwzfsb3%2B3mDha7MBSrSb%2BuJ9sNYhmUyPb6fXRvsSyJ2oViQkNN145x7odmwejuAOOEqoUnAyobJ9mDSPOGN66%2Fi8LcjpPmiI2YBo9fl5bFp2Z4nGR6iB5WamgAnek8pM0pbjCKB4pzL5MZydlnnmz723xz769rIK1DDvIoj4WBBpHaLddjczoEn8KSDHZhJ4t%2BZAJfRxgzRSwu5pyjKqOV0FL5ox%2FhgbvggLG%2BMScQey0aa1P%2FdqhzP%2FGBrlozZL3IPx1L%2BD6th3XjaWki8VMSuRvRVyRKLfwwixFmZK7LwFHv05yLhtF6dtOjoMPrx7r0GOqUBY8y8aIEdRHWdQCOQxcVn5RdOcZH0XQ8qjwQ17baU6dhOBcVmXZmyzWgo10UCSgztgOvvo8fNk1wPQeidn3pxsbicTyDfWCXNYzyA8H2UFz93ilk%2BW5wZMFm7Tylb0USuyT6YDwhPHvW1OG546WxxQec3EmdAZJ4hKjqykt9unCrOVWw2ecjz8HWB6pl6u7ZaLCcHOh3EcRhr%2FigouA06zgfDZgd%2F&X-Amz-Signature=b695a622d9989b1f8cacd19a6a4ecc71b5754169d54be536f954013d943d7f35&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
