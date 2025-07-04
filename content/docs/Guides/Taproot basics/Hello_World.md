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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPXC5OY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGQvITM2FFgj%2B53m%2Brtihdphfvt3et%2FcFRL%2BK0Xft1kxAiEAj2ZxdGV8LmE0gCxtqd5iHQAwKEiJ9acQRHFV6jnJ9rEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEjINCjLJ7ASZrOdRircA66NYqY6EpEq8t3TGTv8AdkJ9ail4c3f%2BwtHG1XZeCThO4Ii%2Ffu5QDHnI1v3fi5%2BrgKTAd1ydCA%2BQckA0kg%2FBDi%2BJabmzdl7ashfwcJ9YLdNzT3KzBwtHj2g9ek9yCu9taqcAEX5ngShIa4JSjwAUhweYOaKaE%2FhUeub3ItuVFmvLXpUeLgLU%2FpWktw8jqnvgaRVkSs87YAm%2BnfyKXanmUb7wZmwez%2BLVuHbUQ6chQK%2BXNVe1ZOW8bnR1psGK%2F9rOmL24ULo1RSmZfoMFIiAAeW8Dj8GmhW1LPJOSiNv1V4NEuNDBzySd6vGtbKaLvTlk0jP%2BnxIowarm2fM%2Bo5gIsyUepNI9IylZ%2FIT8z6XrKvRMoc6UconpIoWNeYLiKPKgqtZ%2FsmNdJaANgqseH3JrnLKILc2ZNLPzQPqtNPk8j8Zpm4xKzjSqTLutt2AzB%2FIsXiiK7S450J597WGHU%2FHM6p9jWayxeQeUQt1vOMVIRpszBGVulbOBcVqG08FA1qFXnCp%2FggHOnzvEkS44n13JtvWx7Naybsxrz7bBoEn87y%2Bif6pHO3ufOBQLkoruSuZ6R6M%2F5Q1iZDB%2Fpj8xguVxl1Tla1pr2OcxOpwqkhY2Eh1cRwsX9WobHITktFhMMONnsMGOqUBzw28HcWfZ929o9g7zJUAJBkRSWKm8x%2BmKLg0DH6Qrzh%2Fgy6DFyE3ObOXjHNJj1bXrw8Zk2UsAuk25ZoNDdutl6upbKtBjHpT3JGUBmMXpDNdumixEtprnm0SHWLteY30GtbHc9fXSwJgkH5kwB6MWnMVivEEcDhEU63Sxia7L%2Bm43Gajl7ImrK%2FKcfmfsxOiGuz3noHsdD9i6Yl6vxIRo%2FtrraFX&X-Amz-Signature=d2ceb505c949592192e77e942a501fb8da0c9dfa753110f329ff46c21fc697da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLPXC5OY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGQvITM2FFgj%2B53m%2Brtihdphfvt3et%2FcFRL%2BK0Xft1kxAiEAj2ZxdGV8LmE0gCxtqd5iHQAwKEiJ9acQRHFV6jnJ9rEq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEjINCjLJ7ASZrOdRircA66NYqY6EpEq8t3TGTv8AdkJ9ail4c3f%2BwtHG1XZeCThO4Ii%2Ffu5QDHnI1v3fi5%2BrgKTAd1ydCA%2BQckA0kg%2FBDi%2BJabmzdl7ashfwcJ9YLdNzT3KzBwtHj2g9ek9yCu9taqcAEX5ngShIa4JSjwAUhweYOaKaE%2FhUeub3ItuVFmvLXpUeLgLU%2FpWktw8jqnvgaRVkSs87YAm%2BnfyKXanmUb7wZmwez%2BLVuHbUQ6chQK%2BXNVe1ZOW8bnR1psGK%2F9rOmL24ULo1RSmZfoMFIiAAeW8Dj8GmhW1LPJOSiNv1V4NEuNDBzySd6vGtbKaLvTlk0jP%2BnxIowarm2fM%2Bo5gIsyUepNI9IylZ%2FIT8z6XrKvRMoc6UconpIoWNeYLiKPKgqtZ%2FsmNdJaANgqseH3JrnLKILc2ZNLPzQPqtNPk8j8Zpm4xKzjSqTLutt2AzB%2FIsXiiK7S450J597WGHU%2FHM6p9jWayxeQeUQt1vOMVIRpszBGVulbOBcVqG08FA1qFXnCp%2FggHOnzvEkS44n13JtvWx7Naybsxrz7bBoEn87y%2Bif6pHO3ufOBQLkoruSuZ6R6M%2F5Q1iZDB%2Fpj8xguVxl1Tla1pr2OcxOpwqkhY2Eh1cRwsX9WobHITktFhMMONnsMGOqUBzw28HcWfZ929o9g7zJUAJBkRSWKm8x%2BmKLg0DH6Qrzh%2Fgy6DFyE3ObOXjHNJj1bXrw8Zk2UsAuk25ZoNDdutl6upbKtBjHpT3JGUBmMXpDNdumixEtprnm0SHWLteY30GtbHc9fXSwJgkH5kwB6MWnMVivEEcDhEU63Sxia7L%2Bm43Gajl7ImrK%2FKcfmfsxOiGuz3noHsdD9i6Yl6vxIRo%2FtrraFX&X-Amz-Signature=fb2648d4ff4808fd620a88eac7ee83471a59f3ba8c8e0a091c9f297c53abdf83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
