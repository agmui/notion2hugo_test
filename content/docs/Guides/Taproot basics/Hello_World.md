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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZM4S4Z%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICDLtQPLhU5OI0hSYwnGlZs3RToDIsXzLMF7BiDAXsqeAiBFSFYMSWR2AbN720Xx96%2F7mnaA%2FmRM%2Fkf%2BdNUgF7ty6CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwnLpaoQrXEeD3bwKtwD2LDZN6vU%2BtpzMCQtsy4DQnXo%2Fj38IAmXF7aZWk8aCKumlsiqZ7psutng1YIu77eFO6ruZBuC0eikj4HIP6kvcVw6Ju%2FECiTiiR9AEOmo5uepjGgzu%2BKdZuqQCbtJHUjHHXY2URgMVa7esAawLKUSjFOobYw96lFEjBgQmcbgXUaJACRHGjoDGwNidYpsy2jVwTN%2B1t0LiZvCCw%2B%2BgE4pDgZwM6rBGLstw6GltUhd9ZXMtgcWAk5iel2OS0IXfAkKnH3YqnN1FiqNteeXEkJ0%2BZT1BpkUqxQEO1uJzvkCO0yAR%2FdehTcF0mhmWnLZhEn1P4OF1w5XtmEXnVpB0aA2PH7BEeZUxzCJbzxjHHXLit2Z30be2HnNfL0bHWHJAc6NZ7%2Fa1kSzBLmKx5%2Bx2NOE74FdgBbKQKy5SEicTzPk0xGPQmfd%2FlivXZR9RPrBcEPkQhMnuDl3Ggyism1b2ohyCjsPcyGpJ4QGPBGZx5EvXZ5Xr4cyqkhdpE5UkRL75DylvymtrxkNKccRVA9x5FU%2FDN1nnK6ziuZDaQKsccoNz5i7kkjeQp8NdB5ZaC%2FOJTdPhaxDKW58ETIT0XnIQjvn7VM6Z4ganXIUsIm2vRnfF3Qmu9RlnJ4Z4zYeYAEw1o7CwQY6pgGTPwqseu2tluon5trRIUWf2hDlRGD%2FmQoh7kam6d51PHSXPAGkmbC3jGqHzfP0W4%2Bnzlq%2BPJibidF3HFTVdWEGwemzcHJkTPDjBeWIE1OMK7qWla5LYfm6Kg224ZI0yALAVnaJBkyN1ViXaGFU10bKxptAFrzkiEDxhL7NGn7Dc%2Bc3E5Efw5KC7A2kHxzgmfRmnwcjSai4%2Bai6%2BamwtzVRHk5M97LG&X-Amz-Signature=1135f7453fe26d54335ba7d07b9160b5ca68866dba7c06c5cf99cf8968ec0d70&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LZM4S4Z%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICDLtQPLhU5OI0hSYwnGlZs3RToDIsXzLMF7BiDAXsqeAiBFSFYMSWR2AbN720Xx96%2F7mnaA%2FmRM%2Fkf%2BdNUgF7ty6CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEwnLpaoQrXEeD3bwKtwD2LDZN6vU%2BtpzMCQtsy4DQnXo%2Fj38IAmXF7aZWk8aCKumlsiqZ7psutng1YIu77eFO6ruZBuC0eikj4HIP6kvcVw6Ju%2FECiTiiR9AEOmo5uepjGgzu%2BKdZuqQCbtJHUjHHXY2URgMVa7esAawLKUSjFOobYw96lFEjBgQmcbgXUaJACRHGjoDGwNidYpsy2jVwTN%2B1t0LiZvCCw%2B%2BgE4pDgZwM6rBGLstw6GltUhd9ZXMtgcWAk5iel2OS0IXfAkKnH3YqnN1FiqNteeXEkJ0%2BZT1BpkUqxQEO1uJzvkCO0yAR%2FdehTcF0mhmWnLZhEn1P4OF1w5XtmEXnVpB0aA2PH7BEeZUxzCJbzxjHHXLit2Z30be2HnNfL0bHWHJAc6NZ7%2Fa1kSzBLmKx5%2Bx2NOE74FdgBbKQKy5SEicTzPk0xGPQmfd%2FlivXZR9RPrBcEPkQhMnuDl3Ggyism1b2ohyCjsPcyGpJ4QGPBGZx5EvXZ5Xr4cyqkhdpE5UkRL75DylvymtrxkNKccRVA9x5FU%2FDN1nnK6ziuZDaQKsccoNz5i7kkjeQp8NdB5ZaC%2FOJTdPhaxDKW58ETIT0XnIQjvn7VM6Z4ganXIUsIm2vRnfF3Qmu9RlnJ4Z4zYeYAEw1o7CwQY6pgGTPwqseu2tluon5trRIUWf2hDlRGD%2FmQoh7kam6d51PHSXPAGkmbC3jGqHzfP0W4%2Bnzlq%2BPJibidF3HFTVdWEGwemzcHJkTPDjBeWIE1OMK7qWla5LYfm6Kg224ZI0yALAVnaJBkyN1ViXaGFU10bKxptAFrzkiEDxhL7NGn7Dc%2Bc3E5Efw5KC7A2kHxzgmfRmnwcjSai4%2Bai6%2BamwtzVRHk5M97LG&X-Amz-Signature=43ba15258e6b133581993a0142ae9c26e979cc08cf466ca8c4d77378686d8800&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
