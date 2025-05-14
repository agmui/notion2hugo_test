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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P2AQUPG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIH0m5nrjeOYsucLlvGODajG9eYSr88Ecp3T2FQJXtoYLAiBjyMZ3B9J3y%2BNig4bs7vGrscVkVdSB%2FdF3pkb7nPOfqir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM4u0Vflmd6rT9Q9KPKtwD4jhPMNc2ENzM4JVXNHPg56aiDyAPtnKJMxWaRme0rBm53nvI7RreR7k7QlQZDp5MUQNWbRHEaywwn8Ur8xEZ%2FW5TAVAVvKSLGAFOZVlbxhgy%2BDdPsrOvagcsU3bqoENXhqOgzvs%2BaLKDOzEmzU%2BTp7JHNMGkyKLCiTTStCd%2FMAYcK8S%2F4YCnvfp%2FajbYoclqHrutnb9FSkdmdhkrVQ24ga0n6Q2pdsQxC4pkAcsAaCD51RF3pfi7ngTCFStBCk0emuESqkFW0KbsalLXDf%2ByLgwADZMr6fN20jqcznlZt8IRl3euqpKhYSdvD5Jw0wwfyz0bPU4IgHkvnL5qVIF8Dgx%2BuVtBSfbCYULXf6uNSBW1FSfUCzBSVVhpjk58UJ3RlXh%2Fiazswy3RFw4fyYw6u%2FSq6kacfYK6uUIRrQ0g2cr1Tcx0WS1CixcE5%2FellRwaCaBGfuYa6%2FL2IlGgbKCaaROeo7s9A7lOPB6uR6p6Try6lJ3ixUauEQmAmvOvAkALcngglu0Tm5BlrfUvpPJtS0lCfpmBfCG19ud1uyzBG4yYdtnyle9kP%2BrC%2FMhd85GQfTKoS0Idl9bTtgedOipC2AUpVISuRZ0u71%2BzxMb9N%2FHHqB%2BmoQSrUJLxchEwr6GSwQY6pgHKv%2FeTg6gd1DRhBWbKTdUPsL%2BvKiIVka4k6bXy4Cs7SbnwxW8shHtwH7te2UBbXp7vmvBlN8%2B13Nm1B1kuA7E6J6DYpIcnXwZ8b76x6P1gkMke%2B5RVqWIdQZYSsYNDiPJG8%2F0uXW2QnCvZwLgoaKxJUQI1Y7m%2BoVAF1eaf5mTjwLILhG%2B9NiZiLSYQ4dm%2FKJmsJGZMShCr%2B2IJplNYzua24NaD%2F4x9&X-Amz-Signature=372e58c5d661392b4d9fa392de01850f06943789e00313a7ff7f7b6ff2cb112a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
