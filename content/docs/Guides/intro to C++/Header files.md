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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWGYIAWO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIBgb6c5z4b98gFRYJKFfBSkLWzTsDIJXpgvzUMYXCxFrAiEArYUMa%2FLY3UC7S28f3dWoBqh2%2FyckB1OYQBMbip8E%2BN4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKlCMn8Ebj8HI3ikKyrcA7G%2F20dNVchl25y%2BvtRyeqSPCIjSIzQzOkk%2FoUw8Ob%2FXiBadtcyQFPmWvGI%2BTWGdAg2X9R8HKHUeU2r0ecAO0a7VZnjbeolZ2UKhk6IhKSfzdwsESAjFsz%2F7GkKCXzxlwtnruKTQgKdwLY5OW0e6F%2BrExBzaoIGrOeY%2Bfs3kHcxoSaWjYX0XgUkgOr6ZxNpAGznqykkh707XEPmdn9%2F%2BAaJq0Gj6oXZtczyn1e4ko6POQOKvvpVdrmjZqheqCA6z4R%2FPtU7XqU9r3621Q5mzvWii2Ye%2F9cpwYAzLGsHLtUuKt%2BhPY818zVCp5kEd7xM7q7eraMWhyLp%2FZnR0Ys%2BpCmTJwQcZU67FTf%2Fml33p3u0v0sYldqZVIW5qBSbyFPyS5zdXKMEbooHRCibSLZIm%2FyVba%2FLdiglqMDPAA4IhhRvBhI%2F8ljaa9BX6wM%2Bj%2Foh6jCWAZLpkmhz6yyPaXc7XtGPzHw2swy7CFtkn6gJEgBRXMO2AVu7x4YQCEdoT6%2BumuWcZN2oMHKxVRCgdI31X4n50LmkWQq2gSzgxmLWFM%2F0RHMLqtRF67FQ7lzUTkFdI9zYppaP9zbhT97bcpawEKonoWpZa4OOCGf%2BVjKa5VUbHd8sR87gIo4RX2tMPMNiKrMMGOqUBjWwIAIy%2BaPVBGxFzltRlN6a49XKuX%2ByOBFou%2BFGDAbaxdUA2K%2BDSiXH%2BWme63WB5Uh%2FYWkiHVnAazMEGqHfxC7pCulItEWDY3NmGej9fX7bjirxBui27X2f6PdfgP7U6Op8gcUrjvgsDbBLq%2B4XkOOtM173sqbdoEXHHnwNyCZ9N2XfqfZbUWc6DSqby89hKnCUTMFK5DARp4YFJ2758p4JMo6km&X-Amz-Signature=d704947cd9513997a152ef9ddf0f6332b26d8b945bdeb952f199185c0263d6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
