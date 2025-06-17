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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZBAZKY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1eCehWzD%2FouV3zud0ALefPwkjnlAKUFQSfbLw8cJvICIQDDV%2Bl9HM9pGAnSYbleYAC%2FF9fsDBzYr6mHl%2B6t9cWCnyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEi1oQ1G2iCTMp8BvKtwDS1M6A2fe8OATPRYdynBPA3T849NeSLhKM7KJ4HBUk2w7Na%2Fzyiq8jQyZHLV4bpuve5teTABrQVKmDClI8n8%2BNEGibWh53QI4uAE66YNAlWhee9tXLk6wzRDxcNmTGZ9YVxj0RN9cDWTFnSKvdb9pgWGVJBGgBr1avi3FSz%2FcagSxq0ZHqsi6kj90%2F4J16dcaKd%2BSD2m3K6UquZd807A3TpAJL6PSSv2obCvGGinl6S3OS4O1200rDg%2B9Px7zmSeBFyojjW6KrfYDtBQQcdaElpcNEmSJnsu9BMQiH4ZpdbPNrgJUpMLkgajiZ4vwCUE6Oymhx%2BK36sqdjaoXl5sxBElUbQgb72Zj4d2Cq02tOeLIEbZ53h4e2CgncAoT2lIhZunlT%2FhSWlKYqWMjVtIn%2B60VX88XbidjF8l8cNnBBnfg93Asb%2Binst9Vu1%2FN701S4f2wjip79OsGQzIQ7T74oO%2F%2Fz9KW0qIb7UIOnzaLdzr6HlKU24dEeEyPPlhw%2BdjqRomaco3KISedZpwWwulQLZOHvkhrjujsHXXxcFeuD%2FVS%2Fc6XkZo97U1yQ2EyzjFyDnxd9a4saHaIQCnhTn8uUT0AdrS8eAjTEmGUQuRFjE0v9JiHTI1fDNb47mUw0KbFwgY6pgFFxblPaCz30Hh1jKFh%2BC6yWptSxRtqxBqHhxzhLTv51hFkiEfTg5Wk0%2F9PsQHCt%2BATOSLPRxillmWHqJObsubJY5gWiQDOmQXzj6i%2BcLmWdC2Ht%2FuguCXgMOpiZN%2BCp2I%2FZzS6rCK9eRu%2BO0yN%2FmZut2oScji9xCUirLF%2FVcnNkvhavmoaa%2FsYKwe%2FMqvN%2B5savvW2bUgSdIsk2vO0f3sZtaSV43eo&X-Amz-Signature=7660cc5f9c34c3217264a455f3a1f453c91e17bccdd4b758bbecbb719c1ffd06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZBAZKY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1eCehWzD%2FouV3zud0ALefPwkjnlAKUFQSfbLw8cJvICIQDDV%2Bl9HM9pGAnSYbleYAC%2FF9fsDBzYr6mHl%2B6t9cWCnyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMEi1oQ1G2iCTMp8BvKtwDS1M6A2fe8OATPRYdynBPA3T849NeSLhKM7KJ4HBUk2w7Na%2Fzyiq8jQyZHLV4bpuve5teTABrQVKmDClI8n8%2BNEGibWh53QI4uAE66YNAlWhee9tXLk6wzRDxcNmTGZ9YVxj0RN9cDWTFnSKvdb9pgWGVJBGgBr1avi3FSz%2FcagSxq0ZHqsi6kj90%2F4J16dcaKd%2BSD2m3K6UquZd807A3TpAJL6PSSv2obCvGGinl6S3OS4O1200rDg%2B9Px7zmSeBFyojjW6KrfYDtBQQcdaElpcNEmSJnsu9BMQiH4ZpdbPNrgJUpMLkgajiZ4vwCUE6Oymhx%2BK36sqdjaoXl5sxBElUbQgb72Zj4d2Cq02tOeLIEbZ53h4e2CgncAoT2lIhZunlT%2FhSWlKYqWMjVtIn%2B60VX88XbidjF8l8cNnBBnfg93Asb%2Binst9Vu1%2FN701S4f2wjip79OsGQzIQ7T74oO%2F%2Fz9KW0qIb7UIOnzaLdzr6HlKU24dEeEyPPlhw%2BdjqRomaco3KISedZpwWwulQLZOHvkhrjujsHXXxcFeuD%2FVS%2Fc6XkZo97U1yQ2EyzjFyDnxd9a4saHaIQCnhTn8uUT0AdrS8eAjTEmGUQuRFjE0v9JiHTI1fDNb47mUw0KbFwgY6pgFFxblPaCz30Hh1jKFh%2BC6yWptSxRtqxBqHhxzhLTv51hFkiEfTg5Wk0%2F9PsQHCt%2BATOSLPRxillmWHqJObsubJY5gWiQDOmQXzj6i%2BcLmWdC2Ht%2FuguCXgMOpiZN%2BCp2I%2FZzS6rCK9eRu%2BO0yN%2FmZut2oScji9xCUirLF%2FVcnNkvhavmoaa%2FsYKwe%2FMqvN%2B5savvW2bUgSdIsk2vO0f3sZtaSV43eo&X-Amz-Signature=3d4a9bfe145abebaf2b27f0c74b97bf8fb570e7fa9c484d9387faed25501779d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
