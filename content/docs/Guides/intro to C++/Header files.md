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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECJKP37%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDvLT%2Fu24Optsogx5Uci2l9M92NSGV9%2Fp4X4FXVQMLpIAIgf40dW4iTU2ZcahfmIZ7tcYoJzdKW8N3WEIIvLJJbU0YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7HehvB8ENr7Jgt0ircA54eH2C997HODR4c4cXcELOab3XngTYraNkmrCl4sR1TT%2BG0C66zDd2jhMhzXyUOPcyZqBSuyQkm16VeezP%2BlMswrrzHYA1rMhJ%2F89VpiTZ77%2FWEY4txt7E%2Bjc%2Fvx9nUnvsGTr7dn3DVIcUfGIeVqgv%2Fm8cVZr9%2Ba4THBoQFT0J%2F%2Btp3VUSQwIcBOuOS4yvhQIgFH%2FTHGXafzB6Qh3DMUMGthY6WNKsh4vpnJKA%2FobpcoI7VNQE3Zi1nXchLAoDRYwG4YCwlYk8Zj72ZxSsBP2%2B34oVwOHfpUsZrp4uIYoCH6xGThvRuRMlsGz6vVz3tA%2FfyFo39PKuUNtVasKp6%2BqDR%2F22WXNv%2BDikhH%2BFHBSDKUAe6wtJqHaPucfNLCj%2B30g4wn4Ge%2FQ9mHirzIes95bVrto5d0aiqZ7fKf4%2Fd0vMrTa1JsWL6sx%2FUD2WphwCEA8KIYVdG4YYHitpfAEIr1pG28HD67tCzLHCSRAxVEHzTYnRU8Wjh48n10dgATeCTOe3qgGtRyfcRuOHrMbumE5HF6WB2kYjlT6gmWg4GUFLL4v1s2OeAsSwoZPr1f2zePhqbSBTkCkZgMW%2BmDq2%2BCbDvlHo4MoRKrCTfKLXedwO8IQclPsCPbebRtfvXMK%2F2g74GOqUBVBNaU5TB8tPSoGNV4j%2FDfXnDKHzaijCfrHBZUy5nyD3nTIgZFugBvum2nxRSaGAD4cjHLnFYeS6Z2yeW8LAYzdP%2BS%2FCmaiU%2BK0Si8g0l2nsLtlxxlRgqMbX%2BO2ZVN7NnqASVzocvvjLGfvgv4BlrChPNgmhr76bm2igE4t%2BqGMA06%2BbNKmtqkqknjhWoLn2j1bmlWm9gdmd7cG%2FaMab9a%2Br%2F7OSX&X-Amz-Signature=cf1548eab7397a2b23a286d2bf0a91164f3099577ed2e110333f2a8f5cb312bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
