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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3C5YK6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ4TRhMLMn3O%2F70KpviXsZUm218yu%2FBduYZkxc2pytKAiEAgRimzMFbWqMP5P7ovfWGEDUrcB9HCGdKw6rtkGrMS3UqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHINMOhHbhGo36cVXircAybGrycZ%2BAy4IGY7kFRGREzB6nIGq4Au8U9oZFqg1dJzoTpbTjsYuqQaH3XSzVEdV9mAGostOF2pb8kmgv%2B4SDEcoCJfRJuGURBWHS8TiivxJ%2Fkf3o25Vyxn4fQrkmbLa4%2BXgp2KZcbtwhtskYS6TfY5Z52VVNk07vYC7Nq3S9TW5J8rMXQ7rTJVabBThG16ZB1A0WuugxGau6%2FictqsbgP6dj%2FCufpZ%2Bxgsl94Ae3vCqNFeGjqpze2s0axRadoeVsK825gK6MATBMFDbhZbTOhXvcjRP%2BfeUe0FkW22KymuflpoDt%2F87JCimEw9l3LYOZncI3PtxcFMvpt%2B3FL46ntPG8nfxBR9LkJUMJI6yGCU92KPvhjlKlCr%2Fvl519pU7wjYsaCqQAUCfFT4hVbxAJALeXnm0T20K%2BSg0%2BVDnSyjzKQQu3d7UYSVkJa1XtJ%2FhNmQYCef7SFD%2FKmPAQKyarhvDNVJss%2FWx6EKnLYToggb8O9l8ILwt%2BT0lZ8wu6MRCE5l6s5orUsQX1332cbmu52Kly01HFhXHWXynqyz9JqXHh5LpQ6aBwKhnC%2FPxk9KeTGXuJmUbRswiaYPjQVnMzGkiPuQ6%2FzkKtdzlhfeUv26YaAtn2CIHgoth6cJMMuarL0GOqUBL6Wf%2FQix9M2rQR9acIZwI376d%2FPmXNyqKUEQnHjMDw9P05EFRd4cvgnwu510skuzTxdWFqLYZWsdVIXimADMOejYtEKVQM6tgmH1R%2BYu1JSZu5u1i7XZ%2Fh2e1fEkvAL01jCFzSuqeAgs2SAfua916jqCfBkFgYPGFYVl8dUoUSKq3vxxbmiZW%2BCGpjuSj7E1NTZRG1fG9OcCL36H%2F7%2Bv6ZYA%2Biw%2B&X-Amz-Signature=465b893b1840fb8369fe33e3a70f23c37ad8a3244c424f5f44aa6a83a8d5f8e8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3C5YK6%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ4TRhMLMn3O%2F70KpviXsZUm218yu%2FBduYZkxc2pytKAiEAgRimzMFbWqMP5P7ovfWGEDUrcB9HCGdKw6rtkGrMS3UqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHINMOhHbhGo36cVXircAybGrycZ%2BAy4IGY7kFRGREzB6nIGq4Au8U9oZFqg1dJzoTpbTjsYuqQaH3XSzVEdV9mAGostOF2pb8kmgv%2B4SDEcoCJfRJuGURBWHS8TiivxJ%2Fkf3o25Vyxn4fQrkmbLa4%2BXgp2KZcbtwhtskYS6TfY5Z52VVNk07vYC7Nq3S9TW5J8rMXQ7rTJVabBThG16ZB1A0WuugxGau6%2FictqsbgP6dj%2FCufpZ%2Bxgsl94Ae3vCqNFeGjqpze2s0axRadoeVsK825gK6MATBMFDbhZbTOhXvcjRP%2BfeUe0FkW22KymuflpoDt%2F87JCimEw9l3LYOZncI3PtxcFMvpt%2B3FL46ntPG8nfxBR9LkJUMJI6yGCU92KPvhjlKlCr%2Fvl519pU7wjYsaCqQAUCfFT4hVbxAJALeXnm0T20K%2BSg0%2BVDnSyjzKQQu3d7UYSVkJa1XtJ%2FhNmQYCef7SFD%2FKmPAQKyarhvDNVJss%2FWx6EKnLYToggb8O9l8ILwt%2BT0lZ8wu6MRCE5l6s5orUsQX1332cbmu52Kly01HFhXHWXynqyz9JqXHh5LpQ6aBwKhnC%2FPxk9KeTGXuJmUbRswiaYPjQVnMzGkiPuQ6%2FzkKtdzlhfeUv26YaAtn2CIHgoth6cJMMuarL0GOqUBL6Wf%2FQix9M2rQR9acIZwI376d%2FPmXNyqKUEQnHjMDw9P05EFRd4cvgnwu510skuzTxdWFqLYZWsdVIXimADMOejYtEKVQM6tgmH1R%2BYu1JSZu5u1i7XZ%2Fh2e1fEkvAL01jCFzSuqeAgs2SAfua916jqCfBkFgYPGFYVl8dUoUSKq3vxxbmiZW%2BCGpjuSj7E1NTZRG1fG9OcCL36H%2F7%2Bv6ZYA%2Biw%2B&X-Amz-Signature=501562ceb1b65ad3412ee8b32acde9b87fa798c3342aaece660c0c7f812a940a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
