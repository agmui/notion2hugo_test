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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQZ4ZNAG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiz7dBn0wjc3%2FcYGbE7ug8Jru57e%2BBNv8qZj53AO3OqAiEApmVGYb2aeShHuj6lm7TYRCvb7ksHnv0ngmmVTueBY0EqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxFy4JgGavZZvrjEircA1d8%2Fy0lfWyooJI5h8ibKZfBAjEQW1XczmyfpHMV3%2FhSW6EqtRWUVFRPcS6uGKEtQSVl2hhoy8JiteoSlGfTYUVZdZXcPrXbKgwlCiEYx9BMfGFXsf%2BMwyyCC4lbNMdRCewk2Z7N2t1GFWyGartH1LljfsHh5lsw2j72slhb%2FKqC3%2F4gmL7dZyq08l5R44c13tUZow9A4ZwpJLvEcFvx1dzI2%2FS8FlL1eXXrnT1SBxTgddVP9XUrcsWwST5nYhjL0TwbtkcN%2BRD7UphKswhD1VqxD9HtGaxhW1QFuws%2FFqkL4v15%2FqhTs1%2B9Mw0HACBtv%2BX2GPGpiY1eCn5waMPNVSGV51x6WquYHmoHJvO8eNla2Z6yyOoHKt1Um%2BbjyVqeVvWpDxuP4k2CzIIwMSEOi5PlR3EC6bNaX3fyPlgnqnECuMXhyYQszUC%2FX8soyEt9xQ1z%2FC%2BVaNUL6xHAqPcvtHxbIa6kV07QMn4Bhtb0P7bFl%2BEEaokAB02xhjzKnaqMyJf9xwVCEKnvqsNBxchWTvcslVltCl8qakHbxxuDSv5OKNgvKMiS8BUG7JrLifPVUK%2FcNuS9CCcC0kPtq8fpmAM25d9B5wpoei7%2B5rJ1eZtC0hTSBBRF7GGnw%2BdjMIqSz8IGOqUBZfGtz1wLAOhK4ahbbAf1WSmHDncUOg%2FyfwsJ2oTsqcxRCJz07HlZOMoPWuy78jElk3JC5KOgqstWxKNoY5dPpQHXwiE4lR7sNgJz0%2F40%2F1rasBmDPayQ665hvuQ4c%2FlhZfHEyrDc4%2BzFtnHU%2FMbi5HKH6tzJweZFXhQkh%2FuLat%2BKEp7VXKOnDw7pgndHf8oSp8GUSORnONEVp15oMLwrUWK2dWef&X-Amz-Signature=d1b1071d85d4260ca70742e752a117ed8be8826e034f47a24c28e5f8b142f742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
