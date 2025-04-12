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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTGHERTR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDH1NC0KkmZdrdQtAWLOnbbXlbmr55tmtOnsaY9Bhy6oAIhAKrOvGPXLkhZ0%2Bg91IhZTFuXk%2FiZweW9rl8%2BoZJBHB8qKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxv%2BPZoxRkXwlu52rsq3AP5mtv6cssqi06lnGP6RM7o9OPNZZaHA7M2HecchPyH5CPk7n6%2FR5EUea1EFLuHghQqQ4QN2dHtPph7AiYEH4bBH7pZcl8MG%2FSGgtjzSjJbJMgwoeOjcYY5wU5vtJwxYkby4LccoJ6DpSKVDB1PBq%2FUtEj36AIRc9jQAeCSxkjAjxVbhOn6Zut78cmZWzJN975jKuhpIBdI255jts0N%2FK4Zwll0%2FD5sTeZsc5IIOnPIp7EWLCUgjlNAmHCMojdZuyKW%2BaslasKEXwzbIY2G9G%2F1YyLAfuHDmLg4M307RDNSywXkOCzFOfUZniLeedpkeSg48Cbjc2lnIBGAvqLNPajbURwO%2BIWdQTkD9fLlEQ5o0EO0XPjPrv7KJ%2BwkZ9KEHnD0om78Z9KL%2FX9HETLqP1yYUeix%2BvbP5QmZmYb%2FkrbUaIFUEJA68xukpNobklIae%2ByyUOyyC9woCoD5mrIb5p1HsU4quapqkHVX%2FQ8vO2qvgaYaxz88HQvzQgDKs11qBjEl4F1U8zuNk2TPKW7UImD0wqc6lEk1Pe%2BIgCb0hgBNi5llo6sN6WCGtByKk7Ods%2Bw%2BYNcQIXa4H2T9hqmhCpgJDFpIR8DQOc3FhaWidTt03ydq79e2wXJ%2B3AcWYTDx1ea%2FBjqkATn1cHN7%2FZh992J8lP3YRC6MvDCOaidM3ocZ2mPDVH6ysCZehV6ONbnKKNsLBfRgKujAhorrf4cNNDVOKLblg9L7GjTqw8r5DiF8G%2BQnejsgU%2F5Pucec1g94QUZsW04gjdx0DcsFYR5iOsY1dieaKFgfPOI6CmmDv0Fw2eZ8ISjCsHVzslyT5u9Y1iyZ%2B68eBAwCmRBRvE9W%2FMgGcuKq34IZDUeo&X-Amz-Signature=add096e69673ea9cc4b0edcf6363453082bfa4cf922e22346146df096c5d7962&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
