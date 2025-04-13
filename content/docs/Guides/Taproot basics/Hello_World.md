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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3SRPJ6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDsI8SfaA3xBG2KeiN8SbASux7abROvbA8Qr0OSL5yt5AiEA9y0BE3LWbKoW35aQ8g%2FLbQRI1h%2FHl3s9LJ37CfyWPLYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELgHGuEOI1%2F2qJRTCrcA5kVYEzEebwJymbPY0wPzXDQmmJxaVkkc1MLwh%2FKV3a43GVZ%2Fx%2ByMmOqkHb0e0LKvy5%2BHxWhTithvWYX0ZHCSmJj%2FN9pusFbDKe6R2Rf4P2CjfeAmVuh51UCYz73KYK1ikbKI3Zm0Lp%2BCXm5%2F79WfSG%2BwXVYKeRFbk%2B7E%2Fz%2FqosBcXtSnVeAIvs%2BrUXV2ZgfKvbYcp9aAFjsAlcVztVqrzFGACa4UbREocG4LRBrEmgtEcbVBAbQJNQb1H6M3lAVXJ0YVIxWOdXvzgZ%2Bm%2F58ITLzkwZ0O1b9G6mqRR4zAKYw9awHtxOQEcxTCBfIdgtp7VGIhe%2BTZGSSMVMAS89ps3neGrBthQfI%2BjQKaQ7arPzyTT7v%2B05%2B1MrWnnFtwGdBTzVVWj29ww8yuEw1FVp3lN8CR%2FJrmP2FXfww%2BeLuQQc4Ulki1RuqQX9QSLl0HZtTUYHHbU6fZpGCAbYLbuytCsT3Vf3RN3WtHtSM7kU0qQyRkDSdmBYO3TELQd4pK8JSus7SIkSDuejkMg1H%2F31ZqyBS1ZGcCJzbl2KLA0FDYJnB5NTFV3B%2B6eVD8MNMum8g3FMsVhvL1Id6OBP9mX1ECqzVKwZtHIbOJ6xRfAbn4ny1oWFF9rYuEHOw6ZCnMI%2BO7b8GOqUBPEPFGxCPbmbnPRQf7JP8rhQroKEHIzsUC9TQnsn6b4kIZ1Lk6%2B3RUpd3ia13feklIJQ8oVyQxyiSUdtIHQyjkr14UCh5BOECL1i3F7SJzUahq8vErtbtHztB1Qgjyuhiu8FtsZOOkDYE7RjBrCuImCcNrA4Vm6oRf2f11ht2Kh70H7jUcPHxnvjyX2bVonuTCLHnh29L2%2FzgD8NheVoe36HKkS1s&X-Amz-Signature=d2129e3d849d0e91827b3f561c18ede594183fc2b02736fa575fed0f4a19e9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD3SRPJ6%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDsI8SfaA3xBG2KeiN8SbASux7abROvbA8Qr0OSL5yt5AiEA9y0BE3LWbKoW35aQ8g%2FLbQRI1h%2FHl3s9LJ37CfyWPLYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELgHGuEOI1%2F2qJRTCrcA5kVYEzEebwJymbPY0wPzXDQmmJxaVkkc1MLwh%2FKV3a43GVZ%2Fx%2ByMmOqkHb0e0LKvy5%2BHxWhTithvWYX0ZHCSmJj%2FN9pusFbDKe6R2Rf4P2CjfeAmVuh51UCYz73KYK1ikbKI3Zm0Lp%2BCXm5%2F79WfSG%2BwXVYKeRFbk%2B7E%2Fz%2FqosBcXtSnVeAIvs%2BrUXV2ZgfKvbYcp9aAFjsAlcVztVqrzFGACa4UbREocG4LRBrEmgtEcbVBAbQJNQb1H6M3lAVXJ0YVIxWOdXvzgZ%2Bm%2F58ITLzkwZ0O1b9G6mqRR4zAKYw9awHtxOQEcxTCBfIdgtp7VGIhe%2BTZGSSMVMAS89ps3neGrBthQfI%2BjQKaQ7arPzyTT7v%2B05%2B1MrWnnFtwGdBTzVVWj29ww8yuEw1FVp3lN8CR%2FJrmP2FXfww%2BeLuQQc4Ulki1RuqQX9QSLl0HZtTUYHHbU6fZpGCAbYLbuytCsT3Vf3RN3WtHtSM7kU0qQyRkDSdmBYO3TELQd4pK8JSus7SIkSDuejkMg1H%2F31ZqyBS1ZGcCJzbl2KLA0FDYJnB5NTFV3B%2B6eVD8MNMum8g3FMsVhvL1Id6OBP9mX1ECqzVKwZtHIbOJ6xRfAbn4ny1oWFF9rYuEHOw6ZCnMI%2BO7b8GOqUBPEPFGxCPbmbnPRQf7JP8rhQroKEHIzsUC9TQnsn6b4kIZ1Lk6%2B3RUpd3ia13feklIJQ8oVyQxyiSUdtIHQyjkr14UCh5BOECL1i3F7SJzUahq8vErtbtHztB1Qgjyuhiu8FtsZOOkDYE7RjBrCuImCcNrA4Vm6oRf2f11ht2Kh70H7jUcPHxnvjyX2bVonuTCLHnh29L2%2FzgD8NheVoe36HKkS1s&X-Amz-Signature=b88c1e97741880d06a511363ecb803e87a98fa5b346dc66f502ac9a8f65d2deb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
