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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH67SJJA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T032028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc6Y1FwWZJt6XQiJ4E0aNcp%2BDrzXhcuX0eKkS0XPwFXAIhAKLl3Gd9e%2B112cr3sWaMAXGP9%2BzP93he0Z4XUiXcC37GKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8ACHus7Ut9%2BQVRGEq3AOZVVYoSHojFRM7k%2FJaoYoA5xCD8NGtnR0szWF2qRtvkrN%2B9lKf7u6ctEyeZSzAvSSN7huUk%2BKUnN3YGOXaNWbRG0DiejDL0e6pYXTljNkPkhIOx%2FSwkztrPojRgnnwpvm%2FQrWswyrTptOV3m9B4yZXt6Xm9Tt0IARk0yiRSjFUgxxH%2FHA4r7foCQd4K%2BlRNt9peBg1GFk6BQZ6eXgsenYs14hCJru7H2rn%2FUV3s3dLT4ryBq1zUmShXc%2FD20OCcFffRHOQaXEckPsIy5PS2PzCFhpVh9icTEyIWitFll%2FR3Z%2FSuX6uT%2BPodu7vnMvhFEA6Vn7roCJbMGWnzIXt70hszxlnZ%2FbXv8p9NKxvTJfXvKQMZKsvkMSYYN6ly83M%2FldxG9vZALPZdCYWiXCS7YjCxTxB3JL810tda8Ejfv4t5pxQ8%2B0p9R9ekttHa9A8%2BTce8jCFzsIFbFqH%2FR77dgu2kJ42lkipJ2fJuOy9onIx5c9SOYnojYhkOJ9VSJ3DCxgDSZDO2qWNmJ9jb81i7y4a5aAFeDisSF%2BmCvjBAD22ESVYCfQ%2FkiBIhLB2tY9RHV4P7QqgdxW3LiMtmc9qLLIA8ED8j%2FBZ7jhqbP2axTDIm8iffojAvVqMK4bDAzD5hsm%2BBjqkATwOfhG5kddkgCZjtFPkn%2FqCk6%2BOlc48R4hkQO9ZCnU7QsJPr9J00rZpPxwq8dKprNIE0%2FPlBXb5BOdiSlVZmcpfYtphKMcKkQ4qQ8K2dETToDdkRROK25ZAdeDTRkNvaf1Orgg%2BhOX2g8j2ZAPpdYOusZ8tgTyUl6qUb3VU0uF%2B3UHYqwPRrgdzKgLCgBOha79HziCRPHXZBplCFqAGdua6orbN&X-Amz-Signature=97a81ce25cbb269c3c18df72a877d0272ea3cada385a674c3dab14215617a2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
