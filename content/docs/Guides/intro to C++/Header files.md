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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7IPMFU4%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCn0qnYiGdv56%2FHDRIGXv7y0DwN2%2BHxn%2BqLX%2BkvqOQotQIgJUouaKb13PgfGauSIC4ShxX%2F7my2jRNnrYV7bpFt5OAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0wqFPaVDri7vhXfircA3fG%2FObsHf85xYzbuWGvay9rSfWP69LxLlgWb0YmWwZ8acyrBhFekXRD3rXfqlvaWvjleu2vIfuTSqBLQtKr7Db%2BD1lXKR57DN00ak80P2pzT%2BagQxTvo9JE7dPAEsUoUfm9IGQGmqXfRKPV8Klk5yrSVQiDQA4AlfOl8VojhOkOw9OdhJPgcUXKsmr%2F6HzjpNHrJm1ZesHHLyEizTn3YmTasopCQlsqF2BuQyOxv3KkM2O1XUsIcS4sbAC7TJOEDyh6c5QS4TFQvZ5YQ2X7z4Lw2we%2B2IRwiAhaQvfi2psYmtyHeuhMuZWTjuwbUI25PQoP1qYw5xswdlbEKnQ3xvL8UDCPypBkKfxDVqdd%2FtCqwHqjzZnK41g5DLChyo0geq%2BMQvCKIDfz%2Bfebxnk67EFnf%2FXX0K07XjvM8OOYHP3AXwcRqFzmoLIFvASDA%2Fg29fdUpWYFBvLItGGcadOoDQw2timX4crO4mwnNV0d4z8ucigUjZLvArOWFuVkKsMNZ94Gf4eLyAOiWumh9qTuii6PHBoHj%2BS3EqKc0dqoR%2FE6pFfD%2FPdEcpCYCfDXHKeIg8DZg1AKXEjxZw0WPIM%2FegAMgawPjmAUiCjfWu%2FXMN1IORTWwjRxk%2FPNV3tKMM7BgL0GOqUBma6ruQTWpfCMNpVW3GNwmuCvEqrqTKkZ%2FOKJhGtOLgmCaCPHD7uwRBz1jwIpDKTYhrGiihNakqCIpMVyaJN9qnGmZL23PXpPzw820oBE3uc4741L2Ntp8yL63eVsbM%2FoVzekZbK0VO8z%2Bwhe%2FECyUFtPEymqWO2HYBLjl0MmOOtkz7bkJMEM%2FajK4BBzE6xd7hjsaqHj8APAGzUe3XLsS34LoWvk&X-Amz-Signature=76b8200b2249305c2419fd1346eec7518a64a6f3082c7d3f326751af8ee9e966&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
