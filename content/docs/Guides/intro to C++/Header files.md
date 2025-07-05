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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QHJKHXC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC1aFPnhNVDXmc1bMkjkcAfti3YM28fly1PnBCOw%2FcnVAIhANSNg8Srmc1iT54liSvRlDBSwgiWYqwFymwoL5yJgXhNKv8DCEEQABoMNjM3NDIzMTgzODA1IgyrH7YJd6tBIsBXOOEq3AMPDlVDkp10kRLvMrDF91JYmjR%2Fkud3y7jAd3l4iPLLYGJt7BGvWMEi692fOW37ItF7wXYky%2FEMXYf5nnfGtm0ftIYDFGMjkTEPwLS5jEEscPwAPv%2FK2y%2BkbiPpd7Tq0zOqCnG3zdkUQWTTWGFQRa5LWnBac2sq%2Fc1%2BvKBm%2FDGD%2BU1kC71M50oYXcpbLBIATCnPJiV00rIqs2Bf5b1nUKq7PzKjWS7LYiXgU4g%2BlqJgx3AiMDJcli0TI8WuMgv6H9kfeZdr0zrwqcLI8cRv7U80TTdXpfqfqtYFcNNuEcDh7%2FfeC%2FqTHd9DNme2iSX%2BpwmPfO7uKkRz4yWV8eSAoDMG1cTEMH29bKemHPdXpM6BMNbaHAZgaxgf6YupOmEWcc8AiiYq8nE2KWmvf5IFvNZXW5zIxZTEgCPKIFPAcuX4mo81VcHFWImAIq3t%2BsyTVCnrFuGAeKf2M9uwA3F4YLVG3L50IP%2BAoMDWo9SWFpIYg%2BmD%2BiWUmYTvlKpiPEVoS1VJsykx5Y3AE1ibjbN%2FLmxji6Gsq5MNG8KwzvQJ5zBgyBleP%2FeUz7cPpwyik0YYYM70nhRiIVqNIW6opK5MzRrqLGwbHs5oyzycYpvRFMCfpjhT2HrHiGyMY3AyWTDGq6PDBjqkAZz0HtqcdnRu3M3AU60yviuYRnemFKPye19xtjn2A9K51wJOjoyztofTf11fzD5Sfe1opZhhv0FNlOsIMNE7d9dLo4ffGWEwnkU0myB8U68%2BQ4t7weOdchSKlmd2Ohug6yvMAYmTON0Z80XYyS0a2CEFljPyPAU49uoNwjCPY3%2BFwiYSrlO%2FhlmkgJ9GuTiP6LQeA%2FjO7mk6t578AVKqZU46ibk5&X-Amz-Signature=fa116c8ad98f6f26d0f919151f4b8d36259c4e486b5a3185c6562404df49714b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
