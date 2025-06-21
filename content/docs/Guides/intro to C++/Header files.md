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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R3WPDZN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvLRgTw3x61eI%2FIbmgDWGrpcoxD2806rmfWw8TgfNuZwIgBR79y54VDCNX1Md4XifJ9kVhhbj8Cx94QPj0gXItiC4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOC1Oq8pUlnUo9ZbNSrcAxr2TnG8qYbBWp%2F55%2FWpyx1BC3kSML74jiuBah3%2B48RPkLeABonS7G1IlOqIX8gslDmd8zhDLcodY68M4Q%2B6tzydYj79FsN1zD9NkvgbzAPkKgqIh4B%2FDXfiOA9gufDTyS1b%2FAJhxbdAPTooWBoqGQXNPfXNA40zQVKX4lVitHqcDxhlhqNVkEmXii6U3NHd9oeRcxWuebV8CdA%2BksyHFI12SN6eOyDTnzIwldQTiXbAzRRzIgLFoRGXCyJX6cG96azWwny%2BKdAROro%2B5ktl9FqapJ6iZImShJK%2FzZ0p4iAfEl%2FcKND3WfUfOkbXhr1jCEbK%2BbOftWpRoOEvIjsEufsV1S1fwxnz2ez%2Fy9koYDxasmiSY5hAehoqwhwm1ZY3iX%2F2axmAMCzX5%2FvoUMdpO6qSl45LIdQ0EleRjNUky9CxaMBkEsBK6uVPjpskiCApbqu1aZkgVOaYJXfny9vPe%2BOLcpbMLtBevtQL3kCnhIZ3ZLqsvQwSci7EuOtcVeXIfeY8p9AAiyIquz%2F%2FQS1JR87Gwuuy1zxU5f9L8eFl1uFHkKnTzcRoJtixzHVc5ZQ5Ymt0G9xnsGRRi1E9Zj1Hm9hJ64zeR8xJiuza0KqdP7wYNEy1jVKujYu7ZVehMJXW18IGOqUBxUD0jXGnuagzHGAVtnzaZvol15B8SokOF%2FnDJVbpaJxbg1eu0iVjlTQ%2Fw%2F1FlFu8qI54J6WtUfA46ou0AAilZsJ6Re%2BnNSHTKsJKs5Y%2FYLI9A9%2BKmPBbXR4dVJxHZam%2FSaR%2FnTHO7nVs8FNJMjkLaLR6fg9CAtFLufpan5uibX%2FZO0UWV84RPFQvJYL73QmT4mF3xcgzx7nqP%2B3MIoDdaLSr0Q0Q&X-Amz-Signature=f2a3cafd789a056fc29eed0768bba3795d34e11eaeb604b085915c87aa14e222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
