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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6DJLHF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID47rwc1cHNMD8AwbhJrEDzE0CTr2l0MwTDlqfADJ81KAiEAnrqQRoHDeKuSMk1F2JYCi8YIg9UwkVocLVyQzhOUQtgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5z82rblO2SMx%2FXTCrcA66lVY5BoBpIvWYfh2pLYtaK%2B7g9%2F90ydTbihne4XzFeAgL%2FDnbTsJCHYVEQot7R%2BCA%2FLnisFoTqzVVVQpPSkIP3IOnZgAHchAM44fPcGyNhMWAhzEjWHaFI%2ByGqFaQwzjh%2ByJrPgQTsTyze4JMKqytoAsbS4H%2Bo5tNegYHhJzHFz6SXopMnMvX5EG5cwjJDAL4ltvUqjwr%2Bnb5TCiCvlg%2B3yuKHC6v1KLZNR6TOIG9l%2B7BlNZ41%2BuvtiJb%2FA7rJtgrd7sXYMi8yDpKO50GWJgTsW1AxlLUFHrZ%2FFQOMo5TD5aEOWkkp113KApOdlvR6oKOvuDSLrbA%2BS1eVpJa%2BJf44T6CuIDfdlJBDRo2y45luRKOFd9v2vBoEwJDn1NJrCPQ2NGHOZrZwYNRQgg8EswNLdE%2BedXgk3nvxd%2FWmUR%2FmmJBhxzOlsP5oMs4%2FlOkYklHe8ac2DxSeHJo78Mzdn46jiiMvcezgukd3uyF0J4sYzHdqe2qzchoc5yVpXSzxxwDecPhAMzGwLBU9F%2B34L5KVE2DyIauV%2BKzJBDxc4JoBjs%2F2v8gxrYeFlTbF0Ls78myGgnSiPFjYUd9M2rsMXtKCyr0n81m7djKkS%2BoxqwQFeTI5Ev9t9HW8t3GRMJWO5sEGOqUBJZIKsUXdgO6fat1alcOXrsGHV5sgwnJeB2EYNARlUlolmQ5hiJlr%2By9K3hwolWVZ%2FJLB3zV7pNKNkusGMWuT6Fmm7UHK4ADig8IOsLlksrt6gq9qd49fsOB6Y6wF1F06Vk82xEtPY4XvJa9cp1D9cLpKWpt6extBOy7SnB%2Ba03kKigLxJSTcBfxoaPV2ODh%2FlNpTWVDrUFKTM7Wmcp0XG8l2Mu8D&X-Amz-Signature=0f462d3b36cc5fa00150c60174e869108f304edcd294df24e9ed48a843363b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG6DJLHF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID47rwc1cHNMD8AwbhJrEDzE0CTr2l0MwTDlqfADJ81KAiEAnrqQRoHDeKuSMk1F2JYCi8YIg9UwkVocLVyQzhOUQtgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5z82rblO2SMx%2FXTCrcA66lVY5BoBpIvWYfh2pLYtaK%2B7g9%2F90ydTbihne4XzFeAgL%2FDnbTsJCHYVEQot7R%2BCA%2FLnisFoTqzVVVQpPSkIP3IOnZgAHchAM44fPcGyNhMWAhzEjWHaFI%2ByGqFaQwzjh%2ByJrPgQTsTyze4JMKqytoAsbS4H%2Bo5tNegYHhJzHFz6SXopMnMvX5EG5cwjJDAL4ltvUqjwr%2Bnb5TCiCvlg%2B3yuKHC6v1KLZNR6TOIG9l%2B7BlNZ41%2BuvtiJb%2FA7rJtgrd7sXYMi8yDpKO50GWJgTsW1AxlLUFHrZ%2FFQOMo5TD5aEOWkkp113KApOdlvR6oKOvuDSLrbA%2BS1eVpJa%2BJf44T6CuIDfdlJBDRo2y45luRKOFd9v2vBoEwJDn1NJrCPQ2NGHOZrZwYNRQgg8EswNLdE%2BedXgk3nvxd%2FWmUR%2FmmJBhxzOlsP5oMs4%2FlOkYklHe8ac2DxSeHJo78Mzdn46jiiMvcezgukd3uyF0J4sYzHdqe2qzchoc5yVpXSzxxwDecPhAMzGwLBU9F%2B34L5KVE2DyIauV%2BKzJBDxc4JoBjs%2F2v8gxrYeFlTbF0Ls78myGgnSiPFjYUd9M2rsMXtKCyr0n81m7djKkS%2BoxqwQFeTI5Ev9t9HW8t3GRMJWO5sEGOqUBJZIKsUXdgO6fat1alcOXrsGHV5sgwnJeB2EYNARlUlolmQ5hiJlr%2By9K3hwolWVZ%2FJLB3zV7pNKNkusGMWuT6Fmm7UHK4ADig8IOsLlksrt6gq9qd49fsOB6Y6wF1F06Vk82xEtPY4XvJa9cp1D9cLpKWpt6extBOy7SnB%2Ba03kKigLxJSTcBfxoaPV2ODh%2FlNpTWVDrUFKTM7Wmcp0XG8l2Mu8D&X-Amz-Signature=8e637fa36c819a364b8507f3499e4f8f6267f8f3bc5b9d3f25afb31807ae195f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
