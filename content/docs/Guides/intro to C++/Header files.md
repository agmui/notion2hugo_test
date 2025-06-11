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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHXSD36K%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrGuKZAPCjP9CrLVS%2BoohhgR2TYua7DZabeDiHKia0iAiEAvr%2FDedDrbXForfrpJDZRa6UtyB3jfWE4pKmfqwaMqGUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaBjhtWowT2KExiiircAw3bFcMZTrmisxxTGf%2BLzY2aTR%2Bb2nbMeN4mCB1P0qNQar5m96WNrrac0LttoWMjLAvUO4TWCkv%2FlQkVDiTw%2BVu3xJA8FF%2BEUlFr8tDFa1b0TTnhqwpn%2F65dtSbGe%2FPrT4Lzfk4goTvWAcyi%2BI3UKVHe0PGIvl2gRY0g6LMOaoijCXvfIRfjEgAgmRFX3R%2Fg8gRKeZ9rKRYSiOuPAgMtoXMRCw%2BdWmDjewu3mWTqIXZ8eVLEAIFK4BSxEhncx6YcWOenvbUBbUA5C%2FlRosoZ0g7RJkMyLkU885C9riCK%2B3azNbCdJlAp%2BkjYCCY%2F79WUfpsQpKpFGvOa%2FkFN8eAUo6TG6BhFFCfFhANAuXYf2E8wTl6I7%2FpavTW95J3Cglh7RmWLvZW2TRpS3lXFK%2FwHPpCsTjNgmVbXl907NBmqpDEd4Tv34iiTMl0Vm7foe2W9cCnS3eyuIJXck7ZqkcoLq4gkaTUkmDmxcT03GwUklltuJy4wZm4VFnb8a9%2FQg8g6LFiaHpsRt%2F09kuUkkzFinKBHNhhCx8JDwZ7cujT8QFGyVlLbhWRK2i3epCkIbOy8FCvp8ZG3kMyFcRjO4QKSSqiFdPI5QBjWZj9vL2wQto8cz3JWvNq4YblbiKsmMMy3pcIGOqUBSqs7rjhjRA6TxOcTFoP0kqTUqX3PbQ8l8%2BVM4GkPvM1UjC5a0JTsaDpTAn2S7jh396YACJrma%2F%2BXOY0%2ByJ4XN55bVoHXZcjIsKQHc2j8qsgyYiuqlWQ%2BCu6bvwK8nuWWWCDuN0kUQKmWZiCdmXqcWxaGnlQYkx3ZlCXDWGv%2FQS3htMszfpvPQS2rGu1%2BS84McPH5a5fLvB9D7K0TzfjdlFiypxcN&X-Amz-Signature=c6a7a69b6ce74ceb8b2c365b51b27e9990cfafdbbb5871e6792fea533ea3f0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
