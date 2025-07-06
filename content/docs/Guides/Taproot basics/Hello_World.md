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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZIQEOT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF7U2uHvIAOrEX6Cv1KtWa7R8VoRUR2LYH2Bg0NzLdIQIgGKwuO1bjyI%2Fd09Ah6IRKPetLsyep15qzBoje2CArN1Iq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKesuTOejCdHBTxzoyrcA1wql4L1X0rS9hnZi7mZTaM1MoHS1hgdJNs82ogKDSEjeiR%2B%2FTLL9CfcVMVBS%2FDLxN3jD4gFHI1Q7ZKjwQ1i0N%2BSppWRaUAFUf8%2F%2FQRqHF%2Fi0x1ux9L2lO%2BBRU4%2B5DqGMlwqDCQ%2Fj00Ut8biEB%2FYUZcWQtvkfvTSZJ%2BK11jPNL%2F6NlubEQ6ahEvXTV8mXaTL3KfN%2F9x9Jf%2B5DOuURM2u%2F%2FjAYRs9YNtWvYecInNwH1Im1K%2FRXiOZsrNLOWi7oG9u8EAwSrPTzdZRPQoHqVGYVvMJDQn0CTq8vutZIOrmxhfzdow60%2Fpcs9zeg2rvK2fk0RajjWRUG4d0ycfaJoRxNYjSIPuLWCFCT56D5MMepBDgVd1kxDkGd4eXeYbMC1ZDVcQjkvS8zqcXMN7Eo%2FzLUYw3mE8knT7MUOZgqujvfUTufF%2FTCvekGdxidoSVEO9Iu3fixK3DTI1FFW9sFhPZDbv1poCEzm6AV%2FS%2FJAroGqNqZ88pdi59RGcpXdl4oQHZi2IF2pXRM898qnLwkK%2BBjxkN71BtUHiFgHaJwsY02zkI0uqLUPKS6L5WevOCjNm%2FoRIyMDJXmAn1pExP%2FKItwcH8oybhmQkF9JCOMhjaBXRtvITCURH3Eu5jP8uTMJWwqMMGOqUBZeNMpZiuig6eMY8Xj%2BUWmqe8JiG2z8zwXZE9HnUXzhrJ%2BfFU4Yfm8RfGAqYwg2iffLe8cEHYJH1zfLQ31emxec4xY5K5sTmmnIz0%2FoJxY9e4iRdXV%2FZxL%2BSu9h6HaJmjl4pGjA%2F03J8ID3gcbExnm4BLzQOiodCNtOO%2BjoOxvi1ApqbNPgWe3%2FwnTGjOG0JPw6YZK8p2z4sVDMk8O119GVPw%2FUXL&X-Amz-Signature=6444257a82e0cb64596b9ba48aa190128a4196e6bace08810e0b8565e069c22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WZIQEOT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDF7U2uHvIAOrEX6Cv1KtWa7R8VoRUR2LYH2Bg0NzLdIQIgGKwuO1bjyI%2Fd09Ah6IRKPetLsyep15qzBoje2CArN1Iq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDKesuTOejCdHBTxzoyrcA1wql4L1X0rS9hnZi7mZTaM1MoHS1hgdJNs82ogKDSEjeiR%2B%2FTLL9CfcVMVBS%2FDLxN3jD4gFHI1Q7ZKjwQ1i0N%2BSppWRaUAFUf8%2F%2FQRqHF%2Fi0x1ux9L2lO%2BBRU4%2B5DqGMlwqDCQ%2Fj00Ut8biEB%2FYUZcWQtvkfvTSZJ%2BK11jPNL%2F6NlubEQ6ahEvXTV8mXaTL3KfN%2F9x9Jf%2B5DOuURM2u%2F%2FjAYRs9YNtWvYecInNwH1Im1K%2FRXiOZsrNLOWi7oG9u8EAwSrPTzdZRPQoHqVGYVvMJDQn0CTq8vutZIOrmxhfzdow60%2Fpcs9zeg2rvK2fk0RajjWRUG4d0ycfaJoRxNYjSIPuLWCFCT56D5MMepBDgVd1kxDkGd4eXeYbMC1ZDVcQjkvS8zqcXMN7Eo%2FzLUYw3mE8knT7MUOZgqujvfUTufF%2FTCvekGdxidoSVEO9Iu3fixK3DTI1FFW9sFhPZDbv1poCEzm6AV%2FS%2FJAroGqNqZ88pdi59RGcpXdl4oQHZi2IF2pXRM898qnLwkK%2BBjxkN71BtUHiFgHaJwsY02zkI0uqLUPKS6L5WevOCjNm%2FoRIyMDJXmAn1pExP%2FKItwcH8oybhmQkF9JCOMhjaBXRtvITCURH3Eu5jP8uTMJWwqMMGOqUBZeNMpZiuig6eMY8Xj%2BUWmqe8JiG2z8zwXZE9HnUXzhrJ%2BfFU4Yfm8RfGAqYwg2iffLe8cEHYJH1zfLQ31emxec4xY5K5sTmmnIz0%2FoJxY9e4iRdXV%2FZxL%2BSu9h6HaJmjl4pGjA%2F03J8ID3gcbExnm4BLzQOiodCNtOO%2BjoOxvi1ApqbNPgWe3%2FwnTGjOG0JPw6YZK8p2z4sVDMk8O119GVPw%2FUXL&X-Amz-Signature=d6fbcb38fbfa1d5c7ccdb30fc98218ea02b6b5ba76c21181cd213b51418a460c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
