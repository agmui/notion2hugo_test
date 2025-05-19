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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMA72SUU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BqNoDRmLFiPauZbhRORG7qrtNOJaMFeHiTXKPWrtZRwIhANpCCCmPPbrQm%2B7zs5UkCfuwu3Jp%2B4yeEAyzda%2BJfNdMKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyR%2F8sf97KVB9mxy8q3AO2%2FZQw%2Fr0cJtu4j7byXkQT89QWjDV7ghpY6b7XPdie3J2paRacRXm%2B9a3tVU4hUuX2KHAdPRXEYyPX1LrSXdWLr%2FTwKtWkUdNKlYOcuQISf5UJcCajC2qPUxHxcsHLsIvKGUX8fENrg4oNNBjY6v2BykGcF%2FoFBywx%2Fxm%2F6qi6zejvUCOMYLft8I33kbWk0rNx2FahMnotffIQBu1t9TZawRsfAMm03TPLrmU8U4HFuv1LwWL7dpBk7IqasG0AAb0dhbyW50jBTTGJdoVHBurDjoOfG4gSti9M0%2BJ9X8R2%2BLpPocLaI%2BhsR7WnW1dzlwe7KbSTzs1ulKtcqE%2BYgKXsk9MzKAOVivMnt9eA82ilbMZsKk1TkDPJXnFByIwSuXomDBc5kFkOvObHaxZF7JNdrXrOiik2k9Dfw4GB0jOHe6RrsfpRC2yL2cLOPOzaxWYnyzIoYwNS%2F6AjquZCJpVxj2eSHyD3n%2BMKXR3GM7QHUlm7CUxwmIMJ0BkozXBydehfDJeis7B9%2FKgezA1NkBBIWHUsaYquiwSoZY2RrlYolPUh8ukKYE0Lh%2FUNEUVmAo67iN9l6PHbr7P%2BzQYoBOS3F9d5M0%2F%2FMXqxxdrQgWh%2BuCiZee%2FDYyQlXefncDCW3arBBjqkAXoEuV6pgmk2d6dZTztIEaTDuveBsTlgoTuQ5%2F5JR%2B5mb8tuna7gkMXvWJXuMcFTB8%2B0S3%2Fs31FWYHhUbg6Z1gxcyWcvASUJP8VacRVc2a%2FFdlqIBGQpKiFNr8SjMX76CM8%2FiQGPY1pHjRbMRJWNy1xsnhdhzPDsLOBb05afsXTg95D5%2FiNBt%2Ba%2BlC7pJo9D0MArRX7%2FJZ7ARPqLhP7K6JtllmO2&X-Amz-Signature=74ddf1e42ccff88908a9042decb78c330aacaf8af6068a6154da04b45003e9a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
