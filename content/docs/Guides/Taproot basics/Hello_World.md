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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWY2IZD7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIu1e4ipxSgPurEXnUHuPsJrk1B7rDX%2BWApXLnmmbdWAiAHt%2FEX4lHWrb5dxQliNuY6wjOKg7Z8UUqn7%2BuBahCq0SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBS25dR%2FAJyKEL6mkKtwDmgShQJPjxsJfXsUly1VwUCqdcKa34bsLkpeHn0umUje9Q0cc8uflXgZwiueUZJJvfxhrh18sADw0Gnc0Ck%2FKZw3oMYZ0jzaDkQ1%2Fc3fDpNNyuNYCdAORGfajyF%2BNokArJdI7wbF78J3vKaYKhQjLSEsqpd6yr5OYnKf0mkWESxKjGnTBo588AE08FnxCISIkW3c4%2Fr7qJ6L%2FNNoxuchbeakkXgtYRbZVOF0L0cQ%2FO1j9xRYn91frcCA3FkrV9gTPNSstrYaAXtcntwv%2F8Zwok%2FkhFEm4Gpr6B%2BCaP103m8hUG4anWWf7Cmvmpnvp0NzoUlPfvvO9wkLBbHDyyHRxYkIWxhczhAAluGt8trRzwK0AkolOr4gU%2BQ31SYTPBrYQlCRcbtQLkpUXZb3%2FdYoL83hcns6GZPj%2B4QtvpWG%2F5JaEUvsEwllnmUzifsTaZ1t6TRD2seIdrQRKRMrSyPJOewuK4UCAvGGHsZrgAHkblcERVbMwYGjq%2Fnif0Z%2FxNKgtMUOfO8TZs%2B7hRhaaAyHtOtjjZNyv6ieQNWAFeTALKFAHwEiLAwIx6%2BJiLC%2FGIm9NoGM59c%2BZXZPaHZoUIL4QSDZImKn85VTp80usWAJTJlCbzyHfKYs0NP5MnwswpaTsvAY6pgFoLxtUIrZR5LeciHvreQAisPNpa6eiEs9WqO7wMLufS2v30Mxe7xOxDiu3MZ%2BygOlmT3inPt8DaDQKQnK1ByoAyt5b%2BcxzY2rqBSplT12IaHdSrPcP%2FRzjghAPlfDlPfq4%2B7RNdGXj3uUoq2uLnAc9tjFmaNNOZcZ7jrTrUjaEV132JC6l8ou2LCJ76Orp0%2FYmy5swoXCd1xbury5YZ7SDdcvBsi7V&X-Amz-Signature=d9fbbd07fe46e8b8dc923f86e728783bf3bc1ea72a66fdac619ff6823e66f4cd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWY2IZD7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIu1e4ipxSgPurEXnUHuPsJrk1B7rDX%2BWApXLnmmbdWAiAHt%2FEX4lHWrb5dxQliNuY6wjOKg7Z8UUqn7%2BuBahCq0SqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBS25dR%2FAJyKEL6mkKtwDmgShQJPjxsJfXsUly1VwUCqdcKa34bsLkpeHn0umUje9Q0cc8uflXgZwiueUZJJvfxhrh18sADw0Gnc0Ck%2FKZw3oMYZ0jzaDkQ1%2Fc3fDpNNyuNYCdAORGfajyF%2BNokArJdI7wbF78J3vKaYKhQjLSEsqpd6yr5OYnKf0mkWESxKjGnTBo588AE08FnxCISIkW3c4%2Fr7qJ6L%2FNNoxuchbeakkXgtYRbZVOF0L0cQ%2FO1j9xRYn91frcCA3FkrV9gTPNSstrYaAXtcntwv%2F8Zwok%2FkhFEm4Gpr6B%2BCaP103m8hUG4anWWf7Cmvmpnvp0NzoUlPfvvO9wkLBbHDyyHRxYkIWxhczhAAluGt8trRzwK0AkolOr4gU%2BQ31SYTPBrYQlCRcbtQLkpUXZb3%2FdYoL83hcns6GZPj%2B4QtvpWG%2F5JaEUvsEwllnmUzifsTaZ1t6TRD2seIdrQRKRMrSyPJOewuK4UCAvGGHsZrgAHkblcERVbMwYGjq%2Fnif0Z%2FxNKgtMUOfO8TZs%2B7hRhaaAyHtOtjjZNyv6ieQNWAFeTALKFAHwEiLAwIx6%2BJiLC%2FGIm9NoGM59c%2BZXZPaHZoUIL4QSDZImKn85VTp80usWAJTJlCbzyHfKYs0NP5MnwswpaTsvAY6pgFoLxtUIrZR5LeciHvreQAisPNpa6eiEs9WqO7wMLufS2v30Mxe7xOxDiu3MZ%2BygOlmT3inPt8DaDQKQnK1ByoAyt5b%2BcxzY2rqBSplT12IaHdSrPcP%2FRzjghAPlfDlPfq4%2B7RNdGXj3uUoq2uLnAc9tjFmaNNOZcZ7jrTrUjaEV132JC6l8ou2LCJ76Orp0%2FYmy5swoXCd1xbury5YZ7SDdcvBsi7V&X-Amz-Signature=1fb09e4393f71fb0fb8bb6f1c6920a7e99a36f43436db878de44afc6d4bef662&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
