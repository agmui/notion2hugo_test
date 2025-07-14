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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624G7VBFQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEZ2IsyzjHN0VZZtu3A5G7oJlqtx%2B34LNVEj4UkTTxdsAiAnTaYKB5%2FDPyBmSbzITwqyydfEPNRrkOEhdcSfCIxXvyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6C3ghklIbxNGc8TWKtwDbVzEJ2NT1qdtPCd5qQSr5ZIheNJVoMdVaSXaaNXmkMQisExqZU%2FRzYgauN%2BtwQP%2BNVQSfKHIY8ZVKrPoQAKKC8qvH5SQ8Iyv%2FUayCNeC%2F0dNuA%2BHlvRImeZdjIbXHiN9wtXhuKOCzIV%2FONbPvtG%2BKMN5EyleJ91A4DpogE5cd3sQszVcce5F55G0d2JcMOjQ%2FquS3aefVws6ehySyf6QdgvORUQMdEY0f1Amb8nnYABXEIub56Lz4wcSRIdIK%2FVWpGOrL2SjrPiGNWlj5qZH6btoyg0WNxeNmJ9G0sgq7IvHMlHxrfjO6QoW5xxG0YFrGhJaUd8pG%2BGPdW0AcMkHs2P3EoFgu7Wifn8klf7YR%2BmTKr1s8GRfzWlzygm6Vbd238dmPzTWJYsrUqhX51LuuXqBXsUnSlstVETpIZjcA8jvyHWMil3yLiOtXH1JYbx%2BGzcepBf8MvRQcIygmTIO%2BZWfDvwnYdfMCy29rYg1yMEgo1IR4TNzqbrAENjTJEtuZV%2FvusJoj2jNZiopOfHXeLo%2ByV3UnOEynLECpw%2FRu7cOfxo8V%2B3Nhjl28e5KSP6ZqHLTtgPE0phiPsHmLAMv9g27tZ3LPNH6fewCu41TiLEd49PWnaeM8ily2vwwnoXUwwY6pgE5P2%2FI7Z7aJ%2BCCf8tDtHAJqjdxXeEeDmnD33Yf0FNR6uGJj9jaUQzWIFVvwLGEAloO9vhxuOPDc8DVN0wt%2Fs8Nv1q8HUzqFLc%2BUvp8MYQT9tXhN%2FZFuj7M2yo1vkdRzGf5Dw0KCnHszSSja2aqDF9hBi15xC88bbqf0uDIITAsZIgVtl0bEZh4cugWAQYQZCKE2Wp2LzSq8%2FfMFqRe%2BManutT0pHhe&X-Amz-Signature=42b1d98cfa3695f2cd338cfd74046fac1123dac4f696e64c3a8d5dd1ce22f370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624G7VBFQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEZ2IsyzjHN0VZZtu3A5G7oJlqtx%2B34LNVEj4UkTTxdsAiAnTaYKB5%2FDPyBmSbzITwqyydfEPNRrkOEhdcSfCIxXvyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM6C3ghklIbxNGc8TWKtwDbVzEJ2NT1qdtPCd5qQSr5ZIheNJVoMdVaSXaaNXmkMQisExqZU%2FRzYgauN%2BtwQP%2BNVQSfKHIY8ZVKrPoQAKKC8qvH5SQ8Iyv%2FUayCNeC%2F0dNuA%2BHlvRImeZdjIbXHiN9wtXhuKOCzIV%2FONbPvtG%2BKMN5EyleJ91A4DpogE5cd3sQszVcce5F55G0d2JcMOjQ%2FquS3aefVws6ehySyf6QdgvORUQMdEY0f1Amb8nnYABXEIub56Lz4wcSRIdIK%2FVWpGOrL2SjrPiGNWlj5qZH6btoyg0WNxeNmJ9G0sgq7IvHMlHxrfjO6QoW5xxG0YFrGhJaUd8pG%2BGPdW0AcMkHs2P3EoFgu7Wifn8klf7YR%2BmTKr1s8GRfzWlzygm6Vbd238dmPzTWJYsrUqhX51LuuXqBXsUnSlstVETpIZjcA8jvyHWMil3yLiOtXH1JYbx%2BGzcepBf8MvRQcIygmTIO%2BZWfDvwnYdfMCy29rYg1yMEgo1IR4TNzqbrAENjTJEtuZV%2FvusJoj2jNZiopOfHXeLo%2ByV3UnOEynLECpw%2FRu7cOfxo8V%2B3Nhjl28e5KSP6ZqHLTtgPE0phiPsHmLAMv9g27tZ3LPNH6fewCu41TiLEd49PWnaeM8ily2vwwnoXUwwY6pgE5P2%2FI7Z7aJ%2BCCf8tDtHAJqjdxXeEeDmnD33Yf0FNR6uGJj9jaUQzWIFVvwLGEAloO9vhxuOPDc8DVN0wt%2Fs8Nv1q8HUzqFLc%2BUvp8MYQT9tXhN%2FZFuj7M2yo1vkdRzGf5Dw0KCnHszSSja2aqDF9hBi15xC88bbqf0uDIITAsZIgVtl0bEZh4cugWAQYQZCKE2Wp2LzSq8%2FfMFqRe%2BManutT0pHhe&X-Amz-Signature=4b083aa9c54cbafd2752d21233a14f4362f0ddba254d9036dbc3a3ec7dbe9642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
