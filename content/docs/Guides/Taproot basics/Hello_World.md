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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIA7WNN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC5iMQcmdcq1qZId9j3ofej%2B3S5FF8UgUoqrDFx2eeFWAIhAK4%2BTdd326MbVNrK8UjimtkU0R%2BsTzVJTgWERJBcwwf3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxssS5vUgxTCSF%2B4bEq3AOtscmMlqz8sREzC6DqRUGRylad%2ByvdzSu1a3rvXKs0J5P9XGH7Kj45YaHmBAxVBr3jvSuFjuIjU%2F0hDiqvNYXMoeADCONgw4jL1IrMO5lxw6kNlTXtTlqux%2FpU2TDtVpce%2FLQL89JXsR9%2FDxly8ng93%2FrFBaaqlvCZ4gUi9owol%2FE2Q1v0s737msdHFLuhTPMtkNVzqr0X8E6j9AULGp7p8yKoxW8hD7wknP%2BNqQOGBVLvsnMFXax9yrDbG3Xa%2FJ5cawM%2B5P5aKwQ4QYTsS8CPWXMXTJvmHMrfl%2FQ7sU6oWEbwF0Kns2fCoMAuGywXDTrP6GzCm3hf30zspxU341anoKbTztbBG3LTLX%2FU8EClTL30ioxZR1UpcF%2FDREdKpvPInynti5nDIY%2BMbX%2FQYCnFGFSzm%2BD7nYl9REic5UTSrObG5jV4eHv421%2BMmU78k45aAzxkIaN5xP%2BTjBRuuN%2BUZBst6pMgIsxwKlBFGASAHvMRh8wVXJzxmiVcHWRmXPYZYJn%2Fu6KHK0Sulw8hPo8QJk0dJXastr%2FWchkSpSfubv%2B%2BELbJLkBtoNXMnE2XYWQ7GzPbbg%2Fu01AJsoETrzHsRZWeXULKjgow8g%2BayrPJaxcQ4B%2Be1%2BkGZfDNPzCV%2BIvEBjqkATcp7W6xezY1c5oSRe14GBveFV66TfBoOoXIjW%2Ft3Z95PmN3tN3l4c1VsF%2FJkpDq6yEyp3og1oIg7osvzLgJRD1oUumOug9JICMzpZ4T0R%2BJ10c3nSDJFFZEAxqAdORk7X9RNlexppTMVaQDXGElasa0Det%2BwkpQV0oOp%2BE355%2BmNCil9tmj6l81llg20dexMzw%2F29dXiw1FVCv%2B8DXEpPSzNA5d&X-Amz-Signature=1093337b79e78a17db5cac5d79bcaa6f98f9430a1c53fc0ed19b14f4f1abfa69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OIA7WNN%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQC5iMQcmdcq1qZId9j3ofej%2B3S5FF8UgUoqrDFx2eeFWAIhAK4%2BTdd326MbVNrK8UjimtkU0R%2BsTzVJTgWERJBcwwf3Kv8DCD0QABoMNjM3NDIzMTgzODA1IgxssS5vUgxTCSF%2B4bEq3AOtscmMlqz8sREzC6DqRUGRylad%2ByvdzSu1a3rvXKs0J5P9XGH7Kj45YaHmBAxVBr3jvSuFjuIjU%2F0hDiqvNYXMoeADCONgw4jL1IrMO5lxw6kNlTXtTlqux%2FpU2TDtVpce%2FLQL89JXsR9%2FDxly8ng93%2FrFBaaqlvCZ4gUi9owol%2FE2Q1v0s737msdHFLuhTPMtkNVzqr0X8E6j9AULGp7p8yKoxW8hD7wknP%2BNqQOGBVLvsnMFXax9yrDbG3Xa%2FJ5cawM%2B5P5aKwQ4QYTsS8CPWXMXTJvmHMrfl%2FQ7sU6oWEbwF0Kns2fCoMAuGywXDTrP6GzCm3hf30zspxU341anoKbTztbBG3LTLX%2FU8EClTL30ioxZR1UpcF%2FDREdKpvPInynti5nDIY%2BMbX%2FQYCnFGFSzm%2BD7nYl9REic5UTSrObG5jV4eHv421%2BMmU78k45aAzxkIaN5xP%2BTjBRuuN%2BUZBst6pMgIsxwKlBFGASAHvMRh8wVXJzxmiVcHWRmXPYZYJn%2Fu6KHK0Sulw8hPo8QJk0dJXastr%2FWchkSpSfubv%2B%2BELbJLkBtoNXMnE2XYWQ7GzPbbg%2Fu01AJsoETrzHsRZWeXULKjgow8g%2BayrPJaxcQ4B%2Be1%2BkGZfDNPzCV%2BIvEBjqkATcp7W6xezY1c5oSRe14GBveFV66TfBoOoXIjW%2Ft3Z95PmN3tN3l4c1VsF%2FJkpDq6yEyp3og1oIg7osvzLgJRD1oUumOug9JICMzpZ4T0R%2BJ10c3nSDJFFZEAxqAdORk7X9RNlexppTMVaQDXGElasa0Det%2BwkpQV0oOp%2BE355%2BmNCil9tmj6l81llg20dexMzw%2F29dXiw1FVCv%2B8DXEpPSzNA5d&X-Amz-Signature=f6e8a0c9718ab867b637853e0e46653d71cc5f996e698cc12a14e96540b65ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
