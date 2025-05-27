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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQTQUN3S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBA4BKYjKRkst3nhlV2BJ6tQe8xemkae2ohf9FPD5eguAiB7mwf%2F4bA3yGmf82cdbCOElrwWJkNi7Rw2A4BEE6YnPCr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMlmCm7Mugz5j7og2JKtwDthrJ9N7lZBBT33ZDbR0wd8axTF1m6rnOUTiW%2BPcA8bco7soC4hQU2CoEQWmlcgy333M8e06nX0tP3NvieLJM4JaB%2FVOK8n78amKwFuQrZTcwOp%2FyRslkGqgwMS1zB1zk1QlNoRRXuo0aIS7cXRkC8rSL58pJJWKn6RnS7V1lZWsWfYeC9HKy5hP5opFgDKtiVa2aPf%2FKWi6yPvNCinkhUQjFBAorcI3SMawAIPiKYMrIVrTGCGsJRjyQ1%2FUXrzB8iw3HyW2yT0u0HJXWt7bz0FjUjOAKnCTkkE%2BNeh%2BD5skZXy8kBha60Obw3ezNfbcm%2FLKt21inzIhHRoNuhOl%2B0N6NiaYVA5cOWpnJq5M3xRzH16tn4sUIpaHlAYefh%2B%2FrlGsPjU%2FBnOn9OFfixlU8IQj%2BgHj2htseIp2who6ANLaio2YT6AQd1uFHFXlMHYtZHIZgFOE34Tlua%2Bo803YTAm2hd2U18zKB23IO46MP8Pri7UDPFNcXV1R%2FFPVHepXla1kOy4RcxB1YDrv7I1drbqDmbuHPHVLu6kZGwCP96Ogx2SntBAR7AxE0Tp0VNHDEnsZOIoTcxTdfhf3kRKIen65yWatd9Xs5sWgti6ZNF44h57ao40XoA%2BsN%2BiUwopbYwQY6pgGADgRflohKm01i0YL0L4h4iQtdxg6UIA9jOTcSg%2FA30y8He3NFSHf9BlIso3eA4A589LJ1QLzkA%2BeaSLMwktVlLiNIoLo%2FylYQIeCoS5nATH08DA67UbiygLsKASulYHY6kJ6ZpS9C5EKhktFGN%2BSCmiHGmiTkbmgXKG2o2En871OYidZVKDmNvbPa7WojJhsIG6Ndau6S1vQ%2FTCSQzVxC6RwyzXpZ&X-Amz-Signature=5083278706fed432708a3d7ae785f6ab902374bbd24b505c447740360e3c3c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
