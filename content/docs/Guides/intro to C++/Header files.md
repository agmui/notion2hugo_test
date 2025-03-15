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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWH3GYMR%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBY8LQunzmIdXw3SVATnimUPxCvrWH6e3fd%2Btvc1VsM8AiEAmS1spba1rGkHCW7ZP3I3kHUAzP%2F0KABPQfvWF3utiU4q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNwvyY28HRGxmgecLyrcAyLSw5bgOlZOStE1xg9vN19uzWuzCqwbWIeGgZNTdv0QhiU%2FQ01fVjLtVXvR7WkCGZE%2BiUUdDsqJZARx2%2FNHLS1qP8qEgq1r5xw6cyau8Vm4RWhvndyAbqtmf7tH97CieLkqi4DHoqtDEGQQ65dKD0%2BEb9TxUIZrnFpTPL707AhYvNov3kyeu%2FMCLDJPDB3Ww%2FwAQKdxmWGUMSIB8%2Br2jXaQiKOAF%2FHgSTCGVZVm9VPhBoUlPYkyNE9%2B9JAQBwqFcXY72y%2B5%2BdOTBfndvLiwtX9oq1SE38tP3N03sabF%2F2cHcaAzEk13sjm8k5N9OWnynGAH%2FZI2t%2Bgsp8H6HnTiO7xJEBjtibkwSAuAud%2BWWfWND3HkXZA3nMLI8cqYTadnDmq13wplT5J0DJcOpamAo539GNVGVu9GqTG%2B%2BdKbBtjb4pU8lnjnfAOuvNwGy%2Bb5oh05eVoxEiMTfhh8HFDO0GEcUVUVp4bGIH6kQBmm4AUuaphPjvc1HZwdU5FtTorYNya46SzWIjqbF%2BvbJX0iGPSD1HIPi95a%2Bk%2B7hskFinGflHy9hOJDiFuZEUbzZg1o9V2eg2qsOMx95ediypw%2FwhO4w8QW9dYB1hIGsrc7KA2ChMC5hqMRRoU0NSSLMNGN174GOqUButMeSOKH0hg2%2FWezZ6p7ioG8md1%2Fq0cu4N%2B21AsK7B1GZRgeqiyP0G%2BbEHD%2BNxaRHMxqHRoop9E15JTG7HV%2B5x7EPqCn%2F3Vkx1f39y0Q01K3VM%2FQMqKtMuu85GTu3rfEldixJxVG51raA0YJ%2Fu%2BDNe%2F33Oid8ET5OSVIB7%2BbFCiJD9Yutu2NH%2F4b2J5Fw3a%2FORnFhiGlnKPAq2oYCtCwAL94Golg&X-Amz-Signature=90a5abf37748567b301f1966bc8da889f570e993606fee78e40fe254b86b93f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
