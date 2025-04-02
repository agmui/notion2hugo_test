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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNHMZNE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T131956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD0dddtoYHLbaIvwONj5%2FR9BulhjmEonMimNYvfI6FoJgIhAPuAgxqNtYk7%2BbCb41gK9LyW2TggmsHrjuOvLpVjdXPWKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfSClgRZIDlsjnM6Yq3APs9uqL%2Bl5XfuXraywc%2Fju8ZAWTdvPPLR0Sb8sZShYkP9ci6XX9E%2BPLgVo%2FRAiu8V8hwaSwJ7qabd2fi3QGcA7ysXF6KwdVO733rjHZwWLMTy4xXkxRguLHzwlTbYOXy7VsuFC3TCXzF5A3PsfzkZqxQuy%2BZGQ9LykCKSLvZyYgPB%2FFpjju%2FSyGcj1wtK62CYZSGTy2VpBYth4aRFUlT%2By4MKlg8tV66bJK1bkXp8eE4wvGvTex1tASOMxqGGhDbWC4q9SkMHvo2X9NDWsgaQhHhBbs6eOiuRxCHwqVG7ZCH1RG%2B2LRE9%2Fn1I1Kg%2F%2BQ95nKWj0i5jnw%2FFz%2BL6nXXd5lqm7Z0B9RKtolbPjNoLR80R4YX%2BhLP6qRPqHIgWhlT5k1GhPE1gN5ABBvvK5YsUkBiiGnv5oZArb%2FefehO6SJL0Ckp2WMwClKVPSRS8Q0crZK9ErD%2FgDbup%2FVJrDoSW%2FItEL8jjJkyTkqh%2BmNZEq5RJ2qWw8fGn558dA1HW7TdGtSn%2FxzqFu0gDmCNSNUMWkvGG4J9%2FER4ePmgeOEsN8XsaT8ujlxRJ%2FJQOonw9U84FF%2Fc1STu%2FRBcqT7exEWLmchVTycFZUuXfrhqFQ3RVjAtpKtg%2FRFAXo5g8Mp7DCd4LS%2FBjqkAQHMgZwuN03CkaIEPWEPV%2FW4r8h6EADjI8xMpe0i1GnPOcjTfWxGwSdgl92gFyqsc%2BCeLLghEoHNF3gc38NalGnqHO0nC8JhJZTOvTzpLq8Jvh3Ox6QN3yKx1wDn8igecEFtpTEx9PceVL9mzZH1JrMiSwDNC9BoghGW3gRnMGHj7LnEM3awxu%2FwVadlv0qQoW%2F2vH8Xt%2Fu5quPJJoiRJDFBnetC&X-Amz-Signature=e030dea24fbb920e5fcaa31d7f78892a2e59e9ef2d0efa9f8ef6e4817afbc5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
