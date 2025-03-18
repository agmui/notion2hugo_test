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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUCCYYYM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIFMlDsCl7HJKgL1OqmWzQhqQ78q7j3gHfpPIeiTeplH5AiBizDpDB49VZU4lEosv%2Bt%2F2tvHE2WZ9%2BIJRccStqbmIbyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMlhDxT%2BjQ4IdrVkfGKtwD6%2FyUIefiC6ku6flN4FmIftvclceWCG1sHA3XxSoMOZUK8Q6yiPJt28XTrNHpiIakykMUjmSwZXOq1XGccvrMW6GmHU31koQEKibYEAuSfFa0uaaO9KSpYW%2BQ%2FcvhozFHEhIg9qsPJIWwEcKon66mFYGdBytm%2BgkJiOfSW7snufkOGIJFuIY5ANMZn%2B6nwOUNneKwpdj%2BFatsvDtd2eOt9pbVMComDH41iE01F1hKalbr7ybGjX9rNoLTrFzjZsHsbWaeAnsdZoxKYiwwrsDIIQjaBpysvO03D%2FrBvhgAz95uOBH3oMlirvPnqDXg1N2%2BGHjPgR2OXZ8m0T5q57wKllrHf96dNAg%2B%2BH1JezAyCsIrZDlPlE54L%2BISU7l1FMN9Il6YR9%2By2LTFkKu8pzTRH4d6Pd7Y8v6tG812Z9jnoSPcJAyNA10F9J%2BPl%2BV7%2FXWtbhTF1TQAui4P%2Fc4oAY58FbjKusNE0qTW1QT6KwtoLKW09%2BTplqRzHvVTfCFeIQwjeaR%2B6h1hHcbJhDOv39qZ3mYV8TUflvJ9qGTll2pZjkI1hvFS1s6ftTNrGiKsJXLmuF7A0h7uCfYGFpgj6KTsMOvijO1GnPfhAp6fcqR1l%2B0SJtZXCfdSceg8hTAw1fTlvgY6pgHvQ9pnZYAPghCSLxYlB5Vf5m0o1ASOOnsR2gPXKwVe%2FidUyrmqzZtBmdND4rd%2F%2BdoyLAF%2FQ25go7I8DxXBSahJiVpbEvzLYeYkXJ3k8TG%2B8IyqbzpOSq%2BlzwcG4sRB3DkVSH%2F2uv35idHsRxxH45Uuw8UKiZg3vP54BWc%2BIFloohA6AaKcUkiTCSjjQA0u8oPBqvplt0MCz7d9CkPGFwA6YHLyQ8aS&X-Amz-Signature=c2fa3cf8913b832ac420ef370a215b0e179d69cfb9cad235ee9fceeed378ed79&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
