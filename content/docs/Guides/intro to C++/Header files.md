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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULZAFMXS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQD2RZ6TUUYypFz9ddfqXeq%2FD581VzcvJVR11RDvZ%2Ba8LQIgc1yzVWqPJ0OQNFWmGDTefKHRhz9qQMPuQwsyKgDOnLYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgoMcXecJEL20rxGyrcA%2FA5yW4vJjKTcbrFuqJ4incTZ5Z4tE2t2Yr6TApgNQJ9jKommtmRw1H9p%2FCAYoFQL4ZCGw0j0shRFjUZi2QcRgd%2FDANQ4WQu2Hxb9DPDlaRQh0ILmg97IFixYF8HKodTMN6HzmiL0gGRVZe2p6OA1xtBAMsLD%2F6h%2FzubVGoAzN6vEaJ0yAOFDYwOpyYbPsOLZodWoUj2O7aPnfT5ZY8tzhWhKX0%2B2xjZus%2FkERPigh49uSFEAK47xS6hxDkEfzy6fQEdbQv6s%2FUWQBTyahr4i6I%2FNKZZ5y6hAkjxlwGEvbWWXhSuugTHvhwaDAHegcdcWzTwZHmmFK43hzcqZtFuUIGHqFvfYYum9ElHW5oS1bkRrl1yWk7UeKX5K%2FCs0oBJbiq7gov%2BOvcrhCTmVodT6DsrJEwtk7u%2Bah3w0a3rCR59D9sITwt2N%2FvaYjsLYZLcQ5CdBh3Pc%2Fbs1KNkzdzIA9aNEMj15CmtzoMV0zXF46sb4vw1hh2fz2TLMjlJqwzlEAEqPxSSYn%2BFsEvY8wqbmjwncDIVoVASybN7DilQx8GJG%2FoSrchRdAj4YBOMMWsn8h9ri%2FC%2BzFwToobEY0i4oloPStVnt26r6zuUP33x0DOGrtfw6vSHWDQIu1CkMJaLvb4GOqUB57%2FAJTRHW6MnpmDCdX7vIt47fdZ6sRGVfdNsSMOjW0g3Ght5eHqFxL%2FXgCRhXn5mrnCXzh5ZfgXysCgWyFSq4z0osgUh2xyVFGwULzTAEs3eSkj9OZY9%2FWqN3YBoWiGIxIXwYMAajOYQ%2BvHR6V9I7I2X10KcggTBGTomWoOn5yrvRmnegevI1QfmKtlVZHPaZo3ot8rzU%2B%2FMYqi9pWm%2Ft2yc14C3&X-Amz-Signature=97d25a326309efe64f86b0085db6d765c36cd96080e0c38646cc57caf86c8688&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
