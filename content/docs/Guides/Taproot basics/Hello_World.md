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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2PDTWD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BDmQc3zGA0cdeS10pLJWX6ujsJjv9si6cCHapt9G1CwIhAJYWo4%2BEjRR7zDVec3S1g3Xdm4FrTAA9qX9uMdJ%2FbkYvKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzI3wIdNjErx3fK3gq3AP29WWN18%2Fw%2BnsgcRog1cFzP9YMp0lsxJfwUPBAK6aySC8eV0YkT7kNQifgsf7fQWjjhPN%2FkyadeDHg795nXzIQpPpf55KMfFtb2juMcrolPaaqsZp7Do%2B7ibPp6MiITmHBJ4a6qBufSGc1f7GD%2BlEkmG5mqtkwAGg2iwY%2BdIP8jCQrQ3PK2WF5cac4edXvslqb1ZvK31uvtwm9wBrecyuyuXDRHPe%2Fz074IfsLSS6puLydCqsXE7dSLeazTOV3r5UGlCJiyk47evkkF0cmXXQjfWh0ICRNPvhA6SYZrRFbhtILA7q1zKaFW7uHH1d2eNT92dQ8eD5xYsWTeS5v4arLT6oRePwEeRvprJ%2B4UBRdO4t8dF754pdPaHdGTYMaqZJ%2Br03LgeMgpsQaxU0byYmnHQz6CDEraZEF4Aq49fgtFLZdgDBEks8iDlCIFJiig%2BKbo0ntXcThuyMtWmfNpHuEsyAR8eMM%2FXX1m2Tow3ehIloZnoMRkUeDJREQ9J7bME8LGT%2Fsjc1WpaWqkPzPztizS3BDrwSlbr4aijhZr8svrKlZY1J5iuCWAT8cve1ade7qh4OlynDvEga%2BjMbp0u2xsDM0XvyOuOUD7KiN2ZKEWLcmvcJdX5Z57pmPGjDuo%2By8BjqkAVcdKSGj7rCZD1U3YvJoNNQyTT06cvMefYujJH%2BuLfOqMs9EdosIZH%2FMNkr%2BKuizQ7g8DU8fdaOxE3Mv4ckau0vXq6hYGbvY9vnxi1RGU5TvMvHRT2NjJjL7KxWzCPs9T372lMrJ1N6gOXOIvtMj29oNP5P3SSQZVDLPMZoupYj0TZOEkgTZ4O9VWVQT4%2BTFkZRZ21KPZfuyXHXFIwBnSLmE77Y0&X-Amz-Signature=a89d29c5c31a8a1b4bbd6ae4a2ebc2cfe9cd23a30a335608a0ef6884bd4e7906&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ2PDTWD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BDmQc3zGA0cdeS10pLJWX6ujsJjv9si6cCHapt9G1CwIhAJYWo4%2BEjRR7zDVec3S1g3Xdm4FrTAA9qX9uMdJ%2FbkYvKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzI3wIdNjErx3fK3gq3AP29WWN18%2Fw%2BnsgcRog1cFzP9YMp0lsxJfwUPBAK6aySC8eV0YkT7kNQifgsf7fQWjjhPN%2FkyadeDHg795nXzIQpPpf55KMfFtb2juMcrolPaaqsZp7Do%2B7ibPp6MiITmHBJ4a6qBufSGc1f7GD%2BlEkmG5mqtkwAGg2iwY%2BdIP8jCQrQ3PK2WF5cac4edXvslqb1ZvK31uvtwm9wBrecyuyuXDRHPe%2Fz074IfsLSS6puLydCqsXE7dSLeazTOV3r5UGlCJiyk47evkkF0cmXXQjfWh0ICRNPvhA6SYZrRFbhtILA7q1zKaFW7uHH1d2eNT92dQ8eD5xYsWTeS5v4arLT6oRePwEeRvprJ%2B4UBRdO4t8dF754pdPaHdGTYMaqZJ%2Br03LgeMgpsQaxU0byYmnHQz6CDEraZEF4Aq49fgtFLZdgDBEks8iDlCIFJiig%2BKbo0ntXcThuyMtWmfNpHuEsyAR8eMM%2FXX1m2Tow3ehIloZnoMRkUeDJREQ9J7bME8LGT%2Fsjc1WpaWqkPzPztizS3BDrwSlbr4aijhZr8svrKlZY1J5iuCWAT8cve1ade7qh4OlynDvEga%2BjMbp0u2xsDM0XvyOuOUD7KiN2ZKEWLcmvcJdX5Z57pmPGjDuo%2By8BjqkAVcdKSGj7rCZD1U3YvJoNNQyTT06cvMefYujJH%2BuLfOqMs9EdosIZH%2FMNkr%2BKuizQ7g8DU8fdaOxE3Mv4ckau0vXq6hYGbvY9vnxi1RGU5TvMvHRT2NjJjL7KxWzCPs9T372lMrJ1N6gOXOIvtMj29oNP5P3SSQZVDLPMZoupYj0TZOEkgTZ4O9VWVQT4%2BTFkZRZ21KPZfuyXHXFIwBnSLmE77Y0&X-Amz-Signature=d2ab1fe3c681ba52cc49bb01ed1c2dcc99de16cd3edcc4b9c158d0266e33547e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
