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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCS6ZEVD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM4%2FWoFvIssZofNRmc3VjGZhsi92FuxA0XLg9SBqDbJAiEAhh88eevRMGfrmpzqpmIAmWc1ChXprz4hk6c3hXU5PQAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHGKjdnNLPUBSKrCNSrcA70pwi2DKyhtpzFK1nDeHumOEo2O2eyz6r6AEIOb9YxqEZfJIau45R4Y2RdnB2JFTtnLO1jnYtwFITQaNN%2FSL3RfOcQFoI%2BckBGo6zuQfSROpA5ft6yP3IST9FvJo4Cj2X0xX6lGl4%2ByghgTtYlrkXpWcD88yDN9AkiIkteZvScJJvc9JHByzNOL4eyPfl5bH2UlyGVwAB4P%2BbquzpvMH4wqWoJ6Qh%2Fj0lAT4hm%2Fb9T5P%2FUlBNiD1IjI4FKctfvuD3MPQYTmLBFgcXrV8BR%2BYZLS5cbAsxrDXsHpaB6Z1YCox%2FOqL%2BkEdPNtdIvUnW%2Bycmro8F3UmlEaQoxtWSV5xkbxFUtYI%2B65S6ZVzLggmAdnSmfAAB%2Bva2g6CmEunXGWHuBHFtIL%2FXbfxWC3MwkP9qEqOXP6V4zM%2BoBMx%2BU5HzC%2FrM7%2FULwVaoMTuTS0rtSIayvSDHSc97ThJrA191JZIdh8VWryxyOv2slCIVto9KmVaoPnhmzd04RNve6WcpxuzJ0NXWKV0Zxe0JibkJ6brATQKHW3k6vIX8Ll8%2BlqxlAsnl4MdGN6Lvjlog93OxeUGTSUb%2FVFa6OwZmk%2B6z344k5Id7JspDKXLCgJT45SANRdXuXhwLl90MCtUa8%2BML6ey78GOqUBhY%2F3erDzOQvd4US807Wzodvzpo9C2PJ1BV9QBPTA8Hks3tSh2yqU88blq1TK2Jr0jiuuOCTadsTZE8XxWE%2FSIPNv3cNEYpZteKlopfsyAtanoIB9ED4edJPaUkjU%2B2YEofUL%2B92yj8tvjjS%2B2k3GSHJ1fUo2u9peI2%2FlFsg7yiuM98m3MM2vPkHWrbfmtZGSV4louSSECHIZ5rf2wfpXWWX40gTt&X-Amz-Signature=d6a83eab0245d059026471a061c6aae85a5a5e4f863a288474cdafccf02dd84c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
