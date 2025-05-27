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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBIGCBI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa%2BOCqJvbBkS3ZZcbYxknsbwfkTQRnSuyCIJXi%2FadT1AiBM1jNBBgQuLGZrkH1%2FeQIIQyvgk4GHzjdC2%2FE0%2FgFuTCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMi641Iu9da%2BEx8mQ2KtwDE5BMP4%2Bac7IeO%2BrE%2BqymBcJ%2BM5Q65HwlkGzFh2ElMZftc3tq%2FhwIHCNyBSJG6UMrJaKIWX%2B4yovmdFcRzxFsDqXQZKsgctLE0h1uH6L9wapGoEvRA4BjQhjbsxdZ5tHSttADptiViKQ%2BmOwKCMnEiOCaeNWJgaz8upvtKtmr0GFF0zjKQY2a0C46Uo%2BrcSgX5VVHLxUnT%2BO3xPSZc%2FAQ4XgPG70I3LVwSkC4OfMfbUk07jmiUce6kWUvOgCbRr%2BNBbj3eOJR41snMVgxC94zhR6n1lC4SZomrmWoXYqtLqCx3sj2B7AKNkGlgjqkEKQgre0yR5gkwXLld4ufdCZjW0kmRlOkiICXMwGHOlDOXpnCmU5vo3EYCrYwPS2Wdfbi7%2B1r5XamsGI%2BFaFlzujKkthO4pSH64IZK0sdoCS9yObfPt9Mlp41Ucp3KVrT8%2FSSR12bQhFKFFdNphw08jmGMZHz4SX667Dx74kt68t6o4FWUuTi2NqpHgq%2FxSNiudqS7Sj%2FtkspC10iMDkt7QEDgmev5FvsbDG8k0DrfZq22SFf%2FF870mJ8efMyptNFUqN3SykCwgJd5wpg6Oq28hZkTP5W0HnqzEfWuyHg96O8odIzjSiAO7CaOuLzZT8wxsnYwQY6pgEYcvQl3ZcJV%2BvnkI2PBtA6ktqBAzJHBNFzAxMJQyAE28kWXp0mokz3hV%2FAsCLTcCW56E1eloGnsF9%2FBxj4sqhFNOCBwHrJh6smKFNIMwXLVnqGaQsgG0Hq2R3kRIanKyXnQj37dQHQSl9AtsO4nOes26319fQOj%2FWG3llSy3jkd42FGzho628fxsLZuZ0jPdhYDUlYrcnMRlK7C6uuNZJJdlkqypPq&X-Amz-Signature=6253e7ac1939d9992ea3bf41a18d912afa22af86739eb43a304165770efb80f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNBIGCBI%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICa%2BOCqJvbBkS3ZZcbYxknsbwfkTQRnSuyCIJXi%2FadT1AiBM1jNBBgQuLGZrkH1%2FeQIIQyvgk4GHzjdC2%2FE0%2FgFuTCr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMi641Iu9da%2BEx8mQ2KtwDE5BMP4%2Bac7IeO%2BrE%2BqymBcJ%2BM5Q65HwlkGzFh2ElMZftc3tq%2FhwIHCNyBSJG6UMrJaKIWX%2B4yovmdFcRzxFsDqXQZKsgctLE0h1uH6L9wapGoEvRA4BjQhjbsxdZ5tHSttADptiViKQ%2BmOwKCMnEiOCaeNWJgaz8upvtKtmr0GFF0zjKQY2a0C46Uo%2BrcSgX5VVHLxUnT%2BO3xPSZc%2FAQ4XgPG70I3LVwSkC4OfMfbUk07jmiUce6kWUvOgCbRr%2BNBbj3eOJR41snMVgxC94zhR6n1lC4SZomrmWoXYqtLqCx3sj2B7AKNkGlgjqkEKQgre0yR5gkwXLld4ufdCZjW0kmRlOkiICXMwGHOlDOXpnCmU5vo3EYCrYwPS2Wdfbi7%2B1r5XamsGI%2BFaFlzujKkthO4pSH64IZK0sdoCS9yObfPt9Mlp41Ucp3KVrT8%2FSSR12bQhFKFFdNphw08jmGMZHz4SX667Dx74kt68t6o4FWUuTi2NqpHgq%2FxSNiudqS7Sj%2FtkspC10iMDkt7QEDgmev5FvsbDG8k0DrfZq22SFf%2FF870mJ8efMyptNFUqN3SykCwgJd5wpg6Oq28hZkTP5W0HnqzEfWuyHg96O8odIzjSiAO7CaOuLzZT8wxsnYwQY6pgEYcvQl3ZcJV%2BvnkI2PBtA6ktqBAzJHBNFzAxMJQyAE28kWXp0mokz3hV%2FAsCLTcCW56E1eloGnsF9%2FBxj4sqhFNOCBwHrJh6smKFNIMwXLVnqGaQsgG0Hq2R3kRIanKyXnQj37dQHQSl9AtsO4nOes26319fQOj%2FWG3llSy3jkd42FGzho628fxsLZuZ0jPdhYDUlYrcnMRlK7C6uuNZJJdlkqypPq&X-Amz-Signature=9deca35fd53b8482ad88880046be2f791be7b3da5227f5ddb679cd216f1d15a6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
