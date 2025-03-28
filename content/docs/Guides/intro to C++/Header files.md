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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZN6VIK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP72%2BE0JNg9ZkW%2BcqW64F%2BI3MF1IEzWVBr21XSct4RNwIgS8idPy8Z4rX02lwNq%2FlpAvZsYmu5gva9xMacs1oX5kwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJt%2F%2FqDRFN2ro6yqtyrcA7e%2Fu%2BpAEsdoS8qJCQwLCDnG23GkTfvBSuGuAiuEieqsrhrKSfyOV5sHAAFW8nWMhVWyg4ooLAsJrb2OGrOjIIVtdiLWLI1m4cIRvsuOejJyp5uQJ0YWPrS8KWFddRkzkRaNRmlCY0ESA5vSopYVS504WQz7ZqdDKCXB%2FodhR5iY7e9qIQbhAQOniQr0DlnA%2FdFNTIe91z6q5XUOoaDvv6CNB%2BaWvpL6HpI27yJ80lXIY2t%2Fh5ONM1QStn6n8PlcQR6GPiFPfz3y7OSBIdZQY4AYEOU%2FYYMSNmO21X4gIJ2UXRnEjAdkwkH0PuL5aIgaahLCdi03U8d9riaxSfBTgXEvrJyYGBfsbp4YqtEHBffYh4R%2FZQcALlU5WLBo6CiezaxxXRUI1jhOD7Lsgba1021uvs%2Bpan6P5940%2FTYO09hWdLeckVfPaOAlFRErNxl%2Bv7Tx4KfpSpx%2FgZ8G4dQoxuDC6iWGFyMk4klSYAdXUHq44wyp821sF3PIDpgkoOUUpGuAo7PePMwcljZowDiAjT65wZOGNywfwbhoYTIU%2FSlGcOygGVx9CnbqupSHOcsSKC8McM3pOfDqVF44ofINompvKu%2BkzZyzXIw0R%2BY%2FTNnbnf11LDxM6fsq4KJPMNuOnL8GOqUB%2BAj7%2BnKy1h9OkRYmJFPkXg4KyPBp4xyRLaoSMgoXIGGw68IkhJbyie7TCR4kcFX%2F7R4Gkfglr10Dyy0tW4Rr%2FHQwnC3x7vka9U5QNx15rt%2FBqadNB8hf8DGYHlXJtTFpP6m0WDEa6uybwN9RuVs1GU9MhbkJBN%2FNT6hp1Z3HiEfOasYmbuS3x6GASKb8z19OZcd3ztBc8BZP4%2FPq3KvdIXXRTIsP&X-Amz-Signature=53a92eeb9a859c7460a18e42c52da9d12c5ecc019f031eed40f6fb6087f59a17&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
