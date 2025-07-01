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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIUTEILT%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5fBB5nuFqf1JR4yKVQlbhCbqa6wrTB%2BPt73d72eOvuwIgDbgvrCScCN%2BUr8NVbNaYzBr7eTwLnxoGzstP%2FldFI0UqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBblwdRwz64nb%2FF76yrcA8%2B4r%2BcegFwJHklYAs0pFdEXuZSWCFZh%2Fpdutbz5jee9CTND2%2FWSKyrSYZsQfe3dZ0scj0lAMcH6xKnq3iiilMZrE0xJo3p2Btq44a%2BlssEUMmduSVP2%2FekkENAI%2FiuvkYEmbO%2BVELzRuCnM6xdOhGPq3%2BsPW2PuI4iOJ%2BT4LqZvGMfbkR1jGzoLrHKFc%2FD2Lb8xnQQRncVhgOeihUPslkBt%2FxFYFa33ceu83o6sC0g8uwacQUfR3TcxCDC8xpuqbF0fhQqcWwPJCZV14vTx3A%2BrDMCQC4Hlw7scUnZmy4sw3PmrddoM7maBvVE%2F%2FDYBtHmn50KQfNYv8HJ4Kh%2BdFSw%2FrZLN2OH%2BeFDJALTQ3VQinLd89AGcwHaa5JXlRdLIgjd6ZITX%2B2PyAA8mLypOXp2nc2q6QC9SpTS%2BOGbg929pBY0EKcBNUwHF8LXIWhXbm9%2BlD0qm81gZlfTtifjSyvFQRe7NNIF0DVSj2HhZ1w5WOpykv4nO5fqoJdA2DQ%2BnB2W7XJD1daKFFZIusbbKif1oqB2PyjnygkIgoQzeK8y96BbDHYao1TEH8Q2kPcUE9LFqvyBcsWgd%2BzfX6Zy7cAkDNqWmPlkOJwDZw0fP6sZf3tqqONelr7YX48OTMMSHkMMGOqUBgqjc2culFsVNA1P8cQGIVBMm2yNln39%2BaqfzRkTyl8rVUX6vHmKNtF%2BaYJ0sz8520%2Bpm90gZWfFjZLxQ4xnF04U%2FftfZQCkVhE6TfsZnHWmW7fN2yrWe%2BFXxX97RsaXK%2BWP%2BCfYADl2Ki8LHxG0w0igi4ItBBhEZM6q856x3A0ZCmvIZTdwjpPzB8D1CuahVS5pv1mCB0DOzvdK0vlbcAw%2BML4jW&X-Amz-Signature=9a5c91c61e489014ca4b794215da676261ca60b339b6f891c591eb350f0e2ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
