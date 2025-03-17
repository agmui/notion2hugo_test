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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5M46JA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH94TkgIm2j0Qdh87wOu3R%2Fb1dRBbrqQ%2BLS4X5TxHEXAIgEPOgrC7V4D177EH9h7UFX5l3rTPsYVe9MiJ2L9RfA4Eq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGCHyURrRdTIHf4eCircA1bFxv3EWeG3EypXHPuq7WKe7s%2FYr00PYcKLRf8W0DQot4STBnSRDLZ2gZYHtUsCbCyoH3eMwk5AWShK31KHHWr%2F0ryNh4J7aOSqX32B8ijolqKpjHW%2BWZWJ4YHP1vJlkdCfOBS%2BHrdDZH7iZTWj9B7Nk1npvf0sFVpNaCEBn9AzMOs%2BsR%2FblChlhJrT%2F3NLdhtGJVEP3ZLR0B%2BhwhhbNgysfkozZgKzX13q1gHuYqAaj1yMm7RU6NZZK1h8sJWi55LdXjK%2B6ZjnOuh36y5tV1IWKQIWDejnDGDeowyTgr2bt8zHJlGuiX1mTn9WwBeaUDHb1Hzg%2FFk%2BF5%2BiR5yZWKGsymW0PaBcd25VLlhk8x3fppNJ6GN4dTYyqsE%2Bd1cHq7visay2nuMQqIVGsmycgNT%2FSDlwEQaK60OdLXk5sbzJt7SCm2RCRR%2FpY5nwC9ou%2BPgnKDlSigEtC4zKXFVrzmC59wFTrSO1EHHxJxiGMpq9bKj%2Bt%2F8dftDdDjHGpBA2Y2AJw9l0D42kcI8UCCqVwcuxuT42nKmNKfSJIuBl0OQHM7I%2FKDNRQ4qCmucCijoZSS%2BCgjqN1KQlBPOclRjX5xgGPmmKFxkhyJNLmvoZnizuxvaxKnSPNsAMpl18MIbK4L4GOqUBS7dsFIwdrx3%2BWNz1%2Bdscc42ytqh3OZi7UeQg0cUs14NrC63ET74YZIQDTJLlSJBdUbfH5AEjviJR%2BCZ1HkJcyJDKgzZaBSQX0bfHrxYd65v%2BVsUNJsI4fX6hlwlnVy1%2FlhIVfBelLGJjZ5whwqUdbmHYD7WoBTbWIKl%2Fjgq66yV8b88hhT13haFV21sW88nGUUax4f%2BH8mAWQo9VPDBdEOqgSX3M&X-Amz-Signature=12bd583086c6ab927430f676b9fc8e722269c38e1f680b87a948b0e35c5f6c63&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V5M46JA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH94TkgIm2j0Qdh87wOu3R%2Fb1dRBbrqQ%2BLS4X5TxHEXAIgEPOgrC7V4D177EH9h7UFX5l3rTPsYVe9MiJ2L9RfA4Eq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGCHyURrRdTIHf4eCircA1bFxv3EWeG3EypXHPuq7WKe7s%2FYr00PYcKLRf8W0DQot4STBnSRDLZ2gZYHtUsCbCyoH3eMwk5AWShK31KHHWr%2F0ryNh4J7aOSqX32B8ijolqKpjHW%2BWZWJ4YHP1vJlkdCfOBS%2BHrdDZH7iZTWj9B7Nk1npvf0sFVpNaCEBn9AzMOs%2BsR%2FblChlhJrT%2F3NLdhtGJVEP3ZLR0B%2BhwhhbNgysfkozZgKzX13q1gHuYqAaj1yMm7RU6NZZK1h8sJWi55LdXjK%2B6ZjnOuh36y5tV1IWKQIWDejnDGDeowyTgr2bt8zHJlGuiX1mTn9WwBeaUDHb1Hzg%2FFk%2BF5%2BiR5yZWKGsymW0PaBcd25VLlhk8x3fppNJ6GN4dTYyqsE%2Bd1cHq7visay2nuMQqIVGsmycgNT%2FSDlwEQaK60OdLXk5sbzJt7SCm2RCRR%2FpY5nwC9ou%2BPgnKDlSigEtC4zKXFVrzmC59wFTrSO1EHHxJxiGMpq9bKj%2Bt%2F8dftDdDjHGpBA2Y2AJw9l0D42kcI8UCCqVwcuxuT42nKmNKfSJIuBl0OQHM7I%2FKDNRQ4qCmucCijoZSS%2BCgjqN1KQlBPOclRjX5xgGPmmKFxkhyJNLmvoZnizuxvaxKnSPNsAMpl18MIbK4L4GOqUBS7dsFIwdrx3%2BWNz1%2Bdscc42ytqh3OZi7UeQg0cUs14NrC63ET74YZIQDTJLlSJBdUbfH5AEjviJR%2BCZ1HkJcyJDKgzZaBSQX0bfHrxYd65v%2BVsUNJsI4fX6hlwlnVy1%2FlhIVfBelLGJjZ5whwqUdbmHYD7WoBTbWIKl%2Fjgq66yV8b88hhT13haFV21sW88nGUUax4f%2BH8mAWQo9VPDBdEOqgSX3M&X-Amz-Signature=b5c7fb7aa8c353ae30f9376b08a7b9e15d010d12be5a9862dc139749fa43f53c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
