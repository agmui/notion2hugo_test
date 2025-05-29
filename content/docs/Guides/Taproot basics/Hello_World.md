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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22S5H54%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpcGf8Vb9DG1KH6FZ6k%2Fu2DPZtsLMa5JKnxnGHZ%2Bvj1AiEA4iBV%2FQ6Lo3NkLPoGk4aAE2VOrxCeK15T8BWO4I8gspwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbN6p5Aq8YcWuKBLSrcA%2B64nEz9yDXi%2F1sA%2F2Ct%2B48w3ZKUhFpEBaGX1e5msIhslDPFRJhDkKaNF44xkozTY%2F32Pii0g77yiEnVO5%2FXzsX7y2VuWk8PCdaUbwC2pqRHES9aCcMyjngZgKSxaCVbar1oufaKCBo54MEfrLJ9GutRezE6eMCuKNLjtJvjwXFpd%2Bb6HTQXyrPasIgmMrb1l2DgDzjnC%2BUTz4MfG3iz3RGXLIgbKHq5a40zK0yCe34dMNL2PpQs3TB3XmGckTW%2F6RLrI%2FQa%2FsF%2FYgzVchxcDZUUKWfxno9irOm67yAw%2BSbzx2b4pHjlGe8VBijreCxtJ1ryi8gWlFoomD6HRpzTTmE%2FfWy1cFmSw0on3xbKCDm%2BNEPnruqD1MRGo4V%2FlrbP0NfP5oHYmJ49EYBbCITgg9qf2oJ1xJTi98ecTY1PWOkfLUekPN0BBpcUc%2F%2FtB836vylWeTrknZ3Ttg1M2c6%2FoYYaHQwqtEML9d4EX1bTVfs6dnsQC48TzBmeXM2o%2FXncxYwLMYRCqYbTm8UnFaj1pZVkfmjOAnfKGiDiB6SKz6v9pBCzRgeumouSEUbjGj1VXWRIi%2Bj5ToIZ9QaNE7fqRE5q5esTPhYNC57C%2BqhGrxLgUWYH7hj6ntqWPdKnMI2J4cEGOqUBCsohZNOLiPNXgfiUQiFcoKEJJfZ%2BuD0RcszXhACCs9r5rG5gDk08P7%2FdCLx4SL1JprSihjVA7ST3MGL9QajmA2cyot8C0540Qs2QQkpRaVV%2FPW79ZJGbnC6B%2FeOovNsuCthhMRLGE3PRYk61MyRvdNMix7htPbsskrEISy3yQXt8Ahf9fhlUpFnp2TKwQyDsKNYFejZeXnyDH3MMevIXVnx%2FYkh1&X-Amz-Signature=1a0cd9e3cbdc24d745ad66616af735b22e7df40fa31c25ec99137e77f1cac196&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22S5H54%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEpcGf8Vb9DG1KH6FZ6k%2Fu2DPZtsLMa5JKnxnGHZ%2Bvj1AiEA4iBV%2FQ6Lo3NkLPoGk4aAE2VOrxCeK15T8BWO4I8gspwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbN6p5Aq8YcWuKBLSrcA%2B64nEz9yDXi%2F1sA%2F2Ct%2B48w3ZKUhFpEBaGX1e5msIhslDPFRJhDkKaNF44xkozTY%2F32Pii0g77yiEnVO5%2FXzsX7y2VuWk8PCdaUbwC2pqRHES9aCcMyjngZgKSxaCVbar1oufaKCBo54MEfrLJ9GutRezE6eMCuKNLjtJvjwXFpd%2Bb6HTQXyrPasIgmMrb1l2DgDzjnC%2BUTz4MfG3iz3RGXLIgbKHq5a40zK0yCe34dMNL2PpQs3TB3XmGckTW%2F6RLrI%2FQa%2FsF%2FYgzVchxcDZUUKWfxno9irOm67yAw%2BSbzx2b4pHjlGe8VBijreCxtJ1ryi8gWlFoomD6HRpzTTmE%2FfWy1cFmSw0on3xbKCDm%2BNEPnruqD1MRGo4V%2FlrbP0NfP5oHYmJ49EYBbCITgg9qf2oJ1xJTi98ecTY1PWOkfLUekPN0BBpcUc%2F%2FtB836vylWeTrknZ3Ttg1M2c6%2FoYYaHQwqtEML9d4EX1bTVfs6dnsQC48TzBmeXM2o%2FXncxYwLMYRCqYbTm8UnFaj1pZVkfmjOAnfKGiDiB6SKz6v9pBCzRgeumouSEUbjGj1VXWRIi%2Bj5ToIZ9QaNE7fqRE5q5esTPhYNC57C%2BqhGrxLgUWYH7hj6ntqWPdKnMI2J4cEGOqUBCsohZNOLiPNXgfiUQiFcoKEJJfZ%2BuD0RcszXhACCs9r5rG5gDk08P7%2FdCLx4SL1JprSihjVA7ST3MGL9QajmA2cyot8C0540Qs2QQkpRaVV%2FPW79ZJGbnC6B%2FeOovNsuCthhMRLGE3PRYk61MyRvdNMix7htPbsskrEISy3yQXt8Ahf9fhlUpFnp2TKwQyDsKNYFejZeXnyDH3MMevIXVnx%2FYkh1&X-Amz-Signature=4c2a92ab306db60ca744875031d7a0f8915ee502a6948238d25c47d4a4ee202a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
