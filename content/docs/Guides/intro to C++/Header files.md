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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LN4VSQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBs2NFrU%2B5oNlCBqELAlsB3EoFhrrhyxoTLjqAU%2BVC5GAiEA5xmwRjz4GJaUXsuNywuLCEaDe2saSueb6QHXlz9F1xQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDTPyftEpZ0xVz2jCrcAwGE6crpmAOw2YhRZ2CPkQnlkOQG0l6cPRpRrrlWi81vAWRJYaNpPT857paLnyOQRYguad%2BgepqjOw0XSEc%2B5LaY2TstALYnk%2FPc09bQiMcfXbQtcnGQvz82ozx%2BBBDEHifIFJvrszu8oXJXBxhyVuNiTwsbVm%2FMPnyt5M5M5dfLUjulJTEHPzrkAiT2incWfis4x2AnyvsHzAnBN%2BL8%2FfJpxidCS6iiEddbbcvPysWbECx%2FcGqTYiG31M%2BvIkOLs38ZBmRnlIhxn7Dg1yTIB5%2B9gl3OfHquOTEX6dPgs%2BbKzLjqsYSWBh7sF9b7yOFgSc4KBVH3dPcU5PesyQkOUUKEgAdNvHHwjUE64LUBiA%2Bq9DhnVrxEagE7VQG5%2BxCNkOh6lDM4WxWEmRJia%2BOEgC5duXrh9pCLYHoSad8w2DZb7BiWq%2B84bk9LS1YSZ1G17%2FLornFAkNxBqjXdN9rDLoP9z6e%2FE5mpvp3bE1E1Q3UUXfBIIjdOOcXDRb9WJxgsAnDrZaKlHBP2O9KWZ9Z6tGWutltc9qssTk80rxLsnY0iOdtJOC%2F8Lkrmpmdg3QwP94cSHmC3XFroaaljLrPt7gtDMU%2BbFbAWWZw2Oqq%2F%2F8ipx4LwiSb51nrO5aIkMNycu78GOqUBru8E%2FJgO%2F%2BZ3HiqhPtp9EJ%2FbPYn3YsqFZOURzBT02O2SNO55cEOCw9OeI9z41LtjAcgF0Zp1vxU5%2BlMpV4tE7gsTTlfjQh%2BMAXp%2FB4gP25jUTFUsa%2FZ1NZS4z1L4fsQEFIVzEMdkctk5jvEqqFEWwBMWl7EHi09lz1Pn0SrBWQQTsfN%2BUttCIMDYofhG7RPLBmJONJMNPxa%2F0UuzY1mZUq%2FX0eul&X-Amz-Signature=c59f05e7ba4768af40a734655c699349c9007a2256ba9f0216c53cafd76c93e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
