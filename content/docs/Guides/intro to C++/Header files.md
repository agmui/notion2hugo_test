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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5N3GXI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeVsS3KlNpIb99VehjlPMDsok1%2BiMyNExkDt1%2BxxAYNAiA%2B4nByM23Fl3IIwBWi2vAbZx0FteUhZTKR3IcKXvRNYyqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLwvllL9a6QodJO8nKtwDo2v0goDxuWAM4GTx4gOdTIQzS6Ttw5yoRhP5k%2Ffsa77WPe%2Bmy4ZiuMqKhTEQscUW8UZ8t3aU7xMNjzOHAWzZcP7XY76YG7Ft%2BKesNVPduydhikG%2BBUP9hkZycLfqbUxMt%2F1JFr9uM%2B6A%2BqEbwWwOHGemx2Ya4ddjjbgcWgYTraUes41S2fUQ9HppIYKvHofLeN8zChzjY09wSa880lbDw5Cdja6atMehOTsHSVXDNnmahc1vUv%2FekTX9%2FYrZpPYnHIix0aapXat725jDhUQfs4pBfynKb%2BciWpkr44Ynptb2kw8tRFTTNhO4FU8XzFoe1Y8uMhrnM5D9tP67%2FCTNKfat9SaDJDd6nm6Q9ruwEkcD7yfcGcBUfBNYf35E%2FzLh9jDZRSGoDfgyUdvKdF3b773ZmNBCH9NLCdYmq5jaxNCAP0Iaueq76gTjYxTssAQ%2BpZoQAlLAKyVGvIuh7Wwx4DLv3FDF7dzJ%2BviUzwLqbFdS5v99zP78g6RnlEDQj7bSi9vtS%2BqefuI7Nm4Wwm2tvJnZw%2Bp1Mw%2BD3eB23uckaqqayXxUqBu1uABVyBwcq7uj%2BaMUd3CORBXOQx0kKVROAEDXrcur9Lw4KY1jn1gh5bWkctvAEznR7aXgxuEwjK2BvwY6pgHLG9Lb9OIrGH7bsLT%2B3KuPRg9uvtd9Rx7CYW4EO1fl3sqk3pBN3YBFmdXAx6KkSu0fD5WZG7B85RICPHLkDdh65NZSdEQDR1kcYy0OeatkorFLo8jHhFRFFngQJgHGAMi4Dn4ID0qspYMe70b4tIzGNIzqQV%2BN7avGW%2FC2HmtL0hna0wchXAX3tNDVs4LXJVgGrbJeu%2FKtGn%2BFdi97odxel4h9Errd&X-Amz-Signature=dd67f63db6bf677c7bcf5edd2679eb6f45f9cc4d266d3e77cc19b6fdc41d5874&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
