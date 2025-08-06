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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWICTWNU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCcQ2wwcstyLGfK%2FtxNIikZjbCxTAvTdSNhbbvPFTjGRAIhAIKsmoefLq1BVknBWqHB8euhDJIMwiVH%2FHWQz7WSjOpfKv8DCHMQABoMNjM3NDIzMTgzODA1IgyJr2wcDVKcPpj7qNcq3APskSevydjN8B5wqB9R9tjNXf2hweTcRQwK8UKYHAtFFdYuPm4VOi8J3Wok87hKAQkLZz50lvsWmQt%2BkdG8Ot0%2BWRk0H1lSBVN3bydsDKzzNSg7XpuZ2azsrKxjVpjhXpqiGtfFaOcCqdFz%2B%2F0ifv2hMgfljD0eDjXOfawUuptcsv9RaVlw4OMz3OA6e0oSWHFcL4hra3RoujoIlVuOq%2BhCk5HNNVC7pCGtZX%2FehiLC1z1i5i2%2FIrnHNC%2BC0rO1Ct%2Bv25Xk2%2F9El0MmTZGvRC2l6IaH9EcHA%2BvX9dTeYYso4njWL6YLY3CtcBaLiPgnDxxZzBHxy0O%2FWW97WAryp68fWlKisRLpuKplAqUgf8VYFQ%2BuhHA6xhqUmxdSlPZI72%2FSKCzeR0Hsp4YI7sBVvqJP%2Bo%2BbXyuwxxHaIzx0ETStr%2BR1P%2BsaUKw5%2FwPHWr5f6dvZOZndWGcxMVMdirARB5rgVLg%2BJewWHhWFM%2Fd%2BMQfZw7iy8hIpCSvcaAFO%2BX4u9J1TG2WBEJ9cSYSq8fYZVjSQVfPPlKJRI6AIcrQR2txQoH%2BwB2UBd8KawHel9HLHTJkdjI1wa%2Fs26OGafpPPDObeixiVobCZqnT9gdaII3yWGx%2BUPh6Brdd8mRb80jCNz8zEBjqkAXVOUM6%2FvpSkO27DOx7pQzKgTCwRpVk40ABZ9yTth7eIWpCBZ91KSNOM50NSPBcmzRWsELkON8eAftVwyBLNsrqwXrPWsCxxAQQqcnNBXjSbZQ76N6ReEqHUoml%2Fukqc0dU%2FJfiIwYuL1xs6YNJxkpxu%2FKZBX%2FMiTKpfI4iL7%2F6mWyrp%2FvoU8M3Q5gU7wKcsU5ueMQYjgGWb8lJih5dCtrDVmJNc&X-Amz-Signature=c089083132e63217abf3d23ad9de9ca457ef664ebc602db10f23afb43a297409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
