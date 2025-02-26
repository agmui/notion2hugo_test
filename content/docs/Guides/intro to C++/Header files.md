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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76EF3KQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQD42cCGbFupiaISyoEHybJAIW4IdDSzXghRO3U0Yk%2FtxAIhAOwvdn%2B06mGr2%2F14hGfk5VxgFW27Hqh3Kpi94HulyTX6Kv8DCGMQABoMNjM3NDIzMTgzODA1IgxE1imZGBSOgnSiBMAq3APllVeYB32wHsm0XKWHbVQN%2BHrHfd1knHnEMLnP%2BV0HTliYkUvbLvNXHJGQ8mSV9vYs5GC52fDffC6024cmLRITRtUhvpuGJgsqaFBZUFHI5gn5HmCtKBOs9W95gug1GZJi5t5rbB5ZfkYmxCJw3YnUsAQzdvfXCNEOC3R0pUvPd7Cw5L0NOk33l3X459RKGVLrfK%2F9PpIijea%2FOHAKdBiBHPt3jlAoGaPXns%2Bh8TRwNE%2Bo1XxIpa%2BEuTFAwtRFqMgi%2BD5ieSgq8J61590LRT6s4fi0xN1eldih0SLlD8NGEOQEEYN7nTBNM6v79I%2BNnub9KzJKAwR2rbWZnS7rTSD8q9m8cODTJNME6%2BcKafXQERbulo5pPvTUKMyBus%2BqiVGOJlZv6veB487jOPfWEB2o6XKDUU0LLSeFHDtHR7qRjCOw3hzh%2BTmnGRAheO2vJExkSYtCxckbEIWAD1SQVumLmsBVV%2By6N1XkQ%2FOUnIjZmrzbZJsypcWPM4KBbxMOJSjy%2F6HyS2oKsFxxCCnoQ%2BglI9guw8DsxobYCQD1GbGPwLjBzKPX1cQHlGaR%2F1WbC2HFeGp%2FHhkIYhKz4fQLrUK0QMGtV10dmjpg8My%2BTgognQdRf9Ekfxmn2NLK2DDco%2F29BjqkATg%2FKNs6k55KTaOXr%2FOldDXfoZCG%2B26Gw2KIX37l00T7yZe4CSYhqGP4gGM54EW6zeJKjxNpFEjQq6XwR50LLcd%2FYdV8MSZPtEQwlSoug4lLS%2FqfvLc5wUz1Gom16wFIJSDWfwC3ifywprzpYE5jyUFynfVJfI91ZEWBuuuKFhSv7LuVBEPqPvSCo6wf7zx4rbZm4ctLLecXeUw1vfX%2FxGlBOBQd&X-Amz-Signature=e2bb7b7554d4c2b138261db2a1a457d20979578bd54cc1bd8ed8872ab8c37a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
