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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B76NIG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZdDuN03tuHP7kxAWAcPKy69iXKrALm6fi%2FTUN%2BKCSMAiEA7MiyfvrSW0wLDIT%2B7EUUxwoBpjh6MwrFFEPzfU6mJhUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDB1TfGXImN5Z%2F2dKuSrcA73iWcMiMWPGr1L9rHnLVPKVZrJmPRNVe0NqDMyBe0pR%2FhOKZQMhG89VVKMGVAtsu05gFugUnDwh9yoDKKEySW39OB4wzAVVpVDE9417Z%2FihhRS6AnuFjamWstkNDyGkJfyr204ZRIlFesw4NyGTt%2Fe60cqvCuFTR8ZsgkOTCbq%2BY8avoBykF4xvKqWTEyJDCBh%2B8AjtEornJyjUCugiyoCWLKHmk4aa0OI3zoFzWk57LPpwZHpJ7HKAxHj0oMfkYPLNfvQ2T6kif6b05BXLJfNi9JD962RsWCoi4RWChSh1gMmwmEPfDdlUsqVlR5e1tWrrwMN22ln3gAVUoAs%2FvfxcpR7EJj8jVmQFiPXJAtwluR0EN5sb9N7nifZ3mWwYcb%2FQBLqHAT7iHHt%2FJytqUZMZXGnSzV9hVhZYG9Gvafv0DFQ9QZ4yoA2mdFPIWqX9Q31229MygWEPYsvvWrE3udJo1FHcsONi4GipMFAB%2BPMwpxBJgGNYgOYHs%2Fl4qh0IBG3bzrCNp7evNwElo33ggiR0ZyREcHHisd8pWfxrQIy0DVr%2BKSGaaDQokUbEM0ebflPcJGPApdCzmueCn4%2BWORJ4utFXPK1znWSxZ7vci%2FW7CndoGdFynt33eG5iMLLl4b4GOqUBrYZ%2FRjWIna9WMgZWd1OVRviIiHfo3T4IhRv7UdCeW1KuFpvDwqi4w69gxgTNMkaAJsSP2X4kpN3l2abuV0tX7gwoOx8EJlSfWCe1xMteoDvydCc%2Bty2rTyUeFTdOtclLlKftWn6nE5xVHka4R3T1MwhyNIWTINvL90E7l59kT1NNdySn9GZbYwvU3Ihcj1P3UGLrSBJkmu6CLnUERzr0DEK9OEaq&X-Amz-Signature=82fc72d68c0e8d751b97ccb4d54ff7d0ed3cf4550ef019ffb925d73c60d945e4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B76NIG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZdDuN03tuHP7kxAWAcPKy69iXKrALm6fi%2FTUN%2BKCSMAiEA7MiyfvrSW0wLDIT%2B7EUUxwoBpjh6MwrFFEPzfU6mJhUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDB1TfGXImN5Z%2F2dKuSrcA73iWcMiMWPGr1L9rHnLVPKVZrJmPRNVe0NqDMyBe0pR%2FhOKZQMhG89VVKMGVAtsu05gFugUnDwh9yoDKKEySW39OB4wzAVVpVDE9417Z%2FihhRS6AnuFjamWstkNDyGkJfyr204ZRIlFesw4NyGTt%2Fe60cqvCuFTR8ZsgkOTCbq%2BY8avoBykF4xvKqWTEyJDCBh%2B8AjtEornJyjUCugiyoCWLKHmk4aa0OI3zoFzWk57LPpwZHpJ7HKAxHj0oMfkYPLNfvQ2T6kif6b05BXLJfNi9JD962RsWCoi4RWChSh1gMmwmEPfDdlUsqVlR5e1tWrrwMN22ln3gAVUoAs%2FvfxcpR7EJj8jVmQFiPXJAtwluR0EN5sb9N7nifZ3mWwYcb%2FQBLqHAT7iHHt%2FJytqUZMZXGnSzV9hVhZYG9Gvafv0DFQ9QZ4yoA2mdFPIWqX9Q31229MygWEPYsvvWrE3udJo1FHcsONi4GipMFAB%2BPMwpxBJgGNYgOYHs%2Fl4qh0IBG3bzrCNp7evNwElo33ggiR0ZyREcHHisd8pWfxrQIy0DVr%2BKSGaaDQokUbEM0ebflPcJGPApdCzmueCn4%2BWORJ4utFXPK1znWSxZ7vci%2FW7CndoGdFynt33eG5iMLLl4b4GOqUBrYZ%2FRjWIna9WMgZWd1OVRviIiHfo3T4IhRv7UdCeW1KuFpvDwqi4w69gxgTNMkaAJsSP2X4kpN3l2abuV0tX7gwoOx8EJlSfWCe1xMteoDvydCc%2Bty2rTyUeFTdOtclLlKftWn6nE5xVHka4R3T1MwhyNIWTINvL90E7l59kT1NNdySn9GZbYwvU3Ihcj1P3UGLrSBJkmu6CLnUERzr0DEK9OEaq&X-Amz-Signature=87e4608e5b77a65c9bef76cae48c39685be03869cfc3c34f367fa32e543ee4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
