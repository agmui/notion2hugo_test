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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QARPKT6O%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCEBt9M4J6OSEBKDLStbwuOr0twmXVJjDsvIQvGg1sFfQIgaWqGDpB9qbAxGIB7uQ0BItltGkGiXen7cITWHiBkiO4q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBH9Nuob5PLRtHkjEyrcA4KLkvnvWEBwNCt6gniavx6%2B7nQ45zptV3TmhMf%2BCLIhB0gHpypLHsa5qLha2S9kN1n8IGAG6snuT41pqH4k0Zg1wNrxueYXCRUJHf73%2BC9HO9Ht23yj8HTys6UE1g98t8xkZ0eAOC7tfoQVRqTnQwC39%2BjmqmBxF4UKtiQRyqe%2F1wnvkRKUgY7VAwCT4kzWcPzfds%2Bg0viKXy1lwxTX%2FASFFXB1woSxFeORlQ%2FcdR089gr72H1zh7Nq6UjnxgDtAmc%2BioSuccqJaF3mkbhqxypdBODphYXnNswo6Sl%2Bd5GWxVFzcziIPWO0CBgLvAJMcLukSE5YnNufoEPJem3SQIyPCA41FTxOIXxF0amkqP0zEen75t5jDrDGvr%2FIPCvW5zzfZom%2B58qKi9BCvHy9RpxKNcwVnYY9t%2BxOwpcpsj1r%2FcCtRNCs0GwuT%2FpYcpHLrMIDLNrIsGAjHU2jn9EW%2BjCgafjkBEX0eb3XiWyvfWpNEn%2BKzUNvl1zlXoFeWXlwYf8zm3RBy%2BIG4HXo%2FZTWGyAzP3ryuBxYgZTaFXLZF0lEEYaavcLPXB52Bq7V54fTFh%2BYukZAj3AieXvl2tbKzhWdlnnpThEatoH1fKmYIlwxE3kFF%2B%2Be6XTMb1hgMJDBusIGOqUBKXqLh%2FEOuMRln4TQDH2bHlSAVz1LT8OCETlfH%2BVGgFpuoEUVUIfrdhTvUAyBqIF4Vf4B4JYbfS0%2BRyJXYB4eDFmhK8eiuUSAgRX6bsaLjJxuEF%2BPZ7kUUWgf9BxkyRChEIWqw3XtmYOaqTODISCF2sqFdcv23aOes7GarxJ1sEllt9%2Bt%2BIA93%2B41dv2OyG5Q3vW77vAzBHgjjAf2%2FTLZeNSlbpDx&X-Amz-Signature=da65f76a7df999e4b6622ccfef6a9ee04140a40441f7cf6ccf4f3003a4586ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
