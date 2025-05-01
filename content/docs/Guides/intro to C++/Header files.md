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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNTLVW3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCb%2Bm8irfd0nHt%2Bl5XxNCpl7WTGymnk32iw7g2gPIY7cQIhAKf7QycDvRgtuUpK3VWc1FKEQWwUKsEd0zpwb%2B2z0vXaKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjRPn%2BRHGMxJMaRRoq3AOMr2PRuBivSdqf4mB6t7kcb%2FuzuACX%2BBzTcK1H68TBGtH%2BsmyJHwEDwkxPziKuX0B%2By6qyRNTV8%2BuA%2Fizn9GMVFhwwApGDCoc4FXByX%2BUiMErmoYYZ0lMHVZQwllo7dZEXMjwCRI5gQMhXyL3j7q3tREcy0ESOw6zyjIPzGq0%2Bp8hR2M74lEQLX45DikcW9z3ggw9hfjw0R11kMBRFxtJEL9DShvuq2TGaAWYOxAC%2Fox7KgeETj%2BwizJRzfS6ieu83SBjAD9fcf0SOJcd19qZ43RjIHJwVNCHbv7vrMeKhWmpcAj%2BEzztC3LkaxQZ7PTc3DjH2gp1IiUHLC%2FkfPs8whN8OHgDpWsADQGlDTDrB4bbzMzswZy48cgG5XZEbfdIdVkecrB9UQPpp6sJ5KBzLmXwVkNohxtcKbn0UDYoOYkGpALJ21G0TbCp6p5mzIFX5wA5SCY8IM6Pwpg%2BBEMkQpotjdN4ttgPpfSBGKvtDROGU76Dphnk5DovDEYR7iyx%2BztkIYMcTaSyul3D0ww2x8WeQSulUe%2FAcPjiMqKCHq8lohWsBRpoUfn9aH3eXUpFBpuJvfOUznLAEeifJxwLkyYFKG55DefHCLCUQolX8PjqVVzb6EfrHcM5GKDCHzszABjqkAQayd%2BbLnE%2B6%2FJwGRD8q%2Bcnd2MmV6%2FJO%2BpW9qOvY4LBUyxHLonZlTFL%2FzaISmzU5pNOmUdxR426gNPOoS90213DOnbac3YaWtq0Ode%2FhdwhRNgo3xC6IlPqew%2B0KXMqO3s%2Fyv4cvddmCCo0SH1erSxpwAnYlWJFTdECGMnhzFkUQWdJXAq8EhvBqNp1bvzuCKyi5S08IBlrsnCfVau5keOkON9ua&X-Amz-Signature=762b8235f010592b09199650f17f4aeed72b2a22ece927c0cb42a5212ddca1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
