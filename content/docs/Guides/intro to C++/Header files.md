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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJRNKD6%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjxk2gdagHeLlNtYmvuy12qi5f5crUcEkRzG1FZSAKsAiEA8b8GQfsEEwgqpEXCw7XTORNPMISctj4mViOTw9l2beMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrX%2Fs0PxNdUj%2FWzYCrcAy5mEIgPWhyODb1x4G5S1fDu1Ae2TN5QTv1AXPrMdCHwTJCA%2B5bjzcKiyfX%2FO9W%2BawG3go0y3DKsdAa9%2B4iMr0I%2FZU1o%2FPjp9nJc1U8FMqXSnKv8B3gTTVgv9D2%2FwBjMvxDw28FxffHH6ouU7TPZg12w6LC6rJMwGUrivqmOb542Wlr1WwoZ1cBKmv0Ql5ixFTk7HxqpuQdbC46XfJdyEKLz3Bc%2B%2FVWO7qHUZUTgKZYWqmi%2F2lA3XKJwm%2BdNbFaX4vbxP6bFteXCbjNa%2BaLoFGFMvkfPOtXXVscWpZUlOZmJTIyCMLMgo9S6c4BaIHSbPCNCfPYVKQ2YeplQGv8lqwjCbtx%2BYnuPuF%2FiCsy7jDNZ5KGXcYlWpKQmzw8ClknwhCpp0%2BnAANdy2V%2BTvRidEejk6Abc2ddo%2FYkV17DLAovxT3Z77TKRhI%2FDq04FcNRXmVaeED1oJKbB1QR%2B%2Fy5I2D3978GXYIj%2Forb5sNEFHeXwKlTyyaLDZ0Haedr0wFfBjawE2coq%2Fdu5WZ%2BbePmwiAi8hjlJV%2BGba9GJj8zokVDWJSVC%2BXgnjqnXKaCk3jNUOBGjjY1omQj0tTDdChDVBGoRgCxo56UiAZ3RTw%2Bagl3wFeVwCnMDd8Y%2BE29fMJTs67wGOqUBtri5R4Po9tedTMyPFnbF9k1WmTfzXoWlozbDF7CvDPb%2F%2Bs3zy1hFpmp1QTgxxicxNm3rHwss4zOl0IoLi11%2BJ2AyYLMlrsCawoBH1b%2BYxwLT7%2F03UluZH7LIJqRuyXFEHBhgmNLbubLhZxah%2B%2BwrSesVNVGu3%2BtBpZ2PaGTUckDgWomNEM%2FFp8bSptjBRhogGyGATDP5HcvwKNmTrKYuio4ZNdXo&X-Amz-Signature=5b6a3dfe6d69d19432527aa7deb84f62904c6185fd2181e503d7a8bfe08630b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
