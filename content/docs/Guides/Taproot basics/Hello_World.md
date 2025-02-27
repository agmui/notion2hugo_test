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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7U7VHA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWMScfZHY9BYoy%2FpDhmhdr6sA1TQYTguArFNK2m5gh3AiB8qjCKj7Zv1NBfEOWRBoKahshOva9F3FEs7deEt%2FlYICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMPwIZdV8M40JXNk0OKtwDtGWYAQMsXUTuhKrZB3NFJTW%2F%2FrLsBxvjG02cXQDxkOx9GqjR3CBD2RXfqYVOqQCRv9jgNrk7vgQRVdjsYlyuztbuIBtKx3bdGf6KAkAyfs6tegfrekqdPRPR5JZpetbicix1izSeXu0uz8Dx9LA2o1VxFl7C2XL2KmGjEfZKa9jBnXZcszKwgbeL0P0FmOxa2oVU6bK0sJbCTPtYyBK94iFNYfDcGw%2FTcl0t1S4QB0XKfhJAzd%2BuAPN7q7Zr7Xt5ZV1KTCbOzDSiV8qpz9pKIswqgmcxSEBkkLf%2FGquIO11kd3BbaRs1RrMp7%2FNW8pnOqvQqiguz4zu5kuR%2FM8E52jVPSzX8QuEgtlUxT2ybZj4S%2BBv6EhN8uiTKttWG7aaTSH9xmfpR2ar3syHLS9cLycTtj6hsEVs2wmqhKMNMbnBKZfandxCsr%2FcMW%2BtiUJZA5LbUa5dMo6OK0u3rUTdkh9evN2qTLQFXNuPAyDLCqP%2BCl2YvztNeKCD63y2O7OYimFFDKYZLtg0QQ1va8xn8i16Is3BsYZR0yCfpwccMdkPL6er5qRxZdCOFKyTziHDl5uVr4AZNZZpiFIvFn7PMppTwtcAWNW%2BsPUHmGtRX3qDw0E11dqP49ebVjPAwkpX%2FvQY6pgGbaTtq80cCkCIijQRLz0mEZ%2BOnFcztc9vszDHL%2B4LRHvqN3RB4%2FlovI%2BlImwYvytwwrm63lxU8SHiuznyhidZCB%2BFWMTt%2F9bA7yr0FMuVuk00lYl2%2BzNUmod46fZ4lAQMoVulXIP%2FECOtx%2B1%2BmORZoiOEVpsCOp7KtJkJQAHTG82L0kQzj3ajIpwjAC6MOe9Nfqni3TL16u%2FcAZGEhskKf%2FaeV4iSw&X-Amz-Signature=2eab9f0d8afca094bac297840d9e4adf77bede8567fd84d223f365697528ab72&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7U7VHA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T031647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIFWMScfZHY9BYoy%2FpDhmhdr6sA1TQYTguArFNK2m5gh3AiB8qjCKj7Zv1NBfEOWRBoKahshOva9F3FEs7deEt%2FlYICr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMPwIZdV8M40JXNk0OKtwDtGWYAQMsXUTuhKrZB3NFJTW%2F%2FrLsBxvjG02cXQDxkOx9GqjR3CBD2RXfqYVOqQCRv9jgNrk7vgQRVdjsYlyuztbuIBtKx3bdGf6KAkAyfs6tegfrekqdPRPR5JZpetbicix1izSeXu0uz8Dx9LA2o1VxFl7C2XL2KmGjEfZKa9jBnXZcszKwgbeL0P0FmOxa2oVU6bK0sJbCTPtYyBK94iFNYfDcGw%2FTcl0t1S4QB0XKfhJAzd%2BuAPN7q7Zr7Xt5ZV1KTCbOzDSiV8qpz9pKIswqgmcxSEBkkLf%2FGquIO11kd3BbaRs1RrMp7%2FNW8pnOqvQqiguz4zu5kuR%2FM8E52jVPSzX8QuEgtlUxT2ybZj4S%2BBv6EhN8uiTKttWG7aaTSH9xmfpR2ar3syHLS9cLycTtj6hsEVs2wmqhKMNMbnBKZfandxCsr%2FcMW%2BtiUJZA5LbUa5dMo6OK0u3rUTdkh9evN2qTLQFXNuPAyDLCqP%2BCl2YvztNeKCD63y2O7OYimFFDKYZLtg0QQ1va8xn8i16Is3BsYZR0yCfpwccMdkPL6er5qRxZdCOFKyTziHDl5uVr4AZNZZpiFIvFn7PMppTwtcAWNW%2BsPUHmGtRX3qDw0E11dqP49ebVjPAwkpX%2FvQY6pgGbaTtq80cCkCIijQRLz0mEZ%2BOnFcztc9vszDHL%2B4LRHvqN3RB4%2FlovI%2BlImwYvytwwrm63lxU8SHiuznyhidZCB%2BFWMTt%2F9bA7yr0FMuVuk00lYl2%2BzNUmod46fZ4lAQMoVulXIP%2FECOtx%2B1%2BmORZoiOEVpsCOp7KtJkJQAHTG82L0kQzj3ajIpwjAC6MOe9Nfqni3TL16u%2FcAZGEhskKf%2FaeV4iSw&X-Amz-Signature=892e65752cfd1456a5a38fd45ef35121c4c74caf2acdb59a9512b6a9f2bfe3af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
