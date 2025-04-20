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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT25NA3Z%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T190145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIEtksSUyp6bOwCOUISbFd4p6vBljthRG9Up1GClfGGjnAiEA9SNcks4n73kpRM9xoeSGCu40%2Bc1KmaF1pc7KVN823DkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuO1%2BhM4Meg2E5SbCrcA%2BkmXjsPbmIogo%2Fsg%2FdxxGE8jF1Ej%2Fslpr1s1Qa2%2FbQft5Q8NpzaHbSkZpnbLRohF0ytTbTT%2BmDBEW192DwhWXQhW%2FhkCupMcETyY0MXnmdz6TZ236IO8J%2FceCI1zYD5yGDiFnxJDO8X%2BveeQAmKw%2BloU5osrq10d1RJw%2Bai0BKXirM4QCBBSG%2BHnA7lonZS3X7c0d7eyU76EL6sLJTkBGoBDYgVxwBPya4e%2FFyPo9tQNZbCz2O9saJnhiC9XfDwy%2FxpwqW7IUt8tJWzEkWrP%2BWS1%2Bxz8OePgUjTCouwbf1X5JW%2Bitjc7tjzI2anJuR0cBqUZG6zT5t2RvkztLIk8ziDbTLCC2%2FTLDs19HhpUvAIYmjozCfc4sx2CrNWa6dNat6acAfuXI3bHTzM3vF1HDC8tqR7VeTkP%2BANVvGkgdTvNvPRB1xaSheD0JK1Cp6Gwz5Q3kWeL3JIe5X9Lnq2Tx6C6A4VeaINwd28Dyg8FVTNFnbeUZK94gWiVtaJ0tn5%2BeHU2MBbdT4meY8OzPg1UVsGdV%2B86QI%2FDG%2BdEaFhYn66PaHs0tyH6RuBIIlibmmRjsg2SXLoBHAiypeaEYq3jOeQSHMzPgdL78gEEHTjYfITi3yi%2BES93KAlFK0GMIvmlMAGOqUBw3RloPbBZBXLVOFtIA%2Fp742LoKAg68%2FMO9p%2BqrlUkXMwUeTwlMICvepZvcXE%2FmnW4YX16E7MQlBXgK6vlqryoyIP6G9%2FxmSDWULih%2BeyhexG9OgLR7FDWX7inwrdSiFJJXe53iGh%2BivZ6fW36pR7uoZe1g3txBR66HnYJ5owaNkiLcUDvxBBCP55HkwD3SAF0E4I5a7Pn8dyGf7dtA5ZtR1pHAQv&X-Amz-Signature=164f4a942497113f4b2e20c17ce3e9155bee15d02e14ead26a9f4d0f4a65d541&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
