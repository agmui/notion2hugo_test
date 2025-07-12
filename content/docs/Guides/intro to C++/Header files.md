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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664724T35%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6XYr4iGRjeZbFeH%2F2oXRekaFpt%2BDDtNC3cOye5SEf3AiEAyLUIjA3udPLSFQZBCbgDivA9UmANsQg%2F4zvlODF%2F60wqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBr%2FyKlcPWuOJdKRyrcA1raJODsdXMUKmcoYSfEG1Vn90K03KIJL3pi8E3d%2Bowywkp9Ho0zKYDHgrlr8pV7sM2riQKyfYy5tK1kUZfuDVUcJWf6n6TU%2Fwhv%2B24usN%2FvMHgvdy%2FCdyUM%2B8TcRDtrI4ef3TH0sXSfOWlNGsNc%2FvQQ38cwhSga%2B1J0PYT2AgF426lGjw7k63Mwo%2FLibba5wouvuLqIVIH%2BU3G0rnO3cLwqe1ML4hT8dwCZXxCdOmRpaOblumjYo2V3597YR83yn9OWy%2BYQUYRFSbyqm44QHl5ip6e0wW7T1WPYF7rInMpwrCqlU35GYZCvpNuxMQh0Qh3El7Zavnf3%2FpEhNLesFO4YXJgCxvmf5gpwdJFYxFZ7ujhPyGfSJYJ7LpLbMqHIEWRZM3Zkz3tNy%2FGZH9lVhkYSsdt2VsZpcotbDxrKMtbNXM0wpIFxNENYXD5U8V0Dw7HyG2S9scIqDh1%2BvJ3iNItpawVb84I%2BHIxPKjms9GGyqPqh0Yzwgtble%2BgSJy7G05xnhNiwoblWSj%2BNMKlyU0MbCh1sc7p9mKl7EsY1Cqa8rvtaVqfasaDs3JeEp9xBS10%2FisuD06Svpem78w5YFryMOT%2BtNcNIGdgvWk%2BM2YHJeSs804nach8zWA4SMIPQx8MGOqUBXyMKlgGr0KvyHa3dMaLN1bJ27Paa8jzr%2BfaWA7gQZLIXlunmdfPYafLgvwWwhv4Riiwu7FKy1Iqjpz3%2BVEAV6RGVmKOaqR0IdfKz336nCacg63V2tXlYiTyrrgeNpE3fPS5KYllATLlJTMFb5FCdDmRk%2BxoL%2B1SgpEvb0rehDNpBlEQieuV26RGm5OtLvUqTV69O9woxEXvTb75%2BmZ9i%2BiaGBhBC&X-Amz-Signature=549adb75fd3bf6de43047c7d1d70f3317e2764e1231a5447831c06dd56b80956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
