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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIRWMVKN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIBNvS7At%2Fz1Cj6TV%2BVHnaTKeqQzdswMvEcyOqL5cIqJ1AiEA8NWO3wsCiqkxRrD46WWsEi41WsrtlJiIXULM2uzdR3oq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDPSPX2ohFl7LMtJtJCrcA5AbaLm7qfEsoKVe0%2BG5ibxOgyckMUtnoTKPjw0ACMPoJOjs%2FDrZUWBLm5bNt%2B%2BkL%2BTlREzo4HU%2FI5uNbJJx%2BWsTVxJNp%2B5IJSJxB8rEBTzoquGe9ZL4MNlbP86JtSSzN%2BWgzE4bpGWmeKn%2Bso8IOdmT5u7RPP5llMl2%2B134Unh2F%2BnziVR9z1qqf10EaMBgnppgnd8srmjXsgsH%2BakclvWg1TpEE7fShPB5Sanuvkp98hcN0HYSoVSiJwxw4%2BZEvwq%2BhRhSMBF4%2Brg7d%2Byg15khxC0cf8fnvL5YcpGBhlOSKQ%2F6aZOTNpIWPh8xsS8Wm%2Bv4sdvny%2FMc%2Fh6TCNm52TEu7XxoEJbkJELpfCfp3V36N0q5gjG5CwOUEOuOhTkzAif%2FMLHw%2F1u1emNOBb47fHMUfIOqzbZxvfdmyWEpR8A35UJaB%2Bw3O05NbgGBON43TKBOp4zv1ld4MoIbQCk6UCjvem9CRA9If%2B4vpCYOo%2B4V4ntaWXYezfJhuM%2Bqup5oKPV88C5cgOUFAa%2B4TN6HzxrFbQMQnXIWjwrjiDwAKsladZM%2BRSjG87qxbf4p%2BzJRabtt9oAVzyX9lMXMAoKpqqu%2Fs%2B96mhp%2BSE%2F8JpvRIHCPvMVxQxnPlwrPInWsMI3twb0GOqUB0BvwvETqtOpD1j1NZEoIVy4%2FCeVFCsjT43A24ax9rQ%2FcHQXXlpwti9s66AuaT%2Fnl9sFc04mNbRNU3aDzgs9mGMTdlRGEPpAVO2xHe2pUYPOL%2B4F6jZiTfS17lg94oHsJ%2FVAgyEWYLZbC%2BFdnZYllTs3sEbBPhDHG%2BZ1jos8jYCKncGsU%2B2m0uXKC25ZwE6MMiDzxAlTcK0vBMX2lHdu7693luRLD&X-Amz-Signature=957c995823a5e514e48f20d87e661fc5306ca895d1017927431a21e57cfc0fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
