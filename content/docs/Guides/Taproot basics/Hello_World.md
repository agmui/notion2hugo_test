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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTE4ZUG7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWFikTCs%2BVxuLH%2BDv2kKxXGf2n0MWYiz9ixvLtdajSAAIhAMCj19ge%2FKZ57PZoKwf5v0CEo%2FqiOsv0KfhAhkPBFtuvKv8DCCYQABoMNjM3NDIzMTgzODA1IgydSHMzPKAttjc%2BrlEq3AOrxya3jfAGEag962UfOSNFfuaOLlhcB3EL6%2FFtxVKGmpXAYDedivy%2B9FLKUau%2BP6ZgdvDnOiMDn6WBkfg3vq6FLeRr7uamtMU05ASGHT%2BNZ3aKOeoQhd3W43gunmGhtjC2X3loryYOvNbRn6OcLWy4CxypL4j6UwSQnqK9PVyQ2AfG%2FttjPgqVt2bD7YC2N5S3MCUVltWwvggJWFYxxcKpfgMQ7jDeR%2BVsQ6PVQQ%2FbEiEmijT8fUI%2BeqdJIhnTVUJ5Pq3hAW9kWsrL0RPbGv9Kdme2eW8xmy%2FlyOZX93Dz4dOswrxWW07PJzN%2F3smgdq8qyNR3LkU9mCY%2F039iZiIKgEcNk%2BLbhXezxJ%2BDZaU8S996ouSyR0zQaRiqY6TOV3%2Bb%2B9t3uEQwxIZgFIwrocXmLln1bo3vB6D9t4gPsjqczAFe3XAQahoCnucri1AZNj%2F83nBamALnI87LrvYOz2Vjo5b%2FlUpWZyvSLCTKtvsuWeiY%2FZWWL9CJH2uFko6MIpErASkX0T5a7K2N23wOLxagUn87aj2dSAdVUzbdHV1RQ6PMVqNWHATrKJZQBe82qDSFBc4CSsBX%2BLw9a22%2B94BXzgt1psg9xTN%2BaIw5%2BmuJO9EhwS%2BvQHlSOuP0kjDFucrBBjqkASM6gOizkLUZUT9v3v9JFKBjsEDZuVJIrrLmJj0r7f90kw%2BGgbY59dUMPdjxugiw%2BkC552vAx6NqDoK%2FNj%2B9QhakvUQrWUZY1HfeZBIo2PdVS2XJrurcKgpbLGVwBzmBBBsHr2trsgKN7P6I4QcV%2FL3cI0fqzEMeKxC5Q62884hhlqE2sF%2FFcw56xsL55B2AVU1k6ToEdDwbak9k%2FuHLZp2tulv8&X-Amz-Signature=0534c069f0881e191b3e19ac7e09d2ee14ba827e6b620fbe10cbb14fd8e18dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTE4ZUG7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDWFikTCs%2BVxuLH%2BDv2kKxXGf2n0MWYiz9ixvLtdajSAAIhAMCj19ge%2FKZ57PZoKwf5v0CEo%2FqiOsv0KfhAhkPBFtuvKv8DCCYQABoMNjM3NDIzMTgzODA1IgydSHMzPKAttjc%2BrlEq3AOrxya3jfAGEag962UfOSNFfuaOLlhcB3EL6%2FFtxVKGmpXAYDedivy%2B9FLKUau%2BP6ZgdvDnOiMDn6WBkfg3vq6FLeRr7uamtMU05ASGHT%2BNZ3aKOeoQhd3W43gunmGhtjC2X3loryYOvNbRn6OcLWy4CxypL4j6UwSQnqK9PVyQ2AfG%2FttjPgqVt2bD7YC2N5S3MCUVltWwvggJWFYxxcKpfgMQ7jDeR%2BVsQ6PVQQ%2FbEiEmijT8fUI%2BeqdJIhnTVUJ5Pq3hAW9kWsrL0RPbGv9Kdme2eW8xmy%2FlyOZX93Dz4dOswrxWW07PJzN%2F3smgdq8qyNR3LkU9mCY%2F039iZiIKgEcNk%2BLbhXezxJ%2BDZaU8S996ouSyR0zQaRiqY6TOV3%2Bb%2B9t3uEQwxIZgFIwrocXmLln1bo3vB6D9t4gPsjqczAFe3XAQahoCnucri1AZNj%2F83nBamALnI87LrvYOz2Vjo5b%2FlUpWZyvSLCTKtvsuWeiY%2FZWWL9CJH2uFko6MIpErASkX0T5a7K2N23wOLxagUn87aj2dSAdVUzbdHV1RQ6PMVqNWHATrKJZQBe82qDSFBc4CSsBX%2BLw9a22%2B94BXzgt1psg9xTN%2BaIw5%2BmuJO9EhwS%2BvQHlSOuP0kjDFucrBBjqkASM6gOizkLUZUT9v3v9JFKBjsEDZuVJIrrLmJj0r7f90kw%2BGgbY59dUMPdjxugiw%2BkC552vAx6NqDoK%2FNj%2B9QhakvUQrWUZY1HfeZBIo2PdVS2XJrurcKgpbLGVwBzmBBBsHr2trsgKN7P6I4QcV%2FL3cI0fqzEMeKxC5Q62884hhlqE2sF%2FFcw56xsL55B2AVU1k6ToEdDwbak9k%2FuHLZp2tulv8&X-Amz-Signature=f6f5bbf0e594d11c3ad93ba7cef2753786c48a818c79554c467540d5757014d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
