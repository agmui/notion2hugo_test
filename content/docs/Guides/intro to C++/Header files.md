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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ARDK6MK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FFiN5pJct6I9cU1K8Po4ULCUOyzyGcYc%2BWAFSr%2Bm03AIhAPKUf1HRhRayOLh2boug90DHMn%2BMhrbm1cty5t%2Fb5mfeKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDA14R1gKQZlTtgyYq3AN0K97rUd9Q2jR924HcXuWbwPnFX2HZLTblGI5xlbTwRQ5vC7gfPitKOhyepHEYQuVNWh7ludAag6oW2O0TA2mgVJ7cbVS1iZd3ESUYqzEaCPNBr%2BnyYFYF%2BCSw%2Bjdn5hFfgTbqhEsZfpGQ0kIW90XQGaMiEAKQYo1SR0dk%2FmEG%2BjfLsuSWgTY99UamqOSMj6w1ztXlpxSIvYuFyIUr%2FbBtdBRJoErtfaQQGbpoICQtx%2BQzrNEIK92lyfyXjFKq1Kw8hxb2SmDliDq4GPtJLoIHY12MPZEi%2BSxGRtR1Hn0CO9ZR3EYrUTuNNF8rxqSqZVyTpOFNyaDGrYcNnCu0frzmPxmUlPCvW7lf4ZDIOAoZ7k0BHfbJsmtpIcwF6SF0XZlzF0C%2BkIAAtEG1oKRNbIpgEDgmD6%2FOoY62rXdrBmfpnQ1L8clfVX4EnFrqL6h35MTPl7juBUFbt8rO5bR5EkgcP5KM4At0VTIwKfx8pEdT8AjEtCAsdBXA9FNJQJQ1bO1DTRiu0X%2FX%2Fto6ioeX7Alvo4gSdKENGW%2FHE%2Bj%2Fbt3umTOK0R2uAOIDavQxC45nnMCp0T26HQdsdKoxUwQbGhIIAEjuHw03lONJvMm8tR2Huo3O6KiuSVuBAPun9TClsazBBjqkAX3wfbz2OdB%2FXlPUvSa3%2FbpzX3%2BVu9RbSniUcKXVksV3W6kPcNAxGahMAhDfDqrL1i3GjPNNyTa6ZA6f6a2HThQ6Bn4AVuEI1Afg8Ql62AGaHWxR%2BGG4ZyAxQUD1kgb9%2BzBRaFCUMGUzNaf821Do3EHP6RWnZtvnLuaiLl6mgzS3D3oLvyMpIJGP8lrMM%2BdtTtyOtar57PkyHohZt3NaRUz8twvL&X-Amz-Signature=8739db86bf647d984cf56a790f65cfad0208ce92d9f6db10e5e15f6b6c65b1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
