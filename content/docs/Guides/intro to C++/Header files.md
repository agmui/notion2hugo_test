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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZCCW6FX%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw6u0sqwqjaV2zj697ErnjnyGaYaf5lbdCsY1lYB1iwgIgJdJ1nSPRhIyzBQAi2mI59jFJeR5C6RULxCm5dupWsEoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEU%2Fg1%2FedqMefN7JQyrcA3Yt72ooFQ0C1CQa7jpg4N5T29XYC69o0GldpDowjBaHKsqov7%2F%2FYF8JuL8QNuK%2Fq2DqRcBL1YClVCrLKD0L8XwFE9XSXrTpvTZdI6sh4KL0kVK7VL69x5u0AikUzBqssquRYGCzYSkSM%2BPEFyV6AvI6oB97lF0SUMTWw8ExHbjfApnc9dGdY5l9C75s8A37RlgJwEoVbYBIC9Xwse%2F%2BunmdSoGNuURd0YsHdTbTu4yUwQvQGrWVZMD0N2cIqc%2B8XH%2F7WHk1P09vOqT6F5xckJdGIovJ8qb43ayKMBCOOZJakZJGeDAFub9aTDxdXaFcQjhBHxLluqU3%2FdWqaNU3aTOH275VGtEKkgl8a1%2FONMbxTmoC2ZSMFNHzFI6F46dCceFkHe9JCiG4YSmDUjJyt3j0Swuht4Fq8vgD%2BM1fp%2Ft54BZeeCdTrzm67%2B6NoGAeeuVISMZshbGq4h8m%2FGDJor%2FA2nInn0ja3Ri8AiMoFL5sW%2BRn8dEAZKjpRaTbrKNMwEVGo%2B8sN276zYJ%2BV%2FfYHSnmkcOGbnwqXmqZ34Uozmg7XA8wKPutszcGeQQCartCNFGLfIKLpfkHUhjYgT%2BdAauST5WYk30yvMEHWpnP8q6RQcHT%2Fe7qqUcGnS5NMM%2FIqr4GOqUBIWdIyvtLZykSMwQ1wZDCHaNLw%2BZqv9vWh0G6MRWjP%2BLipSmunhSp%2FM3HZ6y%2F3sZWygNE8sFmRmF3V1T6mF4wZRbr6ulVCi3rn1CBqaHVZAx8%2B1YuJj2aF29UQvonGkFrcX70AKpWMgK%2BKC4EYmUkugh638yOxEQ60OGpMS0vEsXhartLaGYzwAm2LWQ6LZDG6z67RM%2F5qPnA7GkNVzNUma9A9%2FU8&X-Amz-Signature=88e98311cb5eeb6798507e459cf55eba470317ca921fdb0a2b24c63203768c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
