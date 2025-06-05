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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK34VKXK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDAkCYR8iSxCPSyNrAWHb6tOSorraZ5vxIDf%2B4CBeW2CgIhAJc8nobBEr7etEoGtxcePP8%2ByI1wdv7LrbIqvDzBten%2FKv8DCEUQABoMNjM3NDIzMTgzODA1IgwdRCzBZ1%2F%2BdlBvhfgq3ANhau5LAyVPPDASLAk2ZVlvuLcVUqE7CckgFmoU9i7bpRGYDN7WVhW2ffUNFNlYSKV7CrEQYkpgLL6%2BSb9ocpkACjzFj0Sl1aDNrUIbau4XtQ8AgHYFPGJ8TtBpZzmgdRhfJMY5vBmPF%2B8lIxhBJEN8e8cVplyghH3J7RzAPsa7%2Fqj8ws3BVxo3zDZYq7FGIZyoYLPy3VRCpy5XCBPTCfq07R9jSCvDs1eefTFLU1b5sNWNMqwgPjgYBz2GRvxEboInWdRp75w8kW9kiPb5TkpxRQqvxtwy5gL%2FNIh%2FRqdE1CT%2BYsgBIgGfpODk4D0Pyan4WuJxEkZQ1d6gF9yNWYNodCUYdcVPu9xRE0TzdGWLtXgw4eqbUgeltfkPFmTpeIMejbPeyC5H1WF0zDWbvz71gFLytUkiqOEYsT7vyU4DLkS9um9l3nbAetOQmls4LqpnBpUKp0JQd6LGHPunvx%2FA96KClB0Z6fpxkWA5m11iXd5uIsiFrIPUKz2fe2Qwluk0kJghopwRAQlRdKfrZ%2BvKsne6mG8482ZoTCv3o1XwLkLjH71xXhlbNNFvq58rzI7Vygq9jCkUo8ZJu8aiYjVhf4VWNZAgmfqH7muN%2BWrdpA4Fbudh2EWb2f0epzCVjYbCBjqkAQ%2Bg9dUcUMDXZaiShk0DEofuL71il9XHomiIVVFmrDomhLEMBN4%2FB%2BnENjwYcLprTBnmEIQI%2BTtEZwhzQnw4WkXDPK452DRhuKj2TlQidtbKNU%2BExQ%2FNDW081SD4Sth8ICKO%2BdjUND%2FvE3wTp7E9JqQbLwTyazFjWCH1Jw9AYSsNzqs1Pq2oEe8fqwU%2FOvc5zTg6UL3vKRvk0cHQikj0bw4qBYhz&X-Amz-Signature=f7ef42995fe2f951c9d2ed9047369105e5d65c3416cbda9e931367337c5904b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK34VKXK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T132433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDAkCYR8iSxCPSyNrAWHb6tOSorraZ5vxIDf%2B4CBeW2CgIhAJc8nobBEr7etEoGtxcePP8%2ByI1wdv7LrbIqvDzBten%2FKv8DCEUQABoMNjM3NDIzMTgzODA1IgwdRCzBZ1%2F%2BdlBvhfgq3ANhau5LAyVPPDASLAk2ZVlvuLcVUqE7CckgFmoU9i7bpRGYDN7WVhW2ffUNFNlYSKV7CrEQYkpgLL6%2BSb9ocpkACjzFj0Sl1aDNrUIbau4XtQ8AgHYFPGJ8TtBpZzmgdRhfJMY5vBmPF%2B8lIxhBJEN8e8cVplyghH3J7RzAPsa7%2Fqj8ws3BVxo3zDZYq7FGIZyoYLPy3VRCpy5XCBPTCfq07R9jSCvDs1eefTFLU1b5sNWNMqwgPjgYBz2GRvxEboInWdRp75w8kW9kiPb5TkpxRQqvxtwy5gL%2FNIh%2FRqdE1CT%2BYsgBIgGfpODk4D0Pyan4WuJxEkZQ1d6gF9yNWYNodCUYdcVPu9xRE0TzdGWLtXgw4eqbUgeltfkPFmTpeIMejbPeyC5H1WF0zDWbvz71gFLytUkiqOEYsT7vyU4DLkS9um9l3nbAetOQmls4LqpnBpUKp0JQd6LGHPunvx%2FA96KClB0Z6fpxkWA5m11iXd5uIsiFrIPUKz2fe2Qwluk0kJghopwRAQlRdKfrZ%2BvKsne6mG8482ZoTCv3o1XwLkLjH71xXhlbNNFvq58rzI7Vygq9jCkUo8ZJu8aiYjVhf4VWNZAgmfqH7muN%2BWrdpA4Fbudh2EWb2f0epzCVjYbCBjqkAQ%2Bg9dUcUMDXZaiShk0DEofuL71il9XHomiIVVFmrDomhLEMBN4%2FB%2BnENjwYcLprTBnmEIQI%2BTtEZwhzQnw4WkXDPK452DRhuKj2TlQidtbKNU%2BExQ%2FNDW081SD4Sth8ICKO%2BdjUND%2FvE3wTp7E9JqQbLwTyazFjWCH1Jw9AYSsNzqs1Pq2oEe8fqwU%2FOvc5zTg6UL3vKRvk0cHQikj0bw4qBYhz&X-Amz-Signature=6f7de591c701172526cc665100d62b3db3bd9ab108e7e0fe2bf6afd6de813370&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
