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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFVD5YG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAkSFHCmQLqnvhC2ejCaQFOX%2Fe4qN3gnb1fMyWz5cuq9AiAac6H%2Fn4xMZl46y4LWdVBkbjXKDenJpgD3Ex0xETTFECr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMp%2F2gbl%2B8PeAABTuuKtwD0nDu0Jb3muoUWkkOgVjRi3DT5xqmeNzG8wyzqihwNSl5hCZdXnN4IVClbWYOLuDSHrpk%2FpedtqeV3SNBFZ4BQizft90I00W8eg9uljJZrIeVo%2FRCvkUA5h5cnzFyAp2CbBgdy6%2Bg5BxQbWCzIpOFnjsqm6vgKnHQftPjo53R5X9tAhggX45GuA2Ke0v%2F4u6uSrQx7gWZdhTb4RRSW0szx9Tu3lDsDamgcZR8sH3%2FF%2BdAzxgMMGFbHzBXvFqVbU2wubLO4b4vJxFK4EddoFizOVkS5PIiuZgBAnfWNgS3qGShLXIxu03HPEKWMA%2Bkc3MBc8VvSKs27IX%2BDboyi6rUNXmWPtOvGYzT2iPn%2BlGukFhJIWGczc3d8YxJ%2BdeBJD63OShf8FTDvEQDQ47AsEqgQATC2oJn6zOpqCPZlXUySu7lPt8UehrFbAwOgaBCS7IkD7sGln%2BHzL4DtxVZv3iw4HiepvEqErKnM2IqrIqC%2BTKf5TZJcRkoPqA51v92LATprB1LmWW4Lepez8lregZ%2BquOF%2BDavh5gPBl2GQNo2lBvn57yDKpwi497NgOpFUcBwuOKHkDP7TCSv66UNC6xM2eUjFyG1n7FSQ7u1Y9UqILmv%2F4b7iQz2xhcYbGsw6puVvQY6pgEBJD80rH9ZpECyArjEn9HBFhj4WgWoY5%2F6Rw3uC%2BKnRppJEBgLANIAPdfHv%2FlIu1sSa%2FhepKQLeMP66SK4gSujL6rFkAQ4mPxlLDrIav%2Fe5HF45ms75WLr8sELVeeq0Og9sHo1hXJ7Pob82SjP3d3iaOISni8%2BEXJ5PUTW7IE5CU%2FrCKfmNeAI5vxJn4jPJ5lT2Z%2FGmsvF8DepN6%2BzEoMUzDi%2BmJoW&X-Amz-Signature=efad908d4847eb7337e7943331615c029cfc55c197a042d0a613002d2c8b66db&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BFVD5YG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAkSFHCmQLqnvhC2ejCaQFOX%2Fe4qN3gnb1fMyWz5cuq9AiAac6H%2Fn4xMZl46y4LWdVBkbjXKDenJpgD3Ex0xETTFECr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMp%2F2gbl%2B8PeAABTuuKtwD0nDu0Jb3muoUWkkOgVjRi3DT5xqmeNzG8wyzqihwNSl5hCZdXnN4IVClbWYOLuDSHrpk%2FpedtqeV3SNBFZ4BQizft90I00W8eg9uljJZrIeVo%2FRCvkUA5h5cnzFyAp2CbBgdy6%2Bg5BxQbWCzIpOFnjsqm6vgKnHQftPjo53R5X9tAhggX45GuA2Ke0v%2F4u6uSrQx7gWZdhTb4RRSW0szx9Tu3lDsDamgcZR8sH3%2FF%2BdAzxgMMGFbHzBXvFqVbU2wubLO4b4vJxFK4EddoFizOVkS5PIiuZgBAnfWNgS3qGShLXIxu03HPEKWMA%2Bkc3MBc8VvSKs27IX%2BDboyi6rUNXmWPtOvGYzT2iPn%2BlGukFhJIWGczc3d8YxJ%2BdeBJD63OShf8FTDvEQDQ47AsEqgQATC2oJn6zOpqCPZlXUySu7lPt8UehrFbAwOgaBCS7IkD7sGln%2BHzL4DtxVZv3iw4HiepvEqErKnM2IqrIqC%2BTKf5TZJcRkoPqA51v92LATprB1LmWW4Lepez8lregZ%2BquOF%2BDavh5gPBl2GQNo2lBvn57yDKpwi497NgOpFUcBwuOKHkDP7TCSv66UNC6xM2eUjFyG1n7FSQ7u1Y9UqILmv%2F4b7iQz2xhcYbGsw6puVvQY6pgEBJD80rH9ZpECyArjEn9HBFhj4WgWoY5%2F6Rw3uC%2BKnRppJEBgLANIAPdfHv%2FlIu1sSa%2FhepKQLeMP66SK4gSujL6rFkAQ4mPxlLDrIav%2Fe5HF45ms75WLr8sELVeeq0Og9sHo1hXJ7Pob82SjP3d3iaOISni8%2BEXJ5PUTW7IE5CU%2FrCKfmNeAI5vxJn4jPJ5lT2Z%2FGmsvF8DepN6%2BzEoMUzDi%2BmJoW&X-Amz-Signature=43f598bb4125b94e2d61bb2658e9514e4300ebfb4e71670d786ce6bd07f22847&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
