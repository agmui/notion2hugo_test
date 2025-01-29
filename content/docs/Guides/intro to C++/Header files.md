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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWCI6MQV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE3Y%2FCD0ifD7HSEHVZuvwjc%2BRsrsTwWft9CSw2bDkPokAiEAknaXxwmU1IOel22cGj78kfyW6%2BX6Ax3OTF%2Bl%2BT%2FZJA8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7eAbc0a4uzlgvKnSrcAyAn57Qf4N58dfIN6B9sakefI5ziZIvOJkC6qWMZkig1JRw2HLKJB5F7RpA7rpP%2BTUqTSyPapWYQ8w6Mi9j1g0J9WZ7N%2FMF%2F4jzeuVv6RvTmlGGL5rof9NdnuO201aiBJgxUpXUHyecJaOgeAHq0y0mfjBQT%2BLk3N6lpCWj66kJPMVc89q8zL8gY6F4G7WeE5%2B4L0TD6jmlO0JTZbVfP1uoqs1H%2Bkhcye%2FeCOVgyn0B1Ko7ZbNORc8ylJYTnmX1v6TVQub%2BwqSzE9O9ylrZVHuRe2kllgxFSGWyo%2BFAyeDVU%2B%2BbOfyUY80UoY8Z3gs4YG%2Fuz98V%2F6rmo4QyhkwP8qb2whB2vN3bG3%2BEGBbGKQ1qrgLXtQjnrdf9BUl6KqPSEs3tynwsqb8mzqQjgz7MXKh9elKcmaaZYELz5mIYbJpSq%2Ftco0JtUHp9Rv4B%2BPV3h1Mo38jGRLra%2BKNrnHmt5eKqJZ0XKMETQCYewkUJet9%2Bs3M6uW0uPszb0%2FYiQEGrV%2F%2BR2ud4DZ%2BD0xjDl7YWP9C2SsxAznNHlwcVr3DqXLK45zqpuUn7SuF30yzkrebpdGcOEzE3kIa5cZwtyp8u4k2D2Rpql%2FdYY2LeNnW0MDqGEwja5xytuohbZrrTpMNiE5rwGOqUBMZXlq7Y0K%2BGlI2wbtKMpp1ofia3z6H%2B5D3ISRjEZh7MTperXZpbkiUUVRY8VFaQGlaqK633ULCQkK1CmKC1WHzLsiVOLArwmhEEsc7H70LHgmpC5DNAyuPNwbs%2F84AnerIIIwAMpDBtbQ0HWAnVclzHdk1roEG%2Frdb%2BBz4%2FQ9xmhSzeg2PWVEZaEc0WaWYTmEhxsoztBniv%2ByDYhn0xh9xHxJkXa&X-Amz-Signature=f61d705925fc0fa6d8f706124773b79ac8ea3a593d7839864974df611b5d1c85&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
