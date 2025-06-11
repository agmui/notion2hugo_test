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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPWRMIL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAXChNrh%2BUuqgZ1jR4ht4wpyB99%2BdRGgu3HcKAzZVjyFAiB2emdAsXhRbwakQXOL61mlLNBCE6kFM6xYXgc0g%2Bf08SqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCl%2Fe3CrNYpHdlVGNKtwDheDtX1%2FM3ve38DO60ZuaHJWlQhK7ZlpQDSRUclHrWyCYl3CX3z0mNr2v7UIntVrAjXhAm9EgOUZUROz3GBbJK5f8xtxoiNe39T24OSVMzNcE%2Fq6hyx3lzlKp%2FxuJYcKxRGoPaQJYx0aUuttJ7WlXqocGwT1KOih4u4T29UIicCw%2Fj46ArGBDQB%2BG8nDvOCBiHtsiobu81r3z3sWoewzIq8I%2FsnoBRFyXgJN643twX6DU5ghtqOKiWXD%2F3QcSk5NUj7%2FrtpEYL7ceA%2BA%2BrJZLsm6fF09JJB2dZYYu7xyramd9CqciWmsyTCs3UsZKhJEBtd3u6pk6XlKPH6kuzI%2BkxRMsh%2Fkw%2BJWszeUYaV8P7ZL%2BT6ENwa3fQ85AkBD1XOodZHrRvNHguM3CfPiANZOZlbcogMxc6E8Qwf4z12ggraWDqsDBECauBRq1%2BowGJWI58TOf%2BYMjCPDyEaFN69FtJUq0RPrrKgWgHAqYz30UQDTqur8oDkOs3bT66zsHcc7xkrzJKqr8NU94Ch0jdkvlqqxzIWdrwQk9IsESL8k%2FH35IE2dDhE0uMrg%2FQ2b7SzvgPLxAU4Q%2FsREmpMGYlelF9Y3aCvR6xMvvSCMF%2BispO8MRuWuLd7IzFwx7rpYw4OemwgY6pgGDrggobckfJQVSuXE3RWOohPl2fMb8PWRFMSA3zEMy6hB8O3rlQQXCVVQm5X24JxkezW74zt2p38TBgfhMFDqYD2ypCgMOQ7O2LYi%2BGo1Rq3326wjgO47rxGPtzbRIEfGTeTUvUrfFnvEBLhpz6zKLjIrE0vwGk3toHYuvyt8GTF0zsQm2o6MBh2%2BbNTIaVffJGdzitXl%2BIYXMuW5udZYFyGdllLLn&X-Amz-Signature=ab22e0aac4f3cf1542e4edac069f429f48f2bcd129b2e48fdc53bcdf36c8fad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPWRMIL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAXChNrh%2BUuqgZ1jR4ht4wpyB99%2BdRGgu3HcKAzZVjyFAiB2emdAsXhRbwakQXOL61mlLNBCE6kFM6xYXgc0g%2Bf08SqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCl%2Fe3CrNYpHdlVGNKtwDheDtX1%2FM3ve38DO60ZuaHJWlQhK7ZlpQDSRUclHrWyCYl3CX3z0mNr2v7UIntVrAjXhAm9EgOUZUROz3GBbJK5f8xtxoiNe39T24OSVMzNcE%2Fq6hyx3lzlKp%2FxuJYcKxRGoPaQJYx0aUuttJ7WlXqocGwT1KOih4u4T29UIicCw%2Fj46ArGBDQB%2BG8nDvOCBiHtsiobu81r3z3sWoewzIq8I%2FsnoBRFyXgJN643twX6DU5ghtqOKiWXD%2F3QcSk5NUj7%2FrtpEYL7ceA%2BA%2BrJZLsm6fF09JJB2dZYYu7xyramd9CqciWmsyTCs3UsZKhJEBtd3u6pk6XlKPH6kuzI%2BkxRMsh%2Fkw%2BJWszeUYaV8P7ZL%2BT6ENwa3fQ85AkBD1XOodZHrRvNHguM3CfPiANZOZlbcogMxc6E8Qwf4z12ggraWDqsDBECauBRq1%2BowGJWI58TOf%2BYMjCPDyEaFN69FtJUq0RPrrKgWgHAqYz30UQDTqur8oDkOs3bT66zsHcc7xkrzJKqr8NU94Ch0jdkvlqqxzIWdrwQk9IsESL8k%2FH35IE2dDhE0uMrg%2FQ2b7SzvgPLxAU4Q%2FsREmpMGYlelF9Y3aCvR6xMvvSCMF%2BispO8MRuWuLd7IzFwx7rpYw4OemwgY6pgGDrggobckfJQVSuXE3RWOohPl2fMb8PWRFMSA3zEMy6hB8O3rlQQXCVVQm5X24JxkezW74zt2p38TBgfhMFDqYD2ypCgMOQ7O2LYi%2BGo1Rq3326wjgO47rxGPtzbRIEfGTeTUvUrfFnvEBLhpz6zKLjIrE0vwGk3toHYuvyt8GTF0zsQm2o6MBh2%2BbNTIaVffJGdzitXl%2BIYXMuW5udZYFyGdllLLn&X-Amz-Signature=a2b8d87eab4211c7d3e9ab27b8ba45e0d17348d899d775ff0269d1c072ba31bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
