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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIWLJ6J%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQXszX7jBxRLGckd86ZALlgXA1cTqhcmGr40vZOKsFEAiEA17V3Fa%2F8EV429vLlhO27H%2Fff2qqKkHqgO4JJoSFEfPsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJzoVT0aXTOfUw3LXyrcA8fhfvu81qygo0d%2BPmM7ttyw7O3l3Wd5v2HAfW7mBGhqjm3qCj5Cv3N2CvdnMx0uptgTuKFr9EUebQDKcBKrlcsp1TEtieIZag92UsAYwqzV2QadBVuOb8WlMEmFX9RjjaH%2Fe%2BZOjtTat%2BM9Wkjw3YtathuWn2p%2Bdv6v5CEiv6UhgSKoZgbHlz07DI8Fo9RpmSx%2BfXYsKQCo%2FkIE%2FGeuFa8GzQ85R%2FMai84a%2BbB1iXRiS0IsOp9FkKBA4Y0LiXr60xH8XMdmj7xGLt%2FxTE5aNpeVchpBwGelGpdtp5ebVyOw9%2FkG%2Bixt6CUPbTIc9b9Y1fUcHIP61%2BgC5e%2BRQ4yamKKJOB%2Fj41MpECPlSTu8xvhnQngLt%2BKF%2FIGRZu%2F85vnOMjJ7rN1Cqguq8xB7SlesaGhv1rwQGJea5MAwFClVydjCAUmsUh8qBo248Hj9bQoTI28Ayp%2BjWGtaU9wHI%2BtDoA90Vr3PoiOXuEEYQ0aWNHZw4iialDI9utY%2BE3Yl2zVSj709jAONZQ7Q6RqabgBoHYOsHUiFD%2BvCO6WpM2mNR%2FJQ1NQR0mCEW69IoY1JeQX2LY01owBkSr3nJkqY7FqDYmhPHVNhAH0XEJuJKqnFUJ71KdRWH%2Fy2LiH%2FxifrMMj6jsIGOqUBrqU%2F0d1NhD4lqAwGPOmepscR1o3jarAM96SoL9n3qXMXN0zcZp2YiJVAEs6pY2OibdDnRUZY%2FLvDwu%2FCnFDZC8fFN41M9r%2F7yw%2BiXjTreokU4YpISVT6iPCQvg3aTdcKSPpUKfpAG6voktWxLG9P%2BUVljA4dk300Gd00PknbnY5eMRXYqBI7p61i2%2B3mGpnPylj5G12C1xq0FKiUsPdSoZhzJ%2BLn&X-Amz-Signature=9858fd69af32d526aa45da2b425be15c256491fa480b25f09a10486403a02a44&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
