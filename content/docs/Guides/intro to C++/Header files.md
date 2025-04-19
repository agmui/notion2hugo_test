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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQSD3SUC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhsXqS0iG3juXKe6Rit5HbSruLxAtSIhyKEi348E6AZAiEAheNUmdIuA8HD0PjkGVGVBvIKoo5myI7CFQExsENw%2BxYqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKhFezfBlFV%2FDVSCSrcAyXERGG9cbf5UI%2F%2BbdZtKybmLbcjcl%2FF%2BxgUPe7ulBo4BE%2B3TBi0CPn0YobWpptijRgZ1KcqjNrPznQMAsxAe5GrC0e9tu4dc9rJ%2FtGSCz1li3U1q8OHowDL8ShrwyPdflzNLQtlPzU5Xsitr0W9BjEaaBysYOjDX%2Brl4YM0KKh8uxvPmTMqW4FGzH66IRGrLtz8699vGc7VCxIwV%2FjRSUuPLywfqCL%2FR3SfcTHoVUeV%2B1sr%2FalrCPItOqutLbSHl97lNseSL3ty9IyzwQ3pfenaSBG5jmQMrl8wJ6k0%2BD4OUlxJc%2B7mgvBpoptKuhuH17f29veat%2Bb9LyPFVA1syVz8u9MJM5td9S5nli72cg2PcyTgMRMZlwMZRR64Gp%2BBkM8WCCOqYp%2FN0sHTXWEBLuo5qTa%2FRIvNUn6wNGlxyaoKoLOqu0fAKV90%2BWO849BGqHoMmfI1%2BwQy9X08iQ7QjoLXT26Kw%2ForVvT%2FUOwC%2FMZ4PFOIDcrx68Ep7wNO53uqDuUonbJ7Y0RLSHY4Di5ApuUkxARgMyi2NcVFXz8gimUJcni66BzLjvDQXuJDdQFaQXB8ZWx%2BLoQHe67XIrY6an6aOZu5EI7Tp5HQ64GQtAKr4FWp0MRYW9gsvkK1MLn8jMAGOqUB00QQdGtLruXxFqWlCaknyTCvRKGVFjoNz4QwH7vZ1Z3nBbOC3Rdz%2BkKXExaNCxh9Wf4R6veRXHVxJa3k8LXTa2B3WKQBKhziWrl0cpR6DFwmKTwXEiI%2FM1Ys9qt9vTPThpWXKng1Dj%2BwKk%2B%2BFvU80Kmi%2BZt3geF3817OLCitILNIJ8mQCN6secrJ9BxKVpWD%2FXofWGJc8xvlQaxxNfGpacdzMhHn&X-Amz-Signature=c86bcf5a1002f27d759d54ab31ea01b657b1fc57e889154039d3555f0fd1cd60&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
