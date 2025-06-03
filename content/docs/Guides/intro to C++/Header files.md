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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKRCBLTR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T051019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCvMoFWA2Dvc5PYicY4jJGUCBCKL%2ByrOypTviJzwQ1TWwIgHDMMGIwAVxvQDd28mGmYM1mYSjF5RaVBaPorySCAw%2FEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2dAArFxlQ8SvIJTyrcA0CClXDwmTKA8SgOEWJ%2BQ%2F1360yQlgYra8Xg83pPYCxqGfw1YTFOztzi4RHPM6%2Bd9vupSOOGzDAE%2FcbFPCRW3oUd%2By7NNGrMhztvRRBzAkeTa4RpsjvkFGGTgMuiOiA18nUD5n68JM9ZUdTA8GiMzgNrTtQ8xTxTzBCTS0d9DkaRHH5egL7EJJujzzaH7k8V7kqw%2BeR5f6rri9AJA%2FUPqVSkF6RSZdP51QyqMVP2xI1jcB7cHpOhOdR1whOv4oTXpVLV%2F7Dvllw%2BGOlYlqQKkyBaNPRf3lOK6BN8lPbbq%2BAr7W%2Fkg6kXHng8vvXCjoFMWEJubfQ455P1NTsVnzG2jsraE%2BksoaafqDqgw9z1qEaZ8dPuLTDEE4F2LHYpxBbl6SHPeLMz7k3WcX27RmXwKzWKVAc1%2BmWDe97uVLjomnzgsCJ%2BV42xdVWkgxJpyQSb%2Fv3r1xdoznlNMVworqIl7asUSVwDS8yMlFXnS%2B3%2BJ%2BMZ6%2FOM%2FzRMeZkmwoAHuOT3BzlsM%2BEvG5yKP8swgMmJuR8qvyGDh2ZCO1n8gbOGLYJNLXqqelX0aNquUEYLdo8HqilAuPdswXiKClC4dQucWDH1s85rDXUdUwxYqzjhJmeEjBiCdfs4xb4zUhKyMP6B%2BsEGOqUByR0vhEvBuLwNwZdGgRZEYTtaCLJJRlevIcpoEyi8sgdY7ABww8Mc9ctkO3OEmxBw2sPrxhsjPEkXd5hTW2W%2FYJJLxj4m%2Bq14hwMjKVIXND5ZnYzbKI19QrFLEFoGkji6d0o%2FWoPOSbIvP4FywXeQ0VlPJlTf8xsWo%2Finfmxbqt5dXsb4Jz3KBAXd9NeQAznBZAobBULaiYkhSbm%2FsKZdGrMxS35P&X-Amz-Signature=ac1623082d54c8d9004d1ea70ccd43813c01a662234f5683eb440f4e36b5b6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
