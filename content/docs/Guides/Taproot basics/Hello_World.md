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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYP6V4RE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8QmjFUDHs7m40H7p4%2BbBTj4Itg6Sk01QyTB7fTW9RvAiAESK9MNKEljKiqg5d5xhrhn91qS5TX195L2hW7XahRNyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDoajk85CspUnTW0WKtwDiuR9ECOTI3cUgZJ4ik6SVGzoaqbsO1%2BXw86GBAzm%2BOjS1kYY78fVbR3U7oaWTTWOyZxcdaoNYsUY1UNu6CMfruKoNkUE3Kys5lYd292Xxg1QzMc7ZKkDXxH1v3QrlAmu6lmWjblSqfFCT17MEbavdPLookElFHECk9ObPs9HGyu%2BFX6hHiusT6jPf6%2BRnBsEwXjXc0yEKS8VB6RgxPQwrTcvwWinj7BfPvXN7zwCm%2B%2B%2BAPPVsSryqF4pVn7Jomgo2xN78hRY%2FdoSXevkyE4U8xqT2oiH7XLMf6bylwNAVeNU15PTYeXdK0159VfDL6JTylNq%2Bb7PoQvJoZHedx30s2TGIzaksIeplMuy11BoigxeN4Gm5csZqxLjTI6lnltKZOevqEvUs6liGJwd0WIGhY8Nclx1uBSnUuHCZLdDoFIMw%2BhLRdeEqaU4r%2FH3Ds1WhR%2BhqVUoluDpA7VneQ33MYh6dMUhOgBRVdKwkMq3hwkaKDQbxz1P1XY%2BkbjLQ2mh0BF3DsP48QBrLdBe6dbso3Qg5rVGkHVCc2OK4TTB17PtSp2HfaLYv%2FdqQ9D3Ky3d41vKIuqsX6W1sUifYd1kenMVaygUqVsqSQFybaEFlrNuSCPehx4kcwIq6bEwq923vQY6pgGxiS12esgNHTIS4CB0K9MS6gvwUTRF2lzfI%2BVK%2FChkDxtahH5G%2BbkWu%2BAwDCHX7OfVxmkCpEo6J8DumsohH%2F7%2Fl4PCCy%2FKlJId3xelASfvQfqDbZ5XE4qeQgt8pb2gwI5sIJ5YcoVnHLQFAyiadItbEHQYhbH%2FAfOdGskezGvaNzBELaGKXrsXwOzfWVEA1bgA3HasZgV3ODcjKiidK71SkxlQgAjT&X-Amz-Signature=7dc27e43d3329d9d779237e91f49f83353356afbd32097ed5af018821f764f81&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYP6V4RE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8QmjFUDHs7m40H7p4%2BbBTj4Itg6Sk01QyTB7fTW9RvAiAESK9MNKEljKiqg5d5xhrhn91qS5TX195L2hW7XahRNyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMDoajk85CspUnTW0WKtwDiuR9ECOTI3cUgZJ4ik6SVGzoaqbsO1%2BXw86GBAzm%2BOjS1kYY78fVbR3U7oaWTTWOyZxcdaoNYsUY1UNu6CMfruKoNkUE3Kys5lYd292Xxg1QzMc7ZKkDXxH1v3QrlAmu6lmWjblSqfFCT17MEbavdPLookElFHECk9ObPs9HGyu%2BFX6hHiusT6jPf6%2BRnBsEwXjXc0yEKS8VB6RgxPQwrTcvwWinj7BfPvXN7zwCm%2B%2B%2BAPPVsSryqF4pVn7Jomgo2xN78hRY%2FdoSXevkyE4U8xqT2oiH7XLMf6bylwNAVeNU15PTYeXdK0159VfDL6JTylNq%2Bb7PoQvJoZHedx30s2TGIzaksIeplMuy11BoigxeN4Gm5csZqxLjTI6lnltKZOevqEvUs6liGJwd0WIGhY8Nclx1uBSnUuHCZLdDoFIMw%2BhLRdeEqaU4r%2FH3Ds1WhR%2BhqVUoluDpA7VneQ33MYh6dMUhOgBRVdKwkMq3hwkaKDQbxz1P1XY%2BkbjLQ2mh0BF3DsP48QBrLdBe6dbso3Qg5rVGkHVCc2OK4TTB17PtSp2HfaLYv%2FdqQ9D3Ky3d41vKIuqsX6W1sUifYd1kenMVaygUqVsqSQFybaEFlrNuSCPehx4kcwIq6bEwq923vQY6pgGxiS12esgNHTIS4CB0K9MS6gvwUTRF2lzfI%2BVK%2FChkDxtahH5G%2BbkWu%2BAwDCHX7OfVxmkCpEo6J8DumsohH%2F7%2Fl4PCCy%2FKlJId3xelASfvQfqDbZ5XE4qeQgt8pb2gwI5sIJ5YcoVnHLQFAyiadItbEHQYhbH%2FAfOdGskezGvaNzBELaGKXrsXwOzfWVEA1bgA3HasZgV3ODcjKiidK71SkxlQgAjT&X-Amz-Signature=4cee97feff25cbfa6a52e2e52af3cbb69a048b7c277cc5859a1b700be343f365&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
