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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QGFY6HQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T200120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDGbtKsuIUJQ%2Btdid5bupvVW5XOyA3zRx%2FTcO9YeEnXfAIhAPSRZwqPDlpKbV2IN1I7xaD65mKTJYldldigbg83nhpKKv8DCH0QABoMNjM3NDIzMTgzODA1IgwpfwL3HKMw6M1bNDYq3APtTT4rci%2Fpk80iVwAQBHv8pXhQt8u5ftNx%2BEVwYWxrY59%2B%2BJQYwQjxarwl%2Bllvw6MnUUF1ciOjapcEKj5n2zylnuzAj52xK55mBKGuL5q5vkhR3EAa5e6MiFECW%2F5KplioyFJFHHeUTrKu3njcPG5QFWteHnV2kArwXooGidOgjLh3OZ%2FJ4kFODB7lkGjYmU55%2Fh61i8BvxbVMieWA%2FmhbZx6ChQzNtVStQg9Fat%2BAInmlv%2FlTlF3DqW7TXO5u%2F8ZqlKlQV%2FWdIrTq32LIQ0IC2f92t3n0p3vpmZNZ%2FLP9aWlX6nv6D2PW%2FseLZkOiFIvU30oibtgifpVJb3tE8PVm311%2BeDBhtR3sOc7AWVsEhN3SHk5JqGwPBE38V2hLbHH%2FJxmUfbsiwopn6uw%2F%2BA2rx8w0izcqZ0e7nX6PNTSSwTtciz9PtwYqJr%2BqEX%2B7fW4bZXEMdbVXozAjThO5zKChkP0STXUUBFcwO%2B9CyqAU4V9uYJNdUGCvk%2FUjNwIZM%2BuAsCgAURPzGT5VKH8%2BrmKfJH1sCNBkNpxBOBsyOluKmBl%2Bl8u5hGGtgdH6Uufogkl%2FiLGSItscn1O4%2Fj8BhEABd0qeC78tGxiKLOp258C90XgWBhvhC8CeL7UZwTDn4Le%2BBjqkAZq0%2BTvOFn0AlOcoYFTiHTIUI%2BUrTolyhER4JJQ9lMJrXT0P8iELmCbdPPAB%2Bqt0BOIs1V1wGf6y8oeCVF9YbSb2rY3pDF%2B17qoDoOmC1KiPV8YgL3KvTuT92R5zec63ooOIJGiowcok7kr8WlrK2jtNZIQYKoM5mM6hBXTFq7FQhcr1zLNH2CGojhth7f3JQq50DchrPUJKpychRC22fLjsqyTA&X-Amz-Signature=187dc212f277c995a8cb4ea914acc770078aa3ed0fdbdba1b31d7450d7919beb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
