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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TGVN5M%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH2nt0paI08Ua2ZOVwdibSOgoTZNUPps1WM7jlZepFiTAiA9dwm9KkKp9XGKqWwkB5sdsjL%2Fc9MlwlQW%2BOmBDu2Ehyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMV0bmJEydkjV4vLlPKtwD2lErQkFgj91smhZxo2ZW0QjnJmC0j3aXTNBfRf8zQ%2Fu07m3yCbIJDhOZ3Ojouf6fsws7QriV5AeAKY0zCy040vZB4akPoKDkuKXiu2xvcuyQUz5K9AOj%2BN0BEOo2E3Xf0%2FMVnE8E69q%2Bz1BZ3o1Lf8ER4uEBxGBY5Q8iApQD9Vp5%2FaiFGnEX9uPDzeALUSs95zbBVweDCXHsRACT4rd38kChM7zKNOA%2FoOmn8zEzkVpqTTC5NcbYoXMEcrt3g3T%2FTfxBIljeXIU9mxMiGUGj8jH%2BOmQAjEet2cpioHqS%2FT%2FVb%2BukIv7SZ5h4vj1HWuz9I7dxWV3K6jsqnSvCeApYvJxNVyNJW5K7Has%2BdaXzvb0EH8oTk6DDi4GuHIVGcSyczzuj8jrGpLkXAj%2FB2HsXoCc%2BLhJyb%2Btk1%2FPU2c5Bn8GUwgNNquk%2F443tVn8KSC%2BHXTlPVr5pNsnymlvfQJzOLoDyf6jzejQewv9JsGVaO9%2B0tuuwZR8rrts85k4UL3TSPnM1XfYylrLyUyit6eLNRePbDJFNrKrv%2FkUoDb3KnPu2wL2J%2BPKRi3OcwUWyZTB%2Fx5QPfVXt0zfW6woOBUV3zZVw%2B2dPtmK87n0OiQLiC99Q0VWYdGjmSXIC6e4w366FwgY6pgG4u%2FzZ5Pmwj72yRan9sZOoUrCLyh3DAEgHCxllLObzsU%2FaTEtBGKb4SEd3A0PIbUCYRetZOBSNbaRY%2BUAfV%2FGqxufInM5J%2BvjFwmKE4IvmqwDZW5CkwKOfaUyarTXVQ8r4iNCBz%2BDdfJTEwmJYU8qnHFhaPw%2Bb0w9bNn3fHucpzlbGPvjhHJud%2FlBsVkNgy0ND1zC3TXe%2FyhfHL9lQnDFdFQcHqIGD&X-Amz-Signature=e3e67e273a21f457d0cdf04a19e8ff8a08ffd54be816d1ac657eff28e39f6ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
