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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3B2IDW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGoYm0oN4phIayW6XrlR9%2FdXEo0xz4bICWbtQpR7JHjaAiEAu5vhmcGrYBr7p6ckuoNPLEQxzk8bm4cLy9yHd5LuJb0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAr3Ug4yhqpS5%2FLBNCrcA7R6oTXPqnVmc1mygjg47VwaR%2BqOubLzDwR3u%2F%2Fee0oLZoYlucwr%2BbLarIWxbAFggPTaAIl3m8%2B6qR25A%2FnIDzHu9YVBZxKwpMElUhqpApV1x8qqf0urOSrxPCxJPmIQOyb0W4hGFHKWPBsGnPRbC0EglXY04VJAJuXgbrY6DVMv9c2WNISnYbqzAgTFUJB2LtBBuXF%2BQ04A8ScM9BjC073LVCxnCd10kSZ1qIV7ald3MS2vq%2BQDCcvdCWnfRpM3AJo4tbdmHlCGqEBsNTWpKgh1We2rlpQsdQph%2F%2BNvzDtbDwSRWkw5TBCm36iqml%2FpalwBdSbhmOyVdCKtCLknkzBzai7JoquZQm44YbNcJ05DPe%2BE5azV%2BIC1Glrx7NTqrnEEzgxaHDY9BVU2C%2F4M3%2BSJRErSybqf7he7QImpw4CeBZHaqqo9%2BKxq6x9XKsBt%2Fg0YG%2Brf%2FzRc84%2F4GYfizFUu3SlePTEMi%2FQmOdf0jsIP2D5my42Xcbz087SfsANkwfjfG6OmXIFmFwbUCEu6IedfDqUkEQv3HdtC4pfpn03BMYfo9rIsnH3nLKG8eBLM2O%2Bplrsetv798sy0uYS0agoqWzGwywYtJlvsQgMxG2xBAjgOt%2FvfbEmjncuwMJDH78AGOqUBrZnvpSatOcgwh2me%2B8SvUuidklbfQwi3V7G9yubxDWACILoh5Sp2E2EtmFecXUqGE97cKAig34X59a4J77BnLR3a6EXCoNiDy81F9WXG7rG79KprkODI5py37ylE2zkxbqjMZDPLRNGMvffNuqB8nREYOXD3uIFWv8SPCxixq9Xv3EJ1bdR57wGKZ%2F%2BE3vcfOoeSBJ8Q8DjYTqJzwfVq1a%2BLHkSW&X-Amz-Signature=d2bf5e6af0f024895d6a9a50fc99b3710ddf188150790336e132782f56472825&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
