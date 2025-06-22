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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFO6TZA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDc6aUdu3HmFbT0k5Y4VeRDssbwrh1deIP%2B0oyvHjrmDAIgLSh1octlAveX7lgfQBbeYyxonmRHK1%2FtD0pxwW5ufoUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSdjs38hHYBxmah7SrcAzjxskZ2qNTZvUT8eCRAhEPQYvyZab1sSUYd3k42WodBmhx7AFHnsvfecc41AXYKO2u3n3z6vpBeVfP48iQou%2FMKxfPOWtuYPomh3kBGqYPC7Zi03MTECgcgdX%2B%2FVRLLvnugnUCgRlod3BBxDUmD3y1sJMj8G4ao2RVrAtsCAa0p%2FyKng4%2FmZxniHvBOKPBSg2JI65eC%2Bkl5Q9IwSgr%2Fcv3wI7AWtbIJRUQhviGILfYWqAYHrLFvW9qv50%2FRZgJrKbHsa80hC3eBxvOE8jqJG9y3%2BB1VliHSeZ3a9yDxmMix2XRp1FQl84WEznY3aU9yAzaak70aTkPV%2F%2Bjokwgr%2BPLw2%2BvYr6GBmtHMIAvUiSRKqe%2FeHN1q%2Bv3nkZZmcy9C7e0x%2BQJD5B%2FPoAXJMG4LUl4tvKQ05oiPa6OVdpUpejuHUzoHkwWVRbxcvogc0GcF61MG18D9Y8WWVxxT2wJrxVZ7uOscY5IswyKf%2BaD8kl7bnPoG7snrsw%2BnNPXepB6yH7eczJkoMR5lzOmXRdP7G50BgbjSMBDKtAQkcO1r9HOKawnc%2FMk74ulfyVM%2FbQGksvgi2CmX7wT36OGibMrl8xZ1aw6QdQJOkcqYKxzwUx6AM8YxVY0CH3lUDig0MOyY4sIGOqUBYaQm%2Fam2HfVGjX7Isa5o8qex74f3ZLFEVvJxGZEGXJ5SAe6dHx8mwfhgpce9NMnIjAaDZYmnqGal9lXj7PV6YJn2MtvNFU9AkvVC8FP%2BQLjjnbM6t0Sl93ExbxKNo4ma7Cmn%2F5B4luXjlEW3D6DIwzUkNV%2FJTvOr1KaTxESbyIk7KXjVWf4aZFVKKf2VCQZIqQH1t7JjPjidZT1EetU6dw1VGXfC&X-Amz-Signature=4622ce4a0b1196392de88c1cb28b03947d94f3bc9a16f7ea423d0c34c7e8ea35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
