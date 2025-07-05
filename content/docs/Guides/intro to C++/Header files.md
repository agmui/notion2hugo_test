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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCJDCFY6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQD1drLcVNuCnUPvzJS%2Byg3LJt1%2BpqgDdrPbttoV2T6VWQIgBV1F5OA11XljXjhkARHjzVZHcwiu4MKUhG%2BE%2FkYq2zMq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDLs34UoNqDeJkpeSkircA1R1F8JgYUR3obqRlQfb2RR%2FToxkzi1%2Fh9KcOutv1kHQssBWXf6xGIyDSJuUAct%2BktTJsL5ke%2B54mTJP%2FHPiv7W%2B8ioFzJtRjozz3hus%2FxbXwXxrGMuzXKfDcu4jSN%2Ba69LYHYq6usnscx92zWyKLWoOsr61b8lOrovaWRWIFs%2BM%2Br4HbwVr1EM3snruOE0OGZqbyiqxIy0%2FURkf6JhzKfFPT3yYMsLTDxlW51AtdkgVGCpfOBCYFsVWnlW1no4DjIfTNwzaa%2FFZyxT80mGwOSBQfIMmUvd%2FM2FPx8GAb9f93hHnaqq8l1shrT%2FAOjU3lIkkQ5DWtrhChiejMWc8c196y366gU%2BHm1Wbak%2Bl5XKWpbdcq64bniWO1NlI%2B4vXTM%2FWqQY80Tz7TDVkAOrvlEzW%2BVSTg6ioT1Z4jr8epj5rEPsaIQ89aZN39sfewW%2BubleZ%2FLt1%2FKjNNgJSW81c8DnlHsNC5B0dcUoDylXSmGWDHaVVdoStwPLEAYhfjk1emmmScc0YViCHtyj%2BS1KOwe%2BtJqVK2wopYqnJII2JQtqZTNQlUQFjD0obZ2MplN%2FUxqwSEtwprFwS38Osnrpy%2F6Jn%2FR%2FFGbOyMcCxkILo0HZCQp005yAkitnhDtX9MNTKpMMGOqUBlI2uiKnYpso7lYpe2hFOtEHbChxlA%2BlDwjlaaMJFH%2BNmv9IyR7hCzlxr3%2B%2FZoq2tpLGu1XqR31%2FJeh2W04nyptcCxAIy%2FWuc2NaZ%2FeJsEYr2XWqxMZvBsLxI4sUK48h47wvDJEzqwiNXJ5KU1dbDPjj8IFUv8RSo9WWh9Crg9o2yMaLE8KAaE9qp69Nw3%2BHANzMczj621TCTJXWf49Cmgrej0aZP&X-Amz-Signature=9f120aef6c6ab59ac5d1368aca7ee1b7d2e050b24e09f56aae6f3430598a72d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
