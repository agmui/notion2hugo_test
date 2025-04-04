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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D2NOJM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgAJYWAgr1PnwswdnofFhhUeFMovzZWlzT%2Bpo%2FOEsKAIgTWdaep%2BZr%2Byf0aS8R4qqERfwueADLMTr0AOqck2ntGoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBCQurr6vkpF%2B51pEircA%2Fd8Y5VzPE2bw6xhyTLCSjJqaB4QbtR7n5Pqh2wB8Mj2hsXjDh9xraQEFauC1QnUkRSBEeqENce1Q2qlGXaDbPk065Q%2BCrpXkv23t%2ByXHnG2mhSf44e6f77BwNoYEx4ZqbNKNl9PYpwQ0EJvICECEZtkallwBulw9auYB3Kjkk9PVL5ecJe9EtSCLb954mFJfJzmw0tTN9I5HZzbqMjSE53pDBT1sWG9rSlf4%2BYb%2FgVQDCZcXybY8sF6m8Wkxpx%2Bgb35hxrbKsbiJH8KtRbPeF8EeBAuEFybkBcdN0mS%2FSGnTA8Z5Nr%2B6LjK9oszPThfQTPv67kRbgyDjCFtyt7YBw16qoQbfIAuGSrcVynUNmdbAN0b509DCgK1pCaFQlg9V7kowqSJeSHM1%2B9Otr%2FLS3%2FUNV3XkzJyYAsyYfyMj0rqFEl9k%2FOCK1UYCP51ou11n%2FVzHz%2BdvG5UUqsQ8xgnsbOjnCikNWlpPsYRe7Z48tCohHn62Rks%2FQUtCFCE6TTDB%2BPLWHXAu8WrvUocTgdilniDYtMPv2SoSyduXw6gzphRq%2Bq1SESg%2BO70SGrbQtHKHqJgEjePbK4lUz6NQX30p3HO0%2BKHYzc9qYhbcjhDoUcubD8MT1dZLtiripkMMKKTvr8GOqUB42nhn4NSvY4h7%2FBZgGoft7TO26YpD35sIfR%2F4hrPpEwk%2BhR2lpqQkQzigFpllPCDl7X2%2Fz9BR4tLv7skQ1t1gWHgE79iY15F6ZnoPLWLoKxGhyPeQGJB4Sv04Qk1YxQepjSzy3WK5Lr56sl%2FvDTK5Q2%2FO6LeXNe79xcLsJuN5l%2BdyazwuA6TAe0NwtWluc5BsidzIIXP2Uzh2qhO35kQLiMzS5bg&X-Amz-Signature=97f5a21a2a7e21af1aa236d48bb53d3b1815d0536b98ae5b99b7b060309a46c0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632D2NOJM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T081138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUgAJYWAgr1PnwswdnofFhhUeFMovzZWlzT%2Bpo%2FOEsKAIgTWdaep%2BZr%2Byf0aS8R4qqERfwueADLMTr0AOqck2ntGoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBCQurr6vkpF%2B51pEircA%2Fd8Y5VzPE2bw6xhyTLCSjJqaB4QbtR7n5Pqh2wB8Mj2hsXjDh9xraQEFauC1QnUkRSBEeqENce1Q2qlGXaDbPk065Q%2BCrpXkv23t%2ByXHnG2mhSf44e6f77BwNoYEx4ZqbNKNl9PYpwQ0EJvICECEZtkallwBulw9auYB3Kjkk9PVL5ecJe9EtSCLb954mFJfJzmw0tTN9I5HZzbqMjSE53pDBT1sWG9rSlf4%2BYb%2FgVQDCZcXybY8sF6m8Wkxpx%2Bgb35hxrbKsbiJH8KtRbPeF8EeBAuEFybkBcdN0mS%2FSGnTA8Z5Nr%2B6LjK9oszPThfQTPv67kRbgyDjCFtyt7YBw16qoQbfIAuGSrcVynUNmdbAN0b509DCgK1pCaFQlg9V7kowqSJeSHM1%2B9Otr%2FLS3%2FUNV3XkzJyYAsyYfyMj0rqFEl9k%2FOCK1UYCP51ou11n%2FVzHz%2BdvG5UUqsQ8xgnsbOjnCikNWlpPsYRe7Z48tCohHn62Rks%2FQUtCFCE6TTDB%2BPLWHXAu8WrvUocTgdilniDYtMPv2SoSyduXw6gzphRq%2Bq1SESg%2BO70SGrbQtHKHqJgEjePbK4lUz6NQX30p3HO0%2BKHYzc9qYhbcjhDoUcubD8MT1dZLtiripkMMKKTvr8GOqUB42nhn4NSvY4h7%2FBZgGoft7TO26YpD35sIfR%2F4hrPpEwk%2BhR2lpqQkQzigFpllPCDl7X2%2Fz9BR4tLv7skQ1t1gWHgE79iY15F6ZnoPLWLoKxGhyPeQGJB4Sv04Qk1YxQepjSzy3WK5Lr56sl%2FvDTK5Q2%2FO6LeXNe79xcLsJuN5l%2BdyazwuA6TAe0NwtWluc5BsidzIIXP2Uzh2qhO35kQLiMzS5bg&X-Amz-Signature=8d6f4bd3de0f4fadaf339b7956c2e7a3355d3de55b4d16220907f81df59ef23e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
