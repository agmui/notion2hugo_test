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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66UYFOB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgN3grMVvcoz%2BIhahPiILe0xEADjilwv7%2FsUDDVGyvXQIgHMK4iWAHD%2B81Q0aFErDKigzqotPeFdSZfWDB6p7elPAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnQCRnpt06db9YASrcA5Mv5ypTSsVFtR9RtuAgNZv8oRzAxQymiqqFfEES7dgkB0TePeTwtslbXKGu%2Bu%2FUl%2B9eGh%2Fr3dj7QvoZr2uKpzREXMQbUHSrDu9h4U9yeulZ%2BRemYjRPYrQi1K8rYd%2B%2BWpRYgLY8x01ds8vMrksPEhm6%2BkkOxZu6K2TJesIMRdtAS61eOWl%2BQqCWG%2BXi6LXK2OPIX4nxBWHnWmpUd9uxB1kPdLNNnbJZIkG8tfL5H4zjxKkVSbX%2FuYKnfLJx7e8%2FIcy0C1tSLDlGcGik5cO4KIhLWmcUvkdmmQZv5TLBDXV4wPalAA4Zv1HOWtO5zygfPCjhjtZgqm9TrJhq6r8O5WJLnVy5HzZTVSkxIv2iBzlO5C1yJwVZtZIov4kWXXbaavLK807WIPB3GvhSfmrle6bogFa1iCkAz%2B6HkYIM%2FJEjYNBK7A5I3c4ObQMp99reRiAb%2BW1Vv1QpUb5W4%2BnvQbDnkauInNDSGT5I89CaHX9W5DzEXtzTUS0vENfTlMDOIU8hwmljy8gZ%2FQoL72aTCn58ZHHgqJgQSvbnByLoXs%2BJMyKApKKouIoxKGFLu0nSXkhFbETdJhjo%2FHWjATQwApxDqccrb17sqh1KtA1j06pUicM4vhcpGsHyktZbMI647sMGOqUB8kJqPnglMGlWGiNMJteny6cBOj014oUOkPacJm%2F3FdKIvkz0uij%2BnT2lsqxux6dyaY0MwyuKzIl%2F9v%2BaM4XadzILVXMgKVjTa%2BkCOLGAV9HkE6gk%2FrF%2FxE86KWinbr5AyrtaqbSNiFBJyYf0J4hvjVNWf7bCJcRKJ8Q%2F%2BdPWdC%2BzY8VHjfhTdjezgToRaukdJqSzZ0%2BasYLdmpMfCcDcCnlWXpdW&X-Amz-Signature=88217062e8ef59ba6238fb408ee8b0a256b8cc960a33b05b628078e594936b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V66UYFOB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgN3grMVvcoz%2BIhahPiILe0xEADjilwv7%2FsUDDVGyvXQIgHMK4iWAHD%2B81Q0aFErDKigzqotPeFdSZfWDB6p7elPAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARnQCRnpt06db9YASrcA5Mv5ypTSsVFtR9RtuAgNZv8oRzAxQymiqqFfEES7dgkB0TePeTwtslbXKGu%2Bu%2FUl%2B9eGh%2Fr3dj7QvoZr2uKpzREXMQbUHSrDu9h4U9yeulZ%2BRemYjRPYrQi1K8rYd%2B%2BWpRYgLY8x01ds8vMrksPEhm6%2BkkOxZu6K2TJesIMRdtAS61eOWl%2BQqCWG%2BXi6LXK2OPIX4nxBWHnWmpUd9uxB1kPdLNNnbJZIkG8tfL5H4zjxKkVSbX%2FuYKnfLJx7e8%2FIcy0C1tSLDlGcGik5cO4KIhLWmcUvkdmmQZv5TLBDXV4wPalAA4Zv1HOWtO5zygfPCjhjtZgqm9TrJhq6r8O5WJLnVy5HzZTVSkxIv2iBzlO5C1yJwVZtZIov4kWXXbaavLK807WIPB3GvhSfmrle6bogFa1iCkAz%2B6HkYIM%2FJEjYNBK7A5I3c4ObQMp99reRiAb%2BW1Vv1QpUb5W4%2BnvQbDnkauInNDSGT5I89CaHX9W5DzEXtzTUS0vENfTlMDOIU8hwmljy8gZ%2FQoL72aTCn58ZHHgqJgQSvbnByLoXs%2BJMyKApKKouIoxKGFLu0nSXkhFbETdJhjo%2FHWjATQwApxDqccrb17sqh1KtA1j06pUicM4vhcpGsHyktZbMI647sMGOqUB8kJqPnglMGlWGiNMJteny6cBOj014oUOkPacJm%2F3FdKIvkz0uij%2BnT2lsqxux6dyaY0MwyuKzIl%2F9v%2BaM4XadzILVXMgKVjTa%2BkCOLGAV9HkE6gk%2FrF%2FxE86KWinbr5AyrtaqbSNiFBJyYf0J4hvjVNWf7bCJcRKJ8Q%2F%2BdPWdC%2BzY8VHjfhTdjezgToRaukdJqSzZ0%2BasYLdmpMfCcDcCnlWXpdW&X-Amz-Signature=f18c69d2233a3735a49c71e03cbe840c0310f64ebc3a20df8920042ffcdeab2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
