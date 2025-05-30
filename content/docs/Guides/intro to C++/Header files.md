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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFAJSH3X%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVvc1j13Abe6oeG%2BS0yYPo7w2W0%2FrR5CKDaVizt%2BnDKgIgdVvcRAwHvVv64JV5qYSvwxeYuFhdSMPgQu74XtSSQikqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkFPIVmYo0%2BkSzIVyrcA010WXDp2YAROrVnnIbCCZWMwt%2BWAAbt7T1MC3epxgEcVlprrsf2pvEytPF8YC6rgKDiX5FMbLt7RdGCz6sNCZPKK2h1m4drt7m0Puf2rQ0WvZMDwnC3scIu33QNFcYYW1s27y%2F5XnTSJRkudPJ07BhpfThpHDh8X5yX%2Fm5zd4pLLhNP3gjCDioi1MEFjE64OxKOx0%2B%2Fg3tcPovWw6qbL9TuYhluAHr7hvFfmDLpBmIh9FwCQzHMD2Ib0JEJDT8zBK1NZoTAcmU8Di%2F7358KZEcDeqd3NyWjH32bz46oYNpVXF0jta7TDOZACOAMCfFDANPYAcvUzFru9D%2FwYHAJOOKtD%2FxGh2fRQ5Gu56RWz%2BkvBlmFkBLmVnjYKiwPlKO0V8jpAFseDdSiS8oVqgd9G5ys8QFNtyFCos%2BZvE%2B4%2FXxNB3E%2BFIwj6sCBC680A%2FaheACcanMhA0nojyaQbY%2BjwIb1eVUbe5uhDRRfFiSaISVubM10sg4tZbmUPd7ofS%2Bt59SWAzUkI5iWmyZSoTfCfKu5wXCAf4DjXWh7dKiezjYU2iJa93pt4LEsFNYftPFaPqZeY8KnJsua0RDhPgsdBrvnx1YELNz4WBBFXqOyZdhXSdbxo05vqy7ZsGvhMPuv5MEGOqUB%2Bsu%2BaLTcKzSDPFgkm7dLEPXC5KrXYPYSn9KxoQI0sLlVCcToHzmjPR%2FN%2Fc9R4vHLc7bmHuySYKIjdkuPW5qnnmEjEVKvE773Zs%2BckIuDHjsIxK0qTmyDY8Bwp%2F6FX30O7XzXHHV7vkJXHHLlwbMC2p7i2xSmfLa67PVILXZkZsAYNhdiGNes0EzNAqk1iFsQQ38wv5FOhcN%2FHaVLxpH8VmYAiH3D&X-Amz-Signature=d9476501f42b58fd63af97fb03b27301cf0a8ab8cb879e8a1b720c12dbe7a404&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
