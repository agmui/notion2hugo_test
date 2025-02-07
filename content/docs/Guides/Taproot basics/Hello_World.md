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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZ2LI7N%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDdGkXpGrpVa%2FTHsw1k5rJGvUl6UH8hNKWjkiE79qa6JQIgKWE%2B7bVgQGCyfSb4krwRhGakKqauZEFoJWbc%2FE3EM2sq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2B9z9qMGDoqI6Q2iyrcA2uyYLVzwbg4d5wo4cO3hujAp8ea9burnNdlin%2F0e83JQdb6wQjruDPdl8HmUZF9CgPQU6eF9iZr7Fu22vHWdKGb9LSG874F9NTX0Tlc1uMUHN9wHmvhhdCY1V6SV5zN%2BTSDERCLgVoRlT6KBkcrJDc0KSPsao95JffUy02kcJbaptGjq%2F%2FF69N%2FZk%2FwZKqt3MzA1OprPmq89fPJOX3G24cjZ5yN0Xr2hdrTC7IKQxR0v0U%2FAUoZNWCiv67vFKdKmiq3z6YeTsujGd8Flpsd%2BdI8gqJ5k8%2BIj9lqKR5oj4ehg366Am2VZi4v7qTkHIi32z9pFzzinVIHHm2UZQm%2B4yWEXpakaEPaVqKe1AoEXEQrITME0o16mlhp1VUcv0x5SFstUQS348%2BFsFnG6h8J43n2twWYrgEZYtT5RWVKJ3x%2FvylWAU5ckwBVt9pqjv9cDNceadDs1JdYocJqXzd3mtEo2iqVPq%2FRV5T4FzKwIvUtj0Pu6%2BlcZx0vBui02z7%2FIqqvm7DLhmglXJS6DloGyxQPMza6KUumj5Up7W6sOWUjU0hKN7ldNJ1IX9OewCYr0LRf88onNnYXPj6SbplAiGTKXFYZP5DZFKyfvlSmXRammqyoGWhSejNfHZCTMK7hmL0GOqUBdsGfyqPs%2BlRXqFyrpUXkBmii0BAxE1sMEnZeV0AhkYKkML2U%2B63cwHNaUSDtJphXvKEo3a0kNHDipmDlp1QUUJqDG6GfFm7DpHnPl%2BMoa8HGO7Phs3%2BFT8%2FCbG9xX5srBKU5F48g8jMAUz7rCVpotayWzFDtdelFr4qmGuoe3QBacn0c9ybejENZiSh5LABK6ZoLxmPaJhAnO5ipXw772ezxwLvA&X-Amz-Signature=7f0c292596495bc69bd24f2fae62bfaf0c567716bbd8c38e93ea88312684c287&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZ2LI7N%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDdGkXpGrpVa%2FTHsw1k5rJGvUl6UH8hNKWjkiE79qa6JQIgKWE%2B7bVgQGCyfSb4krwRhGakKqauZEFoJWbc%2FE3EM2sq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2B9z9qMGDoqI6Q2iyrcA2uyYLVzwbg4d5wo4cO3hujAp8ea9burnNdlin%2F0e83JQdb6wQjruDPdl8HmUZF9CgPQU6eF9iZr7Fu22vHWdKGb9LSG874F9NTX0Tlc1uMUHN9wHmvhhdCY1V6SV5zN%2BTSDERCLgVoRlT6KBkcrJDc0KSPsao95JffUy02kcJbaptGjq%2F%2FF69N%2FZk%2FwZKqt3MzA1OprPmq89fPJOX3G24cjZ5yN0Xr2hdrTC7IKQxR0v0U%2FAUoZNWCiv67vFKdKmiq3z6YeTsujGd8Flpsd%2BdI8gqJ5k8%2BIj9lqKR5oj4ehg366Am2VZi4v7qTkHIi32z9pFzzinVIHHm2UZQm%2B4yWEXpakaEPaVqKe1AoEXEQrITME0o16mlhp1VUcv0x5SFstUQS348%2BFsFnG6h8J43n2twWYrgEZYtT5RWVKJ3x%2FvylWAU5ckwBVt9pqjv9cDNceadDs1JdYocJqXzd3mtEo2iqVPq%2FRV5T4FzKwIvUtj0Pu6%2BlcZx0vBui02z7%2FIqqvm7DLhmglXJS6DloGyxQPMza6KUumj5Up7W6sOWUjU0hKN7ldNJ1IX9OewCYr0LRf88onNnYXPj6SbplAiGTKXFYZP5DZFKyfvlSmXRammqyoGWhSejNfHZCTMK7hmL0GOqUBdsGfyqPs%2BlRXqFyrpUXkBmii0BAxE1sMEnZeV0AhkYKkML2U%2B63cwHNaUSDtJphXvKEo3a0kNHDipmDlp1QUUJqDG6GfFm7DpHnPl%2BMoa8HGO7Phs3%2BFT8%2FCbG9xX5srBKU5F48g8jMAUz7rCVpotayWzFDtdelFr4qmGuoe3QBacn0c9ybejENZiSh5LABK6ZoLxmPaJhAnO5ipXw772ezxwLvA&X-Amz-Signature=15fea5b32132659fc64abb17aaee0b8203a5af8e6ae1cf578bdc418cb29e88e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
