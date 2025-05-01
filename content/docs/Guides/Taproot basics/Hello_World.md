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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFZTYQT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCrH5pUUA0SfrMjaxn8edqR%2FFI1MxD01mOScS2UuQXKUwIhAPjEX%2FAHI1%2BaTLc0v17P1gkH6jy1KlWYo%2BDBQ77nuNhkKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywzlX%2FY0Hbiub14hgq3ANl0yFp2Vwzdeb0iSE1xbzDRJsm2UjcZiGZAy2gG8rtfJaUr8rw26euQ7Nazy4qClFBtPoNqVWKMYKAl5OWRWCszke1Md7%2FYHc8uneejl9dm8gmt9%2BUiCnuHVaTjQ1Z7UaFZ3XxymzHnY9gGXHUg2RDjumDvpDItV6%2BoMi7rWtdkH1zFF6iOQ7tXOBM0C6zjM%2BJjq6449ZuiE49aN1WMDgv5w04CdNIwo22a2OH7f3M5OaaGLCXhVySC8%2FxVLDWCd5%2FaoXd4nXC0w%2FM1jhMn9k8%2B12XtJ6u5izp4FI53CkUFEqYEEJ5cVGg2pWwxPlKwygtP%2FM4KePoLSxPuuzn000tLtNdcVPmFGVEEWWdw%2B0PyaQTNmuXwfrF%2FFWYvc5wi1km7P7hJSjWdepdQ6mOLksamlhTqS2pUl7TorZYJTxAmfKs3LHrGzS4491jGo3XZOtknJkM0TMu2%2FTS51jOSz9iSWI9kg9Re90uNme3gYI1XlJ6bRXcyErrtK4l2IMHGXsyMUC8adIkvZMnjqDCMnCsFV1CNepd2sk3Rvfbkq7inM97IZ%2BSw3f1LKDOytqXpOmwLglEOVYfrWDL8SFWpnViax%2Ffzws0k4FzTk%2FxS%2BSJsMlke7McSj6FBJvm8zC4hc7ABjqkAVV6aV8TXwIgzIBipsuFwJaEt1sZxP3%2B0GIuxvqfTYqDCFX1Gs8wsINS1MeMptxWvF6UYvXvDVKG66gFHrOPuv84t%2FEy%2FY4L7uJ4k%2FtJikuBkLt1Hc%2FHZd0PT9Iwv%2FDYxE30YXYdDdikIyOLgU9PPB1aG5VUiACnucD4JDOutXLw9W4qTscj4X6hst4kDGGbSc6pIjKiIb%2BmR2NizNIcJdQkU54J&X-Amz-Signature=e8aa313c8baa0362103a801fa1068ab348fad472f63dc8f19541861c41740032&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WFZTYQT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCrH5pUUA0SfrMjaxn8edqR%2FFI1MxD01mOScS2UuQXKUwIhAPjEX%2FAHI1%2BaTLc0v17P1gkH6jy1KlWYo%2BDBQ77nuNhkKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywzlX%2FY0Hbiub14hgq3ANl0yFp2Vwzdeb0iSE1xbzDRJsm2UjcZiGZAy2gG8rtfJaUr8rw26euQ7Nazy4qClFBtPoNqVWKMYKAl5OWRWCszke1Md7%2FYHc8uneejl9dm8gmt9%2BUiCnuHVaTjQ1Z7UaFZ3XxymzHnY9gGXHUg2RDjumDvpDItV6%2BoMi7rWtdkH1zFF6iOQ7tXOBM0C6zjM%2BJjq6449ZuiE49aN1WMDgv5w04CdNIwo22a2OH7f3M5OaaGLCXhVySC8%2FxVLDWCd5%2FaoXd4nXC0w%2FM1jhMn9k8%2B12XtJ6u5izp4FI53CkUFEqYEEJ5cVGg2pWwxPlKwygtP%2FM4KePoLSxPuuzn000tLtNdcVPmFGVEEWWdw%2B0PyaQTNmuXwfrF%2FFWYvc5wi1km7P7hJSjWdepdQ6mOLksamlhTqS2pUl7TorZYJTxAmfKs3LHrGzS4491jGo3XZOtknJkM0TMu2%2FTS51jOSz9iSWI9kg9Re90uNme3gYI1XlJ6bRXcyErrtK4l2IMHGXsyMUC8adIkvZMnjqDCMnCsFV1CNepd2sk3Rvfbkq7inM97IZ%2BSw3f1LKDOytqXpOmwLglEOVYfrWDL8SFWpnViax%2Ffzws0k4FzTk%2FxS%2BSJsMlke7McSj6FBJvm8zC4hc7ABjqkAVV6aV8TXwIgzIBipsuFwJaEt1sZxP3%2B0GIuxvqfTYqDCFX1Gs8wsINS1MeMptxWvF6UYvXvDVKG66gFHrOPuv84t%2FEy%2FY4L7uJ4k%2FtJikuBkLt1Hc%2FHZd0PT9Iwv%2FDYxE30YXYdDdikIyOLgU9PPB1aG5VUiACnucD4JDOutXLw9W4qTscj4X6hst4kDGGbSc6pIjKiIb%2BmR2NizNIcJdQkU54J&X-Amz-Signature=df9c3fa77230c47bc3b4cd0c1283710d7a7e02b8bf71320caf8f422045dc8523&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
