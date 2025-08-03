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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWN464I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf7VXG5TqYPCwtw4ob3WV4yCM093LBThEOWyGeP5P%2BTAiEAuchmjEnCoLpZJ7fyNB6jCH6o7NYoLM7DlapSOmgwLX4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnsCMxeY1Ue57LStyrcA3SylyGjfruRWvtoo1qdt4D1aTZl6LEst0asY5LkaV6JOHM%2BRPkDAFPvhtK%2FObaz4v7bRx2PHR%2FBKtjxRlXFJ%2FdLkSAWFHk%2FxEAi8fEqWFA4jh2mtKdRFuU5uNAi9EbfGXJT6Uu513uep2jWnkR5DjgxFGws0PY14MzaAv4M3GtKvtVVvOjacutNeFK7OzzNde%2B5w2bnNcuJhpHsOYAoOxhrT2F%2B7V2s3Bvxby4doF49z2rfsfkygscCKwSFqwIg1NcZpZj45ht%2FW3BLlJ5nC2qT%2FbgLu5ltGKpJfO51mUwHunBYlxE1jLbrn9ACJzUyndTUb5QiY8obWnva496cNe9RAPyuT45yDlFLZ89FKqwcCjFcyv3LpazjRnSjpj8s3AFCi1f%2BOorpP%2F1eJGP8p1crW2jxdSqAjFs4SGhfuTlQBA2%2BCVMHAlF24ZO4KkXu0aLu64GH3tsKadu1X4KKKerBkXHqeFwOSb8VKrn4MArgfzw6zALREkwHjqIYF%2BKPoCbljsPb2v%2Bq0Tru21ohOjAQuzerryGwJCKKHi4ejWwG31rg%2Fgqw8HVoDEErZyLZQAY55l3FNADCv2M79uDejmWlvpDhLsKHgKrpekd4H9CSxAkhSuyDdq7aljsPMJa%2FvMQGOqUBGBKyZmepdVRxEGV5UVyBNgS1n%2Bib90RXk3ggQ6UuoOsLIkdRpiu3ArAUlgzDkVR1snBzKkLH0AGfY7hJ7CYjnzH2j1yzjajyn3Cxu9gh7PIdmWZUShtpAMxCyDUhh2Hux3sSK81l1oUcXRu9Z8Y5C2C%2B6eUXQQrAZTxZ%2B6OPfCaXFBBmbP9TELLSihzBPFuHZMfy%2BvRtuOxc9AAmAMUO0M6AQ65D&X-Amz-Signature=11ddb1b881822f186f9b753c8712be07c30686f051e744fc6ced0a2550ad935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWN464I%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf7VXG5TqYPCwtw4ob3WV4yCM093LBThEOWyGeP5P%2BTAiEAuchmjEnCoLpZJ7fyNB6jCH6o7NYoLM7DlapSOmgwLX4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnsCMxeY1Ue57LStyrcA3SylyGjfruRWvtoo1qdt4D1aTZl6LEst0asY5LkaV6JOHM%2BRPkDAFPvhtK%2FObaz4v7bRx2PHR%2FBKtjxRlXFJ%2FdLkSAWFHk%2FxEAi8fEqWFA4jh2mtKdRFuU5uNAi9EbfGXJT6Uu513uep2jWnkR5DjgxFGws0PY14MzaAv4M3GtKvtVVvOjacutNeFK7OzzNde%2B5w2bnNcuJhpHsOYAoOxhrT2F%2B7V2s3Bvxby4doF49z2rfsfkygscCKwSFqwIg1NcZpZj45ht%2FW3BLlJ5nC2qT%2FbgLu5ltGKpJfO51mUwHunBYlxE1jLbrn9ACJzUyndTUb5QiY8obWnva496cNe9RAPyuT45yDlFLZ89FKqwcCjFcyv3LpazjRnSjpj8s3AFCi1f%2BOorpP%2F1eJGP8p1crW2jxdSqAjFs4SGhfuTlQBA2%2BCVMHAlF24ZO4KkXu0aLu64GH3tsKadu1X4KKKerBkXHqeFwOSb8VKrn4MArgfzw6zALREkwHjqIYF%2BKPoCbljsPb2v%2Bq0Tru21ohOjAQuzerryGwJCKKHi4ejWwG31rg%2Fgqw8HVoDEErZyLZQAY55l3FNADCv2M79uDejmWlvpDhLsKHgKrpekd4H9CSxAkhSuyDdq7aljsPMJa%2FvMQGOqUBGBKyZmepdVRxEGV5UVyBNgS1n%2Bib90RXk3ggQ6UuoOsLIkdRpiu3ArAUlgzDkVR1snBzKkLH0AGfY7hJ7CYjnzH2j1yzjajyn3Cxu9gh7PIdmWZUShtpAMxCyDUhh2Hux3sSK81l1oUcXRu9Z8Y5C2C%2B6eUXQQrAZTxZ%2B6OPfCaXFBBmbP9TELLSihzBPFuHZMfy%2BvRtuOxc9AAmAMUO0M6AQ65D&X-Amz-Signature=753f3a3ce90998d40c16cb04f0554ba4668ed475317e9c9dff5fda6695adba07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
