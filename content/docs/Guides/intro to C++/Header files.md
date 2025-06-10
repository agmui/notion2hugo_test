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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLC2YWG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE16NSVuKgrXPkxqNGhShPEJQh1qBQwmUyWlNm%2B0CpY4AiEA7auw1HeBZv8CnDpD08lSTLQswOYT3dLPTnqv3yYvbkAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOLcAshtnOt%2Fqnt7SrcA7Zxa09eGALXu0CrWR9KjI594l6xD1PMxgIaUcAlRxULm3gfwA8P4CwxxTPmCi0xtcxprhKnIWLBkw0OlVafneFfSXlDs2uxQzJOEIxWZfBQ5of%2B4kGTnavWIKtB%2B0ilDj%2FkL5FINmmnvbOJtE3jApuYW0v2KTTAP71kZWzeZE5kEs6TAbL9gLcdZsg79DcmMdqfLv2%2BV1H6%2F47SJAORwksiP1jFnRYr%2BhVTKO7A19bw5Ql7JyJ3dGV5cxe2Dlwu%2FbqO7LmGMAvn3XobUrlXncF2c1fnE1zxWXOagAbmaL8%2F3%2Fqzhs3NU1CV4F9UC%2B1HalCeGFBRrQbbcgD1Ua%2F6qqL93PoJx6asgRj3GWGXL53NhcanAhzYB404X71c5TpTUjsEtzhXSZ6ibAzghQlNt2XaQAaO1rIh0iC61dBvqNmSmJf2IyU3fTpDanqBwS4cAPPJhk5y4x2qG0Q%2BY4uTY8WdztnkGjR2qfDzTuV1hh7ZxtHrS2nOzDmHAun0PYjPkaepML5LySGPlegkHKpfqCrolTsRP5Xf9xFIW0R11zsMvJ1UqDHxE3QZfNK8gp0hQJ1ZFVYRd5ONbsyDPmUI3xRu5kBoOM1kvFPlx%2B294%2BKJo2eLhEjK1U9VPz22MKiNoMIGOqUB4XPgM%2FJatPDoQTo2tdFAoJqU2OE4TBoOeAOZsEy2num7HAsVjQBDolRGx7g%2F7qVjI8NoAmGbk%2F5Pxtpi1lPpFGvmxfIltsPN06rlh593aP0NRZbz07EEHhGYDuwLZDGZQaQ%2FxM0ak642cyW1BrgBpx1j4pdE%2FUpiicTrgEq9ukbjBs5sf65DfxOZtyI1mbzPueYDwuvvNODJJzncB2W6MSsxqq9R&X-Amz-Signature=1c56689006a19f4990136e4ba38bf3f6c9552b488976af38b1cb8a6ef5dcd7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
