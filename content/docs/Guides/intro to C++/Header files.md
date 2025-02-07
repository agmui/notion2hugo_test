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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKN3IKD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD%2BTPy%2B0xuCjsXB4vytYSlgZHR9qVZc28rwy%2BFtmMcbbwIgeInO6OmOxo1lrVw3J6TnpU%2BjJflGSH%2FQamWAyEmKRnsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDH6ulDjABm5td%2FGBSyrcA9f8jKl%2FY7REs9lb9Ip07A%2FeOfmTpT4fRYplDYBKhOlxD7zuOxX%2BjqNU%2Ff4S6RnFP6rUwr3Sx81%2B%2BcdVI1kz4k%2FpqFB7%2Bx3O6Z8KwD9Gfl%2F2AFl9CPZbAPuA59aIhCkJMbOiUbZiRey%2BaBoTqI4dmDsrRpYB6kQmaD%2BdRmyJGsqNzFZfihEZaAu%2FHaUxkKCekqaCf2gV%2FbQyXakDoovhhjQuiIZhpU88nAMS7DAMO0UyjaNs01WPH%2F7UdW3Uz1JuirOgLGNkkTc6azWT6lgo34%2BSv6RRJ5NmT%2BL%2B5OMo962cQHtzZvnAxVpgj58xpejJszFvAQGPH%2BSzGiHV%2Fesd4aymDF41%2BvGCrqAg0TxKDb%2BjaZd26Iw6X84Be6DO%2Fi12dVvm3%2FruaMGeBQlQsQpk%2Bk8yDamFW5rCAiEUCopswEru4DJdmMgkiHMcKzkR8or0TFILM9TluA389sIweY6up0LzyKXtmUwq%2Bgy%2FkZLNSSwn3X2%2FJW6lsqWhm7%2FVYj%2BlX26tf%2BuBT6P3DG7wHMRbCj4p8YQDdiizVDHp6YNVYPpxIm3ePDsl4bVhTOEBXWI6bR8nqRNAzcUpCFsy5FAVICfn1ot0SIfLK%2Bwfdm%2Fz0meC9BGX1l13Jbb%2BwJQPMPTUmb0GOqUBg%2BkML0ZKEug3g9gjNtnwgGCkHANlgX%2BaiUtewgpupJaPCDU4PYuAeEQSFkoLYBaDnLQomESAAMF9k7Pzas9372MjmhjtbVgil7HYTNC1BEibi%2FsIsMZSIPgzHZ6OjFSykSgHVGQBHcHwcG%2BvoQ%2BINMjSdse6GVB1lr6QhAflD%2BPNs20lJQ2XFHpcgKJoiOCWn2m2IRUvyQ7sAjDNc29ydmhDGLvU&X-Amz-Signature=cb0bff4da8878e361a2587df548af2582a3d5d56c558b08311d7877adcb128dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
