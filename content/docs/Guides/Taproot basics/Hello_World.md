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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632DHKCUP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDffIS8DeLWJwZKWeoSgNu%2BwbKt4w%2FpIsTzPrFUIsBSQgIhAKbO7LxOrcOdVDmFBPst4Gxd%2F7MUJuSrEYK2qLwM%2FI4YKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5wo2LMgD8JbpiJ8sq3AN2KS5Fq790MSYn1%2B0Apkp3i3n7OysdANmi5t1VqjX2K6MtBHGaFBZvLX%2BSn7O91CTSSx%2Fyi7qkaxNHu7Pjd15jvLUsPLcmtbNG%2FnCIYgDan838H4P7HA7FU95zzrIkW7s0thaKSr%2BpnM7nakT6qNpSvutIU0VVLzFlxPx1qqeIi2MeTGHI%2BwQ5DTwN3eq46TFR5l4Evo8RxbM31UTIRWMx2WtH3AQHSJIA4SvuncjNnmS4LQJejSNsDcCntyocJW5CQWC6ijaY8DaAZmdFu6pi9ucinWNdyzhCZBp%2BaV8qjNw5iSTSHzmi4Bq%2FKeg%2BtAYKtuYlwWociKWfGf3dsRxCUE7nuyBIhv9Km2udbbsiHbBvMj4FkVHqRIEweFlScH5thih16T06NGWdmiGrLEz6IiyAH7O9ibbVYg%2BZo%2BBaBXCGzjnNcdwGuYwb1efjC2Z%2BR0XaaZWHM%2B6DvuiXvZSfrkVttxglgrl7%2BWft6DdoWzgwDFM56wCr8PxNEvFt1BbMyZ%2BM6VD9FhVEEmcYYXoz7lhy9XLOB%2Fm5eSBRXmra23TEA2WmbB8eIaRsL8Yc7l2vd%2FW%2FQ5lUvccZI0BGP%2F4E21sNKi%2FbtuCgEI4tn6AqQKF0mXXTuy1%2FXxXuCTCPvNHEBjqkAToNP6%2FRLurEaz%2FS%2Fgc7vurWErfUzK%2FucUrfq9F%2BJRU28nx1cFIR9ZNFuEBsbN4d8rofCmtAXErKv22CBxbjvZ8sxzSSHhiBmzW8ocPIJYMFSiBDV2U%2FtZM3rA0m%2FMVdYW4fCwaCue6UwhGkY8bsy3GThkr%2BjsnpsyKW89kqLeRHGA70%2FaUL7noudms%2FXol8ataq1o4fPcsjoJ2n27vIeGQJx204&X-Amz-Signature=5c104cd9e309d0b4cb57d35b8a57a390e6571e437d8b8fccc79a375c2ea6f970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632DHKCUP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDffIS8DeLWJwZKWeoSgNu%2BwbKt4w%2FpIsTzPrFUIsBSQgIhAKbO7LxOrcOdVDmFBPst4Gxd%2F7MUJuSrEYK2qLwM%2FI4YKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5wo2LMgD8JbpiJ8sq3AN2KS5Fq790MSYn1%2B0Apkp3i3n7OysdANmi5t1VqjX2K6MtBHGaFBZvLX%2BSn7O91CTSSx%2Fyi7qkaxNHu7Pjd15jvLUsPLcmtbNG%2FnCIYgDan838H4P7HA7FU95zzrIkW7s0thaKSr%2BpnM7nakT6qNpSvutIU0VVLzFlxPx1qqeIi2MeTGHI%2BwQ5DTwN3eq46TFR5l4Evo8RxbM31UTIRWMx2WtH3AQHSJIA4SvuncjNnmS4LQJejSNsDcCntyocJW5CQWC6ijaY8DaAZmdFu6pi9ucinWNdyzhCZBp%2BaV8qjNw5iSTSHzmi4Bq%2FKeg%2BtAYKtuYlwWociKWfGf3dsRxCUE7nuyBIhv9Km2udbbsiHbBvMj4FkVHqRIEweFlScH5thih16T06NGWdmiGrLEz6IiyAH7O9ibbVYg%2BZo%2BBaBXCGzjnNcdwGuYwb1efjC2Z%2BR0XaaZWHM%2B6DvuiXvZSfrkVttxglgrl7%2BWft6DdoWzgwDFM56wCr8PxNEvFt1BbMyZ%2BM6VD9FhVEEmcYYXoz7lhy9XLOB%2Fm5eSBRXmra23TEA2WmbB8eIaRsL8Yc7l2vd%2FW%2FQ5lUvccZI0BGP%2F4E21sNKi%2FbtuCgEI4tn6AqQKF0mXXTuy1%2FXxXuCTCPvNHEBjqkAToNP6%2FRLurEaz%2FS%2Fgc7vurWErfUzK%2FucUrfq9F%2BJRU28nx1cFIR9ZNFuEBsbN4d8rofCmtAXErKv22CBxbjvZ8sxzSSHhiBmzW8ocPIJYMFSiBDV2U%2FtZM3rA0m%2FMVdYW4fCwaCue6UwhGkY8bsy3GThkr%2BjsnpsyKW89kqLeRHGA70%2FaUL7noudms%2FXol8ataq1o4fPcsjoJ2n27vIeGQJx204&X-Amz-Signature=9634f73248fbf4f4a62327659f17bbee55f39ed7ffe0f7e61552a5f8d3941bdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
