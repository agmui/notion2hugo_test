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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKEFKOI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDDahUxJz1tjffncBm05W4Y0WKZzzP10PPUk2uk3Y5XwwIgceLkZFwlVcfYl4ho8Ow2vS7MlnP3xECbZAgZi1Ky3wsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRzAqJgbISDkmenECrcA%2FYFB616YjNl%2BZf3BKj%2FJC4c6MRXmk8cH31r1i8vlOK7JfSp5XbvdmG1HL7f%2ByiHMsEMmDfTGGJraTUJzzDJjad4pqGHJhlv53BtgFguB8RDSaijprLfBrlcktYIK4iobnvMkLbHxbEicFnSWQALyRWo5ApDuevYZrAXL4TWqRTw9E4kh6bMRLqxJjG%2FkFn7HdYp0BFDP96e%2F0xNT6YthJAwTXcrkBw3pZxJDkeJEDI1RzWk%2FwS7us%2FOyNKiW81hewBu28d5fief71YdO0TwNqUTiIJDq2HYnLhBvVO3YfUppg65fT9lc8g4Jyct4tsOyHYou%2BiE%2BULpD%2Fb9kc01FazjYARefA0xh1BMTg94RRDWvpvzaKGbkgChBegu%2BvmZEwESIHg4vGqg89yqBbCzX2FZr2xi%2BovrrL6Md6aQBGFHKvXanV70lZ%2BambTUwPenw1vC124Cf5xttuFsnfmWm1YBaFpQf6IrNFR81gD3uvxjPAmQOB6maqj28Co3bmNM3V5pVtPK7eFWvCqykLCNxeaBDR%2FgHIQvZJZk7kdrIecMbC%2BT%2FeqYpBeN7LH9n5qtwSNxus00oLlusxWA23Xrw8%2FtrEeX%2BiMAILksNbx1y7qbvXbE%2FWFqr%2FPyq9ZwMK7r28AGOqUBGY9LzAuSQLudm8T4uk6X0O60LSkrX4BGhumFW3wnn9tL6H3Sx0Xh63Qw%2F%2FefghqeYRmiFjsMKpZtH7ZwvSnEGmNxU26mYEoQFtPMYwWOcbevGBWDaOTMu7%2FlteKWso5XRbDBCRnRBD7O9VdPU8P67DajazRLZ%2BMBE3XAW6hQ2HFo2mniwA1UzAKVIZeb%2Fwvry%2BmA1JcKH616KClAF5r9zFk025mU&X-Amz-Signature=b7207d24a22ca1633bdb6f6efcdce83141c105c24d5bf0f9ee06c3bc46b90d69&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKEFKOI%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDDahUxJz1tjffncBm05W4Y0WKZzzP10PPUk2uk3Y5XwwIgceLkZFwlVcfYl4ho8Ow2vS7MlnP3xECbZAgZi1Ky3wsqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRzAqJgbISDkmenECrcA%2FYFB616YjNl%2BZf3BKj%2FJC4c6MRXmk8cH31r1i8vlOK7JfSp5XbvdmG1HL7f%2ByiHMsEMmDfTGGJraTUJzzDJjad4pqGHJhlv53BtgFguB8RDSaijprLfBrlcktYIK4iobnvMkLbHxbEicFnSWQALyRWo5ApDuevYZrAXL4TWqRTw9E4kh6bMRLqxJjG%2FkFn7HdYp0BFDP96e%2F0xNT6YthJAwTXcrkBw3pZxJDkeJEDI1RzWk%2FwS7us%2FOyNKiW81hewBu28d5fief71YdO0TwNqUTiIJDq2HYnLhBvVO3YfUppg65fT9lc8g4Jyct4tsOyHYou%2BiE%2BULpD%2Fb9kc01FazjYARefA0xh1BMTg94RRDWvpvzaKGbkgChBegu%2BvmZEwESIHg4vGqg89yqBbCzX2FZr2xi%2BovrrL6Md6aQBGFHKvXanV70lZ%2BambTUwPenw1vC124Cf5xttuFsnfmWm1YBaFpQf6IrNFR81gD3uvxjPAmQOB6maqj28Co3bmNM3V5pVtPK7eFWvCqykLCNxeaBDR%2FgHIQvZJZk7kdrIecMbC%2BT%2FeqYpBeN7LH9n5qtwSNxus00oLlusxWA23Xrw8%2FtrEeX%2BiMAILksNbx1y7qbvXbE%2FWFqr%2FPyq9ZwMK7r28AGOqUBGY9LzAuSQLudm8T4uk6X0O60LSkrX4BGhumFW3wnn9tL6H3Sx0Xh63Qw%2F%2FefghqeYRmiFjsMKpZtH7ZwvSnEGmNxU26mYEoQFtPMYwWOcbevGBWDaOTMu7%2FlteKWso5XRbDBCRnRBD7O9VdPU8P67DajazRLZ%2BMBE3XAW6hQ2HFo2mniwA1UzAKVIZeb%2Fwvry%2BmA1JcKH616KClAF5r9zFk025mU&X-Amz-Signature=f195358be8dacdc6052bf5a8f6c974d99792463367fd5e9f0d20b58ee2fcbe3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
