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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U67DMQT6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCmY3MjvO0MmCLT%2FN4GmvrzaIsoVK%2BcKK2lrb7CSm%2FLvAIgVtoTyW3Dy01dUL0rjOCApIMJnld59VEOshzASy84z8Aq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNfRAtii15cPJ1TgjSrcA6vgodh541ywFW6H2ylrdPryEmRdck2G0Cal9NiflAVJ%2BGK29lJ%2B4lsLO5DFw1ORBqnFuhHKGzzEFekiuzYBzejlrfBHhl9Z%2BSLJEO4Bnyt6Er0%2FUxXVA%2BoaZHr7Z672WwSTCqDFH8MnWleaN7JBge7Cndv%2F2anwFkd5DullVfEWtMUx5HtyUx0ci878QvdoEaWEGUTMVsUjTmIEF9okihau2M7yfCsCEdPQtKpMtRtuZm0IY2Acd2oy3sACqF2xSggDjl%2BqWtiC1r9XcIOyw58eTuE3pdFmSMHTJ%2BIewBkvSDFtlpi14ykDRHtETjM25UWWuNWrCd1ueMJvBJW6Utf3gTS9dbWTftIXOgtHV8Q7%2BfyTHn%2BBg8S3ySWVNE9sAwK9PMP7pDkvrPWoHDlSIucJfo1S25cy2G2Dmox7PTl9swM0WCFvLac9okAaGYc6TKRSS4CWz3dfhcxP%2FWuV5818QoVgzT2jyP8dkbZ5clJcvQi9ELqlClQbLmNlUm5uHzNVagSrh4noBBTiwq6IpArUXrrJT02RJe8CJ9k5CoxLoOoIjdGtblvQEYbxsx9dBMibmXyb2mBQyKPoaCXN3eAAFfpVVMXJ5QCjp3BZRoSkJhf1Sul2k3WtjI8IMIeFqcAGOqUBOwX5AhDRsEiIBweRU61YjWraIzTo0tY3D9GPLS8nBZ7tG2DXteF%2FblSU06C%2BJCQcbe%2B%2BcBWvFqSvLSkFjGT%2FT9%2B1mV%2BPk3TcuGm%2BZZD0cn0HdenWO%2FYvO%2BHU5b3DoWziWZU4q3Wf%2FEXxJzTXDU%2FaRR1bkj5POfuf2u2FfOXWG8IpdY64dVHqD7QRB1LsjXQDSrepsaI0xfTIvWgBSj84lnznShfp&X-Amz-Signature=9a725715bb6559f49efb6b8fded8f7a8c7328dce5586169eb1027b6629c2e4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
