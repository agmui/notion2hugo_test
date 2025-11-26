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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNJI776%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F%2B3tchXyn%2F0OTLfgZGMqw4ph2Bkg2%2BjrS7tUr9Jl%2FoAiEAlb4B0IgyRYs6R7ANEDCE8bGTiCjKZ7JYTAyl0AzL0SEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJCCsLbwd3QPZtvP0ircAx1Pz5%2Bs57Y4aksZc9U1GvWxM5zlY5IN6o7bAF8Frzsb6hlRLqvdyItP2ZoiWj%2Bq7sYlLGjC38dDwM%2B3pdQUp%2FzJ0AmKMINPDp57KFdXFysrlDjr87%2Fr%2FH7xp10dhw74Tj0FjjnUHrRcikTZZGgB1nVOyYtbyfym9m0HzG64x40shddppkGRXxl7NyDI0%2B6agFKuo7yS99H0UM%2FI8s%2Fh4hSlJDpyk%2FZt3EkBbmueHfLHqV7QjZGFpLpIjqrHZ12S95djlMTtSnrvag99jQvG4hTKnshgIT5ZbSbnw0WUdYm2TS%2BjiAUN3tsj6fdfHpS%2FRmZzLUZSEy1WMEgUZ8uaewP%2BIstdO5V6gyH7ckvb6A1Yt3aCwAFIzMwQhn9XNfcf32FCsBADSlrhRplk7Zs2JeTX%2BVmKvp2xr9jJBDcECDJyY3GyOQhKqHflxzUEQXGJBiLYpBv335rtJIovmStyC%2F4VQvoUK4hPYnGB72w%2Bt8MlDPjfs9QyUG5RCJSMR3%2BGC3m8Lg2a7CrC0gfkMR0tq4EG8Mc9lxl8sD9LwpfKERBIZlKOPFndSa4ArtNOswDYN4d%2Bm717jxH5uWXhRmKnit63pTJ8oEI1wyeVHI7DtP8kpgElZBOCim4CubwpMLWxmckGOqUB2qohyGpwBq41LC4DIGRnylbXLQ12x%2Fsmx%2Bn2XvdiFFBOuE9XNpuZ9t0aqdmMeBWTIMJGPx18oKFjQX%2Bc4LYOoer8q252bjfxtu%2BoJIuIyjv%2BoRSDF6klKP3ipSBFKtxWbbE%2F01fQxdAlva4SCVoJ%2B8jDoRDzGdiFjcSwd8NbLoRSHlzkLNCeUo1n703m5m4CCjkBXMnyZ%2BUvAkJoeBYRd6PY8TYI&X-Amz-Signature=85281c420ebd13ca29293aa922ff757adef9790b064cf87f4bf7d7c6a5494a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNJI776%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F%2B3tchXyn%2F0OTLfgZGMqw4ph2Bkg2%2BjrS7tUr9Jl%2FoAiEAlb4B0IgyRYs6R7ANEDCE8bGTiCjKZ7JYTAyl0AzL0SEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJCCsLbwd3QPZtvP0ircAx1Pz5%2Bs57Y4aksZc9U1GvWxM5zlY5IN6o7bAF8Frzsb6hlRLqvdyItP2ZoiWj%2Bq7sYlLGjC38dDwM%2B3pdQUp%2FzJ0AmKMINPDp57KFdXFysrlDjr87%2Fr%2FH7xp10dhw74Tj0FjjnUHrRcikTZZGgB1nVOyYtbyfym9m0HzG64x40shddppkGRXxl7NyDI0%2B6agFKuo7yS99H0UM%2FI8s%2Fh4hSlJDpyk%2FZt3EkBbmueHfLHqV7QjZGFpLpIjqrHZ12S95djlMTtSnrvag99jQvG4hTKnshgIT5ZbSbnw0WUdYm2TS%2BjiAUN3tsj6fdfHpS%2FRmZzLUZSEy1WMEgUZ8uaewP%2BIstdO5V6gyH7ckvb6A1Yt3aCwAFIzMwQhn9XNfcf32FCsBADSlrhRplk7Zs2JeTX%2BVmKvp2xr9jJBDcECDJyY3GyOQhKqHflxzUEQXGJBiLYpBv335rtJIovmStyC%2F4VQvoUK4hPYnGB72w%2Bt8MlDPjfs9QyUG5RCJSMR3%2BGC3m8Lg2a7CrC0gfkMR0tq4EG8Mc9lxl8sD9LwpfKERBIZlKOPFndSa4ArtNOswDYN4d%2Bm717jxH5uWXhRmKnit63pTJ8oEI1wyeVHI7DtP8kpgElZBOCim4CubwpMLWxmckGOqUB2qohyGpwBq41LC4DIGRnylbXLQ12x%2Fsmx%2Bn2XvdiFFBOuE9XNpuZ9t0aqdmMeBWTIMJGPx18oKFjQX%2Bc4LYOoer8q252bjfxtu%2BoJIuIyjv%2BoRSDF6klKP3ipSBFKtxWbbE%2F01fQxdAlva4SCVoJ%2B8jDoRDzGdiFjcSwd8NbLoRSHlzkLNCeUo1n703m5m4CCjkBXMnyZ%2BUvAkJoeBYRd6PY8TYI&X-Amz-Signature=b2b4bf07084e56f5a688fe6d2fe6953b886ae19d90ea9b37b6bafd0c4412ce18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
