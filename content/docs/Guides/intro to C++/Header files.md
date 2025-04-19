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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGNL6EP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIAIUORu1Ad8RkX5aaeAwT%2BlTxJwxplo5KvO4hNOrw8oVAiEAkdYoWDJ%2FCqv5UmKmnVVoUtsgjth2Twz8nuarSlZEtHMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZe6Vov5cCbHq0hLCrcAzwRlUT8jXIE%2BZa7LwkA%2FU7E%2FcEpH%2FK4fKyM6riBWmo6l3RARtgd56W7KLZRPkQO%2FGO53tEoalfEsalXeWLKnTHPiwvT33ca%2FvTxwteYa650aJF%2FCU0AgxFIV7saF3ySk9m0QoOeX7vS9dFji%2BAhoTxxQgYEX11DoWw7OrVOEDXVs4%2FqmMyYQkhA0dxKpWWj%2B6Lr4bf7hHQcM1fruwykKDRK04cPpyxuqBlZDyFsmXxy4JiGSQ5H%2FOFLgx%2BTSu7u6in7Dplx%2FOfWUzN9hVWc8YUXMMKvutALnYCqTIQ%2FvX8ohM%2F3nrVklrqmbO7UoMX42x16qEYcCh8P5F%2FLHNcAK4WGFNzHsuYNNcbZ%2BLBxSkp9PtTRoCvTeBnr2B6pfB1sChEt4JBCnyZ%2BqDMv9h0wX27JfV1RmAmrBJBrNywpdCW7cnZWB2uko8wglhviFHhk9KLjTGdE7bxV4pCye6SJgtNXvGw17oX0mrCosQr%2BoLJPUFbpsvTwwXpuD4g%2BbImPvzVWrd86RYb8A7spfOtS3n9tvcAKGTiLDo82zhCN2%2BtiH4avwhvmGYPZ4zUc5Bovy9wSaNkaDMuOYBFOO5zopgG2b8g4p2zXx3pJQRVOz1f2hf4dXs1SfG5HZ6EPMKOgj8AGOqUBn4KSERDGUJejoK5EBr%2FVMWP%2FLPd8vkToARVRaPE%2B46cYIqUiDfJVtGAo1Ku3pgr7Y6VQnyW%2BQHtyhiVALnomphzRM2V7TULjaaxD5KME42aDs9BHb6p4pSZrotRtQNZ0XucVkUkcXMsEwaAxqGHNa1dQ%2FZAx9pvy0YvU6JKSoUJTMkim4yLUgVds0KPyRdNgCKS44Cd0BrW7RRrIb41KvJ8IBmLY&X-Amz-Signature=b8e515e5b74cd1a825b2316a747e7d6d0a4a955b0b720a9927579dd4e00622fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
