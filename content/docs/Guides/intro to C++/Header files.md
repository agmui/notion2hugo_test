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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITEACEO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBzUg4YqynyIuLJ0qWI%2F1wsmcZqE9ZJvtPKUEdTChVYgAiBzKv5c6Q%2B442sG92tgHar6wqOsdziSWKCGFEsWP8vrKCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdaycz6wa0tz7k%2F50KtwDd%2B8b57LU9vDDUGa4QwirFZgj8NHLYwHRlAP8DSeKanCRlzd6561kHqsmQ5%2Bxx8K5aeK6CInu0yVU2J9QSkyPvLPorw8iRrzpn86dQvW8oHDsP3ATT3SzIj1IUacKxMztfVeHihUbaDC0vef3e9iwzgBYHgLodWcTzZdW628FPQbOubXPrd2w8rTV6H0OzCFtu7lZPmD%2B8DOMCpWODFVoiKjai4kzg7VMowkP3mHYZA7rOLlOcisHAE8Pd2byEdRl1OQ6r3wk88HvYWf5Yuwbk0oSiHYh%2BXT7jI61UFYBeZrB1abngYKgdLnW8HIxiQ8YYt%2Fr3Mv6SJeDthyVCYhZu3LArcwU7c3AHfxgSw445b%2Bh5V1d03tzos4sZQylr6xfpt3%2BkDkA%2FZAFl3CDBRv35ha5vo256kipqeyAcPJEzRToejCElUmr9PrCKg1XePMVV6%2Fnp4XfN%2B3WXGo15htX0cpTKQ%2BmbL6xAdR%2FoWvMOrT4%2B1UfOEj7tWrkzmfTY6omSvSSyCHfyk%2FHJBqUR%2Bjg%2FxtArVT30Vf4trDsFEyMafS0YfxZ1LXp13YDVt8uLJ1Y0%2B%2FdpMROi42modRB2N1CHZqCKOWVqpDZE5RD%2BErBBk6Z3ZdLOh3aWonQgcIwtLWhxAY6pgEmNE9smbuN8piRaZQNE2nzjXRCG0SVJ8bto7Ih1y6i5KcniT9EuvEcOy7hIYYjMroIwig68j%2F3SkzuXAwERVnbS367yESSJema5A1bX97%2BzLZ8eK%2FIplrgun6h1MbS6rpznOxKMCVDcWbt2%2Fd19wtO9UsWBNFIzm6v3UFHaTYhY0BwxwSoG7twATL9n33QeOEAkqY0omI58SvfmxcoHsfs7atlGPag&X-Amz-Signature=c16ad9f4ad16a5ac3430473cda2e1514bfc07d8d0cf3d9e964664ec4930c8efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
