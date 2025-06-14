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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDIZGIHM%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIF0IaSN%2B5Lbpe3gx6Mgj%2Fl15QEiYhrLUIIUdPnV0bjXXAiEA4QmOuarCw7%2B3OK%2FkbYQZ%2BIwlq4fR%2F0yeR4QMkYrrjnMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOIWiqDDEpmpPr2oZCrcA34Nhc%2BKTjKPq%2FokdwdN3Fy6Rav7wdrTjVN5s3Mh7d0PD1BUvHmRZ8XIpX1o1gYzGB7EpyzvKY8KgT9zxqTR1BoeB11ZWY2hguWdQTTk%2FFIzSR%2FYF2b6bsKq%2BtcPM2qljVxGkSaKrTYisYlZgQP%2BCAM1iXp6dr1J5zoaet2hWG8JWf24aUEhstY%2BQGLvPr2jVo1IPG5cXhSzVG8jIuusWVU3gfd8rDCThQgeGeV7%2FetWVKGodte6ABXKHTUPwcQ0VwZ0rXiLShEY414CuFRKC4dcjRR89IY32uQtjGCTAErwQ58GJ8Q%2BzOInb1XwJ5tns%2FIT3z8bj35Iec7pU3GvSn16Kwmrb2m16Twqkroz9FVoFoa8mxi37E0PEswCZ6sF7CxwCxK6GLYWUWGGMqZrA98tivrQ4upn7vDoS%2FaCeoKJJkZd%2Fn7LSpri%2BhF1BJEtaxzHUol3H1LeJoI7SEaXu%2BVzE5vTT0rTx4kbNUx2x0ScOqzo4%2Fh4kVa4wl9xO%2FNiW6Y6UmQb%2FU6rYA4HydB94cKJhe4Spg8L%2FGjwWiPxZILEVyVJQrclfaRxWx8hi9TX5nE78lfOtaUP5ha3i7Al4MEHnCexIDhuvP4E7YRXuf7p1t9XUkcMshk9364NMMXBtcIGOqUBaeIgC1k91SWLoVmuBNXr546gBF741rpY%2FPdzX3RdlY8H8caXWykWi5Faoeckszgdj2HSu5ncmloGRIH9uCsC4ATRbKiUG06kLi3o4YtZVvAnnKcoiNMOlp%2FWPanGuBvlIp9pdHlnVQ%2Biv0wm3m4gIXOnITF5poO%2BgfJkitPw9sfL3NDA%2BAbsq%2FNDQQ5JwKwJhkuJCRTnV2FzOexjjYfj87UxfcrN&X-Amz-Signature=b6830df40132197f5a309f609510e32a472eafc893444218f51e9ef6d4a584a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
