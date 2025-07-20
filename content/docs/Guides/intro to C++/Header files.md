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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4C6F44C%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKU7VC3mXRrgAefTYT6sZos5Dusn117mGOMkdUsphacwIgfTY6iGmIKSv%2FxnCDJmJADpdguTjP0cBlyjBWSnLB3BAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfY9Gh3SHb2ZIWvYCrcA7ALp701QZgra1xADrXBuAfTomTLUdcQFGMlN%2FBShgl%2BE%2BQqnAj17AptHqz7pCu8%2Bf1HJc%2BPcR1W8A5SYR%2FLyfCOw7NhYJ3bVwaFKhN%2FuNTGB7UPcBRzMraGZu77BHT964mHQIgDpxc6J9ncjfQv2cFg5ahEpcs8cfIeUsMlqEwzxWxCimiNy%2BULHwvtNi5tFtS7glIJOb4scrQXo74zeg%2BbYZd5rvkWcm%2FYJnhnCZcOETB23EeSRaIDJWD6E8XormxFOmdAwcmeoOhnQf0oiW5POKSwP0b0UcQhP01vvXdQyEKptPkB6jrqi0J4ac3i71R5XKcn3qjZz15OPzifdUv%2B%2FZaomk4r3TPGcfuNorhICPzAZwwQ%2FjdHyhu6VQ1xxpc9tqQq2O0B%2FeTf7z0zO8qLvEd9exncJg6C9Lu%2BIxYvr8BOPiRCy%2BPPQkYu3qT8x%2FVV18Uba0sVXmVVaW635p2vZEZslPGlYUNu%2B2I7E4NKZmRpNL3e76zWLK3apZIjN52d6CR6VFlYDcJz5GBWYxT1a6a%2BuAcD88PpSsyG%2BfnjKihIGCHKBzaWDdp2S9DkiHU9i%2BZ4Y8Lys5%2BsCmeYRaQlrQosvuwJmbtWAcfXRAftzlo%2F%2FzHLm9udSygMMIOW8cMGOqUBg734ZBQw7qlx2km7GTzrTMYBEuqbpSP7n5VZ675IGWXktqn3xhO%2F3djQVwgQ0y7r1lz2tARRZ86O7UF82akdSOfN%2FY8i81pyK4%2BVGwcG2SULBKCX8JpeD1KwgMnnXJfJbg1%2F%2B6wSahyMzPSsGxYrX3JB6KcpxgjvD3TzPcf3F0iY0rIHCyRHgRT025PQYowzWBzAxzd1be8nu8vLHBdlET3WlB4G&X-Amz-Signature=7521884d6837fe849d1362ff93408094f8a8dcaadeacc250e5d51be7608da423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
