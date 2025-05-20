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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AOMJ45%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsjxYi7S8qZBdUC1eQ2n5xokTUooKQmHEmnyeqmp3s5wIhANUnkGFA4XWL28DIqJ2j8ZSEpxhQOCqkM7p7cyp%2FuoeZKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQFTCUN%2FWeQny0Mkq3AOCllNwWPbG9KaKj7BJznyo0E0Ttexn3YqOUxwHfe6LE3fKIiyMkmZMCu992JXiqLMHhdqK9u4OHcUaneRpQTIxelTkuC4f4f4puUsn0P%2BMgw%2F5cqng2JN9dBYs%2FjkuBUfMmQhKjZjQ2%2Baa82uSVyXOLhPON%2BLZ%2BM1SORfzaEqNuG2qT8wjC7MMFRHywfI7SOrYxAK11bSlxTHZ2bzWpdJ3z1aoucek0CERbGBxeNwviAVGY6b76SkHiKepYzbJK6GE5oP5lqeIFDtYP3NBHlqthMGR0%2BA5aRtENb1RxBqquG19yyShgNG9JHBWmSDzCbKWesP24IVkmOX5ZTShJmRlYcFMSiKLfTpYsT5DRK6TzOMQpjbvTf2Zk%2BbA3amL7uzeVefyNQ%2B6LAz2wGd1n8Bte42oRZfxYjb5wxgykTkQHoWQsKfYAc2JrN5zJSkx9RPWxlBLkvBwgvBJlcC9PtAlCH09VcI%2Fgeu5mYqNoZH%2FZhAnc%2F3Bz%2Bsxq4eHIq68Pka9bfJU5hnO%2BlB%2FKAlLt4w9AvpBnc%2F5loAKfXN1%2BmRov3uDv3vDiTT6KuoQMHp5XW1SR0k89GwtMPoG5eKMdlqdSFyupQNo8p2ZFee4bBkzaYw4Zf0OhnwuHqaIoDDYy7PBBjqkAdrfH7SJrRnPG5ntwrCW2PFhdS%2B0uhoQP4ZdRkXvOBdmf5e9Q93OwhvHO4j2JYm13vv9hrI1mpBj8EDZseU19Km2cwAIUwLsLIEpdB4BaGYlTinpke%2FHChTnXEfH4GmC1z2reFf0aVbeIcayrSQSvfCYcfBPU7eTKMFASLtNCJGdbyngQXuLzjyFC6bioVRygtfvsOgflZYiQBca3HU2gEZrPyzS&X-Amz-Signature=6e7d90809ee7ef35058f228e6a1f4094d2fc5ab441bbc701555978aea702730c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
