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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETRZTKH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAFdLH2prOBn1D2lLNcvgfydRjgSlxMOEzz7IvvKmA4rAiEA2Ak5S9ddUyQcAB24mFk0f0%2BvU%2FfyPIWjaFULm3VVzDcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvTzH0GckfAJ71DiircA%2BEyJlFHLV9dSBUqoTMjK14GO7F8b%2FrZIP%2B1%2FsKRdiWAbPr7ZB2vbOFjM78T0tdgZ3Vrz%2BreSSn%2B5TNOOravWA27iSrGcyJyITsBqIKU8USIhBUMlpAlS4AIX9I7zojBvd3TNqIqc82a%2Bue5cOWZActT42QFBu%2FJYRWPhwJ%2BfYjC5Alg08%2BKs2Dnd6OuzRBNY22exJYg4OQP16%2BdDQeSJV9Zs5v%2BGj5gHEhDZt2soBWA00RPwVqdDiX8tN9EXokIoASTlO8905uRIAjq1AFkbzZ01wGO%2FUgEjd98wTEW2hrK%2BJuu7kxnf8bOPJeCne%2FWhGOvx31fCJQ6DS9g1luQZ0gNOJ6PRWT0aeO%2FE54jkf9PSOUuE6eJ4h1v1AiwU%2Bv5z%2FwgvSlpKdbBzPTy2eZx55g5VTnT0zD%2FhQOc1lyYmbThb%2BGhu3zVAoDxZvBwiexY2k8zBb12FpXS5o2vZopzMJXCIIkkzGHKZML4ccYDSlUQeTFK6BByXry73%2BbqSENkktafPDN4RzfPc4Oyi4IvGGZVaJ7ptWp5GEKuxz9KKkV4RUteI8JLYOYcjgskfP0nmXI4HS1Z11edFyBpelM8eXBTw7xvZMZQ3GfMnHYrNm3V8v8ZsMeGHuXvVij9MITG774GOqUBiAEnfeyjGyPVxCPrbMgNV01sGgMl35AT4G%2FaKkPQF1xM0yp2QdC0g21HRw0MA5PSrW8ppkQM5x24WyrEW30Vj58ZfHIX7wkW7Gy4itKBaBlFHE14juQpjYQi604CaF1A7m3WKXQHI3v9YqjsYw1VjrWhY8MhJ%2FGnRKl4VfFcvXr6UahF9dYWIEcliZAHiqALOkEAZIh6GhX58WXqPzxkO1WInFl%2B&X-Amz-Signature=8906f4cdbbab4cd23a86507804c84eed85b43f3d7e91123e7869f288c52a8e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ETRZTKH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIAFdLH2prOBn1D2lLNcvgfydRjgSlxMOEzz7IvvKmA4rAiEA2Ak5S9ddUyQcAB24mFk0f0%2BvU%2FfyPIWjaFULm3VVzDcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvTzH0GckfAJ71DiircA%2BEyJlFHLV9dSBUqoTMjK14GO7F8b%2FrZIP%2B1%2FsKRdiWAbPr7ZB2vbOFjM78T0tdgZ3Vrz%2BreSSn%2B5TNOOravWA27iSrGcyJyITsBqIKU8USIhBUMlpAlS4AIX9I7zojBvd3TNqIqc82a%2Bue5cOWZActT42QFBu%2FJYRWPhwJ%2BfYjC5Alg08%2BKs2Dnd6OuzRBNY22exJYg4OQP16%2BdDQeSJV9Zs5v%2BGj5gHEhDZt2soBWA00RPwVqdDiX8tN9EXokIoASTlO8905uRIAjq1AFkbzZ01wGO%2FUgEjd98wTEW2hrK%2BJuu7kxnf8bOPJeCne%2FWhGOvx31fCJQ6DS9g1luQZ0gNOJ6PRWT0aeO%2FE54jkf9PSOUuE6eJ4h1v1AiwU%2Bv5z%2FwgvSlpKdbBzPTy2eZx55g5VTnT0zD%2FhQOc1lyYmbThb%2BGhu3zVAoDxZvBwiexY2k8zBb12FpXS5o2vZopzMJXCIIkkzGHKZML4ccYDSlUQeTFK6BByXry73%2BbqSENkktafPDN4RzfPc4Oyi4IvGGZVaJ7ptWp5GEKuxz9KKkV4RUteI8JLYOYcjgskfP0nmXI4HS1Z11edFyBpelM8eXBTw7xvZMZQ3GfMnHYrNm3V8v8ZsMeGHuXvVij9MITG774GOqUBiAEnfeyjGyPVxCPrbMgNV01sGgMl35AT4G%2FaKkPQF1xM0yp2QdC0g21HRw0MA5PSrW8ppkQM5x24WyrEW30Vj58ZfHIX7wkW7Gy4itKBaBlFHE14juQpjYQi604CaF1A7m3WKXQHI3v9YqjsYw1VjrWhY8MhJ%2FGnRKl4VfFcvXr6UahF9dYWIEcliZAHiqALOkEAZIh6GhX58WXqPzxkO1WInFl%2B&X-Amz-Signature=71a0f917c2ce335da68d8a5c1ec9dca5fbba28ddce8f9369eccf411d3f532fac&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
