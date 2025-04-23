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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMLQA2X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD6%2F%2Byq%2FO1FgCyaBYPtzx74PxIYvyht7UZrrWOmVxNkaQIgUdv4rUMAd4btHF2FXVaJ%2BEsxDlBza%2BMEV2V%2BYvNzihEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHPuGqh4EZxvdqrdyrcAzOIwDDGEFsM1PN5NXePlcEnnv8Z%2BpYqJ%2BCcc04XxLzNC2q5L6nx7438Q2aUU6grT1VfYhgycmS%2FWWmy3DnvGg63MJSfYqcS7KoZwVYd2foP%2FonT9wiW6cffQ7o1ovGP5hbKJzYmgswoAzBfAR5WBnRLuXTq6ycrU1qthhTJw05%2BYwtVm501LbDLBpXpkjsfWz51KTfNDhatbkSUILTt7EYC3N2ryMV4B6a17l%2BgwZ4MBcA7cPQeL6aQxWsTqUkKy4zhj5inkqRt6uG94GMG9SuHEvZFW4Qa5RtF0rhbjuo%2BDZveuBzOMpOrNgzNCc1LUMnGFkQIlANNmdK5kGx8NyL8OYPGCXnUMIsGz5f8aTzOzydGYAzwHP%2F8YQH1tSw85F6N0hWjDI4zHimqQdftxfAWAeeBEqOSnKG1y2NJE0NUiTadjKwL9Y24aTIQJOk7yF25KzfhXrGSbj4xglnWvH5dM%2BmYkdFL2ut0KbpLBasdo6vL0a%2FCRMMH8a4uGwGh9DbMmadyLUeOBGvLiq16PySz3bBxM9%2BSUQPSkblZpTQ8CoiIH2CnfgLIfQAW8ySP2lKc3AsUAzlU1cqMGxwPcYFaU51rg8kegfAlXPcPOaIVbOMljN3o2SYSokZvMIuLpcAGOqUBsxLhZ%2BMl9XM%2F5rLxwHmMox4lJP38HUuiO0N2p88rtOuvx%2BlCI8qPIhXukTYyNfYjWBKDwCZpSvgTpBEBlVvM0B4IWorQYXttwYEpcpCltshuhn%2FiOZzxlmuGN3PmcqdrTw3vtoV6lCa3Z%2FjzEljO84Ng1mI1NtTs%2Bjv4hoPpMy6BtDtFffoBtYSifrAoGP310LTPnbihllaZqnmst6MkuwdEVCJL&X-Amz-Signature=fa398415a55b80887a1cb39878d55c61f0162768a7b0b25d25a9ce317e775c03&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHMLQA2X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD6%2F%2Byq%2FO1FgCyaBYPtzx74PxIYvyht7UZrrWOmVxNkaQIgUdv4rUMAd4btHF2FXVaJ%2BEsxDlBza%2BMEV2V%2BYvNzihEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHPuGqh4EZxvdqrdyrcAzOIwDDGEFsM1PN5NXePlcEnnv8Z%2BpYqJ%2BCcc04XxLzNC2q5L6nx7438Q2aUU6grT1VfYhgycmS%2FWWmy3DnvGg63MJSfYqcS7KoZwVYd2foP%2FonT9wiW6cffQ7o1ovGP5hbKJzYmgswoAzBfAR5WBnRLuXTq6ycrU1qthhTJw05%2BYwtVm501LbDLBpXpkjsfWz51KTfNDhatbkSUILTt7EYC3N2ryMV4B6a17l%2BgwZ4MBcA7cPQeL6aQxWsTqUkKy4zhj5inkqRt6uG94GMG9SuHEvZFW4Qa5RtF0rhbjuo%2BDZveuBzOMpOrNgzNCc1LUMnGFkQIlANNmdK5kGx8NyL8OYPGCXnUMIsGz5f8aTzOzydGYAzwHP%2F8YQH1tSw85F6N0hWjDI4zHimqQdftxfAWAeeBEqOSnKG1y2NJE0NUiTadjKwL9Y24aTIQJOk7yF25KzfhXrGSbj4xglnWvH5dM%2BmYkdFL2ut0KbpLBasdo6vL0a%2FCRMMH8a4uGwGh9DbMmadyLUeOBGvLiq16PySz3bBxM9%2BSUQPSkblZpTQ8CoiIH2CnfgLIfQAW8ySP2lKc3AsUAzlU1cqMGxwPcYFaU51rg8kegfAlXPcPOaIVbOMljN3o2SYSokZvMIuLpcAGOqUBsxLhZ%2BMl9XM%2F5rLxwHmMox4lJP38HUuiO0N2p88rtOuvx%2BlCI8qPIhXukTYyNfYjWBKDwCZpSvgTpBEBlVvM0B4IWorQYXttwYEpcpCltshuhn%2FiOZzxlmuGN3PmcqdrTw3vtoV6lCa3Z%2FjzEljO84Ng1mI1NtTs%2Bjv4hoPpMy6BtDtFffoBtYSifrAoGP310LTPnbihllaZqnmst6MkuwdEVCJL&X-Amz-Signature=e346ad8a7dd51d001d689a26051847bae379bc962f11bb8694c1af9bced2c512&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
