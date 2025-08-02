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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E27XENZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd4ntXjG3bvGtgcN1I%2BYcpodClX5%2BIX%2FFz9shxoT3anAIgQplZ49AxQFntllzBgSlAyemMKRo%2BHm%2FKLO45gf%2B349Eq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDH2lJUyD32vMbRVP1ircA2KkacweeqIIho%2B%2FCnKRB%2BYpbDSlXM1gLeuMVk%2FGbwbeUf5%2BjMPmvLQQ%2FXE2vqRZxUFGjRh%2BXxtkOi0jIZreSVGHvQisGiGc%2FqgPmKqXTkMMhozsP9%2BXadGfoEFfCqNyKmK64hAyNKcu3%2FOsXp2%2FCBzDneSwG6bTz3rL136EuX2kLKSh333ewlJ4YObIHn7a7AyoMpdh4ITcAK3iSA1uLmFAAlAvFCQl6MosjWzu8vz%2B9P0uSbJ4M%2BdsGvUujTPWK7%2BPmiLgF%2BAvBpUuf5A%2B5HoFeiHhoPF9KHdGOUatcGfZmqvqjRY%2Fj61iUqf1XZcmlGfhf8heVirHnghyyiOARqP86p1zQMk6etcpQfPqSVKm2JDpHJG%2BmBLDSYN6NFFTi0GqppYQ8QRAEyl7PhxUFWP%2BOOgzm223IiOp%2FnwH4O1fB0YgcYxpuL5ySnLPUo%2BwzYbBcDeiHVq4ZyRYSzqPi5Igvi4XjNVcFAEyuicHI0GAxUEmX0cEpAeS49hPUMFjYiAeKPHeuRREkA35Zd22HxkWpV9jf8z9319gPbYMYnaH7h03GCltnX6fHcYdRNihiReJXTox8gBQzsX2iTqhl62vDEZ8MTEJydRVtP88OnMPtwRVp0lbboYK1E7lMPmSuMQGOqUBCEM7JUZp1dFWd3PmZDwY6v2KcJlHBGjQFDSe01syGkcl860%2Bp6%2BY7oMfeHOXGjOnTsmpshWOIkf6OyI0avXKUuL4LhAkUhL19KrWFT39u3ME4WVnj6bAqZ%2F7vBxQGbIdMcn6AOqBYPZzhqY38s7kf5gi0kQuUrKGdTFgrDM2WxvSb079H3MaVY6mJujzT5n5JmloD8wMm%2BDaC8WPwiBQOjk9iui4&X-Amz-Signature=7e723ffd5351a03836203ceab3d05150c44309bf86274b432da93aabeefb9ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
