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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZGP7ID%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6kR2zDEwYQDXPKWhfRtDe8%2B1ijJxurWX0ciO6McFwQIhAIAimmkhA4JLdN38fT1aqUKXasNEVgNM1aARSdMTNAHgKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ9O0hXxLJsR%2BXyHgq3AMvyM4DjTT%2F8f7HIYq6gUp3UhERN7rL9fWU84fveAdKgIuKFh1uA4bRUZOv%2FrGCnBBKZU6M7Ayjsn%2BAvVYKkpnBKDWxCqhPBkn0r1R%2FY09%2F%2BU1xq9XwtInS6oSBZ5vz0E6zgLHTsRJLrkVjs8zexiIVyNY745O4DEKSpx5dYGFReMKOJP6wQwWTZ4CbpJNIHiJN7oKsIkVFpssgNYJQhh2xXidV8KQYuSOwJCrjaeC9gZowwgd1cFDu51%2FSp5Ed%2Bg0p%2Buey4eGawECa%2F58q5rZa8UmL8qQiWlB6ZkIHTzmiTBC6jrVjvVLE%2Fp%2F0L9Y3f3aMgiEHIL6smTrgKcjPIa01QZcp89pW4RF22AqPCsDnWeVD%2FDWl1PEMcRsmsu9OQzorr%2FK%2BAFjQtd%2F65GsijOiMxt1U8DkrNY2r558PkqwPV55xi3UDhzz%2Bk%2FWJciTf0yaD9hbMYp7v0gSiip7IxKrB%2BztHSSuYf3XiGfYz6lZGVZELmwjEZbvEN1ZriUp5bVtxuB6hGxv5%2F7OC1gyCu7sDNwnMgHDzhsOT74AwzJUvRmMNRlOE8ozTwbpGHRehb8vhCNXxqU6l3GkuQynGXkbO7ymXgVVqLVYxVa%2FGPuo8oES29GapgBj2xkw1wzC55YTDBjqkAaeLUmj3idt4ucjmlCO5F8%2BgXRTgD8YcgZZIbGnsDjOvMnDvAj0%2BQRNO9ruHqcM7wwX69khp9Uz9XawTX0r3v4xFkWRcaFTUdlmouM5egbL31lxJ7mBupcRhgW01oYlAuwYLdhEEzaxbXMffDbePN9IrU8DpzCyQxJWFhVYUT4faNlvY8Sw4DEeWniD2sSs7CmPmy9c6bHKNkAmIprHolp%2FE300j&X-Amz-Signature=31d5a722c4a21b038d41e363d7a5bb9e3cd0cad14caf233fb358bae4244198a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZGP7ID%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk6kR2zDEwYQDXPKWhfRtDe8%2B1ijJxurWX0ciO6McFwQIhAIAimmkhA4JLdN38fT1aqUKXasNEVgNM1aARSdMTNAHgKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ9O0hXxLJsR%2BXyHgq3AMvyM4DjTT%2F8f7HIYq6gUp3UhERN7rL9fWU84fveAdKgIuKFh1uA4bRUZOv%2FrGCnBBKZU6M7Ayjsn%2BAvVYKkpnBKDWxCqhPBkn0r1R%2FY09%2F%2BU1xq9XwtInS6oSBZ5vz0E6zgLHTsRJLrkVjs8zexiIVyNY745O4DEKSpx5dYGFReMKOJP6wQwWTZ4CbpJNIHiJN7oKsIkVFpssgNYJQhh2xXidV8KQYuSOwJCrjaeC9gZowwgd1cFDu51%2FSp5Ed%2Bg0p%2Buey4eGawECa%2F58q5rZa8UmL8qQiWlB6ZkIHTzmiTBC6jrVjvVLE%2Fp%2F0L9Y3f3aMgiEHIL6smTrgKcjPIa01QZcp89pW4RF22AqPCsDnWeVD%2FDWl1PEMcRsmsu9OQzorr%2FK%2BAFjQtd%2F65GsijOiMxt1U8DkrNY2r558PkqwPV55xi3UDhzz%2Bk%2FWJciTf0yaD9hbMYp7v0gSiip7IxKrB%2BztHSSuYf3XiGfYz6lZGVZELmwjEZbvEN1ZriUp5bVtxuB6hGxv5%2F7OC1gyCu7sDNwnMgHDzhsOT74AwzJUvRmMNRlOE8ozTwbpGHRehb8vhCNXxqU6l3GkuQynGXkbO7ymXgVVqLVYxVa%2FGPuo8oES29GapgBj2xkw1wzC55YTDBjqkAaeLUmj3idt4ucjmlCO5F8%2BgXRTgD8YcgZZIbGnsDjOvMnDvAj0%2BQRNO9ruHqcM7wwX69khp9Uz9XawTX0r3v4xFkWRcaFTUdlmouM5egbL31lxJ7mBupcRhgW01oYlAuwYLdhEEzaxbXMffDbePN9IrU8DpzCyQxJWFhVYUT4faNlvY8Sw4DEeWniD2sSs7CmPmy9c6bHKNkAmIprHolp%2FE300j&X-Amz-Signature=6fc052f605b7c12a3fb6481f8026d723a2e0e8bec2ab7ecd15327172b985a263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
