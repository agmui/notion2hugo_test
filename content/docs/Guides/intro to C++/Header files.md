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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R4PFMNE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDI7kRVljA7QEIeYL5wDqWzvTaLtmmqMmUFlLQGS1Ds7AIhALY686Yk%2Bh85w0aPMbprmcqO23VihEhURl5ChZwLknLkKv8DCBkQABoMNjM3NDIzMTgzODA1IgwPfv0STGEcHvgdYl0q3AOxfcGZNNT540CbKSWBbAdHPD4UjxhoBwhKISh%2FjboqI8F%2BiTVDMLv%2Fdzvb8vc3ngflJkFDMvBkwwhhX%2FMEIjfsIFP6CShdLGxNHkmkXNvJvJ1rsoNbSj%2FPvbysBE5rtwqK51CqNt%2BvTl7KiT2y4moHAAT%2FB0Zaw%2BVBXsOKuXBVhGl9NtJzSZ8zQUvfpnLpGisDPEp7PMqko%2FluroIiooipVveXxukc4Wb%2BXZouDh45JWWUHUigtSHHX8PcEOCxd8OlvCn2Ze7dv87Bx68o85lS1wxHDDLObkJLch8tgMUm%2F3idHVBTOyLl7YqvpwiIIPcAhEvH2fHcE%2BFbYVx1jWTtueJhEvINSQylxE0ld%2BP9dsg%2BTg1W32QAEbUakIJCGYq6gcGLGxuImb1KUrY914qbJRSSZzBoH9HjbOHUexot51JMPBDEH2c%2BmLaTRTroiPAJq%2Fw7RvLyHPasA8H3efbgHd%2FMvX6DXEoA7C5qOIqb%2FfJPsB29yCAq%2BNsJtxLnfnsM%2BFqm33ITEqE8mlBSFZMH2vRxjbvNseNAQw3bx2koZvJLOwIq9rsrxHkE0%2B9HxFCFZ%2FMJVaXdC6wPaQJRK7xqKdJOUXihu6k1gWcl7Ey%2F0HQ9WyJaJ%2BArWLguUzDZ3cfBBjqkAfFXtL0%2FqLAiKR%2FosC6nKwIDX2PNVmzm%2FDuQupdctiAkW0I96DRc2kFc2C5tSOdE4%2BsGlI4SaBrf6GxbIOurjTlK0054P%2BnvVIHemJ6Jf5NyLT%2BFisHqsBDi1%2F2iL3uf7E0AGcf0RS67aK7M3kIag11xIVH0ksNk1QhLVcmchJp5rX9R4MOg4Xg0CcySras%2BlQ9puUswHOAd00OVqrLJT1eB2DsQ&X-Amz-Signature=f20142b8a8136967edae031fa42518f019747958e1d42b748556bfe9b0200a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
