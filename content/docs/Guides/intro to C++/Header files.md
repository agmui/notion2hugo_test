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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCWEPQQZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFbJQZ3W%2B8NemW836uxF5EONmsiKzwBS5%2BYGoHIMvS0iAiBiptRkpb6iGgMGYa3lDTnfD0soy%2F8pG6w%2BOHMn2TO11ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMUE8bm2rFssw0T0sRKtwDZCZs8X8Cbru%2FOqa1o1%2BNwbShGqaYC6xYly%2FNTtugGsP8M9gGyK24MUkRHqQiV8tmEJwUdDyj%2BH2IUDP62goPUqtmMKZiZtHRu129VrFhrO8VOE0aObTwMqaJX76op14L5T8kF28T%2F6mpmlQ%2FsapdJNc1UAJ8ryAb94xbAjiJyijGUu5GkIHMGqtpSuTbIT%2BItC1nSDSagaPzD%2FPIyoclbnwPM%2BeH8Pgl2C7JdwCOYWMA34XWquDwOxMXBTjulEPe9d%2Bc4ZpQwvf1F0OAnURPafQgd9fzdg10gDHpmY04kIuB5aRSNQqXl%2FcmwaqN9c%2BLcI8ilHmxsx45afsezljLGQX5IkgtnX0CVYzTfMg9k5n8xyKFwpe8uojujLqi8wgidfBg6xQjk8Dd%2BFp0HbF1Fq7F68KBHIC7JNAaEP9oHvqhPrOQIa6NRFItjrAtMDvIxoyabI3BjFXh3y2XsEB9bEV3avMDWU85%2BoHAfrc4g97O%2BhjOABxWn7lvYhlvOTpAG2aKKXadL9zgrlvMZEmEVUmKL%2BHYm3EL%2BA5HXnSmvhzJb5LL1wzT212XrTBiXEasDf7VTpaxLvxjhzYHypZKWIDkPMfsjon8RjyELGhVDxLL10dvfl3LjTyQXxIww6qevwY6pgHGhCisvgEsM8CC4u6i2O%2FZOW9b2%2FD3ccucVNI%2BpzpkC%2FVSB0RyupMddjd7PmUativ%2FCu40M6SoaCfMwGAnB8d%2F4m96nR98GjXmJsqYvZSBBBCsX76b3ts7jBl6GiEXXhHifCyz5T5nnB0bY9irc12GChdccnccl9k1mbVQFJ8Fc2RvOq36JeX3jA%2F7NGAJQBZxhyJtjwSSFwIWoO0a3bumCzYJ8Qcb&X-Amz-Signature=f719eb38141b4ffbb01ef1b36f09ed301699bbaf4dd0f7a2980b57644f6bcbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
