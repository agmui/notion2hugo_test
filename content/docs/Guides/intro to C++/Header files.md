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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCFF5CX%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T061510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDinDJv%2FyowJ4WO1mkdlCfoUtO5nuECFD1tsOS105Qb%2FQIgHVBX%2FZJshU5eZJTm4OpzelQQcAdMtUgccnAVxKhlAEsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBi9HHODyzuBHhjvwCrcAyzeh9hROTQlaK5XHg2nOdFZKDL52QEidxf4GX%2F%2BwUljZgH9uSCcrN%2Bu3EgllmjQ4kaIY3MPRMwWL%2BRNS6pXV677BfeV965FNVAD%2Fy7wE3reRXZG9sUuyK7Lqiuvg7cehB9N5QaSiAr6s02HsqFeeYftg15OGQwSUMX9bybm61HDB8MW2S%2F4LnKO0xxEtb3wZMEQlX7BfnImoDaIfVpTZs4XxcKbCITwKDO7BaxEjoFuFPPAcZJGC3U%2BGh%2BYb%2Bp93ZcMYVy%2FQ8%2BBaCqj6UTxvk7etOdRlelTrblX7yqRoZHUyqcOyeosZj4pzcWdcL%2BjALHTRCMkkC2V5MuHqYLGrQ7a8qf9GocWiR3swpDUxpdnyXS%2FS4HehAUoMlVeU4uBnMo4N8mSUVmCtq2kV3QEiY494vYNioj7oHZKTOi3VVV1afuuNc24JWXoxtmNI7iDGsrtmsJJuprWQEGBfqvc24DJ6RUSLwBSHMhEj6VIJa5qiJMEim4cLvIGpxOFws0WicnmCCGaa2d%2Fy%2FCTbkX%2BRMRddrMeJe5YZyViWTQ9t%2BbJHElKiHWlZLXqFD0bHv808pyRUIuMTnhaXWu%2FaLmyW0vAW2pxjdZWxAurEhg%2F907WTNc1m5iJc0xigf4VMPGS98MGOqUBqnVZeiGG%2FSZbDRcP8iBYP6oP6%2BFOwQRijMXxYsdc0igG3xSTMd%2FqfWp0PQ9OW49sYm2zbUDK7jGkZXJ1niltO7eTvmWyoFsJJFJohfzNpxWUP%2FWuWsChFEPt6ZBVZ7o6ABBb%2FhJM%2BnZ%2BqloKQ7USLqDi7VyPsR2CIA9kytbLGEmlFAn4p6Posv1lQGtN5YIs3xM4irUTTWEmPWEIQspn7j1yCdJK&X-Amz-Signature=cfcb5a192c335217fee6b5e0f479289a2a48eb81fb4fbba01db4cdc1ef8856a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
