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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52Y3RGA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBezMXlyddnS2gn0P8a237ZGf2i5wPkuYNSebQXsn5HIAiEA2QXHudMOv4TPO9kiak0qZoZ5Yd8enQOvJRwHNwBPtkoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB88vap9P8L3ppRTiyrcAzkYCFHv8WkWlUp1BHC1VxcBAzuIQZ5UOo0R0z5qkN5QrYaNirzqKNsQHJu1Qt6%2Bqarfb1cR1xZAg%2BX%2BFUVt2R12mKth1SVI3%2B6ERz2Qy7%2BDtsfN49yU2zR%2FPnUVe4q%2BvLZMGWflVjB1quBT4zfpUqQFuC9J36xj4vHBs5D%2BHZWHXjqxd4%2FNVtnak2LbCuv0r74ocSV4bsoMcjqPSPRIrAPfIeZpQqsPUehbh9jAhHaY91XZYZnMrTQfN3pdfxnstvYZ8ERVMs1hJKefpkIPqSUM1xljs%2FzJGS8ztwvJTxGjOHIMqFEtG4AgjDXvODbGGlYvhNUqQ4hvLMnU0gDxvHvyQQH8UFdvv2Epr8VPlSEKbkZ2mIyYreKz2fto%2BYHaicieLPQVaVGcZsi6OKBVqRLcFJYJ7C1USaRWVh8hLn9O8P3ApOAURqW%2Fz0f8LPB27a4N%2Fq4OWOwb1srKjGYD18XxyB4xLIXUtVN%2Fa%2B%2FRdfqhunlssbVuORewJWOtCwgpxuB%2BIXpDPh70E%2Fi8RrF1iz5SOnzrApPA3YWDph5fg6MVEKsQrd4TLC5Sb6MZyZ%2FWxeL4Aev6It2uUJrioGb6S8xKBbRBa5T5ueKbC7WiK3HU%2FmY%2FhBaghBDlwFZZMLHBrb0GOqUBom17WSaMTkbnYwiRG93UadFUMj6Uzys61fCUGVeAxfO9HxZI98f9vKZ75gcdmYtwnyYJSctT%2BmejULfZP7cVHqiM5Aa%2B6OAKJ1I11ApIs67NYElci%2FmLiIOW8EmuuZcj8WdbBixFz6EBY%2BLT5MrNQW14L6TUIdSvBikDVsXHb8KCqyz8tZNwn9DE%2FUyDvCnk2X95Y48qJKvV4tMDxMNN9nvwZKPO&X-Amz-Signature=ed6ac296591de39bfcb6bdf679f47e4b55834445475c300fe74fe1e2553003f9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52Y3RGA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBezMXlyddnS2gn0P8a237ZGf2i5wPkuYNSebQXsn5HIAiEA2QXHudMOv4TPO9kiak0qZoZ5Yd8enQOvJRwHNwBPtkoqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB88vap9P8L3ppRTiyrcAzkYCFHv8WkWlUp1BHC1VxcBAzuIQZ5UOo0R0z5qkN5QrYaNirzqKNsQHJu1Qt6%2Bqarfb1cR1xZAg%2BX%2BFUVt2R12mKth1SVI3%2B6ERz2Qy7%2BDtsfN49yU2zR%2FPnUVe4q%2BvLZMGWflVjB1quBT4zfpUqQFuC9J36xj4vHBs5D%2BHZWHXjqxd4%2FNVtnak2LbCuv0r74ocSV4bsoMcjqPSPRIrAPfIeZpQqsPUehbh9jAhHaY91XZYZnMrTQfN3pdfxnstvYZ8ERVMs1hJKefpkIPqSUM1xljs%2FzJGS8ztwvJTxGjOHIMqFEtG4AgjDXvODbGGlYvhNUqQ4hvLMnU0gDxvHvyQQH8UFdvv2Epr8VPlSEKbkZ2mIyYreKz2fto%2BYHaicieLPQVaVGcZsi6OKBVqRLcFJYJ7C1USaRWVh8hLn9O8P3ApOAURqW%2Fz0f8LPB27a4N%2Fq4OWOwb1srKjGYD18XxyB4xLIXUtVN%2Fa%2B%2FRdfqhunlssbVuORewJWOtCwgpxuB%2BIXpDPh70E%2Fi8RrF1iz5SOnzrApPA3YWDph5fg6MVEKsQrd4TLC5Sb6MZyZ%2FWxeL4Aev6It2uUJrioGb6S8xKBbRBa5T5ueKbC7WiK3HU%2FmY%2FhBaghBDlwFZZMLHBrb0GOqUBom17WSaMTkbnYwiRG93UadFUMj6Uzys61fCUGVeAxfO9HxZI98f9vKZ75gcdmYtwnyYJSctT%2BmejULfZP7cVHqiM5Aa%2B6OAKJ1I11ApIs67NYElci%2FmLiIOW8EmuuZcj8WdbBixFz6EBY%2BLT5MrNQW14L6TUIdSvBikDVsXHb8KCqyz8tZNwn9DE%2FUyDvCnk2X95Y48qJKvV4tMDxMNN9nvwZKPO&X-Amz-Signature=ff1dc7aad6cf80a4dc503c0481748d087ad0ddd7c325d04fae17e3dde034fb09&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
