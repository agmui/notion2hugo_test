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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5PSY7X%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV8JxwzwGCQp0X7ggg96CleUjjVOVPOLcN%2FW%2B97%2Fg1JAiB7l2fmLB0c4ppD9sHxNbBM0QDlkSeh6lV82NaTjxHXACqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YeeZKO2rT9G6BJbKtwD%2FTkd9UUsnyU9mCpmIdUfY7fjRtgBHB1FK%2FLg9RcXrismjp2hq%2BArDOkdkHni822qozYjWZxH286BGkZrCdqISWRqUSZlXJRFIm%2BahPkO1wXAYu0auFrQjtiMyhKHUHHMjQRtAOhUOkdnKn1%2BugJ49555Ns7UrshwuIpdwrCFmXbn78DqFGrBOHlDdT6ZYdmRE1%2Bjr8TkyAyE3F6onVubJstsyh4u%2FAxZu2zqfUL3QCGRTreggkk7EiAe3Fu79aTEmDm1Ym4jyuv9n%2BBeeNp8z6%2BlLZdQZ9Y5ely45N6qX0cqdPyrMRriE8STfEoS6xyyw3x1Ju9X1ak40NTt%2B0B82ndHU9Ivxs5O9ckNyOajhTooIPcdmYNvnQcSTivEvqocbHS5ciGrehZDWKUzhCuY%2F7t%2FsCiUr6odm62ExTWiyZXUimHkzilN9%2BekT%2Bw0s1dTTX2prWfOyFXbAEVujc5bwi8g0lJJWiVl5afoK8P%2BVM1Q47mHx8gPtDlTtlySKjC5SbRU%2Bfm9WcHX%2B0%2FH68NsCznM%2BV%2Fwpn8jaEBT1IkE8s0gjSlCfiNUdJhxzwuF0ma0TUskQhXGvPhQGK0Fzadm%2BqX9OwarLHE7EQUsZM8Ip%2FwjY9Ni5qyTAK4cHE0ws6%2FYwgY6pgGqJGneixO3uzdOpDNZViRdjAoRCMdP7Zs9oFfx50h1gvQFKSAHEVY20lg10v3xoVfHk2csOts2PK6ODVPVfKQFDkZ%2BrizfW1l%2F%2FUb5a3CvOwEJOp%2FFR6JOhmbdL4XlgCjpQHJILpp%2FXu98XuEWimu%2BHsyOYjSeY%2FFWAa%2FXLB6t%2BQtBlcoAvMvzS3N0gfzO9AjhmChK6xmwARi2nGjcX0KubaXy5O4B&X-Amz-Signature=b60d0b7775731e4a9aff0520282450bff4395d049c981e8b6f4d69cc53153875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5PSY7X%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGV8JxwzwGCQp0X7ggg96CleUjjVOVPOLcN%2FW%2B97%2Fg1JAiB7l2fmLB0c4ppD9sHxNbBM0QDlkSeh6lV82NaTjxHXACqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YeeZKO2rT9G6BJbKtwD%2FTkd9UUsnyU9mCpmIdUfY7fjRtgBHB1FK%2FLg9RcXrismjp2hq%2BArDOkdkHni822qozYjWZxH286BGkZrCdqISWRqUSZlXJRFIm%2BahPkO1wXAYu0auFrQjtiMyhKHUHHMjQRtAOhUOkdnKn1%2BugJ49555Ns7UrshwuIpdwrCFmXbn78DqFGrBOHlDdT6ZYdmRE1%2Bjr8TkyAyE3F6onVubJstsyh4u%2FAxZu2zqfUL3QCGRTreggkk7EiAe3Fu79aTEmDm1Ym4jyuv9n%2BBeeNp8z6%2BlLZdQZ9Y5ely45N6qX0cqdPyrMRriE8STfEoS6xyyw3x1Ju9X1ak40NTt%2B0B82ndHU9Ivxs5O9ckNyOajhTooIPcdmYNvnQcSTivEvqocbHS5ciGrehZDWKUzhCuY%2F7t%2FsCiUr6odm62ExTWiyZXUimHkzilN9%2BekT%2Bw0s1dTTX2prWfOyFXbAEVujc5bwi8g0lJJWiVl5afoK8P%2BVM1Q47mHx8gPtDlTtlySKjC5SbRU%2Bfm9WcHX%2B0%2FH68NsCznM%2BV%2Fwpn8jaEBT1IkE8s0gjSlCfiNUdJhxzwuF0ma0TUskQhXGvPhQGK0Fzadm%2BqX9OwarLHE7EQUsZM8Ip%2FwjY9Ni5qyTAK4cHE0ws6%2FYwgY6pgGqJGneixO3uzdOpDNZViRdjAoRCMdP7Zs9oFfx50h1gvQFKSAHEVY20lg10v3xoVfHk2csOts2PK6ODVPVfKQFDkZ%2BrizfW1l%2F%2FUb5a3CvOwEJOp%2FFR6JOhmbdL4XlgCjpQHJILpp%2FXu98XuEWimu%2BHsyOYjSeY%2FFWAa%2FXLB6t%2BQtBlcoAvMvzS3N0gfzO9AjhmChK6xmwARi2nGjcX0KubaXy5O4B&X-Amz-Signature=b3ad1cb851496a7608bb8ddff6e84a8f2752570e0a3906d21ec3aa9cd172ee48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
