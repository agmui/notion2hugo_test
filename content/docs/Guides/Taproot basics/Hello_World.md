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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAGB7DK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCcBuHj6WTD0z4fXId9dgXsZGgPEAb%2BoPs08khgnvLn%2BwIgc0y7ekfhuPo8ZXqvWaLs802cEm1l9ROuvHPPQl51G1oqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOC0LZQsBdirZ11NircA2S%2FewdEGNIvYSu3jKbijyJyX3rVBPXkKb7%2B0RxZfnSOJU1u4mB8nzQNdcGsmZS9MDCSRYN1wzgNjTzk2yrYmucIPhN%2FUNmTpEXK2r9QtqD81VBmV0DEnp2pPuyMquy0Kg%2Foo3Hf7Kjai3CTutzSJ5IdigTVKUU8A%2BH0OrJajy8Zdzzx3qNeK7jZjw3D2bhZve1FFmBkUW%2FbhLZF1il%2BUqA%2B%2FxSktWDxlRpOk9tbWnyYT%2FC0HmiPxmBI8spINQ6mWCUScgTlqYOYnIpp8BKwsjPp0y7VTT9rh%2B%2F3z1kiF%2F8YYkNxQWwzNfnQz2aCCYqtk73qDTD28jLNwq1%2BWZ9m42FRYjnFgmAh77aA48npniHYpB940k0EooYrEAUYYO157Rr%2FjDrPiTLecUu%2FGSM0EuufvQF2%2FhpbRQt8f94x4gf1PoD87RIar2ZGL9SSM30eTuA95ue37nLFmDnFbMC8ERc5B3dnQrKvwsnr7ulWTtJAigufJK5NEAMaL%2B%2B7TPX5Ii17NTWozQcJVuOsSzi%2FZhwprtkDw3rg1hBZVvALN0OeEqURzzc3ZhR98MaW3T2RY52P9LbXXFbXqkMnoua2B7iL%2FUUgEPOicbHAMryza1TjvCL8Wg1cTX31NxoPMLnj278GOqUBOMqr6xS8L3f2YiFrKdR9QxezIDk%2FT0RsC0FJWmLV11rg2vtwgCeM8clmopy3BK6dR8zNIE4wqOipWneb1y9isxLHrK2L8ORMpQhH8YPhZAYs2e%2FKTGLhjl6PG9at7E1qErK6SfQ7m%2Fbi3%2B9sRdIrDZzmN%2BAhnec%2Fop2%2B3d5Hoo5OtjgxUe2Pos61FIqm7Ys5GT%2Flw8eUP%2FxpnA9NpuFEcEoTsSN5&X-Amz-Signature=a310a5cd317a72d387c54a6ee193713bfe2e55ca42617c7ae166fc663cf794b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZAGB7DK%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCcBuHj6WTD0z4fXId9dgXsZGgPEAb%2BoPs08khgnvLn%2BwIgc0y7ekfhuPo8ZXqvWaLs802cEm1l9ROuvHPPQl51G1oqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOC0LZQsBdirZ11NircA2S%2FewdEGNIvYSu3jKbijyJyX3rVBPXkKb7%2B0RxZfnSOJU1u4mB8nzQNdcGsmZS9MDCSRYN1wzgNjTzk2yrYmucIPhN%2FUNmTpEXK2r9QtqD81VBmV0DEnp2pPuyMquy0Kg%2Foo3Hf7Kjai3CTutzSJ5IdigTVKUU8A%2BH0OrJajy8Zdzzx3qNeK7jZjw3D2bhZve1FFmBkUW%2FbhLZF1il%2BUqA%2B%2FxSktWDxlRpOk9tbWnyYT%2FC0HmiPxmBI8spINQ6mWCUScgTlqYOYnIpp8BKwsjPp0y7VTT9rh%2B%2F3z1kiF%2F8YYkNxQWwzNfnQz2aCCYqtk73qDTD28jLNwq1%2BWZ9m42FRYjnFgmAh77aA48npniHYpB940k0EooYrEAUYYO157Rr%2FjDrPiTLecUu%2FGSM0EuufvQF2%2FhpbRQt8f94x4gf1PoD87RIar2ZGL9SSM30eTuA95ue37nLFmDnFbMC8ERc5B3dnQrKvwsnr7ulWTtJAigufJK5NEAMaL%2B%2B7TPX5Ii17NTWozQcJVuOsSzi%2FZhwprtkDw3rg1hBZVvALN0OeEqURzzc3ZhR98MaW3T2RY52P9LbXXFbXqkMnoua2B7iL%2FUUgEPOicbHAMryza1TjvCL8Wg1cTX31NxoPMLnj278GOqUBOMqr6xS8L3f2YiFrKdR9QxezIDk%2FT0RsC0FJWmLV11rg2vtwgCeM8clmopy3BK6dR8zNIE4wqOipWneb1y9isxLHrK2L8ORMpQhH8YPhZAYs2e%2FKTGLhjl6PG9at7E1qErK6SfQ7m%2Fbi3%2B9sRdIrDZzmN%2BAhnec%2Fop2%2B3d5Hoo5OtjgxUe2Pos61FIqm7Ys5GT%2Flw8eUP%2FxpnA9NpuFEcEoTsSN5&X-Amz-Signature=965decb0ab1f0f58f24c7fb7eb2cdf6b8af8533d24692170f09cf7fd639d42e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
