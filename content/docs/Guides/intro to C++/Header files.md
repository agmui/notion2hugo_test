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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIB3KLAX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDJC3K0gXWOgtWDco1iP0Mo1lMHixSSjbNMCgi6RRyATQIgfOyCjAhIFINo64jObr%2B4Vno4MulN7AaKk%2Bqb%2Fb58PDgqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw3SxAcP0N7JEzwiircA9BgzMpbSKt9TWL%2BtbXHeCIZHI9OmK1aPg4mCYBfi%2BjEHfJ6xTpz%2BXT4VQ4Em6P%2BfA4F8gIUS0kuwP6bH3a4Ie0asrREIdrb2Gj7xvTAcGMhdSHKv5esLrV%2Bs603lm5dx5Mif4HqgIgMbw411WdMFrsyRVPAir4LFrQ0%2F8ehXgVKV0ZotWpl%2Fv4M2pQCoUrFwGBU1Q4FDxHaSUnM7%2Fw%2FrYthuLTHfdZOOrYGXwgEb5BEWQLg6nhga4f06mgsxKuYKi5S%2FAizRCPuSugR52bzYmrHBvZyEwRMvJigDnV9dyyQq%2FLz17aZpMbSDBDNS8jGLOi%2FyLJw%2BhV7jauTF7QQn4gyV9w9D71oHmnhA24xNj7Yn37F54WXIv1I9zXOqsO97t%2BpcJStTlccEOGi10mGCHJ3%2F83CN1NaAT92dWmBi2YKHU4Fyb23X0Yi9Ro6cQOKpr%2FFRBZLNct0LMvDFlt2IezwA%2BqCUIFPmbXss1RrmBCacTV9m3W9tF9LUor1LUj6dYWgK8E6DAhJss%2Bxja82wJQUdyZ4XhwXbum7f7Urox3pamLhpAsXBjPiII1ThjS%2BWSCcPe%2FfwDPuG0%2F3gPgGjV38yHFShcmYehm9um2EpfjCfYH3TP9DcO%2BaPTiJMLqxosQGOqUB%2BDGaWlLMg4FmqgB1LqOKU8EpozgKo7qT91V0QkoqwGF91%2FK8OeIu5MSLxUk4I9CULUKuJKkzYktQvhpE%2BkMYtlTx8FEvtDFnh6BOnwwSYVXlrMYPp0tr2GWwgGz6FIm6lpkEJukaA5fsOgMFWUfSPOamjY54evJ%2F%2BaVNORFW5Nbo%2B5ewT1j0Kl1TBL6cqwWhHSXdQYRN0W%2F9ngx5f%2BcWlEefM68J&X-Amz-Signature=5bd7afa2f1876666a7019a43a9a676657a4320eb7a1a84aba71b33ed4502f544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
