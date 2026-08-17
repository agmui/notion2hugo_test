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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I3HOSB%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCID13fEXFiiYdcvxZA%2F3MfXV5tOKk%2FQFOQVWCmmPe%2FB%2FHAiBfq8GiCd3TiMt8C3kxcfuypt4E1F%2Bh9YeztGx0GnlabCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIML4Y8PGnjhCmyjOz6KtwDNQ4ecYDeUL7JHAupPP%2BUzbOUDnArDMs0m6ApXtwV1FTmGrMHp8OgmZ%2FI8ahHgl4hz5jZr%2BC7CZq6rr7SMEc1TL%2B68gYXRy5PebDB4Bd9PemPunx%2FzIC4a1eots7Am2ufU2kJBCXmk%2B%2BhK3qxGKM4ARd%2BzOWBnHKnk%2FQDgGwpEMTiRjLw8%2BdcFlyiBe0y5zSt24d0ZINISVYTdQVriK6DGL%2F3ZdoAf5rX3zfF%2BcWE6008pDPlVs2Ml3B2WVfRPu7D5xqRIaSZm7poA0vHj7N2zfznnMC3fHRdda9DGfY%2FPYy%2BT12nRXE1Oa56vm0zviiSTfaRa4TMp6zl1l8PfuIgHUSnDIGBA%2FfyCegc9V%2BOSGAO44j86gBw3CMt2neskwnxPYP4obZbAWUojGcghNQTG9RTiVVAdK9zQKNwnTKx5VHDpCw%2FX0PD59ol%2F9mkc0JHUiOHhIRbeXuiM8TH%2BxqrvFFYhF2azJT%2FBkZzmWL1GsbfAmB8x5mVtuqyErNprz2jgKNkBq4%2BwqGdVjScSQ%2FQEZR6gpsIAoywJdwSn17d50RlSKc9CUB5VFU6LxQNVQpGOHeKsBTaKGnPqyLa7rMAtzlbNE0vVoMJTbuGq3vVFhxPORej9XOU0Smi2o0wja6J1AY6pgEveNysacjkXLZPYlLjgHG7WP%2FxKWqOMMMuDm%2Fka%2BKW6mjuS5fXvv%2FrHKVGvjSUhV%2FpguGaukv5bJ8HM2if%2FbwdlST5Lqz2bZPYPT6v2xnGLb%2FrAJaNW0YhOzRcSkoX4i7FBFR%2FLlEF3yf8rLYIlDbO53xjA3sisSkFbiWISmzpO6It5EQpZIEPngTibiTLaq4ofc%2BPvLEJwMUQaBn5d7znf%2BlpkkIb&X-Amz-Signature=1dff07c2dbd4878607ec5a150ea041901c683b705ee1029ac150b08e1cf7ab54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7I3HOSB%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCID13fEXFiiYdcvxZA%2F3MfXV5tOKk%2FQFOQVWCmmPe%2FB%2FHAiBfq8GiCd3TiMt8C3kxcfuypt4E1F%2Bh9YeztGx0GnlabCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIML4Y8PGnjhCmyjOz6KtwDNQ4ecYDeUL7JHAupPP%2BUzbOUDnArDMs0m6ApXtwV1FTmGrMHp8OgmZ%2FI8ahHgl4hz5jZr%2BC7CZq6rr7SMEc1TL%2B68gYXRy5PebDB4Bd9PemPunx%2FzIC4a1eots7Am2ufU2kJBCXmk%2B%2BhK3qxGKM4ARd%2BzOWBnHKnk%2FQDgGwpEMTiRjLw8%2BdcFlyiBe0y5zSt24d0ZINISVYTdQVriK6DGL%2F3ZdoAf5rX3zfF%2BcWE6008pDPlVs2Ml3B2WVfRPu7D5xqRIaSZm7poA0vHj7N2zfznnMC3fHRdda9DGfY%2FPYy%2BT12nRXE1Oa56vm0zviiSTfaRa4TMp6zl1l8PfuIgHUSnDIGBA%2FfyCegc9V%2BOSGAO44j86gBw3CMt2neskwnxPYP4obZbAWUojGcghNQTG9RTiVVAdK9zQKNwnTKx5VHDpCw%2FX0PD59ol%2F9mkc0JHUiOHhIRbeXuiM8TH%2BxqrvFFYhF2azJT%2FBkZzmWL1GsbfAmB8x5mVtuqyErNprz2jgKNkBq4%2BwqGdVjScSQ%2FQEZR6gpsIAoywJdwSn17d50RlSKc9CUB5VFU6LxQNVQpGOHeKsBTaKGnPqyLa7rMAtzlbNE0vVoMJTbuGq3vVFhxPORej9XOU0Smi2o0wja6J1AY6pgEveNysacjkXLZPYlLjgHG7WP%2FxKWqOMMMuDm%2Fka%2BKW6mjuS5fXvv%2FrHKVGvjSUhV%2FpguGaukv5bJ8HM2if%2FbwdlST5Lqz2bZPYPT6v2xnGLb%2FrAJaNW0YhOzRcSkoX4i7FBFR%2FLlEF3yf8rLYIlDbO53xjA3sisSkFbiWISmzpO6It5EQpZIEPngTibiTLaq4ofc%2BPvLEJwMUQaBn5d7znf%2BlpkkIb&X-Amz-Signature=0685c93ac6647646a425e1f89ee4d2d4236aefc5d4409e1bac2db86acd453714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
