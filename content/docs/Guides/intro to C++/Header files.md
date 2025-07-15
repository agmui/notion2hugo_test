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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ5ZRES3%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCNbGIW1VfscJcstT1T%2BK7jHlCWUwCVl4ezn1dx3FoJYQIgFYDnYyaRemEIIsXCLecgmZmAix1iOb%2FODE5s5cJNlTQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNQNkorQp%2FeHJwbv9yrcAyv32UhSOkH9GFcp517xBKVtg1FZLq6qqJpfQmiMFjre3osvAYSNA2djDeeBs1Efz8e3wkxLd9B9PYWDOLXFJhplcKg3EieUgyRsdaCc2lRmt3qrtotIQIMl9ylcnRdLraAH2ogJ8aKp2yoHeh3FjPMobHQadtNohFymNLcOTgMpC%2BK%2Fpkis2nuIm7rP%2FpBHZp08VQlgI%2FnivOO29s%2FOrImLZIBhXvNT99vKT75YmsSwoE90IYblWN20JncoODHPWiTI2%2BWu%2FVy2hwwZ3FPAuzd7jvvbpezcu9vzQPI2pmEIdLMyamPuihxzkK0cm%2BAZ9SRsS2J%2Fv5MuHOMUP9%2B9c0j145aEsx5qnJ8YaT4%2Bewy5ZMQvHTmATPhLZcVkgxX7VfBN1puiAGc4EwO%2F3lnYh1O3o7yQG61YesiJ7wK7FAJHT552jhH%2BIBSgnaTJMl7XlDscfdgjnHfGaNUU8vSqXmatsN9X%2F%2FZcz5Zi3gJ4VeS9JdHk9S5g5%2BtiM4DjC4QAx1pNNAeUeUgVtorCSp7arZipBGZ9jMyngIbMey5FHUWKMKdyKyyrhOiRIqnZtg1f4xzsJ1Sh0B36EOpLazthuWe1HqNQ8CffU3AgnWMfGiEiyQ0%2BNA2qPDTl0CP9MLfU18MGOqUBm298vdnNZ1IgxBuvsyIAGOki%2F2AhK1bwXLfYQMU20KHcd2Byqramz9raYmfKDfyR65Y5YnaifXv8NLOv%2FuxElTLkOQ%2BFStMH6gKPVr2HcvWIjRKs%2B5CA1vqomxOy54CZ71B8G0bx1sWXlRsEuaXKaMuomvDL6RRSaodu1ih1kBJR%2FcQ88YMB67%2BXz41f4SfEonZ2zr%2FTYzCha5lkngvUZBc0pbIr&X-Amz-Signature=164e35965c6ab1144ee9211aa0dc8fbd6e6d70d56bbf2813ae137329d7ff36cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
