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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTKU4NI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEngh6DZYFUd3jRls781Nw4htHmzY7KkEOxgH8C8TQEfAiAdhQlFt7LQMbG3FKoiW3y4KjGTonnzyBieXwOunFJXmiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd5XmrgOrbi%2BogPGYKtwDRc6Ofh6UZ96dQawbJQsYlOQAu2soTWoNcZ5X23Eu%2BIzaviKhTKMgRdHJv0nEkcruQnbz3XJepN4kGghMtl6lINdqhaTHhaWVACo71h6CWT8FibxKJMTysXhRGTAw%2BVa7%2FIQnmlEiCSLg%2BRPJB5xHE2wk5M7dOSmHNXjrOiHdF7q5VDl4MiE%2FN3MoZuaVt6tg6uXB0hJeuHjcbBmew512lLeg5yzWtToRHCv95tQeNgAf0vgF05NnHPYHiRUQyMeZYOv9y6HKu2%2BvIE6qBJ9fT6f0%2B1%2F%2BPwKyAXzUHmWptTAZ82YWOtbx88UDlgGvANuvbuY6nRnjNv0U%2Fg%2F9MUXsSU6HjPJLcFq2SQll2k9Pqc1cS8CtJIFqlx365uDLjkLpQTaytmKNMcB%2FAyFPoCXVEyivgQglJzIe4%2F7kWM%2ByFJG%2BnrGNVVG0R5kh54KjGZPrzpljwxRyiGPe81lDW6qU9NlExkzH9a4pMX9rc4S5RJ%2BEVV7OdHLTqc6KWAR0m6M7vpzflFLqIDBHaXKzGqQe1EqttYV9BdAPWihu%2Bm%2FwS0mIUx0db2oBCT%2B2n1kM%2B7q4PT%2BGRs5050x70CPXuA3dxMYZIG9S2WUvAyAEVtUpLFIgB8fH%2Fsj98x943UQwmLDnwwY6pgFQOaSXNaEuwxmoPMh%2BmgvkcgaxH%2FDMcZmdN75T6B3RYA%2FTZhv1Lattuz6oGXVEgLONWm9C1zIGnOM%2Bpl8kYQ3ofDvkVCjnPShXZTxGHTuVC06%2F2KBMNHwZkdDtLKf1YJazQru%2BIT%2Bb6nbpCUl6%2Bk4yU7hOkhVAnwSLe598Y4mRnoe5xKlOjJkBVPqQKj1MEc7P7%2Fw7hy%2Fe3bmW8VJjR41fRKueH%2Bix&X-Amz-Signature=25a22b452374aaa86d5c865968fc771e8d66f2c883b9d966a049fdec47aabe69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTKU4NI%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIEngh6DZYFUd3jRls781Nw4htHmzY7KkEOxgH8C8TQEfAiAdhQlFt7LQMbG3FKoiW3y4KjGTonnzyBieXwOunFJXmiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd5XmrgOrbi%2BogPGYKtwDRc6Ofh6UZ96dQawbJQsYlOQAu2soTWoNcZ5X23Eu%2BIzaviKhTKMgRdHJv0nEkcruQnbz3XJepN4kGghMtl6lINdqhaTHhaWVACo71h6CWT8FibxKJMTysXhRGTAw%2BVa7%2FIQnmlEiCSLg%2BRPJB5xHE2wk5M7dOSmHNXjrOiHdF7q5VDl4MiE%2FN3MoZuaVt6tg6uXB0hJeuHjcbBmew512lLeg5yzWtToRHCv95tQeNgAf0vgF05NnHPYHiRUQyMeZYOv9y6HKu2%2BvIE6qBJ9fT6f0%2B1%2F%2BPwKyAXzUHmWptTAZ82YWOtbx88UDlgGvANuvbuY6nRnjNv0U%2Fg%2F9MUXsSU6HjPJLcFq2SQll2k9Pqc1cS8CtJIFqlx365uDLjkLpQTaytmKNMcB%2FAyFPoCXVEyivgQglJzIe4%2F7kWM%2ByFJG%2BnrGNVVG0R5kh54KjGZPrzpljwxRyiGPe81lDW6qU9NlExkzH9a4pMX9rc4S5RJ%2BEVV7OdHLTqc6KWAR0m6M7vpzflFLqIDBHaXKzGqQe1EqttYV9BdAPWihu%2Bm%2FwS0mIUx0db2oBCT%2B2n1kM%2B7q4PT%2BGRs5050x70CPXuA3dxMYZIG9S2WUvAyAEVtUpLFIgB8fH%2Fsj98x943UQwmLDnwwY6pgFQOaSXNaEuwxmoPMh%2BmgvkcgaxH%2FDMcZmdN75T6B3RYA%2FTZhv1Lattuz6oGXVEgLONWm9C1zIGnOM%2Bpl8kYQ3ofDvkVCjnPShXZTxGHTuVC06%2F2KBMNHwZkdDtLKf1YJazQru%2BIT%2Bb6nbpCUl6%2Bk4yU7hOkhVAnwSLe598Y4mRnoe5xKlOjJkBVPqQKj1MEc7P7%2Fw7hy%2Fe3bmW8VJjR41fRKueH%2Bix&X-Amz-Signature=123a1509025288238e8b61eea6b15480b794eee1dce1fd225f3d4b20f165118b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
