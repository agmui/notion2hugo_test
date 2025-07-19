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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHBFUDMK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe96jB3eKA9jnt7jzuGKyMyk8hy%2FEClhMX7Zev%2Fql33AiAlWRYDx8GxBPVbA2yN0X3rGvoeLce0PaSE1NfZHumUaCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlt40PpxsYrp%2FcUeKKtwDkkA4Qu7ILR9j1n%2Ff6%2BapwkIn3U%2Bdib1h2FWv7sYh%2Bn4T7xHnII2HPLBNQlDKQ697dux%2F9h4pm0cUcNcvtzTQ9GkumRb2BhyNjFgwd5%2BgjlZFu%2F8YW9lKZ846VpwB%2FhCNSw6O87dmUerXc6xoiM6jHnj75CDShtR6soFj%2F5E3RCUeg5CLFA0JVvB9q82ee9TkcSob%2BNtlawAfWVO1gdf9Zj9lQfSVlDDpXO8e3TnsKVVRlGDxF%2FFji4OXWdUM%2F%2BzY2aPRzvfLDiRAQlGSoe2nsF9p9i%2BsXjIdim0SyKTmXuRGKgXMo2pEMdfFJ%2FJwtj5wp%2BXhMA1ke6Nuuxvu1Gr82wfxflHLTgUzpsPN%2BTjPKKUfR7xzS2%2BLslRvjlR7Kxo0EMG5P2UJUJVa%2FW%2FR%2Bd8eOlqh%2BTVrW1I1I%2BHZEaj00eAdyPBHxq5En68J9q3cL7cS7JfjKCv0zd%2Bu6GO4eP0zhCkY5k2hem4BoeybTYJHS1iIVoOiLP2Q%2Bd4Wa5weSOIweXpZQAn1Lkx81CzQ2ENEot1R4bdzpnmvmpTkgEHA1SWUN7SwGpNp8gs4F1Nd3pj4WqwSP1prX0fLsXxqKtr0%2FltFjwGsjR0Sgj1v3rMugMN%2F5e1NoDm2ugj87hQwjLjuwwY6pgHFqRuVyeCvpgYzLwbsvqrqO4z%2BBMX2Y2gzFNSQnaq0VYS%2FDxrpeBR7%2FD%2BKSWw9U5Qe7uBfGdiW%2B7XbHoBjgaHio6Vl5ig23KHb6O9KSKdGxtXPThdY1UNZJVZ%2BSvET5CnI2lmft7jGwdLQAXGIw7C1PD52Ptw8La8ayCv2CoTaSo%2FaqpwdxeWwsVb9nK5gkDs7noaVO%2B6twLZQ9y7EnFsxNHfPtNjq&X-Amz-Signature=8c1110cbe907db650bee96bfa440909495ab19d7546e1ce24498ee9f38e8458a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
