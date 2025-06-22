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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZFLRFP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTmP2JJ9vKksFCGb0ba6SFMNrqY9IMNkG54jf1bMtZgAiAqkrcow2zRSjNrElDsZ0DNuhChQWK9cPMKJ0DBBnamuSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyJTDS0UcNFUwaY0lKtwD52P%2Babki7PA9A2j9nol8teQhZNs8NAFmz6qgr8Q8sLRDbw0zexEMlOxxvCP0ALvlae4vjIQevIUzBpLvzwexsElDmtkX5XETkou9B90%2Bj7g9ILVGwheb%2F%2FVY%2FwXKu6gnsOqMMMatvAaPQu1Yrfs7TlJOJZIBM1AzzbrQLAyRiTWyhQoOZS0RSeBwXmyFt8DAq7emcEXkjIsix1AlTDPygy0dpLyHD%2BSJ4415I6vcl3CUh8O9cdnTHBAVe%2Fyt0mGvkyU9pNkcH%2FEDu3RQHUQUQwUYc%2BRP78LZfw%2FpoMvgwpLrm1fEC7illgZTaQe9jKepNLT%2F5EVrn%2FBId9QBZqEZMYBqufJQzkJX3iC2rakD3NMxy111rifa3ZKbsAvtTAOCtwDeoleasDwjR6cy16sUosL6w1%2FjPSwJyzdhes%2F%2FV8lR%2B72Ov40trKRn1vyKv8fQJr5BFXrdwNRd0G6XpNA9XVHEhiUVY8bNuD1G9RWkO3Pm5y8MIejf1ZRXicIj0BUffONNoCqdX5Zq0Fhub%2FHBv72aM%2B%2BHddNzNlyjRtLDMok6AoEv2yW45mySSzLrvjh8fsb6FD31ul6%2FtacjTbzGNnOEPB7ovOjJu8q5CpmvcBBIeerC69oZn0dVaPQwq4jdwgY6pgEXJrcp5f4%2FRvSHZchkl1kunLZyB7ZK9BRUht0V0y8wyk0Ok2Q0F6wcI%2Fb2xJMC6k%2FvNSERyjlOyI0NNy1hS7YHkYA%2Bdp2OsonN6w%2F9LI2TYeym1om%2BHxQvmV51X%2Fo%2FmwWH8eOjPqCFyI4ujZL3%2FSLFQ7%2FnZ4gEf14pb3gQGHPaxqDApu8RDNvhs5DPutjKSNjIawE0E7Y3F5dtFnFU1qToAngpOog1&X-Amz-Signature=0d3e9a455595cf6c8bb5b14dd2c716d413edfaa687a266f0ee89c7098652e6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZFLRFP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTmP2JJ9vKksFCGb0ba6SFMNrqY9IMNkG54jf1bMtZgAiAqkrcow2zRSjNrElDsZ0DNuhChQWK9cPMKJ0DBBnamuSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyJTDS0UcNFUwaY0lKtwD52P%2Babki7PA9A2j9nol8teQhZNs8NAFmz6qgr8Q8sLRDbw0zexEMlOxxvCP0ALvlae4vjIQevIUzBpLvzwexsElDmtkX5XETkou9B90%2Bj7g9ILVGwheb%2F%2FVY%2FwXKu6gnsOqMMMatvAaPQu1Yrfs7TlJOJZIBM1AzzbrQLAyRiTWyhQoOZS0RSeBwXmyFt8DAq7emcEXkjIsix1AlTDPygy0dpLyHD%2BSJ4415I6vcl3CUh8O9cdnTHBAVe%2Fyt0mGvkyU9pNkcH%2FEDu3RQHUQUQwUYc%2BRP78LZfw%2FpoMvgwpLrm1fEC7illgZTaQe9jKepNLT%2F5EVrn%2FBId9QBZqEZMYBqufJQzkJX3iC2rakD3NMxy111rifa3ZKbsAvtTAOCtwDeoleasDwjR6cy16sUosL6w1%2FjPSwJyzdhes%2F%2FV8lR%2B72Ov40trKRn1vyKv8fQJr5BFXrdwNRd0G6XpNA9XVHEhiUVY8bNuD1G9RWkO3Pm5y8MIejf1ZRXicIj0BUffONNoCqdX5Zq0Fhub%2FHBv72aM%2B%2BHddNzNlyjRtLDMok6AoEv2yW45mySSzLrvjh8fsb6FD31ul6%2FtacjTbzGNnOEPB7ovOjJu8q5CpmvcBBIeerC69oZn0dVaPQwq4jdwgY6pgEXJrcp5f4%2FRvSHZchkl1kunLZyB7ZK9BRUht0V0y8wyk0Ok2Q0F6wcI%2Fb2xJMC6k%2FvNSERyjlOyI0NNy1hS7YHkYA%2Bdp2OsonN6w%2F9LI2TYeym1om%2BHxQvmV51X%2Fo%2FmwWH8eOjPqCFyI4ujZL3%2FSLFQ7%2FnZ4gEf14pb3gQGHPaxqDApu8RDNvhs5DPutjKSNjIawE0E7Y3F5dtFnFU1qToAngpOog1&X-Amz-Signature=479cbf9f4f813b9f0cba37900fa8b2569630ad940e29db528ebac7aae3dd9fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
