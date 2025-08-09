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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3W72YSY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIECv72qauTIBJ%2B35y%2FUdEv9tXutPOqdPBphkiB%2FHsjmvAiEA0jiajdjsIhtJvt28GuiEciVM6jnIxNcxuqMIWmLUBWQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnRgqlVw6mAbd9%2FWCrcA4yE5w4tdJX3y8hBHrjmeyfI%2Bj7nqZeaSUI7YiWlr0dskWarcp%2BVZLmQ0inxTBIksvprVf186WI%2FMbDFXhVOQvStujwBaM9f%2BFqRA7oLNIHUZWqfA8%2Bf0fTKjMA03QNIFEI5AbgMqM4RqIeTxwQohPfwbpad8nVYcXnqLbzmudZjDTh43eckEY5iQUtTrYINHYClSUVr%2Fqn7TeNP4sSPXh50dz1GLP0OLebNfM9E10HekSgZfco%2Fi0AlznqI%2FLXArwmmTPmUhceJ5q%2BUhJuUaAlS1ngZNn7rXQAmDnEH4c9q%2FaAEy3wwlkDlFdrwu7pbj4zJop8hzEcqG03naiegt9fJ3hUn%2ByHqFzonVyHsyeSnVWE4k%2B3xmOWxg67y6ksc0sygG47jalSzcAGfG4jj2O%2Bieslu%2BSulOFztTDXDXgav26NKZfk1FCOE8aP%2B9MV4tolDdIlZMeqfq19%2FoRa7d7Y9wjNfGMBoKVF8Ox9sPcc1WenZikAK6qdaWoWYIHiYES%2Blyzcn7sdFWz6EhooPX8h6STWnFycy4LMQ1mTIN7cCgW3uQELQ7EZ0HxrM%2BlcNCzLEc%2Br04XG5PTmPI6r4AbDtkobTNGRSAp0pHUKlXVW3tMhTnWDEVJcU9dhSMKH22sQGOqUB2YFvKLzRPhcXyaeb6o%2B9ToDk33e6lRJvBptgQyh39ZD1NJKQDch2nBTuAWpAPB9UHbVf%2BEODwOguOMlwD0tJe3yFJkiGvtAJAPDIfwKy4gmPQ93pkxPEJnMojWgpObSUfA6kQgCqt%2BzMvxD7yHq%2B65%2Bs96qcHhTSw7VySs%2FvKXH3JdV24u4funk45FsF1gT5G8G5umtgJmtqTJJovby7FMn%2BE6%2B2&X-Amz-Signature=b85c805cf093ba31a8e1f24d8d63d21e518086f534497a2d6feca4a0a4a7e35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3W72YSY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIECv72qauTIBJ%2B35y%2FUdEv9tXutPOqdPBphkiB%2FHsjmvAiEA0jiajdjsIhtJvt28GuiEciVM6jnIxNcxuqMIWmLUBWQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnRgqlVw6mAbd9%2FWCrcA4yE5w4tdJX3y8hBHrjmeyfI%2Bj7nqZeaSUI7YiWlr0dskWarcp%2BVZLmQ0inxTBIksvprVf186WI%2FMbDFXhVOQvStujwBaM9f%2BFqRA7oLNIHUZWqfA8%2Bf0fTKjMA03QNIFEI5AbgMqM4RqIeTxwQohPfwbpad8nVYcXnqLbzmudZjDTh43eckEY5iQUtTrYINHYClSUVr%2Fqn7TeNP4sSPXh50dz1GLP0OLebNfM9E10HekSgZfco%2Fi0AlznqI%2FLXArwmmTPmUhceJ5q%2BUhJuUaAlS1ngZNn7rXQAmDnEH4c9q%2FaAEy3wwlkDlFdrwu7pbj4zJop8hzEcqG03naiegt9fJ3hUn%2ByHqFzonVyHsyeSnVWE4k%2B3xmOWxg67y6ksc0sygG47jalSzcAGfG4jj2O%2Bieslu%2BSulOFztTDXDXgav26NKZfk1FCOE8aP%2B9MV4tolDdIlZMeqfq19%2FoRa7d7Y9wjNfGMBoKVF8Ox9sPcc1WenZikAK6qdaWoWYIHiYES%2Blyzcn7sdFWz6EhooPX8h6STWnFycy4LMQ1mTIN7cCgW3uQELQ7EZ0HxrM%2BlcNCzLEc%2Br04XG5PTmPI6r4AbDtkobTNGRSAp0pHUKlXVW3tMhTnWDEVJcU9dhSMKH22sQGOqUB2YFvKLzRPhcXyaeb6o%2B9ToDk33e6lRJvBptgQyh39ZD1NJKQDch2nBTuAWpAPB9UHbVf%2BEODwOguOMlwD0tJe3yFJkiGvtAJAPDIfwKy4gmPQ93pkxPEJnMojWgpObSUfA6kQgCqt%2BzMvxD7yHq%2B65%2Bs96qcHhTSw7VySs%2FvKXH3JdV24u4funk45FsF1gT5G8G5umtgJmtqTJJovby7FMn%2BE6%2B2&X-Amz-Signature=948f2b904e9d4023b9b7d5b9070b49dd90ccbdac310f51b343cc0be0249c42b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
