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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTZ6WWL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC41sQp5XKtmndudf1kOvQMEFOETu9mi%2BVRsByUjzJVmAIgbKXC2Q3oQ2enhFkQWddKe8AvjDe3SbyT5kDfT40nySUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmfdRMpmtLHSx7dByrcAxDs7IfyR9fi%2FOGgmWgG%2F7a3qJCjlySJWr394aMdXW%2BbLf5KLXp%2BK5%2BTh1%2F9Nd%2BXHXUfiz%2Ba2LrZSrLsQGh%2FY9uT%2B4dxpuQf9UX9fzsOhLa93E5jYfys%2F%2BAtXbBV27WYn5a1m1PWMvB2V0AZwrswZhLPESKnV4jxu92RCoy8gqVvl3nFwApJGrABLpHp%2FYqSvBm1jYiwwWZ0LIWnWlJ4apHIff0VC38YE4eeufC85U2X2qreRTZOOz98CwKAYrnLMvNu9v3QW1ghzWztpvthILXl5OnsxIxIbZt2wkhD4oCukfoEhrCeNm%2BKf6ABM3m2CCQDxOqKbMoECku6UThJQRVIiJo4DUtg13qF8gZVzwCPa4t8RMYFiECkdQKb6mB4zz4BmZae1hb5hf%2FVw6GQeRaifOkFu%2F0U9fzfrxNejyXjyn55afrkMddDLVKn2aNA7jWMAA3lTVaRwTZq%2BLiJMoG5%2F1tFvnSWnYK9RHEZwmoK46zBOZ4fjfGOI%2BFEPtNvqzIEpyGG6zFRZvfkRQd7OhXrtJN8xeoNyUVBbidiHIy2xi%2BqwfqmJP4MBd915uxK34fCgEovBOwfXiC5tCHanrfIxtEKYDNPZkw9%2Fabx584Ei3H21jqwczVbuJeCMM%2Byqr0GOqUBn%2FgQ4qEs8GNLo6qEg5V682OQEPPgrVPgkKxq4IXSP9zzJwWx%2BQ3aBH%2BTwqNTLgDhntr6BWuUbuQ%2Br7%2BLa4XwmPk78R6gs4QloVRsGWK6GYmGC711D8%2B4gfMooJf31qKDVM0cAtDDcJaG%2B19B2RfRYCkfoKfEyYz07FI2MPiTYeOucga8YDV4iktyLxAZelIqGTs9%2FHXNuUJhI%2BSEX3uNLGZirbFk&X-Amz-Signature=21e4528a90bb106f00573411e2b11d6779243e1161d105f9a68a01243f93afbe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
