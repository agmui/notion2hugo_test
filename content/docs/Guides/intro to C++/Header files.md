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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2ERRD3H%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T023015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIEmB%2BJBqjNIW8d6BcPaQPIE%2B3NUCDzE%2FQxdRTplKJr1bAiEA4AYpm24aVv5p%2FhnyG%2BKvgPYf%2FMz43n2tAM5FJYgrqhAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS6JzdscxOr7tfLUSrcA7AL6r7SRGvrYIAwa%2BKSf54lnYEm8RUPr4VBl2j3v9qXh%2Fok20ZcVfp369DOYl2tFO1QOXVRfe29rZ1d7kEhxaYy8aaGRNUyNxSUyYTnxe4yiOABM11oWWb%2FpKA6naMr5E77e4KrtW7ZyTC4toSfvtIO3ScfYp9F8wd8tBjBuE1SgGQ%2BYXW%2Bw6riBnCcRl8YOOTaRncGo2hWHRFQdue04FFBoEgq3bAvNco61Uv3c9bE%2FGEeAoGoYxQH2bsLDvICpxz2R00VF104lYt8RLfE5L5%2BGZy8caTJHd6YMXVoWIua1VAT%2FwKbPTyz1uhmSwkZjNwyVaj0QUAtxx5zdKqYzXGLosxSK9Fe4EEM85hN1P%2FxR24qcIHmMTseZ%2Fl%2BoS02K32c9w4QyBnOfGF3THNttmaS5r0WPyI39wEBguxLusf7hSFm3MEtVDKVbxcGxd2avhQRsQMSin4j1csVKiX7kp0cI9fsqFSc08JgGmPGOrUrOgD0mgkxKdEa7ubV4ATPoYsbfRUhxpz8mBdIbM4aBqCzjx981zvC%2FDdzg40Qcfp%2FuuG0PdnsBYBaW7uxlRfvk1TnMGjxN9DAmUk0ZHgqYjJQZRF3rEZSFmrFlkQ3Ne7%2BBsn2Y5UgfWgsdz29MJuM%2BcEGOqUBS8nSsqtkj5PM6u53Qo86O2W6sGiJVSXsvY3IVkgO6RTlYaPq3X%2BuXSitJsoRgossO4WPixlflvRKcFMQdX9l67cOZ08cyuTY0mXuR1Ojjwk8kbOKKRfpyOtQ77QrzjI292Cv5cU20Mryb3v0sOG%2BPx9UgP%2FRDQzZ2DvRBdXmXc5XlrrD71CPVUAZ4Ohrkud4QLrLVxlo02vIE3hDYSlK2HH8%2FaeA&X-Amz-Signature=417b1a636a98db41ee00bc71873b93357b1e408ffaa739b82a9b2127bfb3e807&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
