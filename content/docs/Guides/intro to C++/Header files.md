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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DK2CXVS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi2BFKON0e7y8%2BJDWoY%2FTtZU7G7uchPDfHnP7t36kDfAIgYLOB5mNSR8ZVNHCs5JIYA81MyF0uwieebzXkgqEyIXMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6SvPVKmj3jAMEp7CrcA32EL03KVo%2FHhfJJhG%2FBTsF8E4CLWueckTw4A9Zdt5GzGuE5qRkDq%2F1FrrXdDQjMlgfvD5CnUEsJm8%2BlolmS6VVlfxxbGis8ZsrWpYPeIL9y20Vbnwy%2FnUWJfrNXPOmBioExCOh8DOHj4CrhMC9aX9SWfe%2BYURSYaLFz97l%2FvnA72cocwwUimWk1gHev9YjU66YVmatBxuugRxSzchEP4W7%2FoVr58v2x4bGXbrcan2MLNy3zNR8eCAh8SEkIiCcb3xEQ1WLUghf3SRBrjFjFM7zmmUVfIpO%2F8LaEf0%2FZywsAAqLFxnbEB%2BqgXnshzA8kiQYe%2BRG%2BAnwVzjRoUOW9G%2BEg9YFA%2BSoDWHnXSnrTd3lU2Kqcs9PLsQ28b%2B8%2BVlbVF1gQ6w8IcKqnWBn4eZzrt7GDmpyqDx1MqXQ0Cqk3xhA%2FxPqJRbQsDSdrWzwYdjEpaSGj2LzY8T7MHgO1iODIX0tXN6acUQggb88ZnHk%2FLoSLeYcAfH0ONLPsy1iCgj4ikE32Uo2aGJnepMqMnv5bpRogdi2kSqMPVNI0xJJAg6A6r8uLTst2JybLMpXgQkcL2ElYlfQNbpC7dsbf664GaxHsoNMrdTowWOSL%2FS1tqFAA118o%2BT%2BLEE%2Bkoz0YMO%2FMqb0GOqUBiIn%2BaOrkZvHti9Fa2mdgS6B%2FaKcXTs2orW3rwkarnxBQnoxtWNEoOAGTNH%2BFIuYyRrcNzfFzeuF28qYClx4%2F6oUCrpmu5Hl9oyhHQZuPDuYLwPvnSYZY6%2Bd%2BprsKhg0Al0SaWa3n8uV5O0yS75XlYm2Wy0APK7VJVdTPYiB54Rnhc%2FHpCF0syoM0LZFpOa1CYJrzmjcfFuaDDoaXGw0gsQ7ZW1gO&X-Amz-Signature=6a11583239493b266fe38e282889d702ccb79ed9e1de807644a73dd34ca404ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
