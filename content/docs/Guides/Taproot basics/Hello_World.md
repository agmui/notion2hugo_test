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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGDR45G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDCvX9AiIzMR1sjcgwA9sKdiGvVH82X%2BLUFa2LHqTTrOAiEAu75hsMNw2w5cJwSuw0iQec%2BtO8H8QZP2F32ZPLkS0ngq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGbVy2bVB078pcOFGyrcA05E4sf6BvhltlFbVtQmZ8S6vEx9fub%2B6LOnM2yZwmbP8FZxGxK%2FF0ff6oIkUkE7rfot4dSp4HqpVdQ3mzDz150MnHAZ%2FSBexcWv%2FRcBFC1RwvKD1bbLp71E3%2FkdtvaIar6xiyhX%2BGekOTFAanMbXkH4h3WTMKZfofciDMHfmvri3VaNNAm4hLyZw%2BGcJs%2FWzilhtPk9Mz4kC4cswrqPNcRNUhY0NGv3mODC1%2B41zRkpImF2Jfx8J8wnQLgYfGBXu8AMx2sp91j8fjM0gXORTEYk4PaCGewlCrHcgTqQlC0wCpP5rkBK1b%2B7ARW%2Fxk60jlBbQ%2FCx%2Bn8rPfDJo0YWLTIy4XzXx0M890PNkSvUcQwNWAiziAosUm10J3Ii8GlI6eCt6Qi3ak3a6lsmUoHFrGGiG8R4mtKQDMTRY23K%2FWBTGDIuIwkIXiUqhl4vIW%2FToSltyIt74B0mffVly7SPWo5rDbLzo4xgkFLHtmU1z%2F24DV79mrggHSSnxVRIu%2BlNr%2FeASCcnn0RluDRj4bdRIoiQPVn5hf8AuAWjm%2BmcTFSW9uwF6Nko24H2bDzna5JoFFi6mGxlBudiuEfWMxsUMQIawoXWr50hEQuxmYqcb2pGPpqa8zIScHGEyWbGMKqDmcQGOqUBkoIIspKCnBhb4kyNqHEhH2pGyCZ%2BUKJ2P%2FXg2PAdWPcwX8%2BMaKw5TODTlrH41X2Vm%2BhB%2B0si2p76jTWK1KvsahzWWB7%2BNgoQ%2BwrrLwy9pFE7X7k0nP1qHwg2yDPIBu%2BrD2KXNPtySXBwQLil2JuwIYS%2FcKjX7twCUJgYqZOegj1ThmLEfPueFvlqJqr8y%2BqynF%2F2WXZ5r4IfN3mMf%2BqYzXFz0O3e&X-Amz-Signature=dfa7bdeac0c35027bbc5c5dbb1e448f7966b84a35522e9060daa08d375d6e1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AGDR45G%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDCvX9AiIzMR1sjcgwA9sKdiGvVH82X%2BLUFa2LHqTTrOAiEAu75hsMNw2w5cJwSuw0iQec%2BtO8H8QZP2F32ZPLkS0ngq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGbVy2bVB078pcOFGyrcA05E4sf6BvhltlFbVtQmZ8S6vEx9fub%2B6LOnM2yZwmbP8FZxGxK%2FF0ff6oIkUkE7rfot4dSp4HqpVdQ3mzDz150MnHAZ%2FSBexcWv%2FRcBFC1RwvKD1bbLp71E3%2FkdtvaIar6xiyhX%2BGekOTFAanMbXkH4h3WTMKZfofciDMHfmvri3VaNNAm4hLyZw%2BGcJs%2FWzilhtPk9Mz4kC4cswrqPNcRNUhY0NGv3mODC1%2B41zRkpImF2Jfx8J8wnQLgYfGBXu8AMx2sp91j8fjM0gXORTEYk4PaCGewlCrHcgTqQlC0wCpP5rkBK1b%2B7ARW%2Fxk60jlBbQ%2FCx%2Bn8rPfDJo0YWLTIy4XzXx0M890PNkSvUcQwNWAiziAosUm10J3Ii8GlI6eCt6Qi3ak3a6lsmUoHFrGGiG8R4mtKQDMTRY23K%2FWBTGDIuIwkIXiUqhl4vIW%2FToSltyIt74B0mffVly7SPWo5rDbLzo4xgkFLHtmU1z%2F24DV79mrggHSSnxVRIu%2BlNr%2FeASCcnn0RluDRj4bdRIoiQPVn5hf8AuAWjm%2BmcTFSW9uwF6Nko24H2bDzna5JoFFi6mGxlBudiuEfWMxsUMQIawoXWr50hEQuxmYqcb2pGPpqa8zIScHGEyWbGMKqDmcQGOqUBkoIIspKCnBhb4kyNqHEhH2pGyCZ%2BUKJ2P%2FXg2PAdWPcwX8%2BMaKw5TODTlrH41X2Vm%2BhB%2B0si2p76jTWK1KvsahzWWB7%2BNgoQ%2BwrrLwy9pFE7X7k0nP1qHwg2yDPIBu%2BrD2KXNPtySXBwQLil2JuwIYS%2FcKjX7twCUJgYqZOegj1ThmLEfPueFvlqJqr8y%2BqynF%2F2WXZ5r4IfN3mMf%2BqYzXFz0O3e&X-Amz-Signature=ea8131db610fca13fedef64509a3d83e62b497dea3f97c9fcc66495cc84f385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
