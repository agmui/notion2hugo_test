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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEPOVWS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1ny7iUeZYCucNORweeWx10uKRXjDo0ap9%2FO0DT%2FTntwIhANmR%2FZsmHoZVxkYPSeYwdk0WXiGgtVohUJ6gkNbMr9jZKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypFmfzFjBcWsfTVxYq3ANFfBjd5DOVKuwk%2FDj7PITXNuDs5KQQXaKLe3f4y0RlNNWK8bC4ht%2Fm7GLzJdxFctt7qneSZEFVol6fZWNC70ZXyMD3CBzDyTHMr8dQFnXIJfDOQLf12WAW0Hu1yV%2BjspJcaWkdcJphBj%2BMvhrhzdgbVIMkty33LcEDu0TwQ0H7ANPSKyGLAnqOD3zWTe%2F%2FkcQgqLOO%2FV181xpNNsJY1igsYdS0%2F89e4K3Kwp7%2FjcFk6tu4YeMud%2FzctJBZ8ZWOpXRob%2BPC%2FTDzE3G0K8WhotGYnluSCuPK4PZxgjo%2Fu0MFbkBDO%2FRa6qR8Vm24eLp6w1s300fEgBIAu877xDP4Ku1FGXNTjD4JlPndjh4NM1goCJsL4RPThnMHrZuD3qUkT%2FqYT41KyjeiD%2BCamjjz5p5hYoN9fwqkaVX1lNW29dow9Wy1HiVBksg6ou8owOTwZvsyflzgVAWtaKUT0hD2u5Pbr7oo4cClNPT23wVjGye4BklunnvXalTiVeObTYCvmdtgVZP7cnazmEQd6JWW46DGasJgeHlTk8C9F8%2BujmgwHHc1UhR%2Bjx8zQd7CBEx%2BmwULLOW1Gj8ti3cFt0afTQsHfdlqntSIusB1axv7hGrWXncHaAyST4MDyca%2B8zCArrHBBjqkAY0HNf5nSrsD3K38EHt4h7S8Q1zhFCCQi%2BKJ3Pg6AJOMFSjNs56Bfb3JyhOG9yq%2BnjwHwo3TW7dFxtAAbJvr4e8p1eTT5P4WnAe7XobNq3pt2DmCgY%2BNPPuiI7LNETM0StkT1%2BQcUx%2FGet3lJ%2Bhu61VFXLlIVQOPyjWutIXry9VcpvO%2FHqlSedTbpXbZv6sibfhwXuimqmUBQixruyUqCztua1e%2B&X-Amz-Signature=786180b53de07b03f1a8d07ee8389d99d61c813f39cbd7251d1b4c5e8abae5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
