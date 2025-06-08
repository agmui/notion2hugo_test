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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GZGWZP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6qrCkgxxdf%2BlMJ1xh%2B4qnaVKBmyqzfzKrVBJ%2FDYNkZAIgOaJIhpxUHWb%2Fxvq2EeoiR6C5xILFoymI8dGCDmvJ030qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmbmTMLxJ%2F4aieircA51kR6v5SGKjcqfurId04mJ%2BXNYyoSxOeP0HxA7hF1CDb1Ap2LCzCbbXEmshYr7ItHfH5XKWLyxSptOXGAK6K2rlYDvIG%2BphLb5GKW7WWbM9kpiJxpIwoJuV%2BLsAlromIm2P3NrYw2%2B9co%2BfoxgA4Xmn1%2BpcDG4wyEvZgGJUTmLgyhYbwS4IP4P0m13ui4HbP5o7z08zxfGCXlqA07F8dfQAmHPF0ZxnF7HIlzxXt3BIRT%2BKUh7Ze5ceG2CG%2BXKmqLsxHkM2Gz2vOOleeaTc4Z1cPtqmvx8sh805Cmnlzg8mz5uvLvuCDB7AKnPiwG5gaM9Mi7pwcZkKGYmW0Mahd0hIB2F7aFCWtE1ntEbFJR67omfa3wxNIyfvHN0RR3x7VUilWU38UcfGHL4hPmGJ83H15%2BvRJrItqoCyg3ahFJmgxf%2FyZs18uUADUAZ6DEq1HeLnh6lYEgPmKJqViJ770Kx1ylZcGkQyqa0YjfZZ5LQGWl8FvA30yVHw%2F22bwaZBsKiTFnn6D5tnN8W1WmX5CBOuljJxW%2BFylGEdudotSW8jGoSYjop0J6SQkrLfX%2Fmdh%2ByBJIGzRtHJGKxW5fLDxWtATloyesM%2FXIYeUQMojc6EYMp9GmLmL%2B%2B%2FUiexMOTOlcIGOqUB%2BdovpK9CGzEfa1a7qh9TnD5uKvFuTFZlSkFAcXkABoA57mj0P3soAV9GXuTdLbbZ7QlXPpwLa%2Fmlm81u0V1qyu3FyzJPuBWrJ%2FSPaoHYNFegv8Vfng7MQUBZYG4mwdxZi53OD28RYYdw4yKupyfT5pZVb%2BEXFekMUt4iVJxRj4p1clw2wK74MAYQYblE%2BinIfsYahPQztQUAEY%2BzZqGQojHdsJgf&X-Amz-Signature=ad3ab527f5ec4f975770a93934e4dae5e2728dd588df93fcc0aaf8e7536e1699&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642GZGWZP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6qrCkgxxdf%2BlMJ1xh%2B4qnaVKBmyqzfzKrVBJ%2FDYNkZAIgOaJIhpxUHWb%2Fxvq2EeoiR6C5xILFoymI8dGCDmvJ030qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgGmbmTMLxJ%2F4aieircA51kR6v5SGKjcqfurId04mJ%2BXNYyoSxOeP0HxA7hF1CDb1Ap2LCzCbbXEmshYr7ItHfH5XKWLyxSptOXGAK6K2rlYDvIG%2BphLb5GKW7WWbM9kpiJxpIwoJuV%2BLsAlromIm2P3NrYw2%2B9co%2BfoxgA4Xmn1%2BpcDG4wyEvZgGJUTmLgyhYbwS4IP4P0m13ui4HbP5o7z08zxfGCXlqA07F8dfQAmHPF0ZxnF7HIlzxXt3BIRT%2BKUh7Ze5ceG2CG%2BXKmqLsxHkM2Gz2vOOleeaTc4Z1cPtqmvx8sh805Cmnlzg8mz5uvLvuCDB7AKnPiwG5gaM9Mi7pwcZkKGYmW0Mahd0hIB2F7aFCWtE1ntEbFJR67omfa3wxNIyfvHN0RR3x7VUilWU38UcfGHL4hPmGJ83H15%2BvRJrItqoCyg3ahFJmgxf%2FyZs18uUADUAZ6DEq1HeLnh6lYEgPmKJqViJ770Kx1ylZcGkQyqa0YjfZZ5LQGWl8FvA30yVHw%2F22bwaZBsKiTFnn6D5tnN8W1WmX5CBOuljJxW%2BFylGEdudotSW8jGoSYjop0J6SQkrLfX%2Fmdh%2ByBJIGzRtHJGKxW5fLDxWtATloyesM%2FXIYeUQMojc6EYMp9GmLmL%2B%2B%2FUiexMOTOlcIGOqUB%2BdovpK9CGzEfa1a7qh9TnD5uKvFuTFZlSkFAcXkABoA57mj0P3soAV9GXuTdLbbZ7QlXPpwLa%2Fmlm81u0V1qyu3FyzJPuBWrJ%2FSPaoHYNFegv8Vfng7MQUBZYG4mwdxZi53OD28RYYdw4yKupyfT5pZVb%2BEXFekMUt4iVJxRj4p1clw2wK74MAYQYblE%2BinIfsYahPQztQUAEY%2BzZqGQojHdsJgf&X-Amz-Signature=8315cc6ee9430617f9ea234f96c52501b35ad0abc2c12f7636e31ca426681282&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
