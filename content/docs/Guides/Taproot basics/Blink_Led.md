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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMMVZCF5%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCBTTpxUe61g907G9H8iObiIuG3osrOl2c6HHcS9Hm1DgIhAOJLyZVOXWGbRVFbEV%2BKWtn5s8LR0Sbt36bQZup9jR6mKv8DCHkQABoMNjM3NDIzMTgzODA1IgwjAUQGzZGXI%2BCdY%2Fwq3AOZW49ofXrb782yI1kNEN0FpYgwZ5TSTInFVl5rL2N5KMk6NvLA%2BBQ5Gw5C1ax%2BekCMsWz1TBZtku6yaWJjHJD%2BIR5uK1yomFlvNoM4Qhjj1E00lwei7oI0I1E%2BAv0sCw8uj2vtZaESDhVuu8W5ZMBoMDsLxo5juOxJsWW3CwytpL2xydXIZF7NSmfsOkQvEYRZW49NOB7tYPtgHAcN%2Bu5U5zi%2BRIwnAwhl9I1q84W4Np6lt8uf%2FmHDR5xGKrRbNr573hvJjNbETvcE38jLqlHJVAm9OHdrxc3qCchA6Dfbo%2Fbp%2BfTA1FnBN0TSFjkcNLObnahMZfTkNc%2FPwZXljFEHmb%2FzZjTMQzIU12k4l24IB9jjdSslBSTFpbewcELNjRqlG70jIAsEFP1TeBG39bYv%2B9hatbouF1%2FtjJ%2BnrtD08lz4ukJeNZb3%2BBGgxR1%2FzyHtgAQqbaXmus9xhTY2U1RiKfL115aZSJA%2BPIwqpzKhIqEcI9PAuBYc5hOjIP%2BWEmBWvjjuxo0kablQbOelcOZ%2FdOB8f%2Fu2jKjeER%2BkAvazJGiIuCG8NljWa4z0ZArewBOq9IvB22GTBkkhV%2Bmo9%2Bsk2wQyycFrIs8Bbd4t%2BI8cOghtB4DaG5oqBT0kfjCgv%2BTDBjqkATXrpBvjUJVOmbrCfr8IRcRIoHjr1HNMCmRJUM6l5EBW%2FEjlFgYgb0%2FbzSFxHroAa14wHJmNht97LAl%2B290SOBkIQxIZvOsAFMTETiTfmFudk2CwTJEnXQy3n7Cl93s5FYjSYBXInDb8Pm0o9rS45bx4HoxNHqIeqpB937BJXoXv2iCtcTTCGekuxaxwhpmtnHW9KN7gQ6Sut%2F0Gq47K8FF9k%2FOf&X-Amz-Signature=d03f977e7b043826b4a766638908da45c5b939489407a3c256a2eef1e68a13ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW23YKDL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDqm7JRQ87%2BV%2BysyP89cs2rtwk4YkovBspMrMWrAzB0kQIgGbJxo0adZqzJ9UuN3ll07fF0FrP%2FgN2o953WSada6zoq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG%2Fe76CVtLNgzhU%2FTircA88DsqDWtXIGcmYr2w2eSfj%2FqdlGCmD4uwCYlYVYu3b%2BpBg571AsU0RElYCyXU7EIHlzsEgdPattra76aYmQ2x3c4ScaZarph3j04PzsYtVin2T9mFc7l7YDcwnJx%2B3u8gcseFtqZT5rmyd3ijClYkCOp3NrfWessu4W%2FUrSQF2XuHv5IkrOkfP4MbLIWLuNT2JEVIY55siEAX3UksrCA4vkWTPkIXhFqkyktV1W%2F5DSKb4zepew9DQnFFQl7K46%2BQGurPbPT7pF9QCcvfRY9a%2BQdHFIEU%2BK1hUZhNinh7AdPKumnGSJNol0WXfbAjxCEwIa2Bda%2FJhfEa365L%2FtBNEyhMbpfUWGr%2FVlG1O05k0Y%2FoUbFP%2B4N%2BhLMIKCEf6LPChLfh%2BvdzMMG54ni4iv%2FC5MwF7b7VsGaqy82A1JJJh59Oi6NNog%2BBjYEZ2uHaEgeADdzdwoPLSh8LU9CnhTkEG0TzRJFQ0HngyIZjwSZW%2B8Nt%2FVrj%2BDJ%2FIXL3HztSo4vVS2XF2K2rnPNrCaRww0cVz5evpEzQykB0Pac9qZ5UE%2FqZ5MOwaDHy%2F954LqQU7UU8hnBSgxUJDsp9IzO27nCgMq7O6DWBNb02hZokSZzL%2BrwTypMlUM5v4Oq2uBMN%2B%2B5MMGOqUB0arYTahwnYrRZfE6cvm3fvr6AGzELfFsuxI06IdppZWDgUTTla0qXHslUDygZp0xyIpr9GbxZRHWIYhTDhUahSD0XKDfpwWh%2FzskeN2bpWNAxqQHosdHISmYWIJa7qdJCD3ASd27wb3%2FPZeXKo4xVVmkOe67x0GGLP%2FXiIzbkNPy%2F%2BZZYceYvTpinRPK5RowWMJIUtembeWPIgvb8B9K3RJiApn%2B&X-Amz-Signature=53ef5ba2e3f832a7134e2c1c93e50a648f4085e66d0228cc90376ce061472d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
