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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXBFO6S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ7AUeDmImGAhx0nXhDY3IhZ0kQc9mh48cFck%2BaV1dhAiB%2BmG7dWqMTbyJMZlndl2g7YZkNmz%2FVr0OtqZxOQX3VJyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMYRn5Lrg2qbm1QH9hKtwDVoQljZzDXbdVvUkwoap53hLhj5vDoeUtyPAzz7K%2BELJZ5Mwf9zPRLkpBPQsBeJkCQYbpcKQuJEPgwdhBgHpCnDCC4FAvENkwhAvFS97oFYfC%2BuveslhYCoO7ZdcCNFdPxxdtbYHQZm9gg2OQimhPOj0066uh4js6Jca4ucF009IkHx7lX9BEVRaUU3oKBfeKoMLeKzUGVOBkD%2FdRKYvSODM7mQozcGNgGDl4l1eZXv52fSvV6J%2BDimCUI2AhIl5XGD87ZoA2OVPIidddoaelp8k8Ad2ozVm7jnODS7Vy5IBbB4eBEEEDs80ay47XF7UsCIkj0lYZgaTLwLVz77HybdOsjdwhd%2BvvegT0O6NZTivDGrr7bdydlo%2FItdY%2FUegnjWHX2Y9s3X6w%2FAryH01ZgyOsP5mI0cMaLb%2FnQmPIVBBpDlZU82Gt4rMNUWnDAtKEie7M8bHmO8BMSqwhghMnj9d%2F1J9WuGEn%2BJWSXynaIibbDsndVsrxLKgp3oTVitbOjQiH9qbTOqZJ3ykYxPBBF32x68kjPzkk%2FMl6yJAxONprWo1aKH%2BdVUpa7HKFaTt97WySYPpW6sOakP6XjcRRnuiIT8suVsD3Jj%2FYyUA6E4tj4NbjVbwI2UA6yWYwl%2B22wAY6pgFv3OStZJVgQUk%2B8puwhDiFCrwktyw5wU%2FxZXQ1UTKiZTZgBMs8i3c427BMesCluLWNJRtAcsp5S4YRkEdqCrtffMIuhqmcC%2BI5u0jCzxDnir0jS2YXgfI6MnM9L27CrOvZME7dwPvTQ94lcWCJ5MPBjVq6VlPvFxnPz%2BAca%2FghPG%2BXxTjEag8yBxzbdtKg552xGMoQ8RjKWSVi4KLw0LEFZCzjwHKJ&X-Amz-Signature=a02e5642ce5d5597fc76fd1615bd7ea8c4a69179e61a7e374f6e1a89db2201b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
