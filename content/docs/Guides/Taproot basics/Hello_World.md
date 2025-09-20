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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVSAV53%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID9fEay9Pe2UBhLazbdgMvFKByhDHGrtofsg3FJWMKPeAiAv7n7PSB5kekwvNf1R9wznS38K47HnpyynKMGo5p%2BmCiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxpc69lNv%2F2L6SVsKtwDLUCyV5nWdrEdlqMgSpziwV7gtYw6fNsJUmxrtiPYn6J2VwQLn15abjqx5xzlENzRQpbF4rCcfLX553%2BmISVVW9leAGM2cWi0O1yAN%2BX620H%2Ftcl66Qe%2FobQeSs0SKg5Bdj9WxrEEDJu%2B0gRNEJdlIs%2BsIhjmccIDi2HVshHOna%2FukWvA58V5M4UNUsJgtffW4BhRWAi1QHIeFatpHudAvisxOzo4fivGng6xZL36kQf6nMsoPwfRte8k69w3aLmk%2B59KuenrsH2SJpLUzMw2BJZ%2B60dUdgYvJIJ6%2Fe0dk2ZwQooOmHz%2B7UgYG2JKULa2zkMt6Oe3exyB1WTYpuaSKGBL7IdL3TsIBJD8Mrs2N1DrNOTaX9GsBaYxnfMqrSZ88rAAXN%2BcqSIKiUPwMJp8dqrjQmQBkL6qkbxAQh1AFfr2QHOGlOhEkfkjkmAG8vYEBD6RPcAzsDu3dhyQhQgBG1jUJmMN7HfqnjGBxukZYLiqwRShwmFTh37w7nKPKhofMEUeCLsUQc8YkdeRCQWeWXUEHj3NaljCERPz1S0Z%2BL08oI5cv5nW04syI9hndAb68Yy5bLhvNN%2BHkbknS%2FJP5r2YQEZJ3LNvBH2Ja6UPtnxB%2Fg7BjENzxRwBmIwwkYC4xgY6pgFnMuSYXoo7KRb8Ly6kQot8y1fbn4uqexkEYdb7GogzO7vmT3xJ1steZndr8r23wLlgSTwCkNTF27eCaG2okTxPY0ZXPyzCPLOZKXRbw6BFDkwtQs%2FneQgDDMpOkGQVsgeTJGcX%2B6U91AecxsmumJdTBrHIL%2FB7K9nzSykLu5VOrAJM62lSlJQRZpAb27oVa%2BzCQE2LMoW6dmmN7ZC25PGbMELF%2FH6P&X-Amz-Signature=efb72900552be1363b0c03411c49561add14cd126b661ff46d572ba255362215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVSAV53%2F20250920%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250920T012058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCID9fEay9Pe2UBhLazbdgMvFKByhDHGrtofsg3FJWMKPeAiAv7n7PSB5kekwvNf1R9wznS38K47HnpyynKMGo5p%2BmCiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBxpc69lNv%2F2L6SVsKtwDLUCyV5nWdrEdlqMgSpziwV7gtYw6fNsJUmxrtiPYn6J2VwQLn15abjqx5xzlENzRQpbF4rCcfLX553%2BmISVVW9leAGM2cWi0O1yAN%2BX620H%2Ftcl66Qe%2FobQeSs0SKg5Bdj9WxrEEDJu%2B0gRNEJdlIs%2BsIhjmccIDi2HVshHOna%2FukWvA58V5M4UNUsJgtffW4BhRWAi1QHIeFatpHudAvisxOzo4fivGng6xZL36kQf6nMsoPwfRte8k69w3aLmk%2B59KuenrsH2SJpLUzMw2BJZ%2B60dUdgYvJIJ6%2Fe0dk2ZwQooOmHz%2B7UgYG2JKULa2zkMt6Oe3exyB1WTYpuaSKGBL7IdL3TsIBJD8Mrs2N1DrNOTaX9GsBaYxnfMqrSZ88rAAXN%2BcqSIKiUPwMJp8dqrjQmQBkL6qkbxAQh1AFfr2QHOGlOhEkfkjkmAG8vYEBD6RPcAzsDu3dhyQhQgBG1jUJmMN7HfqnjGBxukZYLiqwRShwmFTh37w7nKPKhofMEUeCLsUQc8YkdeRCQWeWXUEHj3NaljCERPz1S0Z%2BL08oI5cv5nW04syI9hndAb68Yy5bLhvNN%2BHkbknS%2FJP5r2YQEZJ3LNvBH2Ja6UPtnxB%2Fg7BjENzxRwBmIwwkYC4xgY6pgFnMuSYXoo7KRb8Ly6kQot8y1fbn4uqexkEYdb7GogzO7vmT3xJ1steZndr8r23wLlgSTwCkNTF27eCaG2okTxPY0ZXPyzCPLOZKXRbw6BFDkwtQs%2FneQgDDMpOkGQVsgeTJGcX%2B6U91AecxsmumJdTBrHIL%2FB7K9nzSykLu5VOrAJM62lSlJQRZpAb27oVa%2BzCQE2LMoW6dmmN7ZC25PGbMELF%2FH6P&X-Amz-Signature=e921e448f462d6bbc25042e7628976a4adee1c64918487d3533f7ce3dc86984b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
