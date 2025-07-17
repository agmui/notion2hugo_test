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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQ7WMTH%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T004518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDIGJ6lFrjb18wYllU69UWq9JmhIjBHGetxdi7VPBYpXAiA707rBPiA5pap7ogOOJtIqEBVx%2F5LMhLcTWk7hLpXANSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM0ucc4%2FFgtCiO1ehaKtwDEB%2F23Lb8i8oC5MhnZchQM3%2F6VxHoADNLTlGJ09iRGevI%2FpbOXw7WYQGHULn7Z0jFDBi4jsdHBQ2iyQaG6NAAj2tl1ucUoVvZSfI5KIiDV98BK%2Bv6cubvLIpT4XYgrq8xiATjIaCbd01%2B8hfm7nFoZdfhsNGHrggyFL3LiwE3ahbAbzOj3tcgub9%2BhsPPaJld1LL0nbJbsAIM4LqWZoLFbtNS1ZUklw8SwKvOxYw7DaEOj8uDAcLjILpv7NCB9LhpP62XFcO0%2FCIJhtvfUjjVyDmevd3cZWRRnCcDNUG1foZtquDAv%2Bumjhe87e84TqBsJY%2BJuYyeP%2F%2B9e9uR5lO7TFfuv25nA48%2BrG34aa7B7HE9qaXtOjomKKCdJR8v3fwZxNTEnMxAqtO1WHLITfoir%2B2AjBeWjsOMqqkRhUjO7hd1VRIvk4dSgPnamMUz2OENbs5oc3I7ZLpu87PfqiSXeu13G6MjYIL2CQN8H9PhU%2Fda0t1ftTEGFquTmoW6p9r5HUQuwgF5NMlaekutZfMveaeUAWjhVCW8D2P1MCSQOV7bIlLXr8deq0jbrVWOCT%2BRLGWU4CiJjAd4hYHC7EGpFS9KwV8onl5yUpbIms5qIugpSZagU2hWsOXM3ekw5%2FjgwwY6pgETm7gOWGs1qmR4eGjRI9KdsAbnte3gfXTBxWEiGlsekdpdaqTD4xH6wBQWjYTXemBD%2BHYu7Qp71caQjAPXSlwFCLkDDN9RHAG4I0yhgcJXvxeQYahaTFmMPl1bYx0XFW7v2i%2Ba4%2F%2BtlVgd59vpeRCUhKSbx180dzq4qjeKub06xIViE6b%2BWrnoK0rmmg3c5BqhG03%2B29G6ptmR9XlvuihYTlQfXCCM&X-Amz-Signature=8c554f7a1d4a7113cc878935dd9fa7243cb2bdbcadc02d3afa1ecfe1d83855d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
