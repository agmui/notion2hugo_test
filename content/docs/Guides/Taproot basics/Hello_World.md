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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFP6CMF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELe7kmK9Of9gJL8ahAASAKymWEbfSxtbxsvXgak0kuMAiBMfv9FPB23RO92SEcHPvbu9wjYHCsrs%2Bb4u8eQTed1oyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpP%2FDHXYsDxucBQTDKtwDhKJTCrSqscbNR9dJpCJn3%2Bs5AJ7XSdPFrW0HJQbBojrSyxxst4umfc5hyVjbE4idfo%2FltPv6GcpHd1K93HY1%2FdZhpbay9iHs81A8Fqj7fIOeZIO8cRxUF9Y78Sj0%2FHgg9E6bOybICujeQyv6mytaflrrSm%2F2VsPzgAcPoBkKVvT3PRG1PTtQHXFjkFfCVAY6grn1IjNsundPy%2Bc%2F248b2qw1aT%2BSOWkvnw64RqPh%2FIVA2new6AUL1LXRQFxHSPvQ8R%2B4r3bUPN4J2fvwx88%2FrrLbsyCH6TCicYOgR8ue6Otos4KJoBmgeV3hXnBigmmhdNHN0subPp9ZqV9tOWb9J0fzUB6R763CXsNg8w76gD2cXG3zglSbZcZBEFqZr%2BTpQyd5ONfsZrV4zYK8M8h9H79xoORp78CDNLbUpkR9HFFibIXFiq6cUZG4sdKpLmBAsy%2F%2BH%2B4pjDhnHXSXI3Uu9H3TaP3E%2BtC7fFrUSOizm%2BjrQOWgoLtyr4YacqirjmOwzjBA12mzcK%2BTwvfhfGXFbIYKAwH184mfT%2FG8gchLg%2FjCGr6zfgsLbAnooliOzlfM5cmw3dyzoqxXkkcThcFZsJxln%2FHqbUS7o3SHqLdaJQx2bWT0NEZ4%2FWqAmccw%2FvacvgY6pgHI%2B2fQUfs6Bd09%2FyLxivCSWjx3ctTbbmp%2BMVXDhUY9DaO%2BoE3ZeBYGTBuQDB8AGA4XSmEUT4NhILXutK7zedxDtflYaVv9reioRytwk6eFdOtqZgXSTSkbvOY%2BXl5MN%2FZfKKd9TTHFEiCqwm8FRaiHxksE%2FPYvB6cyAnm0DMUd5jEyecav0Q6PNxxkK2XGThqhzXFpxXsKfs4XvHHDs5sB1sNmIJCp&X-Amz-Signature=f70f9d4c83710f6754686743cfdb6fa21667576a469ad9687d186dc5c17590e5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFFP6CMF%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELe7kmK9Of9gJL8ahAASAKymWEbfSxtbxsvXgak0kuMAiBMfv9FPB23RO92SEcHPvbu9wjYHCsrs%2Bb4u8eQTed1oyqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpP%2FDHXYsDxucBQTDKtwDhKJTCrSqscbNR9dJpCJn3%2Bs5AJ7XSdPFrW0HJQbBojrSyxxst4umfc5hyVjbE4idfo%2FltPv6GcpHd1K93HY1%2FdZhpbay9iHs81A8Fqj7fIOeZIO8cRxUF9Y78Sj0%2FHgg9E6bOybICujeQyv6mytaflrrSm%2F2VsPzgAcPoBkKVvT3PRG1PTtQHXFjkFfCVAY6grn1IjNsundPy%2Bc%2F248b2qw1aT%2BSOWkvnw64RqPh%2FIVA2new6AUL1LXRQFxHSPvQ8R%2B4r3bUPN4J2fvwx88%2FrrLbsyCH6TCicYOgR8ue6Otos4KJoBmgeV3hXnBigmmhdNHN0subPp9ZqV9tOWb9J0fzUB6R763CXsNg8w76gD2cXG3zglSbZcZBEFqZr%2BTpQyd5ONfsZrV4zYK8M8h9H79xoORp78CDNLbUpkR9HFFibIXFiq6cUZG4sdKpLmBAsy%2F%2BH%2B4pjDhnHXSXI3Uu9H3TaP3E%2BtC7fFrUSOizm%2BjrQOWgoLtyr4YacqirjmOwzjBA12mzcK%2BTwvfhfGXFbIYKAwH184mfT%2FG8gchLg%2FjCGr6zfgsLbAnooliOzlfM5cmw3dyzoqxXkkcThcFZsJxln%2FHqbUS7o3SHqLdaJQx2bWT0NEZ4%2FWqAmccw%2FvacvgY6pgHI%2B2fQUfs6Bd09%2FyLxivCSWjx3ctTbbmp%2BMVXDhUY9DaO%2BoE3ZeBYGTBuQDB8AGA4XSmEUT4NhILXutK7zedxDtflYaVv9reioRytwk6eFdOtqZgXSTSkbvOY%2BXl5MN%2FZfKKd9TTHFEiCqwm8FRaiHxksE%2FPYvB6cyAnm0DMUd5jEyecav0Q6PNxxkK2XGThqhzXFpxXsKfs4XvHHDs5sB1sNmIJCp&X-Amz-Signature=05b7a834a91091e7a0e815e433a9aead261519a664c1d797f6c421baa56b436c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
