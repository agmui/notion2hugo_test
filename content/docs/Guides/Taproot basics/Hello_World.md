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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSS3SOZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGe689u4Mu4sm1LfI6Gy%2BWsGpyFcpPX2%2Fi%2B7js6WLyPMAiA6cyepVvrVyvvbLkOMqYZiW0vGbQf3%2FY9eVYFvTPyYqyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFczkkoAJhNbgw%2BcKtwDJ1CSmjXezf7cSO53jSwaGXZeBWQOpWzKmeJKPMxiy28UAMVOT8oYHBGIWEKdE8Ugwn%2BzFr1MJvDogNnw9Qew1VQeESDrWLf3Tw6jz%2FCzBb5anMfJbSSdV8rKNgoGavowRw5WMqyachcUOY9WJWqSM8gWJfPI5oDX%2FwX%2BTuKTHQr96LQ9AbMaDF9zL4gQdcd%2FyN8IPCqNKM46MLw48VAZ9X4tG9w2Qwd6q8nUbcURLV4vTnIZX9dGcBfdftV5UpFY4rTk8dLyFLblEcpWPHGwTSMD9FCKmEuVsTQ2q9Vg4hPxwHmwYhbilkEVI77EQ11AtL%2Bm1B7p3D3I6wHixQeiwWaUezIsoJt%2BJWqnVhk1hkTRpGcz7VKv%2Fw4TDRM%2FhjIceqnAy5kVCqOXwK6DvLlTcA0teEAtnJrioeffWfRWgA1D%2Fo0Y5Q3dGNyWbuLakNNIe7nQJ0U%2BojA6Pu7EOdmH3LZuzUPnqWB5By8L%2FuCco5Nl0oUY9uphqzgnZ0DNODKoz9Prri0V2DJ1GWq%2B7AVKmIfvLokGgKN4XVSmK5FQRLTO4%2BTXYF8sGKLSlFp6rut4FGi2zxirp3SjqIemy5dropRrMD2PztXPsMBXEJpcE1nyKAu9PT40YWgqBaswqJrYvwY6pgHsYHpLrrtj5QZaDbrkDmI4dQSwF0aN%2FPetAPey9ejOrhJUL%2FTe5y7a3kiVhaOLCtQTSLWm%2BfIvwIoMba5MH2%2Ftf9JVQgnYlv9jK2IvNT9h29a1WrJ4%2F1DbeP55N2N1IbRzL0DgtuUAGXgmpAWjJckBF27KAfR%2B%2B7eW7MFdyu2CjsO2Hs9FQM3zyfj0qLe2QMFIbn9Fri43TAs5G9NqwoDBrN%2FMwdEH&X-Amz-Signature=8aae1ad1c8608feae8f8581383300bea4fc2c76ba0542b4609ed37849478c259&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSSS3SOZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGe689u4Mu4sm1LfI6Gy%2BWsGpyFcpPX2%2Fi%2B7js6WLyPMAiA6cyepVvrVyvvbLkOMqYZiW0vGbQf3%2FY9eVYFvTPyYqyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFczkkoAJhNbgw%2BcKtwDJ1CSmjXezf7cSO53jSwaGXZeBWQOpWzKmeJKPMxiy28UAMVOT8oYHBGIWEKdE8Ugwn%2BzFr1MJvDogNnw9Qew1VQeESDrWLf3Tw6jz%2FCzBb5anMfJbSSdV8rKNgoGavowRw5WMqyachcUOY9WJWqSM8gWJfPI5oDX%2FwX%2BTuKTHQr96LQ9AbMaDF9zL4gQdcd%2FyN8IPCqNKM46MLw48VAZ9X4tG9w2Qwd6q8nUbcURLV4vTnIZX9dGcBfdftV5UpFY4rTk8dLyFLblEcpWPHGwTSMD9FCKmEuVsTQ2q9Vg4hPxwHmwYhbilkEVI77EQ11AtL%2Bm1B7p3D3I6wHixQeiwWaUezIsoJt%2BJWqnVhk1hkTRpGcz7VKv%2Fw4TDRM%2FhjIceqnAy5kVCqOXwK6DvLlTcA0teEAtnJrioeffWfRWgA1D%2Fo0Y5Q3dGNyWbuLakNNIe7nQJ0U%2BojA6Pu7EOdmH3LZuzUPnqWB5By8L%2FuCco5Nl0oUY9uphqzgnZ0DNODKoz9Prri0V2DJ1GWq%2B7AVKmIfvLokGgKN4XVSmK5FQRLTO4%2BTXYF8sGKLSlFp6rut4FGi2zxirp3SjqIemy5dropRrMD2PztXPsMBXEJpcE1nyKAu9PT40YWgqBaswqJrYvwY6pgHsYHpLrrtj5QZaDbrkDmI4dQSwF0aN%2FPetAPey9ejOrhJUL%2FTe5y7a3kiVhaOLCtQTSLWm%2BfIvwIoMba5MH2%2Ftf9JVQgnYlv9jK2IvNT9h29a1WrJ4%2F1DbeP55N2N1IbRzL0DgtuUAGXgmpAWjJckBF27KAfR%2B%2B7eW7MFdyu2CjsO2Hs9FQM3zyfj0qLe2QMFIbn9Fri43TAs5G9NqwoDBrN%2FMwdEH&X-Amz-Signature=3ebe5fc76725e4cdf0f50287fed025a6d1fba883ff0edc601b680787d3a44c34&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
