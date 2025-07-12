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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KZVVHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2qqvE6PUxYDaImBY6lP5x5LT9YOGmUXGF8sd%2Bd4M2GwIhANELJ5gZDWB5K895PWbZ4Lmw%2BnAt1aBWMarU6uancjV6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCIWmlNzS0JW9UE5oq3ANOuheQ99QbTrF9R6DGUsgUh65WiXFi%2BqXBF3i2ph3Myqei6cO5AMocDJWDutqzlxoKZXsruW9xpa%2FtvHl1lAT2waTFP239B7wAbRPs45H%2FmNyjpRZ7S3Yygd%2B22XjSNEUmQ%2FgY4o7ITOZcqrKa3kD30f6%2BhO3fL1BOKNz19tYKTQ8n5ppjrJuFozERkUMA0HgK8%2B1ULHJjaUXD1ldmBZjijv7zc3kNk%2FlT4PiSbOWfKpLtir4lAPZWFgO9I8lgrH0b%2BmgI6eyciYc5U3gSnOh5fF9vXiK0rpgkpcOtRs%2BzXYAyntIITbYH9fs%2BaBJ2EQyIAOiT195KO1lVS9Gght7%2BK6vO%2BnMBxRCGGvu6ijyhMdVtv4GkIbpTL5yZdKYM8c0OqRC5%2Bnpe%2Fxd6sBDlYHJLKScz0UrMHir1JeMOYqQXUNBTpI4WFsDPRfrQZwsNC%2FyktuYSorRh7xuOr4xjjw3hJWpVfr3xNTTRvtUbA4T%2Fb%2BN2FaY1kQ%2Fui4VcJnAO%2Fde0l3agXTthgogQcS1JgdHpd9DZDBE55H8fyDAZbjh2Z4YFi8FqXyyzpeoUj68ZnExZkIYdnpQOxaEAMnbtk778MT%2BBOca8NSt58mgvbZ1SCqqypQwg7cAZRginpDDm%2FMjDBjqkAXbGv3ZXdX6vTtaKh0o%2BtJ%2BbMSZbF0dkYbJMVsfIVDRhIYqw%2FeBJmA986%2B67dM0WXvtqw1MO8q4zpWbNOHRlG8zZ6R9TXz%2BCAFhxLLh8srT6Mj5Xk%2BFx3G1%2FHz1vqxHrOsYU85Mw78AkZEP294qpNIg955mTcZisBXbV8NTgkhRwgTXmGVoSsb1K30iZEvdfjxDVSKJm1F%2FDSewbomgXjOBHGy3S&X-Amz-Signature=31ec67c8eb44b240479f1e5ff7200e1a3173eed0b84da25586dfd44712c4441c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673KZVVHM%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2qqvE6PUxYDaImBY6lP5x5LT9YOGmUXGF8sd%2Bd4M2GwIhANELJ5gZDWB5K895PWbZ4Lmw%2BnAt1aBWMarU6uancjV6KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCIWmlNzS0JW9UE5oq3ANOuheQ99QbTrF9R6DGUsgUh65WiXFi%2BqXBF3i2ph3Myqei6cO5AMocDJWDutqzlxoKZXsruW9xpa%2FtvHl1lAT2waTFP239B7wAbRPs45H%2FmNyjpRZ7S3Yygd%2B22XjSNEUmQ%2FgY4o7ITOZcqrKa3kD30f6%2BhO3fL1BOKNz19tYKTQ8n5ppjrJuFozERkUMA0HgK8%2B1ULHJjaUXD1ldmBZjijv7zc3kNk%2FlT4PiSbOWfKpLtir4lAPZWFgO9I8lgrH0b%2BmgI6eyciYc5U3gSnOh5fF9vXiK0rpgkpcOtRs%2BzXYAyntIITbYH9fs%2BaBJ2EQyIAOiT195KO1lVS9Gght7%2BK6vO%2BnMBxRCGGvu6ijyhMdVtv4GkIbpTL5yZdKYM8c0OqRC5%2Bnpe%2Fxd6sBDlYHJLKScz0UrMHir1JeMOYqQXUNBTpI4WFsDPRfrQZwsNC%2FyktuYSorRh7xuOr4xjjw3hJWpVfr3xNTTRvtUbA4T%2Fb%2BN2FaY1kQ%2Fui4VcJnAO%2Fde0l3agXTthgogQcS1JgdHpd9DZDBE55H8fyDAZbjh2Z4YFi8FqXyyzpeoUj68ZnExZkIYdnpQOxaEAMnbtk778MT%2BBOca8NSt58mgvbZ1SCqqypQwg7cAZRginpDDm%2FMjDBjqkAXbGv3ZXdX6vTtaKh0o%2BtJ%2BbMSZbF0dkYbJMVsfIVDRhIYqw%2FeBJmA986%2B67dM0WXvtqw1MO8q4zpWbNOHRlG8zZ6R9TXz%2BCAFhxLLh8srT6Mj5Xk%2BFx3G1%2FHz1vqxHrOsYU85Mw78AkZEP294qpNIg955mTcZisBXbV8NTgkhRwgTXmGVoSsb1K30iZEvdfjxDVSKJm1F%2FDSewbomgXjOBHGy3S&X-Amz-Signature=7d70c544d1fd0bbab57d57002ecbc0ed466d1518da8a35adb3f7a9abb94be327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
