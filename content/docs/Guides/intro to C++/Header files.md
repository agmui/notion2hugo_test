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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHN4LAS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T041014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIDhDdnWLeaKSz9OumIS3c4VusQEQHd5fxQhzzc4Z0WrbAiBSXBEHJa7a6Dq%2FansnmUV11uvRlQTOmtff%2FcuJc5GGfiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1sA%2BxseafwjUarqKtwD4EdU0nN3czLuJj6hZzqDFqudP6DoqMjnawr7pA3aGQC%2Fr%2BEAFJmRzjBTpucQ%2B6wKCNv83XzYuwOMqy1D1QTx5IKjXxPrMEDNuorOJleV6u%2Fq7Kxqcehtg64x6f6KhiM3a9EKPOqRT7Zlq0GADCOvv6fDKKxigLnUQVIqIWyrrjsB%2BhAV9oU2ADWbLYqJ0Ioct2FtohIyKPkwKnzaWWgmb7E7OBRqb4mFGt%2BF2EjotDAEUmFl44dzhfvJOb2EeGzqA%2FrZVdobfMtRkKD%2FDH%2F6CWTefjojd32AG2A5q43UHc8NQBmewZL%2FzQL5i9F4WLiaiZ3xGpWxb4lMQx5MvlKT3QoF60K9z%2FtPv4MwQkJxCgEuV3HOyMwRvP0%2BaeJM4PhlSaP3%2BhUXXQWuHKxl5Dm37fRIiWgHf9wYn48xSwtbesBEHQGbTsaTfV4YIM7QhBOXROgx0FX7lZDAUCaWj0mXs7y7SM007cAskpuSLOSx6YFnKHF7IVxpYFwS2VvEIXdjgtERqAMGMMiSWdn%2FrKftlI3FscGJDc4kAZa2Nb9b4LwwOUf2Z2z9xHUyVauGIIPS8yNDEHUP2Yu1aCUv86SOih6hh%2BamD88QvaDEUGgKQaJZRPUO1RDKnBFsCfww9tGEvgY6pgGQzZgfJRBsgJ1JVuEEMirV7dWFNpS7thX9fYOPsmy1NbDskizahDv1FGOKjTKPj%2FisNSYZGAcGFY4e8VMFPQTWxpYyThWVDlArtM29ngiWnzVDjRQeazMKjuC5fiX%2Bqw0R2XceZdi%2BL3etsYUb87%2FJ5R0QxYOCEBG4a9svO2%2Fg4QqSdt5MmZlobQsDEda6PYIQQIJikrfEXo4bfmRUO7VraGM0y0qk&X-Amz-Signature=b8881a735406f4130f65dd1cea8bd1b28af4fc3692e184e30f9d6676b00c175a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
