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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453BQ3FL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCP0byp92wbJVwTJE7MySdZ%2Fcp018j0VUrm5pPtfq2e4AIgcbURq%2BwG33WN70mV9VC4xZdKgthFJli%2FQNRh9LW4f5sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKJ%2FQaKmWWR4eu7eircAwBJidoKz%2Bb3R95VYvHseNnM0RS%2FRQas1FkqA5Cv2K8pfWqt%2FFHGC8NyMdSD4CamrfdGr1mQMLfKAygStNM71hEPEHNBiBM9NDxUM12C2PLwsrntd3rGD83SVYZmLGTR%2FYDUTG%2BNssoaLKHPQQwDS2TzuLOOqOwCu4L0QAZ%2FEG1LFqv%2B9JuCHyNmUi1BMkFaL6iA7ITyEfnq9vP8CEdgv%2BeW%2B4N1acwtW39QmtTF0lq%2FIIWSYhgfXsB5SdTF84YnRLs1FGo9Gaot8k0HY34rISp45S67fPGTdpS3sHx%2BiProrRQJkuBGZ976y49%2FEE%2F0tZec6HfMRHWSL6A3fYaP7nIX7ERFRVPHslxPfeEFv7rzAQtNgw%2Bsm3EGIBnZOksVuJTTFqldqHzFZu6s2f83z7Ip9dNBRWw%2FlmkusesyomOTal5mDKWP%2BLQIPNa8CvsJvYbu3gqITK8cakMq0pzX7%2Bjz%2FVLXa5Tq2KHuCCtALWF84LCeyQqGUfdYk%2Fl4WFUye9Sc7Hlv0u9%2BbUCI25xki7Wy2w0EzN8s32wuBnXKsJENBDl51vYZutOKl%2FGIGmHFL1VtG4ZtvhKMARG%2FB9yKPx8fTxRKYIK1To%2B6eOLXQVV256IWKU8nl6lKykfOMICs08AGOqUBqR3yKkE1lQwsiP1uML3qrlNHN6gvtRwW6x84tw%2F%2F8hJOOtpkVn66kb91Nkk%2B3yu3gmLKusl8D9bt8e2BEX490XbKdju56cB%2FxYNmgNsgiQ0MHj2VlyUdeweYHDbGX1QV8L9iyaytYioSQdl%2BQ2r6ySdW%2FJs5wBoGAj3mS4V353ZveGi1TEmlI%2B0%2F5GGwzsW5CrrYbH8uWBTEqzDp42iITAZbwXWj&X-Amz-Signature=2fcce9933b623609260139ed621720affd15d53f77cfd6fd3bb24b1c021b744d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466453BQ3FL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCP0byp92wbJVwTJE7MySdZ%2Fcp018j0VUrm5pPtfq2e4AIgcbURq%2BwG33WN70mV9VC4xZdKgthFJli%2FQNRh9LW4f5sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKJ%2FQaKmWWR4eu7eircAwBJidoKz%2Bb3R95VYvHseNnM0RS%2FRQas1FkqA5Cv2K8pfWqt%2FFHGC8NyMdSD4CamrfdGr1mQMLfKAygStNM71hEPEHNBiBM9NDxUM12C2PLwsrntd3rGD83SVYZmLGTR%2FYDUTG%2BNssoaLKHPQQwDS2TzuLOOqOwCu4L0QAZ%2FEG1LFqv%2B9JuCHyNmUi1BMkFaL6iA7ITyEfnq9vP8CEdgv%2BeW%2B4N1acwtW39QmtTF0lq%2FIIWSYhgfXsB5SdTF84YnRLs1FGo9Gaot8k0HY34rISp45S67fPGTdpS3sHx%2BiProrRQJkuBGZ976y49%2FEE%2F0tZec6HfMRHWSL6A3fYaP7nIX7ERFRVPHslxPfeEFv7rzAQtNgw%2Bsm3EGIBnZOksVuJTTFqldqHzFZu6s2f83z7Ip9dNBRWw%2FlmkusesyomOTal5mDKWP%2BLQIPNa8CvsJvYbu3gqITK8cakMq0pzX7%2Bjz%2FVLXa5Tq2KHuCCtALWF84LCeyQqGUfdYk%2Fl4WFUye9Sc7Hlv0u9%2BbUCI25xki7Wy2w0EzN8s32wuBnXKsJENBDl51vYZutOKl%2FGIGmHFL1VtG4ZtvhKMARG%2FB9yKPx8fTxRKYIK1To%2B6eOLXQVV256IWKU8nl6lKykfOMICs08AGOqUBqR3yKkE1lQwsiP1uML3qrlNHN6gvtRwW6x84tw%2F%2F8hJOOtpkVn66kb91Nkk%2B3yu3gmLKusl8D9bt8e2BEX490XbKdju56cB%2FxYNmgNsgiQ0MHj2VlyUdeweYHDbGX1QV8L9iyaytYioSQdl%2BQ2r6ySdW%2FJs5wBoGAj3mS4V353ZveGi1TEmlI%2B0%2F5GGwzsW5CrrYbH8uWBTEqzDp42iITAZbwXWj&X-Amz-Signature=0c794f1d7b5215dd41f12d268183b713907071aa1a46aada93d176e5a4934249&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
