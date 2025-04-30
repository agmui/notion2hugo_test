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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GN7YY2D%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBbdIeO4gDVyDUBRzgfv1FSaVjDme5Y9c%2BsTEWxi1LExAiEA%2F7%2BOYW%2FK%2FN81X0EZDK7UyopUMslB8BdHuyKDDKhyzFAqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BnPNzd432wuHvEmCrcA8CQ%2FjlZqwi5H1CkT6%2B6a7sulQ5tScLjS6I9lm%2FhEjttiFyMqRr9ltG%2Fdw7dKYI%2BFwD3gFx%2BdxDtUodxKXENNh1cShueaoiCufyQzF8eOjzQ%2FEhDrTl7a3bRM3JrGePb2mXivAujL0CP%2FkU2hwvywR9%2FdBiPbuyXEBKd0mVTGczi%2F7gvGk7ZuDT8khix6PwwzDbYHSdOy%2ByRYA4KfMIqVf8ZTOtJbpcJjy85zuWXklJW2I5jE7oIs7weEG4Mw8RlFTjhvNbxB3y4Uto2HAPbJt2UQx6rdKLhxzyJ7J4zs9aAgkH5k19mGUrHPDht0hiCaQP%2BUxZ5OmI64YpL0AN1tbO6SzTXu%2FxbPYoNlFZBqO8%2BXRq%2F0U2CKi6NVSAeommGgeoSBHe8DijgUUXyVUeLaAyzzDYau%2F2zjYDSwZUxUzap5rSb7dusFeIQKuUfwdOl1GMK80w%2FDbC%2B6UI%2FQilkURSXbQ37wWMcYLq6E8yM7LclYBPVdSJ%2FPvt8PMxxyWXjdQtkl5RA%2BFIKFUOn6Bxe%2B5fuIsS8kHXjnbahx2JaDUi%2FEbWyJNsqPr01heTJbPWT9sYMRFhAmEozgUk29Ab6xYM%2F3iwCoPxrM4iseAR%2FqTR%2F5htFj5ZjgKvLpaRzMMuQysAGOqUBm9%2B6GZuf1JN7hvPC2LEq5wBG%2B%2FXCImUhyofegum0IrTEZuIiqga09DFsGknd9VkhTuvir4Cu2yOUqdwIPLuvwxjiHRKABzvJBDhtSo%2BKYtWL4j8ULAAdGyibLlV1X%2B%2Fui0R3Bw%2BpOmQjxwXXWF%2Fqyz0fKdDGSVec9qIvBUhqPxkM1ajoBWf1u5uLDZjN4O6tQe6bmST4oCgTSvShS4TzveX498uS&X-Amz-Signature=889052b6d2dbd2bfdb75b0190af2073f953fef6c4785ae280b90287b8991ed17&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
