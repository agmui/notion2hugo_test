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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCIRIWW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFLU9DIFhYtkideZ4Q%2FN4YdlKMUzWI537Xw1%2FsVEkAM0AiEAnpPHMV%2Bx4jw5c78aSYYD8OzCtpLim5NqrDL56bXgT4kqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjZvjxZU8KxYo5ZPSrcA8Y6VxbTxS4tX2BNN9DovbmLignoIlect2N09ei4%2B5H14Fgtl4FHgdY%2BBZQP7rYYPno0pAqhOZb2%2F2yExtVxn0Lb0rvLUlWPqCcfShayIRiOTUGZB6Wd1sQpTJOBCt7iIOQkPphborZYiBOvLW%2FOqXzgw1Zhzv6b1im8s6yiGAqUNFTU6gjtaq%2F7G%2FCNY0FvHu3ZbFPaKFOIvZJxrWyNos4tFP4d9f208W8FCK9YABWvS%2BMILl7Uo8T2EiHLZsevDHuPIjNSKwkwNk0QT%2BDekNGNmjjiUHShjqgf5CuBtzEqfUeM2SwB33nhe7ximoyqBMeXy02kH0Efxf6oDhlmCyAar9uFuLKIGxC0jRm77Z7FNPBtCCrp7MZRUt78KELp%2F9PZY8JGdjSiVkA77wSRGmDl%2BNh2aVg2fFJ77VRQ7b3yAnQamBdl5e5TwAQwXZhMOQ11rZgqvlQTVXh2QxOuGaGx%2FxLLvkV29boDp%2B%2BCR9xIxso%2B%2BNz4UDDFw%2FYv%2FOkITShAC6Qh%2Fzz8WLK4RAELLp0GbCrQnhNi80lu6z4fv5oGVx2AWZlGO%2F6mPCmcKDuSa9JJuSN%2Fr3CkBAw8yF3YbOfI4DzLBuQ2z%2BQwCjeuB6IDOC%2FS481dS9%2Bf36XwMP6N7b8GOqUBXGlCyQQ74n0EVZ%2BgnZB0xOovoGsey8hpsfVBMINJvQTRlcSfb0YxUjFZTY3pUUw6AjU2z4So3oPVzHgp815ajp3qshJMD3Auck8h5mmvSmkYFopRgW1ZgcPRWBE9Y4Yjji%2B0SQH8nafH9D8dI4%2BkmvRh6m3Xj8lxi8ROXOdkQzzMKwdyJyq1%2FE6G50CJRbcemxFOokMoTC7JhYpSZgjRSMDKOZ%2Fg&X-Amz-Signature=e990dae14e8eb37b002d3fc9abe92329d5631224cb2d513593a1679e871651c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
