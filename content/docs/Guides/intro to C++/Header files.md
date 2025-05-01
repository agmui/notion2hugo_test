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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHXWY6Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEPAHoNnf9aNWJgn%2BHX4AN%2FWiX9qJfu6yEXpn9azuYQhAiAEsGAQMIKhtpvn6FrQ5mRIUBzYpG%2BaZaLAY3ysFgMP8yqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKKks8mT7RQK83AgvKtwDDt2gU7F1OnNyiiIDk9nEaz%2BFB%2BfVPS%2BGu6BZ3QaiFjl5eQ5kOI6zllYGPYpZGZJfBScSGGQHimDC1IZ3N4ozaKG%2BkwqqzJc5iU1CBIqHtRMcp%2FId9alMkd3la%2BgSNu3mpR001Ich99ixh1h8RXy9WHRMhDICzrgd9pQ12qzxU20iroSqfo32pcqHl%2FyF9L5K2U%2BqO9hKujFw4WSW0mX1uWcJFfnmtrQRE1aJ5zmSef3tA6xjJzUDgaiRz2TVXllmlwXSjGPhNRE09fQSuNcKB5arpev%2FPV1HUYTzezv9bjrWLWY7TLhrZQuZLgXaldq78emAkg%2BsHTba9eALiJDRonV2a5VwGGjrr%2BAI9Gjkv7QHOSnVxxDOMmj4Gn%2B54Pi%2B3TAvav3Fefw43seiOUnyABbjf7D5Gl5rpaeXTtUJq9Ykxt3xVNTNXi6NhERJI2xvoeua5Xewlpc%2Fcj1n2xiGMPnXJdWsDuwlsdXfVJjiYYQ0EUTxPYzI0YhOXkbShASD3bOAtpziH3GdzA3Lsv%2F3MVJsLWk%2FxAGxvIgtsdLXGTDK91vUFg6Ib1RpexGO4z7lenMBQ05JGHHexZWlgHjBdWuwbMJbDPeSgyrOOD7p3LjM%2BARIQGrKopdh69wwrIPLwAY6pgHH7%2ByQi8HIkDePvcDj%2Byxk7v0UwfEN4j8Dhx4A80ncVBZBiS8%2BzJc5v6SEl0lTJxR%2FN%2BLYE2UrbGdJybTigVUiI%2FR9M9nMUII%2FbMgQwd31lKDGcCYVNKBx4Ui4dYVbLX67bwLtKUY56fllyrK0jMMbiA2UyS6ToiawERrShckxWHSPKR3KZrKXLdi1oKoAfVR2ODiMhIdavP1c8XYclgju%2B0ZUc61s&X-Amz-Signature=c4fd49ab22e9e3cd02e6cf5b5d3daf07ce785d68fdac2395719af718643c297c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
