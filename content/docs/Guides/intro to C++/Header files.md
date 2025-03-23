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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKGY54OK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDvmTmLx5VY7uZfxZy%2B62HCz2WTojGHtwWSQSfUzEZNaQIhAJfJfOmR1%2FoXTqqRzZKMylR348cieXIPa2kmSZXf4BdPKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxoE12bUgfrZwKnmwq3AP8%2BioY533R4hAJpRu4BH6UlmoqOlAXdPc2iT%2BwELcGtjAHzZRkvJSccYM0kmngTBu2OJiDHDfnROuPt9WZcXbd%2FSkQCqK4WxBpjuRIrtDtG9xzgKMmQr9B2eKgyv6L03klmehSRFJCfb3JNTMZzKYPl3J9FjiVPVPgxoWtgZKj96ms5U4U8RtGkmw8wSIsIz7K8m%2F%2FY3%2FTIanDyf5jUjLmO5AcHhKBQ%2FYDqUwdGElzeAqv8Ciu4Vgtbf9T3OWmxTa2rA2nq5TYY4J5XI%2BH7UCz6ikQg0wu1i4UbjoczSGCdW9WfBCc2eRqX0KZHKm2rVia07dEnS%2BPghrGdUwDcoP%2FRFxslB3IzO4EFXY9X7wJe7ESSBCh2Z2Zq9xajV1MjFWJttsJRMehSv36sE6FDcw838UatsCHRT4gwXEDIE3OfYiMe7Hyz4ebFZApaH%2Fmo1hz%2B8AGCPug41to837tM4V8uO8mLJqhn3OQ%2F49Mgye1MRrjK8ebdcpvtmWgFVSFiMVckSRaZrDQ4KVNuIOuoZGe%2FZBrnThdZmOMCZE8DkUpz9WKHEV5si6msC04Df5cIVxv1n9xuw%2B%2BqWt%2FSGdMA0EoIUGctAiFOuaSVRRrXovmysm7TI1FzV1uYDDWSzCJzf%2B%2BBjqkAa0C9dn09tQnOZ4WAKUS38gik9XSwW%2B2m1xqpjDAbss30Cih1IjNceVtYs5i01ihr09PnmimsUTiJALp81GHTOtRms4G4s0G%2BED807i%2FyZGw7kf1UbUO6oNoJR%2FHQ8BuXwm03sxhwsM6a%2F4aFppobPYsLi54dqcPcI4VNK1CfNR21AM1HyG125eLPUoTnjaCNlxWLI3ECRzOYYWst4ZcnNPf3RpS&X-Amz-Signature=ed56e912df95a68ce766d1ea4502f4d793dd297719d3ebad8ae79c81cf09e10c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
