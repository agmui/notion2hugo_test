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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBU3CLT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP2q4QRodVpJwd8oXEr3Tw1gTH8vmH1Pv3rCwPhI25HgIgFl%2FdtEr1nVWGwJpxryA%2BxieR2vrDO3H4w%2FtekaliMgAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDGImdmdVqMV3qnFGuyrcAxZXwQ0zxbrw7Ezoq4G6tLPdmucswj8wavwc6Y%2B%2Fr7xlnE1uNF7P7v9GN5tgz9UGJZFrZU0sgOAXMYdj9SjPU4JdsQSbNfHQ%2BZrhqY9VAURudKpsH8XkrW1HpF8BdK0N03anPcnWHEQ3g2xLnH3jOXZLlmK2ji1LeT%2BkQXiuhO3HeehqcW9vU%2B8W%2FByP1cMV2jx%2BUvO7c1L8kQd2m3NyOUegKV13vQ20KcL6taqA6RqoEpjGTJpbgzmRHMJ3IGl5NssmIpUrsOLbVngiOld23UgQGd8SnNMOW3dAqP9co6oxcNzVy1S4y%2Byx3e1D45%2BTVox18Lfi3wI6RKZWani%2BPYv9jnQnEfZPzKYVuuNFsyz1nswo5SCqgPa%2FF8N3DryhxNRCwbcsjUqXFMS%2Bn3pEldM9woAjnWkaiPqjDHRwIxS1gfjKwNo9F1HFcjXpPY0CgGKSywJsnkJmLJ5GiEf3wexo7exUcyy0zpcVB2ADeecf0c7WuuXOeoM61BSFpCNnjmiF17IR%2BdP%2FPp3fAKAecD0Joi5nBUGS7wOcXocdqY%2FfsUwEJdtQbZ9pai2OH7gfqwSMtFtmOU8XIfV%2F4%2Fw1uu6lRkILmHJvSU14vWJ1d%2BQ5wZBEhO5sGSvuMiyJMNvA878GOqUBZgHuNG%2FasxSiE6Pegl4rfKeu2gsSDS8NGcMX3G0I6tHQOjOZ3N2jQaj42tnxJxNBwRBu%2BBtEDUSGohiUKC0TwHVEo1iFsQFGh3DG%2FsklQQo%2BNi4kRutj%2Bk%2FANHP%2FJIxGygoUNITGB5Ngr3VdWxQydCDlPd5Qh1bSk1QxOUlBvuwV7DjfTbnqO1l3QTdSG6tooeOdqhZ1OEgtsDFucBEADPWxRuy1&X-Amz-Signature=2b6db8632730cede48d37622f2347116f1085ba23ebedf6a59869f6775f41f09&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBU3CLT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP2q4QRodVpJwd8oXEr3Tw1gTH8vmH1Pv3rCwPhI25HgIgFl%2FdtEr1nVWGwJpxryA%2BxieR2vrDO3H4w%2FtekaliMgAq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDGImdmdVqMV3qnFGuyrcAxZXwQ0zxbrw7Ezoq4G6tLPdmucswj8wavwc6Y%2B%2Fr7xlnE1uNF7P7v9GN5tgz9UGJZFrZU0sgOAXMYdj9SjPU4JdsQSbNfHQ%2BZrhqY9VAURudKpsH8XkrW1HpF8BdK0N03anPcnWHEQ3g2xLnH3jOXZLlmK2ji1LeT%2BkQXiuhO3HeehqcW9vU%2B8W%2FByP1cMV2jx%2BUvO7c1L8kQd2m3NyOUegKV13vQ20KcL6taqA6RqoEpjGTJpbgzmRHMJ3IGl5NssmIpUrsOLbVngiOld23UgQGd8SnNMOW3dAqP9co6oxcNzVy1S4y%2Byx3e1D45%2BTVox18Lfi3wI6RKZWani%2BPYv9jnQnEfZPzKYVuuNFsyz1nswo5SCqgPa%2FF8N3DryhxNRCwbcsjUqXFMS%2Bn3pEldM9woAjnWkaiPqjDHRwIxS1gfjKwNo9F1HFcjXpPY0CgGKSywJsnkJmLJ5GiEf3wexo7exUcyy0zpcVB2ADeecf0c7WuuXOeoM61BSFpCNnjmiF17IR%2BdP%2FPp3fAKAecD0Joi5nBUGS7wOcXocdqY%2FfsUwEJdtQbZ9pai2OH7gfqwSMtFtmOU8XIfV%2F4%2Fw1uu6lRkILmHJvSU14vWJ1d%2BQ5wZBEhO5sGSvuMiyJMNvA878GOqUBZgHuNG%2FasxSiE6Pegl4rfKeu2gsSDS8NGcMX3G0I6tHQOjOZ3N2jQaj42tnxJxNBwRBu%2BBtEDUSGohiUKC0TwHVEo1iFsQFGh3DG%2FsklQQo%2BNi4kRutj%2Bk%2FANHP%2FJIxGygoUNITGB5Ngr3VdWxQydCDlPd5Qh1bSk1QxOUlBvuwV7DjfTbnqO1l3QTdSG6tooeOdqhZ1OEgtsDFucBEADPWxRuy1&X-Amz-Signature=b32b7b75874dc6b8466c55fc67f739c31441759d5d0a27e9810b1246d79b60e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
