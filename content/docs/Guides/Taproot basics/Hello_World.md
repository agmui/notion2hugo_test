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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMIHE2P%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuynNzW8I45y3EiIuJ%2BxcMs12aEJBI8z7s4qBBaQMbawIgFKCpS60IG8Wl0W6iltCCUuwWj2GymmYfsPc3lZPhtg4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPc9mdfQxVwBAcOZTyrcA8kNMpXU0hYDW843v8wZrqaCYYSVsq6Wo3ly%2FlXMBhawGOCNqGALZ3ur79cEAkgpOtjL87%2FfC20e%2Fdub2lHwiv2zn7cWJVYmSUyBlxlmtlMctcMboPvqY%2Ftgy1QvMsRsBQZ6gKk5CSAFFSvgQS3XdJTJEWCpJuI4eJfmvacdOC05LNXGy7OnsiE80bRWEtz6plarveZkCNMTofDECl1WNfHdnL9ly9d%2BxfvXvQCa1X8XaYdrhklRkd2cB8uIujSzDsJrg7WFuBrfkitdCXcCZm0f8sBME%2Flp2J0yeqMYr4LFh4XqG%2FIhYEGS7yvvXjuaWez3vJ3k%2FKV%2BT%2FRLilYJYQzWwibFCcUqmoimcd5nrOcA2tpDNratIJipCbyvVximQcLSn7yxegt2oR%2FZCjIvOS5Mb0XS2Xt2uZlsQaw0fYmWua8dwC8YgdytLjOUoG1WSXDK7APvf6ibTNjNg%2B1bmT5I4F9QcNp%2BQJvVOC%2FzJgckifrM6CfDDrPJQd7OVFGjUxONZSiPa4LNNOSvwyYFZoGN2Pnpyw6cyE%2F6AGPmgOrhjLjr0KFtkpWRcSRjMtX2FmyPTTeMU6DOZ%2FHH5uQMZlL2tJwIehe2OoiJh%2FJIABu9cheVszvRQ6EsqJY%2BMPHX270GOqUBD%2FGrbzVsDxhw5BNKmyaqjD5eBuZ1Toag7jUzm7GqG010QT%2BWfQp0AT2bp8MVlTEijaXN%2FNnwBWzFjnz2NZFOjHfsxTUwfhUmWtbhPwDbvakKN9nByNBlY6A9YEcZP6qggkY2Fe1WSdmxqbvkCBxAcJ86O83NBUQOK2DVJ7WQ7No2vgrIfMO%2FBEQ%2FE%2Fsas0QtTcjRcWt5sCR5%2BLXcFHSFRQS52d7Y&X-Amz-Signature=89ce680f393fb04dadd6f438c6a297e246d811945cd037a7d6867b75d84bf44d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMIHE2P%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuynNzW8I45y3EiIuJ%2BxcMs12aEJBI8z7s4qBBaQMbawIgFKCpS60IG8Wl0W6iltCCUuwWj2GymmYfsPc3lZPhtg4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPc9mdfQxVwBAcOZTyrcA8kNMpXU0hYDW843v8wZrqaCYYSVsq6Wo3ly%2FlXMBhawGOCNqGALZ3ur79cEAkgpOtjL87%2FfC20e%2Fdub2lHwiv2zn7cWJVYmSUyBlxlmtlMctcMboPvqY%2Ftgy1QvMsRsBQZ6gKk5CSAFFSvgQS3XdJTJEWCpJuI4eJfmvacdOC05LNXGy7OnsiE80bRWEtz6plarveZkCNMTofDECl1WNfHdnL9ly9d%2BxfvXvQCa1X8XaYdrhklRkd2cB8uIujSzDsJrg7WFuBrfkitdCXcCZm0f8sBME%2Flp2J0yeqMYr4LFh4XqG%2FIhYEGS7yvvXjuaWez3vJ3k%2FKV%2BT%2FRLilYJYQzWwibFCcUqmoimcd5nrOcA2tpDNratIJipCbyvVximQcLSn7yxegt2oR%2FZCjIvOS5Mb0XS2Xt2uZlsQaw0fYmWua8dwC8YgdytLjOUoG1WSXDK7APvf6ibTNjNg%2B1bmT5I4F9QcNp%2BQJvVOC%2FzJgckifrM6CfDDrPJQd7OVFGjUxONZSiPa4LNNOSvwyYFZoGN2Pnpyw6cyE%2F6AGPmgOrhjLjr0KFtkpWRcSRjMtX2FmyPTTeMU6DOZ%2FHH5uQMZlL2tJwIehe2OoiJh%2FJIABu9cheVszvRQ6EsqJY%2BMPHX270GOqUBD%2FGrbzVsDxhw5BNKmyaqjD5eBuZ1Toag7jUzm7GqG010QT%2BWfQp0AT2bp8MVlTEijaXN%2FNnwBWzFjnz2NZFOjHfsxTUwfhUmWtbhPwDbvakKN9nByNBlY6A9YEcZP6qggkY2Fe1WSdmxqbvkCBxAcJ86O83NBUQOK2DVJ7WQ7No2vgrIfMO%2FBEQ%2FE%2Fsas0QtTcjRcWt5sCR5%2BLXcFHSFRQS52d7Y&X-Amz-Signature=0ca6319b844bb1ed1bdd85a91c3c8637d5eb103ffd1acd861d31b90ad0cf1e61&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
