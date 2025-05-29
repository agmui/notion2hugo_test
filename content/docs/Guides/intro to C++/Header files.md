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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYDTIKP5%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8T7StM4nu3Aw5nVbdtdmw3Tx34Kls%2FuolqgwJvMdm%2FgIgdXLG%2BvJAf3oucwA%2BcCCJz%2BqH1%2FnEQ0YRv3a9S1gVQ5IqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhn6g7sIWpvSHFx8ircA4G3CjPUNYLbBtSeSWmFxZKAO4uR09JpI3ui1MEQpEv5gKq5NTkwwtW5%2FiSh%2BZ1q0y5UKJ0d8F1%2FAFp6jMw1mCDW2xHlych7xQ1sZEngwLDAylUZmkT%2BsdTL1cqdXT%2BaYLzOzHaFupjZkFpjJc2HYgf9KLg8KvjayN9zrOxXabv5dN%2BaFr%2BQ47zP97S9ubjAkc3FLFieLyqzWZ1wlEimt7khfhZBKgUpme%2FguBjucv34mG3nXinG8Fp03Z15BDHs8g5O%2Bp0Ras9%2Feem%2BfTKa31Xc42aJ72D%2FWMd2WHGecdIbvYZlzVzsk%2Bkw0hmMuuSlHRfszrAjsb%2F9D98e4HmWJ6zJgIRww3B%2B5whTMmnPuhp9QRf7i4FFXktbrioHwpG3W7Y2J62NqLR9pe7htJjbRaAS1J28AtgmOsfcmklVk3HxI%2FNuj0PcF8PmjrCD1bWboNi%2Fl02m%2FQdKpfYZPG5ko2brrh%2F13QPI%2B5yiJFXVzk9FAn%2FqXHztWh4f5AO1T0wRAnbxI%2Fe5wkT851WwoS3%2BYahq3ZP%2FyZiPoU7FETwSWquy98Ge3Z03P5%2BZyxB34ucTkY8kwPLzgWNVGy6ehpiRTKFRERv2QuQ55ECRSMBO4lngbawVomERkwjeYcemMNSQ48EGOqUBSGtgq1XJP6GOkRdBcgjkP%2BEwpCbnPQ08WgYRW0HfNlZMKRJ%2BwFXE4QR%2F1oyum8lLqGK2e0vmyL23fzGU2XssvObVK8s3EEvMPzIiDQVuinb9pUBZGbK2DUunuAhqauVhc%2BD8omQ%2F7yG2C0HHKFfT86fx3Hrk2ZXFQ4BK7oM%2FSzqiVmHDOnjxDHgRenXRUd0B2GuU8NVdpgstSwAz2uek%2FKJ6FH1J&X-Amz-Signature=b3711d3bc815bba381cd2a62da31071b9c66f2b453b63b6986f513aeaac90ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
