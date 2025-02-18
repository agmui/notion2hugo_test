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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBP64IH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAWYa%2FJ6V70SmqyGCTtnQYM8sV6u0gVYx2vp8CNNg9KmAiEAlsHjd002Zl8jP5dvhxLzJ%2BpMM9Dy0FIgWxRm51KpD8oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr5bEeyfJf4F5LBpSrcA6%2FsSV8Z84iqSEAFwLKe7NjIK%2Fuy1mcNVPBjHi42i7AHgtIZLAOmQ21MvIzTVJ2WS%2BXKRbfZ8b4EQvBgDWkb9vQNol0jc0ywRp9CmNax2V0R3eFXuNm16A%2FtaWUHdflns1qQXTk6gEhx0c4AAY6%2FjlwLWFoiP%2Bd3%2BYpe69l2dR0OAHC8DDB85WszDS0kbjUvV9tm8fVd96mA%2F2JTLGXzKOjOaavVou3ma2e5VJxFC40MRX9gIIS5%2F1Jzozb1VK7SyZng0Hnw3b%2B8K3tHG89i2SEqlW8IkzEhXSqmYmnTmG319WIbgREkWqRKOLiNKhIepiNaI6iW1NxUJhchlkm4YKYAyi%2BYdulMrDoxA4uOTtOln23IpruJl4iWN8aTovKtCE%2BVEE2ThjopPgr%2Fj9p%2FFfytkVLrsgeaqx3EGuAQofTlbOa%2Bk9ZbfgfH1qV6xOPoHCFC5WSqNBmq04LPmxQ2%2F5rKwYLMAAhdgxjYybz3qreJLGCJ%2FItwiT%2BJOcniPTtJ9v7N2VI1DhYB%2FYMTulRQbTCgBw41iNwes0kVIsCoCT3xXFxynl2QsqeHaWucRmeR5RMxrzMfP8dvkoNCpO866%2BVvIbxNPpU6JHrnvKIEWOBKXAUOM3I7nleHCIW%2BMPiM0L0GOqUBgD7bFpHRoLGjsU65M25wCjpStRrFGVIJQ4kASQ9KwLu1VSKp5furOfn8LBknt48BjmeZi7L20ws62wfYqgLC%2FSKNQfNoCXba0AE%2F6mOz7OoVDdSEkRbgVewItfVS%2FopwnJEsPbRewoVTQsKAPBtOlDU8EhmCPNsMFMWLzzdl5ELxdMu6m8MA5bqd5zp95ZktN6Jzc3cjqLn7Wh0V3OM7326KyroC&X-Amz-Signature=e527c0baf5575030e359507e540854c339fcf5edd988d6964b5180cae04098a2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XBP64IH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T050805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIAWYa%2FJ6V70SmqyGCTtnQYM8sV6u0gVYx2vp8CNNg9KmAiEAlsHjd002Zl8jP5dvhxLzJ%2BpMM9Dy0FIgWxRm51KpD8oqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr5bEeyfJf4F5LBpSrcA6%2FsSV8Z84iqSEAFwLKe7NjIK%2Fuy1mcNVPBjHi42i7AHgtIZLAOmQ21MvIzTVJ2WS%2BXKRbfZ8b4EQvBgDWkb9vQNol0jc0ywRp9CmNax2V0R3eFXuNm16A%2FtaWUHdflns1qQXTk6gEhx0c4AAY6%2FjlwLWFoiP%2Bd3%2BYpe69l2dR0OAHC8DDB85WszDS0kbjUvV9tm8fVd96mA%2F2JTLGXzKOjOaavVou3ma2e5VJxFC40MRX9gIIS5%2F1Jzozb1VK7SyZng0Hnw3b%2B8K3tHG89i2SEqlW8IkzEhXSqmYmnTmG319WIbgREkWqRKOLiNKhIepiNaI6iW1NxUJhchlkm4YKYAyi%2BYdulMrDoxA4uOTtOln23IpruJl4iWN8aTovKtCE%2BVEE2ThjopPgr%2Fj9p%2FFfytkVLrsgeaqx3EGuAQofTlbOa%2Bk9ZbfgfH1qV6xOPoHCFC5WSqNBmq04LPmxQ2%2F5rKwYLMAAhdgxjYybz3qreJLGCJ%2FItwiT%2BJOcniPTtJ9v7N2VI1DhYB%2FYMTulRQbTCgBw41iNwes0kVIsCoCT3xXFxynl2QsqeHaWucRmeR5RMxrzMfP8dvkoNCpO866%2BVvIbxNPpU6JHrnvKIEWOBKXAUOM3I7nleHCIW%2BMPiM0L0GOqUBgD7bFpHRoLGjsU65M25wCjpStRrFGVIJQ4kASQ9KwLu1VSKp5furOfn8LBknt48BjmeZi7L20ws62wfYqgLC%2FSKNQfNoCXba0AE%2F6mOz7OoVDdSEkRbgVewItfVS%2FopwnJEsPbRewoVTQsKAPBtOlDU8EhmCPNsMFMWLzzdl5ELxdMu6m8MA5bqd5zp95ZktN6Jzc3cjqLn7Wh0V3OM7326KyroC&X-Amz-Signature=4eaf37ea8b0fb6a2126a6f0da147a3ce7305131526c3254074425f7f0b425d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
