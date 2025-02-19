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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJBSTGN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCXKJyyetlDKFb3Hjor9OUYKMvjFMtpO8mP18MzABTmDAIgPDDZnoceilKKkgrtMDbNQkpcaYRnVC%2BXXyYHlNy4ivsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc8tBI3xDR%2BmFSg1ircAxdqfsjWfLTubbEcMFTVQMUwMam2nVnErrixoQkiSgpZoKH2ifWfMZlip0vxfNvItoaNNfgFzB8KQ972iBzRU88gDmubUYEmbqMZbXK6EgkPET3pX98t7mkqljhje%2BM56sX6L%2FpWpMWlK9N5PhV1DHM5qcor59uibNPpkFU4fMm3x6Kzhn0yFF6ouMFNd2joHnm%2BWvRKKvdLXWDUDPUO8YpRr%2Fvx94QzIem87PQWDp68asubv893VBkFLdbhYhaxazggUB1a3RsmDYW3yI22vd40OD7f89loJxlFlADpwrRmy9CNluRAJFyGaF1O0wCAjnYZ6IDSLZ%2BCxjV1klEmV2HS8CxKeHAMPOQJr4cBVwZ6B26vVYKDFPoUFQw%2Ff%2Btkvb6M8VIdd2AyMsroCESt9Mt%2BijleRrqldowWRkkbdBepXVaDrJcXts%2BeBZH4Q9At2MHmJD2yIu1a8p02lMsBNy15eS9EgQIaqGIfOVWk5d1E%2F1wtygEQQzcJAnxndqZqpJ3rc%2BMjE7wKI3DufjkpGKIn1aESa76DTrmLSiEaM6EKmaS6asrA%2FxbwqwkAnBTCjUsRIH4bX1UHhQMGGKOYSlqvXGzHdp8ShajCvHOKZDltknSq9oWmQLEJ%2BvqJMP7E1b0GOqUBxK0lD0lmQZR8J2eQJlMKOenraZKZMOUYgZuT%2F3%2FVKn1QgdglhEXDsllHxsZuHuNg7BeN2fDE6rQ1fXXpo%2F9FH7%2B%2BhjA8Xka5HHcPzXujeFs9R66%2FbO0QCyQUN9kgR%2BBCqfCijuut%2FVH%2BIuGwRQVJiPDUy5lnI6FA5WYlCa3DLWf15f8MYFJnpA12xEn6TrgcnuUk3z3u8c83JcJqpDx0wH%2FNWHlu&X-Amz-Signature=9e9911e43e05873f6300c42dbce51498c026135cbd922810994f0f6f7b92aaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
