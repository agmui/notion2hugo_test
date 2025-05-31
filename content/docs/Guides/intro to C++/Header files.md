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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XP4NACC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHBk0RjpLo3oSSpK%2B6rCxTRqDqHrV%2B9OvJ5f%2FHTwiQLAiEAkvEdltdZgSaMGCnDxa67umxmhVZh%2B4MMzFj7gwQSK0cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8umuQB5gOEjpchfyrcA67fvcldC4I%2FK4XELnROSyGLWDfrTSHAdFsObTD6scncJMGyWD7%2F2dPj0XNS6JEqSAjXAeupixgBDDvzMK%2Fxvj1smGCfxyhgYAKkHW%2BJd152ozB%2FCjVlW%2FAoO2pXn3H95d%2BgrDFI5RIqWMW9ZcWo%2BjyuMmVN5sTVTyrNGHJlUFoQhYAPIQBrfodAr7Ye6xAcC4%2BRfb3lnWL2xIaJYWffVvuxZvN4GwiyFMBY%2B0Oa51iH0%2BPaDKV9u944Yy4fJrdthCC%2B8iZw%2Ff7NWq78DwBR18NfeglCCSdlXfL6f9%2Bgj8MXZn1uCdaG2b11A28YXlSu9QiBe%2BG4o2ktE50BmZh1D1kYcYjlz%2FkAKM9S%2Fi2ZTNp0qP%2FO8TCtbD7Wf0ERIPjP7fRNQ9w8Mxve9WF%2BxlgcaX%2FxSeohTVtJTcAsRp%2FNAryAPLcf68QcO5L5eWNMRI3tUe422go3U%2FZz4czBuqe4rnQWWriRhxGm5QdIAuOEG4D9ieKnTRX9rEC3tHBnyCbTX1ubpw28Ne2FcdxRjijCOlfpZKENG7Hi7dDJloW2ZvchrbhLSFD9UnWlRMEFnvJzIlEnyX%2FA18yiqXPvetqwZcoHl%2BYRdz%2FctMAamxXJ3P9N2IYADycUDP%2BXTyoQMKyz6sEGOqUBumz0efhQO6y%2FVOi4Eom1NcciAWVvHI9s7%2BcwifY2UFo0gazBnpON2ldu6dDABVnbRQXUFBtdCvrychRc%2B4j89ZapYXRW5urWaTRI1%2Bjm1zzEiBd2Gojt59bXtvbp0tN%2FVPYiF7kuUaiTrzSgltSvpH4d2OYH%2Fv2Y6etNrWxvIT9gUgCpK%2F4eY%2FgMLBUH1pt73QshIQNsxf73qoZejWPiUx1wlKxS&X-Amz-Signature=8c2d213cd97dd12458a0b6e3e88d925b50078b46cbf6bdaf1cbe399833a2f2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
