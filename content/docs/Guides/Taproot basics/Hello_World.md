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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZR7XCFN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACm7%2FqxNRVrquHzbLBV8OlJ6Ou8TJ7V7nK0P3IOcLABAiAldF47b561QlUDEW8RvA8Gl2OFYUMGtk9TN3yfKBXStCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FE3fIbu51PVtRrnEKtwDIj6rP8q8AFiBENCNcB9oi2YY2TI5HSi%2BvWBVQStAdqnSm5ZuQWWRA7aTSKKGBu5VdrTqnmKFcBPuGRSihb46ETJboUfm5uqpwl5ULUwukQEwAR%2FwCSdK3FrGFUOrAZw5wTB7eCS9rh%2Bqg%2Fm9GL0QfySOiicIyDngBCItJVwGoMHk%2FJ9QTP8sLQnuozJ2FX8keZXeI1WrRF%2FljzAhgVKlviCW96v7K3Zh79Jc2HsCEWCOLZupW1Ktr3wY9noziBRxYnQr5%2F1hq3pPAovWNJvpwUKPojIRUV6grQ4TD5rVxEoqlGa0Xk4FRsC0IlQlP1vgSlots3GQFnL%2BFgmWpP7brvqBqk2IExo6ftX1TLRM%2BkPiU0TNdPkFumHzu40LB7WQOM562GErL9Hm7eR62Lnd4H%2BknHu01kqItfy26xi%2Fnerv52OyPC4nsWqoUTUOLF0kv%2BPTznTjUFGGT6Cdx8saequ6nqnhME%2BdH44mPIjHz%2F2gzkLAhOHdvQfoLEU9k%2FywpIkQUSQQXkDXE9HSw0nrjm0Kjgwz63vfmY1AqnEb%2FvyvVqAa5SmDoNptAZaKnCX%2BU5bkWEErc1DSZiNGkyYlpRgOKHKb5j1sSG2YeJIbb911MmbWquBjVY%2FQP6Uwmcb%2FvwY6pgHcHmPNUtxOCexPR7ZLEN5Ejs2J3QThB9DTSRkTE9xesyO8CRGg%2BP5PLehGOwCXQCpXO7CIERq5cKmvQpaqDP3UYgFttWRKRYJmmJrvNUXWBkHoV1ExPO8lvMUCg68VskfYZuXgEjqj2WGTKQrpd8BKSFfvHJ6yloQzDFcamJXcM2%2FuGXWQWExpHh8fnh1v5LyEVGVSDUNtkqCeMjfhaS9cOCA78XUA&X-Amz-Signature=57a02e0aed6c46ae091817eb757e958819e7979a26ec1437fd096f391dde6c40&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZR7XCFN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACm7%2FqxNRVrquHzbLBV8OlJ6Ou8TJ7V7nK0P3IOcLABAiAldF47b561QlUDEW8RvA8Gl2OFYUMGtk9TN3yfKBXStCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FE3fIbu51PVtRrnEKtwDIj6rP8q8AFiBENCNcB9oi2YY2TI5HSi%2BvWBVQStAdqnSm5ZuQWWRA7aTSKKGBu5VdrTqnmKFcBPuGRSihb46ETJboUfm5uqpwl5ULUwukQEwAR%2FwCSdK3FrGFUOrAZw5wTB7eCS9rh%2Bqg%2Fm9GL0QfySOiicIyDngBCItJVwGoMHk%2FJ9QTP8sLQnuozJ2FX8keZXeI1WrRF%2FljzAhgVKlviCW96v7K3Zh79Jc2HsCEWCOLZupW1Ktr3wY9noziBRxYnQr5%2F1hq3pPAovWNJvpwUKPojIRUV6grQ4TD5rVxEoqlGa0Xk4FRsC0IlQlP1vgSlots3GQFnL%2BFgmWpP7brvqBqk2IExo6ftX1TLRM%2BkPiU0TNdPkFumHzu40LB7WQOM562GErL9Hm7eR62Lnd4H%2BknHu01kqItfy26xi%2Fnerv52OyPC4nsWqoUTUOLF0kv%2BPTznTjUFGGT6Cdx8saequ6nqnhME%2BdH44mPIjHz%2F2gzkLAhOHdvQfoLEU9k%2FywpIkQUSQQXkDXE9HSw0nrjm0Kjgwz63vfmY1AqnEb%2FvyvVqAa5SmDoNptAZaKnCX%2BU5bkWEErc1DSZiNGkyYlpRgOKHKb5j1sSG2YeJIbb911MmbWquBjVY%2FQP6Uwmcb%2FvwY6pgHcHmPNUtxOCexPR7ZLEN5Ejs2J3QThB9DTSRkTE9xesyO8CRGg%2BP5PLehGOwCXQCpXO7CIERq5cKmvQpaqDP3UYgFttWRKRYJmmJrvNUXWBkHoV1ExPO8lvMUCg68VskfYZuXgEjqj2WGTKQrpd8BKSFfvHJ6yloQzDFcamJXcM2%2FuGXWQWExpHh8fnh1v5LyEVGVSDUNtkqCeMjfhaS9cOCA78XUA&X-Amz-Signature=914c9326838573132ebf432a6b7f81db13bb0dd2ee5173232e39e0e6005b608e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
