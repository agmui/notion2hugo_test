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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQXHU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDSOjl2hu4ueUGchMuk11cKfMn5mQsYkwlzVenyfHMVHAiAUj29PPR4aArRGtxiXd2HWR2rcMZP1H3PS%2FFuxaCLkHCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7u5cNu5zlwKCqHhjKtwDxXuV9XCOjolG4rcU28QdKDL4Y6SXVCHyoYMZD0U9MVX4Ie8EfYmaYiVa4v1E7C91xKg7%2FArWwjKuUVVzmwqsWkV58Y%2BaqwQgD7XAfaVSqWBg0PxPePnthx6zNcVPDqarwo9YKzJC7PvU5QOvxUZbQw373U2jy3Knpw3Yw6SfUQ2p3LEQJ1Z9uG5ZV2SZMVkYvPstrjJyA8IzRdOkApO%2BIaiSI3Toc6lIIws84mpVCevp7EQrc5l6rsKw344jlbRC3Jq2f99YqAOcM%2BvQyPhrzM2wZzi9K%2B4v87NoAwR1nycOpPM4PbFPAmqavkbGD0MCbJbX5mdGjkcLUbv7khneItDyXkJFMi6DMqmIAtT5fgG%2BOy%2BzS8hegbI3%2BE2XKQ5mgIx1duAfZh4F4qNdYQ%2FPpek6Fe32RpvCTKxJ6pWPEC8aheZbHZHiBfGpC4o0prBGtMEdBlgTG%2FUX%2F0zU2lb5h6gNoo0xkyWKR8RZ09j3eOZUoK5vbfdoizyhK0c01nrGfh0P8fFga28Nwxqb6Ve1xEtKealBP8X7rAARIGUHaDP4r4ysxkx5iePc47OxQPhMXYDA6p3P9PWrgaPscxLMV9rKZdUR%2FWv6Qb1g0pWGALPkthJQtlePhigyla8wp9TSxAY6pgHABk89DqmITWKip4EdoCD1KPulT0m%2FqAJsDJukoCidKb12sNERyyZTufLZHIiB%2BjlbV%2BYrV4EK6yghpjUEGh0hTax2JXi5h6imBNywRMJYeIxlM2NWS77%2BJFz0f8pW%2BAY3pfQFG9rU2WlOGESCLNzLcJjTNawElX2vIMlWTkQ5diBpkld6ojKrTonf6vEQ0Zr%2BAcCXSiqUU4NhdSeDhHjQu5nNv7ob&X-Amz-Signature=c504b3be435e24381753d6bc1ea6a0e8ddb92c521f91035f5e2d445375731562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RTQXHU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDSOjl2hu4ueUGchMuk11cKfMn5mQsYkwlzVenyfHMVHAiAUj29PPR4aArRGtxiXd2HWR2rcMZP1H3PS%2FFuxaCLkHCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7u5cNu5zlwKCqHhjKtwDxXuV9XCOjolG4rcU28QdKDL4Y6SXVCHyoYMZD0U9MVX4Ie8EfYmaYiVa4v1E7C91xKg7%2FArWwjKuUVVzmwqsWkV58Y%2BaqwQgD7XAfaVSqWBg0PxPePnthx6zNcVPDqarwo9YKzJC7PvU5QOvxUZbQw373U2jy3Knpw3Yw6SfUQ2p3LEQJ1Z9uG5ZV2SZMVkYvPstrjJyA8IzRdOkApO%2BIaiSI3Toc6lIIws84mpVCevp7EQrc5l6rsKw344jlbRC3Jq2f99YqAOcM%2BvQyPhrzM2wZzi9K%2B4v87NoAwR1nycOpPM4PbFPAmqavkbGD0MCbJbX5mdGjkcLUbv7khneItDyXkJFMi6DMqmIAtT5fgG%2BOy%2BzS8hegbI3%2BE2XKQ5mgIx1duAfZh4F4qNdYQ%2FPpek6Fe32RpvCTKxJ6pWPEC8aheZbHZHiBfGpC4o0prBGtMEdBlgTG%2FUX%2F0zU2lb5h6gNoo0xkyWKR8RZ09j3eOZUoK5vbfdoizyhK0c01nrGfh0P8fFga28Nwxqb6Ve1xEtKealBP8X7rAARIGUHaDP4r4ysxkx5iePc47OxQPhMXYDA6p3P9PWrgaPscxLMV9rKZdUR%2FWv6Qb1g0pWGALPkthJQtlePhigyla8wp9TSxAY6pgHABk89DqmITWKip4EdoCD1KPulT0m%2FqAJsDJukoCidKb12sNERyyZTufLZHIiB%2BjlbV%2BYrV4EK6yghpjUEGh0hTax2JXi5h6imBNywRMJYeIxlM2NWS77%2BJFz0f8pW%2BAY3pfQFG9rU2WlOGESCLNzLcJjTNawElX2vIMlWTkQ5diBpkld6ojKrTonf6vEQ0Zr%2BAcCXSiqUU4NhdSeDhHjQu5nNv7ob&X-Amz-Signature=11af34f810ece402f14edd608b44bea5045bcbb7351ba55e6fbff2e5114087c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
