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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFPYMJ56%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHzyr8BEumveYCMeITb2FJp4gHiTHFwTgdq2FASK3p%2FaAiARiKUx5Jd639JfKJ0EPclTxOJi01Vk6P8aOHhhi9zGUCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXuGcAShnoGbAMZniKtwDfxu6OWynxxrZoWC0N7a6Fhvt6FFN9JKdy2UULSH8kZjIQ75SlC73UvA%2FnvCwjE9xxbA7AIh36Z9e2BzZ1aRdjoiLcyIVQA396O8tEUDz06R%2By25CtuTOFjsCByu1F%2BQalP1CcUVJzVW1%2B9viENzhcjfVILRLvKz%2Fxq3uILxvRySKHM1i87GPKwY3A4dGn0Qbk6bOAxbrDxed0vhe%2BItBS82eIdXsLDGVaLYRwXTu4EzmjaslSikxPx2eOHz6dnO3QhWc5fT985XRxtMJflhuVJlAeD4SF4LD8jCoA%2BPz4PDkMUS7FDz4EGYp3xSphxIj9n15ovimPXyZcfmXuzUZeY1%2F5UUTqq%2BpfWzgWUC%2B7lCoPuPW5c1KgA7mBFvtcDCuUrR9o0VjLtk5Sf%2Fjv7%2FkCUVZIZXRkGCAYyjB0m%2FEhj9oBOfYzwUMxcsRWz09mteWXyPXDF%2Bb2HBzygE08OZLW2mHlRivEFSiuHW1wpCa36L7LWsrJO%2BEBik5nak%2Fn1iP3g2QoqS53Nt4NjHGpOyWT6RDctHhQrdOXhbKZ8k3YAvK1EEOXqGP2eG%2BtpW6Qyzb3ApBLkyMmbbfnLvd5GwZQ7331U9dzZOGNmLo0i6ZiDK2R1g%2B9tscz6uOvXcw2vfzwQY6pgGGgmrly8NncnnX3dX9rgojS61%2FUng%2BhKzxxHoT02pWCyq3PQ%2BIVA%2FeL6rluhuAUyphtsq34o1d4nueGd6dPI22Qotp3X4DTqmkI%2BfE7Ipxy614BwRIDAJA9yNqSJ9uat4XPiHlxSS7ngtqmAxMY3tXa6wn%2FqVjQ8CDVqx9lV0uvS9zclBFUbeCylkAz8%2BPFmKowOo5j7B5RblfjYLJV1dYyKiQnAEs&X-Amz-Signature=220b62e495b7473727acfe02e00e3ee5706d581c9c8c5d5d2a5f2be277cb7e94&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
