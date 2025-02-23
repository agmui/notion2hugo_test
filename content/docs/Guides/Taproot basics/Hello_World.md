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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJQNGUX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIZ7nQ33Nq4dnustkCfJ1uUIaLS9%2BR3zvMKTHOrpEYKAiEAhJ9Cn5cIL%2BuJXyji7TfLOZLVnUQbPy3%2BeJprksq5VE8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkdhvyz28wDpzll3ircA%2BMAEjiHcbVmwGWZ8qF2uqzlORMN7hALMeqXeEVH4a5u5xNaOXP22LudxBtnu1t3qRnlkegDqSNq29mgGTBvptFN1gTtO3CmbdnuSBRF2y9puGPjDdeQujw7dVyeIDFbaGHeOl5C%2FF11F3Tp9TmQmn2Bus60ChNh%2BfydZMKypEGW8CrTuqgIfCpVplqg%2BWulff8WOx%2FSmiNtwMLEfy2mmPXZfuXHiVrAickBIuUCugvvfZjXkLZKZjIlCySoScNWZiqSF%2F9zhgsqQ3krqadE7LfEhYYIGliBkknb9ygawMplQM9igEJYz1%2BOjt69q%2BNGcU%2Fy4lKGb4FIg%2B4xnRht8H6VoV5DnWuIhh4X3mo5kNK6Al5E5orCeCMK3m%2BOy%2Bmq9xuucWQtaRe%2F3fi1LD3hgTlO%2Fj7nteCuMzB06vSeFsW3SpgIKw3z7R%2BmQmnBesHR6cCcrZ0hu9dqgEhKE5uV5QO2z27VUbvqPdsi%2FARUUX5NxfdLECOSK9APDsyBdlxT19Vsrn1NGx6TxbX0bWhIhEtHJTTAhg%2F60FA2X3fPR5jvMYc4GXrgaav7YokJllwrI8Jti6rGhc4pboGtkhyHVap3VriCIYLPNROgFMYl3WyLW1JtAZM2Og4j6JM2MIPQ6r0GOqUBUOWtzIeuObEAbA5P3lnQeTHvq9Ki%2BkEJXIJPQ1u5kEBpdILSCN9k%2FZz6cnxUmlF%2FDZXTCFwQoTtZD1W6h9BEh%2FOskFNHheBSMVyL%2FRY4HfiStgvMb%2FJy%2FjX01nLzh8pnJnBMRhiQiJ%2F9b27ZQVgzWuKKGjmaDWdTLobBUB5Hn3qLFb1CFp1oVyOaMWxMkeCXj2YtA4o2Cj7kXJxD%2FzPORcrMsgom&X-Amz-Signature=5b9df7af224b31a2afa543782072ef4cbd8a992c6c91ffcb21525a7b8b11663c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THJQNGUX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIZ7nQ33Nq4dnustkCfJ1uUIaLS9%2BR3zvMKTHOrpEYKAiEAhJ9Cn5cIL%2BuJXyji7TfLOZLVnUQbPy3%2BeJprksq5VE8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkdhvyz28wDpzll3ircA%2BMAEjiHcbVmwGWZ8qF2uqzlORMN7hALMeqXeEVH4a5u5xNaOXP22LudxBtnu1t3qRnlkegDqSNq29mgGTBvptFN1gTtO3CmbdnuSBRF2y9puGPjDdeQujw7dVyeIDFbaGHeOl5C%2FF11F3Tp9TmQmn2Bus60ChNh%2BfydZMKypEGW8CrTuqgIfCpVplqg%2BWulff8WOx%2FSmiNtwMLEfy2mmPXZfuXHiVrAickBIuUCugvvfZjXkLZKZjIlCySoScNWZiqSF%2F9zhgsqQ3krqadE7LfEhYYIGliBkknb9ygawMplQM9igEJYz1%2BOjt69q%2BNGcU%2Fy4lKGb4FIg%2B4xnRht8H6VoV5DnWuIhh4X3mo5kNK6Al5E5orCeCMK3m%2BOy%2Bmq9xuucWQtaRe%2F3fi1LD3hgTlO%2Fj7nteCuMzB06vSeFsW3SpgIKw3z7R%2BmQmnBesHR6cCcrZ0hu9dqgEhKE5uV5QO2z27VUbvqPdsi%2FARUUX5NxfdLECOSK9APDsyBdlxT19Vsrn1NGx6TxbX0bWhIhEtHJTTAhg%2F60FA2X3fPR5jvMYc4GXrgaav7YokJllwrI8Jti6rGhc4pboGtkhyHVap3VriCIYLPNROgFMYl3WyLW1JtAZM2Og4j6JM2MIPQ6r0GOqUBUOWtzIeuObEAbA5P3lnQeTHvq9Ki%2BkEJXIJPQ1u5kEBpdILSCN9k%2FZz6cnxUmlF%2FDZXTCFwQoTtZD1W6h9BEh%2FOskFNHheBSMVyL%2FRY4HfiStgvMb%2FJy%2FjX01nLzh8pnJnBMRhiQiJ%2F9b27ZQVgzWuKKGjmaDWdTLobBUB5Hn3qLFb1CFp1oVyOaMWxMkeCXj2YtA4o2Cj7kXJxD%2FzPORcrMsgom&X-Amz-Signature=91bc5e21518b5381c3aefe3934cfe3b7e92c0110b0cfaa2faccf3c403016d3df&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
