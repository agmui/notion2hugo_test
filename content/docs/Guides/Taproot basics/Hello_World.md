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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AM2KKTC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2F%2F2U%2FjbMGmt8wxpEArL7YOmekwILUzXmigEOgO7ukswIhANgMZHZbCSbhTVzrLVzSC8T6F5cjyjevDwPXqGfrn22PKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJGKmnxkkjjbBzfWEq3AP5tQ3N9Y3XZyQz2%2BTKjfqF9X3uPSiDf%2FRU8g%2FHHz4rmHe1pq6XUyNet5iQwBzF2wieyYPyCxZNwlN5xvbi9294ktcwYtqtvENWur9jrDawRf7LlZY841Zk8CpSnjaxzuaRfY2nIDzCv%2FGSqfRvRGqqdqm8vyjEawWnMK0LIDw6coMu2h2wUIMaOxjdqzkYys7kJFL2j4Nua2rwIkgWrtdatx9QT4gjbTxtb1LYTzkCwkr5PeRN8EmGH2mQgvRhInl5FCbQKgMHx%2BdrhwMcnsk6Ad%2F2Kbi0Qunl0uSuQUGczm1ShSrsIyHS9kxCCFyQtmTFJj3m7udF4UfHPsHIE8ssGvQJVslgtQhcQOfwdHZYyvrdcnv9B4KI2KlioAa9oIPQuDBsnBcsf8tbZ4UlimzhVG9bLvSUk50ZUvxvELmYRTVNC3UatqOl7SpAgm2DB6bHBi0%2Bf0r0DCLqPZKuYvj2DW%2FIKE51HTH1Ws26dutNLRhjFekCQZJvLVMX28Ah1N2gwG%2BfFZFwv60ihp8Gga8tF9h%2Bnepxx97xrrbO2fNRaIS0NesEFYUqVLUwFVLQ0INyY5M4j%2FoW1AlsFMvNMPCfBvhrbVgwRMwlNLwPF9HnURCp9piwifYyMl2k7TCJyc3ABjqkASVsSd%2FJZ3v74Xrpyt%2B%2BSsAXG5pZq9NiCHKcrppW2Jb7hBp%2Bn9TdpOkpkk5VYCrXQxPKiQ8DtI2lbYnXf9w9c3LowhHtCxG2rk3em62ve08lrekFkQ%2FNAWgva9zYp4ZlyNT2xvaXxXaO9CtRbfZ5z4BZAEz31cIggT6ii5AmfwCloVfHrZI0HIWsYMaVuiVjP7U4P74wpBoA6S4ULBZyIhvFyXmm&X-Amz-Signature=ce37c2ee9277c0b6fc8cf03567275c292fccd0bf8e29f1e54d2009c116cf8ac7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AM2KKTC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD%2F%2F2U%2FjbMGmt8wxpEArL7YOmekwILUzXmigEOgO7ukswIhANgMZHZbCSbhTVzrLVzSC8T6F5cjyjevDwPXqGfrn22PKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJGKmnxkkjjbBzfWEq3AP5tQ3N9Y3XZyQz2%2BTKjfqF9X3uPSiDf%2FRU8g%2FHHz4rmHe1pq6XUyNet5iQwBzF2wieyYPyCxZNwlN5xvbi9294ktcwYtqtvENWur9jrDawRf7LlZY841Zk8CpSnjaxzuaRfY2nIDzCv%2FGSqfRvRGqqdqm8vyjEawWnMK0LIDw6coMu2h2wUIMaOxjdqzkYys7kJFL2j4Nua2rwIkgWrtdatx9QT4gjbTxtb1LYTzkCwkr5PeRN8EmGH2mQgvRhInl5FCbQKgMHx%2BdrhwMcnsk6Ad%2F2Kbi0Qunl0uSuQUGczm1ShSrsIyHS9kxCCFyQtmTFJj3m7udF4UfHPsHIE8ssGvQJVslgtQhcQOfwdHZYyvrdcnv9B4KI2KlioAa9oIPQuDBsnBcsf8tbZ4UlimzhVG9bLvSUk50ZUvxvELmYRTVNC3UatqOl7SpAgm2DB6bHBi0%2Bf0r0DCLqPZKuYvj2DW%2FIKE51HTH1Ws26dutNLRhjFekCQZJvLVMX28Ah1N2gwG%2BfFZFwv60ihp8Gga8tF9h%2Bnepxx97xrrbO2fNRaIS0NesEFYUqVLUwFVLQ0INyY5M4j%2FoW1AlsFMvNMPCfBvhrbVgwRMwlNLwPF9HnURCp9piwifYyMl2k7TCJyc3ABjqkASVsSd%2FJZ3v74Xrpyt%2B%2BSsAXG5pZq9NiCHKcrppW2Jb7hBp%2Bn9TdpOkpkk5VYCrXQxPKiQ8DtI2lbYnXf9w9c3LowhHtCxG2rk3em62ve08lrekFkQ%2FNAWgva9zYp4ZlyNT2xvaXxXaO9CtRbfZ5z4BZAEz31cIggT6ii5AmfwCloVfHrZI0HIWsYMaVuiVjP7U4P74wpBoA6S4ULBZyIhvFyXmm&X-Amz-Signature=879a05fa05cd9448aef316ef383f4ba39ea2b8882ab8c5f33ff15dde79227347&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
