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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPTJCV3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH1ILOSYOzPxMztIW3s5jPws33nw22M7HLhDu3uOrxWZAiEAjSDVmHw1c1hNUbb7RhumjmCWhWGgEjGoaNa3kYYDju8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbGc5h2AteX2QphGyrcA8GJNe7uHHIEwcwDAvj%2FLlk5XNJXRznq4P6CY5mwghMlJcu1Iej5w7JKKb84sPrYN1dojOkyKZj7BZBqg4ogL7BzFcGbmMZGjRvqq%2FwBPqKULwmCtRzltLLiUWQOKf9j%2FqzgoQipfKH4vwWMx693HqvaoKBXqZubTzbPJWpRIHK1M1xOJsdgaoWTy85zTZ%2B9PspV%2FjvcbCb%2BB%2F63%2B9QQcWurla%2Ff1RvN5aNgGaZxl1vHo4TxPbAqpdmLU12aBBUNZpVKCc9sjIWf%2BEgD6utgRaFgyRxCLrH0UvwVxKTM%2F3NVrnSh4pMhzqJYM9fVLrg9ZcZoo6qqT4xcY33o1WvpopHHmCrkiiB7CXvrmMgv40RO40DZ5ZeCypeOPqMJlht3ar2zalv651ymRzcGt6vscvsQrBqw%2B5ocu8ToUEzv9C2h6bRSrPU%2B1GepEdipcSFAzrLNacvFlRr1Jpp0a7qIcjavgM3buTbdDamZF%2FgFTy4kAgyYscIEoLR5RXVFCL9HrwhlvEf7iEgiJHO3hrxRv1cVpH9AuxsvhiMHRP8ty0%2F36%2BgBKq7ihdzNDDlA3U4NomvBJ4nwyuhoClhCqewz4hbqRaGq9SAbnQm%2FBBbS8kgKlYKhR%2BANEzulo1LCMKev9MEGOqUByBlFddrHfQNhufBSbPW2wuxlU%2FzQSGZy16KnyMqiRNr1xwTQEYWNEjk8Egq3vHHKwXrC2R%2BVNxI0FkDzmjAAeWiaFp5CNxSrp5KNuv2wp1hnLX%2Bs5Zb3FHMd1lvaxvrfj1eFb1BGx1qsh8wlnWTco%2Bde2w6a3nw5uTn80trnbKhYBY1HsSZmM%2BqSP%2BZ%2BtVtu3sKNn%2BLAT6VtWy6IBlnbJ15Qo3Sr&X-Amz-Signature=23d7c4d90da8d2d606e82625e76cbd049fad0456f30b1e939bfff1067c4f94e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RPTJCV3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T034413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIH1ILOSYOzPxMztIW3s5jPws33nw22M7HLhDu3uOrxWZAiEAjSDVmHw1c1hNUbb7RhumjmCWhWGgEjGoaNa3kYYDju8qiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbGc5h2AteX2QphGyrcA8GJNe7uHHIEwcwDAvj%2FLlk5XNJXRznq4P6CY5mwghMlJcu1Iej5w7JKKb84sPrYN1dojOkyKZj7BZBqg4ogL7BzFcGbmMZGjRvqq%2FwBPqKULwmCtRzltLLiUWQOKf9j%2FqzgoQipfKH4vwWMx693HqvaoKBXqZubTzbPJWpRIHK1M1xOJsdgaoWTy85zTZ%2B9PspV%2FjvcbCb%2BB%2F63%2B9QQcWurla%2Ff1RvN5aNgGaZxl1vHo4TxPbAqpdmLU12aBBUNZpVKCc9sjIWf%2BEgD6utgRaFgyRxCLrH0UvwVxKTM%2F3NVrnSh4pMhzqJYM9fVLrg9ZcZoo6qqT4xcY33o1WvpopHHmCrkiiB7CXvrmMgv40RO40DZ5ZeCypeOPqMJlht3ar2zalv651ymRzcGt6vscvsQrBqw%2B5ocu8ToUEzv9C2h6bRSrPU%2B1GepEdipcSFAzrLNacvFlRr1Jpp0a7qIcjavgM3buTbdDamZF%2FgFTy4kAgyYscIEoLR5RXVFCL9HrwhlvEf7iEgiJHO3hrxRv1cVpH9AuxsvhiMHRP8ty0%2F36%2BgBKq7ihdzNDDlA3U4NomvBJ4nwyuhoClhCqewz4hbqRaGq9SAbnQm%2FBBbS8kgKlYKhR%2BANEzulo1LCMKev9MEGOqUByBlFddrHfQNhufBSbPW2wuxlU%2FzQSGZy16KnyMqiRNr1xwTQEYWNEjk8Egq3vHHKwXrC2R%2BVNxI0FkDzmjAAeWiaFp5CNxSrp5KNuv2wp1hnLX%2Bs5Zb3FHMd1lvaxvrfj1eFb1BGx1qsh8wlnWTco%2Bde2w6a3nw5uTn80trnbKhYBY1HsSZmM%2BqSP%2BZ%2BtVtu3sKNn%2BLAT6VtWy6IBlnbJ15Qo3Sr&X-Amz-Signature=6b63f28a1b23240a3b4de70d55395de0f6a4994252b98d1ab8d495d01058b4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
