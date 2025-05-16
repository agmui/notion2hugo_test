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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELDU4V2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz3pdgq2yqxQO6gNfnzmGc1mqYtciSRp8uylkt%2BAGjLAiEA8vhMg8rBmVGBlSZgihjIpfxacBXGyC4z9I%2FbCKe8JU4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDOGIt8jFi0xir1mlfircA06M7TLKLOmPOGPpeBjvc%2Fbp6qQreTVnl7Kz6npHbhzut5OFgYe4ywQj4JBf1wU57pEeTRNa3ZHI3zJQ7bmBrqHFLAoVPr8LRaw3e7fXNywy9eSag7Q6869VCAxwjoz%2FtYH4Zr2FY6M4F%2FGO%2F%2BQPf1TvtDRUKN%2BsQye0RYKVePJkKC3NVhZtcZuJ5xbGF07mStDF1Lu1HrQrPpCg3P6Vu3D%2FA%2FA6kMXlHHgQSUGw4dWu%2BNIEvcFQtZX7Ht%2BIiPr1oeSSzIkqWpk7IUktAOH8qfco%2FnUmiSbJj1bGxsUBT%2F4nLVgk%2FRuI6LGvCV22e9wmEpz6l4MxwHQctsSQGFS0fi9mrObrfnI4HWtwfsf0JTT3IqjbhA4%2BLPyb8YIyO3rNKJa%2BKq2sgR%2BdUaWVwXKIQFJHZklSHDWUIbwRCyTvOs%2BKnvE%2B%2BhKR%2B%2BqGpTKdrwQdOp1%2F%2FJjgpJEYs0lxCBhl8S3wNKvCQABCC3ZwXK0gElalQrclYrQNA8wFWBv2D5XSHzO0M1BU9wL%2FH8N4KhAywlpaXdH3sFoxEoOnRKYOJi%2BQx%2FNtMP%2FNe5E9MQOWPshnlB8Ohk3Q%2B5nmEUx3Gh95yfskO%2BFcVemroXxjsddXhAV0MOazkxqhyQyW3vukMJaHm8EGOqUBSBXrsgd2dxh4sRwVIkIM0ogE4MV6K4J7MjO8ODvPhUDsyoMRbzBX5GGhMB7eZnFJpa3M2FwrRjAyxggaFVSaqSCcejrbEK%2BbSa2UM4WBhbEj3LeUG5Grdt35ReV6WTTnn9gE%2B5jtYbuYAsrcRfWon%2BI7aYnPi99PcoM6nO1Mc7xzyDQVyw7D9I%2F2rlMG2Bl94nDpBFydaDJ14yksARdecaBiiH2l&X-Amz-Signature=6c308139ea9ab177288d12515525d3a45a486d1d3ca4c08019bab1c15daecd07&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
