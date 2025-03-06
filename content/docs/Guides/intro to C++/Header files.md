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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BAGYU6F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsIqUMm%2BlJRkONj6h%2FWmSQTTVdv7YzFxSYGMoK2nGxwIgPlq2jNhH1CsnllxvzVZIkYSf8dVenOpF%2BlwyA0ZhHy0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDE15QDZA%2BQFzwMLKnSrcA8HrHzmLQ2jynZcWs35xG%2FfyTYEWH6K%2Bp%2B%2FtIGKM0qTnJqgwpfktWTIuAIdiSg%2BPguMpLxvYLV5vCB0xbVxfZ%2BJN1ksv17Ed9uO%2BJH8%2Bc9WcqfJSlduuMfqEvdXA60TaRHi8p%2BDEsRVayhy8ezbz5WNgaMOlM0nRkxlblbm%2B4kI1xPJ1mEuCH8yctxQ6tg2ScD9Wigz%2FDMg%2Bxm52KIjJHhu262ex3MZ%2B7ordyN1%2FzuqSs7KGd4gsNl1%2Bk0hKPREMnyivOjuRLy%2BZlYaphFLvidaKoqrTewwMEwd%2FPV4oyHlnpyRKAqKuxfscSe2pPx4ClzCMZRF4Hn4AOj5TGYbpV%2FUCzIQYBS9QImW5z%2Banwhzz5lIhGqOqgq%2BMmSTX%2BLNKkkhXBs9eRP3Kt5wIXv05HBRmHcc6dhmbZP9PgDT8F71FlKoBguzYXlnAxjXKDoD46SmegPN2ExdORgcinWfxc79v9H6AvJFCafWaeXNhvizm4FmPsPxEKHIDlSfpac1N3II6qQkF%2B5NfauYwaQ%2BjwXuAcITD1xVuotY5itAuRH4zciAgpGAcESWEwC2ltmPd1WqljiUob7JqTV3TJQS24z3J%2FE30cPB%2BAY5U%2BOtAFT3SqZerOv%2Fl64Ol%2BTy8MLTOp74GOqUB%2F6ls2Fqr5Wn%2FTWlXxsgdZZ3JBbWP9RKwh4WkZcVc5bB1kHU8hPB%2Ffn0Aoe1BFaBI%2Fe560smBTsc5nxbOUI1wBSSAaA2hm1QqeTrcw8%2FfqwArcks7fbZsOptKj8Z0%2B9YrSnRW6ByNtvnXA6jchnAJyJjY%2Fs78UZvTPqhGnXkevya9kNE4omxjezQ1X2ya4zBeTGu5lR0mg8SOE82%2FGPTwuNaGg3gL&X-Amz-Signature=f1782c8d98efe6f21c4631f47a3706069a21a3ee173c6515b1b0ed8991cea60f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
