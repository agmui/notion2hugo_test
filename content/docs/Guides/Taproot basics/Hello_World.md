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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD44ZCH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1bXaqbZR2ItT74ae93DiP0ftjfI3hAf5qu4uqtdWKhAiAaCIVVZwk958%2FofXk9ociiVCTaChAW7XjDishp0Nb6RSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaX%2BdC3OKVN%2Bboa%2FfKtwDN0jliuZE5qMc%2FgZFd3ZYhWnmyCqWB4k160ErplHcC65YOfvQHAwYkH%2BULdCLnEjUhW3zyefYtosbEN6ih5LMgNmoLv65lmkWat6nFPCuJ9d%2Brv3i0sKaYFJh7aerfbFA9rrC3ZG0vQ64jsQYEW5anfOkhL%2Bcq4L3b76hMHkm9Q3t4Bkf9EZyZ3JLbO59zNMZ5%2Fxt6yCooLwpaDvW%2FSI6VFhm%2BV02edrFrgj8l%2FOZBemOvTbL6jURxAsnvEolsKlFBnKlvxKUa151PO5A97BhcwTnMZcC259PVBv43pf0XK%2Fpv3Mzfo4b2UVfrvPmu3wjTHHxPXuVoy6JhzgtD246aC2g8Lz3unWSXjL%2Fl5eFAx3OCeBd%2BKw9Dx6le5K6PooY3ug4uF%2FFKptK8bosjvS28Nin7UbGstdwgJhqq4gV89BQNT5YqWmfPVANVLA7Fb%2B5TlP14ESWKKcsSkPQtAeXZXtiGq2nqz458ojPvTAGzkuFbQeCA70oQp0cch0nX1i0k6M0R2reigPFtLQ5IaS6a45CvSaOr0CBmjb8djFR9q0N70FLmmMVYzBAJ8RO7dj5kwjKC%2FP%2FC1YTiN8imYUILEZPBpHTsqJwAkqimd%2F13QNAOccC1yiP4w%2BWN%2BEwit6ZwgY6pgEYU%2BabcFzlku232r1L859JznpaQdKkXVTcxFl5boKBsD5Z%2F78mz6%2BsazJ1hjBj6sl3ThWPcZ6jfXcrXlmujoqu8QFO%2FFV847zL%2F7gH1ildROAEfYJyOAOhashVgd%2BfuaBJJ%2BD4wuwuGEpucHrM7%2FoFFINR38lIpR9hZZH5jnqSFPc%2FAjqCuS8aeKk0H83nFFrGzHNImSB6G5WTv3W%2FVXU8UoMznMgv&X-Amz-Signature=a44bfc7540c56486d4337a5dbcbdbd3e6319fc635b480984130a881d8b3ec7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD44ZCH%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1bXaqbZR2ItT74ae93DiP0ftjfI3hAf5qu4uqtdWKhAiAaCIVVZwk958%2FofXk9ociiVCTaChAW7XjDishp0Nb6RSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaX%2BdC3OKVN%2Bboa%2FfKtwDN0jliuZE5qMc%2FgZFd3ZYhWnmyCqWB4k160ErplHcC65YOfvQHAwYkH%2BULdCLnEjUhW3zyefYtosbEN6ih5LMgNmoLv65lmkWat6nFPCuJ9d%2Brv3i0sKaYFJh7aerfbFA9rrC3ZG0vQ64jsQYEW5anfOkhL%2Bcq4L3b76hMHkm9Q3t4Bkf9EZyZ3JLbO59zNMZ5%2Fxt6yCooLwpaDvW%2FSI6VFhm%2BV02edrFrgj8l%2FOZBemOvTbL6jURxAsnvEolsKlFBnKlvxKUa151PO5A97BhcwTnMZcC259PVBv43pf0XK%2Fpv3Mzfo4b2UVfrvPmu3wjTHHxPXuVoy6JhzgtD246aC2g8Lz3unWSXjL%2Fl5eFAx3OCeBd%2BKw9Dx6le5K6PooY3ug4uF%2FFKptK8bosjvS28Nin7UbGstdwgJhqq4gV89BQNT5YqWmfPVANVLA7Fb%2B5TlP14ESWKKcsSkPQtAeXZXtiGq2nqz458ojPvTAGzkuFbQeCA70oQp0cch0nX1i0k6M0R2reigPFtLQ5IaS6a45CvSaOr0CBmjb8djFR9q0N70FLmmMVYzBAJ8RO7dj5kwjKC%2FP%2FC1YTiN8imYUILEZPBpHTsqJwAkqimd%2F13QNAOccC1yiP4w%2BWN%2BEwit6ZwgY6pgEYU%2BabcFzlku232r1L859JznpaQdKkXVTcxFl5boKBsD5Z%2F78mz6%2BsazJ1hjBj6sl3ThWPcZ6jfXcrXlmujoqu8QFO%2FFV847zL%2F7gH1ildROAEfYJyOAOhashVgd%2BfuaBJJ%2BD4wuwuGEpucHrM7%2FoFFINR38lIpR9hZZH5jnqSFPc%2FAjqCuS8aeKk0H83nFFrGzHNImSB6G5WTv3W%2FVXU8UoMznMgv&X-Amz-Signature=aa7f24d264470bb56d23244e4a34b33756a7e2cfb142385f101afecb304e6db1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
