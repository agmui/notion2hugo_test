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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47WMVKS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDPxMy8bwTz3MZPPckqK%2F73BLhd2mH0bVSGxA8fU1pF1AIhAPjNAb8huEtRnRCooNB%2Bl5JAF1EI5JAZ3AHBmLwF9w3oKv8DCCkQABoMNjM3NDIzMTgzODA1IgzVC%2FH1Gb1edtVl2b4q3AMDbmNmzpsTmqN3i3O0dkbwzU35870RHujckgjFstRTsOfp6%2FYpU43pVixENJ1Q%2B27nNwCexraxXP7MKu%2F1u1fuy05jd8uMzO0tWXEoZ3yfym7Jw%2F62JSmjXCj69vsejikrqnhayPDE4MK5Zz%2FtEcToMZNJQA3Xqr11ppWqX7xZJLDRbCNDkSCKJ3o2QJMAkgvq22d8gpos6xBP0GzKIV0Q1M7JSSHDFOmfflf5GUY0Uxm3SuPmyPD4X9yFPbJkGSafpO%2BaMvcGE5e4K%2BpKGCBZfrnVSlh%2BEpl9pNPZDuel4uIjqPTon%2BiogWC6B1gC65mfgC0eZQKMNQS8yCcSXmJRcLQEak3tT4JOSiI4mnmKcnC1EwIIxbQvclfGVxOMmJSM4GJX6Dl5RAMD5wInkpnM%2BzdAIf0iuyPQZxjTZS6yZDTXcoBYjAnop8uz%2FDjn42HuI9zLkwdnLOCUfp6zhFAYdSqZaTcZCpiMnI19T9AXR%2Betf6DBNEoRJs2D7N7ncbGUx5e%2BpoLmdKzN8ZlTFo5d7cSOks69aAstZiELxGnwWdxzd7GAdLgqNy1PeN1vFCiwN%2B2WUH1dQry062BMpjNI2Zv810JubrZ5DpELbpdIk0gLNLIVt1katSc0PDCYsunCBjqkAUxfNl%2Fdk0rhcLcStpsa6ujiYvf9lUflHQBiVTDwwUgMyCRuqYrgUhUbiCHCiULH2owAwn3RIUWJ7f%2FJ2wDmlDcwMjVolkQ1Ej60AIox9i5kxKu5zhIn1nXW%2Fiw1PB6hGi%2Bfb3VVVYVZm4mwrfA%2FOtsTnla0QmJ7IVE3zjrajSKnhHs5pu%2FtS4cbbtH%2BXAXZxhSsH3iw%2BV7Oysmd%2BP6agN0mMd6B&X-Amz-Signature=f78cfd8436a33b49d4580260b5773cb168ffe9430c7bb51f7e4f060be0aa0470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47WMVKS%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDPxMy8bwTz3MZPPckqK%2F73BLhd2mH0bVSGxA8fU1pF1AIhAPjNAb8huEtRnRCooNB%2Bl5JAF1EI5JAZ3AHBmLwF9w3oKv8DCCkQABoMNjM3NDIzMTgzODA1IgzVC%2FH1Gb1edtVl2b4q3AMDbmNmzpsTmqN3i3O0dkbwzU35870RHujckgjFstRTsOfp6%2FYpU43pVixENJ1Q%2B27nNwCexraxXP7MKu%2F1u1fuy05jd8uMzO0tWXEoZ3yfym7Jw%2F62JSmjXCj69vsejikrqnhayPDE4MK5Zz%2FtEcToMZNJQA3Xqr11ppWqX7xZJLDRbCNDkSCKJ3o2QJMAkgvq22d8gpos6xBP0GzKIV0Q1M7JSSHDFOmfflf5GUY0Uxm3SuPmyPD4X9yFPbJkGSafpO%2BaMvcGE5e4K%2BpKGCBZfrnVSlh%2BEpl9pNPZDuel4uIjqPTon%2BiogWC6B1gC65mfgC0eZQKMNQS8yCcSXmJRcLQEak3tT4JOSiI4mnmKcnC1EwIIxbQvclfGVxOMmJSM4GJX6Dl5RAMD5wInkpnM%2BzdAIf0iuyPQZxjTZS6yZDTXcoBYjAnop8uz%2FDjn42HuI9zLkwdnLOCUfp6zhFAYdSqZaTcZCpiMnI19T9AXR%2Betf6DBNEoRJs2D7N7ncbGUx5e%2BpoLmdKzN8ZlTFo5d7cSOks69aAstZiELxGnwWdxzd7GAdLgqNy1PeN1vFCiwN%2B2WUH1dQry062BMpjNI2Zv810JubrZ5DpELbpdIk0gLNLIVt1katSc0PDCYsunCBjqkAUxfNl%2Fdk0rhcLcStpsa6ujiYvf9lUflHQBiVTDwwUgMyCRuqYrgUhUbiCHCiULH2owAwn3RIUWJ7f%2FJ2wDmlDcwMjVolkQ1Ej60AIox9i5kxKu5zhIn1nXW%2Fiw1PB6hGi%2Bfb3VVVYVZm4mwrfA%2FOtsTnla0QmJ7IVE3zjrajSKnhHs5pu%2FtS4cbbtH%2BXAXZxhSsH3iw%2BV7Oysmd%2BP6agN0mMd6B&X-Amz-Signature=2f4e5c8196b925592bdf61146baf876697d3b1759e1cb8884db9da6fa5593aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
