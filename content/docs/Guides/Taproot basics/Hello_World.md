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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LW4HOZI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaYIXbktfPYF3KUJPRCXPHO895SqcsiYX7fmdzhcULigIgDTX%2FYNFsAiJUOQiwOcQddxslskH4VcotMLM0Cng5h30qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDC98LWzRRzB85AtSrcAxmJZhIsZSwf%2BmM0IB0lQ%2B1YqgGLSnIjgr5JMbxWKgBSeWlQZ%2BPIV5zESmMhqkEQUivKGDR612%2FO1iEUwuwEEkEj12gj9uKzebDvHRkI9MzjMRe7oAJzG%2BAX3yXwJtrqtF8YiCLHiE7PdUxQQkDea8V6e2YJBoQCagl9B4wozeAApFYK0jx8lkd1ho0SIT37MQ4KqBvcWBR6E9G6wPjN8L7E%2FwERxzJaLpqBBA%2FMDSTYIRPWmo2z8IgMXYNdVtsbddAPOPMEDD%2Bzd%2FDyAgcXgpta2Z1zBc9u7Q796hCiLDB5VQFsRWEeA2IPrgc2XkcDc3mOw8qWBHkZnVAEOylCL4T2K4Fcxjd0K9HDxIUtJDOKAyjZNaZ3RAU2KwFhP3vdNrVT7D8F1fuTacgZShwM2S3s8Ct4%2FxG57JB9kuDmuYDGSaCvdQ72HeGQC7QnKvn7qYzNqJ7ZArEJvESiNbbdZWOUksti4%2Fp%2FtqSqFMQK1VMVyWdP3t8w%2FKuvvV%2BAGvUoKymHEeYSosfLd8V4hKjvZHndvP72%2FQo0xcyHCyU351PJj8q7A19g3ipxtZqJ7LeTCK4k34SZeCKMGEomiy1spSB0cvV%2BQjwE2wkrMYzYZfKzGUBaGheeeieu9Q4LMKnQhr4GOqUBudujZqrW%2B0h300Iz0iCCwezPlneEi86tN%2Bka6bfgIWK5L6WBcgP7ZgObm0CAce9idJD8QbSnPX1oM2wBqXn8jjL%2BFJ9kzFu%2FxeCTyBBPtnyDFaHTIX0xSNceDUWduB2GEpxgnm52AgmNKafT4YE02uRmYJPJ4hTZr23cpqwGJNipEbR8VUvUDSlto2shbmUx%2FAbxBW3fg7m2eIOqqHGMOWNv31%2Bi&X-Amz-Signature=cda92e65901dc2656614ddacb5c17164ef83db31eb07d01bb4433eeca7703612&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LW4HOZI%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCaYIXbktfPYF3KUJPRCXPHO895SqcsiYX7fmdzhcULigIgDTX%2FYNFsAiJUOQiwOcQddxslskH4VcotMLM0Cng5h30qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDC98LWzRRzB85AtSrcAxmJZhIsZSwf%2BmM0IB0lQ%2B1YqgGLSnIjgr5JMbxWKgBSeWlQZ%2BPIV5zESmMhqkEQUivKGDR612%2FO1iEUwuwEEkEj12gj9uKzebDvHRkI9MzjMRe7oAJzG%2BAX3yXwJtrqtF8YiCLHiE7PdUxQQkDea8V6e2YJBoQCagl9B4wozeAApFYK0jx8lkd1ho0SIT37MQ4KqBvcWBR6E9G6wPjN8L7E%2FwERxzJaLpqBBA%2FMDSTYIRPWmo2z8IgMXYNdVtsbddAPOPMEDD%2Bzd%2FDyAgcXgpta2Z1zBc9u7Q796hCiLDB5VQFsRWEeA2IPrgc2XkcDc3mOw8qWBHkZnVAEOylCL4T2K4Fcxjd0K9HDxIUtJDOKAyjZNaZ3RAU2KwFhP3vdNrVT7D8F1fuTacgZShwM2S3s8Ct4%2FxG57JB9kuDmuYDGSaCvdQ72HeGQC7QnKvn7qYzNqJ7ZArEJvESiNbbdZWOUksti4%2Fp%2FtqSqFMQK1VMVyWdP3t8w%2FKuvvV%2BAGvUoKymHEeYSosfLd8V4hKjvZHndvP72%2FQo0xcyHCyU351PJj8q7A19g3ipxtZqJ7LeTCK4k34SZeCKMGEomiy1spSB0cvV%2BQjwE2wkrMYzYZfKzGUBaGheeeieu9Q4LMKnQhr4GOqUBudujZqrW%2B0h300Iz0iCCwezPlneEi86tN%2Bka6bfgIWK5L6WBcgP7ZgObm0CAce9idJD8QbSnPX1oM2wBqXn8jjL%2BFJ9kzFu%2FxeCTyBBPtnyDFaHTIX0xSNceDUWduB2GEpxgnm52AgmNKafT4YE02uRmYJPJ4hTZr23cpqwGJNipEbR8VUvUDSlto2shbmUx%2FAbxBW3fg7m2eIOqqHGMOWNv31%2Bi&X-Amz-Signature=952d4c8e921de3f376a41462157218406eefe90ce879ef02ac86b51ac49893c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
