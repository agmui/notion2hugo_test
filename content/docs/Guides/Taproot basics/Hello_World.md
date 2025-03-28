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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXN3NYXB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrPPwX6dZqSUGiqtFJgDDRyk7PQimNBnp0SAtQfEtbLQIgGJQdqewmEqBXAENi7BI%2FuN1IWjRudIFoHlVaaux0G6oq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJpfuNag3EQvsFlhfSrcA%2BPeIphStiX%2BvSVi5Y02mCXqwORA87yL9wio0hlOG8QZXTaJepoksDkaE0o8lghna4K30Udw90znTK75ZQGBITKrRVYFn2pzPJyYGJ0NPIbbCOt00c5%2FIOKqGihZSCHEidoERBp1poqGw%2BsJl2fw8GYqgvpWKbO5Z%2BYAXKG%2FYImQHLqp%2FUiEwu%2BlLT1lxs8%2FswKP3JbIwUJmhsD6tZkMPYYJqYWpHMpkaxVctEJBtrBJxUoqLe7tdZ1QAHj7w0S75TauouNjKrDgzKd5amnRWF7kcAr0VYAzL3huz2D0KZkrK511P%2BZ8ZhNpFau7DagHXjjrW5gNnNF0SeeqplNrc691TvtPj0INX6DuaCA7a%2FIbGTziRJB7CEHvClnaQgpspg%2Bgm06Q4Ex6SiyAkFHej6MaM%2B5DCb9cY00uJBqZNyfonGnDUVtEfDB00%2FatubgSBwBpZE1PRLHiieTEwfqMu7D72zXLKBbWREQTFePLg3HHkCAOVt9kA8%2F7mstQMQZWl4PYNWfSYl4uwx0pQrlhoCAvOkzMDiZgZSN2gLSxLrbrMv8%2BCMbmbi4xQcbjgWZhzaLiWij8ZM8MdJehTvbVrdYlATf2wiCGz7zJmEXi%2B0dXj2j843bNQ%2FLihbuZMODZm78GOqUBBfob%2BkFS4qj0YhBoFyaMgUJuIDdccUi9RqQEwf6EYtV9%2FWl%2BXRG7W0fuYOsn9AU0TEDUa2PVkpAaUrj9%2FAQg80PRbevM2Cl4xe2N9u2114H%2BPq1zf2DNjwMXaUune0nZORxHKHr6h9i30phweX75GKvuxmxl2%2FimKnYeD4ITFgItsT70a9iWYdWwNXsw3qGH%2Fa%2BiY9VSXzw2eMq9xGRKdeVI0qnX&X-Amz-Signature=34b02bea21e40278ee8244b435afb0f3b857a03da474ea091ccc0e0386a3e116&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXN3NYXB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T190230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrPPwX6dZqSUGiqtFJgDDRyk7PQimNBnp0SAtQfEtbLQIgGJQdqewmEqBXAENi7BI%2FuN1IWjRudIFoHlVaaux0G6oq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJpfuNag3EQvsFlhfSrcA%2BPeIphStiX%2BvSVi5Y02mCXqwORA87yL9wio0hlOG8QZXTaJepoksDkaE0o8lghna4K30Udw90znTK75ZQGBITKrRVYFn2pzPJyYGJ0NPIbbCOt00c5%2FIOKqGihZSCHEidoERBp1poqGw%2BsJl2fw8GYqgvpWKbO5Z%2BYAXKG%2FYImQHLqp%2FUiEwu%2BlLT1lxs8%2FswKP3JbIwUJmhsD6tZkMPYYJqYWpHMpkaxVctEJBtrBJxUoqLe7tdZ1QAHj7w0S75TauouNjKrDgzKd5amnRWF7kcAr0VYAzL3huz2D0KZkrK511P%2BZ8ZhNpFau7DagHXjjrW5gNnNF0SeeqplNrc691TvtPj0INX6DuaCA7a%2FIbGTziRJB7CEHvClnaQgpspg%2Bgm06Q4Ex6SiyAkFHej6MaM%2B5DCb9cY00uJBqZNyfonGnDUVtEfDB00%2FatubgSBwBpZE1PRLHiieTEwfqMu7D72zXLKBbWREQTFePLg3HHkCAOVt9kA8%2F7mstQMQZWl4PYNWfSYl4uwx0pQrlhoCAvOkzMDiZgZSN2gLSxLrbrMv8%2BCMbmbi4xQcbjgWZhzaLiWij8ZM8MdJehTvbVrdYlATf2wiCGz7zJmEXi%2B0dXj2j843bNQ%2FLihbuZMODZm78GOqUBBfob%2BkFS4qj0YhBoFyaMgUJuIDdccUi9RqQEwf6EYtV9%2FWl%2BXRG7W0fuYOsn9AU0TEDUa2PVkpAaUrj9%2FAQg80PRbevM2Cl4xe2N9u2114H%2BPq1zf2DNjwMXaUune0nZORxHKHr6h9i30phweX75GKvuxmxl2%2FimKnYeD4ITFgItsT70a9iWYdWwNXsw3qGH%2Fa%2BiY9VSXzw2eMq9xGRKdeVI0qnX&X-Amz-Signature=bf767571e575280be47e9ad045066bfc4b18b778a0bbb1af263fb76bf07c1237&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
