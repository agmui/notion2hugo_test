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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQYLREJ%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBZyyPYnuzgr7aaeQeqi7PYunfICHZxqgzaG1XUszbHxAiA5JSljTbJOqFZALccGxRtSNI%2F73NfTeE4U32l9I7H99iqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKP5l%2FgWGLC8oD%2BMCKtwDVmUaqVeDCC3EclHaSenGOMeP9rjSHL5cB6aBR0y95xBwgw1IqNuSVZ%2BEGW42VpQx%2FQ0aKtYMMVXrn%2FvXvK86JrrI%2BAr0uoizkhgIolXscsWJIg5tK0dDfAr4%2Bw2j0PZNQMUHbDXJzJregBsqPea7mXTmHTGXdnvzND11%2B3ajRlJE0Ef7%2FmTVzENpDSAYHolJsW84qVAqoghhA4KsOtKGNmQZOzJtxqQxHRp%2BXmW8Vj%2FZIQPzX8eZq77tCb9Sayrneqh0cO3orzVUrVGhZyf9MdD07%2BaS0iX3rlpR%2FemfGgE88YRh1Ce2gH174GMms%2BCYB0RmJDQCNSrg%2B%2FXMkmB%2BOfZCX1DvslrUfZOyDyOCOv3euvEeY6GPS90cM7%2BFWNzSG3JrP2kcI5YaxcnhslrmfQiw1pVryG0EvYroMZn%2F3isep8AN8PBNP8kTm8Vlo7ew6DJs%2Fed71E2EAONyCY9sKAk9%2B3YJM%2FGozjLeI6ZFuYxw%2BZGEmO1kKgRi4KNrrjZlxUvVAnMrzCsRW9fEbGQiskiveTHo%2F8pWRtPpwGQZBNwesYTWl0LXhzCR2rjhnZMawEWrg0RKOavq0Vvrjbr1462WwO3Q6vBnrPCMPNw70hmCGWGJ4Ts5tBkR3q8w97juwwY6pgG8cSU9OfxD6CQajP0ECtOBM86KDoRo11bmATbMpoZScWOEFUiUgoXmQtA%2BH2xzzq%2FXDYKxRN%2BrUOg8FaSLFzjrDz563pZ7c4py8fG4jotdHLXyfLKy8ErHexkdPAx7L7yTFmVCjuyIG3CJwlpS9sJ7Oi4QlVO1FfzruxAYPpNV3DOjUdrbkvaTNWClcv4X1JSNrp2ZADfI3%2BWZNlc2VXObIwfwrfvs&X-Amz-Signature=b9a3c6de3cdb420997ae58fbb808069f255cef521250d31dcbe6de43b1bb5151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
