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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ESQ7MV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClCM9yGuy3g3mjmm%2FJXdOWUU48feR0Mi6zQvLqmcqpIwIhAKV313lkTr1Ogwr1NzJHbayfpPAYCXnlwrJ4jNx1QSPaKv8DCCMQABoMNjM3NDIzMTgzODA1Igzj6H3JA%2BDW4FvX8Kkq3APUhTr4c6IxLVAGTNp3QJ3GU0VjBDvqAr7w1%2FLr3qK9lbnlqgLZ%2FNOpvfBaN5mFTnxtvKSuyyNM1mQN5HjyIdvw9BfdmF3exiaDC7K5hwq6KD2t94rYAkAEUH63fzP94s9nou1%2BbTLmwgWNjZoh86r8gaUGUD4%2BLPxZuynzmhM6wUZpi%2FLmOMvweP3zdvptR1b1hqqsTuZrCbboacYz4%2Bpy6YrAXLSh4GNyYDGRBDkfaRcVBu3yWGW%2FRN3%2F0WOINX868JuofE%2F3kWdgXLSi6YI6Oes6J%2F9l9zUdI1PLyAQFD07VIl8rwXeDHYGTkIZzLjzfkALiwGeroukybiHXGhsTxdlve6iXoha8Oyqmp4kjGXX5CNjiIFMHfENv2wWIZW3q5SKJoOpPXXun5hfiolgJ0rYazgmb%2FenRjsDDcj5kbynLUVoZ1HCbdzg6tj2t5Q2dYDSTJPUHGVSywQ6ceXgxCI2K546J8K1ehdgwGEg6T18q5Ui1mGA%2BOkRSZ8A6KZkYbFAJF7JY%2B2prS7%2FxTfAcGdkK9kBC1kfnZau5mEi7ip1t8v%2BjS%2Bv3SyCB7qTd8QnrIoTeoEqqAR2xcoEOdpM9qG9NMiNZY6pqpVEORZsSphUQE8%2FEMjnJsbeZUzCa6oW9BjqkAfybW3N%2F8WgyebX9%2FGXl8Hzhw6j9Rl5mioq4br1DIMPgi9RaDEcEBGQFfAk0PZuxzMpC%2B442HkyDIjPsZJQyP2XBsgg%2F0DOhZMj31yaCtksQ13oYV2nxRNcz0J%2FLa340IS6%2BCRtkHg3fYOZCveL2utyi2KA0lF5HXd8VRT%2F8%2BQPAxJMF6TfdikCM7zYtJI1lPdRLQMi4HxP7OcrTMn%2FXAuBcm%2BUZ&X-Amz-Signature=b6f5c6868aff7a5f9d211e3684686214893a447fca5436aecb28121a8c9c7868&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6ESQ7MV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQClCM9yGuy3g3mjmm%2FJXdOWUU48feR0Mi6zQvLqmcqpIwIhAKV313lkTr1Ogwr1NzJHbayfpPAYCXnlwrJ4jNx1QSPaKv8DCCMQABoMNjM3NDIzMTgzODA1Igzj6H3JA%2BDW4FvX8Kkq3APUhTr4c6IxLVAGTNp3QJ3GU0VjBDvqAr7w1%2FLr3qK9lbnlqgLZ%2FNOpvfBaN5mFTnxtvKSuyyNM1mQN5HjyIdvw9BfdmF3exiaDC7K5hwq6KD2t94rYAkAEUH63fzP94s9nou1%2BbTLmwgWNjZoh86r8gaUGUD4%2BLPxZuynzmhM6wUZpi%2FLmOMvweP3zdvptR1b1hqqsTuZrCbboacYz4%2Bpy6YrAXLSh4GNyYDGRBDkfaRcVBu3yWGW%2FRN3%2F0WOINX868JuofE%2F3kWdgXLSi6YI6Oes6J%2F9l9zUdI1PLyAQFD07VIl8rwXeDHYGTkIZzLjzfkALiwGeroukybiHXGhsTxdlve6iXoha8Oyqmp4kjGXX5CNjiIFMHfENv2wWIZW3q5SKJoOpPXXun5hfiolgJ0rYazgmb%2FenRjsDDcj5kbynLUVoZ1HCbdzg6tj2t5Q2dYDSTJPUHGVSywQ6ceXgxCI2K546J8K1ehdgwGEg6T18q5Ui1mGA%2BOkRSZ8A6KZkYbFAJF7JY%2B2prS7%2FxTfAcGdkK9kBC1kfnZau5mEi7ip1t8v%2BjS%2Bv3SyCB7qTd8QnrIoTeoEqqAR2xcoEOdpM9qG9NMiNZY6pqpVEORZsSphUQE8%2FEMjnJsbeZUzCa6oW9BjqkAfybW3N%2F8WgyebX9%2FGXl8Hzhw6j9Rl5mioq4br1DIMPgi9RaDEcEBGQFfAk0PZuxzMpC%2B442HkyDIjPsZJQyP2XBsgg%2F0DOhZMj31yaCtksQ13oYV2nxRNcz0J%2FLa340IS6%2BCRtkHg3fYOZCveL2utyi2KA0lF5HXd8VRT%2F8%2BQPAxJMF6TfdikCM7zYtJI1lPdRLQMi4HxP7OcrTMn%2FXAuBcm%2BUZ&X-Amz-Signature=a86bb52c919662a68c0f18d0586a79dd152cafca2e80f5023e7432169229fdc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
