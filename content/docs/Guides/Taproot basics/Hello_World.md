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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DBRYGF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCipP1jCnA1fnqGvWTXwrV9F1MgwfrxsVhiK6oLhbsKZQIhAJqXBxx2JhiBy4Z64Ph2ENE8Nn6H%2BAQdQ5ByqC%2B3AnvyKv8DCE8QABoMNjM3NDIzMTgzODA1Igz6mX8k5Dvx4d5NWzYq3AMAGhHxucAVSADTMCHrJ%2BpDrcgrJa%2BcownTD3mBGV%2FKullRM7x07koNbAiNxlufY4SBSDQOdNTftp2S3Jd7Zlpelk2VGAcDvxJKkxgr0IAmcIiqRhWMJbqsbpHwP3BakAJ%2BW%2F%2FwUe%2FgqOEoJpNHsaJIYU%2B9EhPnzBU99KqZTtrSlE%2BE99MUgrGWdWko82RrW0Jhw0yX7lyRL4sX0EgOKYICidE0egXrOfy37MgneruV371zliWSOm5uBEUh49TjY8rbhZ%2FuSNO71Wc8%2BX01w9%2F7fG84SJS9FovsAZk%2Fwq%2BnA0fLa7q5g93xcO%2F9UGC%2BLTr8poZrJiIpyhKbn7XYLY07XtZfzEtnxLJFpeT392bXFMiQ5OwGdIKZRbmz5oikX1H70haK2yVKWtLqJWqhK6z%2BcyC2GFgaERtee6mxniFcMsIBgzBNzOjZVzK3rSr4r5wt2zu2TNkjdFgjfiFNvKH54IOShLb%2BCtyOpCWkAXlNNZ8HRKi6Cca0mUJ%2FPSp6EKJ8ctdGzWlNOAGleS5WAtZdD0P4vZdFzk25kUKDazgkK34mMRTDLKhuyg3%2Be7kX6g2pRKOdtR7GlurJ%2ByNfC0foFXEyx6uxAfI1dIxmHrXy6e5b4d17%2F3pT%2BADVjDDfpNvDBjqkAUha8nFL17BdV3S%2B7NZlO0K%2B0%2FYMTtZ%2FfknoG1wqTHTncZcaFyHnD%2F%2B2H2YpOKiMs%2BsbqwoYmAhRq8nB2s4M2dHPZvRj%2FHyjhEXod%2BmtAytPg0IYQ1KR3er0gqQ0VT0Ennh5P5GVeAoD1rQbFL1SLVIKGISZfIkDiRoS64nSNxORfgLicOHLk6CcvCmO%2BoVThXtsTvALESdEi5iN4Swd%2F6THyMQH&X-Amz-Signature=9412e3142bf72a38de1fdc699ddce9a0b2447550c073ba32e8935461889a9083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DBRYGF%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCipP1jCnA1fnqGvWTXwrV9F1MgwfrxsVhiK6oLhbsKZQIhAJqXBxx2JhiBy4Z64Ph2ENE8Nn6H%2BAQdQ5ByqC%2B3AnvyKv8DCE8QABoMNjM3NDIzMTgzODA1Igz6mX8k5Dvx4d5NWzYq3AMAGhHxucAVSADTMCHrJ%2BpDrcgrJa%2BcownTD3mBGV%2FKullRM7x07koNbAiNxlufY4SBSDQOdNTftp2S3Jd7Zlpelk2VGAcDvxJKkxgr0IAmcIiqRhWMJbqsbpHwP3BakAJ%2BW%2F%2FwUe%2FgqOEoJpNHsaJIYU%2B9EhPnzBU99KqZTtrSlE%2BE99MUgrGWdWko82RrW0Jhw0yX7lyRL4sX0EgOKYICidE0egXrOfy37MgneruV371zliWSOm5uBEUh49TjY8rbhZ%2FuSNO71Wc8%2BX01w9%2F7fG84SJS9FovsAZk%2Fwq%2BnA0fLa7q5g93xcO%2F9UGC%2BLTr8poZrJiIpyhKbn7XYLY07XtZfzEtnxLJFpeT392bXFMiQ5OwGdIKZRbmz5oikX1H70haK2yVKWtLqJWqhK6z%2BcyC2GFgaERtee6mxniFcMsIBgzBNzOjZVzK3rSr4r5wt2zu2TNkjdFgjfiFNvKH54IOShLb%2BCtyOpCWkAXlNNZ8HRKi6Cca0mUJ%2FPSp6EKJ8ctdGzWlNOAGleS5WAtZdD0P4vZdFzk25kUKDazgkK34mMRTDLKhuyg3%2Be7kX6g2pRKOdtR7GlurJ%2ByNfC0foFXEyx6uxAfI1dIxmHrXy6e5b4d17%2F3pT%2BADVjDDfpNvDBjqkAUha8nFL17BdV3S%2B7NZlO0K%2B0%2FYMTtZ%2FfknoG1wqTHTncZcaFyHnD%2F%2B2H2YpOKiMs%2BsbqwoYmAhRq8nB2s4M2dHPZvRj%2FHyjhEXod%2BmtAytPg0IYQ1KR3er0gqQ0VT0Ennh5P5GVeAoD1rQbFL1SLVIKGISZfIkDiRoS64nSNxORfgLicOHLk6CcvCmO%2BoVThXtsTvALESdEi5iN4Swd%2F6THyMQH&X-Amz-Signature=3894f001a2cc190f4983ef30d79bf8b1a722f20a05967580fbfe7d1c8f1d5f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
