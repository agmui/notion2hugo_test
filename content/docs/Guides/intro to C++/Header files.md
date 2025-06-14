---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPYDA5M3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDU8XlxST3iZYz%2FbfS2QKzL2dv98950QB1zRv9rpKU9ugIgStBW5BNPTfjRGXIJZBAsAzoGVknr47x0eUrNH2KPWsIq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDHJadRNMzpSMuQCm5ircAwTPtHkicRfldxlbcQx8o0p2OCTyt%2FYmgbtVAiKwHkflKVWSlMPdFHoRxKgk3xxkBjPS%2BBHvrU3cVn8gCKpx0V%2F3LqV2zPMor39DOa8VojpkzbsZ9F1SN3wxk8vQvi8vkhZ3PnmbhLqwP8HSEwU2ZI30etzzi8MfslfZ6XStbsx%2BlH5ptPAwIIbfGvtL7Rv7ehSaCXy%2BTK94TzkFZTDe2la%2FlyLBJ1JYMG4WKkR4Q2tL%2B%2FGrWrXR3G%2FOmXCKTiQpmK7kSOh6bKHWkqzUBKGSDehc2jj%2BhgOaJHpPKxslcIwydnjZTDF%2BG7LcOCaFLWDXPFbNDwd1BI3Ywf1EePddqZ4EKLJe2BBuIQZzZldJM5sYIJhLyF1PdLQnvpNrOWoEctxN46Uel0Wi9E9RiH7T75Lvb3Sw4eYjwzNnyRqYbkyWPmEcnBrEqZGrNsA8SJOj5cn6KDNMNvb5wwXVrwhdIsnfH4dyKOMZY2vXtKzPLv1NjOpmiYYRGHAhDQSol0Xx2UTlfVEAUdKsBLRJEHWeTQiQDRu68BwO%2F5mf2deUNGEOsL8U1Umzew9n9WH6tpUeQyLsYK2eq%2BB0hzr1rfjnNyqbuOdACoPcM5ueXwf%2Fv7NS9hSg%2F02rASSenifSMKK8tMIGOqUBi%2FxQZxN4gitjre8ysQOklwwD%2BHJquzW86AtPSStki%2B%2FvaMP2QWDTtMNGcYFjuFGpBdyoxIpNu%2BT%2B%2BKM%2FSB5U7tb8t2mnEo4yyGw%2FZWBhtkxjrec1PNkY8BpNn1W7XDFKvHXUbgO4uj9ZOTVVFMJjFL0IiSo5Pl3BFD6l%2FQO3rbaaonNguAJSzXvj%2BfqS9QNXP%2BKQS2ytc6uVA2m9bEIFXBBPr6pr&X-Amz-Signature=42850e9bd27ca1d58fa8b3a84240d5c15ac4d98c5f7d2b77a82f7bdb1ad71df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
