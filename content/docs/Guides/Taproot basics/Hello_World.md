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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ6SF35%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFA1Z7l7%2BTV7qwDsqks3%2Fx%2B%2BtoAqD9vT301ZnuEjqEqzAiBrZC5mzFmYeXx8IUFGP49t3lGOcoPW7vhkB3yqB33b0Sr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMUSR3iOCcYd1NH%2BO7KtwDF3XSc8qzYYNR4WkXUwQyWaeCbL4tSCzpChvN1BOYu2vQ%2BcEJSeUVZvu%2BRZUeqegGOiHKqHfekXPsCJPzjbzjU4dNSMvMKAwhURahBiuJF7vg9o2UFpMTrRblqYp0MVXdupSv5SGBTOvBb3B2qZn5%2Bol5u8OVVhn5JkmocZA8te8%2BI7NqWbvfCHtKzvYdBV753jteYezH4IlKLSBP%2BQPsl91SMGW4%2BlxQhf1SjnOVSJ3tuLRknbIMTcKAaCLjudTR0%2F67uEHXSu3V6MUXX6xspeG3z8yE43BZcDR78T2p4Gl8aUVhM%2BKl6DfqB4KldqSOFtzjy7D8TEM2AZ8679WiiXPXw1gM7cbZzzYBC23fz5Cvz9bD3s2xzTuZseeAvHJCHJSUweY9bRDJGTuEICCxNWV8%2FOM3Sp94gSYnV5c0rMV0ojSfetXqGOwo3jCLU8mHigCh6ui1Zhdcxvwz9bRzXFuy7gafOPlVPbj2%2F%2FZjr0DIs0xpdiiUNwa3T3rWjobbT9pIqz0hBlFW4Qa8Y7lwyJ9KdpThnPdtSWDiOWKDNd8ZcbeykkU1PSYWbvI9jfIx4UUwbgTiJmNE3FDxxD%2BxCUiAceaU1HEWQPqDMlsSQ7GBdhAlhp%2F2r4CKA04w79CMvQY6pgE3QgdUDj5DzrYlEv0l93unoUYNix5o7RqGJ3dt5fuPmQDTTAHRk5Sx%2FhxkqvshEHrdSXyRvr7%2BTLJLAwVECRYq0FQPgt%2FrfRg%2BEOaFopl6%2F%2B5Sbinn5UoN3FL2ibbsSCjXJ0eoRcMtOria93YakDz1u%2FCdY5r65thpXi5QeJxNTYne7PVU3oGpFmke%2BQIHlZtnCZ1T1hMZhjN19Nqhbq2bdzZUxJ8Z&X-Amz-Signature=484513735ab568fbfea20e54fd83bc84f14a4377165ce86b6bdb2f44f4883a19&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQ6SF35%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T100810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFA1Z7l7%2BTV7qwDsqks3%2Fx%2B%2BtoAqD9vT301ZnuEjqEqzAiBrZC5mzFmYeXx8IUFGP49t3lGOcoPW7vhkB3yqB33b0Sr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMUSR3iOCcYd1NH%2BO7KtwDF3XSc8qzYYNR4WkXUwQyWaeCbL4tSCzpChvN1BOYu2vQ%2BcEJSeUVZvu%2BRZUeqegGOiHKqHfekXPsCJPzjbzjU4dNSMvMKAwhURahBiuJF7vg9o2UFpMTrRblqYp0MVXdupSv5SGBTOvBb3B2qZn5%2Bol5u8OVVhn5JkmocZA8te8%2BI7NqWbvfCHtKzvYdBV753jteYezH4IlKLSBP%2BQPsl91SMGW4%2BlxQhf1SjnOVSJ3tuLRknbIMTcKAaCLjudTR0%2F67uEHXSu3V6MUXX6xspeG3z8yE43BZcDR78T2p4Gl8aUVhM%2BKl6DfqB4KldqSOFtzjy7D8TEM2AZ8679WiiXPXw1gM7cbZzzYBC23fz5Cvz9bD3s2xzTuZseeAvHJCHJSUweY9bRDJGTuEICCxNWV8%2FOM3Sp94gSYnV5c0rMV0ojSfetXqGOwo3jCLU8mHigCh6ui1Zhdcxvwz9bRzXFuy7gafOPlVPbj2%2F%2FZjr0DIs0xpdiiUNwa3T3rWjobbT9pIqz0hBlFW4Qa8Y7lwyJ9KdpThnPdtSWDiOWKDNd8ZcbeykkU1PSYWbvI9jfIx4UUwbgTiJmNE3FDxxD%2BxCUiAceaU1HEWQPqDMlsSQ7GBdhAlhp%2F2r4CKA04w79CMvQY6pgE3QgdUDj5DzrYlEv0l93unoUYNix5o7RqGJ3dt5fuPmQDTTAHRk5Sx%2FhxkqvshEHrdSXyRvr7%2BTLJLAwVECRYq0FQPgt%2FrfRg%2BEOaFopl6%2F%2B5Sbinn5UoN3FL2ibbsSCjXJ0eoRcMtOria93YakDz1u%2FCdY5r65thpXi5QeJxNTYne7PVU3oGpFmke%2BQIHlZtnCZ1T1hMZhjN19Nqhbq2bdzZUxJ8Z&X-Amz-Signature=0b5d26affec0bd0afc401616e2cbe03f10645ff20dfb8b4e319c773f678cfe32&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
