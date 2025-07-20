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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFTZ6MD%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUEy0QG0ZPBhGhuAwDlWxl0uuvNp0TBqi4TzCnleDlmAiEAiRs8259r%2BSYYe%2FH%2Bq6mznvdUcKwp8DFsHgxWcFjc8e8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQaVh3KIkXJ7zNDlCrcA5QIbUjFLVk8DHx0L0PdMy%2BaM5gY0vKLBx4ta26mlxEjH%2B5DLGK%2B12pyfCRNdgIOzzjXlDf5j86%2BAfAfwAQJWDZgQHpLeY9Z%2B8VFlXFANR2Iims7KyYY0kHqrDUiTUhtTiohf45s8KUa%2FTezP%2BHcjPQBODHw12fTLse6KXiin%2FlHldl5oPx%2BXsP3ccddrrfx0mhDqIGlQr0YLBNtQZsM6l5sQDEJRj8L%2FpvPu4XY9gzgNd3es%2Fqx5t%2FqF3NZjrLitcLxnYA5Rn3RZoPVpIYxhL0j9CrSwdLlSgZKujG0OWjX0uPyqkJYtMHMfZm%2B2resTT%2Fp%2B1EENlUXWIgE40kY7BjPvXGYhPLXQMZVWFinu8AtgyxXAJ0%2BihlHa0AaMcr2eXdxk3hiZtSqbOoqn0%2BbY0EWpLaRO2ibD4Rb4b5MzBsRaE7YFv9M0hKQDnSPYNPKR%2BttybHxzSx6SoeDVou3inlHDQ2xNI%2Byp5jrmhWBlfciRp3nrLsEkR2I44ohGgkkUfXymt3cQSyC%2BDjtSqoXTuhLfBwCGmLfvpj%2FYqTNnFgEyqscDlgTe%2Bt7TEyw1U%2FPvosRhimlPwVyzqz6no6ofgx4mLzFXcVOvADj%2B%2BIueI3J1XKFg8cGc0LpXe4UMMeX8cMGOqUBdFV2OVqwlnj6lNXUOFOIv3mR9KzEQrSWlVIbNFPjLqvNssD2jC%2Fr7H%2Bz8EVtdUoXWYVVu%2BaXbjKjRtDVaHXwPahGHf%2BWbGfGUaZ8Q4htY%2BUyv3CbNf%2FLy9smBFFYkcxci50qWZLV%2B6YsJrvUcwwbamBu3l5q0Hu9ZJuakMYIOqhO5lao4OTS94l50OTwrhHEfKTGrUVoGV7wJ9YMCXN2rlaMNpr3&X-Amz-Signature=f77a7831821acb19c56998e5494ee7a52c79e6db58dad18227f5ddfc43653fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
