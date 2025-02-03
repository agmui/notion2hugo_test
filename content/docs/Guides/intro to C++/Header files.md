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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UGQ2QQQ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2OSv4a%2F5dWWXk4WJ8F81wtA%2Fk0rkA%2BHLzWeBpaCd6qAIhAOeC7frX84qyTel7BtB%2FsZub%2FcSZJ1Se4JaKmXyH6c5iKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysTEhYTJtFDg9aq7wq3AMQq1lHnozm1o3mBjHUuY2ygfFI4WFrJr%2F9Gywipf5nnqJM2uB%2BhA%2B%2FANB3ZNmuVgEAqU4ed5ew2sOhMxIf70qdYCyBtT%2FdKcl5wBF1mURRL9%2B77KoLL6Oh%2FXT9bUyaRASCcdmXJrOQdQ1IPMyFnatKCrsi8e%2FxKgg83ZJqkRWgr9y3Rm80CRKewTpkwK6lFLZoJ%2FIG3kByAlsmnqd5584rES1tfxK95XfaR5Kefn1qKq%2B0pKsJ7vFG4KtV2GdyJY7w6AWyLnXtUIcSJSfxJ8ffzEazDs9JJPiocg%2BIVtYWdlwCecmUYHiidYCjsY9ii9oLpQ%2B43tyXxZKht7wjE%2BuKanmmT8nqsgD4egswskfCefo2JrEPOzaFbxHu5giMs4lkky4D6CWOF8s55HxtiUifn42KayteuJ4WSZ49wPsHsqV8TVLmyRgB2GVDRQtkX2VrEYcw%2B0IjuHEECclD2LRcA2JeF3jXKWlEx5wIEB7XfozLTc9oj6175ovihOGeSlXl9Iqz4aSRvmE54ryH%2FA%2F9pije2uFQ8T0gMiOc6r3Wxsnoc80sZWKKi6oHdj5L3hKfj0QV5tVz28Jl7thSCShUL5T%2FdE%2FBPt6dGptiM4HXmQ7txC9qR%2FKQOSQUZDDKu4G9BjqkAVls8xRWvvjadYxGQc82%2Bs8gexdy4YQc5N781N%2FG%2BIU%2F08VjE%2FsmvINjio2n3oCY3Ed7cPPmspQMFqMyhelrmqO3CsI11WbEAaRJxr%2BnhUyAO%2Bw4nGVwfo7HgBSHBshYcQi4%2FEOsClhozb8CgDuzbS%2BfJJlDigFARU69Le%2BZvA2tzujxImZ4PVKh7jQ8wa4c0aI9jr5mX48387NFlWbd7j5G6dM6&X-Amz-Signature=a63e3db1c6ec94f5d3f9488f59c3df2ec10c7c98a2f62570279bfcc7ab7117b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
