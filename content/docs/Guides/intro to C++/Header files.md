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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGKQZ2D%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCICu1ElFn%2FqPT7eQYKy5gK2vkesZTcw%2BOPT%2BBOSMlZNCiAiBl4VDyeqqb1Gh4fV8rDyDC3hcCuUZjInPSdAzx9ROSISr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrzSrEX8dzGuryZ3xKtwDjAUWVuQrWJSEd22i0gazNw%2FLqryeTGWPc97yrBKG0DyKFRYNq0oso%2Fo4%2Fy80GRfiRZdCv7665AZdjq0fFlibF3vwbWAyuarg1BcQdBN1OrqybuINdtxeOm4r4k5vkbgMZvL5mXQFfiSYBsIM31PwMqXvNOprPlfzaYFchD%2BbxLYzdHzHLvMMYC4mHCqeeRXWa3EJITAWT2%2FAnHtn%2FEwbOR0H9cUP5kYcqD4%2BgFe6KOhBbVTgzT2z1jWVuXHx8I%2BhtD80ESlwGem9hizpun%2BZRQbtcE4ZUWtOQ73KoV4TGYrEBd0UpiT7%2Bhf7zEkPcsIN2ajemN0YZN8BXLo4liibRd1cEZFGkfEbUIm2388DLLZsUQF%2FspG0qMii0cvD8PDk3FPNnWxFGWmNpxWehgztgp1jbt3cwJC7zZLnhgSbkuLD5zNpnawi3CGSRDRSrmwW6vnDZ7lTQSuENURCmR%2BDH71PPQT6YvCFBpJAYKeWC96YhhQXB%2BYOZYzNeZjRxiRHmrKBYH5rMt4f%2F%2BMZ9TVkDz9UiZealb7ssiY6FaqamWzg%2BM%2BhyKYwHZFNlnoc0Cg4dZzJk2ARLvLHYCums6eI7ROET1QP0TPVgr4JydsZQqO3YGq09fiopomd%2F8EwzIyYvQY6pgEqkR%2BPAopkHjIFoBQzMjjWPT%2F7fg1MEtMLYJ%2BHMlNmo%2FS967ubP8tJr7P2Q1HF1DMbf07bWn%2B4KrczdzQP0SvQ9qy3PNVY78MO1C2pni1IKrsMykIBuyFEKheprSOqnZJKadKp6OptJpan4g1ea8JypIxq9exkUTx7s4kTi0BCA%2Feo6mL7Vyg74yTIVQs38vKwX0uATfAGY4GYerMIoAZ2msVsW0GJ&X-Amz-Signature=a881f34d9421536bc48aba6495dc19d37b73e1b1d2eeb2262b5f37c73f93241b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
