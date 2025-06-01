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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQVR3G2%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIH6xRcF9hMXo70KrD%2BnSi43XgRzL9n0I6hWIUmL9iQOzAiEAhM7qW2bYaGStsoAHY0c%2F6Pr84VchdnRNEv6v%2F6%2BsZwAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJbj3mTuN%2B6zcb29yrcA%2BLRtAqH87MeUo%2FnXpzoJUPZokZ9QWpAcQAw4F8gXIdgIWAbRs8NLvkwZRdfrDsbSri60a60lMUfCFnB1D8vkkPwjXUva8%2BvswQi%2FO9kFq8XfmTOgchq3dR%2BlZlMHqs%2B%2FNChAZAIpSbz5EBGCLxBk%2BQ%2FE6z67k4eQhzV66du37vHSA0J9PHEUlbi2keBq9YBZNWElsoLfJDiVSPwpP91lMBlu4S51ZsdcKnWlSPj2SBPsW2z9vKWqX713aYcuesD4ueeYmtXqrfpF22QTnrh%2FXx7phgFUplKSqRuX14c9zBv9fvlWIeCE91zRIxu1ue1MQd%2F5sszgMvolorZe%2FvestLlmTsYzRkUTuoKuFI7Ib8KB8IlsDC2kaQ%2BANI8KDyCCBzFYh5Jb9RRn54UXR4GIYpFxnFRBMGsZidT9WutBIOeKW1xoDMOHAR9EMxgeQKmxEppcIixu%2FQgg61yXnAwNUH6Xyjvo9akRNnoMs5ZG7wHOTsjBWvt1BF1DPiqjbDiRuFEezk3Ngvb8HUxO8v6bWin%2Fv065wMShAbezOrUYLAlaxfGqtyncuMTDnnYElP4ubme7twMTVIkGlAUJMjLvmqwt7SCknqbYh5g%2Bj58jN%2FxFtzAlUmYO3%2FKj6L3MLTf8MEGOqUBfjFlilljaUExgeVTB6XYPMbkcBWAmUvDSKPmuGRJRd%2F9KmR7%2FBKigHDyE%2BF1rRUprQTBhN%2BmXFK%2FEccGHzLhhZNyQFGy8CKbT5Z9a5%2FArJIH3D92Aj8BO3jBZAOMkeC5tJqnYq0%2FZwSmDHmVUUC8HBIdDxG7bPBlaH%2BNN2iglHO2KeVl9OYvL2hjzU8VF%2FpF8JNoLIo%2Bs78VGA%2B7FCCRaqFwopZm&X-Amz-Signature=74a3c7b252a242ad546b09afd2c9663251d811003460abdb072f6a622ac835ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
