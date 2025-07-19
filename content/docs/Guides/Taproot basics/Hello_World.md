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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER6AX7Q%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfXdQQJI12heGWI99pp2OlBO3y56XgS32FRXZ9MqfgQIhANO%2FUZ7ZXIsHccwuwjXIQn5W4X%2Fpa1WeW08Pjt1HmyLCKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX%2FOTWh%2B992xnWNtkq3AOrKC4dFYgHe0jpfAEFpG21ds3h1DGdHsBkJD7osjEcT0XDcubiMgxVFxq0kWFuAI440wjNTQzWs75AS71ZpkK6HUyHEf%2FfQRvD5gkf1p9PUI%2B%2F9DqAInYnqOBZaytyAHoESfnOO1bGF3oNjqrEJZYffAJnXbZ5a6bKUvvzz3tDRjojbHHaZuPlzU7uzl9P4v4aDvvEdbD28b1KLMiJHgcyKO0FFZCvWgKCnjo5TnzZDGmPdE%2BHGyL3vPfB1dGZ1B4JeNxXd5EmmXon4aTbbePeh8fmQdva7I%2FFAWsjV3%2FmyS%2Fwlk7QcCze%2BZ7gMp8U1Xqk8Vb58zsY2GP1LIMv8EgycVu2rXL%2FL527zvYDULt2FNRz058GzePG1zjmpQX3F56h0ZZZBd8zIAAbZb%2B4hujXHCsDcLxYY8esmtcSDM7DphymTj8AVFwO1qRLKk4lBC%2FzRxYEkLStOTbocDIY6rfbkFFlqi6JKd%2Fzm%2BhUJ7h1zXfUWPAlEieKekoZyaMckmK185UPHAL2yxxNppZOt7vNE%2F442%2B%2FMkvlzJaSTk4hNQ0mAR88WkLN2fKjeuduAkFOoofaA6QUiuERt1zM%2BMohZFt22jlvtB9mG844i2LQxvzIw%2BuRvzB%2FFrZmOmzD5t%2B7DBjqkAWMHQyWYle78qDoSN1EUH1cazsi2UclQbQqF5V6G39KghEF%2FnrgkibWx8zV0TUoeR9nTVJk6mBRbTcVo55Ve6OTUd3G6CdgpPsoiVvpjIy6jdgCZMF880mdZKzO2B5ouno8FnSkqK9ABQj56Sk006C6Ran5aZ5qSTIRHhZdbBGRJrup%2Fxm7VAnDM%2FvkBTyygbIaEXFYdxOLzK15tikPxrEIefr7F&X-Amz-Signature=7d2480a2bafc62fe8c0ce36f03f11b0232441985172a70bc4ee42c7f2cf6bd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER6AX7Q%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQfXdQQJI12heGWI99pp2OlBO3y56XgS32FRXZ9MqfgQIhANO%2FUZ7ZXIsHccwuwjXIQn5W4X%2Fpa1WeW08Pjt1HmyLCKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX%2FOTWh%2B992xnWNtkq3AOrKC4dFYgHe0jpfAEFpG21ds3h1DGdHsBkJD7osjEcT0XDcubiMgxVFxq0kWFuAI440wjNTQzWs75AS71ZpkK6HUyHEf%2FfQRvD5gkf1p9PUI%2B%2F9DqAInYnqOBZaytyAHoESfnOO1bGF3oNjqrEJZYffAJnXbZ5a6bKUvvzz3tDRjojbHHaZuPlzU7uzl9P4v4aDvvEdbD28b1KLMiJHgcyKO0FFZCvWgKCnjo5TnzZDGmPdE%2BHGyL3vPfB1dGZ1B4JeNxXd5EmmXon4aTbbePeh8fmQdva7I%2FFAWsjV3%2FmyS%2Fwlk7QcCze%2BZ7gMp8U1Xqk8Vb58zsY2GP1LIMv8EgycVu2rXL%2FL527zvYDULt2FNRz058GzePG1zjmpQX3F56h0ZZZBd8zIAAbZb%2B4hujXHCsDcLxYY8esmtcSDM7DphymTj8AVFwO1qRLKk4lBC%2FzRxYEkLStOTbocDIY6rfbkFFlqi6JKd%2Fzm%2BhUJ7h1zXfUWPAlEieKekoZyaMckmK185UPHAL2yxxNppZOt7vNE%2F442%2B%2FMkvlzJaSTk4hNQ0mAR88WkLN2fKjeuduAkFOoofaA6QUiuERt1zM%2BMohZFt22jlvtB9mG844i2LQxvzIw%2BuRvzB%2FFrZmOmzD5t%2B7DBjqkAWMHQyWYle78qDoSN1EUH1cazsi2UclQbQqF5V6G39KghEF%2FnrgkibWx8zV0TUoeR9nTVJk6mBRbTcVo55Ve6OTUd3G6CdgpPsoiVvpjIy6jdgCZMF880mdZKzO2B5ouno8FnSkqK9ABQj56Sk006C6Ran5aZ5qSTIRHhZdbBGRJrup%2Fxm7VAnDM%2FvkBTyygbIaEXFYdxOLzK15tikPxrEIefr7F&X-Amz-Signature=06e4861e648027c9373a9fbc02a904f0a814233d6f5bb4663fe3b68ab9b53756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
