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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55JO7EH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpDXjYQzrOj%2FzJwwfgZhxPpVCwZeo8rjF5vEZr96iJAiEAuMOJPC2LOCvxJmBFW196yK4r10QIwFQQlMQ0%2FhiYX2wqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUbK937NQjwxrf4RCrcA8vuXC7TKpHZ6jgsoRjbvBze2Fnwk8ugr5CnXIEAonfNUJDuVqp9H4v6K%2FIuQJt7GJosv1TmMu5EFMwoKXoWxQ1YuPbbQMgOm60%2Fzb1xZk%2Bun1P4Qr4yBzV8eEtrgQRPdxQK5shDEC3M6V%2Fq2Ie2jKxFLMSuvnPNMnCwzPl8mtGVSj7DTDGz2HObWy4Nsht2dRN50OJZI1mbczqLXjwwZUBsYO3d3bhcWbgOW3pU%2BqIA2eYzBrcf7QtZLmtSwIC1wP9UMSNxz2YunZjMV7Jqtk04zzkwWAtWTxCfuKtLgUjvOvrbK%2BYzs3tdg2WzsrHhYVqp8iN8Ht8sfCCaWg68%2FCDjCdqWqfClLV2V51oqhyVoksLDH6OU1Hko44ZOJYNRpylFVjUzTbDd9DEqfcghwXBeK%2BYJM5aaJXdFDJ%2FDSSQTKzkHB7b8vrlVQFqgZuzwjcFTnmF5FQmXWnvqKrF9Na8BI%2F8%2FnUmLmFIsb6KDsJwa1sYaYeR9Y9y7vZaMLxbUO%2BYEaG4lTGxX00ouYiJPcYk%2BLOSAr4Eit3W8nDHRbYGAeFKpOWle1tGazkZaV2yAd5hE7cX18DrhILWQngpfCQNwNjBj%2FOUPU3oe8wyQtFA%2F9GLSxqRGRitYeg57MPiZwcAGOqUBDdUtj7IV436nj4P4%2FKzyyUiHxQ%2BmLsFImpVbvmL9CDJJupVUusa8H5KVp56iEFQ6hZvXp1bM13ZJNcRdhjNjcn31To5I7v3EM2fiWDAkqjeMGYsAlY6dyxl21s0Om0Sc3tC%2F18aNCtariwR90ro0DWixkpase3Sn7Tmid9lU5hFwXYeVWGMQqb5wpzbi%2FRSCSf93kX2R6VG87J%2FFWryXaVVXRCDG&X-Amz-Signature=818f3938ff56d03d83d509f9d90a439aeb7b71f91599ad53b839a172f0fd5c79&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W55JO7EH%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFpDXjYQzrOj%2FzJwwfgZhxPpVCwZeo8rjF5vEZr96iJAiEAuMOJPC2LOCvxJmBFW196yK4r10QIwFQQlMQ0%2FhiYX2wqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNUbK937NQjwxrf4RCrcA8vuXC7TKpHZ6jgsoRjbvBze2Fnwk8ugr5CnXIEAonfNUJDuVqp9H4v6K%2FIuQJt7GJosv1TmMu5EFMwoKXoWxQ1YuPbbQMgOm60%2Fzb1xZk%2Bun1P4Qr4yBzV8eEtrgQRPdxQK5shDEC3M6V%2Fq2Ie2jKxFLMSuvnPNMnCwzPl8mtGVSj7DTDGz2HObWy4Nsht2dRN50OJZI1mbczqLXjwwZUBsYO3d3bhcWbgOW3pU%2BqIA2eYzBrcf7QtZLmtSwIC1wP9UMSNxz2YunZjMV7Jqtk04zzkwWAtWTxCfuKtLgUjvOvrbK%2BYzs3tdg2WzsrHhYVqp8iN8Ht8sfCCaWg68%2FCDjCdqWqfClLV2V51oqhyVoksLDH6OU1Hko44ZOJYNRpylFVjUzTbDd9DEqfcghwXBeK%2BYJM5aaJXdFDJ%2FDSSQTKzkHB7b8vrlVQFqgZuzwjcFTnmF5FQmXWnvqKrF9Na8BI%2F8%2FnUmLmFIsb6KDsJwa1sYaYeR9Y9y7vZaMLxbUO%2BYEaG4lTGxX00ouYiJPcYk%2BLOSAr4Eit3W8nDHRbYGAeFKpOWle1tGazkZaV2yAd5hE7cX18DrhILWQngpfCQNwNjBj%2FOUPU3oe8wyQtFA%2F9GLSxqRGRitYeg57MPiZwcAGOqUBDdUtj7IV436nj4P4%2FKzyyUiHxQ%2BmLsFImpVbvmL9CDJJupVUusa8H5KVp56iEFQ6hZvXp1bM13ZJNcRdhjNjcn31To5I7v3EM2fiWDAkqjeMGYsAlY6dyxl21s0Om0Sc3tC%2F18aNCtariwR90ro0DWixkpase3Sn7Tmid9lU5hFwXYeVWGMQqb5wpzbi%2FRSCSf93kX2R6VG87J%2FFWryXaVVXRCDG&X-Amz-Signature=f2135513586e20099398b2e209296802fd843b4ae4a04b1a7700bf5f987db25d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
