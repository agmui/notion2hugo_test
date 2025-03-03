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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNFIBC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAACQr4Eek3plhXb1lJkQqzkLJR9YSCei5z7VgHxCnQIgXRwqkUqvdfxv%2BgUZDwHDP1QQcWm5NqvNDKU8qlFzyPgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxFBuqR886XLutIYSrcA0MhGiymnIJ3fqKzuoJsrhpIiMpdnRu%2FN1oQ%2BxV9AMiO1SGBWsj4tkeFiWI8htqS914TrRsP6Ko13c6tbZqPVRXJVyGBzy3tt4nj3foca92DW64jXymRvCUktnMeMQd34RpzKmVupDxwweSpYKHJFWJYGht7D0pbeWrzavOoahRiWuVoAF%2Blf4zHvKWsuFcrqfJyoHBaFygElbyVvXUwOyrU04ZuCOsWNXWZDQBlTo1p4x1R5qL5uQ8Jel4Jzpx3RIj7KcauY59ViWCj5zxoirkPhJmWuM%2F%2F32JRjw6UsKtVJN3uR5UsLSph1tDWUc%2BeD8KmO3oUpiNZKDmsHjZ84acOEQLFxD2fJC7koSIX93EU0s5drmK%2BiIoFAKw81tccl1B5Jmo8ne7mJ%2FfcJhJzgHKm0F0%2Bm8gufx84CQivn5yduaU2f%2BjaiYUXI5mCRQVXaEA2G%2FtBQpMr9J2irVeHLGSDAHdYLGD7sHT17AylCMQVYabfuAKjWMKSDM3rTRoiU4Z7%2B435h8zuUs9AGuJXn8ZLgBnMM15Ho%2BL9iQJP%2B%2BbWOUvFXGVyBj2e6oUoJfF9ES60bEZnUNm0mkjBMfxk5HwZ98ZleY5r9nw8%2FDzNy400zL5KgFhzzjtJjKiLMNeflL4GOqUBP2SaGTA5QwUj4X5BwqdntV8lrhS6zICEGS9%2FnuEk9EsXn7MDoLh0ErVNgMow6ys7qJCPMvj2i02DxYdSDpXQ2goDNIVnsOrN%2FtL%2FHVg9wHB1Yxk32Xb73xR1gfnXEGgtqwIPlXnCdyycBYONLv%2BSYuTIrKxg5G5Q7MZl9brH1d7WtYvndJk5YDCU5E%2B%2B2MUeuHcOh9AqQ5XrlNAfapc4ZRs6v193&X-Amz-Signature=6b87642770dbc1637041b129b4e36e53703c50c411caf6fb46d74e33fe234b20&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HNNFIBC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNAACQr4Eek3plhXb1lJkQqzkLJR9YSCei5z7VgHxCnQIgXRwqkUqvdfxv%2BgUZDwHDP1QQcWm5NqvNDKU8qlFzyPgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxFBuqR886XLutIYSrcA0MhGiymnIJ3fqKzuoJsrhpIiMpdnRu%2FN1oQ%2BxV9AMiO1SGBWsj4tkeFiWI8htqS914TrRsP6Ko13c6tbZqPVRXJVyGBzy3tt4nj3foca92DW64jXymRvCUktnMeMQd34RpzKmVupDxwweSpYKHJFWJYGht7D0pbeWrzavOoahRiWuVoAF%2Blf4zHvKWsuFcrqfJyoHBaFygElbyVvXUwOyrU04ZuCOsWNXWZDQBlTo1p4x1R5qL5uQ8Jel4Jzpx3RIj7KcauY59ViWCj5zxoirkPhJmWuM%2F%2F32JRjw6UsKtVJN3uR5UsLSph1tDWUc%2BeD8KmO3oUpiNZKDmsHjZ84acOEQLFxD2fJC7koSIX93EU0s5drmK%2BiIoFAKw81tccl1B5Jmo8ne7mJ%2FfcJhJzgHKm0F0%2Bm8gufx84CQivn5yduaU2f%2BjaiYUXI5mCRQVXaEA2G%2FtBQpMr9J2irVeHLGSDAHdYLGD7sHT17AylCMQVYabfuAKjWMKSDM3rTRoiU4Z7%2B435h8zuUs9AGuJXn8ZLgBnMM15Ho%2BL9iQJP%2B%2BbWOUvFXGVyBj2e6oUoJfF9ES60bEZnUNm0mkjBMfxk5HwZ98ZleY5r9nw8%2FDzNy400zL5KgFhzzjtJjKiLMNeflL4GOqUBP2SaGTA5QwUj4X5BwqdntV8lrhS6zICEGS9%2FnuEk9EsXn7MDoLh0ErVNgMow6ys7qJCPMvj2i02DxYdSDpXQ2goDNIVnsOrN%2FtL%2FHVg9wHB1Yxk32Xb73xR1gfnXEGgtqwIPlXnCdyycBYONLv%2BSYuTIrKxg5G5Q7MZl9brH1d7WtYvndJk5YDCU5E%2B%2B2MUeuHcOh9AqQ5XrlNAfapc4ZRs6v193&X-Amz-Signature=dc1bf57eb3b2d4637175a3e5bd770c5aa340900cc1b1ada698751ab8a106c19a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
