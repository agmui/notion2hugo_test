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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJXAD34U%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQC16KU14qpG6%2F4uMvqdUmXXpQM7EV7zvWFLi1bPPsRPawIgINav9uoStcoAXslokocr3kgi%2F0l%2BkZPe3ebRC3gZX7oqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAe95DjBXc5bCP54SrcA3IvfueBmg5scWD1Td0MsySOinpxPBjnEr3%2FTeMbGZ7qRZ7Ix1kIcftHItnh8%2FDgXb%2FwTkpoxcpGY5jA0ZBnoXv0JZ2oI44sMG%2FXy%2FQ34ITp1hJPLN5pt5BCAEUUaMXFjyhBjYK08WmYPZU2YpcTeBcefHsSx0T98zUxWlT9NpZlKMw%2F4hW5YeYjA2i4J%2FQqvZeFaevM%2BW6HdkRzK2S9kUORsRzr9rCMrPT0EDcOaKHHbeO%2F1afWEny%2BgaKQ6msxqELnBPa9j1GD6e29ELBEO1a7RBzteTC4bW0B4n0lD8PpaVsQ8mmGPRbBMQ01F4IncFOIZAMz244cp%2Fk77%2Bg6zAaAmnq5PVdLWYav4wtLSV0XKQq4oF2jkmt8e1BMHCSE6SzmJghSmzHNpEogbAFtApA7E5VBcmctyfyTXfQeVxnoz2SeexbIuEbHcTJVK7Wpku4o5FFJTf5uNZAHP8Y8X94RniLMOF%2BQd1SI%2F65sISmVzeafdnuK49n0NVwOBUZHyFEhdenX2lc1png1nhvSDjgeuRwte8ac%2BT8xPZznSSqSEGCPryTE8DrdVF8JhyZFEfOc70C6kwG%2FOqZX8ldGOSq%2FV55nym0hBvdjlpYVfF9TVNK0tGWo8abwgnLVMOKT4cIGOqUBsFP4cuXVRLOdBqJPUOXlzuYXSELcEY1ebRM1jOEPcjXP987vyd3jSsWeI1ADKIn5VGEwGlUkLZngyfQGC3RRqGPMM3%2FGBtXzh3nNsio0%2BgAXlzltEy4H4vyqNH18QNc7tPymqtZdD74H7S1x8Acgbmq%2BFv66oA%2Ftta5V%2BDs%2FT6CdtSmOkqv68W1Qg2HHNzbKX%2FmPZcDaNULnYp%2F9iHBpLX3rOU5G&X-Amz-Signature=6f56c8140b0096918ed437c078344cee56a0af010a3212310bf17a51c011e9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
