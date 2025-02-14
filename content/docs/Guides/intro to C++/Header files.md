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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXBQDU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQC28Ihmx6uOsA0H6mIb54ypzs3sH0cbJaITIGMLlCbqDgIhAOhnSi2GeTJUHDb3TdkPTvQxGI9SQ0gSCPtudgfIWNkCKv8DCC0QABoMNjM3NDIzMTgzODA1Igzs1mv5%2F3skcVgb81Qq3ANRBMGplcCZQAwBJhMnTZk%2BcoMxy4LAztqcfTzdCLSBNoGttw9FHeeW%2B0t0u%2FUEDDAhpSz%2Fm7nBtjSko8oQ7WIOAO%2Bkdk1ZlR%2B3pTjtRjPJAsthAsvgP63vuWkUFQL7nR%2BlterKj%2FWEwvoYQ3JFfLziaNnIEsfAOZ7DM7AnJ4RWd%2FtcqmlNfC25YQ3Gk1CAo0BW0ykr9vnfOdkPXjyYpLaMNegDImmXDDPzqUU236UiDgWBiwHhPqG%2FhxzeMj3Ba%2FbVgAVJWVnK6TOMjg0n9%2BIgYxbe0lA1qNUyd4rNOfBAixNeEZPsqeztR7Kg0zMJ0TeXOdIU3SxmaVJ%2Flq5u2hXH1KgaoR1cT1gL2oRRIJeklw1wpgibAHxjYGhWQRcUW3TkCkn2tpLZF1OYSlvWrjxjyOdu7g2PYNOMy1%2BtLVaDHPpZVDSNkIheqgNrTQ%2ByqvnGBmsV91td%2FOCp0aY1WLgsBtOqdlbXaqy6PL1qcXNdnQxjb5DMr1h4vA9P0Iq%2BO52QxU3saFK4Nc7rQeE4hAS3Z2qsIuqOa%2BJghj8VV6Sxu7KBKIW4km%2FLT3HgQz17WDlanF8%2F65l5ud1zQAp4jqBKQPH4fsYwNF68%2F0Z8h1n2DztTIXMCzfTfLHFthzDe6ry9BjqkAc1oGmUhtuc0U6PaetoTn5vWb2WnY5uvQHfxyxpfHmt9xd%2BWDD%2FZy7B5rzS%2F%2FDrJMcG09fP1D%2F9TPdLuUHbe7ehHZHyq7RM7gAYbjNnCHwH8Qi%2BGpXLVIlvRswbk5pONIhvxpaAev3fz7Wy%2FR8Qy%2BwQ2X82x9nFEcFDa5S7pTpT1PWVZTKqitwHOpQhulg4qKnW%2B7Wot2uk5F0Cb14Cjt5rR5INQ&X-Amz-Signature=3bab7ab136207f8c1a089ea56e3f41c9e106dddd7bfee790019d9c2983611dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
