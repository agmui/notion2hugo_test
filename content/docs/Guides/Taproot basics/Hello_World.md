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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QP4ZRIT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9MUUg1LJzWZ2sAXRm5rJNsbYk90vRu3MjmppGZuo5zAiEAoROjvy%2BqIDJjj5tif%2FkOXKyKwdi5tdEXwREyBfY4O0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKGjpIL%2BaoFAP%2FIUCrcA1tMmCQ5DSrPucdOqYp879l4ja%2BrhKWe4%2FUdIYI7nGsI7cnWO3pYdRDrUd6TfH8EVsN%2FCLPVIHWP3lfYkqoQs%2FQ82TX%2BoEyCYyv7oSGe%2F%2FwUmYCumtmyM9EOrC7MRVtQYgBztyoJf1e%2B2D1Ua254GBDeHBZoT4sj%2BE4tZffCtgmyIeq2iXx2QIp9W48J0KwAAC7x1fqPx3b5D0Cnf0aHK3YRFp1IIIuB5zSoIfVEBymHPYkxC8UItlJSNOoy3wAdJOOzd9W7RVNLz%2F4e8w5vfXHpV03GVyfgW4ewDS0v%2BjE1sN5SOO2wO6q96i4Jmvjib8sCwIMIGfA%2BuNH%2BEIinxDz5%2BbuKQ1kGdeGOfv7TDImcHa8%2BCrZL%2FR4vvUV%2B%2FNIkX7%2FzGRAYtLYP%2FwKZpf3Bh6MBVjzBIH6EC%2FYEksAqarhfeqO%2BhFdCoFC7btc1UtxSlBEftnz%2BtG3zsiiib3AKmqF41aAPtxe3BwORl7H5recGXP1%2B88U%2FQgqO1OKlrewYKQRgubcjf8jEiCKrFBf8jO2Lf2VAQvXoo4od6YHgZM%2F%2Buu7obl02o%2FpkDPsjS%2FQb%2FaBNL%2Fgbkr6SgyEcS0GUgSOtkLYO6wVca8vGrq3Ik%2FB4gz5%2BwiEB0TeCgnYCMP6g%2FsIGOqUB2eh%2F6d2ZJg%2BA%2Bwo6MUKxeI3y4Egcr1a07RLDVzY9fyY%2BRey0oniPjM19pryyy25tFBixA95IT3huey%2FfMJtnVfgXet0rcytjeAjPayLNz%2FE2HbOoOVNR1%2Fv%2BgLXE5FhXytBp9jJyIwovhGVH9h5zFY3YMAIyPX06PNhDkITqm3%2BktHULYSXV0pVjL5jhHJCNir70iuqbj7G%2Fn8h%2Bn61b84gzTf2g&X-Amz-Signature=442879e5aaff75f4326c21aba6c20bfda35dd65ec61aeefd2224fad20d00b1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QP4ZRIT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9MUUg1LJzWZ2sAXRm5rJNsbYk90vRu3MjmppGZuo5zAiEAoROjvy%2BqIDJjj5tif%2FkOXKyKwdi5tdEXwREyBfY4O0wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKGjpIL%2BaoFAP%2FIUCrcA1tMmCQ5DSrPucdOqYp879l4ja%2BrhKWe4%2FUdIYI7nGsI7cnWO3pYdRDrUd6TfH8EVsN%2FCLPVIHWP3lfYkqoQs%2FQ82TX%2BoEyCYyv7oSGe%2F%2FwUmYCumtmyM9EOrC7MRVtQYgBztyoJf1e%2B2D1Ua254GBDeHBZoT4sj%2BE4tZffCtgmyIeq2iXx2QIp9W48J0KwAAC7x1fqPx3b5D0Cnf0aHK3YRFp1IIIuB5zSoIfVEBymHPYkxC8UItlJSNOoy3wAdJOOzd9W7RVNLz%2F4e8w5vfXHpV03GVyfgW4ewDS0v%2BjE1sN5SOO2wO6q96i4Jmvjib8sCwIMIGfA%2BuNH%2BEIinxDz5%2BbuKQ1kGdeGOfv7TDImcHa8%2BCrZL%2FR4vvUV%2B%2FNIkX7%2FzGRAYtLYP%2FwKZpf3Bh6MBVjzBIH6EC%2FYEksAqarhfeqO%2BhFdCoFC7btc1UtxSlBEftnz%2BtG3zsiiib3AKmqF41aAPtxe3BwORl7H5recGXP1%2B88U%2FQgqO1OKlrewYKQRgubcjf8jEiCKrFBf8jO2Lf2VAQvXoo4od6YHgZM%2F%2Buu7obl02o%2FpkDPsjS%2FQb%2FaBNL%2Fgbkr6SgyEcS0GUgSOtkLYO6wVca8vGrq3Ik%2FB4gz5%2BwiEB0TeCgnYCMP6g%2FsIGOqUB2eh%2F6d2ZJg%2BA%2Bwo6MUKxeI3y4Egcr1a07RLDVzY9fyY%2BRey0oniPjM19pryyy25tFBixA95IT3huey%2FfMJtnVfgXet0rcytjeAjPayLNz%2FE2HbOoOVNR1%2Fv%2BgLXE5FhXytBp9jJyIwovhGVH9h5zFY3YMAIyPX06PNhDkITqm3%2BktHULYSXV0pVjL5jhHJCNir70iuqbj7G%2Fn8h%2Bn61b84gzTf2g&X-Amz-Signature=d33ef396b806fc3e9c2c8204c789fb02908c84b178472d38928ec6abd7c0f03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
