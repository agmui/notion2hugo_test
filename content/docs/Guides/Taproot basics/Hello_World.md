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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OK7QKA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICqCK6POIQ1U2fOaLadfYtW8QQoJqyPG64umuCQgz4M4AiEAnComb%2FQwmg1IdoRH0koXQnn3C%2BNn%2BfDznWvtuFJmbtEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMvMPIuzLFxMPiUf9ircA3sZLPlPIKqqW4xK3UUyJZKYGEcCcfPIGoI0%2FhPynUtaf12xwsn1WZJvptl9n7DxRwzSHx4FLcS%2BqwR22zB%2Bsaj9Pd6eNTZfZjFsmyP9FxJ%2FypcouF4aIn%2BAvmgUUVyNDeBDogsSxUjlrdV%2FkbTHcJ5AiNi8HvpeQazz%2F4hGd2bPRDW6Rsj%2BLDLvM5h8CzUW%2BZvQst6NeWIHB6HHt7FM5SpQoowma0mAWPkiS72%2BIDNKOquQwR0nCGO%2BHk6pGcvs8Hndz4eu3b%2BJavUZsb9AP2e8Bx1wTw5sYLPrOkuAvJjFp6%2F6oufg%2B7ToEg7eCZcod7Vux1ZA5WmfHdibhLxzgvhZPz%2FRaRKCc41O%2BuIPjbGBASNwReZUGql9NxWDVz2LlxrRnVy7SINAhbvjv6Tiw%2BmNUI2BNr9%2BC1jWqYdjrJgKFy3U486OzKICEgjN24Tgm9qP9MorqfYLolXVQ3XsTn8HepnNdH7tQta4qTH69Hr167aarx%2F2nNjq2Wpy7cS8eP3jJHK3jduqlvj%2BfqGjXZST94UwllmNpeNmoIlW5LdZlc9ZCLwVSdksZaN16PIAmGYP0o8vjmpphJAGJRC0Q4SNOQOn1RJ12tus6GM%2BijvFJ%2B%2FKJr9vqnANpeUAMPaDqcAGOqUBWhNZkPTgHllnC%2B9bqc1gylCZjm6PyrVZBzX7cdbBsGpq4SekS%2F24Jk677BTNbVrKxSQi3VzyzQEK%2FYkLPLSQ%2BPgKxCgqxyP2FuoYMIW7wgsla7nlLS0Mj5mk1eyA4Po%2FZCnltz2JRw8yvJS3nv4z6%2F8aYdtkY8cbc52DwA7JN0ohKzwahvDLMXfraFz9TdTfZ03RRuF6EYusGi6%2BwAlFX%2B6o9ZQL&X-Amz-Signature=f792c90a65d97dc591221bbbf8b036b0df610a67518a8002d2f0fe6291f9808a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OK7QKA%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICqCK6POIQ1U2fOaLadfYtW8QQoJqyPG64umuCQgz4M4AiEAnComb%2FQwmg1IdoRH0koXQnn3C%2BNn%2BfDznWvtuFJmbtEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMvMPIuzLFxMPiUf9ircA3sZLPlPIKqqW4xK3UUyJZKYGEcCcfPIGoI0%2FhPynUtaf12xwsn1WZJvptl9n7DxRwzSHx4FLcS%2BqwR22zB%2Bsaj9Pd6eNTZfZjFsmyP9FxJ%2FypcouF4aIn%2BAvmgUUVyNDeBDogsSxUjlrdV%2FkbTHcJ5AiNi8HvpeQazz%2F4hGd2bPRDW6Rsj%2BLDLvM5h8CzUW%2BZvQst6NeWIHB6HHt7FM5SpQoowma0mAWPkiS72%2BIDNKOquQwR0nCGO%2BHk6pGcvs8Hndz4eu3b%2BJavUZsb9AP2e8Bx1wTw5sYLPrOkuAvJjFp6%2F6oufg%2B7ToEg7eCZcod7Vux1ZA5WmfHdibhLxzgvhZPz%2FRaRKCc41O%2BuIPjbGBASNwReZUGql9NxWDVz2LlxrRnVy7SINAhbvjv6Tiw%2BmNUI2BNr9%2BC1jWqYdjrJgKFy3U486OzKICEgjN24Tgm9qP9MorqfYLolXVQ3XsTn8HepnNdH7tQta4qTH69Hr167aarx%2F2nNjq2Wpy7cS8eP3jJHK3jduqlvj%2BfqGjXZST94UwllmNpeNmoIlW5LdZlc9ZCLwVSdksZaN16PIAmGYP0o8vjmpphJAGJRC0Q4SNOQOn1RJ12tus6GM%2BijvFJ%2B%2FKJr9vqnANpeUAMPaDqcAGOqUBWhNZkPTgHllnC%2B9bqc1gylCZjm6PyrVZBzX7cdbBsGpq4SekS%2F24Jk677BTNbVrKxSQi3VzyzQEK%2FYkLPLSQ%2BPgKxCgqxyP2FuoYMIW7wgsla7nlLS0Mj5mk1eyA4Po%2FZCnltz2JRw8yvJS3nv4z6%2F8aYdtkY8cbc52DwA7JN0ohKzwahvDLMXfraFz9TdTfZ03RRuF6EYusGi6%2BwAlFX%2B6o9ZQL&X-Amz-Signature=6cf9b951a5869de84a9424e853c011b7972473fc4109be43d34b6aa16230a2a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
