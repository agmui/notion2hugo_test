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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUQJYW5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdcp5namVRX1%2BQSOdjjue4x65asaCAI2I7r%2BAkhfd1EgIhANR3ZkILwOrKgtmI7wdyo4LWlv5FJPgmVndKao9oz7GNKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ2Xox0bkgQT6Xx1oq3AP6xYn%2B5sdES7Vyp8ydtcAU3Q7R2trnkMTQu3GheAu4i4sAVC7RzRVsjvHAxjX2OgDnQOfXza0ptuqD1HWV8qthWEGE1nXZhBqps0JBHQxj6IQCsfQvnIKYaaZLqVvPFdcNDf2G0YXDAKAWlRVnGx%2Bt1L3iPqVm2MJuQeCf2tPNZXs2CzVh3PhNcEjKNpbz9sgwJBG3Hi%2FdooEPC5BZUAhCizXLXLyvzdNFj%2FdxdYheqgvymSWaLPVs%2FAHE3vbKEuNRLynh2jTcjuCDyULYO7UMgx0y6EZqnRPXapqOoS9%2Fzidw82zeYjJJIwpyRl8C9z52xnCvl%2FbzeXKxuUkrV0nDeke7VZS%2FrX%2FioVthbvigUR2b65lBiTCEYC9fIHqEjmgWj6o%2BGlZiwkTMbwroZO2AgwLmFnqxEHymw%2BNmV32H2f9L54FljjD3OJl7Zfk7g7NPCc49JRZwp4SFOsXh2Q3PrRZlNPQHJkyCDsZ2AA9GC7lTYtq73Ip8pf7VizRVTUqtI3WXwSdt3G6HfI2mNhUB5EreOdWe52xm6ZXMoLYMr20H%2FcnzXt8y8JjCisQ7cRnYX%2Bw7oXppWiruhIDbzpxcg5z9vD%2BB6PF2lFdiwVuFPmC5W0suhC6tdUJsDDDwi5y%2BBjqkAQcjPYW24kvCCsr78A%2FPbWVgRgSQcTVpKdbXUprNGeYLQKXalTPEGV0s%2BZ48XW%2BCpTmlEDJrigJN3QAejBT9ZnKGKxlRf9WA4hTRknIQx4sGoWQv1CWlLUkA0Pb9HOJbggrqifzrl%2FXxomxBFJ6cqbf%2B8JHFNZLlnxDfJqac6avGP%2BnBG6FKdn1CWDUjSPWayLJozreA5GC6ERQvDCjw1Znidjna&X-Amz-Signature=60519c5973bc8d333fe24f870310413fdef1ce009090fa284025fa2610d6c828&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRUQJYW5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdcp5namVRX1%2BQSOdjjue4x65asaCAI2I7r%2BAkhfd1EgIhANR3ZkILwOrKgtmI7wdyo4LWlv5FJPgmVndKao9oz7GNKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ2Xox0bkgQT6Xx1oq3AP6xYn%2B5sdES7Vyp8ydtcAU3Q7R2trnkMTQu3GheAu4i4sAVC7RzRVsjvHAxjX2OgDnQOfXza0ptuqD1HWV8qthWEGE1nXZhBqps0JBHQxj6IQCsfQvnIKYaaZLqVvPFdcNDf2G0YXDAKAWlRVnGx%2Bt1L3iPqVm2MJuQeCf2tPNZXs2CzVh3PhNcEjKNpbz9sgwJBG3Hi%2FdooEPC5BZUAhCizXLXLyvzdNFj%2FdxdYheqgvymSWaLPVs%2FAHE3vbKEuNRLynh2jTcjuCDyULYO7UMgx0y6EZqnRPXapqOoS9%2Fzidw82zeYjJJIwpyRl8C9z52xnCvl%2FbzeXKxuUkrV0nDeke7VZS%2FrX%2FioVthbvigUR2b65lBiTCEYC9fIHqEjmgWj6o%2BGlZiwkTMbwroZO2AgwLmFnqxEHymw%2BNmV32H2f9L54FljjD3OJl7Zfk7g7NPCc49JRZwp4SFOsXh2Q3PrRZlNPQHJkyCDsZ2AA9GC7lTYtq73Ip8pf7VizRVTUqtI3WXwSdt3G6HfI2mNhUB5EreOdWe52xm6ZXMoLYMr20H%2FcnzXt8y8JjCisQ7cRnYX%2Bw7oXppWiruhIDbzpxcg5z9vD%2BB6PF2lFdiwVuFPmC5W0suhC6tdUJsDDDwi5y%2BBjqkAQcjPYW24kvCCsr78A%2FPbWVgRgSQcTVpKdbXUprNGeYLQKXalTPEGV0s%2BZ48XW%2BCpTmlEDJrigJN3QAejBT9ZnKGKxlRf9WA4hTRknIQx4sGoWQv1CWlLUkA0Pb9HOJbggrqifzrl%2FXxomxBFJ6cqbf%2B8JHFNZLlnxDfJqac6avGP%2BnBG6FKdn1CWDUjSPWayLJozreA5GC6ERQvDCjw1Znidjna&X-Amz-Signature=2ffe7ba65084c19835dfca77a1026c3f2f65f379520407398485974fe9b91d89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
