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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAN3ZQ2T%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDve%2BVDh%2BctFWSKHQ9Q%2BhaBZ2x5CHHwMu57mRwxdSWeDAiEAgw%2B57pY4EL5oJbs%2Fh6359%2BaM4ZZUu5GF8IHWRBlifxoq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNGFfltzyKb7UlaNCSrcA0yFP%2FTY0sYgJspPHsNrNAkTpyQzk4KhXLOotno%2BUMe%2B%2FBMDGadZbJbKaxVVbNTgTu3jcUz4ejFbvMPZhReYelErZXtUwUwUEVwA5AfYfcrto0%2BFV0YvMfg2C32%2Bt8jmg0KPn2iDLDTc7K%2B%2B%2BjXU63HzEhk7DiBJFCKlze2OPZj5myu6ZZdvqPz5a7CnqA7GIcPcBZn3aFLWVzUMvfFVAETcjyQVLy0BKwz6%2F5w%2BKx8WdxZIyNPOXsSboxC7vyESBb%2Bmif07cJKKq3ppvj5K7dqRm6n%2FFcPDJ52CKkDnsMhR7xuPAmXHKKBhLc7%2BeCCidwySxlKMGMS9AMlpRIHyssA41tTPrALT9nszeq1%2FNArOs7vwBC%2Bb3CcJjIGBlU94AfxcX8%2BjxLp%2FL3Z92haAmOzEwLG7Tic8nbsaTn3FB9qp0MKPNJU9GDjpzyeEEiqxLp9LwnRqnV3NLPiM1ZUZb%2B%2Fwam5LggqnrFgSCU%2Bw77N9Vl7XBmSueiqAFy6TzdoZdC%2B8FoaplgUIioVNd%2BMPug0SyNKfm5oGxs3Z1i6dzFjQhqQtIMPkDh08MMgRIY6yFaXN6Tdx9H9AAxw5AjOCTSIiyUtw0xBBh0oYTceqyJxa0GJOk3xih0ySX0N%2BMNGlk78GOqUBTDpCDuArB4OxdW1UQlopJAZ8%2F43gfCWPsW%2FaLtEWNoVGmAxT6Lp4ozbw4kHB5jJUHjXpSmYIBTlTBRry1lmyGiwyBQD8ymCo9G2L3ZNC8CZaC7YH2xz%2F4N88fycWcwMaqIrkjOFl9UEH7sD8fHucksL9XixwHNrfsTp6wmWahLYhO2r4JB42%2B1bxGdRki74gwhrE6lRJLpjg5WacQsxI2j54r3ux&X-Amz-Signature=1d8f632a40fe784d5c2db59f033b140e1ee6951069e5419b6a6505ac29d04da7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
