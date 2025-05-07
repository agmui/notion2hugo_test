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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQ3NDR2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhmO39JwJbQjI05zzUHpzsz3pi%2BpT0ERHJKcTLAGe5VAiEAuDvsYZyta2TRx7kCN9QHy0v%2FNdBHbwm8YnBkY1zYqMQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNSHYkgMBjxicaOkUCrcA9GiNWrLiTl%2FeU7tiyxeXdLFujDTR1J%2FUn99aC8HXXjtZDA%2FlIa957kh4pl3CljS%2FTSiRjrZgYD%2BA%2Foh34if%2F548%2BL36UXsoiNnmmV6%2BgHpWjSI%2BehV19uwHfCGI8SWN8cCfWw%2FI%2FkhlkjruiqMpCpv%2FgnBj5lAH6W%2BRu7lqIFJiG0XvqglPRgTNJA7sGZCOzkiWrgN2tTDb0%2BB03v0gqtRRX6WtXbhtDgfb7Z0Akd60AGBe2MBbn5DcTLe74PVEkbh2msOuOImw8XNtRrpfnQdYY%2Fqn1Rz5HPNtEo3D2RvUadVJ0pK%2Bb%2Fd9KAXIXh03Q2C0dSWHde8xkcNvvC2O0B%2FnxFaCHzSfXeexgiwJlr1aqPsW1hJsT2iayjgK6Jg%2BkE%2FuJDQXFotp1NT%2BZaBRoGSrbZxvZIs9w7QH6SyQE570Tm85cx42437nO0Akzsl0tVNK9jwnAWF4pXN0cB3FVU7GkhJDPw5Gh%2BeZc1RBJS71vfglBSo19cVCuiuVCigEaqSKCPhfPyjCl0JS31FR0pZq4fqIxslAydLOgiYXsmiBRnLL6mxn60T1W5il5Rzxpm4%2BCG2lhnOeNIQX7OICHz1T1p019w3SjCXWnCEEyPTtjUaKrVSStwdao7SDMP%2Bx7MAGOqUB6SRfHBrnN8Fwx4HGRM7wjB5WH3FQPrN3FEqkRwpcDPVELPXA4giEnQkPVUkVlBOeqV5mqJ%2FLajiR2S9tfk%2BfGFLMnmpZpD5bciSm%2BCyzVjFFUq%2F0hJZpU2YGJquZlswqsGDPnBypYBJ3PxvHsOyfz9fkDulXcrGFHPdsXYMOS1SM1GL0v3vY8jZup1cCLUAqoZ9gaRY5LpLf5zu8Ty%2FE0PFv1qiz&X-Amz-Signature=7027bd5bfed71a45d697d826687ba99ca25623b6cb7b6382275af34857521a54&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZQ3NDR2%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhmO39JwJbQjI05zzUHpzsz3pi%2BpT0ERHJKcTLAGe5VAiEAuDvsYZyta2TRx7kCN9QHy0v%2FNdBHbwm8YnBkY1zYqMQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNSHYkgMBjxicaOkUCrcA9GiNWrLiTl%2FeU7tiyxeXdLFujDTR1J%2FUn99aC8HXXjtZDA%2FlIa957kh4pl3CljS%2FTSiRjrZgYD%2BA%2Foh34if%2F548%2BL36UXsoiNnmmV6%2BgHpWjSI%2BehV19uwHfCGI8SWN8cCfWw%2FI%2FkhlkjruiqMpCpv%2FgnBj5lAH6W%2BRu7lqIFJiG0XvqglPRgTNJA7sGZCOzkiWrgN2tTDb0%2BB03v0gqtRRX6WtXbhtDgfb7Z0Akd60AGBe2MBbn5DcTLe74PVEkbh2msOuOImw8XNtRrpfnQdYY%2Fqn1Rz5HPNtEo3D2RvUadVJ0pK%2Bb%2Fd9KAXIXh03Q2C0dSWHde8xkcNvvC2O0B%2FnxFaCHzSfXeexgiwJlr1aqPsW1hJsT2iayjgK6Jg%2BkE%2FuJDQXFotp1NT%2BZaBRoGSrbZxvZIs9w7QH6SyQE570Tm85cx42437nO0Akzsl0tVNK9jwnAWF4pXN0cB3FVU7GkhJDPw5Gh%2BeZc1RBJS71vfglBSo19cVCuiuVCigEaqSKCPhfPyjCl0JS31FR0pZq4fqIxslAydLOgiYXsmiBRnLL6mxn60T1W5il5Rzxpm4%2BCG2lhnOeNIQX7OICHz1T1p019w3SjCXWnCEEyPTtjUaKrVSStwdao7SDMP%2Bx7MAGOqUB6SRfHBrnN8Fwx4HGRM7wjB5WH3FQPrN3FEqkRwpcDPVELPXA4giEnQkPVUkVlBOeqV5mqJ%2FLajiR2S9tfk%2BfGFLMnmpZpD5bciSm%2BCyzVjFFUq%2F0hJZpU2YGJquZlswqsGDPnBypYBJ3PxvHsOyfz9fkDulXcrGFHPdsXYMOS1SM1GL0v3vY8jZup1cCLUAqoZ9gaRY5LpLf5zu8Ty%2FE0PFv1qiz&X-Amz-Signature=c930936b610e3aafc8eff93bf9183f4e34d8a6affce430c8963e52323c6351e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
