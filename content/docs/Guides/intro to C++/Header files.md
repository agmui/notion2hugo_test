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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LJAJ52C%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDSxszPJ%2BAz4OHXaJb%2Ftv2KPvosjNPEezhwCKLcg7BAIgFMqg33f8ad0jBUBABRkPL7WBlkiqDFGHs1%2FHQaWDdP4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHQXV8xemXrKc26DyrcAyIsNsEjnQuANpSx7AbzatPA1e03PZ5ac44U%2B2d%2FkXCTRzQoY89CnXirLRC4%2B0Yh%2FZFDEoWwu0myI40tW1k9WWUeTBeFb24%2Bh%2FrvzeKXa%2FvQSLVYtoOY7UPM4uYNKX%2FL3l29sGTpVF7MCKlpA5lFlrz8L4HoztASe0h9%2FhsrlMNPWWZGljF5zZS0NNtQvU3jE78c40QYtXaHqYXFmAG8wUV9WtskFvgXTNqorEcmIDkEebvUz0WJ2EnnKkMu0Dn1lJ6VN3AdbjDaBPKBr%2FMMDMWqpebY4TsTjca1BIk56d8PsBWPWaWXDEaPVdYsftuAXbedKZgtSEOfgDi7KSt%2B4G829BeNEYzyWho8jmCFWwaJrv6Z7J%2BIxR%2FL04sD1S6wYTBz%2BewiEbSvoBiOzbm0DzvcLGo1V6vjCb4mJw9ieaIHfHca4NY7384qqY0dryfVv3Wm4YD1gzkJlQ1PLPz3R7%2BKiDJYnROYaJMCxJioDNutQhMgdO0hOWmIwgYQi3LRdxOIn3Cv77V7k86MvLzGTMI1Md6GTmEYXlvyFNNZ3COUAA04O97JOAsNn2V4Jye7BhtXWofkTst8Y055%2FI1G0NYMn9%2BMYUEzywHVkltWVcZriHy8oagITI2%2BdYZTMMT9rMEGOqUB4fHXtvv%2BpBaY1GK%2FtyTdJIDcC55gcY86DqWfIKxygMhVSiZpZNDRcah0TR00ytHR%2BEBJAdoGxQgEV69fhqsSiimsrgopkX18%2BK%2FO%2B9LuVlJD5TWsJinAvzX3VFaPc3rTLEGh2lF%2FiLV2zTXxwp%2FPdUY4VNiMnipISzn40C7MPdWm3UiVkd92sB6hEOIyxYU44448d8haR9flrk4K2Ii8UahbJgGT&X-Amz-Signature=74d00ed79f4c76e24a4e8566a15be58d5dbfcae8f30cf6d58efffc151fc9d4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
