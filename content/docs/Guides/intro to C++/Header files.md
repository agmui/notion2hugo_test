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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMP23HB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ctSj2K%2Fptxo2ATTvlIrpJSgE%2F7Ist039pJb%2Fh17CsAiBcIfRjor8vfAyNnsxiJFVvVye8sz1mnAltdHXWJOwYBir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMIDflGJ5QbgL8IbKgKtwDA90jHLAFUZg%2B%2B9yPIxRcgk4ySy4wJBYT74NddyXLGpqy0v2fKGVQSy9br5sCIurXuyyuGAcfi8juJYGk2g%2FFy2nl%2BrgttiQs3kvth2kEz4NgO7ua6rsgpB1%2FiK7DfDQMwxOfw98utz2netMf5YoXPY3DAkhKdm4tXwgcTVdWjcFyIzgMl2wyzj2vYj8P9ATtnU53y7ykZOfSIykvf%2F%2F4b%2B%2FqbHwS4kofQpb0uZDOoG9lwtPx9gNBhDavWtVKdrInLTlGfTHLMjAqqQT7vFRSjfrZekKK%2BAdwkdZTj5yjO8daS7uqMojjJA1KSsQL%2FLeVV%2F7hJBpWl1JpoFG5KbCxLp5Jcw4Ymw6qOavKwWUuo3q9m%2BRRZTKARDnkzVkrTVvU8rMLUuZRpsd3CIRBfxD2wLGiAZA2E3x16CaHi1w%2B2Gl5m1SnpAc%2FOq3vQh9taHMjaseX%2F9UGE6mL1PhrZeLoXUpXsUIKbB79Gp98QQD2%2B%2Bgp5wULX20HtKq3SIno5RRWvffwVymxS354px4nir%2BxT0tFEceD61ju1%2BzC%2FHiErYaZFnriVk8NX1nl5Jw4GjShRfIaiteA7gWO%2BdMXQU1U4MVa5b8CrDdzInScqQIlRan4lQeEObNoCOlnAKgw6aaPvwY6pgEnihTyY%2BKJB%2B7bJI8RY3lLId2a15oST36%2BG8MMt9fDg351aWx0yv6jRARAgrWroEi1YdArcuJNh3HUO0mwpiXXpjcX8WNytthlxA5pmg4HlmVRJ90NeXN%2BKP6SPQQn2Ri6%2BqasIH23GP8wX5uEzDwftUGTdUMTnEOcvPrp%2FEuxAffl6w6Q5tGmD5ZjtoK7oKUmWdqDkskTTdSIZs4JnoZSf4YaR%2FLp&X-Amz-Signature=c7ef5a049f250da59bb327be796fdd2c15459029b8d045c8d6af331cb0f2495d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
