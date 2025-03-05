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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDJ66WR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaH2RvmLH5voHt2bKAEhiIdud4TQ7OBABtv%2Baj3%2BruYAIgITx8IyOgj0KG3fkRpy9eemUNgVj3N41ZHKIuhXK9tuEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKp7mApzFJwzLpbykyrcA6kUmpNMan0AqdxBRb0KB2YdJuRhbY0P41BiqhH35aivAzLDrvmk81%2FHIcJAfKsqiMGT6W1zLCqA%2Bf3Z89ToJhrInaN3md%2BqqAZFJFmn7RPENK69Qz%2FyrPUJ0JZPn41gHeVn%2FryM22LrXU%2FqjFcPMoxhUL%2B63PSunEQIyXhvUoDboG2%2F4NkfN7tjb64djIelTU3xrFfrCyUFNbl3GjtU%2BN1L6LmsNbP%2Bc1JASeBIj4RzcdG%2FqqKj7CRAB1xxC%2B6RtgMgdnL8%2BS6CeIon2Iq%2B%2BUGMIKrG5xBMSIx2lRHnYesRvcp2DpsK6uxqXRM8qgRxGYU0ZJz4Qha1T5Tv5ywnViyh1M0GV78pT04qx3HY1hfgoC5ZatF8SJPEdx04G3ZszvG8Y%2FzRT%2Fd39sqRyl2%2FW%2Fjpw0dqSCPDtmrUt3xjupOdFigUqTjNl9xYcWRgsJC28q5JJ3E3zpP8%2BrGXB7ZuhoqTx4MBF%2FxnEH%2BKPkgR8MV%2FO%2FthyHQ%2FkCF1y9hpp6u%2FQ0dRgrCS%2BzjHVCF2CBvp8qQuHu%2BTE2qUgOWfDamlX6BB5U1co8ciegjWQmN3u38M3oijrGBerw%2BrjDRZyxSzflepQ5epaRAdC3AdtLSBltK0aSMfxYCUvqTb6qHeMJXSoL4GOqUBY2TZuHrBKe4MqrmhtbHL1Phlez9t6ElZwv60Pp964o9oNvnKX1xySHYnKY6EHAeESVtDV9rSJdbz%2BPrff9ZtA7iyQzW6ZstxtQLCWaUhB9JdxTdUaZI%2FJfstRe6rgSO0amq%2F5GAEo8K7NMWGMyJbyGbTlrbgrBXCTirjmkUcTW8hHnkHqJHoi4ufwCQ%2BkIA2m2HLoikbcTRWC7KkU2vkFBU4PkH6&X-Amz-Signature=2d91e13cd55331e97c7754dd01e5c72f672788a6ab0e4b675798d046768453f0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EDJ66WR%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaH2RvmLH5voHt2bKAEhiIdud4TQ7OBABtv%2Baj3%2BruYAIgITx8IyOgj0KG3fkRpy9eemUNgVj3N41ZHKIuhXK9tuEq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKp7mApzFJwzLpbykyrcA6kUmpNMan0AqdxBRb0KB2YdJuRhbY0P41BiqhH35aivAzLDrvmk81%2FHIcJAfKsqiMGT6W1zLCqA%2Bf3Z89ToJhrInaN3md%2BqqAZFJFmn7RPENK69Qz%2FyrPUJ0JZPn41gHeVn%2FryM22LrXU%2FqjFcPMoxhUL%2B63PSunEQIyXhvUoDboG2%2F4NkfN7tjb64djIelTU3xrFfrCyUFNbl3GjtU%2BN1L6LmsNbP%2Bc1JASeBIj4RzcdG%2FqqKj7CRAB1xxC%2B6RtgMgdnL8%2BS6CeIon2Iq%2B%2BUGMIKrG5xBMSIx2lRHnYesRvcp2DpsK6uxqXRM8qgRxGYU0ZJz4Qha1T5Tv5ywnViyh1M0GV78pT04qx3HY1hfgoC5ZatF8SJPEdx04G3ZszvG8Y%2FzRT%2Fd39sqRyl2%2FW%2Fjpw0dqSCPDtmrUt3xjupOdFigUqTjNl9xYcWRgsJC28q5JJ3E3zpP8%2BrGXB7ZuhoqTx4MBF%2FxnEH%2BKPkgR8MV%2FO%2FthyHQ%2FkCF1y9hpp6u%2FQ0dRgrCS%2BzjHVCF2CBvp8qQuHu%2BTE2qUgOWfDamlX6BB5U1co8ciegjWQmN3u38M3oijrGBerw%2BrjDRZyxSzflepQ5epaRAdC3AdtLSBltK0aSMfxYCUvqTb6qHeMJXSoL4GOqUBY2TZuHrBKe4MqrmhtbHL1Phlez9t6ElZwv60Pp964o9oNvnKX1xySHYnKY6EHAeESVtDV9rSJdbz%2BPrff9ZtA7iyQzW6ZstxtQLCWaUhB9JdxTdUaZI%2FJfstRe6rgSO0amq%2F5GAEo8K7NMWGMyJbyGbTlrbgrBXCTirjmkUcTW8hHnkHqJHoi4ufwCQ%2BkIA2m2HLoikbcTRWC7KkU2vkFBU4PkH6&X-Amz-Signature=1ea95ecf553df709ca584f5376b320e58b8720f83179e208234261a9476baea2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
