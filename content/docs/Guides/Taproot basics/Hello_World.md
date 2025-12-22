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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTUCQG2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC6xiMGQgYmV2V3NjQ2RQw3D1%2B1VMbeGkArhNCfJlqM9AiAsErhG%2BNKtlIucD6VLK6MhKKrgMqLZy3S71HSsDIDXwCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtxXwpiviAU8M14YUKtwDqmZKS15RFXvj98ZxpnFXCAuohcpLSayUsNBsIe%2FGPYuBouqMPKBHw63%2Bb6ncU86yUo28wEnPH9xmY7or37XC9DIqq1MkGuIzHrDNeLh3bSdG%2F%2BV25nmYNxkGALBmmY8xzo1ffL64bznnbzdsZacAzp2in06BiL3KLR%2BgAXldaRb6iD%2B3QbNxXGAF2oeKg%2F8anJz00NssvKOO4x7NFg8LylC6pUkTEDT8%2FL%2FKW9AVNFEru8cAQb8Jv3DCWkMgMhSNjjYBr8D3213CypQkzvbOmLChtuyuv9pj44QlfVV4pQ79AZmsiriKKJvWHG%2BM0bcDOPAiSpah%2Bio9mwMkXSi80TE02uYrl%2FX85Nx%2BzhXVZ7uzGY%2Fhnu5eB2zcgjWp12DvL6LgXK4Edfp5AAPITyzf87edNeNF%2BB7CxynQAmo4cm8hnGOPCXC3ow41JSL1iBlH253X%2F%2FQUnWZ%2BDQ2Y7mfVluj%2B7HtpPW7MCfCwhJwiJhYQHtZksELMctFmk9G4l7xL1%2FVeIy8PFmsk4tqpXStXb5wxYziT2Dxo3FGs%2BoiwepNmKZxn1KiwdCtwmXg%2B%2FkZVCOZNSXhT9KopOOOSlOUGt2o9YOGFwu85WrUfO%2FeB70%2FwbQlw9WdOH6qQKmwwjPqhygY6pgHGniKSjYNNrJehAVFrnvMHbTuLm%2BgmefS7eFl3aNeOSniQy%2BBpUo%2F%2FyRL16CTcz63ewAroEm3Hc6BmwehBV7hnGZ7laBvNNcjBH64Bnh4pq9AsmvbVvkKjzO6%2FaGsd1kjdS72epnRjVBS4cCjRCbZ2UQPY%2BrSABey%2F325rKq48pICsKmyoHEjJWvfORtr4ouugDrh0wPuU3Qe1sHnIpg4Jj9RoX%2BjR&X-Amz-Signature=0451438d2787b25200d0e4c4811b2009b5b61c3c2720d3238464e60ecf02240a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTUCQG2%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIC6xiMGQgYmV2V3NjQ2RQw3D1%2B1VMbeGkArhNCfJlqM9AiAsErhG%2BNKtlIucD6VLK6MhKKrgMqLZy3S71HSsDIDXwCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtxXwpiviAU8M14YUKtwDqmZKS15RFXvj98ZxpnFXCAuohcpLSayUsNBsIe%2FGPYuBouqMPKBHw63%2Bb6ncU86yUo28wEnPH9xmY7or37XC9DIqq1MkGuIzHrDNeLh3bSdG%2F%2BV25nmYNxkGALBmmY8xzo1ffL64bznnbzdsZacAzp2in06BiL3KLR%2BgAXldaRb6iD%2B3QbNxXGAF2oeKg%2F8anJz00NssvKOO4x7NFg8LylC6pUkTEDT8%2FL%2FKW9AVNFEru8cAQb8Jv3DCWkMgMhSNjjYBr8D3213CypQkzvbOmLChtuyuv9pj44QlfVV4pQ79AZmsiriKKJvWHG%2BM0bcDOPAiSpah%2Bio9mwMkXSi80TE02uYrl%2FX85Nx%2BzhXVZ7uzGY%2Fhnu5eB2zcgjWp12DvL6LgXK4Edfp5AAPITyzf87edNeNF%2BB7CxynQAmo4cm8hnGOPCXC3ow41JSL1iBlH253X%2F%2FQUnWZ%2BDQ2Y7mfVluj%2B7HtpPW7MCfCwhJwiJhYQHtZksELMctFmk9G4l7xL1%2FVeIy8PFmsk4tqpXStXb5wxYziT2Dxo3FGs%2BoiwepNmKZxn1KiwdCtwmXg%2B%2FkZVCOZNSXhT9KopOOOSlOUGt2o9YOGFwu85WrUfO%2FeB70%2FwbQlw9WdOH6qQKmwwjPqhygY6pgHGniKSjYNNrJehAVFrnvMHbTuLm%2BgmefS7eFl3aNeOSniQy%2BBpUo%2F%2FyRL16CTcz63ewAroEm3Hc6BmwehBV7hnGZ7laBvNNcjBH64Bnh4pq9AsmvbVvkKjzO6%2FaGsd1kjdS72epnRjVBS4cCjRCbZ2UQPY%2BrSABey%2F325rKq48pICsKmyoHEjJWvfORtr4ouugDrh0wPuU3Qe1sHnIpg4Jj9RoX%2BjR&X-Amz-Signature=080900d23b05d7253a5423af172e25543d3902e1efcc70f24e9a6b1f7b87f3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
