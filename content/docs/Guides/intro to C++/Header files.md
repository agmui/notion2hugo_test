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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSK42KEJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAqFurGF%2FFpAkWBb%2Fg70c5a0To2wiwRi%2B2W7JgG8OOmoAiEAlgOjzv40u2W748sTB0Omvb3YSexe3Dtuj6xBDRgEZesq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLDm5Icez7klIM4NsSrcA6MG%2Ft6Srm7IrGM0Drex4U2X%2BQPgUyn1LUC0tHCfkw6ADaBiPbU%2B%2F1wGuuKKc%2BLQIj33L37ZB7N5%2F0s3qx1r59sxVVUNccir3paTtH0xEdgT0R7zc%2FgEU5oFDxzVVe6lbywJD5nBsgR13PP00NVkNR0GDlpoC2YK6bMTnX3L2NidFZ6GwBfjeBJ%2BpiMmPmGX2VGwCcB1IxjFqUHshRS6oRU5wGPqjI0z23yFPYfXaySIzhNwM6Q4nlD5qQO5%2FuTaR2GBqeQRrT49Y8D%2FSbnYeMCd7GCbjBZ2OkCvzIyzyy2p2CBvFBwfbt469yvyZ5eL43pk%2Be7BK14EH1VkPGCOFcDwd9AtzHzEqVd4EILSewLrkYWXBN8rFz%2BKDokaystj%2BcjTqDVagLfvKOJaoUsEn0Z7phQQ0JjKsweDxyxZqaUQto9z0dCOjE934JwCmegnD2O7rUadY2UFRjhw0iEcRNLpCoc%2F2LG%2BHr6bMmnNHcwBS9wkm7pCc8rlfQA9KEh7oH5Pb%2FHH5sIWuhcqH7saXkaWR9oee6V%2Bi0HroPGCkpMMN%2BCECcoxlfpPiHLTa3shBdbs466BVg02mtaBPiRUh1%2F4ncX4PPDoV5xRH%2B4LlkS2sglW1h5%2FOV72vlHMMJirksQGOqUB6QAZxMBm9cFiP%2BUsK7qjQhBLgk3QBmQQ%2B1viH85u4KeYRepTGg5z3Lq1lH0Q5kQb3K6LDus7Fxzdmo%2FlHANSmMUGAcdGVcUVGS1P31yLq%2BhCQxqwHXmUEj1MASgtiNMZidBHA5iqQr57YRQX%2F0Ci1cXpX5WbZPJYcwKuWczj5gAH1snkhqQVQmaFE4L6ETHb%2BoapuoxcRg4uQ4dTyZjc09s88tEr&X-Amz-Signature=2462469cdc924d153562779553674232248a0f0bd3f417e21551a7a22a64898e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
