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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PCNC7XM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDARM5touLFrBI2MvU0LtspBUuXs9qVDGM5S3AgT97LDAIgJQx9DJY7I%2FWCig6fCML3QD5fFNEhBAyHnp%2BulenzfyIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7GewKLgoYHZtFzSrcAzBPP3J4aI%2FxWfC0euWwjFXzX3mIJ3rUdPKKGuwIJFEr5VbhfYu325PD2uYubXX5lQFaC8Wf9zasLafkmDjU96mK3GRp9sPaiDEdp8N16lHj5T2sdHFYG%2BpCDnyQ8M0alHSKBXrthdvQQMvdaJsDzpTDu32X3O4byVQBL%2BDC3h%2FUAsLUOYpYWAYnD5E11a03r19XBmJ1FVeJM0Y3%2BCVPeU4%2F3bEiHY3tTrWtbkRjuhpbZ3gM6nCkeqgDL5HnxB7q7bo101DXdrPa0P%2FNY42%2FWApl2H88epAkzUKz3Cdbc%2FgaM7OSnIeWFL3BusXaLEhTbCc0uvJHlSOGsbjHN%2B%2BT2wZ2kzdCrKzmwfx%2BzckggOLFNP4%2F00s7aGptZ8enSa2sJzFrCycjeKBgaBeYB3Akkkf0u2taVo%2F%2BPANniSLGFRCj1aD0XeRdqZgbAdQ5lnsBAGJMVfxbEc1QF3Iz2%2FefRZA6p%2FjG5VdSL4ftE1Yw9pAz%2Bo4nZbkgIOFwNgCHhY7HgknKZPQclRyOTbYqwS6I3QnboNGtPsrvrXJhurGZQq78cml6nayPfx8M3p7JoJgk%2F619TmtZVa8RY8cKDwQFJLh4fQqLTDaz795btg3GH1rw3t94TZH00AoL5TDVMMyyqr0GOqUB5DlEiPMkyv%2FekHkv%2B21%2B0HuXD8BYuOEG83MCIik0zbW6Qxi2Ii0FhfrGJblNLJq6jtXazU42HQTVMmXFj19EWkSyBjNIdUcd6kPe7aW5a4u78x1M1pLv%2FZvmlZnyG1lhJxypNkYCZqehTm63wQ0Bjhb08HIaMWpHZn0OZfGTwtb5wNr2Ow0E7G2Efi%2FlFWju%2FohEzYF1mcFuIS01IA%2BhBj%2BrlP5f&X-Amz-Signature=930bf74728e2923559b1600df1bcdbef8287b724403d194f5eca0b939fe3ba97&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PCNC7XM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDARM5touLFrBI2MvU0LtspBUuXs9qVDGM5S3AgT97LDAIgJQx9DJY7I%2FWCig6fCML3QD5fFNEhBAyHnp%2BulenzfyIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEh7GewKLgoYHZtFzSrcAzBPP3J4aI%2FxWfC0euWwjFXzX3mIJ3rUdPKKGuwIJFEr5VbhfYu325PD2uYubXX5lQFaC8Wf9zasLafkmDjU96mK3GRp9sPaiDEdp8N16lHj5T2sdHFYG%2BpCDnyQ8M0alHSKBXrthdvQQMvdaJsDzpTDu32X3O4byVQBL%2BDC3h%2FUAsLUOYpYWAYnD5E11a03r19XBmJ1FVeJM0Y3%2BCVPeU4%2F3bEiHY3tTrWtbkRjuhpbZ3gM6nCkeqgDL5HnxB7q7bo101DXdrPa0P%2FNY42%2FWApl2H88epAkzUKz3Cdbc%2FgaM7OSnIeWFL3BusXaLEhTbCc0uvJHlSOGsbjHN%2B%2BT2wZ2kzdCrKzmwfx%2BzckggOLFNP4%2F00s7aGptZ8enSa2sJzFrCycjeKBgaBeYB3Akkkf0u2taVo%2F%2BPANniSLGFRCj1aD0XeRdqZgbAdQ5lnsBAGJMVfxbEc1QF3Iz2%2FefRZA6p%2FjG5VdSL4ftE1Yw9pAz%2Bo4nZbkgIOFwNgCHhY7HgknKZPQclRyOTbYqwS6I3QnboNGtPsrvrXJhurGZQq78cml6nayPfx8M3p7JoJgk%2F619TmtZVa8RY8cKDwQFJLh4fQqLTDaz795btg3GH1rw3t94TZH00AoL5TDVMMyyqr0GOqUB5DlEiPMkyv%2FekHkv%2B21%2B0HuXD8BYuOEG83MCIik0zbW6Qxi2Ii0FhfrGJblNLJq6jtXazU42HQTVMmXFj19EWkSyBjNIdUcd6kPe7aW5a4u78x1M1pLv%2FZvmlZnyG1lhJxypNkYCZqehTm63wQ0Bjhb08HIaMWpHZn0OZfGTwtb5wNr2Ow0E7G2Efi%2FlFWju%2FohEzYF1mcFuIS01IA%2BhBj%2BrlP5f&X-Amz-Signature=aa5a318f82b9384e106217bfe1808774ed71d4a2ead9accc892ee316e9431ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
