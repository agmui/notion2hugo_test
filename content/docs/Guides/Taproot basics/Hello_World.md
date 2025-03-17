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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUZ3PUH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESKYGhYO2LIJEEJccIg9vX6XqBNJPw0tqBPugDNJtEQIgI5fI6ZkKnX7LV2R3uP8l3Qz9OpEvgbigBssp5KJw6cUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCfYt6X2MgJFXi0oiCrcA60gxXGLGUvrmZMQiW6436f11UPQiFmsgSbuH9W0j4rZfDpQA63P2YXX28rAJTWTbcf6SzVsk03JXq8l3GrFOi7ybicNWTFpHKcP9%2FgUpWb1ziRG4KNSoVyUONjucq6mddXliZgKEB10plw3uVyQEtCynkPwgpAQQOKCDbKk7wlDlEzIUiFoU4IXFMwzmLqJRD%2BMaoJZQDp%2BMD%2FzfAl42fY2FWiWei9w7onws5ljFmT6xL4tsrkhoSUB98uj2RisThuQ8PYJOkzv6vutFfHYgPzVsB4Tyj6xiLeOd%2Beu7Ywg8M8CJQgxoUJHd%2B43OsMWarfm9Um%2F1cO%2BGb%2Bbqz%2FiYwGmER%2BY9%2BvMa4QMrbgwW2qRvxmSEd7zwbPfPovD0Js%2FG4Mvdts8ZJkOPf4GttbyAGirhGUmmvucilFMeLQ4D0QLX%2BuWQ%2BydcOMOOFW4hYrLRUlP1pSS%2Bss62FbYcSjNFbOMTYvDOajPevN7jPEzjtwff0SSa9ZjF4sDKi1U2%2FM23aDO4ObHtJFxfJTMCiKfeT32dJJaHoF7DY2iUNwtrjrk%2Fpi6SimnhIDVAkU8so82kRQwhvqFZugCDM3bOtY8mwfXqlCaMqXi2GUR2%2FVtyX6ud8sgx2rJMYtuk25wMJiI4b4GOqUBrd0eICDeZT0thiQNqYSpKf3I2mTWFQJl%2BIYcHZqQIRNVnkfn9pSA%2Bo%2BWXXo7Jx4t2Tv3WMXlu1xrirr9HkXK6n6mCLj6oYZ4nKVRqY3zLB9NMRlfv0dXAAxsnZHbGHIvN6CJpEbOGvt9%2BP6%2BrMLI3jxSTCj5KucCVbDk8dZgY%2BkEtt%2FKJYRykLow1mTOS2pPIGsCqeCcO0db1bvA5evNDTebMrCh&X-Amz-Signature=f73cd1d6b5142cdd185e04de5526ddf95f7433306ee80b43c80f1c26ef9e428e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FUZ3PUH%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCESKYGhYO2LIJEEJccIg9vX6XqBNJPw0tqBPugDNJtEQIgI5fI6ZkKnX7LV2R3uP8l3Qz9OpEvgbigBssp5KJw6cUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCfYt6X2MgJFXi0oiCrcA60gxXGLGUvrmZMQiW6436f11UPQiFmsgSbuH9W0j4rZfDpQA63P2YXX28rAJTWTbcf6SzVsk03JXq8l3GrFOi7ybicNWTFpHKcP9%2FgUpWb1ziRG4KNSoVyUONjucq6mddXliZgKEB10plw3uVyQEtCynkPwgpAQQOKCDbKk7wlDlEzIUiFoU4IXFMwzmLqJRD%2BMaoJZQDp%2BMD%2FzfAl42fY2FWiWei9w7onws5ljFmT6xL4tsrkhoSUB98uj2RisThuQ8PYJOkzv6vutFfHYgPzVsB4Tyj6xiLeOd%2Beu7Ywg8M8CJQgxoUJHd%2B43OsMWarfm9Um%2F1cO%2BGb%2Bbqz%2FiYwGmER%2BY9%2BvMa4QMrbgwW2qRvxmSEd7zwbPfPovD0Js%2FG4Mvdts8ZJkOPf4GttbyAGirhGUmmvucilFMeLQ4D0QLX%2BuWQ%2BydcOMOOFW4hYrLRUlP1pSS%2Bss62FbYcSjNFbOMTYvDOajPevN7jPEzjtwff0SSa9ZjF4sDKi1U2%2FM23aDO4ObHtJFxfJTMCiKfeT32dJJaHoF7DY2iUNwtrjrk%2Fpi6SimnhIDVAkU8so82kRQwhvqFZugCDM3bOtY8mwfXqlCaMqXi2GUR2%2FVtyX6ud8sgx2rJMYtuk25wMJiI4b4GOqUBrd0eICDeZT0thiQNqYSpKf3I2mTWFQJl%2BIYcHZqQIRNVnkfn9pSA%2Bo%2BWXXo7Jx4t2Tv3WMXlu1xrirr9HkXK6n6mCLj6oYZ4nKVRqY3zLB9NMRlfv0dXAAxsnZHbGHIvN6CJpEbOGvt9%2BP6%2BrMLI3jxSTCj5KucCVbDk8dZgY%2BkEtt%2FKJYRykLow1mTOS2pPIGsCqeCcO0db1bvA5evNDTebMrCh&X-Amz-Signature=1ad2afea09784b69728bbcf7543f6358c560ee772bd673c38e236a90f21d3f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
