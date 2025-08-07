---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EKJZQLL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDQ%2FQsZCTVpna2HtNvlhPtwMLKOR0x6wnulcCNvdjxiigIhAJUBQXJ7vDNiDaauOpzopylqEDA4Ojic4StdNupZhH9yKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo9RqEqjsSJ88IvGUq3ANeRP7OxWdib40torD5v%2F7vTXfNSURf2FUhy7PPj%2B61fFSJrc8VoPuVa388twf%2FLPAK%2FcqQoz0UTmZlgeAmi351A28%2BQw%2BNr%2BEkexRxEduLBlCbuI0bY2vo2kjqDFDB6DEyfw24%2F3lAz8f7KV%2FOl1QJKEZPffWAvDwz7hbpbu8TTutUxH0xlltL%2B%2FetnN1okfJ5OQfFaHjtV9PSy7EDFF5B25LT7K7NgDWDBv9V6Z5Qw%2Fix%2BZewokcDhaUelyeWBcsm7j0DydgY1WXi2nKdfcoD4OtnzLXZp%2BUMyRDWJ4v3cv8NimQIag1o4jIz%2F9laEQ58cDGmYcxapdd8qAChjW%2BI%2BhI6fHXvkiYDVINmHREyRV97Y%2BiNeiskt24PneLe25gUE%2BrfG9vnCwALPS7tt9obW%2Fv4Fhzsitnh11iLcK5jGvMumfgGKT0ciutJcXWb5BAoCIZ%2BU7iz2NqitztLyw5Ma59YO1SerY8v93fSD5NQ9ybF6GmLHy2%2BdXpSo%2FpKtFZvIoaM%2FNyp10m%2FMyuKj%2FurtZwWoIw0mS0vVABLgk1Wc9rUIOYJYtz7rHmlaGMe37k8K7y4wEu0ykSrAs5yYQTjRsjPtrAv5XTt3Ha0i2V00clt4vOeeQcPiyTJxzDO7NDEBjqkAVrd6pKI6c58nFer1haaYPk4l43FxJvLMiJpvbznkxqKPrrs1vbmQJ%2FW%2Fsvg%2FNDcdySQYZCseMgZ5JxlkvaimnFp9zT281uKyoa94dtGer3EBsQ0lTzI8lJMOiP2aV2EvvoRGFsfCGQ%2BWnVnVjJLYY9Dtpc6GGlHzrYXU7HHBwQqhg9JmrG8zBDyxcAnS5fQslNFR%2B2BbkE7M526zb45P7%2BbNgY8&X-Amz-Signature=64ca844801bbb2fa92b7457b153e76ac840a63f43290567d3273514e67ccb420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R77UQEGY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIHV%2Fegm4ADIwA6GlCMYs81%2BeI%2BnZApoIpFWuV3AsxH1lAiBlNZtgGCJdBV8ar%2FS2fd6OwGHd2GPkv7V35rW3WsuAfiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoc7XhkiNn3t983JZKtwDBXdVurTym%2BF8scuXFdtoZwYjT%2F8v0mEEVTIzdqsm7ab4357B19XJRXavhLDyFUfcjt8DXrZmiBkH7ONHgzswYYaiwAdE5Resnj0JM5qEFMQHcsnwBRmAXjp%2BW75%2BiIm%2FYWEG%2B5HemDXAg93Yl5MBjshQN3I0%2B5j1Nkd7SDYAojySBvpIIGB%2B1zT92jLfcXDdf%2Bo25hJD2qtUV027NN4l0OwcrnVdVoQbkV788rfvQfs6ygx3Ra9rfQqHorvTquP1xEdksI1toQ43GUfTJ74pGKE4%2FZFvpCNvP1oeQVrfheC8XCMNEePfEoZUCgwoq1%2FAPICRAFvXvk0eDAxPn7xdEwJiYWztgo21SnhAnlejxJIN1K3Hs1qv4Yod6Ujk1768t%2BDq3HK5mdbSlEJSKILdr2J0%2FBH6xanirQ%2B3i8UQxU13ogalm%2FQ2BJy0oxgYmln%2Bzu%2FASp9kYb9TVUClfJEphY6HYVhbP%2BKGobcSm%2FFxAzbgZFItEcTxZjYpMkkSnEgV2sXd%2BLXw7Tz%2BXqudGLn8tuSZVDCWKL513fbu9FOQWyWhzRaNLen4jVjArIinnCXpI1iEZq4%2FolmiQSwWI%2BF44zisi7HJK07FtQxWt26ph9YAP%2FRePNxiZ2%2BUdEswj%2B3QxAY6pgGQdBZsSTK4IeQ1YR2OLML6W1TUvx8AEwkZNaOj7i8Y75dvQg0WfCnCXlZ4%2FySkUqZSDeMFxHwupcJfUFtLBMFdZ2Tuqi6lQZv4DsTGPnkDYGJPTtU%2BXdg1spABj8rbKZ1SfTpA8sWt%2F2U449ZWmHVZds%2BtWX%2BENTuX6c3QTfjLxoD0TRZ%2FN1JNRliNi%2BO%2FeeSX1BYKYmrmTD55hpFbOSWjQT%2BPAS7G&X-Amz-Signature=057f73c9da9c3ada85854445ca34f1217c46a633a1d7ea3cd56dbae1e49d2b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
