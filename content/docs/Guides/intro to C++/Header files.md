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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHIAJNQV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIFWuqNuqOgUN5YYY3je6gOxpPQOf9RNm1a98DR9MnFnfAiAKlEZEfw3K5cHXVZCrbALnzCYk2ps8kfWnFzZeIydIgCr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMFQkMCIL1STpZ18TRKtwD51unIdhUT4ns7iWWUvAdiJzFeJln3v%2Bc%2F%2BhfZV6PADhes1Qd4DXeQzd0IJv3dlUj85aiQN7uMEaYTQDS1yPzIkyxKh%2FRyNz71RrVoBBU%2BklzyFvNfa9AQZBd5%2B9SyeHTBTXEcAyZtwOAWHO9AWJTZG5UJziQnjKRx7Ark2QUpeq40flVOIC%2FH8KB%2FEgBRZ3vz24jZrefrsd0%2BUFEer2sCv7LL6r2zdcfg2B06xQlpyL8NsGCGPQ5Vyqw26jm1hmCAnVr9zUoD4i5CvjtNs8uv1HoNRA9C2RNGnN1h0GGyB4d4R4V1kO8pfoo4oQdSL84mpljudrNQ6dU1TU3iB4ROOGIk7HZTQ97yEq5AGRcGIaQmhOtXPVKaeNvEOAeLoY1FaTcex9rFKGpyTnklV3zqTMB5uVnod30vxgrJetpf0z1a17lJPgFbGH2h9TCwkNIjAHeWFX1GSeLJcXt04bAwznjDE5XSp2Hh7ftFLtzvxejV3LehAZh%2FNUkhUAP6SWzzLu4Ixx0YHvLHvS2fUqGHCyaqj1HqFAKnxMrXZKHybgraZzgz5QnZ5jgjzF3DrcFsLfARBEH8ziDShuA0yi%2FckhN9bA9S2flGBgoAL%2BNWfA8BYDhqnVVDJTjgrgwhOf%2FwQY6pgEuvfUVuaqhlTJEOYyjHoxGayCOLs6Rm0sfbM5EiYhP%2FKZtferiLu8ZNRW%2BMchti%2FvZSOveXXmMlKQtAFFqjcWPKf36iks4p1gvUS92iah%2FqPrGiAAbcm9fIjHol06uIq%2BxKrDddnhhXk3tZ0%2FzRugZR5IJY0KnDGFXWLSLmmUjS30nAq%2F0bCTs4KMDlvdKkEMKr3XxdYfKMsvqDgifDg4geqjLT%2BWI&X-Amz-Signature=079c251a64e1ad557f36bc412f4152f143bce0ef464aefaee998612b6ea65744&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
