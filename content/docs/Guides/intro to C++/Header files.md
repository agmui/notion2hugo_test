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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q443CNHD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdTDZ7a7SPkluhHUDp1kLmclv%2B%2FkxznoQMpuDxNy137AIgMX9W0uP2TXTswCxbmZKwiXqgywwAu61mQE%2BgOWC7QFIqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCO2vm%2Fl%2BAu%2BfK1kESrcA5dOznRS%2FWXvn%2BjJrDk8%2Bxd8Ut4S4iIbyJHoz4yfLzavGdRilZY5WQW1XoczJ1twpBfBQDfCJlVCWb1jhBa63WFo8fYMpZM3mrwKZ0J927oz4%2BAhDmU%2FvTZKuH%2BRTSgW9tWIqYyj%2F1ptHxMX0dWyk1Pm2mFx0lwhLCRVgk6Z44%2B0eBK91gMBU4Uu%2BBzIeu2Nud2naeXljSSqULBVaZNWHgtdS4sTnhWhOrBF5PyPj7tHJqhcRVHRC%2FQCq%2FG2eyauuknIet%2BDVVF5O4NEwGUvWWwKbqC0okuL7BS6NvrbjESla3efYVl%2Bas%2BAsi4s0WWSysTuhjvA9fRkZOs5ZeGCt56bDVCPls8EOzraGHiRuG%2B0kfbBkxWHxOq89tXEWnrVGqA9AV3ypuyAoP%2BF3EJqKBLm2iOwDfqQViVwPj34DLqgVO6eaArBowEOlW7tOiJlYK5EY8DVYclZkSgjxjctINLV6M7Z%2FNVdh0kpYP3vAkM0EPgciHicv6OreQ%2BPh4X61I0tO%2B9%2BTnOFKDnfBof%2BjEtbQKrlGeEPodjoTYiXYZ5VwGhk60T8SIclUlkYSfLN9Cf7XtX8Id6Gqm%2B2KeL5wmg066eiuOq1QKXzswmj1YJOkFBgH3F1yjpFZSjkMLKmlcIGOqUBkbQXG50WKR%2F6V1vctPlfTl1mbUdcOb4D0QH8QAzFm5Uaf8k%2BiDc2PNLbMxQ2HIqeY%2FO7q%2BODNY4NsJoerL0322FxlkXM02MxDJKuK7u7AlvDcvXsxdJPR0HnNX7S%2F%2FYwL4aPh2uIcSVzNXfkrqrueSdrop7CjSVCyxpqFQZeGPEd9tceskJww2%2Bxn%2BNgAq7Vz2C8nqrRW4l7iM9PDc%2Fvkrt%2F%2F0qb&X-Amz-Signature=4e2689682015a53a4d6651aebbf1df7c9a15685cb22b575f62270511ec96158c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
