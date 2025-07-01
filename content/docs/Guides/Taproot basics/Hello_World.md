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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEEL7DH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjr6Xq92HZ4%2B4JLHpw8poy4FmcqqFLc65sXwopbEFaVAiBXmN0GjjlDO0MsAxeHtBShejzYVxNqF%2FXEwY9cdeUTtCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1JgibS%2Bm08vZvPivKtwDiFEy0gHm2BNopG9EYiFZHpAmqU2Fnqopx0B5j83X9RKOxk1Ps%2FbxRUpq6cKz%2FOoTVW825VDxRdI5L1QyH1thaeQ3El30dHH1btbLkAHTcBdMpKgncQmYYQNNFwvbkVp5ux%2Bd7xzgveTILgfwJTA0DLWcXqEQomB%2FTCG7JMYDoFEkxfhlYBMIrtJurBcTiEEhbPmq06zqHkV5tdD0Y%2FCzb%2Fb4yR0pIU6%2FfEwkAplKrhRutAy8wEc1T%2BROWqT3aPsMEYnH4m7js1h%2BVuMhZ%2BGoSLvgb%2FWwho7lL5d2NWCa58MJfhLwIWG%2FgW4i%2Bp5fa0MFIz98l9eupzD%2FLTMwCfT3dq8Lfk9BUglRuDupZdvFDOOLJ0RiGVVkbWU3v9u1YtnnBKnQywjRyAZPB9qi08uGYKsA8qJ5oo7GusfQfZlR0wkbDqSBmnL4mUvUMKQp7bpw%2BPJGALdjUybL2cDv%2FvcOIPMnuJxY65TSMsz1WY4N7scO5XivjDWrZmD76RZMVOrqj06dNXSLlKfJ2nXRToX2f8uub7RWQOU1dslhHyLweZiqOeb4sV3N1zarjZBGxZqANemJopAv5Pim7AeN%2B4ILo8iyF5JMEDIOZKpV2JxBM2agqkeK3%2FnGhcEesdYw3cOQwwY6pgGfrTLP5qXOGIo5ymp6r3kDYPt%2F2Mh4zlMiQBdzQf%2B9umqWGDmRp77tnZC4d6HjsTuTPTEyE5BXh66dVso5%2BaFMC8XxBFH8NqsspJ55zjPwabaKg4vK9rwM5zac7Phfz3pzDBAMXjmj0v%2FbwNQB%2B0jINlukbcqFAlRmVFKGfZTJVr8JrJXpUjEv5f%2Bay517gIOnsJwToJeUeCYSKsSgnLBN5foUF89z&X-Amz-Signature=ceb17e99ec148d3ac5b5c61cdea5f7fd5243affcdb11645964ced3956c6b274b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIEEL7DH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjr6Xq92HZ4%2B4JLHpw8poy4FmcqqFLc65sXwopbEFaVAiBXmN0GjjlDO0MsAxeHtBShejzYVxNqF%2FXEwY9cdeUTtCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1JgibS%2Bm08vZvPivKtwDiFEy0gHm2BNopG9EYiFZHpAmqU2Fnqopx0B5j83X9RKOxk1Ps%2FbxRUpq6cKz%2FOoTVW825VDxRdI5L1QyH1thaeQ3El30dHH1btbLkAHTcBdMpKgncQmYYQNNFwvbkVp5ux%2Bd7xzgveTILgfwJTA0DLWcXqEQomB%2FTCG7JMYDoFEkxfhlYBMIrtJurBcTiEEhbPmq06zqHkV5tdD0Y%2FCzb%2Fb4yR0pIU6%2FfEwkAplKrhRutAy8wEc1T%2BROWqT3aPsMEYnH4m7js1h%2BVuMhZ%2BGoSLvgb%2FWwho7lL5d2NWCa58MJfhLwIWG%2FgW4i%2Bp5fa0MFIz98l9eupzD%2FLTMwCfT3dq8Lfk9BUglRuDupZdvFDOOLJ0RiGVVkbWU3v9u1YtnnBKnQywjRyAZPB9qi08uGYKsA8qJ5oo7GusfQfZlR0wkbDqSBmnL4mUvUMKQp7bpw%2BPJGALdjUybL2cDv%2FvcOIPMnuJxY65TSMsz1WY4N7scO5XivjDWrZmD76RZMVOrqj06dNXSLlKfJ2nXRToX2f8uub7RWQOU1dslhHyLweZiqOeb4sV3N1zarjZBGxZqANemJopAv5Pim7AeN%2B4ILo8iyF5JMEDIOZKpV2JxBM2agqkeK3%2FnGhcEesdYw3cOQwwY6pgGfrTLP5qXOGIo5ymp6r3kDYPt%2F2Mh4zlMiQBdzQf%2B9umqWGDmRp77tnZC4d6HjsTuTPTEyE5BXh66dVso5%2BaFMC8XxBFH8NqsspJ55zjPwabaKg4vK9rwM5zac7Phfz3pzDBAMXjmj0v%2FbwNQB%2B0jINlukbcqFAlRmVFKGfZTJVr8JrJXpUjEv5f%2Bay517gIOnsJwToJeUeCYSKsSgnLBN5foUF89z&X-Amz-Signature=398840af53e11de78961f5797a2b0789494679c51cf0cbdb338da9abc0e0426d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
