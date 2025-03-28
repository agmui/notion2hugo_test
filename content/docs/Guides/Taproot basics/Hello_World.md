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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TNUIHQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBv40hYceMAHU3TBcCj6GPPHAdnmWosX6q9SrSjH4gGnAiBDm7fDlrj3diAkrgwEh2oQYKgn%2FENGTVOt52emlc4FEir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJcKCEVPtaHfwh7xzKtwDQ8PcHNJpBWn8kaS1jRIQcp3041y8tD%2B8o7NUbwGDSegFu%2FACcVcl5HThfSM3pw1sWFZ2rqYShXVvJ6QzXy3cLqmpXGhdyfBn%2FYrYOv83Y6aeFFkVEarjqU6Q4qVV7wX0sk5qJUSHOBoYN5q6PZZutFAuk%2BSf1jPDEb9rPK0TVofI2Uo61DcXZ2%2BUAtNwKlpOiy2k%2F1h7Nm3LaRpGji6MKsMnliGTAw91VMNSMheC%2FRyiy9kOjNOzAiyt9NwbxbVEc6g3eKKbkjbouK5hX9mzoSR%2FCBCAjAe0VQ0mBEbN3ZNQzisSoH7BdefOOHnx1hj2W9X5PI29XPW5eZ31jy2tixJMed%2FYalyX1CO5qyW7EFoZ%2FWC%2By66K37pQaI%2BAJt75HQwxVKX1rqwWZo7867E5GrXlOTrXgN4i6rfmhQLfBAZIlYOhVx3nRDgZ7OyHLdZefTRO2f8pjeV%2Bnqu1NN6uitYh7Q%2Bq9ZtyanDrTiDkzm5Gjd%2FR2GB9T00OMBWl8ZuvTjTjO3ilXzbUraFD1WgImWNVTb2LVa3RfirXX%2BFjDHIUDLr5ufmcBXPsDUrny7eA8%2Bth9WAzRDzAgp7uk%2F9aladTySBZM6jxL3UsMCKDbtFROeAlV62u2HFKOSIwr6qcvwY6pgG%2B4ulS5HusPMdA1D1NN6wV%2BrZoSJC1I%2Fw1%2B1h2brzT6krG%2B%2FNE4kp0QOtRGPmSxaqV0K2cF75d6nAn8lTs%2BZQk32EPo%2BXMhSzRl2ZVPFpTQaZd3ghsxKRVnTLui715%2BCCM1%2BzLakupV4a6vQ4F9%2Fx0AxlXO9xdXrn%2FioqYldmximkZXCibzF1nptPyct27ApXA9qXfag%2Bgli8iWBb5UmpTt15az9pJ&X-Amz-Signature=cc308d076dd17497956000b8334652ac3b9e6b08acc464764f1ba5ae481b9ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TNUIHQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBv40hYceMAHU3TBcCj6GPPHAdnmWosX6q9SrSjH4gGnAiBDm7fDlrj3diAkrgwEh2oQYKgn%2FENGTVOt52emlc4FEir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMJcKCEVPtaHfwh7xzKtwDQ8PcHNJpBWn8kaS1jRIQcp3041y8tD%2B8o7NUbwGDSegFu%2FACcVcl5HThfSM3pw1sWFZ2rqYShXVvJ6QzXy3cLqmpXGhdyfBn%2FYrYOv83Y6aeFFkVEarjqU6Q4qVV7wX0sk5qJUSHOBoYN5q6PZZutFAuk%2BSf1jPDEb9rPK0TVofI2Uo61DcXZ2%2BUAtNwKlpOiy2k%2F1h7Nm3LaRpGji6MKsMnliGTAw91VMNSMheC%2FRyiy9kOjNOzAiyt9NwbxbVEc6g3eKKbkjbouK5hX9mzoSR%2FCBCAjAe0VQ0mBEbN3ZNQzisSoH7BdefOOHnx1hj2W9X5PI29XPW5eZ31jy2tixJMed%2FYalyX1CO5qyW7EFoZ%2FWC%2By66K37pQaI%2BAJt75HQwxVKX1rqwWZo7867E5GrXlOTrXgN4i6rfmhQLfBAZIlYOhVx3nRDgZ7OyHLdZefTRO2f8pjeV%2Bnqu1NN6uitYh7Q%2Bq9ZtyanDrTiDkzm5Gjd%2FR2GB9T00OMBWl8ZuvTjTjO3ilXzbUraFD1WgImWNVTb2LVa3RfirXX%2BFjDHIUDLr5ufmcBXPsDUrny7eA8%2Bth9WAzRDzAgp7uk%2F9aladTySBZM6jxL3UsMCKDbtFROeAlV62u2HFKOSIwr6qcvwY6pgG%2B4ulS5HusPMdA1D1NN6wV%2BrZoSJC1I%2Fw1%2B1h2brzT6krG%2B%2FNE4kp0QOtRGPmSxaqV0K2cF75d6nAn8lTs%2BZQk32EPo%2BXMhSzRl2ZVPFpTQaZd3ghsxKRVnTLui715%2BCCM1%2BzLakupV4a6vQ4F9%2Fx0AxlXO9xdXrn%2FioqYldmximkZXCibzF1nptPyct27ApXA9qXfag%2Bgli8iWBb5UmpTt15az9pJ&X-Amz-Signature=4e5d09f5af3f654081ac562713e0438d71b75912e6747f52cd9b266e197a97a1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
