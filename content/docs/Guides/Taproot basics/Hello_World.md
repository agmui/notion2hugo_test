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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTTOQHR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFejSdVpasgnmABQ6RCwiTXq4q8QsfQdf1m6Sn38xgtcAiA3pf9vxbEVlRbCs3MgkoBLf6psmxWlBo8rAlmJqizxQCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMMUaYIs98jZUhONMZKtwDzLfUFQReDin72CBCE0fWaEbw07pDj7p1RgJqY1ouTEAsSHEO%2Fqydf%2Bs1q2CSW7hI4IeHnRSQNkf0vsxsn1V7GRediX1NB2mNvB6dPq16orprqRv%2FkQlSt7FcEU%2FohyQkYV27qvUaUfSkxQXvh8KPldLFrzIkwgIankJO2YpNdhoAByylBaa6s3waU2A7mKvi7qp%2FjGGuIgbT2ufaiGkEdOHG12CgjXyf3%2FcbUqSqBXEAvghHu301uXVWucREs5SMkDZvSCi1kyJxxvkHahwHqY5XwMSLnhyHSIutVK8yyvENkRpoOHgmi7ilkFC3jYOwDHiwiTtOr7rphgVRX0m31rvcLEpCo6SvtsjVgqF3iwhRbRub2EQRSGdQX1APVhJFeRGCixQ9fp4mBmGm%2FCdCqYmrZOOhYW1kXk9Z2HuyLSQsUCPttF5%2FWvHtUkUclf3hm82ZwtTypiM25pHsPzKSw91XFjb%2Bu2akT%2BbmdV3fMzYdXjp88lubwv5MbPQgEa1Ul7etP7b0hv4fZA22EDWDVpIMF4UqE4AWS9cOKuBbob8AQAGERVYE0kRjrgLtJ7pOpY1fRcJP7bu8KmEVE7%2FAvtOrj10O6Rg%2BCq4iJCLei7oyAcFS5vbOheD9r0Iw7LaCvQY6pgFq7EHD9bU%2BsGzosasL5AhQt5IlSunpSE4oCz%2Fsp%2FSzyyLTevZbDdbpjYPQTDVcVLhKH%2FEyU5Ol6SoO%2BLXZxUCWkVBWS0SV4cAUqKl4Pl%2B5sxtvrhuu%2FJbk%2FgsEUHNTrgPZ4LeGtdF1s60ocwHH1f4Wh8hafeK3nSiSAo2GkvO4A16N6OBGWw%2BJIcDSzZJGkyJVNbdDtUVwPgoWzXnlVV%2B5Tn2k2l0r&X-Amz-Signature=845481d75ddc4eb2739f17c6e63fe8a2b377b1ee5bdc4ca8cf2b5a9ec3e2c87f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTTOQHR%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFejSdVpasgnmABQ6RCwiTXq4q8QsfQdf1m6Sn38xgtcAiA3pf9vxbEVlRbCs3MgkoBLf6psmxWlBo8rAlmJqizxQCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMMUaYIs98jZUhONMZKtwDzLfUFQReDin72CBCE0fWaEbw07pDj7p1RgJqY1ouTEAsSHEO%2Fqydf%2Bs1q2CSW7hI4IeHnRSQNkf0vsxsn1V7GRediX1NB2mNvB6dPq16orprqRv%2FkQlSt7FcEU%2FohyQkYV27qvUaUfSkxQXvh8KPldLFrzIkwgIankJO2YpNdhoAByylBaa6s3waU2A7mKvi7qp%2FjGGuIgbT2ufaiGkEdOHG12CgjXyf3%2FcbUqSqBXEAvghHu301uXVWucREs5SMkDZvSCi1kyJxxvkHahwHqY5XwMSLnhyHSIutVK8yyvENkRpoOHgmi7ilkFC3jYOwDHiwiTtOr7rphgVRX0m31rvcLEpCo6SvtsjVgqF3iwhRbRub2EQRSGdQX1APVhJFeRGCixQ9fp4mBmGm%2FCdCqYmrZOOhYW1kXk9Z2HuyLSQsUCPttF5%2FWvHtUkUclf3hm82ZwtTypiM25pHsPzKSw91XFjb%2Bu2akT%2BbmdV3fMzYdXjp88lubwv5MbPQgEa1Ul7etP7b0hv4fZA22EDWDVpIMF4UqE4AWS9cOKuBbob8AQAGERVYE0kRjrgLtJ7pOpY1fRcJP7bu8KmEVE7%2FAvtOrj10O6Rg%2BCq4iJCLei7oyAcFS5vbOheD9r0Iw7LaCvQY6pgFq7EHD9bU%2BsGzosasL5AhQt5IlSunpSE4oCz%2Fsp%2FSzyyLTevZbDdbpjYPQTDVcVLhKH%2FEyU5Ol6SoO%2BLXZxUCWkVBWS0SV4cAUqKl4Pl%2B5sxtvrhuu%2FJbk%2FgsEUHNTrgPZ4LeGtdF1s60ocwHH1f4Wh8hafeK3nSiSAo2GkvO4A16N6OBGWw%2BJIcDSzZJGkyJVNbdDtUVwPgoWzXnlVV%2B5Tn2k2l0r&X-Amz-Signature=19941694ef242df902cdff5e8205ed72ba8c9e4c3ee078f88db63317350faa7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
