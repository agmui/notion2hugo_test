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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AQPUEC%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8HFIg3XimMmYR74tPrUK74yqth6I%2FyvYhL5yZis75DAiEApt%2FzV6jWAcT3t%2FH1qK4zD2xwzpk1CV7Mc7pAOAL4SKoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDj7QgHiM09cjQ7fQSrcA%2FM1wMYT%2Fttj%2Bx1vi7sjCFJ4yS5eoClo0jaB9KHxKjC9H4EDzPTZFfb%2BhQYDySxS0FjcyjeQql%2FEE3umhbz5JL70ylbp2d3Y0cAs6uzgv0PPgaFH%2BBg6VZavA0ZO9gq6oEnjnsiNHFiwzvI7bL%2F0bN9AsE4Q9mf2hKIeoJECfWpjIXEzChI1lPcNH4HdySIndtAMuX9OaJ8ysrJ3HxBScEcwsPE2GXR38C1D9VM97V6liFkkFBsW6sfSu9hja6QHVQ2Oug2Gt%2F%2FcYlyRqVQUN0jv69tOgNbul0Wy3ww3N5sG365QVF%2Fxr8h21%2Bl2TPJK3tajHbo8Cpx1Baia3IR6ikzY%2B968zuc9w7%2Flz4qCIKc34AcWMyikkCtC95JwSpRB6b4KCt1KrcBDw8XXdHWLOoB2AT6RQM2AJ14PLOoUqH5VF4m3H9%2BXRGDOmZp5VuRjNIKsp4Q%2BTn54OzxDP9CmDO9Os6qCQjFIPC4oYrg7gUruYYHwcnKsi0odUwojVdtnEtDw0eDT1nCebkquY0i8Lb0RJyu31ORsSdr7mAKTfS0nptoBm%2B5IcHEUHM3aH62E%2FsrdfrWcB2rJGCwa92H7lCL5T6uMeH67ak3WCXW4Nvsu%2FJ7fTOlcSvD6GnHGMPXygr0GOqUBtyBICn0yZD%2FJV65FVHZr%2BUbXta3BVTlXdEwOOim%2BkPIxsCfIOh1SaksoIIGHSStHgdCo6KUPTcQJ7Jilow%2FPrSvpcPh3R4RxX0%2BW7OXMHkfivWvR6yT6v458qBEyYr1YdjX58ZJSPLDpUBWGLyCizr8fzYmtifoiIZBM6AzQjuSIoUy%2BQ8YP1HLZ45oftpMpU5NGGm1pTQCQzgKF0ve%2BGt9yu6ae&X-Amz-Signature=8ad0181272c483f60225a71b5c43c0131fadd39316880484f982889dd4f56db9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
