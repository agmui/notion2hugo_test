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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGZG55W%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBaUGVRVW%2BM19OVRS%2BaDyO5p8PNe0%2F87td7P9D%2FLipPAiBFdpkLsurBaLN9JQkNLMHJ8Jgir8DbfK%2F8XFGlmvA7WCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72y5A1mTgFa4%2FuhbKtwDE60dmp1rsL9qONopJYakkte1170VmWIVNwraXveXPWiRT3aQp66yNyap6NAhgYQtLDH0U4IHt2EzsqCt%2FIN08sZGHtSO8vFW%2BGGqa12lAoc3vbXxZZ%2FEvo6rcQcff371jA15uhbpyIQMwbxA%2F%2Brxc%2Bm%2F%2BFQKjLvGX%2FB6tEbutUU%2BBO7jY5T4qnag%2F7nm4fvcIrnQeeEb1ARcJ5%2BjSispkxivLxc%2BGkmGw9oa1Dn2T2AjxikD6cQRpcrP9O21h06zxsAundlSCHQNuDBcGyLDgT2iByZZkhkKhbXGNlMw7SIwiXlbwTMOOwEjwlHJsmxG%2F%2BIcCLezvNwpD7kxZrTXHBiDcsHsPhzd7DsLcNnqkkXFE2CG%2FY9a5f8Sh6Xyj9U5mU%2BtYsMKNzrSiU65Wez9y%2BiOV0qmX7090Wgicx8Y5IOSSVBlq%2FRYzblzu0OCGjBwCYNOmqRIOqhOAb9b0294Lh2fWv8TVhuQnmeiEtJq9UNH1dxfyB8Yj3eIydKzXUd%2Bnz104KEO09sT3eQMzpG92I0rvJxqW55gupzgB0QtucpwkeALRvpZC6ND%2F48NQKcjOvicghrTvjnax%2BT34g4a8KM28mOw%2FS0EheDNhe%2BsZ2lqdMM4UqxrrXLAnHYw2vOzvQY6pgFsi7gGrINXuQxtgFo7b%2FrQQdXhesqI9Wle%2FOxbLi5%2FidO%2BSW4P%2BDnUXA%2Fj7bjkLbBlDiXQeypc5yxE3bj5pyIDaRSGwPbx%2BYScXApsJDu4vpKXF4cqEnMZOBt%2B36wGlRskP1FKM4x7DYVosD74aegksXU56rc%2FfIYCBqWUCLc7FwTIddOeo6ttkBh9YJJmrT0mybA0RoQGmIwt%2BqssgUO27rm8D2dj&X-Amz-Signature=39a0fcbc3e33f377584583c640aeef783d7f97c25edb212f35a5f66e9af410bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGZG55W%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBaUGVRVW%2BM19OVRS%2BaDyO5p8PNe0%2F87td7P9D%2FLipPAiBFdpkLsurBaLN9JQkNLMHJ8Jgir8DbfK%2F8XFGlmvA7WCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72y5A1mTgFa4%2FuhbKtwDE60dmp1rsL9qONopJYakkte1170VmWIVNwraXveXPWiRT3aQp66yNyap6NAhgYQtLDH0U4IHt2EzsqCt%2FIN08sZGHtSO8vFW%2BGGqa12lAoc3vbXxZZ%2FEvo6rcQcff371jA15uhbpyIQMwbxA%2F%2Brxc%2Bm%2F%2BFQKjLvGX%2FB6tEbutUU%2BBO7jY5T4qnag%2F7nm4fvcIrnQeeEb1ARcJ5%2BjSispkxivLxc%2BGkmGw9oa1Dn2T2AjxikD6cQRpcrP9O21h06zxsAundlSCHQNuDBcGyLDgT2iByZZkhkKhbXGNlMw7SIwiXlbwTMOOwEjwlHJsmxG%2F%2BIcCLezvNwpD7kxZrTXHBiDcsHsPhzd7DsLcNnqkkXFE2CG%2FY9a5f8Sh6Xyj9U5mU%2BtYsMKNzrSiU65Wez9y%2BiOV0qmX7090Wgicx8Y5IOSSVBlq%2FRYzblzu0OCGjBwCYNOmqRIOqhOAb9b0294Lh2fWv8TVhuQnmeiEtJq9UNH1dxfyB8Yj3eIydKzXUd%2Bnz104KEO09sT3eQMzpG92I0rvJxqW55gupzgB0QtucpwkeALRvpZC6ND%2F48NQKcjOvicghrTvjnax%2BT34g4a8KM28mOw%2FS0EheDNhe%2BsZ2lqdMM4UqxrrXLAnHYw2vOzvQY6pgFsi7gGrINXuQxtgFo7b%2FrQQdXhesqI9Wle%2FOxbLi5%2FidO%2BSW4P%2BDnUXA%2Fj7bjkLbBlDiXQeypc5yxE3bj5pyIDaRSGwPbx%2BYScXApsJDu4vpKXF4cqEnMZOBt%2B36wGlRskP1FKM4x7DYVosD74aegksXU56rc%2FfIYCBqWUCLc7FwTIddOeo6ttkBh9YJJmrT0mybA0RoQGmIwt%2BqssgUO27rm8D2dj&X-Amz-Signature=c537b840a5148d5fb9e4fcfc367bea79f5c886eb4bc91b99a3eaecd60f2e3987&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
