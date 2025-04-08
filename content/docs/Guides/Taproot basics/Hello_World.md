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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPAZXIS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZkpBRdHzXNTuN7avFapFrVt289U66LBTOveEZov5fAiApHuYCfwT0WhXK5LvRfDT4k0RsMaChMCYTjDcE1lGihSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMqXMC36niovUJk6HaKtwDQ4piBvAVw9FBofZ0YCtxzS5%2FJR58KLZcGL0sSIj8Hce0R%2Bm%2BmJLNJW3TfLzSegbNd7a8ltObnHwtCUpLsYCEy3nc2dac95DNW%2FzZ3NvQMlVXvUSkhYXjqe1RzXOXg9kwukV1MuzKNzptBLDOVQqPxPbQQWmcsO8MlpJ3DHTvg%2FTDGDeseaQ8FwaJ8sSoP11fqNW1ZVpvY%2FKAs6SvQWA3EwSfx4c3D%2FmipVZl8BUjeaPzlpvziicGWNuXANZfPsTk9Jl9eXOAg9oZ4Q2VGLlDixVHa%2Bq00O9zDoObIAateTJVLJ%2F3YCS0BpdTpYuvcb43HLGt6OqtO5yf6f7%2FSXef0VcYWoMWMrDR4kjRho1PegZxaWd9Hn1h41EsyKshaVxbT0tz4EMKJ49rID%2FbK9E8ECafLj1rdS0DpO50uhTOqjcTF%2FayLsh95xNyzHuNEgfacst5XhCHUeZticwp6kfhLaUxYUiFEz5Hvr0FYDX5jwIr1hNANxheOcm2COaDBXbmOqVI47F%2BN9DouN7NXvuZf0%2FkxtiUWvqFt4Z8I3uiUYV2v9X9W89FSRNVn6qalDf9z0kOr68%2FAS8E3DJ3M0xqul6xgS0i7ahDGgnCxK0XkxaYWvaXctEUl1%2Fy2u0woNTTvwY6pgFi%2Fn69RFvi%2BL576FALEfhZF0jladlpx7qeIkW%2B8yhCbQaxftPsNKh3d6BaksvCFRdLjIV28ar13SbS2eckjPvKFDDSGoTPUoLiMH3SSu72UO4y%2FBh4qdnx9G8mksHyoTX5O65I1I8tdXF2gwQveRRc%2BYp3NyrPEs6yQvZIk6IQYyLi%2FeMij2yAafDCoSKT%2BclwvIa%2F5vi5yYKqih8zRhDZy94fqv0O&X-Amz-Signature=e8937ff2a91aafa78bf71687a37fae9c286026f155adc1e8c6dce9ee53e2af12&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXPAZXIS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzZkpBRdHzXNTuN7avFapFrVt289U66LBTOveEZov5fAiApHuYCfwT0WhXK5LvRfDT4k0RsMaChMCYTjDcE1lGihSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMqXMC36niovUJk6HaKtwDQ4piBvAVw9FBofZ0YCtxzS5%2FJR58KLZcGL0sSIj8Hce0R%2Bm%2BmJLNJW3TfLzSegbNd7a8ltObnHwtCUpLsYCEy3nc2dac95DNW%2FzZ3NvQMlVXvUSkhYXjqe1RzXOXg9kwukV1MuzKNzptBLDOVQqPxPbQQWmcsO8MlpJ3DHTvg%2FTDGDeseaQ8FwaJ8sSoP11fqNW1ZVpvY%2FKAs6SvQWA3EwSfx4c3D%2FmipVZl8BUjeaPzlpvziicGWNuXANZfPsTk9Jl9eXOAg9oZ4Q2VGLlDixVHa%2Bq00O9zDoObIAateTJVLJ%2F3YCS0BpdTpYuvcb43HLGt6OqtO5yf6f7%2FSXef0VcYWoMWMrDR4kjRho1PegZxaWd9Hn1h41EsyKshaVxbT0tz4EMKJ49rID%2FbK9E8ECafLj1rdS0DpO50uhTOqjcTF%2FayLsh95xNyzHuNEgfacst5XhCHUeZticwp6kfhLaUxYUiFEz5Hvr0FYDX5jwIr1hNANxheOcm2COaDBXbmOqVI47F%2BN9DouN7NXvuZf0%2FkxtiUWvqFt4Z8I3uiUYV2v9X9W89FSRNVn6qalDf9z0kOr68%2FAS8E3DJ3M0xqul6xgS0i7ahDGgnCxK0XkxaYWvaXctEUl1%2Fy2u0woNTTvwY6pgFi%2Fn69RFvi%2BL576FALEfhZF0jladlpx7qeIkW%2B8yhCbQaxftPsNKh3d6BaksvCFRdLjIV28ar13SbS2eckjPvKFDDSGoTPUoLiMH3SSu72UO4y%2FBh4qdnx9G8mksHyoTX5O65I1I8tdXF2gwQveRRc%2BYp3NyrPEs6yQvZIk6IQYyLi%2FeMij2yAafDCoSKT%2BclwvIa%2F5vi5yYKqih8zRhDZy94fqv0O&X-Amz-Signature=e71ef583170d6dfec41f541c0b1052decad7d758451cae8d9bd40fef34b129c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
