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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJXM4QX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLs%2BF0tvRTeXiC64GRdAOsCrE0tS9cDrRXfC1W%2BeNq4AiEAw1Fl4nKBFvcBlsNQiPpvc10%2BlVhI6Yc7QBkeKSU%2FTisq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDI8ZDetbL6DgiFzNSrcA1b2MrzgXwc%2FxFR6i9VViSDD8Doa1qDZwhgM2kEUwnNMMiS%2BGkROsWvtmhXM%2BE3KPlspHD%2FJO26qfVSC1PQfy7pEuhD5oIh0Tz%2F7wU0KdLRA8vkZGulpELogoULuvacbhOvreJJTqriAeJ%2Ftv3r4TEfBGIJogWnBYpj63BUeKYQkFJiUu7JIVlMMyEs6ZLf8bg4U8SSRMPzVUOqXljhhl6Ncv14%2F7Fz0eiUOsA2O%2BUFSmmjqjwc8Sbs0AYqbXeH%2BKtoqhW2xCzaPQjGA1nUrDNXqCrJaTdETu4jNyOCSoeZgsFdZN87%2Br5csTuSL0V19e68sDbgGEzSmgsGk1m7X3hUbaWNeU56tFsKAp0NaKTrr3LqxYveelbw5OjoIt%2Bs4aZbdg2uwpNKzryb0mUDhxqzwBk6LvOWdUAtKxLGF%2Fe6uDkHlxYTsGb8PGCPylEYU8cJgtLyObcIKRDLhPHLesBzm6WZmc3uCVjgZHPgxYRPpzgIfjthRf7GCidcxtVumVjWOWFE%2Bf7gG%2Fy6TXa6ZJ8MbQQo5tVclILle1wZAWd5oRVSBzjTsdzL2F2GHRX9m8mKdWzw04sNF7t2n7W2%2Ftp31GpC4PqqEdZjw83WPoO7L%2ForajHzlU3Fu5UUfMLKkzcMGOqUBaWo7TyQ4dgvPH3ntkfAotXS9XtdYqCKOdi3YOF2iBHGuVCva9ar7LlJDMRad%2FyW9FY%2FmutcAylP6QkwX8%2B4GCfDp6tlGHfLdx8ZOcui2AKyerhQib8Mw%2Fl%2FIm0zQFIcoiAfuXtUlFJn2FF%2FkUEit74%2FzNnO1%2BXCpxFViO%2BESwdteY38IQg5rsJ1I0M%2Bg8Z2RMv%2BvfKWjQ5pKKOF8%2BkuuNsD65z1X&X-Amz-Signature=fb2d39321461972b88693203b82aa253386cb5fbba68f86665e65bda0da21883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
