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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6UF4FX%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX1SskGdnL9647kvvAfh92fNSWPQr7dzbHY29yf%2FZ3JQIgU5ryIIKQqXYBDlvy4PF1P6LJJsuwb%2FZ%2BlG8ek3oo65gq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDDlhOTuqa75Qg94%2F3ircA5K826q8JK4ipt5sWoazk499DK04Ob55VBHwvKo0qbK%2BATQUEjNRb8Djer8%2BS6FgMe0CdSuo2R8kSZY6mR2cVCPo09fw9Ox7awrEgrqgko74YeiwMWpXKC205HkFiIe4d7gPPp522BzQMM7Zi8Cf8RWCCEaXTyDtZIs%2Bjz3792x6w3sGgtIzvmpfGku5GlDzSvm56tf1j%2FtT4Jj5n4i88%2BnW%2FFTuf49%2BpB7fLjK%2FVBkOwNV8JjMI4YeT5knamUr9fitQRhJXdFxSAwrK%2F9GCWHlk7DPjjYdQXJe24mq%2B0S3FsnVb6jcY3ycSR%2BniZFqNQ8shaFeF5zCzxKM3q4L%2BSjsMHtDq%2BNkYDZMN%2F4x%2FyIem4h9u9siuNP7KyFPjIazQKFS8r8m37eqMG2mObuabAiYMKniy0vQuKsrry%2F3Zys0DRbiQIVbprOJWVge6nGNi1oMvhzin6E3YlSVdn2LnVY%2Bva3VuBsah%2Ba5auyZ2sErDCSl%2FWFBZ7NMq853bft6QaERA2H2Qnz1ZFfsu9feOHQ6ZsScG7HkKUZjBnXMTQjDsAxzPpAZzMd3ZromppeNnjc5jo%2Fg2U02fVn8ZWDo9%2FcGe6BAciHK81KP7H4wmLuTGujRgrrAFFZ9e1KffMISiwb8GOqUBJA1djOZVJ%2F0TpyUut%2B8ekh96jUswAe%2FsFM4HK8iFQ6S9GlYwyv%2BG89SnVKOT2wakd%2FQ7uRbjY7LYGot9HyPNcoU7rwmZxyiAx2xUhSjyG5UXQ1cil%2BSX9RKLLHHlSVjJGj61ngnpd3VwRmj%2F2y4zYddlurqlwCHG8T5ZSo3eph39XH2OgOmVSheT92yfuYEQu%2FpC0ALG2WVBQXgda6ANMtvp9OOv&X-Amz-Signature=d3588b275e92f7416e182b3563b6b6eb16c6f65d89de773ef4236e69ead67434&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
