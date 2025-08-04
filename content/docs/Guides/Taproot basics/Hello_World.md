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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTL7VG6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDP4RAL3BD15I%2BiL3vTGAHujJooV74kEJS%2BUNQOq0yCbAIgKz2jpvmyo5%2FFYBwlwnchehFgvQzArGyD7msDZ8NUGgwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDG51kulDloiiIuvX0SrcAw28R%2B%2BwoOlF9%2FZcvQgJ37s%2BhQOGZqj%2BAqObP9am8UgLgm%2FYeHWISFaddwihANiy%2FwNB%2F4FVoa5QBgyXH7rkZn0MVVCWKxpLUJDCWrdQlvJw1b0NvzHW%2Bsm2vPqB8Z3fuJS%2Bi0Ps9rBqjZwdkxX41o0yr%2BbYBKPreF%2BBRl%2BSCkLoCVh0YaIckQf0Wpitt%2BKJMlWKzMS9SeVyQEfZfpGEZE2lOGkO1vX10x%2BuKsEneiuTkvX7JM0%2FsM0JPr1625Z6m5v%2F4HgI26VzGvHjoVq5d%2FYDpoTxbEAYYl%2FO%2BhmSfuFuwsPKoxVjQqaxtB7ogTYdHZWHBL1kqusfJnn1wWCrE4upRE87WITpBJT5uRbhhzu1c00k2K8WIsqvfVM%2BmChRHeq4aUp1mKdU2iJ06RYGPZ5i4dClaYGUjmDlaOeOyFTW1vsHyg29RcM7SYv%2F2AGeQj8dGTOflE0gSZa7Lv7ei81fJoUAk8fA4knz262%2Fgaz%2Ft%2FTap6cfdu%2BLAYqyMcs0Au2EnMKsGuSbyHf0deplTCSBSaVLinnP32S3nGaVztzHGDeVDAyZIJJgJbqidWVDJxYqTN2QRcwn8RAKnh%2FnrU6vJlPA2p%2B05GHJQv0oFDWqG%2BJh8TozxVTC6akqMLCNwcQGOqUB3u6tFr1uBmCrTocfSO8a2kBNFj28BAeVreEp6YpZMJKHwaWp97uOV5L4KZMycaKTmX5tJ2R4aCF5JwJ9SZKF7OL2Cn37X%2BIphXfrg0WFvYOOCBlycks904uHqXS2BdDMCCQm%2B%2BEh2FKwVP2AI%2FfSufQ6yzKEhbBqG3IhtYF56Wm5CaTApswbGnSEopNw%2Fi4TchkWeUq364eQ%2FK5t1vflpX9Dphzh&X-Amz-Signature=03e3cdb6517b2d39681a976d289eff49a4dcc7114ca2a9929e6716b49a247454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTL7VG6%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDP4RAL3BD15I%2BiL3vTGAHujJooV74kEJS%2BUNQOq0yCbAIgKz2jpvmyo5%2FFYBwlwnchehFgvQzArGyD7msDZ8NUGgwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDG51kulDloiiIuvX0SrcAw28R%2B%2BwoOlF9%2FZcvQgJ37s%2BhQOGZqj%2BAqObP9am8UgLgm%2FYeHWISFaddwihANiy%2FwNB%2F4FVoa5QBgyXH7rkZn0MVVCWKxpLUJDCWrdQlvJw1b0NvzHW%2Bsm2vPqB8Z3fuJS%2Bi0Ps9rBqjZwdkxX41o0yr%2BbYBKPreF%2BBRl%2BSCkLoCVh0YaIckQf0Wpitt%2BKJMlWKzMS9SeVyQEfZfpGEZE2lOGkO1vX10x%2BuKsEneiuTkvX7JM0%2FsM0JPr1625Z6m5v%2F4HgI26VzGvHjoVq5d%2FYDpoTxbEAYYl%2FO%2BhmSfuFuwsPKoxVjQqaxtB7ogTYdHZWHBL1kqusfJnn1wWCrE4upRE87WITpBJT5uRbhhzu1c00k2K8WIsqvfVM%2BmChRHeq4aUp1mKdU2iJ06RYGPZ5i4dClaYGUjmDlaOeOyFTW1vsHyg29RcM7SYv%2F2AGeQj8dGTOflE0gSZa7Lv7ei81fJoUAk8fA4knz262%2Fgaz%2Ft%2FTap6cfdu%2BLAYqyMcs0Au2EnMKsGuSbyHf0deplTCSBSaVLinnP32S3nGaVztzHGDeVDAyZIJJgJbqidWVDJxYqTN2QRcwn8RAKnh%2FnrU6vJlPA2p%2B05GHJQv0oFDWqG%2BJh8TozxVTC6akqMLCNwcQGOqUB3u6tFr1uBmCrTocfSO8a2kBNFj28BAeVreEp6YpZMJKHwaWp97uOV5L4KZMycaKTmX5tJ2R4aCF5JwJ9SZKF7OL2Cn37X%2BIphXfrg0WFvYOOCBlycks904uHqXS2BdDMCCQm%2B%2BEh2FKwVP2AI%2FfSufQ6yzKEhbBqG3IhtYF56Wm5CaTApswbGnSEopNw%2Fi4TchkWeUq364eQ%2FK5t1vflpX9Dphzh&X-Amz-Signature=8ee211f912d3a9fec98d3588cd7d4736bc771f10a6ad2bdcef0aba495ff0838f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
