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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T54GPQD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIERaIdCy9DA1hSdApXJcAZzKX1pnTeXLmKDL9P%2FRrtgEAiAWexhJVJezGySqSsNfCDRKLY735j41m98wBx4U5wJorCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0knqrR3QeltskYP8KtwDsIye3%2BGPsLg7xwuWqJwERM2ip5JGG%2FDsCsxAOTVsp7LWNcarx4jNibenOL2V07Hz8XdKU7QoUP%2FL3DMxIbp4L9dSxrYt7ygdWDWYF5du4DFtBGVOVd5VXl0k1xV2SG9TkxjiqfzaCJuv19RJlOk6eSKTtT4PKB%2B7iLyVIvmocFIpe2E7eR96uhu1r%2F691rZYq1B8MKXwLrnRSptw%2F7QrwakK2gB%2FkgmJhLwLI%2Bhj8tx2XTxKN%2Bei9HTVKv5c%2FhDlNr3MhL%2FTD%2FDsdKTLr2iVwFLfturOb0V1ZEF5i9XIUWnaNPebI4L0Y%2F178%2BmLNgWN1Nj2%2FffOqb%2FL0meDsuhb8pNBK6av7SZ2QU9%2FeCAr2RBRoI010aqajoKLu3e75EWwdqDiB3pTQgjrJfBvc11ik2XOV6HnNEfXNopCD7481ZQ8sUGpFPBeQUDoMa%2BPk2YwVwmx1NHzY8nGQWMC7j0WeyuNGiIpOqPT4or5Yv%2FHhQs%2BU%2B2Rrub6SDm5j2fwMEb%2BR13lea1VGWlM6CdyWFl0KEEDjxwORiomoLDYq6nEHGJ%2FiGJmJ7twdZM9p0VilB4EScinwbctgpsp%2FztcmnM7HHKK%2BqxogWRbisWpDQbTBD2aCdDxcKkq2C%2BGM6ww0eCvvgY6pgHb%2BVrPEqOtUjJM3e1N1Pecy3iuQ%2BvTyZ9syH7SKuJ%2FMW0cMr7US%2BS7gGBi%2F%2F85A8goUq8KemahwiNF8gKp%2FqW6O76borR7M8iW3ch5Jw5sgF4qxnIrdgk8B1q63n9xivROajI9SRYF04%2B4mNB97EhVNmlNXUs3%2BmWmVv%2F%2F%2FoF0%2Flcx3tzUHUNiKVi4fHUnw7omOMuxC3fp%2FUgK%2Fyt%2FVceXAkzHHZkr&X-Amz-Signature=86174554c348f4cee0a83c71d30488f6469291545f3d99036e9f13b2d0b14236&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T54GPQD%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIERaIdCy9DA1hSdApXJcAZzKX1pnTeXLmKDL9P%2FRrtgEAiAWexhJVJezGySqSsNfCDRKLY735j41m98wBx4U5wJorCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM0knqrR3QeltskYP8KtwDsIye3%2BGPsLg7xwuWqJwERM2ip5JGG%2FDsCsxAOTVsp7LWNcarx4jNibenOL2V07Hz8XdKU7QoUP%2FL3DMxIbp4L9dSxrYt7ygdWDWYF5du4DFtBGVOVd5VXl0k1xV2SG9TkxjiqfzaCJuv19RJlOk6eSKTtT4PKB%2B7iLyVIvmocFIpe2E7eR96uhu1r%2F691rZYq1B8MKXwLrnRSptw%2F7QrwakK2gB%2FkgmJhLwLI%2Bhj8tx2XTxKN%2Bei9HTVKv5c%2FhDlNr3MhL%2FTD%2FDsdKTLr2iVwFLfturOb0V1ZEF5i9XIUWnaNPebI4L0Y%2F178%2BmLNgWN1Nj2%2FffOqb%2FL0meDsuhb8pNBK6av7SZ2QU9%2FeCAr2RBRoI010aqajoKLu3e75EWwdqDiB3pTQgjrJfBvc11ik2XOV6HnNEfXNopCD7481ZQ8sUGpFPBeQUDoMa%2BPk2YwVwmx1NHzY8nGQWMC7j0WeyuNGiIpOqPT4or5Yv%2FHhQs%2BU%2B2Rrub6SDm5j2fwMEb%2BR13lea1VGWlM6CdyWFl0KEEDjxwORiomoLDYq6nEHGJ%2FiGJmJ7twdZM9p0VilB4EScinwbctgpsp%2FztcmnM7HHKK%2BqxogWRbisWpDQbTBD2aCdDxcKkq2C%2BGM6ww0eCvvgY6pgHb%2BVrPEqOtUjJM3e1N1Pecy3iuQ%2BvTyZ9syH7SKuJ%2FMW0cMr7US%2BS7gGBi%2F%2F85A8goUq8KemahwiNF8gKp%2FqW6O76borR7M8iW3ch5Jw5sgF4qxnIrdgk8B1q63n9xivROajI9SRYF04%2B4mNB97EhVNmlNXUs3%2BmWmVv%2F%2F%2FoF0%2Flcx3tzUHUNiKVi4fHUnw7omOMuxC3fp%2FUgK%2Fyt%2FVceXAkzHHZkr&X-Amz-Signature=c41a2e084f34ffbbca6f1646359686561afa69736ed18d1acadd6f4747ad28be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
