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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCCDZZZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJFMEMCIBzmOvvzw0YqNKqIkHMlsz6jx1g3WVVdC2QdPwt9qv8lAh9EQBzB%2FtQHkXBXHywcJiWgkrNGhWBGrwln%2B3qCov9MKv8DCDwQABoMNjM3NDIzMTgzODA1Igx3clMs6tucAjR19Bsq3ANbkaju7qx1OmaoCVf6YMSN%2FEAm0Q0hMW3Mmqhx57WuyJXgC%2BNMM%2B5EHPW1RIQqQnvVYDPVEbH3bdWyfLsiwx%2F%2BxxQymnLhxvJq%2F7CtK668Pd41Ix%2BORUUPcWcJUYHxpNMe4dUWSbKVVn7vEtytFEqDFn%2FAIg1cjYMOLge9qohwQhWke4eBM9Rp3%2BSVBFj657OxlDKb0MSKVCyxmoFpK6JdCOYkWbAxEsT%2F%2FfEM9a1eBGhGEruvd5nwOIxXa7l4rfH%2F9JGaUhZ78AeV0IlxJ7qZpsgvnvGJL8%2FGgk%2BaBEN0x09CtF2rzcK3u7S9Vo6CzYUkYL%2FeLXHwomm2%2FNeX0vcHn4ii9S8jKJGCNxw5eY3BsHSAdS6DpsLWBByITlEoVSE4ggutUB7H3B4Lc18zRbMlt8DULNjg6AYHEE9x%2BO5%2FQ9zNnI3iFwEjFpCj6cV3RB%2Fss2O2sXQEe09ch5bvX9EuUpm65wPkNIW71Agx%2F%2FdaERaU2DDU9e9Rci7sZY6Ske%2BT6SKKPu8XLx8wwdfxQu6W3CIe%2BrNhOoTlyHsm38AImPs%2BoZGoUqGgyV1EjzVqtwW23DobYQ4wdEHWN50zraUAYVE5WrhQfiE3iuVB7vc3J7WUVWbT9hgmQast%2BjDliYTCBjqnAWrifaCMFTAGKuq8jyIoxBc3%2B2rq9Nb4t5Kr0GBOys%2BA0zX4OjgJ%2BmX%2FQ1CqrVXDpS3SelhuBYDYMu4FYPfnTpouTjbvnOCkVH%2F38keVZp1Dd1lgsLaN4Pcgwlm4WEX0X9GgaIzmUyj2%2Fr3RSUKhSBWd3fL40T5ggoAgh6rBpM7K1d6e29200Sm7jnaBW3I5xHze3rcc6Izfqi%2FnbhG9riUopnAzNCHo&X-Amz-Signature=77ee0cca53902a45d0b6bdb4f65ef80fd3520eeb6376709abf05fee3b2a63ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NCCDZZZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJFMEMCIBzmOvvzw0YqNKqIkHMlsz6jx1g3WVVdC2QdPwt9qv8lAh9EQBzB%2FtQHkXBXHywcJiWgkrNGhWBGrwln%2B3qCov9MKv8DCDwQABoMNjM3NDIzMTgzODA1Igx3clMs6tucAjR19Bsq3ANbkaju7qx1OmaoCVf6YMSN%2FEAm0Q0hMW3Mmqhx57WuyJXgC%2BNMM%2B5EHPW1RIQqQnvVYDPVEbH3bdWyfLsiwx%2F%2BxxQymnLhxvJq%2F7CtK668Pd41Ix%2BORUUPcWcJUYHxpNMe4dUWSbKVVn7vEtytFEqDFn%2FAIg1cjYMOLge9qohwQhWke4eBM9Rp3%2BSVBFj657OxlDKb0MSKVCyxmoFpK6JdCOYkWbAxEsT%2F%2FfEM9a1eBGhGEruvd5nwOIxXa7l4rfH%2F9JGaUhZ78AeV0IlxJ7qZpsgvnvGJL8%2FGgk%2BaBEN0x09CtF2rzcK3u7S9Vo6CzYUkYL%2FeLXHwomm2%2FNeX0vcHn4ii9S8jKJGCNxw5eY3BsHSAdS6DpsLWBByITlEoVSE4ggutUB7H3B4Lc18zRbMlt8DULNjg6AYHEE9x%2BO5%2FQ9zNnI3iFwEjFpCj6cV3RB%2Fss2O2sXQEe09ch5bvX9EuUpm65wPkNIW71Agx%2F%2FdaERaU2DDU9e9Rci7sZY6Ske%2BT6SKKPu8XLx8wwdfxQu6W3CIe%2BrNhOoTlyHsm38AImPs%2BoZGoUqGgyV1EjzVqtwW23DobYQ4wdEHWN50zraUAYVE5WrhQfiE3iuVB7vc3J7WUVWbT9hgmQast%2BjDliYTCBjqnAWrifaCMFTAGKuq8jyIoxBc3%2B2rq9Nb4t5Kr0GBOys%2BA0zX4OjgJ%2BmX%2FQ1CqrVXDpS3SelhuBYDYMu4FYPfnTpouTjbvnOCkVH%2F38keVZp1Dd1lgsLaN4Pcgwlm4WEX0X9GgaIzmUyj2%2Fr3RSUKhSBWd3fL40T5ggoAgh6rBpM7K1d6e29200Sm7jnaBW3I5xHze3rcc6Izfqi%2FnbhG9riUopnAzNCHo&X-Amz-Signature=829f42b3c34aa09fbafcdeb53ad73f4c277923b4be2c457c50626cf3e2723d62&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
