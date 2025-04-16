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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDFNKID%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT1HOXYf%2B6SStFwXq%2B80rWB03xMBFoyeRD5td2S1wdHAIhAJPUdfpfu7Ml1IE9gGg8giXDOTxiz3nSk%2BvlBGtUlkliKv8DCDkQABoMNjM3NDIzMTgzODA1IgwNbQapAv0QNdGXaF0q3APQ6kDb%2BHx6Nq0ZvhbDSl6W8jxkSaEJOr61PtHUUJmsffJaa8hYOEgnS8yty6dRaCBAb6IkV%2F0C1jvx9Um6LwSURNupdZiFnm1HjFcQAd1cda1S50T1sMev%2Fh8wd3kao%2FP%2FIf0A72IQ8FrOgJHYFkNCxRAflwj8ab5PX36Fg90Q%2FI%2BdvrdqtypQpWDJWs%2BsP1hXq2etppW%2FxclYgP0i1Ihb9c1kDyBW6k9j6Lmou0rKzpoDioipUSL1sY8o%2Fp71dTL%2Fndfi9POY7VCzvs4MPWa7SYulBMv9jQFnAtKq6b2f0LlT%2BYUDX%2B%2BajmlWY4lSewDFnw%2FAprPRCDyjerhHY0FtYB%2FL9GFbLKH3VYcsR7asa8DVdiHTe84mJ0iWt1NF2ulILWzRcpszzb3mtLhqTQj4J2ef8e9eh10nuYyFN%2Fz%2FhRuKsFJmHDqx5o2b1gR2tL3wCUVJTy4AJ9FCjm4VE65hmoMQ8JAHkM0shYI9ZgkEULC55NqfguG8hjodHt6xm0fKQ6EYGTXt4lXRXo%2FMAfxPOqgdYxg9Wh%2Fs3PhP5o6WZbyTPPsFfEEcgftBhxVJ5U%2BwICLxYlNY%2BcIFIFSPk%2BAit3DGi%2BE%2B%2B92FNazdER6xN00Q3PuFX9Jsbc8E9zCt7%2Fu%2FBjqkAZmBgjsY0unzfWqVmmBGqXYfrlR%2Fp%2F3hw1BSZI4RyyXPl3K93FxBcKs%2FyAG2niH8MmMKMJoBIUzoKsexgwATiKCeLb8yXWIGq6I2IdpLs6U4u0LPKyJmdCVzTOEKXYeac42gFlSW%2FKuHZnNuTkpXWKEFTa7bG0NV2%2BC5SvgoqoWG5RBiCXDF2N27MHK6zBoJKoKvi%2FcQMOLlCUy8gglBIglRxWlT&X-Amz-Signature=628e5db492ee5a01f81353c887c44581b1a46bc1c9041fc099e6c9bbe4136cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
