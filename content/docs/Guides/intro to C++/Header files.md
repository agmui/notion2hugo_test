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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTD2IW5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIB7xuBl5Iq0dTl4FyBgVEHBXefZAJ%2F2qww%2FxG6aw4JI0AiBHQA1cgHEDbN4fvCBK4u9N199GsjK%2FiWtAo7tNX2yS2Sr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMNxoLPdRhktnEDZK8KtwDc3TZGHMnHCMsUPrYPmlBjRgi9Dmp7Kmo1iEm8kMfqc7SIjgSmZyAX5hz1ZGcLI%2B2I%2BKh0Gh%2FPlh%2FE6lIYJTCU%2Br5rUieG35Hq0bDkPdBCdlD1Guqd1QTsVnTWI0WdOt941amOGWAGP5F2chtt276hlSOsSTTanK8BaUsqrkUgdXSK4wt2F2lmp%2BL98KEff4btRg8oXym%2BYnKreRUY5KrKU1JmeNsE4Njn76BUxYeKlgq58DhfDTXovzycJXXyLtAg5As6r9gWDZJwyvPxnSYby0BzS%2FmeoA%2BQ4E9AsLqNfwk%2FN70JJjPC%2F%2BD%2FyEPihdWnO0zxdSTuAyRcLTGWrPTKPnV%2FH7UkJzlL1qJAduH9R6DOpIB6EJ8SuifH0S7SiXOvZ66zPfwJ0vsDJU2aDM3OwSKoV9I8Fk4x6D16vZXfZVUI7APiNHXrKnezMi1%2FpjlBZdzgOPT6QsRkhTycOhEL7naKNo2p69x%2F3zPvAzeP3T1iUTDZaHBNBDmZLDOje632Nd41ljnhP9scsoJmy9grYGPRo0TfMhze5g6XCFfg0H1m3ZOTW%2FPlEzaV4z0bJdx8LhGmylBHrvn0C8OpIRMU82Qa0jNxY9OHVDf6cXPZz64bzdfoUx11vG9btAws%2BrLvQY6pgEOhu3ehj5AoVRf8itW0g6tfYAsJ7yu2EQutGOUaHGuBvncn%2FlwGksksvbSjj8LD0Rw9NaikCBufcI2Q9Iwlghq5rvOTG4oMHyWhHU2zRCYyal2lJkunmnp5PgEG2PBk4f6N6sujSPEZk89jPR9SMj%2FRVwWfuHBicQComr8CL9LMsMZJAwyNV64e%2BADxl0Fv6E7ptf1pVkhg8g6LNOB3n508P0Hd%2B6Q&X-Amz-Signature=8744d2300101ea14aa1af3c466fb239b77a7f3c875ca22d3dd4064d390e52cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
