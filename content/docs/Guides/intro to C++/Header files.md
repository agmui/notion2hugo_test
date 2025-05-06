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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ46EFCZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAb58OgLeNdE7mOlThA5ZoA9L0httkTDbWA5%2FaA6jL0GAiB7raCU6JncuGmrMht7%2BrjZqbqKw2JpGiAw%2F0bwKQAsKCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMus3onmi4IZ0C%2FrzAKtwD%2F32rAsFERTX4v9gHeBCgqBfvOkLPgizOC3BXS5K5kI9zNMxmDHY1lZFNIj29vYOcVH2kvtHuCuOt73kk3TiC1%2FevoJfHkA0CcFiumOgl%2F%2BPwFMi8j610etgEZKmQy%2BBxwuxTylChHCi%2FN1fAWsJ19sx4gmw8Mh4cNYaQF7TTVqGhQb%2BSGaako9sWQnaEpMieo40B7QSFXmcK4QvSpnjwib3un5Hwvh4XoSI%2FLBy9QU7AXLbl2hmy9EMsZIxfQ8q%2BjOtaYYWHQvrDvIKG%2FA3yam5r%2Bqs%2B0YBSDQ2bct53fA9IoncA9fSKL7qBd6K%2BHkuAbdISNzf45V21AZjhZWep5mspsAn7yTBdLTKFYhmCbpuBDkOcJSQOwzIumC5xi091jciVydunqBUkdKap9gGELxRVjZF53NwxhdAgcYeWO7aJBsPnf27yyB68ohT0DzIaBPkJ4wrRmW%2BwsfRV5QvF4rf245bILd51gH3fis9QgTiIQVqMj3wjaTIL9j0EvXoPkXHvAzbMHg32NyxuMHhVlRj4Kt3QX8geD0r7%2BrMIsLxsxLZrq9qNWOUL0iHS3Og8q7m1I6o8YEP%2B7qz93X8fatlux3hTQY9aBH%2Bgj2sykxQS1Es%2B11bu92ao4wkwkbHlwAY6pgG36KDtunaQrXMHdipyKLz9mvKG0Bp8KAxbpOs56M9gGZXsslb3ijO8Dj7qgBM9df5BvbsfxhwVLI0WHOmRxHJVuavkAjh0ELz0B62tG7ItxVaxLCU17BcrCn3d8x3nRavkPQ64gOE6qnlqNNubPGvIjm%2BtooORoFgz1uRPzDGztyE7an8VZbPZEXoKK2l7cET5CJFB64PmtM7Xo23ThcVuArc52Sg3&X-Amz-Signature=ae0814a9774189d703f08a838373d4cb0d27ccd8e54f18df019eed0426bb86f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
