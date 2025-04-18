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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAM2EE3S%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXaMFon4gKz01jy7wM7%2FDDw2ngyE%2F3yYesx%2FYQGolYsAiEAqVPuxWz9XIfntxEFjt58ahNjx4klstVbVK%2FHTDPPzUsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDCEo4LiIXmjlnzGYHCrcA9v%2Fr1WdjOzWZuAs9pDJx37QCMaZrXO7GSw0jZ%2Fk432fiIR3DJ0oJXGVeydYW%2BolS4mg1clSBZ95%2BI%2FMGwzWsggro7hu83DCY7N8YnrrT%2BMZNVurrMxehhthEcLlR8O4JLJjXs%2FQs2SW3uMC18eG9NebvoYxVO7cbct9fcC2QR5T8VZwNepRGYpwLK3PyPsvUh%2FC2c0gQmzXqRnFwNkPlfQkxlT4V8u5zp9iJq4IfeUSFriy88c%2FrgTjz0gMAEoZ3dhyaQrScwY2XXBzvTzDMx4ecCaDiwuKjFwrItYceoIVtGz1v0oyE06gIc6lonGqK8D5r7hqPx%2FpQLQRHWVdPgUYNL07CjjfCOLL6N%2BkBxNtENwE8u29%2Ff8SWu3JdGF63x0uYKQdaOvTwP094moI8amzwR5pztrQ3ldpAep%2F%2BGuqVaXlO3cbQNI7buG6KxvoIN%2FHqE3uciVVOLObiIxfGUDsx5lIS8Y6mlnbmAaPH5p7nj1FuNorO5mfT2IYEOcQxdomtygBhuSgdof%2BfOMXng0W%2FuE7GBG0nYiLpNb09SMJqkEXXW7czOn0X0NIKrK2gNfl709XZoNqLJIO7tdf5QpOd8CtxRhE6Mjg31q3JhhdV%2FpAldfI6s02lXTxMITJisAGOqUBtKICe43jKIhbzFoMF6b6lzg3YT2yhllqHHdPp%2FAFOQJEtA8f52Vj4q80VDg5MaKOt%2FdlwA6cDbzrbZgKrTwR6zjAwO8Z0LQusHYmMZTCu22JEh6M6qWFctxDki5fZaLlPxygLi9vjxj3jShjU5WCr47%2FAVPkdtAgOAbag3jvW52zs7zFZooKGBkCCGR87nCXU2DiZqT8Ht97lRnZ5aIDEqbBc%2Bv3&X-Amz-Signature=3385bd824d6c037dcabb4c057b1809e3f95c7872db5d72fdc7b61000f39dae42&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
