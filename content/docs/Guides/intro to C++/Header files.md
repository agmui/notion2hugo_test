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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZ7EKT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCytqZHs2KaKXTgjmg8f2oSRAA9Kj6%2Bz5yGHaQq8wgpPAIgfzL%2F5Oho2XWEdljPymdsN0mS2y%2BgHt%2BnRepXzcgJ0Hsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDDDYSuUejDtVdwFJYCrcA1dWhK8eMUjOhZIgLETdnbvXYou5EVA%2BxHImLWGekWWTPRBca%2FZBDILhPARRmO31qL%2BEtiyMSmL5dPCrPFmdXdZmj3ok76NT%2B7EWzP4uyB2oc%2FlXBA44eEyU%2BcP0W4%2FQrO3EcyGN1m%2B5vQiscxbwX0Bh56v9SB5B3ZcdsawqGlhWmZbpkA2X0KHu4%2F2LlRoi212L4auukOPug1LHNv4H447KQWu4btU18K1Clybmr7eiK7BsxGXhKCV9dC2FJ7ytMHYy7ye%2FGdKdziQjID5QbNl5gfBFPFQ6VlWZqJT2hbLC%2F7FBs5lIuqPQr9ItjKqBhWZJLR9ZOn6E8BV3hkWGuzWfjq4nWw70v5F838Jaz0MoPwdx6cwTOVqBKsDQ8VTb3gOeq0b%2Fy27Qu6YgjI9M3z9tBZc1T38Bp2%2FNJv9fbgZ9rpJefEm4TKk8cyETPbCFSD5tGCCIbsEMzsLcXImFEN7M6YTNmvbxnSVnkVlKgv2r14n7CYs%2FC5IPE7AGk%2B%2FuTIcQoQG%2F1GgPhME%2F4TA0bGKs1f76zqNikJNqc3iygngDMoK3%2FYDSxrQ1s9ybgvSre3jmP9f2hhM%2FfFAsjPjTpwfWphYS4phcaiObPwZvq9kvnMDgeIumhhTneHKTMK6vrMAGOqUBI6bR8s0w%2BlWgEPFYMEXdm1oR8RjBgmi1Wc9ZdG8JL%2BawSE%2B6SkeszpgLHujGimXh6HoisWn%2B0Ui967qPF9%2FkRIQ%2BHu759CaDMIilMhf9QdWmzz0gOYeNN89waTo3DoC3ckw8xMfSNpvqcb1MrXEKRgMywsNyRPAqcqDdxR8PIzPASfRdtVOntlwQtVH0uicZmUp32%2Fguxq6fO353q0OI7cuNqQsS&X-Amz-Signature=95be5e24566d7aa6e9e628ce198eb436b26a521b5cdfb5f14ada3d7b6270ad4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
