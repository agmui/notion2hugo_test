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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WN4XENQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCjXG9ne2RnZih99dQtsaSCLGmMdCzYHfzrH8t4tLPoigIgVe%2BIX5eW0KvkV5aYlGYASbIDcU2b5OONbPEdj1EuuM4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDKZhOEZ0k62Xukb6oyrcAwU8WdGR0rOdCZaRtwE%2Bvn3YDvQ2qX9uoMinSg0zl33GMW46xb1SU3%2BcTSQ6drJFD7T1naRAUSCibmlsU724CgD965oD3STdf0xbx%2Fm9%2Fb5KCkWfLMR3%2FsqotownFrYyFAyU%2FqLoLZvxu0a55PhfIWIRr6pxVMJ1NC2YXaHY0HVX1%2BSFBlgHooSeIt7xKtoEkP4NF%2F1Dk1L9nMNQ3R%2FkmJ1HUgj%2FuXqXQZGji7GTauiqJShPT530lOel62zYEC6tqdUW4HN95oMRGd%2BamjsVjcEBLrG2hUisrav2Vr1m7cpHsxE0PZTAVikR9d6io%2F7BEbD0RhwOEqVdOJa3LSskFW%2B4aM%2BEKCN5pPqAUpkGtYjNfon8WIYYuFcZ6dgnMmbhtnjdGXpOwHL9Y%2B6AaGTmkqLet3dous%2F4Fr3HgNEeRogSs5FQOQLh%2BMo%2BPvQMChUFYauN5E9mjCN5RyRMfwZNfRTcYQXjrZbfKn5dIjbMYHJwhl%2BfLVSE4JIOvxp5bIZGnOBv7bs1BXu80lcs6XjcPpb%2BdFpJxlDH8eTwWNeW1M7R4KHS8udbXbOd%2FBjk7ZhuPABiEM6IvOsrRrd25gqZECS5klgmoXITzx2Cyk1Kh90OzOcZ96ntC%2Flsc2UpMP74hL0GOqUBHK3idYt84KwVOahoGE%2BsvZ7mGZFCOXFEPDgvAJ0%2FFKQA8HD2NT2s7EXcS6vO1yQgeyTeHEXFITgUN%2BH%2F9PRiEASYHNaz4puKX1Ybsfb88PO5B%2B40FwIaAVvOXrZLgby7FDKsONnpCn7Kml%2F9DOamHw5Ab%2FUvkXH4lSeH%2BRb5370z%2FZpjygVH31t1E6xNBvqN3T0qwh6unEQxszGOsMlFqAm6bSnX&X-Amz-Signature=b65683b7d4dec714107ecc16341c86fe305a2210df91183c9bc850c943bcf984&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WN4XENQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCjXG9ne2RnZih99dQtsaSCLGmMdCzYHfzrH8t4tLPoigIgVe%2BIX5eW0KvkV5aYlGYASbIDcU2b5OONbPEdj1EuuM4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDKZhOEZ0k62Xukb6oyrcAwU8WdGR0rOdCZaRtwE%2Bvn3YDvQ2qX9uoMinSg0zl33GMW46xb1SU3%2BcTSQ6drJFD7T1naRAUSCibmlsU724CgD965oD3STdf0xbx%2Fm9%2Fb5KCkWfLMR3%2FsqotownFrYyFAyU%2FqLoLZvxu0a55PhfIWIRr6pxVMJ1NC2YXaHY0HVX1%2BSFBlgHooSeIt7xKtoEkP4NF%2F1Dk1L9nMNQ3R%2FkmJ1HUgj%2FuXqXQZGji7GTauiqJShPT530lOel62zYEC6tqdUW4HN95oMRGd%2BamjsVjcEBLrG2hUisrav2Vr1m7cpHsxE0PZTAVikR9d6io%2F7BEbD0RhwOEqVdOJa3LSskFW%2B4aM%2BEKCN5pPqAUpkGtYjNfon8WIYYuFcZ6dgnMmbhtnjdGXpOwHL9Y%2B6AaGTmkqLet3dous%2F4Fr3HgNEeRogSs5FQOQLh%2BMo%2BPvQMChUFYauN5E9mjCN5RyRMfwZNfRTcYQXjrZbfKn5dIjbMYHJwhl%2BfLVSE4JIOvxp5bIZGnOBv7bs1BXu80lcs6XjcPpb%2BdFpJxlDH8eTwWNeW1M7R4KHS8udbXbOd%2FBjk7ZhuPABiEM6IvOsrRrd25gqZECS5klgmoXITzx2Cyk1Kh90OzOcZ96ntC%2Flsc2UpMP74hL0GOqUBHK3idYt84KwVOahoGE%2BsvZ7mGZFCOXFEPDgvAJ0%2FFKQA8HD2NT2s7EXcS6vO1yQgeyTeHEXFITgUN%2BH%2F9PRiEASYHNaz4puKX1Ybsfb88PO5B%2B40FwIaAVvOXrZLgby7FDKsONnpCn7Kml%2F9DOamHw5Ab%2FUvkXH4lSeH%2BRb5370z%2FZpjygVH31t1E6xNBvqN3T0qwh6unEQxszGOsMlFqAm6bSnX&X-Amz-Signature=3806eb604ae3708214a6caf90c8e3cadf497aa4ceb7b32251cb11bf53a218ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
