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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK56623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNj5h%2Bgjquwu4TgHDH1yw4%2FuwPkT%2Fy9pvSrYulB8GWPQIgcA%2BrNKCxUemOzvMsc%2Bt7XfGAW4r5ux5obcp1fDBHJ4gqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTD9TbpS6uGcwDyfircA5QisC5YncURjy5Obwu9sLr7TNZPU2kOHxFLEhbqfNWMKr3puZFms82gG%2BTRJ%2FQEDvHpcEoEjSXlYA7%2F4iEPzRV0ADQo9F9NG7HAU%2Btf9GqFmlRmn65CHpWgl3fOm1%2BiTskWkhkWzf9Ihr33Mbhou8zZqaSqP3GhjiuOHnQ0wjV5tjly0l5cZjKwvYpXnWQq7oBFnIE%2BvtB7%2FKB8FsqXuVyIy0b8xqjKNdiCyLvSut4FEFkIxbzC8oCsz1NUxVt0e7deNzJHmBAOMUPwa1jbRk0iO3qqZGRDV3AXp5%2FXSgOoWEmCfO7Ean0y6njKaAndT8tgqGk%2BmgncNdhCGe%2F0zShYzMMh8BgMFxugrPgU55kcEiht6PvpYS8VSvOl%2FhlMeswMz5NQSPkW3C50K3rtS27drzRPcHZVcJj%2FVTaUGj0nBDP6Y9cIw5qUd12vSAjCtg3Jo7WubxtmaciR3QctULlahJQXQfL3%2F1F8fy8ya8rWLR9%2B%2B3m%2FUxF0H%2B3Uzd9xEHTZaACUZuynff6BPLOmRHHAIObE5%2B%2FibqqS5qkU9jE%2FaRM0BLSijp%2BrA9KDdhvxruSaz4o6rKUe9mlUuIFLX25ToSahsklcyMVBUMocrWJdAzvbbLpdIxI%2BtG6%2BMMq908IGOqUBcEhzB4s9262nj3mw5dv67ifYcf9JNqxEkGWJnt8PEUTYA3FRMII%2BixgeHT%2B0ANrePHGmZP6sMnDP5FsjNV8DbvIyXN18wBikrQLbNXRQi0C869KwI9LFe7BcLMaHTtsxc7n1%2FuX0nC10JjERRAa7KvjaAeBKLRPG5qdOWDYlCRiFE3nOpfqC4l4JFjxWCOhvRGs%2F%2BRbGNDbSNIWUWIOkJ0pGoKm4&X-Amz-Signature=9e6c8be0cc3e3e9dab107b1a090f41e51c080b5436e16c77fbb542817a80c845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK56623%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNj5h%2Bgjquwu4TgHDH1yw4%2FuwPkT%2Fy9pvSrYulB8GWPQIgcA%2BrNKCxUemOzvMsc%2Bt7XfGAW4r5ux5obcp1fDBHJ4gqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTD9TbpS6uGcwDyfircA5QisC5YncURjy5Obwu9sLr7TNZPU2kOHxFLEhbqfNWMKr3puZFms82gG%2BTRJ%2FQEDvHpcEoEjSXlYA7%2F4iEPzRV0ADQo9F9NG7HAU%2Btf9GqFmlRmn65CHpWgl3fOm1%2BiTskWkhkWzf9Ihr33Mbhou8zZqaSqP3GhjiuOHnQ0wjV5tjly0l5cZjKwvYpXnWQq7oBFnIE%2BvtB7%2FKB8FsqXuVyIy0b8xqjKNdiCyLvSut4FEFkIxbzC8oCsz1NUxVt0e7deNzJHmBAOMUPwa1jbRk0iO3qqZGRDV3AXp5%2FXSgOoWEmCfO7Ean0y6njKaAndT8tgqGk%2BmgncNdhCGe%2F0zShYzMMh8BgMFxugrPgU55kcEiht6PvpYS8VSvOl%2FhlMeswMz5NQSPkW3C50K3rtS27drzRPcHZVcJj%2FVTaUGj0nBDP6Y9cIw5qUd12vSAjCtg3Jo7WubxtmaciR3QctULlahJQXQfL3%2F1F8fy8ya8rWLR9%2B%2B3m%2FUxF0H%2B3Uzd9xEHTZaACUZuynff6BPLOmRHHAIObE5%2B%2FibqqS5qkU9jE%2FaRM0BLSijp%2BrA9KDdhvxruSaz4o6rKUe9mlUuIFLX25ToSahsklcyMVBUMocrWJdAzvbbLpdIxI%2BtG6%2BMMq908IGOqUBcEhzB4s9262nj3mw5dv67ifYcf9JNqxEkGWJnt8PEUTYA3FRMII%2BixgeHT%2B0ANrePHGmZP6sMnDP5FsjNV8DbvIyXN18wBikrQLbNXRQi0C869KwI9LFe7BcLMaHTtsxc7n1%2FuX0nC10JjERRAa7KvjaAeBKLRPG5qdOWDYlCRiFE3nOpfqC4l4JFjxWCOhvRGs%2F%2BRbGNDbSNIWUWIOkJ0pGoKm4&X-Amz-Signature=27a73ff8588ad6e9281073c6870f889dc6059dbde201cfe53221bb09b08e3a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
