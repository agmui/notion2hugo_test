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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6D2IYX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyc3CKdahDBgj6Geg%2BF7AmJkjjRUTKhv1z8LAiz77AhQIgQZh%2B1StKp%2BTJTZq0InS0V%2BdV1NcQrigLN7%2BRSn7Re%2Foq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHCAQPUaZciKq6d%2BySrcA4NP0iP3t3kOetql42dA0AcWLNSlgL21BxYdHu8Dz0H3iEigG8PwjzMKBQcCG1PxLzBDktOcmQL11x2x3VreYo4VD7PgVvOU7XSiKfCrFwtZGu6imRP871Spd004ewnwoDXUqI%2BJ6XaAe0cVxmzXvsK%2FBVtEgXB%2BF9D28EFX%2B9fGQ1Bh1VVaqICHqXo93lpzrTEc87gf7t03D7Q5R2u6vPANP9ri9KJ7ma8uU6O6B4CQYhpgeK63aQRTm78x%2BIt2ULhxTAbxIaBjgkTYPNB%2FzgV%2Fx74TxRWnsKoTiR1PO2asQbacLBLbhBqRzcGD%2BYTt6lT38HcoO%2FK9%2Fb02v8nxSsb4tNAIRanhGbZyaX1vRQFJ3jz1BAPcgXm%2FCuar8%2Fp10sVT0ghPXsHcvepiMl3N%2B%2FELdvZ8YzPcvu3%2BfW%2B7JPqzqhZmE6tbIbtglOqww4KYwyB7Vek62jJ79Dq8cqDmwJrmDasXzx0vqPwxzDaiWm2Z3eBAVS%2Fvp00WBumN4HL%2Bd69cSWS44yFCBxOhNhMGakDNTqqS0PpnLIrmEBmpNrmKtiTZ%2FolHRojUocZTTNj5BzhxpsCIVeeq1rRUqN9%2BryzE1%2BysqBJlQie2T5q97GbAXFwWIlvc9gcVueRfMLu5zb8GOqUBYbTYjxoxqgTKHDBXcMisHQBzRWt%2F%2FMfHWm8mtwvppaZKbYvZWYKCpO4QsPm%2F2TiloP%2BOtxyBlQtIY%2F9o%2BBmK8ZGFPD20%2FeellRZQqNtJjva%2BdYi0LLQ8ywVQS3t8Cx2MA7P4YdRU8DW1jalwCEmJ8GR9ZmBOk%2B3F4EFzvW%2BiOHL%2Bo0WhsQf87XXn7wgo2m1P5jMfYvgj0hzsyXBgyKqKzVyZt909&X-Amz-Signature=72c85d049060102d1837c1bd4dbc6cc333eea3894ece469c8c28b028236e2ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I6D2IYX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyc3CKdahDBgj6Geg%2BF7AmJkjjRUTKhv1z8LAiz77AhQIgQZh%2B1StKp%2BTJTZq0InS0V%2BdV1NcQrigLN7%2BRSn7Re%2Foq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHCAQPUaZciKq6d%2BySrcA4NP0iP3t3kOetql42dA0AcWLNSlgL21BxYdHu8Dz0H3iEigG8PwjzMKBQcCG1PxLzBDktOcmQL11x2x3VreYo4VD7PgVvOU7XSiKfCrFwtZGu6imRP871Spd004ewnwoDXUqI%2BJ6XaAe0cVxmzXvsK%2FBVtEgXB%2BF9D28EFX%2B9fGQ1Bh1VVaqICHqXo93lpzrTEc87gf7t03D7Q5R2u6vPANP9ri9KJ7ma8uU6O6B4CQYhpgeK63aQRTm78x%2BIt2ULhxTAbxIaBjgkTYPNB%2FzgV%2Fx74TxRWnsKoTiR1PO2asQbacLBLbhBqRzcGD%2BYTt6lT38HcoO%2FK9%2Fb02v8nxSsb4tNAIRanhGbZyaX1vRQFJ3jz1BAPcgXm%2FCuar8%2Fp10sVT0ghPXsHcvepiMl3N%2B%2FELdvZ8YzPcvu3%2BfW%2B7JPqzqhZmE6tbIbtglOqww4KYwyB7Vek62jJ79Dq8cqDmwJrmDasXzx0vqPwxzDaiWm2Z3eBAVS%2Fvp00WBumN4HL%2Bd69cSWS44yFCBxOhNhMGakDNTqqS0PpnLIrmEBmpNrmKtiTZ%2FolHRojUocZTTNj5BzhxpsCIVeeq1rRUqN9%2BryzE1%2BysqBJlQie2T5q97GbAXFwWIlvc9gcVueRfMLu5zb8GOqUBYbTYjxoxqgTKHDBXcMisHQBzRWt%2F%2FMfHWm8mtwvppaZKbYvZWYKCpO4QsPm%2F2TiloP%2BOtxyBlQtIY%2F9o%2BBmK8ZGFPD20%2FeellRZQqNtJjva%2BdYi0LLQ8ywVQS3t8Cx2MA7P4YdRU8DW1jalwCEmJ8GR9ZmBOk%2B3F4EFzvW%2BiOHL%2Bo0WhsQf87XXn7wgo2m1P5jMfYvgj0hzsyXBgyKqKzVyZt909&X-Amz-Signature=169fd9218b2144acc73f420ab50b2cfeb4f44153b3e1a8eb0788404d9ad510e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
