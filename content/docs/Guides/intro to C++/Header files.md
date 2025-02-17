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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADMGVKP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDeGt240CTMp9n1mDsXwo2JAeFwNV5j7f6YikjbONwZAQIgFteWQnKOM6l0duZ1BlbFhe%2FukVfll9FoziLDRFCpXowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDA8cqJvlbywDrX9b3yrcA8EQaZJn1esJittkJcTwCIkgUzN0h2v7PypPcSb%2B%2Ft9DM0%2BdB1LYoiciIF33Tsar%2F31bvH8B76EzpBh6y5qa9zZnBb%2FYvZVHoD2nrUV4zf6V2Z8JdnIQ2sT6BM%2Fo4UdK%2B06MY2f1WwrcN3E1j4ZpeAaMUavOHgeLwhJm%2F8uii1nwjkduWc1Ag2MXogacu1CmeRrZpM6lrbg8SUW5t3Sd6pdKxy%2FVvPDpgjUk%2FBQ2hwZqfGZc8%2BGFr9PJYuxYTRTwerEp8JwIAOPBuDestLAjafWikmnZHBFPi0p8CpcwgUGWkOmvQozMP0bMTWtCcTt0xpUgbDNdf5f7%2FMaHum9DGyKgn37R37gHxZF%2BSV23uTW7wFftk6l4HVYNJV6BFusTOs6hjObd0Gfs1WPdmcQRlw92%2BZCinIg0AYUWpNRxtrUdFlX%2F0yyQ548NHR%2F6HrVUFj5aY9FsydPZIIlja3H7JERCtAQud1WhWoCspNgltr5s1Kw9u5zVOBvoWqBKaEtoX7aYsAjWFCA4DqrKYSVUa2jT8a506N59xLt6kS1tlzv63IhY9meiaHybVLn4yE64amJRbESlMBcZhLj5fp%2BmuS2zQVBNWsZ%2F6V2rn%2BzG1XeMV6%2FoE%2BGfpuX3YcxDMIGcyr0GOqUBqbxVjs444Xjw0akSQ2CwZk8vRweIJRHsmcyS8n1o%2FIqhLJTUjPzdmuoprH7oXF3FBMiEuH7LHsLzgGjQb4lc7Yy4umCCjeEiy0BFk3O17%2Fv1gyoFE1gQEzzj%2BU5QKIGO6FQ%2Bf8%2F1BuElu8shuiEcmbKUiNsy406Tm%2BCI15Yu15%2FnvPM8jf5QEsfH1sSdmc8rfYkXvwlavC%2BduhnAkeXblV4aF6VQ&X-Amz-Signature=18b547c0da83e6f0b2c3a615decf6d9358522e30373edd33a61469074c5236ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
