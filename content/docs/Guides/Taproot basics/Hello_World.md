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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDQPPVYQ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbNpsFXZ7REYh0xmA6mfD9c2%2FzA25R7ihClEcc4p0JkAiAPQlBKouvIqam6ilusdA2ODaPLuZ42NG6jBvW9S1q%2B%2FCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGF3Myyvv%2Fza0OA%2BlKtwDF2X7x72xBxlXRMFPbJLEUBBnvvbFj7lhtnl7nM%2F0q4CLv0OhSnNe0STMSh8E3FgZCiXG27w3qi8DIRDJRYNTT%2BCGkiCbFqiQTdTyDQH%2FYgJY1dkQ5tHOK7LQ17ZJeIOCRh%2BN3ko0uo2w%2FLr5TECocJ%2FLaEbIab%2FXPXZWIoWma5AlzpeBeAIj1%2BcnnZsPJ8cNsZP8wXWfHDeVx6uorlJqo%2BpKxmfb8lcd2U%2F7LbC7skBcxpaH2a000c7laUG%2B3zho%2FafeEiQZDN3w5%2FnWLqlDHdMgNkE%2BEu39Ef%2F8i3qB0j1tEqflcgDQFv%2FAlPjybNTp4Tqd%2BuVQLvpGUCNLVjadQEJJJF56k1uZx%2B4B4yrJzd1Qpyo6Wp%2FXAESYUfO%2BI7ihs%2FUsIsxgkHQ1OilmXfWx%2FBQ7Rfr%2BNVSsoJM3%2B7OFH6Ui0rcPW3%2FSTNgyVCUVc%2F5OERrSqXnRxRlC%2Bp9IWr9HuYkHE17nJwp3e%2FoNIYPt4DMpxjAIiLHFj1u3OC%2FO%2B1nd7P34cFB0AdRLdhp3MV5wV7dAdP5dJYxvQWYqDmryno5kzt0ZYsPh9apJQO5J8iFljKB17LT9xKwjSics5cfdj%2F7R5U9W815iIcxH0SWYyxivjUbu1aWEzvYZK3ow3%2FGvyAY6pgE%2B5i6BYwP267CuwPJRZU3Q0wfkP5u2aUMrL7TSp9mJbVYAqC%2F4V0y3QHyl%2FWnJHcEuebxmnk1ICQW0SDlzpAOrzoJjrbvDg7Nm3iu%2BqLgraJxkl5oto4yRtYNOLjEMUQh2BuPjoWCTeP7BJQDe5d3QwV123MdKZylGhKdrMoEbG7gm0ZdykjFf6Ra6Xsx0XnVcoPNHtstVUX1K8Xdn%2F26NhvorZmUz&X-Amz-Signature=b78f9343974d09b02265c37e7308af17045a766451c65397fb401c300cd1a535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDQPPVYQ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbNpsFXZ7REYh0xmA6mfD9c2%2FzA25R7ihClEcc4p0JkAiAPQlBKouvIqam6ilusdA2ODaPLuZ42NG6jBvW9S1q%2B%2FCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGF3Myyvv%2Fza0OA%2BlKtwDF2X7x72xBxlXRMFPbJLEUBBnvvbFj7lhtnl7nM%2F0q4CLv0OhSnNe0STMSh8E3FgZCiXG27w3qi8DIRDJRYNTT%2BCGkiCbFqiQTdTyDQH%2FYgJY1dkQ5tHOK7LQ17ZJeIOCRh%2BN3ko0uo2w%2FLr5TECocJ%2FLaEbIab%2FXPXZWIoWma5AlzpeBeAIj1%2BcnnZsPJ8cNsZP8wXWfHDeVx6uorlJqo%2BpKxmfb8lcd2U%2F7LbC7skBcxpaH2a000c7laUG%2B3zho%2FafeEiQZDN3w5%2FnWLqlDHdMgNkE%2BEu39Ef%2F8i3qB0j1tEqflcgDQFv%2FAlPjybNTp4Tqd%2BuVQLvpGUCNLVjadQEJJJF56k1uZx%2B4B4yrJzd1Qpyo6Wp%2FXAESYUfO%2BI7ihs%2FUsIsxgkHQ1OilmXfWx%2FBQ7Rfr%2BNVSsoJM3%2B7OFH6Ui0rcPW3%2FSTNgyVCUVc%2F5OERrSqXnRxRlC%2Bp9IWr9HuYkHE17nJwp3e%2FoNIYPt4DMpxjAIiLHFj1u3OC%2FO%2B1nd7P34cFB0AdRLdhp3MV5wV7dAdP5dJYxvQWYqDmryno5kzt0ZYsPh9apJQO5J8iFljKB17LT9xKwjSics5cfdj%2F7R5U9W815iIcxH0SWYyxivjUbu1aWEzvYZK3ow3%2FGvyAY6pgE%2B5i6BYwP267CuwPJRZU3Q0wfkP5u2aUMrL7TSp9mJbVYAqC%2F4V0y3QHyl%2FWnJHcEuebxmnk1ICQW0SDlzpAOrzoJjrbvDg7Nm3iu%2BqLgraJxkl5oto4yRtYNOLjEMUQh2BuPjoWCTeP7BJQDe5d3QwV123MdKZylGhKdrMoEbG7gm0ZdykjFf6Ra6Xsx0XnVcoPNHtstVUX1K8Xdn%2F26NhvorZmUz&X-Amz-Signature=a70ba54fa0ebce9f8d0211e32cbf15725fc56e462e3c545787679c135649b94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
