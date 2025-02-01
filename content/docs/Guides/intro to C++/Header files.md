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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQKDIQLS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeFRHzm5YL6W5MdKtxt7osshzE6siRcb1OMdFvyhX8ZQIgMh9wG5N3YRD%2FW5q0q2h54pIT8bYWM2B1oDXfz7s4JToqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDMobjEYjwOdRtlMHCrcA2DU9lviJ3RqqhyCZQaqYpmOIqk2PXSTSMsTCugTqRvHpbYpHaYFy2PqIAkka0UI2GRWE4cC0tqMe6I94q%2FWhFrifnQZj31kMKSu3GN0FtyuD20LbJu94r5QyJE5PLX%2FdrPp7MPbwA6wCwHwcTPokl7xdiSXz31Iavt2MTNJ1tN4Ii%2FywjPDoYdzCZBvn3WRhIkcoeAfbmbn1hHkuMm5Ciu8oGGUY9jdjJPULqzzI%2BRAyBWhDJJgYiKnM8mqYZ6IBX2j1FxqK5lxbfYStLa2a7gTzDCmgu1opWKT1XNev4MnUPgFy2kPyhlTzfmQtpjZoX9p9GvsGo0Heql9bHbjCrwk9GwQw7qQwj1tJACZeS9JZ4ml9eoJXl%2F%2FXSNlkrUE%2FB%2BZmRpYeKdZ%2FSSvLp8%2Btq22I%2By%2Bz2xqnreyPOi39ixBto1go2MxT3zyL2LM6uDsN3TGJicGIyTtwqYhZY6Wq2joCV8cpPkuHTDt2TLdGkCtlwo6%2BrKGkwm%2BYo6FjkToeTpGV%2BFZljYw%2FWhW5KJzkUabrpfjg2wcfvJYoVMjbQX6WEsxIaELB%2BjhvU2LcCrO%2BQaUhTJrGK%2FBpatMgtg9QmRp2Hz554o172p7EQ%2B%2Bj3TMIZD1DBuAJWOQa%2FyvMIDL%2BLwGOqUBuA5rmjhkaL4E0U2mGuw7xmI9a7CsvIWZ7oMUoB%2BqGH9oZyo7AoEn5fcHsDv8cuj2%2BDJ5NOeVszqBuZ9Wlfv03KYLazBTMvyqGNtkjKHo918xd%2Bck4Fs8NnB8nSfCd0ERTEpljhkUG4ycVcA9tRr1yktYK1m%2Bhxs25bL8pHGpxTOs%2FfLd0bpv0P3EyAzcjUPI90YK7GTVk7kC0ulKOpcXgAcv87xf&X-Amz-Signature=a64d7bb758e0f7386b06e50a107cec1514c88f4e24e31c3a236d9c047410d608&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
