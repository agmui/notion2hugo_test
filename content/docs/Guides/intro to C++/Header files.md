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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THR7RJLT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCjLJ7oqPtipPErtMbwrfnGtmHtNbuB40k0W8O3UqBhjQIhALcIk3GetQNXJvkhcehRaAJLGTjw%2BcwOOHStdew4s48SKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRKHdCTP9dJ3bh5QMq3AP7ut6AnuicoARywrj5YADRKWjn1%2FYplnTXueIJ1qeKcAiqJtZeD1zqN7wdBKEsOHaY8iWvUmXy0eX5D2sANdFsNSm92wQSaDHDouTz3p4wM8Pa9oQKiSmK6xrOJ5zAziPAqCknaM0lC0epkNSaMk4gu5fCvJ5PvepTJ%2BuvxJ4qEypTXQuL2iZa88XgHOpO1LlWBUAdH%2Fl1jyLuWnmu%2Boj9UykV%2BLTGCv1FsxELz%2BJDgbWAHMmW1UMbZIhMIiLySm5rv0HQJGdp2iXiRn%2Bpym2ks%2BIbz%2BxZoQ7KdeV81A4eVARlN62WMuMEbVq7nybuRHMeIg9%2BUJOVeQnKSRwhuagZzvJvPPzyQm1laHEHW5beMvVfPTcYtCG8Z4FTe0EqHpBHEn6554JkweP0xmhYI5zj3NyQoS8lVnX9lX%2BzLrGetVCVxxrs4dd6qcjGHWfGDBkJidgpvhCOsaa0Ok8F2V19W5WF48QGPWJgTVahlsCaoH5D08t2lcY4X6jGW7HnPRt1F9FrJuWRhnBKvYOFHvFwhjpCgRZfY47tdLHueudgSlLYcS18s9DZrdhFCD56hK3mNLEI6zYR7oDx5fsqMFPXAnD6OMnXcqJX6JKuc8Q85aqCsHorqr76k%2FevWzDRuv7ABjqkAZNVjMLk3rKl9d8FY3X4vScdmirOn%2FS9UFvrbS3yk4Xzec3N6Ma2n4mlWGhT%2F3wGHx8MudFjQAx7jvCAVKPy3Fh%2FE3h6DEVwYeWKh%2B11gMPZivVdg9QzOKiyYcxbCn%2BoVNBeuydZkWdlFvfAAv5Fvbkzv6Ew7pSB7QwzSJMAnLPvMfO3UWd7HNpxWpRZ4XOw94wjrD4bwk1Sf6DYLePKoYGqCokF&X-Amz-Signature=ba71f0159c1f5aae732edb231dd63cf9d56868cde55f0fb598c88c0295de3c99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
