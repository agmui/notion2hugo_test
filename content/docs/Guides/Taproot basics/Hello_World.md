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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLT3FUA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFpAC4lGYRY%2F4l7YZhMwPM%2FTu0RGWo6VBizAlCoIk%2FWyAiEA9x4x5V4arKBUErsWQ2wXecipzMYAqlJBaT3C5oB%2FAKkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAKhSybk%2BhDfZIELyrcAxh4EC%2F1B%2Bty108ac%2BrignDxzW%2Bg1%2FQFFB62xIUnDEw0uxE5NOY1ercG5uQF%2FxnA03590gGXKLcrKXMk8a3pcxn9NtfO2IpdDb%2F7rl0HW0mLOhsRkAH1CuFAyQYw41xnbefl0DhjARGooKu2CiTsiMrLmw717BK9Ew7adPVzKTvfG09DGFz9rnpRiLpJ2SFY6hvKfZpj4GVI9PIMAsZQj3ObpChqei23kWbv6iatrNLyhZTgCwEmOSOxG%2FrDcCrYm9EiAAfpmpJDHWyYEPYX9rmRgKE0nG2ALNxX3S2omdTQeIUmNf9RfUcN5zWBJmCGfhY3vjs1Aj6td8sLgzBpV0oF5jtg9iqW8PhhWaDFyXbxBF3spoQzo5TTo8bHU1ohq9Ht0hfklGaD%2Fg0bFwKN%2FwjL2b8UsOfVpT67lwjO2Nhx%2BgtBZ9JgXo2S%2B6IzPSGVSFL6mX4m2wdrMIN3p6N0oeatrQVTUI9WL4IXxTOs%2BLxsq95WA9WKZHju2lw3kN90gS1CtTe2TPawKEeZfUNR%2B%2FC7ErZC1xUmwJ7ZZSIA7uTgAJyvwKUqclv88TVGOOe8IVU0HOMBvd3WEJ%2B%2Fq%2BwcbucZZCtQ3P2iZ9hOuHxsdgVOiZfvLYRtfngXfc92MPSEhcEGOqUBIBHct%2FIa4sbfehF3XEwRMTt%2FDLbNI7a68kVOX4kFxaOxJSAGaQD%2FRmCzJCMMTcBJ0Tn6lMBs4YSVR9awB6hJM%2BPQqz1tATch3kw0ZEeU4s%2FU16QhWCsY4AnjaAuT338u9i7sFjzvWdWHLlo5RvvCu3i1KvR%2FRLMoW%2B2W8gdA4ddeZdeyOyshxBaNBqbOuE%2FfgYsJfPgG8UwmgTdCUD3FD39kdqau&X-Amz-Signature=e6992294bae3245da6e49619ba9207de415f6c28578ff80a67453c8da1bdf617&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLT3FUA%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIFpAC4lGYRY%2F4l7YZhMwPM%2FTu0RGWo6VBizAlCoIk%2FWyAiEA9x4x5V4arKBUErsWQ2wXecipzMYAqlJBaT3C5oB%2FAKkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAKhSybk%2BhDfZIELyrcAxh4EC%2F1B%2Bty108ac%2BrignDxzW%2Bg1%2FQFFB62xIUnDEw0uxE5NOY1ercG5uQF%2FxnA03590gGXKLcrKXMk8a3pcxn9NtfO2IpdDb%2F7rl0HW0mLOhsRkAH1CuFAyQYw41xnbefl0DhjARGooKu2CiTsiMrLmw717BK9Ew7adPVzKTvfG09DGFz9rnpRiLpJ2SFY6hvKfZpj4GVI9PIMAsZQj3ObpChqei23kWbv6iatrNLyhZTgCwEmOSOxG%2FrDcCrYm9EiAAfpmpJDHWyYEPYX9rmRgKE0nG2ALNxX3S2omdTQeIUmNf9RfUcN5zWBJmCGfhY3vjs1Aj6td8sLgzBpV0oF5jtg9iqW8PhhWaDFyXbxBF3spoQzo5TTo8bHU1ohq9Ht0hfklGaD%2Fg0bFwKN%2FwjL2b8UsOfVpT67lwjO2Nhx%2BgtBZ9JgXo2S%2B6IzPSGVSFL6mX4m2wdrMIN3p6N0oeatrQVTUI9WL4IXxTOs%2BLxsq95WA9WKZHju2lw3kN90gS1CtTe2TPawKEeZfUNR%2B%2FC7ErZC1xUmwJ7ZZSIA7uTgAJyvwKUqclv88TVGOOe8IVU0HOMBvd3WEJ%2B%2Fq%2BwcbucZZCtQ3P2iZ9hOuHxsdgVOiZfvLYRtfngXfc92MPSEhcEGOqUBIBHct%2FIa4sbfehF3XEwRMTt%2FDLbNI7a68kVOX4kFxaOxJSAGaQD%2FRmCzJCMMTcBJ0Tn6lMBs4YSVR9awB6hJM%2BPQqz1tATch3kw0ZEeU4s%2FU16QhWCsY4AnjaAuT338u9i7sFjzvWdWHLlo5RvvCu3i1KvR%2FRLMoW%2B2W8gdA4ddeZdeyOyshxBaNBqbOuE%2FfgYsJfPgG8UwmgTdCUD3FD39kdqau&X-Amz-Signature=f7d5f8d72e45cf07b1eed4f07e20e4d4d532427b24291bf0ef1248bac3cc40b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
