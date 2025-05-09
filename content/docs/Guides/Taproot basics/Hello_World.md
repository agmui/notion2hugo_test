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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITIMDTG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpVgcu%2BQDaOzuNscld7dwUXgv8x5HNxrD7KL1JOepuwIhAO%2BAqainWU1Cobt5AWnD3I%2Fj064uJhXQlNVjE39aKjD%2BKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSkMMe71ksI5I88Uq3ANHCl3%2Fc8FeQDCaKmByUUyKhxjQUI7Nx8%2FxO4ea%2FHLjzoXIvYfbt1bZYyZz8pZKnNCx4D%2FR2RlK4wYOLU0LuT5a95wDVX7lyU1wB%2FKB9JEcEQUe%2FX9KOXvPJLtB%2FUwNHijAMnOhTVhB9Kqk3XuEtWjvNyy0hmQZRwZ2N0urjJ9mZfynGEannAZOT8rNFJjQog4qMX%2FbObOFOsjj0DuH2XsJEEG4svr43cqxw5Ct29GoKoCxTfS2sGfyHcPkAGjxbfQBTe12%2BtP9a3G%2F2yeCHUOV7DaffmWJG30xmRZ8XjWuckRSx3rtmWIxMPZ3Btw59CEPt%2BP9D35mCk0ppC8hW3N1ISbsP2h6klhU8xn22LjEl5y4SKf8i0Aor0ioSwqzo0vg82cF%2BWffK5WkFT2l6S3A2ycspw7w%2BcvDk9JgNhioV8i%2B50pwDeysFl5i4pFCJHN6h16dAwikow9VbZXSl1BedkeYxWMS%2FBhdOexmgaEwoA3qx2KRiilj4HWOcQkIsxpvd0tphO5XCi4tBELRnaw5kkuw6p90Ti9oUp5STOCoZn8Al8E1G3gZG4IbaNRU4s8RIMuZc0sRJJyDT%2BQu0Yh8XUMi6L5KlIc0KscwoIKVMNRdjo10cs3h7w8zTzCw1ffABjqkAS6eCm9%2F9yUPGxQXKhe2KgxVCE25QwKui%2FDRzq6DJ3R61ZiUuMwtIjdI2PR6McjNGSZE2XaO0P0QZAQnyMLTq%2BziVIAAkOa88Eplw4SKwd3rXLN3mHEzi6Hht0UyiuhsC%2FSIJhQkrzJM2nhDp2x04ktc7DsZI0JN4jCKqV%2BDQHo3Sgu3MfVX3oT3rc%2B3xUP58jji1fWr06wPFcbhuATBVcwGdmuT&X-Amz-Signature=27f0663564ef1829f2b1b114ab7ed0f961e927c66517f392ec41eadc6c78a9b9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITIMDTG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHpVgcu%2BQDaOzuNscld7dwUXgv8x5HNxrD7KL1JOepuwIhAO%2BAqainWU1Cobt5AWnD3I%2Fj064uJhXQlNVjE39aKjD%2BKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCSkMMe71ksI5I88Uq3ANHCl3%2Fc8FeQDCaKmByUUyKhxjQUI7Nx8%2FxO4ea%2FHLjzoXIvYfbt1bZYyZz8pZKnNCx4D%2FR2RlK4wYOLU0LuT5a95wDVX7lyU1wB%2FKB9JEcEQUe%2FX9KOXvPJLtB%2FUwNHijAMnOhTVhB9Kqk3XuEtWjvNyy0hmQZRwZ2N0urjJ9mZfynGEannAZOT8rNFJjQog4qMX%2FbObOFOsjj0DuH2XsJEEG4svr43cqxw5Ct29GoKoCxTfS2sGfyHcPkAGjxbfQBTe12%2BtP9a3G%2F2yeCHUOV7DaffmWJG30xmRZ8XjWuckRSx3rtmWIxMPZ3Btw59CEPt%2BP9D35mCk0ppC8hW3N1ISbsP2h6klhU8xn22LjEl5y4SKf8i0Aor0ioSwqzo0vg82cF%2BWffK5WkFT2l6S3A2ycspw7w%2BcvDk9JgNhioV8i%2B50pwDeysFl5i4pFCJHN6h16dAwikow9VbZXSl1BedkeYxWMS%2FBhdOexmgaEwoA3qx2KRiilj4HWOcQkIsxpvd0tphO5XCi4tBELRnaw5kkuw6p90Ti9oUp5STOCoZn8Al8E1G3gZG4IbaNRU4s8RIMuZc0sRJJyDT%2BQu0Yh8XUMi6L5KlIc0KscwoIKVMNRdjo10cs3h7w8zTzCw1ffABjqkAS6eCm9%2F9yUPGxQXKhe2KgxVCE25QwKui%2FDRzq6DJ3R61ZiUuMwtIjdI2PR6McjNGSZE2XaO0P0QZAQnyMLTq%2BziVIAAkOa88Eplw4SKwd3rXLN3mHEzi6Hht0UyiuhsC%2FSIJhQkrzJM2nhDp2x04ktc7DsZI0JN4jCKqV%2BDQHo3Sgu3MfVX3oT3rc%2B3xUP58jji1fWr06wPFcbhuATBVcwGdmuT&X-Amz-Signature=711b7d2314936829f2d93e0cc80d886fa54b69191f8b9afcf976339ade96eb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
