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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AIKVUD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCeVApzF3GwszwrLI6VzSsKiAgONopZ%2FNwZfiwJKdf5fQIhAN3JsqkRgnRuyR3lccPIzykDDNLYjZHKJ45a5wEaAMxzKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxknG6kSdF5xI3NF%2FAq3AMGhmofKoetZBPmPpGg917cUR1kabRo%2Fls%2B%2FPpl2Usvr1xQSpeQ9Y%2BIvc6uqlaLNp%2BoNHb5AHKS836QtLrLpLApcnYqK5cYdYJTd2sImj%2B8E3%2FpSAfUonJcBvnIcMC2vQ217fEn9%2Bz7gyVIekAP%2F4pCwvkYfJD%2B6ssoUkUTLWTg3gTjJpxiBUfBy%2F9FHlE7TyNz2%2FOwJQMiXd1qwbKq8vHZB2JjFvpyVmfGeag0q81Ou7YTnkrkmPRNhFUkvKowumo8leG6dbvpTkGs0mPNih7Epmk8rXE%2Fe4GprJgUXDwyqKOuUYnfFvhJaBe6opG1XN3Z%2B2drgDUvZAvn5shdBAeEjkqqGDEkmfn4FQtOkhAXqESedLCNo7JI48TlGOiBjnII0GNd0tn5Pk0X%2BpWQSrlonHVDBJ6eMl67XVImlAdZYBydJ4Y2V4Nh6Hu8iq8CWXbxcru6hTOGd3CvMLwLWj9R88%2FdqpfS74Z4Y2NfV72OuUe8OX7hxL9nUUcN%2B4%2F6zmwGiyaJLbUOMyaUpX2Qhh6%2F4TUyaVkRhoyL43UivyYZWluaVhWDl645QypJctJCzKe2Ab7ecWlbq6gaAg4FZqKu9A%2Fyw3VSJTVqx8l5mnpgvUh%2F1O5BwXihpJEjkDCs08nABjqkAZ39B2%2FUzNgAf2ymGnrese8%2BJPG%2FWfFDRhqK9%2BnHai%2BzTq%2BjuGRajqOYMXkVz%2BKYNLNll27XpoGPvd8teKC1YxNKPvxGrORgMSQes7I9eCDMwE8z8w1Bpgzqs8zLWEIyPXQXGlU%2FrTiEdg5cAF7iOwL0o%2Fc3XL%2Bh%2Frd%2FIa5BSBKr2dFi%2F1E6NNks5FJ8Ua%2Frz4mc3%2BTPpRbrY2LAw8xqSdLJR3MC&X-Amz-Signature=f9456334cf82504fade8a9af60bb24033a759348c530d422ba1ebe77e23e7cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AIKVUD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCeVApzF3GwszwrLI6VzSsKiAgONopZ%2FNwZfiwJKdf5fQIhAN3JsqkRgnRuyR3lccPIzykDDNLYjZHKJ45a5wEaAMxzKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxknG6kSdF5xI3NF%2FAq3AMGhmofKoetZBPmPpGg917cUR1kabRo%2Fls%2B%2FPpl2Usvr1xQSpeQ9Y%2BIvc6uqlaLNp%2BoNHb5AHKS836QtLrLpLApcnYqK5cYdYJTd2sImj%2B8E3%2FpSAfUonJcBvnIcMC2vQ217fEn9%2Bz7gyVIekAP%2F4pCwvkYfJD%2B6ssoUkUTLWTg3gTjJpxiBUfBy%2F9FHlE7TyNz2%2FOwJQMiXd1qwbKq8vHZB2JjFvpyVmfGeag0q81Ou7YTnkrkmPRNhFUkvKowumo8leG6dbvpTkGs0mPNih7Epmk8rXE%2Fe4GprJgUXDwyqKOuUYnfFvhJaBe6opG1XN3Z%2B2drgDUvZAvn5shdBAeEjkqqGDEkmfn4FQtOkhAXqESedLCNo7JI48TlGOiBjnII0GNd0tn5Pk0X%2BpWQSrlonHVDBJ6eMl67XVImlAdZYBydJ4Y2V4Nh6Hu8iq8CWXbxcru6hTOGd3CvMLwLWj9R88%2FdqpfS74Z4Y2NfV72OuUe8OX7hxL9nUUcN%2B4%2F6zmwGiyaJLbUOMyaUpX2Qhh6%2F4TUyaVkRhoyL43UivyYZWluaVhWDl645QypJctJCzKe2Ab7ecWlbq6gaAg4FZqKu9A%2Fyw3VSJTVqx8l5mnpgvUh%2F1O5BwXihpJEjkDCs08nABjqkAZ39B2%2FUzNgAf2ymGnrese8%2BJPG%2FWfFDRhqK9%2BnHai%2BzTq%2BjuGRajqOYMXkVz%2BKYNLNll27XpoGPvd8teKC1YxNKPvxGrORgMSQes7I9eCDMwE8z8w1Bpgzqs8zLWEIyPXQXGlU%2FrTiEdg5cAF7iOwL0o%2Fc3XL%2Bh%2Frd%2FIa5BSBKr2dFi%2F1E6NNks5FJ8Ua%2Frz4mc3%2BTPpRbrY2LAw8xqSdLJR3MC&X-Amz-Signature=faed25ac4a0e37e193d284f485adf8bdd13a305e1606993d92897d795283708a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
