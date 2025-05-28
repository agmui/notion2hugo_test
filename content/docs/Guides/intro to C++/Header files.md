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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XM6Q63C%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh0ro4CfCHodmrg6FTRBNILiCm86oeLmvHXmSAORkRCAIhAKURG7cB%2B9BOQ%2FqktVZuF2SsVnhtqgfxX%2BVGMeaEV4mWKv8DCHAQABoMNjM3NDIzMTgzODA1IgxAuQVJTkXk2yd%2BtMIq3AOpGWFB5rnV6IGqzN6jyuGS9SezZw%2FS1A%2BQEwWRon%2F1gQwSNNn3oJz3PxGKGYsRyGE0P1f6YSP%2BY%2B8oBi7F2B6k1%2BX0WC2E7Gmv5VnI4okwpNbDtVPu3U5sB3D%2FJyWEI9ysFDFx%2FUfwzUvUiWtzXi4MdRbY17tM7vl%2FTkiqzk1mZ4wIeAspFSN%2Fwvh92iq%2FU0ZiJYCWnz7oCxK2W2g1ttQXvNkUlU6Hl0VKwOW09NRcLuj4a%2FcNCqU1amBcQKraWH6%2FgOUXsbdohNU%2F5SSJhWK%2BLrF7AABu8D5LYVy%2BDMWmkZdqtni23zgp0HnYwyeHfhv1JLepvU4kOyUrwRjd%2F3PTrYOMDwmNS7SGr3SygKmRKI%2Fie64hatIN%2FD0YMAesLUNjJxnvBO8jhLx9%2FEMPSPsX9N5Z3Y7QNvt2RuahVHVz4A%2Fvuo0KzY%2Bd2PXAMGAtAzfpISD3giJ%2FGHDRT6a2ayr5wfoUGDjfU0cfaMTmbW0plOJxAwujWkvdKXBj295DcvRBJcPz7CEBM%2Fs6UPZS%2Bmlmh1r70gNqR5cgwegVv8NO4eWRl7n%2B%2BbpJh%2BSUrIxy25fUss3%2FfzQSneYfJQxhd3LmVeddhAY5aU9AUNKoZ4evSW3njVw3VjOrGYVChzCj9trBBjqkAQYYUWRUy74K6YvteJ9rTSX4t5dLA6ZfOjw%2Fyb9CkNRH7UnVkXyLBSIwyi5NxYtjA6ySWOQUtTTJSD8gNl%2F8Tt%2FO1erxos3UKCC3%2BUyAp5lGYuptT%2F18pUNNRkzGzqoYkvFqeH9WpfjmIXGBqUTwn9%2Bb3saKWhcwHSGL67flZJV5UCs10sFx%2FwYPoeGnXTbw9sIAcTRLz1seVtWgB1ENTEb9jmY1&X-Amz-Signature=c28cb57951c0b0f7d4b2b789e951afa4ca917ddb7f8e4bdbb41a4b8633ed51ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
