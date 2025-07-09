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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YSQIQN2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlx0twIWlrDt4LyXieLWRqqhFC4wvFIEnMGTz6hqKoeAiBIiqRtz6RL9uIJseMNqDw7bExCBkpBUPWmVKVBNRIC8SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3qElmbuAYQLI22%2BwKtwDl2ER0MXhoO6S9G7vBpLuOvQoNt5ALZlPMcRHvRk2JOZbcnXPRVL%2Fh0QvqoX%2BFBaeo0O9ZTSqDwomeBDe9J%2BnLaIrCa85F%2FxjXJ0MHSEmAFT%2FFhEm4YycPA7Xcb0heCuGDC9NzWUGcbAEo7xucFOY4JezF89hrd69vQMWBwCXtRysD9zQ%2B1SJViK1JYLKEwxp1zgmLU5RasgElaRnf6GuAK59Oyh7hQwVdokPQdhAe3VQUcYIZcFPczxa8wYaeD55lurRS1unZ4jjfqnzvHZfilpq4TMzCHEcvbKR5rQQfnntFoUp9oorFMOocAjJnfGDoFSFQzivrFlYIvfys8QSMnZG7%2B1hkk9d4Uexh%2FWk9GiuQaXa4ss2muypCCZLfk1PK7n9309rDWg4pZKLdZ61%2BnbFUAkhqFt6kye%2FjAIuahMhoD4mcy8J8N7Mu89GK3xwWmrLI%2BW63bVzpsUAI2jn7ecgTg3SZU3ynb7ZdRkfx8Q5NgdmIeqnWJzItdEsrI8L6%2F4rBHcO1xo980LZxehaY0o7sqoBbMwojcqWoYyUW4Sh78KTB2%2BWc1IBCQS8sGEO50VJI0pjyKBw74BPmReKWfY2sRhGSbeSywOF5Cb6aJ81StFCPADcEa8USbEwie%2B6wwY6pgFTJB2IEqv9CAavZjdqU4ruPYG35dHTHhmfcvC8nbdqRu%2BuB4b2XlNg0afb5tWnr3szCvSn%2Bf7nQ8PjdhBc9ek5%2BEeVn4hbuhUaBIwHowTV%2BbtlanBKmo9VqZ8QqkrNwbtv7jK4BHPOQCguQ9HEiwvRt6lfyMlclZ6P4KNRtaxxosN%2BZbDOjPHN6BpbpZWJGXmIwLBkMXOdor3ehlM4lVyG7gGqi%2FNZ&X-Amz-Signature=47bca0ee4bd8f68e3d4030b7fc9c562d84c89af06d3d99c5396f751a5329a13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
