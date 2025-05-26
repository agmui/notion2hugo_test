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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXCA5JFB%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGGQgHlhDU539YSxSLiBUasc4VVwJB%2BXngLxIqdPzAhQAiBMnxqfEC2ZSRa0VEj8rbsa9eonGABMZ%2BKnnwha6f8HXSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMW9RqyqEZzwoegvNPKtwD0fAULKN5HUvxdaYQGBDDFSlZpjx0IvpQesUd20x2hch51qdwcCSGmNKvK933gSwmk7P4YciYD8ONMU20pLrhS5mAYR%2B5yQj4NaqqZM8zHhoY6AIdKUB5U52tnwqsNdVFodhsCB01dXOmrVcX4fmNMvZ5%2Fqlz2YAzHtFR0Ju3DY%2Fvv0doCmfNc0RSRXEPZBAgUkkwganKt8P%2B03HripJG6uIOO9dhyMVL%2FEm1nf3ic0WuBDCKuhVAIHpcpZ%2FK%2FrxDujppjC1LNj00Jo06%2Bw%2Fy%2FJBIn7ft4SiOSQFAeiBi2HzUoRZOw3%2FBGVXDejDmvtytqa13V1Rt%2Bb2Siylu6WZy1bYcRaHTvKuwxXQZLwOuRKZqPXNun12rnPgO2e1MKSB4m401jkBLLqfH6x6rFj%2Bxc3%2FDPDT39IrFN6oiqrYU5ZxAueT8N6%2FGEaFPht0lDCL7L9LGaNZEVXqKE%2F0CXRWDjic4cz%2BqYe%2Fi7AX%2BF6L%2FGBd%2FvsNOTkoF39curp1KSVtTMnDtb0ci7%2FkBs4MJrlDVhCdYgunLhAH%2FyEf%2FXCyvfby17hHDdi6r3luRi4yEWxrvdfxOhdX%2B9k9zxjvWi9o677Ya0AxB%2Bb5tGTjKJozVY70hDt7EiAaq6763TcMw%2B%2BXRwQY6pgFAIhoIhDzkCuxumYUMjzV0QinhoMuEk4UKVIkfvAj2qWXCB1YQmgmZfGsA7xaxHbOyt8aT9AD1cUpS12WFSN40nd9AP%2FlbCJdB16yMkBiM76%2BDPLPMSKV4%2B%2F49FjxXZzt5FwTo3%2FMydiRtHovBsmLqMBtSKj9RTpbOUgseGv%2Fo5ndSgBQF8IAKKeXUbRy2n3RXowXtay6XlvDNydhd8Q3%2Fs4CcbGT8&X-Amz-Signature=99ae2177209d3d712bdc0133a1d92e93863d2d5f0733f90ded4dd5c3ba9512f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
