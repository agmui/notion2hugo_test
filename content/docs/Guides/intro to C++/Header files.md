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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJFMQM26%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDvrvgAYqQUiEb6rffEogth4xn4nqoD93tr62HeN6kL%2FAiEA%2BT4jOsrlnm20v%2Bh8romo7BjcUJY9yH3VdzZvdwdgqYMq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ9H%2FB47yDSdsR3P4SrcA7%2BEa64uogF52olwBGzEKE7gf33CYAyaHKCvOAOnGGDDrgamqdmaxeRmiWphZFC7R3JirlMrGBWrjrkPHkE%2B8G8YkcEz02KZgF9ElTLtVUddeVLAikvjptKRjUagpw1sgKq2YdwTQIlGQ2xdbgXeW1%2Fin%2FvnJ8jPYj4Vr%2B%2FUod62rbT2eTQIvUAyjitgkSRS9qLN1VoKhl0EamKGkjypCGcBKCHVBHmTVoxLNIZ3vNVLiNnwylXtjSrkXW7%2BrLHgfiENdLQvl1yT7sU0Qi05psVJajJlKQtpUIAQsmjjttyfB0PgAC%2BSUMEs3XFOKFEniVARRLZ7wQQaWJpZvDg%2Bf8tdmh9LcSd0%2Bf9oDsSiNdjEBWHmZQEiw2IzRPvNSY86e0F9Ai%2FvjA3cWZH%2FXb8QP%2F1ND9m9zzKfbGbTQEoZLlHUulRuXB%2FiAznkvpEOcz6OWt73gXvEfVjqpsVEOCXr%2BbQ97rHUoVjQMhrOPvfzX0L9L95eMh%2BgA47GjWCLi2u73Fr47Y5qyF422auF%2FkzqvZcN7gExqKXTGh2iDR2pfCzWH1eWtYnfqyGrj4UP%2BXW%2Ff%2FR7pJGKzDuVumGHchJi6o2Jx58rax39aLczKmfKuphd%2FrF2F%2BMS7W9LZvcxMPaU5r4GOqUBtwNNaft40ksWK0yR6nq4lhj5r6y9DByREhXZTZKOQ8K4985wZdOqapbKaCa%2FYYyVv9F%2Frmh%2FpSW19GgszY9QdlQkpO1ilPhrWgqyzOh2s%2BpPuvj0HLHETSai1KnTNDcm0TxSowEwloC49wkHE0JhWpdc09%2FDkB%2FGI9qK9JClCZUroqV8tQPEH2BuCZssxbDvPBhVbXG6uNgSqcs3RsY93ohGPXFQ&X-Amz-Signature=911a88f62b0942c1715220e01d15c51b3c17f9b3602a4544d05c50a56f86e86a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
