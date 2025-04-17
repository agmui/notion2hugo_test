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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWWWZ5Z%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPT87e7QveF6gfKJ6qukECwuSmmsytLIWm2uMFptEUTAiEA4N%2F73wX17iSBfrETjcxGYsrV6cNna79KkgBcBgCoHVAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOCBOMMkaIg5HP9tyircA1a%2BJmozh6oAoIcE3yx9pSqdlfTDtsqZJM9pKvxkZhHqRvbBJBF6CdGTKic1KD%2FRJo5aXmLjf9pF40y4jcnhI6ry8DJ%2BkjeUgzCqQ8R8WQljga9jTwlRYHlLFX5C8V4lWOg%2FvwMWElf3y%2FXbUSkBG8T17WiangEEMjpy0nfYgS9%2BOtFS4andaLDdJKZJHNlSbPnSEMZvIagO3OKphwbep3S9V6puHrv828HyOP2w%2Bg986JaXYgTRVcqccBb46oMhn8nYGw9aB0ealc3UpACJmLXMl73yaDD4UX34MOWe%2F%2BQIeKnOb6Pfd9Z%2BU12AH%2BLaiiyGJPQrLsuEzhVDE7LfPdEXDL%2ByCtyadCKxI1iLJYmIE8G6Hn0axETJGlvzERi7OfQPtAvhyNEsccYtaJE0NMpRcuH2%2Btg2F0YymwNJh06RF4mkgdm3Z2IZggowhk%2BinDxsFanFWKXiyXcRKhECyz8D5rRlAAlTvmgrJkmx31RyVFQwsnEywhDzaBPgkxw1UvXN2dGZoMzzAorsblOncgmpYBv3ChYu0XGAoJGohhtZljj3n5v1f6%2B8TU7YnEN1Wnp937keJ%2Fowp4pv5rs66BbxTfF1hLY5PSahpeA7LycWdmxxG3VzThcWXn%2FqMIiVg8AGOqUBDtZYKi2plJ2G9UkqvkCF8InAcBxkSMBmBiQfxsP33F4h0rNEhzHqEYw6xh1ZUAhptmyONDEUkbi4XQWhelVxiJ9k0bR9qUuaxfCZcDRYFnOiuo8XZ5o6gLXaiffLIE4plmlyAD3r%2FZneSsRBA95fuQ4zH5HXSwwRhG%2BFZP4MhfzwdnB%2FaP%2BGOJQow87jDFa4AlOHbrteYFkWnz%2BQB50RlxB%2B7wtF&X-Amz-Signature=f0ae6f5e2b29d0aa50bc713ee58e78c97ff04b6bef068a33faf806ce77fcebd3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
