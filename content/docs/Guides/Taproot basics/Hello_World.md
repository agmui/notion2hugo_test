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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQMCDAK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID01khOSvwnpffWBRjNMI7AxkVGsMpZ2p0yDFDDPDzgRAiAPVLQeb5fW7ff%2F%2BCDA891A7lLKqh9J6hnGquypSt0DmiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TxqZMbnR6iT7SpVKtwDE5R2c5LxGhT7JqFQwsegf2qNaxJLu7Lbh%2FeyaOF3J7qqDGChG%2Ba1EPuBpTWg29pEZq9jhX9qywlIDdOr0EfGA6ugKAndJMPeEyLft2xKM%2BzaSvrYaIzCSQqbFb%2BLO4BHXyaB8HQycyUo5NDJWGxHpz32Sco1h2opGFMO24a6jagBiUGP5dsapAqut6wKEtXlDF5qs8axVF%2F3ODL1fZPSEzupVLklkVyUT9YV1fpR%2FRkvMvioeYCyqiUwBNK2gm9%2FuE38zrRjNCMISSnSpnQfU0gCFQqTeQYi5IlauGhSep%2FG9OnfhjlPDdHJ80CZUNb57VkqUyk8olZ9GXw92KctKMuVCmmQoVU3TnMEGTE4J0nLQ%2BvM7Baf2nTa8wSvUNjuu4DbM2eKnX%2BLdItbktbHRDQFdSRbpcjHeWnU1yztQdE2VLeom3seIYJAfoERhto16KiMZgR7mMCE5bUcII0CM0pKkYqv4DA%2FXGSbxuR9GOxUthAnxyHj9RNuZgfkgGqdL%2BqgoGiWhwXyQS3wKO4h%2FxwxN8vEopMRPV89VVjoOVtWW0Jd0CmCnWMifN464SWiHywoHrY2lXT%2FyYMe2jdkcDNwxmEcb%2FA5%2BYQissqSoggJLVcScffCsduT0nwwx7XGwwY6pgG5F%2FPi5TZpwRvxltUMU4OMKfx43fS4x2ClxZXhY7WAV3r0hKaH7yi8F%2BkUjRD8Koz06hMvGwAQ94JmSwZ0U4sTHVijAiKg3o7EjWcc6ggmcac6%2Bp8ErXylnQeVO5IMLzIiSMHRaCckVTWOjN9gnIdUQfsrstN4DFyc4hFMJr2Jj8zKyKWI4TPBfkQcUOtkecnsXAAkB9hzy%2FCAmcmyBVnMhW6U6lt4&X-Amz-Signature=609bb9fa7779d71b339c259d310c6bece68310287323543bab17965a3d87ef1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQMCDAK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T034719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID01khOSvwnpffWBRjNMI7AxkVGsMpZ2p0yDFDDPDzgRAiAPVLQeb5fW7ff%2F%2BCDA891A7lLKqh9J6hnGquypSt0DmiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3TxqZMbnR6iT7SpVKtwDE5R2c5LxGhT7JqFQwsegf2qNaxJLu7Lbh%2FeyaOF3J7qqDGChG%2Ba1EPuBpTWg29pEZq9jhX9qywlIDdOr0EfGA6ugKAndJMPeEyLft2xKM%2BzaSvrYaIzCSQqbFb%2BLO4BHXyaB8HQycyUo5NDJWGxHpz32Sco1h2opGFMO24a6jagBiUGP5dsapAqut6wKEtXlDF5qs8axVF%2F3ODL1fZPSEzupVLklkVyUT9YV1fpR%2FRkvMvioeYCyqiUwBNK2gm9%2FuE38zrRjNCMISSnSpnQfU0gCFQqTeQYi5IlauGhSep%2FG9OnfhjlPDdHJ80CZUNb57VkqUyk8olZ9GXw92KctKMuVCmmQoVU3TnMEGTE4J0nLQ%2BvM7Baf2nTa8wSvUNjuu4DbM2eKnX%2BLdItbktbHRDQFdSRbpcjHeWnU1yztQdE2VLeom3seIYJAfoERhto16KiMZgR7mMCE5bUcII0CM0pKkYqv4DA%2FXGSbxuR9GOxUthAnxyHj9RNuZgfkgGqdL%2BqgoGiWhwXyQS3wKO4h%2FxwxN8vEopMRPV89VVjoOVtWW0Jd0CmCnWMifN464SWiHywoHrY2lXT%2FyYMe2jdkcDNwxmEcb%2FA5%2BYQissqSoggJLVcScffCsduT0nwwx7XGwwY6pgG5F%2FPi5TZpwRvxltUMU4OMKfx43fS4x2ClxZXhY7WAV3r0hKaH7yi8F%2BkUjRD8Koz06hMvGwAQ94JmSwZ0U4sTHVijAiKg3o7EjWcc6ggmcac6%2Bp8ErXylnQeVO5IMLzIiSMHRaCckVTWOjN9gnIdUQfsrstN4DFyc4hFMJr2Jj8zKyKWI4TPBfkQcUOtkecnsXAAkB9hzy%2FCAmcmyBVnMhW6U6lt4&X-Amz-Signature=9f8ed7b2d47cf2201531c820d3675ba9940407e42a446d179dc95c834aa6b1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
