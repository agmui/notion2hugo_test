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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AOBCV5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqW3RkWlQeAV2BlVXKgq2Xz0Uku7up09BZ1M8C1H3ARAiAcoOeQs%2FKVsaSsBGRd5t%2BMa2ATdbrcAkEqHZtVsd%2FIOSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwoBzFeSAeMRIoQL%2BKtwDF4ilIGE%2FFdsTCoDxC2HMjTcgnSEVt3CqXK6cPGRzmvb8%2Fb4YjltQi1xf60HHcz6umuUVIDHWLlA3kBZ%2FWlrXs4hisP1l1zG%2BSuwrBWsgyCTMqRZUpM745AY7gEHGzi0sbl%2Fz1n2MYk3oh%2F5zMR1h5t8mQSMQLqvDo7di7FxzL5WENVjuheuNqdUsnjeyJqZaQm3In9YvGfyQOhcEBd4nCdlWd55YyfgLSsKIloSrqoZ0XEYuJmHOZW2HII0pJ4wiCZlao6gpoqMqZ755dSeKnoMSEGP1HK5JjeHM03chGHwarAh7rHvK8bAmFPIwa4NJIyIN%2BrIdEzjKP2n3vzY67jU%2Bmj8Uxf%2FwSTSQvZWUUFPFo6DULm8besy7CDFJJkdAC3rpU%2BUU4JNfX9OxkH977j7AUxCjZ7fiKkNtvMkxRVpnvtXYYyAvAWwWKx3OTLQIqTdjC9T1AQMjEaJ9ikbTbg50kiZvfEmWeHota6lNoaCphJCkUmKMhVnpusiGHfsXoEYUtgTy3UqfnWjmNyJVmoyCyJYp7xL1kb6WKxBE90KaPzuBHCpXsLvYe59vl9VYPa3znUH0eAMsT29aFeaP1TCNBcZZbdY2WTOo5%2B3pXxeSvu2E%2BWwjzBHWb%2FMw4rmDvwY6pgGV71PsHJkfbYFjZ95%2B%2BXO5TKlwQV1Q24qXtHjnwBJA7aMuId2TuktwcDrd9okMR2IMkHkiebnv8k%2BXTRzzIufdg3j3Z5LeB2vtxCiJPnpvkj%2F9yVay%2FwVgLuPERwtJOirugfVbBJ61aK2X6sk1Wvs1AEV%2Ff8w4wGw3BTqPGJS3A3zFlFT3LPm3Gs4xFMf0mh6zrL5EFTSaIjcwT5pO0cx%2Bn5%2FdoRPY&X-Amz-Signature=30a9b9a50f52cba614a728bc7bac55386d230b6185f2d73541ada23f9370d941&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AOBCV5%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqW3RkWlQeAV2BlVXKgq2Xz0Uku7up09BZ1M8C1H3ARAiAcoOeQs%2FKVsaSsBGRd5t%2BMa2ATdbrcAkEqHZtVsd%2FIOSqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwoBzFeSAeMRIoQL%2BKtwDF4ilIGE%2FFdsTCoDxC2HMjTcgnSEVt3CqXK6cPGRzmvb8%2Fb4YjltQi1xf60HHcz6umuUVIDHWLlA3kBZ%2FWlrXs4hisP1l1zG%2BSuwrBWsgyCTMqRZUpM745AY7gEHGzi0sbl%2Fz1n2MYk3oh%2F5zMR1h5t8mQSMQLqvDo7di7FxzL5WENVjuheuNqdUsnjeyJqZaQm3In9YvGfyQOhcEBd4nCdlWd55YyfgLSsKIloSrqoZ0XEYuJmHOZW2HII0pJ4wiCZlao6gpoqMqZ755dSeKnoMSEGP1HK5JjeHM03chGHwarAh7rHvK8bAmFPIwa4NJIyIN%2BrIdEzjKP2n3vzY67jU%2Bmj8Uxf%2FwSTSQvZWUUFPFo6DULm8besy7CDFJJkdAC3rpU%2BUU4JNfX9OxkH977j7AUxCjZ7fiKkNtvMkxRVpnvtXYYyAvAWwWKx3OTLQIqTdjC9T1AQMjEaJ9ikbTbg50kiZvfEmWeHota6lNoaCphJCkUmKMhVnpusiGHfsXoEYUtgTy3UqfnWjmNyJVmoyCyJYp7xL1kb6WKxBE90KaPzuBHCpXsLvYe59vl9VYPa3znUH0eAMsT29aFeaP1TCNBcZZbdY2WTOo5%2B3pXxeSvu2E%2BWwjzBHWb%2FMw4rmDvwY6pgGV71PsHJkfbYFjZ95%2B%2BXO5TKlwQV1Q24qXtHjnwBJA7aMuId2TuktwcDrd9okMR2IMkHkiebnv8k%2BXTRzzIufdg3j3Z5LeB2vtxCiJPnpvkj%2F9yVay%2FwVgLuPERwtJOirugfVbBJ61aK2X6sk1Wvs1AEV%2Ff8w4wGw3BTqPGJS3A3zFlFT3LPm3Gs4xFMf0mh6zrL5EFTSaIjcwT5pO0cx%2Bn5%2FdoRPY&X-Amz-Signature=d659e86494411730455ccc4b8f4368e10f95371af40df0094feb7bf5f142a718&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
