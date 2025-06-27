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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRSCUPC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHCCDjE3IRxceRCj5ppzJqJECNiMS3qflCVJs2Q2ejgQAiBItca7wEM303dS4orugiIdRVr2QNXyswbJZaQajO2SRyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM8wrML%2BzBAT67fKijKtwDDGZtnLTePqpOKQiEUcMvbrKzF59rhW9QDN9ijN25RKM73wrThf9CaI0dVGeuRsox%2Bz7S%2BW0qbCSaayb0t1xgnu7hlHV2R%2Ff7XfO2Y9tm0uE%2FXHRPVcoy8vhd18%2FFpRzYenPd9tE%2BZSdoCkcfLfqFkuVMDEUc1%2FDn5ggy3YDgpZOCDUPXx6QUqyUo7vBGPf8iRTiBpJjmVdJu0sFJnRAj1daRmulrkBYrNgxr%2BymHwa3QAJ3JBl1%2FEokMH1fBO9iJmCyiUZ3LiAW0Ftu1ftPuvQPy6s84hs0QW01UB5iOEuKNOmb9%2BhRRKSz0UEyj5WaIsWm5hj7vwNqkZTP1ls%2BI2kb41hbLJgBFOCr6T0FN%2Bw6znbPtlSLWVu38DMVoLoe5XdN27%2BfH6atzq70IA4vdZx5TTygYgMmsZ5nW0SXlDy8CeFkhzX%2FdRfjy9S%2BN1ceiY2gBbh8Y1ermFaGcrtH4eg4UCxnvSOKRr2a8PlRZH%2FTcqx25ZAU4F7%2Bo4Rwd8MAUZT7rgIgMfER3SSec1tp7fGEyHR0xJWuias4gS7VFA0ttjlQNq2RgLm8KipP2QOIIKKZMQkE8RBW4n%2Fz3fMrq5EKM2kysLNKL61XmWslmcRoYlDhf7Nhe%2FA6%2B3Vow%2FPj4wgY6pgFHAJlgpN%2FneD3761gngGGSyP45EG48xCXZFV3SyRZ5FSvh240Sw%2B3pUj6fe4B1s2qvjcVMS3jcLDNfFzlJ5s4eJ81D6BQBvkCbCd5ub4nH0GjXUEMacDVovrWcxAhAocx2Lh%2Ft4fgdM4AMhsEvaPL8jjq7Ggf7UnT%2FmBBBqBZrNE0KsSucHnDnjgmubRRlRLsDleAyBLhTSqjCIeQ%2FrY5FbManIwb4&X-Amz-Signature=d7e455ee91dec42de38b50ca8d8d525fbc28571a1a0f4bd845b59d3e1ff88174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
