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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REY4KWAY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC8fABOcxU61mgpsHmjF%2FtK0TzGrPdyzZHgIeYuqsWEXgIgaHqoNQnB08ukhRGS7GAvaTo1R%2BD0wxwGaLG6AY83IxEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFFgMmtSoxR6z3seTCrcA8DM8XSA9GN7FE7PCX9Tvb9nVOcgKRskRt9HbX%2FvmGOeRKue5GJ2SCrfpsjMLvcO32vcZ%2FiitKCPseLrAYagu0ACd%2BvzLUFv%2Ft%2B6bima9QBO5sYp5VclYv2MCNt7jql8c8OuGtK%2FRUcJu6aADBL13iydrKsQNmeOY%2FFFUEgb49z8cz0WAUYBWUULOkDrse3Zvw0ZHK9Cqyg6TOTAlXUCoEZ%2BwmzgQ%2FVAdqxNxJ9T1nOVhKQqddwKe53CegkpmVlvmTADkVDWlGGH1oKNvbiJtC3DMn8Z2H2QcHS6FLMhzPlypyo7v2OqKxsHgJhFp%2FjQHT3q%2BPQlTI%2FSlv9Cr4WoSJXzFZ3azvfr1jKOAdxKpU2zpToPOC9kHpajDoxbX9Hf32EcbVrsigrWecicynwEAkcK9t9uUshCVxeAQiZCI9%2F%2BLZ%2FH2g50YM1fNXwlgjuIwSOSgII5MdmkwdBPoziv5DXMavxszZxuPifneJmoWUUxfzyeRfZE5YB0dfnwWM1L9BkT0Uw7B%2BhsiQYVh%2BCpzRa4qF%2BIxtnXKh7dqM0aC7Dr5jThwl6iRNRARToWQhptJ6vmqw50xqIDXf4CkXKulwtGH2xWkC3LO4NJrUUoVoQiDOO6GuxFC09jXP%2FqMJG0v70GOqUBF8W9DuIGUDMVrewkHYaH%2Bc8%2Frm%2FXRSncBIC6dwRpzDOL%2F32z6CXM%2FRtFrqU8dstJrdW7RZck%2FyychdTbfk6aoAe45AHN81ioma1gF0YMLkut02idxe1xGge1kXvq0mmEhsuZ2NSDuyaiiLzcSgqINiLJsIYFXbi0MUaTevnS54fh%2BO36gAroe6cOIhbWDGzXjqMKhkEEiQPOvPQVwnrlYH8KaP4v&X-Amz-Signature=d84b3cb0e1d3d6dbac207ed68f30117bd708bd5db41ab3b108166c0be176519d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REY4KWAY%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQC8fABOcxU61mgpsHmjF%2FtK0TzGrPdyzZHgIeYuqsWEXgIgaHqoNQnB08ukhRGS7GAvaTo1R%2BD0wxwGaLG6AY83IxEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFFgMmtSoxR6z3seTCrcA8DM8XSA9GN7FE7PCX9Tvb9nVOcgKRskRt9HbX%2FvmGOeRKue5GJ2SCrfpsjMLvcO32vcZ%2FiitKCPseLrAYagu0ACd%2BvzLUFv%2Ft%2B6bima9QBO5sYp5VclYv2MCNt7jql8c8OuGtK%2FRUcJu6aADBL13iydrKsQNmeOY%2FFFUEgb49z8cz0WAUYBWUULOkDrse3Zvw0ZHK9Cqyg6TOTAlXUCoEZ%2BwmzgQ%2FVAdqxNxJ9T1nOVhKQqddwKe53CegkpmVlvmTADkVDWlGGH1oKNvbiJtC3DMn8Z2H2QcHS6FLMhzPlypyo7v2OqKxsHgJhFp%2FjQHT3q%2BPQlTI%2FSlv9Cr4WoSJXzFZ3azvfr1jKOAdxKpU2zpToPOC9kHpajDoxbX9Hf32EcbVrsigrWecicynwEAkcK9t9uUshCVxeAQiZCI9%2F%2BLZ%2FH2g50YM1fNXwlgjuIwSOSgII5MdmkwdBPoziv5DXMavxszZxuPifneJmoWUUxfzyeRfZE5YB0dfnwWM1L9BkT0Uw7B%2BhsiQYVh%2BCpzRa4qF%2BIxtnXKh7dqM0aC7Dr5jThwl6iRNRARToWQhptJ6vmqw50xqIDXf4CkXKulwtGH2xWkC3LO4NJrUUoVoQiDOO6GuxFC09jXP%2FqMJG0v70GOqUBF8W9DuIGUDMVrewkHYaH%2Bc8%2Frm%2FXRSncBIC6dwRpzDOL%2F32z6CXM%2FRtFrqU8dstJrdW7RZck%2FyychdTbfk6aoAe45AHN81ioma1gF0YMLkut02idxe1xGge1kXvq0mmEhsuZ2NSDuyaiiLzcSgqINiLJsIYFXbi0MUaTevnS54fh%2BO36gAroe6cOIhbWDGzXjqMKhkEEiQPOvPQVwnrlYH8KaP4v&X-Amz-Signature=e1f5bb23e5a15ff70aa368ce6fef43c9e35c6f2bd8f585e04c090eb4b6a5bf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
